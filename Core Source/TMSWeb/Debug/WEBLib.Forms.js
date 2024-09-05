rtl.module("WEBLib.Forms",["System","Classes","Types","SysUtils","WEBLib.Graphics","WEBLib.Controls","WEBLib.Modules","WEBLib.Lang","WEBLib.Menus","Web","JS","WEBLib.ClientConnector","Rtl.BrowserLoadHelper"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.WEBCOREVERSION = "2.5.2.0";
  this.idOK = 1;
  this.idCancel = 2;
  this.idAbort = 3;
  this.idRetry = 4;
  this.idIgnore = 5;
  this.idYes = 6;
  this.idNo = 7;
  this.idClose = 8;
  this.idHelp = 9;
  this.idTryAgain = 10;
  this.idContinue = 11;
  this.mrNone = 0;
  this.mrOk = 1;
  this.mrCancel = 2;
  this.mrAbort = 3;
  this.mrRetry = 4;
  this.mrIgnore = 5;
  this.mrYes = 6;
  this.mrNo = 7;
  this.mrClose = 8;
  this.mrHelp = 9;
  this.mrTryAgain = 10;
  this.mrContinue = 11;
  this.mrAll = 11 + 1;
  this.mrNoToAll = 12 + 1;
  this.mrYesToAll = 13 + 1;
  this.rgiFirst = -1024;
  this.rgiLast = -513;
  this.igiFirst = 256;
  this.igiLast = 511;
  this.clTMSBlue = 0xE39E00;
  this.clTMSWEB = 0x8F8300;
  this.$rtti.$Class("TDragDockObject");
  this.$rtti.$Class("TCustomForm");
  this.$rtti.$Int("TConstraintSize",{minvalue: 0, maxvalue: 2147483647, ordtype: 5});
  this.TCloseAction = {"0": "caNone", caNone: 0, "1": "caHide", caHide: 1, "2": "caFree", caFree: 2, "3": "caMinimize", caMinimize: 3};
  this.$rtti.$Enum("TCloseAction",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TCloseAction});
  this.TFormStyle = {"0": "fsNormal", fsNormal: 0, "1": "fsStayOnTop", fsStayOnTop: 1};
  this.$rtti.$Enum("TFormStyle",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TFormStyle});
  this.TNavigationTarget = {"0": "ntBlank", ntBlank: 0, "1": "ntPage", ntPage: 1};
  this.$rtti.$Enum("TNavigationTarget",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TNavigationTarget});
  this.$rtti.$Int("TGestureID",{minvalue: -1024, maxvalue: 511, ordtype: 2});
  this.TInteractiveGestureFlag = {"0": "gfBegin", gfBegin: 0, "1": "gfInertia", gfInertia: 1, "2": "gfEnd", gfEnd: 2};
  this.$rtti.$Enum("TInteractiveGestureFlag",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TInteractiveGestureFlag});
  this.$rtti.$Set("TInteractiveGestureFlags",{comptype: this.$rtti["TInteractiveGestureFlag"]});
  this.TMouseActivate = {"0": "maDefault", maDefault: 0, "1": "maActivate", maActivate: 1, "2": "maActivateAndEat", maActivateAndEat: 2, "3": "maNoActivate", maNoActivate: 3, "4": "maNoActivateAndEat", maNoActivateAndEat: 4};
  this.$rtti.$Enum("TMouseActivate",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TMouseActivate});
  this.TScreenOrientation = {"0": "soPortrait", soPortrait: 0, "1": "soLandscape", soLandscape: 1};
  this.$rtti.$Enum("TScreenOrientation",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TScreenOrientation});
  this.TApplicationColorScheme = {"0": "csNoScheme", csNoScheme: 0, "1": "csLight", csLight: 1, "2": "csDark", csDark: 2};
  this.$rtti.$Enum("TApplicationColorScheme",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TApplicationColorScheme});
  rtl.recNewT(this,"TSmallPoint",function () {
    this.x = 0;
    this.y = 0;
    this.$eq = function (b) {
      return (this.x === b.x) && (this.y === b.y);
    };
    this.$assign = function (s) {
      this.x = s.x;
      this.y = s.y;
      return this;
    };
    var $r = $mod.$rtti.$Record("TSmallPoint",{});
    $r.addField("x",rtl.smallint);
    $r.addField("y",rtl.smallint);
  });
  rtl.recNewT(this,"TAlignInfo",function () {
    this.AlignList = null;
    this.ControlIndex = 0;
    this.Align = 0;
    this.Scratch = 0;
    this.$eq = function (b) {
      return (this.AlignList === b.AlignList) && (this.ControlIndex === b.ControlIndex) && (this.Align === b.Align) && (this.Scratch === b.Scratch);
    };
    this.$assign = function (s) {
      this.AlignList = s.AlignList;
      this.ControlIndex = s.ControlIndex;
      this.Align = s.Align;
      this.Scratch = s.Scratch;
      return this;
    };
    var $r = $mod.$rtti.$Record("TAlignInfo",{});
    $r.addField("AlignList",pas.Classes.$rtti["TList"]);
    $r.addField("ControlIndex",rtl.longint);
    $r.addField("Align",pas["WEBLib.Controls"].$rtti["TAlign"]);
    $r.addField("Scratch",rtl.longint);
  });
  rtl.recNewT(this,"TGestureEventInfo",function () {
    this.GestureID = 0;
    this.Angle = 0.0;
    this.Distance = 0;
    this.$new = function () {
      var r = Object.create(this);
      r.Location = pas.Types.TPoint.$new();
      r.Flags = {};
      r.InertiaVector = $mod.TSmallPoint.$new();
      r.TapLocation = $mod.TSmallPoint.$new();
      return r;
    };
    this.$eq = function (b) {
      return (this.GestureID === b.GestureID) && this.Location.$eq(b.Location) && rtl.eqSet(this.Flags,b.Flags) && (this.Angle === b.Angle) && this.InertiaVector.$eq(b.InertiaVector) && (this.Distance === b.Distance) && this.TapLocation.$eq(b.TapLocation);
    };
    this.$assign = function (s) {
      this.GestureID = s.GestureID;
      this.Location.$assign(s.Location);
      this.Flags = rtl.refSet(s.Flags);
      this.Angle = s.Angle;
      this.InertiaVector.$assign(s.InertiaVector);
      this.Distance = s.Distance;
      this.TapLocation.$assign(s.TapLocation);
      return this;
    };
    var $r = $mod.$rtti.$Record("TGestureEventInfo",{});
    $r.addField("GestureID",$mod.$rtti["TGestureID"]);
    $r.addField("Location",pas.Types.$rtti["TPoint"]);
    $r.addField("Flags",$mod.$rtti["TInteractiveGestureFlags"]);
    $r.addField("Angle",rtl.double);
    $r.addField("InertiaVector",$mod.$rtti["TSmallPoint"]);
    $r.addField("Distance",rtl.longint);
    $r.addField("TapLocation",$mod.$rtti["TSmallPoint"]);
  });
  this.$rtti.$MethodVar("TCloseEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Action",this.$rtti["TCloseAction"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TCloseQueryEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["CanClose",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TOrientationChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AOrientation",this.$rtti["TScreenOrientation"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TBeforeUnloadEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AMessage",rtl.string,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TAlignInsertBeforeEvent",{procsig: rtl.newTIProcSig([["Sender",pas["WEBLib.Controls"].$rtti["TWinControl"]],["C1",pas["WEBLib.Controls"].$rtti["TControl"]],["C2",pas["WEBLib.Controls"].$rtti["TControl"]]],rtl.boolean), methodkind: 1});
  this.$rtti.$MethodVar("TAlignPositionEvent",{procsig: rtl.newTIProcSig([["Sender",pas["WEBLib.Controls"].$rtti["TWinControl"]],["Control",pas["WEBLib.Controls"].$rtti["TControl"]],["NewLeft",rtl.longint,1],["NewTop",rtl.longint,1],["NewWidth",rtl.longint,1],["NewHeight",rtl.longint,1],["AlignRect",pas.Types.$rtti["TRect"],1],["AlignInfo",this.$rtti["TAlignInfo"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TCanResizeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["NewWidth",rtl.longint,1],["NewHeight",rtl.longint,1],["Resize",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TConstrainedResizeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["MinWidth",rtl.longint,1],["MinHeight",rtl.longint,1],["MaxWidth",rtl.longint,1],["MaxHeight",rtl.longint,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TContextPopupEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["MousePos",pas.Types.$rtti["TPoint"]],["Handled",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TDockDropEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Source",this.$rtti["TDragDockObject"]],["X",rtl.longint],["Y",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TDockOverEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Source",this.$rtti["TDragDockObject"]],["X",rtl.longint],["Y",rtl.longint],["State",pas["WEBLib.Controls"].$rtti["TDragState"]],["Accept",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TGestureEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["EventInfo",this.$rtti["TGestureEventInfo"],2],["Handled",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TGetSiteInfoEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["DockClient",pas["WEBLib.Controls"].$rtti["TControl"]],["InfluenceRect",pas.Types.$rtti["TRect"],1],["MousePos",pas.Types.$rtti["TPoint"]],["CanDock",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TMouseActivateEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Button",pas["WEBLib.Controls"].$rtti["TMouseButton"]],["Shift",pas.Classes.$rtti["TShiftState"]],["X",rtl.longint],["Y",rtl.longint],["HitTest",rtl.longint],["MouseActivate",this.$rtti["TMouseActivate"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TMouseWheelUpDownEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Shift",pas.Classes.$rtti["TShiftState"]],["MousePos",pas.Types.$rtti["TPoint"]],["Handled",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TStartDockEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["DragObject",this.$rtti["TDragDockObject"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TUnDockEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Client",pas["WEBLib.Controls"].$rtti["TControl"]],["NewTarget",pas["WEBLib.Controls"].$rtti["TWinControl"]],["Allow",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("THashChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["oldURL",rtl.string],["newURL",rtl.string]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TModalResultProc",{procsig: rtl.newTIProcSig([["AValue",rtl.longint]])});
  this.$rtti.$RefToProcVar("TFormCreatedProc",{procsig: rtl.newTIProcSig([["AForm",pas.System.$rtti["TObject"]]])});
  this.TWindowState = {"0": "wsNormal", wsNormal: 0, "1": "wsMinimized", wsMinimized: 1, "2": "wsMaximized", wsMaximized: 2};
  this.$rtti.$Enum("TWindowState",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TWindowState});
  this.TPopupMode = {"0": "pmNone", pmNone: 0, "1": "pmAuto", pmAuto: 1, "2": "pmExplicit", pmExplicit: 2};
  this.$rtti.$Enum("TPopupMode",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TPopupMode});
  this.TPopupClose = {"0": "pcOnDeactivate", pcOnDeactivate: 0, "1": "pcNever", pcNever: 1};
  this.$rtti.$Enum("TPopupClose",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TPopupClose});
  this.TPosition = {"0": "poDesigned", poDesigned: 0, "1": "poDefault", poDefault: 1, "2": "poDefaultPosOnly", poDefaultPosOnly: 2, "3": "poDefaultSizeOnly", poDefaultSizeOnly: 3, "4": "poScreenCenter", poScreenCenter: 4, "5": "poDesktopCenter", poDesktopCenter: 5, "6": "poMainFormCenter", poMainFormCenter: 6, "7": "poOwnerFormCenter", poOwnerFormCenter: 7};
  this.$rtti.$Enum("TPosition",{minvalue: 0, maxvalue: 7, ordtype: 1, enumtype: this.TPosition});
  this.TApplicationErrorType = {"0": "aeSilent", aeSilent: 0, "1": "aeDialog", aeDialog: 1, "2": "aeAlert", aeAlert: 2, "3": "aeFooter", aeFooter: 3};
  this.$rtti.$Enum("TApplicationErrorType",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TApplicationErrorType});
  this.TFormBorderStyle = {"0": "fbNone", fbNone: 0, "1": "fbSingle", fbSingle: 1, "2": "fbSizeable", fbSizeable: 2, "3": "fbDialog", fbDialog: 3, "4": "fbDialogSizeable", fbDialogSizeable: 4};
  this.$rtti.$Enum("TFormBorderStyle",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TFormBorderStyle});
  this.$rtti.$Enum("TFormBorder",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TFormBorderStyle});
  this.TBootstrapVersion = {"0": "bv3", bv3: 0, "1": "bv4", bv4: 1, "2": "bv5", bv5: 2};
  this.$rtti.$Enum("TBootstrapVersion",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TBootstrapVersion});
  this.TCSSLibrary = {"0": "cssNone", cssNone: 0, "1": "cssBootstrap", cssBootstrap: 1};
  this.$rtti.$Enum("TCSSLibrary",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TCSSLibrary});
  rtl.createClass(this,"TCustomSizeConstraints",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FControl = null;
      this.FMaxHeight = 0;
      this.FMaxWidth = 0;
      this.FMinHeight = 0;
      this.FMinWidth = 0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FControl = undefined;
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetConstraints = function (AIndex, AValue) {
      var $tmp = AIndex;
      if ($tmp === 0) {
        if (AValue !== this.FMaxHeight) {
          this.FMaxHeight = AValue;
          if ((AValue > 0) && (AValue < this.FMinHeight)) this.FMinHeight = AValue;
          this.Change();
        }}
       else if ($tmp === 1) {
        if (AValue !== this.FMaxWidth) {
          this.FMaxWidth = AValue;
          if ((AValue > 0) && (AValue < this.FMinWidth)) this.FMinWidth = AValue;
          this.Change();
        }}
       else if ($tmp === 2) {
        if (AValue !== this.FMinHeight) {
          this.FMinHeight = AValue;
          if ((this.FMaxHeight > 0) && (AValue > this.FMaxHeight)) this.FMaxHeight = AValue;
          this.Change();
        }}
       else if ($tmp === 3) if (AValue !== this.FMinWidth) {
        this.FMinWidth = AValue;
        if ((this.FMaxWidth > 0) && (AValue > this.FMaxWidth)) this.FMaxWidth = AValue;
        this.Change();
      };
    };
    this.Change = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.AssignTo = function (ADest) {
      if ($mod.TCustomSizeConstraints.isPrototypeOf(ADest)) {
        ADest.FMinHeight = this.FMinHeight;
        ADest.FMaxHeight = this.FMaxHeight;
        ADest.FMinWidth = this.FMinWidth;
        ADest.FMaxWidth = this.FMaxWidth;
        ADest.Change();
      } else pas.Classes.TPersistent.AssignTo.call(this,ADest);
    };
    this.Create$1 = function (AControl) {
      pas.System.TObject.Create.call(this);
      this.FControl = AControl;
      return this;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AControl",pas["WEBLib.Controls"].$rtti["TControl"]]]);
  });
  rtl.createClass(this,"TSizeConstraints",this.TCustomSizeConstraints,function () {
    var $r = this.$rtti;
    $r.addProperty("MaxHeight",18,$mod.$rtti["TConstraintSize"],"FMaxHeight","SetConstraints",{index: 0, Default: 0});
    $r.addProperty("MaxWidth",18,$mod.$rtti["TConstraintSize"],"FMaxWidth","SetConstraints",{index: 1, Default: 0});
    $r.addProperty("MinHeight",18,$mod.$rtti["TConstraintSize"],"FMinHeight","SetConstraints",{index: 2, Default: 0});
    $r.addProperty("MinWidth",18,$mod.$rtti["TConstraintSize"],"FMinWidth","SetConstraints",{index: 3, Default: 0});
  });
  rtl.createClass(this,"TDragDockObject",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FBrush = null;
      this.FDockRect = pas.Types.TRect.$new();
      this.FDropAlign = 0;
      this.FDropOnControl = null;
      this.FEraseDockRect = pas.Types.TRect.$new();
      this.FEraseWhenMoving = false;
      this.FFloating = false;
      this.FFrameWidth = 0;
    };
    this.$final = function () {
      this.FBrush = undefined;
      this.FDockRect = undefined;
      this.FDropOnControl = undefined;
      this.FEraseDockRect = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (AControl) {
      pas.System.TObject.Create.call(this);
      this.FBrush = pas["WEBLib.Graphics"].TBrush.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FBrush");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
    };
  });
  rtl.createClass(this,"TCustomForm",pas["WEBLib.Controls"].TWinControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TWinControl.$init.call(this);
      this.FDesignContainer = null;
      this.FLayer$1 = null;
      this.FPopup = false;
      this.FPopupElement = null;
      this.FFormFileName = "";
      this.FFormContent = "";
      this.FFormContainer = "";
      this.FFormElement = "";
      this.FFormStyle = 0;
      this.FOnCreate = null;
      this.FOnShow = null;
      this.FModalResult = 0;
      this.FOnPaint = null;
      this.FOnDeactivate = null;
      this.FOnCloseQuery = null;
      this.FOnClose = null;
      this.FModalProc = null;
      this.FCreatedProc = null;
      this.FWindowState = 0;
      this.FCaption = "";
      this.FIsResizing$1 = false;
      this.FOnScroll = null;
      this.FOnUnload = null;
      this.FOnBeforeUnload = null;
      this.FPopupMode = 0;
      this.FPopupClose = 0;
      this.FPosition = 0;
      this.FActiveControl = null;
      this.FMdx = 0;
      this.FMdy = 0;
      this.FDlgX = 0;
      this.FDlgY = 0;
      this.FCaptured$1 = false;
      this.FDown = false;
      this.FHasCaption = false;
      this.FMoveSpan = null;
      this.FCaptionElement = null;
      this.FCaptionCloseElement = null;
      this.FBorder = 0;
      this.FShadow = false;
      this.FTimerID = 0;
      this.FOrigWidth = 0;
      this.FOrigHeight = 0;
      this.FOldWidth = 0;
      this.FOldHeight = 0;
      this.FOnDestroy = null;
      this.FPopupOpacity = 0.0;
      this.FCreating = false;
      this.FShown = false;
      this.FLoadedPtr = null;
      this.FDOMContentLoadedPtr = null;
      this.FUnloadPtr = null;
      this.FBeforeUnloadPtr = null;
      this.FResizePtr = null;
      this.FScrollPtr = null;
      this.FDocMouseUpPtr = null;
      this.FDocMouseMovePtr = null;
      this.FTitleDownPtr = null;
      this.FDoClickPtr = null;
      this.FKeyDownPtr$1 = null;
      this.FOrientationChangePtr = null;
      this.FHashChangePtr = null;
      this.FCSSLibrary = 0;
      this.FNoHTML = false;
      this.FPrevActiveForm = null;
      this.FElementCaptionClassName = "";
      this.FElementPopupClassName = "";
      this.FMenu = null;
      this.FResizeObserver = null;
      this.FOnOrientationChange = null;
      this.FOnDOMContentLoaded = null;
      this.FShowClose = false;
      this.FOnHashChange = null;
    };
    this.$final = function () {
      this.FDesignContainer = undefined;
      this.FLayer$1 = undefined;
      this.FPopupElement = undefined;
      this.FOnCreate = undefined;
      this.FOnShow = undefined;
      this.FOnPaint = undefined;
      this.FOnDeactivate = undefined;
      this.FOnCloseQuery = undefined;
      this.FOnClose = undefined;
      this.FModalProc = undefined;
      this.FCreatedProc = undefined;
      this.FOnScroll = undefined;
      this.FOnUnload = undefined;
      this.FOnBeforeUnload = undefined;
      this.FActiveControl = undefined;
      this.FMoveSpan = undefined;
      this.FCaptionElement = undefined;
      this.FCaptionCloseElement = undefined;
      this.FOnDestroy = undefined;
      this.FPrevActiveForm = undefined;
      this.FMenu = undefined;
      this.FResizeObserver = undefined;
      this.FOnOrientationChange = undefined;
      this.FOnDOMContentLoaded = undefined;
      this.FOnHashChange = undefined;
      pas["WEBLib.Controls"].TWinControl.$final.call(this);
    };
    this.SetModalResult = function (Value) {
      this.FModalResult = Value;
      if (this.FModalResult !== 0) this.Close();
    };
    this.GetFormStyle = function () {
      var Result = 0;
      Result = this.FFormStyle;
      return Result;
    };
    this.SetFormStyle = function (Value) {
      this.FFormStyle = Value;
    };
    this.GetCanvas = function () {
      var Result = null;
      Result = null;
      return Result;
    };
    this.SetCaption = function (AValue) {
      if (this.FCaption !== AValue) {
        this.FCaption = AValue;
        this.UpdateElement();
      };
    };
    this.SetActiveControl = function (Value) {
      this.FActiveControl = Value;
      if (this.FActiveControl != null) this.FActiveControl.SetFocus();
    };
    this.SetShadow = function (Value) {
      if (this.FShadow !== Value) {
        this.FShadow = Value;
        this.UpdateElement();
      };
    };
    this.SetBorder = function (Value) {
      if (this.FBorder !== Value) {
        this.FBorder = Value;
        if (this.GetContainer() != null) this.AlignControl(this);
      };
    };
    this.SetFormContainer = function (Value) {
      var el = null;
      var old = null;
      var i = 0;
      old = this.GetContainer();
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.FFormContainer = Value}
       else {
        if (pas.SysUtils.UpperCase(Value) === "BODY") {
          this.FFormContainer = ""}
         else this.FFormContainer = Value;
      };
      if ((pas.Classes.TComponentStateItem.csLoading in this.FComponentState) && !(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) return;
      if (this.FLayer$1 != null) {
        el = this.FLayer$1}
       else if (Value === "") {
        el = document.body;
      } else {
        el = document.getElementById(Value);
        if (!(el != null)) el = document.body;
      };
      if (el != null) {
        this.FContainer = el;
        if (old != null) {
          for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
            i = $l;
            if (this.GetControls(i).FParentElement === old) this.GetControls(i).FParentElement = el;
            if ((this.GetControls(i).GetElementHandle() != null) && (this.GetControls(i).GetElementHandle().parentElement === old)) {
              el.appendChild(this.GetControls(i).GetElementHandle());
            };
          };
        };
      };
    };
    this.GetActiveControl = function () {
      var Result = null;
      var i = 0;
      Result = this.FActiveControl;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.GetControls(i).GetElementHandle() === document.activeElement) {
          Result = this.GetControls(i);
          break;
        };
      };
      return Result;
    };
    this.SetWidth = function (AValue) {
      var eh = null;
      if (((pas.Classes.TComponentStateItem.csLoading in this.FComponentState) && (this.FFormContainer !== "")) || (!this.FPopup && !(this.GetElementHandle() != null))) {
        this.SetWidthInt(AValue);
        return;
      };
      pas["WEBLib.Controls"].TControl.SetWidth.apply(this,arguments);
      if (this.FPopup) {
        eh = this.FPopupElement;
        if (eh != null) eh.style.setProperty("width",pas.SysUtils.IntToStr(AValue) + "px");
      };
    };
    this.SetHeight = function (AValue) {
      var eh = null;
      if (((pas.Classes.TComponentStateItem.csLoading in this.FComponentState) && (this.FFormContainer !== "")) || (!this.FPopup && !(this.GetElementHandle() != null))) {
        this.SetHeightInt(AValue);
        if (this.FormContainerElement() != null) {
          if ((pas.SysUtils.UpperCase(this.FormContainerElement().tagName) !== "BODY") && !this.GetIsLinked()) this.FormContainerElement().style.setProperty("height",pas.SysUtils.IntToStr(AValue) + "px");
        };
        return;
      };
      pas["WEBLib.Controls"].TControl.SetHeight.apply(this,arguments);
      if ((this.FFormContainer !== "") && (this.FormContainerElement() != null)) {
        this.FormContainerElement().style.setProperty("height",pas.SysUtils.IntToStr(AValue) + "px");
        this.Realign();
      };
      if (this.FPopup) {
        eh = this.FPopupElement;
        if (eh != null) eh.style.setProperty("height",pas.SysUtils.IntToStr(AValue) + "px");
      };
    };
    this.SetPosition = function (Value) {
      this.FPosition = Value;
    };
    this.SetClientHeight = function (Value) {
      if (this.FBorder in rtl.createSet($mod.TFormBorderStyle.fbDialog,$mod.TFormBorderStyle.fbDialogSizeable)) {
        this.SetHeight(Value + $mod.Application.FFormCaptionHeight);
      } else pas["WEBLib.Controls"].TControl.SetClientHeight.apply(this,arguments);
    };
    this.GetClientHeight = function () {
      var Result = 0;
      if (this.FBorder in rtl.createSet($mod.TFormBorderStyle.fbDialog,$mod.TFormBorderStyle.fbDialogSizeable)) {
        Result = this.GetHeight() - $mod.Application.FFormCaptionHeight;
      } else Result = pas["WEBLib.Controls"].TControl.GetClientHeight.call(this);
      return Result;
    };
    this.ReadPixelsPerInch = function (AReader) {
    };
    this.WritePixelsPerInch = function (AWriter) {
    };
    this.HandleHashChange = function (Event) {
      var Result = false;
      var oldURL = "";
      var newURL = "";
      var newHash = "";
      var pc = null;
      var newform = null;
      oldURL = Event.oldURL;
      newURL = Event.newURL;
      if (this.FOnHashChange != null) {
        this.FOnHashChange(this,oldURL,newURL);
      };
      if ($mod.Application.FRouting) {
        newHash = pas.System.Copy(newURL,pas.System.Pos("#",newURL) + 1,newURL.length);
        pc = pas.Classes.GetClass("T" + this.FName);
        if ((pc != null) && ($mod.LastHash !== newHash)) {
          if ((pas.System.Pos("#" + this.FName + "_",oldURL + "_") !== 0) && (pas.System.Pos("#" + this.FName + "_",newURL + "_") === 0)) {
            this.Close();
          };
          if (!this.FPopup) {
            pc = pas.Classes.GetClass("T" + newHash);
            if (pc != null) {
              $mod.Application.AutoCreateForm(pc,{get: function () {
                  return newform;
                }, set: function (v) {
                  newform = v;
                }});
            };
          };
        };
      };
      Result = true;
      return Result;
    };
    this.HandleLoaded = function (Event) {
      var Result = false;
      this.Resize$1();
      this.InitAnchoring();
      Result = true;
      return Result;
    };
    this.HandleDOMContentLoaded = function (Event) {
      var Result = false;
      if (this.FOnDOMContentLoaded != null) this.FOnDOMContentLoaded(this);
      Result = true;
      return Result;
    };
    this.HandleScroll = function (Event) {
      var Result = false;
      if (this.FOnScroll != null) this.FOnScroll(this);
      Result = true;
      return Result;
    };
    this.HandleUnload = function (Event) {
      var Result = false;
      if (this.FOnUnload != null) this.FOnUnload(this);
      Result = true;
      return Result;
    };
    this.HandleBeforeUnload = function (Event) {
      var Result = false;
      var msg = "";
      msg = "";
      if (this.FOnBeforeUnload != null) this.FOnBeforeUnload(this,{get: function () {
          return msg;
        }, set: function (v) {
          msg = v;
        }});
      if (msg !== "") {
        Event.returnValue = msg;
        return msg;
      };
      Result = true;
      return Result;
    };
    this.HandleObserver = function () {
      var Result = false;
      this.Resize$1();
      Result = true;
      return Result;
    };
    this.HandleResize = function (Event) {
      var Result = false;
      if (this.FVisible && !(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) {
        if (!(this.GetContainer() != null)) this.CreateControl();
        this.Resize$1();
        if (this.GetElementHandle() === document.body) window.setTimeout(rtl.createSafeCallback(this,"Resize$1"),25);
      };
      if (1 < 0) {
        this.HandleObserver();
      };
      Result = true;
      return Result;
    };
    this.HandleDocMouseMove = function (Event) {
      var Result = false;
      var deltax = 0.0;
      var deltay = 0.0;
      var el = null;
      var l = 0;
      var t = 0;
      if (this.FDown && (this.GetContainer() != null)) {
        deltax = Event.clientX - this.FMdx;
        deltay = Event.clientY - this.FMdy;
        if (this.FHasCaption && (this.FFormFileName !== "")) {
          el = this.GetContainer().parentNode}
         else el = this.GetContainer();
        el.style.setProperty("transform","");
        el.style.setProperty("position","absolute");
        l = Math.round(this.FDlgX + deltax);
        t = Math.round(this.FDlgY + deltay);
        el.style.setProperty("left",pas.SysUtils.IntToStr(l) + "px");
        el.style.setProperty("top",pas.SysUtils.IntToStr(t) + "px");
        this.FLeft = l;
        this.FTop = t;
      };
      Result = true;
      return Result;
    };
    this.HandleDocMouseUp = function (Event) {
      var Result = false;
      if (this.FDown) {
        this.FCaptured$1 = false;
        this.FDown = false;
        document.body.removeEventListener("mousemove",this.FDocMouseMovePtr);
        document.body.removeEventListener("mouseup",this.FDocMouseUpPtr);
        if (this.FMoveSpan != null) document.body.removeChild(this.FMoveSpan);
        this.FEventStopPropagation = rtl.unionSet(this.FEventStopPropagation,rtl.createSet(pas["WEBLib.Controls"].TElementEvent.eeMouseMove,pas["WEBLib.Controls"].TElementEvent.eeMouseUp));
        this.FMoveSpan = null;
      };
      Result = true;
      return Result;
    };
    this.HandleTitleDown = function (Event) {
      var Result = false;
      var r = null;
      Event.stopPropagation();
      Event.preventDefault();
      this.FPopupClose = $mod.TPopupClose.pcNever;
      this.FMdx = Math.round(Event.clientX);
      this.FMdy = Math.round(Event.clientY);
      if (this.FHasCaption && (this.FFormFileName !== "")) {
        r = this.GetContainer().parentNode.getBoundingClientRect()}
       else r = this.GetContainer().getBoundingClientRect();
      this.FDlgX = Math.round(pas.System.Int(r.left));
      this.FDlgY = Math.round(pas.System.Int(r.top));
      this.FDown = true;
      if (!this.FCaptured$1) {
        this.FCaptured$1 = true;
        this.FMoveSpan = document.createElement("SPAN");
        this.FMoveSpan.style.setProperty("top","0");
        this.FMoveSpan.style.setProperty("left","0");
        this.FMoveSpan.style.setProperty("right","0");
        this.FMoveSpan.style.setProperty("bottom","0");
        this.FMoveSpan.style.setProperty("position","absolute");
        document.body.appendChild(this.FMoveSpan);
        this.FEventStopPropagation = rtl.diffSet(this.FEventStopPropagation,rtl.createSet(pas["WEBLib.Controls"].TElementEvent.eeMouseMove,pas["WEBLib.Controls"].TElementEvent.eeMouseUp));
        document.body.addEventListener("mousemove",this.FDocMouseMovePtr);
        document.body.addEventListener("mouseup",this.FDocMouseUpPtr);
      };
      Result = true;
      return Result;
    };
    this.HandleCloseClick = function (Event) {
      var Result = false;
      var CanClose = false;
      CanClose = true;
      if (this.FOnCloseQuery != null) this.FOnCloseQuery(this,{get: function () {
          return CanClose;
        }, set: function (v) {
          CanClose = v;
        }});
      if (CanClose) this.Close();
      Result = true;
      return Result;
    };
    this.SetLeft = function (AValue) {
      var eh = null;
      pas["WEBLib.Controls"].TControl.SetLeft.apply(this,arguments);
      if (this.FPopup) {
        eh = this.FPopupElement;
        if (eh != null) eh.style.setProperty("left",pas.SysUtils.IntToStr(AValue) + "px");
      };
    };
    this.SetTop = function (AValue) {
      var eh = null;
      pas["WEBLib.Controls"].TControl.SetTop.apply(this,arguments);
      if (this.FPopup) {
        eh = this.FPopupElement;
        if (eh != null) eh.style.setProperty("top",pas.SysUtils.IntToStr(AValue) + "px");
      };
    };
    var cPixelsPerInch = "PixelsPerInch";
    this.DefineProperties = function (AFiler) {
      pas.Classes.TComponent.DefineProperties.call(this,AFiler);
      AFiler.DefineProperty(cPixelsPerInch,rtl.createCallback(this,"ReadPixelsPerInch"),rtl.createCallback(this,"WritePixelsPerInch"),false);
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FLoadedPtr = null;
      this.FDOMContentLoadedPtr = null;
      this.FUnloadPtr = null;
      this.FBeforeUnloadPtr = null;
      this.FResizePtr = null;
      this.FScrollPtr = null;
      this.FDocMouseUpPtr = null;
      this.FDocMouseMovePtr = null;
      this.FTitleDownPtr = null;
      this.FDoClickPtr = null;
      this.FKeyDownPtr$1 = null;
      this.FOrientationChangePtr = null;
      this.FHashChangePtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      if (this.FLoadedPtr === null) {
        this.FLoadedPtr = rtl.createCallback(this,"HandleLoaded");
        this.FDOMContentLoadedPtr = rtl.createCallback(this,"HandleDOMContentLoaded");
        this.FUnloadPtr = rtl.createCallback(this,"HandleUnload");
        this.FBeforeUnloadPtr = rtl.createCallback(this,"HandleBeforeUnload");
        this.FResizePtr = rtl.createCallback(this,"HandleResize");
        this.FScrollPtr = rtl.createCallback(this,"HandleScroll");
        this.FDocMouseUpPtr = rtl.createCallback(this,"HandleDocMouseUp");
        this.FDocMouseMovePtr = rtl.createCallback(this,"HandleDocMouseMove");
        this.FTitleDownPtr = rtl.createCallback(this,"HandleTitleDown");
        this.FDoClickPtr = rtl.createCallback(this,"HandleDoClick$1");
        this.FKeyDownPtr$1 = rtl.createCallback(this,"HandleKeyDown");
        this.FOrientationChangePtr = rtl.createCallback(this,"HandleOrientationChange");
        this.FHashChangePtr = rtl.createCallback(this,"HandleHashChange");
      };
    };
    this.VisibleChanged = function () {
      var LIsBody = false;
      pas["WEBLib.Controls"].TControl.VisibleChanged.call(this);
      if (this.FLayer$1 != null) {
        if (this.FVisible) {
          this.FLayer$1.style.setProperty("display","")}
         else this.FLayer$1.style.setProperty("display","none");
      } else {
        LIsBody = pas.SysUtils.LowerCase(this.GetID()) === pas["WEBLib.WebTools"].cBodyTag;
        if ((this.GetContainer() != null) && (this.FFormContainer !== "") && !LIsBody) {
          if (this.FVisible) {
            this.GetContainer().style.setProperty("display","")}
           else this.GetContainer().style.setProperty("display","none");
        };
      };
    };
    this.Resize$1 = function () {
      var i = 0;
      var ch = 0;
      var neww = 0;
      var newh = 0;
      var eh = null;
      var dr = null;
      if (pas.Classes.TComponentStateItem.csDestroying in this.FComponentState) return;
      this.FIsResizing$1 = true;
      if (this.FPopup && (this.FPopupElement != null)) {
        eh = this.FPopupElement;
        dr = eh.getBoundingClientRect();
        neww = Math.round(dr.right - dr.left - 2);
        if (this.FBorder in rtl.createSet($mod.TFormBorderStyle.fbDialog,$mod.TFormBorderStyle.fbDialogSizeable)) {
          ch = this.GetCaptionHeight();
          newh = Math.round(dr.bottom - dr.top - ch - 2);
        } else newh = Math.round(dr.bottom - dr.top - 2);
      } else {
        neww = window.innerWidth;
        newh = window.innerHeight;
      };
      this.UpdateControlSize(neww,newh);
      if (!(pas["WEBLib.Controls"].IsAndroid() && (document.activeElement.tagName === "INPUT"))) this.AlignControl(this);
      this.DoResize();
      this.FIsResizing$1 = false;
      if (!this.IsUpdating()) {
        if ((this.FOrigRect.Left === -1) && (this.FOrigRect.Top === -1)) this.InitAnchoring();
        for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
          i = $l;
          this.GetControls(i).UpdateAnchoring();
        };
      };
    };
    this.CreateControl = function () {
      if (!this.FVisible && !this.FPopup) return;
      pas["WEBLib.Controls"].TControl.CreateControl.call(this);
      this.UpdateSize();
    };
    this.DoClose = function (CloseAction) {
      if ((this.FModalProc != null) && (CloseAction.get() !== $mod.TCloseAction.caNone)) {
        this.FModalProc(this.FModalResult);
        this.FModalProc = null;
      };
    };
    this.BindEvents = function () {
      var pc = null;
      var hash = "";
      pas["WEBLib.Controls"].TControl.BindEvents.call(this);
      if (document.readyState !== "loading") if (this.FOnDOMContentLoaded != null) this.FOnDOMContentLoaded(this);
      window.addEventListener("resize",this.FResizePtr);
      window.addEventListener("load",this.FLoadedPtr);
      window.addEventListener("DOMContentLoaded",this.FDOMContentLoadedPtr);
      document.addEventListener("scroll",this.FScrollPtr);
      window.addEventListener("unload",this.FUnloadPtr);
      window.addEventListener("beforeunload",this.FBeforeUnloadPtr);
      window.addEventListener("keydown",this.FKeyDownPtr$1);
      window.addEventListener("orientationchange",this.FOrientationChangePtr);
      window.addEventListener("hashchange",this.FHashChangePtr);
      pc = pas.Classes.GetClass(this.$classname);
      if ((pc != null) && !this.FPopup && $mod.Application.FRouting) {
        hash = this.$classname;
        pas.System.Delete({get: function () {
            return hash;
          }, set: function (v) {
            hash = v;
          }},1,1);
        $mod.LastHash = hash;
        window.location.hash = hash;
      };
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if ((this.FLayer$1 != null) && (this.FPopupClose === $mod.TPopupClose.pcOnDeactivate)) this.FLayer$1.removeEventListener("click",this.FDoClickPtr);
      if (this.FResizeObserver != null) {
        this.FResizeObserver.disconnect();
      };
      window.removeEventListener("resize",this.FResizePtr);
      window.removeEventListener("load",this.FLoadedPtr);
      window.removeEventListener("DOMContentLoaded",this.FDOMContentLoadedPtr);
      document.removeEventListener("scroll",this.FScrollPtr);
      window.removeEventListener("unload",this.FUnloadPtr);
      window.removeEventListener("beforeunload",this.FBeforeUnloadPtr);
      window.removeEventListener("keydown",this.FKeyDownPtr$1);
      window.removeEventListener("orientationchange",this.FOrientationChangePtr);
      window.removeEventListener("hashchange",this.FHashChangePtr);
    };
    this.DoCreate = function () {
      this.BeginUpdate();
      this.LoadDFMValues();
      this.Loaded();
      if (this.FOnCreate != null) this.FOnCreate(this);
      this.FCreating = false;
      this.EndUpdate();
      this.UpdateChildren(this);
      this.Realign();
      this.DoResize();
    };
    this.Realign = function () {
      var el = null;
      var dr = null;
      var r = pas.Types.TRect.$new();
      if ((this.FFormContainer !== "") && (this.FAlign !== pas["WEBLib.Controls"].TAlign.alNone)) {
        el = document.getElementById(this.FFormContainer);
        if (el != null) {
          dr = el.getBoundingClientRect();
          if ((dr.width === 0) && (dr.height === 0) && (el.style.getPropertyValue("position") === "absolute")) {
            r.$assign(pas["WEBLib.Controls"].GetHTMLElementAbsoluteRect(el));
          } else {
            r.$assign(pas.Types.Rect(Math.round(dr.left),Math.round(dr.top),Math.round(dr.right),Math.round(dr.bottom)));
          };
          this.SetBoundsInt(r.Left,r.Top,r.Right - r.Left,r.Bottom - r.Top);
        };
      };
      pas["WEBLib.Controls"].TControl.Realign.call(this);
    };
    this.DoResize = function () {
      var w = 0;
      var h = 0;
      w = this.GetWidth();
      h = this.GetHeight();
      if ((w === this.FOldWidth) && (h === this.FOldHeight)) return;
      this.FOldWidth = w;
      this.FOldHeight = h;
      if (this.FOnResize != null) this.FOnResize(this);
    };
    this.DoShow = function () {
      this.DoAutoFocus();
      if ((this.FOnShow != null) && !this.FShown) {
        this.FShown = true;
        this.FOnShow(this);
      };
    };
    this.DoAutoFocus = function () {
      var i = 0;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        if ((this.GetControls(i).FTabOrder === 0) && this.GetControls(i).FTabStop) {
          this.GetControls(i).SetFocus();
        };
      };
    };
    this.Paint = function () {
    };
    this.HandleDoClick$1 = function (Event) {
      var Result = false;
      Event.stopPropagation();
      if (this.FPopupClose === $mod.TPopupClose.pcOnDeactivate) this.Close();
      Result = true;
      return Result;
    };
    this.HandleKeyDown = function (Event) {
      var Result = false;
      var k = 0;
      k = this.GetKeyCode(Event.key,true);
      if (!pas.System.Assigned(k)) return Result;
      if ((k === 27) && !(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && this.FPopup) {
        this.Close();
      };
      Result = true;
      return Result;
    };
    this.HandleOrientationChange = function (Event) {
      var Result = false;
      var so = 0;
      var isPortrait = false;
      this.Resize$1();
      this.Realign();
      Result = true;
      if (this.FOnOrientationChange != null) {
        var mql = window.matchMedia("(orientation: portrait)");
        isPortrait = (mql.matches);
        if (isPortrait) {
          so = $mod.TScreenOrientation.soLandscape}
         else so = $mod.TScreenOrientation.soPortrait;
        this.FOnOrientationChange(this,so);
      };
      if (this.FOnResize != null) this.FOnResize(this);
      return Result;
    };
    this.HandleDoResize = function () {
      var dr = null;
      var neww = 0;
      var newh = 0;
      dr = this.GetContainer().getBoundingClientRect();
      neww = Math.round(dr.right - dr.left);
      newh = Math.round(dr.bottom - dr.top);
      if ((neww !== this.FOrigWidth) || (newh !== this.FOrigHeight)) {
        this.SetWidth(neww);
        this.SetHeight(newh);
        dr = this.GetContainer().getBoundingClientRect();
        this.FOrigWidth = Math.round(dr.right - dr.left);
        this.FOrigHeight = Math.round(dr.bottom - dr.top);
        this.AlignControl(this);
      };
    };
    this.KeyPreview = function (Key, Shift) {
      var i = 0;
      var lt = 0;
      var ft = 0;
      var lti = 0;
      var fti = 0;
      lt = -1;
      ft = 0xFFFF;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (!this.GetControls(i).FVisible && this.GetControls(i).FEnabled) continue;
        if (this.GetControls(i).FTabOrder < ft) {
          ft = this.GetControls(i).FTabOrder;
          fti = i;
        };
        if (this.GetControls(i).FTabOrder > lt) {
          lt = this.GetControls(i).FTabOrder;
          lti = i;
        };
        if ((Key.get() === 13) || (Key.get() === 27)) this.GetControls(i).HandleKeyPreview(Key.get());
      };
      if ($mod.Application.FMainForm === this) return;
      if ((Key.get() === 9) && !(pas.Classes.TShiftState$a.ssShift in Shift) && (lti < this.GetControlsCount()) && (fti >= 0) && (fti !== lti)) {
        if (this.GetControls(lti).Focused()) {
          this.GetControls(fti).SetFocus();
          Key.set(0);
        };
      };
      if ((Key.get() === 9) && (pas.Classes.TShiftState$a.ssShift in Shift) && (fti >= 0) && (lti < this.GetControlsCount()) && (fti !== lti)) {
        if (this.GetControls(fti).Focused()) {
          this.GetControls(lti).SetFocus();
          Key.set(0);
        };
      };
    };
    this.GetWidth = function () {
      var Result = 0;
      var dr = null;
      var el = null;
      if (this.FFormElement !== "") {
        el = document.getElementById(this.FFormElement);
        if (el != null) {
          dr = el.getBoundingClientRect();
          Result = Math.round(dr.right - dr.left);
          return Result;
        };
      };
      if (this.GetElementHandle() === document.body) {
        Result = window.innerWidth;
        dr = document.documentElement.getBoundingClientRect();
        Result = Math.round(dr.width);
        if (Result > window.innerWidth) Result = window.innerWidth;
      } else {
        if (this.FPopup) {
          Result = pas["WEBLib.Controls"].TControl.GetWidth.call(this)}
         else {
          Result = Math.round(this.GetElementHandle().offsetWidth);
          if (Result === 0) {
            if (this.FFormContainer !== "") {
              Result = pas["WEBLib.Controls"].TControl.GetWidth.call(this)}
             else Result = window.innerWidth;
          };
        };
      };
      return Result;
    };
    this.GetHeight = function () {
      var Result = 0;
      var d = 0;
      var s = "";
      var css = null;
      var el = null;
      var dr = null;
      if (this.FFormElement !== "") {
        el = document.getElementById(this.FFormElement);
        if (el != null) {
          dr = el.getBoundingClientRect();
          Result = Math.round(dr.bottom - dr.top);
          return Result;
        };
      };
      if (this.GetElementHandle() === document.body) {
        css = window.getComputedStyle(this.GetElementHandle());
        s = css.getPropertyValue("margin-top");
        s = pas.System.Copy(s,1,s.length - 2);
        d = Math.round(pas.SysUtils.StrToFloat$1(s,pas.SysUtils.TFormatSettings.Invariant()) - 2);
        dr = document.documentElement.getBoundingClientRect();
        Result = Math.round(dr.height);
        if (Result > window.innerHeight) Result = window.innerHeight - Math.max(0,d);
      } else {
        if (this.FPopup) {
          Result = pas["WEBLib.Controls"].TControl.GetHeight.call(this);
        } else {
          Result = Math.round(this.GetElementHandle().offsetHeight);
          if (Result === 0) {
            if (this.FFormContainer !== "") {
              Result = pas["WEBLib.Controls"].TControl.GetHeight.call(this)}
             else Result = window.innerHeight;
          };
        };
      };
      return Result;
    };
    this.GetLeft = function () {
      var Result = 0;
      var el = null;
      var dr = null;
      if (this.FPopup) {
        Result = pas["WEBLib.Controls"].TControl.GetLeft.call(this);
      } else {
        if (this.FFormElement !== "") {
          el = document.getElementById(this.FFormElement);
          if (el != null) {
            dr = el.getBoundingClientRect();
            Result = Math.round(dr.left);
          };
        } else {
          el = null;
          if (this.FFormContainer !== "") el = document.getElementById(this.FFormContainer);
          if (!(el != null)) el = this.GetElementHandle();
          Result = Math.round(el.offsetLeft);
        };
      };
      return Result;
    };
    this.GetTop = function () {
      var Result = 0;
      var el = null;
      var dr = null;
      if (this.FPopup) {
        Result = pas["WEBLib.Controls"].TControl.GetTop.call(this)}
       else {
        if (this.FFormElement !== "") {
          el = document.getElementById(this.FFormElement);
          if (el != null) {
            dr = el.getBoundingClientRect();
            Result = Math.round(dr.top);
          };
        } else {
          el = null;
          if (this.FFormContainer !== "") el = document.getElementById(this.FFormContainer);
          if (!(el != null)) el = this.GetElementHandle();
          Result = Math.round(el.offsetTop);
        };
      };
      return Result;
    };
    this.GetClientRect = function () {
      var Result = pas.Types.TRect.$new();
      Result.$assign(pas["WEBLib.Controls"].TControl.GetClientRect.call(this));
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      var eh = null;
      var caph = null;
      if (!this.FPopup && (this.FormContainerElement() != null)) {
        Result = this.FormContainerElement();
        return Result;
      };
      Result = document.createElement("DIV");
      this.FLayer$1 = this.CreateLayer();
      document.body.appendChild(this.FLayer$1);
      eh = this.FLayer$1;
      if (this.FPopupClose === $mod.TPopupClose.pcOnDeactivate) {
        this.GetMethodPointers();
        eh.addEventListener("click",this.FDoClickPtr);
      };
      eh.style.setProperty(pas["WEBLib.Controls"].CSSZIndex,$mod.Application.MaxZIndexStr());
      if (this.FBorder === $mod.TFormBorderStyle.fbSizeable) {
        Result.style.setProperty("resize","both");
        Result.style.setProperty("overflow","auto");
      };
      this.FHasCaption = false;
      if (this.FBorder in rtl.createSet($mod.TFormBorderStyle.fbSizeable,$mod.TFormBorderStyle.fbDialog,$mod.TFormBorderStyle.fbDialogSizeable)) {
        caph = this.CreateCaption();
        Result.appendChild(caph);
      };
      return Result;
    };
    this.UpdateElement = function () {
      var clr = "";
      var el = null;
      if (this.FCreating) return;
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.IsUpdating()) return;
      if ((this.GetElementHandle() != null) || (this.GetContainer() != null)) {
        if (this.FCaption !== "") {
          if (!this.FPopup) {
            window.document.title = this.FCaption}
           else {
            if (this.FCaptionElement != null) {
              el = this.FCaptionElement.childNodes.item(0);
              if (el != null) el.nodeValue = this.FCaption;
              if (this.FShowClose && !(this.FCaptionCloseElement != null)) {
                this.FCaptionCloseElement = document.createElement("SPAN");
                this.FCaptionCloseElement.style.setProperty("float","right");
                this.FCaptionCloseElement.style.setProperty("cursor","default");
                this.FCaptionCloseElement.style.setProperty("margin-right","8px");
                this.FCaptionCloseElement.innerHTML = "&#x2716;";
                this.FCaptionElement.appendChild(this.FCaptionCloseElement);
                this.FCaptionCloseElement.addEventListener("click",rtl.createSafeCallback(this,"HandleCloseClick"));
              };
              pas["WEBLib.Controls"].SetHTMLElementFont(this.FCaptionElement,this.FFont,!((this.FElementCaptionClassName === "") && (this.FElementFont === pas["WEBLib.Controls"].TElementFont.efProperty)));
            };
          };
        };
      };
      if (this.GetContainer() != null) {
        clr = pas["WEBLib.Graphics"].ColorToHTML(this.FColor);
        if (this.GetContainer() != null) {
          if ((this.FColor !== -1) && (this.FColor !== 16777215) && !this.FPopup && (this.FElementClassName === "")) this.GetContainer().style.setProperty(pas["WEBLib.Controls"].CSSBackground,clr);
          if ((this.FElementClassName !== "") || (this.FColor === -1) || ((this.FColor === 16777215) && !this.FPopup)) this.GetContainer().style.removeProperty(pas["WEBLib.Controls"].CSSBackground);
          if ((this.FElementClassName === "") && !this.FPopup) {
            document.documentElement.style.setProperty('height','100%');
          };
          pas["WEBLib.Controls"].SetHTMLElementFont(this.GetContainer(),this.FFont,!((this.FElementClassName === "") && (this.FElementFont === pas["WEBLib.Controls"].TElementFont.efProperty)));
        };
        if (this.FPopup) {
          if (!(this.FPopupElement != null)) this.FPopupElement = this.GetContainer();
          if (this.FElementPopupClassName !== "") {
            this.GetContainer().style.removeProperty("border");
            this.FPopupElement.setAttribute("class",this.FElementPopupClassName);
          } else {
            if (this.FShadow) {
              this.FPopupElement.style.setProperty("box-shadow","3px 3px 3px silver");
            } else {
              this.FPopupElement.style.removeProperty("box-shadow");
            };
            this.FPopupElement.style.setProperty("border","1px solid gray");
          };
        } else {
          this.GetContainer().style.removeProperty("box-shadow");
        };
      };
    };
    this.ContainerElement = function () {
      var Result = null;
      Result = this.FormContainerElement();
      return Result;
    };
    this.FormContainerElement = function () {
      var Result = null;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        if (this.FDesignContainer != null) Result = this.FDesignContainer;
      };
      if (this.FFormContainer !== "") {
        Result = document.getElementById(this.FFormContainer);
        if (!(Result != null)) Result = document.body;
      } else {
        Result = document.body;
      };
      return Result;
    };
    this.GetElementBindHandle = function () {
      var Result = null;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        Result = window;
        return Result;
      };
      if (this.FFormContainer !== "") {
        Result = window;
      } else {
        if (!this.FPopup) {
          Result = window;
        } else Result = pas["WEBLib.Controls"].TControl.GetElementBindHandle.call(this);
      };
      return Result;
    };
    this.GetElementHandle = function () {
      var Result = null;
      if (this.FPopup) {
        Result = pas["WEBLib.Controls"].TControl.GetElementHandle.call(this)}
       else Result = this.FormContainerElement();
      return Result;
    };
    this.SetElementClassName = function (AValue) {
      pas["WEBLib.Controls"].TControl.SetElementClassName.apply(this,arguments);
      if (this.FPopup && (this.FPopupElement != null)) {
        this.FPopupElement.setAttribute("class",AValue);
      };
    };
    this.CloseQuery = function () {
      var Result = false;
      Result = true;
      if (this.FOnCloseQuery != null) this.FOnCloseQuery(this,{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }});
      return Result;
    };
    this.LoadDFMValues = function () {
    };
    this.Init = function () {
    };
    this.IsFocused = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.CreateLayer = function () {
      var Result = null;
      Result = document.createElement("SPAN");
      Result.style.setProperty("top","0");
      Result.style.setProperty("left","0");
      Result.style.setProperty("right","0");
      Result.style.setProperty("bottom","0");
      Result.style.setProperty("webkit-user-select","none");
      Result.style.setProperty("moz-user-select","none");
      Result.style.setProperty("khtml-user-select","none");
      Result.style.setProperty("ms-user-select","none");
      Result.style.setProperty("user-select","none");
      Result.style.setProperty("position","absolute");
      Result.style.setProperty("z-index",$mod.Application.MaxZIndexStr());
      return Result;
    };
    this.CreateCaption = function () {
      var Result = null;
      var BarHeight = "";
      BarHeight = pas.SysUtils.IntToStr($mod.Application.FFormCaptionHeight);
      this.FCaptionElement = document.createElement("DIV");
      this.FCaptionElement.innerHTML = this.FCaption;
      this.FCaptionElement.style.setProperty(pas["WEBLib.Controls"].CSSBackground,pas["WEBLib.Graphics"].ColorToHTML($mod.Application.FThemeColor));
      this.FCaptionElement.style.setProperty("color",pas["WEBLib.Graphics"].ColorToHTML($mod.Application.FThemeTextColor));
      this.FCaptionElement.style.setProperty("cursor","move");
      this.FCaptionElement.style.setProperty("height",BarHeight + "px");
      this.FCaptionElement.style.setProperty("line-height",BarHeight + "px");
      this.FCaptionElement.style.setProperty("border-bottom","1px solid black");
      this.FCaptionElement.style.setProperty("padding-left","4px");
      this.FCaptionElement.style.setProperty("-moz-user-select","none");
      this.FCaptionElement.style.setProperty("-webkit-user-select","none");
      this.FCaptionElement.style.setProperty("-ms-user-select","none");
      this.FCaptionElement.style.setProperty("user-select","none");
      this.FCaptionElement.style.setProperty("-o-user-select","none");
      if (this.FElementCaptionClassName !== "") this.FCaptionElement.setAttribute("class",this.FElementCaptionClassName);
      pas["WEBLib.Controls"].SetHTMLElementFont(this.FCaptionElement,this.FFont,!((this.FElementCaptionClassName === "") && (this.FElementFont === pas["WEBLib.Controls"].TElementFont.efProperty)));
      if (!(this.FTitleDownPtr != null)) this.GetMethodPointers();
      this.FCaptionElement.innerHTML = this.FCaption;
      this.FCaptionElement.addEventListener("mousedown",this.FTitleDownPtr);
      this.FHasCaption = true;
      Result = this.FCaptionElement;
      return Result;
    };
    this.GetCaptionHeight = function () {
      var Result = 0;
      var r = null;
      Result = 0;
      if ((this.FCaptionElement != null) && (this.FBorder in rtl.createSet($mod.TFormBorderStyle.fbDialog,$mod.TFormBorderStyle.fbDialogSizeable))) {
        r = this.FCaptionElement.getBoundingClientRect();
        Result = Math.round(r.bottom - r.top);
      };
      return Result;
    };
    this.SetColorScheme = function (AScheme) {
      var s = "";
      if (!$mod.Application.FThemed) return;
      var $tmp = AScheme;
      if ($tmp === $mod.TApplicationColorScheme.csDark) {
        this.SetColor(0x202124);
        s = "label,option,td,table,ul,li {background-color: #202124; color: #BEC1C6;}" + "\r\n" + "body,input,textarea,select,fieldset {background-color: #202124; color: #BEC1C6; border: 1px solid gray;}" + "\r\n" + "input:focus, textarea:focus, select:focus, span:focus { border: 1px solid silver; outline: none !important;}";
        this.AddCSS("appscheme",s);
      } else if ($tmp === $mod.TApplicationColorScheme.csLight) {
        this.SetColor(16777215);
        this.RemoveCSS("appscheme");
      };
    };
    this.SetFormPos = function () {
      if (!(this.GetContainer() != null)) return;
      if (this.FPosition === $mod.TPosition.poScreenCenter) {
        this.FLeft = Math.round(($mod.WinWidth() - this.GetWidth()) / 2) + window.scrollX;
        this.FTop = Math.round(($mod.WinHeight() - this.GetHeight()) / 2) + window.scrollY;
      };
      this.GetContainer().style.setProperty("position","absolute");
      this.GetContainer().style.setProperty("width",pas.SysUtils.IntToStr(this.GetWidth()) + "px");
      this.GetContainer().style.setProperty("height",pas.SysUtils.IntToStr(this.GetHeight()) + "px");
      this.GetContainer().style.setProperty("left",pas.SysUtils.IntToStr(this.GetLeft()) + "px");
      this.GetContainer().style.setProperty("top",pas.SysUtils.IntToStr(this.GetTop()) + "px");
    };
    this.GetHTMLFileName = function () {
      var Result = "";
      Result = this.$module.$name + $mod.Application.GetFormExtension();
      return Result;
    };
    this.LoadedDone = function () {
      $mod.Application.TriggerNotification();
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TControl.Loaded.call(this);
      this.LoadedDone();
    };
    this.ColorChanging = function () {
      pas["WEBLib.Controls"].TControl.ColorChanging.call(this);
      if (this.GetContainer() != null) {
        this.GetContainer().style.setProperty(pas["WEBLib.Controls"].CSSBackground,pas["WEBLib.Graphics"].ColorToHTML(this.FColor));
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TControl.CreateInitialize.call(this);
      this.FAllowTouch = true;
      this.FModalResult = 0;
      this.FFormStyle = $mod.TFormStyle.fsNormal;
      this.FBorder = $mod.TFormBorderStyle.fbSizeable;
      this.FShadow = true;
      this.FShowClose = true;
      this.FTimerID = -1;
      this.FCaptionElement = null;
      this.FColor = 16777215;
      window.addEventListener("load",this.FLoadedPtr);
    };
    this.Create$2 = function (id) {
      this.FNoHTML = false;
      this.FCreating = true;
      this.FFormContainer = id;
      if (id === "") {
        pas["WEBLib.Controls"].TControl.Create$2.call(this,pas["WEBLib.WebTools"].cBodyTag)}
       else pas["WEBLib.Controls"].TControl.Create$2.call(this,id);
      this.FFormElement = "";
      this.FModalResult = 0;
      this.FFormStyle = $mod.TFormStyle.fsNormal;
      this.DoCreate();
      return this;
    };
    this.Create$5 = function (id, AReference) {
      this.FCreating = true;
      this.FFormContainer = id;
      pas["WEBLib.Controls"].TControl.Create$2.call(this,id);
      AReference.set(this);
      this.FFormElement = "";
      this.FModalResult = 0;
      this.FFormStyle = $mod.TFormStyle.fsNormal;
      this.DoCreate();
      return this;
    };
    this.Create$1 = function (AOwner) {
      this.FNoHTML = false;
      this.FCreating = true;
      this.FResizeObserver = null;
      pas["WEBLib.Controls"].TControl.Create$1.apply(this,arguments);
      this.FBorder = $mod.TFormBorderStyle.fbSingle;
      this.FFormFileName = "";
      this.FPopupMode = $mod.TPopupMode.pmNone;
      this.FPopupClose = $mod.TPopupClose.pcOnDeactivate;
      this.FPopup = true;
      this.FPosition = $mod.TPosition.poScreenCenter;
      this.FPopupOpacity = 1.0;
      return this;
    };
    this.Create$7 = function (AOwner, IsPopup, ABorder, ATitle) {
      this.FNoHTML = false;
      this.FCreating = true;
      this.FResizeObserver = null;
      pas["WEBLib.Controls"].TControl.Create$1.call(this,AOwner);
      this.FBorder = ABorder;
      this.FCaption = ATitle;
      this.FFormFileName = "";
      this.FPopupMode = $mod.TPopupMode.pmNone;
      this.FPopupClose = $mod.TPopupClose.pcOnDeactivate;
      this.FPopup = IsPopup;
      this.FPosition = $mod.TPosition.poScreenCenter;
      this.FPopupOpacity = 1.0;
      return this;
    };
    this.CreateNew = function (AOwner, Dummy) {
      this.Create$1(AOwner);
      return this;
    };
    this.CreateNew$1 = function (AFileName) {
      this.FCreating = true;
      pas["WEBLib.Controls"].TControl.Create$2.call(this,pas["WEBLib.WebTools"].cBodyTag);
      this.FFormFileName = AFileName;
      if (this.FFormFileName !== "") $mod.Application.LoadForm(this,AFileName);
      return this;
    };
    this.CreateNew$2 = function () {
      var AFileName = "";
      this.FCreating = true;
      AFileName = this.$class.GetHTMLFileName();
      pas["WEBLib.Controls"].TControl.Create$2.call(this,pas["WEBLib.WebTools"].cBodyTag);
      this.FFormFileName = AFileName;
      if (this.FFormFileName !== "") $mod.Application.LoadForm(this,AFileName);
      return this;
    };
    this.CreateNew$3 = function (AProc) {
      this.FCreatedProc = AProc;
      this.CreateNew$2();
      return this;
    };
    this.CreateNew$4 = function (AElementID, AProc) {
      this.CreateNew$5(AElementID,"",AProc);
      return this;
    };
    this.CreateNew$5 = function (AElementID, AFileName, AProc) {
      this.FCreating = true;
      this.FFormContainer = AElementID;
      pas["WEBLib.Controls"].TControl.Create$2.call(this,AElementID);
      this.FCreatedProc = AProc;
      this.FFormElement = AElementID;
      if (AFileName === "") AFileName = this.$class.GetHTMLFileName();
      if (AFileName !== "") {
        $mod.Application.LoadForm(this,AFileName)}
       else if (this.FCreatedProc != null) this.FCreatedProc(this);
      return this;
    };
    this.CreateDialog = function (ACaption) {
      var AFileName = "";
      this.FCreating = true;
      AFileName = this.$class.GetHTMLFileName();
      pas["WEBLib.Controls"].TControl.Create$2.call(this,pas["WEBLib.WebTools"].cBodyTag);
      this.SetCaption(ACaption);
      this.FPopup = true;
      this.SetBorder($mod.TFormBorderStyle.fbDialog);
      this.FFormFileName = AFileName;
      $mod.Application.LoadForm(this,AFileName);
      return this;
    };
    this.CreateDialogNew = function (ACaption) {
      var AFileName = "";
      this.FNoHTML = true;
      this.FCreating = true;
      AFileName = this.$class.GetHTMLFileName();
      pas["WEBLib.Controls"].TControl.Create$2.call(this,pas["WEBLib.WebTools"].cBodyTag);
      this.SetCaption(ACaption);
      this.FPopup = true;
      this.SetBorder($mod.TFormBorderStyle.fbDialog);
      this.FFormFileName = AFileName;
      return this;
    };
    this.Load = function () {
      var $Self = this;
      var Result = null;
      this.FShown = false;
      this.FFormFileName = this.$class.GetHTMLFileName();
      if (this.FFormFileName === "") {
        Result = new Promise(function (ASuccess, AFailed) {
          ASuccess($Self);
        });
      } else {
        Result = new Promise(function (ASuccess, AFailed) {
          $mod.Application.LoadForm$1($Self,$Self.FFormFileName,function (AForm) {
            ASuccess(AForm);
          });
        });
      };
      return Result;
    };
    this.Execute = function () {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (ASuccess, AFailed) {
        $Self.ShowModal$1(function (AValue) {
          ASuccess(AValue);
        });
      });
      return Result;
    };
    this.LoadAndExecute = function () {
      var $Self = this;
      var Result = null;
      async function LoadAsync() {
        var Result = false;
        Result = await $Self.Load();
        return Result;
      };
      LoadAsync();
      Result = new Promise(function (ASuccess, AFailed) {
        $Self.ShowModal$1(function (AValue) {
          ASuccess(AValue);
        });
      });
      return Result;
    };
    this.Destroy = function () {
      if (this.FVisible) this.Close();
      if (this.FOnDestroy != null) this.FOnDestroy(this);
      pas["WEBLib.Controls"].TControl.Destroy.call(this);
      if (this.FLayer$1 != null) {
        if (this.FormContainerElement() === this.FLayer$1.parentNode) this.FormContainerElement().removeChild(this.FLayer$1);
        this.FLayer$1 = null;
      };
    };
    this.Close = function () {
      var lAction = 0;
      var el = null;
      if (this.CloseQuery()) {
        this.UnbindEvents();
        lAction = $mod.TCloseAction.caHide;
        if (this.FTimerID !== -1) {
          window.clearInterval(this.FTimerID);
          this.FTimerID = -1;
        };
        if (this.FOnClose != null) this.FOnClose(this,{get: function () {
            return lAction;
          }, set: function (v) {
            lAction = v;
          }});
        if (lAction !== $mod.TCloseAction.caNone) {
          if (this.FLayer$1 != null) {
            if (this.GetContainer().parentNode === this.FLayer$1) {
              this.FLayer$1.removeChild(this.GetContainer());
            } else {
              if (this.GetContainer().parentNode.parentNode === this.FLayer$1) this.FLayer$1.removeChild(this.GetContainer().parentNode);
            };
            this.FContainer = null;
            if (this.FormContainerElement() === this.FLayer$1.parentNode) {
              this.FormContainerElement().removeChild(this.FLayer$1);
              $mod.Application.ChangeMaxZIndex(-1);
            };
            this.FLayer$1 = null;
          };
          if (this.FFormFileName === "") {
            if ((this.FFormElement !== "") && (this.GetContainer() != null)) {
              this.GetContainer().innerHTML = "";
              this.FContainer = null;
            } else if (this.GetContainer() != null) {
              if (this.FormContainerElement() === this.GetContainer().parentNode) this.FormContainerElement().removeChild(this.GetContainer());
              this.FContainer = null;
            };
          } else {
            if (this.FFormElement !== "") {
              this.GetContainer().innerHTML = "";
              this.FContainer = null;
            };
          };
          if ((this.FFormElement !== this.FFormContainer) && (this.FFormElement !== "")) {
            el = document.getElementById(this.FFormElement);
            if (el != null) el.innerHTML = "";
          };
          this.DoClose({get: function () {
              return lAction;
            }, set: function (v) {
              lAction = v;
            }});
          if ((lAction === $mod.TCloseAction.caFree) && !(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) {
            this.SetVisible(false);
            $impl.ReleaseForm(this);
            if ($mod.Application.FMainForm === this) $mod.Application.FMainForm = null;
          };
          $mod.Application.FActiveForm = this.FPrevActiveForm;
          this.SetVisible(false);
        };
      };
    };
    this.GetUniqueComponentName = function (AComponent) {
      var Result = "";
      var s = "";
      var i = 0;
      var j = 0;
      var found = false;
      i = 1;
      do {
        found = false;
        s = pas.System.Copy(this.$classname,2,this.$classname.length) + "_" + pas.System.Copy(AComponent.$classname,2,AComponent.$classname.length) + pas.SysUtils.IntToStr(i);
        i += 1;
        for (var $l = 0, $end = this.GetComponentCount() - 1; $l <= $end; $l++) {
          j = $l;
          if (this.GetComponent(j).FName === s) {
            found = true;
            break;
          };
        };
      } while (!(found === false));
      Result = s;
      return Result;
    };
    this.IsMiletus = function () {
      var Result = false;
      var cl = null;
      cl = this.$class.ClassType();
      Result = false;
      do {
        cl = cl.$ancestor;
        if ((cl != null) && (cl.$classname === "TMiletusForm")) {
          Result = true;
          break;
        };
      } while (!(!(cl != null) || (cl.$classname === "TForm")));
      return Result;
    };
    this.PreventDefault$1 = function () {
      this.GetElementEvent().preventDefault();
    };
    this.SetBounds = function (X, Y, AWidth, AHeight) {
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.Resize$1();
        this.SetBoundsInt(X,Y,AWidth,AHeight);
      } else pas["WEBLib.Controls"].TControl.SetBounds.call(this,X,Y,AWidth,AHeight);
    };
    this.SelectFirst = function () {
      if (this.GetControlsCount() > 0) this.GetControls(0).SetFocus();
    };
    this.SelectNext = function (CurControl, GoForward, CheckTabStop) {
      var i = 0;
      if (this.GetControlsCount() > 0) {
        for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
          i = $l;
          if (this.GetControls(i) === CurControl) {
            if (GoForward) {
              if ((i + 1) <= (this.GetControlsCount() - 1)) {
                this.GetControls(i + 1).SetFocus()}
               else this.GetControls(0).SetFocus();
            } else {
              if ((i - 1) >= 0) {
                this.GetControls(i - 1).SetFocus()}
               else this.GetControls(this.GetControlsCount() - 1).SetFocus();
            };
            break;
          };
        };
      };
    };
    this.Show$1 = function () {
      var dr = null;
      if (this.FCreating && this.FPopup) {
        $mod.Application.ChangeMaxZIndex(+1);
        this.FCreating = false;
        this.UpdateElement();
      };
      if (this.FFormFileName === "") {
        if (!(this.GetContainer() != null)) {
          if (this.FPopup) {
            this.FContainer = this.CreateElement();
            this.FPopupElement = this.GetContainer();
            this.SetFormPos();
            this.UpdateElement();
            this.FLayer$1.appendChild(this.GetContainer());
          } else {
            this.FContainer = this.CreateLayer();
            this.GetContainer().style.setProperty(pas["WEBLib.Controls"].CSSBackground,pas["WEBLib.Graphics"].ColorToHTML(this.FColor));
            document.body.appendChild(this.GetContainer());
          };
        } else {
          if (this.FPopup) {
            this.SetFormPos();
            this.FLayer$1.appendChild(this.GetContainer());
          } else {
            if (this.FLayer$1 != null) {
              this.FLayer$1.appendChild(this.GetContainer());
            } else {
              document.body.appendChild(this.GetContainer());
            };
          };
        };
        if (this.FPopup) {
          if (this.FBorder === $mod.TFormBorderStyle.fbSizeable) {
            dr = this.GetContainer().getBoundingClientRect();
            this.FOrigWidth = Math.round(dr.right - dr.left);
            this.FOrigHeight = Math.round(dr.bottom - dr.top);
            this.FTimerID = window.setInterval(rtl.createSafeCallback(this,"HandleDoResize"),100);
          } else {
            this.GetContainer().style.setProperty("resize","");
            this.GetContainer().style.setProperty("overflow","");
          };
        };
      };
      this.SetVisible(true);
      this.DoShow();
    };
    this.ShowModal = function () {
      var Result = 0;
      Result = this.ShowModal$1(null);
      return Result;
    };
    this.ShowModal$1 = function (AProc) {
      var Result = 0;
      if (this.FNoHTML || (this.FFormFileName === "")) {
        this.FPrevActiveForm = $mod.Application.FActiveForm;
        $mod.Application.FActiveForm = this;
        $mod.Application.CreateNewForm(this,"");
      };
      Result = 0;
      this.FNoHTML = false;
      this.FModalProc = AProc;
      this.SetModalResult(0);
      this.Show$1();
      return Result;
    };
    this.AddCSS = function (id, css) {
      function writeStylesOnce(styleName, cssText) {
          var styleElement = document.getElementById(styleName);
          if (styleElement) {
               styleElement.innerHTML = cssText;
            return;
            }
          styleElement = document.createElement('style');
          styleElement.type = 'text/css';
          styleElement.id = styleName;
          styleElement.innerHTML = cssText;
          document.getElementsByTagName('head')[0].appendChild(styleElement);
      }
      writeStylesOnce(id,css);
    };
    this.RemoveCSS = function (id) {
      var el = null;
      el = document.getElementById(id);
      if (el != null) document.head.removeChild(el);
    };
    this.UpdateCSS = function (id, css) {
      this.RemoveCSS(id);
      this.AddCSS(id,css);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$2",2,[["id",rtl.string]]);
    $r.addMethod("Create$5",2,[["id",rtl.string],["AReference",null,1]]);
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addMethod("Create$7",2,[["AOwner",pas.Classes.$rtti["TComponent"]],["IsPopup",rtl.boolean],["ABorder",$mod.$rtti["TFormBorderStyle"]],["ATitle",rtl.string]]);
    $r.addMethod("CreateNew",2,[["AOwner",pas.Classes.$rtti["TComponent"]],["Dummy",rtl.longint]]);
    $r.addMethod("CreateNew$1",2,[["AFileName",rtl.string]]);
    $r.addMethod("CreateNew$2",2,[]);
    $r.addMethod("CreateNew$3",2,[["AProc",$mod.$rtti["TFormCreatedProc"]]]);
    $r.addMethod("CreateNew$4",2,[["AElementID",rtl.string],["AProc",$mod.$rtti["TFormCreatedProc"]]]);
    $r.addMethod("CreateNew$5",2,[["AElementID",rtl.string],["AFileName",rtl.string],["AProc",$mod.$rtti["TFormCreatedProc"]]]);
    $r.addMethod("CreateDialog",2,[["ACaption",rtl.string]]);
    $r.addMethod("CreateDialogNew",2,[["ACaption",rtl.string]]);
  });
  this.$rtti.$Class("TForm");
  this.$rtti.$ClassRef("TFormClass",{instancetype: this.$rtti["TForm"]});
  rtl.createClass(this,"TForm",this.TCustomForm,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("CSSLibrary",0,$mod.$rtti["TCSSLibrary"],"FCSSLibrary","FCSSLibrary",{Default: $mod.TCSSLibrary.cssNone});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("FormContainer",2,pas["WEBLib.Controls"].$rtti["TElementID"],"FFormContainer","SetFormContainer");
    $r.addProperty("FormStyle",3,$mod.$rtti["TFormStyle"],"GetFormStyle","SetFormStyle");
    $r.addProperty("Menu",0,pas["WEBLib.Controls"].$rtti["TCustomControl"],"FMenu","FMenu");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("Shadow",2,rtl.boolean,"FShadow","SetShadow",{Default: true});
    $r.addProperty("ShowClose",0,rtl.boolean,"FShowClose","FShowClose",{Default: true});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("OnBeforeUnload",0,$mod.$rtti["TBeforeUnloadEvent"],"FOnBeforeUnload","FOnBeforeUnload");
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnClose",0,$mod.$rtti["TCloseEvent"],"FOnClose","FOnClose");
    $r.addProperty("OnCloseQuery",0,$mod.$rtti["TCloseQueryEvent"],"FOnCloseQuery","FOnCloseQuery");
    $r.addProperty("OnCreate",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnCreate","FOnCreate");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnDeactivate",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDeactivate","FOnDeactivate");
    $r.addProperty("OnDestroy",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDestroy","FOnDestroy");
    $r.addProperty("OnDOMContentLoaded",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDOMContentLoaded","FOnDOMContentLoaded");
    $r.addProperty("OnHashChange",0,$mod.$rtti["THashChangeEvent"],"FOnHashChange","FOnHashChange");
    $r.addProperty("OnResize",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnResize","FOnResize");
    $r.addProperty("OnShow",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnShow","FOnShow");
    $r.addProperty("OnScroll",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnScroll","FOnScroll");
    $r.addProperty("OnOrientationChange",0,$mod.$rtti["TOrientationChangeEvent"],"FOnOrientationChange","FOnOrientationChange");
    $r.addProperty("OnPaint",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnPaint","FOnPaint");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnUnload",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnUnload","FOnUnload");
  });
  rtl.createClass(this,"TCustomFrame",pas["WEBLib.Controls"].TCustomHTMLDiv,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomHTMLDiv.$init.call(this);
      this.FAutoScroll = false;
      this.FAutoSize = false;
      this.FBiDiMode$1 = 0;
      this.FConstraints = null;
      this.FCtl3D$1 = false;
      this.FDockSite = false;
      this.FDragCursor = 0;
      this.FDragKind = 0;
      this.FDragMode$1 = 0;
      this.FOnAlignInsertBefore = null;
      this.FOnAlignPosition = null;
      this.FOnCanResize = null;
      this.FOnConstrainedResize = null;
      this.FOnContextPopup = null;
      this.FOnDockDrop = null;
      this.FOnDockOver = null;
      this.FOnEndDock = null;
      this.FOnGesture = null;
      this.FOnGetSiteInfo = null;
      this.FOnMouseActivate = null;
      this.FOnMouseWheelDown$1 = null;
      this.FOnMouseWheelUp$1 = null;
      this.FOnStartDock = null;
      this.FOnUnDock = null;
      this.FPadding = null;
      this.FParentBackground = false;
      this.FParentCtl3D$1 = false;
      this.FPopupMenu = null;
    };
    this.$final = function () {
      this.FConstraints = undefined;
      this.FOnAlignInsertBefore = undefined;
      this.FOnAlignPosition = undefined;
      this.FOnCanResize = undefined;
      this.FOnConstrainedResize = undefined;
      this.FOnContextPopup = undefined;
      this.FOnDockDrop = undefined;
      this.FOnDockOver = undefined;
      this.FOnEndDock = undefined;
      this.FOnGesture = undefined;
      this.FOnGetSiteInfo = undefined;
      this.FOnMouseActivate = undefined;
      this.FOnMouseWheelDown$1 = undefined;
      this.FOnMouseWheelUp$1 = undefined;
      this.FOnStartDock = undefined;
      this.FOnUnDock = undefined;
      this.FPadding = undefined;
      this.FPopupMenu = undefined;
      pas["WEBLib.Controls"].TCustomHTMLDiv.$final.call(this);
    };
    var cMethodGet = "GET";
    var cTypeLoad = "load";
    var cHeaderCacheControl = "Cache-Control";
    var cValueNoCache = "no-cache";
    this.LoadHTMLFile = function (AId) {
      var $Self = this;
      var lFileName = "";
      var lRequest = null;
      function DoStatusCreate(AEvent) {
        var Result = false;
        var lElement = null;
        var lResponse = "";
        if (AEvent === null) return false;
        lResponse = AEvent.target.responseText;
        lElement = document.getElementById(AId);
        lElement.innerHTML = lResponse;
        Result = true;
        return Result;
      };
      lFileName = this.$class.GetHTMLFileName();
      if (lFileName !== "") {
        lRequest = new XMLHttpRequest();
        lRequest.addEventListener(cTypeLoad,rtl.createSafeCallback(null,DoStatusCreate));
        lRequest.open(cMethodGet,lFileName);
        lRequest.setRequestHeader(cHeaderCacheControl,cValueNoCache);
        lRequest.send();
      };
    };
    this.SetConstraints = function (AValue) {
      this.FConstraints.Assign(AValue);
    };
    this.SetPopupMenu = function (AValue) {
      this.FPopupMenu = AValue;
    };
    this.SetPadding = function (AValue) {
      this.FPadding.Assign(AValue);
    };
    this.GetHTMLFileName = function () {
      var Result = "";
      Result = this.$module.$name + $mod.Application.GetFormExtension();
      return Result;
    };
    this.LoadDFMValues = function () {
    };
    this.UpdateElement = function () {
      var nocolor = false;
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      nocolor = this.FColor in rtl.createSet(15790320,-1,16777215,16711422);
      if ((this.GetElementHandle() != null) && !this.IsUpdating() && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && nocolor) {
        this.GetElementHandle().style.setProperty("background-color",pas["WEBLib.Graphics"].ColorToHTML(0xF0F0F0));
      };
    };
    this.Create$2 = function (AId) {
      pas["WEBLib.Controls"].TControl.Create$2.call(this,AId);
      this.FPadding = pas["WEBLib.Controls"].TPadding.$create("Create$1");
      this.LoadHTMLFile(AId);
      return this;
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.Controls"].TControl.Create$1.call(this,AOwner);
      this.FPadding = pas["WEBLib.Controls"].TPadding.$create("Create$1");
      this.FConstraints = $mod.TSizeConstraints.$create("Create$1",[this]);
      return this;
    };
    this.CreateNew = function (AOwner) {
      this.Create$1(AOwner);
      this.BeforeLoadDFMValues();
      try {
        this.LoadFromForm();
      } finally {
        this.AfterLoadDFMValues();
      };
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FConstraints");
      rtl.free(this,"FPadding");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.LoadFromForm = function () {
      this.LoadDFMValues();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$2",2,[["AId",rtl.string]]);
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addMethod("CreateNew",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  this.$rtti.$Class("TFrame");
  this.$rtti.$ClassRef("TFrameClass",{instancetype: this.$rtti["TFrame"]});
  rtl.createClass(this,"TFrame",this.TCustomFrame,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoScroll",0,rtl.boolean,"FAutoScroll","FAutoScroll",{Default: false});
    $r.addProperty("AutoSize",0,rtl.boolean,"FAutoSize","FAutoSize",{Default: false});
    $r.addProperty("BiDiMode",4,pas["WEBLib.Controls"].$rtti["TBiDiMode"],"FBiDiMode$1","FBiDiMode$1");
    $r.addProperty("Constraints",2,$mod.$rtti["TSizeConstraints"],"FConstraints","SetConstraints");
    $r.addProperty("DockSite",0,rtl.boolean,"FDockSite","FDockSite",{Default: false});
    $r.addProperty("DoubleBuffered",0,rtl.boolean,"FDoubleBuffered","FDoubleBuffered",{Default: false});
    $r.addProperty("DragCursor",0,pas["WEBLib.Controls"].$rtti["TCursor"],"FDragCursor","FDragCursor",{Default: 12});
    $r.addProperty("DragKind",0,pas["WEBLib.Controls"].$rtti["TDragKind"],"FDragKind","FDragKind",{Default: pas["WEBLib.Controls"].TDragKind.dkDrag});
    $r.addProperty("DragMode",0,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode$1","FDragMode$1",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("Ctl3D",4,rtl.boolean,"FCtl3D$1","FCtl3D$1");
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Padding",2,pas["WEBLib.Controls"].$rtti["TPadding"],"FPadding","SetPadding");
    $r.addProperty("ParentBackground",0,rtl.boolean,"FParentBackground","FParentBackground",{Default: true});
    $r.addProperty("ParentBiDiMode",0,rtl.boolean,"FParentBiDiMode","FParentBiDiMode",{Default: true});
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor",{Default: false});
    $r.addProperty("ParentCtl3D",0,rtl.boolean,"FParentCtl3D$1","FParentCtl3D$1",{Default: true});
    $r.addProperty("ParentDoubleBuffered",0,rtl.boolean,"FParentDoubleBuffered","FParentDoubleBuffered",{Default: true});
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("ParentShowHint",0,rtl.boolean,"FParentShowHint","FParentShowHint");
    $r.addProperty("PopupMenu",2,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","SetPopupMenu");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("OnAlignInsertBefore",0,$mod.$rtti["TAlignInsertBeforeEvent"],"FOnAlignInsertBefore","FOnAlignInsertBefore");
    $r.addProperty("OnAlignPosition",0,$mod.$rtti["TAlignPositionEvent"],"FOnAlignPosition","FOnAlignPosition");
    $r.addProperty("OnCanResize",0,$mod.$rtti["TCanResizeEvent"],"FOnCanResize","FOnCanResize");
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnConstrainedResize",0,$mod.$rtti["TConstrainedResizeEvent"],"FOnConstrainedResize","FOnConstrainedResize");
    $r.addProperty("OnContextPopup",0,$mod.$rtti["TContextPopupEvent"],"FOnContextPopup","FOnContextPopup");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnDockDrop",0,$mod.$rtti["TDockDropEvent"],"FOnDockDrop","FOnDockDrop");
    $r.addProperty("OnDockOver",0,$mod.$rtti["TDockOverEvent"],"FOnDockOver","FOnDockOver");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDock",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FOnEndDock","FOnEndDock");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnGesture",0,$mod.$rtti["TGestureEvent"],"FOnGesture","FOnGesture");
    $r.addProperty("OnGetSiteInfo",0,$mod.$rtti["TGetSiteInfoEvent"],"FOnGetSiteInfo","FOnGetSiteInfo");
    $r.addProperty("OnMouseActivate",0,$mod.$rtti["TMouseActivateEvent"],"FOnMouseActivate","FOnMouseActivate");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas["WEBLib.Controls"].$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnMouseWheelDown",0,$mod.$rtti["TMouseWheelUpDownEvent"],"FOnMouseWheelDown$1","FOnMouseWheelDown$1");
    $r.addProperty("OnMouseWheelUp",0,$mod.$rtti["TMouseWheelUpDownEvent"],"FOnMouseWheelUp$1","FOnMouseWheelUp$1");
    $r.addProperty("OnResize",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnResize","FOnResize");
    $r.addProperty("OnStartDock",0,$mod.$rtti["TStartDockEvent"],"FOnStartDock","FOnStartDock");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
    $r.addProperty("OnUnDock",0,$mod.$rtti["TUnDockEvent"],"FOnUnDock","FOnUnDock");
  });
  rtl.recNewT(this,"TApplicationError",function () {
    this.AMessage = "";
    this.AFile = "";
    this.ALineNumber = 0;
    this.AColNumber = 0;
    this.AStack = "";
    this.AError = null;
    this.$eq = function (b) {
      return (this.AMessage === b.AMessage) && (this.AFile === b.AFile) && (this.ALineNumber === b.ALineNumber) && (this.AColNumber === b.AColNumber) && (this.AStack === b.AStack) && (this.AError === b.AError);
    };
    this.$assign = function (s) {
      this.AMessage = s.AMessage;
      this.AFile = s.AFile;
      this.ALineNumber = s.ALineNumber;
      this.AColNumber = s.AColNumber;
      this.AStack = s.AStack;
      this.AError = s.AError;
      return this;
    };
    var $r = $mod.$rtti.$Record("TApplicationError",{});
    $r.addField("AMessage",rtl.string);
    $r.addField("AFile",rtl.string);
    $r.addField("ALineNumber",rtl.longint);
    $r.addField("AColNumber",rtl.longint);
    $r.addField("AStack",rtl.string);
    $r.addField("AError",pas.JS.$rtti["TJSObject"]);
  });
  this.THintPosition = {"0": "hpLeft", hpLeft: 0, "1": "hpTop", hpTop: 1, "2": "hpRight", hpRight: 2, "3": "hpBottom", hpBottom: 3};
  this.$rtti.$Enum("THintPosition",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.THintPosition});
  this.TOnlineStatus = {"0": "osOnline", osOnline: 0, "1": "osOffline", osOffline: 1};
  this.$rtti.$Enum("TOnlineStatus",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TOnlineStatus});
  this.$rtti.$MethodVar("TApplicationErrorEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AError",this.$rtti["TApplicationError"]],["Handled",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TApplicationHashChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AHash",rtl.string],["Handled",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TApplicationOnlineChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AStatus",this.$rtti["TOnlineStatus"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TApplicationActiveChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Active",rtl.boolean]]), methodkind: 0});
  this.$rtti.$MethodVar("TApplicationCallBackEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AQuery",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TApplicationExceptionEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["E",pas.SysUtils.$rtti["Exception"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TApplicationPopStateEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["State",rtl.jsvalue]]), methodkind: 0});
  this.$rtti.$MethodVar("TApplicationAutoCreateFormEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AInstanceClass",this.$rtti["TFormClass"]],["AReference",null,1]]), methodkind: 0});
  rtl.createClass(this,"TApplication",pas["WEBLib.Controls"].TControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TControl.$init.call(this);
      this.FAppContainer = "";
      this.FMainFormOnTaskBar = false;
      this.FCanCreateForm = false;
      this.FAppInitializing = false;
      this.FLastReq = null;
      this.FFormCaptionHeight = 0;
      this.FActiveForm = null;
      this.FMainForm = null;
      this.FLoadForm = null;
      this.FInitFormClassName = "";
      this.FFormStack = null;
      this.FParameters = null;
      this.FIsRedirect = false;
      this.FLanguage = 0;
      this.FOnImageCacheReady = null;
      this.FOnError = null;
      this.FOnHashChange = null;
      this.FAutoFormRoute = false;
      this.FErrorType = 0;
      this.FClientConnector = null;
      this.FOnOnlineChange = null;
      this.FOnActivate = null;
      this.FThemeTextColor = 0;
      this.FThemeColor = 0;
      this.FThemed = false;
      this.FThemeButtonClassName = "";
      this.FOnOAuthToken = null;
      this.FOnOAuthCallBack = null;
      this.FOnFontCacheReady = null;
      this.FOnPopState = null;
      this.FMaxZIndex = 0;
      this.FCreatedProc = null;
      this.FHandleOAuth = false;
      this.FHintPause = 0;
      this.FHintHidePause = 0;
      this.FHintPosition = 0;
      this.FHintClassName = "";
      this.FOnExit$1 = null;
      this.FOnException = null;
      this.FOnAutoCreateForm = null;
      this.FRouting = false;
    };
    this.$final = function () {
      this.FLastReq = undefined;
      this.FActiveForm = undefined;
      this.FMainForm = undefined;
      this.FLoadForm = undefined;
      this.FFormStack = undefined;
      this.FParameters = undefined;
      this.FOnImageCacheReady = undefined;
      this.FOnError = undefined;
      this.FOnHashChange = undefined;
      this.FClientConnector = undefined;
      this.FOnOnlineChange = undefined;
      this.FOnActivate = undefined;
      this.FOnOAuthToken = undefined;
      this.FOnOAuthCallBack = undefined;
      this.FOnFontCacheReady = undefined;
      this.FOnPopState = undefined;
      this.FCreatedProc = undefined;
      this.FOnExit$1 = undefined;
      this.FOnException = undefined;
      this.FOnAutoCreateForm = undefined;
      pas["WEBLib.Controls"].TControl.$final.call(this);
    };
    this.DoFormLoad = function (Event) {
      var Result = false;
      var LResponse = "";
      LResponse = Event.target.responseText;
      this.CreateNewForm(this.FLoadForm,LResponse);
      if (this.FCreatedProc != null) {
        this.FCreatedProc(this);
        this.FCreatedProc = null;
      };
      Result = true;
      return Result;
    };
    this.DoFormAbort = function (Event) {
      var Result = false;
      pas["WEBLib.Dialogs"].ShowMessage("Failed to load form HTML template file");
      Result = true;
      return Result;
    };
    this.DoHandleError = function (Event) {
      var Result = false;
      var err = $mod.TApplicationError.$new();
      var el = null;
      var sp = null;
      var x = null;
      var msg = "";
      var s = "";
      var isError = false;
      var jserror = undefined;
      var ex = null;
      isError = true;
      if (Event.message == undefined) {
        isError = false;
      };
      if (Event.message === "ResizeObserver loop limit exceeded") return Result;
      if (Event.message === "ResizeObserver loop completed with undelivered notifications.") return Result;
      if (!isError) {
        err.AMessage = "Undefined JavaScript exception";
        err.AFile = "";
        err.ALineNumber = 0;
        err.AColNumber = 0;
        err.AError = null;
        if (this.FOnError != null) this.FOnError(this,$mod.TApplicationError.$clone(err),{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }});
        return Result;
      };
      err.AMessage = Event.message;
      err.AFile = Event.filename;
      err.ALineNumber = Event.lineno;
      err.AColNumber = Event.colno;
      err.AError = Event.error;
      err.AStack = "";
      s = "";
      jserror = null;
      if (Event.error != null) {
        if (Event.error.stack) {
          err.AStack = Event.error.stack;
        }
        if (Event.error.fMessage) {
          err.AMessage = Event.error.fMessage;
        };
        function objToString (obj) {
              var str = '';
              for (var p in obj) {
                  if (obj.hasOwnProperty(p)) {
                      str += p + '::' + obj[p] + '\n';
                  }
              }
              return str;
              }
        
              // detect if it was an RTL exception
              if (Event.error.hasOwnProperty('FJSError'))
              {
                jserror = Event.error['FJSError'];
              }
        
        
              s = objToString(Event.error);
      };
      if (pas.System.Assigned(jserror)) {
        ex = Event.error;
        if (this.FOnException != null) this.FOnException(this,ex);
      };
      Result = false;
      msg = "ERROR<br>" + err.AMessage + " | " + s + err.AStack + "<BR> at " + err.AFile + " [" + pas.SysUtils.IntToStr(err.ALineNumber) + ":" + pas.SysUtils.IntToStr(err.AColNumber) + "]";
      var $tmp = this.FErrorType;
      if ($tmp === $mod.TApplicationErrorType.aeFooter) {
        el = document.getElementById("tmserrormessage");
        if (el != null) {
          rtl.asExt(el.firstChild,HTMLElement).innerHTML = msg;
        } else {
          el = document.createElement("DIV");
          el.setAttribute("id","tmserrormessage");
          el.style.setProperty("position","absolute");
          el.style.setProperty("font-family","Courier");
          el.style.setProperty("font-size","8pt");
          el.style.setProperty("bottom","0");
          el.style.setProperty("width","100%");
          el.style.setProperty("height","100px");
          el.style.setProperty("background","#ff0000");
          el.style.setProperty("color","#ffffff");
          document.body.style.setProperty("padding","0");
          document.body.style.setProperty("margin","0");
          sp = document.createElement("SPAN");
          sp.style.setProperty("margin-left","4px");
          sp.style.setProperty("float","left");
          sp.style.setProperty("overflow","hidden");
          sp.style.setProperty("display","block");
          sp.innerHTML = msg;
          el.appendChild(sp);
          x = document.createElement("SPAN");
          x.style.setProperty("font-family","Courier");
          x.style.setProperty("font-size","8pt");
          x.style.setProperty("font-weight","bold");
          x.style.setProperty("position","absolute");
          x.style.setProperty("width","20px");
          x.style.setProperty("vertical-align","top");
          x.style.setProperty("cursor","pointer");
          x.style.setProperty("text-align","right");
          x.style.setProperty("right","4px");
          x.style.setProperty("display","block");
          x.innerHTML = "X";
          x.onclick = rtl.createSafeCallback(this,"DoErrorClose");
          el.appendChild(x);
          document.body.appendChild(el);
        };
      } else if ($tmp === $mod.TApplicationErrorType.aeAlert) {
        window.alert(msg)}
       else if ($tmp === $mod.TApplicationErrorType.aeDialog) {
        this.AddControlLink("googlematerial","https://fonts.googleapis.com/icon?family=Material+Icons");
        pas["WEBLib.Dialogs"].MessageDlg(msg,pas["WEBLib.Dialogs"].TMsgDlgType.mtError,rtl.createSet(pas["WEBLib.Dialogs"].TMsgDlgBtn.mbOK),null);
      };
      if (this.FOnError != null) this.FOnError(this,$mod.TApplicationError.$clone(err),{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }});
      return Result;
    };
    this.DoHandleExit = function (Event) {
      var Result = false;
      Result = true;
      if (this.FOnExit$1 != null) this.FOnExit$1(this);
      return Result;
    };
    this.DoHashChange = function (Event) {
      var Result = false;
      var s = "";
      var fc = null;
      var frm = null;
      var bdy = null;
      var Handled = false;
      Result = true;
      if (!this.FAutoFormRoute) return Result;
      s  = location.hash;
      pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,1);
      Handled = false;
      if (this.FOnHashChange != null) this.FOnHashChange(this,s,{get: function () {
          return Handled;
        }, set: function (v) {
          Handled = v;
        }});
      if (Handled) return Result;
      if (s === "") s = this.FInitFormClassName;
      if (s !== "") {
        if (this.FInitFormClassName === "") this.FInitFormClassName = this.FActiveForm.$classname;
        fc = pas.Classes.GetClass(s);
        if (fc != null) {
          bdy = document.body;
          this.CreateForm$6(fc,bdy,{get: function () {
              return frm;
            }, set: function (v) {
              frm = v;
            }});
        };
      };
      return Result;
    };
    this.DoPopState = function (Event) {
      var Result = false;
      if (this.FOnPopState != null) this.FOnPopState(this,Event.state);
      Result = true;
      return Result;
    };
    this.DoErrorClose = function (Event) {
      var Result = false;
      document.body.removeChild(Event.target.parentElement);
      Result = true;
      return Result;
    };
    this.DoUpdateOnlineStatus = function (Event) {
      var Result = false;
      Result = true;
      if (this.FOnOnlineChange != null) {
        if (window.navigator.onLine) {
          this.FOnOnlineChange(this,$mod.TOnlineStatus.osOnline)}
         else this.FOnOnlineChange(this,$mod.TOnlineStatus.osOffline);
      };
      return Result;
    };
    this.DoVisibilityChange = function (Event) {
      var Result = false;
      var res = false;
      Result = true;
      res = document.visibilityState === "visible";
      if (this.FOnActivate != null) this.FOnActivate(this,res);
      return Result;
    };
    this.SetLanguage = function (Value) {
      this.FLanguage = Value;
    };
    this.GetIsOnline = function () {
      var Result = false;
      Result = window.navigator.onLine;
      return Result;
    };
    this.GetIsMobile = function () {
      var Result = false;
      var mob = false;
      function TestMobile() {
            var check = false;
           (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
           return check;
           };
      
          mob = TestMobile();
      Result = mob;
      return Result;
    };
    this.GetIsPWA = function () {
      var Result = false;
      var pwa = false;
      pwa = ('standalone' in window.navigator) && (window.navigator.standalone);
      Result = pwa;
      return Result;
    };
    this.InternalDownloadFile = function (AData, AFileName, AType, ANewTab) {
      var lElement = document.createElement('a');
      var lBlob = new Blob([AData], {type: AType})
      var lUrl = window.URL.createObjectURL(lBlob);
      lElement.href = lUrl;
      if (AFileName != ''){
        lElement.setAttribute('download', AFileName);
      }
      lElement.style.display = 'none';
      if (ANewTab == true) {
        lElement.target = '_blank';
      }
      document.body.appendChild(lElement);
      lElement.click();
      document.body.removeChild(lElement);
    };
    this.CreateNewForm = function (AForm, HTML) {
      var eh = null;
      var op = null;
      var span = null;
      var childspan = null;
      var formspan = null;
      var l = 0;
      var t = 0;
      var w = 0;
      var h = 0;
      var LCreatedProc = null;
      var LCaptionDiv = null;
      var LCaptionHeight = 0;
      var ro = null;
      if (this.FMainForm === null) this.FMainForm = AForm;
      span = null;
      formspan = null;
      LCaptionHeight = 0;
      if (!AForm.FPopup && (AForm.FFormElement !== "")) {
        AForm.FLayer$1 = null;
        eh = document.getElementById(AForm.FFormElement);
        if (eh != null) {
          eh.innerHTML = HTML;
          if (AForm.FElementClassName === "") eh.style.setProperty(pas["WEBLib.Controls"].CSSBackground,pas["WEBLib.Graphics"].ColorToHTML(AForm.FColor));
        };
      } else {
        AForm.ClearControls();
        AForm.FLayer$1 = AForm.CreateLayer();
        document.body.appendChild(AForm.FLayer$1);
        eh = AForm.FLayer$1;
        if (AForm.FPopup && (AForm.FPopupOpacity < 1)) {
          op = AForm.CreateLayer();
          op.style.setProperty(pas["WEBLib.Controls"].CSSBackground,"black");
          op.style.setProperty("opacity",pas["WEBLib.WebTools"].DoubleToHTML(AForm.FPopupOpacity));
          op.style.setProperty(pas["WEBLib.Controls"].CSSZIndex,$mod.Application.MaxZIndexStr());
          eh.appendChild(op);
        };
        $mod.Application.ChangeMaxZIndex(+1);
        span = document.createElement("DIV");
        span.style.setProperty(pas["WEBLib.Controls"].CSSZIndex,$mod.Application.MaxZIndexStr());
        AForm.FPopupElement = span;
        if (AForm.FBorder === $mod.TFormBorderStyle.fbDialogSizeable) {
          span.style.setProperty("resize","both");
          span.style.setProperty("overflow","auto");
          ro = null;
          try
          {
          var frm = AForm;
          ro = new ResizeObserver( function(entries)  {
             window.requestAnimationFrame(() => {
                if (!Array.isArray(entries) || !entries.length) {
                  return;
                }
             entries.forEach( function(entry) {
               frm.HandleObserver();
               });
               } );
          });
            // Observe the scrollingElement for when the window gets resized
            ro.observe(span);
          }
          catch(err)
          {
            span.style.removeProperty('resize');
            span.style.removeProperty('overflow');
          };
          AForm.FResizeObserver = ro;
        };
        if (AForm.FElementClassName !== "") span.setAttribute("class",AForm.FElementClassName);
        if (AForm.FShadow && AForm.FPopup) span.style.setProperty("box-shadow","3px 3px 3px silver");
        eh.appendChild(span);
        AForm.GetMethodPointers();
        if (AForm.FBorder in rtl.createSet($mod.TFormBorderStyle.fbDialog,$mod.TFormBorderStyle.fbDialogSizeable)) {
          LCaptionDiv = AForm.CreateCaption();
          span.appendChild(LCaptionDiv);
          childspan = document.createElement("DIV");
          childspan.style.setProperty("position","absolute");
          childspan.style.setProperty("width","100%");
          childspan.setAttribute("id","childspan");
          span.appendChild(childspan);
          formspan = childspan;
          LCaptionHeight = $mod.Application.FFormCaptionHeight;
        } else {
          formspan = span;
        };
        formspan.innerHTML = HTML;
        AForm.FContainer = formspan;
      };
      AForm.Init();
      AForm.LoadDFMValues();
      if ((AForm.FBorder in rtl.createSet($mod.TFormBorderStyle.fbDialog,$mod.TFormBorderStyle.fbDialogSizeable)) && (AForm.FElementCaptionClassName !== "")) {
        LCaptionDiv.classList.add(AForm.FElementCaptionClassName);
        LCaptionDiv.style.removeProperty("background-color");
        LCaptionDiv.style.removeProperty("color");
      };
      if (AForm.FLayer$1 != null) {
        if (!AForm.FPopup) {
          if (AForm.FElementClassName === "") {
            if (AForm.FColor !== -1) {
              eh.style.setProperty(pas["WEBLib.Controls"].CSSBackground,pas["WEBLib.Graphics"].ColorToHTML(AForm.FColor))}
             else eh.style.setProperty(pas["WEBLib.Controls"].CSSBackground,"white");
          } else eh.setAttribute("class",AForm.FElementClassName);
        };
      };
      if ((span != null) && (AForm.FFormContainer === "") && AForm.FPopup) {
        span.style.setProperty("position","absolute");
        l = Math.max(0,Math.round(($mod.WinWidth() - AForm.GetWidth()) / 2)) + window.scrollX;
        t = Math.max(0,Math.round(($mod.WinHeight() - AForm.GetHeight()) / 2)) + window.scrollY;
        w = AForm.GetWidth();
        h = AForm.GetClientHeight() + LCaptionHeight;
        if (AForm.FElementClassName === "") {
          span.style.setProperty(pas["WEBLib.Controls"].CSSBackground,pas["WEBLib.Graphics"].ColorToHTML(AForm.FColor));
          span.style.setProperty("border","1px Black solid");
        };
        span.style.setProperty("top",pas.SysUtils.IntToStr(t) + "px");
        span.style.setProperty("left",pas.SysUtils.IntToStr(l) + "px");
        span.style.setProperty("width",pas.SysUtils.IntToStr(w) + "px");
        span.style.setProperty("height",pas.SysUtils.IntToStr(h) + "px");
      };
      if (formspan != null) this.ActivateChildScripts(formspan);
      if (AForm.FOnCreate != null) AForm.FOnCreate(AForm);
      if (AForm.FCreatedProc != null) {
        LCreatedProc = AForm.FCreatedProc;
        AForm.FCreatedProc = null;
        LCreatedProc(AForm);
      };
      AForm.Loaded();
      AForm.InitAnchoring();
      AForm.UpdateChildAnchoring();
      AForm.FCreating = false;
      AForm.UpdateElement();
      if (!AForm.EventsBound()) AForm.BindEvents();
      AForm.Resize$1();
      AForm.DoShow();
    };
    this.GetFormExtension = function () {
      var Result = "";
      if (this.FLanguage !== pas["WEBLib.Lang"].TUILanguage.lNone) {
        Result = "_" + pas["WEBLib.Lang"].GetLanguageISO639_1Code(this.FLanguage) + pas["WEBLib.WebTools"].cHTMLExt}
       else Result = pas["WEBLib.WebTools"].cHTMLExt;
      return Result;
    };
    var sExternalBrowserAuthorizationOK = '<div class="text2">Application succesfully authorized</div>You can close this browser window';
    var sExternalBrowserAuthorizationFailed = '<div class="text2">Application authorization failed</div><br/>Please try again.';
    var LB = "\r\n";
    var ImageFail = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeA" + "AAACXBIWXMAAA7DAAAOwwHHb6hkAAABtElEQVR4nO2bUY7CMAxEhz0NB+EgrDjXCg6yB+E4+9NKCAiN" + "7XHcjf1+ED+Z6ahNHScFiqIoBNwvp+v9crpG+3hG6+sgFQFwXv7ejj+/31JBDyy+ugN4ElkJD8Hqqyu" + "AhohYjA3D12YAGyIiMSYsXx8D6BTpFmPB9NUMQCjSJcaA7ettAEqRTTErHr5eAjCKfBSz4OXryzhgiz" + "OzWCJd/Fs8HoFHzHeCtxf2JNgt3MMID8zXoMpAtDarEDIbidJklMJUQ6MDty6GNDSNRdxtluWwhReDU" + "fONKADAx2jkZCsOAOAaXn4pY2let6oAAN/qTIG61lAHAOwmBFO1aQoACA/BXGqbAwDCQqCsOCkBAMND" + "oC23aQEAw0Kg9hqoAQDuIdAbLfQAALcQXFptLgEA9BDc+oxeLbF/Qz0C7AFTT4KpX4OpC6HUpXDqxVD" + "q5fBOLn5lbEMkdUssdVM0dVs89cZI6q2x1JujqbfHUx+Q2MPFj/LidUqsKajB05NXS4y6Zl/GurHGe6" + "QOSpLF5jgqqxSb67C0UGzO4/KdYnN/MLEhluOTmYZY+MWvDPU122dzRVHk5g+X6Lw5aVkK9AAAAABJRU5ErkJggg==";
    var ImageSuccess = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaX" + "HeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACC0lEQVR4nO2Zv3GDMBSHv+QyQEbICM4EOW+Q9BS4o2QTU" + "9LZBQNkg6zgETyCR0iRkOMIAv3Xk0+/zsiI931nI3iCkpKSkpKSkpKSkpJ7SDN0x2bo3nW//xCymNhp" + "hu4E1MAN2PdVe9k6524ETODHXIHXvmpva+c9BqwpWhbgAV6Ar61zsxeggB+z+x1XJmsBG/Bj6mboWtV" + "gtvcATfhpPvqq/ZwfzFKABTwoVobsBFjCj7kyWxmyugc4wsPCypCNAA/wY/L7C3iEP/dVe5geEC8gJD" + "wIFxAaHgQLiAEPQgXEggeBAmLCgzABseFBkIAU8CBEQCp4ECAgJTwYChibCzYXWpmv9jCVFTwYCJgVa" + "31BxXwucapFS4CiWOsLS4EHDQEbxRoXIAkeNgRoFqtdiDR4WBFgWOxmQRLhQdEQsSi2bobuqBqUCg8L" + "vwDHYg991Z49zjeNd3iYCfBU7J8E6fAAT7PPOw9znpqhA3hDODz8F7Dnp2vqKmJ1O8ogQeFh+R7wjB8" + "JrgkOD4plUICEKPCw/hyQSkI0eNh+EowtISo86L0LxJIQHR703wZDS0gCD2b9gFASksGDeUfIt4Sk8G" + "DRE/QoITk8WDZFPUgQAQ8OXWEHCWLgwbEtbiFBFDx42BcwkCAOHjxtjGhIEAkPHneGViSIhQfPW2MLE" + "kTDQ4C9wYmEi3T4kpKSkm+5ax+YhPsUTQAAAABJRU5ErkJggg==";
    var PlaceHolderImage = "#PLACEHOLDERIMAGE#";
    var PlaceHolderText = "#PLACEHOLDERTEXT#";
    var PlaceHolderColor = "#PLACEHOLDERCOLOR#";
    var AuthHTMLTemplate = "<!doctype html>" + LB + '<html lang="en">' + LB + "<head>" + LB + "  <title>Authentication Result</title>" + LB + '  <meta name="viewport" content="width=device-width, initial-scale=1">' + LB + "</head>" + LB + "<body>" + LB + "<style>" + LB + "  hr" + LB + "  {" + LB + "    border: none;" + LB + "    height: 1px;" + LB + "    background-color: rgb(171, 171, 171);" + LB + "  }" + LB + "  div.container" + LB + "  {" + LB + "    position: fixed;" + LB + "    font-family: Arial;" + LB + "    font-size: 12pt;" + LB + "    max-width: 100%;" + LB + "    max-height: 100%;" + LB + "    top: 50%;" + LB + "    left: 50%;" + LB + "    transform: translate(-50%, -50%);" + LB + "  }" + LB + "  div.section" + LB + "  {" + LB + "    display: inline-block;" + LB + "    margin: 15px;" + LB + "    padding: 5px;" + LB + "    float: left;" + LB + "  }" + LB + "  div.image img" + LB + "  {" + LB + "    height: 100%;" + LB + "  }" + LB + "  div.text" + LB + "  {" + LB + "    padding-top: 15px;" + LB + "  }" + LB + "  div.text2" + LB + "  {" + LB + "    font-size: 18pt;" + LB + "    color: #PLACEHOLDERCOLOR#;" + LB + "  }" + LB + "  span.title" + LB + "  {" + LB + "    font-size: 26px;" + LB + "  }" + LB + "</style>" + LB + '  <div class="container">' + LB + '  <div class="section image">' + LB + '    <img src="#PLACEHOLDERIMAGE#">' + LB + "  </div>" + LB + '  <div class="section text">' + LB + "  #PLACEHOLDERTEXT#" + LB + "  </div>" + LB + "  </div>" + LB + " </body>" + LB + "</html>";
    this.GetAuthorizationPageHTML = function (AAuthorizationSuccess) {
      var $Self = this;
      var Result = "";
      function ReplacePlaceHolders(APlaceHolders, APlaceHolderValues) {
        var Result = "";
        var I = 0;
        var s = "";
        s = AuthHTMLTemplate;
        for (var $l = 0, $end = rtl.length(APlaceHolders) - 1; $l <= $end; $l++) {
          I = $l;
          s = pas.SysUtils.StringReplace(s,APlaceHolders[I],APlaceHolderValues[I],rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
        };
        Result = s;
        return Result;
      };
      if (AAuthorizationSuccess) {
        Result = ReplacePlaceHolders([PlaceHolderImage,PlaceHolderText,PlaceHolderColor],[ImageSuccess,sExternalBrowserAuthorizationOK,"rgb(104, 164, 144)"])}
       else Result = ReplacePlaceHolders([PlaceHolderImage,PlaceHolderText,PlaceHolderColor],[ImageFail,sExternalBrowserAuthorizationFailed,"rgb(216, 99, 68)"]);
      return Result;
    };
    this.GetColorScheme = function () {
      var Result = 0;
      Result = $mod.TApplicationColorScheme.csNoScheme;
      if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          Result = $mod.TApplicationColorScheme.csDark}
         else Result = $mod.TApplicationColorScheme.csLight;
      };
      return Result;
    };
    this.GetActive = function () {
      var Result = false;
      Result = !document.hidden;
      return Result;
    };
    this.GetBootstrapVersion = function () {
      var Result = 0;
      var bv = "";
      bv = "";
      if (typeof bootstrap !== 'undefined') {
        bv = bootstrap.Tooltip.VERSION;
      };
      Result = $mod.TBootstrapVersion.bv3;
      if (pas.System.Pos("4.",bv) === 1) {
        Result = $mod.TBootstrapVersion.bv4}
       else if (pas.System.Pos("5.",bv) === 1) Result = $mod.TBootstrapVersion.bv5;
      return Result;
    };
    this.ReloadForm = function () {
      var $Self = this;
      var lFileName = "";
      function DoStatusCreate(Event) {
        var Result = false;
        var i = 0;
        var ctl = null;
        var s = "";
        var sl = null;
        var response = "";
        response = Event.target.responseText;
        sl = pas.Classes.TStringList.$create("Create$1");
        for (var $l = $Self.FActiveForm.GetControlsCount() - 1; $l >= 0; $l--) {
          i = $l;
          ctl = $Self.FActiveForm.GetControls(i);
          s = ctl.SaveState();
          ctl.GetElementHandle().id = ctl.FName;
          s = ctl.FName + "=" + s;
          sl.Add(s);
        };
        for (var $l1 = $Self.FActiveForm.GetControlsCount() - 1; $l1 >= 0; $l1--) {
          i = $l1;
          ctl = $Self.FActiveForm.GetControls(i);
          $Self.FActiveForm.RemoveComponent(ctl);
          ctl = rtl.freeLoc(ctl);
        };
        $Self.FActiveForm.ClearControls();
        $Self.FActiveForm.UnbindEvents();
        document.body.innerHTML = response;
        $Self.FActiveForm.CreateControl();
        $Self.FActiveForm.DoCreate();
        $Self.FActiveForm.Init();
        for (var $l2 = $Self.FActiveForm.GetControlsCount() - 1; $l2 >= 0; $l2--) {
          i = $l2;
          ctl = $Self.FActiveForm.GetControls(i);
          s = sl.GetValue(ctl.FName);
          if (s !== "") ctl.LoadState(s);
        };
        sl = rtl.freeLoc(sl);
        $Self.FActiveForm.DoShow();
        Result = true;
        return Result;
      };
      lFileName = this.FActiveForm.$class.GetHTMLFileName();
      this.FLastReq = new XMLHttpRequest();
      this.FLastReq.addEventListener("load",rtl.createSafeCallback(null,DoStatusCreate));
      this.FLastReq.open("GET",lFileName);
      this.FLastReq.setRequestHeader("Cache-Control","no-cache");
      this.FLastReq.send();
    };
    this.ActivateChildScripts = function (AElement) {
      function nodeScriptReplace(node) {
                  if ( nodeScriptIs(node) === true ) {
                          node.parentNode.replaceChild( nodeScriptClone(node) , node );
                  }
                  else {
                          var i        = 0;
                          var children = node.childNodes;
                          while ( i < children.length ) {
                                  nodeScriptReplace( children[i++] );
                          }
                  }
      
                  return node;
          }
          function nodeScriptIs(node) {
                  return node.tagName === 'SCRIPT';
          }
          function nodeScriptClone(node){
                  var script  = document.createElement("script");
                  script.async = false;
                  script.text = node.innerHTML;
                  for( var i = node.attributes.length-1; i >= 0; i-- ) {
                          script.setAttribute( node.attributes[i].name, node.attributes[i].value );
                  }
                  return script;
          }
          nodeScriptReplace(AElement);
    };
    this.ChangeMaxZIndex = function (Delta) {
      this.FMaxZIndex = this.FMaxZIndex + Delta;
    };
    this.TriggerNotification = function () {
    };
    this.AutoCreateForm = function (AInstanceClass, AReference) {
      if (this.FOnAutoCreateForm != null) {
        this.FOnAutoCreateForm(this,AInstanceClass,AReference)}
       else this.CreateForm(AInstanceClass,AReference);
    };
    this.SetHash = function (AValue) {
      window.location.hash = AValue;
    };
    this.GetHash = function () {
      var Result = "";
      var s = "";
      s = window.location.hash;
      if ((s.length > 0) && (s.charAt(0) === "#")) pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,1);
      Result = s;
      return Result;
    };
    this.PushForm = function (AForm) {
      var i = 0;
      for (var $l = 0, $end = AForm.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        AForm.GetControls(i).PersistinHTML();
      };
      AForm.FFormContent = document.body.innerHTML;
      for (var $l1 = 0, $end1 = AForm.GetControlsCount() - 1; $l1 <= $end1; $l1++) {
        i = $l1;
        AForm.GetControls(i).DisableTab();
      };
      this.FFormStack.Add(AForm);
    };
    this.PopForm = function () {
      var Result = null;
      var i = 0;
      var frm = "";
      if (this.FFormStack.GetCount() > 0) {
        Result = rtl.getObject(this.FFormStack.Get(this.FFormStack.GetCount() - 1));
        frm = Result.FFormContent;
        this.FFormStack.Delete(this.FFormStack.GetCount() - 1);
        document.body.innerHTML = frm;
        Result.InitFromHTML();
        Result.BindEvents();
        for (var $l = 0, $end = Result.GetControlsCount() - 1; $l <= $end; $l++) {
          i = $l;
          Result.GetControls(i).HookElement();
        };
        for (var $l1 = 0, $end1 = Result.GetControlsCount() - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          Result.GetControls(i).RecreateCanvas();
          Result.GetControls(i).InternalResize();
        };
        $mod.Application.FActiveForm = Result;
      };
      return Result;
    };
    this.LockForm = function (AForm) {
      var i = 0;
      for (var $l = 0, $end = AForm.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        AForm.GetControls(i).DisableTab();
      };
    };
    this.UnLockForm = function (AForm) {
      var i = 0;
      for (var $l = 0, $end = AForm.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        AForm.GetControls(i).EnableTab();
      };
    };
    this.Create$1 = function (AOwner) {
      this.FFormStack = pas.Classes.TList.$create("Create$1");
      this.FParameters = pas.Classes.TStringList.$create("Create$1");
      this.FAppContainer = pas["WEBLib.WebTools"].cBodyTag;
      this.FMainForm = null;
      this.FActiveForm = null;
      this.FInitFormClassName = "";
      this.FIsRedirect = false;
      this.FAutoFormRoute = false;
      this.FThemed = false;
      this.FThemeColor = 14917120;
      this.FThemeTextColor = 16777215;
      this.FFormCaptionHeight = 22;
      this.FMaxZIndex = 999998;
      this.FHandleOAuth = true;
      this.FHintPause = 200;
      this.FHintHidePause = 250;
      this.FHintPosition = $mod.THintPosition.hpTop;
      this.FHintClassName = "";
      window.addEventListener("error",rtl.createCallback(this,"DoHandleError"));
      window.addEventListener("unhandledrejection",rtl.createCallback(this,"DoHandleError"));
      window.addEventListener("beforeunload",rtl.createSafeCallback(this,"DoHandleExit"));
      this.FErrorType = $mod.TApplicationErrorType.aeSilent;
      this.FErrorType = $mod.TApplicationErrorType.aeFooter;
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FFormStack");
      rtl.free(this,"FParameters");
      pas["WEBLib.Controls"].TControl.Destroy.call(this);
    };
    this.MaxZIndexStr = function () {
      var Result = "";
      Result = pas.SysUtils.IntToStr(this.FMaxZIndex);
      return Result;
    };
    this.IsPWAInstalled = function () {
      var $Self = this;
      var Result = null;
      var b = false;
      var s = "";
      b = false;
      s = window.location.hostname;
      Result = new Promise(async function (ASuccess, AFailed) {
        if ('getInstalledRelatedApps' in window.navigator) {
         const relatedApps = await navigator.getInstalledRelatedApps();
         relatedApps.forEach((app) => {
            if (app.id.indexOf(s) >= 0)
            {
              b = true;
            }
         });
        };
        ASuccess(b);
      });
      return Result;
    };
    this.GoBack = function () {
      window.history.back();
    };
    this.CreateNewForm$1 = function (AInstanceClass) {
      var Result = null;
      if (!($mod.VSIDE != null)) {
        Result = AInstanceClass.$create("Create$2",[pas["WEBLib.WebTools"].cBodyTag])}
       else Result = AInstanceClass.$create("Create$2",[""]);
      return Result;
    };
    this.CreateNewForm$2 = function (AInstanceClass, AElementID) {
      var Result = null;
      var el = null;
      var AForm = null;
      el = document.getElementById(AElementID);
      AForm = AInstanceClass.$create("Create$2",[AElementID]);
      AForm.FDesignContainer = el;
      AForm.SetFormContainer(AElementID);
      AForm.FFormElement = AElementID;
      AForm.CreateControl();
      AForm.FContainer = el;
      AForm.Init();
      Result = AForm;
      return Result;
    };
    this.CreateForm = function (AInstanceClass, AReference) {
      this.CreateForm$2(AInstanceClass,this.FAppContainer,AReference,null);
    };
    this.CreateForm$1 = function (AInstanceClass, AElementID, AReference) {
      this.CreateForm$2(AInstanceClass,AElementID,AReference,null);
    };
    this.CreateForm$2 = function (AInstanceClass, AElementID, AReference, AProc) {
      this.CreateForm$3(AInstanceClass,AElementID,AReference,AProc,true);
    };
    this.CreateForm$3 = function (AInstanceClass, AElementID, AReference, AProc, LoadHTML) {
      var $Self = this;
      var LFileName = "";
      function DoStatusCreate(Event) {
        var Result = false;
        var LElem = null;
        var LForm = null;
        var LResponse = "";
        var LIsBody = false;
        var LisLoaded = false;
        LisLoaded = Event != null;
        if (LisLoaded) {
          LResponse = Event.target.responseText;
          LIsBody = pas.SysUtils.LowerCase(AElementID) === pas["WEBLib.WebTools"].cBodyTag;
          if (LIsBody) {
            LElem = document.body}
           else LElem = document.getElementById(AElementID);
          LElem.innerHTML = LResponse;
        } else {
          LElem = document.body;
        };
        LForm = AInstanceClass.$create("Create$5",[AElementID,AReference]);
        LForm.FFormFileName = LFileName;
        if (LForm.FFormContainer === "") LForm.SetFormContainer(AElementID);
        if (!LIsBody) {
          LForm.FFormElement = AElementID;
          LForm.FContainer = LElem;
        };
        LForm.CreateControl();
        LForm.Init();
        LForm.SetColorScheme($mod.Application.GetColorScheme());
        LForm.FPrevActiveForm = $Self.FActiveForm;
        $Self.FActiveForm = LForm;
        if ($Self.FMainForm === null) $Self.FMainForm = LForm;
        if (AProc != null) AProc(LForm);
        Result = true;
        if (LisLoaded) $Self.ActivateChildScripts(LElem);
        $Self.FActiveForm.DoShow();
        $Self.FActiveForm.Resize$1();
        return Result;
      };
      if (this.FIsRedirect) return;
      if (this.FAppInitializing) {
        if (this.FCanCreateForm) {
          this.FCanCreateForm = false}
         else return;
      };
      LFileName = AInstanceClass.GetHTMLFileName();
      if ((LFileName !== "") && LoadHTML) {
        this.FLastReq = new XMLHttpRequest();
        this.FLastReq.addEventListener("load",rtl.createSafeCallback(null,DoStatusCreate));
        this.FLastReq.open("GET",LFileName);
        this.FLastReq.setRequestHeader("Cache-Control","no-cache");
        this.FLastReq.send();
      } else {
        DoStatusCreate(null);
      };
    };
    this.CreateForm$4 = function (AInstanceClass, AReference) {
      var lModule = null;
      lModule = AInstanceClass.$create("Create$1",[this]);
      AReference.set(lModule);
    };
    var cHTMLCode = '<html><head><meta http-equiv="Content-type" content="text/html; ' + 'charset=utf-8" /><title>TMS Web Project</title><style></style></head>' + "<body></body></html>";
    this.CreateForm$5 = function (AInstanceClass, AReference) {
      var lFrame = null;
      var lForm = null;
      lForm = $impl.TFramePreviewForm.$create("Create$1",[$mod.Application]);
      lFrame = AInstanceClass.$create("Create$1",[lForm]);
      lForm.FFrame = lFrame;
      lForm.FPopup = false;
      AReference.set(lFrame);
      $mod.Application.FActiveForm = lForm;
      $mod.Application.CreateNewForm(lForm,cHTMLCode);
    };
    this.CreateForm$6 = function (AInstanceClass, AElement, AReference) {
      this.CreateForm$2(AInstanceClass,AElement.id,AReference,null);
    };
    this.CreateFormDirect = function (AInstanceClass, AReference) {
      this.CreateForm$3(AInstanceClass,this.FAppContainer,AReference,null,false);
    };
    this.CreateFormDirect$1 = function (AInstanceClass, AElementID, AReference) {
      this.CreateForm$3(AInstanceClass,AElementID,AReference,null,false);
    };
    this.CreateFormDirect$2 = function (AInstanceClass, AReference) {
      this.CreateForm$4(AInstanceClass,AReference);
    };
    this.CreateFormDirect$3 = function (AInstanceClass, AReference) {
      this.CreateForm$5(AInstanceClass,AReference);
    };
    this.LoadForm = function (AForm, AFormFile) {
      AForm.FPrevActiveForm = this.FActiveForm;
      this.FActiveForm = AForm;
      this.FLoadForm = AForm;
      if (this.FMainForm === null) this.FMainForm = AForm;
      this.FLastReq = new XMLHttpRequest();
      this.FLastReq.addEventListener("load",rtl.createSafeCallback(this,"DoFormLoad"));
      this.FLastReq.addEventListener("abort",rtl.createSafeCallback(this,"DoFormAbort"));
      this.FLastReq.open("GET",AFormFile);
      this.FLastReq.send();
    };
    this.LoadForm$1 = function (AForm, AFormFile, FormLoaded) {
      this.FCreatedProc = FormLoaded;
      this.LoadForm(AForm,AFormFile);
    };
    this.ChangeCSS = function (id, href) {
      var styleElement = document.getElementById(id);
      if (styleElement) {
        styleElement.href = href;
        return;
      };
    };
    this.InsertCSS = function (id, href) {
      var styleElement = null;
      styleElement = document.getElementById(id);
      if (styleElement != null) {
        styleElement.href = href;
        return;
      };
      styleElement = document.createElement("link");
      styleElement.id = id;
      styleElement.rel = 'stylesheet';
      styleElement.href = href;
      document.getElementsByTagName("head").item(0).appendChild(styleElement);
    };
    this.RemoveCSS = function (id) {
      var styleElement = null;
      styleElement = document.getElementById(id);
      if (styleElement != null) {
        styleElement.parentNode.removeChild(styleElement);
      };
    };
    this.HasCSS = function (href) {
      var Result = false;
      var els = null;
      var i = 0;
      var s = "";
      Result = false;
      els = document.querySelectorAll("head > link");
      for (var $l = 0, $end = els.length - 1; $l <= $end; $l++) {
        i = $l;
        s = els.item(i).href;
        if (pas.SysUtils.CompareText(s,href) === 0) {
          Result = true;
          break;
        };
      };
      return Result;
    };
    this.ChangeLanguage = function (Value) {
      this.FLanguage = Value;
      if (this.FMainForm != null) this.ReloadForm();
    };
    this.Initialize = function () {
      var query = "";
      var token = "";
      var p = 0;
      var b = false;
      this.FCanCreateForm = true;
      this.FAppInitializing = true;
      this.FParameters.Clear();
      query = window.location.href;
      this.InitFormatSettings(pas["WEBLib.WebTools"].GetBrowserLocale());
      this.FParameters.SetDelimiter("&");
      this.FParameters.FStrictDelimiter = true;
      p = pas.System.Pos("?",query);
      if (p > 0) query = pas.System.Copy(query,p + 1,query.length);
      this.FParameters.SetDelimitedText(query);
      b = (window.name == "Authentication");
      if (this.FOnOAuthCallBack != null) {
        if ((this.FParameters.IndexOfName("oauthcallback") !== -1) || b) {
          this.FOnOAuthCallBack(this,query);
          this.FIsRedirect = true;
          document.body.innerHTML = this.GetAuthorizationPageHTML(true);
          return;
        };
      };
      if ((this.FParameters.IndexOfName("code") !== -1) && this.FHandleOAuth) {
        if (this.FOnOAuthToken != null) this.FOnOAuthToken(this,query);
        this.FIsRedirect = true;
        token = this.FParameters.GetValue("code");
        if (window.opener && window.opener.processAuthData){
          window.opener.processAuthData(token);
          window.close();
        };
      };
      window.addEventListener("hashchange",rtl.createSafeCallback(this,"DoHashChange"));
      window.addEventListener("online",rtl.createSafeCallback(this,"DoUpdateOnlineStatus"));
      window.addEventListener("offline",rtl.createSafeCallback(this,"DoUpdateOnlineStatus"));
      window.addEventListener("popstate",rtl.createCallback(this,"DoPopState"));
      document.addEventListener("visibilitychange",rtl.createSafeCallback(this,"DoVisibilityChange"));
      if (window.opener !== null) if (this.FParameters.IndexOfName("access_token") !== -1) {
        this.FIsRedirect = true;
        token = this.FParameters.GetValue("access_token");
        if (window.opener && window.opener.processAuthData){
          window.opener.processAuthData(token);
            window.close();
        };
      };
    };
    this.Route = function () {
      var Result = false;
      var frm = null;
      var hash = "";
      var pc = null;
      Result = false;
      this.FRouting = true;
      hash = window.location.hash;
      if (hash !== "") {
        pas.System.Delete({get: function () {
            return hash;
          }, set: function (v) {
            hash = v;
          }},1,1);
        hash = "T" + hash;
        pc = pas.Classes.GetClass(hash);
        if (pc != null) {
          Result = true;
          $mod.Application.AutoCreateForm(pc,{get: function () {
              return frm;
            }, set: function (v) {
              frm = v;
            }});
        };
      };
      return Result;
    };
    this.InitFormatSettings = function (BrowserLocale) {
      var timestr = "";
      var i = 0;
      var locale = "";
      locale = BrowserLocale;
      pas.SysUtils.FormatSettings.ShortDateFormat = pas["WEBLib.WebTools"].GetLocaleShortDateFormat(locale);
      if (pas.System.Pos("/",pas.SysUtils.FormatSettings.ShortDateFormat) > 0) pas.SysUtils.FormatSettings.DateSeparator = "/";
      if (pas.System.Pos(".",pas.SysUtils.FormatSettings.ShortDateFormat) > 0) pas.SysUtils.FormatSettings.DateSeparator = ".";
      if (pas.System.Pos("-",pas.SysUtils.FormatSettings.ShortDateFormat) > 0) pas.SysUtils.FormatSettings.DateSeparator = "-";
      var event = new Date('Jan 1, 1980 06:07:08 GMT+00:00');
      var loc = "";
      if (locale == "") { loc = navigator.language; } else
      { loc = locale; }
      timestr = event.toLocaleTimeString(loc);
      if (pas.System.Pos(":",timestr) > 0) pas.SysUtils.FormatSettings.TimeSeparator = ":";
      if (pas.System.Pos(".",timestr) > 0) pas.SysUtils.FormatSettings.TimeSeparator = ".";
      if (pas.System.Pos("-",timestr) > 0) pas.SysUtils.FormatSettings.TimeSeparator = "-";
      for (i = 1; i <= 7; i++) {
        pas.SysUtils.FormatSettings.ShortDayNames[i - 1] = pas["WEBLib.WebTools"].GetLocaleShortDayName(i,locale);
        pas.SysUtils.FormatSettings.LongDayNames[i - 1] = pas["WEBLib.WebTools"].GetLocaleLongDayName(i,locale);
      };
      for (i = 1; i <= 12; i++) {
        pas.SysUtils.FormatSettings.ShortMonthNames[i - 1] = pas["WEBLib.WebTools"].GetLocaleShortMonthName(i,locale);
        pas.SysUtils.FormatSettings.LongMonthNames[i - 1] = pas["WEBLib.WebTools"].GetLocaleLongMonthName(i,locale);
      };
      pas.SysUtils.FormatSettings.DecimalSeparator = pas["WEBLib.WebTools"].GetLocaleDecimalSeparator("");
      if (pas.SysUtils.FormatSettings.DecimalSeparator === ".") {
        pas.SysUtils.FormatSettings.ThousandSeparator = ","}
       else pas.SysUtils.FormatSettings.ThousandSeparator = ".";
    };
    this.ReceiveMessageFromClient = function (AMessage) {
      if (this.FClientConnector != null) this.FClientConnector.Receive(AMessage);
    };
    this.RouteForm = function (AParameter) {
      var frm = null;
      var fc = null;
      fc = pas.Classes.GetClass(AParameter);
      $mod.Application.CreateForm(fc,{get: function () {
          return frm;
        }, set: function (v) {
          frm = v;
        }});
    };
    this.Run = function () {
      this.FCanCreateForm = true;
      this.FAppInitializing = false;
    };
    this.RunScript = function (Source) {
      eval(Source);
    };
    this.Terminate = function () {
      window.location.href = "about:blank";
    };
    this.Navigate = function (AURL, ATarget) {
      if (ATarget === $mod.TNavigationTarget.ntBlank) {
        window.open(AURL,"_blank")}
       else window.location.href = AURL;
    };
    this.Download = function (AURL) {
      window.location.href = AURL;
    };
    this.DownloadTextFile = function (AText, AFileName) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(AText));
      if (AFileName != ''){
        element.setAttribute('download', AFileName);
      }
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };
    this.DownloadBinaryFile = function (AData, AFileName, ANewTab) {
      var lElement = document.createElement('a');
          var lUrl = window.URL.createObjectURL(AData);
          lElement.href = lUrl;
      
          if (AFileName != ''){
            lElement.setAttribute('download', AFileName);
          }
      
          lElement.style.display = 'none';
          if (ANewTab == true) {
            lElement.target = '_blank';
          }
          document.body.appendChild(lElement);
          lElement.click();
          document.body.removeChild(lElement);
    };
    this.DownloadBinaryFile$1 = function (AData, AFileName, ANewTab) {
      this.DownloadBinaryFile$2(Uint8Array.from(AData),AFileName,ANewTab);
    };
    this.DownloadBinaryFile$2 = function (AData, AFileName, ANewTab) {
      this.InternalDownloadFile(AData,AFileName,"octet/stream",ANewTab);
    };
    this.DownloadPDFFile = function (AData, AFileName, ANewTab) {
      this.DownloadPDFFile$1(Uint8Array.from(AData),AFileName,ANewTab);
    };
    this.DownloadPDFFile$1 = function (AData, AFileName, ANewTab) {
      this.InternalDownloadFile(AData,AFileName,"application/pdf",ANewTab);
    };
    this.EXEName = function () {
      var Result = "";
      Result = window.document.location.href;
      return Result;
    };
    this.IDETheme = function () {
      var Result = "";
      var s = "";
      Result = "";
      if (!($mod.VSIDE != null)) return Result;
      s = pas["WEBLib.Forms"].VSIDE.theme;
      Result = s;
      return Result;
    };
    this.IDECSS = function () {
      var Result = "";
      Result = "";
      if (this.IDETheme() === "vscode-light") {
        Result = ".IDECaption { background-color: #F0F0F0 !important; color: #555555 !important; border: 1px solid #DDDDDD !important}" + "\r\n" + ".IDEBkg { background-color: white !important; color: #555555 !important; border: 1px solid #DDDDDD !important}" + "\r\n" + ".IDEButton { background-color: #FAFAFA !important; font-size:10pt; color: #555555 !important; border: 1px solid #DDDDDD !important}" + "\r\n" + ".IDEButton:hover {background-color:#F0F0F0 !important}" + "\r\n" + ".IDEFont {font-size:10pt !important}";
      };
      if (this.IDETheme() === "vscode") {
        Result = ".IDECaption,.IDEButton { background-color: #3F3E43 !important; color: #FFFFFF !important; border: 1px solid #35353A !important}" + "\r\n" + ".IDEBkg { background-color: #2A2A2C !important; color: #A9ACB4 !important; border: 1px solid #35353A !important}" + "\r\n" + ".IDEButton:hover {background-color:#434857 !important}" + "\r\n" + ".IDEFont {font-size:10pt !important}";
      };
      return Result;
    };
    this.Version = function () {
      var Result = "";
      Result = $mod.WEBCOREVERSION;
      return Result;
    };
    this.IDEMessage = function (Msg) {
      pas["WEBLib.Forms"].VSIDE.ShowMessage(Msg);
    };
    this.IDEOpenURL = function (URL) {
      pas["WEBLib.Forms"].VSIDE.Open(URL);
    };
    this.NeedsFormRouting = function () {
      var Result = false;
      var s = "";
      Result = pas["WEBLib.WebTools"].HasQueryParam("form",{get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},true);
      if (Result) this.RouteForm(s);
      return Result;
    };
    this.ObjectURL = function (AFile) {
      var Result = "";
      var res = "";
      res = URL.createObjectURL(AFile);
      Result = res;
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  this.GetParentForm = function (AControl) {
    var Result = null;
    var FOwner = null;
    Result = null;
    FOwner = AControl;
    while ((FOwner != null) && !$mod.TCustomForm.isPrototypeOf(FOwner)) {
      if ((FOwner === AControl) && (FOwner.FOwner === null)) {
        FOwner = AControl.FParent}
       else FOwner = FOwner.FOwner;
    };
    if ((FOwner != null) && $mod.TCustomForm.isPrototypeOf(FOwner)) Result = rtl.as(FOwner,$mod.TCustomForm);
    return Result;
  };
  this.Log = function (v) {
    console.log(v);
  };
  this.Log$1 = function (arr) {
    var i = 0;
    var s = "";
    var su = "";
    s = "[";
    for (var $l = 0, $end = rtl.length(arr) - 1; $l <= $end; $l++) {
      i = $l;
      function isPrimitive(test) {
              return (test !== Object(test));
            };
      
            if (isPrimitive(arr[i])) {
               var su = arr[i].toString();
               if (s != "[") { s = s + ","; }
               s = s + su;
               }
            else
            {
              console.log(arr[i]);
               if (s != "[") { s = s + ","; }
               s = s + "#object";
            };
    };
    s = s + "]";
    $mod.Log(s);
  };
  this.WinWidth = function () {
    var Result = 0;
    var w = 0;
    if ($mod.VSIDE != null) {
      w = pas["WEBLib.Forms"].VSIDE.clientWidth();
    } else w = window.innerWidth;
    Result = w;
    return Result;
  };
  this.WinHeight = function () {
    var Result = 0;
    var h = 0;
    if ($mod.VSIDE != null) {
      h = pas["WEBLib.Forms"].VSIDE.clientHeight();
    } else h = window.innerHeight;
    Result = h;
    return Result;
  };
  this.Sleep = function (milliseconds) {
    var Result = null;
    Result = new Promise(function (resolve, reject) {
      window.setTimeout(function () {
        resolve(milliseconds);
      },milliseconds);
    });
    return Result;
  };
  this.Application = null;
  this.HandShakeScript = null;
  this.VSIDE = null;
  this.LastHash = "";
  $mod.$implcode = function () {
    rtl.createClass($impl,"TFramePreviewForm",$mod.TForm,function () {
      this.$init = function () {
        $mod.TForm.$init.call(this);
        this.FFrame = null;
      };
      this.$final = function () {
        this.FFrame = undefined;
        $mod.TForm.$final.call(this);
      };
      this.LoadDFMValues = function () {
        $mod.TCustomForm.LoadDFMValues.call(this);
        this.FFrame.SetParentComponent(this);
        this.FFrame.LoadFromForm();
        this.FFrame.BeforeLoadDFMValues();
        try {
          this.FFrame.SetName("Frame1");
          this.FFrame.SetLeft(0);
          this.FFrame.SetTop(0);
          this.FFrame.SetWidth(640);
          this.FFrame.SetHeight(480);
        } finally {
          this.FFrame.AfterLoadDFMValues();
        };
        this.SetName("Form1");
        this.SetLeft(0);
        this.SetTop(0);
        this.SetWidth(640);
        this.SetHeight(480);
      };
      rtl.addIntf(this,pas.System.IUnknown);
    });
    $impl.ReleaseForm = function (AForm) {
      AForm = rtl.freeLoc(AForm);
      AForm = null;
    };
  };
  $mod.$init = function () {
    $mod.HandShakeScript = document.createElement("script");
    $mod.HandShakeScript.id = "HandShakeScript";
    $mod.HandShakeScript.type = "text/javascript";
    $mod.HandShakeScript.innerHTML = "var IDE = null;" + "\r\n" + 'var TMSWEBCoreClientIdentifier = "unknown";' + "\r\n" + 'var TMSWEBCoreOAuthCallback = "unknown";' + "\r\n" + "function HandShake(cid){" + "\r\n" + "  TMSWEBCoreClientIdentifier = cid;" + "\r\n" + "}";
    document.body.appendChild($mod.HandShakeScript);
    $mod.Application = $mod.TApplication.$create("Create$1",[null]);
  };
},["WEBLib.Dialogs","WEBLib.WebTools","WEBLib.JSON","WEBLib.Utils","Math"]);
//# sourceMappingURL=WEBLib.Forms.js.map
