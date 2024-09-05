rtl.module("WEBLib.ServerLoggerCompReg",["System","Classes","WEBLib.ServerLoggerComp","WEBLib.DesignIntf"],function () {
  "use strict";
  var $mod = this;
  this.Register = function () {
    pas["WEBLib.DesignIntf"].RegisterComponents("TMS WEB 3rd party",[pas["WEBLib.ServerLoggerComp"].TServerLogger],null);
    pas.Classes.RegisterClass(pas["WEBLib.ServerLoggerComp"].TServerLogger);
  };
});
//# sourceMappingURL=WEBLib.ServerLoggerCompReg.js.map
