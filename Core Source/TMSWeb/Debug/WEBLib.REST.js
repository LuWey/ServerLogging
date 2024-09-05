rtl.module("WEBLib.REST",["System","Classes","Web","JS","SysUtils","WEBLib.Controls","WEBLib.JSON"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.ContentTypeJSON = "application/json;charset=UTF-8";
  this.ContentTypeForm = "application/x-www-form-urlencoded";
  this.THTTPCommand = {"0": "httpGET", httpGET: 0, "1": "httpPOST", httpPOST: 1, "2": "httpPUT", httpPUT: 2, "3": "httpDELETE", httpDELETE: 3, "4": "httpHEAD", httpHEAD: 4, "5": "httpPATCH", httpPATCH: 5, "6": "httpCUSTOM", httpCUSTOM: 6};
  this.$rtti.$Enum("THTTPCommand",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.THTTPCommand});
  this.THTTPRequestResponseType = {"0": "rtDefault", rtDefault: 0, "1": "rtText", rtText: 1, "2": "rtBlob", rtBlob: 2, "3": "rtJSON", rtJSON: 3, "4": "rtDocument", rtDocument: 4, "5": "rtArrayBuffer", rtArrayBuffer: 5};
  this.$rtti.$Enum("THTTPRequestResponseType",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.THTTPRequestResponseType});
  this.$rtti.$RefToProcVar("THTTPResponseProc",{procsig: rtl.newTIProcSig([["AResponse",rtl.string],["ARequest",pas.Web.$rtti["TJSXMLHttpRequest"]]])});
  this.$rtti.$RefToProcVar("THTTPErrorProc",{procsig: rtl.newTIProcSig([["ARequest",pas.Web.$rtti["TJSXMLHttpRequest"]]])});
  this.$rtti.$RefToProcVar("THTTPRequestHandler",{procsig: rtl.newTIProcSig([["Event",pas.Web.$rtti["TJSEvent"]]])});
  this.$rtti.$MethodVar("THTTPProgressEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Position",rtl.nativeint],["Total",rtl.nativeint]]), methodkind: 0});
  rtl.createClass(this,"THttpRequest",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FURL = "";
      this.FOnResponse = null;
      this.FOnAbort = null;
      this.FHeaders = null;
      this.FCommand = 0;
      this.FCustomCommand = "";
      this.FPostData = "";
      this.FOnRequestResponse = null;
      this.FPassword = "";
      this.FUser = "";
      this.FTimeout = 0;
      this.FOnTimeout = null;
      this.FOnError = null;
      this.FResponse = null;
      this.FErrorProc = null;
      this.FTimeOutProc = null;
      this.FResponseType = 0;
      this.FOnProgress = null;
    };
    this.$final = function () {
      this.FOnResponse = undefined;
      this.FOnAbort = undefined;
      this.FHeaders = undefined;
      this.FOnRequestResponse = undefined;
      this.FOnTimeout = undefined;
      this.FOnError = undefined;
      this.FResponse = undefined;
      this.FErrorProc = undefined;
      this.FTimeOutProc = undefined;
      this.FOnProgress = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.HandleResponse = function (Event) {
      var Result = false;
      var s = "";
      var LRequestRec = pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$new();
      LRequestRec.req = Event.target;
      s = "";
      if (this.FResponseType in rtl.createSet($mod.THTTPRequestResponseType.rtText,$mod.THTTPRequestResponseType.rtDefault)) {
        s = Event.target.responseText;
      };
      if (this.FOnRequestResponse != null) {
        this.FOnRequestResponse(this,pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$clone(LRequestRec),s);
      };
      if (this.FOnResponse != null) this.FOnResponse(this,s);
      if (this.FResponse != null) {
        this.FResponse(s,LRequestRec.req);
      };
      Result = true;
      return Result;
    };
    this.HandleAbort = function (Event) {
      var Result = false;
      if (this.FOnAbort != null) this.FOnAbort(this);
      Result = true;
      return Result;
    };
    this.HandleTimeout = function (Event) {
      var Result = false;
      if (this.FOnTimeout != null) this.FOnTimeout(this);
      if (this.FTimeOutProc != null) this.FTimeOutProc(Event.target);
      Result = true;
      return Result;
    };
    this.HandleError = function (Event) {
      var Result = false;
      var Handled = false;
      var LEventRec = pas["WEBLib.Controls"].TJSEventRecord.$new();
      var LRequestRec = pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$new();
      Result = true;
      Handled = false;
      if (this.FOnError != null) {
        LEventRec.event = Event;
        LRequestRec.req = Event.target;
        this.FOnError(this,pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$clone(LRequestRec),pas["WEBLib.Controls"].TJSEventRecord.$clone(LEventRec),{get: function () {
            return Handled;
          }, set: function (v) {
            Handled = v;
          }});
      };
      if (this.FErrorProc != null) this.FErrorProc(LRequestRec.req);
      if (!Handled) throw pas.SysUtils.Exception.$create("Create$1",["HTTP request error @" + this.FURL]);
      return Result;
    };
    this.HandleProgress = function (Event) {
      var Result = false;
      var position = 0;
      var total = 0;
      Result = true;
      position = Event.loaded;
      total = Event.total;
      if (this.FOnProgress != null) this.FOnProgress(this,position,total);
      return Result;
    };
    this.HandleReadyStateChange = function (Event) {
      var Result = false;
      var LRequestRec = pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$new();
      var sz = "";
      Result = true;
      LRequestRec.req = Event.target;
      if (LRequestRec.req.readyState === 4) {
        if ((LRequestRec.req.status >= 200) && (LRequestRec.req.status < 300)) {
          sz = LRequestRec.req.getResponseHeader("Content-Length");
          if (this.FResponse != null) {
            this.FResponse(sz,LRequestRec.req);
          };
        } else if (this.FErrorProc != null) this.FErrorProc(LRequestRec.req);
      };
      return Result;
    };
    this.SetHeaders = function (AValue) {
      this.FHeaders.Assign(AValue);
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      this.FHeaders = pas.Classes.TStringList.$create("Create$1");
      this.FResponseType = $mod.THTTPRequestResponseType.rtDefault;
      this.FCommand = $mod.THTTPCommand.httpGET;
      this.FTimeout = 0;
      this.FResponse = null;
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FHeaders");
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.Loaded = function () {
      var i = 0;
      var j = 0;
      var s = "";
      var flg = false;
      pas.Classes.TComponent.Loaded.call(this);
      for (var $l = 0, $end = this.FHeaders.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        s = this.FHeaders.Get(i);
        flg = false;
        for (var $l1 = 1, $end1 = s.length; $l1 <= $end1; $l1++) {
          j = $l1;
          if ((s.charAt(j - 1) === ":") && !flg) {
            s = rtl.setCharAt(s,j - 1,"=");
            flg = true;
          } else if ((s.charAt(j - 1) === "=") && flg) {
            s = rtl.setCharAt(s,j - 1,":");
          };
        };
        this.FHeaders.Put(i,s);
      };
    };
    this.GetResponseType = function (AResponseType) {
      var Result = "";
      Result = "";
      var $tmp = AResponseType;
      if ($tmp === $mod.THTTPRequestResponseType.rtText) {
        Result = "text"}
       else if ($tmp === $mod.THTTPRequestResponseType.rtBlob) {
        Result = "blob"}
       else if ($tmp === $mod.THTTPRequestResponseType.rtDocument) {
        Result = "document"}
       else if ($tmp === $mod.THTTPRequestResponseType.rtJSON) {
        Result = "json"}
       else if ($tmp === $mod.THTTPRequestResponseType.rtArrayBuffer) Result = "arraybuffer";
      return Result;
    };
    this.ExecuteSizeRequest = function (AResponse, AError, ATimeOut) {
      var i = 0;
      var req = null;
      var headname = "";
      var headvalue = "";
      this.FResponse = AResponse;
      this.FErrorProc = AError;
      this.FTimeOutProc = ATimeOut;
      req = new XMLHttpRequest();
      req.addEventListener("readystatechange",rtl.createSafeCallback(this,"HandleReadyStateChange"));
      req.addEventListener("timeout",rtl.createSafeCallback(this,"HandleTimeout"));
      req.addEventListener("error",rtl.createSafeCallback(this,"HandleError"));
      if (this.FTimeout !== 0) req.timeout = this.FTimeout;
      if (this.FUser !== "") {
        req.open("HEAD",this.FURL,true,this.FUser,this.FPassword);
        req.setRequestHeader("X-Requested-With","XMLHttpRequest");
      } else req.open("HEAD",this.FURL);
      for (var $l = 0, $end = this.FHeaders.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.FHeaders.GetNameValue(i,{get: function () {
            return headname;
          }, set: function (v) {
            headname = v;
          }},{get: function () {
            return headvalue;
          }, set: function (v) {
            headvalue = v;
          }});
        req.setRequestHeader(headname,headvalue);
      };
      if (this.FUser !== "") req.setRequestHeader("Authorization","Basic " + window.btoa(this.FUser + ":" + this.FPassword));
      req.send();
    };
    this.Execute = function (AResponse) {
      this.Execute$2(AResponse,null,null);
    };
    this.Execute$1 = function (AResponse, AError) {
      this.Execute$2(AResponse,AError,null);
    };
    this.Execute$2 = function (AResponse, AError, ATimeOut) {
      var i = 0;
      var cmd = "";
      var req = null;
      var headname = "";
      var headvalue = "";
      this.FResponse = AResponse;
      this.FErrorProc = AError;
      this.FTimeOutProc = ATimeOut;
      req = new XMLHttpRequest();
      req.addEventListener("load",rtl.createSafeCallback(this,"HandleResponse"));
      req.addEventListener("abort",rtl.createSafeCallback(this,"HandleAbort"));
      req.addEventListener("timeout",rtl.createSafeCallback(this,"HandleTimeout"));
      req.addEventListener("error",rtl.createSafeCallback(this,"HandleError"));
      req.addEventListener("progress",rtl.createSafeCallback(this,"HandleProgress"));
      req.responseType = $mod.THttpRequest.GetResponseType(this.FResponseType);
      cmd = $mod.HTTPCommand(this.FCommand,this.FCustomCommand);
      if (this.FTimeout !== 0) req.timeout = this.FTimeout;
      if (this.FUser !== "") {
        req.open(cmd,this.FURL,true);
        req.setRequestHeader("X-Requested-With","XMLHttpRequest");
      } else req.open(cmd,this.FURL);
      for (var $l = 0, $end = this.FHeaders.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.FHeaders.GetNameValue(i,{get: function () {
            return headname;
          }, set: function (v) {
            headname = v;
          }},{get: function () {
            return headvalue;
          }, set: function (v) {
            headvalue = v;
          }});
        req.setRequestHeader(headname,headvalue);
      };
      if (this.FUser !== "") req.setRequestHeader("Authorization","Basic " + window.btoa(this.FUser + ":" + this.FPassword));
      if (this.FPostData !== "") {
        req.send(this.FPostData)}
       else req.send();
    };
    this.GetSize = function () {
      var $Self = this;
      var Result = null;
      var sz = 0;
      var e = 0;
      Result = new Promise(function (ASuccess, AFailed) {
        $Self.ExecuteSizeRequest(function (AResponse, ARequest) {
          pas.System.val(AResponse,{get: function () {
              return sz;
            }, set: function (v) {
              sz = v;
            }},{get: function () {
              return e;
            }, set: function (v) {
              e = v;
            }});
          ASuccess(sz);
        },function (ARequest) {
          AFailed(0);
        },function (ARequest) {
          AFailed(ARequest);
        });
      });
      return Result;
    };
    this.Perform = function () {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (ASuccess, AFailed) {
        $Self.Execute$2(function (AResponse, ARequest) {
          ASuccess(ARequest);
        },function (ARequest) {
          AFailed(ARequest);
        },function (ARequest) {
          AFailed(ARequest);
        });
      });
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Command",0,$mod.$rtti["THTTPCommand"],"FCommand","FCommand");
    $r.addProperty("CustomCommand",0,rtl.string,"FCustomCommand","FCustomCommand");
    $r.addProperty("Headers",2,pas.Classes.$rtti["TStringList"],"FHeaders","SetHeaders");
    $r.addProperty("Password",0,rtl.string,"FPassword","FPassword");
    $r.addProperty("PostData",0,rtl.string,"FPostData","FPostData");
    $r.addProperty("ResponseType",0,$mod.$rtti["THTTPRequestResponseType"],"FResponseType","FResponseType",{Default: $mod.THTTPRequestResponseType.rtDefault});
    $r.addProperty("Timeout",0,rtl.longint,"FTimeout","FTimeout",{Default: 0});
    $r.addProperty("URL",0,rtl.string,"FURL","FURL");
    $r.addProperty("User",0,rtl.string,"FUser","FUser");
    $r.addProperty("OnError",0,pas["WEBLib.Controls"].$rtti["THTTPErrorEvent"],"FOnError","FOnError");
    $r.addProperty("OnAbort",0,pas["WEBLib.Controls"].$rtti["THTTPAbortEvent"],"FOnAbort","FOnAbort");
    $r.addProperty("OnProgress",0,$mod.$rtti["THTTPProgressEvent"],"FOnProgress","FOnProgress");
    $r.addProperty("OnRequestResponse",0,pas["WEBLib.Controls"].$rtti["THTTPRequestResponseEvent"],"FOnRequestResponse","FOnRequestResponse");
    $r.addProperty("OnResponse",0,pas["WEBLib.Controls"].$rtti["THTTPResponseEvent"],"FOnResponse","FOnResponse");
    $r.addProperty("OnTimeout",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnTimeout","FOnTimeout");
  });
  rtl.createClass(this,"TWebHTTPRequest",this.THttpRequest,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$MethodVar("THttpResponse",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AResponse",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TInternalHttpResponse",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AResponse",rtl.string],["Handled",rtl.boolean,1]]), methodkind: 0});
  rtl.createClass(this,"TPersistTokens",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FKey = "";
      this.FEnabled = false;
    };
    this.Create$1 = function () {
      this.FEnabled = false;
      this.FKey = "";
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TPersistTokens.isPrototypeOf(Source)) {
        this.FKey = rtl.as(Source,$mod.TPersistTokens).FKey;
        this.FEnabled = rtl.as(Source,$mod.TPersistTokens).FEnabled;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Key",0,rtl.string,"FKey","FKey");
    $r.addProperty("Enabled",0,rtl.boolean,"FEnabled","FEnabled",{Default: false});
  });
  rtl.createClass(this,"TRESTApp",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FKey = "";
      this.FCallbackURL = "";
      this.FSecret = "";
      this.FAuthURL = "";
      this.FClientID = "";
    };
    this.GetKey = function () {
      var Result = "";
      if ((this.FKey !== "") && (this.FClientID === "")) {
        Result = this.FKey}
       else Result = this.FClientID;
      return Result;
    };
    this.Assign = function (Source) {
      if ($mod.TRESTApp.isPrototypeOf(Source)) {
        this.FKey = rtl.as(Source,$mod.TRESTApp).FKey;
        this.FClientID = rtl.as(Source,$mod.TRESTApp).FClientID;
        this.FCallbackURL = rtl.as(Source,$mod.TRESTApp).FCallbackURL;
        this.FSecret = rtl.as(Source,$mod.TRESTApp).FSecret;
        this.FAuthURL = rtl.as(Source,$mod.TRESTApp).FAuthURL;
      };
    };
    var $r = this.$rtti;
    $r.addProperty("AuthURL",0,rtl.string,"FAuthURL","FAuthURL");
    $r.addProperty("ClientID",0,rtl.string,"FClientID","FClientID");
    $r.addProperty("Key",0,rtl.string,"FKey","FKey");
    $r.addProperty("CallbackURL",0,rtl.string,"FCallbackURL","FCallbackURL");
    $r.addProperty("Secret",0,rtl.string,"FSecret","FSecret");
  });
  this.TAuthLocale = {"0": "lcDefault", lcDefault: 0, "1": "lcEnglish", lcEnglish: 1, "2": "lcDutch", lcDutch: 2, "3": "lcGerman", lcGerman: 3, "4": "lcFrench", lcFrench: 4, "5": "lcSpanish", lcSpanish: 5, "6": "lcItalian", lcItalian: 6, "7": "lcPortuguese", lcPortuguese: 7, "8": "lcGreek", lcGreek: 8, "9": "lcDanish", lcDanish: 9, "10": "lcRussian", lcRussian: 10, "11": "lcRomanian", lcRomanian: 11, "12": "lcSwedish", lcSwedish: 12, "13": "lcFinnish", lcFinnish: 13, "14": "lcTurkish", lcTurkish: 14, "15": "lcJapanese", lcJapanese: 15};
  this.$rtti.$Enum("TAuthLocale",{minvalue: 0, maxvalue: 15, ordtype: 1, enumtype: this.TAuthLocale});
  rtl.recNewT(this,"TCoreCloudHeader",function () {
    this.header = "";
    this.value = "";
    this.$eq = function (b) {
      return (this.header === b.header) && (this.value === b.value);
    };
    this.$assign = function (s) {
      this.header = s.header;
      this.value = s.value;
      return this;
    };
    var $r = $mod.$rtti.$Record("TCoreCloudHeader",{});
    $r.addField("header",rtl.string);
    $r.addField("value",rtl.string);
  });
  this.$rtti.$DynArray("TCoreCloudHeaders",{eltype: this.$rtti["TCoreCloudHeader"]});
  rtl.createClass(this,"TRESTClient",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FAPIBase = "";
      this.FAccessToken = "";
      this.FRefreshToken = "";
      this.FAccessExpiry = 0.0;
      this.FRefreshExpiry = 0.0;
      this.FOnAccessToken = null;
      this.FEventRegistered = false;
      this.FOnResponse = null;
      this.FPersistTokens = null;
      this.FOnHttpResponse = null;
      this.FApp = null;
      this.FScopes = null;
      this.FLocale = 0;
      this.FOnRequestResponse = null;
      this.FOnError = null;
      this.FResponseType = 0;
      this.FLoginWidth = 0;
      this.FLoginHeight = 0;
      this.FHandleAccessTokenPtr = null;
    };
    this.$final = function () {
      this.FOnAccessToken = undefined;
      this.FOnResponse = undefined;
      this.FPersistTokens = undefined;
      this.FOnHttpResponse = undefined;
      this.FApp = undefined;
      this.FScopes = undefined;
      this.FOnRequestResponse = undefined;
      this.FOnError = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.SetPersistTokens = function (Value) {
      this.FPersistTokens.Assign(Value);
    };
    this.SetApp = function (Value) {
      this.FApp.Assign(Value);
    };
    this.SetScopes = function (Value) {
      this.FScopes.Assign(Value);
    };
    this.InstallCallback = function () {
      var Result = false;
      var scriptsrc = "";
      scriptsrc = " function processAuthData(access_token) {" + 'var event = new CustomEvent("oauthcallback", {\r' + "            detail: {\r" + "                 message: access_token\r" + "            },\r" + "  bubbles: true,\r" + "  cancelable: true});\r" + "  document.dispatchEvent(event);" + "}";
      var script = document.createElement("script");
          script.innerHTML = scriptsrc;
          document.head.appendChild(script);
      
          var scr = document.createElement('script');
          scr.async = true;
          scr.defer = true;
          scr.type = 'text/javascript';
          document.body.appendChild(scr);
      Result = true;
      return Result;
    };
    this.RemoveOAuthHandler = function () {
      document.removeEventListener("oauthcallback",this.FHandleAccessTokenPtr);
      this.FEventRegistered = false;
    };
    this.HandleAccessToken = function (s) {
      var Result = false;
      var token = "";
      this.RemoveOAuthHandler();
      token = s.detail.message;
      this.FAccessToken = token;
      this.WriteTokens();
      if (this.FOnAccessToken != null) this.FOnAccessToken(this);
      Result = true;
      return Result;
    };
    this.HandleResponse = function (Event) {
      var Result = false;
      var Response = "";
      var Handled = false;
      var LRequestRec = pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$new();
      LRequestRec.req = Event.target;
      Response = "";
      if (this.FResponseType in rtl.createSet($mod.THTTPRequestResponseType.rtText,$mod.THTTPRequestResponseType.rtDefault)) {
        Response = Event.target.responseText;
      };
      Handled = false;
      if (this.FOnHttpResponse != null) this.FOnHttpResponse(this,Response,{get: function () {
          return Handled;
        }, set: function (v) {
          Handled = v;
        }});
      if ((this.FOnRequestResponse != null) && !Handled) this.FOnRequestResponse(this,pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$clone(LRequestRec),Response);
      if ((this.FOnResponse != null) && !Handled) this.FOnResponse(this,Response);
      Result = true;
      return Result;
    };
    this.GetAuthURL = function () {
      var Result = "";
      Result = this.FApp.FAuthURL;
      return Result;
    };
    this.ScopeParamText = function (Delimiter, Encode) {
      var Result = "";
      var i = 0;
      var scopestr = "";
      Result = "";
      for (var $l = 0, $end = this.FScopes.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (Encode) {
          scopestr = encodeURIComponent(this.FScopes.Get(i))}
         else scopestr = this.FScopes.Get(i);
        if (Result === "") {
          Result = scopestr}
         else Result = Result + Delimiter + scopestr;
      };
      return Result;
    };
    this.GetLocaleParam = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetJSONValue = function (o, ID) {
      var Result = null;
      var js = undefined;
      var res = false;
      var jvb = false;
      Result = null;
      js = o.fjo$1[ID];
      res = false;
      res = (js != undefined);
      if (res) {
        if (pas.JS.isBoolean(js)) {
          jvb = js;
          if (jvb) {
            Result = pas["WEBLib.JSON"].TJSONTrue.$create("Create$3")}
           else Result = pas["WEBLib.JSON"].TJSONFalse.$create("Create$3");
        };
        Result = pas["WEBLib.JSON"].TJSONValue.$create("Create$1",[js]);
      };
      return Result;
    };
    this.GetJSONObject = function (o, ID) {
      var Result = null;
      var ro = null;
      var jv = undefined;
      jv = o.fjo$1[ID];
      ro = jv;
      if (rtl.isArray(ro)) {
        Result = pas["WEBLib.JSON"].TJSONArray.$create("Create$2",[ro]);
      } else {
        Result = pas["WEBLib.JSON"].TJSONObject.$create("Create$3",[ro]);
      };
      return Result;
    };
    this.TMSUTF8Encode = function (s) {
      var Result = "";
      Result = s;
      return Result;
    };
    this.HttpRequestEvent = function (Command, URL, Data, ContentType, headers, AResponse, AError, ATimeOut) {
      var i = 0;
      var req = null;
      req = new XMLHttpRequest();
      req.addEventListener("load",rtl.createSafeCallback(null,AResponse));
      req.addEventListener("error",rtl.createSafeCallback(null,AError));
      req.addEventListener("timeout",rtl.createSafeCallback(null,ATimeOut));
      req.responseType = $mod.THttpRequest.GetResponseType(this.FResponseType);
      req.open(Command,URL,true);
      if (ContentType !== "") req.setRequestHeader("Content-Type",ContentType);
      if (this.FAccessToken !== "") req.setRequestHeader("Authorization","Bearer " + this.FAccessToken);
      if (rtl.length(headers) > 0) {
        for (var $l = 0, $end = rtl.length(headers) - 1; $l <= $end; $l++) {
          i = $l;
          req.setRequestHeader(headers[i].header,headers[i].value);
        };
      };
      if (Data === "") {
        req.send(null)}
       else req.send(Data);
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      this.FPersistTokens = $mod.TPersistTokens.$create("Create$1");
      this.FApp = $mod.TRESTApp.$create("Create");
      this.FScopes = pas.Classes.TStringList.$create("Create$1");
      this.FLocale = $mod.TAuthLocale.lcDefault;
      this.FResponseType = $mod.THTTPRequestResponseType.rtDefault;
      this.FLoginWidth = 800;
      this.FLoginHeight = 600;
      this.FHandleAccessTokenPtr = rtl.createCallback(this,"HandleAccessToken");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FApp");
      rtl.free(this,"FScopes");
      rtl.free(this,"FPersistTokens");
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.HttpsCommand = function (Command, URL, Data, ContentType, headers) {
      var $Self = this;
      var i = 0;
      var req = null;
      var FRequestResponse = null;
      var FResponse = null;
      var FHttpResponse = null;
      function ResponseHandler(Event) {
        var Result = false;
        var Response = "";
        var Handled = false;
        var LRequestRec = pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$new();
        LRequestRec.req = Event.target;
        Response = Event.target.responseText;
        Handled = false;
        if (FHttpResponse != null) FHttpResponse($Self,Response,{get: function () {
            return Handled;
          }, set: function (v) {
            Handled = v;
          }});
        if ((FRequestResponse != null) && !Handled) {
          FRequestResponse($Self,pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$clone(LRequestRec),Response);
        };
        if ((FResponse != null) && !Handled) {
          FResponse($Self,Response);
        };
        Result = true;
        return Result;
      };
      function ErrorHandler(Event) {
        var Result = false;
        var Handled = false;
        var LEventRec = pas["WEBLib.Controls"].TJSEventRecord.$new();
        var LRequestRec = pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$new();
        Handled = false;
        if ($Self.FOnError != null) {
          LRequestRec.req = Event.target;
          LEventRec.event = Event;
          $Self.FOnError($Self,pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$clone(LRequestRec),pas["WEBLib.Controls"].TJSEventRecord.$clone(LEventRec),{get: function () {
              return Handled;
            }, set: function (v) {
              Handled = v;
            }});
        };
        if (!Handled) throw pas.SysUtils.Exception.$create("Create$1",["HTTP request error @" + URL]);
        Result = true;
        return Result;
      };
      FRequestResponse = this.FOnRequestResponse;
      FResponse = this.FOnResponse;
      FHttpResponse = this.FOnHttpResponse;
      req = new XMLHttpRequest();
      req.addEventListener("load",rtl.createSafeCallback(null,ResponseHandler));
      req.addEventListener("error",rtl.createSafeCallback(null,ErrorHandler));
      req.responseType = $mod.THttpRequest.GetResponseType(this.FResponseType);
      req.open(Command,URL,true);
      if (ContentType !== "") req.setRequestHeader("Content-Type",ContentType);
      if (this.FAccessToken !== "") req.setRequestHeader("Authorization","Bearer " + this.FAccessToken);
      if (rtl.length(headers) > 0) {
        for (var $l = 0, $end = rtl.length(headers) - 1; $l <= $end; $l++) {
          i = $l;
          req.setRequestHeader(headers[i].header,headers[i].value);
        };
      };
      if (Data === "") {
        req.send(null)}
       else req.send(Data);
    };
    this.HttpsDelete = function (URL) {
      this.HttpsCommand("DELETE",URL,"","",[]);
    };
    this.HttpsDelete$1 = function (URL, headers) {
      this.HttpsCommand("DELETE",URL,"","",rtl.arrayRef(headers));
    };
    this.HttpsGet = function (URL) {
      this.HttpsCommand("GET",URL,"","",[]);
    };
    this.HttpsGet$1 = function (URL, headers) {
      this.HttpsCommand("GET",URL,"","",rtl.arrayRef(headers));
    };
    this.HttpsPost = function (URL, Data) {
      this.HttpsPost$1(URL,"",Data);
    };
    this.HttpsPost$1 = function (URL, ContentType, Data) {
      this.HttpsCommand("POST",URL,Data,ContentType,[]);
    };
    this.HttpsPost$2 = function (URL, ContentType, Data, headers) {
      this.HttpsCommand("POST",URL,Data,ContentType,rtl.arrayRef(headers));
    };
    this.HttpsPost$3 = function (URL, headers, Data) {
      this.HttpsCommand("POST",URL,Data,"",rtl.arrayRef(headers));
    };
    this.HttpsUpdate = function (URL, headers, Data) {
      this.HttpsCommand("PUT",URL,Data,"",rtl.arrayRef(headers));
    };
    this.HttpsPut = function (URL, ContentType, Data) {
      this.HttpsCommand("PUT",URL,Data,ContentType,[]);
    };
    this.HttpRequest = function (Command, URL, Data, ContentType, headers) {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (ASuccess, AFailed) {
        var i = 0;
        var req = null;
        var FRequestResponse = null;
        var FResponse = null;
        var FHttpResponse = null;
        function ResponseHandler(Event) {
          var Result = false;
          ASuccess(Event.target);
          return Result;
        };
        function ErrorHandler(Event) {
          var Result = false;
          AFailed(Event.target);
          return Result;
        };
        req = new XMLHttpRequest();
        req.addEventListener("load",rtl.createSafeCallback(null,ResponseHandler));
        req.addEventListener("error",rtl.createSafeCallback(null,ErrorHandler));
        req.responseType = $mod.THttpRequest.GetResponseType($Self.FResponseType);
        req.open(Command,URL,true);
        if (ContentType !== "") req.setRequestHeader("Content-Type",ContentType);
        if ($Self.FAccessToken !== "") req.setRequestHeader("Authorization","Bearer " + $Self.FAccessToken);
        if (rtl.length(headers) > 0) {
          for (var $l = 0, $end = rtl.length(headers) - 1; $l <= $end; $l++) {
            i = $l;
            req.setRequestHeader(headers[i].header,headers[i].value);
          };
        };
        if (Data === "") {
          req.send(null)}
         else req.send(Data);
      });
      return Result;
    };
    this.URLEncode = function (URI) {
      var Result = "";
      Result = encodeURIComponent(URI);
      return Result;
    };
    this.JSONEscape = function (s) {
      var Result = "";
      Result = encodeURIComponent(s);
      return Result;
    };
    this.IsoToDateTime = function (s) {
      var Result = 0.0;
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var ms = 0;
      var err = 0;
      ms = 0;
      pas.System.val$5(pas.System.Copy(s,1,4),{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,6,2),{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,9,2),{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,12,2),{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,15,2),{get: function () {
          return mi;
        }, set: function (v) {
          mi = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,18,2),{get: function () {
          return se;
        }, set: function (v) {
          se = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if ((s.length >= 20) && (s.charAt(19) === ".")) {
        pas.System.val$5(pas.System.Copy(s,21,3),{get: function () {
            return ms;
          }, set: function (v) {
            ms = v;
          }},{get: function () {
            return err;
          }, set: function (v) {
            err = v;
          }});
      };
      if (ye < 1) ye = 1;
      if (mo < 1) mo = 1;
      if (da < 1) da = 1;
      Result = pas.SysUtils.EncodeDate(ye,mo,da) + pas.SysUtils.EncodeTime(ho,mi,se,ms);
      return Result;
    };
    this.IsoToDateTime$1 = function (s, IsUTC) {
      var Result = 0.0;
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var ms = 0;
      var HourOffset = 0;
      var MinuteOffset = 0;
      var err = 0;
      var delta = 0;
      var sign = "";
      HourOffset = 0;
      MinuteOffset = 0;
      ms = 0;
      delta = 0;
      pas.System.val$5(pas.System.Copy(s,1,4),{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,6,2),{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,9,2),{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,12,2),{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,15,2),{get: function () {
          return mi;
        }, set: function (v) {
          mi = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,18,2),{get: function () {
          return se;
        }, set: function (v) {
          se = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if ((s.length >= 20) && (s.charAt(19) === ".")) {
        pas.System.val$5(pas.System.Copy(s,21,3),{get: function () {
            return ms;
          }, set: function (v) {
            ms = v;
          }},{get: function () {
            return err;
          }, set: function (v) {
            err = v;
          }});
        delta = 4;
      };
      if (ye < 1) ye = 1;
      if (mo < 1) mo = 1;
      if (da < 1) da = 1;
      if (s.length > (20 + delta)) {
        sign = pas.System.Copy(s,20 + delta,1);
        pas.System.val$6(pas.System.Copy(s,22 + delta,2),{get: function () {
            return HourOffset;
          }, set: function (v) {
            HourOffset = v;
          }},{get: function () {
            return err;
          }, set: function (v) {
            err = v;
          }});
        pas.System.val$6(pas.System.Copy(s,25 + delta,2),{get: function () {
            return MinuteOffset;
          }, set: function (v) {
            MinuteOffset = v;
          }},{get: function () {
            return err;
          }, set: function (v) {
            err = v;
          }});
        if (sign === "-") {
          HourOffset = HourOffset * -1;
          MinuteOffset = MinuteOffset * -1;
        };
      };
      Result = pas.SysUtils.EncodeDate(ye,mo,da) + pas.SysUtils.EncodeTime(ho,mi,se,ms);
      return Result;
    };
    this.IsoToDate = function (s) {
      var Result = 0.0;
      var da = 0;
      var mo = 0;
      var ye = 0;
      var err = 0;
      pas.System.val$5(pas.System.Copy(s,1,4),{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,6,2),{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,9,2),{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (ye < 1) ye = 1;
      if (mo < 1) mo = 1;
      if (da < 1) da = 1;
      Result = pas.SysUtils.EncodeDate(ye,mo,da) + pas.SysUtils.EncodeTime(0,0,0,0);
      return Result;
    };
    this.IsoToTime = function (s) {
      var Result = 0.0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var ms = 0;
      var err = 0;
      ms = 0;
      pas.System.val$5(pas.System.Copy(s,1,2),{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,4,2),{get: function () {
          return mi;
        }, set: function (v) {
          mi = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      pas.System.val$5(pas.System.Copy(s,7,2),{get: function () {
          return se;
        }, set: function (v) {
          se = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (s.length > 10) pas.System.val$5(pas.System.Copy(s,10,4),{get: function () {
          return ms;
        }, set: function (v) {
          ms = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if ((ho < 0) || (ho > 23)) ho = 0;
      if ((mi < 0) || (mi > 59)) mi = 0;
      if ((se < 0) || (se > 59)) se = 0;
      if (ms < 0) ms = 0;
      Result = pas.SysUtils.EncodeTime(ho,mi,se,ms);
      return Result;
    };
    this.IsIsoDateTime = function (s) {
      var Result = false;
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var err = 0;
      Result = true;
      pas.System.val$5(pas.System.Copy(s,1,4),{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err !== 0) return false;
      if (!(pas.System.Copy(s,5,1) === "-")) return false;
      pas.System.val$5(pas.System.Copy(s,6,2),{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err !== 0) return false;
      if (!(pas.System.Copy(s,8,1) === "-")) return false;
      pas.System.val$5(pas.System.Copy(s,9,2),{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err !== 0) return false;
      pas.System.val$5(pas.System.Copy(s,12,2),{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return err;
        }, set: function (v) {
          err = v;
        }});
      if (err === 0) {
        if (!(pas.System.Copy(s,14,1) === ":")) return false;
        pas.System.val$5(pas.System.Copy(s,15,2),{get: function () {
            return mi;
          }, set: function (v) {
            mi = v;
          }},{get: function () {
            return err;
          }, set: function (v) {
            err = v;
          }});
        if (err !== 0) return false;
        if (!(pas.System.Copy(s,17,1) === ":")) return false;
        pas.System.val$5(pas.System.Copy(s,18,2),{get: function () {
            return se;
          }, set: function (v) {
            se = v;
          }},{get: function () {
            return err;
          }, set: function (v) {
            err = v;
          }});
        if (err !== 0) return false;
      };
      return Result;
    };
    this.GetUTCDateTime = function () {
      var Result = 0.0;
      var s = "";
      const nowt = new Date();
      s = nowt.toISOString();
      Result = this.IsoToDateTime(s);
      return Result;
    };
    this.DateTimeToWL = function (dt) {
      var Result = "";
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var ms = 0;
      pas.SysUtils.DecodeDate(dt,{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }});
      pas.SysUtils.DecodeTime(dt,{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return mi;
        }, set: function (v) {
          mi = v;
        }},{get: function () {
          return se;
        }, set: function (v) {
          se = v;
        }},{get: function () {
          return ms;
        }, set: function (v) {
          ms = v;
        }});
      Result = pas.SysUtils.IntToStr(ye) + "-" + $impl.IntToZStr(mo,2) + "-" + $impl.IntToZStr(da,2) + "T" + $impl.IntToZStr(ho,2) + ":" + $impl.IntToZStr(mi,2) + ":" + $impl.IntToZStr(se,2);
      Result = Result + "+00:00";
      return Result;
    };
    this.DateToWL = function (dt) {
      var Result = "";
      var da = 0;
      var mo = 0;
      var ye = 0;
      pas.SysUtils.DecodeDate(dt,{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }});
      Result = pas.SysUtils.IntToStr(ye) + "-" + $impl.IntToZStr(mo,2) + "-" + $impl.IntToZStr(da,2);
      return Result;
    };
    this.TimeToWL = function (dt) {
      var Result = "";
      var ho = 0;
      var mi = 0;
      var se = 0;
      var ms = 0;
      pas.SysUtils.DecodeTime(dt,{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return mi;
        }, set: function (v) {
          mi = v;
        }},{get: function () {
          return se;
        }, set: function (v) {
          se = v;
        }},{get: function () {
          return ms;
        }, set: function (v) {
          ms = v;
        }});
      Result = $impl.IntToZStr(ho,2) + ":" + $impl.IntToZStr(mi,2) + ":" + $impl.IntToZStr(se,2) + "." + pas.SysUtils.IntToStr(ms);
      return Result;
    };
    this.DateTimeToDaylightSavings = function (dt) {
      var Result = 0.0;
      Result = dt;
      return Result;
    };
    this.GetJSONProp = function (O, ID) {
      var Result = "";
      Result = O.GetJSONValue(ID);
      return Result;
    };
    this.GetJSONInt = function (O, ID) {
      var Result = 0;
      var jv = undefined;
      jv = O.fjo$1[ID];
      if (rtl.isNumber(jv)) Result = rtl.trunc(jv);
      return Result;
    };
    this.DoAuth = function () {
      var URL = "";
      var param = "";
      if (!this.FEventRegistered) {
        document.addEventListener("oauthcallback",this.FHandleAccessTokenPtr);
        this.FEventRegistered = true;
      };
      URL = this.GetAuthURL();
      param = "width=" + pas["WEBLib.Utils"].TLongIntHelper.ToString.call({p: this, get: function () {
          return this.p.FLoginWidth;
        }, set: function (v) {
          this.p.FLoginWidth = v;
        }}) + ",height=" + pas["WEBLib.Utils"].TLongIntHelper.ToString.call({p: this, get: function () {
          return this.p.FLoginHeight;
        }, set: function (v) {
          this.p.FLoginHeight = v;
        }}) + ",location=no,toolbar=no,menubar=no";
      window.open(URL, 'oauth', param);
    };
    this.Connect = function () {
      if (this.FPersistTokens.FEnabled) {
        this.ReadTokens();
      };
      if (this.FAccessToken !== "") {
        this.TestTokens();
      } else {
        this.DoAuth();
      };
    };
    this.Authenticate = function () {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (ASuccess, AFailed) {
        var ptr = null;
        function HandleOAuthCallBack(s) {
          var Result = false;
          var token = "";
          document.removeEventListener("oauthcallback",ptr);
          token = s.detail.message;
          $Self.FAccessToken = token;
          $Self.WriteTokens();
          ASuccess($Self.FAccessToken);
          return Result;
        };
        ptr = HandleOAuthCallBack;
        document.addEventListener("oauthcallback",ptr);
        $Self.DoAuth();
      });
      return Result;
    };
    this.ReadTokens = function () {
      var ls = null;
      if (this.FPersistTokens.FEnabled && (this.FPersistTokens.FKey !== "")) {
        ls = pas["WEBLib.Storage"].TLocalStorage.$create("Create");
        this.FAccessToken = ls.GetValues(this.FPersistTokens.FKey);
        this.FRefreshToken = ls.GetValues(this.FPersistTokens.FKey + "refresh");
        this.FAccessExpiry = this.$class.IsoToDateTime(ls.GetValues(this.FPersistTokens.FKey + "accessexpiry"));
        this.FRefreshExpiry = this.$class.IsoToDateTime(ls.GetValues(this.FPersistTokens.FKey + "refreshexpiry"));
        ls = rtl.freeLoc(ls);
      };
    };
    this.WriteTokens = function () {
      var ls = null;
      if (this.FPersistTokens.FEnabled && (this.FPersistTokens.FKey !== "")) {
        ls = pas["WEBLib.Storage"].TLocalStorage.$create("Create");
        ls.SetValues(this.FPersistTokens.FKey,this.FAccessToken);
        ls.SetValues(this.FPersistTokens.FKey + "refresh",this.FRefreshToken);
        ls.SetValues(this.FPersistTokens.FKey + "accessexpiry",pas["WEBLib.Utils"].TDateTimeHelper.ToIsoString.call({p: this, get: function () {
            return this.p.FAccessExpiry;
          }, set: function (v) {
            this.p.FAccessExpiry = v;
          }},true,false));
        ls.SetValues(this.FPersistTokens.FKey + "refreshexpiry",pas["WEBLib.Utils"].TDateTimeHelper.ToIsoString.call({p: this, get: function () {
            return this.p.FRefreshExpiry;
          }, set: function (v) {
            this.p.FRefreshExpiry = v;
          }},true,false));
        ls = rtl.freeLoc(ls);
      };
    };
    this.TestTokens = async function () {
      if (this.FOnAccessToken != null) this.FOnAccessToken(this);
    };
    this.ClearTokens = function () {
      this.FAccessToken = "";
      this.WriteTokens();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("App",2,$mod.$rtti["TRESTApp"],"FApp","SetApp");
    $r.addProperty("LoginHeight",0,rtl.longint,"FLoginHeight","FLoginHeight",{Default: 600});
    $r.addProperty("LoginWidth",0,rtl.longint,"FLoginWidth","FLoginWidth",{Default: 800});
    $r.addProperty("PersistTokens",2,$mod.$rtti["TPersistTokens"],"FPersistTokens","SetPersistTokens");
    $r.addProperty("ResponseType",0,$mod.$rtti["THTTPRequestResponseType"],"FResponseType","FResponseType",{Default: $mod.THTTPRequestResponseType.rtDefault});
    $r.addProperty("Scopes",2,pas.Classes.$rtti["TStrings"],"FScopes","SetScopes");
    $r.addProperty("OnAccessToken",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnAccessToken","FOnAccessToken");
    $r.addProperty("OnRequestResponse",0,pas["WEBLib.Controls"].$rtti["THTTPRequestResponseEvent"],"FOnRequestResponse","FOnRequestResponse");
    $r.addProperty("OnResponse",0,$mod.$rtti["THttpResponse"],"FOnResponse","FOnResponse");
    $r.addProperty("OnError",0,pas["WEBLib.Controls"].$rtti["THTTPErrorEvent"],"FOnError","FOnError");
  });
  rtl.createClass(this,"TWebRESTClient",this.TRESTClient,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.AddHeader = function (AHeaders, Header, Value) {
    AHeaders.set(rtl.arraySetLength(AHeaders.get(),$mod.TCoreCloudHeader,rtl.length(AHeaders.get()) + 1));
    AHeaders.get()[rtl.length(AHeaders.get()) - 1].header = Header;
    AHeaders.get()[rtl.length(AHeaders.get()) - 1].value = Value;
  };
  this.GetArraySize = function (ja) {
    var Result = 0;
    Result = ja.GetCount();
    return Result;
  };
  this.GetArrayItem = function (ja, Index) {
    var Result = null;
    Result = ja.GetItem(Index);
    return Result;
  };
  this.HTTPCommand = function (ACommand, ACustomCommand) {
    var Result = "";
    var cmd = "";
    var $tmp = ACommand;
    if ($tmp === $mod.THTTPCommand.httpGET) {
      cmd = "GET"}
     else if ($tmp === $mod.THTTPCommand.httpPOST) {
      cmd = "POST"}
     else if ($tmp === $mod.THTTPCommand.httpPUT) {
      cmd = "PUT"}
     else if ($tmp === $mod.THTTPCommand.httpDELETE) {
      cmd = "DELETE"}
     else if ($tmp === $mod.THTTPCommand.httpHEAD) {
      cmd = "HEAD"}
     else if ($tmp === $mod.THTTPCommand.httpPATCH) {
      cmd = "PATCH"}
     else if ($tmp === $mod.THTTPCommand.httpCUSTOM) cmd = ACustomCommand;
    Result = cmd;
    return Result;
  };
  $mod.$implcode = function () {
    $impl.IntToZStr = function (i, l) {
      var Result = "";
      var Res = "";
      Res = pas.SysUtils.IntToStr(i);
      while (Res.length < l) Res = "0" + Res;
      Result = Res;
      return Result;
    };
  };
  $mod.$init = function () {
    $mod.TRESTClient.InstallCallback();
  };
},["WEBLib.Storage","WEBLib.Utils"]);
//# sourceMappingURL=WEBLib.REST.js.map
