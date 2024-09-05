rtl.module("WEBLib.Modules",["System","Classes"],function () {
  "use strict";
  var $mod = this;
  this.$rtti.$Class("TDataModule");
  this.$rtti.$ClassRef("TDataModuleClass",{instancetype: this.$rtti["TDataModule"]});
  rtl.createClass(this,"TDataModule",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FHeight = 0;
      this.FOldCreateOrder = false;
      this.FOnCreate = null;
      this.FOnDestroy = null;
      this.FWidth = 0;
    };
    this.$final = function () {
      this.FOnCreate = undefined;
      this.FOnDestroy = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.DoCreate = function () {
      this.LoadDFMValues();
      if (this.FOnCreate != null) this.FOnCreate(this);
    };
    this.DoDestroy = function () {
      if (this.FOnDestroy != null) this.FOnDestroy(this);
    };
    this.LoadDFMValues = function () {
    };
    this.CreateNew = function (AOwner, Dummy) {
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      return this;
    };
    this.AfterConstruction = function () {
      pas.System.TObject.AfterConstruction.call(this);
      if (!this.FOldCreateOrder) this.DoCreate();
    };
    this.BeforeDestruction = function () {
      pas.Classes.TComponent.BeforeDestruction.call(this);
      if (!this.FOldCreateOrder) this.DoDestroy();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("CreateNew",2,[["AOwner",pas.Classes.$rtti["TComponent"]],["Dummy",rtl.longint]]);
    $r.addProperty("OnCreate",0,pas.Classes.$rtti["TNotifyEvent"],"FOnCreate","FOnCreate");
    $r.addProperty("OnDestroy",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDestroy","FOnDestroy");
  });
});
//# sourceMappingURL=WEBLib.Modules.js.map
