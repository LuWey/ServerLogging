rtl.module("ServerLoggerCommon",["System"],function () {
  "use strict";
  var $mod = this;
  this.Version = "2.0";
  this.$rtti.$MethodVar("TServerLogErrorEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Status",rtl.longint],["ErrorMessage",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TServerResponseEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["HTTPStatus",rtl.longint,2],["Response",rtl.string,2],["IsSuccess",rtl.boolean,1],["ErrorMessage",rtl.string,1]]), methodkind: 0});
});
//# sourceMappingURL=ServerLoggerCommon.js.map
