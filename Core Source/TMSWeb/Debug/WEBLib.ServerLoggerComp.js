rtl.module("WEBLib.ServerLoggerComp",["System","Classes","Web","ServerLogging","ServerLoggerCommon"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TServerLogger",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FServerLog = null;
      this.FEnvelopeJSON = null;
      this.FVersion = "";
    };
    this.$final = function () {
      this.FServerLog = undefined;
      this.FEnvelopeJSON = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.GetLogfileName = function () {
      var Result = "";
      Result = this.FServerLog.FLogfileName;
      return Result;
    };
    this.GetServerURL = function () {
      var Result = "";
      Result = this.FServerLog.FServerURL;
      return Result;
    };
    this.GetSendInterval = function () {
      var Result = 0;
      Result = this.FServerLog.FSendInterval;
      return Result;
    };
    this.GetCacheLines = function () {
      var Result = 0;
      Result = this.FServerLog.FCacheLines;
      return Result;
    };
    this.GetEnabled = function () {
      var Result = false;
      Result = this.FServerLog.FEnabled;
      return Result;
    };
    this.SetLogfileName = function (Value) {
      this.FServerLog.SetLogfileName(Value);
    };
    this.SetServerURL = function (Value) {
      this.FServerLog.SetServerURL(Value);
    };
    this.SetSendInterval = function (Value) {
      this.FServerLog.SetSendInterval(Value);
    };
    this.SetCacheLines = function (Value) {
      this.FServerLog.SetCacheLines(Value);
    };
    this.SetEnabled = function (Value) {
      this.FServerLog.SetEnabled(Value);
    };
    this.GetOnError = function () {
      var Result = null;
      Result = this.FServerLog.FOnError;
      return Result;
    };
    this.SetOnError = function (Value) {
      this.FServerLog.FOnError = Value;
    };
    this.GetEnvelopeDataKey = function () {
      var Result = "";
      Result = this.FServerLog.FEnvelopeDataKey;
      return Result;
    };
    this.GetEnvelopeJSON = function () {
      var Result = null;
      Result = this.FEnvelopeJSON;
      return Result;
    };
    this.SetEnvelopeDataKey = function (Value) {
      this.FServerLog.SetEnvelopeDataKey(Value);
    };
    this.SetEnvelopeJSON = function (Value) {
      rtl.free(this,"FEnvelopeJSON");
      this.FEnvelopeJSON = Value;
    };
    this.GetOnServerResponse = function () {
      var Result = null;
      Result = this.FServerLog.FOnServerResponse;
      return Result;
    };
    this.SetOnServerResponse = function (Value) {
      this.FServerLog.SetOnServerResponse(Value);
    };
    this.GetRetries = function () {
      var Result = 0;
      Result = this.FServerLog.FRetries;
      return Result;
    };
    this.SetRetries = function (Value) {
      this.FServerLog.SetRetries(Value);
    };
    this.OnEnvelopeJSONChanged = function (Sender) {
      this.FServerLog.SetEnvelopeJSON(pas.SysUtils.Trim(this.FEnvelopeJSON.GetTextStr()));
    };
    this.Loaded = function () {
      pas.Classes.TComponent.Loaded.call(this);
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      this.FServerLog = pas.ServerLogging.TServerLog.$create("Create$1");
      this.FEnvelopeJSON = pas.Classes.TStringList.$create("Create$1");
      this.FEnvelopeJSON.FOnChange = rtl.createCallback(this,"OnEnvelopeJSONChanged");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FServerLog");
      rtl.free(this,"FEnvelopeJSON");
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.Flush = function () {
      this.FServerLog.Flush();
    };
    this.ConsoleLog = function (Text) {
      this.FServerLog.ConsoleLog(Text);
    };
    this.ConsoleInfo = function (Text) {
      this.FServerLog.ConsoleInfo(Text);
    };
    this.ConsoleWarn = function (Text) {
      this.FServerLog.ConsoleWarn(Text);
    };
    this.ConsoleError = function (Text) {
      this.FServerLog.ConsoleError(Text);
    };
    this.ConsoleLog$1 = function (Data, SepStr) {
      this.FServerLog.ConsoleLog$1(Data,SepStr);
    };
    this.ConsoleInfo$1 = function (Data, SepStr) {
      this.FServerLog.ConsoleInfo$1(Data,SepStr);
    };
    this.ConsoleWarn$1 = function (Data, SepStr) {
      this.FServerLog.ConsoleWarn$1(Data,SepStr);
    };
    this.ConsoleError$1 = function (Data, SepStr) {
      this.FServerLog.ConsoleError$1(Data,SepStr);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Version",0,rtl.string,"FVersion","FVersion");
    $r.addProperty("ServerURL",3,rtl.string,"GetServerURL","SetServerURL");
    $r.addProperty("LogfileName",3,rtl.string,"GetLogfileName","SetLogfileName");
    $r.addProperty("SendInterval",3,rtl.longint,"GetSendInterval","SetSendInterval");
    $r.addProperty("CacheLines",3,rtl.longint,"GetCacheLines","SetCacheLines");
    $r.addProperty("Retries",3,rtl.longint,"GetRetries","SetRetries");
    $r.addProperty("OnError",3,pas.ServerLoggerCommon.$rtti["TServerLogErrorEvent"],"GetOnError","SetOnError");
    $r.addProperty("OnServerResponse",3,pas.ServerLoggerCommon.$rtti["TServerResponseEvent"],"GetOnServerResponse","SetOnServerResponse");
    $r.addProperty("EnvelopeJSON",3,pas.Classes.$rtti["TStringList"],"GetEnvelopeJSON","SetEnvelopeJSON");
    $r.addProperty("EnvelopeDataKey",3,rtl.string,"GetEnvelopeDataKey","SetEnvelopeDataKey");
    $r.addProperty("Enabled",3,rtl.boolean,"GetEnabled","SetEnabled");
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
},["SysUtils"]);
//# sourceMappingURL=WEBLib.ServerLoggerComp.js.map
