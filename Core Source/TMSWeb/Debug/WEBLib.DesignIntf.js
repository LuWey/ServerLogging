rtl.module("WEBLib.DesignIntf",["System","Classes","Web","JS","TypInfo","WEBLib.Forms","WEBLib.Menus"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.$rtti.$Interface("IMenuItem");
  rtl.createInterface(this,"IMenuItems","{1F683FB4-D9CF-4CC7-934D-99A300314500}",["GetItem","SameAs","Find","FindByName","Count","Clear","AddItem","InsertItem","InsertItem$1","AddLine","InsertLine","InsertLine$1"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("GetItem",1,[["Index",rtl.longint]],$mod.$rtti["IMenuItem"]);
    $r.addMethod("SameAs",1,[["AItem",pas.System.$rtti["IUnknown"],2]],rtl.boolean);
    $r.addMethod("Find",1,[["ACaption",pas.System.$rtti["WideString"],2]],$mod.$rtti["IMenuItem"]);
    $r.addMethod("FindByName",1,[["AName",rtl.string,2]],$mod.$rtti["IMenuItem"]);
    $r.addMethod("Count",1,[],rtl.longint);
    $r.addProperty("Items",1,$mod.$rtti["IMenuItem"],"GetItem","");
    $r.addMethod("Clear",0,[]);
    $r.addMethod("AddItem",1,[["ACaption",pas.System.$rtti["WideString"],2],["AShortCut",pas["WEBLib.Menus"].$rtti["TShortCut"]],["AChecked",rtl.boolean],["AEnabled",rtl.boolean],["AOnClick",pas.Classes.$rtti["TNotifyEvent"]],["hCtx",pas["WEBLib.Menus"].$rtti["THelpContext"]],["AName",rtl.string,2]],$mod.$rtti["IMenuItem"]);
    $r.addMethod("InsertItem",1,[["ACaption",pas.System.$rtti["WideString"],2],["AShortCut",pas["WEBLib.Menus"].$rtti["TShortCut"]],["AChecked",rtl.boolean],["AEnabled",rtl.boolean],["AOnClick",pas.Classes.$rtti["TNotifyEvent"]],["hCtx",pas["WEBLib.Menus"].$rtti["THelpContext"]],["AName",rtl.string,2]],$mod.$rtti["IMenuItem"]);
    $r.addMethod("InsertItem$1",1,[["Index",rtl.longint],["ACaption",pas.System.$rtti["WideString"],2],["AShortCut",pas["WEBLib.Menus"].$rtti["TShortCut"]],["AChecked",rtl.boolean],["AEnabled",rtl.boolean],["AOnClick",pas.Classes.$rtti["TNotifyEvent"]],["hCtx",pas["WEBLib.Menus"].$rtti["THelpContext"]],["AName",rtl.string,2]],$mod.$rtti["IMenuItem"]);
    $r.addMethod("AddLine",1,[["AName",rtl.string,2]],$mod.$rtti["IMenuItem"]);
    $r.addMethod("InsertLine",1,[["AName",rtl.string,2]],$mod.$rtti["IMenuItem"]);
    $r.addMethod("InsertLine$1",1,[["Index",rtl.longint],["AName",rtl.string,2]],$mod.$rtti["IMenuItem"]);
  });
  rtl.createInterface(this,"IMenu","{C24B5609-AD3A-4246-8FDC-65B57EFA75AA}",["Items"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("Items",1,[],$mod.$rtti["IMenuItems"]);
  });
  rtl.createInterface(this,"IMainMenu","{4605DA9D-79C3-4969-8DC4-FAD9B96D287B}",[],this.IMenu,function () {
  });
  rtl.createInterface(this,"IPopupMenu","{16ABD57D-6CC6-4004-B4FD-53C46429894F}",["Popup","PopupComponent"],this.IMenu,function () {
    var $r = this.$rtti;
    $r.addMethod("Popup",0,[["X",rtl.longint],["Y",rtl.longint]]);
    $r.addMethod("PopupComponent",1,[],pas.Classes.$rtti["TComponent"]);
  });
  rtl.createInterface(this,"IMenuItem","{FEA8F8DA-E0D9-4DB3-B7B7-C1C38394BA17}",["GetCaption","SetCaption","GetChecked","SetChecked","GetEnabled","SetEnabled","GetGroupIndex","SetGroupIndex","GetHelpContext","SetHelpContext","GetHint","SetHint","GetRadioItem","SetRadioItem","GetShortCut","SetShortCut","GetTag","SetTag","GetVisible","SetVisible","Name","MenuIndex","Parent","HasParent","IsLine"],this.IMenuItems,function () {
    var $r = this.$rtti;
    $r.addMethod("GetCaption",1,[],pas.System.$rtti["WideString"]);
    $r.addMethod("SetCaption",0,[["ACaption",pas.System.$rtti["WideString"],2]]);
    $r.addMethod("GetChecked",1,[],rtl.boolean);
    $r.addMethod("SetChecked",0,[["AChecked",rtl.boolean]]);
    $r.addMethod("GetEnabled",1,[],rtl.boolean);
    $r.addMethod("SetEnabled",0,[["AEnabled",rtl.boolean]]);
    $r.addMethod("GetGroupIndex",1,[],rtl.byte);
    $r.addMethod("SetGroupIndex",0,[["AGroupIndex",rtl.byte]]);
    $r.addMethod("GetHelpContext",1,[],pas["WEBLib.Menus"].$rtti["THelpContext"]);
    $r.addMethod("SetHelpContext",0,[["AHelpContext",pas["WEBLib.Menus"].$rtti["THelpContext"]]]);
    $r.addMethod("GetHint",1,[],rtl.string);
    $r.addMethod("SetHint",0,[["AHint",rtl.string,2]]);
    $r.addMethod("GetRadioItem",1,[],rtl.boolean);
    $r.addMethod("SetRadioItem",0,[["ARadioItem",rtl.boolean]]);
    $r.addMethod("GetShortCut",1,[],pas["WEBLib.Menus"].$rtti["TShortCut"]);
    $r.addMethod("SetShortCut",0,[["AShortCut",pas["WEBLib.Menus"].$rtti["TShortCut"]]]);
    $r.addMethod("GetTag",1,[],rtl.longint);
    $r.addMethod("SetTag",0,[["AValue",rtl.longint]]);
    $r.addMethod("GetVisible",1,[],rtl.boolean);
    $r.addMethod("SetVisible",0,[["AVisible",rtl.boolean]]);
    $r.addMethod("Name",1,[],pas.Classes.$rtti["TComponentName"]);
    $r.addMethod("MenuIndex",1,[],rtl.longint);
    $r.addMethod("Parent",1,[],$r);
    $r.addMethod("HasParent",1,[],rtl.boolean);
    $r.addMethod("IsLine",1,[],rtl.boolean);
    $r.addProperty("Caption",3,pas.System.$rtti["WideString"],"GetCaption","SetCaption");
    $r.addProperty("Checked",3,rtl.boolean,"GetChecked","SetChecked");
    $r.addProperty("Enabled",3,rtl.boolean,"GetEnabled","SetEnabled");
    $r.addProperty("GroupIndex",3,rtl.byte,"GetGroupIndex","SetGroupIndex");
    $r.addProperty("HelpContext",3,pas["WEBLib.Menus"].$rtti["THelpContext"],"GetHelpContext","SetHelpContext");
    $r.addProperty("Hint",3,rtl.string,"GetHint","SetHint");
    $r.addProperty("RadioItem",3,rtl.boolean,"GetRadioItem","SetRadioItem");
    $r.addProperty("ShortCut",3,pas["WEBLib.Menus"].$rtti["TShortCut"],"GetShortCut","SetShortCut");
    $r.addProperty("Tag",3,rtl.longint,"GetTag","SetTag");
    $r.addProperty("Visible",3,rtl.boolean,"GetVisible","SetVisible");
  });
  rtl.createInterface(this,"IMenuItem2","{7BB2E6D5-A47D-4ECD-B891-29ECB256199F}",["Click"],this.IMenuItem,function () {
    var $r = this.$rtti;
    $r.addMethod("Click",0,[]);
  });
  this.$rtti.$MethodVar("TLoadJavaScriptCallBack",{procsig: rtl.newTIProcSig([["AJavaScriptFile",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TErrorJavaScriptCallBack",{procsig: rtl.newTIProcSig([["AError",pas.Web.$rtti["TJSErrorEvent"]]]), methodkind: 0});
  this.$rtti.$ClassRef("TComponentClass",{instancetype: pas.Classes.$rtti["TComponent"]});
  this.$rtti.$DynArray("TIconArray",{eltype: rtl.string});
  this.$rtti.$DynArray("TComponentClassArray",{eltype: this.$rtti["TComponentClass"]});
  rtl.createClass(this,"TRegisteredComponent",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FClass = null;
      this.FIcon = "";
      this.FPage = "";
    };
    this.$final = function () {
      this.FClass = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (APage, AClass, AIcon) {
      this.FPage = APage;
      this.FClass = AClass;
      this.FIcon = AIcon;
      return this;
    };
  });
  rtl.createInterface(this,"IDesignerSelections","{2A041D7A-7175-3AD1-B2C4-57B3F6EDFAF4}",["Add","Get","GetCount"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("Add",1,[["Item",pas.Classes.$rtti["TPersistent"],2]],rtl.longint);
    $r.addMethod("Get",1,[["Index",rtl.longint]],pas.Classes.$rtti["TPersistent"]);
    $r.addMethod("GetCount",1,[],rtl.longint);
    $r.addProperty("Count",1,rtl.longint,"GetCount","");
    $r.addProperty("Items",1,pas.Classes.$rtti["TPersistent"],"Get","");
  });
  this.$rtti.$ProcVar("TGetStrProc",{procsig: rtl.newTIProcSig([["AUnitName",rtl.string]])});
  rtl.createClass(this,"TSelectionEditor",pas.System.TObject,function () {
    this.RequiresUnits = function (Proc) {
    };
  });
  this.$rtti.$ClassRef("TSelectionEditorClass",{instancetype: this.$rtti["TSelectionEditor"]});
  rtl.createClass(this,"TRegisteredSelectionEditor",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FClass = null;
      this.FEditor = null;
    };
    this.$final = function () {
      this.FClass = undefined;
      this.FEditor = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (AClass, AEditorClass) {
      pas.System.TObject.Create.call(this);
      this.FClass = AClass;
      this.FEditor = AEditorClass;
      return this;
    };
  });
  rtl.createClass(this,"TLibraryRequirementsEditor",pas.System.TObject,function () {
    this.RequiresLibraries = function (Proc) {
    };
  });
  this.$rtti.$ClassRef("TLibraryRequirementsEditorClass",{instancetype: this.$rtti["TLibraryRequirementsEditor"]});
  rtl.createClass(this,"TRegisteredLibraryRequirementsEditor",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FClass = null;
      this.FEditor = null;
    };
    this.$final = function () {
      this.FClass = undefined;
      this.FEditor = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (AClass, AEditorClass) {
      pas.System.TObject.Create.call(this);
      this.FClass = AClass;
      this.FEditor = AEditorClass;
      return this;
    };
  });
  this.TPropertyAttribute = {"0": "paDialog", paDialog: 0, "1": "paValueList", paValueList: 1, "2": "paSortList", paSortList: 2, "3": "paValueEditable", paValueEditable: 3, "4": "paSubProperties", paSubProperties: 4};
  this.$rtti.$Enum("TPropertyAttribute",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TPropertyAttribute});
  this.$rtti.$Set("TPropertyAttributes",{comptype: this.$rtti["TPropertyAttribute"]});
  rtl.createClass(this,"TPropertyEditor",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FComponent = null;
      this.FPropertyName = "";
      this.FPropertyInfo = null;
      this.FResultProc = null;
    };
    this.$final = function () {
      this.FComponent = undefined;
      this.FPropertyInfo = undefined;
      this.FResultProc = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.GetStrValue = function () {
      var Result = "";
      Result = this.GetStrValueAt(0);
      return Result;
    };
    this.GetStrValueAt = function (Index) {
      var Result = "";
      Result = pas.TypInfo.GetStrProp$1(this.FComponent,this.FPropertyInfo);
      return Result;
    };
    this.SetStrValue = function (Value) {
      pas.TypInfo.SetStrProp$1(this.FComponent,this.FPropertyInfo,Value);
    };
    this.Modified = function () {
    };
    this.Create$1 = function () {
      this.FPropertyName = "";
      this.FPropertyInfo = null;
      return this;
    };
    this.Edit = function () {
      this.Edit$1(null);
    };
    this.Edit$1 = function (AProc) {
      this.FResultProc = AProc;
    };
    this.GetAttributes = function () {
      var Result = {};
      Result = rtl.createSet($mod.TPropertyAttribute.paDialog);
      return Result;
    };
    this.GetValue = function () {
      var Result = "";
      Result = "(Unknown)";
      return Result;
    };
    this.GetComponent = function () {
      var Result = null;
      Result = this.FComponent;
      return Result;
    };
    this.GetComponent$1 = function (Index) {
      var Result = null;
      Result = this.FComponent;
      return Result;
    };
    this.GetValues = function (Proc) {
    };
    this.SetValue = function (Value) {
    };
    this.GetOrdValue = function () {
      var Result = 0;
      Result = this.GetOrdValueAt(0);
      return Result;
    };
    this.GetOrdValueAt = function (Index) {
      var Result = 0;
      Result = pas.TypInfo.GetOrdProp$1(this.FComponent,this.FPropertyInfo);
      return Result;
    };
    this.GetObjectValue = function () {
      var Result = null;
      Result = this.GetObjectValueAt(0);
      return Result;
    };
    this.GetObjectValueAt = function (Index) {
      var Result = null;
      Result = pas.TypInfo.GetObjectProp$2(this.FComponent,this.FPropertyInfo);
      return Result;
    };
    this.SetOrdValue = function (Value) {
      pas.TypInfo.SetOrdProp$1(this.FComponent,this.FPropertyInfo,Value);
    };
  });
  rtl.createClass(this,"TStringProperty",this.TPropertyEditor,function () {
    this.GetValue = function () {
      var Result = "";
      Result = this.GetStrValue();
      return Result;
    };
    this.SetValue = function (Value) {
      this.SetStrValue(Value);
    };
  });
  rtl.createClass(this,"TIntegerProperty",this.TPropertyEditor,function () {
  });
  rtl.createClass(this,"TClassProperty",this.TPropertyEditor,function () {
  });
  this.$rtti.$ClassRef("TPropertyEditorClass",{instancetype: this.$rtti["TPropertyEditor"]});
  rtl.createClass(this,"TRegisteredPropertyEditor",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FClass = null;
      this.FPropertyName = "";
      this.FPropertyType = null;
      this.FEditor = null;
    };
    this.$final = function () {
      this.FClass = undefined;
      this.FEditor = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (APropertyType, AClass, AProperty, AEditor) {
      pas.System.TObject.Create.call(this);
      this.FClass = AClass;
      this.FPropertyName = AProperty;
      this.FPropertyType = APropertyType;
      this.FEditor = AEditor;
      return this;
    };
  });
  rtl.createClass(this,"TRegisteredIgnoredProperty",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FClass = null;
      this.FPropertyName = "";
    };
    this.$final = function () {
      this.FClass = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (AClass, AProperty) {
      pas.System.TObject.Create.call(this);
      this.FClass = AClass;
      this.FPropertyName = AProperty;
      return this;
    };
  });
  rtl.createClass(this,"TComponentEditor",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FComponent = null;
      this.FResultProc = null;
      this.FExecResultProc = null;
    };
    this.$final = function () {
      this.FComponent = undefined;
      this.FResultProc = undefined;
      this.FExecResultProc = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Edit = function () {
      this.Edit$1(null);
    };
    this.Edit$1 = function (AProc) {
      this.FResultProc = AProc;
    };
    this.ExecuteVerb = function (Index) {
      this.ExecuteVerb$1(Index,null);
    };
    this.ExecuteVerb$1 = function (Index, AProc) {
      this.FExecResultProc = AProc;
    };
    this.PrepareItem = function (Index, AItem) {
    };
    this.GetVerb = function (Index) {
      var Result = "";
      Result = "";
      return Result;
    };
    this.GetVerbCount = function () {
      var Result = 0;
      Result = 0;
      return Result;
    };
    this.GetComponent = function () {
      var Result = null;
      Result = this.FComponent;
      return Result;
    };
    this.GetComponent$1 = function (Index) {
      var Result = null;
      Result = this.FComponent;
      return Result;
    };
    this.GetDefaultProperty = function () {
      var Result = "";
      Result = "";
      return Result;
    };
  });
  this.$rtti.$ClassRef("TComponentEditorClass",{instancetype: this.$rtti["TComponentEditor"]});
  rtl.createClass(this,"TRegisteredComponentEditor",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FClass = null;
      this.FEditor = null;
    };
    this.$final = function () {
      this.FClass = undefined;
      this.FEditor = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (AClass, AEditorClass) {
      pas.System.TObject.Create.call(this);
      this.FClass = AClass;
      this.FEditor = AEditorClass;
      return this;
    };
  });
  rtl.createClass(this,"TDefaultEditor",this.TComponentEditor,function () {
  });
  this.$rtti.$ProcVar("TIdentToInt",{procsig: rtl.newTIProcSig([["Ident",rtl.string,2],["Int",rtl.longint,1]],rtl.boolean)});
  this.$rtti.$ProcVar("TIntToIdent",{procsig: rtl.newTIProcSig([["Int",rtl.longint],["Ident",rtl.string,1]],rtl.boolean)});
  rtl.createClass(this,"TRegisteredIdentToInt",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FIdentToInt = null;
      this.FIntToIdent = null;
      this.FPropertyType = null;
    };
    this.$final = function () {
      this.FIdentToInt = undefined;
      this.FIntToIdent = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Create$1 = function (APropertyType, AIdentToInt, AIntToIdent) {
      this.FPropertyType = APropertyType;
      this.FIdentToInt = AIdentToInt;
      this.FIntToIdent = AIntToIdent;
      return this;
    };
  });
  this.RegisterComponents = function (Page, ComponentClasses, Icons) {
    var I = 0;
    var c = null;
    var ic = "";
    for (var $l = 0, $end = rtl.length(ComponentClasses) - 1; $l <= $end; $l++) {
      I = $l;
      c = ComponentClasses[I];
      if (rtl.length(Icons) > 0) {
        ic = Icons[I]}
       else ic = "";
      if (ic === "") ic = $impl.TIconDataDict.Find(c.$classname);
      $impl.RegisteredComponentList[c.$classname] = $mod.TRegisteredComponent.$create("Create$1",[Page,c,ic]);
    };
  };
  this.RegisterSelectionEditor = function (AClass, AEditorClass) {
    $impl.RegisteredSelectionEditorList[AClass.$classname] = $mod.TRegisteredSelectionEditor.$create("Create$1",[AClass,AEditorClass]);
  };
  this.RegisterPropertyEditor = function (PropertyType, ComponentClass, PropertyName, EditorClass) {
    var LKey = "";
    var LType = "";
    var LClass = "";
    LType = "";
    if (PropertyType != null) LType = PropertyType.name;
    LClass = "";
    if (ComponentClass != null) LClass = ComponentClass.$classname;
    LKey = LType + "_" + LClass + "_" + PropertyName;
    $impl.RegisteredPropertyEditorList[LKey] = $mod.TRegisteredPropertyEditor.$create("Create$1",[PropertyType,ComponentClass,PropertyName,EditorClass]);
  };
  this.RegisterComponentEditor = function (AClass, ComponentEditor) {
    $impl.RegisteredComponentEditorList[AClass.$classname] = $mod.TRegisteredComponentEditor.$create("Create$1",[AClass,ComponentEditor]);
  };
  this.RegisterIgnoredProperty = function (ComponentClass, PropertyName) {
    var LKey = "";
    var LClass = "";
    LClass = "";
    if (ComponentClass != null) LClass = ComponentClass.$classname;
    LKey = LClass + "_" + PropertyName;
    $impl.RegisteredIgnoredPropertyList[LKey] = $mod.TRegisteredIgnoredProperty.$create("Create$1",[ComponentClass,PropertyName]);
  };
  this.RegisterLibraryRequirementsEditor = function (AClass, AEditorClass) {
    $impl.RegisteredLibraryRequirementsEditorList[AClass.$classname] = $mod.TRegisteredLibraryRequirementsEditor.$create("Create$1",[AClass,AEditorClass]);
  };
  this.RegisterIcon = function (AComponentName, AIconData) {
    $impl.TIconDataDict.Add(AComponentName,AIconData);
  };
  this.GetRegisteredComponents = function (List) {
    var a = Object.keys($impl.RegisteredComponentList).map(function(key) {
          return [$impl.RegisteredComponentList[key]];
        });
    
        a.forEach(function(element) {
          List.Add(element[0]);
        });
  };
  this.GetRegisteredPages = function (List) {
    var a = Object.keys($impl.RegisteredComponentList).map(function(key) {
          return [$impl.RegisteredComponentList[key]];
        });
    
        a.forEach(function(element) {
          var p = element[0].FPage;
          if (List.IndexOf(p) == -1) {
            List.Add(element[0].FPage);
          }
        });
  };
  this.GetSelectionEditors = function (List) {
    var a = Object.keys($impl.RegisteredSelectionEditorList).map(function(key) {
          return [$impl.RegisteredSelectionEditorList[key]];
        });
    
        a.forEach(function(element) {
          List.Add(element[0]);
        });
  };
  this.LoadComponentFromJavaScript = function (JavaScriptFile, CallBack, ErrorCallBack) {
    var self = this;
        var JavaScript = {
          loadcomponent: function(src) {
            var n = src.substr(0, src.lastIndexOf("."));
            if (!pas[n]) {
              var script = document.createElement('script'), loaded;
              script.async = false;
              script.setAttribute('src', src);
              script.onerror = function(e){
                if (ErrorCallBack != null)
                {
                  ErrorCallBack(e);
                }
              }
              script.onreadystatechange = script.onload = function() {
                if (!loaded) {
                  if (CallBack != null)
                    CallBack(src);
                }
                loaded = true;
              };
              document.getElementsByTagName('head')[0].appendChild(script);
            }
          }
        };
    
        JavaScript.loadcomponent(JavaScriptFile);
  };
  this.InitializeComponentFromJavaScript = function (JavaScriptFile) {
    var src = "";
    if ($mod.IsComponentFromJavaScriptLoaded(JavaScriptFile)) {
      src = JavaScriptFile;
      var n = src.substr(0, src.lastIndexOf("."))
      var module = pas[n];
      rtl.loadintf(module);
      rtl.loadimpl(module);
    };
  };
  this.GetRegisteredComponentClass = function (ComponentClassName) {
    var Result = null;
    var r = null;
    Result = null;
    r = $mod.GetRegisteredComponent(ComponentClassName);
    if (r != null) Result = r.FClass;
    return Result;
  };
  this.GetRegisteredComponent = function (ComponentClassName) {
    var Result = null;
    var res = null;
    Result = null;
    if (ComponentClassName === "") return Result;
    res = null;
    var a = Object.keys($impl.RegisteredComponentList).map(function(key) {
          return [$impl.RegisteredComponentList[key]];
        });
    
        for (let el of a) {
          if (el[0].FClass.$classname.toLowerCase() == ComponentClassName.toLowerCase()) {
            res = el[0];
            break; }
        };
    Result = res;
    return Result;
  };
  this.GetRegisteredSelectionEditor = function (ComponentClassName) {
    var Result = null;
    var cn = "";
    var c = null;
    Result = null;
    if (ComponentClassName === "") return Result;
    c = pas.Classes.GetClass(ComponentClassName);
    if (!(c != null)) {
      c = $mod.GetRegisteredComponentClass(ComponentClassName);
      if (!(c != null)) return null;
    };
    do {
      cn = c.$classname;
      Result = rtl.getObject($impl.RegisteredSelectionEditorList[cn]);
      if (Result != null) return Result;
      c = c.$ancestor;
    } while (c != null);
    return Result;
  };
  this.GetRegisteredLibraryRequirementsEditor = function (ComponentClassName) {
    var Result = null;
    var cn = "";
    var c = null;
    Result = null;
    if (ComponentClassName === "") return Result;
    c = pas.Classes.GetClass(ComponentClassName);
    if (!(c != null)) return null;
    do {
      cn = c.$classname;
      Result = rtl.getObject($impl.RegisteredLibraryRequirementsEditorList[cn]);
      if (Result != null) return Result;
      c = c.$ancestor;
    } while (c != null);
    return Result;
  };
  this.GetRegisteredPropertyEditor = function (PropertyType, AClass, AProperty) {
    var Result = null;
    var LKey = "";
    var LType = "";
    var LPropEditor = null;
    var LList = null;
    var i = 0;
    var c = null;
    Result = null;
    LType = PropertyType.name;
    LKey = LType + "__";
    LPropEditor = rtl.getObject($impl.RegisteredPropertyEditorList[LKey]);
    if (LPropEditor != null) Result = LPropEditor;
    if (!(Result != null) && (AClass != null) && (AProperty !== "")) {
      c = AClass;
      do {
        LKey = LType + "_" + c.$classname + "_" + AProperty;
        LPropEditor = rtl.getObject($impl.RegisteredPropertyEditorList[LKey]);
        if (LPropEditor != null) {
          Result = LPropEditor;
          break;
        };
        c = c.$ancestor;
      } while (c != null);
    };
    if (!(Result != null)) {
      LList = pas.Classes.TList.$create("Create$1");
      $impl.GetPropertyEditors(LList);
      for (var $l = 0, $end = LList.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        LPropEditor = rtl.getObject(LList.Get(i));
        if (LPropEditor.FPropertyType === PropertyType) {
          if ((LPropEditor.FPropertyName === "") || (LPropEditor.FPropertyName === AProperty)) {
            if (!(LPropEditor.FClass != null)) {
              Result = LPropEditor;
              break;
            } else if (AClass != null) {
              c = AClass;
              do {
                if (LPropEditor.FClass.$classname === c.$classname) {
                  Result = LPropEditor;
                  break;
                };
                c = c.$ancestor;
              } while (c != null);
              if (Result != null) break;
            };
          };
        };
      };
      LList = rtl.freeLoc(LList);
    };
    return Result;
  };
  this.GetRegisteredComponentEditor = function (AClass) {
    var Result = null;
    var cn = "";
    var c = null;
    Result = null;
    if (!(AClass != null)) return Result;
    c = AClass;
    if (!(c != null)) return null;
    do {
      cn = c.$classname;
      Result = rtl.getObject($impl.RegisteredComponentEditorList[cn]);
      if (Result != null) return Result;
      c = c.$ancestor;
    } while (c != null);
    return Result;
  };
  this.IsComponentFromJavaScriptLoaded = function (JavaScriptFile) {
    var Result = false;
    var src = "";
    src = JavaScriptFile;
    var n = src.substr(0, src.lastIndexOf("."))
    return (pas[n]);
    return Result;
  };
  this.IsIgnoredProperty = function (AClass, AProperty) {
    var Result = false;
    var LKey = "";
    var LIgnoredProperty = null;
    Result = false;
    if (!(AClass != null)) {
      LKey = "_" + AProperty;
      LIgnoredProperty = rtl.getObject($impl.RegisteredIgnoredPropertyList[LKey]);
      if (LIgnoredProperty != null) {
        Result = true;
      };
    } else if ((AClass != null) && (AProperty !== "")) {
      LKey = AClass.$classname + "_" + AProperty;
      LIgnoredProperty = rtl.getObject($impl.RegisteredIgnoredPropertyList[LKey]);
      if (LIgnoredProperty != null) {
        Result = true;
      } else {
        LKey = "_" + AProperty;
        LIgnoredProperty = rtl.getObject($impl.RegisteredIgnoredPropertyList[LKey]);
        if (LIgnoredProperty != null) {
          Result = true;
        };
      };
    };
    return Result;
  };
  this.RegisterIntegerConsts = function (IntegerPropertyType, AIdentToInt, AIntToIdent) {
    var LKey = "";
    LKey = IntegerPropertyType.name;
    $impl.RegisteredIdentToIntList[LKey] = $mod.TRegisteredIdentToInt.$create("Create$1",[IntegerPropertyType,AIdentToInt,AIntToIdent]);
  };
  this.GetRegisteredIdentToInt = function (IntegerPropertyType) {
    var Result = null;
    var ri = null;
    var LKey = "";
    Result = null;
    LKey = IntegerPropertyType.name;
    ri = rtl.getObject($impl.RegisteredIdentToIntList[LKey]);
    if (ri != null) Result = ri.FIdentToInt;
    return Result;
  };
  this.GetRegisteredIntToIdent = function (IntegerPropertyType) {
    var Result = null;
    var ri = null;
    var LKey = "";
    Result = null;
    LKey = IntegerPropertyType.name;
    ri = rtl.getObject($impl.RegisteredIdentToIntList[LKey]);
    if (ri != null) Result = ri.FIntToIdent;
    return Result;
  };
  $mod.$implcode = function () {
    rtl.createClass($impl,"TIconDataDict",pas.System.TObject,function () {
      this.FDict = null;
      this.Add = function (AComponentName, AIconData) {
        if (this.FDict === null) $impl.TIconDataDict.FDict = pas["Generics.Collections"].TDictionary$G2.$create("Create$1",[0]);
        this.FDict.AddOrSetValue(pas.SysUtils.TStringHelper.ToUpper.call({get: function () {
            return AComponentName;
          }, set: function (v) {
            rtl.raiseE("EPropReadOnly");
          }}),AIconData);
      };
      this.Find = function (AComponentName) {
        var Result = "";
        if ((this.FDict === null) || !this.FDict.TryGetValue(pas.SysUtils.TStringHelper.ToUpper.call({get: function () {
            return AComponentName;
          }, set: function (v) {
            rtl.raiseE("EPropReadOnly");
          }}),{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }})) Result = "";
        return Result;
      };
    });
    $impl.RegisteredComponentList = null;
    $impl.RegisteredSelectionEditorList = null;
    $impl.RegisteredPropertyEditorList = null;
    $impl.RegisteredIgnoredPropertyList = null;
    $impl.RegisteredLibraryRequirementsEditorList = null;
    $impl.RegisteredComponentEditorList = null;
    $impl.RegisteredIdentToIntList = null;
    $impl.GetPropertyEditors = function (List) {
      var a = Object.keys($impl.RegisteredPropertyEditorList).map(function(key) {
            return [$impl.RegisteredPropertyEditorList[key]];
          });
      
          a.forEach(function(element) {
            List.Add(element[0]);
          });
    };
  };
  $mod.$init = function () {
    (function () {
      rtl.free($impl.TIconDataDict,"FDict");
    })();
    $impl.RegisteredComponentList = Object.create(null);
    $impl.RegisteredSelectionEditorList = Object.create(null);
    $impl.RegisteredPropertyEditorList = Object.create(null);
    $impl.RegisteredIgnoredPropertyList = Object.create(null);
    $impl.RegisteredLibraryRequirementsEditorList = Object.create(null);
    $impl.RegisteredComponentEditorList = Object.create(null);
    $impl.RegisteredIdentToIntList = Object.create(null);
  };
},["SysUtils","Generics.Collections"]);
//# sourceMappingURL=WEBLib.DesignIntf.js.map
