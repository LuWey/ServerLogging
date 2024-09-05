rtl.module("WEBLib.Controls",["System","Classes","WEBLib.Graphics","Types","SysUtils","Web","JS"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.VK_CANCEL = 3;
  this.VK_BACK = 8;
  this.VK_TAB = 9;
  this.VK_RETURN = 13;
  this.VK_SHIFT = 16;
  this.VK_CONTROL = 17;
  this.VK_MENU = 18;
  this.VK_PAUSE = 19;
  this.VK_CAPITAL = 20;
  this.VK_ESCAPE = 27;
  this.VK_SPACE = 32;
  this.VK_PRIOR = 33;
  this.VK_NEXT = 34;
  this.VK_END = 35;
  this.VK_HOME = 36;
  this.VK_LEFT = 37;
  this.VK_UP = 38;
  this.VK_RIGHT = 39;
  this.VK_DOWN = 40;
  this.VK_PRINT = 42;
  this.VK_SNAPSHOT = 44;
  this.VK_INSERT = 45;
  this.VK_DELETE = 46;
  this.VK_HELP = 47;
  this.VK_LWIN = 91;
  this.VK_RWIN = 92;
  this.VK_NUMPAD0 = 96;
  this.VK_NUMPAD1 = 97;
  this.VK_NUMPAD2 = 98;
  this.VK_NUMPAD3 = 99;
  this.VK_NUMPAD4 = 100;
  this.VK_NUMPAD5 = 101;
  this.VK_NUMPAD6 = 102;
  this.VK_NUMPAD7 = 103;
  this.VK_NUMPAD8 = 104;
  this.VK_NUMPAD9 = 105;
  this.VK_MULTIPLY = 106;
  this.VK_ADD = 107;
  this.VK_SEPARATOR = 108;
  this.VK_SUBTRACT = 109;
  this.VK_DECIMAL = 110;
  this.VK_DIVIDE = 111;
  this.VK_F1 = 112;
  this.VK_F2 = 113;
  this.VK_F3 = 114;
  this.VK_F4 = 115;
  this.VK_F5 = 116;
  this.VK_F6 = 117;
  this.VK_F7 = 118;
  this.VK_F8 = 119;
  this.VK_F9 = 120;
  this.VK_F10 = 121;
  this.VK_F11 = 122;
  this.VK_F12 = 123;
  this.VK_F13 = 124;
  this.VK_F14 = 125;
  this.VK_F15 = 126;
  this.VK_F16 = 127;
  this.VK_F17 = 128;
  this.VK_F18 = 129;
  this.VK_F19 = 130;
  this.VK_F20 = 131;
  this.VK_F21 = 132;
  this.VK_F22 = 133;
  this.VK_F23 = 134;
  this.VK_F24 = 135;
  this.VK_NUMLOCK = 144;
  this.WHEEL_DELTA = 120;
  this.$rtti.$inherited("TCursor",rtl.longint,{});
  this.crDefault = 0;
  this.crNone = 1;
  this.crArrow = 2;
  this.crCross = 3;
  this.crIBeam = 4;
  this.crSize = 5;
  this.crSizeNESW = 6;
  this.crSizeNS = 7;
  this.crSizeNWSE = 8;
  this.crSizeWE = 9;
  this.crUpArrow = 10;
  this.crHourGlass = 11;
  this.crDrag = 12;
  this.crNoDrop = 13;
  this.crHSplit = 14;
  this.crVSplit = 15;
  this.crMultIDrag = 16;
  this.crSQLWait = 17;
  this.crNo = 18;
  this.crAppStart = 19;
  this.crHelp = 20;
  this.crHandPoint = 21;
  this.crSizeAll = 22;
  this.CSSBackground = "background-color";
  this.CSSZIndex = "z-index";
  this.$rtti.$Class("TCSSCodeManager");
  this.TDragState = {"0": "dsDragEnter", dsDragEnter: 0, "1": "dsDragLeave", dsDragLeave: 1, "2": "dsDragMove", dsDragMove: 2};
  this.$rtti.$Enum("TDragState",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TDragState});
  this.TDragMode = {"0": "dmManual", dmManual: 0, "1": "dmAutomatic", dmAutomatic: 1};
  this.$rtti.$Enum("TDragMode",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TDragMode});
  this.TDragKind = {"0": "dkDrag", dkDrag: 0, "1": "dkDock", dkDock: 1};
  this.$rtti.$Enum("TDragKind",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TDragKind});
  rtl.createClass(this,"TDragObject",pas.System.TObject,function () {
  });
  this.TAlign = {"0": "alNone", alNone: 0, "1": "alTop", alTop: 1, "2": "alBottom", alBottom: 2, "3": "alLeft", alLeft: 3, "4": "alRight", alRight: 4, "5": "alClient", alClient: 5, "6": "alCustom", alCustom: 6};
  this.$rtti.$Enum("TAlign",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TAlign});
  this.TMouseButton = {"0": "mbLeft", mbLeft: 0, "1": "mbRight", mbRight: 1, "2": "mbMiddle", mbMiddle: 2};
  this.$rtti.$Enum("TMouseButton",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TMouseButton});
  this.TBorderStyle = {"0": "bsNone", bsNone: 0, "1": "bsSingle", bsSingle: 1};
  this.$rtti.$Enum("TBorderStyle",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TBorderStyle});
  this.TSizeStyle = {"0": "ssPercent", ssPercent: 0, "1": "ssAbsolute", ssAbsolute: 1, "2": "ssAuto", ssAuto: 2};
  this.$rtti.$Enum("TSizeStyle",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TSizeStyle});
  this.TScrollStyle = {"0": "ssNone", ssNone: 0, "1": "ssHorizontal", ssHorizontal: 1, "2": "ssVertical", ssVertical: 2, "3": "ssBoth", ssBoth: 3};
  this.$rtti.$Enum("TScrollStyle",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TScrollStyle});
  this.TStyleElements$a = {"0": "seFont", seFont: 0, "1": "seClient", seClient: 1, "2": "seBorder", seBorder: 2};
  this.$rtti.$Enum("TStyleElements$a",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TStyleElements$a});
  this.$rtti.$Set("TStyleElements",{comptype: this.$rtti["TStyleElements$a"]});
  this.TAnchorKind = {"0": "akLeft", akLeft: 0, "1": "akTop", akTop: 1, "2": "akRight", akRight: 2, "3": "akBottom", akBottom: 3};
  this.$rtti.$Enum("TAnchorKind",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TAnchorKind});
  this.$rtti.$Set("TAnchors",{comptype: this.$rtti["TAnchorKind"]});
  this.$rtti.$inherited("TElementClassName",rtl.string,{});
  this.$rtti.$inherited("TElementID",rtl.string,{});
  this.TElementFont = {"0": "efProperty", efProperty: 0, "1": "efCSS", efCSS: 1};
  this.$rtti.$Enum("TElementFont",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TElementFont});
  this.TElementPosition = {"0": "epAbsolute", epAbsolute: 0, "1": "epRelative", epRelative: 1, "2": "epIgnore", epIgnore: 2};
  this.$rtti.$Enum("TElementPosition",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TElementPosition});
  this.TElementEvent = {"0": "eeClick", eeClick: 0, "1": "eeMouseDown", eeMouseDown: 1, "2": "eeMouseUp", eeMouseUp: 2, "3": "eeMouseMove", eeMouseMove: 3, "4": "eeDblClick", eeDblClick: 4, "5": "eeKeyPress", eeKeyPress: 5, "6": "eeKeyDown", eeKeyDown: 6, "7": "eeKeyUp", eeKeyUp: 7};
  this.$rtti.$Enum("TElementEvent",{minvalue: 0, maxvalue: 7, ordtype: 1, enumtype: this.TElementEvent});
  this.$rtti.$Set("TEventPropagation",{comptype: this.$rtti["TElementEvent"]});
  this.TTextDirection = {"0": "tdDefault", tdDefault: 0, "1": "tdLeftToRight", tdLeftToRight: 1, "2": "tdRightToLeft", tdRightToLeft: 2, "3": "tdInherit", tdInherit: 3};
  this.$rtti.$Enum("TTextDirection",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TTextDirection});
  this.TBevelCut = {"0": "bvNone", bvNone: 0, "1": "bvLowered", bvLowered: 1, "2": "bvRaised", bvRaised: 2, "3": "bvSpace", bvSpace: 3};
  this.$rtti.$Enum("TBevelCut",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TBevelCut});
  this.TBevelEdge = {"0": "beLeft", beLeft: 0, "1": "beTop", beTop: 1, "2": "beRight", beRight: 2, "3": "beBottom", beBottom: 3};
  this.$rtti.$Enum("TBevelEdge",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TBevelEdge});
  this.$rtti.$Set("TBevelEdges",{comptype: this.$rtti["TBevelEdge"]});
  this.TBevelKind = {"0": "bkNone", bkNone: 0, "1": "bkTile", bkTile: 1, "2": "bkSoft", bkSoft: 2, "3": "bkFlat", bkFlat: 3};
  this.$rtti.$Enum("TBevelKind",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TBevelKind});
  this.TInputType = {"0": "itText", itText: 0, "1": "itEmail", itEmail: 1, "2": "itDate", itDate: 2, "3": "itDateTime", itDateTime: 3, "4": "itFile", itFile: 4, "5": "itMonth", itMonth: 5, "6": "itNumber", itNumber: 6, "7": "itPassword", itPassword: 7, "8": "itSearch", itSearch: 8, "9": "itTime", itTime: 9, "10": "itURL", itURL: 10, "11": "itWeek", itWeek: 11};
  this.$rtti.$Enum("TInputType",{minvalue: 0, maxvalue: 11, ordtype: 1, enumtype: this.TInputType});
  this.TMaterialGlyphType = {"0": "mgNormal", mgNormal: 0, "1": "mgOutlined", mgOutlined: 1, "2": "mgTwoTone", mgTwoTone: 2, "3": "mgRound", mgRound: 3, "4": "mgSharp", mgSharp: 4};
  this.$rtti.$Enum("TMaterialGlyphType",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TMaterialGlyphType});
  rtl.recNewT(this,"TJSXMLHttpRequestRecord",function () {
    this.req = null;
    this.$eq = function (b) {
      return this.req === b.req;
    };
    this.$assign = function (s) {
      this.req = s.req;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSXMLHttpRequestRecord",{});
    $r.addField("req",pas.Web.$rtti["TJSXMLHttpRequest"]);
  });
  rtl.recNewT(this,"TJSEventRecord",function () {
    this.event = null;
    this.$eq = function (b) {
      return this.event === b.event;
    };
    this.$assign = function (s) {
      this.event = s.event;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSEventRecord",{});
    $r.addField("event",pas.Web.$rtti["TJSEvent"]);
  });
  this.$rtti.$MethodVar("THTTPResponseEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AResponse",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("THTTPRequestResponseEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequest",this.$rtti["TJSXMLHttpRequestRecord"]],["AResponse",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("THTTPAbortEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]]]), methodkind: 0});
  this.$rtti.$MethodVar("THTTPErrorEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ARequest",this.$rtti["TJSXMLHttpRequestRecord"]],["Event",this.$rtti["TJSEventRecord"]],["Handled",rtl.boolean,1]]), methodkind: 0});
  rtl.recNewT(this,"TJSHTMLElementRecord",function () {
    this.element = null;
    this.$eq = function (b) {
      return this.element === b.element;
    };
    this.$assign = function (s) {
      this.element = s.element;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSHTMLElementRecord",{});
    $r.addField("element",pas.Web.$rtti["TJSHTMLElement"]);
  });
  rtl.recNewT(this,"TJSObjectRecord",function () {
    this.jsobject = null;
    this.$eq = function (b) {
      return this.jsobject === b.jsobject;
    };
    this.$assign = function (s) {
      this.jsobject = s.jsobject;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSObjectRecord",{});
    $r.addField("jsobject",pas.JS.$rtti["TJSObject"]);
  });
  rtl.recNewT(this,"TJSArrayRecord",function () {
    this.jsarray = null;
    this.$eq = function (b) {
      return this.jsarray === b.jsarray;
    };
    this.$assign = function (s) {
      this.jsarray = s.jsarray;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSArrayRecord",{});
    $r.addField("jsarray",pas.JS.$rtti["TJSArray"]);
  });
  rtl.recNewT(this,"TJSArrayBufferRecord",function () {
    this.jsarraybuffer = null;
    this.$eq = function (b) {
      return this.jsarraybuffer === b.jsarraybuffer;
    };
    this.$assign = function (s) {
      this.jsarraybuffer = s.jsarraybuffer;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSArrayBufferRecord",{});
    $r.addField("jsarraybuffer",pas.JS.$rtti["TJSArrayBuffer"]);
  });
  rtl.createClass(this,"TDragSourceObject",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FJSEvent = null;
      this.FObject = null;
    };
    this.$final = function () {
      this.FJSEvent = undefined;
      this.FObject = undefined;
      pas.System.TObject.$final.call(this);
    };
  });
  this.$rtti.$MethodVar("TNotifyEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TMouseEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Button",this.$rtti["TMouseButton"]],["Shift",pas.Classes.$rtti["TShiftState"]],["X",rtl.longint],["Y",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TMouseWheelEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Shift",pas.Classes.$rtti["TShiftState"]],["WheelDelta",rtl.longint],["MousePos",pas.Types.$rtti["TPoint"]],["Handled",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TMouseWheelUpDownEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Shift",pas.Classes.$rtti["TShiftState"]],["MousePos",pas.Types.$rtti["TPoint"]],["Handled",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TMouseMoveEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Shift",pas.Classes.$rtti["TShiftState"]],["X",rtl.longint],["Y",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TKeyEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AKey",rtl.word,1],["Shift",pas.Classes.$rtti["TShiftState"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TKeyPressEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AChar",rtl.char,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TTouchEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["X",rtl.longint],["Y",rtl.longint]]), methodkind: 0});
  this.TBiDiMode = {"0": "bdLeftToRight", bdLeftToRight: 0, "1": "bdRightToLeft", bdRightToLeft: 1, "2": "bdRightToLeftNoAlign", bdRightToLeftNoAlign: 2, "3": "bdRightToLeftReadingOnly", bdRightToLeftReadingOnly: 3};
  this.$rtti.$Enum("TBiDiMode",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TBiDiMode});
  this.$rtti.$MethodVar("TDragOverEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Source",pas.System.$rtti["TObject"]],["X",rtl.longint],["Y",rtl.longint],["State",this.$rtti["TDragState"]],["Accept",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TDragDropEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Source",pas.System.$rtti["TObject"]],["X",rtl.longint],["Y",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TStartDragEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["DragObject",this.$rtti["TDragObject"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TEndDragEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Target",pas.System.$rtti["TObject"]],["X",rtl.longint],["Y",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TScreenshotEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ABitmap",pas["WEBLib.Graphics"].$rtti["TBitmap"]]]), methodkind: 0});
  this.TControlStyleValue = {"0": "csAcceptsControls", csAcceptsControls: 0, "1": "csSetCaption", csSetCaption: 1};
  this.$rtti.$Enum("TControlStyleValue",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TControlStyleValue});
  this.$rtti.$Set("TControlStyle",{comptype: this.$rtti["TControlStyleValue"]});
  rtl.createClass(this,"TMargins",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOnChange = null;
      this.FLeft = 0;
      this.FTop = 0;
      this.FRight = 0;
      this.FBottom = 0;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetLeft = function (Value) {
      if (Value !== this.FLeft) {
        this.FLeft = Value;
        this.DoChange();
      };
    };
    this.SetTop = function (Value) {
      if (Value !== this.FTop) {
        this.FTop = Value;
        this.DoChange();
      };
    };
    this.SetRight = function (Value) {
      if (Value !== this.FRight) {
        this.FRight = Value;
        this.DoChange();
      };
    };
    this.SetBottom = function (Value) {
      if (Value !== this.FBottom) {
        this.FBottom = Value;
        this.DoChange();
      };
    };
    this.DoChange = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$1 = function () {
      this.FLeft = 3;
      this.FTop = 3;
      this.FBottom = 3;
      this.FRight = 3;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TMargins.isPrototypeOf(Source)) {
        this.FLeft = rtl.as(Source,$mod.TMargins).FLeft;
        this.FTop = rtl.as(Source,$mod.TMargins).FTop;
        this.FBottom = rtl.as(Source,$mod.TMargins).FBottom;
        this.FRight = rtl.as(Source,$mod.TMargins).FRight;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Left",2,rtl.longint,"FLeft","SetLeft",{Default: 3});
    $r.addProperty("Top",2,rtl.longint,"FTop","SetTop",{Default: 3});
    $r.addProperty("Right",2,rtl.longint,"FRight","SetRight",{Default: 3});
    $r.addProperty("Bottom",2,rtl.longint,"FBottom","SetBottom",{Default: 3});
  });
  rtl.createClass(this,"TCenter",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FHorizontal = false;
      this.FVertical = false;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetHorizontal = function (Value) {
      if (this.FHorizontal !== Value) {
        this.FHorizontal = Value;
        this.DoChange();
      };
    };
    this.SetVertical = function (Value) {
      if (this.FVertical !== Value) {
        this.FVertical = Value;
        this.DoChange();
      };
    };
    this.DoChange = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Assign = function (Source) {
      if ($mod.TCenter.isPrototypeOf(Source)) {
        this.FHorizontal = rtl.as(Source,$mod.TCenter).FHorizontal;
        this.FVertical = rtl.as(Source,$mod.TCenter).FVertical;
      };
    };
    var $r = this.$rtti;
    $r.addProperty("Horizontal",2,rtl.boolean,"FHorizontal","SetHorizontal",{Default: false});
    $r.addProperty("Vertical",2,rtl.boolean,"FVertical","SetVertical",{Default: false});
  });
  rtl.createClass(this,"TPadding",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOnChange = null;
      this.FLeft = 0;
      this.FTop = 0;
      this.FRight = 0;
      this.FBottom = 0;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetLeft = function (Value) {
      if (this.FLeft !== Value) {
        this.FLeft = Value;
        this.DoChange();
      };
    };
    this.SetTop = function (Value) {
      if (this.FTop !== Value) {
        this.FTop = Value;
        this.DoChange();
      };
    };
    this.SetRight = function (Value) {
      if (this.FRight !== Value) {
        this.FRight = Value;
        this.DoChange();
      };
    };
    this.SetBottom = function (Value) {
      if (this.FBottom !== Value) {
        this.FBottom = Value;
        this.DoChange();
      };
    };
    this.DoChange = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FLeft = 0;
      this.FTop = 0;
      this.FRight = 0;
      this.FBottom = 0;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TPadding.isPrototypeOf(Source)) {
        this.FLeft = rtl.as(Source,$mod.TPadding).FLeft;
        this.FRight = rtl.as(Source,$mod.TPadding).FRight;
        this.FTop = rtl.as(Source,$mod.TPadding).FTop;
        this.FBottom = rtl.as(Source,$mod.TPadding).FBottom;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Left",2,rtl.longint,"FLeft","SetLeft",{Default: 0});
    $r.addProperty("Top",2,rtl.longint,"FTop","SetTop",{Default: 0});
    $r.addProperty("Right",2,rtl.longint,"FRight","SetRight",{Default: 0});
    $r.addProperty("Bottom",2,rtl.longint,"FBottom","SetBottom",{Default: 0});
  });
  rtl.createClass(this,"TControl",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FGotFocus = false;
      this.FAcceptDrag = false;
      this.FCaptureDown = false;
      this.FMouseInsideLayer = false;
      this.FLayer = null;
      this.FCaptured = false;
      this.FControlCreated = false;
      this.FUpdateCount = 0;
      this.FBlockUpdateElement = false;
      this.FElement = null;
      this.FID = "";
      this.FNew = false;
      this.FContainer = null;
      this.FElementEvent = null;
      this.FLastElementEvent = null;
      this.FElementClassName = "";
      this.FFont = null;
      this.FParent = null;
      this.FPrevParent = null;
      this.FControls = [];
      this.FOnDragOver = null;
      this.FOnDragDrop = null;
      this.FOnStartDrag = null;
      this.FonEndDrag = null;
      this.FOnClick = null;
      this.FOnDblClick = null;
      this.FOnMouseDown = null;
      this.FOnMouseUp = null;
      this.FOnMouseMove = null;
      this.FOnKeyDown = null;
      this.FOnKeyUp = null;
      this.FOnKeyPress = null;
      this.FOnEnter = null;
      this.FOnExit = null;
      this.FEnabled = false;
      this.FHint = "";
      this.FRole = "";
      this.FShowHint = false;
      this.FTabOrder = 0;
      this.FTabStop = false;
      this.FVisible = false;
      this.FWidth = 0;
      this.FHeight = 0;
      this.FTag$1 = 0;
      this.FAlign = 0;
      this.FAnchors = {};
      this.FAlignWithMargins = false;
      this.FIsAligning = false;
      this.FOnMouseEnter = null;
      this.FOnMouseLeave = null;
      this.FCursor = 0;
      this.FDoubleBuffered = false;
      this.FControlStyle = {};
      this.FMargins = null;
      this.FCenter = null;
      this.FOnMouseWheel = null;
      this.FParentDoubleBuffered = false;
      this.FParentColor = false;
      this.FParentFont = false;
      this.FParentBiDiMode = false;
      this.FOnTouchMove = null;
      this.FOnTouchStart = null;
      this.FOnTouchEnd = null;
      this.FOnTouchCancel = null;
      this.FLinkTouchEvents = false;
      this.FWidthStyle = 0;
      this.FHeightStyle = 0;
      this.FWidthPercent = 0.0;
      this.FHeightPercent = 0.0;
      this.FOrigRect = pas.Types.TRect.$new();
      this.FOrigParentRect = pas.Types.TRect.$new();
      this.FIsResizing = false;
      this.FShowFocus = false;
      this.FBorderWidth = 0;
      this.FOrigTop = 0;
      this.FOrigLeft = 0;
      this.FUpdateTopLeft = false;
      this.FEnablePropagation = false;
      this.FParentShowHint = false;
      this.FScriptLoaded = false;
      this.FControlScriptCount = 0;
      this.FControlScriptCountLoaded = 0;
      this.FRequiredScripts = null;
      this.FElementFont = 0;
      this.FElementPosition = 0;
      this.FParentElement = null;
      this.FTagObject = null;
      this.FClipChildren = false;
      this.FTextDirection = 0;
      this.FEventStopPropagation = {};
      this.FParentElementID = "";
      this.FOnResize = null;
      this.FMouseMovePtr = null;
      this.FMouseDownPtr = null;
      this.FMouseUpPtr = null;
      this.FMouseEnterPtr = null;
      this.FMouseLeavePtr = null;
      this.FClickPtr = null;
      this.FDblClickPtr = null;
      this.FKeyDownPtr = null;
      this.FKeyUpPtr = null;
      this.FKeyPressPtr = null;
      this.FInputPtr = null;
      this.FTouchStartPtr = null;
      this.FTouchEndPtr = null;
      this.FTouchMovePtr = null;
      this.FTouchCancelPtr = null;
      this.FContextMenuPtr = null;
      this.FExitPtr = null;
      this.FEnterPtr = null;
      this.FWheelPtr = null;
      this.FLayerMouseEnterPtr = null;
      this.FLayerMouseLeavePtr = null;
      this.FScriptLoadedPtr = null;
      this.FDragStartPtr = null;
      this.FDragOverPtr = null;
      this.FDragEnterPtr = null;
      this.FDragLeavePtr = null;
      this.FDragEndPtr = null;
      this.FDragDropPtr = null;
      this.FChildOrder = 0;
      this.FAllowTouch = false;
      this.FCtl3D = false;
      this.FParentCtl3D = false;
      this.FWheelAccumulator = 0;
      this.FWheelMousePos = pas.Types.TPoint.$new();
      this.FBiDiMode = 0;
      this.FOnMouseWheelDown = null;
      this.FOnMouseWheelUp = null;
      this.FNoUserSelect = false;
      this.FEventsBound = false;
      this.FDragMode = 0;
      this.FToolTip = undefined;
      this.FColor = 0;
    };
    this.$final = function () {
      this.FLayer = undefined;
      this.FElement = undefined;
      this.FContainer = undefined;
      this.FElementEvent = undefined;
      this.FLastElementEvent = undefined;
      this.FFont = undefined;
      this.FParent = undefined;
      this.FPrevParent = undefined;
      this.FControls = undefined;
      this.FOnDragOver = undefined;
      this.FOnDragDrop = undefined;
      this.FOnStartDrag = undefined;
      this.FonEndDrag = undefined;
      this.FOnClick = undefined;
      this.FOnDblClick = undefined;
      this.FOnMouseDown = undefined;
      this.FOnMouseUp = undefined;
      this.FOnMouseMove = undefined;
      this.FOnKeyDown = undefined;
      this.FOnKeyUp = undefined;
      this.FOnKeyPress = undefined;
      this.FOnEnter = undefined;
      this.FOnExit = undefined;
      this.FAnchors = undefined;
      this.FOnMouseEnter = undefined;
      this.FOnMouseLeave = undefined;
      this.FControlStyle = undefined;
      this.FMargins = undefined;
      this.FCenter = undefined;
      this.FOnMouseWheel = undefined;
      this.FOnTouchMove = undefined;
      this.FOnTouchStart = undefined;
      this.FOnTouchEnd = undefined;
      this.FOnTouchCancel = undefined;
      this.FOrigRect = undefined;
      this.FOrigParentRect = undefined;
      this.FRequiredScripts = undefined;
      this.FParentElement = undefined;
      this.FTagObject = undefined;
      this.FEventStopPropagation = undefined;
      this.FOnResize = undefined;
      this.FWheelMousePos = undefined;
      this.FOnMouseWheelDown = undefined;
      this.FOnMouseWheelUp = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.GetControlsCount = function () {
      var Result = 0;
      Result = rtl.length(this.FControls);
      return Result;
    };
    this.GetControls = function (Index) {
      var Result = null;
      Result = this.FControls[Index];
      return Result;
    };
    this.SetVisible = function (AValue) {
      if (this.FVisible !== AValue) {
        this.VisibleChanging();
        this.FVisible = AValue;
        this.UpdateElement();
        this.DoRealign();
        this.AlignControl(this);
        this.VisibleChanged();
      };
    };
    this.SetHint = function (AValue) {
      if (this.FHint !== AValue) {
        this.FHint = AValue;
        this.UpdateElement();
      };
    };
    this.SetShowHint = function (AValue) {
      if (this.FShowHint !== AValue) {
        this.FShowHint = AValue;
        this.UpdateElement();
      };
    };
    this.SetTabOrder = function (AValue) {
      if (this.FTabOrder !== AValue) {
        this.FTabOrder = AValue;
        this.UpdateElement();
      };
    };
    this.SetTabStop = function (AValue) {
      if (this.FTabStop !== AValue) {
        this.FTabStop = AValue;
        this.UpdateElement();
      };
    };
    this.SetAlign = function (Value) {
      if (this.FAlign !== Value) {
        this.FAlign = Value;
        this.DoRealign();
      };
    };
    this.SetAlignWithMargins = function (Value) {
      if (this.FAlignWithMargins !== Value) {
        this.FAlignWithMargins = Value;
        this.DoRealign();
      };
    };
    this.GetBoundsRect = function () {
      var Result = pas.Types.TRect.$new();
      Result.Left = this.GetLeft();
      Result.Top = this.GetTop();
      Result.Right = this.GetLeft() + this.GetWidth();
      Result.Bottom = this.GetTop() + this.GetHeight();
      return Result;
    };
    this.SetBoundsRect = function (Value) {
      this.SetBoundsInt(Value.Left,Value.Top,Value.Right - Value.Left,Value.Bottom - Value.Top);
    };
    this.SetID = function (Value) {
      var eh = null;
      var el = null;
      var tmp = null;
      var frm = null;
      var p = null;
      var l = 0;
      var t = 0;
      var w = 0;
      var h = 0;
      if (this.FNew && (this.FID !== Value)) {
        eh = document.getElementById(Value);
        if (eh != null) {
          l = this.FLeft;
          t = this.FTop;
          w = this.FWidth;
          h = this.FHeight;
          tmp = null;
          this.UnbindEvents();
          if (this.FContainer != null) {
            this.FParentElement = this.FContainer.parentElement;
            tmp = document.createElement("SPAN");
            this.MoveElements(this.FContainer,tmp);
          };
          p = this.FParent;
          this.SetParent(null);
          this.CreateWithID(Value);
          this.SetParentComponent(p);
          this.FID = Value;
          this.FWidth = w;
          this.FHeight = h;
          this.UpdateElement();
          if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
            this.FLeft = l;
            this.FTop = t;
          };
          if (tmp != null) this.MoveElementsAndFree(tmp,this.GetElementHandle());
          return;
        };
      };
      if (!this.FNew && (this.FID !== Value)) {
        w = this.FWidth;
        h = this.FHeight;
        eh = document.getElementById(this.FID);
        if (eh != null) {
          tmp = document.createElement("SPAN");
          this.MoveElements(eh,tmp);
          this.UnbindEvents();
        };
        if (Value !== "") {
          eh = document.getElementById(Value);
          if (eh != null) {
            this.CreateWithID(Value);
            this.FID = Value;
            this.FWidth = w;
            this.FHeight = h;
            this.UpdateElement();
            this.MoveElementsAndFree(tmp,this.FContainer);
            return;
          };
        };
        this.FNew = true;
        this.FElement = null;
        this.CreateControl();
        if (Value === "") {
          this.CreateInitialize();
          this.FWidth = w;
          this.FHeight = h;
        };
        if (this.FParentElement != null) {
          this.FParentElement.appendChild(this.GetContainer());
        } else document.body.appendChild(this.GetContainer());
        frm = pas["WEBLib.Forms"].GetParentForm(this);
        if (frm != null) {
          this.SetParent(frm);
          this.SetElementPosition($mod.TElementPosition.epAbsolute);
          this.SetLeft(0);
          this.SetTop(0);
        };
        if (tmp != null) this.MoveElementsAndFree(tmp,this.FContainer);
        this.UpdateElement();
        this.UpdateElementSize();
      };
      this.FID = Value;
      if (this.FContainer != null) this.FContainer.setAttribute("id",Value);
    };
    this.SetMargins = function (Value) {
      this.FMargins.Assign(Value);
    };
    this.SetAnchors = function (Value) {
      if (rtl.neSet(this.FAnchors,Value)) {
        this.FAnchors = rtl.refSet(Value);
        if (!(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
          this.UpdateAnchoring();
        };
      };
    };
    this.GetElementEvent = function () {
      var Result = null;
      Result = this.FElementEvent;
      return Result;
    };
    this.GetClientOrigin = function () {
      var Result = pas.Types.TPoint.$new();
      var r = null;
      Result.$assign(pas.Types.Point(0,0));
      if (this.GetElementHandle() != null) {
        r = this.GetElementHandle().getBoundingClientRect();
        Result.$assign(pas.Types.Point(Math.round(r.left),Math.round(r.top)));
      };
      return Result;
    };
    this.SetHeightStyle = function (Value) {
      if (this.FHeightStyle !== Value) {
        this.FHeightStyle = Value;
        if ((this.FHeightStyle === $mod.TSizeStyle.ssAuto) && (this.GetElementHandle() != null) && !this.GetIsLinked()) this.GetElementStyle().removeProperty("height");
        this.UpdateElementSize();
        this.ResetAnchoring();
        this.DoBoundsChange();
      };
    };
    this.SetWidthStyle = function (Value) {
      if (this.FWidthStyle !== Value) {
        this.FWidthStyle = Value;
        if ((this.FWidthStyle === $mod.TSizeStyle.ssAuto) && (this.GetElementHandle() != null) && !this.GetIsLinked()) this.GetElementStyle().removeProperty("width");
        this.UpdateElementSize();
        this.ResetAnchoring();
        this.DoBoundsChange();
      };
    };
    this.SetHeightPercent = function (Value) {
      if (this.FHeightPercent !== Value) {
        this.FHeightPercent = Value;
        this.UpdateElementSize();
        this.ResetAnchoring();
        this.DoBoundsChange();
      };
    };
    this.SetWidthPercent = function (Value) {
      if (this.FWidthPercent !== Value) {
        this.FWidthPercent = Value;
        this.UpdateElementSize();
        this.ResetAnchoring();
        this.DoBoundsChange();
      };
    };
    this.SetShowFocus = function (Value) {
      if (this.FShowFocus !== Value) {
        this.FShowFocus = Value;
        this.UpdateElement();
      };
    };
    this.SetBorderWidth = function (Value) {
      if (this.FBorderWidth !== Value) {
        this.FBorderWidth = Value;
        this.UpdateElement();
      };
    };
    this.GetIsLinked = function () {
      var Result = false;
      Result = !this.FNew;
      return Result;
    };
    this.SetScriptLoaded = function (Value) {
      this.FScriptLoaded = Value;
    };
    this.SetRequiredScripts = function (Value) {
      this.FRequiredScripts.Assign(Value);
    };
    this.SetElementFont = function (Value) {
      if (this.FElementFont !== Value) {
        this.FElementFont = Value;
        this.UpdateElementVisual();
      };
    };
    this.SetElementPosition = function (Value) {
      if (this.FElementPosition !== Value) {
        this.FElementPosition = Value;
        if (this.GetElementHandle() != null) {
          this.UpdateElementSize();
          this.RecreateCanvas();
          this.InternalResize();
        };
      };
    };
    this.SetParentElement = function (Value) {
      if (this.FNew) {
        this.FElementPosition = $mod.TElementPosition.epRelative;
        this.CreateControl();
        this.FParentElement = Value;
        if (this.FParentElement != null) {
          this.FParentElement.appendChild(this.GetContainer());
        };
      } else {
        if (this.FParentElement != null) this.FParentElement.removeChild(this.GetContainer());
        this.FParentElement = Value;
        if (this.FParentElement != null) this.FParentElement.appendChild(this.GetContainer());
        this.UpdateElement();
      };
      this.InitScript();
      this.Invalidate();
    };
    this.SetClipChildren = function (Value) {
      this.FClipChildren = Value;
      this.UpdateElement();
    };
    this.GetClientHeight = function () {
      var Result = 0;
      Result = this.GetHeight();
      return Result;
    };
    this.GetClientWidth = function () {
      var Result = 0;
      Result = this.GetWidth();
      return Result;
    };
    this.SetClientHeight = function (Value) {
      this.SetHeight(Value);
    };
    this.SetClientWidth = function (Value) {
      this.SetWidth(Value);
    };
    this.SetParentElementID = function (Value) {
      var el = null;
      this.FParentElementID = Value;
      el = document.getElementById(this.FParentElementID);
      if (el != null) this.SetParentElement(el);
    };
    this.SetChildOrderEx = function (Value) {
      this.FChildOrder = Value;
    };
    this.GetRole = function () {
      var Result = "";
      Result = this.FRole;
      if (this.GetElementHandle() != null) Result = this.GetElementHandle().getAttribute("role");
      return Result;
    };
    this.SetRole = function (Value) {
      this.FRole = Value;
      if (this.GetElementHandle() != null) {
        if (Value === "") {
          this.GetElementHandle().removeAttribute("role")}
         else this.GetElementHandle().setAttribute("role",Value);
      };
    };
    this.GetContainer = function () {
      var Result = null;
      Result = this.FContainer;
      return Result;
    };
    this.GetChildContainer = function () {
      var Result = null;
      Result = this.FContainer;
      return Result;
    };
    this.SetParentFont = function (Value) {
      if ((Value !== this.FParentFont) && Value && (this.FParent != null)) {
        this.BeginUpdate();
        this.FFont.Assign(this.FParent.FFont);
        this.EndUpdate();
        this.UpdateElement();
      };
      this.FParentFont = Value;
    };
    this.SetParentColor = function (Value) {
      if ((this.FParentColor !== Value) && Value && (this.FParent != null)) {
        this.SetColor(this.FParent.FColor);
      };
      this.FParentColor = Value;
    };
    this.SetDragMode = function (Value) {
      this.FDragMode = Value;
      if (Value === $mod.TDragMode.dmAutomatic) {
        this.BeginDrag()}
       else this.DisableDrag();
    };
    this.SetWidth = function (AValue) {
      if (this.FWidth !== AValue) {
        this.FWidth = AValue;
        this.ResetAnchoring();
        this.DoBoundsChange();
        if (this.GetIsLinked() && (this.FWidthStyle === $mod.TSizeStyle.ssAbsolute) && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState) && !this.IsUpdating() && (this.GetElementHandle() != null)) {
          if (AValue >= 0) {
            this.GetElementStyle().setProperty("width",pas.SysUtils.IntToStr(AValue) + "px")}
           else this.GetElementStyle().removeProperty("width");
        };
      };
    };
    this.SetHeight = function (AValue) {
      var dr = null;
      if (this.FHeight !== AValue) {
        if ((this.FAlign in rtl.createSet($mod.TAlign.alLeft,$mod.TAlign.alRight,$mod.TAlign.alClient)) && (this.GetElementHandle() != null)) {
          dr = this.GetElementHandle().getBoundingClientRect();
          if ((dr.top + AValue) >= pas["WEBLib.Forms"].WinHeight()) {
            AValue = Math.round(pas["WEBLib.Forms"].WinHeight() - dr.top);
          };
        };
        this.FHeight = AValue;
        this.ResetAnchoring();
        this.DoBoundsChange();
        if (this.GetIsLinked() && (this.FHeightStyle === $mod.TSizeStyle.ssAbsolute) && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState) && !this.IsUpdating() && (this.GetElementHandle() != null)) {
          if (AValue >= 0) {
            this.GetElementStyle().setProperty("height",pas.SysUtils.IntToStr(AValue) + "px")}
           else this.GetElementStyle().removeProperty("height");
        };
      };
    };
    this.SetWidthInt = function (AValue) {
      this.FWidth = AValue;
    };
    this.SetHeightInt = function (AValue) {
      this.FHeight = AValue;
    };
    this.SetEnabled = function (Value) {
      if (this.FEnabled !== Value) {
        this.FEnabled = Value;
        this.UpdateElementData();
      };
    };
    this.RecreateCanvas = function () {
    };
    this.VisibleChanging = function () {
    };
    this.VisibleChanged = function () {
      var i = 0;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetControls(i).VisibleChanged();
      };
    };
    this.ColorChanging = function () {
    };
    this.IncUpdateCount = function () {
      this.FUpdateCount += 1;
    };
    this.DecUpdateCount = function () {
      this.FUpdateCount -= 1;
    };
    this.GetWidth = function () {
      var Result = 0;
      var cr = null;
      Result = this.FWidth;
      if ((this.GetElementHandle() != null) && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        if (Result === -1) {
          Result = Math.round(pas.System.Int(this.GetElementHandle().offsetWidth));
        };
        if (this.FWidthStyle !== $mod.TSizeStyle.ssAbsolute) {
          cr = this.GetElementHandle().getBoundingClientRect();
          Result = Math.round(pas.System.Int(cr.right - cr.left));
        };
      };
      return Result;
    };
    this.GetHeight = function () {
      var Result = 0;
      var cr = null;
      Result = this.FHeight;
      if ((this.GetElementHandle() != null) && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        if (Result === -1) {
          Result = Math.round(pas.System.Int(this.GetElementHandle().offsetHeight));
        };
        if (this.FHeightStyle !== $mod.TSizeStyle.ssAbsolute) {
          cr = this.GetElementHandle().getBoundingClientRect();
          Result = Math.round(pas.System.Int(cr.bottom - cr.top));
        };
      };
      return Result;
    };
    this.GetOuterWidth = function () {
      var Result = 0;
      Result = this.FWidth - this.FBorderWidth;
      return Result;
    };
    this.GetOuterHeight = function () {
      var Result = 0;
      Result = this.FHeight - this.FBorderWidth;
      return Result;
    };
    this.GetDesignWidth = function () {
      var Result = 0;
      Result = this.FWidth;
      return Result;
    };
    this.GetDesignHeight = function () {
      var Result = 0;
      Result = this.FHeight;
      return Result;
    };
    this.GetDesignLeft = function () {
      var Result = 0;
      Result = this.FLeft;
      return Result;
    };
    this.GetDesignTop = function () {
      var Result = 0;
      Result = this.FTop;
      return Result;
    };
    this.GetLeft = function () {
      var Result = 0;
      Result = this.FLeft;
      if ((Result === -1) && (this.GetElementHandle() != null) && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) Result = Math.round(this.GetElementHandle().offsetLeft);
      return Result;
    };
    this.GetTop = function () {
      var Result = 0;
      Result = this.FTop;
      if ((Result === -1) && (this.GetElementHandle() != null) && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) Result = Math.round(this.GetElementHandle().offsetTop);
      return Result;
    };
    this.HandleAllocated = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = null;
      return Result;
    };
    this.CreateChildElements = function (AContainer) {
    };
    this.ContainerElement = function () {
      var Result = null;
      Result = document.body;
      return Result;
    };
    this.IsStructuralElement = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.IsEnabled = function () {
      var Result = false;
      Result = this.FEnabled;
      return Result;
    };
    this.GetNewName = function () {
      var Result = "";
      var s = "";
      var lPrefix = "";
      var frm = null;
      s = this.$classname;
      pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,1);
      lPrefix = "";
      frm = pas["WEBLib.Forms"].GetParentForm(this);
      if (frm != null) lPrefix = frm.$classname;
      Result = lPrefix + "_" + $mod.FindUniqueName(s);
      return Result;
    };
    this.IsInputControl = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.UseCSSFont = function () {
      var Result = false;
      Result = !((this.FElementClassName === "") && (this.FElementFont === $mod.TElementFont.efProperty) && !this.GetIsLinked());
      return Result;
    };
    this.UseCSSFontColor = function () {
      var Result = false;
      Result = !(pas["WEBLib.Forms"].Application.FThemed && (pas["WEBLib.Graphics"].ColorToRGB(this.FFont.FColor) === pas["WEBLib.Graphics"].RGB(0,0,0)));
      return Result;
    };
    this.RecreateElement = function () {
      if (this.GetContainer() != null) {
        this.UnbindEvents();
        this.GetContainer().parentNode.removeChild(this.GetContainer());
        this.FElement = null;
        this.CreateControl();
        if ((this.FParent != null) && (this.FParent.GetContainer() != null)) this.FParent.GetChildContainer().appendChild(this.GetContainer());
      };
    };
    this.BindElement = function () {
    };
    this.CreateInitialize = function () {
      this.FRequiredScripts = pas.Classes.TStringList.$create("Create$1");
      this.FOrigRect.$assign(pas.Types.Rect(-1,-1,-1,-1));
      this.FClipChildren = true;
    };
    this.DestroyControls = function () {
      var i = 0;
      var ctrl = null;
      for (var $l = this.GetControlsCount() - 1; $l >= 0; $l--) {
        i = $l;
        ctrl = this.GetControls(i);
        ctrl = rtl.freeLoc(ctrl);
      };
    };
    this.ClearControls = function () {
      this.FControls = rtl.arraySetLength(this.FControls,null,0);
    };
    this.GetElementStyle = function () {
      var Result = null;
      Result = this.GetElementHandle().style;
      return Result;
    };
    this.SetControlCursor = function (Value) {
      this.FCursor = Value;
      if ((this.FElementClassName === "") && (this.GetElementHandle() != null)) {
        this.SetElementPointer(this.GetElementHandle(),Value);
      };
    };
    this.SetBiDiMode = function (Value) {
      if (this.GetElementHandle() != null) {
        if (Value === $mod.TBiDiMode.bdLeftToRight) {
          this.GetElementHandle().removeAttribute("dir")}
         else this.GetElementHandle().setAttribute("dir","rtl");
      };
    };
    this.GetMouseEventButton = function (Event) {
      var Result = 0;
      Result = $mod.TMouseButton.mbLeft;
      var $tmp = Event.button;
      if ($tmp === 0) {
        Result = $mod.TMouseButton.mbLeft}
       else if ($tmp === 1) {
        Result = $mod.TMouseButton.mbMiddle}
       else if ($tmp === 2) Result = $mod.TMouseButton.mbRight;
      return Result;
    };
    this.GetMouseEventShiftState = function (Event) {
      var Result = {};
      Result = {};
      if (Event.shiftKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssShift));
      if (Event.ctrlKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssCtrl));
      if (Event.altKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssAlt));
      if ((Event.buttons & 1) === 1) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssLeft));
      if ((Event.buttons & 2) === 2) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssRight));
      if ((Event.buttons & 4) === 4) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssMIDdle));
      return Result;
    };
    this.GetKeyBoardEventShiftState = function (Event) {
      var Result = {};
      Result = {};
      if (Event.shiftKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssShift));
      if (Event.ctrlKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssCtrl));
      if (Event.altKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssAlt));
      return Result;
    };
    this.GetMouseWheelEventShiftState = function (Event) {
      var Result = {};
      Result = {};
      if (Event.shiftKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssShift));
      if (Event.ctrlKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssCtrl));
      if (Event.altKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssAlt));
      return Result;
    };
    this.GetTouchEventShiftState = function (Event) {
      var Result = {};
      Result = {};
      if (Event.shiftKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssShift));
      if (Event.ctrlKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssCtrl));
      if (Event.altKey) Result = rtl.unionSet(Result,rtl.createSet(pas.Classes.TShiftState$a.ssAlt));
      return Result;
    };
    this.HandleDoClick = function (Event) {
      var Result = false;
      this.FElementEvent = Event;
      if ($mod.TElementEvent.eeClick in this.FEventStopPropagation) this.StopPropagation();
      if (this.FEnabled) this.Click();
      Result = true;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoWheel = function (Event) {
      var Result = false;
      var ss = {};
      var h = false;
      var l = 0.0;
      var t = 0.0;
      this.FElementEvent = Event;
      this.StopPropagation();
      this.XYToClient(Event.clientX,Event.clientY,{get: function () {
          return l;
        }, set: function (v) {
          l = v;
        }},{get: function () {
          return t;
        }, set: function (v) {
          t = v;
        }});
      this.FWheelMousePos.x = Math.round(l);
      this.FWheelMousePos.y = Math.round(t);
      ss = rtl.refSet(this.GetMouseWheelEventShiftState(Event));
      h = false;
      this.MouseWheel(rtl.refSet(ss),pas.System.Trunc(-Event.deltaY),{get: function () {
          return h;
        }, set: function (v) {
          h = v;
        }});
      Result = true;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoDblClick = function (Event) {
      var Result = false;
      this.FElementEvent = Event;
      if ($mod.TElementEvent.eeDblClick in this.FEventStopPropagation) this.StopPropagation();
      if (this.FEnabled) this.DblClick();
      Result = true;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoMouseDown = function (Event) {
      var Result = false;
      var l = 0.0;
      var t = 0.0;
      var ss = {};
      var mb = 0;
      this.FElementEvent = Event;
      if ($mod.TElementEvent.eeMouseDown in this.FEventStopPropagation) this.StopPropagation();
      if (!this.CanFocus()) this.PreventDefault();
      $impl.FMouseX = Math.round(Event.clientX);
      $impl.FMouseY = Math.round(Event.clientY);
      this.XYToClient(Event.clientX,Event.clientY,{get: function () {
          return l;
        }, set: function (v) {
          l = v;
        }},{get: function () {
          return t;
        }, set: function (v) {
          t = v;
        }});
      if (this.HasVertScrollBar() && (l > (this.GetWidth() - $mod.GetScrollBarWidth()))) return Result;
      if (this.HasHorzScrollBar() && (t > (this.GetHeight() - $mod.GetScrollBarHeight()))) return Result;
      ss = rtl.refSet(this.GetMouseEventShiftState(Event));
      mb = this.GetMouseEventButton(Event);
      this.MouseDown(mb,rtl.refSet(ss),pas.System.Trunc(l),pas.System.Trunc(t));
      Result = true;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoMouseUp = function (Event) {
      var Result = false;
      var l = 0.0;
      var t = 0.0;
      var ss = {};
      var mb = 0;
      this.FElementEvent = Event;
      if ($mod.TElementEvent.eeMouseUp in this.FEventStopPropagation) this.StopPropagation();
      this.XYToClient(Event.clientX,Event.clientY,{get: function () {
          return l;
        }, set: function (v) {
          l = v;
        }},{get: function () {
          return t;
        }, set: function (v) {
          t = v;
        }});
      if (this.HasVertScrollBar() && (l > (this.GetWidth() - $mod.GetScrollBarWidth()))) {
        this.FElementEvent = null;
        return Result;
      };
      if (this.HasHorzScrollBar() && (t > (this.GetHeight() - $mod.GetScrollBarHeight()))) {
        this.FElementEvent = null;
        return Result;
      };
      ss = rtl.refSet(this.GetMouseEventShiftState(Event));
      mb = this.GetMouseEventButton(Event);
      if (this.FDragMode === $mod.TDragMode.dmManual) this.DisableDrag();
      this.MouseUp(mb,rtl.refSet(ss),pas.System.Trunc(l),pas.System.Trunc(t));
      Result = true;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoMouseMove = function (Event) {
      var Result = false;
      var l = 0.0;
      var t = 0.0;
      var ss = {};
      this.FElementEvent = Event;
      $impl.FCursorX = Math.round(Event.clientX);
      $impl.FCursorY = Math.round(Event.clientY);
      if ($mod.TElementEvent.eeMouseMove in this.FEventStopPropagation) this.StopPropagation();
      this.XYToClient(Event.clientX,Event.clientY,{get: function () {
          return l;
        }, set: function (v) {
          l = v;
        }},{get: function () {
          return t;
        }, set: function (v) {
          t = v;
        }});
      ss = rtl.refSet(this.GetMouseEventShiftState(Event));
      this.MouseMove(rtl.refSet(ss),pas.System.Trunc(l),pas.System.Trunc(t));
      Result = true;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoMouseLeave = function (Event) {
      var Result = false;
      if (this.Captured()) return Result;
      Event.stopPropagation();
      this.DoMouseLeave();
      Result = true;
      return Result;
    };
    this.HandleDoContextMenu = function (Event) {
      var Result = false;
      Result = true;
      return Result;
    };
    this.LayerHandleDoMouseEnter = function (Event) {
      var Result = false;
      if ((Event.buttons === 0) && this.Captured() && !this.FMouseInsideLayer) {
        this.ReleaseCapture();
        this.HandleDoMouseUp(Event);
        this.HandleDoMouseLeave(Event);
      };
      this.FMouseInsideLayer = true;
      Result = true;
      return Result;
    };
    this.LayerHandleDoMouseLeave = function (Event) {
      var Result = false;
      this.FMouseInsideLayer = false;
      Result = true;
      return Result;
    };
    this.HandleDoMouseEnter = function (Event) {
      var Result = false;
      if (this.Captured()) return Result;
      Event.stopPropagation();
      this.DoMouseEnter();
      Result = true;
      return Result;
    };
    this.HandleDoKeyDown = function (Event) {
      var Result = false;
      var k = 0;
      var ss = {};
      var undef = false;
      this.FElementEvent = Event;
      if ($mod.TElementEvent.eeKeyDown in this.FEventStopPropagation) this.StopPropagation();
      undef = (Event.key == undefined);
      if (!undef) {
        k = this.GetKeyCode(Event.key,true);
        ss = rtl.refSet(this.GetKeyBoardEventShiftState(Event));
        this.KeyDown({get: function () {
            return k;
          }, set: function (v) {
            k = v;
          }},rtl.refSet(ss));
        if (k in rtl.createSet(13,27,9)) {
          this.KeyPreview({get: function () {
              return k;
            }, set: function (v) {
              k = v;
            }},rtl.refSet(ss));
        };
      };
      Result = true;
      if (k === 0) this.PreventDefault();
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoKeyUp = function (Event) {
      var Result = false;
      var k = 0;
      var ss = {};
      var c = "";
      var undef = false;
      this.FElementEvent = Event;
      if ($mod.TElementEvent.eeKeyUp in this.FEventStopPropagation) this.StopPropagation();
      undef = (Event.key == undefined);
      if (!undef) {
        k = this.GetKeyCode(Event.key,true);
        ss = rtl.refSet(this.GetKeyBoardEventShiftState(Event));
        if (k === 27) {
          c = "\x1B";
          this.KeyPress({get: function () {
              return c;
            }, set: function (v) {
              c = v;
            }});
        };
        this.KeyUp({get: function () {
            return k;
          }, set: function (v) {
            k = v;
          }},rtl.refSet(ss));
      };
      Result = true;
      if (k === 0) this.PreventDefault();
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoKeyPress = function (Event) {
      var Result = false;
      var c = "";
      this.FElementEvent = Event;
      if ($mod.TElementEvent.eeKeyPress in this.FEventStopPropagation) this.StopPropagation();
      if (this.IsKeyCharacter(Event.key)) {
        c = this.GetKeyChar(Event.key);
        this.KeyPress({get: function () {
            return c;
          }, set: function (v) {
            c = v;
          }});
      };
      Result = true;
      if (c === "\x00") this.PreventDefault();
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoInput = function (Event) {
      var Result = false;
      var c = "";
      var stemp = "";
      if ($mod.IsAndroid()) {
        this.FElementEvent = Event;
        if ($mod.TElementEvent.eeKeyPress in this.FEventStopPropagation) this.StopPropagation();
        c = "\x00";
        if (Event.data !== "") {
          stemp = Event.data;
          if (pas.System.Assigned(stemp)) {
            c = stemp.charAt(stemp.length - 1)}
           else c = "\b";
          this.KeyPress({get: function () {
              return c;
            }, set: function (v) {
              c = v;
            }});
        };
        Result = true;
        if (c === "\x00") this.PreventDefault();
        this.FElementEvent = null;
      };
      return Result;
    };
    this.HandleDoExit = function (Event) {
      var Result = false;
      this.DoExit();
      Result = true;
      return Result;
    };
    this.HandleDoEnter = function (Event) {
      var Result = false;
      this.FElementEvent = Event;
      this.StopPropagation();
      this.DoEnter();
      Result = true;
      this.FElementEvent = null;
      this.FGotFocus = true;
      return Result;
    };
    this.HandleDoTouchStart = function (Event) {
      var Result = false;
      var l = 0.0;
      var t = 0.0;
      var touch = null;
      var ss = {};
      this.FElementEvent = Event;
      this.FLastElementEvent = Event;
      this.StopPropagation();
      if (!this.FAllowTouch) this.PreventDefault();
      if (Event.touches.length > 0) {
        touch = Event.touches.item(0);
        this.XYToClient(touch.clientX,touch.clientY,{get: function () {
            return l;
          }, set: function (v) {
            l = v;
          }},{get: function () {
            return t;
          }, set: function (v) {
            t = v;
          }});
        ss = rtl.refSet(this.GetTouchEventShiftState(Event));
        if (this.FLinkTouchEvents) {
          this.MouseDown($mod.TMouseButton.mbLeft,rtl.refSet(ss),pas.System.Trunc(l),pas.System.Trunc(t));
        };
        this.TouchStart(pas.System.Trunc(l),pas.System.Trunc(t));
      };
      Result = true;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoTouchMove = function (Event) {
      var Result = false;
      var l = 0.0;
      var t = 0.0;
      var touch = null;
      var ss = {};
      this.FElementEvent = Event;
      this.FLastElementEvent = Event;
      this.StopPropagation();
      if (!this.FAllowTouch) this.PreventDefault();
      if (this.Captured()) this.PreventDefault();
      if (Event.touches.length > 0) {
        touch = Event.touches.item(0);
        this.XYToClient(touch.clientX,touch.clientY,{get: function () {
            return l;
          }, set: function (v) {
            l = v;
          }},{get: function () {
            return t;
          }, set: function (v) {
            t = v;
          }});
        ss = rtl.refSet(this.GetTouchEventShiftState(Event));
        if (this.FLinkTouchEvents) this.MouseMove(rtl.refSet(ss),pas.System.Trunc(l),pas.System.Trunc(t));
        this.TouchMove(pas.System.Trunc(l),pas.System.Trunc(t));
      };
      this.FElementEvent = null;
      Result = true;
      return Result;
    };
    this.HandleDoTouchEnd = function (Event) {
      var Result = false;
      var l = 0.0;
      var t = 0.0;
      var touch = null;
      var ss = {};
      this.FElementEvent = Event;
      if (!this.FAllowTouch) this.PreventDefault();
      this.ReleaseCapture();
      this.StopPropagation();
      if ((this.FLastElementEvent != null) && (this.FLastElementEvent.touches.length > 0)) {
        touch = this.FLastElementEvent.touches.item(0);
        this.XYToClient(touch.clientX,touch.clientY,{get: function () {
            return l;
          }, set: function (v) {
            l = v;
          }},{get: function () {
            return t;
          }, set: function (v) {
            t = v;
          }});
        ss = rtl.refSet(this.GetTouchEventShiftState(Event));
        if (this.FLinkTouchEvents) {
          this.MouseUp($mod.TMouseButton.mbLeft,rtl.refSet(ss),pas.System.Trunc(l),pas.System.Trunc(t));
          if (this.FEnabled && !this.FAllowTouch) this.Click();
        };
        this.TouchEnd(pas.System.Trunc(l),pas.System.Trunc(t));
      };
      this.FElementEvent = null;
      Result = true;
      return Result;
    };
    this.HandleDoTouchCancel = function (Event) {
      var Result = false;
      var l = 0.0;
      var t = 0.0;
      var touch = null;
      var ss = {};
      this.FElementEvent = Event;
      this.ReleaseCapture();
      this.StopPropagation();
      if (Event.touches.length > 0) {
        touch = Event.touches.item(0);
        this.XYToClient(touch.clientX,touch.clientY,{get: function () {
            return l;
          }, set: function (v) {
            l = v;
          }},{get: function () {
            return t;
          }, set: function (v) {
            t = v;
          }});
        ss = rtl.refSet(this.GetTouchEventShiftState(Event));
        if (this.FLinkTouchEvents) {
          this.MouseUp($mod.TMouseButton.mbLeft,rtl.refSet(ss),pas.System.Trunc(l),pas.System.Trunc(t));
        };
        this.TouchCancel(pas.System.Trunc(l),pas.System.Trunc(t));
      };
      this.FElementEvent = null;
      Result = true;
      return Result;
    };
    this.HandleDoDragStart = function (Event) {
      var Result = false;
      var obj = null;
      this.FElementEvent = Event;
      Event.stopPropagation();
      obj = null;
      this.DoStartDrag({get: function () {
          return obj;
        }, set: function (v) {
          obj = v;
        }});
      if (obj != null) {
        $impl.DragObject = obj}
       else $impl.DragObject = this;
      Result = true;
      return Result;
    };
    this.HandleDoDragOver = function (Event) {
      var Result = false;
      this.FElementEvent = Event;
      Event.stopPropagation();
      this.DragOver($impl.DragObject,Event.clientX,Event.clientY,$mod.TDragState.dsDragMove,{p: this, get: function () {
          return this.p.FAcceptDrag;
        }, set: function (v) {
          this.p.FAcceptDrag = v;
        }});
      if (this.FAcceptDrag && (!this.IsInputControl() || (Event.dataTransfer.items.length === 0))) Event.preventDefault();
      Result = !this.FAcceptDrag;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoDragEnter = function (Event) {
      var Result = false;
      this.FElementEvent = Event;
      Event.stopPropagation();
      this.FAcceptDrag = this.IsInputControl();
      this.DragOver($impl.DragObject,Event.clientX,Event.clientY,$mod.TDragState.dsDragEnter,{p: this, get: function () {
          return this.p.FAcceptDrag;
        }, set: function (v) {
          this.p.FAcceptDrag = v;
        }});
      if (this.FAcceptDrag) Event.preventDefault();
      Result = !this.FAcceptDrag;
      this.FElementEvent = null;
      return Result;
    };
    this.HandledoDragLeave = function (Event) {
      var Result = false;
      this.FElementEvent = Event;
      Event.stopPropagation();
      this.DragOver($impl.DragObject,Event.clientX,Event.clientY,$mod.TDragState.dsDragLeave,{p: this, get: function () {
          return this.p.FAcceptDrag;
        }, set: function (v) {
          this.p.FAcceptDrag = v;
        }});
      Result = true;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoDragEnd = function (Event) {
      var Result = false;
      this.FElementEvent = Event;
      Event.stopPropagation();
      this.DoEndDrag($impl.DragObject,Event.clientX,Event.clientY);
      Result = true;
      if (this.FDragMode === $mod.TDragMode.dmManual) this.DisableDrag();
      this.FElementEvent = null;
      return Result;
    };
    this.HandleDoDragDrop = function (Event) {
      var Result = false;
      this.FElementEvent = Event;
      Event.stopPropagation();
      if (!this.FAcceptDrag) {
        Event.preventDefault()}
       else {
        if (!this.IsInputControl()) Event.preventDefault();
        this.DragDrop($impl.DragObject,Event.clientX,Event.clientY);
      };
      Result = this.FAcceptDrag;
      this.FElementEvent = null;
      return Result;
    };
    this.HandleKeyPreview = function (Key) {
    };
    this.HandleFontChanged = function (Sender) {
      if (this.FUpdateCount === 0) {
        this.SetParentFont(false);
        this.ParentFontChanged();
      };
      this.FontChanged();
    };
    this.ParentFontChanged = function () {
      var i = 0;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.GetControls(i).FParentFont) {
          this.GetControls(i).FFont.Assign(this.FFont);
          this.GetControls(i).FontChanged();
          this.GetControls(i).FParentFont = true;
          this.GetControls(i).ParentFontChanged();
        };
      };
    };
    this.DoExit = function () {
      if (this.FOnExit != null) this.FOnExit(this);
    };
    this.DoEnter = function () {
      if (this.FOnEnter != null) this.FOnEnter(this);
    };
    this.Click = function () {
      if ((this.FOnClick != null) && this.IsEnabled()) this.FOnClick(this);
    };
    this.UpdateElement = function () {
      if (this.FBlockUpdateElement || (this.FUpdateCount > 0)) return;
      if ((this.GetElementHandle() != null) && (this.GetElementHandle() !== this.ContainerElement()) && !this.IsUpdating()) {
        this.UpdateElementData();
        if (!this.GetIsLinked()) {
          this.UpdateElementVisual();
        };
      };
    };
    this.UpdateElementSize = function () {
      var es = null;
      var offsLeft = 0;
      var offsTop = 0;
      var ow = 0;
      var ctrl = null;
      var cr = null;
      if (this.FBlockUpdateElement || (this.FUpdateCount > 0)) return;
      if (this.GetIsLinked()) return;
      if ((this.GetElementHandle() != null) && (this.GetElementHandle() !== this.ContainerElement())) {
        es = this.GetElementStyle();
        offsLeft = 0;
        offsTop = 0;
        ctrl = this.FParent;
        while ((ctrl != null) && (this.FElementPosition === $mod.TElementPosition.epAbsolute) && (ctrl.FElementPosition !== $mod.TElementPosition.epAbsolute) && !pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(ctrl)) {
          if (ctrl.GetIsLinked() && (ctrl.GetElementHandle() != null) && (ctrl.GetElementHandle().getAttribute("position") !== "absolute")) {
            cr = ctrl.GetElementHandle().getBoundingClientRect();
            offsLeft = Math.round(cr.left);
            offsTop = Math.round(cr.top);
            break;
          };
          ctrl = ctrl.FParent;
        };
        if ((this.FParent != null) && this.FParent.IsStructuralElement()) {
          offsLeft = this.FParent.GetLeft();
          offsTop = this.FParent.GetTop();
        };
        if (this.FElementPosition === $mod.TElementPosition.epAbsolute) {
          if (this.FTop !== -1) {
            es.setProperty("top",pas.SysUtils.IntToStr(this.FTop + offsTop) + "px")}
           else es.setProperty("top","");
          if (this.FLeft !== -1) {
            es.setProperty("left",pas.SysUtils.IntToStr(this.FLeft + offsLeft) + "px")}
           else es.setProperty("left","");
        } else {
          es.removeProperty("top");
          es.removeProperty("left");
        };
        if (this.FWidthStyle === $mod.TSizeStyle.ssAbsolute) {
          ow = this.GetOuterWidth();
          if (this.FWidth !== -1) {
            es.setProperty("width",pas.SysUtils.IntToStr(ow) + "px")}
           else es.removeProperty("width");
        };
        if (this.FWidthStyle === $mod.TSizeStyle.ssAuto) {
          es.removeProperty("width");
        };
        if (this.FHeightStyle === $mod.TSizeStyle.ssAbsolute) {
          if (this.FHeight !== -1) {
            es.setProperty("height",pas.SysUtils.IntToStr(this.GetOuterHeight()) + "px")}
           else es.removeProperty("height");
        };
        if (this.FHeightStyle === $mod.TSizeStyle.ssAuto) {
          es.removeProperty("height");
        };
        if (this.FWidthStyle === $mod.TSizeStyle.ssPercent) {
          if (this.FWidth !== -1) {
            es.setProperty("width",pas["WEBLib.Utils"].FormatProp("%.2f%%",pas.System.VarRecs(3,this.FWidthPercent)))}
           else es.removeProperty("width");
        };
        if (this.FHeightStyle === $mod.TSizeStyle.ssPercent) {
          if (this.FHeight !== -1) {
            es.setProperty("height",pas["WEBLib.Utils"].FormatProp("%.2f%%",pas.System.VarRecs(3,this.FHeightPercent)))}
           else es.removeProperty("height");
        };
        if (this.FElementPosition === $mod.TElementPosition.epAbsolute) {
          es.setProperty("position","absolute")}
         else if (this.FElementPosition === $mod.TElementPosition.epRelative) {
          es.setProperty("position","relative")}
         else es.removeProperty("position");
        es.setProperty("box-sizing","border-box");
      };
    };
    this.UpdateElementVisual = function () {
      var eh = null;
      var es = null;
      var useCSS = false;
      eh = this.GetElementHandle();
      if (!(eh != null)) return;
      if (this.IsUpdating()) return;
      es = this.GetElementStyle();
      if (this.FParentFont && (this.FParent != null)) {
        this.FFont.FOnChange = null;
        this.FFont.Assign(this.FParent.FFont);
        this.FFont.FOnChange = rtl.createCallback(this,"HandleFontChanged");
      };
      if (this.FElementClassName === "") {
        if (!this.GetIsLinked()) {
          if (this.FClipChildren && (pas.SysUtils.LowerCase(eh.tagName) !== pas["WEBLib.WebTools"].cBodyTag)) {
            es.setProperty("overflow","hidden")}
           else es.setProperty("overflow","");
        };
        this.SetElementPointer(eh,this.FCursor);
      };
      if (this.Captured()) this.FLayer.style.setProperty("cursor",es.getPropertyValue("cursor"));
      if ((this.FElementClassName !== "") || this.CanShowFocus()) {
        es.setProperty("outline","")}
       else es.setProperty("outline","none");
      this.UpdateElementSize();
      var $tmp = this.FTextDirection;
      if ($tmp === $mod.TTextDirection.tdDefault) {
        es.removeProperty("direction")}
       else if ($tmp === $mod.TTextDirection.tdRightToLeft) {
        es.setProperty("direction","rtl")}
       else if ($tmp === $mod.TTextDirection.tdLeftToRight) {
        es.setProperty("direction","ltr")}
       else if ($tmp === $mod.TTextDirection.tdInherit) es.setProperty("direction","inherit");
      if ((this.FElementClassName === "") && this.FNoUserSelect) {
        es.setProperty("webkit-user-select","none");
        es.setProperty("moz-user-select","none");
        es.setProperty("khtml-user-select","none");
        es.setProperty("ms-user-select","none");
        es.setProperty("user-select","none");
        es.setProperty("-webkit-tap-highlight-color","transparent");
      };
      this.SetElementColor(eh,this.FColor);
      useCSS = this.UseCSSFont();
      $mod.SetHTMLElementFont(eh,this.FFont,useCSS);
      if (!useCSS) {
        if (this.IsEnabled() && this.UseCSSFontColor()) es.setProperty("color",pas["WEBLib.Graphics"].ColorToHTML(this.FFont.FColor));
      } else {
        es.removeProperty("color");
      };
    };
    this.UpdateElementData = function () {
      var frm = null;
      var el = null;
      var AToolTip = "";
      var ToolTipClass = "";
      var ToolTipPos = "";
      var ToolTipPause = 0;
      var ToolTipHidePause = 0;
      var tt = undefined;
      if (this.GetElementHandle() != null) {
        if (!(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) {
          if (this.FVisible) {
            this.GetElementStyle().setProperty("display","")}
           else this.GetElementStyle().setProperty("display","none");
        };
        this.EnableTab();
        if (this.IsEnabled()) {
          this.FContainer.removeAttribute("disabled")}
         else this.FContainer.setAttribute("disabled","");
        if (this.GetIsLinked() && (this.FHint === "")) return;
        if (this.GetRole() !== "") this.FContainer.setAttribute("role",this.FRole);
        frm = pas["WEBLib.Forms"].GetParentForm(this);
        if ((frm != null) && (frm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap) && this.FShowHint && (this.FHint !== "") && !pas.System.Assigned(this.FToolTip)) {
          el = this.GetElementHandle();
          AToolTip = this.FHint;
          var $tmp = pas["WEBLib.Forms"].Application.FHintPosition;
          if ($tmp === pas["WEBLib.Forms"].THintPosition.hpLeft) {
            ToolTipPos = "left"}
           else if ($tmp === pas["WEBLib.Forms"].THintPosition.hpRight) {
            ToolTipPos = "right"}
           else if ($tmp === pas["WEBLib.Forms"].THintPosition.hpTop) {
            ToolTipPos = "top"}
           else if ($tmp === pas["WEBLib.Forms"].THintPosition.hpBottom) ToolTipPos = "bottom";
          ToolTipClass = pas["WEBLib.Forms"].Application.FHintClassName;
          ToolTipPause = pas["WEBLib.Forms"].Application.FHintPause;
          ToolTipHidePause = pas["WEBLib.Forms"].Application.FHintHidePause;
          tt = new bootstrap.Tooltip(el, {
           title: AToolTip,
           trigger: 'hover',
           placement: ToolTipPos,
           customClass: ToolTipClass,
           delay: { "show": ToolTipPause, "hide": ToolTipHidePause }
          });
          this.FToolTip = tt;
        } else {
          if (this.FShowHint && (this.FHint !== "")) {
            this.FContainer.setAttribute("title",this.FHint)}
           else this.FContainer.removeAttribute("title");
        };
        if (!this.IsEnabled() || (this.FElementFont === $mod.TElementFont.efCSS)) {
          this.GetElementStyle().removeProperty("color")}
         else if (this.UseCSSFontColor()) this.GetElementStyle().setProperty("color",pas["WEBLib.Graphics"].ColorToHTML(this.FFont.FColor));
      };
    };
    this.UpdateParent = function () {
      this.InternalUpdateParent();
      this.UpdateChildren(this.FPrevParent);
      this.UpdateChildren(this.FParent);
    };
    this.UpdateControlSize = function (AWidth, AHeight) {
      this.FWidth = AWidth;
      this.FHeight = AHeight;
    };
    this.InternalUpdateParent = function () {
      var p = null;
      p = this.FPrevParent;
      if (this.FNew) {
        this.CreateControl();
        if (this.GetContainer() != null) {
          if ((this.FParent != null) && !(this.FParent.GetContainer() != null)) this.FParent.CreateControl();
          if ((this.FParent !== p) && (p != null) && (p.GetContainer() != null)) {
            if (this.GetContainer().parentNode === p.GetChildContainer()) p.GetChildContainer().removeChild(this.GetContainer());
          };
          if ((this.FParent != null) && (this.FParent.GetContainer() != null)) {
            this.FParent.GetChildContainer().appendChild(this.GetContainer());
          };
        };
      };
    };
    this.UpdateChildren = function (AControl) {
      var I = 0;
      var c = null;
      if ((AControl != null) && !(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) {
        if (AControl.FAlign !== $mod.TAlign.alNone) AControl.DoRealign();
        if ($mod.TCustomControl.isPrototypeOf(AControl)) {
          rtl.as(AControl,$mod.TCustomControl).RecreateCanvas();
          rtl.as(AControl,$mod.TCustomControl).Invalidate();
        };
        for (var $l = 0, $end = AControl.GetControlsCount() - 1; $l <= $end; $l++) {
          I = $l;
          c = AControl.GetControls(I);
          this.UpdateChildren(c);
        };
      };
    };
    this.PersistinHTML = function () {
      var i = 0;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetControls(i).PersistinHTML();
      };
    };
    this.LoadFromHTML = function (HTML) {
      if (this.GetElementHandle() != null) this.GetElementHandle().outerHTML = HTML;
    };
    this.InitFromHTML = function () {
      var i = 0;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetControls(i).InitFromHTML();
      };
    };
    this.SaveState = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.LoadState = function (AState) {
    };
    this.DisableTab = function () {
      var i = 0;
      if (!(this.FTabStop && this.CanFocus())) {
        if (this.GetContainer() != null) this.GetContainer().setAttribute("tabindex","-1");
      };
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetControls(i).DisableTab();
      };
    };
    this.EnableTab = function () {
      var i = 0;
      if ((this.FContainer != null) && !this.GetIsLinked()) {
        if (this.FTabStop && this.CanFocus()) {
          this.FContainer.setAttribute("tabindex",pas.SysUtils.IntToStr(this.FTabOrder + 1));
        } else {
          this.FContainer.setAttribute("tabindex","-1");
        };
      };
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetControls(i).EnableTab();
      };
    };
    this.SetElementClassName = function (AValue) {
      if (this.FElementClassName !== AValue) {
        this.FElementClassName = AValue;
        if (this.FContainer != null) this.FContainer.setAttribute("class",AValue);
        this.UpdateElement();
      };
    };
    this.SetColor = function (AValue) {
      this.FColor = AValue;
      this.UpdateElementVisual();
      this.ColorChanging();
    };
    this.SetFont = function (AValue) {
      this.FFont.SetName(AValue.FName);
      this.FFont.SetSize(AValue.FSize);
      this.FFont.SetStyle(rtl.refSet(AValue.FStyle));
      this.FFont.SetColor(AValue.FColor);
    };
    this.SetParent = function (AValue) {
      var isNew = false;
      if (AValue != null) AValue = AValue.CanAcceptChild(this);
      isNew = this.FNew;
      if (this.FParent !== AValue) {
        if (this.FParent != null) this.FParent.UnRegisterParent(this);
        this.FPrevParent = this.FParent;
        this.FParent = AValue;
        this.FGotFocus = false;
        this.UpdateParent();
        if (!(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) {
          if (!isNew) this.UpdateElement();
          this.InitScript();
        };
        if (this.FParent != null) {
          this.FParent.RegisterParent(this);
        };
        if ((pas.Classes.TComponentStateItem.csLoading in this.FComponentState) && (this.FParent != null) && !(pas.Classes.TComponentStateItem.csLoading in this.FParent.FComponentState)) this.Loaded();
        if ((AValue != null) && (this.FParent != null) && !this.FParent.IsUpdating()) this.Realign();
        if (!(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) this.Invalidate();
      };
    };
    this.RegisterParent = function (AValue) {
      this.FControls = rtl.arraySetLength(this.FControls,null,rtl.length(this.FControls) + 1);
      this.FControls[rtl.length(this.FControls) - 1] = AValue;
    };
    this.UnRegisterParent = function (AValue) {
      var i = 0;
      var flg = false;
      flg = false;
      for (var $l = 0, $end = rtl.length(this.FControls) - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FControls[i] === AValue) {
          flg = true;
        };
        if (flg && (i < (rtl.length(this.FControls) - 1))) this.FControls[i] = this.FControls[i + 1];
      };
      if (flg) this.FControls = rtl.arraySetLength(this.FControls,null,rtl.length(this.FControls) - 1);
    };
    this.CanAcceptChild = function (AValue) {
      var Result = null;
      Result = this;
      return Result;
    };
    this.SetLeft = function (AValue) {
      if (this.FLeft !== AValue) {
        this.FLeft = AValue;
        this.ResetAnchoring();
        if (!this.FUpdateTopLeft) this.FOrigLeft = AValue;
        this.UpdateElementSize();
        this.RecreateCanvas();
        this.InternalResize();
        if (!(pas.Classes.TComponentStateItem.csLoading in this.FComponentState) && (this.FAlign !== $mod.TAlign.alNone) && (this.FParent != null)) {
          this.DoRealign();
        };
      };
    };
    this.SetTop = function (AValue) {
      if (this.FTop !== AValue) {
        this.FTop = AValue;
        this.ResetAnchoring();
        if (!this.FUpdateTopLeft) this.FOrigTop = AValue;
        this.UpdateElementSize();
        this.RecreateCanvas();
        this.InternalResize();
        if (!(pas.Classes.TComponentStateItem.csLoading in this.FComponentState) && (this.FAlign !== $mod.TAlign.alNone) && (this.FParent != null)) {
          this.DoRealign();
        };
      };
    };
    this.MouseUp = function (Button, Shift, X, Y) {
      if (!this.FEnabled) return;
      if (this.FOnMouseUp != null) this.FOnMouseUp(this,Button,rtl.refSet(Shift),X,Y);
    };
    this.MouseDown = function (Button, Shift, X, Y) {
      if (!this.FEnabled) return;
      if (this.FOnMouseDown != null) this.FOnMouseDown(this,Button,rtl.refSet(Shift),X,Y);
    };
    this.MouseMove = function (Shift, X, Y) {
      if (!this.FEnabled) return;
      if (this.FOnMouseMove != null) this.FOnMouseMove(this,rtl.refSet(Shift),X,Y);
    };
    this.TouchStart = function (X, Y) {
      if (this.FOnTouchStart != null) this.FOnTouchStart(this,X,Y);
    };
    this.TouchMove = function (X, Y) {
      if (this.FOnTouchMove != null) this.FOnTouchMove(this,X,Y);
    };
    this.TouchEnd = function (X, Y) {
      if (this.FOnTouchEnd != null) this.FOnTouchEnd(this,X,Y);
    };
    this.TouchCancel = function (X, Y) {
      if (this.FOnTouchCancel != null) this.FOnTouchCancel(this,X,Y);
    };
    this.DoMouseEnter = function () {
      if (this.FOnMouseEnter != null) this.FOnMouseEnter(this);
    };
    this.DoMouseLeave = function () {
      if (this.FOnMouseLeave != null) this.FOnMouseLeave(this);
    };
    this.MouseWheel = function (Shift, WheelDelta, Handled) {
      var IsNeg = false;
      if (this.FOnMouseWheel != null) this.FOnMouseWheel(this,rtl.refSet(Shift),WheelDelta,pas.Types.TPoint.$clone(pas.Types.Point(0,0)),Handled);
      this.FWheelAccumulator += WheelDelta;
      while (Math.abs(this.FWheelAccumulator) >= 120) {
        IsNeg = this.FWheelAccumulator < 0;
        this.FWheelAccumulator = Math.abs(this.FWheelAccumulator) - 120;
        if (IsNeg) {
          if (this.FWheelAccumulator !== 0) this.FWheelAccumulator = -this.FWheelAccumulator;
          this.DoMouseWheelDown(rtl.refSet(Shift),pas.Types.TPoint.$clone(this.FWheelMousePos));
        } else this.DoMouseWheelUp(rtl.refSet(Shift),pas.Types.TPoint.$clone(this.FWheelMousePos));
      };
    };
    this.DoMouseWheelDown = function (Shift, MousePos) {
      var Result = false;
      Result = false;
      if (this.FOnMouseWheelDown != null) this.FOnMouseWheelDown(this,rtl.refSet(Shift),pas.Types.TPoint.$clone(MousePos),{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }});
      return Result;
    };
    this.DoMouseWheelUp = function (Shift, MousePos) {
      var Result = false;
      Result = false;
      if (this.FOnMouseWheelUp != null) this.FOnMouseWheelUp(this,rtl.refSet(Shift),pas.Types.TPoint.$clone(MousePos),{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }});
      return Result;
    };
    this.DblClick = function () {
      if (this.FOnDblClick != null) this.FOnDblClick(this);
    };
    this.KeyDown = function (Key, Shift) {
      if (this.FOnKeyDown != null) this.FOnKeyDown(this,Key,rtl.refSet(Shift));
    };
    this.KeyPreview = function (Key, Shift) {
      if ((this.FOwner != null) && $mod.TControl.isPrototypeOf(this.FOwner)) {
        rtl.as(this.FOwner,$mod.TControl).KeyPreview(Key,rtl.refSet(Shift));
      };
    };
    this.KeyPress = function (Key) {
      if (this.FOnKeyPress != null) this.FOnKeyPress(this,Key);
    };
    this.KeyUp = function (Key, Shift) {
      if (this.FOnKeyUp != null) this.FOnKeyUp(this,Key,rtl.refSet(Shift));
    };
    this.SetFocus = function () {
      var e = null;
      if (!this.CanFocus()) return;
      if (this.GetElementHandle() != null) {
        e = this.GetElementHandle();
        if (this.FGotFocus) {
          e.focus();
        } else {
          setTimeout(function() {e.focus();}, 1);
        };
      };
    };
    this.DoMarginsChanged = function (Sender) {
      this.DoRealign();
    };
    this.DoCenterChanged = function (Sender) {
      this.DoRealign();
    };
    this.DoRealign = function () {
      if ((this.FParent != null) && !this.FParent.IsUpdating()) {
        this.FParent.AlignControl(this.FParent);
      };
    };
    this.DoBoundsChange = function () {
      var b = false;
      var frm = null;
      this.UpdateElementSize();
      this.RecreateCanvas();
      if (this.FIsResizing) return;
      this.FIsResizing = true;
      this.InternalResize();
      this.DoRealign();
      b = false;
      frm = pas["WEBLib.Forms"].GetParentForm(this);
      if (frm != null) {
        b = frm.FIsResizing$1;
        b = b || (frm.FUpdateCount > 0);
      };
      b = b || (this.FUpdateCount > 0);
      b = b || this.FIsAligning;
      if (!b) {
        this.UpdateChildAnchoring();
      };
      this.FIsResizing = false;
    };
    this.DoEndDrag = function (Target, X, Y) {
      if (this.FonEndDrag != null) this.FonEndDrag(this,Target,X,Y);
    };
    this.DoStartDrag = function (DragObject) {
      if (this.FOnStartDrag != null) this.FOnStartDrag(this,DragObject);
    };
    this.DragOver = function (Source, X, Y, State, Accept) {
      if (this.FOnDragOver != null) this.FOnDragOver(this,Source,X,Y,State,Accept);
    };
    this.IsFocused = function () {
      var Result = false;
      Result = this.FContainer === document.activeElement;
      return Result;
    };
    this.Focused = function () {
      var Result = false;
      Result = this.FContainer === document.activeElement;
      return Result;
    };
    this.GetID = function () {
      var Result = "";
      Result = this.FID;
      return Result;
    };
    this.GetElementHandle = function () {
      var Result = null;
      Result = null;
      if ((this.FContainer != null) && this.FControlCreated) Result = this.FContainer;
      return Result;
    };
    this.GetElementBindHandle = function () {
      var Result = null;
      Result = this.GetElementHandle();
      return Result;
    };
    this.GetElement = function () {
      var Result = null;
      Result = document.getElementById(this.GetID());
      return Result;
    };
    this.GetKeyCode = function (AValue, IgnoreCase) {
      var Result = 0;
      var i = 0;
      i = -1;
      var $tmp = AValue;
      if ($tmp === "Up") {
        i = 38}
       else if ($tmp === "Down") {
        i = 40}
       else if ($tmp === "Left") {
        i = 37}
       else if ($tmp === "Right") {
        i = 39}
       else if ($tmp === "!") {
        i = 56}
       else if ($tmp === '"') {
        i = 51}
       else if ($tmp === "#") {
        i = 51}
       else if ($tmp === "$") {
        i = 186}
       else if ($tmp === "%") {
        i = 192}
       else if ($tmp === "'") {
        i = 52}
       else if ($tmp === "(") {
        i = 53}
       else if ($tmp === ")") {
        i = 219}
       else if ($tmp === "*") {
        i = 106}
       else if ($tmp === "+") {
        i = 107}
       else if ($tmp === "-") {
        i = 109}
       else if ($tmp === ",") {
        i = 44}
       else if ($tmp === ".") {
        i = 46}
       else if ($tmp === "/") {
        i = 111}
       else if ($tmp === "\\") {
        i = 226}
       else if ($tmp === "=") {
        i = 187}
       else if ($tmp === "<") {
        i = 226}
       else if ($tmp === ">") {
        i = 226}
       else if ($tmp === pas.Web.TJSKeyNames.BackSpace) {
        i = 8}
       else if ($tmp === pas.Web.TJSKeyNames.Tab) {
        i = 9}
       else if ($tmp === pas.Web.TJSKeyNames.Enter) {
        i = 13}
       else if ($tmp === pas.Web.TJSKeyNames.Shift) {
        i = 16}
       else if ($tmp === pas.Web.TJSKeyNames.Control) {
        i = 17}
       else if ($tmp === pas.Web.TJSKeyNames.Alt) {
        i = 18}
       else if ($tmp === pas.Web.TJSKeyNames.Pause) {
        i = 19}
       else if ($tmp === pas.Web.TJSKeyNames.CapsLock) {
        i = 20}
       else if ($tmp === pas.Web.TJSKeyNames.Escape) {
        i = 27}
       else if ($tmp === pas.Web.TJSKeyNames.PageUp) {
        i = 33}
       else if ($tmp === pas.Web.TJSKeyNames.PageDown) {
        i = 34}
       else if ($tmp === pas.Web.TJSKeyNames._End) {
        i = 35}
       else if ($tmp === pas.Web.TJSKeyNames.Home) {
        i = 36}
       else if ($tmp === pas.Web.TJSKeyNames.ArrowLeft) {
        i = 37}
       else if ($tmp === pas.Web.TJSKeyNames.ArrowUp) {
        i = 38}
       else if ($tmp === pas.Web.TJSKeyNames.ArrowRight) {
        i = 39}
       else if ($tmp === pas.Web.TJSKeyNames.ArrowDown) {
        i = 40}
       else if ($tmp === pas.Web.TJSKeyNames.Insert) {
        i = 45}
       else if ($tmp === pas.Web.TJSKeyNames.Delete) {
        i = 46}
       else if ($tmp === pas.Web.TJSKeyNames.F1) {
        i = 112}
       else if ($tmp === pas.Web.TJSKeyNames.F2) {
        i = 113}
       else if ($tmp === pas.Web.TJSKeyNames.F3) {
        i = 114}
       else if ($tmp === pas.Web.TJSKeyNames.F4) {
        i = 115}
       else if ($tmp === pas.Web.TJSKeyNames.F5) {
        i = 116}
       else if ($tmp === pas.Web.TJSKeyNames.F6) {
        i = 117}
       else if ($tmp === pas.Web.TJSKeyNames.F7) {
        i = 118}
       else if ($tmp === pas.Web.TJSKeyNames.F8) {
        i = 119}
       else if ($tmp === pas.Web.TJSKeyNames.F9) {
        i = 120}
       else if ($tmp === pas.Web.TJSKeyNames.F10) {
        i = 121}
       else if ($tmp === pas.Web.TJSKeyNames.F11) {
        i = 122}
       else if ($tmp === pas.Web.TJSKeyNames.F12) {
        i = 123}
       else if ($tmp === pas.Web.TJSKeyNames.F13) {
        i = 124}
       else if ($tmp === pas.Web.TJSKeyNames.F14) {
        i = 125}
       else if ($tmp === pas.Web.TJSKeyNames.F15) {
        i = 126}
       else if ($tmp === pas.Web.TJSKeyNames.F16) {
        i = 127}
       else if ($tmp === pas.Web.TJSKeyNames.F17) {
        i = 128}
       else if ($tmp === pas.Web.TJSKeyNames.F18) {
        i = 129}
       else if ($tmp === pas.Web.TJSKeyNames.F19) {
        i = 130}
       else if ($tmp === pas.Web.TJSKeyNames.F20) {
        i = 131}
       else {
        if (pas.System.Assigned(AValue) && (AValue.length > 0)) {
          i = AValue.charCodeAt(1 - 1);
          if (IgnoreCase && (i >= 97) && (i <= 122)) {
            i = i & 0xDF}
           else if ((i >= 65) && (i <= 90)) {
            i = i | 0x40}
           else if (i > 122) i = i | 0x80;
        };
      };
      Result = i;
      return Result;
    };
    this.GetKeyChar = function (AValue) {
      var Result = "";
      var i = 0;
      i = -1;
      Result = "\x00";
      var $tmp = AValue;
      if ($tmp === pas.Web.TJSKeyNames.BackSpace) {
        i = 8}
       else if ($tmp === pas.Web.TJSKeyNames.Tab) {
        i = 9}
       else if ($tmp === pas.Web.TJSKeyNames.Enter) {
        i = 13}
       else if ($tmp === pas.Web.TJSKeyNames.Shift) {
        i = 16}
       else if ($tmp === pas.Web.TJSKeyNames.Control) {
        i = 17}
       else if ($tmp === pas.Web.TJSKeyNames.Alt) {
        i = 18}
       else if ($tmp === pas.Web.TJSKeyNames.Pause) {
        i = 19}
       else if ($tmp === pas.Web.TJSKeyNames.CapsLock) {
        i = 20}
       else if ($tmp === pas.Web.TJSKeyNames.Escape) {
        i = 27}
       else if ($tmp === pas.Web.TJSKeyNames.PageUp) {
        i = 33}
       else if ($tmp === pas.Web.TJSKeyNames.PageDown) {
        i = 34}
       else if ($tmp === pas.Web.TJSKeyNames._End) {
        i = 35}
       else if ($tmp === pas.Web.TJSKeyNames.Home) {
        i = 36}
       else if ($tmp === pas.Web.TJSKeyNames.ArrowLeft) {
        i = 37}
       else if ($tmp === pas.Web.TJSKeyNames.ArrowUp) {
        i = 38}
       else if ($tmp === pas.Web.TJSKeyNames.ArrowRight) {
        i = 39}
       else if ($tmp === pas.Web.TJSKeyNames.ArrowDown) {
        i = 40}
       else if ($tmp === pas.Web.TJSKeyNames.Insert) {
        i = 45}
       else if ($tmp === pas.Web.TJSKeyNames.Delete) {
        i = 46}
       else if ($tmp === pas.Web.TJSKeyNames.F1) {
        i = 112}
       else if ($tmp === pas.Web.TJSKeyNames.F2) {
        i = 113}
       else if ($tmp === pas.Web.TJSKeyNames.F3) {
        i = 114}
       else if ($tmp === pas.Web.TJSKeyNames.F4) {
        i = 115}
       else if ($tmp === pas.Web.TJSKeyNames.F5) {
        i = 116}
       else if ($tmp === pas.Web.TJSKeyNames.F6) {
        i = 117}
       else if ($tmp === pas.Web.TJSKeyNames.F7) {
        i = 118}
       else if ($tmp === pas.Web.TJSKeyNames.F8) {
        i = 119}
       else if ($tmp === pas.Web.TJSKeyNames.F9) {
        i = 120}
       else if ($tmp === pas.Web.TJSKeyNames.F10) {
        i = 121}
       else if ($tmp === pas.Web.TJSKeyNames.F11) {
        i = 122}
       else if ($tmp === pas.Web.TJSKeyNames.F12) {
        i = 123}
       else if ($tmp === pas.Web.TJSKeyNames.F13) {
        i = 124}
       else if ($tmp === pas.Web.TJSKeyNames.F14) {
        i = 125}
       else if ($tmp === pas.Web.TJSKeyNames.F15) {
        i = 126}
       else if ($tmp === pas.Web.TJSKeyNames.F16) {
        i = 127}
       else if ($tmp === pas.Web.TJSKeyNames.F17) {
        i = 128}
       else if ($tmp === pas.Web.TJSKeyNames.F18) {
        i = 129}
       else if ($tmp === pas.Web.TJSKeyNames.F19) {
        i = 130}
       else if ($tmp === pas.Web.TJSKeyNames.F20) {
        i = 131}
       else {
        Result = AValue.charAt(0);
      };
      if (i !== -1) Result = String.fromCharCode(i);
      return Result;
    };
    this.IsKeyCharacter = function (AValue) {
      var Result = false;
      var $tmp = AValue;
      if (($tmp === "Up") || ($tmp === "Down") || ($tmp === "Left") || ($tmp === "Right") || ($tmp === pas.Web.TJSKeyNames.Shift) || ($tmp === pas.Web.TJSKeyNames.Control) || ($tmp === pas.Web.TJSKeyNames.Alt) || ($tmp === pas.Web.TJSKeyNames.Pause) || ($tmp === pas.Web.TJSKeyNames.CapsLock) || ($tmp === pas.Web.TJSKeyNames.PageUp) || ($tmp === pas.Web.TJSKeyNames.PageDown) || ($tmp === pas.Web.TJSKeyNames._End) || ($tmp === pas.Web.TJSKeyNames.Home) || ($tmp === pas.Web.TJSKeyNames.ArrowLeft) || ($tmp === pas.Web.TJSKeyNames.ArrowUp) || ($tmp === pas.Web.TJSKeyNames.ArrowRight) || ($tmp === pas.Web.TJSKeyNames.ArrowDown) || ($tmp === pas.Web.TJSKeyNames.Insert) || ($tmp === pas.Web.TJSKeyNames.Delete) || ($tmp === pas.Web.TJSKeyNames.F1) || ($tmp === pas.Web.TJSKeyNames.F2) || ($tmp === pas.Web.TJSKeyNames.F3) || ($tmp === pas.Web.TJSKeyNames.F4) || ($tmp === pas.Web.TJSKeyNames.F5) || ($tmp === pas.Web.TJSKeyNames.F6) || ($tmp === pas.Web.TJSKeyNames.F7) || ($tmp === pas.Web.TJSKeyNames.F8) || ($tmp === pas.Web.TJSKeyNames.F9) || ($tmp === pas.Web.TJSKeyNames.F10) || ($tmp === pas.Web.TJSKeyNames.F11) || ($tmp === pas.Web.TJSKeyNames.F12) || ($tmp === pas.Web.TJSKeyNames.F13) || ($tmp === pas.Web.TJSKeyNames.F14) || ($tmp === pas.Web.TJSKeyNames.F15) || ($tmp === pas.Web.TJSKeyNames.F16) || ($tmp === pas.Web.TJSKeyNames.F17) || ($tmp === pas.Web.TJSKeyNames.F18) || ($tmp === pas.Web.TJSKeyNames.F19) || ($tmp === pas.Web.TJSKeyNames.F20)) {
        Result = false}
       else {
        Result = true;
      };
      return Result;
    };
    this.GetClientRect = function () {
      var Result = pas.Types.TRect.$new();
      var css = "";
      var p = 0;
      var brdr = 0;
      css = pas.SysUtils.UpperCase(this.GetStyle("border-width"));
      brdr = 0;
      p = pas.System.Pos("PX",css);
      if (p > 0) {
        pas.System.Delete({get: function () {
            return css;
          }, set: function (v) {
            css = v;
          }},p,2);
        pas.System.val$6(css,{get: function () {
            return brdr;
          }, set: function (v) {
            brdr = v;
          }},{get: function () {
            return p;
          }, set: function (v) {
            p = v;
          }});
      };
      Result.$assign(pas.Types.Rect(0,0,this.GetWidth() - (2 * brdr),this.GetHeight() - (2 * brdr)));
      return Result;
    };
    this.CreateControl = function () {
      if (!(this.FElement != null)) {
        this.FElement = this.CreateElement();
        if (this.FElement != null) {
          this.FControlCreated = true;
          this.FContainer = this.FElement;
          if (!(this.GetID() === "body")) this.GetContainer().setAttribute("id",this.GetID());
          this.GetContainer().setAttribute("zindex","0");
          if (this.FElementClassName !== "") this.GetContainer().setAttribute("class",this.FElementClassName);
          this.CreateChildElements(this.FElement);
          this.BindEvents();
          this.UpdateElement();
        };
      };
    };
    this.ClearMethodPointers = function () {
      this.FWheelPtr = null;
      this.FClickPtr = null;
      this.FDblClickPtr = null;
      this.FMouseDownPtr = null;
      this.FMouseUpPtr = null;
      this.FMouseMovePtr = null;
      this.FMouseLeavePtr = null;
      this.FMouseEnterPtr = null;
      this.FKeyDownPtr = null;
      this.FKeyUpPtr = null;
      this.FKeyPressPtr = null;
      this.FInputPtr = null;
      this.FEnterPtr = null;
      this.FExitPtr = null;
      this.FTouchStartPtr = null;
      this.FTouchEndPtr = null;
      this.FTouchMovePtr = null;
      this.FTouchCancelPtr = null;
      this.FLayerMouseLeavePtr = null;
      this.FLayerMouseEnterPtr = null;
      this.FScriptLoadedPtr = null;
      this.FContextMenuPtr = null;
    };
    this.GetMethodPointers = function () {
      if (this.FWheelPtr === null) {
        this.FWheelPtr = rtl.createCallback(this,"HandleDoWheel");
        this.FClickPtr = rtl.createCallback(this,"HandleDoClick");
        this.FDblClickPtr = rtl.createCallback(this,"HandleDoDblClick");
        this.FMouseDownPtr = rtl.createCallback(this,"HandleDoMouseDown");
        this.FMouseUpPtr = rtl.createCallback(this,"HandleDoMouseUp");
        this.FMouseMovePtr = rtl.createCallback(this,"HandleDoMouseMove");
        this.FMouseLeavePtr = rtl.createCallback(this,"HandleDoMouseLeave");
        this.FMouseEnterPtr = rtl.createCallback(this,"HandleDoMouseEnter");
        this.FKeyDownPtr = rtl.createCallback(this,"HandleDoKeyDown");
        this.FKeyUpPtr = rtl.createCallback(this,"HandleDoKeyUp");
        this.FKeyPressPtr = rtl.createCallback(this,"HandleDoKeyPress");
        this.FInputPtr = rtl.createCallback(this,"HandleDoInput");
        this.FEnterPtr = rtl.createCallback(this,"HandleDoEnter");
        this.FExitPtr = rtl.createCallback(this,"HandleDoExit");
        this.FTouchStartPtr = rtl.createCallback(this,"HandleDoTouchStart");
        this.FTouchEndPtr = rtl.createCallback(this,"HandleDoTouchEnd");
        this.FTouchMovePtr = rtl.createCallback(this,"HandleDoTouchMove");
        this.FTouchCancelPtr = rtl.createCallback(this,"HandleDoTouchCancel");
        this.FLayerMouseLeavePtr = rtl.createCallback(this,"LayerHandleDoMouseLeave");
        this.FLayerMouseEnterPtr = rtl.createCallback(this,"LayerHandleDoMouseEnter");
        this.FScriptLoadedPtr = rtl.createCallback(this,"RequiredScriptLoaded");
        this.FDragStartPtr = rtl.createCallback(this,"HandleDoDragStart");
        this.FDragOverPtr = rtl.createCallback(this,"HandleDoDragOver");
        this.FDragEnterPtr = rtl.createCallback(this,"HandleDoDragEnter");
        this.FDragLeavePtr = rtl.createCallback(this,"HandledoDragLeave");
        this.FDragEndPtr = rtl.createCallback(this,"HandleDoDragEnd");
        this.FDragDropPtr = rtl.createCallback(this,"HandleDoDragDrop");
        this.FContextMenuPtr = rtl.createCallback(this,"HandleDoContextMenu");
      };
    };
    this.EventsBound = function () {
      var Result = false;
      Result = this.FEventsBound;
      return Result;
    };
    this.BindEvents = function () {
      var eh = null;
      var wp = null;
      if (this.GetElementBindHandle() != null) {
        this.GetMethodPointers();
        this.FEventsBound = true;
        eh = this.GetElementBindHandle();
        wp = this.FWheelPtr;
        eh.addEventListener('wheel', wp, { passive:true});
        eh.addEventListener("click",this.FClickPtr);
        eh.addEventListener("dblclick",this.FDblClickPtr);
        eh.addEventListener("mousedown",this.FMouseDownPtr);
        eh.addEventListener("mouseup",this.FMouseUpPtr);
        eh.addEventListener("mousemove",this.FMouseMovePtr);
        eh.addEventListener("mouseleave",this.FMouseLeavePtr);
        eh.addEventListener("mouseenter",this.FMouseEnterPtr);
        eh.addEventListener("keydown",this.FKeyDownPtr);
        eh.addEventListener("keyup",this.FKeyUpPtr);
        eh.addEventListener("keypress",this.FKeyPressPtr);
        eh.addEventListener("input",this.FInputPtr);
        eh.addEventListener("focus",this.FEnterPtr);
        eh.addEventListener("blur",this.FExitPtr);
        wp = this.FTouchStartPtr;
        eh.addEventListener('touchstart', wp, {passive: true});
        wp = this.FTouchMovePtr;
        eh.addEventListener('touchmove', wp, {passive:true});
        eh.addEventListener("touchend",this.FTouchEndPtr);
        eh.addEventListener("touchcancel",this.FTouchCancelPtr);
        eh.addEventListener("contextmenu",this.FContextMenuPtr);
        eh.addEventListener("dragstart",this.FDragStartPtr);
        eh.addEventListener("dragover",this.FDragOverPtr);
        eh.addEventListener("dragenter",this.FDragEnterPtr);
        eh.addEventListener("dragleave",this.FDragLeavePtr);
        eh.addEventListener("dragend",this.FDragEndPtr);
        eh.addEventListener("drop",this.FDragDropPtr);
      };
    };
    this.UnbindEvents = function () {
      var eh = null;
      this.ReleaseCapture();
      if (this.GetElementBindHandle() != null) {
        eh = this.GetElementBindHandle();
        eh.removeEventListener("wheel",this.FWheelPtr);
        eh.removeEventListener("click",this.FClickPtr);
        eh.removeEventListener("dblclick",this.FDblClickPtr);
        eh.removeEventListener("mousedown",this.FMouseDownPtr);
        eh.removeEventListener("mouseup",this.FMouseUpPtr);
        eh.removeEventListener("mousemove",this.FMouseMovePtr);
        eh.removeEventListener("mouseleave",this.FMouseLeavePtr);
        eh.removeEventListener("mouseenter",this.FMouseEnterPtr);
        eh.removeEventListener("keydown",this.FKeyDownPtr);
        eh.removeEventListener("keyup",this.FKeyUpPtr);
        eh.removeEventListener("keypress",this.FKeyPressPtr);
        eh.removeEventListener("focus",this.FEnterPtr);
        eh.removeEventListener("blur",this.FExitPtr);
        eh.removeEventListener("input",this.FInputPtr);
        eh.removeEventListener("touchstart",this.FTouchStartPtr);
        eh.removeEventListener("touchmove",this.FTouchMovePtr);
        eh.removeEventListener("touchend",this.FTouchEndPtr);
        eh.removeEventListener("touchcancel",this.FTouchEndPtr);
        eh.removeEventListener("contextmenu",this.FContextMenuPtr);
      };
    };
    this.UpdatePadding = function (ARect) {
    };
    this.AlignControls = function (AControl, ARect) {
      var $Self = this;
      var j = 0;
      function DoPosition(Control, AAlign) {
        var dl = 0;
        var dt = 0;
        var dr = 0;
        var db = 0;
        if (!Control.AnchoringInitialized()) $Self.InitAnchoring();
        Control.FUpdateTopLeft = true;
        if (Control.FAlignWithMargins) {
          dl = Control.FMargins.FLeft;
          dt = Control.FMargins.FTop;
          db = Control.FMargins.FBottom;
          dr = Control.FMargins.FRight;
        } else {
          dl = 0;
          dt = 0;
          db = 0;
          dr = 0;
        };
        var $tmp = AAlign;
        if ($tmp === $mod.TAlign.alTop) {
          Control.SetBoundsInt(ARect.Left + dl,ARect.Top + dt,ARect.Right - ARect.Left - dl - dr,Control.GetHeight());
          ARect.Top = ARect.Top + Control.GetHeight() + dt + db;
        } else if ($tmp === $mod.TAlign.alBottom) {
          Control.SetBoundsInt(ARect.Left + dl,ARect.Bottom - Control.GetHeight() - db - 1,ARect.Right - ARect.Left - dl - dr - 1,Control.GetHeight());
          ARect.Bottom = ARect.Bottom - Control.GetHeight() - dt - db;
        } else if ($tmp === $mod.TAlign.alLeft) {
          Control.SetBoundsInt(ARect.Left + dl,ARect.Top + dt,Control.GetWidth(),ARect.Bottom - ARect.Top - dt - db);
          ARect.Left = ARect.Left + Control.GetWidth() + dl + dr;
        } else if ($tmp === $mod.TAlign.alRight) {
          Control.SetBoundsInt(ARect.Right - Control.GetWidth() - dr,ARect.Top + dt,Control.GetWidth(),ARect.Bottom - ARect.Top - db - dt);
          ARect.Right = ARect.Right - Control.GetWidth() - dr - dl;
        } else if ($tmp === $mod.TAlign.alClient) {
          Control.SetBoundsInt(ARect.Left + dl,ARect.Top + dt,ARect.Right - ARect.Left - dl - dr,ARect.Bottom - ARect.Top - db - dt);
        } else if ($tmp === $mod.TAlign.alCustom) {
          dl = Control.GetLeft();
          dt = Control.GetTop();
          dr = 0;
          db = 0;
          if (Control.FCenter.FVertical || Control.FCenter.FHorizontal) {
            if (Control.FCenter.FHorizontal) {
              dl = ARect.Left;
              dr = rtl.trunc((ARect.Right - ARect.Left - Control.GetWidth()) / 2);
            };
            if (Control.FCenter.FVertical) {
              dt = ARect.Top;
              db = rtl.trunc((ARect.Bottom - ARect.Top - Control.GetHeight()) / 2);
            };
            Control.SetBoundsInt(dl + dr,dt + db,Control.GetWidth(),Control.GetHeight());
          };
        };
        Control.FUpdateTopLeft = false;
      };
      function DoAlign(AAlign) {
        var i = 0;
        var j = 0;
        var ins = 0;
        var il = null;
        var b = false;
        il = pas.Classes.TList.$create("Create$1");
        for (var $l = 0, $end = $Self.GetControlsCount() - 1; $l <= $end; $l++) {
          i = $l;
          b = ($Self.GetControls(i).FCenter.FVertical || $Self.GetControls(i).FCenter.FHorizontal) && (AAlign === $mod.TAlign.alCustom);
          if (b || (($Self.GetControls(i).FAlign === AAlign) && ($Self.GetControls(i).FVisible || (pas.Classes.TComponentStateItem.csDesigning in $Self.FComponentState)))) {
            ins = il.GetCount();
            for (var $l1 = il.GetCount() - 1; $l1 >= 0; $l1--) {
              j = $l1;
              var $tmp = AAlign;
              if ($tmp === $mod.TAlign.alTop) {
                if ($Self.GetControls(i).FOrigTop < rtl.getObject(il.Get(j)).FOrigTop) ins = j}
               else if ($tmp === $mod.TAlign.alLeft) {
                if ($Self.GetControls(i).FOrigLeft < rtl.getObject(il.Get(j)).FOrigLeft) ins = j}
               else if ($tmp === $mod.TAlign.alRight) {
                if (($Self.GetControls(i).FOrigLeft + $Self.GetControls(i).GetWidth()) > (rtl.getObject(il.Get(j)).FOrigLeft + rtl.getObject(il.Get(j)).GetWidth())) ins = j}
               else if ($tmp === $mod.TAlign.alBottom) if (($Self.GetControls(i).FOrigTop + $Self.GetControls(i).GetHeight()) > (rtl.getObject(il.Get(j)).FOrigTop + rtl.getObject(il.Get(j)).GetHeight())) ins = j;
            };
            il.Insert(ins,$Self.GetControls(i));
          };
        };
        for (var $l2 = 0, $end1 = il.GetCount() - 1; $l2 <= $end1; $l2++) {
          i = $l2;
          DoPosition(rtl.getObject(il.Get(i)),AAlign);
        };
        il = rtl.freeLoc(il);
      };
      this.UpdatePadding(ARect);
      DoAlign($mod.TAlign.alTop);
      DoAlign($mod.TAlign.alBottom);
      DoAlign($mod.TAlign.alLeft);
      DoAlign($mod.TAlign.alRight);
      DoAlign($mod.TAlign.alClient);
      DoAlign($mod.TAlign.alCustom);
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        j = $l;
        this.GetControls(j).AlignControl(this.GetControls(j));
      };
    };
    this.AlignControl = function (AControl) {
      var r = pas.Types.TRect.$new();
      var cr = null;
      var ovf = "";
      var ovfx = "";
      var ovfy = "";
      var eh = null;
      var el = null;
      var frm = null;
      var ctop = 0;
      var vscrl = 0;
      if (this.FIsAligning) return;
      if (this.IsUpdating()) return;
      if (pas.Classes.TComponentStateItem.csLoading in this.FComponentState) return;
      if ((this.FParent != null) && !this.FParent.FVisible) return;
      frm = pas["WEBLib.Forms"].GetParentForm(this);
      if ((frm != null) && frm.IsUpdating()) return;
      ctop = 0;
      if ((frm != null) && (frm.FFormContainer !== "") && pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(AControl)) {
        el = document.getElementById(frm.FFormContainer);
        if (el != null) {
          cr = el.getBoundingClientRect();
          ctop = Math.round(cr.top + 1);
        };
      };
      this.FIsAligning = true;
      if (!(AControl != null)) return;
      eh = AControl.GetElementHandle();
      if (eh != null) {
        ovf = AControl.GetElementStyle().getPropertyValue("overflow");
        ovfx = AControl.GetElementStyle().getPropertyValue("overflow-x");
        ovfy = AControl.GetElementStyle().getPropertyValue("overflow-y");
        if (this.FClipChildren && (pas.SysUtils.LowerCase(eh.tagName) !== pas["WEBLib.WebTools"].cBodyTag)) {
          AControl.GetElementStyle().setProperty("overflow","hidden")}
         else AControl.GetElementStyle().setProperty("overflow","");
      };
      r.$assign(this.GetClientRect());
      r.Bottom = r.Bottom - ctop;
      if (this.GetIsLinked()) {
        cr = this.GetElementHandle().getBoundingClientRect();
        r.$assign(pas.Types.Rect(0,0,Math.round(cr.right - cr.left),Math.round(cr.bottom - cr.top)));
      };
      if (((r.Bottom + ctop) > pas["WEBLib.Forms"].WinHeight()) && (this.FHeightStyle !== $mod.TSizeStyle.ssAbsolute) && !(this.FElementPosition === $mod.TElementPosition.epAbsolute) && !this.GetIsLinked() && !(pas["WEBLib.Forms"].VSIDE != null)) {
        if (((this.FParent != null) && pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(this.FParent)) || pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(this)) {
          r.Bottom = pas["WEBLib.Forms"].WinHeight() - ctop;
        };
      };
      if ((eh != null) && (eh.tagName === "BODY")) {
        vscrl = 0;
        if ((document.body.scrollHeight > document.body.clientHeight) && !(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) vscrl = 16;
        if (frm.FFormContainer !== "") {
          r.Bottom = Math.round(Math.min(r.Bottom,pas["WEBLib.Forms"].WinHeight()));
          r.Right = Math.round(Math.min(r.Right - vscrl,pas["WEBLib.Forms"].WinWidth()));
        } else {
          r.Bottom = frm.GetHeight();
          r.Right = frm.GetWidth();
        };
      };
      if (pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(AControl) && !(pas["WEBLib.Forms"].VSIDE != null)) {
        if (r.Bottom > pas["WEBLib.Forms"].WinHeight()) r.Bottom = pas["WEBLib.Forms"].WinHeight();
        if (r.Right > pas["WEBLib.Forms"].WinWidth()) r.Right = pas["WEBLib.Forms"].WinWidth();
      };
      if (AControl.IsStructuralElement()) {
        r.$assign(this.FParent.GetClientRect());
      };
      this.AlignControls(AControl,r);
      if (eh != null) {
        AControl.GetElementStyle().setProperty("overflow",ovf);
        AControl.GetElementStyle().setProperty("overflow-x",ovfx);
        AControl.GetElementStyle().setProperty("overflow-y",ovfy);
      };
      this.FIsAligning = false;
    };
    this.InitAnchoring = function () {
      var $Self = this;
      var i = 0;
      var dx = 0;
      var dy = 0;
      function SizeBorderOffset(AObject, ax, ay) {
        var prop = null;
        ax.set(0);
        ay.set(0);
        prop = pas.TypInfo.GetPropInfo(AObject.$class.ClassInfo(),"BorderStyle");
        if (prop != null) {
          i = pas.TypInfo.GetOrdProp$1(AObject,prop);
          if (i in rtl.createSet(1,4,5)) {
            ax.set(4);
            ay.set(4);
          };
          if (i in rtl.createSet(2,3)) {
            ax.set(16);
            ay.set(16);
          };
        };
      };
      if (this.AnchoringInitialized()) return;
      dx = 0;
      dy = 0;
      if (pas["WEBLib.Forms"].TForm.isPrototypeOf($Self)) {
        if (rtl.as($Self,pas["WEBLib.Forms"].TForm).IsMiletus()) SizeBorderOffset($Self,{get: function () {
            return dx;
          }, set: function (v) {
            dx = v;
          }},{get: function () {
            return dy;
          }, set: function (v) {
            dy = v;
          }});
        this.FOrigRect.$assign(pas.Types.Rect(0,0,this.GetDesignWidth() - dx,this.GetDesignHeight() - dy));
      } else {
        this.FOrigRect.$assign(pas.Types.Rect(this.GetDesignLeft(),this.GetDesignTop(),this.GetDesignLeft() + this.GetDesignWidth(),this.GetDesignTop() + this.GetDesignHeight()));
      };
      if (this.FParent != null) {
        if (pas["WEBLib.Forms"].TForm.isPrototypeOf(this.FParent)) {
          if (rtl.as(this.FParent,pas["WEBLib.Forms"].TForm).IsMiletus()) {
            SizeBorderOffset(this.FParent,{get: function () {
                return dx;
              }, set: function (v) {
                dx = v;
              }},{get: function () {
                return dy;
              }, set: function (v) {
                dy = v;
              }});
          };
          this.FOrigParentRect.$assign(pas.Types.Rect(0,0,this.FParent.GetDesignWidth() - dx,this.FParent.GetDesignHeight() - dy));
        } else {
          if (!this.FParent.AnchoringInitialized()) this.FParent.InitAnchoring();
          this.FOrigParentRect.$assign(pas.Types.Rect(this.FParent.GetDesignLeft(),this.FParent.GetDesignTop(),this.FParent.GetDesignLeft() + this.FParent.GetDesignWidth(),this.FParent.GetDesignTop() + this.FParent.GetDesignHeight()));
        };
      };
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetControls(i).InitAnchoring();
      };
    };
    this.AnchoringInitialized = function () {
      var Result = false;
      Result = (this.FOrigRect.Left !== -1) || (this.FOrigRect.Top !== -1);
      return Result;
    };
    this.InitScript = function () {
    };
    this.Realign = function () {
      this.AlignControl(this);
    };
    this.Loaded = function () {
      var i = 0;
      if (!(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) return;
      pas.Classes.TComponent.Loaded.call(this);
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        if ((this.GetControls(i).FElementPosition in rtl.createSet($mod.TElementPosition.epRelative,$mod.TElementPosition.epIgnore)) && !this.GetControls(i).GetIsLinked() && (this.GetControls(i).FChildOrder >= 0)) {
          if (this.GetControls(i).FChildOrder < this.GetChildContainer().childNodes.length) {
            this.GetChildContainer().insertBefore(this.GetControls(i).GetContainer(),this.GetChildContainer().childNodes.item(this.GetControls(i).FChildOrder));
          };
        };
        this.GetControls(i).Loaded();
      };
      for (var $l1 = 0, $end1 = this.GetComponentCount() - 1; $l1 <= $end1; $l1++) {
        i = $l1;
        if (pas.Classes.TComponentStateItem.csLoading in this.GetComponent(i).FComponentState) this.GetComponent(i).Loaded();
      };
      var $tmp = this.FAlign;
      if ($tmp === $mod.TAlign.alClient) {
        if (this.FParent != null) this.SetBoundsInt(0,0,this.FParent.FWidth,this.FParent.FHeight);
      };
      this.Resize();
      this.UpdateElement();
    };
    this.InternalResize = function () {
      if (pas.Classes.TComponentStateItem.csLoading in this.FComponentState) return;
      this.Resize();
    };
    this.FontChanged = function () {
      this.UpdateElementVisual();
    };
    this.DisposeOf = function () {
      var t = null;
      t = this;
      t = rtl.freeLoc(t);
    };
    this.ClearChildElements = function () {
      var el = null;
      if (!(this.GetElementHandle() != null)) return;
      while (this.GetElementHandle().childElementCount > 0) {
        el = this.GetElementHandle().firstChild;
        this.GetElementHandle().removeChild(el);
      };
    };
    this.HookElement = function () {
      var el = null;
      var i = 0;
      el = document.getElementById(this.FID);
      this.FContainer = el;
      this.BindElement();
      this.BindEvents();
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetControls(i).HookElement();
      };
    };
    this.SetElementColor = function (AElement, AColor) {
      var noCSS = false;
      noCSS = !pas["WEBLib.Forms"].Application.FThemed && !(this.FElementClassName !== "");
      if (!this.GetIsLinked()) $mod.SetHTMLElementColor(AElement,AColor,!noCSS);
    };
    this.MoveElements = function (FromElement, ToElement) {
      if (FromElement && ToElement) {
        while (FromElement.childNodes.length) { ToElement.appendChild(FromElement.firstChild); }
      };
    };
    this.MoveElementsAndFree = function (FromElement, ToElement) {
      if (FromElement && ToElement){
        while (FromElement.childNodes.length) { ToElement.appendChild(FromElement.firstChild); }
        FromElement.remove();
      };
    };
    this.CreateWithID = function (AID) {
      var el = null;
      this.ClearMethodPointers();
      this.FUpdateCount = 0;
      this.FControlCreated = false;
      this.FLinkTouchEvents = true;
      this.FIsResizing = false;
      if (((this.FOwner != null) && (pas.Classes.TComponentStateItem.csLoading in this.FOwner.FComponentState)) || !(this.FOwner != null)) {
        if (!((this.FOwner != null) && (pas.Classes.TComponentStateItem.csDesigning in this.FOwner.FComponentState))) this.Loading();
      };
      this.FElementPosition = $mod.TElementPosition.epAbsolute;
      this.FWidthStyle = $mod.TSizeStyle.ssAbsolute;
      this.FHeightStyle = $mod.TSizeStyle.ssAbsolute;
      el = document.getElementById(AID);
      this.FNew = !(el != null);
      this.FFont = pas["WEBLib.Graphics"].TFont.$create("Create$1");
      this.FFont.FOnChange = rtl.createCallback(this,"HandleFontChanged");
      if (this.FNew) {
        this.FContainer = null;
      } else {
        this.FContainer = el;
        this.FControlCreated = true;
        this.FElementPosition = $mod.TElementPosition.epRelative;
        this.CreateChildElements(el);
        this.BindElement();
        this.BindEvents();
      };
      this.FID = AID;
      this.FEnabled = true;
      this.FVisible = true;
      this.FLeft = 0;
      this.FTop = 0;
      this.FAlign = $mod.TAlign.alNone;
      this.FAlignWithMargins = false;
      this.FIsAligning = false;
      this.FParentFont = true;
      this.FParentBiDiMode = true;
      this.FParentColor = false;
      this.FAnchors = rtl.createSet($mod.TAnchorKind.akLeft,$mod.TAnchorKind.akTop);
      this.FShowFocus = false;
      this.FBorderWidth = 0;
      this.FEnablePropagation = false;
      this.FToolTip = null;
      this.FColor = 16711422;
      this.FMargins = $mod.TMargins.$create("Create$1");
      this.FMargins.FOnChange = rtl.createCallback(this,"DoMarginsChanged");
      this.FCenter = $mod.TCenter.$create("Create");
      this.FCenter.FOnChange = rtl.createCallback(this,"DoCenterChanged");
      this.FParent = null;
      this.FPrevParent = null;
      if (!($mod.TControlStyleValue.csAcceptsControls in this.FControlStyle)) this.ClearControls();
      this.CreateInitialize();
    };
    this.AddInstanceStyle = function (css) {
      var cssname = "";
      cssname = this.FName + "_style";
      this.$class.AddInstanceStyle$1(cssname,css);
    };
    this.AddInstanceStyle$1 = function (id, css) {
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
    this.AddControlStyle = function (css) {
      var cssname = "";
      cssname = this.$classname;
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
      writeStylesOnce(cssname,css);
    };
    this.AddControlLink = function (linkid, link) {
      function writeLinkOnce(linkName, linkText) {
          var linkElement = document.getElementById(linkName);
          if (linkElement)
            return;
          linkElement = document.createElement('link');
          linkElement.id = linkName;
          linkElement.setAttribute('rel', 'stylesheet');
          linkElement.setAttribute('type', 'text/css');
          linkElement.setAttribute('href', linkText);
          document.getElementsByTagName('head')[0].appendChild(linkElement);
      }
      writeLinkOnce(linkid,link);
    };
    this.AddControlScriptLink = function (link) {
      var id = "";
      var script = null;
      id = this.$classname;
      if (!(document.getElementById(id) != null)) {
        script = document.createElement("script");
        script.id = id;
        script.src = link;
        script.type = "text/javascript";
        document.head.appendChild(script);
      };
    };
    this.AddControlScriptSource = function (source) {
      var id = "";
      var script = null;
      id = this.$classname + "SRC";
      if (!(document.getElementById(id) != null)) {
        script = document.createElement("script");
        script.id = id;
        script.innerHTML = source;
        script.type = "text/javascript";
        document.head.appendChild(script);
      };
    };
    this.AddRequiredScripts = function () {
      var Result = false;
      var i = 0;
      var j = 0;
      var el = null;
      var scr = null;
      var found = false;
      var loading = false;
      this.FControlScriptCount = 0;
      for (var $l = 0, $end = this.FRequiredScripts.GetCount() - 1; $l <= $end; $l++) {
        j = $l;
        found = false;
        loading = false;
        for (var $l1 = 0, $end1 = document.head.children.length - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          el = document.head.children.item(i);
          if (el.tagName === "SCRIPT") {
            scr = el;
            if (pas.System.Pos(this.FRequiredScripts.Get(j),scr.src) > 0) {
              found = true;
              if (scr.title === "tmswebloading") {
                loading = true;
                if (!(this.FScriptLoadedPtr != null)) this.FScriptLoadedPtr = rtl.createCallback(this,"RequiredScriptLoaded");
                scr.addEventListener("load",this.FScriptLoadedPtr);
              };
              break;
            };
          };
        };
        if (!found) {
          this.FControlScriptCount += 1;
          this.AddRequiredScript(this.RequiredBaseURL() + this.FRequiredScripts.Get(j));
        };
        if (found && loading) this.FControlScriptCount += 1;
      };
      Result = this.FControlScriptCount > 0;
      return Result;
    };
    this.AddRequiredScript = function (link) {
      var id = "";
      var script = null;
      script = document.createElement("script");
      script.src = link;
      script.type = "text/javascript";
      script.title = "tmswebloading";
      if (!(this.FScriptLoadedPtr != null)) this.FScriptLoadedPtr = rtl.createCallback(this,"RequiredScriptLoaded");
      script.addEventListener("load",this.FScriptLoadedPtr);
      document.head.appendChild(script);
    };
    this.ResetAnchoring = function () {
      this.FOrigRect.$assign(pas.Types.Rect(-1,-1,-1,-1));
      this.InitAnchoring();
    };
    this.UpdateSize = function () {
      var i = 0;
      this.UpdateElementSize();
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetControls(i).UpdateSize();
      };
    };
    this.UpdateAnchoring = function () {
      var dxr = 0;
      var dyr = 0;
      var dxo = 0;
      var dyo = 0;
      var dxw = 0;
      var dyw = 0;
      var br = pas.Types.TRect.$new();
      var r = pas.Types.TRect.$new();
      if (pas.Classes.TComponentStateItem.csLoading in this.FComponentState) return;
      if (!this.FControlCreated) return;
      if ((this.FOrigRect.Left === -1) && (this.FOrigRect.Top === -1)) this.InitAnchoring();
      if ((this.FParent != null) && !this.FParent.AnchoringInitialized()) return;
      if (this.FAlign !== $mod.TAlign.alClient) {
        if ((this.FParent != null) && !pas["WEBLib.Forms"].TForm.isPrototypeOf(this)) {
          r.$assign(this.FParent.GetBoundsRect());
          dxr = r.Right - r.Left - (this.FOrigParentRect.Right - this.FOrigParentRect.Left);
          dyr = r.Bottom - r.Top - (this.FOrigParentRect.Bottom - this.FOrigParentRect.Top);
          br.$assign(this.FOrigRect);
          dxo = 0;
          dyo = 0;
          dxw = 0;
          dyw = 0;
          if ($mod.TAnchorKind.akRight in this.FAnchors) {
            if ($mod.TAnchorKind.akLeft in this.FAnchors) {
              dxw = dxr}
             else dxo = dxr;
          };
          if ($mod.TAnchorKind.akBottom in this.FAnchors) {
            if ($mod.TAnchorKind.akTop in this.FAnchors) {
              dyw = dyr}
             else dyo = dyr;
          };
          if (($mod.TAnchorKind.akBottom in this.FAnchors) || ($mod.TAnchorKind.akRight in this.FAnchors)) {
            this.SetBoundsInt(br.Left + dxo,br.Top + dyo,(br.Right - br.Left) + dxw,(br.Bottom - br.Top) + dyw);
          };
        };
      };
      this.UpdateChildAnchoring();
    };
    this.UpdateChildAnchoring = function () {
      var i = 0;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetControls(i).UpdateAnchoring();
      };
    };
    this.SetElementPointer = function (AElement, ACursor) {
      if (ACursor !== 0) {
        AElement.style.setProperty("cursor",$mod.GetHTMLCursorName(ACursor))}
       else AElement.style.removeProperty("cursor");
    };
    this.GetWebClassName = function () {
      var Result = "";
      Result = this.$classname;
      pas.System.Delete({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},1,1);
      Result = "TWeb" + Result;
      return Result;
    };
    this.GetCSSManager = function () {
      var Result = null;
      var frm = null;
      var i = 0;
      Result = null;
      frm = pas["WEBLib.Forms"].GetParentForm(this);
      if (frm != null) {
        for (var $l = 0, $end = frm.GetComponentCount() - 1; $l <= $end; $l++) {
          i = $l;
          if ($mod.TCSSCodeManager.isPrototypeOf(frm.GetComponent(i))) {
            Result = rtl.as(frm.GetComponent(i),$mod.TCSSCodeManager);
          };
        };
      };
      return Result;
    };
    this.IsUpdating = function () {
      var Result = false;
      Result = this.FUpdateCount > 0;
      return Result;
    };
    this.CanShowFocus = function () {
      var Result = false;
      Result = this.FShowFocus;
      return Result;
    };
    this.RequiredScriptLoaded = function (Event) {
      rtl.asExt(Event.target,HTMLScriptElement).title = "tmswebloaded";
      this.FControlScriptCountLoaded += 1;
    };
    this.InjectCSS = function () {
      var cssname = "";
      var css = "";
      var cssmgr = null;
      cssname = this.GetWebClassName();
      css = "";
      cssmgr = this.GetCSSManager();
      if (cssmgr != null) css = cssmgr.GetClassCSS(cssname);
      if (css !== "") this.AddControlStyle(css);
    };
    this.StartCapture = function () {
      var eh = null;
      if (!this.FCaptureDown) return;
      if (this.Captured()) this.ReleaseCapture();
      this.FMouseInsideLayer = true;
      this.FLayer = document.createElement("SPAN");
      document.body.appendChild(this.FLayer);
      eh = this.FLayer;
      eh.addEventListener("mouseenter",this.FLayerMouseEnterPtr);
      eh.addEventListener("mouseleave",this.FLayerMouseLeavePtr);
      eh.addEventListener("mousedown",this.FMouseDownPtr);
      eh.addEventListener("mouseup",this.FMouseUpPtr);
      eh.addEventListener("mousemove",this.FMouseMovePtr);
      eh.addEventListener("touchstart",this.FTouchStartPtr);
      eh.addEventListener("touchmove",this.FTouchMovePtr);
      eh.addEventListener("touchend",this.FTouchEndPtr);
      eh.addEventListener("touchcancel",this.FTouchCancelPtr);
      eh.style.setProperty("top","0");
      eh.style.setProperty("left","0");
      eh.style.setProperty("right","0");
      eh.style.setProperty("bottom","0");
      eh.style.setProperty("webkit-user-select","none");
      eh.style.setProperty("moz-user-select","none");
      eh.style.setProperty("khtml-user-select","none");
      eh.style.setProperty("ms-user-select","none");
      eh.style.setProperty("user-select","none");
      eh.style.setProperty("position","absolute");
      eh.style.setProperty($mod.CSSZIndex,"999999");
      this.FCaptured = true;
      this.UpdateElement();
    };
    this.RequiredBaseURL = function () {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetStyle = function (css) {
      var Result = "";
      var res = "";
      var el = null;
      el = this.GetElementHandle();
      res = "";
      if (!(el != null)) return Result;
      if (window.getComputedStyle) res = getComputedStyle(el, '')[css];
      if(el.currentStyle) res = el.currentStyle[css];
      Result = res;
      return Result;
    };
    this.SetBoundsInt = function (X, Y, AWidth, AHeight) {
      if ((X !== this.GetLeft()) || (Y !== this.GetTop()) || ((AWidth !== this.GetWidth()) && (this.FWidthStyle === $mod.TSizeStyle.ssAbsolute)) || ((AHeight !== this.GetHeight()) && (this.FHeightStyle === $mod.TSizeStyle.ssAbsolute)) || ((this.FParent != null) && this.FParent.GetIsLinked())) {
        this.FBlockUpdateElement = true;
        this.FLeft = X;
        this.FTop = Y;
        this.FWidth = AWidth;
        this.FHeight = AHeight;
        this.FBlockUpdateElement = false;
        this.UpdateElementSize();
        if (this.FAlign !== $mod.TAlign.alNone) {
          this.DoRealign()}
         else this.Realign();
        this.RecreateCanvas();
        this.DoBoundsChange();
        this.Invalidate();
        this.UpdateChildAnchoring();
      };
    };
    this.MoveFirst = function (AControl) {
      var i = 0;
      var fnd = false;
      fnd = false;
      for (var $l = this.GetControlsCount() - 1; $l >= 0; $l--) {
        i = $l;
        if (this.FControls[i] === AControl) fnd = true;
        if (fnd) {
          if (i > 0) {
            this.FControls[i] = this.FControls[i - 1]}
           else this.FControls[i] = AControl;
        };
      };
    };
    this.MoveLast = function (AControl) {
      var i = 0;
      var fnd = false;
      fnd = false;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FControls[i] === AControl) fnd = true;
        if (fnd) {
          if (i < (this.GetControlsCount() - 1)) {
            this.FControls[i] = this.FControls[i + 1]}
           else this.FControls[i] = AControl;
        };
      };
    };
    this.EnableDrag = function () {
      if (this.GetContainer() != null) this.GetContainer().setAttribute("draggable","true");
    };
    this.DisableDrag = function () {
      if ((this.GetContainer() != null) && (this.GetContainer().getAttribute("draggable") === "true")) this.GetContainer().setAttribute("draggable","false");
    };
    this.Create$2 = function (ID) {
      this.FGotFocus = false;
      this.FTabStop = true;
      this.FAllowTouch = true;
      this.CreateWithID(ID);
      return this;
    };
    this.Create$1 = function (AOwner) {
      var lName = "";
      var frm = null;
      var lDesign = false;
      this.FGotFocus = false;
      this.FEventsBound = false;
      this.FTabStop = true;
      this.FAllowTouch = true;
      this.FNoUserSelect = true;
      this.ClearMethodPointers();
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      this.FEventStopPropagation = rtl.createSet($mod.TElementEvent.eeClick,$mod.TElementEvent.eeDblClick,$mod.TElementEvent.eeMouseUp,$mod.TElementEvent.eeMouseMove,$mod.TElementEvent.eeMouseDown,$mod.TElementEvent.eeKeyPress,$mod.TElementEvent.eeKeyDown,$mod.TElementEvent.eeKeyUp);
      this.FScriptLoaded = false;
      this.FElementFont = $mod.TElementFont.efProperty;
      this.FElementPosition = $mod.TElementPosition.epAbsolute;
      this.FParentElement = null;
      this.FTextDirection = $mod.TTextDirection.tdDefault;
      lDesign = false;
      frm = pas["WEBLib.Forms"].GetParentForm(this);
      if (frm != null) {
        lDesign = pas.Classes.TComponentStateItem.csDesigning in frm.FComponentState;
      };
      lName = this.GetNewName();
      if (lDesign) {
        this.CreateWithID("")}
       else this.CreateWithID(lName);
      if ((AOwner != null) && !(pas.Classes.TComponentStateItem.csDesigning in AOwner.FComponentState)) this.SetName(lName);
      return this;
    };
    this.Destroy = function () {
      this.UnbindEvents();
      this.DestroyControls();
      if ((this.GetContainer() != null) && (this.FParent != null) && (this.FParent.GetChildContainer() != null)) {
        if (this.FParent.GetChildContainer() === this.GetContainer().parentNode) {
          this.FParent.GetChildContainer().removeChild(this.GetContainer());
        };
        this.FContainer = null;
        this.SetParent(null);
        this.FControlCreated = false;
      };
      rtl.free(this,"FRequiredScripts");
      rtl.free(this,"FMargins");
      rtl.free(this,"FCenter");
      rtl.free(this,"FFont");
      if (pas.System.Assigned(this.FToolTip)) {
        FToolTip.dispose();
        this.FToolTip = null;
      };
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.Assign = function (Source) {
    };
    this.DragDrop = function (Source, X, Y) {
      if (this.FOnDragDrop != null) this.FOnDragDrop(this,Source,X,Y);
    };
    this.Resize = function () {
      if (this.FOnResize != null) this.FOnResize(this);
    };
    this.Capture = function () {
      this.FCaptureDown = true;
      window.setTimeout(rtl.createSafeCallback(this,"StartCapture"),100);
    };
    this.ApplyName = function () {
      var s = "";
      var prefix = "";
      var frm = null;
      s = this.$classname;
      pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,1);
      prefix = "";
      frm = pas["WEBLib.Forms"].GetParentForm(this);
      if (frm != null) prefix = frm.$classname;
      this.SetID(prefix + "_" + $mod.FindUniqueName(s));
    };
    this.ReleaseCapture = function () {
      var eh = null;
      this.FCaptureDown = false;
      if (this.FCaptured && (this.FLayer != null)) {
        eh = this.FLayer;
        eh.removeEventListener("mouseenter",this.FLayerMouseEnterPtr);
        eh.removeEventListener("mouseleave",this.FLayerMouseLeavePtr);
        eh.removeEventListener("mousedown",this.FMouseDownPtr);
        eh.removeEventListener("mouseup",this.FMouseUpPtr);
        eh.removeEventListener("mousemove",this.FMouseMovePtr);
        eh.removeEventListener("touchstart",this.FTouchStartPtr);
        eh.removeEventListener("touchmove",this.FTouchMovePtr);
        eh.removeEventListener("touchend",this.FTouchEndPtr);
        eh.removeEventListener("touchcancel",this.FTouchEndPtr);
        document.body.removeChild(eh);
        this.FCaptured = false;
        this.FLayer = null;
        this.UpdateElement();
      };
    };
    this.BringToFront = function () {
      if ((this.GetElementHandle() != null) && (this.GetElementHandle().parentElement != null)) {
        try {
          this.GetElementHandle().parentElement.appendChild(this.GetElementHandle());
          if (this.FParent != null) this.FParent.MoveLast(this);
        } catch ($e) {
        };
      };
    };
    this.SendToBack = function () {
      if ((this.GetElementHandle() != null) && (this.GetElementHandle().parentElement != null)) {
        this.GetElementHandle().parentElement.insertBefore(this.GetElementHandle(),this.GetElementHandle().parentElement.firstElementChild);
        if (this.FParent != null) this.FParent.MoveFirst(this);
      };
    };
    this.Show = function () {
      this.SetVisible(true);
    };
    this.Hide = function () {
      this.SetVisible(false);
    };
    this.PreventDefault = function () {
      if (this.GetElementEvent() != null) this.GetElementEvent().preventDefault();
    };
    this.StopPropagation = function () {
      if ((this.GetElementEvent() != null) && !this.FEnablePropagation) this.GetElementEvent().stopPropagation();
    };
    this.BeginDrag = function () {
      this.EnableDrag();
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      if (this.FUpdateCount > 0) {
        this.FUpdateCount -= 1;
        if (this.FUpdateCount === 0) this.UpdateElement();
      };
    };
    this.Invalidate = function () {
    };
    this.SetParentComponent = function (Value) {
      if ((this.FParent !== Value) && $mod.TControl.isPrototypeOf(Value)) this.SetParent(Value);
    };
    this.SetBounds = function (X, Y, AWidth, AHeight) {
      this.SetBoundsInt(X,Y,AWidth,AHeight);
      this.FWidth = AWidth;
      this.FHeight = AHeight;
      if (!this.FUpdateTopLeft) {
        this.FOrigTop = Y;
        this.FOrigLeft = X;
      };
      this.ResetAnchoring();
      if (!(pas.Classes.TComponentStateItem.csLoading in this.FComponentState) && (this.FAlign !== $mod.TAlign.alNone) && (this.FParent != null)) {
        this.DoRealign();
      };
    };
    this.XYToClient = function (X, Y, AClientX, AClientY) {
      var p = null;
      var cr = null;
      var el = null;
      var OrigX = 0.0;
      var OrigY = 0.0;
      var norel = false;
      var formcont = false;
      var r = pas.Types.TRect.$new();
      var cs = null;
      var csx = 0;
      var csy = 0;
      var scrollx = 0;
      var scrolly = 0;
      norel = true;
      formcont = false;
      scrollx = 0;
      scrolly = 0;
      if (this.FElementPosition === $mod.TElementPosition.epAbsolute) {
        scrollx = document.body.scrollLeft + document.documentElement.scrollLeft;
        scrolly = document.body.scrollTop + document.documentElement.scrollTop;
        OrigX = X - this.GetLeft();
        OrigY = Y - this.GetTop();
      } else {
        norel = false;
        cr = this.GetElementHandle().getBoundingClientRect();
        OrigX = X - cr.left;
        OrigY = Y - cr.top;
        AClientX.set(OrigX);
        AClientY.set(OrigY);
        return;
      };
      AClientX.set(OrigX);
      AClientY.set(OrigY);
      p = this.FParent;
      if (pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(this) && !(p != null) && (this.GetContainer() != null)) {
        cr = this.GetContainer().getBoundingClientRect();
        AClientX.set(AClientX.get() - cr.left);
        AClientY.set(AClientY.get() - cr.top);
      };
      while (p != null) {
        if (p.GetIsLinked()) {
          if (pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(p)) {
            cr = p.GetContainer().getBoundingClientRect()}
           else cr = p.GetElementHandle().getBoundingClientRect();
          AClientX.set(AClientX.get() - cr.left);
          AClientY.set(AClientY.get() - cr.top);
          AClientX.set(AClientX.get() + p.GetElementHandle().scrollLeft);
          AClientY.set(AClientY.get() + p.GetElementHandle().scrollTop);
          scrollx = 0;
          scrolly = 0;
        } else if (pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(p)) {
          if (rtl.as(p,pas["WEBLib.Forms"].TCustomForm).FFormContainer !== "") {
            el = document.getElementById(rtl.as(p,pas["WEBLib.Forms"].TCustomForm).FFormContainer);
            if (el != null) {
              formcont = true;
              cr = el.getBoundingClientRect();
              AClientX.set(AClientX.get() - cr.left);
              AClientY.set(AClientY.get() - cr.top);
            };
          };
          if ((rtl.as(p,pas["WEBLib.Forms"].TCustomForm).GetContainer() != null) && (rtl.as(p,pas["WEBLib.Forms"].TCustomForm).FFormContainer === "") && rtl.as(p,pas["WEBLib.Forms"].TCustomForm).FPopup) {
            cr = rtl.as(p,pas["WEBLib.Forms"].TCustomForm).GetContainer().getBoundingClientRect();
            AClientX.set(AClientX.get() - cr.left);
            AClientY.set(AClientY.get() - cr.top);
            r.$assign(rtl.as(p,pas["WEBLib.Forms"].TCustomForm).GetClientRect());
            AClientY.set(AClientY.get() + r.Top);
            scrollx = 0;
            scrolly = 0;
          };
        } else if (p.FElementPosition in rtl.createSet($mod.TElementPosition.epRelative,$mod.TElementPosition.epIgnore)) {
          if (p.GetElementHandle() != null) {
            cr = p.GetElementHandle().getBoundingClientRect();
            AClientX.set(OrigX - cr.left);
            AClientY.set(OrigY - cr.top);
            scrollx = 0;
            scrolly = 0;
            if (norel) {
              cs = window.getComputedStyle(document.documentElement);
              csx = parseInt(cs.marginLeft,10);
              csy = parseInt(cs.marginTop,10);
              AClientX.set(AClientX.get() + csx);
              AClientY.set(AClientY.get() + csy);
            };
            norel = false;
            break;
          };
        } else if ((p.FElementPosition === $mod.TElementPosition.epAbsolute) && norel) {
          AClientX.set(AClientX.get() - p.GetLeft());
          AClientY.set(AClientY.get() - p.GetTop());
          if (p.GetElementHandle() != null) {
            AClientX.set(AClientX.get() + p.GetElementHandle().scrollLeft);
            AClientY.set(AClientY.get() + p.GetElementHandle().scrollTop);
          };
          OrigX = AClientX.get();
          OrigY = AClientY.get();
        };
        p = p.FParent;
      };
      if ((this.FElementPosition === $mod.TElementPosition.epAbsolute) && !formcont) {
        AClientX.set(AClientX.get() + scrollx);
        AClientY.set(AClientY.get() + scrolly);
      };
    };
    this.ClientToXY = function (AClientX, AClientY, X, Y) {
      var p = null;
      var cr = null;
      X.set((AClientX + this.GetLeft()) - document.body.scrollLeft - document.documentElement.scrollLeft);
      Y.set((AClientY + this.GetTop()) - document.body.scrollTop - document.documentElement.scrollTop);
      p = this.FParent;
      while (p != null) {
        if (p.GetIsLinked()) {
          if (pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(p)) {
            cr = p.GetContainer().getBoundingClientRect()}
           else cr = p.GetElementHandle().getBoundingClientRect();
          X.set(X.get() + cr.left);
          Y.set(Y.get() + cr.top);
        };
        if (pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(p)) {
          if ((rtl.as(p,pas["WEBLib.Forms"].TCustomForm).GetContainer() != null) && (rtl.as(p,pas["WEBLib.Forms"].TCustomForm).FFormContainer === "") && (rtl.as(p,pas["WEBLib.Forms"].TCustomForm).FFormFileName !== "") && rtl.as(p,pas["WEBLib.Forms"].TCustomForm).FPopup) {
            cr = rtl.as(p,pas["WEBLib.Forms"].TCustomForm).GetContainer().getBoundingClientRect();
            X.set(X.get() + cr.left);
            Y.set(Y.get() + cr.top);
          };
        };
        if (p.FElementPosition === $mod.TElementPosition.epAbsolute) {
          X.set(X.get() + p.GetLeft());
          Y.set(Y.get() + p.GetTop());
        };
        p = p.FParent;
      };
    };
    this.GetChildren = function (Proc, Root) {
      var I = 0;
      var Control = null;
      for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
        I = $l;
        Control = this.GetControls(I);
        if ((Control.FOwner === Root) || (Root === null)) Proc(Control);
      };
    };
    this.Captured = function () {
      var Result = false;
      Result = this.FCaptured && (this.FLayer != null);
      return Result;
    };
    this.MakeScreenshot = function () {
      var Result = null;
      Result = null;
      return Result;
    };
    this.ClientToScreen = function (Point) {
      var Result = pas.Types.TPoint.$new();
      var Origin = pas.Types.TPoint.$new();
      Origin.$assign(this.GetClientOrigin());
      Result.x = Point.x + Origin.x;
      Result.y = Point.y + Origin.y;
      return Result;
    };
    this.ScreenToClient = function (Point) {
      var Result = pas.Types.TPoint.$new();
      var Origin = pas.Types.TPoint.$new();
      Origin.$assign(this.GetClientOrigin());
      Result.x = Point.x - Origin.x;
      Result.y = Point.y - Origin.y;
      return Result;
    };
    this.CanFocus = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.HasHorzScrollBar = function () {
      var Result = false;
      Result = false;
      if (this.GetElementHandle() != null) Result = this.GetElementHandle().clientWidth < this.GetElementHandle().scrollWidth;
      return Result;
    };
    this.HasVertScrollBar = function () {
      var Result = false;
      Result = false;
      if (this.GetElementHandle() != null) Result = this.GetElementHandle().clientHeight < this.GetElementHandle().scrollHeight;
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $mod.$rtti.$DynArray("TControl.FControls$a",{eltype: $r});
    $r.addMethod("Create$2",2,[["ID",rtl.string]]);
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  this.TScrollBarKind = {"0": "sbHorizontal", sbHorizontal: 0, "1": "sbVertical", sbVertical: 1};
  this.$rtti.$Enum("TScrollBarKind",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TScrollBarKind});
  rtl.createClass(this,"TControlScrollBar",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FKind = 0;
      this.FControl = null;
    };
    this.$final = function () {
      this.FControl = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.Create$1 = function (AControl, AKind) {
      this.FControl = AControl;
      this.FKind = AKind;
      return this;
    };
    this.IsScrollBarVisible = function () {
      var Result = false;
      Result = false;
      if (this.FControl.GetElementHandle() != null) {
        if (this.FKind === $mod.TScrollBarKind.sbVertical) {
          Result = this.FControl.GetElementHandle().scrollHeight > this.FControl.GetElementHandle().clientHeight}
         else Result = this.FControl.GetElementHandle().scrollWidth > this.FControl.GetElementHandle().clientWidth;
      };
      return Result;
    };
    this.ScrollPos = function () {
      var Result = 0;
      Result = 0;
      if (this.FControl.GetElementHandle() != null) {
        if (this.FKind === $mod.TScrollBarKind.sbVertical) {
          Result = this.FControl.GetElementHandle().scrollTop}
         else Result = this.FControl.GetElementHandle().scrollLeft;
      };
      return Result;
    };
    this.Range = function () {
      var Result = 0;
      Result = 0;
      if (this.FControl.GetElementHandle() != null) {
        if (this.FKind === $mod.TScrollBarKind.sbVertical) {
          Result = this.FControl.GetElementHandle().scrollHeight}
         else Result = this.FControl.GetElementHandle().scrollWidth;
      };
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AControl",$mod.$rtti["TControl"]],["AKind",$mod.$rtti["TScrollBarKind"]]]);
  });
  this.$rtti.$Class("TWinControl");
  this.$rtti.$ClassRef("TWinControlClass",{instancetype: this.$rtti["TWinControl"]});
  rtl.createClass(this,"TWinControl",this.TControl,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Cursor",2,$mod.$rtti["TCursor"],"FCursor","SetControlCursor",{Default: 0});
    $r.addProperty("ElementClassName",2,$mod.$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("Tag",0,rtl.longint,"FTag$1","FTag$1",{Default: 0});
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("OnMouseDown",0,$mod.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,$mod.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,$mod.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseEnter",0,$mod.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,$mod.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnKeyUp",0,$mod.$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnKeyDown",0,$mod.$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,$mod.$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnEnter",0,$mod.$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,$mod.$rtti["TNotifyEvent"],"FOnExit","FOnExit");
  });
  this.$rtti.$Class("TCustomControl");
  this.$rtti.$ClassRef("TCustomControlClass",{instancetype: this.$rtti["TCustomControl"]});
  rtl.createClass(this,"TCustomControl",this.TWinControl,function () {
    this.$init = function () {
      $mod.TWinControl.$init.call(this);
      this.FCaption = "";
      this.FPixelRatio = 0.0;
      this.FPainting = false;
      this.FCanvas = null;
      this.FElementCanvas = null;
      this.FBorderStyle = 0;
      this.FBorderColor = 0;
      this.FCustomBorder = false;
      this.FOnScreenShot = null;
      this.FBevelOuter = 0;
      this.FBevelWidth = 0;
      this.FBevelCut = 0;
      this.FBevelEdges = {};
      this.FBevelKind = 0;
    };
    this.$final = function () {
      this.FCanvas = undefined;
      this.FElementCanvas = undefined;
      this.FOnScreenShot = undefined;
      this.FBevelEdges = undefined;
      $mod.TWinControl.$final.call(this);
    };
    this.GetCanvas = function () {
      var Result = null;
      if (!(this.FCanvas != null)) {
        if (!this.GetIsLinked()) {
          this.CreateControl()}
         else {
          if (!(this.FElementCanvas != null)) this.FElementCanvas = document.getElementById(this.GetID());
          this.RecreateCanvas();
        };
      };
      Result = this.FCanvas;
      return Result;
    };
    this.RenderDesigning = function (ACaption, AElement, AControl, ADisplay, AImage) {
      var LContainer = null;
      var LLabel = null;
      var LDiv = null;
      var LHasLabel = false;
      LContainer = AElement;
      LLabel = LContainer.firstChild;
      LHasLabel = (LLabel != null) && (LLabel.tagName === "DIV") && (LLabel.getAttribute("data-design") === "1");
      if ((pas.Classes.TComponentStateItem.csDesigning in AControl.FComponentState) && ADisplay && (this.FElementClassName === "")) {
        LContainer.style.setProperty("border","1px solid gray");
        if (AImage === "") {
          LContainer.style.setProperty("background-color","#F0F0F0")}
         else LContainer.style.setProperty("background-color","white");
        if (LHasLabel) return;
        LContainer.innerHTML = "";
        if (AImage !== "") {
          LDiv = document.createElement("DIV");
          LDiv.style.setProperty("background-color","white");
          LDiv.style.setProperty("background-repeat","no-repeat");
          LDiv.style.setProperty("background-position-y","center");
          LDiv.style.setProperty("background-image","url(" + AImage + ")");
          LDiv.style.setProperty("background-position-x","center");
          LDiv.style.setProperty("background-size","128px");
          LDiv.style.setProperty("top","50%");
          LDiv.style.setProperty("left","50%");
          LDiv.style.setProperty("height","70%");
          LContainer.appendChild(LDiv);
        };
        LLabel = document.createElement("DIV");
        LLabel.setAttribute("data-design","1");
        LLabel.innerHTML = ACaption;
        LLabel.style.setProperty("position","relative");
        LLabel.style.setProperty("top","50%");
        LLabel.style.setProperty("left","50%");
        LLabel.style.setProperty("display","inline-block");
        LLabel.style.setProperty("transform","translateX(-50%)");
        this.FCustomBorder = true;
        LContainer.appendChild(LLabel);
      } else {
        if (LHasLabel) {
          while (LContainer.firstChild != null) LContainer.removeChild(LContainer.firstChild);
          LContainer.style.removeProperty("border");
          LContainer.style.removeProperty("background-color");
        };
      };
    };
    this.GetPixelRatio = function () {
      var Result = 0.0;
      var res = 0.0;
      var ctx = document.createElement("canvas").getContext("2d"),
          dpr = window.devicePixelRatio || 1,
          bsr = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;
      res = dpr / bsr;
      Result = res;
      return Result;
    };
    this.GetContext = function () {
      var Result = null;
      var ctx = null;
      ctx = this.FElementCanvas.getContext("2d");
      Result = ctx;
      return Result;
    };
    this.RecreateCanvas = function () {
      var px = 0.0;
      var el = null;
      var h = 0;
      var w = 0;
      if (this.FElementCanvas != null) {
        if (!this.FPainting) {
          if (this.GetIsLinked()) {
            el = this.GetElementHandle();
          } else el = document.getElementById(this.GetID() + "_Canvas");
          if (el != null) {
            this.FElementCanvas = el;
            rtl.free(this,"FCanvas");
            this.FCanvas = null;
          };
          px = this.GetPixelRatio();
          h = this.GetHeight() - this.GetCanvasHeightOffset();
          w = this.GetWidth() - this.GetCanvasWidthOffset();
          if (this.FElementPosition === $mod.TElementPosition.epRelative) {
            this.FElementCanvas.style.setProperty("position","relative")}
           else this.FElementCanvas.style.setProperty("position","absolute");
          this.FElementCanvas.style.setProperty("height",pas.SysUtils.IntToStr(h) + "px");
          this.FElementCanvas.style.setProperty("width",pas.SysUtils.IntToStr(w) + "px");
          this.FElementCanvas.height = Math.round(h * px);
          this.FElementCanvas.width = Math.round(w * px);
        };
        if (!(this.FCanvas != null)) {
          this.FCanvas = pas["WEBLib.Graphics"].TCanvas.$create("Create$1",[this.FElementCanvas]);
        };
        this.FCanvas.FApplyPixelRatio = true;
        this.FCanvas.SetTransform(1,0,0,1,0,0);
      };
    };
    this.SetBorderStyle = function (AValue) {
      if (this.FBorderStyle !== AValue) {
        this.FBorderStyle = AValue;
        this.UpdateElement();
      };
    };
    this.SetBorderColor = function (AValue) {
      if (this.FBorderColor !== AValue) {
        this.FBorderColor = AValue;
        this.UpdateElement();
      };
    };
    this.SetName = function (NewName) {
      var cs = {};
      var ownername = "";
      ownername = "";
      if (!((pas["WEBLib.Forms"].VSIDE != null) && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState))) {
        if (pas["WEBLib.Forms"].TFrame.isPrototypeOf(this)) {
          ownername = "F" + $mod.FindUniqueName(this.FName) + "_";
        };
      };
      pas.Classes.TComponent.SetName.call(this,ownername + NewName);
      if (($mod.TControlStyleValue.csSetCaption in this.FControlStyle) && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        if ((this.FOwner != null) && (pas.Classes.TComponentStateItem.csLoading in this.FOwner.FComponentState)) return;
        cs = rtl.refSet(this.FControlStyle);
        this.SetCaption(NewName);
        this.FControlStyle = rtl.refSet(cs);
      };
    };
    this.SetCaption = function (AValue) {
      this.FCaption = AValue;
      this.FControlStyle = rtl.diffSet(this.FControlStyle,rtl.createSet($mod.TControlStyleValue.csSetCaption));
    };
    this.CreateControl = function () {
      $mod.TControl.CreateControl.call(this);
      this.RecreateCanvas();
    };
    this.Loaded = function () {
      $mod.TControl.Loaded.call(this);
      this.Invalidate();
    };
    this.UpdateElementVisual = function () {
      $mod.TControl.UpdateElementVisual.call(this);
      if (this.GetElementHandle() != null) {
        if (!this.GetIsLinked() && (this.FElementClassName === "")) {
          if (this.FBorderStyle === $mod.TBorderStyle.bsSingle) {
            if (this.FCustomBorder) {
              this.GetElementStyle().setProperty("border-style","solid");
              this.GetElementStyle().setProperty("border-width","1px");
              this.GetElementStyle().setProperty("border-color",pas["WEBLib.Graphics"].ColorToHTML(this.FBorderColor));
            } else this.GetElementStyle().setProperty("border-style","");
          } else {
            this.GetElementStyle().setProperty("border-style","none");
          };
        };
        if (this.FElementClassName !== "") {
          this.GetElementStyle().removeProperty("border-style");
          this.GetElementStyle().removeProperty("border-width");
          this.GetElementStyle().removeProperty("border-color");
        };
      };
    };
    this.CreateElement = function () {
      var Result = null;
      this.FElementCanvas = document.createElement("CANVAS");
      if ($mod.TControlStyleValue.csAcceptsControls in this.FControlStyle) {
        Result = document.createElement("SPAN");
        Result.appendChild(this.FElementCanvas);
        if (this.GetID() !== "") this.FElementCanvas.setAttribute("id",this.GetID() + "_Canvas");
        this.FElementCanvas.setAttribute("zindex","-1");
      } else Result = this.FElementCanvas;
      return Result;
    };
    this.GetCanvasHeightOffset = function () {
      var Result = 0;
      Result = 0;
      return Result;
    };
    this.GetCanvasWidthOffset = function () {
      var Result = 0;
      Result = 0;
      return Result;
    };
    this.BindElement = function () {
      if ((this.GetContainer().tagName !== "CANVAS") && !this.FControlCreated) {
        this.FElementCanvas = document.createElement("CANVAS");
        this.GetContainer().appendChild(this.FElementCanvas);
      };
    };
    this.BindEvents = function () {
      $mod.TControl.BindEvents.call(this);
    };
    this.HandleScreenShot = function (Sender) {
      if (this.FOnScreenShot != null) this.FOnScreenShot(this,Sender);
    };
    this.Paint = function () {
    };
    this.CreateInitialize = function () {
      $mod.TControl.CreateInitialize.call(this);
      this.FControlStyle = rtl.unionSet(this.FControlStyle,rtl.createSet($mod.TControlStyleValue.csSetCaption));
      this.FBorderStyle = $mod.TBorderStyle.bsSingle;
      this.FBorderColor = 12632256;
      this.FPainting = false;
      this.FWidth = 100;
      this.FHeight = 25;
      this.FWidthPercent = 100;
      this.FHeightPercent = 100;
      this.FCustomBorder = false;
    };
    this.Destroy = function () {
      if (this.FCanvas != null) rtl.free(this,"FCanvas");
      $mod.TControl.Destroy.call(this);
    };
    this.MakeScreenshot = function () {
      var Result = null;
      Result = pas["WEBLib.Graphics"].TBitmap.$create("Create$3");
      Result.FOnChange = rtl.createCallback(this,"HandleScreenShot");
      Result.LoadFromCanvas(this.GetCanvas());
      return Result;
    };
    this.Resize = function () {
      $mod.TControl.Resize.call(this);
      this.Invalidate();
    };
    this.Invalidate = function () {
      var px = 0.0;
      var frm = null;
      $mod.TControl.Invalidate.call(this);
      if ((this.FParent === null) || (pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) return;
      if (!this.FVisible) return;
      if (this.FUpdateCount > 0) return;
      frm = pas["WEBLib.Forms"].GetParentForm(this);
      if (frm != null) if (frm.IsUpdating()) return;
      px = this.GetPixelRatio();
      if (px !== this.FPixelRatio) this.RecreateCanvas();
      this.FPixelRatio = this.GetPixelRatio();
      this.FPainting = true;
      if (this.FCanvas != null) this.FCanvas.Clear();
      this.Paint();
      this.FPainting = false;
    };
    this.SetFocus = function () {
      $mod.TControl.SetFocus.call(this);
    };
    this.Focused = function () {
      var Result = false;
      Result = $mod.TControl.Focused.call(this);
      return Result;
    };
    this.EndUpdate = function () {
      $mod.TControl.EndUpdate.call(this);
      if (this.FUpdateCount === 0) this.Invalidate();
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TjQueryCustomControl",this.TWinControl,function () {
    this.$init = function () {
      $mod.TWinControl.$init.call(this);
      this.FIsInitialized = false;
    };
    this.InitJQueryOnce = function () {
      if (this.IsUpdating()) return;
      if (this.FIsInitialized) return;
      this.FIsInitialized = true;
      this.InitJQuery();
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      return Result;
    };
    this.Loaded = function () {
      $mod.TControl.Loaded.call(this);
      this.InitJQueryOnce();
    };
    this.SetParent = function (AValue) {
      $mod.TControl.SetParent.apply(this,arguments);
      this.InitJQueryOnce();
    };
    this.GetJQID = function () {
      var Result = "";
      Result = "#" + this.GetID();
      return Result;
    };
    this.InitJQuery = function () {
    };
    this.CreateInitialize = function () {
      $mod.TControl.CreateInitialize.call(this);
      this.FIsInitialized = false;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("ElementPosition",2,$mod.$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: $mod.TElementPosition.epAbsolute});
  });
  rtl.createClass(this,"TGraphicControl",this.TCustomControl,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TScrollingGraphicControl",this.TCustomControl,function () {
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      return Result;
    };
    this.UpdateElement = function () {
      $mod.TControl.UpdateElement.call(this);
      if (this.GetElementHandle() != null) this.GetElementHandle().style.setProperty("overflow","auto");
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TCustomHTMLDiv",this.TCustomControl,function () {
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TControlManager",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FInstanceCount = 0;
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      this.FInstanceCount = 0;
      return this;
    };
    this.GetInstanceNumber = function () {
      var Result = 0;
      this.FInstanceCount += 1;
      Result = this.FInstanceCount;
      return Result;
    };
    this.Reset = function () {
      this.FInstanceCount = 0;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TCSSCodeFragment",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FControlClassname = "";
      this.FCSS = null;
    };
    this.$final = function () {
      this.FCSS = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetCSS = function (Value) {
      this.FCSS.Assign(Value);
    };
    this.Create$1 = function (Collection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      this.FCSS = pas.Classes.TStringList.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FCSS");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["Collection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ControlClassname",0,rtl.string,"FControlClassname","FControlClassname");
    $r.addProperty("CSS",2,pas.Classes.$rtti["TStringList"],"FCSS","SetCSS");
  });
  rtl.createClass(this,"TCSSCodeFragments",pas.Classes.TOwnedCollection,function () {
    this.GetItemEx = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItemEx = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TCSSCodeFragment);
      return this;
    };
    this.Add$1 = function () {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      return Result;
    };
    this.Insert$1 = function (Index) {
      var Result = null;
      Result = pas.Classes.TCollection.Insert.call(this,Index);
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TCSSCodeManager",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FCSSFragments = null;
    };
    this.$final = function () {
      this.FCSSFragments = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.SetCSSFragments = function (Value) {
      this.FCSSFragments.Assign(Value);
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      this.FCSSFragments = $mod.TCSSCodeFragments.$create("Create$3",[this]);
      this.FCSSFragments.FPropName = "CSSFragments";
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FCSSFragments");
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.GetClassFragment = function (AClassname) {
      var Result = null;
      var i = 0;
      Result = null;
      for (var $l = 0, $end = this.FCSSFragments.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FCSSFragments.GetItemEx(i).FControlClassname === AClassname) Result = this.FCSSFragments.GetItemEx(i);
      };
      return Result;
    };
    this.GetClassCSS = function (AClassname) {
      var Result = "";
      var CSSCodeFragment = null;
      Result = "";
      CSSCodeFragment = this.GetClassFragment(AClassname);
      if (CSSCodeFragment != null) Result = CSSCodeFragment.FCSS.GetTextStr();
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("CSSFragments",2,$mod.$rtti["TCSSCodeFragments"],"FCSSFragments","SetCSSFragments");
  });
  rtl.createInterface(this,"ITMSFNCDataBinderBase","{778B63C9-34E3-4B65-A6B8-85E3EB1D17C3}",["DataBeginUpdate","DataEndUpdate"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("DataBeginUpdate",0,[]);
    $r.addMethod("DataEndUpdate",0,[]);
  });
  rtl.createInterface(this,"ITMSFNCDataBinderGrid","{D23BDEAA-49B1-451A-9401-0D0D11A9957A}",["SetDataColumnCount","SetDataRowCount","ClearData","GetDataRowCount","SetDataValue","SetDataHeader","DataInsertRow"],this.ITMSFNCDataBinderBase,function () {
    var $r = this.$rtti;
    $r.addMethod("SetDataColumnCount",0,[["AValue",rtl.longint]]);
    $r.addMethod("SetDataRowCount",0,[["AValue",rtl.longint]]);
    $r.addMethod("ClearData",0,[]);
    $r.addMethod("GetDataRowCount",1,[],rtl.longint);
    $r.addMethod("SetDataValue",0,[["AColumn",rtl.longint],["ARow",rtl.longint],["AValue",rtl.string]]);
    $r.addMethod("SetDataHeader",0,[["AColumn",rtl.longint],["AValue",rtl.string]]);
    $r.addMethod("DataInsertRow",0,[["AInsertPosition",rtl.longint]]);
  });
  rtl.createHelper(this,"TStringListHelper",null,function () {
    this.LoadFromJSONArray = function (ja) {
      var jsa = null;
      var i = 0;
      jsa = JSON.parse(ja);
      for (var $l = 0, $end = jsa.length - 1; $l <= $end; $l++) {
        i = $l;
        this.Add("" + jsa[i]);
      };
    };
    this.LoadFromJSONArrayURL = function (URL) {
      var $Self = this;
      var Result = null;
      var req = null;
      function ResultHandler(response) {
        var jsa = null;
        var i = 0;
        jsa = JSON.parse(response);
        for (var $l = 0, $end = jsa.length - 1; $l <= $end; $l++) {
          i = $l;
          $Self.Add("" + jsa[i]);
        };
      };
      Result = new Promise(function (ASuccess, AFailed) {
        req = new XMLHttpRequest();
        req.open("GET",URL);
        req.onload = function() {
                  if (req.status != 200) {
                    AFailed(false); }
                  else {
        
                    ResultHandler(req.response);
                    ASuccess(true);
                  }
                };
        req.send();
      });
      return Result;
    };
  });
  this.FindGlobalComponent = function (Name) {
    var Result = null;
    Result = null;
    return Result;
  };
  this.GetMousePos = function () {
    var Result = pas.Types.TPoint.$new();
    Result.$assign(pas.Types.Point($impl.FMouseX,$impl.FMouseY));
    return Result;
  };
  this.GetCursorPos = function (pt) {
    pt.x = $impl.FCursorX;
    pt.y = $impl.FCursorY;
  };
  this.FindUniqueName = function (Name) {
    var Result = "";
    Result = Name + pas.SysUtils.IntToStr($impl.ControlManager.GetInstanceNumber());
    return Result;
  };
  this.GetScrollBarHeight = function () {
    var Result = 0;
    var res = 0;
    res = $impl.ScrollBH;
    if (res === 0) {
      var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.height = "100px";
            outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
      
            document.body.appendChild(outer);
      
            var HeightNoScroll = outer.offsetHeight;
            // force scrollbars
            outer.style.overflow = "scroll";
      
            // add innerdiv
            var inner = document.createElement("div");
            inner.style.height = "100%";
            outer.appendChild(inner);
      
            var HeightWithScroll = inner.offsetHeight;
      
            // remove divs
            outer.parentNode.removeChild(outer);
      
            res = HeightNoScroll - HeightWithScroll;
      
            //res = 0;
      $impl.ScrollBH = res;
    };
    Result = res;
    return Result;
  };
  this.GetScrollBarWidth = function () {
    var Result = 0;
    var res = 0;
    res = $impl.ScrollBW;
    if (res === 0) {
      var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";
            outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
      
            document.body.appendChild(outer);
      
            var widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = "scroll";
      
            // add innerdiv
            var inner = document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);
      
            var widthWithScroll = inner.offsetWidth;
      
            // remove divs
            outer.parentNode.removeChild(outer);
      
            res = widthNoScroll - widthWithScroll;
      $impl.ScrollBW = res;
    };
    Result = res;
    return Result;
  };
  this.SetHTMLElementFont = function (AElement, AFont, UseCSS) {
    var s = "";
    if (UseCSS) {
      AElement.style.removeProperty("font-family");
      AElement.style.removeProperty("font-style");
      AElement.style.removeProperty("font-weight");
      AElement.style.removeProperty("font-size");
      AElement.style.removeProperty("text-decoration");
    } else {
      AElement.style.setProperty("font-family",AFont.FName);
      AElement.style.setProperty("font-style","normal");
      if (pas["WEBLib.Graphics"].TFontStyle.fsBold in AFont.FStyle) {
        AElement.style.setProperty("font-weight","bold")}
       else AElement.style.setProperty("font-weight","");
      if (pas["WEBLib.Graphics"].TFontStyle.fsItalic in AFont.FStyle) AElement.style.setProperty("font-style","italic");
      s = "";
      if (pas["WEBLib.Graphics"].TFontStyle.fsUnderline in AFont.FStyle) s = "underline";
      if (pas["WEBLib.Graphics"].TFontStyle.fsStrikeOut in AFont.FStyle) {
        if (s !== "") s = s + " ";
        s = s + "line-through";
      };
      if (s !== "") {
        AElement.style.setProperty("text-decoration",s)}
       else AElement.style.removeProperty("text-decoration");
      if (AFont.FSize !== 0) AElement.style.setProperty("font-size",pas.SysUtils.IntToStr(AFont.FSize) + "pt");
    };
  };
  this.SetHTMLElementColor = function (AElement, AColor, UseCSS) {
    if (UseCSS || (AColor === -1) || (AColor === 16711422)) {
      AElement.style.removeProperty($impl.cStyleBkgColor)}
     else AElement.style.setProperty($impl.cStyleBkgColor,pas["WEBLib.Graphics"].ColorToHTML(AColor));
  };
  this.GetHTMLCursorName = function (ACursor) {
    var Result = "";
    Result = "default";
    var $tmp = ACursor;
    if ($tmp === 0) {
      Result = "default"}
     else if ($tmp === 2) {
      Result = "auto"}
     else if ($tmp === 1) {
      Result = "none"}
     else if ($tmp === 3) {
      Result = "crosshair"}
     else if ($tmp === 4) {
      Result = "text"}
     else if ($tmp === 6) {
      Result = "nesw-resize"}
     else if ($tmp === 7) {
      Result = "ns-resize"}
     else if ($tmp === 8) {
      Result = "nwse-resize"}
     else if ($tmp === 9) {
      Result = "ew-resize"}
     else if ($tmp === 10) {
      Result = "n-resize"}
     else if ($tmp === 11) {
      Result = "wait"}
     else if ($tmp === 12) {
      Result = "copy"}
     else if ($tmp === 13) {
      Result = "no-drop"}
     else if ($tmp === 14) {
      Result = "col-resize"}
     else if ($tmp === 15) {
      Result = "row-resize"}
     else if ($tmp === 16) {
      Result = "copy"}
     else if ($tmp === 17) {
      Result = "progress"}
     else if ($tmp === 18) {
      Result = "not-allowed"}
     else if ($tmp === 19) {
      Result = "progress"}
     else if ($tmp === 20) {
      Result = "help"}
     else if ($tmp === 21) {
      Result = "pointer"}
     else if (($tmp === 22) || ($tmp === 5)) Result = "move";
    return Result;
  };
  this.GetHTMLElementAbsoluteRect = function (AElement) {
    var Result = pas.Types.TRect.$new();
    var s = "";
    function GetInt(AValue) {
      var Result = 0;
      var e = 0;
      AValue = pas.SysUtils.StringReplace(AValue,"px","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      pas.System.val$6(AValue,{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},{get: function () {
          return e;
        }, set: function (v) {
          e = v;
        }});
      return Result;
    };
    s = AElement.style.getPropertyValue("left");
    Result.Left = GetInt(s);
    s = AElement.style.getPropertyValue("top");
    Result.Top = GetInt(s);
    s = AElement.style.getPropertyValue("width");
    Result.Right = Result.Left + GetInt(s);
    s = AElement.style.getPropertyValue("height");
    Result.Bottom = Result.Top + GetInt(s);
    return Result;
  };
  this.CursorToString = function (ACursor) {
    var Result = "";
    Result = "crDefault";
    var $tmp = ACursor;
    if ($tmp === 0) {
      Result = "crDefault"}
     else if ($tmp === 2) {
      Result = "crArrow"}
     else if ($tmp === 1) {
      Result = "crNone"}
     else if ($tmp === 3) {
      Result = "crCross"}
     else if ($tmp === 5) {
      Result = "ctSize"}
     else if ($tmp === 4) {
      Result = "crIBeam"}
     else if ($tmp === 6) {
      Result = "crSizeNESW"}
     else if ($tmp === 7) {
      Result = "crSizeNS"}
     else if ($tmp === 8) {
      Result = "crSizeNWSE"}
     else if ($tmp === 9) {
      Result = "crSizeWE"}
     else if ($tmp === 10) {
      Result = "crUpArrow"}
     else if ($tmp === 11) {
      Result = "crHourGlass"}
     else if ($tmp === 12) {
      Result = "crDrag"}
     else if ($tmp === 13) {
      Result = "crNoDrop"}
     else if ($tmp === 14) {
      Result = "crHSplit"}
     else if ($tmp === 15) {
      Result = "crVSplit"}
     else if ($tmp === 16) {
      Result = "crMultiDrag"}
     else if ($tmp === 17) {
      Result = "crSQLWait"}
     else if ($tmp === 18) {
      Result = "crNo"}
     else if ($tmp === 19) {
      Result = "crAppStart"}
     else if ($tmp === 20) {
      Result = "crHelp"}
     else if ($tmp === 21) {
      Result = "crHandpoint"}
     else if ($tmp === 22) Result = "crSizeAll";
    return Result;
  };
  this.StringToCursor = function (S) {
    var Result = 0;
    var us = "";
    Result = 0;
    us = pas.SysUtils.UpperCase(S);
    if (us === "CRDEFAULT") {
      Result = 0}
     else if (us === "CRARROW") {
      Result = 2}
     else if (us === "CRNONE") {
      Result = 1}
     else if (us === "CRCROSS") {
      Result = 3}
     else if (us === "CRSIZE") {
      Result = 5}
     else if (us === "CRIBEAM") {
      Result = 4}
     else if (us === "CRSIZENESW") {
      Result = 6}
     else if (us === "CRSIZENS") {
      Result = 7}
     else if (us === "CRSIZENWSE") {
      Result = 8}
     else if (us === "CRSIZEWE") {
      Result = 9}
     else if (us === "CRUPARROW") {
      Result = 10}
     else if (us === "CRHOURGLASS") {
      Result = 11}
     else if (us === "CRDRAG") {
      Result = 12}
     else if (us === "CRNODROP") {
      Result = 13}
     else if (us === "CRHSPLIT") {
      Result = 14}
     else if (us === "CRVSPLIT") {
      Result = 15}
     else if (us === "CRMULTIDRAG") {
      Result = 16}
     else if (us === "CRSQLWAIT") {
      Result = 17}
     else if (us === "CRNO") {
      Result = 18}
     else if (us === "CRAPPSTART") {
      Result = 19}
     else if (us === "CRHELP") {
      Result = 20}
     else if (us === "CRHANDPOINT") {
      Result = 21}
     else if (us === "CRSIZEALL") Result = 22;
    return Result;
  };
  this.IsAndroid = function () {
    var Result = false;
    var sagent = "";
    sagent = navigator.userAgent;
    Result = pas.System.Pos("Android",sagent) > 0;
    return Result;
  };
  this.GetMaterialClass = function (mg) {
    var Result = "";
    Result = "material-icons";
    var $tmp = mg;
    if ($tmp === $mod.TMaterialGlyphType.mgOutlined) {
      Result = "material-icons-outlined"}
     else if ($tmp === $mod.TMaterialGlyphType.mgTwoTone) {
      Result = "material-icons-two-tone"}
     else if ($tmp === $mod.TMaterialGlyphType.mgRound) {
      Result = "material-icons-round"}
     else if ($tmp === $mod.TMaterialGlyphType.mgSharp) Result = "material-icons-sharp";
    return Result;
  };
  this.InputTypeString = function (AInputType) {
    var Result = "";
    var $tmp = AInputType;
    if ($tmp === $mod.TInputType.itText) {
      Result = "text"}
     else if ($tmp === $mod.TInputType.itEmail) {
      Result = "email"}
     else if ($tmp === $mod.TInputType.itDate) {
      Result = "date"}
     else if ($tmp === $mod.TInputType.itDateTime) {
      Result = "datetime-local"}
     else if ($tmp === $mod.TInputType.itFile) {
      Result = "file"}
     else if ($tmp === $mod.TInputType.itMonth) {
      Result = "month"}
     else if ($tmp === $mod.TInputType.itNumber) {
      Result = "number"}
     else if ($tmp === $mod.TInputType.itPassword) {
      Result = "password"}
     else if ($tmp === $mod.TInputType.itSearch) {
      Result = "search"}
     else if ($tmp === $mod.TInputType.itTime) {
      Result = "time"}
     else if ($tmp === $mod.TInputType.itURL) {
      Result = "url"}
     else if ($tmp === $mod.TInputType.itWeek) Result = "week";
    return Result;
  };
  $mod.$implcode = function () {
    $impl.ControlManager = null;
    $impl.FMouseX = 0;
    $impl.FMouseY = 0;
    $impl.FCursorX = 0;
    $impl.FCursorY = 0;
    $impl.ScrollBW = 0;
    $impl.ScrollBH = 0;
    $impl.DragObject = null;
    $impl.cStyleBkgColor = "background-color";
  };
  $mod.$init = function () {
    $impl.ScrollBW = 0;
    $impl.ScrollBH = 0;
    $impl.DragObject = null;
    $impl.ControlManager = $mod.TControlManager.$create("Create$1",[null]);
  };
},["WEBLib.Dialogs","WEBLib.Forms","Math","TypInfo","WEBLib.WebTools","WEBLib.Utils"]);
//# sourceMappingURL=WEBLib.Controls.js.map
