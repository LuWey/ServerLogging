rtl.module("WEBLib.Storage",["System","Web","Classes"],function () {
  "use strict";
  var $mod = this;
  this.$rtti.$MethodVar("TStorageChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AKey",rtl.string],["AOldValue",rtl.string],["ANewValue",rtl.string],["AURL",rtl.string]]), methodkind: 0});
  rtl.createClass(this,"TLocalStorage",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FChangePtr = null;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.SetValues = function (AKey, AValue) {
      window.localStorage.setItem(AKey,AValue);
    };
    this.GetValues = function (AKey) {
      var Result = "";
      var s = "";
      s = window.localStorage.getItem(AKey);
      if (!pas.System.Assigned(s)) {
        Result = ""}
       else Result = s;
      return Result;
    };
    this.GetKey = function (AIndex) {
      var Result = "";
      Result = window.localStorage.key(AIndex);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = window.localStorage.length;
      return Result;
    };
    this.StorageChanged = function (AEvent) {
      var s = "";
      s = AEvent.storageArea + " ";
      if ((this.FOnChange != null) && (pas.System.Pos("OBJECT",pas.SysUtils.UpperCase(s)) > 0)) this.FOnChange(this,AEvent.key,AEvent.oldValue,AEvent.newValue,AEvent.url);
    };
    this.Create$1 = function (AOwner) {
      this.FChangePtr = rtl.createCallback(this,"StorageChanged");
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      window.addEventListener("storage",this.FChangePtr);
      return this;
    };
    this.Destroy = function () {
      window.removeEventListener("storage",this.FChangePtr);
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.SetValue = function (AKey, AValue) {
      window.localStorage.setItem(AKey,AValue);
    };
    this.GetValue = function (AKey) {
      var Result = "";
      var s = "";
      s = window.localStorage.getItem(AKey);
      if (!pas.System.Assigned(s)) {
        Result = ""}
       else Result = s;
      return Result;
    };
    this.RemoveKey = function (AKey) {
      window.localStorage.removeItem(AKey);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("OnChange",0,$mod.$rtti["TStorageChangeEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TWebLocalStorage",this.TLocalStorage,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TSessionStorage",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FChangePtr = null;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.SetValues = function (AKey, AValue) {
      window.sessionStorage.setItem(AKey,AValue);
    };
    this.GetValues = function (AKey) {
      var Result = "";
      var s = "";
      s = window.sessionStorage.getItem(AKey);
      if (!pas.System.Assigned(s)) {
        Result = ""}
       else Result = s;
      return Result;
    };
    this.GetKey = function (AIndex) {
      var Result = "";
      Result = window.sessionStorage.key(AIndex);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = window.sessionStorage.length;
      return Result;
    };
    this.StorageChanged = function (AEvent) {
      var s = "";
      s = AEvent.storageArea + " ";
      if ((this.FOnChange != null) && (pas.System.Pos("OBJECT",pas.SysUtils.UpperCase(s)) === 0)) this.FOnChange(this,AEvent.key,AEvent.oldValue,AEvent.newValue,AEvent.url);
    };
    this.Create$1 = function (AOwner) {
      this.FChangePtr = rtl.createCallback(this,"StorageChanged");
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      window.addEventListener("storage",this.FChangePtr);
      return this;
    };
    this.Destroy = function () {
      window.removeEventListener("storage",this.FChangePtr);
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.SetValue = function (AKey, AValue) {
      window.sessionStorage.setItem(AKey,AValue);
    };
    this.GetValue = function (AKey) {
      var Result = "";
      var s = "";
      s = window.sessionStorage.getItem(AKey);
      if (!pas.System.Assigned(s)) {
        Result = ""}
       else Result = s;
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("OnChange",0,$mod.$rtti["TStorageChangeEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TWebSessionStorage",this.TSessionStorage,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
},["SysUtils"]);
//# sourceMappingURL=WEBLib.Storage.js.map
