rtl.module("Generics.Collections",["System","Classes","SysUtils","RTLConsts","Types","JS","Generics.Strings","Generics.Defaults"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  $mod.$rtti.$Class("TEnumerator<Generics.Collections.TPair<Generics.Collections.TDictionary.TKey,Generics.Collections.TDictionary.TValue>>");
  $mod.$rtti.$Class("TEnumerable<Generics.Collections.TPair<Generics.Collections.TDictionary.TKey,Generics.Collections.TDictionary.TValue>>");
  $mod.$rtti.$Class("TEnumerator<Generics.Collections.TPair<Generics.Collections.TObjectDictionary.TKey,Generics.Collections.TObjectDictionary.TValue>>");
  $mod.$rtti.$Class("TEnumerable<Generics.Collections.TPair<Generics.Collections.TObjectDictionary.TKey,Generics.Collections.TObjectDictionary.TValue>>");
  $mod.$rtti.$Class("TEnumerator<Generics.Collections.TPair<System.String,System.String>>");
  $mod.$rtti.$Class("TEnumerable<Generics.Collections.TPair<System.String,System.String>>");
  $mod.$rtti.$Class("TEnumerator<System.String>");
  $mod.$rtti.$Class("TEnumerable<System.String>");
  $mod.$rtti.$Class("TDictionary<System.String,System.String>");
  this.TCollectionNotification = {"0": "cnAdded", cnAdded: 0, "1": "cnRemoved", cnRemoved: 1, "2": "cnExtracted", cnExtracted: 2};
  this.$rtti.$Enum("TCollectionNotification",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TCollectionNotification});
  rtl.recNewT(this,"TBinarySearchResult",function () {
    this.FoundIndex = 0;
    this.CandidateIndex = 0;
    this.CompareResult = 0;
    this.$eq = function (b) {
      return (this.FoundIndex === b.FoundIndex) && (this.CandidateIndex === b.CandidateIndex) && (this.CompareResult === b.CompareResult);
    };
    this.$assign = function (s) {
      this.FoundIndex = s.FoundIndex;
      this.CandidateIndex = s.CandidateIndex;
      this.CompareResult = s.CompareResult;
      return this;
    };
    var $r = $mod.$rtti.$Record("TBinarySearchResult",{});
    $r.addField("FoundIndex",rtl.nativeint);
    $r.addField("CandidateIndex",rtl.nativeint);
    $r.addField("CompareResult",rtl.nativeint);
  });
  this.TDirection = {"0": "FromBeginning", FromBeginning: 0, "1": "fromEnd", fromEnd: 1};
  this.$rtti.$Enum("TDirection",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TDirection});
  rtl.createClass(this,"EDictionary",pas.SysUtils.Exception,function () {
  });
  rtl.createClass(this,"TEnumerator$G12",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<Generics.Collections.TPair<Generics.Collections.TDictionary.TKey,Generics.Collections.TDictionary.TValue>>");
  rtl.createClass(this,"TEnumerable$G11",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push($mod.TPair$G1.$clone(LEnumerator.DoGetCurrent()));
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<Generics.Collections.TPair<Generics.Collections.TDictionary.TKey,Generics.Collections.TDictionary.TValue>>");
  this.TDictionaryOwnership = {"0": "doOwnsKeys", doOwnsKeys: 0, "1": "doOwnsValues", doOwnsValues: 1};
  this.$rtti.$Enum("TDictionaryOwnership",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TDictionaryOwnership});
  this.$rtti.$Set("TDictionaryOwnerships",{comptype: this.$rtti["TDictionaryOwnership"]});
  rtl.createClass(this,"TEnumerator$G15",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<Generics.Collections.TPair<Generics.Collections.TObjectDictionary.TKey,Generics.Collections.TObjectDictionary.TValue>>");
  rtl.createClass(this,"TEnumerable$G14",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push($mod.TPair$G2.$clone(LEnumerator.DoGetCurrent()));
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<Generics.Collections.TPair<Generics.Collections.TObjectDictionary.TKey,Generics.Collections.TObjectDictionary.TValue>>");
  rtl.recNewT(this,"TPair$G3",function () {
    this.Key = "";
    this.Value = "";
    this.$eq = function (b) {
      return (this.Key === b.Key) && (this.Value === b.Value);
    };
    this.$assign = function (s) {
      this.Key = s.Key;
      this.Value = s.Value;
      return this;
    };
    this.Create = function (AKey, AValue) {
      this.Key = AKey;
      this.Value = AValue;
      return this;
    };
    var $r = $mod.$rtti.$Record("TPair<System.String,System.String>",{});
    $r.addField("Key",rtl.string);
    $r.addField("Value",rtl.string);
    $r.addMethod("Create",2,[["AKey",rtl.string,2],["AValue",rtl.string,2]]);
  });
  rtl.createClass(this,"TEnumerator$G18",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<Generics.Collections.TPair<System.String,System.String>>");
  rtl.createClass(this,"TEnumerable$G17",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push($mod.TPair$G3.$clone(LEnumerator.DoGetCurrent()));
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<Generics.Collections.TPair<System.String,System.String>>");
  rtl.createClass(this,"TEnumerator$G19",pas.System.TObject,function () {
    this.MoveNext = function () {
      var Result = false;
      Result = this.DoMoveNext();
      return Result;
    };
  },"TEnumerator<System.String>");
  rtl.createClass(this,"TEnumerable$G18",pas.System.TObject,function () {
    this.GetEnumerator = function () {
      var Result = null;
      Result = this.DoGetEnumerator();
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      var LEnumerator = null;
      Result = [];
      LEnumerator = this.GetEnumerator();
      try {
        while (LEnumerator.MoveNext()) Result.push(LEnumerator.DoGetCurrent());
      } finally {
        LEnumerator = rtl.freeLoc(LEnumerator);
      };
      return Result;
    };
  },"TEnumerable<System.String>");
  this.$rtti.$MethodVar("TCollectionNotifyEvent<System.String>",{procsig: rtl.newTIProcSig([["ASender",pas.System.$rtti["TObject"]],["AItem",rtl.string,2],["AAction",this.$rtti["TCollectionNotification"]]]), methodkind: 0});
  rtl.createClass(this,"TDictionary$G2",this.TEnumerable$G17,function () {
    rtl.createClass(this,"TPairEnumerator",$mod.TEnumerator$G18,function () {
      this.$init = function () {
        $mod.TEnumerator$G18.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G18.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = $mod.TPair$G3.$new();
        Result.$assign(this.DoGetCurrent());
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = $mod.TPair$G3.$new();
        var A = [];
        A = this.FVal.value;
        Result.$assign($mod.TPair$G3.$new());
        Result.Create("" + A[0],"" + A[1]);
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FIter = ADictionary.FMap.entries();
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.String,System.String>.TPairEnumerator");
    rtl.createClass(this,"TKeyEnumerator",$mod.TEnumerator$G19,function () {
      this.$init = function () {
        $mod.TEnumerator$G19.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G19.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = "";
        Result = this.DoGetCurrent();
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = "";
        Result = "" + this.FVal.value;
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (AIter) {
        this.FIter = AIter;
        return this;
      };
      this.Create$2 = function (ADictionary) {
        this.Create$1(ADictionary.FMap.keys());
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.String,System.String>.TKeyEnumerator");
    rtl.createClass(this,"TValueEnumerator",$mod.TEnumerator$G19,function () {
      this.$init = function () {
        $mod.TEnumerator$G19.$init.call(this);
        this.FIter = null;
        this.FVal = null;
      };
      this.$final = function () {
        this.FIter = undefined;
        this.FVal = undefined;
        $mod.TEnumerator$G19.$final.call(this);
      };
      this.GetCurrent = function () {
        var Result = "";
        Result = this.DoGetCurrent();
        return Result;
      };
      this.DoGetCurrent = function () {
        var Result = "";
        Result = "" + this.FVal.value;
        return Result;
      };
      this.DoMoveNext = function () {
        var Result = false;
        this.FVal = this.FIter.next();
        Result = !this.FVal.done;
        return Result;
      };
      this.Create$1 = function (AIter) {
        this.FIter = AIter;
        return this;
      };
      this.Create$2 = function (ADictionary) {
        this.Create$1(ADictionary.FMap.values());
        return this;
      };
      this.MoveNext$1 = function () {
        var Result = false;
        Result = this.DoMoveNext();
        return Result;
      };
    },"TDictionary<System.String,System.String>.TValueEnumerator");
    rtl.createClass(this,"TValueCollection",$mod.TEnumerable$G18,function () {
      this.$init = function () {
        $mod.TEnumerable$G18.$init.call(this);
        this.FMap = null;
      };
      this.$final = function () {
        this.FMap = undefined;
        $mod.TEnumerable$G18.$final.call(this);
      };
      this.GetCount = function () {
        var Result = 0;
        Result = this.FMap.size;
        return Result;
      };
      this.DoGetEnumerator = function () {
        var Result = null;
        Result = $mod.TDictionary$G2.TValueEnumerator.$create("Create$1",[this.FMap.values()]);
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FMap = ADictionary.FMap;
        return this;
      };
      this.GetEnumerator$1 = function () {
        var Result = null;
        Result = this.DoGetEnumerator();
        return Result;
      };
      this.ToArray = function () {
        var Result = [];
        var I = 0;
        var P = "";
        Result = rtl.arraySetLength(Result,"",this.FMap.size);
        var $in = this.GetEnumerator$1();
        try {
          while ($in.MoveNext$1()) {
            P = $in.GetCurrent();
            Result[I] = P;
            I += 1;
          }
        } finally {
          $in = rtl.freeLoc($in)
        };
        return Result;
      };
    },"TDictionary<System.String,System.String>.TValueCollection");
    rtl.createClass(this,"TKeyCollection",$mod.TEnumerable$G18,function () {
      this.$init = function () {
        $mod.TEnumerable$G18.$init.call(this);
        this.FMap = null;
      };
      this.$final = function () {
        this.FMap = undefined;
        $mod.TEnumerable$G18.$final.call(this);
      };
      this.GetCount = function () {
        var Result = 0;
        Result = this.FMap.size;
        return Result;
      };
      this.DoGetEnumerator = function () {
        var Result = null;
        Result = this.GetEnumerator$1();
        return Result;
      };
      this.Create$1 = function (ADictionary) {
        this.FMap = ADictionary.FMap;
        return this;
      };
      this.GetEnumerator$1 = function () {
        var Result = null;
        Result = $mod.TDictionary$G2.TKeyEnumerator.$create("Create$1",[this.FMap.keys()]);
        return Result;
      };
      this.ToArray = function () {
        var Result = [];
        Result = $mod.TEnumerable$G18.ToArray.call(this);
        return Result;
      };
    },"TDictionary<System.String,System.String>.TKeyCollection");
    this.$init = function () {
      $mod.TEnumerable$G17.$init.call(this);
      this.FMap = null;
      this.FComparer = null;
      this.FOnKeyNotify = null;
      this.FOnValueNotify = null;
      this.FKeyCollection = null;
      this.FValueCollection = null;
    };
    this.$final = function () {
      this.FMap = undefined;
      rtl.setIntfP(this,"FComparer",null);
      this.FOnKeyNotify = undefined;
      this.FOnValueNotify = undefined;
      this.FKeyCollection = undefined;
      this.FValueCollection = undefined;
      $mod.TEnumerable$G17.$final.call(this);
    };
    this.GetEffectiveKey = function (Key) {
      var Result = "";
      var it = null;
      var v = null;
      if (!(this.FComparer != null)) return Key;
      it = this.FMap.keys();
      v = it.next();
      while (!v.done) {
        Result = "" + v.value;
        if (this.FComparer.Compare(Result,Key) === 0) return Result;
        v = it.next();
      };
      Result = Key;
      return Result;
    };
    this.GetItem = function (Key) {
      var Result = "";
      var V = undefined;
      V = this.FMap.get(this.GetEffectiveKey(Key));
      if (pas.JS.isUndefined(V)) throw $mod.EDictionary.$create("Create$1",[rtl.getResStr($mod,"SErrDictKeyNotFound")]);
      Result = "" + V;
      return Result;
    };
    this.SetItem = function (Key, Value) {
      var V = undefined;
      V = this.FMap.get(this.GetEffectiveKey(Key));
      if (!pas.JS.isUndefined(V)) this.ValueNotify("" + V,$mod.TCollectionNotification.cnRemoved);
      this.FMap.set(Key,Value);
      this.ValueNotify(Value,$mod.TCollectionNotification.cnAdded);
    };
    this.DoAdd = function (Key, Value) {
      this.FMap.set(this.GetEffectiveKey(Key),Value);
      this.KeyNotify(Key,$mod.TCollectionNotification.cnAdded);
      this.ValueNotify(Value,$mod.TCollectionNotification.cnAdded);
    };
    this.DoRemove = function (Key, Notification) {
      var Result = "";
      var V = undefined;
      var K = "";
      K = this.GetEffectiveKey(Key);
      V = this.FMap.get(K);
      if (!pas.JS.isUndefined(V)) {
        this.FMap.delete(K);
        Result = "" + V;
        this.KeyNotify(Key,Notification);
        this.ValueNotify(Result,Notification);
      };
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FMap.size;
      return Result;
    };
    this.CanClearMap = function () {
      var Result = false;
      Result = (this.FOnKeyNotify === null) && (this.FOnValueNotify === null);
      return Result;
    };
    this.DoGetEnumerator = function () {
      var Result = null;
      Result = this.TPairEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.PairNotify = function (Key, Value, Action) {
      this.KeyNotify(Key,Action);
      this.ValueNotify(Value,Action);
    };
    this.KeyNotify = function (Key, Action) {
      if (this.FOnKeyNotify != null) this.FOnKeyNotify(this,Key,Action);
    };
    this.ValueNotify = function (Value, Action) {
      if (this.FOnValueNotify != null) this.FOnValueNotify(this,Value,Action);
    };
    this.Create$1 = function (ACapacity) {
      this.FMap = new Map();
      if (ACapacity > 0) ;
      return this;
    };
    this.Create$2 = function (Collection) {
      var aPair = $mod.TPair$G3.$new();
      this.Create$1(0);
      var $in = Collection.GetEnumerator();
      try {
        while ($in.MoveNext()) {
          aPair = $in.DoGetCurrent();
          this.Add(aPair.Key,aPair.Value);
        }
      } finally {
        $in = rtl.freeLoc($in)
      };
      return this;
    };
    this.Create$3 = function (AComparer) {
      this.Create$1(0);
      rtl.setIntfP(this,"FComparer",AComparer);
      return this;
    };
    this.Destroy = function () {
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FKeyCollection;
        }, set: function (v) {
          this.p.FKeyCollection = v;
        }});
      pas.SysUtils.FreeAndNil({p: this, get: function () {
          return this.p.FValueCollection;
        }, set: function (v) {
          this.p.FValueCollection = v;
        }});
      this.Clear();
      this.FMap = null;
      pas.System.TObject.Destroy.call(this);
    };
    this.Add = function (Key, Value) {
      if (this.FMap.has(this.GetEffectiveKey(Key))) throw $mod.EDictionary.$create("Create$1",[rtl.getResStr($mod,"SErrDictDuplicateKey")]);
      this.DoAdd(Key,Value);
    };
    this.Remove = function (Key) {
      this.DoRemove(Key,$mod.TCollectionNotification.cnRemoved);
    };
    this.ExtractPair = function (Key) {
      var Result = $mod.TPair$G3.$new();
      var K = "";
      Result.$assign($mod.TPair$G3.$new());
      K = this.GetEffectiveKey(Key);
      if (this.FMap.has(K)) {
        Result.Create(Key,"" + this.FMap.get(K));
        this.FMap.delete(K);
      } else Result.Create(Key,"");
      return Result;
    };
    this.Clear = function () {
      var Iter = null;
      var IVal = null;
      var A = [];
      var K = "";
      var V = "";
      if (this.CanClearMap()) {
        this.FMap.clear()}
       else {
        Iter = this.FMap.entries();
        do {
          IVal = Iter.next();
          if (!IVal.done) {
            A = IVal.value;
            K = "" + A[0];
            V = "" + A[1];
            this.FMap.delete(K);
            this.PairNotify(K,V,$mod.TCollectionNotification.cnRemoved);
          };
        } while (!IVal.done);
      };
    };
    this.TryGetValue = function (Key, Value) {
      var Result = false;
      var K = "";
      K = this.GetEffectiveKey(Key);
      Result = this.FMap.has(K);
      if (Result) Value.set("" + this.FMap.get(K));
      return Result;
    };
    this.AddOrSetValue = function (Key, Value) {
      var k = "";
      k = this.GetEffectiveKey(Key);
      if (!this.FMap.has(k)) {
        this.DoAdd(Key,Value)}
       else this.SetItem(k,Value);
    };
    this.ContainsKey = function (Key) {
      var Result = false;
      Result = this.FMap.has(this.GetEffectiveKey(Key));
      return Result;
    };
    this.ContainsValue = function (Value) {
      var Result = false;
      var It = null;
      var Res = null;
      Result = false;
      It = this.FMap.values();
      do {
        Res = It.next();
        if (!Res.done) Result = Value === ("" + Res.value);
      } while (!(Result || Res.done));
      return Result;
    };
    this.ToArray = function () {
      var Result = [];
      Result = $mod.TEnumerable$G17.ToArray.call(this);
      return Result;
    };
    this.GetKeys = function () {
      var Result = null;
      if (this.FKeyCollection === null) this.FKeyCollection = this.TKeyCollection.$create("Create$1",[this]);
      Result = this.FKeyCollection;
      return Result;
    };
    this.GetValues = function () {
      var Result = null;
      if (this.FValueCollection === null) this.FValueCollection = this.TValueCollection.$create("Create$1",[this]);
      Result = this.FValueCollection;
      return Result;
    };
    this.GetEnumerator$1 = function () {
      var Result = null;
      Result = this.TPairEnumerator.$create("Create$1",[this]);
      return Result;
    };
  },"TDictionary<System.String,System.String>");
  $mod.$implcode = function () {
    $mod.$resourcestrings = {SErrDictKeyNotFound: {org: "Key value not found"}, SErrDictDuplicateKey: {org: "Duplicate key value"}};
  };
},[]);
//# sourceMappingURL=generics.collections.js.map
