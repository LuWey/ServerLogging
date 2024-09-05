rtl.module("WEBLib.StdCtrls",["System","Classes","WEBLib.Controls","SysUtils","Web","WEBLib.Graphics","Types","WEBLib.WebTools","WEBLib.Forms","WEBLib.Menus"],function () {
  "use strict";
  var $mod = this;
  this.TEditCharCase = {"0": "wecLowerCase", wecLowerCase: 0, "1": "wecNormal", wecNormal: 1, "2": "wecMixedCase", wecMixedCase: 2, "3": "wecUpperCase", wecUpperCase: 3};
  this.$rtti.$Enum("TEditCharCase",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TEditCharCase});
  this.TCheckBoxState = {"0": "cbChecked", cbChecked: 0, "1": "cbGrayed", cbGrayed: 1, "2": "cbUnchecked", cbUnchecked: 2};
  this.$rtti.$Enum("TCheckBoxState",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TCheckBoxState});
  this.TDateTimeKind = {"0": "dtkDate", dtkDate: 0, "1": "dtkTime", dtkTime: 1};
  this.$rtti.$Enum("TDateTimeKind",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TDateTimeKind});
  this.TEllipsisPosition = {"0": "epEndEllipsis", epEndEllipsis: 0, "1": "epNone", epNone: 1, "2": "epPathEllipsis", epPathEllipsis: 2, "3": "epWordEllipsis", epWordEllipsis: 3};
  this.$rtti.$Enum("TEllipsisPosition",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TEllipsisPosition});
  this.TTextLayout = {"0": "tlTop", tlTop: 0, "1": "tlCenter", tlCenter: 1, "2": "tlBottom", tlBottom: 2};
  this.$rtti.$Enum("TTextLayout",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTextLayout});
  this.TSysLinkType = {"0": "sltID", sltID: 0, "1": "sltURL", sltURL: 1};
  this.$rtti.$Enum("TSysLinkType",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TSysLinkType});
  this.TAutoCompletion = {"0": "acOff", acOff: 0, "1": "acHonorificPrefix", acHonorificPrefix: 1, "2": "acGivenName", acGivenName: 2, "3": "acAdditionalName", acAdditionalName: 3, "4": "acFamilyName", acFamilyName: 4, "5": "acHonorificSuffix", acHonorificSuffix: 5, "6": "acNickName", acNickName: 6, "7": "acEmail", acEmail: 7, "8": "acUserName", acUserName: 8, "9": "acNewPassword", acNewPassword: 9, "10": "acCurrentPassword", acCurrentPassword: 10, "11": "acOrganizationTitle", acOrganizationTitle: 11, "12": "acOrganization", acOrganization: 12, "13": "acStreetAddress", acStreetAddress: 13, "14": "acAddressLine1", acAddressLine1: 14, "15": "acAddressLine2", acAddressLine2: 15, "16": "acAddressLine3", acAddressLine3: 16, "17": "acAddressLevel1", acAddressLevel1: 17, "18": "acAddressLevel2", acAddressLevel2: 18, "19": "acAddressLevel3", acAddressLevel3: 19, "20": "acAddressLevel4", acAddressLevel4: 20, "21": "acCountry", acCountry: 21, "22": "acCountryName", acCountryName: 22, "23": "acPostalCode", acPostalCode: 23, "24": "acCCName", acCCName: 24, "25": "acCCGivenName", acCCGivenName: 25, "26": "acCCAdditionalName", acCCAdditionalName: 26, "27": "acCCFamilyName", acCCFamilyName: 27, "28": "acCCNumber", acCCNumber: 28, "29": "acExpiry", acExpiry: 29, "30": "acExpiryMonth", acExpiryMonth: 30, "31": "acExpiryYear", acExpiryYear: 31, "32": "acCSC", acCSC: 32, "33": "acType", acType: 33, "34": "acTransactionCurrency", acTransactionCurrency: 34, "35": "acTransactionAmount", acTransactionAmount: 35, "36": "acLanguage", acLanguage: 36, "37": "acBirthday", acBirthday: 37, "38": "acBirthdayDay", acBirthdayDay: 38, "39": "acBirthDayMonth", acBirthDayMonth: 39, "40": "acBirthDayYear", acBirthDayYear: 40, "41": "acSex", acSex: 41, "42": "acTelephone", acTelephone: 42, "43": "acTelephoneCountryCode", acTelephoneCountryCode: 43, "44": "acTelephoneNational", acTelephoneNational: 44, "45": "acTelephoneAreaCode", acTelephoneAreaCode: 45, "46": "acTelephoneLocal", acTelephoneLocal: 46, "47": "acTelephoneExtension", acTelephoneExtension: 47, "48": "acIMPP", acIMPP: 48, "49": "acURL", acURL: 49, "50": "acPhoto", acPhoto: 50, "51": "acNone", acNone: 51, "52": "acNope", acNope: 52};
  this.$rtti.$Enum("TAutoCompletion",{minvalue: 0, maxvalue: 52, ordtype: 1, enumtype: this.TAutoCompletion});
  this.TEditType = {"0": "weString", weString: 0, "1": "weFloat", weFloat: 1, "2": "weHex", weHex: 2, "3": "weNumeric", weNumeric: 3, "4": "weSignedFloat", weSignedFloat: 4, "5": "weSignedNumeric", weSignedNumeric: 5, "6": "weSearch", weSearch: 6};
  this.$rtti.$Enum("TEditType",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TEditType});
  this.THTMLType = {"0": "tLABELTAG", tLABELTAG: 0, "1": "tSPAN", tSPAN: 1, "2": "tDIV", tDIV: 2, "3": "tH1", tH1: 3, "4": "tH2", tH2: 4, "5": "tH3", tH3: 5, "6": "tH4", tH4: 6, "7": "tH5", tH5: 7, "8": "tH6", tH6: 8, "9": "tP", tP: 9};
  this.$rtti.$Enum("THTMLType",{minvalue: 0, maxvalue: 9, ordtype: 1, enumtype: this.THTMLType});
  this.$rtti.$MethodVar("TLinkClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Link",rtl.string],["LinkType",this.$rtti["TSysLinkType"]]]), methodkind: 0});
  rtl.createClass(this,"TCustomLabel",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FContent = null;
      this.FAutoSize = false;
      this.FEllipsisPosition = 0;
      this.FWordWrap = false;
      this.FAlignment = 0;
      this.FLayout = 0;
      this.FTransparent = false;
      this.FHTMLType = 0;
      this.FFocusControl = null;
      this.FShowAccelChar = false;
      this.FColor$1 = 0;
      this.FHasAccel = false;
      this.FHasHTML = false;
      this.FElementLabelClassName = "";
      this.FOrigWidth = 0;
      this.FOldWidth = 0;
      this.FOldHeight = 0;
      this.FHTML = "";
    };
    this.$final = function () {
      this.FContent = undefined;
      this.FFocusControl = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.SetLayout = function (Value) {
      if (this.FLayout !== Value) {
        this.FLayout = Value;
        this.UpdateElementVisual();
      };
    };
    this.SetAlignment = function (Value) {
      if (this.FAlignment !== Value) {
        this.FAlignment = Value;
        this.UpdateElementVisual();
      };
    };
    this.GetContentHandle = function () {
      var Result = null;
      Result = this.FContent;
      return Result;
    };
    this.SetTransparent = function (Value) {
      if (this.FTransparent !== Value) {
        this.FTransparent = Value;
        this.UpdateElementVisual();
      };
    };
    this.SetHTMLType = function (Value) {
      var el = null;
      if (this.FHTMLType !== Value) {
        this.FHTMLType = Value;
        if (this.FHTMLType in rtl.createSet(null,$mod.THTMLType.tH1,$mod.THTMLType.tH6)) this.SetElementFont(pas["WEBLib.Controls"].TElementFont.efCSS);
        if ((this.GetElementHandle() != null) && (this.FContent != null)) {
          el = this.GetElementHandle().firstChild;
          if ((el != null) && (el.getAttribute("data-lbl") === "lbl")) {
            this.GetElementHandle().removeChild(this.FContent);
            this.FContent = this.CreateLabelElement();
            this.GetElementHandle().appendChild(this.FContent);
            this.UpdateElement();
          };
        };
      };
    };
    this.SetColorEx = function (Value) {
      this.FColor$1 = Value;
      if ((pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && (this.FColor$1 !== 16777215)) this.SetTransparent(false);
      this.UpdateElement();
    };
    this.SetElementLabelClassName = function (Value) {
      if (this.FElementLabelClassName !== Value) {
        this.FElementLabelClassName = Value;
        this.UpdateElement();
      };
    };
    this.SetHTML = function (Value) {
      if (this.FHTML !== Value) {
        this.FHTML = Value;
        this.UpdateElementData();
      };
    };
    this.SetWidth = function (AValue) {
      if ((AValue !== -1) && (pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) this.FOrigWidth = AValue;
      pas["WEBLib.Controls"].TControl.SetWidth.apply(this,arguments);
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      this.FContent = this.CreateLabelElement();
      Result.appendChild(this.FContent);
      return Result;
    };
    this.CreateLabelElement = function () {
      var Result = null;
      Result = null;
      var $tmp = this.FHTMLType;
      if ($tmp === $mod.THTMLType.tSPAN) {
        Result = document.createElement("SPAN")}
       else if ($tmp === $mod.THTMLType.tDIV) {
        Result = document.createElement("DIV")}
       else if ($tmp === $mod.THTMLType.tH1) {
        Result = document.createElement("H1")}
       else if ($tmp === $mod.THTMLType.tH2) {
        Result = document.createElement("H2")}
       else if ($tmp === $mod.THTMLType.tH3) {
        Result = document.createElement("H3")}
       else if ($tmp === $mod.THTMLType.tH4) {
        Result = document.createElement("H4")}
       else if ($tmp === $mod.THTMLType.tH5) {
        Result = document.createElement("H5")}
       else if ($tmp === $mod.THTMLType.tH6) {
        Result = document.createElement("H6")}
       else if ($tmp === $mod.THTMLType.tLABELTAG) {
        Result = document.createElement("LABEL")}
       else if ($tmp === $mod.THTMLType.tP) Result = document.createElement("P");
      Result.setAttribute("data-lbl","lbl");
      return Result;
    };
    this.GetDisplayText = function () {
      var Result = "";
      Result = this.FCaption;
      return Result;
    };
    this.CanShowFocus = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.SetParent = function (AValue) {
      pas["WEBLib.Controls"].TControl.SetParent.apply(this,arguments);
      if (this.FAutoSize && (this.FAlignment !== pas.Classes.TAlignment.taLeftJustify) && (this.FOrigWidth !== -1)) {
        this.SetLeft((this.GetLeft() + this.FOrigWidth) - this.GetWidth());
        this.FOrigWidth = -1;
      };
    };
    this.BindElement = function () {
      this.FContent = this.GetContainer().firstElementChild;
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      if (this.FShowAccelChar && (this.FFocusControl != null)) this.UpdateElementData();
    };
    this.UpdateAutoSize = function () {
      if (this.FAutoSize && (this.FAlign === pas["WEBLib.Controls"].TAlign.alNone)) {
        if ((this.GetElementHandle() != null) && pas["WEBLib.WebTools"].ElementVisible(this.GetElementHandle())) {
          this.SetWidth(-1);
          this.SetHeight(-1);
        };
        this.FEllipsisPosition = $mod.TEllipsisPosition.epNone;
      };
    };
    this.UpdateElementData = function () {
      var lTxt = "";
      var acc = "";
      var ml = false;
      var contentelement = null;
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      acc = "";
      lTxt = this.GetDisplayText();
      if (this.FShowAccelChar && (pas.System.Pos("&",lTxt) > 0)) {
        lTxt = pas["WEBLib.WebTools"].ProcessAccelerator(lTxt,{get: function () {
            return acc;
          }, set: function (v) {
            acc = v;
          }})}
       else {
        if (this.FHTML === "") {
          lTxt = pas["WEBLib.WebTools"].HTMLToString(lTxt)}
         else lTxt = this.FHTML;
      };
      ml = false;
      if (pas.System.Pos("\r",lTxt) > 0) {
        ml = true;
        if (pas.System.Pos("\n",lTxt) > 0) lTxt = pas.SysUtils.StringReplace(lTxt,"\n","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
        lTxt = pas.SysUtils.StringReplace(lTxt,"\r","<BR>",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
      } else if (pas.System.Pos("\n",lTxt) > 0) {
        ml = true;
        lTxt = pas.SysUtils.StringReplace(lTxt,"\n","<BR>",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll,pas.SysUtils.TStringReplaceFlag.rfIgnoreCase));
      };
      if (this.GetIsLinked() && (lTxt === "") && (pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) return;
      if (this.GetContentHandle() != null) {
        if (this.GetIsLinked()) {
          contentelement = this.GetContentHandle();
          if (this.GetID() !== "") {
            contentelement = document.getElementById(this.GetID());
          };
          if (contentelement != null) {
            if (pas.System.Assigned(this.GetContentHandle().nodeValue)) {
              contentelement.nodeValue = lTxt}
             else if (contentelement.childElementCount === 0) contentelement.innerHTML = lTxt;
          };
        } else {
          if ((this.GetContentHandle().childElementCount > 0) && pas.System.Assigned(this.GetContentHandle().nodeValue) && !this.FHasAccel && !this.FHasHTML && !ml) {
            this.GetContentHandle().nodeValue = lTxt;
          } else {
            this.GetContentHandle().innerHTML = lTxt;
          };
        };
      } else this.GetElementHandle().innerHTML = lTxt;
      this.FHasHTML = pas.System.Pos("</",lTxt) > 0;
      this.FHasAccel = acc !== "";
      if ((acc !== "") && (this.FFocusControl != null)) {
        this.GetContentHandle().setAttribute("accesskey",acc);
        this.GetContentHandle().setAttribute("for",this.FFocusControl.GetID());
      };
    };
    this.UpdateElementVisual = function () {
      var ow = 0;
      var oh = 0;
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.IsUpdating()) return;
      if (this.GetElementHandle() != null) {
        oh = Math.round(this.GetElementHandle().offsetHeight);
        ow = Math.round(this.GetElementHandle().offsetWidth);
        if (oh > 0) this.FOldHeight = oh;
        if (ow > 0) this.FOldWidth = ow;
        if (this.FVisible && (!this.FAutoSize || (this.FAlign !== pas["WEBLib.Controls"].TAlign.alNone)) && ((this.FAlignment !== pas.Classes.TAlignment.taLeftJustify) || (this.FLayout !== $mod.TTextLayout.tlTop))) this.GetElementHandle().style.setProperty("display","table");
        this.GetElementHandle().setAttribute("zindex","1");
        if (this.FAutoSize && (this.FAlign === pas["WEBLib.Controls"].TAlign.alNone) && !(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) {
          this.GetElementHandle().style.setProperty("overflow","")}
         else this.GetElementHandle().style.setProperty("overflow","hidden");
      };
      if (this.GetContentHandle() != null) {
        var $tmp = this.FLayout;
        if ($tmp === $mod.TTextLayout.tlTop) {
          this.GetContentHandle().style.setProperty("vertical-align","top")}
         else if ($tmp === $mod.TTextLayout.tlCenter) {
          this.GetContentHandle().style.setProperty("vertical-align","middle")}
         else if ($tmp === $mod.TTextLayout.tlBottom) this.GetContentHandle().style.setProperty("vertical-align","bottom");
        var $tmp1 = this.FAlignment;
        if ($tmp1 === pas.Classes.TAlignment.taLeftJustify) {
          this.GetContentHandle().style.removeProperty("text-align")}
         else if ($tmp1 === pas.Classes.TAlignment.taCenter) {
          this.GetContentHandle().style.setProperty("text-align","center")}
         else if ($tmp1 === pas.Classes.TAlignment.taRightJustify) this.GetContentHandle().style.setProperty("text-align","right");
        pas["WEBLib.Controls"].SetHTMLElementColor(this.GetElementHandle(),this.FColor$1,this.FTransparent || (this.FColor$1 === -1) || (this.FColor$1 === 16711422));
        pas["WEBLib.Controls"].SetHTMLElementColor(this.GetContentHandle(),this.FColor$1,this.FTransparent || (this.FColor$1 === -1) || (this.FColor$1 === 16711422));
        this.GetContentHandle().style.setProperty("display","table-cell");
        if (this.FElementClassName === "") {
          if (this.FEnabled && (this.FElementFont === pas["WEBLib.Controls"].TElementFont.efProperty) && !this.GetIsLinked()) {
            this.GetContentHandle().style.setProperty("color",pas["WEBLib.Graphics"].ColorToHTML(this.FFont.FColor))}
           else this.GetContentHandle().style.removeProperty("color");
          this.SetElementPointer(this.GetContentHandle(),this.FCursor);
          pas["WEBLib.Controls"].SetHTMLElementFont(this.GetContentHandle(),this.FFont,!((this.FElementFont === pas["WEBLib.Controls"].TElementFont.efProperty) && !this.GetIsLinked()));
        } else {
          this.GetContentHandle().style.removeProperty("color");
          pas["WEBLib.Controls"].SetHTMLElementFont(this.GetContentHandle(),this.FFont,true);
        };
        if (this.FElementLabelClassName !== "") {
          this.GetContentHandle().setAttribute("class",this.FElementLabelClassName)}
         else this.GetContentHandle().removeAttribute("class");
        if ((this.FElementPosition === pas["WEBLib.Controls"].TElementPosition.epAbsolute) || (this.FWidthStyle === pas["WEBLib.Controls"].TSizeStyle.ssAbsolute)) {
          if (this.FEllipsisPosition === $mod.TEllipsisPosition.epNone) {
            this.GetContentHandle().style.setProperty("text-overflow","clip")}
           else this.GetContentHandle().style.setProperty("text-overflow","ellipsis");
        } else this.GetContentHandle().style.removeProperty("text-overflow");
        if (this.FWordWrap) {
          this.GetContentHandle().style.setProperty("white-space","normal")}
         else this.GetContentHandle().style.setProperty("white-space","nowrap");
        this.GetElementHandle().style.setProperty("user-select","");
        if (this.FCursor === 0) this.GetElementHandle().style.setProperty("cursor","");
        if (this.FAutoSize && (this.FAlign === pas["WEBLib.Controls"].TAlign.alNone) && !(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) {
          this.GetElementHandle().style.removeProperty("width");
          this.GetElementHandle().style.removeProperty("height");
        };
      };
    };
    this.UpdateElementSize = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementSize.call(this);
      if (this.FAutoSize && (this.FAlign === pas["WEBLib.Controls"].TAlign.alNone) && (this.GetElementHandle() != null)) {
        if (!(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) {
          this.GetElementHandle().style.removeProperty("width");
          this.GetElementHandle().style.removeProperty("height");
        };
      };
      if ((this.GetContentHandle() != null) && (this.FAlign in rtl.createSet(pas["WEBLib.Controls"].TAlign.alLeft,pas["WEBLib.Controls"].TAlign.alRight,pas["WEBLib.Controls"].TAlign.alClient)) && !this.FAutoSize && (this.FLayout in rtl.createSet($mod.TTextLayout.tlCenter,$mod.TTextLayout.tlBottom))) {
        this.GetContentHandle().style.setProperty("height",pas.SysUtils.TIntegerHelper.ToString$1.call({p: this.GetHeight(), get: function () {
            return this.p;
          }, set: function (v) {
            this.p = v;
          }}) + "px");
      };
    };
    this.SetAutoSize = function (AValue) {
      if (this.FAutoSize !== AValue) {
        this.FAutoSize = AValue;
        this.UpdateAutoSize();
        this.UpdateElement();
      };
    };
    this.SetCaption = function (AValue) {
      var dw = 0;
      if (this.FCaption !== AValue) {
        dw = this.GetWidth();
        pas["WEBLib.Controls"].TCustomControl.SetCaption.call(this,AValue);
        this.UpdateAutoSize();
        this.UpdateElement();
        dw = dw - this.GetWidth();
        if (this.FAutoSize && (this.FAlignment !== pas.Classes.TAlignment.taLeftJustify) && (dw !== 0) && (pas["WEBLib.Controls"].TAnchorKind.akRight in this.FAnchors) && !this.IsUpdating()) this.SetLeft(this.GetLeft() + dw);
      };
    };
    this.SetControlCursor = function (Value) {
      pas["WEBLib.Controls"].TControl.SetControlCursor.apply(this,arguments);
      if ((this.FElementClassName === "") && (this.GetContentHandle() != null)) this.SetElementPointer(this.GetContentHandle(),this.FCursor);
    };
    this.SetEllipsisPosition = function (AValue) {
      if (this.FEllipsisPosition !== AValue) {
        this.FEllipsisPosition = AValue;
        if (this.FEllipsisPosition !== $mod.TEllipsisPosition.epNone) this.FAutoSize = false;
        this.UpdateElement();
      };
    };
    this.GetWidth = function () {
      var Result = 0;
      if (this.FAutoSize && (this.GetElementHandle() != null) && (this.FParent != null)) {
        Result = Math.round(this.GetElementHandle().offsetWidth);
        if (Result === 0) Result = pas["WEBLib.Controls"].TControl.GetWidth.call(this);
        if ((Result === 0) && (this.FCaption !== "") && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) Result = this.FOldWidth;
      } else Result = pas["WEBLib.Controls"].TControl.GetWidth.call(this);
      return Result;
    };
    this.GetHeight = function () {
      var Result = 0;
      if (this.FAutoSize && (this.GetElementHandle() != null) && (this.FParent != null)) {
        Result = Math.round(this.GetElementHandle().offsetHeight);
        if (Result === 0) Result = pas["WEBLib.Controls"].TControl.GetHeight.call(this);
        if ((Result === 0) && (this.FCaption !== "") && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) Result = this.FOldHeight;
      } else Result = pas["WEBLib.Controls"].TControl.GetHeight.call(this);
      return Result;
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FAutoSize = true;
      this.FLayout = $mod.TTextLayout.tlTop;
      this.FEllipsisPosition = $mod.TEllipsisPosition.epNone;
      this.FColor$1 = 16777215;
      this.FTransparent = true;
      this.FAlignment = pas.Classes.TAlignment.taLeftJustify;
      this.SetTabStop(false);
      this.FShowAccelChar = true;
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TLabel",this.TCustomLabel,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment",{Default: pas.Classes.TAlignment.taLeftJustify});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: true});
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor$1","SetColorEx",{Default: 16777215});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("EllipsisPosition",2,$mod.$rtti["TEllipsisPosition"],"FEllipsisPosition","SetEllipsisPosition",{Default: $mod.TEllipsisPosition.epNone});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementLabelClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementLabelClassName","SetElementLabelClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("FocusControl",0,pas["WEBLib.Controls"].$rtti["TWinControl"],"FFocusControl","FFocusControl");
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("HTML",2,rtl.string,"FHTML","SetHTML");
    $r.addProperty("HTMLType",2,$mod.$rtti["THTMLType"],"FHTMLType","SetHTMLType",{Default: $mod.THTMLType.tLABELTAG});
    $r.addProperty("Layout",2,$mod.$rtti["TTextLayout"],"FLayout","SetLayout",{Default: $mod.TTextLayout.tlTop});
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("ShowAccelChar",0,rtl.boolean,"FShowAccelChar","FShowAccelChar",{Default: true});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TextDirection",0,pas["WEBLib.Controls"].$rtti["TTextDirection"],"FTextDirection","FTextDirection",{Default: pas["WEBLib.Controls"].TTextDirection.tdDefault});
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Transparent",2,rtl.boolean,"FTransparent","SetTransparent",{Default: true});
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("WordWrap",0,rtl.boolean,"FWordWrap","FWordWrap",{Default: false});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
  });
  rtl.createClass(this,"TWebLabel",this.TLabel,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TCustomInput",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.IsInputControl = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.GetInputType = function () {
      var Result = "";
      Result = "EDIT";
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("INPUT");
      Result.setAttribute("type",this.GetInputType());
      return Result;
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if ((this.GetContainer() != null) && !this.GetIsLinked()) {
        this.GetContainer().style.setProperty("-moz-box-sizing","border-box");
        this.GetContainer().style.setProperty("-webkit-box-sizing","border-box");
        this.GetContainer().style.setProperty("box-sizing","border-box");
      };
    };
    this.LoadState = function (AState) {
      this.GetElementHandle().value = AState;
    };
    this.SaveState = function () {
      var Result = "";
      Result = this.GetElementHandle().value;
      return Result;
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetShowFocus(true);
      this.FNoUserSelect = false;
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TCustomEdit",this.TCustomInput,function () {
    this.$init = function () {
      $mod.TCustomInput.$init.call(this);
      this.FCharCase = 0;
      this.FMaxLength = 0;
      this.FReadOnly = false;
      this.FText = "";
      this.FTextHint = "";
      this.FSelStart = 0;
      this.FAlignment = 0;
      this.FHideSelection = false;
      this.FPasswordChar = "";
      this.FOnChange = null;
      this.FAutoSize = false;
      this.FAutoSelect = false;
      this.FSelLength = 0;
      this.FNumeric = false;
      this.FAutoCompletion = 0;
      this.FEditType = 0;
      this.FRequired = false;
      this.FAutoFocus = false;
      this.FPattern = "";
      this.FHandlePastePtr = null;
      this.FHandleCutPtr = null;
      this.FHandleChangePtr = null;
      this.FHandleInvalidPtr = null;
      this.FSpellCheck = false;
      this.FRequiredText = "";
    };
    this.$final = function () {
      this.FOnChange = undefined;
      $mod.TCustomInput.$final.call(this);
    };
    this.SetAlignment = function (Value) {
      this.FAlignment = Value;
      this.UpdateElement();
    };
    this.SetHideSelection = function (Value) {
      if (this.FHideSelection !== Value) {
        this.FHideSelection = Value;
        this.UpdateElement();
      };
    };
    this.SetAutoSelect = function (Value) {
      if (this.FAutoSelect !== Value) {
        this.FAutoSelect = Value;
        this.UpdateElement();
      };
    };
    this.SetAutoSize = function (Value) {
      if (this.FAutoSize !== Value) {
        this.FAutoSize = Value;
        this.UpdateElement();
      };
    };
    this.SetSelLength = function (Value) {
      this.FSelLength = Value;
      this.UpdateElement();
    };
    this.SetSelStart = function (Value) {
      this.FSelStart = Value;
      this.UpdateElement();
    };
    this.SetPasswordChar = function (Value) {
      this.FPasswordChar = Value;
      this.UpdateElement();
    };
    this.SetNumeric = function (Value) {
      this.FNumeric = Value;
      this.UpdateElement();
    };
    this.SetAutoCompletion = function (Value) {
      if (this.FAutoCompletion !== Value) {
        this.FAutoCompletion = Value;
        this.UpdateElement();
      };
    };
    this.SetAutoFocus = function (Value) {
      if (this.FAutoFocus !== Value) {
        this.FAutoFocus = Value;
        this.UpdateElement();
      };
    };
    this.SetRequired = function (Value) {
      this.FRequired = Value;
      this.UpdateElement();
    };
    this.SetPattern = function (Value) {
      if (this.FPattern !== Value) {
        this.FPattern = Value;
        this.UpdateElement();
      };
    };
    this.GetSelLength = function () {
      var Result = 0;
      Result = -1;
      if (this.GetElementInputHandle() != null) Result = this.GetElementInputHandle().selectionEnd - this.GetElementInputHandle().selectionStart;
      return Result;
    };
    this.GetSelStart = function () {
      var Result = 0;
      Result = -1;
      if (this.GetElementInputHandle() != null) Result = this.GetElementInputHandle().selectionStart;
      return Result;
    };
    this.SetEditType = function (Value) {
      if (this.FEditType !== Value) {
        this.FEditType = Value;
        this.UpdateElement();
      };
    };
    this.GetSelText = function () {
      var Result = "";
      Result = pas.System.Copy(this.GetText(),this.GetSelStart() + 1,this.GetSelLength());
      return Result;
    };
    this.SetSpellCheck = function (Value) {
      if (this.FSpellCheck !== Value) {
        this.FSpellCheck = Value;
        this.UpdateElement();
      };
    };
    this.GetElementInputHandle = function () {
      var Result = null;
      Result = this.GetContainer();
      return Result;
    };
    this.DoHandlePaste = function (Event) {
      var Result = false;
      var s = "";
      var clp = false;
      clp = false;
      var clipboardData = Event.clipboardData || window.clipboardData;
      if (clipboardData) {
      s = clipboardData.getData('Text');
      clp = true;
      };
      if (clp && (!this.CanPaste(s) || !this.Validate(s))) {
        Event.preventDefault();
        Event.stopPropagation();
      };
      Result = false;
      return Result;
    };
    this.DoHandleCut = function (Event) {
      var Result = false;
      if (!this.CanCut()) {
        Event.preventDefault();
        Event.stopPropagation();
      };
      Result = false;
      return Result;
    };
    this.DoHandleChange = function (Event) {
      var Result = false;
      this.Change();
      Result = true;
      if (this.FRequiredText !== "") {
        this.GetElementInputHandle().setCustomValidity("");
      };
      return Result;
    };
    this.DoHandleInvalid = function (Event) {
      var Result = false;
      this.GetElementInputHandle().setCustomValidity(this.FRequiredText);
      Result = true;
      return Result;
    };
    this.IsCustomEditor = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.KeyPress = function (Key) {
      var isValid = false;
      pas["WEBLib.Controls"].TControl.KeyPress.call(this,Key);
      isValid = true;
      var $tmp = this.FEditType;
      if ($tmp === $mod.TEditType.weNumeric) {
        isValid = Key.get().charCodeAt() in rtl.createSet(null,48,57)}
       else if ($tmp === $mod.TEditType.weSignedNumeric) {
        isValid = Key.get().charCodeAt() in rtl.createSet(null,48,57,43,45)}
       else if ($tmp === $mod.TEditType.weFloat) {
        isValid = Key.get().charCodeAt() in rtl.createSet(null,48,57,44,46)}
       else if ($tmp === $mod.TEditType.weSignedFloat) {
        isValid = Key.get().charCodeAt() in rtl.createSet(null,48,57,44,46,43,45)}
       else if ($tmp === $mod.TEditType.weHex) isValid = Key.get().charCodeAt() in rtl.createSet(null,48,57,null,65,70);
      if (!isValid) Key.set("\x00");
    };
    this.DoEnter = function () {
      var el = null;
      pas["WEBLib.Controls"].TControl.DoEnter.call(this);
      if (this.FAutoSelect && (this.GetElementInputHandle() != null)) {
        el = this.GetElementInputHandle();
        el.select();
      };
    };
    this.GetInputType = function () {
      var Result = "";
      if (this.FPasswordChar !== "\x00") {
        Result = "PASSWORD"}
       else if (this.FNumeric) {
        Result = "NUMBER"}
       else if (this.FEditType in rtl.createSet($mod.TEditType.weFloat,$mod.TEditType.weNumeric)) {
        Result = "TEL"}
       else if (this.FEditType === $mod.TEditType.weSearch) {
        Result = "SEARCH"}
       else Result = "TEXT";
      return Result;
    };
    this.PersistinHTML = function () {
      this.GetElementInputHandle().setAttribute("value",this.GetText());
    };
    this.GetText = function () {
      var Result = "";
      Result = this.FText;
      if (this.GetElementInputHandle() != null) Result = this.GetElementInputHandle().value;
      if (this.FCharCase === $mod.TEditCharCase.wecUpperCase) Result = pas.SysUtils.UpperCase(Result);
      if (this.FCharCase === $mod.TEditCharCase.wecLowerCase) Result = pas.SysUtils.LowerCase(Result);
      return Result;
    };
    this.GetDisplayText = function () {
      var Result = "";
      Result = this.FText;
      return Result;
    };
    this.IsReadOnly = function () {
      var Result = false;
      Result = this.FReadOnly;
      return Result;
    };
    this.Validate = function (AValue) {
      var Result = false;
      var i = 0;
      var Key = "";
      var isvalid = false;
      Result = true;
      for (var $l = 1, $end = AValue.length; $l <= $end; $l++) {
        i = $l;
        Key = AValue.charAt(i - 1);
        isvalid = true;
        var $tmp = this.FEditType;
        if ($tmp === $mod.TEditType.weNumeric) {
          isvalid = Key.charCodeAt() in rtl.createSet(null,48,57)}
         else if ($tmp === $mod.TEditType.weSignedNumeric) {
          isvalid = Key.charCodeAt() in rtl.createSet(null,48,57,43,45)}
         else if ($tmp === $mod.TEditType.weFloat) {
          isvalid = Key.charCodeAt() in rtl.createSet(null,48,57,44,46)}
         else if ($tmp === $mod.TEditType.weSignedFloat) {
          isvalid = Key.charCodeAt() in rtl.createSet(null,48,57,44,46,43,45)}
         else if ($tmp === $mod.TEditType.weHex) isvalid = Key.charCodeAt() in rtl.createSet(null,48,57,null,65,70);
        if (!isvalid) {
          Result = false;
          break;
        };
      };
      return Result;
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FHandlePastePtr = null;
      this.FHandleCutPtr = null;
      this.FHandleChangePtr = null;
      this.FHandleInvalidPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      this.FHandlePastePtr = rtl.createCallback(this,"DoHandlePaste");
      this.FHandleCutPtr = rtl.createCallback(this,"DoHandleCut");
      this.FHandleChangePtr = rtl.createCallback(this,"DoHandleChange");
      this.FHandleInvalidPtr = rtl.createCallback(this,"DoHandleInvalid");
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementInputHandle() != null) {
        this.GetElementInputHandle().addEventListener("input",this.FHandleChangePtr);
        this.GetElementInputHandle().addEventListener("paste",this.FHandlePastePtr);
        this.GetElementInputHandle().addEventListener("cut",this.FHandleCutPtr);
        this.GetElementInputHandle().addEventListener("invalid",this.FHandleInvalidPtr);
      };
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementInputHandle() != null) {
        this.GetElementInputHandle().removeEventListener("input",this.FHandleChangePtr);
        this.GetElementInputHandle().removeEventListener("paste",this.FHandlePastePtr);
        this.GetElementInputHandle().removeEventListener("cut",this.FHandleCutPtr);
        this.GetElementInputHandle().removeEventListener("invalid",this.FHandleInvalidPtr);
      };
    };
    this.UpdateElementData = function () {
      var eh = null;
      var ss = 0;
      var sl = 0;
      var isNum = false;
      var doAc = false;
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetElementInputHandle() != null) {
        if (!this.GetIsLinked()) {
          var $tmp = this.FCharCase;
          if ($tmp === $mod.TEditCharCase.wecUpperCase) {
            this.GetElementInputHandle().style.setProperty("text-transform","uppercase")}
           else if ($tmp === $mod.TEditCharCase.wecLowerCase) {
            this.GetElementInputHandle().style.setProperty("text-transform","lowercase")}
           else if ($tmp === $mod.TEditCharCase.wecMixedCase) {
            this.GetElementInputHandle().style.setProperty("text-transform","capitalize")}
           else if ($tmp === $mod.TEditCharCase.wecNormal) this.GetElementInputHandle().style.setProperty("text-transform","initial");
        };
        this.GetElementInputHandle().readOnly = this.IsReadOnly();
        if (this.FTextHint !== "") this.GetElementInputHandle().placeholder = this.FTextHint;
        doAc = true;
        if (this.GetIsLinked()) {
          doAc = !this.GetElementInputHandle().hasAttribute("autocomplete");
        };
        if (doAc) {
          if (this.FAutoCompletion === $mod.TAutoCompletion.acNope) {
            this.GetElementInputHandle().setAttribute("autocomplete","nope");
            if (!this.GetIsLinked()) this.GetElementInputHandle().removeAttribute("name");
          } else if (this.FAutoCompletion === $mod.TAutoCompletion.acNone) {
            this.GetElementInputHandle().setAttribute("autocomplete","off");
            if (!this.GetIsLinked()) this.GetElementInputHandle().removeAttribute("name");
          } else if (this.FAutoCompletion !== $mod.TAutoCompletion.acOff) {
            this.GetElementInputHandle().setAttribute("autocomplete","on");
            if (!this.GetIsLinked()) this.GetElementInputHandle().setAttribute("name",$mod.GetAutoCompletionName(this.FAutoCompletion));
          } else {
            this.GetElementInputHandle().removeAttribute("autocomplete");
            if (!this.GetIsLinked()) this.GetElementInputHandle().removeAttribute("name");
          };
        };
        if (!this.GetIsLinked()) {
          this.GetElementInputHandle().setAttribute("type",this.GetInputType());
          this.GetElementInputHandle().setAttribute("role","textbox");
          var $tmp1 = this.FAlignment;
          if ($tmp1 === pas.Classes.TAlignment.taLeftJustify) {
            this.GetElementInputHandle().style.removeProperty("text-align")}
           else if ($tmp1 === pas.Classes.TAlignment.taCenter) {
            this.GetElementInputHandle().style.setProperty("text-align","center")}
           else if ($tmp1 === pas.Classes.TAlignment.taRightJustify) this.GetElementInputHandle().style.setProperty("text-align","right");
        };
        if (this.FRequired) {
          this.GetElementInputHandle().setAttribute("required","")}
         else if (!this.GetIsLinked()) this.GetElementInputHandle().removeAttribute("required");
        if (this.FAutoFocus) {
          this.GetElementInputHandle().setAttribute("autofocus","")}
         else if (!this.GetIsLinked()) this.GetElementInputHandle().removeAttribute("autofocus");
        if (this.FPattern !== "") {
          this.GetElementInputHandle().setAttribute("pattern",this.FPattern)}
         else this.GetElementInputHandle().removeAttribute("pattern");
        if (this.FMaxLength <= 0) {
          this.GetElementInputHandle().removeAttribute("maxLength")}
         else this.GetElementInputHandle().maxLength = this.FMaxLength;
        this.GetElementInputHandle().value = this.GetDisplayText();
        isNum = pas.SysUtils.UpperCase(this.GetInputType()) === "NUMBER";
        if (!this.FSpellCheck) {
          this.GetElementInputHandle().setAttribute("spellcheck","false")}
         else this.GetElementInputHandle().removeAttribute("spellcheck");
        if (!isNum && !this.GetIsLinked() && !this.IsCustomEditor()) {
          ss = this.FSelStart;
          sl = this.FSelStart + this.FSelLength;
          eh = this.GetElementInputHandle();
          setTimeout(function() {
            eh.setSelectionRange(ss, sl);
          }, 1);
        };
      };
    };
    this.SetCharCase = function (AValue) {
      if (this.FCharCase !== AValue) {
        this.FCharCase = AValue;
        this.UpdateElement();
      };
    };
    this.SetMaxLength = function (AValue) {
      if (this.FMaxLength !== AValue) {
        this.FMaxLength = AValue;
        this.UpdateElementData();
      };
    };
    this.SetReadOnly = function (AValue) {
      if (this.FReadOnly !== AValue) {
        this.FReadOnly = AValue;
        this.UpdateElement();
      };
    };
    this.SetText = function (AValue) {
      this.FText = AValue;
      if (this.GetElementInputHandle() != null) {
        this.GetElementInputHandle().value = this.GetDisplayText();
        this.GetElementInputHandle().readOnly = this.IsReadOnly();
      };
    };
    this.SetTextHint = function (AValue) {
      this.FTextHint = AValue;
      this.UpdateElement();
    };
    this.CanPaste = function (AValue) {
      var Result = false;
      Result = true;
      return Result;
    };
    this.CanCut = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.CreateInitialize = function () {
      $mod.TCustomInput.CreateInitialize.call(this);
      this.FAutoCompletion = $mod.TAutoCompletion.acOff;
      this.FEditType = $mod.TEditType.weString;
      this.FText = "";
      this.FCharCase = $mod.TEditCharCase.wecNormal;
      this.FMaxLength = 0;
      this.FReadOnly = false;
      this.FTextHint = "";
      this.FPasswordChar = "\x00";
      this.FSpellCheck = true;
      this.FAutoSelect = true;
      this.SetHeight(25);
    };
    this.Clear = function () {
      this.SetText("");
    };
    this.ClearSelection = function () {
      var s = "";
      s = this.GetText();
      this.SetText(pas.System.Copy(s,1,this.GetSelStart()) + pas.System.Copy(s,this.GetSelStart() + this.GetSelLength(),s.length));
    };
    this.Change = function () {
      if (this.GetElementHandle() != null) this.FText = this.GetElementInputHandle().value;
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.SelectAll = function () {
      if (this.GetElementInputHandle() != null) this.GetElementInputHandle().select();
    };
    this.CopyToClipboard = function () {
      var s = "";
      s = this.GetText();
      navigator.clipboard.writeText(s);
    };
    this.SetSelection = function (ASelStart, ASelLength) {
      var eh = null;
      this.FSelStart = ASelStart;
      this.FSelLength = ASelLength;
      eh = this.GetElementInputHandle();
      if (eh != null) {
        eh.setSelectionRange(ASelStart, ASelStart + ASelLength);
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TEdit",this.TCustomEdit,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment");
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoCompletion",2,$mod.$rtti["TAutoCompletion"],"FAutoCompletion","SetAutoCompletion",{Default: $mod.TAutoCompletion.acOff});
    $r.addProperty("AutoFocus",2,rtl.boolean,"FAutoFocus","SetAutoFocus",{Default: false});
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("AutoSelect",2,rtl.boolean,"FAutoSelect","SetAutoSelect",{Default: true});
    $r.addProperty("BiDiMode",2,pas["WEBLib.Controls"].$rtti["TBiDiMode"],"FBiDiMode","SetBiDiMode",{Default: pas["WEBLib.Controls"].TBiDiMode.bdLeftToRight});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("CharCase",2,$mod.$rtti["TEditCharCase"],"FCharCase","SetCharCase",{Default: $mod.TEditCharCase.wecNormal});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("EditType",2,$mod.$rtti["TEditType"],"FEditType","SetEditType",{Default: $mod.TEditType.weString});
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
  });
  rtl.createClass(this,"TWebEdit",this.TEdit,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TSpinEdit",this.TCustomInput,function () {
    this.$init = function () {
      $mod.TCustomInput.$init.call(this);
      this.FIncrement = 0;
      this.FMaxValue = 0;
      this.FMinValue = 0;
      this.FValue = 0;
      this.FAutoSize = false;
      this.FOnChange = null;
      this.FReadOnly = false;
      this.FHandleChangePtr = null;
      this.FHandleInvalidPtr = null;
      this.FRequiredText = "";
      this.FRequired = false;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      $mod.TCustomInput.$final.call(this);
    };
    this.GetText = function () {
      var Result = "";
      Result = pas.SysUtils.IntToStr(this.GetValue());
      return Result;
    };
    this.SetText = function (Value) {
      var i = 0;
      i = 0;
      if (pas.SysUtils.TryStrToInt(Value,{get: function () {
          return i;
        }, set: function (v) {
          i = v;
        }})) {
        this.SetValue(i)}
       else this.SetValue(0);
    };
    this.GetElementInputHandle = function () {
      var Result = null;
      Result = this.GetContainer();
      return Result;
    };
    this.SetReadOnly = function (Value) {
      if (this.FReadOnly !== Value) {
        this.FReadOnly = Value;
        this.UpdateElement();
      };
    };
    this.SetRequired = function (Value) {
      if (this.FRequired !== Value) {
        this.FRequired = Value;
        this.UpdateElement();
      };
    };
    this.KeyPress = function (Key) {
      if (!(Key.get().charCodeAt() in rtl.createSet(null,48,57))) {
        Key.set("\x00");
        this.PreventDefault();
        this.StopPropagation();
      };
      pas["WEBLib.Controls"].TControl.KeyPress.apply(this,arguments);
    };
    this.PersistinHTML = function () {
      this.GetElementInputHandle().setAttribute("value",pas.SysUtils.IntToStr(this.GetValue()));
    };
    this.GetInputType = function () {
      var Result = "";
      Result = "NUMBER";
      return Result;
    };
    this.UpdateElementData = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetContainer() != null) {
        this.GetContainer().setAttribute("inputmode","numeric");
        this.GetContainer().setAttribute("pattern","[0-9]*");
        this.GetContainer().value = this.GetDisplayText();
        this.GetElementInputHandle().readOnly = this.IsReadOnly();
        if (this.FRequired) {
          this.GetElementInputHandle().setAttribute("required","")}
         else this.GetElementInputHandle().removeAttribute("required");
      };
    };
    this.GetValue = function () {
      var Result = 0;
      var s = "";
      Result = this.FValue;
      if (!(this.GetContainer() != null)) return Result;
      s = this.GetContainer().value;
      if (s !== "") Result = pas.SysUtils.StrToInt(s);
      return Result;
    };
    this.SetIncrement = function (AValue) {
      this.FIncrement = AValue;
      if (this.GetContainer() != null) this.GetContainer().setAttribute("step",pas.SysUtils.IntToStr(AValue));
    };
    this.SetMaxValue = function (AValue) {
      this.FMaxValue = AValue;
      if (this.GetContainer() != null) this.GetContainer().setAttribute("max",pas.SysUtils.IntToStr(AValue));
    };
    this.SetMinValue = function (AValue) {
      this.FMinValue = AValue;
      if (this.GetContainer() != null) this.GetContainer().setAttribute("min",pas.SysUtils.IntToStr(AValue));
    };
    this.SetValue = function (AValue) {
      this.FValue = AValue;
      this.UpdateElement();
    };
    this.DoHandleChange = function (Event) {
      var Result = false;
      this.Change();
      Result = true;
      if (this.FRequiredText !== "") {
        this.GetElementInputHandle().setCustomValidity("");
      };
      return Result;
    };
    this.DoHandleInvalid = function (Event) {
      var Result = false;
      this.GetElementInputHandle().setCustomValidity(this.FRequiredText);
      Result = true;
      return Result;
    };
    this.IsReadOnly = function () {
      var Result = false;
      Result = this.FReadOnly;
      return Result;
    };
    this.GetDisplayText = function () {
      var Result = "";
      Result = pas.SysUtils.IntToStr(this.FValue);
      return Result;
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementInputHandle() != null) {
        this.GetElementInputHandle().addEventListener("input",this.FHandleChangePtr);
        this.GetElementInputHandle().addEventListener("invalid",this.FHandleInvalidPtr);
      };
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementInputHandle() != null) {
        this.GetElementInputHandle().removeEventListener("input",this.FHandleChangePtr);
        this.GetElementInputHandle().removeEventListener("invalid",this.FHandleInvalidPtr);
      };
    };
    this.Change = function () {
      this.FValue = this.GetValue();
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FHandleChangePtr = null;
      this.FHandleInvalidPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      this.FHandleChangePtr = rtl.createCallback(this,"DoHandleChange");
      this.FHandleInvalidPtr = rtl.createCallback(this,"DoHandleInvalid");
    };
    this.CreateInitialize = function () {
      $mod.TCustomInput.CreateInitialize.call(this);
      this.FIncrement = 1;
      this.FMaxValue = 100;
      this.FMinValue = 0;
      this.SetShowFocus(true);
      this.SetHeight(25);
      this.AddControlStyle('input[type="number"]::-webkit-inner-spin-button { opacity: 1 !important; }');
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoSize",0,rtl.boolean,"FAutoSize","FAutoSize");
    $r.addProperty("BiDiMode",2,pas["WEBLib.Controls"].$rtti["TBiDiMode"],"FBiDiMode","SetBiDiMode",{Default: pas["WEBLib.Controls"].TBiDiMode.bdLeftToRight});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
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
    $r.addProperty("Increment",2,rtl.longint,"FIncrement","SetIncrement");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("MaxValue",2,rtl.longint,"FMaxValue","SetMaxValue",{Default: 100});
    $r.addProperty("MinValue",2,rtl.longint,"FMinValue","SetMinValue",{Default: 0});
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("ReadOnly",2,rtl.boolean,"FReadOnly","SetReadOnly",{Default: false});
    $r.addProperty("Required",2,rtl.boolean,"FRequired","SetRequired",{Default: false});
    $r.addProperty("RequiredText",0,rtl.string,"FRequiredText","FRequiredText");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TextDirection",0,pas["WEBLib.Controls"].$rtti["TTextDirection"],"FTextDirection","FTextDirection",{Default: pas["WEBLib.Controls"].TTextDirection.tdDefault});
    $r.addProperty("Value",3,rtl.longint,"GetValue","SetValue");
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
  });
  rtl.createClass(this,"TWebSpinEdit",this.TSpinEdit,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TDateTimePicker",this.TCustomInput,function () {
    this.$init = function () {
      $mod.TCustomInput.$init.call(this);
      this.FDate = 0.0;
      this.FTime = 0.0;
      this.FKind = 0;
      this.FOnChange = null;
      this.FReadOnly = false;
      this.FElementCheck = null;
      this.FElementPicker = null;
      this.FShowCheckBox = false;
      this.FClickPtr$1 = null;
      this.FHandleChangePtr = null;
      this.FFocusPtr = null;
      this.FBlurPtr = null;
      this.FChecked = false;
      this.FShowSeconds = false;
      this.FAutoDropDown = false;
      this.FIsBootstrap = false;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      this.FElementCheck = undefined;
      this.FElementPicker = undefined;
      $mod.TCustomInput.$final.call(this);
    };
    this.SetDate = function (AValue) {
      if (this.FDate !== AValue) {
        this.FDate = pas.System.Int(AValue);
        this.FTime = 0;
        this.UpdateElementData();
      };
    };
    this.GetDate = function () {
      var Result = 0.0;
      var str = "";
      Result = pas.System.Int(this.FDate) + pas.System.Frac(this.FTime);
      if (!(this.GetElementPicker() != null)) return Result;
      str = this.GetElementPicker().value;
      if (this.FKind === $mod.TDateTimeKind.dtkDate) {
        Result = pas["WEBLib.WebTools"].PickerDateToDate(str) + pas.System.Frac(this.FTime);
      } else Result = this.FTime;
      return Result;
    };
    this.SetTime = function (AValue) {
      if (this.FTime !== AValue) {
        this.FDate = 0;
        this.FTime = AValue;
        this.UpdateElementData();
      };
    };
    this.GetTime = function () {
      var Result = 0.0;
      var str = "";
      if (this.FDate > 0) {
        Result = pas.System.Frac(this.FTime) + pas.System.Int(this.FDate)}
       else Result = pas.System.Frac(this.FTime);
      if (!(this.GetElementPicker() != null)) return Result;
      str = this.GetElementPicker().value;
      if (this.FKind === $mod.TDateTimeKind.dtkTime) {
        Result = pas["WEBLib.WebTools"].PickerTimeToTime(str) + pas.System.Int(this.FDate);
      } else Result = this.FTime;
      return Result;
    };
    this.SetKind = function (AValue) {
      var dt = 0.0;
      this.FKind = AValue;
      if (this.GetElementPicker() != null) {
        dt = pas.System.Int(this.FDate) + pas.System.Frac(this.FTime);
        if (AValue === $mod.TDateTimeKind.dtkDate) {
          this.GetElementPicker().setAttribute("type","DATE")}
         else this.GetElementPicker().setAttribute("type","TIME");
        this.SetDate(dt);
        this.SetTime(dt);
        this.UpdateElement();
      };
    };
    this.SetText = function (Value) {
      if (!(this.GetElementPicker() != null)) return;
    };
    this.GetText = function () {
      var Result = "";
      Result = "";
      if (!(this.GetElementPicker() != null)) return Result;
      Result = this.GetElementPicker().value;
      return Result;
    };
    this.SetReadOnly = function (Value) {
      this.FReadOnly = Value;
      this.UpdateElement();
    };
    this.SetShowCheckBox = function (Value) {
      if (this.FShowCheckBox !== Value) {
        this.FShowCheckBox = Value;
        this.UpdateElementVisual();
      };
    };
    this.SetChecked = function (Value) {
      if (this.FChecked !== Value) {
        this.FChecked = Value;
        this.UpdateElementVisual();
      };
    };
    this.GetDateTime = function () {
      var Result = 0.0;
      Result = pas.System.Int(this.FDate) + pas.System.Frac(this.FTime);
      return Result;
    };
    this.SetDateTime = function (Value) {
      this.FDate = pas.System.Int(Value);
      this.FTime = pas.System.Frac(Value);
      this.UpdateElementData();
    };
    this.SetShowSeconds = function (Value) {
      if (this.FShowSeconds !== Value) {
        this.FShowSeconds = Value;
        this.UpdateElement();
      };
    };
    this.DoCheckClick = function (Event) {
      var Result = false;
      this.FChecked = this.FElementCheck.checked;
      if (this.FChecked) {
        this.GetElementPicker().removeAttribute("disabled")}
       else this.GetElementPicker().setAttribute("disabled","true");
      Result = true;
      return Result;
    };
    this.DoPickerFocus = function (Event) {
      var Result = false;
      if (!this.GetIsLinked() && !this.FIsBootstrap) this.GetElementHandle().style.setProperty("outline","auto");
      Result = true;
      this.DoEnter();
      return Result;
    };
    this.DoPickerBlur = function (Event) {
      var Result = false;
      if (!this.GetIsLinked() && !this.FIsBootstrap) this.GetElementHandle().style.setProperty("outline","none");
      Result = true;
      this.DoExit();
      return Result;
    };
    this.DoHandleChange = function (Event) {
      var Result = false;
      this.Change();
      Result = true;
      return Result;
    };
    this.HandleDoEnter = function (Event) {
      var Result = false;
      var el = null;
      Result = pas["WEBLib.Controls"].TControl.HandleDoEnter.call(this,Event);
      if (this.FAutoDropDown) {
        el = this.GetElementPicker();
        el.showPicker();
      };
      return Result;
    };
    this.GetElementBindHandle = function () {
      var Result = null;
      Result = this.GetElementPicker();
      return Result;
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.FElementCheck != null) this.FElementCheck.addEventListener("click",this.FClickPtr$1);
      if (this.GetElementPicker() != null) {
        this.GetElementPicker().addEventListener("input",this.FHandleChangePtr);
        this.GetElementPicker().addEventListener("focus",this.FFocusPtr);
        this.GetElementPicker().addEventListener("blur",this.FBlurPtr);
      };
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.FElementCheck != null) this.FElementCheck.removeEventListener("click",this.FClickPtr$1);
      if (this.GetElementPicker() != null) {
        this.GetElementPicker().removeEventListener("input",this.FHandleChangePtr);
        this.GetElementPicker().removeEventListener("focus",this.FFocusPtr);
        this.GetElementPicker().removeEventListener("blur",this.FBlurPtr);
      };
    };
    this.UpdateElementData = function () {
      var el = null;
      var s = "";
      var i = 0;
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      el = this.GetElementPicker();
      if (el != null) {
        el.setAttribute("step","1");
        var $tmp = this.FKind;
        if ($tmp === $mod.TDateTimeKind.dtkTime) {
          s = pas.SysUtils.FormatDateTime("HH:MM:SS",this.FTime);
          for (var $l = 1, $end = s.length; $l <= $end; $l++) {
            i = $l;
            if (!(s.charCodeAt(i - 1) in rtl.createSet(null,48,57))) s = rtl.setCharAt(s,i - 1,":");
          };
          el.value = s;
          if (!this.FShowSeconds) el.setAttribute("step","60");
        } else if ($tmp === $mod.TDateTimeKind.dtkDate) {
          if (this.FDate === 0) {
            el.value = ""}
           else {
            s = pas.SysUtils.FormatDateTime("yyyy-MM-dd",this.FDate);
            for (var $l1 = 1, $end1 = s.length; $l1 <= $end1; $l1++) {
              i = $l1;
              if (!(s.charCodeAt(i - 1) in rtl.createSet(null,48,57))) s = rtl.setCharAt(s,i - 1,"-");
            };
            el.value = s;
          };
        };
        if (this.FTabStop) {
          el.setAttribute("tabindex",pas.SysUtils.IntToStr(this.FTabOrder))}
         else el.setAttribute("tabindex","-1");
        el.readOnly = this.IsReadOnly();
        if (this.IsEnabled()) {
          el.removeAttribute("disabled")}
         else el.setAttribute("disabled","");
      };
    };
    this.UpdateElementVisual = function () {
      var frm = null;
      $mod.TCustomInput.UpdateElementVisual.call(this);
      frm = pas["WEBLib.Forms"].GetParentForm(this);
      this.FIsBootstrap = (frm != null) && (frm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap) && (this.FElementClassName !== "");
      if ((this.GetElementPicker() != null) && (this.GetElementHandle() != null) && (this.FElementCheck != null)) {
        this.FElementCheck.setAttribute("type","CHECKBOX");
        if (this.FKind === $mod.TDateTimeKind.dtkDate) {
          this.GetElementPicker().setAttribute("type","DATE")}
         else this.GetElementPicker().setAttribute("type","TIME");
        if (this.FElementClassName === "") {
          this.GetElementPicker().style.setProperty("border","none");
          this.GetElementPicker().style.setProperty("border-width","0px");
          this.GetElementPicker().style.setProperty("outline","none");
          this.GetElementPicker().style.setProperty("font-family","inherit");
          this.GetElementPicker().style.setProperty("font-size","inherit");
          this.GetElementPicker().style.setProperty("width","100%");
          this.GetElementPicker().style.setProperty("height","100%");
        } else {
          if (this.FIsBootstrap) {
            this.GetElementPicker().setAttribute("class",this.FElementClassName);
            this.GetElementHandle().removeAttribute("class");
          };
        };
        if (!this.GetIsLinked()) {
          this.GetElementHandle().style.setProperty("padding","1px");
          this.GetElementHandle().style.setProperty("outline","none");
        };
        if ((this.FBorderStyle === pas["WEBLib.Controls"].TBorderStyle.bsSingle) && (this.FElementClassName === "")) {
          if (!this.FEnabled) {
            this.GetElementHandle().style.setProperty("border","1px silver solid")}
           else this.GetElementHandle().style.setProperty("border","1px solid");
          this.GetElementHandle().style.setProperty("border-radius","3px");
        } else {
          if (this.FIsBootstrap) {
            this.GetElementHandle().style.removeProperty("border");
            this.GetElementHandle().style.removeProperty("box-sizing");
          };
        };
        if (this.FElementCheck != null) {
          if (this.FShowCheckBox) {
            this.FElementCheck.style.setProperty("display","")}
           else this.FElementCheck.style.setProperty("display","none");
        };
        if (this.FShowCheckBox) {
          if (this.FChecked) {
            this.GetElementPicker().removeAttribute("disabled")}
           else this.GetElementPicker().setAttribute("disabled","true");
        };
      };
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      this.FElementCheck = document.createElement("INPUT");
      this.FElementPicker = document.createElement("INPUT");
      Result.appendChild(this.FElementCheck);
      Result.appendChild(this.FElementPicker);
      return Result;
    };
    this.GetInputType = function () {
      var Result = "";
      if (this.FKind === $mod.TDateTimeKind.dtkDate) {
        Result = "DATE"}
       else Result = "TIME";
      return Result;
    };
    this.Change = function () {
      this.FTime = this.GetTime();
      this.FDate = this.GetDate();
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.IsReadOnly = function () {
      var Result = false;
      Result = this.FReadOnly;
      return Result;
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FHandleChangePtr = null;
      this.FBlurPtr = null;
      this.FFocusPtr = null;
      this.FClickPtr$1 = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      this.FHandleChangePtr = rtl.createCallback(this,"DoHandleChange");
      this.FClickPtr$1 = rtl.createCallback(this,"DoCheckClick");
      this.FFocusPtr = rtl.createCallback(this,"DoPickerFocus");
      this.FBlurPtr = rtl.createCallback(this,"DoPickerBlur");
    };
    this.GetElementPicker = function () {
      var Result = null;
      if (this.GetIsLinked()) {
        Result = this.GetElementHandle()}
       else Result = this.FElementPicker;
      return Result;
    };
    this.SetEnabled = function (Value) {
      var el = null;
      pas["WEBLib.Controls"].TControl.SetEnabled.apply(this,arguments);
      el = this.GetElementPicker();
      if (el != null) {
        if (Value) {
          el.removeAttribute("disabled")}
         else el.setAttribute("disabled","");
      };
    };
    this.CreateInitialize = function () {
      $mod.TCustomInput.CreateInitialize.call(this);
      this.SetDate(pas.SysUtils.Now());
      this.SetShowFocus(true);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(170);
        this.SetHeight(25);
      };
      this.FDate = pas.System.Int(pas.SysUtils.Now());
      this.FTime = 0;
      this.FReadOnly = false;
      this.FShowSeconds = true;
      this.FIsBootstrap = false;
    };
    this.Clear = function () {
      this.GetElementPicker().value = "";
    };
    this.SetFocus = function () {
      if (this.GetElementPicker() != null) {
        this.GetElementPicker().focus();
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoDropDown",0,rtl.boolean,"FAutoDropDown","FAutoDropDown",{Default: false});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("Checked",2,rtl.boolean,"FChecked","SetChecked",{Default: false});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("Date",3,pas.System.$rtti["TDate"],"GetDate","SetDate");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("Kind",2,$mod.$rtti["TDateTimeKind"],"FKind","SetKind");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("ReadOnly",2,rtl.boolean,"FReadOnly","SetReadOnly",{Default: false});
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowCheckBox",2,rtl.boolean,"FShowCheckBox","SetShowCheckBox",{Default: false});
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("ShowSeconds",2,rtl.boolean,"FShowSeconds","SetShowSeconds",{Default: true});
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("Text",3,rtl.string,"GetText","SetText");
    $r.addProperty("TextDirection",0,pas["WEBLib.Controls"].$rtti["TTextDirection"],"FTextDirection","FTextDirection",{Default: pas["WEBLib.Controls"].TTextDirection.tdDefault});
    $r.addProperty("Time",3,pas.System.$rtti["TTime"],"GetTime","SetTime");
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
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
  });
  rtl.createClass(this,"TWebDateTimePicker",this.TDateTimePicker,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TButton",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FModalResult = 0;
      this.FDefault = false;
      this.FCancel = false;
      this.FButtonType = "";
    };
    this.SetButtonType = function (Value) {
      this.FButtonType = Value;
      this.UpdateElementData();
    };
    this.SetDefault = function (Value) {
      this.FDefault = Value;
      if (this.FDefault) this.SetFocus();
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("BUTTON");
      Result.setAttribute("type","BUTTON");
      return Result;
    };
    this.SetCaption = function (AValue) {
      if (this.FCaption !== AValue) {
        pas["WEBLib.Controls"].TCustomControl.SetCaption.call(this,AValue);
        this.UpdateElementData();
      };
    };
    this.UpdateElementData = function () {
      var acc = "";
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetIsLinked() && (this.FCaption === "")) return;
      if (this.GetElementHandle() != null) {
        if ((this.GetElementHandle().childElementCount === 0) || (pas.System.Pos("</",this.FCaption) > 0) || !this.GetIsLinked()) {
          this.GetElementHandle().innerHTML = pas["WEBLib.WebTools"].ProcessAccelerator(this.FCaption,{get: function () {
              return acc;
            }, set: function (v) {
              acc = v;
            }});
        };
        if (acc !== "") this.GetElementHandle().setAttribute("accesskey",acc);
        this.GetElementHandle().setAttribute("role","button");
        this.GetElementHandle().setAttribute("aria-label",this.FCaption);
        if (this.FButtonType !== "") {
          this.GetElementHandle().setAttribute("type",this.FButtonType)}
         else this.GetElementHandle().setAttribute("type","BUTTON");
      };
    };
    this.UpdateElementVisual = function () {
      var ecn = "";
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().style.removeProperty("outline");
        this.GetElementHandle().style.removeProperty("user-select");
        ecn = pas.SysUtils.UpperCase(this.FElementClassName);
        if ((ecn === "BTN") || (pas.System.Pos("BTN ",ecn) > 0)) ;
      };
    };
    this.HandleKeyPreview = function (Key) {
      pas["WEBLib.Controls"].TControl.HandleKeyPreview.apply(this,arguments);
      if (this.FDefault && (Key === 13)) {
        this.Click();
      };
      if (this.FCancel && (Key === 27)) {
        this.Click();
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      if ((pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && (this.FCaption === "")) this.SetCaption(this.FName);
      this.SetColor(-1);
      this.FModalResult = 0;
    };
    this.Click = function () {
      var frm = null;
      pas["WEBLib.Controls"].TControl.Click.call(this);
      if (this.FModalResult !== 0) {
        frm = pas["WEBLib.Forms"].GetParentForm(this);
        if (frm != null) frm.SetModalResult(this.FModalResult);
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("BiDiMode",2,pas["WEBLib.Controls"].$rtti["TBiDiMode"],"FBiDiMode","SetBiDiMode",{Default: pas["WEBLib.Controls"].TBiDiMode.bdLeftToRight});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("ButtonType",2,rtl.string,"FButtonType","SetButtonType");
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("Cancel",0,rtl.boolean,"FCancel","FCancel",{Default: false});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("Default",2,rtl.boolean,"FDefault","SetDefault",{Default: false});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
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
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("ModalResult",0,rtl.longint,"FModalResult","FModalResult",{Default: 0});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("TextDirection",0,pas["WEBLib.Controls"].$rtti["TTextDirection"],"FTextDirection","FTextDirection",{Default: pas["WEBLib.Controls"].TTextDirection.tdDefault});
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
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
  });
  rtl.createClass(this,"TWebButton",this.TButton,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TCheckBox",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FChecked = false;
      this.FState = 0;
      this.FElementButtonClassName = "";
      this.FElementLabelClassName = "";
      this.FOnCheckClick = null;
      this.FAlignment = 0;
    };
    this.$final = function () {
      this.FOnCheckClick = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.SetAlignment = function (Value) {
      if (this.FAlignment !== Value) {
        this.FAlignment = Value;
        this.UpdateElementVisual();
      };
    };
    this.Loaded = function () {
      var lbl = null;
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      if (this.GetContainer() != null) {
        if (!this.GetIsLinked()) {
          lbl = this.GetContainer().children.item(1);
          lbl.onclick = rtl.createSafeCallback(this,"HandleLabelClick");
        };
      };
    };
    this.UpdateElementData = function () {
      var chk = null;
      var btn = null;
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetContainer() != null) {
        chk = this.GetCheckElement();
        chk.disabled = !this.IsEnabled();
        chk.checked = this.FChecked;
        chk.indeterminate = this.GetState() === $mod.TCheckBoxState.cbGrayed;
        if (!this.GetIsLinked()) {
          if (this.FCaption !== "") this.GetContainer().lastElementChild.innerHTML = this.FCaption;
          this.GetElementHandle().setAttribute("tabindex","-1");
          btn = this.GetElementHandle().firstChild;
          btn.setAttribute("tabindex","-1");
        };
        if (this.FTabStop) this.GetContainer().setAttribute("tabindex",pas.SysUtils.IntToStr(this.FTabOrder));
      };
    };
    this.UpdateElementSize = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementSize.call(this);
      if ((this.GetContainer() != null) && !this.GetIsLinked() && (this.FElementPosition === pas["WEBLib.Controls"].TElementPosition.epAbsolute)) {
        if (this.FHeightStyle !== pas["WEBLib.Controls"].TSizeStyle.ssAuto) {
          this.GetContainer().firstElementChild.style.setProperty("height","100%")}
         else this.GetContainer().firstElementChild.style.removeProperty("height");
      };
    };
    this.UpdateElementVisual = function () {
      var btn = null;
      var lbl = null;
      var frm = null;
      var isbs = false;
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.GetElementHandle() != null) {
        btn = this.GetElementHandle().firstChild;
        if (btn != null) {
          if (btn.style != null) btn.style.setProperty("margin-right","4px");
          if (this.FElementButtonClassName !== "") {
            btn.setAttribute("class",this.FElementButtonClassName)}
           else btn.removeAttribute("class");
        };
        lbl = this.GetElementHandle().lastElementChild;
        if (lbl != null) {
          if (this.FElementLabelClassName !== "") {
            lbl.setAttribute("class",this.FElementLabelClassName)}
           else lbl.removeAttribute("class");
        };
        if (!this.FTabStop || !this.FShowFocus || (this.FElementClassName !== "")) this.GetElementHandle().style.setProperty("outline","none");
        if (!this.GetIsLinked()) {
          this.GetElementHandle().style.setProperty("user-select","none");
          if (this.FElementPosition === pas["WEBLib.Controls"].TElementPosition.epAbsolute) {
            if (this.FElementButtonClassName === "") {
              if (this.FAlignment === pas.Classes.TAlignment.taRightJustify) {
                btn.style.setProperty("float","left");
              } else {
                btn.style.setProperty("float","right");
              };
              if (this.FHeightStyle === pas["WEBLib.Controls"].TSizeStyle.ssAuto) {
                btn.style.removeProperty("height")}
               else if (this.FElementPosition === pas["WEBLib.Controls"].TElementPosition.epAbsolute) btn.style.setProperty("height","100%");
              btn.style.setProperty("vertical-align","middle");
              if (!$mod.TCheckGroup.isPrototypeOf(this.FParent)) {
                btn.style.setProperty("margin-top","0px");
                btn.style.setProperty("margin-bottom","0px");
              };
            };
            frm = pas["WEBLib.Forms"].GetParentForm(this);
            isbs = (frm != null) && (frm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap);
            if ((this.FElementLabelClassName === "") || isbs) {
              lbl = this.GetContainer().lastElementChild;
              lbl.style.setProperty("vertical-align","middle");
              lbl.style.setProperty("min-height","100%");
              lbl.style.setProperty("height","100%");
              lbl.style.setProperty("position","absolute");
              lbl.style.setProperty("overflow","hidden");
              lbl.style.setProperty("display","inline-flex");
              lbl.style.setProperty("align-items","center");
            };
          };
        };
      };
    };
    this.PersistinHTML = function () {
      var cb = null;
      if (!(this.GetContainer() != null)) return;
      cb = this.GetCheckElement();
      if (cb.checked) {
        cb.setAttribute("checked","checked")}
       else cb.removeAttribute("checked");
    };
    this.CreateElement = function () {
      var Result = null;
      var btn = null;
      var lbl = null;
      Result = document.createElement("SPAN");
      btn = document.createElement("INPUT");
      lbl = document.createElement("SPAN");
      btn.setAttribute("TYPE","CHECKBOX");
      btn.setAttribute("id",this.GetID());
      btn.setAttribute("role","checkbox");
      lbl.setAttribute("id",this.GetID() + "lbl");
      lbl.setAttribute("value",this.GetID());
      Result.appendChild(btn);
      Result.appendChild(lbl);
      rtl.asExt(btn,HTMLInputElement).onclick = rtl.createSafeCallback(this,"HandleCheckClick");
      return Result;
    };
    this.SetChecked = function (AValue) {
      this.FChecked = AValue;
      if (AValue) {
        this.FState = $mod.TCheckBoxState.cbChecked}
       else this.FState = $mod.TCheckBoxState.cbUnchecked;
      this.UpdateElement();
    };
    this.GetChecked = function () {
      var Result = false;
      if (this.GetContainer() != null) this.FChecked = this.GetCheckElement().checked;
      Result = this.FChecked;
      return Result;
    };
    this.SetState = function (AValue) {
      this.FState = AValue;
      this.FChecked = this.FState === $mod.TCheckBoxState.cbChecked;
      this.UpdateElement();
    };
    this.GetState = function () {
      var Result = 0;
      Result = this.FState;
      return Result;
    };
    this.SetCaption = function (AValue) {
      if (this.FCaption !== AValue) {
        pas["WEBLib.Controls"].TCustomControl.SetCaption.call(this,AValue);
        if (this.GetContainer() != null) {
          if (this.GetIsLinked()) {
            if ((this.GetContainer().lastElementChild != null) && (this.GetContainer().lastElementChild.tagName === "SPAN")) this.GetContainer().lastElementChild.innerHTML = AValue;
          } else if (this.GetContainer().lastElementChild != null) this.GetContainer().lastElementChild.innerHTML = AValue;
        };
      };
    };
    this.SetEnabled = function (Value) {
      pas["WEBLib.Controls"].TControl.SetEnabled.apply(this,arguments);
      if (this.GetContainer() != null) this.GetCheckElement().disabled = !Value;
    };
    this.HandleLabelClick = function (Event) {
      var Result = false;
      var chk = null;
      if ((this.GetContainer() != null) && this.FEnabled) {
        chk = this.GetCheckElement();
        chk.checked = !chk.checked;
        this.SetChecked(chk.checked);
      };
      this.DoCheckClick();
      Result = true;
      return Result;
    };
    this.HandleCheckClick = function (Event) {
      var Result = false;
      this.DoCheckClick();
      Result = true;
      return Result;
    };
    this.Click = function () {
      pas["WEBLib.Controls"].TControl.Click.call(this);
      this.FChecked = this.GetChecked();
      if (this.FChecked) {
        this.FState = $mod.TCheckBoxState.cbChecked}
       else this.FState = $mod.TCheckBoxState.cbUnchecked;
      this.SetFocus();
    };
    this.DoCheckClick = function () {
      if (this.FOnCheckClick != null) this.FOnCheckClick(this);
    };
    this.GetCheckElement = function () {
      var Result = null;
      if (this.GetIsLinked()) {
        if (this.GetElementHandle().tagName === "INPUT") {
          Result = this.GetElementHandle()}
         else Result = this.GetContainer().firstElementChild;
      } else Result = this.GetContainer().firstElementChild;
      return Result;
    };
    this.KeyPress = function (ch) {
      var chk = null;
      pas["WEBLib.Controls"].TControl.KeyPress.apply(this,arguments);
      if (ch.get() === " ") {
        if (this.GetContainer() != null) {
          chk = this.GetCheckElement();
          chk.checked = !chk.checked;
        };
      };
    };
    this.LoadState = function (AState) {
      var cb = null;
      if (!(this.GetContainer() != null)) return;
      cb = this.GetCheckElement();
      cb.checked = AState === "1";
    };
    this.SaveState = function () {
      var Result = "";
      var cb = null;
      if (!(this.GetContainer() != null)) return Result;
      cb = this.GetCheckElement();
      if (cb.checked) {
        Result = "1"}
       else Result = "0";
      return Result;
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetColor(-1);
      this.FChecked = false;
      this.FState = $mod.TCheckBoxState.cbUnchecked;
      this.SetAlignment(pas.Classes.TAlignment.taRightJustify);
      if ((pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && (this.FCaption === "")) this.SetCaption(this.FName);
      this.SetShowFocus(true);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment",{Default: pas.Classes.TAlignment.taRightJustify});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("Checked",3,rtl.boolean,"GetChecked","SetChecked",{Default: false});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor",{Default: -1});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementButtonClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementButtonClassName","FElementButtonClassName");
    $r.addProperty("ElementLabelClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementLabelClassName","FElementLabelClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("State",3,$mod.$rtti["TCheckBoxState"],"GetState","SetState",{Default: $mod.TCheckBoxState.cbUnchecked});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
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
  });
  rtl.createClass(this,"TWebCheckBox",this.TCheckBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TRadioButton",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FChecked = false;
      this.FGroupName = "";
      this.FElementButtonClassName = "";
      this.FElementLabelClassName = "";
    };
    this.PersistinHTML = function () {
      var rb = null;
      if (!(this.GetContainer() != null)) return;
      rb = this.GetRadioElement();
      if (rb.checked) {
        rb.setAttribute("checked","checked")}
       else rb.removeAttribute("checked");
    };
    this.CreateElement = function () {
      var Result = null;
      var btn = null;
      var lbl = null;
      Result = document.createElement("SPAN");
      btn = document.createElement("INPUT");
      lbl = document.createElement("SPAN");
      Result.addEventListener("click",rtl.createCallback(this,"HandleLabelClick"));
      btn.setAttribute("TYPE","RADIO");
      btn.setAttribute("id",this.GetID() + "rd");
      btn.setAttribute("name",this.FGroupName);
      btn.setAttribute("role","radio");
      btn.setAttribute("tabindex","-1");
      btn.addEventListener("click",rtl.createCallback(this,"HandleRadioClick"));
      lbl.setAttribute("id",this.GetID() + "lbl");
      lbl.setAttribute("value",this.GetID());
      Result.appendChild(btn);
      Result.appendChild(lbl);
      return Result;
    };
    this.SetChecked = function (AValue) {
      this.FChecked = AValue;
      if (this.GetContainer() != null) this.GetRadioElement().checked = AValue;
    };
    this.GetChecked = function () {
      var Result = false;
      Result = this.FChecked;
      if (this.GetContainer() != null) Result = this.GetRadioElement().checked;
      return Result;
    };
    this.SetEnabled = function (Value) {
      pas["WEBLib.Controls"].TControl.SetEnabled.apply(this,arguments);
      if (this.GetContainer() != null) this.GetRadioElement().disabled = !Value;
    };
    this.SetCaption = function (AValue) {
      if (this.FCaption !== AValue) {
        pas["WEBLib.Controls"].TCustomControl.SetCaption.call(this,AValue);
        if ((this.GetContainer() != null) && !this.GetIsLinked()) this.GetContainer().lastElementChild.innerHTML = AValue;
      };
    };
    this.SetGroupName = function (AValue) {
      this.FGroupName = AValue;
      this.UpdateElementData();
    };
    this.HandleLabelClick = function (Event) {
      var Result = false;
      var rb = null;
      if ((this.GetContainer() != null) && this.FEnabled) {
        rb = this.GetRadioElement();
        rb.checked = true;
      };
      Result = true;
      return Result;
    };
    this.HandleRadioClick = function (Event) {
      var Result = false;
      this.SetFocus();
      Result = true;
      return Result;
    };
    this.UpdateElementSize = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementSize.call(this);
      if ((this.GetContainer() != null) && !this.GetIsLinked()) {
        if (this.FHeightStyle !== pas["WEBLib.Controls"].TSizeStyle.ssAuto) {
          this.GetContainer().firstElementChild.style.setProperty("height","100%")}
         else this.GetContainer().firstElementChild.style.removeProperty("height");
      };
    };
    this.UpdateElementData = function () {
      var btn = null;
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetContainer() != null) {
        if (this.GetIsLinked()) {
          this.GetElementHandle().setAttribute("name",this.FGroupName)}
         else {
          this.GetContainer().firstElementChild.setAttribute("name",this.FGroupName);
          btn = this.GetElementHandle().firstChild;
          btn.disabled = !this.FEnabled;
        };
        if (!this.GetIsLinked()) {
          if (this.FCaption !== "") this.GetContainer().lastElementChild.innerHTML = this.FCaption;
          this.GetElementHandle().setAttribute("tabindex","-1");
          if (this.FTabStop && (btn != null)) btn.setAttribute("tabindex","-1");
        };
        if (this.FTabStop) this.GetContainer().setAttribute("tabindex",pas.SysUtils.IntToStr(this.FTabOrder));
      };
    };
    this.UpdateElementVisual = function () {
      var btn = null;
      var lbl = null;
      var isbs = false;
      var frm = null;
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.GetElementHandle() != null) {
        if (!this.GetIsLinked()) {
          btn = this.GetElementHandle().firstChild;
          btn.style.setProperty("margin-right","4px");
          if (btn != null) {
            if (this.FElementButtonClassName !== "") {
              btn.setAttribute("class",this.FElementButtonClassName)}
             else btn.removeAttribute("class");
          };
          lbl = this.GetElementHandle().lastElementChild;
          if (lbl != null) {
            if (this.FElementLabelClassName !== "") {
              lbl.setAttribute("class",this.FElementLabelClassName)}
             else lbl.removeAttribute("class");
          };
        };
        if (!this.FTabStop || !this.FShowFocus || (this.FElementClassName !== "")) this.GetElementHandle().style.setProperty("outline","none");
        if (!this.GetIsLinked()) {
          this.GetElementHandle().style.setProperty("user-select","none");
          this.GetElementHandle().style.setProperty("white-space","normal");
          if (this.FElementPosition === pas["WEBLib.Controls"].TElementPosition.epAbsolute) {
            if (this.FElementButtonClassName === "") {
              btn.style.setProperty("float","left");
              if (this.FHeightStyle !== pas["WEBLib.Controls"].TSizeStyle.ssAuto) {
                btn.style.setProperty("height","100%")}
               else btn.style.removeProperty("height");
              btn.style.setProperty("vertical-align","middle");
              if (!$mod.TRadioGroup.isPrototypeOf(this.FParent)) {
                btn.style.setProperty("margin-top","0px");
                btn.style.setProperty("margin-bottom","0px");
              };
            };
            frm = pas["WEBLib.Forms"].GetParentForm(this);
            isbs = (frm != null) && (frm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap);
            if ((this.FElementLabelClassName === "") || isbs) {
              lbl = this.GetContainer().lastElementChild;
              lbl.style.setProperty("vertical-align","middle");
              lbl.style.setProperty("min-height","100%");
              lbl.style.setProperty("height","100%");
              if (!$mod.TRadioGroup.isPrototypeOf(this.FParent)) lbl.style.setProperty("position","absolute");
              lbl.style.setProperty("overflow","hidden");
              lbl.style.setProperty("display","inline-flex");
              lbl.style.setProperty("align-items","center");
            };
          };
        };
      };
    };
    this.GetRadioElement = function () {
      var Result = null;
      if (this.GetIsLinked()) {
        Result = this.GetElementHandle()}
       else Result = this.GetContainer().firstElementChild;
      return Result;
    };
    this.KeyPress = function (ch) {
      var rb = null;
      pas["WEBLib.Controls"].TControl.KeyPress.apply(this,arguments);
      if (ch.get() === " ") {
        rb = this.GetRadioElement();
        rb.checked = true;
      };
    };
    this.LoadState = function (AState) {
      var rb = null;
      if (!(this.GetContainer() != null)) return;
      rb = this.GetRadioElement();
      rb.checked = AState === "1";
    };
    this.SaveState = function () {
      var Result = "";
      var rb = null;
      if (!(this.GetContainer() != null)) return Result;
      rb = this.GetRadioElement();
      if (rb.checked) {
        Result = "1"}
       else Result = "0";
      return Result;
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetColor(-1);
      if ((pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && (this.FCaption === "")) this.SetCaption(this.FName);
      this.FGroupName = "";
      this.SetShowFocus(true);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("Checked",3,rtl.boolean,"GetChecked","SetChecked",{Default: false});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor",{Default: -1});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementButtonClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementButtonClassName","FElementButtonClassName");
    $r.addProperty("ElementLabelClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementLabelClassName","FElementLabelClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("GroupName",2,rtl.string,"FGroupName","SetGroupName");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
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
  });
  rtl.createClass(this,"TWebRadioButton",this.TRadioButton,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TListBox",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FItems = null;
      this.FItemIndex = 0;
      this.FMultiSelect = false;
      this.FSelected = null;
      this.FItemHeight = 0;
      this.FSorted = false;
      this.FOnChange = null;
      this.FHandleChangePtr = null;
      this.FElementItemClassName = "";
    };
    this.$final = function () {
      this.FItems = undefined;
      this.FSelected = undefined;
      this.FOnChange = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.SetItemHeight = function (Value) {
      this.FItemHeight = Value;
    };
    this.SetSorted = function (Value) {
      this.FSorted = Value;
      this.FItems.SetSorted(Value);
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FItems.GetCount();
      return Result;
    };
    this.GetElementSelectHandle = function () {
      var Result = null;
      Result = this.GetContainer();
      return Result;
    };
    this.GetSelCount = function () {
      var Result = 0;
      var i = 0;
      Result = 0;
      if (this.GetContainer() != null) {
        for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
          i = $l;
          if (this.GetContainer().options.item(i).selected) Result += 1;
        };
      };
      return Result;
    };
    this.GetValues = function (AIndex) {
      var Result = "";
      var opt = null;
      var el = null;
      if ((AIndex >= 0) && (AIndex < this.FItems.GetCount())) {
        el = this.GetElementHandle();
        opt = el.options.item(AIndex);
        Result = opt.getAttribute("value");
      };
      return Result;
    };
    this.SetValues = function (AIndex, Value) {
      var opt = null;
      var el = null;
      if ((AIndex >= 0) && (AIndex < this.FItems.GetCount())) {
        el = this.GetElementHandle();
        opt = el.options.item(AIndex);
        opt.setAttribute("value",Value);
      };
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
    this.DoUpdateList = function () {
      var i = 0;
      var j = 0;
      var opt = null;
      var k = "";
      var v = "";
      var s = "";
      if (!(this.GetContainer() != null)) return;
      if (this.IsUpdating()) return;
      if (this.GetElementHandle().tagName !== "SELECT") return;
      for (var $l = this.GetContainer().options.length - 1; $l >= 0; $l--) {
        i = $l;
        this.GetContainer().remove(i);
      };
      for (var $l1 = 0, $end = this.FItems.GetCount() - 1; $l1 <= $end; $l1++) {
        i = $l1;
        s = this.FItems.Get(i);
        k = s;
        v = s;
        j = pas.System.Pos(this.FItems.GetNameValueSeparator(),s);
        if (j > 0) {
          v = pas.System.Copy(s,1,j - 1);
          k = pas.System.Copy(s,j + 1,0xFFFF);
        } else k = "";
        opt = new Option(v);
        if (k !== "") opt.setAttribute("value",k);
        opt.setAttribute("role","listitem");
        if (this.FElementItemClassName !== "") opt.setAttribute("class",this.FElementItemClassName);
        if (this.FDragMode === pas["WEBLib.Controls"].TDragMode.dmAutomatic) opt.setAttribute("draggable","true");
        this.GetContainer().add(opt);
        this.SetSelected(i,false);
      };
      this.UpdateElementData();
    };
    this.PersistinHTML = function () {
      var i = 0;
      if (!(this.GetContainer() != null)) return;
      if (this.GetElementHandle().tagName !== "SELECT") return;
      for (var $l = 0, $end = this.GetContainer().options.length - 1; $l <= $end; $l++) {
        i = $l;
        if (this.GetContainer().options.item(i).selected) {
          this.GetContainer().options.item(i).setAttribute("selected","selected")}
         else this.GetContainer().options.item(i).removeAttribute("selected");
      };
    };
    this.GetItemIndex = function () {
      var Result = 0;
      Result = this.FItemIndex;
      if (this.GetContainer() != null) Result = this.GetContainer().selectedIndex;
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("SELECT");
      Result.setAttribute("Size","2");
      return Result;
    };
    this.GetSelected = function (AIndex) {
      var Result = false;
      if (AIndex < this.FSelected.GetCount()) {
        Result = !(this.FSelected.Get(AIndex) == false)}
       else Result = false;
      if (this.GetElementHandle().tagName !== "SELECT") return Result;
      if ((this.GetContainer() != null) && (AIndex < this.GetContainer().options.length)) Result = this.GetContainer().options.item(AIndex).selected;
      return Result;
    };
    this.SetSelected = function (AIndex, AValue) {
      while (AIndex >= this.FSelected.GetCount()) this.FSelected.Add(false);
      this.FSelected.Put(AIndex,AValue);
      if (this.GetContainer() != null) this.GetContainer().options.item(AIndex).selected = AValue;
    };
    this.SetItems = function (AItems) {
      this.FItems.Assign(AItems);
    };
    this.SetItemIndex = function (AIndex) {
      if (this.FItemIndex !== AIndex) {
        this.FItemIndex = AIndex;
        this.UpdateElement();
      };
    };
    this.SetMultiSelect = function (AValue) {
      this.FMultiSelect = AValue;
      if (this.GetContainer() != null) this.GetContainer().multiple = AValue;
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      this.DoUpdateList();
      this.UpdateElement();
    };
    this.UpdateElementData = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetElementSelectHandle() != null) {
        this.GetElementSelectHandle().style.setProperty("overflow","auto");
        this.GetElementSelectHandle().selectedIndex = this.FItemIndex;
      };
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.GetElementSelectHandle() != null) {
        this.GetElementSelectHandle().style.setProperty("overflow","auto");
        this.GetElementSelectHandle().setAttribute("role","listbox");
        this.GetElementSelectHandle().setAttribute("aria-busy","true");
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
    this.SaveState = function () {
      var Result = "";
      var i = 0;
      var s = "";
      for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.GetSelected(i)) {
          s = s + ",1"}
         else s = s + ",0";
      };
      pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,1);
      Result = s;
      return Result;
    };
    this.LoadState = function (AState) {
      var sl = null;
      var i = 0;
      sl = pas.Classes.TStringList.$create("Create$1");
      sl.SetDelimiter(",");
      sl.SetCommaText(AState);
      for (var $l = 0, $end = sl.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.SetSelected(i,sl.Get(i) === "1");
      };
      sl = rtl.freeLoc(sl);
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
      for (var $l = 0, $end = this.GetContainer().options.length - 1; $l <= $end; $l++) {
        I = $l;
        this.GetContainer().options.item(I).setAttribute("draggable","false");
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
      this.FMultiSelect = false;
      this.FSelected = pas.Classes.TList.$create("Create$1");
      this.FItemIndex = -1;
      this.SetShowFocus(true);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(160);
        this.SetHeight(180);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FItems");
      rtl.free(this,"FSelected");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.EndUpdate = function () {
      pas["WEBLib.Controls"].TCustomControl.EndUpdate.call(this);
      this.DoUpdateList();
    };
    this.ClearSelection = function () {
      var i = 0;
      this.SetItemIndex(-1);
      if (!(this.GetContainer() != null)) return;
      if (this.GetElementHandle().tagName !== "SELECT") return;
      for (var $l = 0, $end = this.GetContainer().options.length - 1; $l <= $end; $l++) {
        i = $l;
        this.GetContainer().options.item(i).selected = false;
      };
    };
    this.SelectAll = function () {
      var i = 0;
      if (!(this.GetContainer() != null)) return;
      if (this.GetElementHandle().tagName !== "SELECT") return;
      for (var $l = 0, $end = this.GetContainer().options.length - 1; $l <= $end; $l++) {
        i = $l;
        this.SetSelected(i,true);
        this.GetContainer().options.item(i).selected = true;
      };
    };
    this.DeleteSelected = function () {
      var i = 0;
      this.FItems.BeginUpdate();
      for (var $l = this.FItems.GetCount() - 1; $l >= 0; $l--) {
        i = $l;
        if (this.GetSelected(i)) this.FItems.Delete(i);
      };
      this.FItems.EndUpdate();
    };
    this.AddItem = function (Item, AObject) {
      this.FItems.AddObject(Item,AObject);
    };
    this.Clear = function () {
      this.BeginUpdate();
      this.FItems.Clear();
      this.EndUpdate();
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
    $r.addProperty("ItemIndex",3,rtl.longint,"GetItemIndex","SetItemIndex",{Default: -1});
    $r.addProperty("Items",2,pas.Classes.$rtti["TStrings"],"FItems","SetItems");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("MultiSelect",2,rtl.boolean,"FMultiSelect","SetMultiSelect");
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor",{Default: false});
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("TextDirection",0,pas["WEBLib.Controls"].$rtti["TTextDirection"],"FTextDirection","FTextDirection",{Default: pas["WEBLib.Controls"].TTextDirection.tdDefault});
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
  rtl.createClass(this,"TWebListBox",this.TListBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.TComboBoxStyle = {"0": "csDropDownList", csDropDownList: 0, "1": "csDropDown", csDropDown: 1};
  this.$rtti.$Enum("TComboBoxStyle",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TComboBoxStyle});
  rtl.createClass(this,"TCustomComboBox",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FItems = null;
      this.FItemIndex = 0;
      this.FStyle = 0;
      this.FDroppedDown = false;
      this.FOnChange = null;
      this.FTextHint = "";
      this.FListName = "";
      this.FText = "";
      this.FHandleChangePtr = null;
      this.FHandleInputPtr = null;
      this.FHandleFocusInPtr = null;
      this.FHandleFocusOutPtr = null;
      this.FOnFocusOut = null;
      this.FOnFocusIn = null;
    };
    this.$final = function () {
      this.FItems = undefined;
      this.FOnChange = undefined;
      this.FOnFocusOut = undefined;
      this.FOnFocusIn = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.GetText = function () {
      var Result = "";
      var el = null;
      var AName = "";
      var AValue = "";
      Result = "";
      if (this.FStyle === $mod.TComboBoxStyle.csDropDown) {
        if (this.GetElementHandle() != null) Result = this.GetElementHandle().value;
      } else if (this.GetItemIndex() >= 0) {
        if (this.GetItemIndex() < this.FItems.GetCount()) {
          this.FItems.GetNameValue(this.GetItemIndex(),{get: function () {
              return AName;
            }, set: function (v) {
              AName = v;
            }},{get: function () {
              return AValue;
            }, set: function (v) {
              AValue = v;
            }});
          if ((AName !== "") && (AValue !== "")) {
            Result = AName}
           else Result = this.FItems.Get(this.GetItemIndex());
        } else {
          if (this.GetIsLinked()) {
            if (this.GetItemIndex() < this.GetElementHandle().childElementCount) {
              el = this.GetElementHandle().children.item(this.GetItemIndex());
              if (el.tagName === "OPTION") Result = el.innerHTML;
            };
          };
        };
      };
      return Result;
    };
    this.SetText = function (Value) {
      var I = 0;
      var AName = "";
      var AValue = "";
      if (this.FStyle === $mod.TComboBoxStyle.csDropDown) {
        this.FText = Value;
        this.UpdateElement();
      } else {
        for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          this.FItems.GetNameValue(I,{get: function () {
              return AName;
            }, set: function (v) {
              AName = v;
            }},{get: function () {
              return AValue;
            }, set: function (v) {
              AValue = v;
            }});
          if ((Value === this.FItems.Get(I)) || (Value === AName)) this.SetItemIndex(I);
        };
      };
    };
    this.SetStyle = function (Value) {
      if (this.FStyle !== Value) {
        this.FStyle = Value;
        if (!this.GetIsLinked()) this.RecreateElement();
      };
    };
    this.SetDroppedDown = function (Value) {
      this.FDroppedDown = Value;
    };
    this.GetElementSelectHandle = function () {
      var Result = null;
      Result = this.GetContainer();
      return Result;
    };
    this.SetTextHint = function (Value) {
      if (this.FTextHint !== Value) {
        this.FTextHint = Value;
        this.DoUpdateList();
      };
    };
    this.GetValues = function (AIndex) {
      var Result = "";
      var opt = null;
      var el = null;
      if ((AIndex >= 0) && (AIndex < this.FItems.GetCount())) {
        el = this.GetElementHandle();
        opt = el.options.item(AIndex);
        Result = opt.getAttribute("value");
      };
      return Result;
    };
    this.SetValues = function (AIndex, Value) {
      var opt = null;
      var el = null;
      if ((AIndex >= 0) && (AIndex < this.FItems.GetCount())) {
        el = this.GetElementHandle();
        opt = el.options.item(AIndex);
        opt.setAttribute("value",Value);
      };
    };
    this.DoHandleChange = function (Event) {
      var Result = false;
      this.Change();
      Result = true;
      return Result;
    };
    this.DoHandleInput = function (Event) {
      var Result = false;
      if (this.FStyle === $mod.TComboBoxStyle.csDropDown) this.Change();
      Result = true;
      return Result;
    };
    this.DoHandleFocusIn = function (Event) {
      var Result = false;
      if (this.FOnFocusIn != null) this.FOnFocusIn(this);
      Result = true;
      return Result;
    };
    this.DoHandleFocusOut = function (Event) {
      var Result = false;
      if (this.FOnFocusOut != null) this.FOnFocusOut(this);
      Result = true;
      return Result;
    };
    this.DoItemsChange = function (Sender) {
      this.DoUpdateList();
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FHandleChangePtr = null;
      this.FHandleInputPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      this.FHandleChangePtr = rtl.createCallback(this,"DoHandleChange");
      this.FHandleInputPtr = rtl.createCallback(this,"DoHandleInput");
      this.FHandleFocusInPtr = rtl.createCallback(this,"DoHandleFocusIn");
      this.FHandleFocusOutPtr = rtl.createCallback(this,"DoHandleFocusOut");
    };
    this.AddTextHint = function () {
      var opt = null;
      if ((this.FTextHint !== "") && (this.FStyle === $mod.TComboBoxStyle.csDropDownList)) {
        opt = document.createElement("OPTION");
        opt.setAttribute("value","");
        opt.setAttribute("disabled","true");
        opt.setAttribute("selected","true");
        opt.setAttribute("hidden","true");
        opt.innerHTML = this.FTextHint;
        this.GetContainer().appendChild(opt);
      };
    };
    this.DoUpdateList = function () {
      var i = 0;
      var j = 0;
      var s = "";
      var k = "";
      var v = "";
      var opt = null;
      var el = null;
      if (!(this.GetContainer() != null)) return;
      if (this.GetElementHandle().tagName === "INPUT") {
        this.GetElementHandle().value = this.GetText();
        el = document.getElementById(this.FName + "_LIST");
        if (el != null) el.parentNode.removeChild(el);
        if (this.FTextHint !== "") this.GetElementHandle().placeholder = this.FTextHint;
        el = document.createElement("DATALIST");
        el.setAttribute("id",this.FListName);
        document.body.appendChild(el);
        for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
          i = $l;
          s = this.FItems.Get(i);
          opt = document.createElement("OPTION");
          k = s;
          v = s;
          j = pas.System.Pos(this.FItems.GetNameValueSeparator(),s);
          if (j > 0) {
            v = pas.System.Copy(s,1,j - 1);
            k = pas.System.Copy(s,j + 1,0xFFFF);
          };
          opt.setAttribute("value",k);
          opt.innerHTML = v;
          el.appendChild(opt);
        };
      } else {
        if (this.GetElementHandle().tagName !== "SELECT") return;
        for (var $l1 = this.GetContainer().options.length - 1; $l1 >= 0; $l1--) {
          i = $l1;
          this.GetContainer().remove(i);
        };
        this.AddTextHint();
        for (var $l2 = 0, $end1 = this.FItems.GetCount() - 1; $l2 <= $end1; $l2++) {
          i = $l2;
          s = this.FItems.Get(i);
          opt = document.createElement("OPTION");
          k = s;
          v = s;
          j = pas.System.Pos(this.FItems.GetNameValueSeparator(),s);
          if (j > 0) {
            v = pas.System.Copy(s,1,j - 1);
            k = pas.System.Copy(s,j + 1,0xFFFF);
          };
          opt.setAttribute("value",k);
          opt.innerHTML = v;
          this.GetContainer().appendChild(opt);
        };
      };
      this.UpdateElement();
    };
    this.LoadState = function (AState) {
      var idx = 0;
      var e = 0;
      pas.System.val$6(AState,{get: function () {
          return idx;
        }, set: function (v) {
          idx = v;
        }},{get: function () {
          return e;
        }, set: function (v) {
          e = v;
        }});
      if (e === 0) this.SetItemIndex(idx);
    };
    this.SaveState = function () {
      var Result = "";
      Result = pas.SysUtils.IntToStr(this.GetItemIndex());
      return Result;
    };
    this.GetItemIndex = function () {
      var Result = 0;
      if (this.FStyle === $mod.TComboBoxStyle.csDropDown) {
        Result = this.FItems.IndexOf(this.GetText());
      } else {
        Result = this.FItemIndex;
        if (this.GetContainer() != null) {
          Result = this.GetContainer().selectedIndex;
          if (this.FTextHint !== "") Result = Result - 1;
        };
      };
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      if (this.FStyle === $mod.TComboBoxStyle.csDropDownList) {
        Result = document.createElement("SELECT")}
       else {
        Result = document.createElement("INPUT");
        this.FListName = this.FName + "_LIST";
        Result.setAttribute("list",this.FListName);
      };
      return Result;
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().addEventListener("input",this.FHandleInputPtr);
        this.GetElementHandle().addEventListener("change",this.FHandleChangePtr);
        this.GetElementHandle().addEventListener("focusin",this.FHandleFocusInPtr);
        this.GetElementHandle().addEventListener("focusout",this.FHandleFocusOutPtr);
      };
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().removeEventListener("input",this.FHandleInputPtr);
        this.GetElementHandle().removeEventListener("change",this.FHandleChangePtr);
        this.GetElementHandle().removeEventListener("focusin",this.FHandleFocusInPtr);
        this.GetElementHandle().removeEventListener("focusout",this.FHandleFocusOutPtr);
      };
    };
    this.UpdateElementData = function () {
      var d = 0;
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.FStyle === $mod.TComboBoxStyle.csDropDown) {
        if (this.GetElementHandle() != null) {
          this.GetElementHandle().value = this.FText;
          this.FListName = this.FName + "_LIST";
          this.GetElementHandle().setAttribute("list",this.FListName);
        };
      } else if (this.GetElementSelectHandle() != null) {
        d = 0;
        if (this.FTextHint !== "") d = 1;
        this.GetElementSelectHandle().selectedIndex = this.FItemIndex + d;
        this.GetElementSelectHandle().setAttribute("role","combobox");
      };
    };
    this.UpdateParent = function () {
      pas["WEBLib.Controls"].TControl.UpdateParent.call(this);
      this.DoUpdateList();
    };
    this.SetItems = function (AItems) {
      this.FItems.Assign(AItems);
    };
    this.SetItemIndex = function (AIndex) {
      if (this.FItemIndex !== AIndex) {
        this.FItemIndex = AIndex;
        if ((AIndex >= 0) && (this.FStyle in rtl.createSet($mod.TComboBoxStyle.csDropDown,$mod.TComboBoxStyle.csDropDownList)) && (AIndex < this.FItems.GetCount())) this.FText = this.FItems.Get(AIndex);
        this.UpdateElement();
      };
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      this.DoUpdateList();
    };
    this.Change = function () {
      this.FItemIndex = this.GetItemIndex();
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.PersistinHTML = function () {
      var sel = null;
      pas["WEBLib.Controls"].TControl.PersistinHTML.call(this);
      sel = this.GetElementHandle().children.item(this.GetItemIndex());
      if (sel != null) sel.setAttribute("selected","selected");
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FItems = pas.Classes.TStringList.$create("Create$1");
      this.FItems.FOnChange = rtl.createCallback(this,"DoItemsChange");
      this.FItemIndex = -1;
      this.FStyle = $mod.TComboBoxStyle.csDropDownList;
      this.SetShowFocus(true);
      this.SetHeight(25);
    };
    this.Destroy = function () {
      rtl.free(this,"FItems");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.Clear = function () {
      this.FItems.Clear();
    };
    this.AddItem = function (Item, AObject) {
      this.FItems.AddObject(Item,AObject);
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TComboBox",this.TCustomComboBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("BiDiMode",2,pas["WEBLib.Controls"].$rtti["TBiDiMode"],"FBiDiMode","SetBiDiMode",{Default: pas["WEBLib.Controls"].TBiDiMode.bdLeftToRight});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
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
    $r.addProperty("Items",2,pas.Classes.$rtti["TStrings"],"FItems","SetItems");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("Style",2,$mod.$rtti["TComboBoxStyle"],"FStyle","SetStyle");
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
  });
  rtl.createClass(this,"TWebComboBox",this.TComboBox,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TFontPicker",this.TCustomComboBox,function () {
    this.CreateInitialize = function () {
      var $Self = this;
      var tst = false;
      function Add(s) {
        tst = d.detect(s);
        if (tst) $Self.FItems.Add(s);
      };
      $mod.TCustomComboBox.CreateInitialize.call(this);
      var Detector = function() {
          // a font will be compared against all the three default fonts.
          // and if it doesn't match all 3 then that font is not available.
          var baseFonts = ['monospace', 'sans-serif', 'serif'];
      
          //we use m or w because these two characters take up the maximum width.
          // And we use a LLi so that the same matching fonts can get separated
          var testString = "mmmmmmmmmmlli";
      
          //we test using 72px font size, we may use any size. I guess larger the better.
          var testSize = '72px';
      
          var h = document.getElementsByTagName("body")[0];
      
          // create a SPAN in the document to get the width of the text we use to test
          var s = document.createElement("span");
          s.style.fontSize = testSize;
          s.innerHTML = testString;
          var defaultWidth = {};
          var defaultHeight = {};
          for (var index in baseFonts) {
              //get the default width for the three base fonts
              s.style.fontFamily = baseFonts[index];
              h.appendChild(s);
              defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
              defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
              h.removeChild(s);
          }
      
          function detect(font) {
              var detected = false;
              for (var index in baseFonts) {
                  s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
                  h.appendChild(s);
                  var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
                  h.removeChild(s);
                  detected = detected || matched;
              }
              return detected;
          }
      
          this.detect = detect;
          };
      
          var d = new Detector();
          //tst = d.detect("Arial");
      Add("Arial");
      Add("Arial Black");
      Add("Arial Narrow");
      Add("Courier");
      Add("Courier New");
      Add("Georgia");
      Add("Lucida Console");
      Add("Modena");
      Add("Monotype Corsiva");
      Add("Papyrus");
      Add("Tahoma");
      Add("Times");
      Add("Times New Roman");
      Add("Trebuchet MS");
      Add("Verdana");
      Add("Verona");
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("ItemIndex",3,rtl.longint,"GetItemIndex","SetItemIndex",{Default: -1});
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Text",3,rtl.string,"GetText","SetText");
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
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
  rtl.createClass(this,"TWebFontPicker",this.TFontPicker,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.TFontSizePickerMode = {"0": "fmPointSize", fmPointSize: 0, "1": "fmRelativeSize", fmRelativeSize: 1};
  this.$rtti.$Enum("TFontSizePickerMode",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TFontSizePickerMode});
  rtl.createClass(this,"TFontSizePicker",this.TCustomComboBox,function () {
    this.$init = function () {
      $mod.TCustomComboBox.$init.call(this);
      this.FPickerMode = 0;
    };
    this.SetPickerMode = function (AValue) {
      this.FPickerMode = AValue;
      this.Init();
    };
    this.Init = function () {
      this.FItems.Clear();
      var $tmp = this.FPickerMode;
      if ($tmp === $mod.TFontSizePickerMode.fmPointSize) {
        this.FItems.Add("8");
        this.FItems.Add("9");
        this.FItems.Add("10");
        this.FItems.Add("11");
        this.FItems.Add("12");
        this.FItems.Add("14");
        this.FItems.Add("16");
        this.FItems.Add("18");
        this.FItems.Add("20");
        this.FItems.Add("22");
        this.FItems.Add("24");
        this.FItems.Add("26");
        this.FItems.Add("28");
        this.FItems.Add("36");
        this.FItems.Add("48");
        this.FItems.Add("72");
      } else if ($tmp === $mod.TFontSizePickerMode.fmRelativeSize) {
        this.FItems.Add("8");
        this.FItems.Add("9");
        this.FItems.Add("10");
        this.FItems.Add("14");
        this.FItems.Add("18");
        this.FItems.Add("24");
        this.FItems.Add("36");
      };
    };
    this.CreateInitialize = function () {
      $mod.TCustomComboBox.CreateInitialize.call(this);
      this.SetPickerMode($mod.TFontSizePickerMode.fmPointSize);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
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
    $r.addProperty("PickerMode",2,$mod.$rtti["TFontSizePickerMode"],"FPickerMode","SetPickerMode");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Text",3,rtl.string,"GetText","SetText");
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
  rtl.createClass(this,"TLineSpacingPicker",this.TCustomComboBox,function () {
    this.CreateInitialize = function () {
      $mod.TCustomComboBox.CreateInitialize.call(this);
      this.FItems.Clear();
      this.FItems.Add("1");
      this.FItems.Add("1.5");
      this.FItems.Add("2");
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
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
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("Text",3,rtl.string,"GetText","SetText");
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
  rtl.createClass(this,"TWebFontSizePicker",this.TFontSizePicker,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TCustomMemo",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FWordWrap = false;
      this.FBlockChange = false;
      this.FLines = null;
      this.FSelStart = 0;
      this.FSelLength = 0;
      this.FCaretPosition = pas.Types.TPoint.$new();
      this.FAutoSize = false;
      this.FOnChange = null;
      this.FReadOnly = false;
      this.FTextHint = "";
      this.FHandleChangePtr = null;
      this.FHandlePastePtr = null;
      this.FHandleCutPtr = null;
      this.FHandleInputPtr = null;
      this.FWantTabs = false;
      this.FAutoCompletion = 0;
      this.FSpellCheck = false;
      this.FModified = false;
      this.FScrollbars = 0;
    };
    this.$final = function () {
      this.FLines = undefined;
      this.FCaretPosition = undefined;
      this.FOnChange = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.GetText = function () {
      var Result = "";
      if (this.GetElementInputHandle() != null) {
        this.FBlockChange = true;
        this.FLines.SetTextStr(this.GetElementInputHandle().value);
        this.FBlockChange = false;
      };
      Result = this.FLines.GetTextStr();
      return Result;
    };
    this.SetText = function (Value) {
      this.FLines.SetTextStr(Value);
    };
    this.SetSelLength = function (Value) {
      if (this.FSelLength !== Value) {
        this.FSelLength = Value;
        this.UpdateElement();
      };
    };
    this.SetSelStart = function (Value) {
      if (this.FSelStart !== Value) {
        this.FSelStart = Value;
        this.UpdateElement();
      };
    };
    this.SetAutoSize = function (Value) {
      if (this.FAutoSize !== Value) {
        this.FAutoSize = Value;
        this.UpdateElement();
      };
    };
    this.GetElementInputHandle = function () {
      var Result = null;
      Result = this.GetContainer();
      return Result;
    };
    this.SetReadOnly = function (Value) {
      if (this.FReadOnly !== Value) {
        this.FReadOnly = Value;
        this.UpdateElement();
      };
    };
    this.GetSelLength = function () {
      var Result = 0;
      Result = -1;
      if (this.GetElementInputHandle() != null) Result = this.GetElementInputHandle().selectionEnd - this.GetElementInputHandle().selectionStart;
      return Result;
    };
    this.GetSelStart = function () {
      var Result = 0;
      Result = -1;
      if (this.GetElementInputHandle() != null) Result = this.GetElementInputHandle().selectionStart;
      return Result;
    };
    this.SetTextHint = function (Value) {
      if (this.FTextHint !== Value) {
        this.FTextHint = Value;
        this.UpdateElement();
      };
    };
    this.SetAutoCompletion = function (Value) {
      if (this.FAutoCompletion !== Value) {
        this.FAutoCompletion = Value;
        this.UpdateElementData();
      };
    };
    this.SetSpellCheck = function (Value) {
      if (this.FSpellCheck !== Value) {
        this.FSpellCheck = Value;
        this.UpdateElement();
      };
    };
    this.SetWantTabs = function (Value) {
      if (this.FWantTabs !== Value) {
        this.FWantTabs = Value;
        this.UpdateElement();
      };
    };
    this.SetWordWrap = function (Value) {
      if (this.FWordWrap !== Value) {
        this.FWordWrap = Value;
        this.UpdateElement();
      };
    };
    this.GetCaretPos = function () {
      var Result = pas.Types.TPoint.$new();
      Result.$assign(this.GetCaret());
      return Result;
    };
    this.SetCaretPos = function (Value) {
      this.SetCaret(Value.x,Value.y);
    };
    this.SetScrollBars = function (Value) {
      if (this.FScrollbars !== Value) {
        this.FScrollbars = Value;
        this.UpdateElement();
      };
    };
    this.IsInputControl = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.HandleDoKeyDown = function (Event) {
      var Result = false;
      var eh = null;
      if ((this.GetKeyCode(Event.key,true) === 9) && this.FWantTabs) {
        eh = this.GetElementInputHandle();
        var sstart = eh.selectionStart;
              var send = eh.selectionEnd;
        
              eh.value = eh.value.substring(0, sstart) + "\t" +eh.value.substring(send);
              // put caret at right position again
              eh.selectionStart = eh.selectionEnd = sstart + 1;
        
              Event.stopPropagation();
              Event.preventDefault();
      } else pas["WEBLib.Controls"].TControl.HandleDoKeyDown.apply(this,arguments);
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("TEXTAREA");
      return Result;
    };
    this.DoHandlePaste = function (Event) {
      var Result = false;
      var s = "";
      var clp = false;
      clp = false;
      var clipboardData = Event.clipboardData || window.clipboardData;
      if (clipboardData) {
        s = clipboardData.getData('Text');
        clp = true;
      };
      if (clp && !this.CanPaste(s)) {
        Event.preventDefault();
        Event.stopPropagation();
      };
      Result = false;
      return Result;
    };
    this.DoHandleCut = function (Event) {
      var Result = false;
      if (!this.CanCut()) {
        Event.preventDefault();
        Event.stopPropagation();
      };
      Result = false;
      return Result;
    };
    this.DoHandleInput = function (Event) {
      var Result = false;
      this.GetText();
      this.Change();
      if (this.FAutoSize) this.DoAutoSize();
      Result = true;
      return Result;
    };
    this.DoHandleChange = function (Event) {
      var Result = false;
      this.FModified = true;
      this.Change();
      Result = true;
      return Result;
    };
    this.IsReadOnly = function () {
      var Result = false;
      Result = this.FReadOnly;
      return Result;
    };
    this.PersistinHTML = function () {
      this.GetElementInputHandle().innerHTML = this.FLines.GetTextStr();
    };
    this.GetDisplayText = function () {
      var Result = "";
      Result = this.FLines.GetTextStr();
      return Result;
    };
    this.DoAutoSize = function () {
      var sh = 0;
      var el = null;
      this.GetElementInputHandle().style.setProperty("overflow","hidden");
      this.GetElementInputHandle().style.setProperty("height","auto");
      el = this.GetElementInputHandle();
      sh = el.scrollHeight;
      this.GetElementInputHandle().style.setProperty("height",pas.SysUtils.TIntegerHelper.ToString$1.call({get: function () {
          return sh;
        }, set: function (v) {
          sh = v;
        }}) + "px");
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementInputHandle() != null) {
        this.GetElementInputHandle().addEventListener("input",this.FHandleInputPtr);
        this.GetElementInputHandle().addEventListener("change",this.FHandleChangePtr);
        this.GetElementInputHandle().addEventListener("paste",this.FHandlePastePtr);
        this.GetElementInputHandle().addEventListener("cut",this.FHandleCutPtr);
      };
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementInputHandle() != null) {
        this.GetElementInputHandle().removeEventListener("input",this.FHandleInputPtr);
        this.GetElementInputHandle().removeEventListener("change",this.FHandleChangePtr);
        this.GetElementInputHandle().removeEventListener("paste",this.FHandlePastePtr);
        this.GetElementInputHandle().removeEventListener("cut",this.FHandleCutPtr);
      };
    };
    this.UpdateElementData = function () {
      var ss = 0;
      var sl = 0;
      var e = null;
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if ((this.GetElementInputHandle() != null) && !this.FBlockChange) {
        this.GetElementInputHandle().value = this.GetDisplayText();
        if (this.GetElementInputHandle().tagName === "TEXTAREA") {
          this.GetElementInputHandle().setSelectionRange(this.GetSelStart(),this.GetSelStart() + this.GetSelLength());
        };
        if (!this.GetIsLinked()) {
          this.GetElementInputHandle().style.setProperty("resize","none");
        };
        this.GetElementInputHandle().readOnly = this.IsReadOnly();
        if (this.FTextHint !== "") this.GetElementInputHandle().placeholder = this.FTextHint;
        if (!this.GetIsLinked()) {
          if (this.FAutoCompletion === $mod.TAutoCompletion.acNone) {
            this.GetElementInputHandle().setAttribute("autocomplete","none");
            if (!this.GetIsLinked()) this.GetElementInputHandle().removeAttribute("name");
          } else if (this.FAutoCompletion !== $mod.TAutoCompletion.acOff) {
            this.GetElementInputHandle().setAttribute("autocomplete","on");
            if (!this.GetIsLinked()) this.GetElementInputHandle().setAttribute("name",$mod.GetAutoCompletionName(this.FAutoCompletion));
          } else {
            this.GetElementInputHandle().removeAttribute("autocomplete");
            if (!this.GetIsLinked()) this.GetElementInputHandle().removeAttribute("name");
          };
          ss = this.FSelStart;
          sl = this.FSelStart + this.FSelLength;
          e = this.GetElementInputHandle();
          setTimeout(function() {
            e.setSelectionRange(ss, sl);
          }, 1);
        };
      };
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if ((this.GetElementInputHandle() != null) && !this.FBlockChange && !this.GetIsLinked()) {
        if (this.FAutoSize) {
          this.GetElementInputHandle().style.setProperty("overflow","hidden");
          this.GetElementInputHandle().style.setProperty("height","auto");
        } else {
          this.GetElementInputHandle().style.setProperty("overflow","auto");
          var $tmp = this.FScrollbars;
          if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssNone) {
            this.GetElementInputHandle().style.setProperty("overflow","hidden");
          } else if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssVertical) {
            this.GetElementInputHandle().style.removeProperty("overflow");
            this.GetElementInputHandle().style.setProperty("overflow-x","hidden");
            this.GetElementInputHandle().style.setProperty("overflow-y","auto");
          } else if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssHorizontal) {
            this.GetElementInputHandle().style.removeProperty("overflow");
            this.GetElementInputHandle().style.setProperty("overflow-x","auto");
            this.GetElementInputHandle().style.setProperty("overflow-y","hidden");
          } else if ($tmp === pas["WEBLib.Controls"].TScrollStyle.ssBoth) {
            this.GetElementInputHandle().style.setProperty("overflow","auto");
          };
        };
        this.GetElementInputHandle().style.setProperty("margin","0");
        if ((this.FColor !== -1) && (this.FColor !== 16711422)) {
          this.GetElementInputHandle().style.setProperty("background-color",pas["WEBLib.Graphics"].ColorToHTML(this.FColor))}
         else this.GetElementInputHandle().style.removeProperty("background-color");
        if (!this.FSpellCheck) {
          this.GetElementInputHandle().setAttribute("spellcheck","false")}
         else if (this.GetElementInputHandle().hasAttribute("spellcheck")) this.GetElementInputHandle().removeAttribute("spellcheck");
        if (!this.FWordWrap) {
          this.GetElementInputHandle().setAttribute("wrap","off")}
         else if (this.GetElementInputHandle().hasAttribute("wrap")) this.GetElementInputHandle().removeAttribute("wrap");
      };
    };
    this.UpdateElementSize = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementSize.call(this);
      if (this.FAutoSize) this.DoAutoSize();
    };
    this.SetLines = function (ALines) {
      this.FLines.Assign(ALines);
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FHandleChangePtr = null;
      this.FHandleInputPtr = null;
      this.FHandlePastePtr = null;
      this.FHandleCutPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      this.FHandleChangePtr = rtl.createCallback(this,"DoHandleChange");
      this.FHandleInputPtr = rtl.createCallback(this,"DoHandleInput");
      this.FHandlePastePtr = rtl.createCallback(this,"DoHandlePaste");
      this.FHandleCutPtr = rtl.createCallback(this,"DoHandleCut");
    };
    this.DoLinesChange = function (Sender) {
      if ((this.GetElementInputHandle() != null) && !this.FBlockChange) {
        this.GetElementInputHandle().value = this.GetDisplayText();
        this.GetElementInputHandle().readOnly = this.IsReadOnly();
      };
    };
    this.CanPaste = function (AValue) {
      var Result = false;
      Result = true;
      return Result;
    };
    this.CanCut = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.SaveState = function () {
      var Result = "";
      Result = this.FLines.GetTextStr();
      return Result;
    };
    this.LoadState = function (AState) {
      this.FLines.SetTextStr(AState);
    };
    this.Change = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.SetCaret = function (x, y) {
      var i = 0;
      var l = 0;
      l = 0;
      for (var $l = 0, $end = this.FLines.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (i < y) l = l + this.FLines.Get(i).length + 1;
      };
      this.SetSelStart(l + x);
    };
    this.GetCaret = function () {
      var Result = pas.Types.TPoint.$new();
      var l = 0;
      var i = 0;
      var ll = 0;
      var tl = 0;
      var ss = 0;
      l = 0;
      tl = 0;
      ss = this.GetSelStart();
      for (var $l = 0, $end = this.FLines.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        ll = this.FLines.Get(i).length + 1;
        if (ss > (tl + ll)) {
          l += 1;
          tl = tl + ll;
        } else {
          break;
        };
      };
      Result.x = ss - tl;
      Result.y = l;
      return Result;
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FSpellCheck = true;
      this.FLines = pas.Classes.TStringList.$create("Create$1");
      this.FLines.SetSkipLastLineBreak(true);
      this.FLines.FOnChange = rtl.createCallback(this,"DoLinesChange");
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(400);
        this.SetHeight(300);
      };
      this.SetShowFocus(true);
      this.SetClipChildren(false);
      this.FWantTabs = false;
      this.FAutoSize = false;
      this.FAutoCompletion = $mod.TAutoCompletion.acOff;
      this.FWordWrap = true;
      this.FScrollbars = pas["WEBLib.Controls"].TScrollStyle.ssBoth;
      this.FNoUserSelect = false;
    };
    this.Destroy = function () {
      rtl.free(this,"FLines");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.Clear = function () {
      this.FLines.Clear();
    };
    this.SelectAll = function () {
      if (this.GetElementInputHandle() != null) this.GetElementInputHandle().select();
    };
    this.CopyToClipboard = function () {
      var s = "";
      s = this.GetText();
      navigator.clipboard.writeText(s);
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TMemo",this.TCustomMemo,function () {
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize");
    $r.addProperty("BiDiMode",2,pas["WEBLib.Controls"].$rtti["TBiDiMode"],"FBiDiMode","SetBiDiMode",{Default: pas["WEBLib.Controls"].TBiDiMode.bdLeftToRight});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
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
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Lines",2,pas.Classes.$rtti["TStrings"],"FLines","SetLines");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor",{Default: false});
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("ReadOnly",2,rtl.boolean,"FReadOnly","SetReadOnly");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("SelStart",3,rtl.longint,"GetSelStart","SetSelStart");
    $r.addProperty("SelLength",3,rtl.longint,"GetSelLength","SetSelLength");
    $r.addProperty("ShowFocus",2,rtl.boolean,"FShowFocus","SetShowFocus",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint",{Default: false});
    $r.addProperty("Spellcheck",2,rtl.boolean,"FSpellCheck","SetSpellCheck",{Default: true});
    $r.addProperty("TabOrder",2,rtl.longint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop",{Default: true});
    $r.addProperty("TextDirection",0,pas["WEBLib.Controls"].$rtti["TTextDirection"],"FTextDirection","FTextDirection",{Default: pas["WEBLib.Controls"].TTextDirection.tdDefault});
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
  rtl.createClass(this,"TWebMemo",this.TMemo,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TControlGroup",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FControls$1 = null;
      this.FOldCount = 0;
      this.FColumns = 0;
      this.FItems = null;
      this.FOnChange = null;
      this.FElementButtonClassName = "";
      this.FElementLabelClassName = "";
      this.FElementGroupClassName = "";
      this.FControlPosition = 0;
      this.FElementLegendClassName = "";
    };
    this.$final = function () {
      this.FControls$1 = undefined;
      this.FItems = undefined;
      this.FOnChange = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.SetControlPosition = function (Value) {
      if (this.FControlPosition !== Value) {
        this.FControlPosition = Value;
        this.DoUpdateList();
      };
    };
    this.CreateElement = function () {
      var Result = null;
      var legend = null;
      Result = document.createElement("FIELDSET");
      legend = document.createElement("LEGEND");
      Result.appendChild(legend);
      legend.innerHTML = this.FCaption;
      legend.setAttribute("class","w-auto " + this.FElementLegendClassName);
      if (this.FCaption === "") {
        legend.style.setProperty("display","none")}
       else legend.style.setProperty("display","");
      legend.style.setProperty("float","none");
      Result.style.setProperty("display","inline-block");
      Result.style.setProperty("-webkit-padding-before","0px");
      Result.style.setProperty("-webkit-padding-after","0px");
      Result.style.setProperty("-webkit-padding-end","0px");
      Result.style.setProperty("-webkit-padding-start","0px");
      Result.style.setProperty("border","1px");
      return Result;
    };
    this.DoHandleChange = function (Event) {
      var Result = false;
      this.Change();
      Result = true;
      return Result;
    };
    this.DoHandleClick = function (AControl) {
      this.Change();
    };
    this.DoItemsChange = function (Sender) {
      this.DoUpdateList();
    };
    this.DoControlClick = function (Sender) {
      this.DoHandleClick(rtl.as(Sender,pas["WEBLib.Controls"].TCustomControl));
    };
    this.SetCaption = function (AValue) {
      var el = null;
      pas["WEBLib.Controls"].TCustomControl.SetCaption.call(this,AValue);
      if (!(this.GetContainer() != null)) return;
      el = this.GetContainer().firstElementChild;
      if (el != null) {
        el.innerHTML = AValue;
        if (AValue === "") {
          el.style.setProperty("display","none")}
         else el.style.setProperty("display","");
      };
    };
    this.SetColumns = function (AValue) {
      if ((this.FColumns > 0) && (this.FColumns !== AValue)) {
        this.FColumns = AValue;
        this.DoUpdateList();
      };
    };
    this.SetItems = function (AItems) {
      this.FItems.Assign(AItems);
      this.DoUpdateList();
    };
    this.DoUpdateList = function () {
      var i = 0;
      var s = "";
      var rd = null;
      var dx = 0;
      var dy = 0;
      var dc = 0;
      var col = 0;
      var row = 0;
      var ypos = 0;
      var legend = null;
      var chk = [];
      if (!(this.GetContainer() != null)) return;
      if (this.FItems.GetCount() === 0) return;
      dy = Math.round(this.FFont.FSize * 2.5);
      dx = rtl.trunc(this.GetWidth() / this.FColumns);
      if (this.FCaption !== "") {
        dc = this.FFont.FSize}
       else dc = 4;
      col = 0;
      row = 0;
      if (this.FOldCount > 0) chk = rtl.arraySetLength(chk,false,this.FOldCount);
      for (var $l = 0, $end = this.FOldCount - 1; $l <= $end; $l++) {
        i = $l;
        rd = rtl.getObject(this.FControls$1.Get(i));
        if ($mod.TRadioButton.isPrototypeOf(rd)) chk[i] = rtl.as(rd,$mod.TRadioButton).GetChecked();
        if ($mod.TCheckBox.isPrototypeOf(rd)) chk[i] = rtl.as(rd,$mod.TCheckBox).GetChecked();
        rd = rtl.freeLoc(rd);
      };
      this.FControls$1.Clear();
      while (this.GetContainer().childElementCount > 0) this.GetContainer().removeChild(this.GetContainer().firstChild);
      if (this.FCaption !== "") {
        legend = document.createElement("LEGEND");
        this.GetElementHandle().appendChild(legend);
        legend.innerHTML = this.FCaption;
        legend.setAttribute("class","w-auto " + this.FElementLegendClassName);
        legend.style.setProperty("float","none");
        pas["WEBLib.Controls"].SetHTMLElementFont(legend,this.FFont,!((this.FElementFont === pas["WEBLib.Controls"].TElementFont.efProperty) && (this.FElementClassName === "")));
      };
      if (this.FElementGroupClassName !== "") {
        this.GetElementHandle().setAttribute("class",this.FElementGroupClassName)}
       else this.GetElementHandle().setAttribute("class","border p-2");
      this.GetContainer().style.setProperty("margin","0px");
      for (var $l1 = 0, $end1 = this.FItems.GetCount() - 1; $l1 <= $end1; $l1++) {
        i = $l1;
        ypos = dc + (row * dy);
        s = this.FItems.Get(i);
        rd = this.CreateGroupControl(4 + (col * dx),ypos,i,s,this.FControlPosition,this.GetGroupControlState(i),true);
        rd.SetEnabled(this.FEnabled);
        this.FControls$1.Add(rd);
        if (i <= this.FOldCount) {
          if ($mod.TRadioButton.isPrototypeOf(rd)) rtl.as(rd,$mod.TRadioButton).SetChecked(chk[i]);
          if ($mod.TCheckBox.isPrototypeOf(rd)) rtl.as(rd,$mod.TCheckBox).SetChecked(chk[i]);
        };
        if (!this.GetIsLinked()) {
          rd.GetContainer().style.setProperty("float","left");
          rd.GetContainer().style.setProperty("width",pas.SysUtils.IntToStr(pas.System.Trunc(100 / this.FColumns) - 5) + "%");
          if (this.FTabStop) {
            rd.GetContainer().setAttribute("tabindex",pas.SysUtils.TIntegerHelper.ToString$1.call({p: this, get: function () {
                return this.p.FTabOrder;
              }, set: function (v) {
                this.p.FTabOrder = v;
              }}));
            this.GetContainer().setAttribute("tabindex","-1");
          } else rd.GetContainer().setAttribute("tabindex","-1");
        };
        if ((i % this.FColumns) === 0) rd.GetContainer().style.setProperty("clear","left");
        this.GetElementHandle().appendChild(rd.GetContainer());
        if (col < (this.FColumns - 1)) {
          col += 1}
         else {
          col = 0;
          row += 1;
        };
      };
      this.FOldCount = this.FItems.GetCount();
    };
    this.Change = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      this.DoUpdateList();
    };
    this.FontChanged = function () {
      pas["WEBLib.Controls"].TControl.FontChanged.call(this);
      this.DoUpdateList();
    };
    this.CreateGroupControl = function (ALeft, ATop, AIndex, ACaption, APosition, AState, AEnabled) {
      var Result = null;
      Result = null;
      return Result;
    };
    this.GetGroupControlState = function (AIndex) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetGroupControl = function (AIndex) {
      var Result = null;
      Result = rtl.getObject(this.FControls$1.Get(AIndex));
      return Result;
    };
    this.SetEnabled = function (Value) {
      var i = 0;
      pas["WEBLib.Controls"].TControl.SetEnabled.apply(this,arguments);
      for (var $l = 0, $end = this.FControls$1.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        rtl.getObject(this.FControls$1.Get(i)).SetEnabled(Value);
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FColumns = 1;
      this.FControls$1 = pas.Classes.TList.$create("Create$1");
      this.FItems = pas.Classes.TStringList.$create("Create$1");
      this.FItems.FOnChange = rtl.createCallback(this,"DoItemsChange");
      this.FOldCount = -1;
      this.FControlPosition = pas["WEBLib.Controls"].TElementPosition.epAbsolute;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(200);
        this.SetHeight(200);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FControls$1");
      rtl.free(this,"FItems");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.EndUpdate = function () {
      pas["WEBLib.Controls"].TCustomControl.EndUpdate.call(this);
      this.DoUpdateList();
    };
    this.SetHeight = function (AValue) {
      pas["WEBLib.Controls"].TControl.SetHeight.apply(this,arguments);
      this.DoUpdateList();
    };
    this.SetWidth = function (AValue) {
      pas["WEBLib.Controls"].TControl.SetWidth.apply(this,arguments);
      this.DoUpdateList();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Columns",2,rtl.longint,"FColumns","SetColumns");
    $r.addProperty("ControlPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FControlPosition","SetControlPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementButtonClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementButtonClassName","FElementButtonClassName");
    $r.addProperty("ElementGroupClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementGroupClassName","FElementGroupClassName");
    $r.addProperty("ElementLabelClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementLabelClassName","FElementLabelClassName");
    $r.addProperty("ElementLegendClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementLegendClassName","FElementLegendClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Items",2,pas.Classes.$rtti["TStrings"],"FItems","SetItems");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("PopupMenu",0,pas["WEBLib.Menus"].$rtti["TPopupMenu"],"FPopupMenu","FPopupMenu");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TRadioGroup",this.TControlGroup,function () {
    this.$init = function () {
      $mod.TControlGroup.$init.call(this);
      this.FItemIndex = 0;
      this.FOldItemIndex = 0;
    };
    this.DoHandleClick = function (AControl) {
      if (this.GetItemIndex() === this.FOldItemIndex) return;
      this.Change();
      this.FOldItemIndex = this.GetItemIndex();
    };
    this.GetItemIndex = function () {
      var Result = 0;
      var el = null;
      var i = 0;
      Result = this.FItemIndex;
      for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        el = document.getElementById(this.GetID() + pas.SysUtils.IntToStr(i) + "rd");
        if (el != null) {
          if (el.checked) Result = i;
        };
      };
      return Result;
    };
    this.SetItemIndex = function (AIndex) {
      var el = null;
      if ((AIndex === -1) && (this.GetItemIndex() >= 0)) {
        el = document.getElementById(this.GetID() + pas.SysUtils.IntToStr(this.GetItemIndex()) + "rd");
        if (el != null) el.checked = false;
        this.FItemIndex = -1;
      } else {
        this.FItemIndex = AIndex;
        if ((AIndex >= 0) && (AIndex < this.FItems.GetCount())) {
          el = document.getElementById(this.GetID() + pas.SysUtils.IntToStr(AIndex) + "rd");
          if (el != null) el.checked = true;
        };
      };
    };
    this.CreateGroupControl = function (ALeft, ATop, AIndex, ACaption, APosition, AState, AEnabled) {
      var Result = null;
      var rd = null;
      var id = "";
      id = this.GetID();
      if (id === "") id = this.FName;
      rd = $mod.TRadioButton.$create("Create$2",[id + pas.SysUtils.IntToStr(AIndex)]);
      rd.SetElementPosition(APosition);
      rd.SetElementFont(this.FElementFont);
      rd.SetElementClassName(this.FElementClassName);
      rd.FElementButtonClassName = this.FElementButtonClassName;
      rd.FElementLabelClassName = this.FElementLabelClassName;
      rd.SetHeightStyle(pas["WEBLib.Controls"].TSizeStyle.ssAuto);
      rd.SetParentFont(false);
      rd.FFont.Assign(this.FFont);
      rd.SetParent(this);
      rd.SetCaption(ACaption);
      rd.SetGroupName(id);
      rd.SetTop(ATop);
      rd.SetLeft(ALeft);
      rd.SetWidthStyle(pas["WEBLib.Controls"].TSizeStyle.ssAuto);
      rd.SetWidthPercent(100);
      rd.FOnClick = rtl.createCallback(this,"DoControlClick");
      rd.SetChecked(AState);
      rd.SetEnabled(AEnabled);
      rd.FTag$1 = AIndex;
      rd.SetTabStop(true);
      Result = rd;
      return Result;
    };
    this.GetGroupControlState = function (AIndex) {
      var Result = false;
      Result = AIndex === this.FItemIndex;
      return Result;
    };
    this.LoadState = function (AState) {
      var idx = 0;
      var e = 0;
      pas.System.val$6(AState,{get: function () {
          return idx;
        }, set: function (v) {
          idx = v;
        }},{get: function () {
          return e;
        }, set: function (v) {
          e = v;
        }});
      if (e === 0) this.SetItemIndex(idx);
    };
    this.SaveState = function () {
      var Result = "";
      Result = pas.SysUtils.IntToStr(this.GetItemIndex());
      return Result;
    };
    this.CreateInitialize = function () {
      $mod.TControlGroup.CreateInitialize.call(this);
      this.FItemIndex = -1;
      this.FOldItemIndex = -2;
    };
    this.SetFocus = function () {
      var idx = 0;
      var rd = null;
      if (this.FItems.GetCount() === 0) return;
      idx = this.GetItemIndex();
      if (idx < 0) idx = 0;
      rd = this.GetGroupControl(idx);
      if (rd != null) rd.SetFocus();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("ItemIndex",3,rtl.longint,"GetItemIndex","SetItemIndex");
  });
  rtl.createClass(this,"TWebRadioGroup",this.TRadioGroup,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$MethodVar("TCheckClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AIndex",rtl.longint]]), methodkind: 0});
  rtl.createClass(this,"TCheckGroup",this.TControlGroup,function () {
    this.$init = function () {
      $mod.TControlGroup.$init.call(this);
      this.FOnCheckClick = null;
    };
    this.$final = function () {
      this.FOnCheckClick = undefined;
      $mod.TControlGroup.$final.call(this);
    };
    this.GetChecked = function (AIndex) {
      var Result = false;
      Result = rtl.as(this.GetGroupControl(AIndex),$mod.TCheckBox).GetChecked();
      return Result;
    };
    this.SetChecked = function (AIndex, Value) {
      rtl.as(this.GetGroupControl(AIndex),$mod.TCheckBox).SetChecked(Value);
    };
    this.DoHandleClick = function (AControl) {
      $mod.TControlGroup.DoHandleClick.apply(this,arguments);
      if (this.FOnCheckClick != null) this.FOnCheckClick(this,AControl.FTag$1);
    };
    this.CreateGroupControl = function (ALeft, ATop, AIndex, ACaption, APosition, AState, AEnabled) {
      var Result = null;
      var cb = null;
      var id = "";
      id = this.GetID();
      if (id === "") id = this.FName;
      cb = $mod.TCheckBox.$create("Create$2",[id + pas.SysUtils.IntToStr(AIndex)]);
      cb.SetCaption(ACaption);
      cb.SetElementPosition(APosition);
      cb.SetElementFont(this.FElementFont);
      cb.SetElementClassName(this.FElementClassName);
      cb.FElementButtonClassName = this.FElementButtonClassName;
      cb.FElementLabelClassName = this.FElementLabelClassName;
      cb.SetParentFont(false);
      cb.FFont.Assign(this.FFont);
      cb.SetParent(this);
      cb.SetTop(ATop);
      cb.SetLeft(ALeft);
      cb.SetWidthStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
      cb.SetWidthPercent(100);
      cb.SetHeightStyle(pas["WEBLib.Controls"].TSizeStyle.ssAuto);
      cb.FOnCheckClick = rtl.createCallback(this,"DoControlClick");
      cb.SetChecked(AState);
      cb.SetEnabled(AEnabled);
      cb.FTag$1 = AIndex;
      cb.SetTabStop(true);
      Result = cb;
      return Result;
    };
    this.GetGroupControlState = function (AIndex) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.SaveState = function () {
      var Result = "";
      var i = 0;
      var s = "";
      s = "";
      for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.GetChecked(i)) {
          s = s + ",1"}
         else s = s + ",0";
      };
      pas.System.Delete({get: function () {
          return s;
        }, set: function (v) {
          s = v;
        }},1,1);
      Result = s;
      return Result;
    };
    this.LoadState = function (AState) {
      var sl = null;
      var i = 0;
      sl = pas.Classes.TStringList.$create("Create$1");
      sl.SetDelimiter(",");
      sl.SetCommaText(AState);
      for (var $l = 0, $end = sl.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        this.SetChecked(i,sl.Get(i) === "1");
      };
      sl = rtl.freeLoc(sl);
    };
    this.CreateInitialize = function () {
      $mod.TControlGroup.CreateInitialize.call(this);
    };
    this.SetFocus = function () {
      var cb = null;
      if (this.FItems.GetCount() > 0) {
        cb = this.GetGroupControl(0);
        if (cb != null) cb.SetFocus();
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("OnCheckClick",0,$mod.$rtti["TCheckClickEvent"],"FOnCheckClick","FOnCheckClick");
  });
  rtl.createClass(this,"TWebCheckGroup",this.TCheckGroup,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TColorPicker",this.TCustomInput,function () {
    this.$init = function () {
      $mod.TCustomInput.$init.call(this);
      this.FColor$1 = 0;
      this.FOnSelect = null;
      this.FHandleChangePtr = null;
    };
    this.$final = function () {
      this.FOnSelect = undefined;
      $mod.TCustomInput.$final.call(this);
    };
    this.GetElementInputHandle = function () {
      var Result = null;
      Result = this.GetContainer();
      return Result;
    };
    this.UpdateElementVisual = function () {
      $mod.TCustomInput.UpdateElementVisual.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().style.setProperty("padding","0px");
        this.GetElementHandle().style.setProperty("width",pas.SysUtils.IntToStr(this.GetWidth() - 2) + "px");
        this.GetElementHandle().style.setProperty("height",pas.SysUtils.IntToStr(this.GetHeight() - 2) + "px");
      };
    };
    this.DoHandleChange = function (Event) {
      var Result = false;
      this.Select();
      Result = true;
      return Result;
    };
    this.GetInputType = function () {
      var Result = "";
      Result = "COLOR";
      return Result;
    };
    this.GetColor = function () {
      var Result = 0;
      Result = this.FColor$1;
      if (this.GetContainer() != null) Result = pas["WEBLib.Graphics"].HexToColor(this.GetContainer().value);
      return Result;
    };
    this.SetColor$1 = function (AValue) {
      this.FColor$1 = AValue;
      if (this.GetContainer() != null) this.GetContainer().value = pas["WEBLib.Graphics"].ColorToHTML(AValue);
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementInputHandle() != null) {
        this.GetElementInputHandle().addEventListener("input",this.FHandleChangePtr);
      };
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementInputHandle() != null) {
        this.GetElementInputHandle().removeEventListener("input",this.FHandleChangePtr);
      };
    };
    this.Select = function () {
      if (this.FOnSelect != null) this.FOnSelect(this);
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
      $mod.TCustomInput.CreateInitialize.call(this);
      this.FColor$1 = 0;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",3,pas["WEBLib.Graphics"].$rtti["TColor"],"GetColor","SetColor$1");
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("Margins",2,pas["WEBLib.Controls"].$rtti["TMargins"],"FMargins","SetMargins");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnSelect",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnSelect","FOnSelect");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TWebColorPicker",this.TColorPicker,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TScrollBarContent",pas["WEBLib.Controls"].TCustomControl,function () {
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("SPAN");
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TScrollBar",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FScrolling = false;
      this.FContent = null;
      this.FKind = 0;
      this.FPosition = 0;
      this.FSmallChange = 0;
      this.FMax = 0;
      this.FMin = 0;
      this.FLargeChange = 0;
      this.FPageSize = 0;
      this.FOnChange = null;
      this.FScrollPtr = null;
    };
    this.$final = function () {
      this.FContent = undefined;
      this.FOnChange = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetKind = function (Value) {
      if (this.FKind !== Value) {
        this.FKind = Value;
        var $tmp = this.FKind;
        if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbHorizontal) {
          this.SetBounds(this.GetLeft(),this.GetTop(),this.GetHeight(),17);
        } else if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbVertical) {
          this.SetBounds(this.GetLeft(),this.GetTop(),17,this.GetWidth());
        };
        this.UpdateElement();
        this.UpdateContent();
      };
    };
    this.SetPosition = function (Value) {
      if (this.FPosition !== Value) {
        this.FPosition = Value;
        this.UpdateContent();
      };
    };
    this.SetMax = function (Value) {
      if (this.FMax !== Value) {
        this.FMax = Value;
        this.UpdateContent();
      };
    };
    this.SetMin = function (Value) {
      if (this.FMin !== Value) {
        this.FMin = Value;
        this.UpdateContent();
      };
    };
    this.SetPageSize = function (Value) {
      if (this.FPageSize !== Value) {
        this.FPageSize = Value;
        this.UpdateContent();
      };
    };
    this.GetPosition = function () {
      var Result = 0;
      Result = 0;
      if (this.GetElement() != null) {
        var $tmp = this.FKind;
        if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbHorizontal) {
          Result = Math.round(this.GetValue(this.GetElement().scrollLeft))}
         else if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbVertical) Result = Math.round(this.GetValue(this.GetElement().scrollTop));
      } else Result = this.FPosition;
      return Result;
    };
    this.GetPageSize = function () {
      var Result = 0;
      Result = this.FPageSize;
      if (Result === 0) Result = 25;
      return Result;
    };
    this.GetValue = function (XYPos) {
      var Result = 0.0;
      Result = 0;
      if (this.FContent != null) {
        var $tmp = this.FKind;
        if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbHorizontal) {
          if (this.FContent.GetWidth() > 0) Result = (XYPos / this.FContent.GetWidth()) * (this.FMax - this.FMin);
        } else if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbVertical) {
          if (this.FContent.GetHeight() > 0) Result = (XYPos / this.FContent.GetHeight()) * (this.FMax - this.FMin);
        };
      };
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("SPAN");
      return Result;
    };
    this.DoScroll = function (Event) {
      var Result = false;
      this.FScrolling = true;
      if (this.FOnChange != null) this.FOnChange(this);
      this.FScrolling = false;
      Result = true;
      return Result;
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementHandle() != null) this.GetElementHandle().addEventListener("scroll",this.FScrollPtr);
    };
    this.UnbindEvents = function () {
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementHandle() != null) this.GetElementHandle().removeEventListener("scroll",this.FScrollPtr);
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().style.setProperty("overflow","auto");
        var $tmp = this.FKind;
        if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbHorizontal) {
          this.GetElementHandle().style.setProperty("overflow-y","hidden");
          this.GetElementHandle().style.setProperty("overflow-x","");
        } else if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbVertical) {
          this.GetElementHandle().style.setProperty("overflow-y","");
          this.GetElementHandle().style.setProperty("overflow-x","hidden");
        };
      };
    };
    this.UpdateContent = function () {
      var x = 0;
      var y = 0;
      var w = 0;
      var h = 0;
      var ps = 0;
      var v = 0.0;
      if (!(this.FContent != null) || !(this.GetElementHandle() != null) || this.FScrolling) return;
      ps = this.GetPageSize();
      v = (this.FMax - this.FMin) / ps;
      var $tmp = this.FKind;
      if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbHorizontal) {
        y = 0;
        h = this.GetHeight();
        w = Math.round(v * this.GetWidth());
        x = Math.round(((this.FPosition - this.FMin) / (this.FMax - this.FMin)) * w);
      } else if ($tmp === pas["WEBLib.Controls"].TScrollBarKind.sbVertical) {
        x = 0;
        w = this.GetWidth();
        h = Math.round(v * this.GetHeight());
        y = Math.round(((this.FPosition - this.FMin) / (this.FMax - this.FMin)) * h);
      };
      this.FContent.SetBounds(0,0,w,h);
      this.GetElementHandle().scrollLeft = x;
      this.GetElementHandle().scrollTop = y;
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      this.UpdateContent();
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FScrollPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      this.FScrollPtr = rtl.createCallback(this,"DoScroll");
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetTabStop(true);
      this.FKind = pas["WEBLib.Controls"].TScrollBarKind.sbHorizontal;
      this.FPosition = 0;
      this.FMin = 0;
      this.FMax = 100;
      this.FSmallChange = 1;
      this.FLargeChange = 1;
      this.FContent = $mod.TScrollBarContent.$create("Create$1",[this]);
      this.FContent.SetParent(this);
      this.FContent.SetWidth(121);
      this.FContent.SetHeight(17);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(121);
        this.SetHeight(17);
      };
      this.UpdateContent();
    };
    this.Destroy = function () {
      rtl.free(this,"FContent");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.SetBounds = function (X, Y, AWidth, AHeight) {
      pas["WEBLib.Controls"].TControl.SetBounds.apply(this,arguments);
      this.UpdateContent();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("Height",3,rtl.longint,"GetHeight","SetHeight");
    $r.addProperty("Kind",2,pas["WEBLib.Controls"].$rtti["TScrollBarKind"],"FKind","SetKind");
    $r.addProperty("Position",3,rtl.longint,"GetPosition","SetPosition");
    $r.addProperty("Left",3,rtl.longint,"GetLeft","SetLeft");
    $r.addProperty("SmallChange",0,rtl.longint,"FSmallChange","FSmallChange");
    $r.addProperty("LargeChange",0,rtl.longint,"FLargeChange","FLargeChange");
    $r.addProperty("Max",2,rtl.longint,"FMax","SetMax");
    $r.addProperty("Min",2,rtl.longint,"FMin","SetMin");
    $r.addProperty("PageSize",3,rtl.longint,"GetPageSize","SetPageSize");
    $r.addProperty("Top",3,rtl.longint,"GetTop","SetTop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("Width",3,rtl.longint,"GetWidth","SetWidth");
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TWebScrollBar",this.TScrollBar,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.GetAutoCompletionName = function (aAutoCompletion) {
    var Result = "";
    var $tmp = aAutoCompletion;
    if ($tmp === $mod.TAutoCompletion.acOff) {
      Result = ""}
     else if ($tmp === $mod.TAutoCompletion.acHonorificPrefix) {
      Result = "honorific-prefix"}
     else if ($tmp === $mod.TAutoCompletion.acGivenName) {
      Result = "given-name"}
     else if ($tmp === $mod.TAutoCompletion.acAdditionalName) {
      Result = "additional-name"}
     else if ($tmp === $mod.TAutoCompletion.acFamilyName) {
      Result = "family-name"}
     else if ($tmp === $mod.TAutoCompletion.acHonorificSuffix) {
      Result = "honorific-suffix"}
     else if ($tmp === $mod.TAutoCompletion.acNickName) {
      Result = "nickname"}
     else if ($tmp === $mod.TAutoCompletion.acEmail) {
      Result = "email"}
     else if ($tmp === $mod.TAutoCompletion.acUserName) {
      Result = "username"}
     else if ($tmp === $mod.TAutoCompletion.acNewPassword) {
      Result = "new-password"}
     else if ($tmp === $mod.TAutoCompletion.acCurrentPassword) {
      Result = "current-password"}
     else if ($tmp === $mod.TAutoCompletion.acOrganizationTitle) {
      Result = "organization-title"}
     else if ($tmp === $mod.TAutoCompletion.acOrganization) {
      Result = "organization"}
     else if ($tmp === $mod.TAutoCompletion.acStreetAddress) {
      Result = "street-address"}
     else if ($tmp === $mod.TAutoCompletion.acAddressLine1) {
      Result = "address-line1"}
     else if ($tmp === $mod.TAutoCompletion.acAddressLine2) {
      Result = "address-line2"}
     else if ($tmp === $mod.TAutoCompletion.acAddressLine3) {
      Result = "address-line3"}
     else if ($tmp === $mod.TAutoCompletion.acAddressLevel1) {
      Result = "address-level1"}
     else if ($tmp === $mod.TAutoCompletion.acAddressLevel2) {
      Result = "address-level2"}
     else if ($tmp === $mod.TAutoCompletion.acAddressLevel3) {
      Result = "address-level3"}
     else if ($tmp === $mod.TAutoCompletion.acAddressLevel4) {
      Result = "address-level4"}
     else if ($tmp === $mod.TAutoCompletion.acCountry) {
      Result = "country"}
     else if ($tmp === $mod.TAutoCompletion.acCountryName) {
      Result = "country-name"}
     else if ($tmp === $mod.TAutoCompletion.acPostalCode) {
      Result = "postal-code"}
     else if ($tmp === $mod.TAutoCompletion.acCCName) {
      Result = "cc-name"}
     else if ($tmp === $mod.TAutoCompletion.acCCGivenName) {
      Result = "cc-given-name"}
     else if ($tmp === $mod.TAutoCompletion.acCCAdditionalName) {
      Result = "cc-additional-name"}
     else if ($tmp === $mod.TAutoCompletion.acCCFamilyName) {
      Result = "cc-family-name"}
     else if ($tmp === $mod.TAutoCompletion.acCCNumber) {
      Result = "cc-number"}
     else if ($tmp === $mod.TAutoCompletion.acExpiry) {
      Result = "cc-exp"}
     else if ($tmp === $mod.TAutoCompletion.acExpiryMonth) {
      Result = "cc-exp-month"}
     else if ($tmp === $mod.TAutoCompletion.acExpiryYear) {
      Result = "cc-exp-year"}
     else if ($tmp === $mod.TAutoCompletion.acCSC) {
      Result = "cc-csc"}
     else if ($tmp === $mod.TAutoCompletion.acType) {
      Result = "cc-type"}
     else if ($tmp === $mod.TAutoCompletion.acTransactionCurrency) {
      Result = "transaction-currency"}
     else if ($tmp === $mod.TAutoCompletion.acTransactionAmount) {
      Result = "transaction-amount"}
     else if ($tmp === $mod.TAutoCompletion.acLanguage) {
      Result = "language"}
     else if ($tmp === $mod.TAutoCompletion.acBirthday) {
      Result = "bday"}
     else if ($tmp === $mod.TAutoCompletion.acBirthdayDay) {
      Result = "bday-day"}
     else if ($tmp === $mod.TAutoCompletion.acBirthDayMonth) {
      Result = "bday-month"}
     else if ($tmp === $mod.TAutoCompletion.acBirthDayYear) {
      Result = "bday-year"}
     else if ($tmp === $mod.TAutoCompletion.acSex) {
      Result = "sex"}
     else if ($tmp === $mod.TAutoCompletion.acTelephone) {
      Result = "tel"}
     else if ($tmp === $mod.TAutoCompletion.acTelephoneCountryCode) {
      Result = "tel-country-code"}
     else if ($tmp === $mod.TAutoCompletion.acTelephoneNational) {
      Result = "tel-national"}
     else if ($tmp === $mod.TAutoCompletion.acTelephoneAreaCode) {
      Result = "tel-area-code"}
     else if ($tmp === $mod.TAutoCompletion.acTelephoneLocal) {
      Result = "tel-local"}
     else if ($tmp === $mod.TAutoCompletion.acTelephoneExtension) {
      Result = "tel-extension"}
     else if ($tmp === $mod.TAutoCompletion.acIMPP) {
      Result = "impp"}
     else if ($tmp === $mod.TAutoCompletion.acURL) {
      Result = "url"}
     else if ($tmp === $mod.TAutoCompletion.acPhoto) {
      Result = "photo"}
     else if ($tmp === $mod.TAutoCompletion.acNope) Result = "nope";
    return Result;
  };
});
//# sourceMappingURL=WEBLib.StdCtrls.js.map
