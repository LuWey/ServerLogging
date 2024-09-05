unit ServerLogging;

(*
  ******************************************************************************
  * Unit ServerLogging
  *
  * Purpose:
  * This unit provides a logging mechanism that sends log messages to a server
  * asynchronously using web workers. It captures console log messages (log,
  * info, warn, error) and sends them to a specified server URL for storage or
  * further processing. The unit ensures that logs are sent in batches to reduce
  * the number of HTTP requests, and it handles retries and error notifications
  * in case of failures. Sending the logs is carried out even if the main thread
  * is busy, ensuring that logging is not interrupted by main thread activities.
  *
  * Implementation:
  *
  * - TServerLog Class: Manages the logging operations, configuration, and communication
  *   with the web worker.
  *
  * - Web Worker: A background task that processes log messages, sends them to the server,
  *   and handles retries on failures.
  *
  * - Configuration: The web worker is initialized with configuration parameters such as
  *   server URL, log file name, send interval, and cache size. The server URL is verified
  *   to be a full URL or is combined with the base URL of the current location.
  *
  * - Console Output Redirection: The console's log, info, warn, and error methods are
  *   overridden to capture messages and send them to the web worker as soon as Enabled
  *   is set to true.
  *
  * - Error Handling: The web worker posts error messages back to the main thread if the
  *   log submission fails after a defined number of retries. In addition, sending
  *   to the server will be stopped (Enabled=False), while the output to the console
  *   continues.
  *
  * - The data being sent to the server within the POST body is structured
  *   like this (the shown property values are for example only):
  *
  *   {
  *     "LogfileName": "test",
  *     "Data": [
  *       {
  *         "Level": 1,
  *         "Time": 1725184366,
  *         "Msg": "Hello World"
  *       },
  *       {... more }
  *     ]
  *   }
  *
  *   Parameters:
  *
  *    - LogfileName:
  *       This is the name of the file to write the log data into. Typically,
  *       the server creates a session specific file out of this, like so:
  *        $FileName = $LogfilePath . $LogfileName . '_' . session_id() . '.log';
  *
  *    - Data:
  *       Holds an array of lines to write to the file, each line represented by
  *       an object with these params:
  *         - Level:
  *            The severity level, defined by the specific console function used:
  *             console.log    => 1
  *             console.info   => 2
  *             console.warn   => 3
  *             console.error  => 4
  *         - Time:
  *            A UTC tim stamp when the message was created at the client side
  *         - Msg
  *            The actual message that was written using the console.xyz() function
  *
  * - A custom JSON envelope can be wrapped around the data packet using
  *   properties EnvelopeJSON and EnvelopeDataKey. Example:
  *
  *    - EnvelopeJSON:
  *       {
  *         "Function": "ClientLog",
  *         "foo": "bar",
  *         ....
  *         "LogData": null
  *       }
  *
  *     - EnvelopeDataKey: "LogData"
  *
  *   In this example, the actual data to write to the logfile is put into
  *   a JSON object defined by EnvelopeJSON, of which the property with the
  *   name "LogData" is used to hold the actual data to log. All other parts
  *   of the JSON object are custom and arbitrary. In this example, the packet
  *   arriving at the server side would then look like this (using the same
  *   data example as above):
  *
  *   {
  *     "Function": "ClientLog",
  *     "foo": "bar",
  *     ....
  *     "LogData": {
  *       "LogfileName": "Demo",
  *       "Data": [
  *         {"Level":1,"Time":1725184366,"Msg":"Hello World"}
  *       ]
  *    }
  *   }
  *
  *   The use case of this would be e.g. when the data is to be sent to an
  *   existing REST API endpoint that expects a certain data packet structure.
  *
  * Usage:
  * 1. Create an instance of TServerLog, specifying the log file name, server URL,
  *    send interval, and cache size.
  * 2. Use the provided methods (ConsoleLog, ConsoleInfo, ConsoleWarn, ConsoleError) to
  *    log messages directly to the console without sending them to the server.
  * 3. The logs captured by the overridden console methods are automatically batched
  *    and sent to the server at the specified interval or when the cache size is exceeded.
  * 4. The web worker handles the actual sending of log messages and retries in case of
  *    failures, notifying the main thread of any errors.
  *
  * Example:
  *
  * var Logger: TServerLog;
  * begin
  *  Logger := TServerLog.Create('MyLogfile', 'LogIt.php', 3, 1000);
  *
  *  Logger.Enabled := True;
  *  console.log('This log is written to both the console and the server');
  *  console.error('This error is written to both the console and the server');
  *
  *  // Even though Logger is enabled:
  *  Logger1.ConsoleLog('This log is written to the console only');
  *
  *  Logger.Enabled := False;
  *  console.log('This log is written to the console only');
  *  console.error('This error is written to the console only');
  *  Logger1.ConsoleLog('This log is written to the console only');
  *
  *  // ...
  *
  *  Logger.Free;
  * end;
  *
  * A component named TServerLogger that acts as a wrapper to the TServerLog class
  * is available as well.
  *
  ******************************************************************************
*)

interface

uses
 Jsdelphisystem, System.Classes, Web, WebLib.REST, JS, WEBLib.ExtCtrls,
 WEBLib.Controls, ServerLoggerCommon;

type
 // Enumeration for log severity levels
 TLogSeverity=(lsUndefined, lsLog, lsInfo, lsWarn, lsError);

 TServerLog=class
 private
  FWorker           : TJSWorker;            // Worker to handle logging in a separate thread
  FEnabled          : Boolean;              // Flag to indicate if server logging is enabled
  FOnError          : TServerLogErrorEvent; // Event to handle logging errors
  FLogfileName      : string;               // Name of the log file on the server side
  FServerURL        : string;               // URL of the server to send logs to
  FSendInterval     : Integer;              // Interval in seconds at which logs are sent
  FCacheLines       : Integer;              // Number of lines to cache before sending
  FEnvelopeJSON     : string;               // A JSON object used as an envelope for the POST body data
  FEnvelopeDataKey  : string;               // The name of an envelope field where to add logging payload
  FOnServerResponse : TServerResponseEvent; // Event to evaluate server responses
  FRetries          : Integer;              // Nr. of send retries after a send error

  // Storage for original console methods
  FOriginalLog: JSValue;
  FOriginalInfo: JSValue;
  FOriginalWarn: JSValue;
  FOriginalError: JSValue;

  // Redirect console output to the logger
  procedure RedirectConsoleOutput;

  // Restore original console methods
  procedure RestoreConsoleOutput;

  // Create and initialize the web worker
  procedure CreateWorker;

  // Post a log message to the worker
  procedure PostLogToWorker(Level: TLogSeverity; Text: string);

  // Enable or disable logging
  procedure SetEnabled(const Value: Boolean);

  // Set the log file name
  procedure SetLogfileName(const Value: string);

  // Set URL of the server to send logs to
  procedure SetServerURL(const Value: string);

  // Set interval (in seconds) at which logs are sent
  procedure SetSendInterval(const Value: Integer);

  // Set the number of lines to cache before sending
  procedure SetCacheLines(const Value: Integer);

  // Set a user defined POST body JSON envelope
  procedure SetEnvelopeDataKey(const Value: string);
  procedure SetEnvelopeJSON(const Value: string);
  procedure SetEnvelope;

  // Set a server response evaluation handler
  procedure SetOnServerResponse(const Value: TServerResponseEvent);

  // Set the maximum number of retries after sending to server failed
  procedure SetRetries(const Value: Integer);

  // Raises an exception when the logger is enabled
  procedure CheckDisabled;
 protected

  // Handle console output
  procedure HandleConsoleOutput(Level: TLogSeverity; Msg: string);

  // Handle messages from the worker
  procedure OnWorkerMessage(Event: TJSMessageEvent);

  // Initialize the worker with configuration
  procedure InitializeWorker;

 public

  // Constructor to initialize the TServerLog instance
  constructor Create; overload;
  constructor Create(LogfileName, ServerURL: string; SendInterval, CacheLines: Integer); overload;

  // Destructor to clean up resources
  destructor Destroy; override;

  // Property to enable or disable logging
  property Enabled: Boolean read FEnabled write SetEnabled;

  // Property to set the log file name
  property LogfileName: string read FLogfileName write SetLogfileName;

  // Property to set the nr. of send retries after a send error
  property Retries: Integer read FRetries write SetRetries;

  // Property to set the error event handler
  property OnError: TServerLogErrorEvent read FOnError write FOnError;

  // Property to set the server response evaluation handler
  property OnServerResponse: TServerResponseEvent read FOnServerResponse write SetOnServerResponse;

  // Property to set the JSON envelope to use for the POST body (opt.)
  // See more explanations above
  property EnvelopeJSON: string read FEnvelopeJSON write SetEnvelopeJSON;
  property EnvelopeDataKey: string read FEnvelopeDataKey write SetEnvelopeDataKey;

  // Property to set the URL of the server to send logs to
  property ServerURL: string read FServerURL write SetServerURL;

  // Property to set the interval (in seconds) at which logs are sent
  property SendInterval: Integer read FSendInterval write SetSendInterval;

  // Property to set the size of the log buffer before sending
  property CacheLines: Integer read FCacheLines write SetCacheLines;

  // Flush the log buffer. Force sending any remaining logs to the
  // server immediately.
  procedure Flush;

  // The following methods bypass sending logs to the server and only
  // output the text to the browser console, regardless of whether server
  // logging is enabled or not. DISADVANTAGE: The position of the source
  // code that is output to the console is not retained.
  procedure ConsoleLog(Text: string); overload;
  procedure ConsoleInfo(Text: string); overload;
  procedure ConsoleWarn(Text: string); overload;
  procedure ConsoleError(Text: string); overload;
  procedure ConsoleLog(const Data: array of const; SepStr: string=''); overload;
  procedure ConsoleInfo(const Data: array of const; SepStr: string=''); overload;
  procedure ConsoleWarn(const Data: array of const; SepStr: string=''); overload;
  procedure ConsoleError(const Data: array of const; SepStr: string=''); overload;
 end;

 {##############################################################################}

implementation

uses System.SysUtils;

const
 MSG_TYPE_CONFIG = 'config';
 MSG_TYPE_LOG    = 'log';
 MSG_TYPE_FLUSH  = 'flush';
 MSG_TYPE_ERROR  = 'error';
 MSG_TYPE_STATE  = 'state';
 MSG_TYPE_EVRESP = 'evaluateResponse';

 {------------------------------------}

 // Helper function to convert a TVarRec (variant record) to a string
function ConstArrayArgToStr(Arg: TVarRec): string;
begin
 with Arg do
  case VType of
   vtBoolean:
    Result := BoolToStr(VBoolean);
   vtClass:
    Result := VClass.ClassName;
   vtCurrency:
    Result := CurrToStr(VCurrency{$IFDEF WIN32}^{$ENDIF});
   vtExtended:
    Result := FloatToStr(VExtended{$IFDEF WIN32}^{$ENDIF});
   vtInteger:
    Result := IntToStr(VInteger);
   vtObject:
    Result := VObject.ClassName;
   vtUnicodeString:
    Result := UnicodeString(VUnicodeString);
   vtWideChar:
    Result := VWideChar;
  else
   Result := '<unsupported data type>';
  end;
end;

{------------------------------------}

// Helper function to convert an array of TVarRec to a single string with separators
function ConstArrayToSepStr(SepChars: string; const Args: array of const): string;
var
 I  : Integer;
 SS : string;
begin
 Result := '';
 if Length(Args)<1 then exit;
 SS := '';
 for I := 0 to High(Args) do
  begin
   if I<>0 then
    SS := SS+SepChars;
   SS := SS+ConstArrayArgToStr(Args[I]);
  end;
 Result := SS;
end;

{------------------------------------}

function ExpandServerURL(ServerURL: string): string;
var BaseURL: string;
begin
 // Check if ServerURL is a complete URL or just a script name
 if (Pos('http://', ServerURL)=0)and(Pos('https://', ServerURL)=0) then
  begin
   {$IFDEF PAS2JS}
    asm
     // Construct the base URL from the current location
     BaseURL = window.location.protocol + "//" + window.location.host +
       window.location.pathname.substring(0,
       window.location.pathname.lastIndexOf('/') + 1);
    end;
   {$ENDIF}
   // Append the script name to the base URL
   Result := BaseURL+ServerURL;
  end
 else
  // Use the complete URL directly
  Result := ServerURL;
end;

{------------------------------------}

constructor TServerLog.Create;
begin
 inherited Create;

 // Create initially disabled
 FEnabled := False;

 // Create and initialize the worker
 CreateWorker;
end;

{------------------------------------}

constructor TServerLog.Create(LogfileName, ServerURL: string; SendInterval, CacheLines: Integer);
begin
 inherited Create;

 FLogfileName  := LogfileName;
 FSendInterval := SendInterval;
 FCacheLines   := CacheLines;
 FServerURL    := ExpandServerURL(ServerURL);

 // Create initially disabled
 FEnabled := False;

 // Create and initialize the worker
 CreateWorker;

 // Call this from external on button click to enable debugging in devtools
 InitializeWorker;
end;

{------------------------------------}

destructor TServerLog.Destroy;
begin
 // LSP and compiler honey
 if FOriginalLog=nil then;
 if FOriginalInfo=nil then;
 if FOriginalWarn=nil then;
 if FOriginalError=nil then;

 // Disable logging
 FEnabled := False;

 // Terminate the worker
 {$IFDEF PAS2JS} asm this.FWorker.terminate end; {$ENDIF};

 inherited Destroy;
end;

{------------------------------------}

// Creates a web worker and initializes it
procedure TServerLog.CreateWorker;
var SelfReference: JSValue;
begin
 SelfReference := Self;
 {$IFDEF PAS2JS}
  asm
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
  end;
 {$ENDIF}

 // Needs to be put here or else LSP freaks out...
 if SelfReference=nil then;
end;

{------------------------------------}

// Initialize the worker with configuration
procedure TServerLog.InitializeWorker;
begin
 {$IFDEF PAS2JS}
  asm
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
  end;
 {$ENDIF}
end;

{------------------------------------}

// Post a log message to the worker
procedure TServerLog.PostLogToWorker(Level: TLogSeverity; Text: string);
var Entry, Msg: TJSObject;
begin
 Entry := TJSObject.New;
 Entry['Level'] := Ord(Level);
 Entry['Time']  := TJSDate.now div 1000;
 Entry['Msg']   := Text;

 Msg := TJSObject.New;
 Msg['type']  := MSG_TYPE_LOG;
 Msg['entry'] := Entry;

 FWorker.postMessage(Msg);
end;

{------------------------------------}

// Handle messages from the worker
procedure TServerLog.OnWorkerMessage(Event: TJSMessageEvent);
var
 Status      : Integer;
 MsgType,
 SvrResponse,
 MsgID,
 ErrorMsg    : string;
 ED, RetMsg  : TJSObject;
 IsSuccess   : Boolean;
begin
 ED := toObject(Event.Data);
 MsgType := string(ED['type']);

 if MsgType=MSG_TYPE_EVRESP then
  begin
   try
    // As the FOnServerResponse assignment is already checked
    // in the worker, this should not really happen...
    if not assigned(FOnServerResponse) then raise Exception.Create(
      'Server response handler missing');

    // Get HTTP status and response text from the server response
    Status := Integer(ED['status']);
    SvrResponse := string(ED['response']);
    MsgId := string(ED['id']);

    // Execute the user defined server response evaluation handler
    IsSuccess := False; ErrorMsg := '';
    FOnServerResponse(Self, Status, SvrResponse, IsSuccess, ErrorMsg);

    // Send the evaluation result back to the worker
    RetMsg := TJSObject.New;
    RetMsg['type'] := 'evaluationResult';
    RetMsg['id'] := MsgId;
    RetMsg['isSuccess'] := IsSuccess;
    RetMsg['errorMsg'] := ErrorMsg;
    FWorker.postMessage(RetMsg);
   except on E: Exception do
    begin
     if Assigned(FOnError) then
      FOnError(Self, 0, E.Message);
     SetEnabled(False);
    end;
   end;
  end

 else if MsgType=MSG_TYPE_ERROR then
  begin
   Status := Integer(ED['status']);
   ErrorMsg := string(ED['errorMsg']);
   SetEnabled(False);
   if Assigned(FOnError) then
    FOnError(Self, Status, ErrorMsg);
  end

 else if MsgType=MSG_TYPE_STATE then
  begin
   if ED.hasOwnProperty('enabled') then
    SetEnabled(Boolean(ED['enabled']));
  end;
end;

{------------------------------------}

procedure TServerLog.CheckDisabled;
begin
 if FEnabled then raise Exception.Create(
  'Disable before changing properties!')
end;

{------------------------------------}

// Enable or disable logging
procedure TServerLog.SetEnabled(const Value: Boolean);
var Msg: TJSObject;
begin
 if FEnabled=Value then exit;

 if Value then RedirectConsoleOutput
 else RestoreConsoleOutput;
 FEnabled := Value;

 Msg := TJSObject.New;
 Msg['type'] := MSG_TYPE_CONFIG;
 Msg['enabled'] := FEnabled;
 FWorker.postMessage(Msg);
end;

{------------------------------------}

procedure TServerLog.SetEnvelopeDataKey(const Value: string);
begin
 CheckDisabled;
 if FEnvelopeDataKey=Trim(Value) then exit;
 FEnvelopeDataKey := Trim(Value);
 if (FEnvelopeDataKey='')or(FEnvelopeJSON='') then exit;
 SetEnvelope;
end;

{------------------------------------}

procedure TServerLog.SetEnvelopeJSON(const Value: string);
begin
 CheckDisabled;
 if FEnvelopeJSON=Trim(Value) then exit;
 FEnvelopeJSON := Trim(Value);
 if (FEnvelopeDataKey='')or(FEnvelopeJSON='') then exit;
 SetEnvelope;
end;

{------------------------------------}

procedure TServerLog.SetEnvelope;
var
 Msg,JO : TJSObject;
 JV     : TJSValue;
begin
 JV := TJSJSON.parse(FEnvelopeJSON);
 if not isObject(JV) then raise Exception.Create(
   'EnvelopeJSON does not define a valid JSON object');

 JO := toObject(JV);
 if not JO.hasOwnProperty(FEnvelopeDataKey) then raise Exception.Create(
   'The key specified in EnvelopeDataKey does not match any property of the '+
   'envelope JSON object');

 Msg := TJSObject.New;
 Msg['type']            := MSG_TYPE_CONFIG;
 Msg['envelopeDataKey'] := FEnvelopeDataKey;
 Msg['envelopeJSON']    := FEnvelopeJSON;
 FWorker.postMessage(Msg);
end;

{------------------------------------}

// Set the server resources URL that receives the log messages and
// (typicall) writes them to a file (typically a PHP script)
procedure TServerLog.SetServerURL(const Value: string);
var
 Msg : TJSObject;
 URL : string;
begin
 CheckDisabled;
 if Trim(Value)='' then raise Exception.Create(
   'The server URL must not be empty');

 URL := ExpandServerURL(Value);
 if FServerURL=URL then exit;
 FServerURL := URL;

 Msg := TJSObject.New;
 Msg['type']      := MSG_TYPE_CONFIG;
 Msg['serverURL'] := FServerURL;
 FWorker.postMessage(Msg);
end;

{------------------------------------}

// Set the log file name
procedure TServerLog.SetLogfileName(const Value: string);
var Msg: TJSObject;
begin
 CheckDisabled;
 if FLogfileName=Value then exit;
 FLogfileName := Value;

 Msg := TJSObject.New;
 Msg['type']        := MSG_TYPE_CONFIG;
 Msg['logfileName'] := FLogfileName;
 FWorker.postMessage(Msg);
end;

{------------------------------------}

procedure TServerLog.SetOnServerResponse(const Value: TServerResponseEvent);
var Msg: TJSObject;
begin
 CheckDisabled;
 if {$IFDEF WIN32}@{$ENDIF}FOnServerResponse={$IFDEF WIN32}@{$ENDIF}Value then exit;
 FOnServerResponse := Value;

 Msg := TJSObject.New;
 Msg['type']               := MSG_TYPE_CONFIG;
 Msg['hasResponseHandler'] := assigned(FOnServerResponse);
 FWorker.postMessage(Msg);
end;

{------------------------------------}

procedure TServerLog.SetRetries(const Value: Integer);
var Msg: TJSObject;
begin
 CheckDisabled;
 if FRetries=Value then exit;
 FRetries := Value;

 Msg := TJSObject.New;
 Msg['type']       := MSG_TYPE_CONFIG;
 Msg['maxRetries'] := FRetries;
 FWorker.postMessage(Msg);
end;

{------------------------------------}

// Set the send buffer size in number of messages. When reached, the
// whole message buffer will be transfered to the server, even if the
// timer interval may at this time not be exceeded
procedure TServerLog.SetCacheLines(const Value: Integer);
var Msg: TJSObject;
begin
 CheckDisabled;
 if FCacheLines=Value then exit;
 FCacheLines := Value;

 Msg := TJSObject.New;
 Msg['type']       := MSG_TYPE_CONFIG;
 Msg['cacheLines'] := FCacheLines;
 FWorker.postMessage(Msg);
end;

{------------------------------------}

// Set the send interval in seconds after which the send buffer will be sent
// to the server.
procedure TServerLog.SetSendInterval(const Value: Integer);
var Msg: TJSObject;
begin
 CheckDisabled;
 if FSendInterval=Value then exit;
 FSendInterval := Value;

 Msg := TJSObject.New;
 Msg['type']         := MSG_TYPE_CONFIG;
 Msg['sendInterval'] := FSendInterval*1000;
 FWorker.postMessage(Msg);
end;

{------------------------------------}

// Flush (send to server) the log buffer prematurely
procedure TServerLog.Flush;
var Msg: TJSObject;
begin
 Msg := TJSObject.New;
 Msg['type'] := MSG_TYPE_FLUSH;
 FWorker.postMessage(Msg);
end;

{------------------------------------}

// Handle console output by posting log messages to the worker
procedure TServerLog.HandleConsoleOutput(Level: TLogSeverity; Msg: string);
begin
 PostLogToWorker(Level, Msg);
end;

{------------------------------------}

procedure TServerLog.RedirectConsoleOutput;
begin
 // Exit, if already redirected
 if FEnabled then Exit;
 {$IFDEF PAS2JS}
  asm
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
  end;
 {$ENDIF}
end;


{------------------------------------}

procedure TServerLog.RestoreConsoleOutput;
begin
 // Not redirected, nothing to restore
 if not FEnabled then Exit;

 {$IFDEF PAS2JS}
  asm
   (function(instance) {
     var console = window.console;
     // Restore original console methods
     console.log = instance.FOriginalLog;
     console.info = instance.FOriginalInfo;
     console.warn = instance.FOriginalWarn;
     console.error = instance.FOriginalError;
   })(this);
  end;
 {$ENDIF}
end;

{------------------------------------}

// The following methods bypass sending logs to the server and only
// output the text to the browser console, regardless of whether server
// logging is enabled or not. DISADVANTAGE: The position of the source
// code that is output to the console is not retained.

procedure TServerLog.ConsoleLog(const Data: array of const; SepStr: string='');
var Text: string;
begin
 Text := ConstArrayToSepStr(SepStr, Data); if Text='' then ;
 if FEnabled then {$IFDEF PAS2JS} asm this.FOriginalLog.apply(console, [Text]) end {$ENDIF}
 else Console.log(Text)
end;

procedure TServerLog.ConsoleLog(Text: string);
begin
 if FEnabled then {$IFDEF PAS2JS} asm this.FOriginalLog.apply(console, [Text]) end {$ENDIF}
 else Console.log(Text)
end;

procedure TServerLog.ConsoleError(const Data: array of const; SepStr: string='');
var Text: string;
begin
 Text := ConstArrayToSepStr(SepStr, Data); if Text='' then ;
 if FEnabled then {$IFDEF PAS2JS} asm this.FOriginalError.apply(console, [Text]) end {$ENDIF}
 else Console.error(Text)
end;

procedure TServerLog.ConsoleError(Text: string);
begin
 if FEnabled then {$IFDEF PAS2JS} asm this.FOriginalError.apply(console, [Text]) end {$ENDIF}
 else Console.error(Text)
end;

procedure TServerLog.ConsoleInfo(const Data: array of const; SepStr: string='');
var Text: string;
begin
 Text := ConstArrayToSepStr(SepStr, Data); if Text='' then ;
 if FEnabled then {$IFDEF PAS2JS} asm this.FOriginalInfo.apply(console, [Text]) end {$ENDIF}
 else Console.info(Text)
end;

procedure TServerLog.ConsoleInfo(Text: string);
begin
 if FEnabled then {$IFDEF PAS2JS} asm this.FOriginalInfo.apply(console, [Text]) end {$ENDIF}
 else Console.info(Text)
end;

procedure TServerLog.ConsoleWarn(const Data: array of const; SepStr: string='');
var Text: string;
begin
 Text := ConstArrayToSepStr(SepStr, Data); if Text='' then ;
 if FEnabled then {$IFDEF PAS2JS} asm this.FOriginalWarn.apply(console, [Text]) end {$ENDIF}
 else Console.warn(Text)
end;

procedure TServerLog.ConsoleWarn(Text: string);
begin
 if FEnabled then {$IFDEF PAS2JS} asm this.FOriginalWarn.apply(console, [Text]) end {$ENDIF}
 else Console.warn(Text)
end;

{------------------------------------}

end.
