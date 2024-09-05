rtl.module("ServerLogging",["System","jsdelphisystem","Classes","Web","WEBLib.REST","JS","WEBLib.ExtCtrls","WEBLib.Controls","ServerLoggerCommon"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TLogSeverity = {"0": "lsUndefined", lsUndefined: 0, "1": "lsLog", lsLog: 1, "2": "lsInfo", lsInfo: 2, "3": "lsWarn", lsWarn: 3, "4": "lsError", lsError: 4};
  this.$rtti.$Enum("TLogSeverity",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TLogSeverity});
  rtl.createClass(this,"TServerLog",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FWorker = null;
      this.FEnabled = false;
      this.FOnError = null;
      this.FLogfileName = "";
      this.FServerURL = "";
      this.FSendInterval = 0;
      this.FCacheLines = 0;
      this.FEnvelopeJSON = "";
      this.FEnvelopeDataKey = "";
      this.FOnServerResponse = null;
      this.FRetries = 0;
      this.FOriginalLog = undefined;
      this.FOriginalInfo = undefined;
      this.FOriginalWarn = undefined;
      this.FOriginalError = undefined;
    };
    this.$final = function () {
      this.FWorker = undefined;
      this.FOnError = undefined;
      this.FOnServerResponse = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.RedirectConsoleOutput = function () {
      if (this.FEnabled) return;
      (function(instance) {
        var console = window.console;
        // Store original console methods if not already stored
        if (!instance.FOriginalLog) {
          instance.FOriginalLog = console.log.bind(console);
          instance.FOriginalInfo = console.info.bind(console);
          instance.FOriginalWarn = console.warn.bind(console);
          instance.FOriginalError = console.error.bind(console);
        }
        // Override console.log to send log messages to the logger
        console.log = function() {
          instance.FOriginalLog.apply(console, arguments);
          if (!instance.FEnabled) return;
          var output = Array.prototype.slice.call(arguments).join(' ');
          instance.HandleConsoleOutput(1, output);
        };
        // Override console.info to send log messages to the logger
        console.info = function() {
          instance.FOriginalInfo.apply(console, arguments);
          if (!instance.FEnabled) return;
          var output = Array.prototype.slice.call(arguments).join(' ');
          instance.HandleConsoleOutput(2, output);
        };
        // Override console.warn to send log messages to the logger
        console.warn = function() {
          instance.FOriginalWarn.apply(console, arguments);
          if (!instance.FEnabled) return;
          var output = Array.prototype.slice.call(arguments).join(' ');
          instance.HandleConsoleOutput(3, output);
        };
        // Override console.error to send log messages to the logger
        console.error = function() {
          instance.FOriginalError.apply(console, arguments);
          if (!instance.FEnabled) return;
          var output = Array.prototype.slice.call(arguments).join(' ');
          instance.HandleConsoleOutput(4, output);
        };
      })(this);
    };
    this.RestoreConsoleOutput = function () {
      if (!this.FEnabled) return;
      (function(instance) {
        var console = window.console;
        // Restore original console methods
        console.log = instance.FOriginalLog;
        console.info = instance.FOriginalInfo;
        console.warn = instance.FOriginalWarn;
        console.error = instance.FOriginalError;
      })(this);
    };
    this.CreateWorker = function () {
      var SelfReference = undefined;
      SelfReference = this;
      // Reference to this TServerLog instance
         const self = SelfReference;
      
         /*------   Define worker code   ------*/
      
         // This is the code that will run inside the web worker
         function workerCode() {
           // Variables to store log data, timer, and configuration settings
           let logBuffer = [];
           let logTimer = null;
           let sendInterval = 1000; // default to 1 second
           let cacheLines = 1000; // default cache size
           let serverURL = "";
           let logfileName = "";
           let enabled = false;
           let readyToSend = true;
           let retryCount = 0;
           let envelopeJSON = "";
           let envelopeDataKey = "";
           let hasResponseHandler = false;
           let messageHandlers = {}; // List to store callback functions
           let maxRetries = 0;
      
           // Function to post the log buffer to the server
           function postLogBuffer(bufferToSend) {
      
             // Do nothing if no logs or not ready
             if (bufferToSend.length === 0 || !enabled || !readyToSend) return;
      
             // Indicate (again) that sending is in progress
             readyToSend = false;
      
             // Create and configure an XMLHttpRequest to send the logs
             const xhr = new XMLHttpRequest();
             xhr.open("POST", serverURL, true);
             xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
             xhr.setRequestHeader("Cache-Control", "no-store");
      
             // Define the response handler. The execution will be async!
             xhr.onreadystatechange = function() {
      
               // Check if the request is complete
               if (xhr.readyState == 4) {
      
                 // Check if a custom response handler is defined
                 if (hasResponseHandler == true) {
      
                   // Get the response text. If no response text available, use the status text
                   const responseText = xhr.responseText ? xhr.responseText : xhr.statusText;
      
                   // Create a unique ID for the main thread to repond on
                   const messageId = Math.random().toString(36).substr(2, 9);
      
                   // Store the handler in messageHandlers
                   messageHandlers[messageId] = function(event) {
                     if (event.data.isSuccess) {
                       // Success case
                       bufferToSend = null;
                       retryCount = 0;
                       readyToSend = true;
                     } else {
                       // Error handling
                       retryCount++;
                       if (retryCount >= maxRetries) {
                         postMessage({ type: 'error', status: xhr.status, errorMsg: event.data.errorMsg });
                         postMessage({ type: 'state', enabled: false });
                       } else {
                         readyToSend = true;
                         postLogBuffer(bufferToSend);
                       }
                     }
                     delete messageHandlers[messageId]; // Clean up after handling
                   };
      
                   // Let the main thread evaluate the response by calling the
                   // OnServerResponse event handler
                   postMessage({ type: 'evaluateResponse', id: messageId, status: xhr.status, response: responseText });
      
                 } else {
                   // Do default response handling by just checking the status is 200
                   if (xhr.status == 200) {
      
                     // SUCCESS!
      
                     bufferToSend = null;
      
                     // Reset the retry counter
                     retryCount = 0;
      
                     // Indicate that the worker is ready to send again
                     readyToSend = true;
      
                   } else {
      
                     // ERROR!
      
                     // Increment the error retry counter
                     retryCount++;
      
                     // Check if the maximum number of error retries has been reached
                     if (retryCount >= maxRetries) {
      
                       // Yes, so this seems to be a major problem. Signal error and
                       // disable further sending.
      
                       // Get the error message from the last response
                       let errorMsg = xhr.responseText ? xhr.responseText : xhr.statusText;
      
                       // Notify the main thread about the error
                       postMessage({ type: 'error', status: xhr.status, errorMsg: errorMsg });
      
                       // Disable the worker
                       postMessage({ type: 'state', enabled: false });
      
                     } else {
      
                       // No, try again
      
                       // Indicate that the worker is ready to send again
                       readyToSend = true;
      
                       // Retry sending the logs
                       postLogBuffer(bufferToSend);
                     }
                   }
                 }
               }
             };
      
             // Prepare the data to be sent
             let data = JSON.stringify({ LogfileName: logfileName, Data: bufferToSend });
      
             // Wrap the data in an envelope if envelopeJSON and envelopeDataKey are not empty
             if (envelopeJSON && envelopeDataKey) {
      
               // Parse the envelopeJSON string into an object
               let envelopeObject = JSON.parse(envelopeJSON);
      
               // Assign the data to the specified property in the envelope object
               envelopeObject[envelopeDataKey] = JSON.parse(data);
      
               // Stringify the whole envelope object for sending
               data = JSON.stringify(envelopeObject);
             }
      
             // Send the data
             xhr.send(data);
      
             // Indicate that sending is in progress
             readyToSend = false;
           }
      
           // Function to handle incoming log entries
           function handleLogEntry(entry) {
             logBuffer.push(entry);
      
             // Do nothing if not enough logs or not ready
             if (logBuffer.length < cacheLines || !enabled || !readyToSend) return;
      
             const logBufferCopy = logBuffer.slice();
             logBuffer = [];
             postLogBuffer(logBufferCopy);
           }
      
           // Function to be called on timer
           function onTimer() {
             // Do nothing if no logs or not ready
             if (logBuffer.length === 0 || !enabled || !readyToSend) return;
      
             const logBufferCopy = logBuffer.slice();
             logBuffer = [];
             postLogBuffer(logBufferCopy);
           }
      
           // Clear buffers and reset states
           function Clear(isEnabled) {
             logBuffer = [];
             readyToSend = true;
             messageHandlers = {};
             enabled = isEnabled;
           }
      
           // Function to configure the worker
           function configureWorker(config) {
             if (config.serverURL) serverURL = config.serverURL;
             if (config.logfileName) logfileName = config.logfileName;
             if (config.cacheLines) cacheLines = config.cacheLines;
             if (config.enabled) Clear(config.enabled);
             if (config.envelopeDataKey) envelopeDataKey = config.envelopeDataKey;
             if (config.envelopeJSON) envelopeJSON = config.envelopeJSON;
             if (config.hasResponseHandler !== undefined) hasResponseHandler = config.hasResponseHandler;
             if (config.maxRetries) maxRetries = config.maxRetries;
             if (config.sendInterval)  {
               sendInterval = config.sendInterval;
               // Reset the timer with the new interval
               if (logTimer) clearInterval(logTimer);
               logTimer = setInterval(onTimer, sendInterval);
             }
           }
      
           // Message event handler for the worker
           onmessage = function(event) {
            try {
             const msg = event.data;
             switch (msg.type) {
      
                 // Handle configuration messages
                 case "config":
                     configureWorker(msg);
                     break;
      
                 // Handle log messages
                 case "log":
                     handleLogEntry(msg.entry);
                     break;
      
                 // Handle flush messages
                 case "flush":
                     postLogBuffer();
                     break;
      
                 // Handle custom response evaluation handler result
                 case "evaluationResult":
                     // Call the handler function for the specific message ID
                     if (messageHandlers[msg.id]) {
                       messageHandlers[msg.id](event);
                     } else {
                       throw new Error("Unknown message ID: " + msg.id);
                     }
                     break;
      
                 default:
                     throw new Error("Unknown message type: " + msg.type);
             }
            } catch (error) {
              // Notify the main thread about the error
              postMessage({ type: 'error', errorMsg: error.message });
            }
           }
         }
      
         /*------     Create worker      ------*/
      
         // Convert the worker function to a string and create a Blob from the string
         const blob = new Blob(["(" + workerCode.toString() + ")()"], { type: "application/javascript" });
      
         // Create a URL for the Blob
         const url = URL.createObjectURL(blob);
      
         // Create the worker from the Blob URL
         self.FWorker = new Worker(url);
      
         // Setup the worker's onmessage handler
         self.FWorker.onmessage = function(event) {
           self.OnWorkerMessage(event);
         };
      if (SelfReference == null) ;
    };
    this.PostLogToWorker = function (Level, Text) {
      var Entry = null;
      var Msg = null;
      Entry = new Object();
      Entry["Level"] = Level;
      Entry["Time"] = rtl.trunc(Date.now() / 1000);
      Entry["Msg"] = Text;
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_LOG;
      Msg["entry"] = Entry;
      this.FWorker.postMessage(Msg);
    };
    this.SetEnabled = function (Value) {
      var Msg = null;
      if (this.FEnabled === Value) return;
      if (Value) {
        this.RedirectConsoleOutput()}
       else this.RestoreConsoleOutput();
      this.FEnabled = Value;
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_CONFIG;
      Msg["enabled"] = this.FEnabled;
      this.FWorker.postMessage(Msg);
    };
    this.SetLogfileName = function (Value) {
      var Msg = null;
      this.CheckDisabled();
      if (this.FLogfileName === Value) return;
      this.FLogfileName = Value;
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_CONFIG;
      Msg["logfileName"] = this.FLogfileName;
      this.FWorker.postMessage(Msg);
    };
    this.SetServerURL = function (Value) {
      var Msg = null;
      var URL = "";
      this.CheckDisabled();
      if (pas.SysUtils.Trim(Value) === "") throw pas.SysUtils.Exception.$create("Create$1",["The server URL must not be empty"]);
      URL = $impl.ExpandServerURL(Value);
      if (this.FServerURL === URL) return;
      this.FServerURL = URL;
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_CONFIG;
      Msg["serverURL"] = this.FServerURL;
      this.FWorker.postMessage(Msg);
    };
    this.SetSendInterval = function (Value) {
      var Msg = null;
      this.CheckDisabled();
      if (this.FSendInterval === Value) return;
      this.FSendInterval = Value;
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_CONFIG;
      Msg["sendInterval"] = this.FSendInterval * 1000;
      this.FWorker.postMessage(Msg);
    };
    this.SetCacheLines = function (Value) {
      var Msg = null;
      this.CheckDisabled();
      if (this.FCacheLines === Value) return;
      this.FCacheLines = Value;
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_CONFIG;
      Msg["cacheLines"] = this.FCacheLines;
      this.FWorker.postMessage(Msg);
    };
    this.SetEnvelopeDataKey = function (Value) {
      this.CheckDisabled();
      if (this.FEnvelopeDataKey === pas.SysUtils.Trim(Value)) return;
      this.FEnvelopeDataKey = pas.SysUtils.Trim(Value);
      if ((this.FEnvelopeDataKey === "") || (this.FEnvelopeJSON === "")) return;
      this.SetEnvelope();
    };
    this.SetEnvelopeJSON = function (Value) {
      this.CheckDisabled();
      if (this.FEnvelopeJSON === pas.SysUtils.Trim(Value)) return;
      this.FEnvelopeJSON = pas.SysUtils.Trim(Value);
      if ((this.FEnvelopeDataKey === "") || (this.FEnvelopeJSON === "")) return;
      this.SetEnvelope();
    };
    this.SetEnvelope = function () {
      var Msg = null;
      var JO = null;
      var JV = undefined;
      JV = JSON.parse(this.FEnvelopeJSON);
      if (!rtl.isObject(JV)) throw pas.SysUtils.Exception.$create("Create$1",["EnvelopeJSON does not define a valid JSON object"]);
      JO = pas.JS.toObject(JV);
      if (!JO.hasOwnProperty(this.FEnvelopeDataKey)) throw pas.SysUtils.Exception.$create("Create$1",["The key specified in EnvelopeDataKey does not match any property of the " + "envelope JSON object"]);
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_CONFIG;
      Msg["envelopeDataKey"] = this.FEnvelopeDataKey;
      Msg["envelopeJSON"] = this.FEnvelopeJSON;
      this.FWorker.postMessage(Msg);
    };
    this.SetOnServerResponse = function (Value) {
      var Msg = null;
      this.CheckDisabled();
      if (rtl.eqCallback(this.FOnServerResponse,Value)) return;
      this.FOnServerResponse = Value;
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_CONFIG;
      Msg["hasResponseHandler"] = this.FOnServerResponse != null;
      this.FWorker.postMessage(Msg);
    };
    this.SetRetries = function (Value) {
      var Msg = null;
      this.CheckDisabled();
      if (this.FRetries === Value) return;
      this.FRetries = Value;
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_CONFIG;
      Msg["maxRetries"] = this.FRetries;
      this.FWorker.postMessage(Msg);
    };
    this.CheckDisabled = function () {
      if (this.FEnabled) throw pas.SysUtils.Exception.$create("Create$1",["Disable before changing properties!"]);
    };
    this.HandleConsoleOutput = function (Level, Msg) {
      this.PostLogToWorker(Level,Msg);
    };
    this.OnWorkerMessage = function (Event) {
      var Status = 0;
      var MsgType = "";
      var SvrResponse = "";
      var MsgID = "";
      var ErrorMsg = "";
      var ED = null;
      var RetMsg = null;
      var IsSuccess = false;
      ED = pas.JS.toObject(Event.data);
      MsgType = "" + ED["type"];
      if (MsgType === $impl.MSG_TYPE_EVRESP) {
        try {
          if (!(this.FOnServerResponse != null)) throw pas.SysUtils.Exception.$create("Create$1",["Server response handler missing"]);
          Status = rtl.trunc(ED["status"]);
          SvrResponse = "" + ED["response"];
          MsgID = "" + ED["id"];
          IsSuccess = false;
          ErrorMsg = "";
          this.FOnServerResponse(this,Status,SvrResponse,{get: function () {
              return IsSuccess;
            }, set: function (v) {
              IsSuccess = v;
            }},{get: function () {
              return ErrorMsg;
            }, set: function (v) {
              ErrorMsg = v;
            }});
          RetMsg = new Object();
          RetMsg["type"] = "evaluationResult";
          RetMsg["id"] = MsgID;
          RetMsg["isSuccess"] = IsSuccess;
          RetMsg["errorMsg"] = ErrorMsg;
          this.FWorker.postMessage(RetMsg);
        } catch ($e) {
          if (pas.SysUtils.Exception.isPrototypeOf($e)) {
            var E = $e;
            if (this.FOnError != null) this.FOnError(this,0,E.FMessage);
            this.SetEnabled(false);
          } else throw $e
        };
      } else if (MsgType === $impl.MSG_TYPE_ERROR) {
        Status = rtl.trunc(ED["status"]);
        ErrorMsg = "" + ED["errorMsg"];
        this.SetEnabled(false);
        if (this.FOnError != null) this.FOnError(this,Status,ErrorMsg);
      } else if (MsgType === $impl.MSG_TYPE_STATE) {
        if (ED.hasOwnProperty("enabled")) this.SetEnabled(!(ED["enabled"] == false));
      };
    };
    this.InitializeWorker = function () {
      // Initialize the worker with configuration
      this.FWorker.postMessage(
       {
         type: 'config',
         serverURL: this.FServerURL,
         logfileName: this.FLogfileName,
         cacheLines: this.FCacheLines,
         sendInterval: this.FSendInterval,
         enabled: this.FEnabled,
         envelopeDataKey: this.FEnvelopeDataKey,
         envelopeJSON: this.FEnvelopeJSON,
         maxRetries: this.FRetries
       }
      );
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FEnabled = false;
      this.CreateWorker();
      return this;
    };
    this.Create$2 = function (LogfileName, ServerURL, SendInterval, CacheLines) {
      pas.System.TObject.Create.call(this);
      this.FLogfileName = LogfileName;
      this.FSendInterval = SendInterval;
      this.FCacheLines = CacheLines;
      this.FServerURL = $impl.ExpandServerURL(ServerURL);
      this.FEnabled = false;
      this.CreateWorker();
      this.InitializeWorker();
      return this;
    };
    this.Destroy = function () {
      if (this.FOriginalLog == null) ;
      if (this.FOriginalInfo == null) ;
      if (this.FOriginalWarn == null) ;
      if (this.FOriginalError == null) ;
      this.FEnabled = false;
      this.FWorker.terminate;
      pas.System.TObject.Destroy.call(this);
    };
    this.Flush = function () {
      var Msg = null;
      Msg = new Object();
      Msg["type"] = $impl.MSG_TYPE_FLUSH;
      this.FWorker.postMessage(Msg);
    };
    this.ConsoleLog = function (Text) {
      if (this.FEnabled) {
        this.FOriginalLog.apply(console, [Text])}
       else window.console.log(Text);
    };
    this.ConsoleInfo = function (Text) {
      if (this.FEnabled) {
        this.FOriginalInfo.apply(console, [Text])}
       else window.console.info(Text);
    };
    this.ConsoleWarn = function (Text) {
      if (this.FEnabled) {
        this.FOriginalWarn.apply(console, [Text])}
       else window.console.warn(Text);
    };
    this.ConsoleError = function (Text) {
      if (this.FEnabled) {
        this.FOriginalError.apply(console, [Text])}
       else window.console.error(Text);
    };
    this.ConsoleLog$1 = function (Data, SepStr) {
      var Text = "";
      Text = $impl.ConstArrayToSepStr(SepStr,Data);
      if (Text === "") ;
      if (this.FEnabled) {
        this.FOriginalLog.apply(console, [Text])}
       else window.console.log(Text);
    };
    this.ConsoleInfo$1 = function (Data, SepStr) {
      var Text = "";
      Text = $impl.ConstArrayToSepStr(SepStr,Data);
      if (Text === "") ;
      if (this.FEnabled) {
        this.FOriginalInfo.apply(console, [Text])}
       else window.console.info(Text);
    };
    this.ConsoleWarn$1 = function (Data, SepStr) {
      var Text = "";
      Text = $impl.ConstArrayToSepStr(SepStr,Data);
      if (Text === "") ;
      if (this.FEnabled) {
        this.FOriginalWarn.apply(console, [Text])}
       else window.console.warn(Text);
    };
    this.ConsoleError$1 = function (Data, SepStr) {
      var Text = "";
      Text = $impl.ConstArrayToSepStr(SepStr,Data);
      if (Text === "") ;
      if (this.FEnabled) {
        this.FOriginalError.apply(console, [Text])}
       else window.console.error(Text);
    };
  });
  $mod.$implcode = function () {
    $impl.MSG_TYPE_CONFIG = "config";
    $impl.MSG_TYPE_LOG = "log";
    $impl.MSG_TYPE_FLUSH = "flush";
    $impl.MSG_TYPE_ERROR = "error";
    $impl.MSG_TYPE_STATE = "state";
    $impl.MSG_TYPE_EVRESP = "evaluateResponse";
    $impl.ConstArrayArgToStr = function (Arg) {
      var Result = "";
      var $tmp = Arg.VType;
      if ($tmp === 1) {
        Result = pas.SysUtils.BoolToStr(Arg.VJSValue,false)}
       else if ($tmp === 8) {
        Result = Arg.VJSValue.$classname}
       else if ($tmp === 12) {
        Result = pas.SysUtils.CurrToStr(Arg.VJSValue)}
       else if ($tmp === 3) {
        Result = pas.SysUtils.FloatToStr(Arg.VJSValue)}
       else if ($tmp === 0) {
        Result = pas.SysUtils.IntToStr(Arg.VJSValue)}
       else if ($tmp === 7) {
        Result = Arg.VJSValue.$classname}
       else if ($tmp === 18) {
        Result = Arg.VJSValue}
       else if ($tmp === 9) {
        Result = Arg.VJSValue}
       else {
        Result = "<unsupported data type>";
      };
      return Result;
    };
    $impl.ConstArrayToSepStr = function (SepChars, Args) {
      var Result = "";
      var I = 0;
      var SS = "";
      Result = "";
      if (rtl.length(Args) < 1) return Result;
      SS = "";
      for (var $l = 0, $end = rtl.length(Args) - 1; $l <= $end; $l++) {
        I = $l;
        if (I !== 0) SS = SS + SepChars;
        SS = SS + $impl.ConstArrayArgToStr(pas.System.TVarRec.$clone(Args[I]));
      };
      Result = SS;
      return Result;
    };
    $impl.ExpandServerURL = function (ServerURL) {
      var Result = "";
      var BaseURL = "";
      if ((pas.System.Pos("http://",ServerURL) === 0) && (pas.System.Pos("https://",ServerURL) === 0)) {
        // Construct the base URL from the current location
        BaseURL = window.location.protocol + "//" + window.location.host +
          window.location.pathname.substring(0,
          window.location.pathname.lastIndexOf('/') + 1);
        Result = BaseURL + ServerURL;
      } else Result = ServerURL;
      return Result;
    };
  };
},["SysUtils"]);
//# sourceMappingURL=ServerLogging.js.map
