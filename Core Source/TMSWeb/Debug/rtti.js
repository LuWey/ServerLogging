rtl.module("RTTI",["System","JS","RTLConsts","Types","SysUtils","TypInfo"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  rtl.recNewT(this,"TValue",function () {
    this.FTypeInfo = null;
    this.FData = undefined;
    this.FReferenceVariableData = false;
    this.$eq = function (b) {
      return (this.FTypeInfo === b.FTypeInfo) && (this.FData === b.FData) && (this.FReferenceVariableData === b.FReferenceVariableData);
    };
    this.$assign = function (s) {
      this.FTypeInfo = s.FTypeInfo;
      this.FData = s.FData;
      this.FReferenceVariableData = s.FReferenceVariableData;
      return this;
    };
    this.GetData = function () {
      var Result = undefined;
      if (this.FReferenceVariableData) {
        Result = this.FData.get()}
       else Result = this.FData;
      return Result;
    };
    this.GetIsEmpty = function () {
      var Result = false;
      if ((this.FTypeInfo === null) || (this.GetData() == undefined) || (this.GetData() == null)) return true;
      var $tmp = this.FTypeInfo.kind;
      if ($tmp === pas.System.TTypeKind.tkDynArray) {
        Result = this.GetArrayLength() === 0}
       else {
        Result = false;
      };
      return Result;
    };
    this.GetTypeKind = function () {
      var Result = 0;
      if (this.FTypeInfo === null) {
        Result = pas.System.TTypeKind.tkUnknown}
       else Result = this.FTypeInfo.kind;
      return Result;
    };
    this.SetData = function (Value) {
      if (this.FReferenceVariableData) {
        this.FData.set(Value)}
       else this.FData = Value;
    };
    this.Empty = function () {
      var Result = $mod.TValue.$new();
      Result.SetData(null);
      Result.FTypeInfo = null;
      return Result;
    };
    this.FromArray = function (TypeInfo, Values) {
      var Result = $mod.TValue.$new();
      var A = 0;
      var NewArray = null;
      var ElementType = null;
      if (TypeInfo.kind !== pas.System.TTypeKind.tkDynArray) throw pas.SysUtils.EInvalidCast.$create("Create$1",["Type not an array in FromArray!"]);
      ElementType = TypeInfo.eltype;
      NewArray = new Array();
      NewArray.length = rtl.length(Values);
      for (var $l = 0, $end = rtl.length(Values) - 1; $l <= $end; $l++) {
        A = $l;
        NewArray[A] = Values[A].Cast(ElementType,true).AsJSValue();
      };
      Result.SetData(NewArray);
      Result.FTypeInfo = TypeInfo;
      return Result;
    };
    this.FromJSValue = function (v) {
      var Result = $mod.TValue.$new();
      var i = 0;
      var TypeOfValue = null;
      var $tmp = typeof(v);
      if ($tmp === "number") {
        if (pas.JS.isInteger(v)) {
          i = rtl.trunc(v);
          if ((i >= -2147483648) && (i <= 2147483647)) {
            TypeOfValue = rtl.longint}
           else TypeOfValue = rtl.nativeint;
        } else TypeOfValue = rtl.double}
       else if ($tmp === "string") {
        TypeOfValue = rtl.string}
       else if ($tmp === "boolean") {
        TypeOfValue = rtl.boolean}
       else if ($tmp === "object") {
        if (v == null) {
          return $mod.TValue.Empty()}
         else if (pas.JS.isClass(v) && rtl.isExt(v,pas.System.TObject)) {
          TypeOfValue = rtl.getObject(v).$rtti}
         else if (rtl.isObject(v) && rtl.isExt(v,pas.System.TObject)) {
          TypeOfValue = rtl.getObject(v).$rtti}
         else if (pas.JS.isRecord(v)) {
          TypeOfValue = rtl.getObject(v).$rtti}
         else if (Array.isArray(v)) {
          TypeOfValue = rtl.getObject(v).$rtti}
         else throw pas.SysUtils.EInvalidCast.$create("Create$1",["Type not recognized in FromJSValue!"])}
       else {
        TypeOfValue = rtl.jsvalue;
      };
      $mod.TValue.Make(v,TypeOfValue,Result);
      return Result;
    };
    this.FromOrdinal = function (ATypeInfo, AValue) {
      var Result = $mod.TValue.$new();
      if ((ATypeInfo === null) || !(ATypeInfo.kind in rtl.createSet(pas.System.TTypeKind.tkBool,pas.System.TTypeKind.tkEnumeration,pas.System.TTypeKind.tkInteger))) throw pas.SysUtils.EInvalidCast.$create("Create$1",["Invalid type in FromOrdinal"]);
      if (ATypeInfo.kind === pas.System.TTypeKind.tkBool) {
        $mod.TValue.Make(AValue == true,ATypeInfo,Result)}
       else $mod.TValue.Make(rtl.trunc(AValue),ATypeInfo,Result);
      return Result;
    };
    this.Make = function (ABuffer, ATypeInfo, Result) {
      Result.FData = ABuffer;
      Result.FTypeInfo = ATypeInfo;
    };
    this.AsBoolean = function () {
      var Result = false;
      if (this.GetTypeKind() === pas.System.TTypeKind.tkBool) {
        Result = !(this.GetData() == false)}
       else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.AsClass = function () {
      var Result = null;
      if (this.IsClass()) {
        Result = rtl.getObject(this.GetData())}
       else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.AsExtended = function () {
      var Result = 0.0;
      if (rtl.isNumber(this.GetData())) {
        Result = rtl.getNumber(this.GetData())}
       else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.AsInteger = function () {
      var Result = 0;
      if (pas.JS.isInteger(this.GetData())) {
        Result = rtl.trunc(this.GetData())}
       else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.AsInterface = function () {
      var Result = null;
      var k = 0;
      var $ok = false;
      try {
        k = this.GetTypeKind();
        if (k === pas.System.TTypeKind.tkInterface) {
          Result = rtl.setIntfL(Result,rtl.getObject(this.GetData()))}
         else if ((k in rtl.createSet(pas.System.TTypeKind.tkClass,pas.System.TTypeKind.tkClassRef,pas.System.TTypeKind.tkUnknown)) && !rtl.isObject(this.GetData())) {
          Result = rtl.setIntfL(Result,null)}
         else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.AsJSValue = function () {
      var Result = undefined;
      Result = this.GetData();
      return Result;
    };
    this.AsNativeInt = function () {
      var Result = 0;
      if (pas.JS.isInteger(this.GetData())) {
        Result = rtl.trunc(this.GetData())}
       else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.AsObject = function () {
      var Result = null;
      if (this.IsObject() || (this.IsClass() && !rtl.isObject(this.GetData()))) {
        Result = rtl.getObject(this.GetData())}
       else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.AsOrdinal = function () {
      var Result = 0;
      if (this.IsOrdinal()) {
        Result = rtl.trunc(this.GetData())}
       else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.AsString = function () {
      var Result = "";
      if (rtl.isString(this.GetData())) {
        Result = "" + this.GetData()}
       else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.AsUnicodeString = function () {
      var Result = "";
      Result = this.AsString();
      return Result;
    };
    this.Cast = function (ATypeInfo, EmptyAsAnyType) {
      var Result = $mod.TValue.$new();
      if (!this.TryCast(ATypeInfo,Result,EmptyAsAnyType)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      return Result;
    };
    this.IsType = function (ATypeInfo, EmptyAsAnyType) {
      var Result = false;
      var AnyValue = $mod.TValue.$new();
      Result = this.TryCast(ATypeInfo,AnyValue,EmptyAsAnyType);
      return Result;
    };
    this.GetArrayElement = function (aIndex) {
      var Result = $mod.TValue.$new();
      if (this.IsArray()) {
        var $tmp = this.GetTypeKind();
        if ($tmp === pas.System.TTypeKind.tkArray) {
          Result.FTypeInfo = this.FTypeInfo.eltype}
         else if ($tmp === pas.System.TTypeKind.tkDynArray) Result.FTypeInfo = this.FTypeInfo.eltype;
        Result.SetData(this.GetData()[aIndex]);
      } else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.GetArrayLength = function () {
      var Result = 0;
      if (this.IsArray()) return rtl.length(this.GetData());
      throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
      return Result;
    };
    this.IsArray = function () {
      var Result = false;
      var $tmp = this.GetTypeKind();
      if ($tmp === pas.System.TTypeKind.tkDynArray) {
        return true}
       else if ($tmp === pas.System.TTypeKind.tkArray) {
        return rtl.length(this.FTypeInfo.dims) === 1}
       else {
        Result = false;
      };
      return Result;
    };
    this.IsClass = function () {
      var Result = false;
      var k = 0;
      k = this.GetTypeKind();
      Result = (k === pas.System.TTypeKind.tkClassRef) || ((k in rtl.createSet(pas.System.TTypeKind.tkClass,pas.System.TTypeKind.tkUnknown)) && !rtl.isObject(this.GetData()));
      return Result;
    };
    this.IsObject = function () {
      var Result = false;
      Result = this.GetIsEmpty() || (this.FTypeInfo.kind === pas.System.TTypeKind.tkClass);
      return Result;
    };
    this.IsObjectInstance = function () {
      var Result = false;
      Result = (this.FTypeInfo !== null) && (this.FTypeInfo.kind === pas.System.TTypeKind.tkClass);
      return Result;
    };
    this.IsOrdinal = function () {
      var Result = false;
      Result = this.GetIsEmpty() || (this.GetTypeKind() in rtl.createSet(pas.System.TTypeKind.tkBool,pas.System.TTypeKind.tkInteger,pas.System.TTypeKind.tkChar,pas.System.TTypeKind.tkEnumeration));
      return Result;
    };
    this.IsType$2 = function (ATypeInfo) {
      var Result = false;
      Result = ATypeInfo === this.FTypeInfo;
      return Result;
    };
    this.ToString = function () {
      var Result = "";
      var $tmp = this.GetTypeKind();
      if ($tmp === pas.System.TTypeKind.tkString) {
        Result = this.AsString()}
       else if ($tmp === pas.System.TTypeKind.tkInteger) {
        Result = pas.SysUtils.IntToStr(this.AsNativeInt())}
       else if ($tmp === pas.System.TTypeKind.tkBool) {
        Result = pas.SysUtils.BoolToStr(this.AsBoolean(),true)}
       else {
        Result = "";
      };
      return Result;
    };
    this.TryCast = function (ATypeInfo, AResult, EmptyAsAnyType) {
      var $Self = this;
      var Result = false;
      function ConversionAccepted() {
        var Result = {};
        var $tmp = $Self.FTypeInfo.kind;
        if ($tmp === pas.System.TTypeKind.tkString) {
          return rtl.createSet(pas.System.TTypeKind.tkChar,pas.System.TTypeKind.tkString)}
         else if ($tmp === pas.System.TTypeKind.tkDouble) {
          return rtl.createSet(pas.System.TTypeKind.tkInteger,pas.System.TTypeKind.tkDouble)}
         else if ($tmp === pas.System.TTypeKind.tkEnumeration) {
          return rtl.createSet(pas.System.TTypeKind.tkInteger,pas.System.TTypeKind.tkEnumeration)}
         else {
          return rtl.createSet($Self.FTypeInfo.kind);
        };
        return Result;
      };
      if (EmptyAsAnyType && this.GetIsEmpty()) {
        AResult.$assign(this.Empty());
        if (ATypeInfo !== null) {
          AResult.FTypeInfo = ATypeInfo;
          var $tmp = ATypeInfo.kind;
          if ($tmp === pas.System.TTypeKind.tkBool) {
            AResult.SetData(false)}
           else if ($tmp === pas.System.TTypeKind.tkChar) {
            AResult.SetData("\x00")}
           else if ($tmp === pas.System.TTypeKind.tkString) {
            AResult.SetData(pas.SysUtils.EmptyStr)}
           else if (($tmp === pas.System.TTypeKind.tkDouble) || ($tmp === pas.System.TTypeKind.tkEnumeration) || ($tmp === pas.System.TTypeKind.tkInteger)) AResult.SetData(0);
          return true;
        };
      };
      if (!EmptyAsAnyType && (this.FTypeInfo === null)) return false;
      if (this.FTypeInfo === ATypeInfo) {
        AResult.$assign($Self);
        return true;
      };
      if (ATypeInfo === null) return false;
      if (ATypeInfo === $mod.$rtti["TValue"]) {
        this.Make($Self,$mod.$rtti["TValue"],AResult);
        return true;
      };
      Result = ATypeInfo.kind in ConversionAccepted();
      if (Result) {
        AResult.SetData(this.FData);
        AResult.FTypeInfo = ATypeInfo;
      };
      return Result;
    };
    this.SetArrayElement = function (aIndex, AValue) {
      if (this.IsArray()) {
        this.GetData()[aIndex] = AValue.AsJSValue()}
       else throw pas.SysUtils.EInvalidCast.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrInvalidTypecast")]);
    };
    this.SetArrayLength = function (Size) {
      var NewArray = [];
      NewArray = this.GetData();
      NewArray = rtl.arraySetLength(NewArray,undefined,Size);
      this.SetData(NewArray);
    };
    this.From$G1 = function (Value) {
      var Result = $mod.TValue.$new();
      $mod.TValue.Make(Value,rtl.string,Result);
      return Result;
    };
    this.From$G2 = function (Value) {
      var Result = $mod.TValue.$new();
      $mod.TValue.Make(Value,rtl.longint,Result);
      return Result;
    };
    this.From$G3 = function (Value) {
      var Result = $mod.TValue.$new();
      $mod.TValue.Make(Value,rtl.boolean,Result);
      return Result;
    };
    this.From$G4 = function (Value) {
      var Result = $mod.TValue.$new();
      $mod.TValue.Make(Value,rtl.double,Result);
      return Result;
    };
    var $r = $mod.$rtti.$Record("TValue",{});
    $r.addMethod("Empty",5,[],$r,1);
    $r.addMethod("FromArray",5,[["TypeInfo",pas.TypInfo.$rtti["TTypeInfo"]],["Values",pas.System.$rtti["TArray<RTTI.TValue>"],2]],$r,1);
    $r.addMethod("FromJSValue",5,[["v",rtl.jsvalue]],$r,1);
    $r.addMethod("FromOrdinal",5,[["ATypeInfo",pas.TypInfo.$rtti["TTypeInfo"]],["AValue",rtl.jsvalue]],$r,1);
    $r.addMethod("Make",4,[["ABuffer",rtl.jsvalue,2],["ATypeInfo",rtl.pointer,2],["Result",$r,1]],null,1);
    $r.addMethod("AsBoolean",1,[],rtl.boolean);
    $r.addMethod("AsClass",1,[],pas.System.$rtti["TClass"]);
    $r.addMethod("AsExtended",1,[],pas.System.$rtti["Extended"]);
    $r.addMethod("AsInteger",1,[],rtl.longint);
    $r.addMethod("AsInterface",1,[],pas.System.$rtti["IUnknown"]);
    $r.addMethod("AsJSValue",1,[],rtl.jsvalue);
    $r.addMethod("AsNativeInt",1,[],rtl.nativeint);
    $r.addMethod("AsObject",1,[],pas.System.$rtti["TObject"]);
    $r.addMethod("AsOrdinal",1,[],rtl.nativeint);
    $r.addMethod("AsString",1,[],rtl.string);
    $r.addMethod("AsUnicodeString",1,[],rtl.string);
    $r.addMethod("Cast",1,[["ATypeInfo",pas.TypInfo.$rtti["TTypeInfo"]],["EmptyAsAnyType",rtl.boolean,2]],$r);
    $r.addMethod("IsType",1,[["ATypeInfo",pas.TypInfo.$rtti["TTypeInfo"]],["EmptyAsAnyType",rtl.boolean,2]],rtl.boolean);
    $r.addMethod("GetArrayElement",1,[["aIndex",rtl.nativeint]],$r);
    $r.addMethod("GetArrayLength",1,[],rtl.nativeint);
    $r.addMethod("IsArray",1,[],rtl.boolean);
    $r.addMethod("IsClass",1,[],rtl.boolean);
    $r.addMethod("IsObject",1,[],rtl.boolean);
    $r.addMethod("IsObjectInstance",1,[],rtl.boolean);
    $r.addMethod("IsOrdinal",1,[],rtl.boolean);
    $r.addMethod("IsType$2",1,[["ATypeInfo",pas.TypInfo.$rtti["TTypeInfo"]]],rtl.boolean);
    $r.addMethod("ToString",1,[],rtl.string);
    $r.addMethod("TryCast",1,[["ATypeInfo",pas.TypInfo.$rtti["TTypeInfo"]],["AResult",$r,4],["EmptyAsAnyType",rtl.boolean,2]],rtl.boolean);
    $r.addMethod("SetArrayElement",0,[["aIndex",rtl.nativeint],["AValue",$r,2]]);
    $r.addMethod("SetArrayLength",0,[["Size",rtl.nativeint,2]]);
    $r.addProperty("IsEmpty",1,rtl.boolean,"GetIsEmpty","");
    $r.addProperty("Kind",1,pas.System.$rtti["TTypeKind"],"GetTypeKind","");
    $r.addProperty("TypeInfo",0,pas.TypInfo.$rtti["TTypeInfo"],"FTypeInfo","");
  });
  this.$rtti.$Class("TRttiType");
  this.$rtti.$Class("TRttiInstanceType");
  this.$rtti.$Class("TRttiInstanceExternalType");
  rtl.recNewT(this,"TRTTIContext",function () {
    this.$eq = function (b) {
      return true;
    };
    this.$assign = function (s) {
      return this;
    };
    this.Create = function () {
      var Result = $mod.TRTTIContext.$new();
      $impl.TRttiPoolTypes.AcquireContext();
      return Result;
    };
    this.Free = function () {
      $impl.TRttiPoolTypes.ReleaseContext();
    };
    this.FindType = function (AQualifiedName) {
      var Result = null;
      Result = $impl.Pool.FindType(AQualifiedName);
      return Result;
    };
    this.GetType = function (aTypeInfo) {
      var Result = null;
      Result = $impl.Pool.GetType(aTypeInfo);
      return Result;
    };
    this.GetType$1 = function (aClass) {
      var Result = null;
      Result = $impl.Pool.GetType$1(aClass);
      return Result;
    };
    this.GetTypes = function () {
      var Result = [];
      var ModuleName = "";
      var ClassName = "";
      var ModuleTypes = null;
      for (var $in = Object.keys(pas), $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
        ModuleName = $in[$l];
        ModuleTypes = pas[ModuleName].$rtti;
        for (ClassName in ModuleTypes) if (ModuleTypes[ClassName].hasOwnProperty("name") && (ClassName.charAt(0) !== "$")) this.GetType(ModuleTypes[ClassName]);
      };
      Result = Object.values($impl.Pool.FTypes);
      return Result;
    };
    this.KeepContext = function () {
      $impl.TRttiPoolTypes.AcquireContext();
    };
    this.DropContext = function () {
      $impl.TRttiPoolTypes.ReleaseContext();
    };
    var $r = $mod.$rtti.$Record("TRTTIContext",{});
    $r.addMethod("Create",5,[],$r,1);
    $r.addMethod("Free",0,[]);
    $r.addMethod("FindType",1,[["AQualifiedName",rtl.string,2]],$mod.$rtti["TRttiType"]);
    $r.addMethod("GetType",1,[["aTypeInfo",rtl.pointer]],$mod.$rtti["TRttiType"]);
    $r.addMethod("GetType$1",1,[["aClass",pas.System.$rtti["TClass"]]],$mod.$rtti["TRttiType"]);
    $r.addMethod("GetTypes",1,[],pas.System.$rtti["TArray<RTTI.TRttiType>"]);
    $r.addMethod("KeepContext",4,[],null,1);
    $r.addMethod("DropContext",4,[],null,1);
  });
  rtl.createClass(this,"TRttiObject",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FAttributesLoaded = false;
      this.FAttributes = [];
      this.FParent = null;
      this.FHandle = null;
    };
    this.$final = function () {
      this.FAttributes = undefined;
      this.FParent = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.LoadCustomAttributes = function () {
      var Result = [];
      Result = [];
      return Result;
    };
    this.Create$1 = function (AParent, AHandle) {
      this.FParent = AParent;
      this.FHandle = AHandle;
      return this;
    };
    this.Destroy = function () {
      var Attribute = null;
      for (var $in = this.FAttributes, $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
        Attribute = $in[$l];
        Attribute = rtl.freeLoc(Attribute);
      };
      this.FAttributes = [];
      pas.System.TObject.Destroy.call(this);
    };
    this.GetAttributes = function () {
      var Result = [];
      if (!this.FAttributesLoaded) {
        this.FAttributes = this.LoadCustomAttributes();
        this.FAttributesLoaded = true;
      };
      Result = rtl.arrayRef(this.FAttributes);
      return Result;
    };
    this.GetAttribute$1 = function (Attribute) {
      var Result = null;
      var CustomAttribute = null;
      Result = null;
      for (var $in = this.GetAttributes(), $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
        CustomAttribute = $in[$l];
        if (Attribute.isPrototypeOf(CustomAttribute)) return CustomAttribute;
      };
      return Result;
    };
    this.HasAttribute$1 = function (Attribute) {
      var Result = false;
      Result = this.GetAttribute$1(Attribute) !== null;
      return Result;
    };
  });
  rtl.createClass(this,"TRttiNamedObject",this.TRttiObject,function () {
    this.GetName = function () {
      var Result = "";
      Result = "";
      return Result;
    };
  });
  this.TMemberVisibility = {"0": "mvPrivate", mvPrivate: 0, "1": "mvProtected", mvProtected: 1, "2": "mvPublic", mvPublic: 2, "3": "mvPublished", mvPublished: 3};
  this.$rtti.$Enum("TMemberVisibility",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TMemberVisibility});
  rtl.createClass(this,"TRttiMember",this.TRttiNamedObject,function () {
    this.GetMemberTypeInfo = function () {
      var Result = null;
      Result = this.FHandle;
      return Result;
    };
    this.GetName = function () {
      var Result = "";
      Result = this.GetMemberTypeInfo().name;
      return Result;
    };
    this.GetParent = function () {
      var Result = null;
      Result = this.FParent;
      return Result;
    };
    this.GetVisibility = function () {
      var Result = 0;
      Result = $mod.TMemberVisibility.mvPublished;
      return Result;
    };
    this.LoadCustomAttributes = function () {
      var Result = [];
      Result = pas.TypInfo.GetRTTIAttributes(this.GetMemberTypeInfo().attr);
      return Result;
    };
    this.Create$2 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeMember)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiObject.Create$1.call(this,AParent,ATypeInfo);
      return this;
    };
  });
  rtl.createClass(this,"TRttiField",this.TRttiMember,function () {
    this.GetFieldType = function () {
      var Result = null;
      Result = $impl.Pool.GetType(this.GetFieldTypeInfo().typeinfo);
      return Result;
    };
    this.GetFieldTypeInfo = function () {
      var Result = null;
      Result = this.FHandle;
      return Result;
    };
    this.Create$3 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeMemberField)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiMember.Create$2.apply(this,arguments);
      return this;
    };
    this.GetValue = function (Instance) {
      var Result = $mod.TValue.$new();
      Result.$assign($mod.TValue.FromJSValue(Instance[this.GetName()]));
      return Result;
    };
    this.SetValue = function (Instance, AValue) {
      Instance[this.GetName()] = AValue.Cast(this.GetFieldType().GetHandle(),true).AsJSValue();
    };
  });
  rtl.createClass(this,"TRttiParameter",this.TRttiNamedObject,function () {
    this.$init = function () {
      $mod.TRttiNamedObject.$init.call(this);
      this.FParamType = null;
      this.FFlags = {};
      this.FName = "";
    };
    this.$final = function () {
      this.FParamType = undefined;
      this.FFlags = undefined;
      $mod.TRttiNamedObject.$final.call(this);
    };
    this.GetName = function () {
      var Result = "";
      Result = this.FName;
      return Result;
    };
  });
  rtl.createClass(this,"TRttiMethod",this.TRttiMember,function () {
    this.$init = function () {
      $mod.TRttiMember.$init.call(this);
      this.FParameters = [];
      this.FParametersLoaded = false;
    };
    this.$final = function () {
      this.FParameters = undefined;
      $mod.TRttiMember.$final.call(this);
    };
    this.GetIsAsyncCall = function () {
      var Result = false;
      Result = (pas.TypInfo.TProcedureFlag.pfAsync in this.GetProcedureFlags()) || ((this.GetReturnType() != null) && this.GetReturnType().GetIsInstanceExternal() && (this.GetReturnType().GetAsInstanceExternal().GetExternalName() === "Promise"));
      return Result;
    };
    this.GetIsClassMethod = function () {
      var Result = false;
      Result = this.GetMethodTypeInfo().methodkind in rtl.createSet(pas.TypInfo.TMethodKind.mkClassFunction,pas.TypInfo.TMethodKind.mkClassProcedure);
      return Result;
    };
    this.GetIsConstructor = function () {
      var Result = false;
      Result = this.GetMethodTypeInfo().methodkind === pas.TypInfo.TMethodKind.mkConstructor;
      return Result;
    };
    this.GetIsDestructor = function () {
      var Result = false;
      Result = this.GetMethodTypeInfo().methodkind === pas.TypInfo.TMethodKind.mkDestructor;
      return Result;
    };
    this.GetIsExternal = function () {
      var Result = false;
      Result = pas.TypInfo.TProcedureFlag.pfExternal in this.GetProcedureFlags();
      return Result;
    };
    this.GetIsSafeCall = function () {
      var Result = false;
      Result = pas.TypInfo.TProcedureFlag.pfSafeCall in this.GetProcedureFlags();
      return Result;
    };
    this.GetIsStatic = function () {
      var Result = false;
      Result = pas.TypInfo.TProcedureFlag.pfStatic in this.GetProcedureFlags();
      return Result;
    };
    this.GetMethodKind = function () {
      var Result = 0;
      Result = this.GetMethodTypeInfo().methodkind;
      return Result;
    };
    this.GetMethodTypeInfo = function () {
      var Result = null;
      Result = this.FHandle;
      return Result;
    };
    var PROCEDURE_FLAGS = [1,2,4,8,16];
    this.GetProcedureFlags = function () {
      var Result = {};
      var Flag = 0;
      var ProcedureFlags = 0;
      ProcedureFlags = this.GetMethodTypeInfo().procsig.flags;
      Result = {};
      for (Flag = 0; Flag <= 4; Flag++) if (rtl.and(PROCEDURE_FLAGS[Flag],ProcedureFlags) > 0) Result = rtl.unionSet(Result,rtl.createSet(Flag));
      return Result;
    };
    this.GetReturnType = function () {
      var Result = null;
      Result = $impl.Pool.GetType(this.GetMethodTypeInfo().procsig.resulttype);
      return Result;
    };
    var FLAGS_CONVERSION = [1,2,4,8,16,32];
    this.LoadParameters = function () {
      var A = 0;
      var Flag = 0;
      var Param = null;
      var RttiParam = null;
      var MethodParams = [];
      this.FParametersLoaded = true;
      MethodParams = this.GetMethodTypeInfo().procsig.params;
      this.FParameters = rtl.arraySetLength(this.FParameters,null,rtl.length(MethodParams));
      for (var $l = 0, $end = rtl.length(this.FParameters) - 1; $l <= $end; $l++) {
        A = $l;
        Param = MethodParams[A];
        RttiParam = $mod.TRttiParameter.$create("Create$1",[this,Param]);
        RttiParam.FName = Param.name;
        RttiParam.FParamType = $impl.Pool.GetType(Param.typeinfo);
        for (Flag = 0; Flag <= 5; Flag++) if (rtl.and(FLAGS_CONVERSION[Flag],Param.flags) > 0) RttiParam.FFlags = rtl.unionSet(RttiParam.FFlags,rtl.createSet(Flag));
        this.FParameters[A] = RttiParam;
      };
    };
    this.GetIsVarArgs = function () {
      var Result = false;
      Result = pas.TypInfo.TProcedureFlag.pfVarargs in this.GetProcedureFlags();
      return Result;
    };
    this.GetParameters = function () {
      var Result = [];
      if (!this.FParametersLoaded) this.LoadParameters();
      Result = rtl.arrayRef(this.FParameters);
      return Result;
    };
    this.Invoke = function (Instance, Args) {
      var Result = $mod.TValue.$new();
      var A = 0;
      var AArgs = [];
      if (this.GetReturnType() != null) Result.FTypeInfo = this.GetReturnType().GetHandle();
      AArgs = rtl.arraySetLength(AArgs,undefined,rtl.length(Args));
      for (var $l = 0, $end = rtl.length(Args) - 1; $l <= $end; $l++) {
        A = $l;
        AArgs[A] = Args[A].AsJSValue();
      };
      Result.SetData(Instance.AsJSValue()[this.GetName()].apply(Instance.AsJSValue(),AArgs));
      return Result;
    };
    this.Invoke$1 = function (Instance, Args) {
      var Result = $mod.TValue.$new();
      var v = $mod.TValue.$new();
      $mod.TValue.Make(Instance,Instance.$class.ClassInfo(),v);
      Result.$assign(this.Invoke(v,Args));
      return Result;
    };
    this.Invoke$2 = function (aClass, Args) {
      var Result = $mod.TValue.$new();
      var v = $mod.TValue.$new();
      $mod.TValue.Make(aClass,aClass.ClassInfo(),v);
      Result.$assign(this.Invoke(v,Args));
      return Result;
    };
  });
  rtl.createClass(this,"TRttiProperty",this.TRttiMember,function () {
    this.GetPropertyTypeInfo = function () {
      var Result = null;
      Result = this.FHandle;
      return Result;
    };
    this.GetPropertyType = function () {
      var Result = null;
      Result = $impl.Pool.GetType(this.GetPropertyTypeInfo().typeinfo);
      return Result;
    };
    this.GetIsWritable = function () {
      var Result = false;
      Result = this.GetPropertyTypeInfo().setter !== "";
      return Result;
    };
    this.GetIsReadable = function () {
      var Result = false;
      Result = this.GetPropertyTypeInfo().getter !== "";
      return Result;
    };
    this.GetVisibility = function () {
      var Result = 0;
      Result = $mod.TMemberVisibility.mvPublished;
      return Result;
    };
    this.Create$3 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeMemberProperty)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiMember.Create$2.apply(this,arguments);
      return this;
    };
    this.GetValue = function (Instance) {
      var Result = $mod.TValue.$new();
      $mod.TValue.Make(pas.TypInfo.GetJSValueProp$1(Instance,this.GetPropertyTypeInfo()),this.GetPropertyType().GetHandle(),Result);
      return Result;
    };
    this.SetValue = function (Instance, AValue) {
      pas.TypInfo.SetJSValueProp$1(Instance,this.GetPropertyTypeInfo(),AValue.Cast(this.GetPropertyType().GetHandle(),true).AsJSValue());
    };
  });
  rtl.createClass(this,"TRttiInstanceProperty",this.TRttiProperty,function () {
  });
  rtl.createClass(this,"TRttiType",this.TRttiNamedObject,function () {
    this.GetAsInstance = function () {
      var Result = null;
      Result = rtl.as(this,$mod.TRttiInstanceType);
      return Result;
    };
    this.GetAsInstanceExternal = function () {
      var Result = null;
      Result = rtl.as(this,$mod.TRttiInstanceExternalType);
      return Result;
    };
    this.GetHandle = function () {
      var Result = null;
      Result = this.FHandle;
      return Result;
    };
    this.GetQualifiedName = function () {
      var Result = "";
      Result = pas.SysUtils.Format("%s.%s",pas.System.VarRecs(18,this.GetHandle().$module.$name,18,this.GetName()));
      return Result;
    };
    this.GetName = function () {
      var Result = "";
      Result = this.GetHandle().name;
      return Result;
    };
    this.GetIsInstance = function () {
      var Result = false;
      Result = $mod.TRttiInstanceType.isPrototypeOf(this);
      return Result;
    };
    this.GetIsInstanceExternal = function () {
      var Result = false;
      Result = $mod.TRttiInstanceExternalType.isPrototypeOf(this);
      return Result;
    };
    this.GetIsOrdinal = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetIsRecord = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetIsSet = function () {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetTypeKind = function () {
      var Result = 0;
      Result = this.GetHandle().kind;
      return Result;
    };
    this.GetBaseType = function () {
      var Result = null;
      Result = null;
      return Result;
    };
    this.LoadCustomAttributes = function () {
      var Result = [];
      Result = pas.TypInfo.GetRTTIAttributes(this.GetHandle().attr);
      return Result;
    };
    this.GetField = function (AName) {
      var Result = null;
      var AField = null;
      Result = null;
      for (var $in = this.GetFields(), $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
        AField = $in[$l];
        if (AField.GetName() === AName) return AField;
      };
      return Result;
    };
    this.GetFields = function () {
      var Result = [];
      Result = [];
      return Result;
    };
    this.GetMethods = function () {
      var Result = [];
      Result = [];
      return Result;
    };
    this.GetMethods$1 = function (aName) {
      var Result = [];
      Result = [];
      return Result;
    };
    this.GetMethod = function (aName) {
      var Result = null;
      Result = null;
      if (aName === "") ;
      return Result;
    };
    this.GetProperty = function (AName) {
      var Result = null;
      Result = null;
      if (AName === "") ;
      return Result;
    };
    this.GetProperties = function () {
      var Result = [];
      Result = [];
      return Result;
    };
    this.GetDeclaredProperties = function () {
      var Result = [];
      Result = [];
      return Result;
    };
    this.GetDeclaredMethods = function () {
      var Result = [];
      Result = [];
      return Result;
    };
    this.GetDeclaredFields = function () {
      var Result = [];
      Result = [];
      return Result;
    };
  });
  this.$rtti.$ClassRef("TRttiTypeClass",{instancetype: this.$rtti["TRttiType"]});
  rtl.createClass(this,"TRttiStructuredType",this.TRttiType,function () {
    this.$init = function () {
      $mod.TRttiType.$init.call(this);
      this.FFields = [];
      this.FMethods = [];
      this.FProperties = [];
    };
    this.$final = function () {
      this.FFields = undefined;
      this.FMethods = undefined;
      this.FProperties = undefined;
      $mod.TRttiType.$final.call(this);
    };
    this.GetAncestor = function () {
      var Result = null;
      Result = null;
      return Result;
    };
    this.GetStructTypeInfo = function () {
      var Result = null;
      Result = this.GetHandle();
      return Result;
    };
    this.Create$1 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeInfoStruct)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiObject.Create$1.apply(this,arguments);
      return this;
    };
    this.Destroy = function () {
      var Method = null;
      var Prop = null;
      for (var $in = this.FMethods, $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
        Method = $in[$l];
        Method = rtl.freeLoc(Method);
      };
      for (var $in1 = this.FProperties, $l1 = 0, $end1 = rtl.length($in1) - 1; $l1 <= $end1; $l1++) {
        Prop = $in1[$l1];
        Prop = rtl.freeLoc(Prop);
      };
      $mod.TRttiObject.Destroy.call(this);
    };
    this.GetDeclaredFields = function () {
      var Result = [];
      var A = 0;
      var FieldCount = 0;
      if (!(rtl.length(this.FFields) > 0)) {
        FieldCount = this.GetStructTypeInfo().fields.length;
        this.FFields = rtl.arraySetLength(this.FFields,null,FieldCount);
        for (var $l = 0, $end = FieldCount - 1; $l <= $end; $l++) {
          A = $l;
          this.FFields[A] = $mod.TRttiField.$create("Create$3",[this,this.GetStructTypeInfo().getField(A)]);
        };
      };
      Result = rtl.arrayRef(this.FFields);
      return Result;
    };
    this.GetDeclaredMethods = function () {
      var Result = [];
      var A = 0;
      var MethodCount = 0;
      if (!(rtl.length(this.FMethods) > 0)) {
        MethodCount = this.GetStructTypeInfo().methods.length;
        this.FMethods = rtl.arraySetLength(this.FMethods,null,MethodCount);
        for (var $l = 0, $end = MethodCount - 1; $l <= $end; $l++) {
          A = $l;
          this.FMethods[A] = $mod.TRttiMethod.$create("Create$2",[this,this.GetStructTypeInfo().getMethod(A)]);
        };
      };
      Result = rtl.arrayRef(this.FMethods);
      return Result;
    };
    this.GetDeclaredProperties = function () {
      var Result = [];
      var A = 0;
      var PropCount = 0;
      if (!(rtl.length(this.FProperties) > 0)) {
        PropCount = this.GetStructTypeInfo().properties.length;
        this.FProperties = rtl.arraySetLength(this.FProperties,null,PropCount);
        for (var $l = 0, $end = PropCount - 1; $l <= $end; $l++) {
          A = $l;
          this.FProperties[A] = $mod.TRttiProperty.$create("Create$3",[this,this.GetStructTypeInfo().getProperty(A)]);
        };
      };
      Result = rtl.arrayRef(this.FProperties);
      return Result;
    };
    this.GetFields = function () {
      var Result = [];
      var A = 0;
      var Start = 0;
      var BaseClass = null;
      var Declared = [];
      BaseClass = this;
      Result = [];
      while (BaseClass != null) {
        Declared = BaseClass.GetDeclaredFields();
        Start = rtl.length(Result);
        Result = rtl.arraySetLength(Result,null,Start + rtl.length(Declared));
        for (var $l = 0, $end = rtl.length(Declared) - 1; $l <= $end; $l++) {
          A = $l;
          Result[Start + A] = Declared[A];
        };
        BaseClass = BaseClass.GetAncestor();
      };
      return Result;
    };
    this.GetMethod = function (aName) {
      var Result = null;
      var Method = null;
      for (var $in = this.GetMethods(), $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
        Method = $in[$l];
        if (aName === Method.GetName()) return Method;
      };
      return Result;
    };
    this.GetMethods = function () {
      var Result = [];
      var A = 0;
      var Start = 0;
      var BaseClass = null;
      var Declared = [];
      BaseClass = this;
      Result = [];
      while (BaseClass != null) {
        Declared = BaseClass.GetDeclaredMethods();
        Start = rtl.length(Result);
        Result = rtl.arraySetLength(Result,null,Start + rtl.length(Declared));
        for (var $l = 0, $end = rtl.length(Declared) - 1; $l <= $end; $l++) {
          A = $l;
          Result[Start + A] = Declared[A];
        };
        BaseClass = BaseClass.GetAncestor();
      };
      return Result;
    };
    this.GetMethods$1 = function (aName) {
      var Result = [];
      var Method = null;
      var MethodCount = 0;
      MethodCount = 0;
      for (var $in = this.GetMethods(), $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
        Method = $in[$l];
        if (aName === Method.GetName()) MethodCount += 1;
      };
      Result = rtl.arraySetLength(Result,null,MethodCount);
      for (var $in1 = this.GetMethods(), $l1 = 0, $end1 = rtl.length($in1) - 1; $l1 <= $end1; $l1++) {
        Method = $in1[$l1];
        if (aName === Method.GetName()) {
          MethodCount -= 1;
          Result[MethodCount] = Method;
        };
      };
      return Result;
    };
    this.GetProperties = function () {
      var Result = [];
      var A = 0;
      var Start = 0;
      var BaseClass = null;
      var Declared = [];
      BaseClass = this;
      Result = [];
      while (BaseClass != null) {
        Declared = BaseClass.GetDeclaredProperties();
        Start = rtl.length(Result);
        Result = rtl.arraySetLength(Result,null,Start + rtl.length(Declared));
        for (var $l = 0, $end = rtl.length(Declared) - 1; $l <= $end; $l++) {
          A = $l;
          Result[Start + A] = Declared[A];
        };
        BaseClass = BaseClass.GetAncestor();
      };
      return Result;
    };
    this.GetProperty = function (AName) {
      var Result = null;
      var Prop = null;
      var lName = "";
      lName = pas.SysUtils.LowerCase(AName);
      for (var $in = this.GetProperties(), $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
        Prop = $in[$l];
        if (pas.SysUtils.LowerCase(Prop.GetName()) === lName) return Prop;
      };
      Result = null;
      return Result;
    };
  });
  rtl.createClass(this,"TRttiInstanceType",this.TRttiStructuredType,function () {
    this.GetAncestorType = function () {
      var Result = null;
      Result = rtl.as(this.FParent,$mod.TRttiInstanceType);
      return Result;
    };
    this.GetClassTypeInfo = function () {
      var Result = null;
      Result = this.GetHandle();
      return Result;
    };
    this.GetMetaClassType = function () {
      var Result = null;
      Result = this.GetClassTypeInfo().class;
      return Result;
    };
    this.GetAncestor = function () {
      var Result = null;
      Result = this.GetAncestorType();
      return Result;
    };
    this.GetBaseType = function () {
      var Result = null;
      Result = this.GetAncestorType();
      return Result;
    };
    this.Create$1 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeInfoClass)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiStructuredType.Create$1.apply(this,arguments);
      return this;
    };
  });
  rtl.createClass(this,"TRttiInterfaceType",this.TRttiStructuredType,function () {
    this.GetAncestorType = function () {
      var Result = null;
      Result = rtl.as($impl.Pool.GetType(this.GetInterfaceTypeInfo().ancestor),$mod.TRttiInterfaceType);
      return Result;
    };
    this.GetGUID = function () {
      var Result = pas.System.TGuid.$new();
      var GUID = "";
      GUID = this.GetInterfaceTypeInfo().interface.$guid;
      pas.SysUtils.TryStringToGUID(GUID,Result);
      return Result;
    };
    this.GetInterfaceTypeInfo = function () {
      var Result = null;
      Result = this.GetHandle();
      return Result;
    };
    this.GetAncestor = function () {
      var Result = null;
      Result = this.GetAncestorType();
      return Result;
    };
    this.GetBaseType = function () {
      var Result = null;
      Result = this.GetAncestorType();
      return Result;
    };
    this.Create$1 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeInfoInterface)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiStructuredType.Create$1.apply(this,arguments);
      return this;
    };
  });
  rtl.createClass(this,"TRttiRecordType",this.TRttiStructuredType,function () {
    this.GetRecordTypeInfo = function () {
      var Result = null;
      Result = this.GetHandle();
      return Result;
    };
    this.GetIsRecord = function () {
      var Result = false;
      Result = true;
      return Result;
    };
    this.Create$1 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeInfoRecord)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiStructuredType.Create$1.apply(this,arguments);
      return this;
    };
  });
  rtl.createClass(this,"TRttiClassRefType",this.TRttiType,function () {
    this.GetClassRefTypeInfo = function () {
      var Result = null;
      Result = this.GetHandle();
      return Result;
    };
    this.GetInstanceType = function () {
      var Result = null;
      Result = rtl.as($impl.Pool.GetType(this.GetClassRefTypeInfo().instancetype),$mod.TRttiInstanceType);
      return Result;
    };
    this.GetMetaclassType = function () {
      var Result = null;
      Result = this.GetInstanceType().GetMetaClassType();
      return Result;
    };
    this.Create$1 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeInfoClassRef)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiObject.Create$1.apply(this,arguments);
      return this;
    };
  });
  rtl.createClass(this,"TRttiInstanceExternalType",this.TRttiType,function () {
    this.GetAncestor = function () {
      var Result = null;
      Result = rtl.as($impl.Pool.GetType(this.GetExternalClassTypeInfo().ancestor),$mod.TRttiInstanceExternalType);
      return Result;
    };
    this.GetExternalName = function () {
      var Result = "";
      Result = this.GetExternalClassTypeInfo().jsclass;
      return Result;
    };
    this.GetExternalClassTypeInfo = function () {
      var Result = null;
      Result = this.GetHandle();
      return Result;
    };
    this.Create$1 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeInfoExtClass)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiObject.Create$1.apply(this,arguments);
      return this;
    };
  });
  rtl.createClass(this,"TRttiOrdinalType",this.TRttiType,function () {
    this.GetMaxValue = function () {
      var Result = 0;
      Result = this.GetOrdinalTypeInfo().maxvalue;
      return Result;
    };
    this.GetMinValue = function () {
      var Result = 0;
      Result = this.GetOrdinalTypeInfo().minvalue;
      return Result;
    };
    this.GetOrdType = function () {
      var Result = 0;
      Result = this.GetOrdinalTypeInfo().ordtype;
      return Result;
    };
    this.GetOrdinalTypeInfo = function () {
      var Result = null;
      Result = this.GetHandle();
      return Result;
    };
    this.Create$1 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeInfoInteger)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiObject.Create$1.apply(this,arguments);
      return this;
    };
  });
  rtl.createClass(this,"TRttiEnumerationType",this.TRttiOrdinalType,function () {
    this.GetEnumerationTypeInfo = function () {
      var Result = null;
      Result = this.GetHandle();
      return Result;
    };
    this.Create$1 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeInfoEnum)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiOrdinalType.Create$1.apply(this,arguments);
      return this;
    };
    this.GetNames = function () {
      var Result = [];
      var A = 0;
      var NamesSize = 0;
      NamesSize = pas.TypInfo.GetEnumNameCount(this.GetEnumerationTypeInfo());
      Result = rtl.arraySetLength(Result,"",NamesSize);
      for (var $l = 0, $end = NamesSize - 1; $l <= $end; $l++) {
        A = $l;
        Result[A] = this.GetEnumerationTypeInfo().enumtype[A + this.GetMinValue()];
      };
      return Result;
    };
  });
  rtl.createClass(this,"TRttiDynamicArrayType",this.TRttiType,function () {
    this.GetDynArrayTypeInfo = function () {
      var Result = null;
      Result = this.GetHandle();
      return Result;
    };
    this.GetElementType = function () {
      var Result = null;
      Result = $impl.Pool.GetType(this.GetDynArrayTypeInfo().eltype);
      return Result;
    };
    this.Create$1 = function (AParent, ATypeInfo) {
      if (!rtl.isExt(ATypeInfo,rtl.tTypeInfoDynArray)) throw pas.SysUtils.EInvalidCast.$create("Create$1",[""]);
      $mod.TRttiObject.Create$1.apply(this,arguments);
      return this;
    };
  });
  this.$rtti.$RefToProcVar("TVirtualInterfaceInvokeEvent",{procsig: rtl.newTIProcSig([["Method",this.$rtti["TRttiMethod"]],["Args",pas.System.$rtti["TArray<RTTI.TValue>"],2],["Result",this.$rtti["TValue"],4]])});
  this.$rtti.$RefToProcVar("TVirtualInterfaceInvokeEventJS",{procsig: rtl.newTIProcSig([["aMethodName",rtl.string,2],["Args",pas.Types.$rtti["TJSValueDynArray"],2]],rtl.jsvalue)});
  rtl.createClass(this,"TVirtualInterface",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FContext = $mod.TRTTIContext.$new();
      this.FInterfaceType = null;
      this.FOnInvoke = null;
      this.FOnInvokeJS = null;
    };
    this.$final = function () {
      this.FContext = undefined;
      this.FInterfaceType = undefined;
      this.FOnInvoke = undefined;
      this.FOnInvokeJS = undefined;
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.Invoke = function (MethodName, Args) {
      var $Self = this;
      var Result = undefined;
      var Method = null;
      var Return = $mod.TValue.$new();
      function GenerateParams() {
        var Result = [];
        var A = 0;
        var Param = null;
        var Parameters = [];
        Parameters = Method.GetParameters();
        Result = rtl.arraySetLength(Result,$mod.TValue,rtl.length(Parameters));
        for (var $l = 0, $end = rtl.length(Parameters) - 1; $l <= $end; $l++) {
          A = $l;
          Param = Parameters[A];
          $mod.TValue.Make(Args[A],Param.FParamType.GetHandle(),Result[A]);
          Result[A].FReferenceVariableData = (pas.TypInfo.TParamFlag.pfVar in Param.FFlags) || (pas.TypInfo.TParamFlag.pfOut in Param.FFlags);
        };
        return Result;
      };
      if (this.FOnInvokeJS != null) {
        Result = this.FOnInvokeJS(MethodName,Args)}
       else {
        Method = this.FInterfaceType.GetMethod(MethodName);
        this.FOnInvoke(Method,GenerateParams(),Return);
        Result = Return.AsJSValue();
      };
      return Result;
    };
    this.Create$1 = function (InterfaceTypeInfo) {
      var $Self = this;
      var SelfInterfaceObject = null;
      var InterfaceObject = null;
      var Method = null;
      var MethodName = "";
      this.FContext.$assign($mod.TRTTIContext.Create());
      this.FInterfaceType = rtl.as(this.FContext.GetType(InterfaceTypeInfo),$mod.TRttiInterfaceType);
      if (this.FInterfaceType.GetInterfaceTypeInfo().interface.$kind !== "com") throw pas.SysUtils.EInvalidCast.$create("Create");
      InterfaceObject = Object.create(this.FInterfaceType.GetInterfaceTypeInfo().interface);
      InterfaceObject.$o = $Self;
      for (var $in = this.FInterfaceType.GetMethods(), $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
        Method = $in[$l];
        let MethodName = Method.GetName();
        InterfaceObject[MethodName] = function () {
          var Result = undefined;
          Result = this.$o.Invoke(MethodName,arguments);
          return Result;
        };
      };
      InterfaceObject["_AddRef"] = rtl.createCallback($Self,"_AddRef");
      InterfaceObject["_Release"] = rtl.createCallback($Self,"_Release");
      InterfaceObject["QueryInterface"] = rtl.createCallback($Self,"QueryInterface");
      SelfInterfaceObject = $Self;
      SelfInterfaceObject.$intfmaps = new Object();
      SelfInterfaceObject.$intfmaps[pas.SysUtils.GUIDToString(rtl.getIntfGUIDR(pas.System.IUnknown))] = InterfaceObject;
      SelfInterfaceObject.$intfmaps[pas.SysUtils.TGuidHelper.ToString.call(this.FInterfaceType.GetGUID(),false)] = new Object();
      SelfInterfaceObject.$interfaces = new Object();
      SelfInterfaceObject.$interfaces[pas.SysUtils.TGuidHelper.ToString.call(this.FInterfaceType.GetGUID(),false)] = InterfaceObject;
      return this;
    };
    this.Create$2 = function (InterfaceTypeInfo, InvokeEvent) {
      this.Create$1(InterfaceTypeInfo);
      this.FOnInvoke = InvokeEvent;
      return this;
    };
    this.Create$3 = function (InterfaceTypeInfo, InvokeEvent) {
      this.Create$1(InterfaceTypeInfo);
      this.FOnInvokeJS = InvokeEvent;
      return this;
    };
    this.Destroy = function () {
      this.FContext.Free();
      pas.System.TObject.Destroy.call(this);
    };
    this.QueryInterface = function (iid, obj) {
      var Result = 0;
      Result = pas.System.TInterfacedObject.QueryInterface.call(this,iid,obj);
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.CreateVirtualCorbaInterface = function (InterfaceTypeInfo, MethodImplementation, IntfVar) {
    var IntfType = InterfaceTypeInfo.interface;
    var i = Object.create(IntfType);
    var o = { $name: "virtual", $fullname: "virtual" };
    i.$o = o;
    do {
      var names = IntfType.$names;
      if (!names) break;
      for (var j=0; j<names.length; j++){
        let fnname = names[j];
        i[fnname] = function(){ return MethodImplementation(fnname,arguments); };
      }
      IntfType = Object.getPrototypeOf(IntfType);
    } while(IntfType!=null);
    IntfVar.set(i);
  };
  this.Invoke = function (ACodeAddress, AArgs, ACallConv, AResultType, AIsStatic, AIsConstructor) {
    var Result = $mod.TValue.$new();
    if (ACallConv === pas.TypInfo.TCallConv.ccReg) ;
    if (AIsStatic) ;
    if (AIsConstructor) throw pas.JS.EJS.$create("Create$1",["not supported"]);
    if (rtl.isFunction(ACodeAddress)) {
      Result.FData = ACodeAddress.apply(null,AArgs);
      if (AResultType !== null) {
        Result.FTypeInfo = AResultType}
       else Result.FTypeInfo = rtl.jsvalue;
    } else throw pas.JS.EJS.$create("Create$1",[rtl.getResStr($mod,"SErrInvokeInvalidCodeAddr")]);
    return Result;
  };
  $mod.$resourcestrings = {SErrInvokeInvalidCodeAddr: {org: "CodeAddress is not a function"}, SErrTypeIsNotEnumerated: {org: "Type %s is not an enumerated type"}};
  $mod.$implcode = function () {
    rtl.createClass($impl,"TRttiPoolTypes",pas.System.TObject,function () {
      this.$init = function () {
        pas.System.TObject.$init.call(this);
        this.FReferenceCount = 0;
        this.FTypes = null;
      };
      this.$final = function () {
        this.FTypes = undefined;
        pas.System.TObject.$final.call(this);
      };
      this.Create$1 = function () {
        pas.System.TObject.Create.call(this);
        this.FTypes = new Object();
        return this;
      };
      this.Destroy = function () {
        var Key = "";
        var RttiObject = null;
        for (Key in this.FTypes) if (this.FTypes.hasOwnProperty(Key)) {
          RttiObject = rtl.getObject(this.FTypes[Key]);
          RttiObject = rtl.freeLoc(RttiObject);
        };
      };
      this.FindType = function (AQualifiedName) {
        var Result = null;
        var ModuleName = "";
        var TypeName = "";
        var Module = null;
        var TypeFound = null;
        if (this.FTypes.hasOwnProperty(AQualifiedName)) {
          Result = rtl.getObject(this.FTypes[AQualifiedName])}
         else {
          Result = null;
          for (var $in = Object.keys(pas), $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
            ModuleName = $in[$l];
            if (pas.SysUtils.TStringHelper.StartsWith.call({get: function () {
                return AQualifiedName;
              }, set: function (v) {
                rtl.raiseE("EPropReadOnly");
              }},ModuleName + ".")) {
              Module = pas[ModuleName];
              TypeName = pas.System.Copy(AQualifiedName,ModuleName.length + 2,AQualifiedName.length);
              if (Module.$rtti.hasOwnProperty(TypeName)) {
                TypeFound = Module.$rtti[TypeName];
                return this.GetType(TypeFound);
              };
            };
          };
        };
        return Result;
      };
      this.GetType = function (ATypeInfo) {
        var Result = null;
        var RttiTypeClass = [null,$mod.TRttiOrdinalType,$mod.TRttiOrdinalType,$mod.TRttiType,$mod.TRttiEnumerationType,$mod.TRttiType,$mod.TRttiType,$mod.TRttiType,$mod.TRttiType,$mod.TRttiType,$mod.TRttiType,$mod.TRttiDynamicArrayType,$mod.TRttiRecordType,$mod.TRttiInstanceType,$mod.TRttiClassRefType,$mod.TRttiType,$mod.TRttiType,$mod.TRttiType,$mod.TRttiInterfaceType,$mod.TRttiType,$mod.TRttiInstanceExternalType];
        var Name = "";
        var Parent = null;
        if (pas.JS.isNull(ATypeInfo) || pas.JS.isUndefined(ATypeInfo)) return null;
        Name = ATypeInfo.name;
        if (rtl.isModule(ATypeInfo.$module)) Name = ATypeInfo.$module.$name + "." + Name;
        if (this.FTypes.hasOwnProperty(Name)) {
          Result = rtl.getObject(this.FTypes[Name])}
         else {
          if ((ATypeInfo.kind in rtl.createSet(pas.System.TTypeKind.tkClass,pas.System.TTypeKind.tkInterface,pas.System.TTypeKind.tkHelper,pas.System.TTypeKind.tkExtClass)) && ATypeInfo.hasOwnProperty("ancestor")) {
            Parent = this.GetType(ATypeInfo["ancestor"])}
           else Parent = null;
          Result = RttiTypeClass[ATypeInfo.kind].$create("Create$1",[Parent,ATypeInfo]);
          this.FTypes[Name] = Result;
        };
        return Result;
      };
      this.GetType$1 = function (AClass) {
        var Result = null;
        if (AClass === null) return null;
        Result = this.GetType(AClass.$rtti);
        return Result;
      };
      this.AcquireContext = function () {
        var Result = null;
        if (!($impl.Pool != null)) $impl.Pool = $impl.TRttiPoolTypes.$create("Create$1");
        Result = $impl.Pool.FTypes;
        $impl.Pool.FReferenceCount += 1;
        return Result;
      };
      this.ReleaseContext = function () {
        $impl.Pool.FReferenceCount -= 1;
        if ($impl.Pool.FReferenceCount === 0) pas.SysUtils.FreeAndNil({p: $impl, get: function () {
            return this.p.Pool;
          }, set: function (v) {
            this.p.Pool = v;
          }});
      };
    });
    $impl.Pool = null;
  };
},[]);
//# sourceMappingURL=rtti.js.map
