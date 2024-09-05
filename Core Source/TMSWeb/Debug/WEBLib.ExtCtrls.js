rtl.module("WEBLib.ExtCtrls",["System","Classes","SysUtils","Types","WEBLib.Controls","WEBLib.StdCtrls","WEBLib.Graphics","Web","JS","WEBLib.WebTools","WEBLib.Menus","WEBLib.REST"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TLinkTarget = {"0": "ltCurrentTab", ltCurrentTab: 0, "1": "ltNewTab", ltNewTab: 1};
  this.$rtti.$Enum("TLinkTarget",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TLinkTarget});
  rtl.createClass(this,"TCustomLinkLabel",pas["WEBLib.StdCtrls"].TCustomLabel,function () {
    this.$init = function () {
      pas["WEBLib.StdCtrls"].TCustomLabel.$init.call(this);
      this.FDisplText = "";
      this.FOnLinkClick = null;
      this.FWidthStyle$1 = 0;
      this.FHeightPercent$1 = 0.0;
      this.FHeightStyle$1 = 0;
      this.FWidthPercent$1 = 0.0;
      this.FTarget = 0;
    };
    this.$final = function () {
      this.FOnLinkClick = undefined;
      pas["WEBLib.StdCtrls"].TCustomLabel.$final.call(this);
    };
    this.SetHeightPercent$1 = function (Value) {
      this.FHeightPercent$1 = Value;
    };
    this.SetHeightStyle$1 = function (Value) {
      this.FHeightStyle$1 = Value;
    };
    this.SetWidthPercent$1 = function (Value) {
      this.FWidthPercent$1 = Value;
    };
    this.SetWidthStyle$1 = function (Value) {
      this.FWidthStyle$1 = Value;
    };
    this.SetTarget = function (Value) {
      if (this.FTarget !== Value) {
        this.FTarget = Value;
        this.SetCaption(this.FCaption);
      };
    };
    this.GetOuterWidth = function () {
      var Result = 0;
      if (this.FAlign !== pas["WEBLib.Controls"].TAlign.alNone) {
        Result = pas["WEBLib.Controls"].TControl.GetOuterWidth.call(this)}
       else Result = this.GetWidth();
      return Result;
    };
    this.GetOuterHeight = function () {
      var Result = 0;
      if (this.FAlign !== pas["WEBLib.Controls"].TAlign.alNone) {
        Result = pas["WEBLib.Controls"].TControl.GetOuterHeight.call(this)}
       else Result = this.GetHeight();
      return Result;
    };
    this.GetDisplayText = function () {
      var Result = "";
      Result = this.FDisplText;
      return Result;
    };
    this.SetCaption = function (AValue) {
      var iopen = 0;
      var iopena = 0;
      var iopeni = 0;
      var iopenend = 0;
      var iopenendt = 0;
      var iclose = 0;
      var scaption = "";
      var shref = "";
      var stext = "";
      var sanchor = "";
      var sid = "";
      var stype = "";
      var slcaption = "";
      var anchor = null;
      var span = null;
      var contentelement = null;
      pas["WEBLib.StdCtrls"].TCustomLabel.SetCaption.call(this,AValue);
      if (!(this.GetContainer() != null)) return;
      contentelement = this.GetContentHandle();
      if (this.GetID() !== "") {
        contentelement = document.getElementById(this.GetID());
      };
      if ((contentelement != null) && pas.System.Assigned(contentelement.nodeValue)) contentelement.nodeValue = "";
      scaption = AValue;
      slcaption = pas.SysUtils.LowerCase(scaption);
      if ((pas.System.Pos("https://",slcaption) === 1) || (pas.System.Pos("http://",slcaption) === 1)) {
        scaption = '<a href="' + scaption + '"';
        if (this.FTarget === $mod.TLinkTarget.ltNewTab) scaption = scaption + ' target="_blank"';
        scaption = scaption + ">" + this.FCaption + "</a>";
        if (!(this.FOnLinkClick != null)) {
          contentelement.innerHTML = scaption;
          return;
        };
      };
      sanchor = '<a href="';
      sid = '<a id="';
      if ((this.FOnLinkClick != null) && ((pas.System.Pos(sanchor,scaption) > 0) || (pas.System.Pos(sid,scaption) > 0))) {
        contentelement.innerHTML = "";
        while ((pas.System.Pos(sanchor,scaption) > 0) || (pas.System.Pos(sid,scaption) > 0)) {
          iopena = pas.System.Pos(sanchor,scaption);
          iopeni = pas.System.Pos(sid,scaption);
          if (((iopena < iopeni) || (iopeni <= 0)) && (iopena > 0)) {
            stype = "#url#";
            iopen = iopena + sanchor.length;
          } else {
            stype = "#id#";
            iopen = iopeni + sid.length;
          };
          iopenend = pas.System.Pos('">',scaption);
          iopenendt = pas.System.Pos('" ',scaption);
          if ((iopenendt > 0) && (iopenendt < iopenend)) iopenend = iopenendt;
          iclose = pas.System.Pos("</a>",scaption);
          shref = pas.System.Copy(scaption,iopen,iopenend - iopen);
          iopenend = pas.System.Pos('">',scaption);
          iclose = pas.System.Pos("</a>",scaption);
          stext = pas.System.Copy(scaption,iopenend + 2,iclose - (iopenend + 2));
          span = document.createElement("SPAN");
          span.innerHTML = pas.System.Copy(scaption,0,iopen);
          contentelement.appendChild(span);
          anchor = document.createElement("A");
          anchor.setAttribute("href","#");
          anchor.setAttribute("id",stype + shref);
          anchor.innerHTML = stext;
          anchor.onclick = rtl.createSafeCallback(this,"DoLinkClick");
          contentelement.appendChild(anchor);
          pas.System.Delete({get: function () {
              return scaption;
            }, set: function (v) {
              scaption = v;
            }},1,pas.System.Pos("</a>",scaption) + 3);
        };
        span = document.createElement("SPAN");
        span.innerHTML = scaption;
        contentelement.appendChild(span);
        this.FDisplText = scaption;
      } else {
        this.FDisplText = pas.SysUtils.StringReplace(AValue,"> <",">&nbsp;<",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
        if ((contentelement != null) && pas.System.Assigned(contentelement.nodeValue)) {
          contentelement.nodeValue = this.FDisplText}
         else if ((contentelement != null) && (contentelement.childElementCount <= 1)) contentelement.innerHTML = this.FDisplText;
      };
    };
    this.DoLinkClick = function (Event) {
      var Result = false;
      var slink = "";
      var stype = "";
      var svalue = "";
      var ltype = 0;
      svalue = Event.target.getAttribute("id");
      stype = "#url#";
      ltype = pas["WEBLib.StdCtrls"].TSysLinkType.sltURL;
      if (!(pas.System.Pos(stype,svalue) > 0)) {
        stype = "#id#";
        ltype = pas["WEBLib.StdCtrls"].TSysLinkType.sltID;
      };
      slink = pas.SysUtils.StringReplace(svalue,stype,"",{});
      if (this.FOnLinkClick != null) this.FOnLinkClick(this,slink,ltype);
      Result = true;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.Controls"].TControl.Create$1.apply(this,arguments);
      this.FWidthStyle$1 = pas["WEBLib.Controls"].TSizeStyle.ssAbsolute;
      this.FWidthPercent$1 = 100;
      this.FHeightStyle$1 = pas["WEBLib.Controls"].TSizeStyle.ssAbsolute;
      this.FHeightPercent$1 = 100;
      this.SetTransparent(true);
      return this;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment",{Default: pas.Classes.TAlignment.taLeftJustify});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: true});
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor$1","SetColorEx",{Default: 16777215});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("EllipsisPosition",2,pas["WEBLib.StdCtrls"].$rtti["TEllipsisPosition"],"FEllipsisPosition","SetEllipsisPosition",{Default: pas["WEBLib.StdCtrls"].TEllipsisPosition.epNone});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("Layout",2,pas["WEBLib.StdCtrls"].$rtti["TTextLayout"],"FLayout","SetLayout",{Default: pas["WEBLib.StdCtrls"].TTextLayout.tlTop});
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("Target",2,$mod.$rtti["TLinkTarget"],"FTarget","SetTarget",{Default: $mod.TLinkTarget.ltCurrentTab});
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Transparent",2,rtl.boolean,"FTransparent","SetTransparent",{Default: true});
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WordWrap",0,rtl.boolean,"FWordWrap","FWordWrap",{Default: false});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle$1","SetHeightStyle$1",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle$1","SetWidthStyle$1",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent$1","SetHeightPercent$1",{Default: 100});
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent$1","SetWidthPercent$1",{Default: 100});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnLinkClick",0,pas["WEBLib.StdCtrls"].$rtti["TLinkClickEvent"],"FOnLinkClick","FOnLinkClick");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TLinkLabel",this.TCustomLinkLabel,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
  });
  rtl.createClass(this,"TWebLinkLabel",this.TLinkLabel,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.TTrackBarOrientation = {"0": "trHorizontal", trHorizontal: 0, "1": "trVertical", trVertical: 1};
  this.$rtti.$Enum("TTrackBarOrientation",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TTrackBarOrientation});
  rtl.createClass(this,"TTrackBar",pas["WEBLib.StdCtrls"].TCustomInput,function () {
    this.$init = function () {
      pas["WEBLib.StdCtrls"].TCustomInput.$init.call(this);
      this.FMax = 0;
      this.FMin = 0;
      this.FPosition = 0;
      this.FOnChange = null;
      this.FOrientation = 0;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas["WEBLib.StdCtrls"].TCustomInput.$final.call(this);
    };
    this.SetOrientation = function (Value) {
      var ow = 0;
      var oh = 0;
      if (this.FOrientation !== Value) {
        ow = this.GetWidth();
        oh = this.GetHeight();
        this.FOrientation = Value;
        if (!(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
          this.SetWidth(oh);
          this.SetHeight(ow);
        };
        this.UpdateElement();
      };
    };
    this.GetElementInputHandle = function () {
      var Result = null;
      Result = this.GetContainer();
      return Result;
    };
    this.GetInputType = function () {
      var Result = "";
      Result = "range";
      return Result;
    };
    this.DoHandleChange = function (Event) {
      var Result = false;
      var el = null;
      el = this.GetElementHandle();
      this.FPosition = el.value;
      this.Change();
      Result = true;
      return Result;
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().oninput = rtl.createSafeCallback(this,"DoHandleChange");
      };
    };
    this.SetMax = function (AValue) {
      if (this.FMax !== AValue) {
        this.FMax = AValue;
        this.DoUpdate();
      };
    };
    this.SetMin = function (AValue) {
      if (this.FMin !== AValue) {
        this.FMin = AValue;
        this.DoUpdate();
      };
    };
    this.SetPosition = function (AValue) {
      if (this.FPosition !== AValue) {
        this.FPosition = AValue;
        this.DoUpdate();
      };
    };
    this.GetPosition = function () {
      var Result = 0;
      var s = "";
      Result = this.FPosition;
      if (!(this.GetContainer() != null)) return Result;
      s = this.GetContainer().value;
      if (s !== "") Result = pas.SysUtils.StrToInt(s);
      return Result;
    };
    this.DoUpdate = function () {
      var el = null;
      if (!(this.GetContainer() != null)) return;
      this.GetContainer().setAttribute("max",pas.SysUtils.IntToStr(this.FMax));
      this.GetContainer().setAttribute("min",pas.SysUtils.IntToStr(this.FMin));
      el = this.GetElementHandle();
      el.value = this.FPosition;
      el.setAttribute('value',this.FPosition);
    };
    this.Change = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.CreateControl = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateControl.call(this);
      this.DoUpdate();
    };
    this.UpdateElementVisual = function () {
      var el = null;
      pas["WEBLib.StdCtrls"].TCustomInput.UpdateElementVisual.call(this);
      el = this.GetElementHandle();
      if (this.FOrientation === $mod.TTrackBarOrientation.trHorizontal) {
        el.removeAttribute("orient");
        el.style.removeProperty("writing-mode");
        el.style.removeProperty("-webkit-appearance");
        el.style.removeProperty("height");
        if (this.FWidthStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) el.style.setProperty("width",pas.SysUtils.IntToStr(this.GetWidth()));
      } else {
        el.setAttribute("orient","vertical");
        el.style.setProperty("writing-mode","bt-lt");
        el.style.setProperty("-webkit-appearance","slider-vertical");
        el.style.removeProperty("width");
        if (this.FHeightStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) el.style.setProperty("height",pas.SysUtils.IntToStr(this.GetHeight()));
        el.style.setProperty("width","22px");
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.StdCtrls"].TCustomInput.CreateInitialize.call(this);
      this.FMax = 100;
      this.FMin = 0;
      this.FPosition = 0;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("Max",2,rtl.longint,"FMax","SetMax",{Default: 10});
    $r.addProperty("Min",2,rtl.longint,"FMin","SetMin",{Default: 0});
    $r.addProperty("Orientation",2,$mod.$rtti["TTrackBarOrientation"],"FOrientation","SetOrientation",{Default: $mod.TTrackBarOrientation.trHorizontal});
    $r.addProperty("Position",3,rtl.longint,"GetPosition","SetPosition",{Default: 0});
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TWebTrackBar",this.TTrackBar,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTimer",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FInterval = 0;
      this.FTimerID = 0;
      this.FOnTimer = null;
      this.FEnabled = false;
    };
    this.$final = function () {
      this.FOnTimer = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.SetEnabled = function (Value) {
      this.FEnabled = Value;
      this.DoUpdateTimer();
    };
    this.SetInterval = function (AValue) {
      this.FInterval = AValue;
      this.DoUpdateTimer();
    };
    this.DoTimer = function () {
      if (this.FOnTimer != null) this.FOnTimer(this);
    };
    this.DoUpdateTimer = function () {
      this.DoClearTimer();
      if (this.FEnabled) this.FTimerID = window.setInterval(rtl.createSafeCallback(this,"DoTimer"),this.FInterval);
    };
    this.DoClearTimer = function () {
      if (this.FTimerID !== -1) {
        window.clearInterval(this.FTimerID);
        this.FTimerID = -1;
      };
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      this.FInterval = 1000;
      this.FTimerID = -1;
      this.SetEnabled(true);
      return this;
    };
    this.Destroy = function () {
      this.DoClearTimer();
      pas.Classes.TComponent.Destroy.call(this);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Interval",2,rtl.longint,"FInterval","SetInterval",{Default: 1000});
    $r.addProperty("OnTimer",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnTimer","FOnTimer");
  });
  rtl.createClass(this,"TWebTimer",this.TTimer,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$MethodVar("TGeolocationEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Lat",rtl.double],["Lon",rtl.double],["Alt",rtl.double]]), methodkind: 0});
  this.$rtti.$MethodVar("TGeolocationExEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Lat",rtl.double],["Lon",rtl.double],["Alt",rtl.double],["Accuracy",rtl.double]]), methodkind: 0});
  this.$rtti.$MethodVar("TGeolocationErrorEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ACode",rtl.longint],["AMessage",rtl.string]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TGeolocationResponseProc",{procsig: rtl.newTIProcSig([["APosition",pas.Web.$rtti["TJSPosition"]]])});
  rtl.createClass(this,"TGeoLocation",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FOnGeolocation = null;
      this.FWidth = 0;
      this.FHeight = 0;
      this.FMaximumAge = 0;
      this.FTimeOut = 0;
      this.FHighPrecision = false;
      this.FTrackID = 0;
      this.FOnGeolocationUpdate = null;
      this.FOnGeolocationEx = null;
      this.FOnGeolocationError = null;
      this.FOnGeolocationUpdateEx = null;
    };
    this.$final = function () {
      this.FOnGeolocation = undefined;
      this.FOnGeolocationUpdate = undefined;
      this.FOnGeolocationEx = undefined;
      this.FOnGeolocationError = undefined;
      this.FOnGeolocationUpdateEx = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.DoHandleGeolocation = function (APosition) {
      if (this.FOnGeolocation != null) this.FOnGeolocation(this,APosition.coords.latitude,APosition.coords.longitude,APosition.coords.altitude);
      if (this.FOnGeolocationEx != null) this.FOnGeolocationEx(this,APosition.coords.latitude,APosition.coords.longitude,APosition.coords.altitude,APosition.coords.accuracy);
    };
    this.DoHandleError = function (AValue) {
      if (this.FOnGeolocationError != null) this.FOnGeolocationError(this,AValue.code,AValue.message);
    };
    this.DoHandleGeolocationAsync = function (AProc) {
      var $Self = this;
      var posopt = pas.Web.TJSPositionOptions.$new();
      function Handler(APosition) {
        AProc(pas.Web.TJSPosition.$clone(APosition));
      };
      posopt.enableHighAccuracy = this.FHighPrecision;
      posopt.timeout = this.FTimeOut;
      posopt.maximumAge = this.FMaximumAge;
      navigator.geolocation.getCurrentPosition(Handler,null,pas.Web.TJSPositionOptions.$clone(posopt));
    };
    this.DoHandleGeolocationUpdate = function (APosition) {
      if (this.FOnGeolocationUpdate != null) this.FOnGeolocationUpdate(this,APosition.coords.latitude,APosition.coords.longitude,APosition.coords.altitude);
      if (this.FOnGeolocationUpdateEx != null) this.FOnGeolocationUpdateEx(this,APosition.coords.latitude,APosition.coords.longitude,APosition.coords.altitude,APosition.coords.accuracy);
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      this.FHighPrecision = false;
      this.FTimeOut = 60000;
      this.FMaximumAge = 0;
      this.FTrackID = -1;
      return this;
    };
    this.HasGeolocation = function () {
      var Result = false;
      Result = navigator.geolocation != null;
      return Result;
    };
    this.GetGeolocation = function () {
      var posopt = pas.Web.TJSPositionOptions.$new();
      if (navigator.geolocation != null) {
        posopt.enableHighAccuracy = this.FHighPrecision;
        posopt.timeout = this.FTimeOut;
        posopt.maximumAge = this.FMaximumAge;
        navigator.geolocation.getCurrentPosition(rtl.createCallback(this,"DoHandleGeolocation"),rtl.createCallback(this,"DoHandleError"),pas.Web.TJSPositionOptions.$clone(posopt));
      };
    };
    this.GetGeolocationAsync = function () {
      var $Self = this;
      var Result = null;
      var posopt = pas.Web.TJSPositionOptions.$new();
      Result = new Promise(function (ASuccess, AFailed) {
        if (navigator.geolocation != null) {
          $Self.DoHandleGeolocationAsync(function (APosition) {
            ASuccess(pas.Web.TJSPosition.$clone(APosition));
          });
        } else AFailed(null);
      });
      return Result;
    };
    this.StartTracking = function () {
      var posopt = pas.Web.TJSPositionOptions.$new();
      if (this.FTrackID !== -1) this.StopTracking();
      if (navigator.geolocation != null) {
        posopt.enableHighAccuracy = this.FHighPrecision;
        posopt.timeout = this.FTimeOut;
        posopt.maximumAge = this.FMaximumAge;
        this.FTrackID = navigator.geolocation.watchPosition(rtl.createCallback(this,"DoHandleGeolocationUpdate"),rtl.createCallback(this,"DoHandleError"),pas.Web.TJSPositionOptions.$clone(posopt));
      };
    };
    this.StopTracking = function () {
      if ((navigator.geolocation != null) && (this.FTrackID !== -1)) {
        navigator.geolocation.clearWatch(this.FTrackID);
        this.FTrackID = -1;
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("HighPrecision",0,rtl.boolean,"FHighPrecision","FHighPrecision",{Default: false});
    $r.addProperty("TimeOut",0,rtl.longint,"FTimeOut","FTimeOut",{Default: 60000});
    $r.addProperty("MaximumAge",0,rtl.longint,"FMaximumAge","FMaximumAge",{Default: 0});
    $r.addProperty("OnGeolocation",0,$mod.$rtti["TGeolocationEvent"],"FOnGeolocation","FOnGeolocation");
    $r.addProperty("OnGeolocationEx",0,$mod.$rtti["TGeolocationExEvent"],"FOnGeolocationEx","FOnGeolocationEx");
    $r.addProperty("OnGeolocationError",0,$mod.$rtti["TGeolocationErrorEvent"],"FOnGeolocationError","FOnGeolocationError");
    $r.addProperty("OnGeolocationUpdate",0,$mod.$rtti["TGeolocationEvent"],"FOnGeolocationUpdate","FOnGeolocationUpdate");
    $r.addProperty("OnGeolocationUpdateEx",0,$mod.$rtti["TGeolocationExEvent"],"FOnGeolocationUpdateEx","FOnGeolocationUpdateEx");
  });
  rtl.createClass(this,"TWebGeoLocation",this.TGeoLocation,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TPaintBox",pas["WEBLib.Menus"].TWebGraphicControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebGraphicControl.$init.call(this);
      this.FOnPaint = null;
    };
    this.$final = function () {
      this.FOnPaint = undefined;
      pas["WEBLib.Menus"].TWebGraphicControl.$final.call(this);
    };
    this.Paint = function () {
      pas["WEBLib.Controls"].TCustomControl.Paint.call(this);
      if (this.FOnPaint != null) this.FOnPaint(this);
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.GetElementHandle().style.setProperty("border","1px dotted gray");
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnMouseWheel",0,pas["WEBLib.Controls"].$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnPaint",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnPaint","FOnPaint");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TWebPaintBox",this.TPaintBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$RefToProcVar("TImageLoadedProc",{procsig: rtl.newTIProcSig([["AEvent",pas.Web.$rtti["TJSEvent"]]])});
  this.$rtti.$RefToProcVar("TImageErrorProc",{procsig: rtl.newTIProcSig([["AEvent",pas.Web.$rtti["TJSEvent"]]])});
  rtl.createClass(this,"TCustomImageControl",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FURL = "";
      this.FPicture = null;
      this.FAutoSize = false;
      this.FOnLoaded = null;
      this.FOnError = null;
      this.FImageLoadPtr = null;
      this.FImageErrorPtr = null;
      this.FImageLoaded = null;
      this.FImageError = null;
    };
    this.$final = function () {
      this.FPicture = undefined;
      this.FOnLoaded = undefined;
      this.FOnError = undefined;
      this.FImageLoaded = undefined;
      this.FImageError = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.SetURL = function (AURL) {
      this.FURL = AURL;
      this.SetContainerURL(AURL);
    };
    this.GetBase64Img = function () {
      var Result = "";
      Result = pas["WEBLib.WebTools"].GetBase64Image(this.GetElementHandle(),0,0);
      return Result;
    };
    this.HandleImageLoad = function (AEvent) {
      var Result = false;
      var el = null;
      var w = 0;
      var h = 0;
      el = this.GetElementHandle();
      w = el.naturalWidth;
      h = el.naturalHeight;
      this.FPicture.FWidth = w;
      this.FPicture.FHeight = h;
      if (this.FOnLoaded != null) this.FOnLoaded(this);
      if (this.FImageLoaded != null) this.FImageLoaded(AEvent);
      Result = true;
      return Result;
    };
    this.HandleError = function (AEvent) {
      var Result = false;
      var Handled = false;
      var LEventRec = pas["WEBLib.Controls"].TJSEventRecord.$new();
      var LRequestRec = pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$new();
      Result = true;
      Handled = false;
      if (this.FOnError != null) {
        LEventRec.event = AEvent;
        LRequestRec.req = AEvent.target;
        this.FOnError(this,pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$clone(LRequestRec),pas["WEBLib.Controls"].TJSEventRecord.$clone(LEventRec),{get: function () {
            return Handled;
          }, set: function (v) {
            Handled = v;
          }});
      };
      if (this.FImageError != null) this.FImageError(AEvent);
      if (!Handled && !(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) throw pas.SysUtils.Exception.$create("Create$1",["Error loading image " + this.FURL]);
      return Result;
    };
    this.SetPicture = function (Value) {
      this.FPicture.Assign(Value);
    };
    this.PictureChanged = function (Sender) {
      this.SetURL(this.FPicture.FFilename);
      this.UpdateElement();
    };
    this.PictureDataChanged = function (Sender) {
      this.SetContainerURL("data:image/png;base64," + pas["WEBLib.WebTools"].HexImageDecodeAsBase64(this.FPicture.GetData()));
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("IMG");
      if (this.FURL !== "") Result.setAttribute("src",this.FURL);
      return Result;
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.FAutoSize && (this.GetElementHandle() != null)) {
        this.GetElementHandle().style.removeProperty("width");
        this.GetElementHandle().style.removeProperty("height");
      };
    };
    this.SetContainerURL = function (AURL) {
      if (this.GetContainer() != null) {
        if (AURL === "") {
          this.GetContainer().removeAttribute("src")}
         else this.GetContainer().setAttribute("src",AURL);
        this.UpdateElement();
      };
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementBindHandle() != null) {
        this.GetElementBindHandle().addEventListener("load",this.FImageLoadPtr);
        if (!(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) this.GetElementBindHandle().addEventListener("error",this.FImageErrorPtr);
      };
    };
    this.UnbindEvents = function () {
      var eh = null;
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementBindHandle() != null) {
        eh = this.GetElementBindHandle();
        eh.removeEventListener("load",this.FImageLoadPtr);
        if (!(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) eh.removeEventListener("error",this.FImageErrorPtr);
      };
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FImageLoadPtr = null;
      this.FImageErrorPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      if (this.FImageLoadPtr === null) this.FImageLoadPtr = rtl.createCallback(this,"HandleImageLoad");
      if (this.FImageErrorPtr === null) this.FImageErrorPtr = rtl.createCallback(this,"HandleError");
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FPicture = pas["WEBLib.Graphics"].TURLPicture.$create("Create");
      this.FPicture.FOnChange = rtl.createCallback(this,"PictureChanged");
      this.FPicture.FOnDataChange = rtl.createCallback(this,"PictureDataChanged");
      this.SetColor(-1);
      this.SetTabStop(false);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(400);
        this.SetHeight(300);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FPicture");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.DataURL = function () {
      var Result = "";
      Result = "data:image/png;base64," + this.GetBase64Img();
      return Result;
    };
    this.DataURL$1 = function (AWidth, AHeight) {
      var Result = "";
      Result = "data:image/png;base64," + pas["WEBLib.WebTools"].GetBase64Image(this.GetElementHandle(),AWidth,AHeight);
      return Result;
    };
    this.ResizeImage = function () {
      this.ResizeImage$2(this.GetWidth(),this.GetHeight(),false);
    };
    this.ResizeImage$1 = function (AWidth, AHeight) {
      this.ResizeImage$2(AWidth,AHeight,false);
    };
    this.ResizeImage$2 = function (AWidth, AHeight, AspectRatio) {
      var w = 0;
      var h = 0;
      var r = 0.0;
      if (AspectRatio) {
        if ((this.ImageWidth() === AWidth) || (this.ImageHeight() === AHeight)) return;
      } else {
        if ((this.ImageWidth() === AWidth) && (this.ImageHeight() === AHeight)) return;
      };
      if ((AWidth === 0) || (AHeight === 0)) return;
      w = AWidth;
      h = AHeight;
      if (AspectRatio) {
        if ((this.ImageWidth() / w) > (this.ImageHeight() / h)) {
          r = this.ImageWidth() / w}
         else r = this.ImageHeight() / h;
        w = Math.round(this.ImageWidth() / r);
        h = Math.round(this.ImageHeight() / r);
      };
      this.SetURL("data:image/png;base64," + pas["WEBLib.WebTools"].GetBase64Image(this.GetElementHandle(),w,h));
    };
    this.ImageWidth = function () {
      var Result = 0;
      var el = null;
      var w = 0;
      Result = -1;
      if (this.GetElementHandle() != null) {
        el = this.GetElementHandle();
        w = el.naturalWidth;
        Result = w;
      };
      return Result;
    };
    this.ImageHeight = function () {
      var Result = 0;
      var el = null;
      var h = 0;
      Result = -1;
      if (this.GetElementHandle() != null) {
        el = this.GetElementHandle();
        h = el.naturalHeight;
        Result = h;
      };
      return Result;
    };
    this.LoadFromArrayBuffer = function (AArray) {
      var uint8b = null;
      var dataUri = "";
      uint8b = new Uint8Array(AArray);
      dataUri = btoa(new Uint8Array(uint8b).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
      }, ''));
      this.SetURL("data:image/jpeg;base64," + dataUri);
    };
    this.LoadFromURL = function (AURL) {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (ASuccess, AFailed) {
        $Self.LoadFromURL$1(AURL,function (AEvent) {
          ASuccess(AEvent);
        },function (AEvent) {
          AFailed(AEvent);
        });
      });
      return Result;
    };
    this.LoadFromURL$1 = function (AURL, ImageLoaded, ImageError) {
      this.FImageLoaded = ImageLoaded;
      this.FImageError = ImageError;
      this.SetURL(AURL);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoSize",0,rtl.boolean,"FAutoSize","FAutoSize",{Default: false});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnError",0,pas["WEBLib.Controls"].$rtti["THTTPErrorEvent"],"FOnError","FOnError");
    $r.addProperty("OnLoaded",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnLoaded","FOnLoaded");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TImageControl",this.TCustomImageControl,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Picture",2,pas["WEBLib.Graphics"].$rtti["TURLPicture"],"FPicture","SetPicture");
    $r.addProperty("URL",2,rtl.string,"FURL","SetURL");
  });
  rtl.createClass(this,"TWebImageControl",this.TImageControl,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$Class("TImageZoomControl");
  rtl.createClass(this,"TImageZoomAppearance",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOwner = null;
      this.FHeightPercent = 0;
      this.FWidthPercent = 0;
      this.FResponsiveHeightPercent = 0;
      this.FResponsiveWidthPercent = 0;
      this.FResponsiveMaxWidth = 0;
    };
    this.$final = function () {
      this.FOwner = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetHeightPercent = function (Value) {
      if ((this.FHeightPercent !== Value) && (this.FHeightPercent <= 100)) {
        this.FHeightPercent = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.SetWidthPercent = function (Value) {
      if ((this.FWidthPercent !== Value) && (this.FWidthPercent <= 100)) {
        this.FWidthPercent = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.SetResponsiveHeightPercent = function (Value) {
      if ((this.FResponsiveHeightPercent !== Value) && (this.FResponsiveHeightPercent <= 100)) {
        this.FResponsiveHeightPercent = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.SetResponsiveWidthPercent = function (Value) {
      if ((this.FResponsiveWidthPercent !== Value) && (this.FResponsiveWidthPercent <= 100)) {
        this.FResponsiveWidthPercent = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.SetResponsiveMaxWidth = function (Value) {
      if ((this.FResponsiveMaxWidth !== Value) && (this.FResponsiveMaxWidth >= 0)) {
        this.FResponsiveMaxWidth = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.Create$1 = function (AOwner) {
      this.FHeightPercent = 100;
      this.FWidthPercent = 100;
      this.FResponsiveHeightPercent = 100;
      this.FResponsiveWidthPercent = 100;
      this.FResponsiveMaxWidth = 768;
      this.FOwner = AOwner;
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      pas.Classes.TPersistent.Assign.apply(this,arguments);
      if ($mod.TImageZoomAppearance.isPrototypeOf(Source)) {
        this.FHeightPercent = rtl.as(Source,$mod.TImageZoomAppearance).FHeightPercent;
        this.FWidthPercent = rtl.as(Source,$mod.TImageZoomAppearance).FWidthPercent;
        this.FResponsiveHeightPercent = rtl.as(Source,$mod.TImageZoomAppearance).FResponsiveHeightPercent;
        this.FResponsiveWidthPercent = rtl.as(Source,$mod.TImageZoomAppearance).FResponsiveWidthPercent;
        this.FResponsiveMaxWidth = rtl.as(Source,$mod.TImageZoomAppearance).FResponsiveMaxWidth;
      };
    };
    this.GetOwner = function () {
      var Result = null;
      Result = this.FOwner;
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",$mod.$rtti["TImageZoomControl"]]]);
    $r.addProperty("HeightPercent",2,rtl.longint,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("WidthPercent",2,rtl.longint,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("ResponsiveHeightPercent",2,rtl.longint,"FResponsiveHeightPercent","SetResponsiveHeightPercent",{Default: 100});
    $r.addProperty("ResponsiveWidthPercent",2,rtl.longint,"FResponsiveWidthPercent","SetResponsiveWidthPercent",{Default: 100});
    $r.addProperty("ResponsiveMaxWidth",2,rtl.longint,"FResponsiveMaxWidth","SetResponsiveMaxWidth",{Default: 768});
  });
  rtl.createClass(this,"TImageZoomControl",this.TCustomImageControl,function () {
    this.$init = function () {
      $mod.TCustomImageControl.$init.call(this);
      this.FStyle = null;
      this.FOverlay = null;
      this.FPictureZoom = null;
      this.FURLZoom = "";
      this.FPictureZoomDataURL = "";
      this.FAppearance = null;
      this.FZoomBkgOpacity = 0.0;
      this.FZoomBkgColor = 0;
    };
    this.$final = function () {
      this.FStyle = undefined;
      this.FOverlay = undefined;
      this.FPictureZoom = undefined;
      this.FAppearance = undefined;
      $mod.TCustomImageControl.$final.call(this);
    };
    this.SetPictureZoom = function (Value) {
      this.FPictureZoom.Assign(Value);
    };
    this.SetURLZoom = function (Value) {
      if (this.FURLZoom !== Value) {
        this.FURLZoom = Value;
        this.UpdateElement();
      };
    };
    this.PictureZoomChanged = function (Sender) {
      this.SetURLZoom(this.FPictureZoom.FFilename);
      this.FPictureZoomDataURL = "";
      this.UpdateElement();
    };
    this.PictureZoomDataChanged = function (Sender) {
      this.FPictureZoomDataURL = "data:image/png;base64," + pas["WEBLib.WebTools"].HexImageDecodeAsBase64(this.FPictureZoom.GetData());
      this.UpdateElement();
    };
    this.UpdateElement = function () {
      var PopupImage = "";
      var Popup = null;
      var r = 0;
      var g = 0;
      var b = 0;
      var l = 0;
      var op = "";
      $mod.TCustomImageControl.UpdateElement.call(this);
      if (!(this.GetElementHandle() != null)) return;
      if (this.FOverlay != null) {
        this.GetElementHandle().setAttribute("onClick",'document.getElementById("' + this.FName + 'myModal").style.display = "block"');
        if (this.FPictureZoomDataURL !== "") {
          PopupImage = this.FPictureZoomDataURL}
         else PopupImage = this.FURLZoom;
        if (PopupImage === "") PopupImage = this.FURL;
        if (this.GetIsLinked() && (PopupImage === "")) {
          PopupImage = this.GetElementHandle().getAttribute("src");
        };
        op = pas.SysUtils.FloatToStr(this.FZoomBkgOpacity);
        pas.SysUtils.StringReplace(op,",",".",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
        l = pas["WEBLib.Graphics"].ColorToRGB(this.FZoomBkgColor);
        r = pas["WEBLib.Graphics"].GetRValue(l);
        g = pas["WEBLib.Graphics"].GetGValue(l);
        b = pas["WEBLib.Graphics"].GetBValue(l);
        this.FStyle.innerHTML = "." + this.FName + "modal-overlay {\r" + "  display: none;\r" + "  position: fixed;\r" + "  z-index: 99999999;\r" + "  width: 100%;\r" + "  height: 100%;\r" + "  overflow: hidden;\r" + "  top: 50%;\r" + "  left: 50%;\r" + "  -ms-transform: translate(-50%, -50%);\r" + "  transform: translate(-50%, -50%);\r" + "  background-color: rgba(" + pas.SysUtils.TByteHelper.ToString$1.call({get: function () {
            return r;
          }, set: function (v) {
            r = v;
          }}) + "," + pas.SysUtils.TByteHelper.ToString$1.call({get: function () {
            return g;
          }, set: function (v) {
            g = v;
          }}) + "," + pas.SysUtils.TByteHelper.ToString$1.call({get: function () {
            return b;
          }, set: function (v) {
            b = v;
          }}) + ",0.2);\r" + "}\r" + "." + this.FName + "modal {\r" + "  display: block;\r" + "  position: absolute;\r" + "  z-index: 99999999;\r" + "  width: " + pas.SysUtils.IntToStr(this.FAppearance.FWidthPercent) + "%;\r" + "  height: " + pas.SysUtils.IntToStr(this.FAppearance.FHeightPercent) + "%;\r" + "  overflow: hidden;\r" + "  top: 50%;\r" + "  left: 50%;\r" + "  -ms-transform: translate(-50%, -50%);\r" + "  transform: translate(-50%, -50%);\r" + "  background-color: rgba(" + pas.SysUtils.TByteHelper.ToString$1.call({get: function () {
            return r;
          }, set: function (v) {
            r = v;
          }}) + "," + pas.SysUtils.TByteHelper.ToString$1.call({get: function () {
            return g;
          }, set: function (v) {
            g = v;
          }}) + "," + pas.SysUtils.TByteHelper.ToString$1.call({get: function () {
            return b;
          }, set: function (v) {
            b = v;
          }}) + "," + op + ");\r" + "}\r" + "." + this.FName + "modal-content {\r" + "  display: block;\r" + "  margin: 0;\r" + "  position: absolute;\r" + "  top: 50%;\r" + "  left: 50%;\r" + "  -ms-transform: translate(-50%, -50%);\r" + "  transform: translate(-50%, -50%);\r" + "  max-width: 100%;\r" + "  max-height: 100%;\r" + "}\r" + "." + this.FName + "close {\r" + "  z-index: 99999999;\r" + "  position: absolute;\r" + "  top: 15px;\r" + "  right: 35px;\r" + "  color: #f1f1f1;\r" + "  font-size: 40px;\r" + "  font-weight: bold;\r" + "  transition: 0.3s;\r" + "}\r" + "." + this.FName + "close:hover,\r" + "." + this.FName + "close:focus {\r" + "  color: #bbb;\r" + "  text-decoration: none;\r" + "  cursor: pointer;\r" + "}\r" + "@media only screen and (max-width: 769px) {\r" + "\t." + this.FName + "modal {\r" + "  width: " + pas.SysUtils.IntToStr(this.FAppearance.FResponsiveWidthPercent) + "%;\r" + "  height: " + pas.SysUtils.IntToStr(this.FAppearance.FResponsiveHeightPercent) + "%;\r" + "\t}\r" + "}\r";
        this.FOverlay.setAttribute("onClick",'this.style.display = "none";');
        this.FOverlay.setAttribute("id",this.FName + "myModal");
        this.FOverlay.setAttribute("class",this.FName + "modal-overlay");
        while (this.FOverlay.firstChild != null) this.FOverlay.removeChild(this.FOverlay.firstChild);
        Popup = document.createElement("DIV");
        Popup.setAttribute("class",this.FName + "modal");
        Popup.innerHTML = '<span class="' + this.FName + 'close">&times;</span>' + '<img class="' + this.FName + 'modal-content" src="' + PopupImage + '">';
        this.FOverlay.innerHTML = "";
        this.FOverlay.appendChild(Popup);
      };
    };
    this.CreateInitialize = function () {
      $mod.TCustomImageControl.CreateInitialize.call(this);
      this.FAppearance = $mod.TImageZoomAppearance.$create("Create$1",[this]);
      this.FPictureZoom = pas["WEBLib.Graphics"].TURLPicture.$create("Create");
      this.FPictureZoom.FOnChange = rtl.createCallback(this,"PictureZoomChanged");
      this.FPictureZoom.FOnDataChange = rtl.createCallback(this,"PictureZoomDataChanged");
      this.FPictureZoomDataURL = "";
      this.FZoomBkgColor = 0;
      this.FZoomBkgOpacity = 0.9;
      this.FStyle = document.createElement("STYLE");
      this.FOverlay = document.createElement("DIV");
      document.body.appendChild(this.FStyle);
      document.body.appendChild(this.FOverlay);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(100);
        this.SetHeight(75);
      };
    };
    this.CreateElement = function () {
      var Result = null;
      Result = $mod.TCustomImageControl.CreateElement.call(this);
      return Result;
    };
    this.Destroy = function () {
      rtl.free(this,"FAppearance");
      rtl.free(this,"FPictureZoom");
      $mod.TCustomImageControl.Destroy.call(this);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Appearance",0,$mod.$rtti["TImageZoomAppearance"],"FAppearance","FAppearance");
    $r.addProperty("Picture",2,pas["WEBLib.Graphics"].$rtti["TURLPicture"],"FPicture","SetPicture");
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("URL",2,rtl.string,"FURL","SetURL");
    $r.addProperty("PictureZoom",2,pas["WEBLib.Graphics"].$rtti["TURLPicture"],"FPictureZoom","SetPictureZoom");
    $r.addProperty("URLZoom",2,rtl.string,"FURLZoom","SetURLZoom");
    $r.addProperty("ZoomBkgColor",0,pas["WEBLib.Graphics"].$rtti["TColor"],"FZoomBkgColor","FZoomBkgColor",{Default: 0});
    $r.addProperty("ZoomBkgOpacity",0,rtl.double,"FZoomBkgOpacity","FZoomBkgOpacity");
  });
  rtl.createClass(this,"TWebImageZoomControl",this.TImageZoomControl,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TCustomPanel",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FAutoSize = false;
      this.FIsSizing = false;
      this.FPadding = null;
      this.FShowCaption = false;
      this.FLabel = null;
      this.FPanelBody = null;
      this.FElementBodyClassName = "";
      this.FAlignment = 0;
    };
    this.$final = function () {
      this.FPadding = undefined;
      this.FLabel = undefined;
      this.FPanelBody = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.SetShowCaption = function (Value) {
      if (this.FShowCaption !== Value) {
        this.FShowCaption = Value;
        this.UpdateElementVisual();
      };
    };
    this.SetPadding = function (Value) {
      this.FPadding.Assign(Value);
    };
    this.SetAlignment = function (Value) {
      if (this.FAlignment !== Value) {
        this.FAlignment = Value;
        this.UpdateElement();
      };
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("SPAN");
      this.FPanelBody = document.createElement("DIV");
      this.FPanelBody.setAttribute("class","card-body");
      Result.appendChild(this.FPanelBody);
      return Result;
    };
    this.SetCaption = function (AValue) {
      pas["WEBLib.Controls"].TCustomControl.SetCaption.call(this,AValue);
      if ((this.GetElementHandle() != null) && this.FShowCaption) {
        if (!(this.FLabel != null)) {
          this.FLabel = document.createElement("SPAN");
          this.FLabel.innerHTML = this.FCaption;
          if (this.GetChildContainer() != null) {
            this.GetChildContainer().appendChild(this.FLabel)}
           else this.GetElementHandle().appendChild(this.FLabel);
          this.UpdateElementVisual();
        } else {
          this.FLabel.innerHTML = this.FCaption;
        };
      };
    };
    this.SetBorderStyle = function (AValue) {
      pas["WEBLib.Controls"].TCustomControl.SetBorderStyle.apply(this,arguments);
      this.UpdateElement();
    };
    this.SetAutoSize = function (AValue) {
      this.FAutoSize = AValue;
      if (this.FAutoSize && !this.IsUpdating()) {
        this.DoAutoSize();
      };
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.GetElementHandle() != null) {
        if (!this.GetIsLinked()) {
          if (this.FAutoSize) {
            this.GetElementHandle().style.setProperty("overflow","");
            this.GetElementHandle().style.setProperty("white-space","normal");
            if (this.FVisible) this.GetElementHandle().style.setProperty("display","inline");
          } else {
            this.GetElementHandle().style.setProperty("overflow","hidden");
            this.GetElementHandle().style.setProperty("white-space","nowrap");
            if (this.FVisible) this.GetElementHandle().style.setProperty("display","inline-block");
          };
          this.GetElementHandle().style.setProperty("padding-left",pas.SysUtils.IntToStr(this.FPadding.FLeft) + "px");
          this.GetElementHandle().style.setProperty("padding-right",pas.SysUtils.IntToStr(this.FPadding.FRight) + "px");
          this.GetElementHandle().style.setProperty("padding-top",pas.SysUtils.IntToStr(this.FPadding.FTop) + "px");
          this.GetElementHandle().style.setProperty("padding-bottom",pas.SysUtils.IntToStr(this.FPadding.FBottom) + "px");
          this.GetElementHandle().style.setProperty("box-sizing","border-box");
          if (this.FElementBodyClassName !== "") {
            this.GetChildContainer().setAttribute("class",this.FElementBodyClassName)}
           else this.GetChildContainer().removeAttribute("class");
        };
        if (this.FLabel != null) {
          if (this.FShowCaption) {
            this.FLabel.innerHTML = this.FCaption}
           else this.FLabel.innerHTML = "";
          if (this.FVisible) {
            this.GetElementHandle().style.setProperty("display","flex");
            var $tmp = this.FAlignment;
            if ($tmp === pas.Classes.TAlignment.taLeftJustify) {
              this.GetElementHandle().style.setProperty("justify-content","flex-start")}
             else if ($tmp === pas.Classes.TAlignment.taCenter) {
              this.GetElementHandle().style.setProperty("justify-content","center")}
             else if ($tmp === pas.Classes.TAlignment.taRightJustify) this.GetElementHandle().style.setProperty("justify-content","flex-end");
            this.GetElementHandle().style.setProperty("align-items","center");
          };
        };
        this.GetElementHandle().style.setProperty("user-select","");
        if (this.FCursor === 0) this.GetElementHandle().style.setProperty("cursor","");
      };
    };
    this.GetOuterWidth = function () {
      var Result = 0;
      Result = pas["WEBLib.Controls"].TControl.GetOuterWidth.call(this);
      return Result;
    };
    this.GetOuterHeight = function () {
      var Result = 0;
      Result = pas["WEBLib.Controls"].TControl.GetOuterHeight.call(this);
      return Result;
    };
    this.GetChildContainer = function () {
      var Result = null;
      if (this.FPanelBody != null) {
        Result = this.FPanelBody}
       else Result = pas["WEBLib.Controls"].TControl.GetChildContainer.call(this);
      return Result;
    };
    this.RegisterParent = function (AValue) {
      pas["WEBLib.Controls"].TControl.RegisterParent.apply(this,arguments);
      if (this.FAutoSize) this.DoAutoSize();
    };
    this.UnRegisterParent = function (AValue) {
      pas["WEBLib.Controls"].TControl.UnRegisterParent.apply(this,arguments);
      if (this.FAutoSize) this.DoAutoSize();
    };
    this.UpdatePadding = function (ARect) {
      ARect.Left = this.FPadding.FLeft;
      ARect.Top = this.FPadding.FTop;
      ARect.Right = ARect.Right - this.FPadding.FRight;
      ARect.Bottom = ARect.Bottom - this.FPadding.FBottom;
    };
    this.DoAutoSize = function () {
      var i = 0;
      var minx = 0;
      var miny = 0;
      var maxx = 0;
      var maxy = 0;
      var r = null;
      var el = null;
      if (this.FIsSizing) return;
      this.FIsSizing = true;
      if ((this.FWidthStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) && (this.FHeightStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute)) {
        maxx = 0;
        maxy = 0;
        minx = 0xFFFF;
        miny = 0xFFFF;
        for (var $l = 0, $end = this.GetControlsCount() - 1; $l <= $end; $l++) {
          i = $l;
          if (this.GetControls(i).FWidthStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) {
            if ((this.GetControls(i).GetLeft() + this.GetControls(i).GetWidth()) > maxx) maxx = this.GetControls(i).GetLeft() + this.GetControls(i).GetWidth();
            if (this.GetControls(i).GetLeft() < minx) minx = this.GetControls(i).GetLeft();
          } else {
            el = this.GetControls(i).GetElementHandle();
            if (el != null) {
              r = el.getBoundingClientRect();
              if (((r.x - this.GetLeft()) + r.width) > maxx) maxx = Math.round((r.x - this.GetLeft()) + r.width);
              minx = 0;
            };
          };
          if (this.GetControls(i).FHeightStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) {
            if ((this.GetControls(i).GetTop() + this.GetControls(i).GetHeight()) > maxy) maxy = this.GetControls(i).GetTop() + this.GetControls(i).GetHeight();
            if (this.GetControls(i).GetTop() < miny) miny = this.GetControls(i).GetTop();
          } else {
            el = this.GetControls(i).GetElementHandle();
            if (el != null) {
              r = el.getBoundingClientRect();
              if (((r.y - this.GetTop()) + r.height) > maxy) maxy = Math.round((r.y - this.GetTop()) + r.height);
              miny = 0;
            };
          };
        };
        if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
          if ((this.GetControlsCount() === 0) || (maxx === 0) || (maxy === 0)) return;
        };
        if (this.FBorderStyle === pas["WEBLib.Controls"].TBorderStyle.bsSingle) {
          maxx += 1;
          maxy += 1;
        };
        for (var $l1 = 0, $end1 = this.GetControlsCount() - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.GetControls(i).SetLeft(this.GetControls(i).GetLeft() - minx);
          this.GetControls(i).SetTop(this.GetControls(i).GetTop() - miny);
        };
        this.SetWidth(maxx - minx);
        this.SetHeight(maxy - miny);
      } else {
        this.SetWidth(-1);
        this.SetHeight(-1);
      };
      this.UpdateElement();
      this.FIsSizing = false;
    };
    this.AlignControl = function (AControl) {
      pas["WEBLib.Controls"].TControl.AlignControl.apply(this,arguments);
      if (this.FAutoSize) this.DoAutoSize();
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) this.FEnablePropagation = true;
      this.FAutoSize = false;
      this.FAlignment = pas.Classes.TAlignment.taCenter;
      this.SetColor(15790320);
      this.SetTabStop(false);
      this.FCustomBorder = true;
      this.SetShowCaption(true);
      this.FControlStyle = rtl.unionSet(this.FControlStyle,rtl.createSet(pas["WEBLib.Controls"].TControlStyleValue.csAcceptsControls));
      this.FLabel = null;
      this.FPadding = pas["WEBLib.Controls"].TPadding.$create("Create$1");
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(400);
        this.SetHeight(300);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FPadding");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.EndUpdate = function () {
      pas["WEBLib.Controls"].TCustomControl.EndUpdate.call(this);
      if (this.FAutoSize) this.SetAutoSize(true);
    };
    this.SetBounds = function (X, Y, AWidth, AHeight) {
      pas["WEBLib.Controls"].TControl.SetBounds.apply(this,arguments);
      if (this.FAutoSize) this.DoAutoSize();
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TPanel",this.TCustomPanel,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment",{Default: pas.Classes.TAlignment.taCenter});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("BorderColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FBorderColor","SetBorderColor",{Default: 12632256});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementBodyClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementBodyClassName","FElementBodyClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("Padding",2,pas["WEBLib.Controls"].$rtti["TPadding"],"FPadding","SetPadding");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowCaption",2,rtl.boolean,"FShowCaption","SetShowCaption",{Default: true});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
  });
  rtl.createClass(this,"TDivPanel",this.TPanel,function () {
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TWebPanel",this.TPanel,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TCustomGroupBox",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FCaption$1 = "";
      this.FLegend = null;
      this.FFieldSet = null;
      this.FElementLegendClassName = "";
    };
    this.$final = function () {
      this.FLegend = undefined;
      this.FFieldSet = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.SetElementLegendClassName = function (Value) {
      if (this.FElementLegendClassName !== Value) {
        this.FElementLegendClassName = Value;
        this.UpdateElementVisual();
      };
    };
    this.SetFieldSetSize = function () {
      if (this.FFieldSet != null) {
        if (this.FWidthStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) {
          this.FFieldSet.style.setProperty("width",pas.SysUtils.IntToStr(this.GetWidth() - 4 - (this.FFont.FSize * 2)) + "px")}
         else this.FFieldSet.style.setProperty("width","90%");
        if (this.FHeightStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) {
          this.FFieldSet.style.setProperty("height",pas.SysUtils.IntToStr(this.GetHeight() - (this.FFont.FSize * 2)) + "px")}
         else this.FFieldSet.style.setProperty("height","90%");
      };
    };
    this.SetCaption = function (Value) {
      if (this.FCaption$1 !== Value) {
        this.FCaption$1 = Value;
        this.UpdateElementData();
      };
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      this.FFieldSet = document.createElement("FIELDSET");
      Result.appendChild(this.FFieldSet);
      this.FLegend = document.createElement("LEGEND");
      this.FFieldSet.appendChild(this.FLegend);
      this.FLegend.innerHTML = this.FCaption$1;
      return Result;
    };
    this.UpdateElementData = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.FLegend != null) {
        this.FLegend.innerHTML = this.FCaption$1;
      };
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().style.removeProperty("background-color");
      };
      if (this.FLegend != null) {
        this.FLegend.setAttribute("class","w-auto " + this.FElementLegendClassName);
        this.FLegend.style.setProperty("float","none");
      };
      if (this.FFieldSet != null) {
        this.FFieldSet.style.setProperty("background-color",pas["WEBLib.Graphics"].ColorToHTML(this.FColor));
        this.FFieldSet.style.setProperty("overflow","visible");
        this.SetFieldSetSize();
        this.FFieldSet.style.setProperty("white-space","nowrap");
        if (this.FVisible) this.FFieldSet.style.setProperty("display","inline-block");
        this.FFieldSet.style.setProperty("webkit-user-select","none");
        this.FFieldSet.style.setProperty("moz-user-select","none");
        this.FFieldSet.style.setProperty("khtml-user-select","none");
        this.FFieldSet.style.setProperty("ms-user-select","none");
        this.FFieldSet.style.setProperty("user-select","none");
        this.FFieldSet.style.setProperty("border","1px solid " + pas["WEBLib.Graphics"].ColorToHTML(this.FBorderColor));
      };
    };
    this.SetBoundsInt = function (X, Y, AWidth, AHeight) {
      pas["WEBLib.Controls"].TControl.SetBoundsInt.apply(this,arguments);
      this.SetFieldSetSize();
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FEnablePropagation = true;
      this.FControlStyle = rtl.unionSet(this.FControlStyle,rtl.createSet(pas["WEBLib.Controls"].TControlStyleValue.csAcceptsControls));
      this.SetColor(15790320);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(400);
        this.SetHeight(300);
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TGroupBox",this.TCustomGroupBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("BorderColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FBorderColor","SetBorderColor",{Default: 12632256});
    $r.addProperty("Caption",2,rtl.string,"FCaption$1","SetCaption");
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
  });
  rtl.createClass(this,"TWebGroupBox",this.TGroupBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TScrollBox",this.TCustomPanel,function () {
    this.$init = function () {
      $mod.TCustomPanel.$init.call(this);
      this.FAutoScroll = false;
      this.FScrollBars = 0;
      this.FScrollPtr = null;
      this.FOnScroll = null;
      this.FVertScrollBar = null;
      this.FHorzScrollBar = null;
    };
    this.$final = function () {
      this.FOnScroll = undefined;
      this.FVertScrollBar = undefined;
      this.FHorzScrollBar = undefined;
      $mod.TCustomPanel.$final.call(this);
    };
    this.GetScrollLeft = function () {
      var Result = 0;
      Result = this.GetElementHandle().scrollLeft;
      return Result;
    };
    this.GetScrollTop = function () {
      var Result = 0;
      Result = this.GetElementHandle().scrollTop;
      return Result;
    };
    this.SetScrollLeft = function (Value) {
      this.GetElementHandle().scrollLeft = Value;
    };
    this.SetScrollTop = function (Value) {
      this.GetElementHandle().scrollTop = Value;
    };
    this.SetScrollBars = function (Value) {
      if (this.FScrollBars !== Value) {
        this.FScrollBars = Value;
        this.UpdateElement();
      };
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if ((this.GetElementHandle() != null) && !this.IsUpdating()) {
        var $tmp = this.FScrollBars;
        if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssNone) {
          this.GetElementHandle().style.setProperty("overflow","hidden");
        } else if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssVertical) {
          this.GetElementHandle().style.removeProperty("overflow");
          this.GetElementHandle().style.setProperty("overflow-x","hidden");
          this.GetElementHandle().style.setProperty("overflow-y","auto");
        } else if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssHorizontal) {
          this.GetElementHandle().style.removeProperty("overflow");
          this.GetElementHandle().style.setProperty("overflow-x","auto");
          this.GetElementHandle().style.setProperty("overflow-y","hidden");
        } else if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssBoth) {
          this.GetElementHandle().style.setProperty("overflow","auto");
        };
        if (this.FVisible && !this.GetIsLinked()) this.GetElementHandle().style.setProperty("display","inline-block");
      };
    };
    this.SetAutoScroll = function (AValue) {
      this.FAutoScroll = AValue;
    };
    this.GetClientRect = function () {
      var Result = pas.Types.TRect.$new();
      var dw = 0;
      var dh = 0;
      dw = 0;
      dh = 0;
      if ((this.GetElementHandle().scrollHeight > this.GetElementHandle().clientHeight) && (this.FScrollBars in rtl.createSet(pas["WEBLib.Controls"].TScrollStyle.ssBoth,pas["WEBLib.Controls"].TScrollStyle.ssVertical))) dw = 16;
      if ((this.GetElementHandle().scrollWidth > this.GetElementHandle().clientWidth) && (this.FScrollBars in rtl.createSet(pas["WEBLib.Controls"].TScrollStyle.ssBoth,pas["WEBLib.Controls"].TScrollStyle.ssHorizontal))) dh = 16;
      Result.$assign(pas.Types.Rect(0,0,this.GetElementHandle().clientWidth - dw,this.GetElementHandle().clientHeight - dh));
      return Result;
    };
    this.HandleDoScroll = function (Event) {
      var Result = false;
      this.DoScroll();
      Result = true;
      return Result;
    };
    this.DoScroll = function () {
      if (this.FOnScroll != null) this.FOnScroll(this);
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FScrollPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      if (this.FScrollPtr === null) {
        this.FScrollPtr = rtl.createCallback(this,"HandleDoScroll");
      };
    };
    this.BindEvents = function () {
      var eh = null;
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementBindHandle() != null) {
        eh = this.GetElementBindHandle();
        eh.addEventListener("scroll",this.FScrollPtr);
      };
    };
    this.UnbindEvents = function () {
      var eh = null;
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementBindHandle() != null) {
        eh = this.GetElementBindHandle();
        eh.removeEventListener("scroll",this.FScrollPtr);
      };
    };
    this.CreateInitialize = function () {
      $mod.TCustomPanel.CreateInitialize.call(this);
      this.FAutoScroll = true;
      this.FScrollBars = pas["WEBLib.Controls"].TScrollStyle.ssBoth;
      this.FHorzScrollBar = pas["WEBLib.Controls"].TControlScrollBar.$create("Create$1",[this,pas["WEBLib.Controls"].TScrollBarKind.sbHorizontal]);
      this.FVertScrollBar = pas["WEBLib.Controls"].TControlScrollBar.$create("Create$1",[this,pas["WEBLib.Controls"].TScrollBarKind.sbVertical]);
    };
    this.Destroy = function () {
      rtl.free(this,"FHorzScrollBar");
      rtl.free(this,"FVertScrollBar");
      $mod.TCustomPanel.Destroy.call(this);
    };
    this.ScrollBy = function (DeltaX, DeltaY) {
      this.SetScrollLeft(this.GetScrollLeft() + DeltaX);
      this.SetScrollTop(this.GetScrollTop() + DeltaY);
    };
    this.EndUpdate = function () {
      $mod.TCustomPanel.EndUpdate.call(this);
      this.AlignControl(this);
      this.AlignControl(this);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoScroll",2,rtl.boolean,"FAutoScroll","SetAutoScroll");
    $r.addProperty("BorderColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FBorderColor","SetBorderColor",{Default: 12632256});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("Padding",2,pas["WEBLib.Controls"].$rtti["TPadding"],"FPadding","SetPadding");
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ScrollBars",2,pas["WEBLib.Controls"].$rtti["TScrollStyle"],"FScrollBars","SetScrollBars");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnResize",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnResize","FOnResize");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnScroll",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnScroll","FOnScroll");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
  });
  rtl.createClass(this,"TWebScrollBox",this.TScrollBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TSplitter",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FLayer$1 = null;
      this.FTouched = false;
      this.FFirstMove = false;
      this.FSplitControl = null;
      this.FSizing = false;
      this.FSizingX = 0.0;
      this.FSizingY = 0.0;
      this.FOriginalWidth = 0;
      this.FOriginalHeight = 0;
      this.FGripColor = 0;
      this.FOnMoved = null;
      this.FOnMove = null;
    };
    this.$final = function () {
      this.FLayer$1 = undefined;
      this.FSplitControl = undefined;
      this.FOnMoved = undefined;
      this.FOnMove = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetGripColor = function (Value) {
      if (this.FGripColor !== Value) {
        this.FGripColor = Value;
        this.Invalidate();
      };
    };
    this.CreateElement = function () {
      var Result = null;
      Result = pas["WEBLib.Controls"].TCustomControl.CreateElement.call(this);
      return Result;
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
    };
    this.UpdateElementSize = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementSize.call(this);
    };
    this.ColorChanging = function () {
      pas["WEBLib.Controls"].TControl.ColorChanging.call(this);
      this.Invalidate();
    };
    this.DoSizeStart = function (X, Y) {
      var r = pas.Types.TRect.$new();
      var rc = pas.Types.TRect.$new();
      var i = 0;
      var c = null;
      var eh = null;
      this.FSizing = true;
      r.$assign(pas.Types.Rect(this.GetLeft(),this.GetTop(),this.GetLeft() + this.GetWidth(),this.GetTop() + this.GetHeight()));
      if (this.FParent != null) {
        for (var $l = 0, $end = this.FParent.GetControlsCount() - 1; $l <= $end; $l++) {
          i = $l;
          c = this.FParent.GetControls(i);
          if ((c.FAlign === this.FAlign) && (c !== this)) {
            rc.$assign(pas.Types.Rect(c.GetLeft(),c.GetTop(),c.GetLeft() + c.GetWidth(),c.GetTop() + c.GetHeight()));
            if ((this.FAlign === pas["WEBLib.Controls"].TAlign.alLeft) && ((rc.Right - r.Left) < 4)) {
              this.FSplitControl = c;
              this.FOriginalWidth = this.FSplitControl.GetWidth();
              this.FSizing = true;
              this.FSizingX = X;
              this.FSizingY = Y;
              break;
            };
            if ((this.FAlign === pas["WEBLib.Controls"].TAlign.alRight) && ((rc.Left - r.Right) < 4)) {
              this.FSplitControl = c;
              this.FOriginalWidth = this.FSplitControl.GetWidth();
              this.FSizing = true;
              this.FSizingX = X;
              this.FSizingY = Y;
              break;
            };
            if ((this.FAlign === pas["WEBLib.Controls"].TAlign.alTop) && ((rc.Bottom - r.Top) < 4)) {
              this.FSplitControl = c;
              this.FOriginalHeight = this.FSplitControl.GetHeight();
              this.FSizing = true;
              this.FSizingX = X;
              this.FSizingY = Y;
              break;
            };
            if ((this.FAlign === pas["WEBLib.Controls"].TAlign.alBottom) && ((rc.Top - r.Bottom) < 4)) {
              this.FSplitControl = c;
              this.FOriginalHeight = this.FSplitControl.GetHeight();
              this.FSizing = true;
              this.FSizingX = X;
              this.FSizingY = Y;
              break;
            };
          };
        };
      };
      this.FLayer$1 = document.createElement("SPAN");
      document.body.appendChild(this.FLayer$1);
      eh = this.FLayer$1;
      eh.style.setProperty("top","0");
      eh.style.setProperty("left","0");
      eh.style.setProperty("right","0");
      eh.style.setProperty("bottom","0");
      eh.style.setProperty("z-index","99999999");
      eh.style.setProperty("webkit-user-select","none");
      eh.style.setProperty("moz-user-select","none");
      eh.style.setProperty("khtml-user-select","none");
      eh.style.setProperty("ms-user-select","none");
      eh.style.setProperty("user-select","none");
      eh.style.setProperty("position","absolute");
      if (this.FAlign in rtl.createSet(pas["WEBLib.Controls"].TAlign.alLeft,pas["WEBLib.Controls"].TAlign.alRight)) eh.style.setProperty("cursor","col-resize");
      if (this.FAlign in rtl.createSet(pas["WEBLib.Controls"].TAlign.alTop,pas["WEBLib.Controls"].TAlign.alBottom)) eh.style.setProperty("cursor","row-resize");
      this.FFirstMove = true;
      this.FSizing = true;
      eh.addEventListener("mousemove",rtl.createCallback(this,"HandleDocDoMouseMove"));
      eh.addEventListener("mouseup",rtl.createCallback(this,"HandleDocDoMouseUp"));
      eh.addEventListener("touchmove",rtl.createCallback(this,"HandleDocDoTouchMove"));
      eh.addEventListener("touchend",rtl.createCallback(this,"HandleDocDoTouchEnd"));
    };
    this.HandleDoTouchStart = function (Event) {
      var Result = false;
      var l = 0.0;
      var t = 0.0;
      var touch = null;
      this.StopPropagation();
      this.PreventDefault();
      if (Event.touches.length > 0) {
        touch = Event.touches.item(0);
        this.FTouched = true;
        this.Invalidate();
        this.Invalidate();
        this.XYToClient(touch.clientX,touch.clientY,{get: function () {
            return l;
          }, set: function (v) {
            l = v;
          }},{get: function () {
            return t;
          }, set: function (v) {
            t = v;
          }});
        this.DoSizeStart(Math.round(l),Math.round(t));
      };
      Result = false;
      return Result;
    };
    this.HandleDocDoMouseMove = function (Event) {
      var Result = false;
      var dx = 0;
      var dy = 0;
      if (this.FSizing && (this.FSplitControl != null)) {
        if (this.FFirstMove) {
          this.FSizingX = Event.clientX;
          this.FSizingY = Event.clientY;
          this.FFirstMove = false;
        } else {
          dx = Math.round(Event.clientX - this.FSizingX);
          dy = Math.round(Event.clientY - this.FSizingY);
          if (this.FAlign === pas["WEBLib.Controls"].TAlign.alLeft) this.FSplitControl.SetWidth(this.FOriginalWidth + dx);
          if (this.FAlign === pas["WEBLib.Controls"].TAlign.alRight) this.FSplitControl.SetWidth(this.FOriginalWidth - dx);
          if (this.FAlign === pas["WEBLib.Controls"].TAlign.alTop) this.FSplitControl.SetHeight(this.FOriginalHeight + dy);
          if (this.FAlign === pas["WEBLib.Controls"].TAlign.alBottom) this.FSplitControl.SetHeight(this.FOriginalHeight - dy);
          this.DoRealign();
          if (this.FOnMove != null) this.FOnMove(this);
        };
      };
      Result = true;
      return Result;
    };
    this.HandleDocDoMouseUp = function (Event) {
      var Result = false;
      this.FSizing = false;
      this.FSplitControl = null;
      this.FFirstMove = true;
      this.FLayer$1.parentNode.removeChild(this.FLayer$1);
      Result = true;
      if (this.FOnMoved != null) this.FOnMoved(this);
      return Result;
    };
    this.HandleDocDoTouchMove = function (Event) {
      var Result = false;
      var touch = null;
      var dx = 0;
      var dy = 0;
      this.StopPropagation();
      if (Event.touches.length > 0) {
        touch = Event.touches.item(0);
        if (this.FSizing && (this.FSplitControl != null)) {
          if (this.FFirstMove) {
            this.FSizingX = touch.clientX;
            this.FSizingY = touch.clientY;
            this.FFirstMove = false;
          } else {
            dx = Math.round(touch.clientX - this.FSizingX);
            dy = Math.round(touch.clientY - this.FSizingY);
            if (this.FAlign === pas["WEBLib.Controls"].TAlign.alLeft) this.FSplitControl.SetWidth(this.FOriginalWidth + dx);
            if (this.FAlign === pas["WEBLib.Controls"].TAlign.alRight) this.FSplitControl.SetWidth(this.FOriginalWidth - dx);
            if (this.FAlign === pas["WEBLib.Controls"].TAlign.alTop) this.FSplitControl.SetHeight(this.FOriginalHeight + dy);
            if (this.FAlign === pas["WEBLib.Controls"].TAlign.alBottom) this.FSplitControl.SetHeight(this.FOriginalHeight - dy);
            this.DoRealign();
            if (this.FOnMove != null) this.FOnMove(this);
          };
        };
      };
      Result = true;
      return Result;
    };
    this.HandleDocDoTouchEnd = function (Event) {
      var Result = false;
      this.FTouched = false;
      this.Invalidate();
      this.FSizing = false;
      this.FSplitControl = null;
      this.FFirstMove = true;
      this.FLayer$1.parentNode.removeChild(this.FLayer$1);
      Result = true;
      if (this.FOnMoved != null) this.FOnMoved(this);
      return Result;
    };
    this.DoMouseEnter = function () {
      pas["WEBLib.Controls"].TControl.DoMouseEnter.call(this);
      if (this.FAlign in rtl.createSet(pas["WEBLib.Controls"].TAlign.alLeft,pas["WEBLib.Controls"].TAlign.alRight)) this.SetControlCursor(14);
      if (this.FAlign in rtl.createSet(pas["WEBLib.Controls"].TAlign.alTop,pas["WEBLib.Controls"].TAlign.alBottom)) this.SetControlCursor(15);
    };
    this.MouseUp = function (Button, Shift, X, Y) {
      pas["WEBLib.Controls"].TControl.MouseUp.apply(this,arguments);
      this.FSizing = false;
      this.FSplitControl = null;
    };
    this.MouseDown = function (Button, Shift, X, Y) {
      pas["WEBLib.Controls"].TControl.MouseDown.apply(this,arguments);
      this.DoSizeStart(X,Y);
    };
    this.Paint = function () {
      var xofs = 0;
      var dx = 0;
      var yofs = 0;
      var dy = 0;
      var i = 0;
      if (this.FTouched) {
        this.GetCanvas().FBrush.FColor = 8421504;
        this.GetCanvas().FPen.SetColor(8421504);
      } else {
        this.GetCanvas().FBrush.FColor = this.FColor;
        this.GetCanvas().FPen.SetColor(this.FColor);
      };
      this.GetCanvas().FBrush.FStyle = pas["WEBLib.Graphics"].TBrushStyle.bsSolid;
      this.GetCanvas().Rectangle$2(this.GetClientRect());
      if (this.FAlign in rtl.createSet(pas["WEBLib.Controls"].TAlign.alLeft,pas["WEBLib.Controls"].TAlign.alRight)) {
        dx = 0;
        dy = 6;
        yofs = rtl.trunc(this.GetHeight() / 2) - 9;
        xofs = rtl.trunc(this.GetWidth() / 2);
      };
      if (this.FAlign in rtl.createSet(pas["WEBLib.Controls"].TAlign.alTop,pas["WEBLib.Controls"].TAlign.alBottom)) {
        dx = 6;
        dy = 0;
        xofs = rtl.trunc(this.GetWidth() / 2) - 9;
        yofs = rtl.trunc(this.GetHeight() / 2) - 1;
      };
      this.GetCanvas().FBrush.FColor = this.FGripColor;
      this.GetCanvas().FPen.SetColor(this.FGripColor);
      for (i = 0; i <= 2; i++) {
        this.GetCanvas().Rectangle$1(xofs,yofs,xofs + 2,yofs + 2);
        xofs = xofs + dx;
        yofs = yofs + dy;
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetControlCursor(14);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(6);
        this.SetHeight(100);
      };
      this.SetAlign(pas["WEBLib.Controls"].TAlign.alLeft);
      this.FSplitControl = null;
      this.SetGripColor(16777215);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("GripColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FGripColor","SetGripColor",{Default: 16777215});
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
    $r.addProperty("OnMove",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMove","FOnMove");
    $r.addProperty("OnMoved",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMoved","FOnMoved");
  });
  rtl.createClass(this,"TWebSplitter",this.TSplitter,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.TVerticalAlignment = {"0": "vaTop", vaTop: 0, "1": "vaCenter", vaCenter: 1, "2": "vaBottom", vaBottom: 2};
  this.$rtti.$Enum("TVerticalAlignment",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TVerticalAlignment});
  this.TGridPanelExpandStyle = {"0": "esAddRows", esAddRows: 0, "1": "esAddColumns", esAddColumns: 1};
  this.$rtti.$Enum("TGridPanelExpandStyle",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TGridPanelExpandStyle});
  rtl.createClass(this,"TGridPanelRow",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FSizeStyle = 0;
      this.FValue = 0;
      this.FMarginBottom = 0;
      this.FMarginTop = 0;
      this.FAlignment = 0;
      this.FElementClassName = "";
    };
    this.SetMarginBottom = function (Value) {
      if (this.FMarginBottom !== Value) {
        this.FMarginBottom = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetMarginTop = function (Value) {
      if (this.FMarginTop !== Value) {
        this.FMarginTop = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetSizeStyle = function (Value) {
      if (this.FSizeStyle !== Value) {
        this.FSizeStyle = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetValue = function (Value) {
      if (this.FValue !== Value) {
        this.FValue = Value;
        this.FCollection.Update(this);
      };
    };
    this.HeightAttribute = function () {
      var Result = "";
      Result = "";
      var $tmp = this.FSizeStyle;
      if ($tmp === pas["WEBLib.Controls"].TSizeStyle.ssPercent) {
        Result = pas.SysUtils.IntToStr(this.FValue) + "%"}
       else if ($tmp === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) Result = pas.SysUtils.IntToStr(this.FValue) + "px";
      return Result;
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      this.FSizeStyle = pas["WEBLib.Controls"].TSizeStyle.ssPercent;
      this.FAlignment = $mod.TVerticalAlignment.vaTop;
      this.FMarginTop = 0;
      this.FMarginBottom = 0;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TGridPanelRow.isPrototypeOf(Source)) {
        this.FAlignment = rtl.as(Source,$mod.TGridPanelRow).FAlignment;
        this.FSizeStyle = rtl.as(Source,$mod.TGridPanelRow).FSizeStyle;
        this.FElementClassName = rtl.as(Source,$mod.TGridPanelRow).FElementClassName;
        this.FValue = rtl.as(Source,$mod.TGridPanelRow).FValue;
        this.FMarginTop = rtl.as(Source,$mod.TGridPanelRow).FMarginTop;
        this.FMarginBottom = rtl.as(Source,$mod.TGridPanelRow).FMarginBottom;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Alignment",0,$mod.$rtti["TVerticalAlignment"],"FAlignment","FAlignment",{Default: $mod.TVerticalAlignment.vaTop});
    $r.addProperty("ElementClassName",0,rtl.string,"FElementClassName","FElementClassName");
    $r.addProperty("MarginTop",2,rtl.longint,"FMarginTop","SetMarginTop");
    $r.addProperty("MarginBottom",2,rtl.longint,"FMarginBottom","SetMarginBottom");
    $r.addProperty("SizeStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FSizeStyle","SetSizeStyle");
    $r.addProperty("Value",2,rtl.longint,"FValue","SetValue");
  });
  rtl.createClass(this,"TGridPanelRows",pas.Classes.TOwnedCollection,function () {
    this.$init = function () {
      pas.Classes.TOwnedCollection.$init.call(this);
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TOwnedCollection.$final.call(this);
    };
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.Update = function (Item) {
      pas.Classes.TCollection.Update.apply(this,arguments);
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TGridPanelRow);
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
  rtl.createClass(this,"TGridPanelColumn",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FSizeStyle = 0;
      this.FValue = 0;
      this.FMarginLeft = 0;
      this.FAlignment = 0;
      this.FMarginRight = 0;
      this.FElementClassName = "";
    };
    this.SetMarginLeft = function (Value) {
      if (this.FMarginLeft !== Value) {
        this.FMarginLeft = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetMarginRight = function (Value) {
      if (this.FMarginRight !== Value) {
        this.FMarginRight = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetSizeStyle = function (Value) {
      if (this.FSizeStyle !== Value) {
        this.FSizeStyle = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetValue = function (Value) {
      if (this.FValue !== Value) {
        this.FValue = Value;
        this.FCollection.Update(this);
      };
    };
    this.WidthAttribute = function () {
      var Result = "";
      Result = "";
      var $tmp = this.FSizeStyle;
      if ($tmp === pas["WEBLib.Controls"].TSizeStyle.ssPercent) {
        Result = pas.SysUtils.IntToStr(this.FValue) + "%"}
       else if ($tmp === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) Result = pas.SysUtils.IntToStr(this.FValue) + "px";
      return Result;
    };
    this.Create$1 = function (ACollection) {
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      this.FSizeStyle = pas["WEBLib.Controls"].TSizeStyle.ssPercent;
      this.FValue = 0;
      this.FMarginLeft = 0;
      this.FMarginRight = 0;
      this.FAlignment = pas.Classes.TAlignment.taLeftJustify;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TGridPanelColumn.isPrototypeOf(Source)) {
        this.FAlignment = rtl.as(Source,$mod.TGridPanelColumn).FAlignment;
        this.FSizeStyle = rtl.as(Source,$mod.TGridPanelColumn).FSizeStyle;
        this.FElementClassName = rtl.as(Source,$mod.TGridPanelColumn).FElementClassName;
        this.FValue = rtl.as(Source,$mod.TGridPanelColumn).FValue;
        this.FMarginLeft = rtl.as(Source,$mod.TGridPanelColumn).FMarginLeft;
        this.FMarginRight = rtl.as(Source,$mod.TGridPanelColumn).FMarginRight;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["ACollection",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("Alignment",0,pas.Classes.$rtti["TAlignment"],"FAlignment","FAlignment",{Default: pas.Classes.TAlignment.taLeftJustify});
    $r.addProperty("ElementClassName",0,rtl.string,"FElementClassName","FElementClassName");
    $r.addProperty("MarginLeft",2,rtl.longint,"FMarginLeft","SetMarginLeft",{Default: 0});
    $r.addProperty("MarginRight",2,rtl.longint,"FMarginRight","SetMarginRight",{Default: 0});
    $r.addProperty("SizeStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FSizeStyle","SetSizeStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssPercent});
    $r.addProperty("Value",2,rtl.longint,"FValue","SetValue");
  });
  rtl.createClass(this,"TGridPanelColumns",pas.Classes.TOwnedCollection,function () {
    this.$init = function () {
      pas.Classes.TOwnedCollection.$init.call(this);
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TOwnedCollection.$final.call(this);
    };
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.Update = function (Item) {
      pas.Classes.TCollection.Update.apply(this,arguments);
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TGridPanelColumn);
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
  rtl.createClass(this,"TControlCollectionItem",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FControl = null;
      this.FRow = 0;
      this.FColumn = 0;
    };
    this.$final = function () {
      this.FControl = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TControlCollectionItem.isPrototypeOf(Source)) {
        this.FColumn = rtl.as(Source,$mod.TControlCollectionItem).FColumn;
        this.FRow = rtl.as(Source,$mod.TControlCollectionItem).FRow;
        this.FControl = rtl.as(Source,$mod.TControlCollectionItem).FControl;
      };
    };
    var $r = this.$rtti;
    $r.addProperty("Column",0,rtl.longint,"FColumn","FColumn");
    $r.addProperty("Row",0,rtl.longint,"FRow","FRow");
    $r.addProperty("Control",0,pas["WEBLib.Controls"].$rtti["TWinControl"],"FControl","FControl");
  });
  rtl.createClass(this,"TControlCollection",pas.Classes.TOwnedCollection,function () {
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TControlCollectionItem);
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
    this.FindItem = function (AControl) {
      var Result = null;
      var i = 0;
      Result = null;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.GetItem$1(i).FControl === AControl) {
          Result = this.GetItem$1(i);
          return Result;
        };
      };
      return Result;
    };
    this.GetItemAtCell = function (ACol, ARow) {
      var Result = null;
      var i = 0;
      Result = null;
      if ((this.Owner() != null) && $mod.TGridPanel.isPrototypeOf(this.Owner())) {
        i = ACol + (rtl.as(this.Owner(),$mod.TGridPanel).FColumnCollection.GetCount() * ARow);
        if (i < this.GetCount()) Result = this.GetItem$1(i);
      };
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$3",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TGridPanel",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FDesignTime = false;
      this.FUpdateTable = false;
      this.FColCount = 0;
      this.FRowCollection = null;
      this.FColumnCollection = null;
      this.FControlCollection = null;
      this.FGridLineWidth = 0;
      this.FGridLineColor = 0;
      this.FExpandStyle = 0;
      this.FTbl = null;
      this.FTblBody = null;
    };
    this.$final = function () {
      this.FRowCollection = undefined;
      this.FColumnCollection = undefined;
      this.FControlCollection = undefined;
      this.FTbl = undefined;
      this.FTblBody = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.SetColumnCollection = function (Value) {
      this.FColumnCollection.Assign(Value);
    };
    this.SetRowCollection = function (Value) {
      this.FRowCollection.Assign(Value);
    };
    this.SetControlCollection = function (Value) {
      this.FControlCollection.Assign(Value);
    };
    this.CreateTable = function () {
      var Result = null;
      var row = null;
      var j = 0;
      var ps = "";
      this.FTbl = document.createElement("table");
      this.FTbl.setAttribute("width","100%");
      this.FTbl.setAttribute("height","100%");
      if (this.FElementClassName !== "") {
        this.FTbl.setAttribute("class",this.FElementClassName)}
       else {
        if ((this.FGridLineColor !== -1) && (this.FGridLineWidth > 0)) {
          ps = pas.SysUtils.IntToStr(this.FGridLineWidth) + "px solid " + pas["WEBLib.Graphics"].ColorToHTML(this.FGridLineColor)}
         else {
          if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
            ps = "1px dotted gray"}
           else ps = "0px";
        };
        this.FTbl.style.setProperty("border",ps);
        this.FTbl.style.setProperty("border-collapse","collapse");
      };
      pas["WEBLib.Controls"].SetHTMLElementColor(this.FTbl,this.FColor,!((this.FElementClassName === "") && !this.GetIsLinked()));
      this.FTblBody = document.createElement("tbody");
      for (var $l = 0, $end = this.FRowCollection.GetCount() - 1; $l <= $end; $l++) {
        j = $l;
        row = this.CreateRow(j);
        this.FTblBody.appendChild(row);
      };
      this.FTbl.appendChild(this.FTblBody);
      Result = this.FTbl;
      return Result;
    };
    this.CreateRow = function (AIndex) {
      var Result = null;
      var row = null;
      var cell = null;
      var i = 0;
      var ps = "";
      if ((this.FGridLineColor !== -1) && (this.FGridLineWidth > 0)) {
        ps = pas.SysUtils.IntToStr(this.FGridLineWidth) + "px solid " + pas["WEBLib.Graphics"].ColorToHTML(this.FGridLineColor)}
       else {
        if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
          ps = "1px dotted gray"}
         else ps = "0px";
      };
      row = document.createElement("tr");
      if (this.FElementClassName === "") row.style.setProperty("border",ps);
      if (AIndex < this.FRowCollection.GetCount()) {
        if (this.FRowCollection.GetItem$1(AIndex).FMarginTop !== 0) row.style.setProperty("margin-top",pas.SysUtils.IntToStr(this.FRowCollection.GetItem$1(AIndex).FMarginTop));
        if (this.FRowCollection.GetItem$1(AIndex).FMarginBottom !== 0) row.style.setProperty("margin-bottom",pas.SysUtils.IntToStr(this.FRowCollection.GetItem$1(AIndex).FMarginBottom));
        if (this.FRowCollection.GetItem$1(AIndex).FElementClassName !== "") {
          row.setAttribute("class",this.FRowCollection.GetItem$1(AIndex).FElementClassName);
        };
        var $tmp = this.FRowCollection.GetItem$1(AIndex).FAlignment;
        if ($tmp === $mod.TVerticalAlignment.vaCenter) {
          row.setAttribute("valign","middle")}
         else if ($tmp === $mod.TVerticalAlignment.vaBottom) row.setAttribute("valign","bottom");
        if (this.FElementClassName === "") row.style.setProperty("border",ps);
        row.setAttribute("height",this.FRowCollection.GetItem$1(AIndex).HeightAttribute());
      };
      for (var $l = 0, $end = this.FColumnCollection.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        cell = document.createElement("td");
        if (this.FElementClassName === "") cell.style.setProperty("border",ps);
        if (this.FColumnCollection.GetItem$1(i).FMarginLeft !== 0) cell.style.setProperty("padding-left",pas.SysUtils.IntToStr(this.FColumnCollection.GetItem$1(i).FMarginLeft) + "px");
        if (this.FColumnCollection.GetItem$1(i).FMarginRight !== 0) cell.style.setProperty("padding-right",pas.SysUtils.IntToStr(this.FColumnCollection.GetItem$1(i).FMarginRight) + "px");
        if (this.FColumnCollection.GetItem$1(i).FElementClassName !== "") {
          cell.setAttribute("class",this.FColumnCollection.GetItem$1(i).FElementClassName);
        };
        var $tmp1 = this.FColumnCollection.GetItem$1(i).FAlignment;
        if ($tmp1 === pas.Classes.TAlignment.taCenter) {
          cell.setAttribute("align","center")}
         else if ($tmp1 === pas.Classes.TAlignment.taRightJustify) cell.setAttribute("align","right");
        cell.setAttribute("id",this.FName + "R" + pas.SysUtils.IntToStr(AIndex) + "C" + pas.SysUtils.IntToStr(i));
        if (AIndex === 0) {
          cell.style.setProperty("width",this.FColumnCollection.GetItem$1(i).WidthAttribute());
        };
        row.appendChild(cell);
      };
      Result = row;
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("SPAN");
      return Result;
    };
    this.AlignControl = function (AControl) {
      if (!(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) this.UpdateTable();
      pas["WEBLib.Controls"].TControl.AlignControl.apply(this,arguments);
    };
    this.UpdateTable = function () {
      var i = 0;
      var j = 0;
      var k = 0;
      var mw = 0;
      var numrows = 0;
      var fragment = null;
      var destid = "";
      var control = null;
      var el = null;
      var row = null;
      var isPercent = false;
      var f = 0.0;
      if (!(this.FTblBody != null)) return;
      if (this.IsUpdating()) return;
      if (pas.Classes.TComponentStateItem.csDestroying in this.FComponentState) return;
      isPercent = true;
      mw = 0;
      for (var $l = 0, $end = this.FRowCollection.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FRowCollection.GetItem$1(i).FSizeStyle !== pas["WEBLib.Controls"].TSizeStyle.ssPercent) {
          isPercent = false;
          break;
        } else mw = mw + this.FRowCollection.GetItem$1(i).FValue;
      };
      if (isPercent && (mw > 100)) {
        f = mw / 100;
        for (var $l1 = 0, $end1 = this.FRowCollection.GetCount() - 1; $l1 <= $end1; $l1++) {
          i = $l1;
          this.FRowCollection.GetItem$1(i).FValue = pas.System.Trunc(this.FRowCollection.GetItem$1(i).FValue / f);
        };
      };
      isPercent = true;
      mw = 0;
      for (var $l2 = 0, $end2 = this.FColumnCollection.GetCount() - 1; $l2 <= $end2; $l2++) {
        i = $l2;
        if (this.FColumnCollection.GetItem$1(i).FSizeStyle !== pas["WEBLib.Controls"].TSizeStyle.ssPercent) {
          isPercent = false;
          break;
        } else mw = mw + this.FColumnCollection.GetItem$1(i).FValue;
      };
      if (isPercent && (mw > 100)) {
        f = mw / 100;
        for (var $l3 = 0, $end3 = this.FColumnCollection.GetCount() - 1; $l3 <= $end3; $l3++) {
          i = $l3;
          this.FColumnCollection.GetItem$1(i).FValue = pas.System.Trunc(this.FColumnCollection.GetItem$1(i).FValue / f);
        };
      };
      numrows = this.FRowCollection.GetCount();
      if (this.FColCount !== this.FColumnCollection.GetCount()) numrows = 0;
      while (this.FTblBody.childNodes.length > numrows) {
        this.FTblBody.removeChild(this.FTblBody.childNodes.item(this.FTblBody.childNodes.length - 1));
      };
      while (this.FTblBody.childNodes.length < this.FRowCollection.GetCount()) {
        row = this.CreateRow(this.FTblBody.childNodes.length);
        this.FTblBody.appendChild(row);
      };
      for (var $l4 = 0, $end4 = this.FRowCollection.GetCount() - 1; $l4 <= $end4; $l4++) {
        i = $l4;
        row = this.FTblBody.childNodes.item(i);
        row.setAttribute("height",this.FRowCollection.GetItem$1(i).HeightAttribute());
      };
      i = 0;
      j = 0;
      for (var $l5 = 0, $end5 = this.FControlCollection.GetCount() - 1; $l5 <= $end5; $l5++) {
        k = $l5;
        if (this.FControlCollection.GetItem$1(k).FControl != null) {
          fragment = document.createDocumentFragment();
          control = this.FControlCollection.GetItem$1(k).FControl;
          this.FControlCollection.GetItem$1(k).FColumn = i;
          this.FControlCollection.GetItem$1(k).FRow = j;
          control.SetElementPosition(pas["WEBLib.Controls"].TElementPosition.epRelative);
          control.SetChildOrderEx(-1);
          if (control.FAlign === pas["WEBLib.Controls"].TAlign.alLeft) {
            control.SetHeightStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
            control.SetHeightPercent(100);
            if (control.GetElementHandle() != null) control.GetElementHandle().style.setProperty("float","left");
          };
          if (control.FAlign === pas["WEBLib.Controls"].TAlign.alRight) {
            control.SetHeightStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
            control.SetHeightPercent(100);
            if (control.GetElementHandle() != null) control.GetElementHandle().style.setProperty("float","right");
          };
          if (control.FAlign in rtl.createSet(pas["WEBLib.Controls"].TAlign.alTop,pas["WEBLib.Controls"].TAlign.alBottom)) {
            control.SetWidthStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
            control.SetWidthPercent(100);
          };
          if (control.FAlign === pas["WEBLib.Controls"].TAlign.alClient) {
            control.SetWidthStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
            control.SetHeightStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
            control.SetWidthPercent(100);
            control.SetHeightPercent(100);
          };
          row = this.FTblBody.childNodes.item(j);
          if ((row != null) && (j < this.FRowCollection.GetCount())) {
            row.setAttribute("height",this.FRowCollection.GetItem$1(j).HeightAttribute());
            if (this.FRowCollection.GetItem$1(j).FElementClassName !== "") {
              row.setAttribute("class",this.FRowCollection.GetItem$1(j).FElementClassName)}
             else row.removeAttribute("class");
          };
          if (control.GetElementHandle() != null) fragment.appendChild(control.GetElementHandle());
          destid = this.FName + "R" + pas.SysUtils.IntToStr(j) + "C" + pas.SysUtils.IntToStr(i);
          el = document.getElementById(destid);
          if (!(el != null)) {
            row = this.CreateRow(j);
            this.FTblBody.appendChild(row);
            el = document.getElementById(destid);
            if (this.FRowCollection.GetCount() > j) row.setAttribute("height",this.FRowCollection.GetItem$1(j).HeightAttribute());
          } else {
            if ((j === 0) && (i < this.FColumnCollection.GetCount())) {
              if (this.FColumnCollection.GetItem$1(i).FSizeStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute) {
                this.FTbl.removeAttribute("width");
                this.FTbl.removeAttribute("height");
              } else {
                this.FTbl.setAttribute("width","100%");
                this.FTbl.setAttribute("height","100%");
              };
              el.style.setProperty("width",this.FColumnCollection.GetItem$1(i).WidthAttribute());
            };
          };
          if (el != null) {
            el.appendChild(fragment);
            if (control.FAlign === pas["WEBLib.Controls"].TAlign.alTop) el.style.setProperty("vertical-align","top");
            if (control.FAlign === pas["WEBLib.Controls"].TAlign.alBottom) el.style.setProperty("vertical-align","bottom");
          };
          i += 1;
          if (i === this.FColumnCollection.GetCount()) {
            i = 0;
            j += 1;
          };
        };
      };
      for (var $l6 = 0, $end6 = this.FColumnCollection.GetCount() - 1; $l6 <= $end6; $l6++) {
        i = $l6;
        destid = this.FName + "R0C" + pas.SysUtils.IntToStr(i);
        el = document.getElementById(destid);
        if (el != null) el.style.setProperty("width",this.FColumnCollection.GetItem$1(i).WidthAttribute());
      };
      this.FColCount = this.FColumnCollection.GetCount();
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if ((this.GetElementHandle() != null) && !this.IsUpdating()) {
        this.GetElementHandle().style.setProperty("user-select","");
        if (this.FCursor === 0) this.GetElementHandle().style.setProperty("cursor","");
        if (this.FUpdateTable && (this.GetContainer() != null)) {
          this.GetContainer().appendChild(this.CreateTable());
          this.UpdateTable();
          this.FUpdateTable = false;
        };
      };
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.GetElementHandle().style.setProperty("border","1px dotted gray");
      };
      if (!this.GetIsLinked() && (this.FTbl != null)) {
        if (this.FColor !== -1) {
          this.FTbl.style.setProperty("background-color",pas["WEBLib.Graphics"].ColorToHTML(this.FColor))}
         else this.FTbl.style.removeProperty("background-color");
      };
    };
    this.RegisterParent = function (AValue) {
      pas["WEBLib.Controls"].TControl.RegisterParent.apply(this,arguments);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        if (pas.Classes.TComponentStateItem.csLoading in AValue.FComponentState) return;
        this.FControlCollection.Add$1().FControl = AValue;
        if (this.FControlCollection.GetCount() > (this.FColumnCollection.GetCount() * this.FRowCollection.GetCount())) {
          if (this.FExpandStyle === $mod.TGridPanelExpandStyle.esAddRows) {
            this.FRowCollection.Add$1()}
           else this.FColumnCollection.Add$1();
        };
        this.UpdateTable();
      };
    };
    this.TableChanged = function (Sender) {
      this.UpdateTable();
    };
    this.Notification = function (AComponent, Operation) {
      var i = 0;
      var destid = "";
      var el = null;
      if ((Operation === pas.Classes.TOperation.opRemove) && !(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) {
        for (var $l = this.FControlCollection.GetCount() - 1; $l >= 0; $l--) {
          i = $l;
          if (this.FControlCollection.GetItem$1(i).FControl === AComponent) {
            destid = this.FName + "R" + pas.SysUtils.IntToStr(this.FControlCollection.GetItem$1(i).FRow) + "C" + pas.SysUtils.IntToStr(this.FControlCollection.GetItem$1(i).FColumn);
            el = document.getElementById(destid);
            el.removeChild(el.firstChild);
            this.FControlCollection.GetItem$1(i).FControl = null;
            this.FControlCollection.Delete(i);
          };
        };
        this.UpdateTable();
      };
      pas["WEBLib.Menus"].TWebCustomControl.Notification.apply(this,arguments);
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FDesignTime = (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && !((pas.Classes.TComponentStateItem.csReading in this.FOwner.FComponentState) || (pas.Classes.TComponentStateItem.csLoading in this.FOwner.FComponentState));
      this.FEnablePropagation = true;
      this.FControlStyle = rtl.unionSet(this.FControlStyle,rtl.createSet(pas["WEBLib.Controls"].TControlStyleValue.csAcceptsControls));
      this.FUpdateTable = true;
      this.FColCount = -1;
      this.FRowCollection = $mod.TGridPanelRows.$create("Create$3",[this]);
      this.FRowCollection.FPropName = "RowCollection";
      if (this.FDesignTime && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        this.FRowCollection.Add$1();
        this.FRowCollection.GetItem$1(0).SetValue(100);
        this.FRowCollection.GetItem$1(0).SetSizeStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
      };
      this.FColumnCollection = $mod.TGridPanelColumns.$create("Create$3",[this]);
      this.FColumnCollection.FPropName = "ColumnCollection";
      if (this.FDesignTime && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        this.FColumnCollection.Add$1();
        this.FColumnCollection.Add$1();
        this.FColumnCollection.GetItem$1(0).SetValue(50);
        this.FColumnCollection.GetItem$1(1).SetValue(50);
        this.FColumnCollection.GetItem$1(0).SetSizeStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
        this.FColumnCollection.GetItem$1(1).SetSizeStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
      };
      this.FRowCollection.FOnChange = rtl.createCallback(this,"TableChanged");
      this.FColumnCollection.FOnChange = rtl.createCallback(this,"TableChanged");
      this.FControlCollection = $mod.TControlCollection.$create("Create$3",[this]);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(400);
        this.SetHeight(300);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FRowCollection");
      rtl.free(this,"FColumnCollection");
      rtl.free(this,"FControlCollection");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.AddControl = function (AControl) {
      this.FControlCollection.Add$1().FControl = AControl;
      AControl.SetParent(this);
      if (this.FControlCollection.GetCount() > (this.FColumnCollection.GetCount() * this.FRowCollection.GetCount())) {
        if (this.FExpandStyle === $mod.TGridPanelExpandStyle.esAddRows) {
          this.FRowCollection.Add$1()}
         else this.FColumnCollection.Add$1();
      };
    };
    this.RemoveControl = function (AControl) {
      var i = 0;
      var r = 0;
      var c = 0;
      var row = null;
      var d = 0.0;
      for (var $l = 0, $end = this.FControlCollection.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FControlCollection.GetItem$1(i).FControl === AControl) {
          r = this.FControlCollection.GetItem$1(i).FRow;
          c = this.FControlCollection.GetItem$1(i).FColumn;
          row = this.FTblBody.childNodes.item(r);
          row.childNodes.item(c).innerHTML = "";
          this.FControlCollection.Delete(i);
          break;
        };
      };
      if (this.FColumnCollection.GetCount() > 0) {
        d = this.FControlCollection.GetCount() / this.FColumnCollection.GetCount();
        if (pas.System.Frac(d) > 0) d = pas.System.Trunc(d + 1);
        while (d < this.FRowCollection.GetCount()) {
          this.FRowCollection.Delete(this.FRowCollection.GetCount() - 1);
        };
      };
    };
    this.EndUpdate = function () {
      pas["WEBLib.Controls"].TCustomControl.EndUpdate.call(this);
      this.UpdateTable();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("ControlCollection",2,$mod.$rtti["TControlCollection"],"FControlCollection","SetControlCollection");
    $r.addProperty("ColumnCollection",2,$mod.$rtti["TGridPanelColumns"],"FColumnCollection","SetColumnCollection");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("ExpandStyle",0,$mod.$rtti["TGridPanelExpandStyle"],"FExpandStyle","FExpandStyle",{Default: $mod.TGridPanelExpandStyle.esAddRows});
    $r.addProperty("GridLineWidth",0,rtl.longint,"FGridLineWidth","FGridLineWidth",{Default: 0});
    $r.addProperty("GridLineColor",0,pas["WEBLib.Graphics"].$rtti["TColor"],"FGridLineColor","FGridLineColor",{Default: 0});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("RowCollection",2,$mod.$rtti["TGridPanelRows"],"FRowCollection","SetRowCollection");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
  });
  rtl.createClass(this,"TWebGridPanel",this.TGridPanel,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.TMultiMediaType = {"0": "mtVideo", mtVideo: 0, "1": "mtAudio", mtAudio: 1};
  this.$rtti.$Enum("TMultiMediaType",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TMultiMediaType});
  this.TMultiMediaControl = {"0": "mcFullscreen", mcFullscreen: 0, "1": "mcDownload", mcDownload: 1, "2": "mcRemoteplayback", mcRemoteplayback: 2, "3": "mcPlaybackrate", mcPlaybackrate: 3, "4": "mcPictureInPicture", mcPictureInPicture: 4};
  this.$rtti.$Enum("TMultiMediaControl",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TMultiMediaControl});
  this.$rtti.$Set("TMultiMediaControls",{comptype: this.$rtti["TMultiMediaControl"]});
  this.$rtti.$Int("TMultiMediaVolume",{minvalue: 0, maxvalue: 100, ordtype: 1});
  this.TMultiMediaPreload = {"0": "mpAuto", mpAuto: 0, "1": "mpNone", mpNone: 1, "2": "mpMetadata", mpMetadata: 2};
  this.$rtti.$Enum("TMultiMediaPreload",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TMultiMediaPreload});
  rtl.createClass(this,"TMultimediaPlayer",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FURL = "";
      this.FMultimediaType = 0;
      this.FAutoPlay = false;
      this.FControls$1 = false;
      this.FMuted = false;
      this.FLoop = false;
      this.FVolume = 0;
      this.FPlaybackRate = 0.0;
      this.FContextMenu = false;
      this.FPoster = "";
      this.FHideControls = {};
      this.FPreload = 0;
    };
    this.$final = function () {
      this.FHideControls = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetAutoPlay = function (Value) {
      if (this.FAutoPlay !== Value) {
        this.FAutoPlay = Value;
        this.UpdateElement();
      };
    };
    this.SetControls = function (Value) {
      if (this.FControls$1 !== Value) {
        this.FControls$1 = Value;
        this.UpdateElement();
      };
    };
    this.SetMuted = function (Value) {
      var el = null;
      if (this.FMuted !== Value) {
        this.FMuted = Value;
        if (this.GetElementHandle() != null) {
          el = this.GetElementHandle();
          el.muted = Value;
        };
      };
    };
    this.SetLoop = function (Value) {
      var el = null;
      if (this.FLoop !== Value) {
        this.FLoop = Value;
        if (this.GetElementHandle() != null) {
          el = this.GetElementHandle();
          el.loop = Value;
        };
      };
    };
    this.SetURL = function (Value) {
      if (this.FURL !== Value) {
        this.FURL = Value;
        this.UpdateElement();
      };
    };
    this.SetVolume = function (Value) {
      var el = null;
      if ((this.FVolume !== Value) && (Value >= 0) && (Value <= 100)) {
        this.FVolume = Value;
        if (this.GetElementHandle() != null) {
          el = this.GetElementHandle();
          el.volume = Value/100;
        };
      };
    };
    this.GetCurrentTime = function () {
      var Result = 0.0;
      var el = null;
      var i = 0.0;
      el = this.GetElementHandle();
      if (el != null) {
        i = el.currentTime;
      };
      Result = i;
      return Result;
    };
    this.SetCurrentTime = function (Value) {
      var el = null;
      el = this.GetElementHandle();
      if (el != null) el.currentTime = Value;
    };
    this.GetDuration = function () {
      var Result = 0.0;
      var el = null;
      var i = 0.0;
      el = this.GetElementHandle();
      if (el != null) {
        i = el.duration;
      };
      Result = i;
      return Result;
    };
    this.GetEnded = function () {
      var Result = false;
      var el = null;
      var e = false;
      el = this.GetElementHandle();
      if (el != null) {
        e = el.ended;
      };
      Result = e;
      return Result;
    };
    this.GetPaused = function () {
      var Result = false;
      var el = null;
      var e = false;
      el = this.GetElementHandle();
      if (el != null) {
        e = el.paused;
      };
      Result = e;
      return Result;
    };
    this.SetPlaybackRate = function (Value) {
      if (this.FPlaybackRate !== Value) {
        this.FPlaybackRate = Value;
        this.UpdateElement();
      };
    };
    this.SetContextMenu = function (Value) {
      if (this.FContextMenu !== Value) {
        this.FContextMenu = Value;
        this.UpdateElement();
      };
    };
    this.SetPoster = function (Value) {
      var el = null;
      if (this.FPoster !== Value) {
        this.FPoster = Value;
        if (this.GetElementHandle() != null) {
          el = this.GetElementHandle();
          el.poster = Value;
        };
      };
    };
    this.SetHideControls = function (Value) {
      if (rtl.neSet(this.FHideControls,Value)) {
        this.FHideControls = rtl.refSet(Value);
        this.UpdateElement();
      };
    };
    this.SetPreload = function (Value) {
      var s = "";
      var el = null;
      if (this.FPreload !== Value) {
        this.FPreload = Value;
        if (this.GetElementHandle() != null) {
          el = this.GetElementHandle();
          var $tmp = Value;
          if ($tmp === $mod.TMultiMediaPreload.mpNone) {
            s = "none"}
           else if ($tmp === $mod.TMultiMediaPreload.mpAuto) {
            s = "auto"}
           else if ($tmp === $mod.TMultiMediaPreload.mpMetadata) s = "metadata";
          el.preload = s;
        };
      };
    };
    this.CreateElement = function () {
      var Result = null;
      var el = null;
      var src = null;
      var p = "";
      if (this.FMultimediaType === $mod.TMultiMediaType.mtVideo) {
        el = document.createElement("VIDEO")}
       else el = document.createElement("AUDIO");
      src = document.createElement("SOURCE");
      var $tmp = this.FPreload;
      if ($tmp === $mod.TMultiMediaPreload.mpNone) {
        p = "none"}
       else if ($tmp === $mod.TMultiMediaPreload.mpAuto) {
        p = "auto"}
       else if ($tmp === $mod.TMultiMediaPreload.mpMetadata) p = "metadata";
      el.defaultPlaybackRate = this.FPlaybackRate;
      el.preload = p;
      el.appendChild(src);
      Result = el;
      return Result;
    };
    this.UpdateElement = function () {
      var $Self = this;
      var el = null;
      var vid = null;
      var nocontrols = "";
      function booltoattr(b) {
        var Result = "";
        if (b) {
          Result = "true"}
         else Result = "false";
        return Result;
      };
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.GetElementHandle() != null) {
        vid = this.GetElementHandle();
        vid.controls = this.FControls;
        vid.defaultPlaybackRate = this.FPlaybackRate;
        vid.playbackRate = this.FPlaybackRate;
        vid.muted = this.FMuted;
        if (this.FControls$1) {
          this.GetElementHandle().setAttribute("controls","")}
         else this.GetElementHandle().removeAttribute("controls");
        if (this.FAutoPlay) {
          this.GetElementHandle().setAttribute("autoplay",booltoattr(this.FAutoPlay))}
         else this.GetElementHandle().removeAttribute("autoplay");
        if (this.FMuted) {
          this.GetElementHandle().setAttribute("muted",booltoattr(this.FMuted))}
         else this.GetElementHandle().removeAttribute("muted");
        if (!this.FContextMenu) {
          this.GetElementHandle().setAttribute("oncontextmenu","return false;")}
         else this.GetElementHandle().removeAttribute("oncontextmenu");
        this.GetElementHandle().setAttribute("volume",pas["WEBLib.Utils"].FormatProp("%.2f",pas.System.VarRecs(3,this.FVolume / 100)));
        this.GetElementHandle().setAttribute("src",this.FURL);
        nocontrols = "";
        if ($mod.TMultiMediaControl.mcFullscreen in this.FHideControls) nocontrols = "nofullscreen ";
        if ($mod.TMultiMediaControl.mcDownload in this.FHideControls) nocontrols = nocontrols + "nodownload ";
        if ($mod.TMultiMediaControl.mcRemoteplayback in this.FHideControls) nocontrols = nocontrols + "noremoteplayback ";
        if ($mod.TMultiMediaControl.mcPlaybackrate in this.FHideControls) nocontrols = nocontrols + "noplaybackrate ";
        if (nocontrols !== "") {
          this.GetElementHandle().setAttribute("controlsList",nocontrols)}
         else if (this.GetElementHandle().hasAttribute("controlsList")) this.GetElementHandle().removeAttribute("controlsList");
        if ($mod.TMultiMediaControl.mcPictureInPicture in this.FHideControls) {
          this.GetElementHandle().setAttribute("disablePictureInPicture","")}
         else if (this.GetElementHandle().hasAttribute("disablePictureInPicture")) this.GetElementHandle().removeAttribute("disablePictureInPicture");
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FVolume = 100;
      this.FPlaybackRate = 1;
      this.FMuted = false;
      this.FAutoPlay = false;
      this.FContextMenu = true;
      this.FPreload = $mod.TMultiMediaPreload.mpAuto;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(400);
        this.SetHeight(300);
      };
    };
    this.Play = function () {
      var el = null;
      el = this.GetElementHandle();
      if (el != null) el.play();
    };
    this.Pause = function () {
      var el = null;
      el = this.GetElementHandle();
      if (el != null) {
        el.pause();
      };
    };
    this.ReLoad = function () {
      var el = null;
      el = this.GetElementHandle();
      if (el != null) el.load();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("AutoPlay",2,rtl.boolean,"FAutoPlay","SetAutoPlay");
    $r.addProperty("Controls",2,rtl.boolean,"FControls$1","SetControls");
    $r.addProperty("ContextMenu",2,rtl.boolean,"FContextMenu","SetContextMenu",{Default: true});
    $r.addProperty("HideControls",2,$mod.$rtti["TMultiMediaControls"],"FHideControls","SetHideControls");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Loop",2,rtl.boolean,"FLoop","SetLoop");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("MultimediaType",0,$mod.$rtti["TMultiMediaType"],"FMultimediaType","FMultimediaType");
    $r.addProperty("Muted",2,rtl.boolean,"FMuted","SetMuted");
    $r.addProperty("PlaybackRate",2,rtl.double,"FPlaybackRate","SetPlaybackRate");
    $r.addProperty("Poster",2,rtl.string,"FPoster","SetPoster");
    $r.addProperty("Preload",2,$mod.$rtti["TMultiMediaPreload"],"FPreload","SetPreload");
    $r.addProperty("URL",2,rtl.string,"FURL","SetURL");
    $r.addProperty("Volume",2,$mod.$rtti["TMultiMediaVolume"],"FVolume","SetVolume");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
  });
  rtl.createClass(this,"TWebMultiMediaPlayer",this.TMultimediaPlayer,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"THTMLContainer",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FHTML = null;
      this.FScrollStyle = 0;
      this.FURL = "";
      this.FOnLoaded = null;
    };
    this.$final = function () {
      this.FHTML = undefined;
      this.FOnLoaded = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetHTML = function (Value) {
      this.FHTML.Assign(Value);
    };
    this.SetURL = function (Value) {
      this.FURL = Value;
      this.LoadFromURL(this.FURL);
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      return Result;
    };
    this.UpdateElement = function () {
      var TextFound = false;
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (!this.IsUpdating() && (this.GetElementHandle() != null) && (this.GetContainer() != null)) {
        if (this.FElementClassName !== "") {
          this.GetElementHandle().style.removeProperty("border");
          this.GetElementHandle().style.removeProperty("background-color");
        } else this.GetElementHandle().style.setProperty("white-space","normal");
        if (this.FHTML != null) {
          TextFound = this.FHTML.GetTextStr() !== "";
          this.GetContainer().innerHTML = this.FHTML.GetTextStr();
        };
        if (!this.GetIsLinked() && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) this.RenderDesigning(this.$classname,this.GetContainer(),this,!TextFound,"");
        var $tmp = this.FScrollStyle;
        if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssBoth) {
          this.GetElementHandle().style.setProperty("overflow","auto")}
         else if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssNone) {
          this.GetElementHandle().style.setProperty("overflow","")}
         else if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssVertical) {
          this.GetElementHandle().style.setProperty("overflow-y","auto")}
         else if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssHorizontal) this.GetElementHandle().style.setProperty("overflow-x","auto");
      };
    };
    this.HTMLChanged = function (Sender) {
      this.UpdateElement();
    };
    this.DoLoaded = function () {
      if (this.FOnLoaded != null) this.FOnLoaded(this);
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FHTML = pas.Classes.TStringList.$create("Create$1");
      this.FHTML.SetSkipLastLineBreak(true);
      this.FHTML.FOnChange = rtl.createCallback(this,"HTMLChanged");
      this.FScrollStyle = pas["WEBLib.Controls"].TScrollStyle.ssBoth;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(240);
        this.SetHeight(160);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FHTML");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.LoadFromURL = function (AURL) {
      var $Self = this;
      var Result = null;
      var wr = null;
      Result = new Promise(function (ASuccess, AFailed) {
        wr = pas["WEBLib.REST"].TWebHTTPRequest.$create("Create$1",[$Self]);
        wr.FURL = AURL;
        wr.Execute$1(function (AResponse, ARequest) {
          $Self.FHTML.SetTextStr(AResponse);
          $Self.DoLoaded();
          ASuccess(true);
        },function (ARequest) {
          AFailed(false);
        });
      });
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("HTML",2,pas.Classes.$rtti["TStringList"],"FHTML","SetHTML");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ScrollStyle",0,pas["WEBLib.Controls"].$rtti["TScrollStyle"],"FScrollStyle","FScrollStyle");
    $r.addProperty("URL",2,rtl.string,"FURL","SetURL");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnLoaded",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnLoaded","FOnLoaded");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TWebHTMLContainer",this.THTMLContainer,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"THTMLForm",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FOnSubmit = null;
      this.FAction = "";
    };
    this.$final = function () {
      this.FOnSubmit = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetAction = function (Value) {
      var el = null;
      this.FAction = Value;
      if (!(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) {
        if (this.GetIsLinked()) {
          el = this.GetElementHandle()}
         else el = this.GetChildContainer();
        if (el != null) el.setAttribute("action",this.FAction);
      };
    };
    this.UpdateElement = function () {
      if (!(this.GetElementHandle() != null)) return;
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) this.GetElementHandle().style.setProperty("background","repeating-linear-gradient(45deg,#EEEEEE 10px,#EEEEEE 10px, #ffffff 20px)");
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      Result.appendChild(document.createElement("FORM"));
      return Result;
    };
    this.DoHandleSubmit = function (Event) {
      var Result = false;
      this.FElementEvent = Event;
      if (this.FOnSubmit != null) this.FOnSubmit(this);
      Result = true;
      return Result;
    };
    this.GetChildContainer = function () {
      var Result = null;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        Result = this.GetElementHandle()}
       else {
        if (this.GetIsLinked()) {
          Result = this.GetElementHandle()}
         else Result = this.GetElementHandle().firstChild;
      };
      return Result;
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      this.GetChildContainer().addEventListener("submit",rtl.createSafeCallback(this,"DoHandleSubmit"));
    };
    this.CheckValidity = function () {
      var Result = false;
      var el = null;
      var res = false;
      el = this.GetElementHandle();
      res = el.checkValidity();
      Result = res;
      return Result;
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FEnablePropagation = true;
      this.FControlStyle = rtl.unionSet(this.FControlStyle,rtl.createSet(pas["WEBLib.Controls"].TControlStyleValue.csAcceptsControls));
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(400);
        this.SetHeight(300);
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Action",2,rtl.string,"FAction","SetAction");
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnSubmit",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnSubmit","FOnSubmit");
  });
  rtl.createClass(this,"TWebHTMLForm",this.THTMLForm,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TBadge",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FTextColor = 0;
      this.FText = "";
    };
    this.SetTextColor = function (Value) {
      this.FTextColor = Value;
      this.UpdateElement();
    };
    this.SetText = function (Value) {
      this.FText = Value;
      this.UpdateElement();
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("SPAN");
      return Result;
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().innerHTML = this.FText;
        if (this.FElementClassName === "") {
          this.GetElementHandle().setAttribute("class","tmsbadge");
          this.GetElementHandle().style.setProperty("color",pas["WEBLib.Graphics"].ColorToHTML(this.FTextColor));
        } else {
          this.GetElementHandle().style.removeProperty("color");
        };
        this.GetElementHandle().style.removeProperty("width");
        this.GetElementHandle().style.removeProperty("height");
      };
    };
    this.SetElementClassName = function (AValue) {
      pas["WEBLib.Controls"].TControl.SetElementClassName.apply(this,arguments);
      this.UpdateElement();
    };
    this.CreateInitialize = function () {
      var css = "";
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetColor(255);
      this.FTextColor = 16777215;
      this.FText = "1";
      css = "span.tmsbadge {" + "  background: #FF0000;" + "  border-radius: 0.8em;" + "  -moz-border-radius: 0.8em;" + "  -webkit-border-radius: 0.8em;" + "  color: #ffffff;" + "  display: inline-block;" + "  line-height: 1.6em;" + "  margin-right: 5px;" + "  text-align: center;" + "  width: 1.6em;" + "}";
      this.AddControlStyle(css);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(20);
        this.SetHeight(20);
      };
    };
    this.Destroy = function () {
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor",{Default: 255});
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("Text",2,rtl.string,"FText","SetText");
    $r.addProperty("TextColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FTextColor","SetTextColor");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
  });
  rtl.createClass(this,"TWebBadge",this.TBadge,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TAccordionSection",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FCaption = "";
      this.FContent = "";
      this.FTag = 0;
      this.FExpanded = false;
      this.FControl = null;
    };
    this.$final = function () {
      this.FControl = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetExpanded = function (Value) {
      if (this.FExpanded !== Value) {
        this.FExpanded = Value;
        if (this.FExpanded) {
          rtl.as(rtl.as(this.FCollection,$mod.TAccordionSections).Owner(),$mod.TAccordion).Expand(this)}
         else rtl.as(rtl.as(this.FCollection,$mod.TAccordionSections).Owner(),$mod.TAccordion).Collapse(this);
      };
    };
    this.SetCaption = function (Value) {
      this.FCaption = Value;
      rtl.as(this.FCollection,$mod.TAccordionSections).Update(this);
    };
    this.SetContent = function (Value) {
      this.FContent = Value;
      rtl.as(this.FCollection,$mod.TAccordionSections).Update(this);
    };
    this.Assign = function (Source) {
      if ($mod.TAccordionSection.isPrototypeOf(Source)) {
        this.FCaption = rtl.as(Source,$mod.TAccordionSection).FCaption;
        this.FContent = rtl.as(Source,$mod.TAccordionSection).FContent;
        this.FTag = rtl.as(Source,$mod.TAccordionSection).FTag;
      };
    };
    this.CaptionElement = function () {
      var Result = null;
      Result = document.getElementById(rtl.as(rtl.as(this.FCollection,$mod.TAccordionSections).Owner(),$mod.TAccordion).FName + "_" + pas.SysUtils.IntToStr(this.GetIndex()));
      return Result;
    };
    this.PanelElement = function () {
      var Result = null;
      var el = null;
      el = this.CaptionElement();
      Result = el.nextElementSibling;
      return Result;
    };
    var $r = this.$rtti;
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("Content",2,rtl.string,"FContent","SetContent");
    $r.addProperty("Tag",0,rtl.longint,"FTag","FTag");
  });
  rtl.createClass(this,"TAccordionSections",pas.Classes.TOwnedCollection,function () {
    this.$init = function () {
      pas.Classes.TOwnedCollection.$init.call(this);
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TOwnedCollection.$final.call(this);
    };
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.Update = function (Item) {
      pas.Classes.TCollection.Update.apply(this,arguments);
      if ((this.FOnChange != null) && (this.FUpdateCount === 0)) this.FOnChange(this);
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TAccordionSection);
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
  this.$rtti.$MethodVar("TAccordionSectionEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ASection",this.$rtti["TAccordionSection"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TAccordionSectionAllowEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ASection",this.$rtti["TAccordionSection"]],["Allow",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$MethodVar("TAccordionSectionRenderEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ASection",this.$rtti["TAccordionSection"]],["ACaption",pas["WEBLib.Controls"].$rtti["TJSHTMLElementRecord"]],["APanel",pas["WEBLib.Controls"].$rtti["TJSHTMLElementRecord"]]]), methodkind: 0});
  rtl.createClass(this,"TAccordion",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FStyleRendered = false;
      this.FSections = null;
      this.FOnCollapsing = null;
      this.FOnExpanding = null;
      this.FOnCollapsed = null;
      this.FOnExpanded = null;
      this.FOnRenderSection = null;
      this.FElementSectionClassName = "";
      this.FElementContentClassName = "";
    };
    this.$final = function () {
      this.FSections = undefined;
      this.FOnCollapsing = undefined;
      this.FOnExpanding = undefined;
      this.FOnCollapsed = undefined;
      this.FOnExpanded = undefined;
      this.FOnRenderSection = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetSections = function (Value) {
      this.FSections.Assign(Value);
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      return Result;
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
    };
    this.RenderAccordion = function () {
      var i = 0;
      var sp = null;
      var btn = null;
      var divel = null;
      var p = null;
      var LCaptionElementRec = pas["WEBLib.Controls"].TJSHTMLElementRecord.$new();
      var LPanelElementRec = pas["WEBLib.Controls"].TJSHTMLElementRecord.$new();
      if (this.GetElementHandle().childNodes.length > 0) {
        while (this.GetElementHandle().firstChild != null) this.GetElementHandle().removeChild(this.GetElementHandle().firstChild);
        if (this.FElementClassName !== "") {
          this.GetElementHandle().style.removeProperty("border");
          this.GetElementHandle().style.removeProperty("background-color");
        };
      };
      sp = document.createElement("SPAN");
      this.GetElementHandle().appendChild(sp);
      for (var $l = 0, $end = this.FSections.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        btn = document.createElement("BUTTON");
        btn.innerHTML = this.FSections.GetItem$1(i).FCaption;
        btn.setAttribute("id",this.FName + "_" + pas.SysUtils.IntToStr(i));
        btn.setAttribute("class","accordion_" + this.FName);
        if (this.FElementSectionClassName !== "") btn.classList.add(this.FElementSectionClassName);
        btn.addEventListener("click",rtl.createSafeCallback(this,"DoAccordionClick"));
        divel = document.createElement("DIV");
        divel.setAttribute("class","accordionpanel_" + this.FName);
        p = document.createElement("P");
        p.style.setProperty("user-select","text");
        if (this.FElementContentClassName !== "") p.setAttribute("class",this.FElementContentClassName);
        p.innerHTML = this.FSections.GetItem$1(i).FContent;
        sp.appendChild(btn);
        sp.appendChild(divel);
        divel.appendChild(p);
        if (this.FOnRenderSection != null) {
          LCaptionElementRec.element = btn;
          LPanelElementRec.element = p;
          this.FOnRenderSection(this,this.FSections.GetItem$1(i),pas["WEBLib.Controls"].TJSHTMLElementRecord.$clone(LCaptionElementRec),pas["WEBLib.Controls"].TJSHTMLElementRecord.$clone(LPanelElementRec));
        };
      };
      if (!this.GetIsLinked() && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) this.RenderDesigning(this.$classname,this.GetContainer(),this,this.FSections.GetCount() === 0,"");
    };
    this.RenderStyle = function () {
      var css = "";
      if (this.FStyleRendered) return;
      this.FStyleRendered = true;
      css = ".accordion_" + this.FName + " {" + "background-color: #eee;" + "color: #444;" + "cursor: pointer;" + "padding: 18px;" + "width: 100%;" + "text-align: left;" + "border: none;" + "outline: none;" + "transition: 0.4s;" + "}" + "\r\n" + ".accordionactive_" + this.FName + ", .accordion_" + this.FName + "::hover {" + "background-color: #ccc;" + "}" + "\r\n" + ".accordionactive_" + this.FName + "::before {" + "transform: rotate(90deg);" + "}" + "\r\n" + ".accordion_" + this.FName + "::before {" + '  content: "\\25B6";' + "  font-size: 13px;" + "  display: inline-block;" + "  margin-right: 5px;" + "}" + "\r\n" + ".accordionpanel_" + this.FName + " {" + "padding: 0 18px;" + "max-height: 0;" + "overflow: hidden;" + "transition: max-height 0.2s ease-out;" + "}";
      this.AddInstanceStyle(css);
    };
    this.SectionsChanged = function (Sender) {
      if (!this.IsUpdating()) {
        this.RenderStyle();
        this.RenderAccordion();
      };
    };
    this.DoAccordionClick = function (Event) {
      var Result = false;
      var el = null;
      var pnl = null;
      var s = "";
      var Allow = false;
      var ASection = null;
      var i = 0;
      var e = 0;
      el = Event.srcElement;
      Allow = true;
      ASection = null;
      if (el.hasAttribute("id")) {
        s = el.getAttribute("id");
        s = pas.System.Copy(s,pas.System.Pos(this.FName,s) + this.FName.length + 1,s.length);
        pas.System.val$6(s,{get: function () {
            return i;
          }, set: function (v) {
            i = v;
          }},{get: function () {
            return e;
          }, set: function (v) {
            e = v;
          }});
        if ((e === 0) && (i < this.FSections.GetCount())) ASection = this.FSections.GetItem$1(i);
      };
      if (el.classList.contains("accordionactive_" + this.FName)) {
        if (this.FOnCollapsing != null) this.FOnCollapsing(this,ASection,{get: function () {
            return Allow;
          }, set: function (v) {
            Allow = v;
          }});
      } else {
        if (this.FOnExpanding != null) this.FOnExpanding(this,ASection,{get: function () {
            return Allow;
          }, set: function (v) {
            Allow = v;
          }});
      };
      if (!Allow) return Result;
      el.classList.toggle("accordionactive_" + this.FName);
      pnl = el.nextElementSibling;
      if (ASection.FControl != null) {
        ASection.FControl.SetElementPosition(pas["WEBLib.Controls"].TElementPosition.epRelative);
        pnl.appendChild(ASection.FControl.GetElementHandle());
        ASection.FControl.SetVisible(true);
      };
      s = pnl.style.getPropertyValue("max-height");
      if ((s !== "0px") && (s !== "")) {
        pnl.style.setProperty("max-height","0");
      } else {
        pnl.style.setProperty("max-height",pas.SysUtils.IntToStr(pnl.scrollHeight) + "px");
      };
      if (el.classList.contains("accordionactive_" + this.FName)) {
        ASection.FExpanded = true;
        if (this.FOnExpanded != null) this.FOnExpanded(this,ASection);
      } else {
        ASection.FExpanded = false;
        if (this.FOnCollapsed != null) this.FOnCollapsed(this,ASection);
      };
      Result = true;
      return Result;
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      this.GetElementHandle().style.setProperty("overflow-y","auto");
      this.GetElementHandle().style.setProperty("overflow-x","hidden");
    };
    this.Expand = function (ASection) {
      var el = null;
      var pnl = null;
      var LClass = "";
      el = ASection.CaptionElement();
      LClass = "accordionactive_" + this.FName;
      if (!el.classList.contains(LClass)) el.classList.add(LClass);
      pnl = el.nextElementSibling;
      pnl.style.setProperty("max-height",pas.SysUtils.IntToStr(pnl.scrollHeight) + "px");
    };
    this.Collapse = function (ASection) {
      var el = null;
      var pnl = null;
      var LClass = "";
      el = ASection.CaptionElement();
      LClass = "accordionactive_" + this.FName;
      if (el.classList.contains(LClass)) el.classList.remove(LClass);
      pnl = el.nextElementSibling;
      pnl.style.setProperty("max-height","0");
    };
    this.SetElementClassName = function (AValue) {
      pas["WEBLib.Controls"].TControl.SetElementClassName.apply(this,arguments);
      if (this.FElementClassName !== "") this.RenderAccordion();
    };
    this.Loaded = function () {
      var i = 0;
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      for (var $l = 0, $end = this.FSections.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FSections.GetItem$1(i).FControl != null) this.FSections.GetItem$1(i).FControl.SetVisible(false);
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FSections = $mod.TAccordionSections.$create("Create$3",[this]);
      this.FSections.FOnChange = rtl.createCallback(this,"SectionsChanged");
      this.FSections.FPropName = "Sections";
      this.FStyleRendered = false;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(400);
        this.SetHeight(300);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FSections");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.EndUpdate = function () {
      pas["WEBLib.Controls"].TCustomControl.EndUpdate.call(this);
      this.RenderStyle();
      this.RenderAccordion();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("ElementSectionClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementSectionClassName","FElementSectionClassName");
    $r.addProperty("ElementContentClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementContentClassName","FElementContentClassName");
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("Sections",2,$mod.$rtti["TAccordionSections"],"FSections","SetSections");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnCollapsed",0,$mod.$rtti["TAccordionSectionEvent"],"FOnCollapsed","FOnCollapsed");
    $r.addProperty("OnCollapsing",0,$mod.$rtti["TAccordionSectionAllowEvent"],"FOnCollapsing","FOnCollapsing");
    $r.addProperty("OnExpanded",0,$mod.$rtti["TAccordionSectionEvent"],"FOnExpanded","FOnExpanded");
    $r.addProperty("OnExpanding",0,$mod.$rtti["TAccordionSectionAllowEvent"],"FOnExpanding","FOnExpanding");
    $r.addProperty("OnRenderSection",0,$mod.$rtti["TAccordionSectionRenderEvent"],"FOnRenderSection","FOnRenderSection");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
  });
  rtl.createClass(this,"TWebAccordion",this.TAccordion,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.TGridStyle = {"0": "gTemplateColumns", gTemplateColumns: 0, "1": "gTemplateRows", gTemplateRows: 1};
  this.$rtti.$Enum("TGridStyle",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TGridStyle});
  rtl.createClass(this,"TResponsiveLayoutItem",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FWidth = 0;
      this.FStyleType = 0;
      this.FStyle = "";
      this.FColumnGap = "";
      this.FRowGap = "";
      this.FTag = 0;
      this.FDescription = "";
      this.FMargins = null;
    };
    this.$final = function () {
      this.FMargins = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.SetMargins = function (Value) {
      this.FMargins.Assign(Value);
      this.FCollection.Update(this);
    };
    this.SetColumnGap = function (Value) {
      if (this.FColumnGap !== Value) {
        this.FColumnGap = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetRowGap = function (Value) {
      if (this.FRowGap !== Value) {
        this.FRowGap = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetStyle = function (Value) {
      if (this.FStyle !== Value) {
        this.FStyle = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetStyleType = function (Value) {
      if (this.FStyleType !== Value) {
        this.FStyleType = Value;
        this.FCollection.Update(this);
      };
    };
    this.SetWidth = function (Value) {
      if (this.FWidth !== Value) {
        this.FWidth = Value;
        this.FCollection.Update(this);
      };
    };
    this.Create$1 = function (AOwner) {
      this.FMargins = pas["WEBLib.Controls"].TMargins.$create("Create$1");
      this.FMargins.SetLeft(0);
      this.FMargins.SetTop(0);
      this.FMargins.SetRight(0);
      this.FMargins.SetBottom(0);
      pas.Classes.TCollectionItem.Create$1.apply(this,arguments);
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FMargins");
      pas.Classes.TCollectionItem.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TResponsiveLayoutItem.isPrototypeOf(Source)) {
        this.FColumnGap = rtl.as(Source,$mod.TResponsiveLayoutItem).FColumnGap;
        this.FDescription = rtl.as(Source,$mod.TResponsiveLayoutItem).FDescription;
        this.FRowGap = rtl.as(Source,$mod.TResponsiveLayoutItem).FRowGap;
        this.FWidth = rtl.as(Source,$mod.TResponsiveLayoutItem).FWidth;
        this.FStyle = rtl.as(Source,$mod.TResponsiveLayoutItem).FStyle;
        this.FStyleType = rtl.as(Source,$mod.TResponsiveLayoutItem).FStyleType;
        this.FTag = rtl.as(Source,$mod.TResponsiveLayoutItem).FTag;
        this.FMargins.Assign(rtl.as(Source,$mod.TResponsiveLayoutItem).FMargins);
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TCollection"]]]);
    $r.addProperty("ColumnGap",2,rtl.string,"FColumnGap","SetColumnGap");
    $r.addProperty("Description",0,rtl.string,"FDescription","FDescription");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("RowGap",2,rtl.string,"FRowGap","SetRowGap");
    $r.addProperty("StyleType",2,$mod.$rtti["TGridStyle"],"FStyleType","SetStyleType");
    $r.addProperty("Style",2,rtl.string,"FStyle","SetStyle");
    $r.addProperty("Tag",0,rtl.longint,"FTag","FTag");
    $r.addProperty("Width",2,rtl.longint,"FWidth","SetWidth");
  });
  rtl.createClass(this,"TResponsiveLayout",pas.Classes.TOwnedCollection,function () {
    this.$init = function () {
      pas.Classes.TOwnedCollection.$init.call(this);
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TOwnedCollection.$final.call(this);
    };
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.Update = function (Item) {
      pas.Classes.TCollection.Update.apply(this,arguments);
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.GetLayoutForWidth = function (w) {
      var Result = null;
      var i = 0;
      var d = 0;
      var j = 0;
      var l = 0;
      var mx = 0;
      Result = null;
      if (this.GetCount() === 0) return Result;
      d = 0xFFFF;
      j = -1;
      mx = 0;
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.GetItem$1(i).FWidth > mx) {
          mx = this.GetItem$1(i).FWidth;
          l = i;
        };
        if (w < this.GetItem$1(i).FWidth) {
          if ((this.GetItem$1(i).FWidth - w) < d) {
            d = this.GetItem$1(i).FWidth - w;
            j = i;
          };
        };
      };
      if (j === -1) j = l;
      Result = this.GetItem$1(j);
      return Result;
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TResponsiveLayoutItem);
      return this;
    };
    this.Add$1 = function (AWidth, AStyle) {
      var Result = null;
      Result = this.Add$2();
      Result.SetWidth(AWidth);
      Result.SetStyle(AStyle);
      return Result;
    };
    this.Add$2 = function () {
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
  this.$rtti.$MethodVar("TResponsiveLayoutChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ALayout",this.$rtti["TResponsiveLayoutItem"]]]), methodkind: 0});
  rtl.createClass(this,"TResponsiveGridPanel",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FDesignTime = false;
      this.FLabel = null;
      this.FLayout = null;
      this.FActiveLayoutItem = null;
      this.FOldWidth = 0;
      this.FControlCollection = null;
      this.FOnLayoutChange = null;
      this.FResizePtr = null;
    };
    this.$final = function () {
      this.FLabel = undefined;
      this.FLayout = undefined;
      this.FActiveLayoutItem = undefined;
      this.FControlCollection = undefined;
      this.FOnLayoutChange = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetControlCollection = function (Value) {
      this.FControlCollection.Assign(Value);
    };
    this.HandleResize = function (Event) {
      var Result = false;
      var w = 0;
      if (pas.Classes.TComponentStateItem.csDestroying in this.FComponentState) return Result;
      Result = true;
      w = this.GetWidth();
      if (this.FOldWidth !== w) {
        this.FOldWidth = w;
        this.Resize();
      };
      return Result;
    };
    this.SetResponsiveStyle = function () {
      var li = null;
      var w = 0;
      var lGap = "";
      if (!(this.FLayout != null)) return;
      if (pas.Classes.TComponentStateItem.csDestroying in this.FComponentState) return;
      if (!(this.GetElementHandle() != null)) return;
      w = this.GetWidth();
      li = this.FLayout.GetLayoutForWidth(w);
      if (li != null) {
        if (li.FStyleType === $mod.TGridStyle.gTemplateColumns) {
          this.GetElementHandle().style.setProperty("grid-template-columns",li.FStyle);
          this.GetElementHandle().style.removeProperty("grid-template-rows");
        } else {
          this.GetElementHandle().style.removeProperty("grid-template-columns");
          this.GetElementHandle().style.setProperty("grid-template-rows",li.FStyle);
        };
        lGap = li.FRowGap;
        if (pas["WEBLib.Utils"].TStringHelper.IsNumber.call({get: function () {
            return lGap;
          }, set: function (v) {
            lGap = v;
          }})) lGap = lGap + "px";
        this.GetElementHandle().style.setProperty("grid-row-gap",lGap);
        lGap = li.FColumnGap;
        if (pas["WEBLib.Utils"].TStringHelper.IsNumber.call({get: function () {
            return lGap;
          }, set: function (v) {
            lGap = v;
          }})) lGap = lGap + "px";
        this.GetElementHandle().style.setProperty("grid-column-gap",lGap);
        this.GetElementHandle().style.setProperty("padding-left",pas.SysUtils.IntToStr(li.FMargins.FLeft) + "px");
        this.GetElementHandle().style.setProperty("padding-top",pas.SysUtils.IntToStr(li.FMargins.FTop) + "px");
        this.GetElementHandle().style.setProperty("padding-right",pas.SysUtils.IntToStr(li.FMargins.FRight) + "px");
        this.GetElementHandle().style.setProperty("padding-bottom",pas.SysUtils.IntToStr(li.FMargins.FBottom) + "px");
      };
      if (li !== this.FActiveLayoutItem) {
        this.FActiveLayoutItem = li;
        if (this.FOnLayoutChange != null) this.FOnLayoutChange(this,this.FActiveLayoutItem);
      };
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      this.FResizePtr = rtl.createCallback(this,"HandleResize");
      document.defaultView.addEventListener("resize",this.FResizePtr);
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.FResizePtr != null) {
        document.defaultView.removeEventListener("resize",this.FResizePtr);
        this.FResizePtr = null;
      };
    };
    this.UpdateControls = function () {
      var i = 0;
      var j = 0;
      var k = 0;
      var el = null;
      var sp = null;
      var fragment = null;
      var control = null;
      if (pas.Classes.TComponentStateItem.csLoading in this.FComponentState) return;
      if (this.IsUpdating()) return;
      if (!(this.GetElementHandle() != null)) return;
      if ((this.FControlCollection.GetCount() > 0) && (this.FLabel != null)) {
        this.GetElementHandle().removeChild(this.FLabel);
        this.FLabel = null;
        this.GetElementHandle().style.setProperty("display","grid");
      };
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        for (var $l = this.GetElementHandle().childElementCount - 1; $l >= 0; $l--) {
          i = $l;
          if (this.GetElementHandle().children.item(i).tagName === "SPAN") this.GetElementHandle().removeChild(this.GetElementHandle().children.item(i));
        };
        for (var $l1 = 0, $end = this.FLayout.GetCount() - 1; $l1 <= $end; $l1++) {
          i = $l1;
          sp = document.createElement("SPAN");
          sp.style.setProperty("position","absolute");
          sp.style.setProperty("width","4px");
          sp.style.setProperty("height","12px");
          sp.style.setProperty("background-color","red");
          sp.style.setProperty("top","0px");
          sp.style.setProperty("left",pas.SysUtils.IntToStr(this.FLayout.GetItem$1(i).FWidth) + "px");
          this.GetElementHandle().appendChild(sp);
        };
      };
      for (var $l2 = 0, $end1 = this.FControlCollection.GetCount() - 1; $l2 <= $end1; $l2++) {
        i = $l2;
        if (this.GridElementCount() <= i) {
          el = document.createElement("DIV");
          el.setAttribute("data","grid");
          if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) el.style.setProperty("border","1px silver dotted");
          this.GetElementHandle().appendChild(el);
        } else {
          k = 0;
          for (var $l3 = 0, $end2 = this.GetElementHandle().childElementCount - 1; $l3 <= $end2; $l3++) {
            j = $l3;
            el = this.GetElementHandle().children.item(j);
            if (el.getAttribute("data") === "grid") {
              if (k === i) {
                break}
               else k += 1;
            };
          };
        };
        fragment = document.createDocumentFragment();
        control = this.FControlCollection.GetItem$1(i).FControl;
        if (control != null) {
          control.SetElementPosition(pas["WEBLib.Controls"].TElementPosition.epRelative);
          control.SetChildOrderEx(-1);
          if (control.GetElementHandle() != null) {
            fragment.appendChild(control.GetElementHandle());
            el.appendChild(fragment);
          };
        };
      };
      this.UpdateElement();
    };
    this.CreateElement = function () {
      var Result = null;
      if ((pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && (this.FControlCollection.GetCount() === 0)) {
        Result = document.createElement("DIV");
        this.FLabel = document.createElement("DIV");
        this.FLabel.innerHTML = this.$classname;
        this.SetBorderStyle(pas["WEBLib.Controls"].TBorderStyle.bsSingle);
        this.FLabel.setAttribute("align","center");
        this.FLabel.style.setProperty("border","1px solid silver");
        this.FLabel.style.setProperty("vertical-align","middle");
        this.FLabel.style.setProperty("display","table-cell");
        Result.appendChild(this.FLabel);
      } else {
        Result = document.createElement("DIV");
      };
      return Result;
    };
    this.GridElementCount = function () {
      var Result = 0;
      var i = 0;
      var el = null;
      Result = 0;
      for (var $l = 0, $end = this.GetElementHandle().childElementCount - 1; $l <= $end; $l++) {
        i = $l;
        el = this.GetElementHandle().children.item(i);
        if (el.getAttribute("data") === "grid") Result += 1;
      };
      return Result;
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (pas.Classes.TComponentStateItem.csDestroying in this.FComponentState) return;
      if (!(this.GetElementHandle() != null)) return;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        if (this.FControlCollection.GetCount() === 0) {
          this.GetElementHandle().style.setProperty("display","table");
          if (this.FColor === -1) this.GetElementHandle().style.setProperty("background-color","silver");
        };
      };
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.GetElementHandle().style.setProperty("border","1px silver dotted");
      };
      this.GetElementHandle().style.setProperty("display","grid");
      this.SetResponsiveStyle();
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      this.UpdateControls();
    };
    this.RegisterParent = function (AValue) {
      pas["WEBLib.Controls"].TControl.RegisterParent.apply(this,arguments);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        this.FControlCollection.Add$1().FControl = AValue;
        this.UpdateControls();
      };
    };
    this.Notification = function (AComponent, Operation) {
      var i = 0;
      var upd = false;
      var el = null;
      upd = false;
      if ((Operation === pas.Classes.TOperation.opRemove) && !(pas.Classes.TComponentStateItem.csDestroying in this.FComponentState)) {
        for (var $l = this.FControlCollection.GetCount() - 1; $l >= 0; $l--) {
          i = $l;
          if (this.FControlCollection.GetItem$1(i).FControl === AComponent) {
            el = this.GetElementHandle().children.item(i);
            while (el.childElementCount > 0) el.removeChild(el.firstChild);
            this.FControlCollection.GetItem$1(i).FControl = null;
            this.FControlCollection.Delete(i);
            upd = true;
          };
        };
      };
      pas.Classes.TComponent.Notification.apply(this,arguments);
      if (upd) this.UpdateControls();
    };
    this.LayoutChanged = function (Sender) {
      if (this.IsUpdating() || (pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) return;
      this.UpdateControls();
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.Controls"].TControl.Create$1.apply(this,arguments);
      this.FResizePtr = null;
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FControlCollection");
      rtl.free(this,"FLayout");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.CreateInitialize = function () {
      var li = null;
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FDesignTime = (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && !((pas.Classes.TComponentStateItem.csReading in this.FOwner.FComponentState) || (pas.Classes.TComponentStateItem.csLoading in this.FOwner.FComponentState));
      this.FEnablePropagation = true;
      this.FControlStyle = rtl.unionSet(this.FControlStyle,rtl.createSet(pas["WEBLib.Controls"].TControlStyleValue.csAcceptsControls));
      this.FControlCollection = $mod.TControlCollection.$create("Create$3",[this]);
      this.FControlCollection.FPropName = "ControlCollection";
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(400);
        this.SetHeight(300);
      };
      this.FLabel = null;
      this.FActiveLayoutItem = null;
      this.FLayout = $mod.TResponsiveLayout.$create("Create$3",[this]);
      this.FLayout.FOnChange = rtl.createCallback(this,"LayoutChanged");
      this.FLayout.FPropName = "Layout";
      if (this.FDesignTime) {
        li = this.FLayout.Add$2();
        li.FDescription = "Smartphone";
        li.SetWidth(575);
        li.SetStyle("1fr");
        li = this.FLayout.Add$2();
        li.FDescription = "Tablet";
        li.SetWidth(768);
        li.SetStyle("1fr 1fr");
        li = this.FLayout.Add$2();
        li.FDescription = "Desktop";
        li.SetWidth(991);
        li.SetStyle("1fr 1fr 1fr");
        li = this.FLayout.Add$2();
        li.FDescription = "Large Desktop";
        li.SetWidth(1199);
        li.SetStyle("1fr 1fr 1fr 1fr");
      };
    };
    this.AlignControls = function (AControl, Rect) {
      pas["WEBLib.Controls"].TControl.AlignControls.apply(this,arguments);
      this.Resize();
    };
    this.GetChildren = function (Proc, Root) {
      pas["WEBLib.Controls"].TControl.GetChildren.apply(this,arguments);
    };
    this.Resize = function () {
      pas["WEBLib.Controls"].TCustomControl.Resize.call(this);
      this.SetResponsiveStyle();
    };
    this.AddControl = function (AControl) {
      this.FControlCollection.Add$1().FControl = AControl;
      AControl.SetParent(this);
    };
    this.RemoveControl = function (AControl) {
      var i = 0;
      for (var $l = 0, $end = this.FControlCollection.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FControlCollection.GetItem$1(i).FControl === AControl) {
          this.FControlCollection.Delete(i);
          break;
        };
      };
    };
    this.RemoveControls = function () {
      var i = 0;
      for (var $l = this.FControlCollection.GetCount() - 1; $l >= 0; $l--) {
        i = $l;
        this.FControlCollection.Delete(i);
      };
    };
    this.EndUpdate = function () {
      pas["WEBLib.Controls"].TCustomControl.EndUpdate.call(this);
      this.UpdateControls();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("ControlCollection",2,$mod.$rtti["TControlCollection"],"FControlCollection","SetControlCollection");
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("Layout",0,$mod.$rtti["TResponsiveLayout"],"FLayout","FLayout");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnLayoutChange",0,$mod.$rtti["TResponsiveLayoutChangeEvent"],"FOnLayoutChange","FOnLayoutChange");
  });
  rtl.createClass(this,"TWebResponsiveGridPanel",this.TResponsiveGridPanel,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TLookupValueItem",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FValue = "";
      this.FDisplayText = "";
    };
    var $r = this.$rtti;
    $r.addProperty("Value",0,rtl.string,"FValue","FValue");
    $r.addProperty("DisplayText",0,rtl.string,"FDisplayText","FDisplayText");
  });
  rtl.createClass(this,"TLookupValues",pas.Classes.TOwnedCollection,function () {
    this.$init = function () {
      pas.Classes.TOwnedCollection.$init.call(this);
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TOwnedCollection.$final.call(this);
    };
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.DoChange = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Update = function (Item) {
      pas.Classes.TCollection.Update.apply(this,arguments);
      if (Item === null) this.DoChange();
    };
    this.Create$3 = function (AOwner) {
      pas.Classes.TOwnedCollection.Create$2.call(this,AOwner,$mod.TLookupValueItem);
      return this;
    };
    this.AddPair = function (AValue, ADisplayText) {
      var lv = null;
      lv = pas.Classes.TCollection.Add.call(this);
      lv.FValue = AValue;
      lv.FDisplayText = ADisplayText;
      if (this.FUpdateCount === 0) this.DoChange();
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
  rtl.createClass(this,"TCustomLookupComboBox",pas["WEBLib.StdCtrls"].TCustomComboBox,function () {
    this.$init = function () {
      pas["WEBLib.StdCtrls"].TCustomComboBox.$init.call(this);
      this.FLookupValues = null;
    };
    this.$final = function () {
      this.FLookupValues = undefined;
      pas["WEBLib.StdCtrls"].TCustomComboBox.$final.call(this);
    };
    this.SetLookupValues = function (Value) {
      this.FLookupValues.Assign(Value);
    };
    this.GetDisplayText = function () {
      var Result = "";
      Result = "";
      if (this.GetItemIndex() >= 0) Result = this.FLookupValues.GetItem$1(this.GetItemIndex()).FDisplayText;
      return Result;
    };
    this.GetValue = function () {
      var Result = "";
      Result = "";
      if (this.GetItemIndex() >= 0) Result = this.FLookupValues.GetItem$1(this.GetItemIndex()).FValue;
      return Result;
    };
    this.SetDisplayText = function (Value) {
      var i = 0;
      var idx = 0;
      idx = -1;
      for (var $l = 0, $end = this.FLookupValues.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FLookupValues.GetItem$1(i).FDisplayText === Value) {
          idx = i;
          break;
        };
      };
      this.SetItemIndex(idx);
    };
    this.SetValue = function (Value) {
      var i = 0;
      var idx = 0;
      idx = -1;
      for (var $l = 0, $end = this.FLookupValues.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FLookupValues.GetItem$1(i).FValue === Value) {
          idx = i;
          break;
        };
      };
      this.SetItemIndex(idx);
    };
    this.ValuesChanged = function (Sender) {
      this.DoUpdateList();
    };
    this.DoUpdateList = function () {
      var i = 0;
      var opt = null;
      if (!(this.GetContainer() != null)) return;
      for (var $l = this.GetContainer().options.length - 1; $l >= 0; $l--) {
        i = $l;
        this.GetContainer().remove(i);
      };
      this.AddTextHint();
      for (var $l1 = 0, $end = this.FLookupValues.GetCount() - 1; $l1 <= $end; $l1++) {
        i = $l1;
        opt = document.createElement("OPTION");
        opt.setAttribute("value",this.FLookupValues.GetItem$1(i).FValue);
        opt.innerHTML = this.FLookupValues.GetItem$1(i).FDisplayText;
        this.GetContainer().appendChild(opt);
      };
      this.UpdateElement();
    };
    this.Destroy = function () {
      rtl.free(this,"FLookupValues");
      pas["WEBLib.StdCtrls"].TCustomComboBox.Destroy.call(this);
    };
    this.CreateInitialize = function () {
      pas["WEBLib.StdCtrls"].TCustomComboBox.CreateInitialize.call(this);
      this.FLookupValues = $mod.TLookupValues.$create("Create$3",[this]);
      this.FLookupValues.FPropName = "LookupValues";
      this.FLookupValues.FOnChange = rtl.createCallback(this,"ValuesChanged");
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("ItemIndex",3,rtl.longint,"GetItemIndex","SetItemIndex",{Default: -1});
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("TextDirection",0,pas["WEBLib.Controls"].$rtti["TTextDirection"],"FTextDirection","FTextDirection",{Default: pas["WEBLib.Controls"].TTextDirection.tdDefault});
    $r.addProperty("TextHint",2,rtl.string,"FTextHint","SetTextHint");
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnKeyDown",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas["WEBLib.Controls"].$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnExit","FOnExit");
  });
  rtl.createClass(this,"TLookupComboBox",this.TCustomLookupComboBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("LookupValues",2,$mod.$rtti["TLookupValues"],"FLookupValues","SetLookupValues");
  });
  rtl.createClass(this,"TWebLookupComboBox",this.TLookupComboBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TCustomListBox",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FItems = null;
      this.FItemIndex = 0;
      this.FItemHeight = 0;
      this.FSorted = false;
      this.FOnChange = null;
      this.FHandleChangePtr = null;
      this.FElementItemClassName = "";
    };
    this.$final = function () {
      this.FItems = undefined;
      this.FOnChange = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.SetItemHeight = function (Value) {
      this.FItemHeight = Value;
    };
    this.SetSorted = function (Value) {
      this.FSorted = Value;
      this.FItems.Sort();
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FItems.GetCount();
      return Result;
    };
    this.GetItemElement = function (i) {
      var Result = null;
      Result = null;
      if ((this.GetContainer() != null) && (i < this.GetContainer().children.length)) Result = this.GetContainer().children.item(i);
      return Result;
    };
    this.DoHandleChange = function (Event) {
      var Result = false;
      this.Change();
      Result = true;
      return Result;
    };
    this.DoItemsChange = function (Sender) {
      this.DoUpdateList();
    };
    this.KeyDown = function (Key, Shift) {
      pas["WEBLib.Controls"].TControl.KeyDown.apply(this,arguments);
      if (Key.get() === 40) {
        this.SetItemIndex(this.GetItemIndex() + 1);
        Key.set(0);
      };
      if (Key.get() === 36) {
        this.SetItemIndex(0);
        Key.set(0);
      };
      if (Key.get() === 34) {
        this.SetItemIndex(this.GetItemIndex() + 4);
        Key.set(0);
      };
      if (Key.get() === 33) {
        this.SetItemIndex(this.GetItemIndex() - 4);
        Key.set(0);
      };
      if (Key.get() === 35) {
        this.SetItemIndex(this.FItems.GetCount() - 1);
        Key.set(0);
      };
      if (Key.get() === 38) {
        this.SetItemIndex(this.GetItemIndex() - 1);
        Key.set(0);
      };
    };
    this.DoUpdateList = function () {
      var i = 0;
      var opt = null;
      var chk = null;
      var txt = null;
      if (!(this.GetContainer() != null)) return;
      if (this.IsUpdating()) return;
      if (this.GetElementHandle().tagName !== "DIV") return;
      while (this.GetContainer().firstChild != null) this.GetContainer().removeChild(this.GetContainer().lastChild);
      for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        opt = document.createElement("LABEL");
        chk = document.createElement("INPUT");
        chk.setAttribute("type","checkbox");
        chk.style.setProperty("vertical-align","middle");
        opt.style.setProperty("vertical-align","middle");
        opt.appendChild(chk);
        opt.style.setProperty("display","block");
        txt = document.createTextNode(this.FItems.Get(i));
        opt.appendChild(txt);
        if (this.FElementItemClassName !== "") opt.setAttribute("class",this.FElementItemClassName);
        if (this.FDragMode === pas["WEBLib.Controls"].TDragMode.dmAutomatic) opt.setAttribute("draggable","true");
        this.GetContainer().appendChild(opt);
      };
      this.UpdateElementData();
    };
    this.PersistinHTML = function () {
      if (!(this.GetContainer() != null)) return;
      if (this.GetElementHandle().tagName !== "DIV") return;
    };
    this.SetItemIndex = function (Value) {
      var el = null;
      el = this.GetItemElement(Value);
      if (el != null) el.firstChild.focus();
    };
    this.GetItemIndex = function () {
      var Result = 0;
      var i = 0;
      var el = null;
      Result = this.FItemIndex;
      if (this.GetContainer() != null) {
        for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
          i = $l;
          el = this.GetItemElement(i);
          if (el != null) el = el.firstChild;
          if (el != null) {
            if (el === document.activeElement) {
              Result = i;
              break;
            };
          };
        };
      };
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      return Result;
    };
    this.SetItems = function (AItems) {
      this.FItems.Assign(AItems);
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      this.DoUpdateList();
      this.UpdateElement();
    };
    this.UpdateElementData = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().style.setProperty("overflow","auto");
      };
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().style.setProperty("overflow","auto");
      };
    };
    this.UpdateParent = function () {
      pas["WEBLib.Controls"].TControl.UpdateParent.call(this);
      this.DoUpdateList();
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().addEventListener("change",this.FHandleChangePtr);
      };
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().removeEventListener("change",this.FHandleChangePtr);
      };
    };
    this.Change = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.EnableDrag = function () {
      var I = 0;
      if (!(this.GetContainer() != null)) return;
      for (var $l = 0, $end = this.GetContainer().options.length - 1; $l <= $end; $l++) {
        I = $l;
        this.GetContainer().options.item(I).setAttribute("draggable","true");
      };
    };
    this.DisableDrag = function () {
      var I = 0;
      if (!(this.GetContainer() != null)) return;
      for (var $l = 0, $end = this.GetContainer().children.length - 1; $l <= $end; $l++) {
        I = $l;
        this.GetContainer().children.item(I).setAttribute("draggable","false");
      };
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FHandleChangePtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      this.FHandleChangePtr = rtl.createCallback(this,"DoHandleChange");
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FItems = pas.Classes.TStringList.$create("Create$1");
      this.FItems.SetSkipLastLineBreak(true);
      this.FItems.FOnChange = rtl.createCallback(this,"DoItemsChange");
      this.FItemIndex = -1;
      this.SetBorderStyle(pas["WEBLib.Controls"].TBorderStyle.bsSingle);
      this.FCustomBorder = true;
      this.SetShowFocus(true);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(160);
        this.SetHeight(180);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FItems");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.EndUpdate = function () {
      pas["WEBLib.Controls"].TCustomControl.EndUpdate.call(this);
      this.DoUpdateList();
    };
    this.AddItem = function (Item, AObject) {
      this.FItems.AddObject(Item,AObject);
    };
    this.SetFilter = function (AExpression, CaseSensitive) {
      var i = 0;
      var re = null;
      if (CaseSensitive) {
        re = new RegExp(AExpression)}
       else re = new RegExp(AExpression,"i");
      for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (!re.test(this.FItems.Get(i))) {
          this.GetItemElement(i).style.setProperty("display","none");
        } else this.GetItemElement(i).style.setProperty("display","block");
      };
    };
    this.RemoveFilter = function () {
      var i = 0;
      for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.GetItemElement(i).style.setProperty("display","block");
      };
    };
    this.Clear = function () {
      this.BeginUpdate();
      this.FItems.Clear();
      this.EndUpdate();
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TImageListBox",this.TCustomListBox,function () {
    this.DoUpdateList = function () {
      var i = 0;
      var opt = null;
      var img = null;
      if (!(this.GetContainer() != null)) return;
      if (this.IsUpdating()) return;
      if (this.GetElementHandle().tagName !== "DIV") return;
      while (this.GetContainer().firstChild != null) this.GetContainer().removeChild(this.GetContainer().lastChild);
      for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        opt = document.createElement("LABEL");
        img = document.createElement("IMG");
        img.setAttribute("src",this.FItems.Get(i));
        img.style.setProperty("display","inline-block");
        opt.appendChild(img);
        opt.style.setProperty("display","block");
        if (this.FElementItemClassName !== "") opt.setAttribute("class",this.FElementItemClassName);
        if (this.FDragMode === pas["WEBLib.Controls"].TDragMode.dmAutomatic) opt.setAttribute("draggable","true");
        this.GetContainer().appendChild(opt);
      };
      this.UpdateElementData();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("BiDiMode",2,pas["WEBLib.Controls"].$rtti["TBiDiMode"],"FBiDiMode","SetBiDiMode",{Default: pas["WEBLib.Controls"].TBiDiMode.bdLeftToRight});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementItemClassName",0,rtl.string,"FElementItemClassName","FElementItemClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("ItemHeight",2,rtl.longint,"FItemHeight","SetItemHeight");
    $r.addProperty("Items",2,pas.Classes.$rtti["TStrings"],"FItems","SetItems");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor",{Default: false});
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnKeyDown",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas["WEBLib.Controls"].$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseWheel",0,pas["WEBLib.Controls"].$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TWebImageListBox",this.TImageListBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TSearchEdit",pas["WEBLib.StdCtrls"].TCustomEdit,function () {
    this.$init = function () {
      pas["WEBLib.StdCtrls"].TCustomEdit.$init.call(this);
      this.FSearchElement = null;
      this.FClearElement = null;
      this.FInputElement = null;
      this.FClearPtr = null;
      this.FSearchPtr = null;
      this.FOnSearchClick = null;
      this.FOnClearClick = null;
      this.FClearImageURL = "";
      this.FSearchImageURL = "";
    };
    this.$final = function () {
      this.FSearchElement = undefined;
      this.FClearElement = undefined;
      this.FInputElement = undefined;
      this.FOnSearchClick = undefined;
      this.FOnClearClick = undefined;
      pas["WEBLib.StdCtrls"].TCustomEdit.$final.call(this);
    };
    this.SetClearImageURL = function (Value) {
      this.FClearImageURL = Value;
    };
    this.SetSearchImageURL = function (Value) {
      this.FSearchImageURL = Value;
    };
    this.GetElementBindHandle = function () {
      var Result = null;
      Result = this.FInputElement;
      return Result;
    };
    this.GetElementInputHandle = function () {
      var Result = null;
      Result = this.FInputElement;
      return Result;
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.StdCtrls"].TCustomInput.UpdateElementVisual.call(this);
      if (this.FSearchElement != null) {
        if (this.FSearchImageURL !== "") {
          this.FSearchElement.setAttribute("src",this.FSearchImageURL)}
         else this.FSearchElement.setAttribute("src",$impl.btnsearchres);
      };
      if (this.FClearElement != null) {
        if (this.FClearImageURL !== "") {
          this.FClearElement.setAttribute("src",this.FClearImageURL)}
         else this.FClearElement.setAttribute("src",$impl.btnclearres);
      };
    };
    this.CreateChildElements = function (AContainer) {
      var FTable = null;
      var FRow = null;
      var FCell = null;
      pas["WEBLib.Controls"].TControl.CreateChildElements.apply(this,arguments);
      this.FSearchElement = document.createElement("IMG");
      this.FClearElement = document.createElement("IMG");
      this.FInputElement = document.createElement("INPUT");
      FTable = document.createElement("TABLE");
      FTable.style.setProperty("height","100%");
      FRow = document.createElement("TR");
      AContainer.appendChild(FTable);
      FTable.appendChild(FRow);
      FCell = document.createElement("TD");
      FRow.appendChild(FCell);
      FCell.appendChild(this.FSearchElement);
      FCell = document.createElement("TD");
      FRow.appendChild(FCell);
      FCell.appendChild(this.FInputElement);
      FCell = document.createElement("TD");
      FRow.appendChild(FCell);
      FCell.appendChild(this.FClearElement);
      this.FSearchElement.setAttribute("src",$impl.btnsearchres);
      this.FClearElement.setAttribute("src",$impl.btnclearres);
    };
    this.BindEvents = function () {
      pas["WEBLib.StdCtrls"].TCustomEdit.BindEvents.call(this);
      if (this.FClearElement != null) this.FClearElement.addEventListener("click",this.FClearPtr);
      if (this.FSearchElement != null) this.FSearchElement.addEventListener("click",this.FSearchPtr);
    };
    this.HandleDoClear = function (Event) {
      var Result = false;
      if (this.FOnClearClick != null) this.FOnClearClick(this);
      this.FInputElement.value = '';
      this.FInputElement.focus();
      Result = true;
      return Result;
    };
    this.HandleDoSearch = function (Event) {
      var Result = false;
      if (this.FOnSearchClick != null) this.FOnSearchClick(this);
      Result = true;
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      return Result;
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if ((this.GetElementHandle() != null) && (this.GetElementHandle() !== this.ContainerElement()) && !this.IsUpdating()) {
        if ((this.FElementClassName === "") && (this.FBorderStyle === pas["WEBLib.Controls"].TBorderStyle.bsSingle)) {
          this.GetElementHandle().style.setProperty("border","1px solid gray");
          this.GetElementHandle().style.setProperty("border-radius","4px");
        };
        this.FInputElement.style.setProperty("border","none");
        this.FInputElement.style.setProperty("outline","none");
        this.FInputElement.parentElement.style.setProperty("vertical-align","middle");
        this.FSearchElement.parentElement.style.setProperty("vertical-align","middle");
        this.FClearElement.parentElement.style.setProperty("vertical-align","middle");
        if (this.FElementPosition === pas["WEBLib.Controls"].TElementPosition.epAbsolute) {
          this.FInputElement.style.setProperty("width","100%")}
         else this.FInputElement.style.removeProperty("width");
      };
    };
    this.SetEnabled = function (Value) {
      pas["WEBLib.Controls"].TControl.SetEnabled.apply(this,arguments);
      if (this.GetElementInputHandle() != null) {
        if (Value) {
          this.GetElementInputHandle().removeAttribute("disabled")}
         else this.GetElementInputHandle().setAttribute("disabled","");
      };
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.StdCtrls"].TCustomEdit.ClearMethodPointers.call(this);
      this.FClearPtr = null;
      this.FSearchPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.StdCtrls"].TCustomEdit.GetMethodPointers.call(this);
      if (this.FClearPtr === null) this.FClearPtr = rtl.createCallback(this,"HandleDoClear");
      if (this.FSearchPtr === null) this.FSearchPtr = rtl.createCallback(this,"HandleDoSearch");
    };
    this.SetFocus = function () {
      var eh = null;
      if (this.GetElementInputHandle() != null) {
        eh = this.GetElementInputHandle();
        eh.focus();
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment");
    $r.addProperty("AutoCompletion",2,pas["WEBLib.StdCtrls"].$rtti["TAutoCompletion"],"FAutoCompletion","SetAutoCompletion",{Default: pas["WEBLib.StdCtrls"].TAutoCompletion.acOff});
    $r.addProperty("AutoSelect",2,rtl.boolean,"FAutoSelect","SetAutoSelect",{Default: true});
    $r.addProperty("AutoFocus",2,rtl.boolean,"FAutoFocus","SetAutoFocus",{Default: false});
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("CharCase",2,pas["WEBLib.StdCtrls"].$rtti["TEditCharCase"],"FCharCase","SetCharCase",{Default: pas["WEBLib.StdCtrls"].TEditCharCase.wecNormal});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HideSelection",2,rtl.boolean,"FHideSelection","SetHideSelection");
    $r.addProperty("MaxLength",2,rtl.longint,"FMaxLength","SetMaxLength",{Default: 0});
    $r.addProperty("PasswordChar",2,rtl.char,"FPasswordChar","SetPasswordChar",{Default: "\x00"});
    $r.addProperty("Pattern",2,rtl.string,"FPattern","SetPattern");
    $r.addProperty("ReadOnly",2,rtl.boolean,"FReadOnly","SetReadOnly",{Default: false});
    $r.addProperty("Required",2,rtl.boolean,"FRequired","SetRequired",{Default: false});
    $r.addProperty("RequiredText",0,rtl.string,"FRequiredText","FRequiredText");
    $r.addProperty("TextHint",2,rtl.string,"FTextHint","SetTextHint");
    $r.addMethod("SetFocus",0,[]);
    $r.addProperty("Text",3,rtl.string,"GetText","SetText");
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnKeyDown",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas["WEBLib.Controls"].$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
    $r.addProperty("OnClearClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClearClick","FOnClearClick");
    $r.addProperty("OnSearchClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnSearchClick","FOnSearchClick");
  });
  rtl.createClass(this,"TWebSearchEdit",this.TSearchEdit,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment");
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoCompletion",2,pas["WEBLib.StdCtrls"].$rtti["TAutoCompletion"],"FAutoCompletion","SetAutoCompletion",{Default: pas["WEBLib.StdCtrls"].TAutoCompletion.acOff});
    $r.addProperty("AutoFocus",2,rtl.boolean,"FAutoFocus","SetAutoFocus",{Default: false});
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("AutoSelect",2,rtl.boolean,"FAutoSelect","SetAutoSelect",{Default: true});
    $r.addProperty("BiDiMode",2,pas["WEBLib.Controls"].$rtti["TBiDiMode"],"FBiDiMode","SetBiDiMode",{Default: pas["WEBLib.Controls"].TBiDiMode.bdLeftToRight});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("CharCase",2,pas["WEBLib.StdCtrls"].$rtti["TEditCharCase"],"FCharCase","SetCharCase",{Default: pas["WEBLib.StdCtrls"].TEditCharCase.wecNormal});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("ClearImageURL",2,rtl.string,"FClearImageURL","SetClearImageURL");
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("EditType",2,pas["WEBLib.StdCtrls"].$rtti["TEditType"],"FEditType","SetEditType",{Default: pas["WEBLib.StdCtrls"].TEditType.weString});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("HideSelection",2,rtl.boolean,"FHideSelection","SetHideSelection");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PasswordChar",2,rtl.char,"FPasswordChar","SetPasswordChar",{Default: "\x00"});
    $r.addProperty("Pattern",2,rtl.string,"FPattern","SetPattern");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("MaxLength",2,rtl.longint,"FMaxLength","SetMaxLength",{Default: 0});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("ReadOnly",2,rtl.boolean,"FReadOnly","SetReadOnly",{Default: false});
    $r.addProperty("Required",2,rtl.boolean,"FRequired","SetRequired",{Default: false});
    $r.addProperty("SearchImageURL",2,rtl.string,"FSearchImageURL","SetSearchImageURL");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("SpellCheck",2,rtl.boolean,"FSpellCheck","SetSpellCheck",{Default: true});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Text",3,rtl.string,"GetText","SetText");
    $r.addProperty("TextDirection",0,pas["WEBLib.Controls"].$rtti["TTextDirection"],"FTextDirection","FTextDirection",{Default: pas["WEBLib.Controls"].TTextDirection.tdDefault});
    $r.addProperty("TextHint",2,rtl.string,"FTextHint","SetTextHint");
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnKeyDown",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas["WEBLib.Controls"].$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
    $r.addProperty("OnClearClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClearClick","FOnClearClick");
    $r.addProperty("OnSearchClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnSearchClick","FOnSearchClick");
  });
  rtl.createClass(this,"TEditButton",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FMaterialGlyph = "";
      this.FWidth = 0;
      this.FMaterialGlyphColor = 0;
      this.FCaption = "";
      this.FMaterialGlyphType = 0;
      this.FMaterialGlyphSize = 0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetMaterialGlyph = function (Value) {
      this.FMaterialGlyph = Value;
      this.Changed();
    };
    this.SetMaterialGlyphSize = function (Value) {
      this.FMaterialGlyphSize = Value;
      this.Changed();
    };
    this.SetMaterialGlyphType = function (Value) {
      this.FMaterialGlyphType = Value;
      this.Changed();
    };
    this.SetMaterialGyphColor = function (Value) {
      this.FMaterialGlyphColor = Value;
      this.Changed();
    };
    this.SetCaption = function (Value) {
      this.FCaption = Value;
      this.Changed();
    };
    this.SetWidth = function (Value) {
      this.FWidth = Value;
      this.Changed();
    };
    this.Changed = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FWidth = 24;
      this.FCaption = "";
      this.FMaterialGlyphColor = -1;
      this.FMaterialGlyphSize = 18;
      this.FMaterialGlyphType = pas["WEBLib.Controls"].TMaterialGlyphType.mgNormal;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TEditButton.isPrototypeOf(Source)) {
        this.FWidth = rtl.as(Source,$mod.TEditButton).FWidth;
        this.FMaterialGlyph = rtl.as(Source,$mod.TEditButton).FMaterialGlyph;
        this.FMaterialGlyphSize = rtl.as(Source,$mod.TEditButton).FMaterialGlyphSize;
        this.FMaterialGlyphColor = rtl.as(Source,$mod.TEditButton).FMaterialGlyphColor;
        this.FCaption = rtl.as(Source,$mod.TEditButton).FCaption;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("MaterialGlyph",2,rtl.string,"FMaterialGlyph","SetMaterialGlyph");
    $r.addProperty("MaterialGlyphColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FMaterialGlyphColor","SetMaterialGyphColor",{Default: -1});
    $r.addProperty("MaterialGlyphSize",2,rtl.longint,"FMaterialGlyphSize","SetMaterialGlyphSize",{Default: 18});
    $r.addProperty("MaterialGlyphType",2,pas["WEBLib.Controls"].$rtti["TMaterialGlyphType"],"FMaterialGlyphType","SetMaterialGlyphType",{Default: pas["WEBLib.Controls"].TMaterialGlyphType.mgNormal});
    $r.addProperty("Width",2,rtl.longint,"FWidth","SetWidth",{Default: 24});
  });
  rtl.createClass(this,"TEditBtn",pas["WEBLib.StdCtrls"].TCustomEdit,function () {
    this.$init = function () {
      pas["WEBLib.StdCtrls"].TCustomEdit.$init.call(this);
      this.FBtnElement = null;
      this.FInputElement = null;
      this.FBtnClickPtr = null;
      this.FOnBtnClick = null;
      this.FButton = null;
      this.FElementInputClassName = "";
      this.FElementButtonClassName = "";
    };
    this.$final = function () {
      this.FBtnElement = undefined;
      this.FInputElement = undefined;
      this.FOnBtnClick = undefined;
      this.FButton = undefined;
      pas["WEBLib.StdCtrls"].TCustomEdit.$final.call(this);
    };
    this.SetButton = function (Value) {
      this.FButton.Assign(Value);
    };
    this.SetElementInputClassName = function (Value) {
      if (this.FElementInputClassName !== Value) {
        this.FElementInputClassName = Value;
        this.UpdateElement();
      };
    };
    this.SetElementButtonClassName = function (Value) {
      if (this.FElementButtonClassName !== Value) {
        this.FElementButtonClassName = Value;
        this.UpdateElement();
      };
    };
    this.HandleDoBtnClick = function (Event) {
      var Result = false;
      if (this.FOnBtnClick != null) this.FOnBtnClick(this);
      Result = true;
      return Result;
    };
    this.GetElementBindHandle = function () {
      var Result = null;
      Result = this.FInputElement;
      return Result;
    };
    this.GetElementInputHandle = function () {
      var Result = null;
      Result = this.FInputElement;
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      var FTable = null;
      var FRow = null;
      var FCell1 = null;
      var FCell2 = null;
      Result = document.createElement("DIV");
      this.FBtnElement = document.createElement("BUTTON");
      this.FInputElement = document.createElement("INPUT");
      FTable = document.createElement("TABLE");
      FRow = document.createElement("TR");
      Result.appendChild(FTable);
      FTable.appendChild(FRow);
      FCell1 = document.createElement("TD");
      FRow.appendChild(FCell1);
      FCell1.appendChild(this.FInputElement);
      FCell2 = document.createElement("TD");
      FRow.appendChild(FCell2);
      FCell2.appendChild(this.FBtnElement);
      this.FBtnElement.innerHTML = "&nbsp;";
      FTable.style.setProperty("border","none");
      FTable.style.setProperty("border-collapse","collapse");
      FTable.style.setProperty("height","100%");
      return Result;
    };
    this.UpdateElement = function () {
      var h = 0;
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if ((this.GetElementHandle() != null) && (this.GetElementHandle() !== this.ContainerElement()) && !this.IsUpdating()) {
        this.FInputElement.style.setProperty("outline","none");
        this.FInputElement.style.setProperty("box-sizing","unset");
        if (this.FElementPosition === pas["WEBLib.Controls"].TElementPosition.epAbsolute) {
          this.FInputElement.style.setProperty("width","100%")}
         else this.FInputElement.style.removeProperty("width");
        h = this.GetHeight() - 6 - 4;
        this.FInputElement.style.setProperty("height",pas["WEBLib.Utils"].TLongIntHelper.ToString.call({get: function () {
            return h;
          }, set: function (v) {
            h = v;
          }}) + "px");
        if (this.FElementInputClassName !== "") {
          this.FInputElement.setAttribute("class",this.FElementInputClassName)}
         else this.FInputElement.removeAttribute("class");
        if (this.FElementButtonClassName !== "") {
          this.FBtnElement.setAttribute("class",this.FElementButtonClassName)}
         else this.FBtnElement.removeAttribute("class");
        h = this.GetHeight() - 4;
        this.FBtnElement.style.setProperty("width",pas["WEBLib.Utils"].TLongIntHelper.ToString.call({p: this.FButton, get: function () {
            return this.p.FWidth;
          }, set: function (v) {
            this.p.FWidth = v;
          }}) + "px");
        this.FBtnElement.style.setProperty("padding","0");
        this.FBtnElement.style.setProperty("height",pas["WEBLib.Utils"].TLongIntHelper.ToString.call({get: function () {
            return h;
          }, set: function (v) {
            h = v;
          }}) + "px");
        pas["WEBLib.Controls"].SetHTMLElementFont(this.FInputElement,this.FFont,this.FElementFont === pas["WEBLib.Controls"].TElementFont.efCSS);
        if (this.FButton.FCaption !== "") this.FBtnElement.innerHTML = this.FButton.FCaption;
        if (this.FButton.FMaterialGlyph !== "") {
          this.FBtnElement.innerHTML = pas["WEBLib.WebTools"].GetMaterialGlyph(this.FButton.FMaterialGlyph,this.FButton.FMaterialGlyphSize,this.FButton.FMaterialGlyphColor,this.FButton.FMaterialGlyphType);
        };
        this.GetElementHandle().style.setProperty("border","none");
      };
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.StdCtrls"].TCustomEdit.ClearMethodPointers.call(this);
      this.FBtnClickPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.StdCtrls"].TCustomEdit.GetMethodPointers.call(this);
      if (this.FBtnClickPtr === null) this.FBtnClickPtr = rtl.createCallback(this,"HandleDoBtnClick");
    };
    this.BindEvents = function () {
      pas["WEBLib.StdCtrls"].TCustomEdit.BindEvents.call(this);
      if (this.FBtnElement != null) this.FBtnElement.addEventListener("click",this.FBtnClickPtr);
    };
    this.ButtonChanged = function (Sender) {
      this.UpdateElement();
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.Controls"].TControl.Create$1.apply(this,arguments);
      this.FButton = $mod.TEditButton.$create("Create$1");
      this.FButton.FOnChange = rtl.createCallback(this,"ButtonChanged");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FButton");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TWebEditBtn",this.TEditBtn,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment");
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoCompletion",2,pas["WEBLib.StdCtrls"].$rtti["TAutoCompletion"],"FAutoCompletion","SetAutoCompletion",{Default: pas["WEBLib.StdCtrls"].TAutoCompletion.acOff});
    $r.addProperty("AutoFocus",2,rtl.boolean,"FAutoFocus","SetAutoFocus",{Default: false});
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("AutoSelect",2,rtl.boolean,"FAutoSelect","SetAutoSelect",{Default: true});
    $r.addProperty("BiDiMode",2,pas["WEBLib.Controls"].$rtti["TBiDiMode"],"FBiDiMode","SetBiDiMode",{Default: pas["WEBLib.Controls"].TBiDiMode.bdLeftToRight});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("Button",2,$mod.$rtti["TEditButton"],"FButton","SetButton");
    $r.addProperty("CharCase",2,pas["WEBLib.StdCtrls"].$rtti["TEditCharCase"],"FCharCase","SetCharCase",{Default: pas["WEBLib.StdCtrls"].TEditCharCase.wecNormal});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("EditType",2,pas["WEBLib.StdCtrls"].$rtti["TEditType"],"FEditType","SetEditType",{Default: pas["WEBLib.StdCtrls"].TEditType.weString});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("HideSelection",2,rtl.boolean,"FHideSelection","SetHideSelection");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PasswordChar",2,rtl.char,"FPasswordChar","SetPasswordChar",{Default: "\x00"});
    $r.addProperty("Pattern",2,rtl.string,"FPattern","SetPattern");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("MaxLength",2,rtl.longint,"FMaxLength","SetMaxLength",{Default: 0});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("ReadOnly",2,rtl.boolean,"FReadOnly","SetReadOnly",{Default: false});
    $r.addProperty("Required",2,rtl.boolean,"FRequired","SetRequired",{Default: false});
    $r.addProperty("RequiredText",0,rtl.string,"FRequiredText","FRequiredText");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("SpellCheck",2,rtl.boolean,"FSpellCheck","SetSpellCheck",{Default: true});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Text",3,rtl.string,"GetText","SetText");
    $r.addProperty("TextDirection",0,pas["WEBLib.Controls"].$rtti["TTextDirection"],"FTextDirection","FTextDirection",{Default: pas["WEBLib.Controls"].TTextDirection.tdDefault});
    $r.addProperty("TextHint",2,rtl.string,"FTextHint","SetTextHint");
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnKeyDown",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas["WEBLib.Controls"].$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
    $r.addProperty("OnBtnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnBtnClick","FOnBtnClick");
  });
  $mod.$implcode = function () {
    $impl.btnclearres = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVQ4jbWSzQ2CQBCFl5OROgSKgAMmHExUDia2QUSswqg9GK1COfnTjCbagm/Cw2wQFw46yZcM+5jZ+Vml/mQ2iMEcpPTt" + "NoEWyMAdHMCaiH9jMssUvAcn0KvRHXAGu29JMgZ3DBWKdgGzqmCz7PLmAfA1PQAT+q4q2unqCcaq6LM0nz/1QcjkoabnYKgnWIBlpSq59QGeIKpoK1Vs6G0ZD9smkM2kphYClh21bUGGKD07/I4rATKTKX1P1QxRsSTZc9MaryCpE+VxyCORPbs1usfgrWp4jS" + "lLPIINyXmWmIJ1k/5GTJbS/+j5J/YC/YEx2smgMEoAAAAASUVORK5CYII=";
    $impl.btnsearchres = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVQ4jZWSPU7DQBCFU5ECiEBU/AgEcmXJtvxbuAo0pOAE1CAaAigViFNBOAMRFengBNCCwgH4XrQrBXntkJGePLsz782" + "Pt9WqMc/z2mma9sEITAzk9xWr400tiqJtEsdJkjzwPfR9f0WQD4bcvyqnqfIY3OpcFMU+hHMIazaH2L1EnJ0QvFJl45/iX8dxvOXIG4LLigCEFwLdLMsO8G/qxiR2pJ24OpiYeS/AZp1AWZarynUJfElgdmaXsZsOXXy7BPSruk3keSMM7BKbjLynyhLZ9h6X" + "bwIidw3k6W9k1KUKmW8vz/MNEt45P+rxhGG4LMw+JHaw4ySbc890MgDPWiz4sU/5T2Uudk3LJ2Y5x6quFzhvD1ZgZMm2sjr6F9kIfARBsC6RhclG4AzypzpZmIz9Aj6Qcv0OcR9YAAAAAElFTkSuQmCC";
  };
},["WEBLib.Utils"]);
//# sourceMappingURL=WEBLib.ExtCtrls.js.map
