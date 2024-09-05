rtl.module("Web",["System","Types","JS"],function () {
  "use strict";
  var $mod = this;
  this.$rtti.$ExtClass("TJSEvent");
  this.$rtti.$ExtClass("TJSHTMLElement");
  this.$rtti.$ExtClass("TJSWindow");
  this.$rtti.$ExtClass("TJSDOMTokenList");
  this.$rtti.$ExtClass("TJSXPathResult");
  this.$rtti.$ExtClass("TJSNodeList");
  this.$rtti.$ExtClass("TJSDocument");
  this.$rtti.$ExtClass("TJSElement");
  this.$rtti.$ExtClass("TJSCSSStyleSheet");
  this.$rtti.$ExtClass("TJSNodeFilter");
  this.$rtti.$ExtClass("TJSIDBObjectStore");
  this.$rtti.$ExtClass("TIDBDatabase");
  this.$rtti.$ExtClass("TJSIDBRequest");
  this.$rtti.$ExtClass("TJSEventTarget");
  this.$rtti.$ExtClass("TJSMouseEvent");
  this.$rtti.$ExtClass("TJSWheelEvent");
  this.$rtti.$ExtClass("TJSKeyboardEvent");
  this.$rtti.$ExtClass("TJSPointerEvent");
  this.$rtti.$ExtClass("TJSUIEvent");
  this.$rtti.$ExtClass("TJSTouchEvent");
  this.$rtti.$ExtClass("TJSInputEvent");
  this.$rtti.$ExtClass("TJSBlob");
  this.$rtti.$ExtClass("TJSPermissions");
  this.$rtti.$ExtClass("TJSFileSystemFileHandle");
  this.$rtti.$DynArray("TJSFileSystemFileHandleArray",{eltype: this.$rtti["TJSFileSystemFileHandle"]});
  this.$rtti.$ExtClass("TJSFileSystemDirectoryHandle");
  this.$rtti.$DynArray("TJSFileSystemDirectoryHandleArray",{eltype: this.$rtti["TJSFileSystemDirectoryHandle"]});
  this.$rtti.$ExtClass("TJSShowOpenFilePickerOptions");
  this.$rtti.$ExtClass("TJSShowSaveFilePickerOptions");
  this.$rtti.$ExtClass("TJSServiceWorker");
  this.$rtti.$ExtClass("TJSClient");
  this.$rtti.$ExtClass("TJSRequest");
  this.$rtti.$ExtClass("TJSResponse");
  this.$rtti.$ExtClass("TJSServiceWorkerRegistration");
  this.$rtti.$ExtClass("TJSResizeObserver");
  this.$rtti.$RefToProcVar("TJSEventHandler",{procsig: rtl.newTIProcSig([["Event",this.$rtti["TJSEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSRawEventHandler",{procsig: rtl.newTIProcSig([["Event",this.$rtti["TJSEvent"]]],null,8)});
  this.$rtti.$ExtClass("TJSEventTarget",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "EventTarget"});
  this.$rtti.$ExtClass("TJSNode",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "Node"});
  this.$rtti.$ProcVar("TJSNodeListCallBack",{procsig: rtl.newTIProcSig([["currentValue",this.$rtti["TJSNode"]],["currentIndex",rtl.nativeint],["list",this.$rtti["TJSNodeList"]]])});
  this.$rtti.$MethodVar("TJSNodeListEvent",{procsig: rtl.newTIProcSig([["currentValue",this.$rtti["TJSNode"]],["currentIndex",rtl.nativeint],["list",this.$rtti["TJSNodeList"]]]), methodkind: 0});
  this.$rtti.$ExtClass("TJSNodeList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "NodeList"});
  this.$rtti.$ExtClass("TJSAttr",{ancestor: this.$rtti["TJSNode"], jsclass: "Attr"});
  this.$rtti.$ExtClass("TJSNamedNodeMap",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "NamedNodeMap"});
  this.$rtti.$ExtClass("TJSHTMLCollection",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "HTMLCollection"});
  this.$rtti.$ProcVar("TDOMTokenlistCallBack",{procsig: rtl.newTIProcSig([["Current",rtl.jsvalue],["currentIndex",rtl.nativeint],["list",this.$rtti["TJSDOMTokenList"]]])});
  this.$rtti.$ExtClass("TJSDOMTokenList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "DOMTokenList"});
  this.$rtti.$ExtClass("TJSDOMRect",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "DOMRect"});
  rtl.recNewT(this,"TJSClientRect",function () {
    this.left = 0.0;
    this.top = 0.0;
    this.right = 0.0;
    this.bottom = 0.0;
    this.$eq = function (b) {
      return (this.left === b.left) && (this.top === b.top) && (this.right === b.right) && (this.bottom === b.bottom);
    };
    this.$assign = function (s) {
      this.left = s.left;
      this.top = s.top;
      this.right = s.right;
      this.bottom = s.bottom;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSClientRect",{});
    $r.addField("left",rtl.double);
    $r.addField("top",rtl.double);
    $r.addField("right",rtl.double);
    $r.addField("bottom",rtl.double);
  });
  this.$rtti.$DynArray("TJSClientRectArray",{eltype: this.$rtti["TJSClientRect"]});
  this.$rtti.$ExtClass("TJSElement",{ancestor: this.$rtti["TJSNode"], jsclass: "Element"});
  rtl.recNewT(this,"TJSElementCreationOptions",function () {
    this.named = "";
    this.$eq = function (b) {
      return this.named === b.named;
    };
    this.$assign = function (s) {
      this.named = s.named;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSElementCreationOptions",{});
    $r.addField("named",rtl.string);
  });
  this.$rtti.$ExtClass("TJSDocumentType",{ancestor: this.$rtti["TJSNode"], jsclass: "DocumentType"});
  this.$rtti.$ExtClass("TJSDOMImplementation",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "DocumentImplementation"});
  this.$rtti.$ExtClass("TJSLocation",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Location"});
  this.$rtti.$ExtClass("TJSCSSStyleDeclaration");
  this.$rtti.$ExtClass("TJSStyleSheet",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "StyleSheet"});
  this.$rtti.$ExtClass("TJSCSSRule",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "CSSRule"});
  this.$rtti.$ExtClass("TJSCSSStyleRule",{ancestor: this.$rtti["TJSCSSRule"], jsclass: "CSSStyleRule"});
  this.$rtti.$ExtClass("TJSCSSRuleList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "CSSRuleList"});
  this.$rtti.$ExtClass("TJSCSSStyleSheet",{ancestor: this.$rtti["TJSStyleSheet"], jsclass: "CSSStyleSheet"});
  this.$rtti.$ExtClass("TJSStyleSheetList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "StyleSheetList"});
  this.$rtti.$ExtClass("TJSDocumentFragment",{ancestor: this.$rtti["TJSNode"], jsclass: "DocumentFragment"});
  rtl.recNewT(this,"TJSEventInit",function () {
    this.bubbles = false;
    this.cancelable = false;
    this.scoped = false;
    this.composed = false;
    this.$eq = function (b) {
      return (this.bubbles === b.bubbles) && (this.cancelable === b.cancelable) && (this.scoped === b.scoped) && (this.composed === b.composed);
    };
    this.$assign = function (s) {
      this.bubbles = s.bubbles;
      this.cancelable = s.cancelable;
      this.scoped = s.scoped;
      this.composed = s.composed;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSEventInit",{});
    $r.addField("bubbles",rtl.boolean);
    $r.addField("cancelable",rtl.boolean);
    $r.addField("scoped",rtl.boolean);
    $r.addField("composed",rtl.boolean);
  });
  this.$rtti.$ExtClass("TJSEvent",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Event"});
  this.$rtti.$ExtClass("TJSXPathExpression",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "XPathExpression"});
  this.$rtti.$ExtClass("TJSXPathNSResolver",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "XPathNSResolver"});
  this.$rtti.$ExtClass("TJSCharacterData",{ancestor: this.$rtti["TJSNode"], jsclass: "CharacterData"});
  this.$rtti.$ExtClass("TJSProcessingInstruction",{ancestor: this.$rtti["TJSCharacterData"], jsclass: "ProcessingInstruction"});
  this.$rtti.$ExtClass("TJSRange",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Range"});
  this.$rtti.$ExtClass("TJSTreeWalker",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "TreeWalker"});
  this.$rtti.$ExtClass("TJSNodeFilter",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "NodeFilter"});
  this.$rtti.$ExtClass("TJSXPathResult",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "XPathResult"});
  this.$rtti.$ExtClass("TJSSelection",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Selection"});
  this.$rtti.$ProcVar("TJSNameSpaceMapperCallback",{procsig: rtl.newTIProcSig([["aNameSpace",rtl.string]],rtl.string)});
  this.$rtti.$ExtClass("TJSHTMLFile");
  this.$rtti.$ExtClass("TJSHTMLFileList");
  this.$rtti.$RefToProcVar("TJSDataTransferItemCallBack",{procsig: rtl.newTIProcSig([["aData",rtl.string]],null,8)});
  this.$rtti.$ExtClass("TJSDataTransferItem",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "DataTransferItem"});
  this.$rtti.$ExtClass("TJSDataTransferItemList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "DataTransferItemList"});
  this.$rtti.$ExtClass("TJSDataTransfer",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "DataTransfer"});
  this.$rtti.$ExtClass("TJSDragEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "DragEvent"});
  this.$rtti.$RefToProcVar("TJSDragDropEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSDragEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("THTMLClickEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSMouseEvent"]]],rtl.boolean,8)});
  this.$rtti.$ExtClass("TJSClipBoardEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "ClipboardEvent"});
  rtl.createClassExt(this,"TJSFocusEvent",Event,"",function () {
    this.$init = function () {
    };
    this.$final = function () {
    };
  });
  rtl.createClassExt(this,"TJSAnimationEvent",Event,"",function () {
    this.$init = function () {
    };
    this.$final = function () {
    };
  });
  rtl.createClassExt(this,"TJSLoadEvent",Event,"",function () {
    this.$init = function () {
    };
    this.$final = function () {
    };
  });
  this.$rtti.$ExtClass("TJSErrorEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "ErrorEvent"});
  rtl.createClassExt(this,"TJSPageTransitionEvent",Event,"",function () {
    this.$init = function () {
    };
    this.$final = function () {
    };
  });
  this.$rtti.$ExtClass("TJSHashChangeEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "HashChangeEvent"});
  this.$rtti.$ExtClass("TJSPopStateEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "PopStateEvent"});
  this.$rtti.$ExtClass("TJSStorageEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "StorageEvent"});
  this.$rtti.$ExtClass("TJSProgressEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "ProgressEvent"});
  this.$rtti.$ExtClass("TJSCloseEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "CloseEvent"});
  this.$rtti.$RefToProcVar("TJSPageTransitionEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSPageTransitionEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSHashChangeEventhandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSHashChangeEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSMouseWheelEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSWheelEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSMouseEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSMouseEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("THTMLAnimationEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSAnimationEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSErrorEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSErrorEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSFocusEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSFocusEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSKeyEventhandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSKeyboardEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSLoadEventhandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSLoadEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSPointerEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSPointerEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSUIEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSUIEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSPopStateEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSPopStateEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSStorageEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSStorageEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSProgressEventhandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSProgressEvent"]]],rtl.boolean,8)});
  this.$rtti.$RefToProcVar("TJSTouchEventHandler",{procsig: rtl.newTIProcSig([["aEvent",this.$rtti["TJSTouchEvent"]]],rtl.boolean,8)});
  this.$rtti.$ExtClass("TJSDocument",{ancestor: this.$rtti["TJSNode"], jsclass: "Document"});
  this.$rtti.$ExtClass("TJSConsole",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Console"});
  this.$rtti.$ExtClass("TJSCryptoKey");
  this.$rtti.$ExtClass("TJSSubtleCrypto");
  rtl.recNewT(this,"Algorithm",function () {
    this.name = "";
    this.$eq = function (b) {
      return this.name === b.name;
    };
    this.$assign = function (s) {
      this.name = s.name;
      return this;
    };
    var $r = $mod.$rtti.$Record("Algorithm",{});
    $r.addField("name",rtl.string);
  });
  rtl.recNewT(this,"AesCbcParams",function () {
    this.iv = null;
    this.$eq = function (b) {
      return this.iv === b.iv;
    };
    this.$assign = function (s) {
      this.iv = s.iv;
      return this;
    };
    var $r = $mod.$rtti.$Record("AesCbcParams",{});
    $r.addField("iv",pas.JS.$rtti["TJSBufferSource"]);
  });
  rtl.recNewT(this,"AesCtrParams",function () {
    this.counter = null;
    this.$eq = function (b) {
      return (this.counter === b.counter) && (this.length === b.length);
    };
    this.$assign = function (s) {
      this.counter = s.counter;
      this.length = s.length;
      return this;
    };
    var $r = $mod.$rtti.$Record("AesCtrParams",{});
    $r.addField("counter",pas.JS.$rtti["TJSBufferSource"]);
    $r.addField("length",rtl.byte);
  });
  rtl.recNewT(this,"AesGcmParams",function () {
    this.iv = null;
    this.additionalData = null;
    this.tagLength = 0;
    this.$eq = function (b) {
      return (this.iv === b.iv) && (this.additionalData === b.additionalData) && (this.tagLength === b.tagLength);
    };
    this.$assign = function (s) {
      this.iv = s.iv;
      this.additionalData = s.additionalData;
      this.tagLength = s.tagLength;
      return this;
    };
    var $r = $mod.$rtti.$Record("AesGcmParams",{});
    $r.addField("iv",pas.JS.$rtti["TJSBufferSource"]);
    $r.addField("additionalData",pas.JS.$rtti["TJSBufferSource"]);
    $r.addField("tagLength",rtl.byte);
  });
  rtl.recNewT(this,"HmacImportParams",function () {
    this.hash = undefined;
    this.$eq = function (b) {
      return this.hash === b.hash;
    };
    this.$assign = function (s) {
      this.hash = s.hash;
      return this;
    };
    var $r = $mod.$rtti.$Record("HmacImportParams",{});
    $r.addField("hash",rtl.jsvalue);
  });
  rtl.recNewT(this,"Pbkdf2Params",function () {
    this.salt = null;
    this.iterations = 0;
    this.hash = undefined;
    this.$eq = function (b) {
      return (this.salt === b.salt) && (this.iterations === b.iterations) && (this.hash === b.hash);
    };
    this.$assign = function (s) {
      this.salt = s.salt;
      this.iterations = s.iterations;
      this.hash = s.hash;
      return this;
    };
    var $r = $mod.$rtti.$Record("Pbkdf2Params",{});
    $r.addField("salt",pas.JS.$rtti["TJSBufferSource"]);
    $r.addField("iterations",rtl.nativeint);
    $r.addField("hash",rtl.jsvalue);
  });
  rtl.recNewT(this,"RsaHashedImportParams",function () {
    this.hash = undefined;
    this.$eq = function (b) {
      return this.hash === b.hash;
    };
    this.$assign = function (s) {
      this.hash = s.hash;
      return this;
    };
    var $r = $mod.$rtti.$Record("RsaHashedImportParams",{});
    $r.addField("hash",rtl.jsvalue);
  });
  rtl.recNewT(this,"AesKeyGenParams",function () {
    this.$eq = function (b) {
      return this.length === b.length;
    };
    this.$assign = function (s) {
      this.length = s.length;
      return this;
    };
    var $r = $mod.$rtti.$Record("AesKeyGenParams",{});
    $r.addField("length",rtl.longint);
  });
  rtl.recNewT(this,"HmacKeyGenParams",function () {
    this.hash = undefined;
    this.$eq = function (b) {
      return (this.hash === b.hash) && (this.length === b.length);
    };
    this.$assign = function (s) {
      this.hash = s.hash;
      this.length = s.length;
      return this;
    };
    var $r = $mod.$rtti.$Record("HmacKeyGenParams",{});
    $r.addField("hash",rtl.jsvalue);
    $r.addField("length",rtl.longint);
  });
  rtl.recNewT(this,"RsaHashedKeyGenParams",function () {
    this.modulusLength = 0;
    this.publicExponent = null;
    this.hash = undefined;
    this.$eq = function (b) {
      return (this.modulusLength === b.modulusLength) && (this.publicExponent === b.publicExponent) && (this.hash === b.hash);
    };
    this.$assign = function (s) {
      this.modulusLength = s.modulusLength;
      this.publicExponent = s.publicExponent;
      this.hash = s.hash;
      return this;
    };
    var $r = $mod.$rtti.$Record("RsaHashedKeyGenParams",{});
    $r.addField("modulusLength",rtl.longint);
    $r.addField("publicExponent",pas.JS.$rtti["TJSUint8Array"]);
    $r.addField("hash",rtl.jsvalue);
  });
  rtl.recNewT(this,"RsaOaepParams",function () {
    this.$eq = function (b) {
      return this.label === b.label;
    };
    this.$assign = function (s) {
      this.label = s.label;
      return this;
    };
    var $r = $mod.$rtti.$Record("RsaOaepParams",{});
    $r.addField("label",pas.JS.$rtti["TJSBufferSource"]);
  });
  rtl.recNewT(this,"RsaPssParams",function () {
    this.saltLength = 0;
    this.$eq = function (b) {
      return this.saltLength === b.saltLength;
    };
    this.$assign = function (s) {
      this.saltLength = s.saltLength;
      return this;
    };
    var $r = $mod.$rtti.$Record("RsaPssParams",{});
    $r.addField("saltLength",rtl.longint);
  });
  rtl.recNewT(this,"DhKeyGenParams",function () {
    this.prime = null;
    this.generator = null;
    this.$eq = function (b) {
      return (this.prime === b.prime) && (this.generator === b.generator);
    };
    this.$assign = function (s) {
      this.prime = s.prime;
      this.generator = s.generator;
      return this;
    };
    var $r = $mod.$rtti.$Record("DhKeyGenParams",{});
    $r.addField("prime",pas.JS.$rtti["TJSUint8Array"]);
    $r.addField("generator",pas.JS.$rtti["TJSUint8Array"]);
  });
  rtl.recNewT(this,"EcKeyGenParams",function () {
    this.$eq = function (b) {
      return this.namedCurve === b.namedCurve;
    };
    this.$assign = function (s) {
      this.namedCurve = s.namedCurve;
      return this;
    };
    var $r = $mod.$rtti.$Record("EcKeyGenParams",{});
    $r.addField("namedCurve",rtl.string);
  });
  rtl.recNewT(this,"AesDerivedKeyParams",function () {
    this.$eq = function (b) {
      return this.length === b.length;
    };
    this.$assign = function (s) {
      this.length = s.length;
      return this;
    };
    var $r = $mod.$rtti.$Record("AesDerivedKeyParams",{});
    $r.addField("length",rtl.longint);
  });
  rtl.recNewT(this,"HmacDerivedKeyParams",function () {
    this.$eq = function (b) {
      return this.length === b.length;
    };
    this.$assign = function (s) {
      this.length = s.length;
      return this;
    };
    var $r = $mod.$rtti.$Record("HmacDerivedKeyParams",{});
    $r.addField("length",rtl.longint);
  });
  rtl.recNewT(this,"EcdhKeyDeriveParams",function () {
    this.$eq = function (b) {
      return this.public === b.public;
    };
    this.$assign = function (s) {
      this.public = s.public;
      return this;
    };
    var $r = $mod.$rtti.$Record("EcdhKeyDeriveParams",{});
    $r.addField("public",$mod.$rtti["TJSCryptoKey"]);
  });
  rtl.recNewT(this,"DhKeyDeriveParams",function () {
    this.$eq = function (b) {
      return this.public === b.public;
    };
    this.$assign = function (s) {
      this.public = s.public;
      return this;
    };
    var $r = $mod.$rtti.$Record("DhKeyDeriveParams",{});
    $r.addField("public",$mod.$rtti["TJSCryptoKey"]);
  });
  rtl.recNewT(this,"DhImportKeyParams",function () {
    this.prime = null;
    this.generator = null;
    this.$eq = function (b) {
      return (this.prime === b.prime) && (this.generator === b.generator);
    };
    this.$assign = function (s) {
      this.prime = s.prime;
      this.generator = s.generator;
      return this;
    };
    var $r = $mod.$rtti.$Record("DhImportKeyParams",{});
    $r.addField("prime",pas.JS.$rtti["TJSUint8Array"]);
    $r.addField("generator",pas.JS.$rtti["TJSUint8Array"]);
  });
  rtl.recNewT(this,"EcdsaParams",function () {
    this.hash = undefined;
    this.$eq = function (b) {
      return this.hash === b.hash;
    };
    this.$assign = function (s) {
      this.hash = s.hash;
      return this;
    };
    var $r = $mod.$rtti.$Record("EcdsaParams",{});
    $r.addField("hash",rtl.jsvalue);
  });
  rtl.recNewT(this,"EcKeyImportParams",function () {
    this.$eq = function (b) {
      return this.namedCurve === b.namedCurve;
    };
    this.$assign = function (s) {
      this.namedCurve = s.namedCurve;
      return this;
    };
    var $r = $mod.$rtti.$Record("EcKeyImportParams",{});
    $r.addField("namedCurve",rtl.string);
  });
  rtl.recNewT(this,"HkdfParams",function () {
    this.hash = undefined;
    this.salt = null;
    this.info = null;
    this.$eq = function (b) {
      return (this.hash === b.hash) && (this.salt === b.salt) && (this.info === b.info);
    };
    this.$assign = function (s) {
      this.hash = s.hash;
      this.salt = s.salt;
      this.info = s.info;
      return this;
    };
    var $r = $mod.$rtti.$Record("HkdfParams",{});
    $r.addField("hash",rtl.jsvalue);
    $r.addField("salt",pas.JS.$rtti["TJSBufferSource"]);
    $r.addField("info",pas.JS.$rtti["TJSBufferSource"]);
  });
  rtl.recNewT(this,"RsaOtherPrimesInfo",function () {
    this.r = "";
    this.d = "";
    this.t = "";
    this.$eq = function (b) {
      return (this.r === b.r) && (this.d === b.d) && (this.t === b.t);
    };
    this.$assign = function (s) {
      this.r = s.r;
      this.d = s.d;
      this.t = s.t;
      return this;
    };
    var $r = $mod.$rtti.$Record("RsaOtherPrimesInfo",{});
    $r.addField("r",rtl.string);
    $r.addField("d",rtl.string);
    $r.addField("t",rtl.string);
  });
  this.$rtti.$DynArray("TRsaOtherPrimesInfoDynArray",{eltype: this.$rtti["RsaOtherPrimesInfo"]});
  rtl.recNewT(this,"JsonWebKey",function () {
    this.kty = "";
    this.use = "";
    this.alg = "";
    this.ext = false;
    this.crv = "";
    this.x = "";
    this.y = "";
    this.d = "";
    this.n = "";
    this.e = "";
    this.p = "";
    this.q = "";
    this.dp = "";
    this.dq = "";
    this.qi = "";
    this.k = "";
    this.$new = function () {
      var r = Object.create(this);
      r.key_ops = [];
      r.oth = [];
      return r;
    };
    this.$eq = function (b) {
      return (this.kty === b.kty) && (this.use === b.use) && (this.key_ops === b.key_ops) && (this.alg === b.alg) && (this.ext === b.ext) && (this.crv === b.crv) && (this.x === b.x) && (this.y === b.y) && (this.d === b.d) && (this.n === b.n) && (this.e === b.e) && (this.p === b.p) && (this.q === b.q) && (this.dp === b.dp) && (this.dq === b.dq) && (this.qi === b.qi) && (this.oth === b.oth) && (this.k === b.k);
    };
    this.$assign = function (s) {
      this.kty = s.kty;
      this.use = s.use;
      this.key_ops = rtl.arrayRef(s.key_ops);
      this.alg = s.alg;
      this.ext = s.ext;
      this.crv = s.crv;
      this.x = s.x;
      this.y = s.y;
      this.d = s.d;
      this.n = s.n;
      this.e = s.e;
      this.p = s.p;
      this.q = s.q;
      this.dp = s.dp;
      this.dq = s.dq;
      this.qi = s.qi;
      this.oth = rtl.arrayRef(s.oth);
      this.k = s.k;
      return this;
    };
    var $r = $mod.$rtti.$Record("JsonWebKey",{});
    $r.addField("kty",rtl.string);
    $r.addField("use",rtl.string);
    $r.addField("key_ops",pas.Types.$rtti["TStringDynArray"]);
    $r.addField("alg",rtl.string);
    $r.addField("ext",rtl.boolean);
    $r.addField("crv",rtl.string);
    $r.addField("x",rtl.string);
    $r.addField("y",rtl.string);
    $r.addField("d",rtl.string);
    $r.addField("n",rtl.string);
    $r.addField("e",rtl.string);
    $r.addField("p",rtl.string);
    $r.addField("q",rtl.string);
    $r.addField("dp",rtl.string);
    $r.addField("dq",rtl.string);
    $r.addField("qi",rtl.string);
    $r.addField("oth",$mod.$rtti["TRsaOtherPrimesInfoDynArray"]);
    $r.addField("k",rtl.string);
  });
  rtl.recNewT(this,"CryptoKeyPair",function () {
    this.publicKey = null;
    this.privateKey = null;
    this.$eq = function (b) {
      return (this.publicKey === b.publicKey) && (this.privateKey === b.privateKey);
    };
    this.$assign = function (s) {
      this.publicKey = s.publicKey;
      this.privateKey = s.privateKey;
      return this;
    };
    var $r = $mod.$rtti.$Record("CryptoKeyPair",{});
    $r.addField("publicKey",$mod.$rtti["TJSCryptoKey"]);
    $r.addField("privateKey",$mod.$rtti["TJSCryptoKey"]);
  });
  this.$rtti.$DynArray("TKeyUsageDynArray",{eltype: rtl.string});
  this.$rtti.$ExtClass("TJSCryptoKey",{jsclass: "CryptoKey"});
  this.$rtti.$ExtClass("TJSSubtleCrypto",{jsclass: "SubtleCrypto"});
  this.$rtti.$ExtClass("TJSCrypto",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Crypto"});
  this.$rtti.$ExtClass("TJSHistory",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "History"});
  rtl.createClass(this,"TJSIDBTransactionMode",pas.System.TObject,function () {
    this.readonly = "readonly";
    this.readwrite = "readwrite";
    this.versionchange = "versionchange";
  });
  this.$rtti.$ExtClass("TJSIDBTransaction",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "IDBTransaction"});
  this.$rtti.$ExtClass("TJSIDBKeyRange",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "IDBKeyRange"});
  rtl.recNewT(this,"TJSIDBIndexParameters",function () {
    this.unique = false;
    this.multiEntry = false;
    this.locale = "";
    this.$eq = function (b) {
      return (this.unique === b.unique) && (this.multiEntry === b.multiEntry) && (this.locale === b.locale);
    };
    this.$assign = function (s) {
      this.unique = s.unique;
      this.multiEntry = s.multiEntry;
      this.locale = s.locale;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSIDBIndexParameters",{});
    $r.addField("unique",rtl.boolean);
    $r.addField("multiEntry",rtl.boolean);
    $r.addField("locale",rtl.string);
  });
  this.$rtti.$ExtClass("TJSIDBIndex",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "IDBIndex"});
  this.$rtti.$ExtClass("TJSIDBCursorDirection",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "IDBCursorDirection"});
  this.$rtti.$ExtClass("TJSIDBCursor",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "IDBCursor"});
  this.$rtti.$ExtClass("TJSIDBObjectStore",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "IDBObjectStore"});
  this.$rtti.$ExtClass("TJSIDBRequest",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "IDBRequest"});
  this.$rtti.$ExtClass("TJSIDBOpenDBRequest",{ancestor: this.$rtti["TJSIDBRequest"], jsclass: "IDBOpenDBRequest"});
  rtl.recNewT(this,"TJSCreateObjectStoreOptions",function () {
    this.keyPath = undefined;
    this.autoIncrement = false;
    this.$eq = function (b) {
      return (this.keyPath === b.keyPath) && (this.autoIncrement === b.autoIncrement);
    };
    this.$assign = function (s) {
      this.keyPath = s.keyPath;
      this.autoIncrement = s.autoIncrement;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSCreateObjectStoreOptions",{});
    $r.addField("keyPath",rtl.jsvalue);
    $r.addField("autoIncrement",rtl.boolean);
  });
  this.$rtti.$ExtClass("TIDBDatabase",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "IDBDatabase"});
  this.$rtti.$ExtClass("TJSIDBFactory",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "IDBFactory"});
  this.$rtti.$ExtClass("TJSStorage",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "Storage"});
  this.$rtti.$ExtClass("TJSVisibleItem",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "IVisible"});
  this.$rtti.$ExtClass("TJSLocationBar",{ancestor: this.$rtti["TJSVisibleItem"], jsclass: "LocationBar"});
  this.$rtti.$ExtClass("TJSMenuBar",{ancestor: this.$rtti["TJSVisibleItem"], jsclass: "MenuBar"});
  this.$rtti.$ExtClass("TJSToolBar",{ancestor: this.$rtti["TJSVisibleItem"], jsclass: "ToolBar"});
  this.$rtti.$ExtClass("TJSPersonalBar",{ancestor: this.$rtti["TJSVisibleItem"], jsclass: "PersonalBar"});
  this.$rtti.$ExtClass("TJSScrollBars",{ancestor: this.$rtti["TJSVisibleItem"], jsclass: "ScrollBars"});
  rtl.recNewT(this,"TJSPositionError",function () {
    this.code = 0;
    this.message = "";
    this.$eq = function (b) {
      return (this.code === b.code) && (this.message === b.message);
    };
    this.$assign = function (s) {
      this.code = s.code;
      this.message = s.message;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSPositionError",{});
    $r.addField("code",rtl.longint);
    $r.addField("message",rtl.string);
  });
  rtl.recNewT(this,"TJSPositionOptions",function () {
    this.enableHighAccuracy = false;
    this.timeout = 0;
    this.maximumAge = 0;
    this.$eq = function (b) {
      return (this.enableHighAccuracy === b.enableHighAccuracy) && (this.timeout === b.timeout) && (this.maximumAge === b.maximumAge);
    };
    this.$assign = function (s) {
      this.enableHighAccuracy = s.enableHighAccuracy;
      this.timeout = s.timeout;
      this.maximumAge = s.maximumAge;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSPositionOptions",{});
    $r.addField("enableHighAccuracy",rtl.boolean);
    $r.addField("timeout",rtl.longint);
    $r.addField("maximumAge",rtl.longint);
  });
  rtl.recNewT(this,"TJSCoordinates",function () {
    this.latitude = 0.0;
    this.longitude = 0.0;
    this.altitude = 0.0;
    this.accuracy = 0.0;
    this.altitudeAccuracy = 0.0;
    this.heading = 0.0;
    this.speed = 0.0;
    this.$eq = function (b) {
      return (this.latitude === b.latitude) && (this.longitude === b.longitude) && (this.altitude === b.altitude) && (this.accuracy === b.accuracy) && (this.altitudeAccuracy === b.altitudeAccuracy) && (this.heading === b.heading) && (this.speed === b.speed);
    };
    this.$assign = function (s) {
      this.latitude = s.latitude;
      this.longitude = s.longitude;
      this.altitude = s.altitude;
      this.accuracy = s.accuracy;
      this.altitudeAccuracy = s.altitudeAccuracy;
      this.heading = s.heading;
      this.speed = s.speed;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSCoordinates",{});
    $r.addField("latitude",rtl.double);
    $r.addField("longitude",rtl.double);
    $r.addField("altitude",rtl.double);
    $r.addField("accuracy",rtl.double);
    $r.addField("altitudeAccuracy",rtl.double);
    $r.addField("heading",rtl.double);
    $r.addField("speed",rtl.double);
  });
  rtl.recNewT(this,"TJSPosition",function () {
    this.timestamp = "";
    this.$new = function () {
      var r = Object.create(this);
      r.coords = $mod.TJSCoordinates.$new();
      return r;
    };
    this.$eq = function (b) {
      return this.coords.$eq(b.coords) && (this.timestamp === b.timestamp);
    };
    this.$assign = function (s) {
      this.coords.$assign(s.coords);
      this.timestamp = s.timestamp;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSPosition",{});
    $r.addField("coords",$mod.$rtti["TJSCoordinates"]);
    $r.addField("timestamp",rtl.string);
  });
  this.$rtti.$ProcVar("TJSGeoLocationCallback",{procsig: rtl.newTIProcSig([["aPosition",this.$rtti["TJSPosition"]]])});
  this.$rtti.$MethodVar("TJSGeoLocationEvent",{procsig: rtl.newTIProcSig([["aPosition",this.$rtti["TJSPosition"]]]), methodkind: 0});
  this.$rtti.$ProcVar("TJSGeoLocationErrorCallback",{procsig: rtl.newTIProcSig([["aValue",this.$rtti["TJSPositionError"]]])});
  this.$rtti.$MethodVar("TJSGeoLocationErrorEvent",{procsig: rtl.newTIProcSig([["aValue",this.$rtti["TJSPositionError"]]]), methodkind: 0});
  this.$rtti.$ExtClass("TJSGeoLocation",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "GeoLocation"});
  this.$rtti.$ExtClass("TJSMediaStreamTrack",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "MediaStreamTrack"});
  this.$rtti.$ExtClass("TJSMediaDevices",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "MediaDevices"});
  this.$rtti.$ExtClass("TJSWorker",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "Worker"});
  this.$rtti.$ExtClass("TJSMessagePort",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "MessagePort"});
  this.$rtti.$DynArray("TJSMessagePortDynArray",{eltype: this.$rtti["TJSMessagePort"]});
  this.$rtti.$ExtClass("TJSSharedWorker",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "SharedWorker"});
  this.$rtti.$ExtClass("TJSExtendableEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "ExtendableEvent"});
  this.$rtti.$ExtClass("TJSExtendableMessageEvent",{ancestor: this.$rtti["TJSExtendableEvent"], jsclass: "ExtendableMessageEvent"});
  this.$rtti.$ExtClass("TJSFetchEvent",{ancestor: this.$rtti["TJSExtendableEvent"], jsclass: "FetchEvent"});
  this.$rtti.$ExtClass("TJSClient",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Client"});
  this.$rtti.$ExtClass("TJSServiceWorker",{ancestor: this.$rtti["TJSWorker"], jsclass: "ServiceWorker"});
  this.$rtti.$ExtClass("TJSNavigationPreloadState",{jsclass: "navigationPreloadState"});
  this.$rtti.$ExtClass("TJSNavigationPreload",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "navigationPreload"});
  this.$rtti.$ExtClass("TJSServiceWorkerRegistration",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "ServiceWorkerRegistration"});
  rtl.recNewT(this,"TJSServiceWorkerContainerOptions",function () {
    this.scope = "";
    this.$eq = function (b) {
      return this.scope === b.scope;
    };
    this.$assign = function (s) {
      this.scope = s.scope;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSServiceWorkerContainerOptions",{});
    $r.addField("scope",rtl.string);
  });
  this.$rtti.$ExtClass("TJSServiceWorkerContainer",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "ServiceWorkerContainer"});
  this.$rtti.$ExtClass("TJSClipboardItemOptions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSClipBoardItem",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "ClipboardItem"});
  this.$rtti.$ExtClass("TJSClipBoard",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "Clipboard"});
  this.$rtti.$ExtClass("TJSNavigator",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Navigator"});
  this.$rtti.$ExtClass("TJSTouch",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Touch"});
  this.$rtti.$ExtClass("TJSTouchList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "TouchList"});
  this.$rtti.$ExtClass("TJSPerformance",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Performance"});
  this.$rtti.$ExtClass("TJSScreen",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Screen"});
  this.$rtti.$RefToProcVar("TJSParamEnumCallBack",{procsig: rtl.newTIProcSig([["aKey",rtl.string,2],["aValue",rtl.string,2]])});
  this.$rtti.$ExtClass("TJSURLSearchParams",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "URLSearchParams"});
  this.$rtti.$ExtClass("TJSURL",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "URL"});
  this.$rtti.$DynArray("TJSURLDynArray",{eltype: this.$rtti["TJSURL"]});
  this.$rtti.$RefToProcVar("TJSTimerCallBack",{procsig: rtl.newTIProcSig([],null,8)});
  this.$rtti.$StaticArray("Theader",{dims: [2], eltype: rtl.string});
  this.$rtti.$DynArray("THeaderArray",{eltype: this.$rtti["Theader"]});
  this.$rtti.$ExtClass("TJSHTMLHeaders",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Headers"});
  this.$rtti.$ExtClass("TJSMediaQueryList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "MediaQueryList"});
  this.$rtti.$ExtClass("TJSReadableStream",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "ReadableStream"});
  this.$rtti.$ExtClass("TJSWritableStream",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "WritableStream"});
  this.$rtti.$ExtClass("TJSBody",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Body"});
  this.$rtti.$ExtClass("TJSResponse",{ancestor: this.$rtti["TJSBody"], jsclass: "Response"});
  this.$rtti.$RefToProcVar("TFrameRequestCallback",{procsig: rtl.newTIProcSig([["aTime",rtl.double]])});
  this.$rtti.$ExtClass("TJSPostMessageOptions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  rtl.createClass(this,"TJSIdleCallbackOptions",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.timeout = 0;
    };
  });
  this.$rtti.$ExtClass("TJSIdleDeadline",{jsclass: "IdleDeadline"});
  this.$rtti.$ExtClass("TJSCacheDeleteOptions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSRequest",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Request"});
  this.$rtti.$DynArray("TJSRequestDynArray",{eltype: this.$rtti["TJSRequest"]});
  this.$rtti.$ExtClass("TJSCache",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Cache"});
  this.$rtti.$ExtClass("TJSCacheStorage",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "CacheStorage"});
  this.$rtti.$DynArray("TJSWindowArray",{eltype: this.$rtti["TJSWindow"]});
  this.$rtti.$RefToProcVar("TIdleCallbackProc",{procsig: rtl.newTIProcSig([["idleDeadline",this.$rtti["TJSIdleDeadline"]]])});
  this.$rtti.$ExtClass("TJSWindow",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Window"});
  this.$rtti.$ExtClass("TJSCSSStyleDeclaration",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "CSSStyleDeclaration"});
  this.$rtti.$ExtClass("TJSScrollIntoViewOptions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSHTMLElement",{ancestor: this.$rtti["TJSElement"], jsclass: "HTMLElement"});
  this.$rtti.$DynArray("TJSHTMLElementArray",{eltype: this.$rtti["TJSHTMLElement"]});
  this.$rtti.$ExtClass("TJSHTMLDivElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLDivElement"});
  this.$rtti.$ExtClass("TJSHTMLFormControlsCollection",{ancestor: this.$rtti["TJSHTMLCollection"], jsclass: "HTMLFormControlsCollection"});
  this.$rtti.$ExtClass("TJSHTMLFormElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLFormElement"});
  this.$rtti.$ExtClass("TJSValidityState",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "ValidityState"});
  rtl.createClassExt(this,"TJSBlobPropertyBag",Object,"",function () {
    this.$init = function () {
    };
    this.$final = function () {
    };
    this.Create$2 = function (aType) {
      this.type = aType;
      return this;
    };
    this.Create$3 = function (aType, aEndings) {
      this.type = aType;
      this.endings = aEndings;
      return this;
    };
  });
  this.$rtti.$ExtClass("TJSBlob",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "Blob"});
  this.$rtti.$ExtClass("TJSHTMLFile",{ancestor: this.$rtti["TJSBlob"], jsclass: "File"});
  this.$rtti.$ExtClass("TJSHTMLFileList",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "FileList"});
  this.$rtti.$ExtClass("TJSHTMLInputElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLInputElement"});
  this.$rtti.$ExtClass("TJSDOMSettableTokenList",{ancestor: this.$rtti["TJSDOMTokenList"], jsclass: "DOMSettableTokenList"});
  this.$rtti.$ExtClass("TJSHTMLOutputElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLOutputElement"});
  this.$rtti.$ExtClass("TJSHTMLImageElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "Image"});
  this.$rtti.$ExtClass("TJSHTMLLinkElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLLinkElement"});
  this.$rtti.$ExtClass("TJSHTMLAnchorElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLAnchorElement"});
  this.$rtti.$ExtClass("TJSHTMLMenuElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLMenuElement"});
  this.$rtti.$ExtClass("TJSHTMLButtonElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLButtonElement"});
  this.$rtti.$ExtClass("TJSHTMLLabelElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLLabelElement"});
  this.$rtti.$ExtClass("TJSHTMLTextAreaElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLTextAreaElement"});
  this.$rtti.$ExtClass("TJSHTMLEmbedElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLEmbedElement"});
  this.$rtti.$ExtClass("TJSHTMLOptionElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "Option"});
  this.$rtti.$ExtClass("TJSHTMLOptGroupElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLOptGroupElement"});
  this.$rtti.$ExtClass("TJSHTMLOptionsCollection",{ancestor: this.$rtti["TJSHTMLCollection"], jsclass: "HTMLOptionsCollection"});
  this.$rtti.$ExtClass("TJSHTMLSelectElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLSelectElement"});
  this.$rtti.$ExtClass("TJSHTMLTableSectionElement");
  this.$rtti.$ExtClass("TJSHTMLTableRowElement");
  this.$rtti.$ExtClass("TJSHTMLTableElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLTableElement"});
  this.$rtti.$ExtClass("TJSHTMLTableSectionElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLTableSectionElement"});
  this.$rtti.$ExtClass("TJSHTMLTableCellElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLTableCellElement"});
  this.$rtti.$ExtClass("TJSHTMLTableRowElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLTableRowElement"});
  this.$rtti.$ExtClass("TJSHTMLTableDataCellElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLTableDataCellElement"});
  this.$rtti.$ExtClass("TJSCanvasRenderingContext2D");
  this.$rtti.$RefToProcVar("THTMLCanvasToBlobCallback",{procsig: rtl.newTIProcSig([["aBlob",this.$rtti["TJSBlob"]]],rtl.boolean,8)});
  this.$rtti.$ExtClass("TJSHTMLCanvasElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLCanvasElement"});
  this.$rtti.$ExtClass("TJSHTMLProgressElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLProgressElement"});
  this.$rtti.$ExtClass("TJSDOMException",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "DOMException"});
  this.$rtti.$ExtClass("TJSFileReader",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "FileReader"});
  this.$rtti.$ExtClass("TJSCanvasGradient",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "CanvasGradient"});
  this.$rtti.$ExtClass("TJSCanvasPattern",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "CanvasPattern"});
  this.$rtti.$ExtClass("TJSPath2D",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Path2D"});
  this.$rtti.$ExtClass("TJSImageData",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "ImageData"});
  this.$rtti.$ExtClass("TJSTextMetrics",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "TextMetrics"});
  this.$rtti.$ExtClass("TJSCanvasRenderingContext2D",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "CanvasRenderingContext2D"});
  this.$rtti.$ExtClass("TJSHTMLIFrameElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLIFrameElement"});
  this.$rtti.$ExtClass("TJSHTMLScriptElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLScriptElement"});
  this.$rtti.$ExtClass("TJSXMLHttpRequestEventTarget",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "XMLHttpRequestEventTarget"});
  this.$rtti.$ExtClass("TJSXMLHttpRequestUpload",{ancestor: this.$rtti["TJSXMLHttpRequestEventTarget"], jsclass: "XMLHttpRequestUpload"});
  this.$rtti.$RefToProcVar("TJSOnReadyStateChangeHandler",{procsig: rtl.newTIProcSig([],null,8)});
  this.$rtti.$ExtClass("TJSXMLHttpRequest",{ancestor: this.$rtti["TJSXMLHttpRequestEventTarget"], jsclass: "XMLHttpRequest"});
  this.$rtti.$ExtClass("TJSUIEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "UIEvent"});
  this.$rtti.$ExtClass("TJSMouseEvent",{ancestor: this.$rtti["TJSUIEvent"], jsclass: "MouseEvent"});
  rtl.recNewT(this,"TJSWheelEventInit",function () {
    this.deltaX = 0.0;
    this.deltaY = 0.0;
    this.deltaZ = 0.0;
    this.deltaMode = 0;
    this.$eq = function (b) {
      return (this.deltaX === b.deltaX) && (this.deltaY === b.deltaY) && (this.deltaZ === b.deltaZ) && (this.deltaMode === b.deltaMode);
    };
    this.$assign = function (s) {
      this.deltaX = s.deltaX;
      this.deltaY = s.deltaY;
      this.deltaZ = s.deltaZ;
      this.deltaMode = s.deltaMode;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSWheelEventInit",{});
    $r.addField("deltaX",rtl.double);
    $r.addField("deltaY",rtl.double);
    $r.addField("deltaZ",rtl.double);
    $r.addField("deltaMode",rtl.nativeint);
  });
  this.$rtti.$ExtClass("TJSWheelEvent",{ancestor: this.$rtti["TJSMouseEvent"], jsclass: "WheelEvent"});
  this.$rtti.$ExtClass("TJSPointerEvent",{ancestor: this.$rtti["TJSMouseEvent"], jsclass: "PointerEvent"});
  this.$rtti.$ExtClass("TJSTouchEvent",{ancestor: this.$rtti["TJSUIEvent"], jsclass: "TouchEvent"});
  rtl.createClass(this,"TJSKeyNames",pas.System.TObject,function () {
    this.Alt = "Alt";
    this.AltGraph = "AltGraph";
    this.CapsLock = "CapsLock";
    this.Control = "Control";
    this.Fn = "Fn";
    this.FnLock = "FnLock";
    this.Hyper = "Hyper";
    this.Meta = "Meta";
    this.NumLock = "NumLock";
    this.ScrollLock = "ScrollLock";
    this.Shift = "Shift";
    this.Super = "Super";
    this.Symbol = "Symbol";
    this.SymbolLock = "SymbolLock";
    this.Enter = "Enter";
    this.Tab = "Tab";
    this.Space = "Space";
    this.ArrowDown = "ArrowDown";
    this.ArrowLeft = "ArrowLeft";
    this.ArrowRight = "ArrowRight";
    this.ArrowUp = "ArrowUp";
    this._End = "End";
    this.Home = "Home";
    this.PageDown = "PageDown";
    this.PageUp = "PageUp";
    this.BackSpace = "Backspace";
    this.Clear = "Clear";
    this.Copy = "Copy";
    this.CrSel = "CrSel";
    this.Cut = "Cut";
    this.Delete = "Delete";
    this.EraseEof = "EraseEof";
    this.ExSel = "ExSel";
    this.Insert = "Insert";
    this.Paste = "Paste";
    this.Redo = "Redo";
    this.Undo = "Undo";
    this.Accept = "Accept";
    this.Again = "Again";
    this.Attn = "Attn";
    this.Cancel = "Cancel";
    this.ContextMenu = "Contextmenu";
    this.Escape = "Escape";
    this.Execute = "Execute";
    this.Find = "Find";
    this.Finish = "Finish";
    this.Help = "Help";
    this.Pause = "Pause";
    this.Play = "Play";
    this.Props = "Props";
    this.Select = "Select";
    this.ZoomIn = "ZoomIn";
    this.ZoomOut = "ZoomOut";
    this.BrightnessDown = "BrightnessDown";
    this.BrightnessUp = "BrightnessUp";
    this.Eject = "Eject";
    this.LogOff = "LogOff";
    this.Power = "Power";
    this.PowerOff = "PowerOff";
    this.PrintScreen = "PrintScreen";
    this.Hibernate = "Hibernate";
    this.Standby = "Standby";
    this.WakeUp = "WakeUp";
    this.AllCandidates = "AllCandidates";
    this.Alphanumeric = "Alphanumeric";
    this.CodeInput = "CodeInput";
    this.Compose = "Compose";
    this.Convert = "Convert";
    this.Dead = "Dead";
    this.FinalMode = "FinalMode";
    this.GroupFirst = "GroupFirst";
    this.GroupLast = "GroupLast";
    this.GroupNext = "GroupNext";
    this.GroupPrevious = "GroupPrevious";
    this.ModelChange = "ModelChange";
    this.NextCandidate = "NextCandidate";
    this.NonConvert = "NonConvert";
    this.PreviousCandidate = "PreviousCandidate";
    this.Process = "Process";
    this.SingleCandidate = "SingleCandidate";
    this.HangulMode = "HangulMode";
    this.HanjaMode = "HanjaMode";
    this.JunjaMode = "JunjaMode";
    this.Eisu = "Eisu";
    this.Hankaku = "Hankaku";
    this.Hiranga = "Hiranga";
    this.HirangaKatakana = "HirangaKatakana";
    this.KanaMode = "KanaMode";
    this.Katakana = "Katakana";
    this.Romaji = "Romaji";
    this.Zenkaku = "Zenkaku";
    this.ZenkakuHanaku = "ZenkakuHanaku";
    this.F1 = "F1";
    this.F2 = "F2";
    this.F3 = "F3";
    this.F4 = "F4";
    this.F5 = "F5";
    this.F6 = "F6";
    this.F7 = "F7";
    this.F8 = "F8";
    this.F9 = "F9";
    this.F10 = "F10";
    this.F11 = "F11";
    this.F12 = "F12";
    this.F13 = "F13";
    this.F14 = "F14";
    this.F15 = "F15";
    this.F16 = "F16";
    this.F17 = "F17";
    this.F18 = "F18";
    this.F19 = "F19";
    this.F20 = "F20";
    this.Soft1 = "Soft1";
    this.Soft2 = "Soft2";
    this.Soft3 = "Soft3";
    this.Soft4 = "Soft4";
    this.Decimal = "Decimal";
    this.Key11 = "Key11";
    this.Key12 = "Key12";
    this.Multiply = "Multiply";
    this.Add = "Add";
    this.NumClear = "Clear";
    this.Divide = "Divide";
    this.Subtract = "Subtract";
    this.Separator = "Separator";
    this.AppSwitch = "AppSwitch";
    this.Call = "Call";
    this.Camera = "Camera";
    this.CameraFocus = "CameraFocus";
    this.EndCall = "EndCall";
    this.GoBack = "GoBack";
    this.GoHome = "GoHome";
    this.HeadsetHook = "HeadsetHook";
    this.LastNumberRedial = "LastNumberRedial";
    this.Notification = "Notification";
    this.MannerMode = "MannerMode";
    this.VoiceDial = "VoiceDial";
  });
  this.$rtti.$ExtClass("TJSKeyboardEvent",{ancestor: this.$rtti["TJSUIEvent"], jsclass: "KeyboardEvent"});
  this.$rtti.$ExtClass("TJSMutationObserver");
  rtl.recNewT(this,"TJSMutationRecord",function () {
    this.type_ = "";
    this.target = null;
    this.addedNodes = null;
    this.removedNodes = null;
    this.previousSibling = null;
    this.nextSibling = null;
    this.attributeName = "";
    this.attributeNamespace = "";
    this.oldValue = "";
    this.$eq = function (b) {
      return (this.type_ === b.type_) && (this.target === b.target) && (this.addedNodes === b.addedNodes) && (this.removedNodes === b.removedNodes) && (this.previousSibling === b.previousSibling) && (this.nextSibling === b.nextSibling) && (this.attributeName === b.attributeName) && (this.attributeNamespace === b.attributeNamespace) && (this.oldValue === b.oldValue);
    };
    this.$assign = function (s) {
      this.type_ = s.type_;
      this.target = s.target;
      this.addedNodes = s.addedNodes;
      this.removedNodes = s.removedNodes;
      this.previousSibling = s.previousSibling;
      this.nextSibling = s.nextSibling;
      this.attributeName = s.attributeName;
      this.attributeNamespace = s.attributeNamespace;
      this.oldValue = s.oldValue;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSMutationRecord",{});
    $r.addField("type_",rtl.string);
    $r.addField("target",$mod.$rtti["TJSNode"]);
    $r.addField("addedNodes",$mod.$rtti["TJSNodeList"]);
    $r.addField("removedNodes",$mod.$rtti["TJSNodeList"]);
    $r.addField("previousSibling",$mod.$rtti["TJSNode"]);
    $r.addField("nextSibling",$mod.$rtti["TJSNode"]);
    $r.addField("attributeName",rtl.string);
    $r.addField("attributeNamespace",rtl.string);
    $r.addField("oldValue",rtl.string);
  });
  this.$rtti.$DynArray("TJSMutationRecordArray",{eltype: this.$rtti["TJSMutationRecord"]});
  this.$rtti.$RefToProcVar("TJSMutationCallback",{procsig: rtl.newTIProcSig([["mutations",this.$rtti["TJSMutationRecordArray"]],["observer",this.$rtti["TJSMutationObserver"]]],null,8)});
  rtl.recNewT(this,"TJSMutationObserverInit",function () {
    this.attributes = false;
    this.attributeOldValue = false;
    this.characterData = false;
    this.characterDataOldValue = false;
    this.childList = false;
    this.subTree = false;
    this.attributeFilter = null;
    this.$eq = function (b) {
      return (this.attributes === b.attributes) && (this.attributeOldValue === b.attributeOldValue) && (this.characterData === b.characterData) && (this.characterDataOldValue === b.characterDataOldValue) && (this.childList === b.childList) && (this.subTree === b.subTree) && (this.attributeFilter === b.attributeFilter);
    };
    this.$assign = function (s) {
      this.attributes = s.attributes;
      this.attributeOldValue = s.attributeOldValue;
      this.characterData = s.characterData;
      this.characterDataOldValue = s.characterDataOldValue;
      this.childList = s.childList;
      this.subTree = s.subTree;
      this.attributeFilter = s.attributeFilter;
      return this;
    };
    var $r = $mod.$rtti.$Record("TJSMutationObserverInit",{});
    $r.addField("attributes",rtl.boolean);
    $r.addField("attributeOldValue",rtl.boolean);
    $r.addField("characterData",rtl.boolean);
    $r.addField("characterDataOldValue",rtl.boolean);
    $r.addField("childList",rtl.boolean);
    $r.addField("subTree",rtl.boolean);
    $r.addField("attributeFilter",pas.JS.$rtti["TJSArray"]);
  });
  this.$rtti.$ExtClass("TJSMutationObserver",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "MutationObserver"});
  this.$rtti.$DynArray("TJSMessagePortArray",{eltype: this.$rtti["TJSMessagePort"]});
  this.$rtti.$ExtClass("TJSInputEvent",{ancestor: this.$rtti["TJSUIEvent"], jsclass: "InputEvent"});
  this.$rtti.$ExtClass("TJSMessageEvent",{ancestor: this.$rtti["TJSEvent"], jsclass: "MessageEvent"});
  this.$rtti.$ExtClass("TJSWebSocket",{ancestor: this.$rtti["TJSEventTarget"], jsclass: "WebSocket"});
  this.$rtti.$ExtClass("TJSHTMLAudioTrack",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "AudioTrack"});
  this.$rtti.$ExtClass("TJSHTMLAudioTrackList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "AudioTrackList"});
  this.$rtti.$ExtClass("TJSHTMLVideoTrack",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "VideoTrack"});
  this.$rtti.$ExtClass("TJSHTMLVideoTrackList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "VideoTrackList"});
  this.$rtti.$ExtClass("TJSHTMLTextTrack",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "TextTrack"});
  this.$rtti.$ExtClass("TJSHTMLTextTrackList",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "TextTrackList"});
  this.$rtti.$ExtClass("TJSMEdiaError",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "MediaError"});
  this.$rtti.$ExtClass("TJSHTMLMediaStream",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "MediaStream"});
  this.$rtti.$ExtClass("TJSHTMLMediaController",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "MediaController"});
  this.$rtti.$ExtClass("TJSHTMLMediaElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLMediaElement"});
  this.$rtti.$ExtClass("TJSHTMLAudioElement",{ancestor: this.$rtti["TJSHTMLMediaElement"], jsclass: "HTMLAudioElement"});
  this.$rtti.$ExtClass("TJSHTMLVideoElement",{ancestor: this.$rtti["TJSHTMLMediaElement"], jsclass: "HTMLVideoElement"});
  this.$rtti.$ExtClass("TJSHTMLStyleElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLStyleElement"});
  this.$rtti.$ExtClass("TJSHTMLDetailsElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLDetailsElement"});
  this.$rtti.$ExtClass("TJSResizeObserverEntry",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "ResizeObserverEntry"});
  this.$rtti.$DynArray("TJSResizeObserverEntries",{eltype: this.$rtti["TJSResizeObserverEntry"]});
  this.$rtti.$ProcVar("TJSResizeObserverCallback",{procsig: rtl.newTIProcSig([["AEntries",this.$rtti["TJSResizeObserverEntries"]],["AObserver",this.$rtti["TJSResizeObserver"]]])});
  this.$rtti.$MethodVar("TJSResizeObserverCallbackObj",{procsig: rtl.newTIProcSig([["AEntries",this.$rtti["TJSResizeObserverEntries"]],["AObserver",this.$rtti["TJSResizeObserver"]]]), methodkind: 0});
  this.$rtti.$ExtClass("TJSResizeObserver",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "ResizeObserver"});
  this.$rtti.$DynArray("TJSFormDataEntryValueArray",{eltype: rtl.string});
  this.$rtti.$ExtClass("TJSFormData",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "FormData"});
  this.$rtti.$ExtClass("TJSHTMLTemplateElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLTemplateElement"});
  this.$rtti.$ExtClass("TJSHTMLOrXMLDocument",{ancestor: this.$rtti["TJSDocument"], jsclass: "Document"});
  this.$rtti.$ExtClass("TJSHTMLDocument",{ancestor: this.$rtti["TJSHTMLOrXMLDocument"], jsclass: "HTMLDocument"});
  this.$rtti.$ExtClass("TJSXMLDocument",{ancestor: this.$rtti["TJSHTMLOrXMLDocument"], jsclass: "HTMLDocument"});
  this.$rtti.$ExtClass("TDOMParser",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "DOMParser"});
  this.$rtti.$RefToProcVar("TOnChangeProcedure",{procsig: rtl.newTIProcSig([])});
  this.$rtti.$ExtClass("TJSPermissionDescriptor",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSPermissionStatus",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "PermissionStatus"});
  this.$rtti.$ExtClass("TJSPermissions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Permissions"});
  this.$rtti.$ExtClass("TJSFileSystemHandlePermissionDescriptor",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSFileSystemCreateWritableOptions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSFileSystemWritableFileStream");
  this.$rtti.$ExtClass("TJSFileSystemHandle",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "FileSystemHandle"});
  this.$rtti.$ExtClass("TJSFileSystemFileHandle",{ancestor: this.$rtti["TJSFileSystemHandle"], jsclass: "FileSystemFileHandle"});
  this.$rtti.$ExtClass("TJSGetFileHandleOptions",{jsclass: "Object"});
  this.$rtti.$ExtClass("TJSRemoveEntryOptions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSFileSystemDirectoryHandle",{ancestor: this.$rtti["TJSFileSystemHandle"], jsclass: "FileSystemDirectoryHandle"});
  this.$rtti.$ExtClass("TJSFileSystemWritableFileStream",{ancestor: this.$rtti["TJSWritableStream"], jsclass: "FileSystemWritableFileStream"});
  this.$rtti.$ExtClass("TJSShowOpenFilePickerTypeOptions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSShowOpenFilePickerOptions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSShowSaveFilePickerOptionsAccept",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.$rtti.$ExtClass("TJSShowSaveFilePickerOptions",{ancestor: pas.JS.$rtti["TJSObject"], jsclass: "Object"});
  this.HasServiceWorker = function () {
    var Result = false;
    if (window.navigator.serviceWorker) {
      return true}
     else return false;
    return Result;
  };
});
//# sourceMappingURL=web.js.map
