rtl.module("WEBLib.Dialogs",["System","Classes","WEBLib.Controls","Web","JS","SysUtils","WEBLib.WebTools","WEBLib.WebCtrls","WEBLib.Graphics"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TMsgDlgType = {"0": "mtWarning", mtWarning: 0, "1": "mtError", mtError: 1, "2": "mtInformation", mtInformation: 2, "3": "mtConfirmation", mtConfirmation: 3, "4": "mtCustom", mtCustom: 4};
  this.$rtti.$Enum("TMsgDlgType",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TMsgDlgType});
  this.TMsgDlgBtn = {"0": "mbYes", mbYes: 0, "1": "mbNo", mbNo: 1, "2": "mbOK", mbOK: 2, "3": "mbCancel", mbCancel: 3, "4": "mbAbort", mbAbort: 4, "5": "mbRetry", mbRetry: 5, "6": "mbIgnore", mbIgnore: 6, "7": "mbAll", mbAll: 7, "8": "mbNoToAll", mbNoToAll: 8, "9": "mbYesToAll", mbYesToAll: 9, "10": "mbHelp", mbHelp: 10, "11": "mbClose", mbClose: 11};
  this.$rtti.$Enum("TMsgDlgBtn",{minvalue: 0, maxvalue: 11, ordtype: 1, enumtype: this.TMsgDlgBtn});
  this.$rtti.$Set("TMsgDlgButtons",{comptype: this.$rtti["TMsgDlgBtn"]});
  this.$rtti.$RefToProcVar("TDialogResultProc",{procsig: rtl.newTIProcSig([["AValue",rtl.longint]])});
  rtl.createClass(this,"TCustomDialogButton",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FCaption = "";
      this.FTag = 0;
      this.FElementClassName = "";
    };
    var $r = this.$rtti;
    $r.addProperty("Caption",0,rtl.string,"FCaption","FCaption");
    $r.addProperty("ElementClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","FElementClassName");
    $r.addProperty("Tag",0,rtl.longint,"FTag","FTag",{Default: 0});
  });
  rtl.createClass(this,"TCustomDialogButtons",pas.Classes.TOwnedCollection,function () {
    this.GetItem$1 = function (AIndex) {
      var Result = null;
      Result = this.GetItem(AIndex);
      return Result;
    };
    this.SetItem$1 = function (AIndex, Value) {
      this.SetItem(AIndex,Value);
    };
    this.Add$1 = function () {
      var Result = null;
      Result = pas.Classes.TCollection.Add.call(this);
      return Result;
    };
    this.Insert$1 = function (AIndex) {
      var Result = null;
      Result = pas.Classes.TCollection.Insert.call(this,AIndex);
      return Result;
    };
  });
  rtl.createClass(this,"TMessageDlg",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FOpacity = 0.0;
      this.FLayer$1 = null;
      this.FDlg = null;
      this.FCancel = null;
      this.FMessage = "";
      this.FTitle = "";
      this.FMsgDlgType = 0;
      this.FOnButtonClick = null;
      this.FOnClose = null;
      this.FButtons = {};
      this.FDialogProc = null;
      this.FDialogResult = 0;
      this.FMdx = 0;
      this.FMdy = 0;
      this.FDlgX = 0;
      this.FDlgY = 0;
      this.FCaptured$1 = false;
      this.FDown = false;
      this.FElementTitleClassName = "";
      this.FElementButtonClassName = "";
      this.FElementContentClassName = "";
      this.FDialogText = null;
      this.FCustomButtons = null;
      this.FElementDialogClassName = "";
      this.FAutoLanguage = false;
    };
    this.$final = function () {
      this.FLayer$1 = undefined;
      this.FDlg = undefined;
      this.FCancel = undefined;
      this.FOnButtonClick = undefined;
      this.FOnClose = undefined;
      this.FButtons = undefined;
      this.FDialogProc = undefined;
      this.FDialogText = undefined;
      this.FCustomButtons = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetDialogText = function (Value) {
      this.FDialogText.Assign(Value);
    };
    this.SetCustomButtons = function (Value) {
      this.FCustomButtons.Assign(Value);
    };
    this.CreateElement = function () {
      var Result = null;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        Result = null}
       else pas["WEBLib.Controls"].TCustomControl.CreateElement.call(this);
      return Result;
    };
    var TLang = {"0": "lEN", lEN: 0, "1": "lFR", lFR: 1, "2": "lDE", lDE: 2, "3": "lES", lES: 3, "4": "lNL", lNL: 4};
    this.GetDialogText = function (Index) {
      var Result = "";
      var locl = "";
      var l = 0;
      Result = "Undefined";
      if (Index < this.FDialogText.GetCount()) Result = this.FDialogText.Get(Index);
      if (this.FAutoLanguage) {
        locl = pas["WEBLib.WebTools"].GetBrowserLocale();
        l = TLang.lEN;
        if (pas.System.Pos("es",locl) === 1) l = TLang.lES;
        if (pas.System.Pos("fr",locl) === 1) l = TLang.lFR;
        if (pas.System.Pos("de",locl) === 1) l = TLang.lDE;
        if (pas.System.Pos("nl",locl) === 1) l = TLang.lNL;
        var $tmp = l;
        if ($tmp === TLang.lES) {
          var $tmp1 = Index;
          if ($tmp1 === 0) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SWarningES")}
           else if ($tmp1 === 1) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SErrorES")}
           else if ($tmp1 === 2) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SInformationES")}
           else if ($tmp1 === 3) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SConfirmES")}
           else if ($tmp1 === 5) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SOKES")}
           else if ($tmp1 === 6) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SCancelES")}
           else if ($tmp1 === 7) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SYesES")}
           else if ($tmp1 === 8) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SNoES")}
           else if ($tmp1 === 9) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SAbortES")}
           else if ($tmp1 === 10) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SRetryES")}
           else if ($tmp1 === 11) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SIgnoreES")}
           else if ($tmp1 === 12) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SAllES")}
           else if ($tmp1 === 13) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SYesToAllES")}
           else if ($tmp1 === 14) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SNoToAllES")}
           else if ($tmp1 === 15) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SHelpES")}
           else if ($tmp1 === 16) Result = rtl.getResStr(pas["WEBLib.Consts"],"SCloseES");
        } else if ($tmp === TLang.lFR) {
          var $tmp2 = Index;
          if ($tmp2 === 0) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SWarningFR")}
           else if ($tmp2 === 1) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SErrorFR")}
           else if ($tmp2 === 2) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SInformationFR")}
           else if ($tmp2 === 3) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SConfirmFR")}
           else if ($tmp2 === 5) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SOKFR")}
           else if ($tmp2 === 6) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SCancelFR")}
           else if ($tmp2 === 7) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SYesFR")}
           else if ($tmp2 === 8) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SNoFR")}
           else if ($tmp2 === 9) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SAbortFR")}
           else if ($tmp2 === 10) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SRetryFR")}
           else if ($tmp2 === 11) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SIgnoreFR")}
           else if ($tmp2 === 12) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SAllFR")}
           else if ($tmp2 === 13) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SYesToAllFR")}
           else if ($tmp2 === 14) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SNoToAllFR")}
           else if ($tmp2 === 15) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SHelpFR")}
           else if ($tmp2 === 16) Result = rtl.getResStr(pas["WEBLib.Consts"],"SCloseFR");
        } else if ($tmp === TLang.lDE) {
          var $tmp3 = Index;
          if ($tmp3 === 0) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SWarningDE")}
           else if ($tmp3 === 1) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SErrorDE")}
           else if ($tmp3 === 2) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SInformationDE")}
           else if ($tmp3 === 3) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SConfirmDE")}
           else if ($tmp3 === 5) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SOKDE")}
           else if ($tmp3 === 6) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SCancelDE")}
           else if ($tmp3 === 7) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SYesDE")}
           else if ($tmp3 === 8) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SNoDE")}
           else if ($tmp3 === 9) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SAbortDE")}
           else if ($tmp3 === 10) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SRetryDE")}
           else if ($tmp3 === 11) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SIgnoreDE")}
           else if ($tmp3 === 12) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SAllDE")}
           else if ($tmp3 === 13) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SYesToAllDE")}
           else if ($tmp3 === 14) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SNoToAllDE")}
           else if ($tmp3 === 15) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SHelpDE")}
           else if ($tmp3 === 16) Result = rtl.getResStr(pas["WEBLib.Consts"],"SCloseDE");
        } else if ($tmp === TLang.lNL) {
          var $tmp4 = Index;
          if ($tmp4 === 0) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SWarningNL")}
           else if ($tmp4 === 1) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SErrorNL")}
           else if ($tmp4 === 2) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SInformationNL")}
           else if ($tmp4 === 3) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SConfirmNL")}
           else if ($tmp4 === 5) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SOKNL")}
           else if ($tmp4 === 6) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SCancelNL")}
           else if ($tmp4 === 7) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SYesNL")}
           else if ($tmp4 === 8) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SNoNL")}
           else if ($tmp4 === 9) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SAbortNL")}
           else if ($tmp4 === 10) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SRetryNL")}
           else if ($tmp4 === 11) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SIgnoreNL")}
           else if ($tmp4 === 12) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SAllNL")}
           else if ($tmp4 === 13) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SYesToAllNL")}
           else if ($tmp4 === 14) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SNoToAllNL")}
           else if ($tmp4 === 15) {
            Result = rtl.getResStr(pas["WEBLib.Consts"],"SHelpNL")}
           else if ($tmp4 === 16) Result = rtl.getResStr(pas["WEBLib.Consts"],"SCloseNL");
        };
      };
      return Result;
    };
    this.BindEvents = function () {
    };
    this.SetDialogResult = function (Value) {
      this.FDialogResult = Value;
      if (this.FDialogResult !== 0) this.Close();
    };
    this.CreateButton = function (Caption, DoFocus, AClass) {
      var Result = null;
      Result = document.createElement("BUTTON");
      Result.innerHTML = Caption;
      if (pas["WEBLib.Forms"].Application.FMainForm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap) {
        Result.setAttribute("type","BUTTON");
        Result.setAttribute("class","btn " + AClass);
        Result.setAttribute("data-dismiss","modal-dialog");
      } else {
        Result.style.setProperty("width","100px");
        Result.style.setProperty("margin-left","5px");
        if (this.FElementButtonClassName !== "") {
          Result.setAttribute("class",this.FElementButtonClassName + " " + AClass)}
         else if (pas["WEBLib.Forms"].Application.FThemeButtonClassName !== "") Result.setAttribute("class",pas["WEBLib.Forms"].Application.FThemeButtonClassName + " " + AClass);
      };
      Result.id = Caption;
      Result.addEventListener("click",rtl.createCallback(this,"HandleButtonClick"));
      Result.addEventListener("keydown",rtl.createCallback(this,"HandleKeyDown"));
      if (DoFocus.get()) {
        setTimeout(function() {Result.focus();}, 1);
        DoFocus.set(false);
      };
      return Result;
    };
    this.HandleDocMouseMove = function (Event) {
      var Result = false;
      var deltax = 0.0;
      var deltay = 0.0;
      var el = null;
      if (this.FDown) {
        deltax = Event.screenX - this.FMdx;
        deltay = Event.screenY - this.FMdy;
        el = this.FDlg;
        el.style.setProperty("transform","");
        el.style.setProperty("position","absolute");
        el.style.setProperty("left",pas.SysUtils.IntToStr(Math.round(this.FDlgX + deltax)) + "px");
        el.style.setProperty("top",pas.SysUtils.IntToStr(Math.round(this.FDlgY + deltay)) + "px");
        el = this.FCancel;
        el.style.setProperty("position","absolute");
        el.style.setProperty("top","0");
        el.style.setProperty("right","0");
      };
      Result = true;
      return Result;
    };
    this.HandleDocMouseUp = function (Event) {
      var Result = false;
      this.FDown = false;
      document.body.removeEventListener("mousemove",rtl.createCallback(this,"HandleDocMouseMove"));
      document.body.removeEventListener("mouseup",rtl.createCallback(this,"HandleDocMouseUp"));
      Result = true;
      return Result;
    };
    this.HandleMouseDown = function (Event) {
      var Result = false;
      var r = null;
      this.FMdx = Math.round(Event.screenX);
      this.FMdy = Math.round(Event.screenY);
      r = this.FDlg.getBoundingClientRect();
      this.FDlgX = Math.round(pas.System.Int(r.left));
      this.FDlgY = Math.round(pas.System.Int(r.top));
      this.FDown = true;
      if (!this.FCaptured$1) {
        this.FCaptured$1 = true;
        document.body.addEventListener("mousemove",rtl.createCallback(this,"HandleDocMouseMove"));
        document.body.addEventListener("mouseup",rtl.createCallback(this,"HandleDocMouseUp"));
      };
      Result = true;
      return Result;
    };
    this.HandleButtonClick = function (Event) {
      var Result = false;
      var id = "";
      var i = 0;
      this.SetDialogResult(0);
      id = Event.target.getAttribute("id");
      if (id === this.GetDialogText(7)) {
        this.SetDialogResult(6)}
       else if (id === this.GetDialogText(8)) {
        this.SetDialogResult(7)}
       else if (id === this.GetDialogText(5)) {
        this.SetDialogResult(1)}
       else if (id === this.GetDialogText(6)) {
        this.SetDialogResult(2)}
       else if (id === this.GetDialogText(9)) {
        this.SetDialogResult(3)}
       else if (id === this.GetDialogText(10)) {
        this.SetDialogResult(4)}
       else if (id === this.GetDialogText(11)) {
        this.SetDialogResult(5)}
       else if (id === this.GetDialogText(12)) {
        this.SetDialogResult(12)}
       else if (id === this.GetDialogText(13)) {
        this.SetDialogResult(13)}
       else if (id === this.GetDialogText(14)) {
        this.SetDialogResult(14)}
       else if (id === this.GetDialogText(15)) {
        this.SetDialogResult(9)}
       else if (id === this.GetDialogText(16)) this.SetDialogResult(8);
      if ((this.FDialogResult === 0) && (this.FCustomButtons.GetCount() > 0)) {
        for (var $l = 0, $end = this.FCustomButtons.GetCount() - 1; $l <= $end; $l++) {
          i = $l;
          if (id === this.FCustomButtons.GetItem$1(i).FCaption) {
            this.SetDialogResult(100 + i);
            break;
          };
        };
      };
      if (this.FOnButtonClick != null) this.FOnButtonClick(this);
      Result = true;
      return Result;
    };
    this.HandleKeyDown = function (Event) {
      var Result = false;
      var k = 0;
      k = this.GetKeyCode(Event.key,true);
      if (!pas.System.Assigned(k)) return Result;
      if (k === 27) this.SetDialogResult(2);
      Result = true;
      return Result;
    };
    this.InitBootstrapStyle = function () {
      this.FElementButtonClassName = "btn";
      this.FElementContentClassName = "text-body";
      this.FElementTitleClassName = "text-body";
      this.FElementDialogClassName = "shadow-lg p-3 mb-5 bg-white rounded";
    };
    this.InsertInputElement = function (AElement, DoFocus) {
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FOpacity = 0.2;
      this.FMessage = "";
      this.FAutoLanguage = true;
      this.FMsgDlgType = $mod.TMsgDlgType.mtInformation;
      this.FDialogText = pas.Classes.TStringList.$create("Create$1");
      this.FDialogText.SetSkipLastLineBreak(true);
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SWarning"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SError"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SInformation"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SConfirm"));
      this.FDialogText.Add("Custom");
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SOK"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SCancel"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SYes"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SNo"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SAbort"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SRetry"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SIgnore"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SAll"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SYesToAll"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SNoToAll"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SHelp"));
      this.FDialogText.Add(rtl.getResStr(pas["WEBLib.Consts"],"SClose"));
      this.FMsgDlgType = $mod.TMsgDlgType.mtCustom;
      this.FCustomButtons = $mod.TCustomDialogButtons.$create("Create$2",[this,$mod.TCustomDialogButton]);
      this.FCustomButtons.FPropName = "CustomButtons";
    };
    this.Destroy = function () {
      rtl.free(this,"FDialogText");
      rtl.free(this,"FCustomButtons");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.Close = function () {
      pas["WEBLib.Forms"].Application.UnLockForm(pas["WEBLib.Forms"].Application.FMainForm);
      document.body.removeChild(this.FLayer$1);
      document.body.removeChild(this.FDlg);
      this.FDown = false;
      this.FCaptured$1 = false;
      if (this.FOnClose != null) this.FOnClose(this);
      if (this.FDialogProc != null) this.FDialogProc(this.FDialogResult);
    };
    this.Show$1 = function () {
      var title = null;
      var msg = null;
      var icon = null;
      var content = null;
      var contentdiv = null;
      var bar = null;
      var edlg = null;
      var eh = null;
      var cancel = null;
      var adiv = null;
      var ldiv = null;
      var cdiv = null;
      var MsgSymbol = "";
      var MsgColor = "";
      var MsgTitle = "";
      var BorderColor = "";
      var BarBGColor = "";
      var BarHeight = "";
      var Padding = "";
      var btnFocus = false;
      var i = 0;
      if ((pas["WEBLib.Forms"].Application === null) || (pas["WEBLib.Forms"].Application.FMainForm === null)) return;
      if (!pas["WEBLib.Forms"].Application.HasCSS($impl.lMaterial)) this.AddControlLink("material",$impl.lMaterial);
      pas["WEBLib.Forms"].Application.LockForm(pas["WEBLib.Forms"].Application.FMainForm);
      this.FLayer$1 = document.createElement("SPAN");
      document.body.appendChild(this.FLayer$1);
      this.FLayer$1.setAttribute("tabindex","0");
      this.FLayer$1.addEventListener("keydown",rtl.createCallback(this,"HandleKeyDown"));
      btnFocus = true;
      this.FMessage = $impl.StringToHTML(this.FMessage);
      var $tmp = this.FMsgDlgType;
      if ($tmp === $mod.TMsgDlgType.mtWarning) {
        MsgSymbol = "warning";
        MsgColor = "orange";
        MsgTitle = this.GetDialogText(0);
      } else if ($tmp === $mod.TMsgDlgType.mtError) {
        MsgSymbol = "cancel";
        MsgColor = "red";
        MsgTitle = this.GetDialogText(1);
      } else if ($tmp === $mod.TMsgDlgType.mtInformation) {
        MsgSymbol = "info";
        MsgColor = "blue";
        MsgTitle = this.GetDialogText(2);
      } else if ($tmp === $mod.TMsgDlgType.mtConfirmation) {
        MsgSymbol = "help";
        MsgColor = "blue";
        MsgTitle = this.GetDialogText(3);
      } else if ($tmp === $mod.TMsgDlgType.mtCustom) {
        MsgSymbol = "";
        MsgColor = "";
        MsgTitle = this.GetDialogText(4);
      };
      if (this.FTitle !== "") MsgTitle = this.FTitle;
      if (pas["WEBLib.Forms"].Application.FMainForm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap) {
        this.FDlg = document.createElement("DIV");
        this.FDlg.setAttribute("class","modal-dialog");
        this.FDlg.setAttribute("role","document");
        this.FDlg.style.setProperty("z-index","1999998");
        eh = document.createElement("DIV");
        eh.style.setProperty("top","0");
        eh.style.setProperty("left","0");
        eh.style.setProperty("right","0");
        eh.style.setProperty("bottom","0");
        eh.style.setProperty("z-index","1999997");
        eh.style.setProperty("display","block");
        eh.setAttribute("class","modal show fade");
        document.body.appendChild(eh);
        eh.appendChild(this.FDlg);
        ldiv = this.FDlg;
        adiv = document.createElement("DIV");
        adiv.setAttribute("class","modal-content " + this.FElementDialogClassName);
        ldiv.appendChild(adiv);
        cdiv = adiv;
        ldiv = adiv;
        adiv = document.createElement("DIV");
        adiv.setAttribute("class","modal-header");
        cdiv.appendChild(adiv);
        ldiv = adiv;
        adiv = document.createElement("H5");
        adiv.setAttribute("class","modal-title");
        adiv.innerHTML = MsgTitle;
        ldiv.appendChild(adiv);
        if ($mod.TMsgDlgBtn.mbCancel in this.FButtons) {
          adiv = document.createElement("BUTTON");
          adiv.setAttribute("type","button");
          adiv.setAttribute("class","close btn btn-danger");
          adiv.setAttribute("data-dismiss","modal-dialog");
          adiv.setAttribute("aria-label","Close");
          adiv.setAttribute("id",this.GetDialogText(6));
          adiv.addEventListener("click",rtl.createCallback(this,"HandleButtonClick"));
          ldiv.appendChild(adiv);
          ldiv = adiv;
          adiv = document.createElement("SPAN");
          adiv.setAttribute("aria-hidden","true");
          adiv.setAttribute("id",this.GetDialogText(6));
          adiv.innerHTML = "&times;";
          ldiv.appendChild(adiv);
        };
        adiv = document.createElement("DIV");
        adiv.setAttribute("class","modal-body");
        cdiv.appendChild(adiv);
        ldiv = adiv;
        if (this.FMsgDlgType !== $mod.TMsgDlgType.mtCustom) {
          icon = document.createElement("SPAN");
          icon.innerHTML = '<i class="material-icons" style="color:' + MsgColor + '!important;font-size:48px!important">' + MsgSymbol + "</i>";
          icon.style.setProperty("display","inline-block");
          icon.style.setProperty("float","left");
          icon.style.setProperty("padding-right","15px");
          ldiv.appendChild(icon);
        };
        adiv = document.createElement("H6");
        adiv.innerHTML = this.FMessage;
        ldiv.appendChild(adiv);
        this.InsertInputElement(ldiv,{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }});
        adiv = document.createElement("DIV");
        adiv.setAttribute("class","modal-footer");
        cdiv.appendChild(adiv);
        ldiv = adiv;
        bar = ldiv;
        this.FDlg = eh;
      } else {
        Padding = "5";
        BarHeight = "26";
        BarBGColor = "#f1f1f1";
        BorderColor = "#ababab";
        this.FDlg = document.createElement("DIV");
        document.body.appendChild(this.FDlg);
        edlg = this.FDlg;
        if (this.FElementDialogClassName !== "") {
          edlg.setAttribute("class",this.FElementDialogClassName)}
         else {
          edlg.style.setProperty("background-color","white");
          edlg.style.setProperty("border","1px solid " + BorderColor);
          edlg.style.setProperty("font-family","Arial");
          edlg.style.setProperty("font-size","10pt");
        };
        edlg.style.setProperty("cursor","default");
        edlg.style.setProperty("position","fixed");
        edlg.style.setProperty("min-width","300px");
        edlg.style.setProperty("min-height","125px");
        edlg.style.setProperty("max-width","100%");
        edlg.style.setProperty("max-height","100%");
        edlg.style.setProperty("top","50%");
        edlg.style.setProperty("left","50%");
        edlg.style.setProperty("transform","translate(-50%, -50%)");
        edlg.style.setProperty("z-index","1999998");
        edlg.style.setProperty("box-shadow","5px 5px 5px gray");
        cancel = document.createElement("DIV");
        this.FCancel = cancel;
        cancel.innerHTML = '<i id="Cancel" class="material-icons" style="font-size:16px!important">clear</i>';
        cancel.id = "Cancel";
        cancel.style.setProperty("color",pas["WEBLib.Graphics"].ColorToHTML(pas["WEBLib.Forms"].Application.FThemeTextColor));
        cancel.style.setProperty("position","fixed");
        cancel.style.setProperty("top","0");
        cancel.style.setProperty("right","0");
        cancel.style.setProperty("padding",Padding + "px");
        cancel.style.setProperty("height",BarHeight + "px");
        cancel.style.setProperty("line-height",BarHeight + "px");
        cancel.addEventListener("click",rtl.createCallback(this,"HandleButtonClick"));
        edlg.appendChild(cancel);
        title = document.createElement("DIV");
        title.innerHTML = MsgTitle;
        if (this.FElementTitleClassName !== "") {
          title.setAttribute("class",this.FElementTitleClassName);
        } else {
          title.style.setProperty("background-color",pas["WEBLib.Graphics"].ColorToHTML(pas["WEBLib.Forms"].Application.FThemeColor));
          title.style.setProperty("color",pas["WEBLib.Graphics"].ColorToHTML(pas["WEBLib.Forms"].Application.FThemeTextColor));
        };
        title.style.setProperty("cursor","move");
        title.style.setProperty("padding-left",Padding + "px");
        title.style.setProperty("height",BarHeight + "px");
        title.style.setProperty("vertical-align","middle");
        title.style.setProperty("line-height",BarHeight + "px");
        title.style.setProperty("border-bottom","1px solid " + BorderColor);
        title.style.setProperty("-moz-user-select","none");
        title.style.setProperty("-webkit-user-select","none");
        title.style.setProperty("-ms-user-select","none");
        title.style.setProperty("user-select","none");
        title.style.setProperty("-o-user-select","none");
        title.addEventListener("mousedown",rtl.createCallback(this,"HandleMouseDown"));
        edlg.appendChild(title);
        msg = document.createElement("DIV");
        msg.style.setProperty("padding",Padding + "px");
        msg.style.setProperty("height","auto");
        msg.style.setProperty("min-height","50px");
        msg.style.setProperty("border-bottom","1px solid " + BorderColor);
        if (this.FMsgDlgType !== $mod.TMsgDlgType.mtCustom) {
          icon = document.createElement("DIV");
          icon.innerHTML = '<i class="material-icons" style="color:' + MsgColor + '!important;font-size:48px!important">' + MsgSymbol + "</i>";
          icon.style.setProperty("display","inline-block");
          icon.style.setProperty("float","left");
          icon.style.setProperty("padding-right","15px");
          msg.appendChild(icon);
        };
        this.FMessage = pas.SysUtils.StringReplace(this.FMessage,pas.System.sLineBreak,"<BR>",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
        contentdiv = document.createElement("DIV");
        contentdiv.innerHTML = this.FMessage;
        contentdiv.style.setProperty("height","auto");
        contentdiv.style.setProperty("min-height","50px");
        contentdiv.style.setProperty("white-space","pre-wrap");
        content = document.createElement("LABEL");
        content.innerHTML = this.FMessage;
        if (this.FElementTitleClassName !== "") {
          content.setAttribute("class",this.FElementContentClassName);
        };
        contentdiv.appendChild(content);
        msg.appendChild(content);
        this.InsertInputElement(msg,{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }});
        edlg.appendChild(msg);
        bar = document.createElement("DIV");
        bar.style.setProperty("background-color",BarBGColor);
        bar.style.setProperty("padding",Padding + "px");
        bar.style.setProperty("min-height",BarHeight + "px");
        bar.style.setProperty("height","auto");
        bar.style.setProperty("line-height",BarHeight + "px");
        bar.style.setProperty("text-align","right");
        edlg.appendChild(bar);
      };
      if (rtl.eqSet(this.FButtons,{}) && (this.FCustomButtons.GetCount() === 0)) {
        bar.appendChild(this.CreateButton(this.GetDialogText(5),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""))}
       else {
        if ($mod.TMsgDlgBtn.mbYes in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(7),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbNo in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(8),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbOK in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(5),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbCancel in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(6),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbAbort in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(9),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbRetry in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(10),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbIgnore in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(11),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbAll in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(12),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbYesToAll in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(13),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbNoToAll in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(14),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbHelp in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(15),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
        if ($mod.TMsgDlgBtn.mbClose in this.FButtons) bar.appendChild(this.CreateButton(this.GetDialogText(16),{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},""));
      };
      for (var $l = 0, $end = this.FCustomButtons.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        bar.appendChild(this.CreateButton(this.FCustomButtons.GetItem$1(i).FCaption,{get: function () {
            return btnFocus;
          }, set: function (v) {
            btnFocus = v;
          }},this.FCustomButtons.GetItem$1(i).FElementClassName));
      };
      eh = this.FLayer$1;
      eh.style.setProperty("background-color","black");
      eh.style.setProperty("opacity",pas["WEBLib.WebTools"].DoubleToHTML(this.FOpacity));
      eh.style.setProperty("top","0");
      eh.style.setProperty("left","0");
      eh.style.setProperty("right","0");
      eh.style.setProperty("bottom","0");
      eh.style.setProperty("z-index",pas["WEBLib.Forms"].Application.MaxZIndexStr());
      eh.style.setProperty("webkit-user-select","none");
      eh.style.setProperty("moz-user-select","none");
      eh.style.setProperty("khtml-user-select","none");
      eh.style.setProperty("ms-user-select","none");
      eh.style.setProperty("user-select","none");
      eh.style.setProperty("position","fixed");
    };
    this.ShowDialog = function () {
      var Result = 0;
      Result = 0;
      this.Show$1();
      return Result;
    };
    this.ShowDialog$1 = function (Msg, DlgType, Buttons, AProc) {
      var Result = 0;
      Result = 0;
      this.FButtons = rtl.refSet(Buttons);
      this.FMessage = Msg;
      this.FMsgDlgType = DlgType;
      this.FDialogProc = AProc;
      this.SetDialogResult(0);
      this.Show$1();
      return Result;
    };
    this.ShowDialog$2 = function (Msg, DlgType, Buttons) {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (ASuccess, AFailed) {
        $Self.ShowDialog$1(Msg,DlgType,rtl.refSet(Buttons),function (AResult) {
          ASuccess(AResult);
        });
      });
      return Result;
    };
    this.ShowAsync = function () {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (ASuccess, AFailed) {
        $Self.ShowDialog$1($Self.FMessage,$Self.FMsgDlgType,rtl.refSet($Self.FButtons),function (AResult) {
          ASuccess(AResult);
        });
      });
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("AutoLanguage",0,rtl.boolean,"FAutoLanguage","FAutoLanguage",{Default: true});
    $r.addProperty("Buttons",0,$mod.$rtti["TMsgDlgButtons"],"FButtons","FButtons",{Default: {}});
    $r.addProperty("CustomButtons",2,$mod.$rtti["TCustomDialogButtons"],"FCustomButtons","SetCustomButtons");
    $r.addProperty("DialogText",2,pas.Classes.$rtti["TStringList"],"FDialogText","SetDialogText");
    $r.addProperty("DialogType",0,$mod.$rtti["TMsgDlgType"],"FMsgDlgType","FMsgDlgType",{Default: $mod.TMsgDlgType.mtCustom});
    $r.addProperty("Message",0,rtl.string,"FMessage","FMessage");
    $r.addProperty("Opacity",0,rtl.double,"FOpacity","FOpacity");
    $r.addProperty("ElementButtonClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementButtonClassName","FElementButtonClassName");
    $r.addProperty("ElementDialogClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementDialogClassName","FElementDialogClassName");
    $r.addProperty("ElementTitleClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementTitleClassName","FElementTitleClassName");
    $r.addProperty("ElementContentClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementContentClassName","FElementContentClassName");
    $r.addProperty("Title",0,rtl.string,"FTitle","FTitle");
    $r.addProperty("OnButtonClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnButtonClick","FOnButtonClick");
    $r.addProperty("OnClose",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClose","FOnClose");
  });
  rtl.createClass(this,"TWebMessageDlg",this.TMessageDlg,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TInputMessageDlg",this.TMessageDlg,function () {
    this.$init = function () {
      $mod.TMessageDlg.$init.call(this);
      this.FInputElement = null;
      this.FInputValue = "";
      this.FKeydownHandler = null;
      this.FKeypressHandler = null;
      this.FInputType = 0;
    };
    this.$final = function () {
      this.FInputElement = undefined;
      $mod.TMessageDlg.$final.call(this);
    };
    this.ShowAsync = function () {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (ASuccess, AFailed) {
        $Self.ShowDialog$1($Self.FMessage,$Self.FMsgDlgType,rtl.refSet($Self.FButtons),function (AResult) {
          $Self.FInputValue = $Self.GetInputElementValue();
          ASuccess(AResult);
        });
      });
      return Result;
    };
    this.HandleInputKeydown = function (Event) {
      var Result = false;
      Result = true;
      if (Event.key === "Enter") {
        Event.preventDefault();
        Event.stopPropagation();
        this.SetDialogResult(1);
        Result = false;
      };
      if (Event.key === "Escape") {
        Event.preventDefault();
        Event.stopPropagation();
        this.SetDialogResult(2);
        Result = false;
      };
      return Result;
    };
    this.HandleInputKeypress = function (Event) {
      var Result = false;
      Result = true;
      Event.stopPropagation();
      return Result;
    };
    this.InsertInputElement = function (AElement, DoFocus) {
      var divel = null;
      var inputel = null;
      $mod.TMessageDlg.InsertInputElement.apply(this,arguments);
      if (this.FKeydownHandler === null) this.FKeydownHandler = rtl.createCallback(this,"HandleInputKeydown");
      if (this.FKeypressHandler === null) this.FKeypressHandler = rtl.createCallback(this,"HandleInputKeypress");
      divel = document.createElement("DIV");
      inputel = document.createElement("INPUT");
      inputel.addEventListener("keydown",this.FKeydownHandler);
      inputel.addEventListener("keypress",this.FKeypressHandler);
      divel.appendChild(inputel);
      AElement.appendChild(divel);
      this.FInputElement = inputel;
      this.FInputElement.setAttribute("type",pas["WEBLib.Controls"].InputTypeString(this.FInputType));
      divel.style.setProperty("margin-top","10px");
      this.FInputElement.style.setProperty("padding","4px");
      this.SetInputElementValue(this.FInputValue);
      this.FInputElement.style.setProperty("width","calc(100% - 80px)");
      if (DoFocus.get()) {
        setTimeout(function() {inputel.focus(); inputel.select()}, 1);
        DoFocus.set(false);
      };
    };
    this.GetInputElementValue = function () {
      var Result = "";
      Result = "";
      if (this.FInputElement != null) {
        this.FInputValue = this.FInputElement.value;
        Result = this.FInputValue;
      };
      return Result;
    };
    this.SetInputElementValue = function (AValue) {
      this.FInputElement.value = AValue;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addField("FInputElement",pas.Web.$rtti["TJSHTMLElement"]);
    $r.addField("FInputValue",rtl.string);
    $r.addField("FKeydownHandler",rtl.pointer);
    $r.addField("FKeypressHandler",rtl.pointer);
    $r.addProperty("InputValue",1,rtl.string,"GetInputElementValue","FInputValue");
    $r.addProperty("InputType",0,pas["WEBLib.Controls"].$rtti["TInputType"],"FInputType","FInputType",{Default: pas["WEBLib.Controls"].TInputType.itText});
  });
  rtl.createClass(this,"TWebInputMessageDlg",this.TInputMessageDlg,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TWaitMessage",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FLayer$1 = null;
      this.FPicture = null;
      this.FOpacity = 0.0;
      this.FOnShow = null;
      this.FOnHide = null;
      this.FIsWaiting = false;
      this.FPictureURL = "";
      this.FTimeOut = 0;
      this.FShowID = 0;
      this.FHideID = 0;
    };
    this.$final = function () {
      this.FLayer$1 = undefined;
      this.FPicture = undefined;
      this.FOnShow = undefined;
      this.FOnHide = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetPicture = function (Value) {
      this.FPicture.Assign(Value);
    };
    this.SetPictureURL = function (Value) {
      this.FPictureURL = Value;
    };
    this.WaitDisplayed = function () {
      if (this.FOnShow != null) this.FOnShow(this);
    };
    this.WaitHide = function () {
      if (this.FOnHide != null) this.FOnHide(this);
      this.Hide$1();
    };
    this.CreateElement = function () {
      var Result = null;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        Result = null}
       else pas["WEBLib.Controls"].TCustomControl.CreateElement.call(this);
      return Result;
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FOpacity = 0.2;
      this.FPicture = pas["WEBLib.Graphics"].TURLPicture.$create("Create");
      this.FIsWaiting = false;
      this.FPicture.SetData($impl.lWaitCursor);
      this.FShowID = 0;
      this.FHideID = 0;
    };
    this.Destroy = function () {
      rtl.free(this,"FPicture");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.Show$1 = function () {
      var eh = null;
      var img = null;
      var dv = null;
      var el = null;
      this.FLayer$1 = document.createElement("SPAN");
      eh = this.FLayer$1;
      eh.style.setProperty("background-color","black");
      eh.style.setProperty("opacity",pas["WEBLib.WebTools"].DoubleToHTML(this.FOpacity));
      eh.style.setProperty("top","0");
      eh.style.setProperty("left","0");
      eh.style.setProperty("right","0");
      eh.style.setProperty("bottom","0");
      eh.style.setProperty("z-index","9999999");
      eh.style.setProperty("webkit-user-select","none");
      eh.style.setProperty("moz-user-select","none");
      eh.style.setProperty("khtml-user-select","none");
      eh.style.setProperty("ms-user-select","none");
      eh.style.setProperty("user-select","none");
      eh.style.setProperty("position","fixed");
      document.body.appendChild(this.FLayer$1);
      this.FLayer$1.setAttribute("tabindex","0");
      el = document.createElement("DIV");
      dv = el;
      this.FLayer$1.appendChild(el);
      dv.style.setProperty("position","relative");
      dv.style.setProperty("width","100%");
      dv.style.setProperty("height","100%");
      el = document.createElement("IMG");
      img = el;
      dv.appendChild(img);
      if (this.FPictureURL !== "") {
        img.setAttribute("src",this.FPictureURL)}
       else img.setAttribute("src",this.FPicture.FFilename);
      img.style.setProperty("position","absolute");
      img.style.setProperty("top","0");
      img.style.setProperty("left","0");
      img.style.setProperty("right","0");
      img.style.setProperty("bottom","0");
      img.style.setProperty("margin","auto");
      this.FIsWaiting = true;
      if (this.FOnShow != null) {
        this.FShowID = window.setTimeout(rtl.createSafeCallback(this,"WaitDisplayed"),100);
      };
      if (this.FTimeOut > 0) {
        this.FHideID = window.setTimeout(rtl.createSafeCallback(this,"WaitHide"),this.FTimeOut);
      };
    };
    this.Hide$1 = function () {
      if (this.FIsWaiting) document.body.removeChild(this.FLayer$1);
      this.FIsWaiting = false;
      if (this.FShowID > 0) window.clearTimeout(this.FShowID);
      if (this.FHideID > 0) window.clearTimeout(this.FHideID);
      this.FShowID = 0;
      this.FHideID = 0;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Opacity",0,rtl.double,"FOpacity","FOpacity");
    $r.addProperty("Picture",2,pas["WEBLib.Graphics"].$rtti["TURLPicture"],"FPicture","SetPicture");
    $r.addProperty("PictureURL",2,rtl.string,"FPictureURL","SetPictureURL");
    $r.addProperty("TimeOut",0,rtl.longint,"FTimeOut","FTimeOut");
    $r.addProperty("OnHide",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnHide","FOnHide");
    $r.addProperty("OnShow",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnShow","FOnShow");
  });
  rtl.createClass(this,"TWebWaitMessage",this.TWaitMessage,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$RefToProcVar("TOpenDialogProc",{procsig: rtl.newTIProcSig([["AFileName",rtl.string]])});
  this.TOpenOption = {"0": "ofReadOnly", ofReadOnly: 0, "1": "ofOverwritePrompt", ofOverwritePrompt: 1, "2": "ofHideReadOnly", ofHideReadOnly: 2, "3": "ofNoChangeDir", ofNoChangeDir: 3, "4": "ofShowHelp", ofShowHelp: 4, "5": "ofNoValidate", ofNoValidate: 5, "6": "ofAllowMultiSelect", ofAllowMultiSelect: 6, "7": "ofExtensionDifferent", ofExtensionDifferent: 7, "8": "ofPathMustExist", ofPathMustExist: 8, "9": "ofFileMustExist", ofFileMustExist: 9, "10": "ofCreatePrompt", ofCreatePrompt: 10, "11": "ofShareAware", ofShareAware: 11, "12": "ofNoReadOnlyReturn", ofNoReadOnlyReturn: 12, "13": "ofNoTestFileCreate", ofNoTestFileCreate: 13, "14": "ofNoNetworkButton", ofNoNetworkButton: 14, "15": "ofNoLongNames", ofNoLongNames: 15, "16": "ofOldStyleDialog", ofOldStyleDialog: 16, "17": "ofNoDereferenceLinks", ofNoDereferenceLinks: 17, "18": "ofEnableIncludeNotify", ofEnableIncludeNotify: 18, "19": "ofEnableSizing", ofEnableSizing: 19, "20": "ofDontAddToRecent", ofDontAddToRecent: 20, "21": "ofForceShowHidden", ofForceShowHidden: 21};
  this.$rtti.$Enum("TOpenOption",{minvalue: 0, maxvalue: 21, ordtype: 1, enumtype: this.TOpenOption});
  this.$rtti.$Set("TOpenOptions",{comptype: this.$rtti["TOpenOption"]});
  rtl.createClass(this,"TOpenDialog",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FFiles = null;
      this.FOnChange = null;
      this.FFileName = "";
      this.FMultiFile = false;
      this.FFilter = "";
      this.FAccept = "";
      this.FOpenDialogProc = null;
      this.FOptions = {};
      this.FFilterIndex = 0;
      this.FOnFileAsBase64 = null;
      this.FOnGetFileAsArrayBuffer = null;
      this.FOnFileAsDataURL = null;
      this.FOnFileAsText = null;
      this.FOnGetFileAsStream = null;
    };
    this.$final = function () {
      this.FFiles = undefined;
      this.FOnChange = undefined;
      this.FOpenDialogProc = undefined;
      this.FOptions = undefined;
      this.FOnFileAsBase64 = undefined;
      this.FOnGetFileAsArrayBuffer = undefined;
      this.FOnFileAsDataURL = undefined;
      this.FOnFileAsText = undefined;
      this.FOnGetFileAsStream = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.HandleInputChange = function (Event) {
      var i = 0;
      var l = 0;
      var sz = 0;
      var s = "";
      var m = "";
      var f = null;
      var d = null;
      var jsfile = null;
      while (this.FFiles.GetCount() > 0) this.FFiles.Delete(0);
      var curFiles = Event.target.files;
      l = curFiles.length;
      for (var $l = 0, $end = l - 1; $l <= $end; $l++) {
        i = $l;
        f = this.FFiles.Add$1();
        jsfile = curFiles[i];
        s = curFiles[i].name;
        m = curFiles[i].type;
        sz = curFiles[i].size;
        d = new Date(curFiles[i].lastModified);
        if (i === 0) this.FFileName = s;
        f.FFileObject = jsfile;
        f.FName = s;
        f.FMimeType = m;
        f.FSize = sz;
        f.FModified = pas.SysUtils.EncodeDate(d.getYear() + 1900,d.getMonth() + 1,d.getDate()) + pas.SysUtils.EncodeTime(d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds());
      };
      if (this.FOpenDialogProc != null) this.FOpenDialogProc(this.FFileName);
      this.FOpenDialogProc = null;
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      this.FFiles = pas["WEBLib.WebCtrls"].TFiles.$create("Create$2",[this]);
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FFiles");
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.Execute = function () {
      var ic = null;
      var fp = null;
      ic = rtl.createCallback(this,"HandleInputChange");
      fp = document.createElement("input");
      fp.setAttribute("type","file");
      if (this.FMultiFile || ($mod.TOpenOption.ofAllowMultiSelect in this.FOptions)) fp.setAttribute("multiple","");
      if (this.FAccept !== "") fp.setAttribute("accept",this.FAccept);
      fp.addEventListener("change",ic);
      fp.click();
    };
    this.Execute$1 = function (AProc) {
      this.FOpenDialogProc = AProc;
      this.Execute();
    };
    this.Perform = function () {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (ASuccess, AFailed) {
        $Self.Execute$1(function (AFileName) {
          ASuccess(AFileName);
        });
      });
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Accept",0,rtl.string,"FAccept","FAccept");
    $r.addProperty("MultiFile",0,rtl.boolean,"FMultiFile","FMultiFile",{Default: false});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnGetFileAsText",0,pas["WEBLib.WebCtrls"].$rtti["TFileAsTextEvent"],"FOnFileAsText","FOnFileAsText");
    $r.addProperty("OnGetFileAsArrayBuffer",0,pas["WEBLib.WebCtrls"].$rtti["TFileAsArrayBufferEvent"],"FOnGetFileAsArrayBuffer","FOnGetFileAsArrayBuffer");
    $r.addProperty("OnGetFileAsStream",0,pas["WEBLib.WebCtrls"].$rtti["TFileAsStreamEvent"],"FOnGetFileAsStream","FOnGetFileAsStream");
    $r.addProperty("OnGetFileAsBase64",0,pas["WEBLib.WebCtrls"].$rtti["TFileAsBase64Event"],"FOnFileAsBase64","FOnFileAsBase64");
    $r.addProperty("OnGetFileAsDataURL",0,pas["WEBLib.WebCtrls"].$rtti["TFileAsDataURLEvent"],"FOnFileAsDataURL","FOnFileAsDataURL");
  });
  rtl.createClass(this,"TWebOpenDialog",this.TOpenDialog,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.MessageDlg = function (Msg, DlgType, Buttons, AResultProc) {
    if (!($impl.WebLibDlg != null)) {
      $impl.WebLibDlg = $mod.TMessageDlg.$create("Create$1",[null]);
      if (pas["WEBLib.Forms"].Application.FMainForm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap) {
        $impl.WebLibDlg.InitBootstrapStyle();
      };
    };
    $impl.WebLibDlg.ShowDialog$1(Msg,DlgType,rtl.refSet(Buttons),AResultProc);
  };
  this.ShowMessage = function (AMsg) {
    if ((pas["WEBLib.Forms"].Application !== null) && (pas["WEBLib.Forms"].Application.FMainForm !== null) && (pas["WEBLib.Forms"].Application.FMainForm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap)) {
      $mod.MessageDlg(AMsg,$mod.TMsgDlgType.mtInformation,rtl.createSet($mod.TMsgDlgBtn.mbOK),null);
    } else {
      alert(AMsg);
    };
  };
  this.MessageDlgAsync = async function (Msg, DlgType, Buttons) {
    var Result = 0;
    if (!($impl.WebLibDlg != null)) {
      $impl.WebLibDlg = $mod.TMessageDlg.$create("Create$1",[null]);
      if (pas["WEBLib.Forms"].Application.FMainForm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap) {
        $impl.WebLibDlg.InitBootstrapStyle();
      };
    };
    Result = await $impl.WebLibDlg.ShowDialog$2(Msg,DlgType,rtl.refSet(Buttons));
    return Result;
  };
  this.InputBox = function (ACaption, APrompt, ADefault) {
    var Result = "";
    var retvalue = "";
    retvalue = prompt(APrompt, ADefault);
    if (retvalue == null) {
      retvalue = "";
    };
    Result = retvalue;
    return Result;
  };
  this.InputQuery = function (ACaption, APrompt, Value) {
    var Result = false;
    var retvalue = false;
    var s = "";
    retvalue = true;
    s = Value.get();
    var text = s;
    s = prompt(APrompt, text);
    if (s == null) {
      retvalue = false;
    };
    if (retvalue) Value.set(s);
    Result = retvalue;
    return Result;
  };
  this.Confirm = function (Value) {
    var Result = false;
    var res = false;
    res = confirm(Value);
    Result = res;
    return Result;
  };
  this.InputMessageDlg = function (Msg, DlgType, Buttons, AResult, AInputType, AResultProc) {
    function ResultHandler(AModalResult) {
      if (AModalResult !== 2) AResult.set($impl.WebLibInputDlg.GetInputElementValue());
      if (AResultProc != null) AResultProc(AModalResult);
    };
    if (!($impl.WebLibInputDlg != null)) {
      $impl.WebLibInputDlg = $mod.TInputMessageDlg.$create("Create$1",[null]);
      if (pas["WEBLib.Forms"].Application.FMainForm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap) {
        $impl.WebLibInputDlg.InitBootstrapStyle();
      };
    };
    $impl.WebLibInputDlg.FInputValue = AResult.get();
    $impl.WebLibInputDlg.FInputType = AInputType;
    $impl.WebLibInputDlg.ShowDialog$1(Msg,DlgType,rtl.refSet(Buttons),ResultHandler);
  };
  this.InputMessageDlgAsync = async function (Msg, DlgType, Buttons, AResult, AInputType) {
    var Result = 0;
    if (!($impl.WebLibInputDlg != null)) {
      $impl.WebLibInputDlg = $mod.TInputMessageDlg.$create("Create$1",[null]);
      if (pas["WEBLib.Forms"].Application.FMainForm.FCSSLibrary === pas["WEBLib.Forms"].TCSSLibrary.cssBootstrap) {
        $impl.WebLibInputDlg.InitBootstrapStyle();
      };
    };
    $impl.WebLibInputDlg.FInputValue = AResult.get();
    $impl.WebLibInputDlg.FInputType = AInputType;
    Result = await $impl.WebLibInputDlg.ShowDialog$2(Msg,DlgType,rtl.refSet(Buttons));
    AResult.set($impl.WebLibInputDlg.GetInputElementValue());
    return Result;
  };
  $mod.$implcode = function () {
    $impl.lMaterial = "https://fonts.googleapis.com/icon?family=Material+Icons";
    $impl.lWaitCursor = "0954474946496D61676547494638396190012C01A20000FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF21FF0B4E45545343415045322E30030100000021F90405050004002C0000000090012C0182FFFFFFDDDDD" + "DBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03FF48BADCFE30CA49ABBD38EBCDBBFF60288E64699E68AAAE6CEBBE702CCF746DDF78AEEF7CEFFFC0A070482C1A8FC8A472C96C3A9FD0A8744AAD5AAFD8AC76CBED7ABFE0B078" + "4C2E9BCFE8B47ACD6EBBDFF0B87C4EAFDBEFF8BC7ECFEFFBFF808182838485868788898A8B8C8D8E8F909192939495969798999A9B9C9D9E9FA0A1A2A3A4A5A6A7A8A9AAABACADAEAFB0B1B2B3B4B5B6B7B8B9BABBBCBDBEBFC" + "0C1C2C3C4C5C6C7C8C9CACBCCCDCECFD0D1D2D3D4D5D6D7D8D9DADBDCDDDEDFE0E1E2E3E4E5E6E7E8E9EAEBECEDEEEFF0F1F2F3F4F5F6F7F8F9FAFBFCFDFEFF00030A1C48B0A0C18308132A5CC8B0A1C3871023861A407180C4" + "44152B5E349431FFE346421D357E141492E24892254F062A6951E51F962EC978F400D383809B02621E09493365079C387512A9B981A806A040850A319A812906A441950261D95283530B50A34AF541B52A86AB14B26ADDDA836" + "A519F19C4E6243B15AC04B711D4B20D62B629DA0B72E7B6BD5B01EE83BC7A7F74FDCA7782DAB58105FB6DB09801E0C45CEBF62D1CF731E4B28D15642660F93266CA0F3277F6CC43F204D162492F6DDC78B4EA1D834F8376ECFA" + "B50ED31016D7B69D237604BF8779AF9EBD80A7E1D4C24BCCFC803BB44809BB2F04981E20B9F19EC48F22F7409D3AEFE676AF87D8CEA1BB79DB5DBD86EF48827C06F3F0D1A7577F41BC08A8E5E1C77F3DDFE459FFFF2624B5817" + "EFA7DD71F7D4E1058A0700702D884820B26474083081601E17E1216D7A012179E97A103141AD161771FBEB56110237A57A26C070291E2742B5A70220F2FC6B81E78378C682307E9F970E18ED865370384408220240D111669E4" + "733F90A8E493504629E594545669E5955866A9A54014FA960400608629E698648EB955973D7E59E69A6C86A9149AF321D1E69C6C0A05679A46D0A9A7993ADDE925117B060A809D7E6E9683A07BBE59287B6A225AA7548B3229A" + "7A3656E69E9A59866AAE9A69C76EAE9A7A086AAC5728A39E8E99133A06AE59FBDE198259EB0B18A657F91C1BA6A8B9FC5596588A5D22A25AF7BF9AA24B04310BBA2B145206BDD8CFF4928CB1FB34C387B19B44F503BADB0EBA1" + "402A61BAAA862DB79286605F7DDD92662BB8DB32A72A88B226E6AA8CEB5260A873F1129AAE55F3B2382EBEF77AD6EF8DFF6A682ABDFBF25BE1AC8B15CCC0BBA2FEC6B05FED36ECB09009E71B6AC402336AA2C59F32ACD9911E4" + "B3C61662473CC69C8232BCC98C99AA29CB2C6F2B27C29C62BAB5C73BD2D1BAAB3CC5AD27C73C0ECF28C70BCF3BA9C73BDF91A8DA9D22F034D30CC0D33DD74B893E13C34CE16FBBC34C75C0B1DA5C9605B7DABCD1B438D2ED5A7" + "9A7DF6C0678BFC31DB6B1F0C2FDC6E77E075DDCA898D770A77EF2D42DF7E2F4976E02F004E7890741F9E2ADA8A37EEF8E390472EF9E494576EF9E5649867AEF9E69C77EEF9E7A0872EFAE8A4976EFAE9A8A7AEFAEAACB7EEFAE" + "BB0C72EFBECB4D76EFBEDB8E7AEFBEEBCF7EEFBEFC0072FFCF0C4176FFCF1C827AFFCF2CC37EFFCF3D0472FFDF4D4576FFDF5D867AFFDF6DC77EFFDF7E0872FFEF8E497DF7D020021F90405050007002CD60060003000570082" + "FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03EC78BABCF3A3C9492B85D0EA7D71E6E0E67D61298DA4A9A2A95AB291BBB2B20BD7E68D8770BC73BA9F2828B4108B1D1472A85C568E4E462F9A1C5127D36B037AE" + "5AA04608191B60B879FCD9A795DC5A8D7ECB6CF04AF8F1FB2BA9DAADF3BFB7E4880707C83665186877F8960858C8E865A895A0A83940B80970C819A95679DA0A1A2A3A4A5A6A7A8A9AA2A01ADAEAFB0B1B035B2B5B6AF2EB7BA" + "B6ACBBBEB826BFC201BDC3BBB9C6B7B4C9B2ABCECFD0D1D2D3D4D53200D800A5D9DCA2DCDFDA9DE0DFE2E3E494E6E3E8E9E05AECEDEEEFDDF1F2D8F4F5EBF5E157FAFBFCF8F9D8954B178AA0B773A3E65148000021F90405050" + "007002CD60075003000570082FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03E978BADCFE6EC801ABBD6D4ECCFBD1A0274660388E657A8AA9BA62ADFB56B13C93B576D3B9BEE33DCA2F13940C81BD2331A844B6" + "9A8F1C14529BF24CD6AB30CBED7ABFE0B0784C2E9BCF5C817ACD6EBBDBB3B77CCE5ED1EFF3137E0F1FF1FF027A807B76837471866F688B8C8D8E8F909192930A01960166979A639A9D98609E9DA0A1A25DA4A1A6A79E5CAAABA" + "CAD9BAFB096B2B3A9B39F59B8B91000BE002FB815BFBFC1B0BDC4C5C6A7C8C9C037CC0FCECAD0A5D2D3CF3BB1C3D862D8BEDEDD61DFD95FDF63E7E3E2EAD3E1EBE6EF5EE4EECEE8F15DE9ECF5FAFB60F9FEEDE81123D3CF1EB8" + "2909000021F90405050007002CC40092004200420082FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03F978BADCFE508D49ABBD36EA1DB1FF15277260F98DE863AE59EA4A6CFCBEB13CBBB579CFF9B9FFC0A0704" + "82C1A8FC8A472C96C3A9FD0A8747A105805D4D7759B1D6DBFD8AE06FC1547C860B3034D5633D86D77155E96CFE957FB1D1F76F3F3767F567A8246018701377F4488888A78438D8D3B74919287406C96978999751100A1001C9C" + "98415C1AA2A2A4A54FAAAA1BA5A64CAFABB1AD4DB5A1ACB84BBAA3BC97B9BA23B2B4C422C6BEC8C9BD48BF28B29DCFCCCD9C4AD0D1CA47D9DAD7D4B52FDB45DDDEC2DCD5E692E8E1E2E342E529EF41F1F2DF44F5EA8EE4E92EE" + "7FCED764C62F74A8F837C7610CA51E886A11A870F0B1A7C006B6283040021F90405050007002CA700A4005700300082FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03FF78BADCFE30CA37EA9838EBCD8FFD5D28" + "8ECD675E64AA4AA7B9BEB0D7BA711DCEADAD6B78BEFF90DE0948740869C5E411942C2E2D4DE51315054E35802CE027E80A464F8C56ABF37AC1C7C9785C339B4942F53ADB76775538C99C1CB39FF148107B7413018601187E772" + "B4C11835B858786898A518F90119292138A8B458F189A87947E4997A1A2889C9D9F8319A9AAABA540A0AFA91AAC3FB5A8A2B8953BBBBC9A1BB935A71AB0C4C530C1C29BCAB3CCCD91BDD0D12BD3D4C31CCB29D9DACFDCBF2ADF" + "12C91DDD22E5E6B721E91CC71DE7E8EF58AE22F3F4D71DF7F8ED22E342F40B914F9F1B6F6B521434E889041B85FF46BCA9E26C14C5280B2FFEC8A8511307C78E353E82842172E48B6A2689844BA920010021F90405050007002" + "C9200A4005700300082FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03FF78BADC0E10B849ABBD38B7C8B5FFE0C78D52689E2139A26C4BA9A42BB7B03ADF606DE33CA6C7BDE0E4B7121A17C4CE71998C2C8F4DC8" + "13DA9C5289A78036201C7807996476ABED7DBF3E1D8A4CC69DCF975A8BBD75BFBD69258B5EBFDDD1714E2E7C6517028702187F785607845C8688878A8B568F90159292178B8C4B8F189A88947F4F97A1A2899C9D9F8419A9AAA" + "BA546A0AFA91AAC42B5A8A2B89541BBBC9A1EB938A71AB0C4C533C1C29BCAB3CCCD91BDD0D183AE1FC91FCB7BD9DAB720DD637C21DBDCBFDEE5E6E1E2E926C720E7E8EF20D3C8EDEED7F6EB26F3FA6FD6F46357CD443D7E6D50" + "FC03E849602185F90C026A446D18452B0B2F0AC9A8B11207C78E383E829C2172A48C82268D3CE391000021F90405050007002C8A0092004200420082FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03F57807DCF" + "EF0A949ABBD98C6CD5DFEE0D58D5C6882642A9DACA5BE402B4FB03ADFF578EFF9B6FFC0A070482C1A8FC8A472C96C3A9FD0A8744A3D05AE81AA0CCBD59AB8E0AC3713068F2FE5F099922EAF0F6DF73AAE3ED3CDF63BF6ADDFE7" + "FB7C8081773B028602467A85878645743F8C8C446D4191878E784096979857439B8D2003A30352A088A2A4A350A7A819AAAA4FA721B0A44EADB4B5A54DB3B9B5BCA027BABB4BBDBEB04CC6C7B14AB8C2BAC5C12CC3CDCACBB64" + "9D6D7AB48DADBC446DEA9BF47E2E3C8E1E61FD4E99B3BEC45D237F044F233F4F59140F8F9A13FFC6F26000C78606040836F10AE5178866143740431304B000021F90405050007002C8A0075003000570082FFFFFFDDDDDDBBBB" + "BB999999FFFFFFFFFFFFFFFFFFFFFFFF03E778BA0C0E2CCA496B7BCEEA4DB1E7E0E68D61298DA8A9A2A95AB2ADCBC1B1ACD1A47DE3982EF20FDF0E0811768845E304A9AC009B161C340A9B0E7BD65F26CBED7ABFE0B0784C2E9" + "BCFA1807ACD6EBBDBB6B77CCE76D1EF73157E0F37F1FF017A807B76837471866F688B8C8D8E8F909192936802960266979A639A9D98609E9D5FA19E5DA4A159A7A856AAA553ADA2AFB097A9B396ACB69FB2B35CB63203C00316" + "BC2EC1C115AD36C6C614A73ECBC7CDB13AD0D1D2B742D5C062DAC261DDDE60DDDCE3DFDAE4D563E5E2E7E6EDECE9EEF1F0D0E8F5F6CBF8CCF2F7F4F9FADBD4CDD377669F86040021F90405050007002C8A0060003000570082F" + "FFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03EB78BADCFE0B4800ABBD6D4ECCBBD29A2756E0369E4C69A2A7BAB2A24BC1AD4B8FF28DDB7A27CF3D4C2E281C122DC62389A784249B8E2734229D1EAAD39F35CA84" + "04BE811EF60006EBB0E5F4ADCB48BB61EC857BCE2A55E67454C882CF4FFB7E50806F7F83655B8687568966858C888F90835B7280949578976D849A9B5F9DA0A1A2A3A4A5A6A7A8A93A02ACADAEAFB0AF30B1B4B5AE28B6B9B52" + "7BABDB223BEC102BCC2BDB8C5B6B3C8B1AACDCECFD0D1D2D3D4CF03D703A3D8DBA0DBDED997DFDE94E2DF56E5E250E8E94DEBE64AEEE3F0F1D8EAF4D7EDF7E0F3F453F75BFD00AED3842ED43B51DCAC24000021F90405050007" + "002C8A0058004200420082FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03FD78BADCFE30CA062A9838EB69EDFE20D77961698EA4A96E68B5BE597BC13424D738D5E64BE007AF1BEFF75B097144A2EA584B164FB" + "B9CF31962D2A6D48FF58A2D6DB9D36A74D8057DC14EF3985CD69CD149ED9A1D76CFE9713B8AE7C0026377784A807B7C0D7E842386878822858B3D6D116F528D93818696971D13029E027083129C129F9F309A2BA6AB2F92AAAB" + "AC26AE2AB0B5B27934B5B625A235BABB9020BFC0C11BC3B0C51FC7B1C91ACBA6CDC6CF9ED119D3D4D518D7D9D6CBDCCEC3DFE0BAE2D2CCE5E3A0E8EBECEDEEEFF0F1F2F3F4F5F68603F9FAFBFCFDFCD5FE020ADCD76CA04181C" + "90E2AFC576CA1C301091F2A2C287120C08AFEA225000021F90405050007002C920058005700300082FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03FF78BADCFE30BE4083BC38EB3D2BE560284A9E379E285756" + "69EB76EB2BBFEB37DF676DE13CA8F723815090FAA10048406B38441947C9248AC9CCD54ED1E889DA1C3D435969902BF45E4561B188DCF59D4169F59A2DFA6EE2CA149BE88EC1E32E7B217619782F822A6F1A8687881A8412787" + "98D64897E8B80337B7C19901092388E189E0F8CA1749D8A91993CA224AA11A6ADA817A40CB2B3B411B60AA0400AAE302518B83D9BB5B00DBEBFC0BA1097B1AC1003D40381CEC2C4D20FD5D54BD847DB0DDDE47A9532E2E3E4E5" + "635C33E90CEBF2ED6DE85918F2F373653C5A19F9FA9809041850E02F82EB0C3243C84E211086DD1C1E84484D620F8A152DF2C0A8F11322C38E0F09820C996FE4C48626495A4BA921010021F90401050007002CA700580057003" + "00082FFFFFFDDDDDDBBBBBB999999FFFFFFFFFFFFFFFFFFFFFFFF03FF78BADCFE4B4801ABBD38EB36E7FE60A8759D689E22E9A16C5BA9922BCF074CD1F869E77CB8F7A28170C0FA9D02C8406B38441945C9248AC9D4C18E51A9" + "89DA343D41596D902BF45EA161E489DC057D3569F1989C3A83E34BB6CFBE892BF3746E7C70782E6C441F6F177E33878823838B8C8D7A1B8A1593949519970F7E7F34879691988539A29CA49EA6A79B179D0D993CA8AFAAB1ACB" + "3B42FB60B9F400BBA10B00AB2408EB52A92B8C6AEC22418C5BF07C10F25CA612E00DA0018D428D121DBDBDD8132CB20E2E917CD2CE71AE9F0E45538D822F0F719F3395126F7F8D2D2FCFD03D843E04082380CC643C843A13A86" + "091D8E834843E2448A332C6AC358D11422C7880A3FE6082972A4C0920517A24CB9D14402003B";
    $impl.WebLibDlg = null;
    $impl.WebLibInputDlg = null;
    $impl.StringToHTML = function (AValue) {
      var Result = "";
      Result = pas.SysUtils.StringReplace(AValue,"\r","<BR>",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      Result = pas.SysUtils.StringReplace(Result,"\n","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      return Result;
    };
  };
  $mod.$init = function () {
    $impl.WebLibDlg = null;
  };
},["WEBLib.Forms","WEBLib.Consts"]);
//# sourceMappingURL=WEBLib.Dialogs.js.map
