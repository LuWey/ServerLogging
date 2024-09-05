rtl.module("WEBLib.ClientConnector",["System","Classes","WEBLib.JSON"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TClientConnectorIdentifier = {"0": "ciUnknown", ciUnknown: 0, "1": "ciAndroid", ciAndroid: 1, "2": "ciiOS", ciiOS: 2, "3": "ciWindows", ciWindows: 3, "4": "ciMac", ciMac: 4};
  this.$rtti.$Enum("TClientConnectorIdentifier",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TClientConnectorIdentifier});
  this.$rtti.$MethodVar("TClientConnectorReceivedMessageEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AJSON",pas["WEBLib.JSON"].$rtti["TJSONObject"]]]), methodkind: 0});
  rtl.createClass(this,"TClientConnector",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FOnReceivedMessage = null;
    };
    this.$final = function () {
      this.FOnReceivedMessage = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      pas["WEBLib.Forms"].Application.FClientConnector = this;
      return this;
    };
    this.Destroy = function () {
      pas["WEBLib.Forms"].Application.FClientConnector = null;
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.Receive = function (AJSON) {
      var js = null;
      var o = null;
      var s = "";
      js = pas["WEBLib.JSON"].TJSON.$create("Create");
      s = decodeURIComponent(AJSON);
      o = js.Parse(s);
      if (this.FOnReceivedMessage != null) this.FOnReceivedMessage(this,o);
      o = rtl.freeLoc(o);
    };
    this.Send = function (AJSON) {
      var s = "";
      s = JSON.stringify(AJSON.fjo$1);
      this.SendMessage(s);
    };
    var MAXBUFFERCOUNT = 500;
    this.SendMessage = function (AMessage) {
      var $Self = this;
      var s = "";
      var cid = 0;
      var scid = "";
      var sSub = "";
      var sc = 0;
      function InternalSend(m) {
        var $tmp = cid;
        if ($tmp === $mod.TClientConnectorIdentifier.ciAndroid) {
          injectedObject.Setjsvalue(m);
          injectedObject.performClick();
        } else if (($tmp === $mod.TClientConnectorIdentifier.ciiOS) || ($tmp === $mod.TClientConnectorIdentifier.ciMac)) {
          window.webkit.messageHandlers.bridge.postMessage(m);
        } else if ($tmp === $mod.TClientConnectorIdentifier.ciWindows) {
          window.location = m;
        } else if ($tmp === $mod.TClientConnectorIdentifier.ciUnknown) pas["WEBLib.Dialogs"].ShowMessage("Please perform handshake from client first.");
      };
      s = AMessage;
      scid = window.TMSWEBCoreClientIdentifier;
      cid = $mod.TClientConnectorIdentifier.ciUnknown;
      var $tmp = pas.SysUtils.LowerCase(scid);
      if ($tmp === "android") {
        cid = $mod.TClientConnectorIdentifier.ciAndroid}
       else if ($tmp === "ios") {
        cid = $mod.TClientConnectorIdentifier.ciiOS}
       else if ($tmp === "windows") {
        cid = $mod.TClientConnectorIdentifier.ciWindows}
       else if (($tmp === "mac") || ($tmp === "macos")) cid = $mod.TClientConnectorIdentifier.ciMac;
      var $tmp1 = pas.SysUtils.LowerCase(scid);
      if (($tmp1 === "mac") || ($tmp1 === "macos") || ($tmp1 === "ios")) {
        InternalSend($impl.Prefix + encodeURIComponent(s))}
       else if (($tmp1 === "android") || ($tmp1 === "windows")) {
        InternalSend($impl.Prefix + "BUFFERSTART");
        while (s.length > 0) {
          sc = Math.min(s.length & 0xFFFFFFFF,500);
          sSub = pas.System.Copy(s,1,sc);
          pas.System.Delete({get: function () {
              return s;
            }, set: function (v) {
              s = v;
            }},1,sc);
          InternalSend($impl.Prefix + encodeURIComponent(sSub));
        };
        InternalSend($impl.Prefix + "BUFFEREND");
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("OnReceivedMessage",0,$mod.$rtti["TClientConnectorReceivedMessageEvent"],"FOnReceivedMessage","FOnReceivedMessage");
  });
  rtl.createClass(this,"TWebClientConnector",this.TClientConnector,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  $mod.$implcode = function () {
    $impl.Prefix = "webclientevent://";
  };
},["Math","JS","WEBLib.Forms","SysUtils","WEBLib.Dialogs"]);
//# sourceMappingURL=WEBLib.ClientConnector.js.map
