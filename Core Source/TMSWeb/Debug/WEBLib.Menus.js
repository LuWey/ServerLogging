rtl.module("WEBLib.Menus",["System","Classes","SysUtils","WEBLib.Controls","WEBLib.Graphics","Web"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.$rtti.$Class("TMainMenu");
  this.$rtti.$Class("TMenuItem");
  this.$rtti.$Class("TCustomMainMenu");
  this.TMenuItemAutoFlag = {"0": "maAutomatic", maAutomatic: 0, "1": "maManual", maManual: 1, "2": "maParent", maParent: 2};
  this.$rtti.$Enum("TMenuItemAutoFlag",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TMenuItemAutoFlag});
  this.TMenuBreak = {"0": "mbNone", mbNone: 0, "1": "mbBreak", mbBreak: 1, "2": "mbBarBreak", mbBarBreak: 2};
  this.$rtti.$Enum("TMenuBreak",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TMenuBreak});
  this.$rtti.$Int("THelpContext",{minvalue: -2147483647, maxvalue: 2147483647, ordtype: 4});
  this.$rtti.$inherited("TShortCut",rtl.word,{});
  this.TMainMenuHamburgerMenuVisible = {"0": "hmAlways", hmAlways: 0, "1": "hmNever", hmNever: 1, "2": "hmResponsive", hmResponsive: 2};
  this.$rtti.$Enum("TMainMenuHamburgerMenuVisible",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TMainMenuHamburgerMenuVisible});
  this.$rtti.$MethodVar("TMainMenuChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Source",this.$rtti["TMenuItem"]],["Rebuild",rtl.boolean]]), methodkind: 0});
  rtl.createClass(this,"TMenuItemList",pas.Classes.TList,function () {
    this.GetItem = function (Index) {
      var Result = null;
      Result = rtl.getObject(this.Get(Index));
      return Result;
    };
    this.PutItem = function (Index, Value) {
      this.Put(Index,Value);
    };
  });
  rtl.createClass(this,"TMenuItem",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FOwner$1 = null;
      this.FCaption = "";
      this.FItems = null;
      this.FParentItem = null;
      this.FUpdateCount = 0;
      this.FOnClick = null;
      this.FChecked = false;
      this.FEnabled = false;
      this.FDefault = false;
      this.FAutoCheck = false;
      this.FHint = "";
      this.FAutoHotkeys = 0;
      this.FRadioItem = false;
      this.FGroupIndex = 0;
      this.FVisible = false;
      this.FShortCut = 0;
      this.FBreak = 0;
      this.FImageIndex = 0;
      this.FAutoLineReduction = 0;
      this.FHelpContext = 0;
      this.FElementClassName = "";
      this.FParentMenu = null;
    };
    this.$final = function () {
      this.FOwner$1 = undefined;
      this.FItems = undefined;
      this.FParentItem = undefined;
      this.FOnClick = undefined;
      this.FParentMenu = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.SetChecked = function (Value) {
      var pm = null;
      var Item = null;
      var OtherItem = null;
      var MenuOwner = null;
      var I = 0;
      if (this.FChecked !== Value) {
        this.FChecked = Value;
        MenuOwner = this.FParentMenu;
        if (MenuOwner != null) {
          if ($mod.TMenuItem.isPrototypeOf(MenuOwner) && Value) {
            Item = MenuOwner;
            for (var $l = 0, $end = Item.FItems.GetCount() - 1; $l <= $end; $l++) {
              I = $l;
              OtherItem = Item.FItems.GetItem(I);
              if (OtherItem.FRadioItem && (OtherItem !== this)) OtherItem.SetChecked(false);
            };
          };
          while (!$mod.TCustomMainMenu.isPrototypeOf(MenuOwner) && (MenuOwner != null)) {
            MenuOwner = MenuOwner.FOwner;
          };
        };
        pm = this.GetParentMenu();
        if (pm != null) pm.UpdateElement();
      };
    };
    this.SetCaption = function (Value) {
      var pm = null;
      this.FCaption = Value;
      pm = this.GetParentMenu();
      if (pm != null) pm.UpdateElement();
    };
    this.SetImageIndex = function (Value) {
      var pm = null;
      this.FImageIndex = Value;
      pm = this.GetParentMenu();
      if (pm != null) pm.UpdateElement();
    };
    this.SetEnabled = function (Value) {
      if (this.FEnabled !== Value) {
        this.FEnabled = Value;
        this.GetParentMenu().UpdateElement();
      };
    };
    this.GetMenuItem = function (AIndex) {
      var Result = null;
      Result = this.FItems.GetItem(AIndex);
      return Result;
    };
    this.SetMenuItem = function (AIndex, Value) {
      this.FItems.PutItem(AIndex,Value);
    };
    this.GetCount = function () {
      var Result = 0;
      if (this.FItems === null) {
        Result = 0}
       else Result = this.FItems.GetCount();
      return Result;
    };
    this.Create$1 = function (AOwner) {
      this.FParentMenu = null;
      if ($mod.TMainMenu.isPrototypeOf(AOwner)) this.FParentMenu = AOwner;
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      this.FAutoHotkeys = $mod.TMenuItemAutoFlag.maParent;
      this.FAutoLineReduction = $mod.TMenuItemAutoFlag.maParent;
      this.FImageIndex = -1;
      this.FHint = "";
      this.FCaption = "MenuItem";
      this.FChecked = false;
      this.FEnabled = true;
      this.FDefault = false;
      this.FRadioItem = false;
      this.FVisible = true;
      this.FOwner$1 = AOwner;
      return this;
    };
    this.Destroy = function () {
      var i = 0;
      var pm = null;
      var mnu = null;
      pm = this.GetParentMenu();
      if ((this.FParentItem != null) && (pm != null)) {
        pm.BeginUpdate();
        for (var $l = this.FParentItem.FItems.GetCount() - 1; $l >= 0; $l--) {
          i = $l;
          if (this.FParentItem.FItems.GetItem(i) === this) {
            this.FParentItem.FItems.Delete(i);
          };
        };
        pm.EndUpdate();
      };
      if (this.FItems != null) {
        for (var $l1 = this.FItems.GetCount() - 1; $l1 >= 0; $l1--) {
          i = $l1;
          mnu = this.FItems.GetItem(i);
          mnu.FParentItem = null;
          mnu = rtl.freeLoc(mnu);
          this.FItems.Delete(i);
        };
      };
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.Assign = function (Source) {
      var i = 0;
      var srcmenu = null;
      var mnu = null;
      var pm = null;
      if ($mod.TMenuItem.isPrototypeOf(Source)) {
        srcmenu = rtl.as(Source,$mod.TMenuItem);
        this.FAutoCheck = srcmenu.FAutoCheck;
        this.FAutoHotkeys = srcmenu.FAutoHotkeys;
        this.FAutoLineReduction = srcmenu.FAutoLineReduction;
        this.FBreak = srcmenu.FBreak;
        this.FCaption = srcmenu.FCaption;
        this.FChecked = srcmenu.FChecked;
        this.FDefault = srcmenu.FDefault;
        this.FEnabled = srcmenu.FEnabled;
        this.FGroupIndex = srcmenu.FGroupIndex;
        this.FHelpContext = srcmenu.FHelpContext;
        this.FHint = srcmenu.FHint;
        this.FImageIndex = srcmenu.FImageIndex;
        this.FRadioItem = srcmenu.FRadioItem;
        this.FShortCut = srcmenu.FShortCut;
        this.FVisible = srcmenu.FVisible;
        this.FElementClassName = srcmenu.FElementClassName;
        pm = this.GetParentMenu();
        if (this.FParentItem != null) this.SetName(pm.GetUniqueName(srcmenu.FCaption));
        if (srcmenu.FItems != null) {
          if (this.FItems != null) {
            for (var $l = this.FItems.GetCount() - 1; $l >= 0; $l--) {
              i = $l;
              this.RemoveItem(this.GetParentMenu().FParent,this.FItems.GetItem(i));
            };
            this.FItems.Clear();
          } else this.FItems = $mod.TMenuItemList.$create("Create$1");
          for (var $l1 = 0, $end = srcmenu.FItems.GetCount() - 1; $l1 <= $end; $l1++) {
            i = $l1;
            mnu = $mod.TMenuItem.$create("Create$1",[pm.FOwner]);
            mnu.FParentMenu = pm;
            mnu.FParentItem = this;
            mnu.Assign(srcmenu.FItems.GetItem(i));
            this.FItems.Add(mnu);
          };
        };
      };
    };
    this.BeginUpdate$1 = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate$1 = function () {
      if (this.FUpdateCount > 0) {
        this.FUpdateCount -= 1;
        if (this.FUpdateCount === 0) this.GetParentMenu().UpdateElement();
      };
    };
    this.SetParentComponent = function (Value) {
      pas.Classes.TComponent.SetParentComponent.apply(this,arguments);
      this.FParentMenu = Value;
      if (Value !== null) {
        if ($mod.TCustomMainMenu.isPrototypeOf(Value)) {
          if (!Value.FItems.IsChild(this)) Value.FItems.Add(this);
        } else if ($mod.TMenuItem.isPrototypeOf(Value)) {
          if (!Value.IsChild(this)) Value.Add(this);
        };
      };
    };
    this.Add = function (Item) {
      this.Insert$1(this.GetCount(),Item);
    };
    this.Insert$1 = function (Index, Item) {
      if (this.FItems === null) this.FItems = $mod.TMenuItemList.$create("Create$1");
      this.FItems.Insert(Index,Item);
      Item.FParentItem = this;
      if (Item.GetParentMenu() != null) Item.GetParentMenu().UpdateElement();
    };
    this.IsChild = function (Item) {
      var Result = false;
      var i = 0;
      Result = false;
      if (!(this.FItems != null)) return Result;
      for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        if (this.FItems.GetItem(i) === Item) {
          Result = true;
        };
      };
      return Result;
    };
    this.GetOwner = function () {
      var Result = null;
      Result = this.FOwner$1;
      return Result;
    };
    this.GetParentMenu = function () {
      var Result = null;
      var AOwner = null;
      Result = null;
      AOwner = this.FParentMenu;
      while ((AOwner != null) && $mod.TMenuItem.isPrototypeOf(AOwner)) {
        AOwner = AOwner.FParentMenu;
      };
      if (AOwner != null) Result = AOwner;
      return Result;
    };
    this.GetChildren = function (Proc, Root) {
      var I = 0;
      if (this.FItems != null) for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        Proc(this.FItems.GetItem(I));
      };
    };
    this.SetChildOrder = function (Child, Order) {
      var idx = 0;
      idx = this.FItems.IndexOf(Child);
      if ((idx >= 0) && (Order < this.FItems.GetCount())) {
        this.FItems.Move(idx,Order);
      };
    };
    this.RemoveItem = function (AOwner, AItem) {
      var I = 0;
      if (AItem.FItems != null) {
        for (var $l = AItem.FItems.GetCount() - 1; $l >= 0; $l--) {
          I = $l;
          this.RemoveItem(AOwner,AItem.FItems.GetItem(I));
        };
      };
      AOwner.RemoveComponent(AItem);
    };
    this.Clear = function () {
      var i = 0;
      var mnu = null;
      for (var $l = this.GetCount() - 1; $l >= 0; $l--) {
        i = $l;
        mnu = this.FItems.GetItem(i);
        if (mnu.FItems != null) mnu.FItems.Clear();
        mnu = rtl.freeLoc(mnu);
      };
    };
    this.Click = function () {
      if (this.FOnClick != null) this.FOnClick(this);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("AutoCheck",0,rtl.boolean,"FAutoCheck","FAutoCheck",{Default: false});
    $r.addProperty("AutoHotkeys",0,$mod.$rtti["TMenuItemAutoFlag"],"FAutoHotkeys","FAutoHotkeys",{Default: $mod.TMenuItemAutoFlag.maParent});
    $r.addProperty("AutoLineReduction",0,$mod.$rtti["TMenuItemAutoFlag"],"FAutoLineReduction","FAutoLineReduction",{Default: $mod.TMenuItemAutoFlag.maParent});
    $r.addProperty("Break",0,$mod.$rtti["TMenuBreak"],"FBreak","FBreak",{Default: $mod.TMenuBreak.mbNone});
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("Checked",2,rtl.boolean,"FChecked","SetChecked",{Default: false});
    $r.addProperty("Default",0,rtl.boolean,"FDefault","FDefault",{Default: false});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("GroupIndex",0,rtl.byte,"FGroupIndex","FGroupIndex",{Default: 0});
    $r.addProperty("HelpContext",0,$mod.$rtti["THelpContext"],"FHelpContext","FHelpContext",{Default: 0});
    $r.addProperty("Hint",0,rtl.string,"FHint","FHint");
    $r.addProperty("ImageIndex",2,rtl.longint,"FImageIndex","SetImageIndex",{Default: -1});
    $r.addProperty("RadioItem",0,rtl.boolean,"FRadioItem","FRadioItem",{Default: false});
    $r.addProperty("ShortCut",0,$mod.$rtti["TShortCut"],"FShortCut","FShortCut",{Default: 0});
    $r.addProperty("Visible",0,rtl.boolean,"FVisible","FVisible",{Default: true});
    $r.addProperty("ElementClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","FElementClassName");
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
  });
  this.$rtti.$Class("TMainMenuAppearance");
  rtl.createClass(this,"THamburgerMenu",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOwner = null;
      this.FVisible = 0;
      this.FCaption = "";
      this.FBackgroundColor = 0;
      this.FCaptionColor = 0;
      this.FResponsiveMaxWidth = 0;
    };
    this.$final = function () {
      this.FOwner = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetVisible = function (Value) {
      if (this.FVisible !== Value) {
        this.FVisible = Value;
        this.FOwner.FOwner.UpdateElement();
      };
    };
    this.SetBackgroundColor = function (Value) {
      if (this.FBackgroundColor !== Value) {
        this.FBackgroundColor = Value;
        this.FOwner.FOwner.UpdateElement();
      };
    };
    this.SetCaption = function (Value) {
      if (this.FCaption !== Value) {
        this.FCaption = Value;
        this.FOwner.FOwner.UpdateElement();
      };
    };
    this.SetCaptionColor = function (Value) {
      if (this.FCaptionColor !== Value) {
        this.FCaptionColor = Value;
        this.FOwner.FOwner.UpdateElement();
      };
    };
    this.SetResponsiveMaxWidth = function (Value) {
      if (this.FResponsiveMaxWidth !== Value) {
        this.FResponsiveMaxWidth = Value;
        this.FOwner.FOwner.UpdateElement();
      };
    };
    this.Create$1 = function (AOwner) {
      this.FBackgroundColor = 12632256;
      this.FCaption = "Menu";
      this.FCaptionColor = 16777215;
      this.FVisible = $mod.TMainMenuHamburgerMenuVisible.hmResponsive;
      this.FResponsiveMaxWidth = 768;
      this.FOwner = AOwner;
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      pas.Classes.TPersistent.Assign.apply(this,arguments);
      if ($mod.THamburgerMenu.isPrototypeOf(Source)) {
        this.FBackgroundColor = rtl.as(Source,$mod.THamburgerMenu).FBackgroundColor;
        this.FCaption = rtl.as(Source,$mod.THamburgerMenu).FCaption;
        this.FCaptionColor = rtl.as(Source,$mod.THamburgerMenu).FCaptionColor;
        this.FVisible = rtl.as(Source,$mod.THamburgerMenu).FVisible;
        this.FResponsiveMaxWidth = rtl.as(Source,$mod.THamburgerMenu).FResponsiveMaxWidth;
      };
    };
    this.GetOwner = function () {
      var Result = null;
      Result = this.FOwner;
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",$mod.$rtti["TMainMenuAppearance"]]]);
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("CaptionColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FCaptionColor","SetCaptionColor",{Default: 16777215});
    $r.addProperty("BackgroundColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FBackgroundColor","SetBackgroundColor",{Default: 12632256});
    $r.addProperty("Visible",2,$mod.$rtti["TMainMenuHamburgerMenuVisible"],"FVisible","SetVisible",{Default: $mod.TMainMenuHamburgerMenuVisible.hmResponsive});
    $r.addProperty("ResponsiveMaxWidth",2,rtl.longint,"FResponsiveMaxWidth","SetResponsiveMaxWidth",{Default: 768});
  });
  rtl.createClass(this,"TMainMenuAppearance",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOwner = null;
      this.FBackgroundColor = 0;
      this.FHoverFontColor = 0;
      this.FHoverColor = 0;
      this.FImageURLs = null;
      this.FHamburgerMenu = null;
      this.FImageSize = 0;
      this.FSubmenuIndicator = "";
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FImageURLs = undefined;
      this.FHamburgerMenu = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetBackgroundColor = function (Value) {
      if (this.FBackgroundColor !== Value) {
        this.FBackgroundColor = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.SetHoverColor = function (Value) {
      if (this.FHoverColor !== Value) {
        this.FHoverColor = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.SetHoverFontColor = function (Value) {
      if (this.FHoverFontColor !== Value) {
        this.FHoverFontColor = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.SetImageURLs = function (Value) {
      this.FImageURLs.Assign(Value);
    };
    this.SetImageSize = function (Value) {
      if (this.FImageSize !== Value) {
        this.FImageSize = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.SetSubmenuIndicator = function (Value) {
      if (this.FSubmenuIndicator !== Value) {
        this.FSubmenuIndicator = Value;
        this.FOwner.UpdateElement();
      };
    };
    this.HandleImageURLsChanged = function (Sender) {
      this.FOwner.UpdateElement();
    };
    this.Create$1 = function (AOwner) {
      this.FBackgroundColor = 0xF0F0F0;
      this.FHoverColor = 14120960;
      this.FHoverFontColor = 197379;
      this.FHamburgerMenu = $mod.THamburgerMenu.$create("Create$1",[this]);
      this.FImageURLs = pas.Classes.TStringList.$create("Create$1");
      this.FImageURLs.SetSkipLastLineBreak(true);
      this.FImageURLs.FOnChange = rtl.createCallback(this,"HandleImageURLsChanged");
      this.FImageSize = 16;
      this.FSubmenuIndicator = "&#9658;";
      this.FOwner = AOwner;
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FHamburgerMenu");
      rtl.free(this,"FImageURLs");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      pas.Classes.TPersistent.Assign.apply(this,arguments);
      if ($mod.TMainMenuAppearance.isPrototypeOf(Source)) {
        this.FBackgroundColor = rtl.as(Source,$mod.TMainMenuAppearance).FBackgroundColor;
        this.FHoverColor = rtl.as(Source,$mod.TMainMenuAppearance).FHoverColor;
        this.FHoverFontColor = rtl.as(Source,$mod.TMainMenuAppearance).FHoverFontColor;
        this.FHamburgerMenu.Assign(rtl.as(Source,$mod.TMainMenuAppearance).FHamburgerMenu);
        this.FImageURLs.Assign(rtl.as(Source,$mod.TMainMenuAppearance).FImageURLs);
        this.FImageSize = rtl.as(Source,$mod.TMainMenuAppearance).FImageSize;
        this.FSubmenuIndicator = rtl.as(Source,$mod.TMainMenuAppearance).FSubmenuIndicator;
      };
    };
    this.GetOwner = function () {
      var Result = null;
      Result = this.FOwner;
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",$mod.$rtti["TMainMenu"]]]);
    $r.addProperty("BackgroundColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FBackgroundColor","SetBackgroundColor",{Default: 15790320});
    $r.addProperty("HamburgerMenu",0,$mod.$rtti["THamburgerMenu"],"FHamburgerMenu","FHamburgerMenu");
    $r.addProperty("HoverColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FHoverColor","SetHoverColor",{Default: 14120960});
    $r.addProperty("HoverFontColor",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FHoverFontColor","SetHoverFontColor",{Default: 197379});
    $r.addProperty("ImageURLs",2,pas.Classes.$rtti["TStringList"],"FImageURLs","SetImageURLs");
    $r.addProperty("ImageSize",2,rtl.longint,"FImageSize","SetImageSize",{Default: 16});
    $r.addProperty("SubmenuIndicator",2,rtl.string,"FSubmenuIndicator","SetSubmenuIndicator");
  });
  rtl.createClass(this,"TCustomMainMenu",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FItems = null;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FItems = undefined;
      this.FOnChange = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
      if (this.IsUpdating()) return;
      if (this.GetElementHandle() != null) this.UpdateElement();
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.IsUpdating()) return;
    };
    this.GetUniqueName = function (AName) {
      var Result = "";
      var i = 0;
      var id = 0;
      var found = false;
      id = 1;
      if (AName === "") AName = this.FName + "item";
      AName = $impl.MakeValidName(AName);
      do {
        Result = AName + pas.SysUtils.IntToStr(id);
        found = true;
        for (var $l = 0, $end = this.FOwner.GetComponentCount() - 1; $l <= $end; $l++) {
          i = $l;
          if (this.FOwner.GetComponent(i).FName === Result) {
            found = false;
            id += 1;
            break;
          };
        };
      } while (!found);
      return Result;
    };
    this.SetName = function (NewName) {
      pas["WEBLib.Controls"].TCustomControl.SetName.apply(this,arguments);
      if (this.IsUpdating()) return;
      if (pas.Classes.TComponentStateItem.csLoading in this.FComponentState) return;
      this.UpdateElement();
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FItems = $mod.TMenuItem.$create("Create$1",[this]);
      this.FItems.FParentMenu = this;
      this.SetWidthStyle(pas["WEBLib.Controls"].TSizeStyle.ssAuto);
      this.SetHeight(30);
    };
    this.Destroy = function () {
      rtl.free(this,"FItems");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.GetChildren = function (Proc, Root) {
      var I = 0;
      if ((this.FItems != null) && (this.FItems.FItems != null)) {
        for (var $l = 0, $end = this.FItems.FItems.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          Proc(this.FItems.FItems.GetItem(I));
        };
      };
    };
    this.SetChildOrder = function (Child, Order) {
      var idx = 0;
      idx = this.FItems.FItems.IndexOf(Child);
      if ((idx >= 0) && (Order < this.FItems.FItems.GetCount())) {
        this.FItems.FItems.Move(idx,Order);
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Items",0,$mod.$rtti["TMenuItem"],"FItems","");
    $r.addProperty("OnChange",0,$mod.$rtti["TMainMenuChangeEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TMainMenu",this.TCustomMainMenu,function () {
    this.$init = function () {
      $mod.TCustomMainMenu.$init.call(this);
      this.FMenu = null;
      this.FMainMenu = false;
      this.FMenuIndex = 0;
      this.FAppearance = null;
      this.FContainer$1 = null;
      this.FIsPopupMenu = false;
      this.FShowPopup = false;
      this.FAutoMerge = false;
      this.FElementItemClassName = "";
    };
    this.$final = function () {
      this.FMenu = undefined;
      this.FAppearance = undefined;
      this.FContainer$1 = undefined;
      $mod.TCustomMainMenu.$final.call(this);
    };
    this.HandleChange = function (Event) {
      var Result = false;
      var h = null;
      var it = null;
      Result = true;
      if (this.FIsPopupMenu) {
        this.FShowPopup = false;
        this.UpdateElement();
      };
      h = Event.target;
      if (!h.hasAttribute("id")) h = h.parentElement;
      it = this.GetItemByName(this.FItems,h.id);
      if (it != null) {
        if (it.FAutoCheck) it.SetChecked(!it.FChecked);
        if (this.FOnChange != null) this.FOnChange(this,it,false);
        it.Click();
      };
      return Result;
    };
    this.Loaded = function () {
      $mod.TCustomMainMenu.Loaded.call(this);
      if (this.IsUpdating()) return;
      if (!(this.FContainer$1 != null) && pas["WEBLib.Forms"].TCustomForm.isPrototypeOf(this.FParent) && (rtl.as(this.FParent,pas["WEBLib.Forms"].TCustomForm).FMenu === this)) {
        this.FContainer$1 = this.FParent;
      };
      if (this.GetElementHandle() != null) this.UpdateElement();
    };
    this.UpdateElement = function () {
      var MenuStyle = "";
      var MenuColorStyle = "";
      var MenuResponsiveStyle = "";
      var MenuImageSize = "";
      var ShowPopup = "";
      var ElHandle = null;
      var ElLabel = null;
      var ElSpan = null;
      var ElIcon = null;
      var ElCheckBox = null;
      var ElStyle = null;
      var ElScript = null;
      var ElItems = null;
      $mod.TCustomMainMenu.UpdateElement.call(this);
      if (this.IsUpdating()) return;
      if (!(this.GetElementHandle() != null) && !(this.FContainer$1 != null)) return;
      if (this.FContainer$1 != null) {
        ElHandle = this.FContainer$1.GetElementHandle();
        this.SetVisible(false);
      } else {
        ElHandle = this.GetElementHandle();
        ElHandle.style.setProperty("top",pas.SysUtils.IntToStr(this.GetTop()) + "px");
        ElHandle.style.setProperty("left",pas.SysUtils.IntToStr(this.GetLeft()) + "px");
        if ((pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) && !(this.FContainer$1 != null)) this.GetElementHandle().style.setProperty("background-color","silver");
      };
      this.FMenu = ElHandle.firstChild;
      if (this.FMenu != null) this.FMenu.parentElement.removeChild(this.FMenu);
      if (pas.Classes.TComponentStateItem.csDestroying in this.FComponentState) return;
      this.FMenu = document.createElement("NAV");
      this.FMenu.setAttribute("id",this.GetID() + "menu");
      this.FMenu.innerHTML = "";
      if (this.FContainer$1 != null) {
        this.FMenu.style.setProperty("top","0");
        this.FMenu.style.setProperty("left","0");
        this.FMenu.style.setProperty("position","absolute");
        this.FMenu.style.setProperty("width","100%");
        this.FMenu.style.setProperty("z-index","999997");
      };
      ElHandle.innerHTML = "";
      ElHandle.style.setProperty("overflow","visible");
      if (this.FAppearance.FHamburgerMenu.FVisible !== $mod.TMainMenuHamburgerMenuVisible.hmAlways) {
        if (this.FShowPopup) {
          ShowPopup = "block"}
         else ShowPopup = "none";
        MenuResponsiveStyle = "  #" + this.GetID() + "menu .main-menu {\r" + "    display: block;\r" + "  }\r" + "  #" + this.GetID() + "menu #toggle-menu {\r" + "    display: none;\r" + "  }\r" + "  #" + this.GetID() + "menu ul span.drop-label {\r" + "    display: inline-block;\r" + "  }\r" + "  #" + this.GetID() + "menu li {\r" + "    float: left;\r" + "    border-width: 0 1px 0 0;\r" + "  }\r" + "  #" + this.GetID() + "menu .popup-menu li, \r" + "  #" + this.GetID() + "menu .sub-menu li {\r" + "    float: none;\r" + "  }\r" + "  #" + this.GetID() + "menu .sub-menu {\r" + "    top: 100%;\r" + "  }\r" + "  #" + this.GetID() + "menu .popup-menu { \r" + "    top: 0;\r" + "  }\r" + "  #" + this.GetID() + "menu .popup-menu, \r" + "  #" + this.GetID() + "menu .sub-menu {\r" + "    border-width: 0;\r" + "    margin: 0;\r" + "    position: absolute;\r" + "    left: 0;\r" + "    min-width: 12em;\r" + "    z-index: 9999999;\r" + "\t   white-space: nowrap;\r" + "  }\r" + "  #" + this.GetID() + "menu .sub-menu {\r" + "    top: 100%;\r" + "  }\r" + "  #" + this.GetID() + "menu .popup-menu { \r" + "    display: " + ShowPopup + ";\r" + "  }\r" + "  #" + this.GetID() + "menu .sub-menu,\r" + "  #" + this.GetID() + 'menu input[type="checkbox"]:checked + .popup-menu,\r' + "  #" + this.GetID() + 'menu input[type="checkbox"]:checked + .sub-menu {\r' + "    display: none;\r" + "  }\r" + "  #" + this.GetID() + "menu .popup-menu li, \r" + "  #" + this.GetID() + "menu .sub-menu li {\r" + "    border-width: 1px;\r" + "  }\r" + "  #" + this.GetID() + "menu .popup-menu .sub-menu, \r" + "  #" + this.GetID() + "menu .sub-menu .sub-menu {\r" + "    top: 0;\r" + "    left: 100%;\r" + "  }\r" + "  #" + this.GetID() + 'menu li:hover > input[type="checkbox"] + .popup-menu, \r' + "  #" + this.GetID() + 'menu li:hover > input[type="checkbox"] + .sub-menu {\r' + "    display: block;\r" + "  }\r";
        if (this.FAppearance.FHamburgerMenu.FVisible === $mod.TMainMenuHamburgerMenuVisible.hmResponsive) {
          MenuResponsiveStyle = "@media only screen and (min-width: " + pas.SysUtils.IntToStr(this.FAppearance.FHamburgerMenu.FResponsiveMaxWidth) + "px) {\r" + MenuResponsiveStyle + "}";
        };
      };
      if (this.FAppearance.FImageSize > 0) {
        MenuImageSize = "  width: " + pas.SysUtils.IntToStr(this.FAppearance.FImageSize) + "px;\r" + "  height: " + pas.SysUtils.IntToStr(this.FAppearance.FImageSize) + "px;\r";
      };
      MenuStyle = "#" + this.GetID() + "menu ul {\r" + "  margin: 0;\r" + "  padding: 0;\r" + "}\r" + "#" + this.GetID() + "menu .main-menu {\r" + "  display: none;\r" + "}\r" + "#" + this.GetID() + "menu .popup-menu {\r" + "  display: block;\r" + "}\r" + "#" + this.GetID() + "menu label img.icon," + "#" + this.GetID() + "menu label span.checked {\r" + MenuImageSize + "  margin-right: 10px;\r" + "  pointer-events: none;\r" + "}\r" + "#" + this.GetID() + "tm:checked + .main-menu {\r" + "  display: block;\r" + "}\r" + "#" + this.GetID() + 'menu input[type="checkbox"],\r' + "#" + this.GetID() + "menu ul span.drop-label {\r" + "  display: none;\r" + "}\r" + "#" + this.GetID() + "menu li,\r" + "#" + this.GetID() + "menu #toggle-menu,\r" + "#" + this.GetID() + "menu .popup-menu,\r" + "#" + this.GetID() + "menu .sub-menu {\r" + "  border-width: 1px;\r" + "  border-style: solid;\r" + "  border-color: rgba(0, 0, 0, .05);\r" + "  border-bottom: 0px;\r" + "  border-top: 0px;\r" + "}\r" + "#" + this.GetID() + "menu li,\r" + "#" + this.GetID() + "menu #toggle-menu {\r" + "  border-width: 0 0 3px;\r" + "}\r" + "#" + this.GetID() + "menu .popup-menu,\r" + "#" + this.GetID() + "menu .sub-menu {\r" + "  border-width: 1px 1px 0;\r" + "  margin: 0 1em;\r" + "}\r" + "#" + this.GetID() + "menu .popup-menu li:first-child,\r" + "#" + this.GetID() + "menu .sub-menu li:first-child {\r" + "  border-top: 1px solid;\r" + "  border-color: rgba(0, 0, 0, .05);\r" + "}\r" + "#" + this.GetID() + "menu .popup-menu li:last-child,\r" + "#" + this.GetID() + "menu .sub-menu li:last-child {\r" + "  border-bottom: 1px solid;\r" + "  border-color: rgba(0, 0, 0, .05);\r" + "}\r" + "#" + this.GetID() + "menu li,\r" + "#" + this.GetID() + "menu #toggle-menu,\r" + "#" + this.GetID() + "menu li label {\r" + "  position: relative;\r" + "  display: block;\r" + "}\r" + "#" + this.GetID() + "menu #toggle-menu,\r" + "#" + this.GetID() + "menu li label { \r" + "  padding: 0.75em 1.5em;\r" + "  text-decoration: none;\r" + "}\r" + "#" + this.GetID() + "menu li span.menu-separator { \r" + "  display: block;\r" + "  width: 100%;\r" + "  height: 1px;\r" + "  background-color: rgba(0, 0, 0, .05);\r" + "}\r" + "#" + this.GetID() + "menu .popup-menu, \r" + "#" + this.GetID() + "menu .sub-menu {\r" + "  display: none;\r" + "}\r" + "#" + this.GetID() + 'menu input[type="checkbox"]:checked + .popup-menu,\r' + "#" + this.GetID() + 'menu input[type="checkbox"]:checked + .sub-menu {\r' + "  display: block;\r" + "  z-index: 3000;\r" + "}\r" + "#" + this.GetID() + "menu span.drop-icon {\r" + "  margin-left: 10px;" + "}\r" + "#" + this.GetID() + "menu span.hamburger-icon {\r" + "  float: right;\r" + "  padding: 0;\r" + "  margin: 0;\r" + "  font-weight: 900;\r" + "}\r" + "@media only screen and (max-width: 64em) and (min-width: 52.01em) {\r" + "  #" + this.GetID() + "menu li {\r" + "    width: auto;\r" + "  }\r" + "  #" + this.GetID() + "menu .sub-menu li {\r" + "    width: auto;\r" + "  }\r" + "}\r";
      MenuColorStyle = "";
      if (this.FElementClassName === "") {
        MenuColorStyle = "#" + this.GetID() + "menu .popup-menu, \r" + "#" + this.GetID() + "menu .sub-menu {\r" + "  background-color: " + pas["WEBLib.Graphics"].ColorToHTML(this.FAppearance.FBackgroundColor) + ";\r" + "}\r" + "@media only screen and (max-width: 64em) and (min-width: 52.01em) {\r" + "#" + this.GetID() + "menu .sub-menu {\r" + "  background-color: " + pas["WEBLib.Graphics"].ColorToHTML(this.FAppearance.FHamburgerMenu.FBackgroundColor) + ";\r" + "}\r" + "}\r" + "#" + this.GetID() + "menu li,\r" + "#" + this.GetID() + "menu #toggle-menu,\r" + "#" + this.GetID() + "menu li label {\r" + "}\r" + "#" + this.GetID() + "menu #toggle-menu {\r" + "  background-color: " + pas["WEBLib.Graphics"].ColorToHTML(this.FAppearance.FHamburgerMenu.FBackgroundColor) + ";\r" + "  color: " + pas["WEBLib.Graphics"].ColorToHTML(this.FAppearance.FHamburgerMenu.FCaptionColor) + ";\r" + "}\r" + "#" + this.GetID() + "menu .main-menu li label {\r" + "  background-color: " + pas["WEBLib.Graphics"].ColorToHTML(this.FAppearance.FBackgroundColor) + ";\r" + "}\r" + "#" + this.GetID() + "menu li label:hover {\r" + "  background-color: " + pas["WEBLib.Graphics"].ColorToHTML(this.FAppearance.FHoverColor) + ";\r" + "  color: " + pas["WEBLib.Graphics"].ColorToHTML(this.FAppearance.FHoverFontColor) + ";\r" + "}\r" + "#" + this.GetID() + "menu .popup-menu label:hover, \r" + "#" + this.GetID() + "menu .sub-menu label:hover {\r" + "  background-color: " + pas["WEBLib.Graphics"].ColorToHTML(this.FAppearance.FHoverColor) + ";\r" + "  color: " + pas["WEBLib.Graphics"].ColorToHTML(this.FAppearance.FHoverFontColor) + ";\r" + "}\r";
      };
      MenuStyle = MenuStyle + MenuColorStyle + MenuResponsiveStyle;
      this.FMainMenu = true;
      this.FMenuIndex = 0;
      ElStyle = document.createElement("STYLE");
      ElStyle.innerHTML = MenuStyle;
      ElScript = document.createElement("SCRIPT");
      ElScript.innerHTML = "function " + this.GetID() + "MenuClick(ctrl){" + "  el = ctrl.parentElement.parentElement;" + '  el.style.display = "none";' + '  setTimeout(function(){el.style.removeProperty("display")}, 25);' + "}" + "function " + this.GetID() + "MenuOut(ctrl){" + '  menuel = document.getElementById("' + this.GetID() + '");' + "  if(menuel) { " + '    popupel = menuel.getElementsByClassName("popup-menu");' + "    if(popupel) " + '      setTimeout(function(){popupel[0].style.display = "none"}, 25);' + "  }" + "}";
      ElLabel = document.createElement("LABEL");
      ElLabel.setAttribute("for",this.GetID() + "tm");
      ElLabel.setAttribute("id","toggle-menu");
      ElLabel.innerHTML = this.FAppearance.FHamburgerMenu.FCaption;
      ElSpan = document.createElement("SPAN");
      if (this.FElementItemClassName !== "") {
        ElSpan.setAttribute("class",this.FElementItemClassName)}
       else ElSpan.setAttribute("class","drop-label");
      ElLabel.appendChild(ElSpan);
      ElIcon = document.createElement("SPAN");
      ElIcon.setAttribute("class","hamburger-icon");
      ElIcon.innerHTML = "&#9776;";
      ElSpan.appendChild(ElIcon);
      ElCheckBox = document.createElement("INPUT");
      ElCheckBox.setAttribute("type","checkbox");
      ElCheckBox.setAttribute("id",this.GetID() + "tm");
      this.FMenu.appendChild(ElStyle);
      this.FMenu.appendChild(ElScript);
      this.FMenu.appendChild(ElLabel);
      this.FMenu.appendChild(ElCheckBox);
      ElItems = this.GetMenuSource(this.FItems);
      if (ElItems !== null) this.FMenu.appendChild(ElItems);
      ElHandle.appendChild(this.FMenu);
    };
    this.GetMenuSource = function (Item) {
      var Result = null;
      var I = 0;
      var it = null;
      var MenuClass = "";
      var ElListItem = null;
      var ElLabel = null;
      var ElCheckBox = null;
      var ElSymbol = null;
      var id = 0;
      var caption = "";
      Result = null;
      if ((Item.FItems != null) && (Item.FItems.GetCount() > 0)) {
        Result = document.createElement("UL");
        if (this.FMainMenu) {
          this.FMainMenu = false;
          if (this.FIsPopupMenu) {
            MenuClass = "popup-menu"}
           else MenuClass = "main-menu";
        } else MenuClass = "sub-menu";
        this.FMenuIndex = this.FMenuIndex + 1;
        Result.setAttribute("class",MenuClass);
        for (var $l = 0, $end = Item.FItems.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          it = Item.FItems.GetItem(I);
          id = id + 1;
          if (it.FName === "") {
            caption = pas.SysUtils.StringReplace(it.FCaption," ","",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
            caption = $impl.MakeValidName(caption);
            if (caption === "") caption = "MenuItem" + pas.SysUtils.IntToStr(id);
            it.SetName(caption + pas.SysUtils.IntToStr(id));
          };
          if (it.FVisible) {
            ElListItem = document.createElement("LI");
            if (it.FCaption !== "-") {
              ElLabel = document.createElement("LABEL");
              if (this.FElementItemClassName !== "") {
                ElLabel.setAttribute("class",this.FElementItemClassName)}
               else ElLabel.setAttribute("class","drop-label");
              ElLabel.setAttribute("title",it.FHint);
              if ((it.FImageIndex >= 0) && (this.FAppearance.FImageURLs.GetCount() > it.FImageIndex)) {
                ElLabel.innerHTML = '<img class="icon" src="' + this.FAppearance.FImageURLs.Get(it.FImageIndex) + '">'}
               else if (it.FChecked) {
                if (it.FRadioItem) {
                  ElLabel.innerHTML = '<span class="checked">&#9679;</span>'}
                 else ElLabel.innerHTML = '<span class="checked">&#10004;</span>';
              };
              ElLabel.innerHTML = ElLabel.innerHTML + it.FCaption;
            } else {
              ElLabel = document.createElement("SPAN");
              ElLabel.setAttribute("class","menu-separator");
              ElLabel.innerHTML = "";
            };
            if ((it.FItems != null) && (it.FItems.GetCount() > 0)) {
              ElSymbol = document.createElement("SPAN");
              ElSymbol.setAttribute("class","drop-icon");
              ElSymbol.innerHTML = this.FAppearance.FSubmenuIndicator;
              ElLabel.setAttribute("for","sm" + pas.SysUtils.IntToStr(this.FMenuIndex));
              ElLabel.appendChild(ElSymbol);
              if (!it.FEnabled) ElLabel.style.setProperty("color","gray");
              ElCheckBox = document.createElement("INPUT");
              ElCheckBox.setAttribute("type","checkbox");
              ElCheckBox.setAttribute("id","sm" + pas.SysUtils.IntToStr(this.FMenuIndex));
              ElListItem.appendChild(ElLabel);
              ElListItem.appendChild(ElCheckBox);
              if (it.FEnabled) ElListItem.appendChild(this.GetMenuSource(it));
            } else {
              ElLabel.setAttribute("for",this.GetID() + "tm");
              ElLabel.setAttribute("id",it.FName);
              if (it.FEnabled) {
                if (MenuClass === "sub-menu") {
                  if (it.FEnabled) ElLabel.setAttribute("onMouseUp",this.GetID() + "MenuClick(this);");
                };
                ElLabel.addEventListener("click",rtl.createSafeCallback(this,"HandleChange"));
              } else ElLabel.style.setProperty("color","gray");
              ElListItem.appendChild(ElLabel);
            };
            Result.appendChild(ElListItem);
          };
        };
      };
      return Result;
    };
    this.GetItemByName = function (AMenu, Name) {
      var Result = null;
      var I = 0;
      var it = null;
      Result = null;
      if (AMenu.FItems != null) {
        for (var $l = 0, $end = AMenu.FItems.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          it = AMenu.FItems.GetItem(I);
          if (it.FName === Name) {
            Result = it;
            if (it.FOnClick != null) Result.FOnClick = it.FOnClick;
            return Result;
          };
          if (!(Result != null)) Result = this.GetItemByName(it,Name);
        };
      };
      return Result;
    };
    this.CreateInitialize = function () {
      $mod.TCustomMainMenu.CreateInitialize.call(this);
      this.FAppearance = $mod.TMainMenuAppearance.$create("Create$1",[this]);
      this.FContainer$1 = null;
      this.FMainMenu = true;
      this.FMenuIndex = 0;
      this.FIsPopupMenu = false;
      this.FShowPopup = false;
      this.SetTop(0);
      this.SetLeft(0);
      this.SetWidth(100);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetElementPosition(pas["WEBLib.Controls"].TElementPosition.epRelative);
        this.SetWidthPercent(100);
        this.SetWidthStyle(pas["WEBLib.Controls"].TSizeStyle.ssPercent);
      };
    };
    this.CreateElement = function () {
      var Result = null;
      var LLabel = null;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        Result = document.createElement("DIV");
        LLabel = document.createElement("DIV");
        LLabel.innerHTML = "TWebMainMenu";
        this.SetBorderStyle(pas["WEBLib.Controls"].TBorderStyle.bsSingle);
        LLabel.setAttribute("align","center");
        LLabel.style.setProperty("border","1px solid gray");
        LLabel.style.setProperty("vertical-align","middle");
        LLabel.style.setProperty("display","table-cell");
        Result.appendChild(LLabel);
      } else {
        Result = document.createElement("DIV");
        if (this.FIsPopupMenu) Result.setAttribute("onMouseLeave",this.GetID() + "MenuOut(this);");
      };
      return Result;
    };
    this.Destroy = function () {
      rtl.free(this,"FAppearance");
      $mod.TCustomMainMenu.Destroy.call(this);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Appearance",0,$mod.$rtti["TMainMenuAppearance"],"FAppearance","FAppearance");
    $r.addProperty("Container",0,pas["WEBLib.Controls"].$rtti["TControl"],"FContainer$1","FContainer$1");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementItemClassName",0,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementItemClassName","FElementItemClassName");
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
  });
  rtl.createClass(this,"TWebMainMenu",this.TMainMenu,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TPopupMenu",this.TMainMenu,function () {
    this.$init = function () {
      $mod.TMainMenu.$init.call(this);
      this.FOnPopup = null;
    };
    this.$final = function () {
      this.FOnPopup = undefined;
      $mod.TMainMenu.$final.call(this);
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.Controls"].TControl.Create$1.apply(this,arguments);
      if (pas["WEBLib.Controls"].TControl.isPrototypeOf(AOwner)) this.SetParent(AOwner);
      return this;
    };
    this.CreateInitialize = function () {
      $mod.TMainMenu.CreateInitialize.call(this);
      this.FAppearance.FHamburgerMenu.SetVisible($mod.TMainMenuHamburgerMenuVisible.hmNever);
      this.FIsPopupMenu = true;
    };
    this.Popup = function (X, Y) {
      if (this.FOnPopup != null) this.FOnPopup(this);
      this.SetTop(Y);
      this.SetLeft(X);
      this.FShowPopup = true;
      this.UpdateElement();
      this.FShowPopup = false;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("OnPopup",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnPopup","FOnPopup");
  });
  rtl.createClass(this,"TWebPopupMenu",this.TPopupMenu,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$Class("TWebCustomControl");
  this.$rtti.$ClassRef("TWebCustomControlClass",{instancetype: this.$rtti["TWebCustomControl"]});
  rtl.createClass(this,"TWebCustomControl",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FPopupMenu = null;
    };
    this.$final = function () {
      this.FPopupMenu = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.HandleDoContextMenu = function (Event) {
      var Result = false;
      var pt = pas.Types.TPoint.$new();
      var frm = null;
      var r = null;
      pas["WEBLib.Controls"].TControl.HandleDoContextMenu.apply(this,arguments);
      if (this.FPopupMenu != null) {
        Event.stopPropagation();
        Event.preventDefault();
        pt.$assign(pas.Types.Point(Math.round(Event.clientX),Math.round(Event.clientY)));
        frm = pas["WEBLib.Forms"].GetParentForm(this);
        if ((frm != null) && (frm.GetContainer() != null)) {
          r = frm.GetContainer().getBoundingClientRect();
          pt.x = pt.x - Math.round(r.left);
          pt.y = pt.y - Math.round(r.top);
        };
        this.FPopupMenu.Popup(pt.x,pt.y);
        Result = true;
      };
      return Result;
    };
    this.Notification = function (AComponent, Operation) {
      pas.Classes.TComponent.Notification.apply(this,arguments);
      if ((Operation === pas.Classes.TOperation.opRemove) && (AComponent === this.FPopupMenu)) this.FPopupMenu = null;
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TWebGraphicControl",pas["WEBLib.Controls"].TGraphicControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TGraphicControl.$init.call(this);
      this.FPopupMenu = null;
    };
    this.$final = function () {
      this.FPopupMenu = undefined;
      pas["WEBLib.Controls"].TGraphicControl.$final.call(this);
    };
    this.HandleDoContextMenu = function (Event) {
      var Result = false;
      var pt = pas.Types.TPoint.$new();
      var frm = null;
      var r = null;
      pas["WEBLib.Controls"].TControl.HandleDoContextMenu.apply(this,arguments);
      if (this.FPopupMenu != null) {
        Event.stopPropagation();
        Event.preventDefault();
        pt.$assign(pas.Types.Point(Math.round(Event.clientX),Math.round(Event.clientY)));
        frm = pas["WEBLib.Forms"].GetParentForm(this);
        if ((frm != null) && frm.FPopup && (frm.GetContainer() != null)) {
          r = frm.GetContainer().getBoundingClientRect();
          pt.x = pt.x - Math.round(r.left);
          pt.y = pt.y - Math.round(r.top);
        };
        this.FPopupMenu.Popup(pt.x,pt.y);
        Result = true;
      };
      return Result;
    };
    this.Notification = function (AComponent, Operation) {
      pas.Classes.TComponent.Notification.apply(this,arguments);
      if ((Operation === pas.Classes.TOperation.opRemove) && (AComponent === this.FPopupMenu)) this.FPopupMenu = null;
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  $mod.$implcode = function () {
    var Alpha = rtl.createSet(null,65,90,null,97,122,95);
    var AlphaNum = rtl.unionSet(Alpha,rtl.createSet(null,48,57));
    $impl.MakeValidName = function (s) {
      var Result = "";
      var i = 0;
      Result = "";
      for (var $l = 1, $end = s.length; $l <= $end; $l++) {
        i = $l;
        if (s.charCodeAt(i - 1) in AlphaNum) Result = Result + s.charAt(i - 1);
      };
      return Result;
    };
  };
},["Types","WEBLib.Forms"]);
//# sourceMappingURL=WEBLib.Menus.js.map
