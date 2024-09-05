rtl.module("WEBLib.WebCtrls",["System","Classes","WEBLib.Controls","WEBLib.Graphics","SysUtils","Web","JS","WEBLib.Menus"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TBrowserSandboxType = {"0": "stAllowForms", stAllowForms: 0, "1": "stAllowModals", stAllowModals: 1, "2": "stAllowOrientationLock", stAllowOrientationLock: 2, "3": "stAllowPointerLock", stAllowPointerLock: 3, "4": "stAllowPopups", stAllowPopups: 4, "5": "stAllowPopupsToEscapeSandbox", stAllowPopupsToEscapeSandbox: 5, "6": "stAllowPresentation", stAllowPresentation: 6, "7": "stAllowSameOrigin", stAllowSameOrigin: 7, "8": "stAllowScripts", stAllowScripts: 8, "9": "stAllowTopNavigation", stAllowTopNavigation: 9, "10": "stAllowTopNavigationByUserActivation", stAllowTopNavigationByUserActivation: 10};
  this.$rtti.$Enum("TBrowserSandboxType",{minvalue: 0, maxvalue: 10, ordtype: 1, enumtype: this.TBrowserSandboxType});
  this.$rtti.$Set("TBrowserSandboxTypes",{comptype: this.$rtti["TBrowserSandboxType"]});
  this.TBrowserReferrerPolicy = {"0": "rfNone", rfNone: 0, "1": "rfNoReferrer", rfNoReferrer: 1, "2": "rfNoReferrerWhenDowngrade", rfNoReferrerWhenDowngrade: 2, "3": "rfOrigin", rfOrigin: 3, "4": "rfOriginWhenCrossOrigin", rfOriginWhenCrossOrigin: 4, "5": "rfUnsafeUrl", rfUnsafeUrl: 5};
  this.$rtti.$Enum("TBrowserReferrerPolicy",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.TBrowserReferrerPolicy});
  this.$rtti.$MethodVar("TBrowserLoadEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AEvent",pas.Web.$rtti["TJSEvent"]]]), methodkind: 0});
  rtl.createClass(this,"TBrowserControl",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FURL = "";
      this.FSandbox = {};
      this.FReferrerPolicy = 0;
      this.FLoadPtr = null;
      this.FOnLoad = null;
    };
    this.$final = function () {
      this.FSandbox = undefined;
      this.FOnLoad = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetURL = function (Value) {
      var el = null;
      this.FURL = Value;
      el = this.GetElementHandle();
      el.setAttribute("src",Value);
    };
    this.SetSandbox = function (Value) {
      this.FSandbox = rtl.refSet(Value);
      this.UpdateElementVisual();
    };
    this.SetReferrerPolicy = function (Value) {
      this.FReferrerPolicy = Value;
      this.UpdateElementVisual();
    };
    this.DoLoad = function (Event) {
      if (this.FOnLoad != null) this.FOnLoad(this,Event);
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("IFRAME");
      return Result;
    };
    this.UpdateElementVisual = function () {
      var $Self = this;
      var SandboxStr = "";
      function AppendStr(s, appstr) {
        if (s.get() === "") {
          s.set(appstr)}
         else s.set(s.get() + " " + appstr);
      };
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.FBorderStyle === pas["WEBLib.Controls"].TBorderStyle.bsSingle) {
        this.GetElementHandle().style.setProperty("border","1px solid silver")}
       else this.GetElementHandle().style.setProperty("border","0px");
      SandboxStr = "";
      if ($mod.TBrowserSandboxType.stAllowForms in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-forms");
      if ($mod.TBrowserSandboxType.stAllowModals in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-modals");
      if ($mod.TBrowserSandboxType.stAllowOrientationLock in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-orientation-lock");
      if ($mod.TBrowserSandboxType.stAllowPointerLock in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-pointer-lock");
      if ($mod.TBrowserSandboxType.stAllowPopups in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-popups");
      if ($mod.TBrowserSandboxType.stAllowPopupsToEscapeSandbox in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-popups-to-escape-sandbox");
      if ($mod.TBrowserSandboxType.stAllowPresentation in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-presentation");
      if ($mod.TBrowserSandboxType.stAllowSameOrigin in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-same-origin");
      if ($mod.TBrowserSandboxType.stAllowScripts in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-scripts");
      if ($mod.TBrowserSandboxType.stAllowTopNavigation in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-top-navigation");
      if ($mod.TBrowserSandboxType.stAllowTopNavigationByUserActivation in this.FSandbox) AppendStr({get: function () {
          return SandboxStr;
        }, set: function (v) {
          SandboxStr = v;
        }},"allow-top-navigation-by-user-activation");
      if (SandboxStr !== "") {
        this.GetElementHandle().setAttribute("sandbox",SandboxStr);
      };
      var $tmp = this.FReferrerPolicy;
      if ($tmp === $mod.TBrowserReferrerPolicy.rfNoReferrer) {
        this.GetElementHandle().setAttribute("referrerpolicy","no-referrer")}
       else if ($tmp === $mod.TBrowserReferrerPolicy.rfNoReferrerWhenDowngrade) {
        this.GetElementHandle().setAttribute("referrerpolicy","no-referrer-when-downgrade")}
       else if ($tmp === $mod.TBrowserReferrerPolicy.rfOrigin) {
        this.GetElementHandle().setAttribute("referrerpolicy","origin")}
       else if ($tmp === $mod.TBrowserReferrerPolicy.rfOriginWhenCrossOrigin) {
        this.GetElementHandle().setAttribute("referrerpolicy","origin-when-cross-origin")}
       else if ($tmp === $mod.TBrowserReferrerPolicy.rfUnsafeUrl) this.GetElementHandle().setAttribute("referrerpolicy","unsafe-url");
    };
    this.BindEvents = function () {
      var eh = null;
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementBindHandle() != null) {
        eh = this.GetElementBindHandle();
        eh.addEventListener("load",this.FLoadPtr);
      };
    };
    this.UnbindEvents = function () {
      var eh = null;
      pas["WEBLib.Controls"].TControl.UnbindEvents.call(this);
      if (this.GetElementBindHandle() != null) {
        eh = this.GetElementBindHandle();
        eh.removeEventListener("load",this.FLoadPtr);
      };
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FLoadPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      this.FLoadPtr = rtl.createCallback(this,"DoLoad");
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetWidth(400);
      this.SetHeight(300);
    };
    this.Navigate = function (AURL) {
      this.SetURL(AURL);
    };
    this.CurrentURL = function () {
      var Result = "";
      var url = "";
      var el = null;
      el = this.GetElementHandle();
      url = el.contentWindow.location;
      Result = url;
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("BorderStyle",2,pas["WEBLib.Controls"].$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle",{Default: pas["WEBLib.Controls"].TBorderStyle.bsSingle});
    $r.addProperty("ReferrerPolicy",2,$mod.$rtti["TBrowserReferrerPolicy"],"FReferrerPolicy","SetReferrerPolicy");
    $r.addProperty("Sandbox",2,$mod.$rtti["TBrowserSandboxTypes"],"FSandbox","SetSandbox");
    $r.addProperty("URL",2,rtl.string,"FURL","SetURL");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnLoad",0,$mod.$rtti["TBrowserLoadEvent"],"FOnLoad","FOnLoad");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
  });
  rtl.createClass(this,"TWebBrowserControl",this.TBrowserControl,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TYoutube",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FVideoID = "";
      this.FAllowFullScreen = false;
      this.FAutoPlay = false;
    };
    this.SetAllowFullScreen = function (Value) {
      this.FAllowFullScreen = Value;
      this.UpdateElement();
    };
    this.SetVideoID = function (Value) {
      this.FVideoID = Value;
      this.UpdateElement();
    };
    this.CreateElement = function () {
      var Result = null;
      var LDiv = null;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        LDiv = document.createElement("DIV");
        LDiv.style.setProperty("background-color","slategray");
        LDiv.style.setProperty("background-repeat","no-repeat");
        LDiv.style.setProperty("background-position-y","center");
        LDiv.style.setProperty("background-image","url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAuNDc5OTk5OTU5NDY4ODQyIDE2OS43MDk4Njkz" + "ODQ3NjYgMTE5LjA4NTYyODA5MjI4OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PG" + "RlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJkZWYwIiB4MT0iMC41IiB4Mj0iMC41IiB5MT0iMSIgeTI9IjMuMTAwNzJFLTA2Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNG" + "RjAwMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjZCMDAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Zz48cGF0aCBkPSJNMzEuMDI5MywxLjc3NzM0QzEzLj" + "E0MjcsMi45OTQ2Nyw0LjE1NDY3LDYuMTIsMS40ODgsMjguNzkzM0wxLjQ4OCwyOC43OTMzQzAuNTA2NjY3LDM3LjEzNiwwLjAwOTMzMzMzLDQ4LjQwMTMsMCw1OS42OTg3TDAsNjAu" + "MzQ1M0MwLjAwOTMzMzMzLDcxLjYyOTMsMC41MDQsODIuODg5MywxLjQ4OCw5MS4yNTA3TDEuNDg4LDkxLjI1MDdDNC4xNTQ2NywxMTMuOTI3LDEzLjE0MjcsMTE3LjA1MiwzMS4wMj" + "kzLDExOC4yNjdMMzEuMDI5MywxMTguMjY3QzU2LjQ3NzMsMTIwLDExMy4yNTEsMTE5Ljk5NywxMzguNjgsMTE4LjI2N0wxMzguNjgsMTE4LjI2N0MxNTYuNTY4LDExNy4wNTIsMTY1" + "LjU1NSwxMTMuOTI3LDE2OC4yMjMsOTEuMjUwN0wxNjguMjIzLDkxLjI1MDdDMTcwLjIwMyw3NC40MTczLDE3MC4yMDgsNDUuNjg2NywxNjguMjIzLDI4Ljc5MzNMMTY4LjIyMywyOC" + "43OTMzQzE2NS41NTUsNi4xMTg2OCwxNTYuNTY4LDIuOTk0NjcsMTM4LjY4LDEuNzc3MzRMMTM4LjY4LDEuNzc3MzRDMTI1Ljk2MywwLjkxMjAxLDEwNS4zOTcsMC40ODAwMDMsODQu" + "ODQsMC40ODAwMDNMODQuODQsMC40ODAwMDNDNjQuMjkyLDAuNDc4Njc2LDQzLjc1MDcsMC45MTIwMSwzMS4wMjkzLDEuNzc3MzR6IiBmaWxsPSJ1cmwoI2RlZjApIi8+PHBhdGggZD" + "0iTTEwOC40MjUsNjAuMDIyN0w2Mi4yNDE5LDkxLjk0NjcgNjIuMjQxOSwyOC4wOTg3IDEwOC40MjUsNjAuMDIyN3oiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9zdmc+)");
        LDiv.style.setProperty("background-position-x","center");
        LDiv.style.setProperty("background-size","128px");
        Result = LDiv;
      } else {
        Result = document.createElement("IFRAME");
        Result.setAttribute("id",this.GetID());
        Result.setAttribute("frameborder","0");
      };
      return Result;
    };
    this.UpdateElement = function () {
      var FURL = "";
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.IsUpdating()) return;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        if (this.GetElementHandle() != null) {
          this.GetElementHandle().style.setProperty("background-color","slategray");
        };
      };
      if (this.GetContainer() != null) {
        if (this.FVideoID !== "") {
          FURL = "https://www.youtube.com/embed/" + this.FVideoID;
          if (this.FAutoPlay) FURL = FURL + "?autoplay=1";
          this.GetContainer().setAttribute("src",FURL);
        };
        if (this.FAllowFullScreen) {
          this.GetContainer().setAttribute("allowfullscreen","allowfullscreen")}
         else this.GetContainer().removeAttribute("allowfullscreen");
      };
    };
    this.UpdateElementVisual = function () {
      pas["WEBLib.Controls"].TCustomControl.UpdateElementVisual.call(this);
      if (this.IsUpdating()) return;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        if (this.GetElementHandle() != null) {
          this.GetElementHandle().style.setProperty("background-color","slategray");
        };
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetWidth(400);
      this.SetHeight(300);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AllowFullScreen",2,rtl.boolean,"FAllowFullScreen","SetAllowFullScreen");
    $r.addProperty("AutoPlay",0,rtl.boolean,"FAutoPlay","FAutoPlay");
    $r.addProperty("VideoID",2,rtl.string,"FVideoID","SetVideoID");
  });
  rtl.createClass(this,"TWebYoutube",this.TYoutube,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$MethodVar("TMapClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Lon",rtl.double],["Lat",rtl.double]]), methodkind: 0});
  this.$rtti.$MethodVar("TMapZoomEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ZoomLevel",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TMapMarkerClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AIndex",rtl.longint],["AMarker",pas["WEBLib.Controls"].$rtti["TJSObjectRecord"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TMapPolygonClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AIndex",rtl.longint],["APolygon",pas["WEBLib.Controls"].$rtti["TJSObjectRecord"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TMapPolylineClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AIndex",rtl.longint],["APolyline",pas["WEBLib.Controls"].$rtti["TJSObjectRecord"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TMapCircleClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AIndex",rtl.longint],["ACircle",pas["WEBLib.Controls"].$rtti["TJSObjectRecord"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TMapRectangleClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AIndex",rtl.longint],["ARectangle",pas["WEBLib.Controls"].$rtti["TJSObjectRecord"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TMapKMLClickEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AIndex",rtl.longint],["AKML",pas["WEBLib.Controls"].$rtti["TJSObjectRecord"]]]), methodkind: 0});
  this.TGoogleMarkerColor = {"0": "mcDefault", mcDefault: 0, "1": "mcRed", mcRed: 1, "2": "mcBlue", mcBlue: 2, "3": "mcGreen", mcGreen: 3, "4": "mcPurple", mcPurple: 4, "5": "mcYellow", mcYellow: 5};
  this.$rtti.$Enum("TGoogleMarkerColor",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.TGoogleMarkerColor});
  this.TGoogleMarkerShape = {"0": "msPin", msPin: 0, "1": "msPinDot", msPinDot: 1, "2": "msFlag", msFlag: 2, "3": "msBookmark", msBookmark: 3, "4": "msFlagSmall", msFlagSmall: 4, "5": "msHome", msHome: 5, "6": "msFavorite", msFavorite: 6, "7": "msStar", msStar: 7, "8": "msCustom", msCustom: 8};
  this.$rtti.$Enum("TGoogleMarkerShape",{minvalue: 0, maxvalue: 8, ordtype: 1, enumtype: this.TGoogleMarkerShape});
  this.TGoogleTravelMode = {"0": "tmDriving", tmDriving: 0, "1": "tmWalking", tmWalking: 1, "2": "tmBicycling", tmBicycling: 2, "3": "tmTransit", tmTransit: 3};
  this.$rtti.$Enum("TGoogleTravelMode",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TGoogleTravelMode});
  this.TGoogleMapType = {"0": "mtDefault", mtDefault: 0, "1": "mtSatellite", mtSatellite: 1, "2": "mtHybrid", mtHybrid: 2, "3": "mtTerrain", mtTerrain: 3};
  this.$rtti.$Enum("TGoogleMapType",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TGoogleMapType});
  this.TGoogleMapStyle = {"0": "mstDefault", mstDefault: 0, "1": "mstNightMode", mstNightMode: 1, "2": "mstCustom", mstCustom: 2};
  this.$rtti.$Enum("TGoogleMapStyle",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TGoogleMapStyle});
  this.$rtti.$Class("TGoogleMaps");
  rtl.createClass(this,"TGoogleMapsOptions",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOwner = null;
      this.FCustomStyle = null;
      this.FMapStyle = 0;
      this.FDefaultLongitude = 0.0;
      this.FDefaultLatitude = 0.0;
      this.FDefaultZoomLevel = 0;
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FCustomStyle = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetCustomStyle = function (Value) {
      this.FCustomStyle.Assign(Value);
    };
    this.SetMapStyle = function (Value) {
      var map = null;
      var cstyle = "";
      var ostyle = null;
      this.FMapStyle = Value;
      map = this.FOwner.GetMap();
      if (!(map != null)) return;
      if (this.FMapStyle === $mod.TGoogleMapStyle.mstNightMode) {
        var myStyle =
              [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#242f3e"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#746855"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#242f3e"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#d59563"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#d59563"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#263c3f"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#6b9a76"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#38414e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#212a37"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9ca5b3"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#746855"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#1f2835"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#f3d19c"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#2f3948"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#d59563"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#17263c"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#515c6d"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#17263c"
                    }
                  ]
                }
              ];
        
              map.setOptions({styles: myStyle});
      } else if ((this.FMapStyle === $mod.TGoogleMapStyle.mstCustom) && (this.FCustomStyle.GetTextStr() !== "")) {
        cstyle = this.FCustomStyle.GetTextStr();
        try {
          ostyle = JSON.parse(cstyle);
          map.setOptions({styles: ostyle});
        } catch ($e) {
        };
      } else {
        map.setOptions({styles: []});
      };
    };
    this.SetDefaultLatitude = function (Value) {
      if (this.FDefaultLatitude !== Value) {
        this.FDefaultLatitude = Value;
        this.FOwner.UpdateElement();
        this.FOwner.PanTo(this.FDefaultLatitude,this.FDefaultLongitude);
      };
    };
    this.SetDefaultLongitude = function (Value) {
      if (this.FDefaultLongitude !== Value) {
        this.FDefaultLongitude = Value;
        this.FOwner.UpdateElement();
        this.FOwner.PanTo(this.FDefaultLatitude,this.FDefaultLongitude);
      };
    };
    this.SetDefaultZoomLevel = function (Value) {
      if ((this.FDefaultZoomLevel !== Value) && (Value >= 0) && (Value <= 21)) {
        this.FDefaultZoomLevel = Value;
        this.FOwner.UpdateElement();
        this.FOwner.SetZoom(Value);
      };
    };
    this.Create$1 = function (AGoogleMaps) {
      pas.System.TObject.Create.call(this);
      this.FCustomStyle = pas.Classes.TStringList.$create("Create$1");
      this.FMapStyle = $mod.TGoogleMapStyle.mstDefault;
      this.FDefaultLatitude = -34.397;
      this.FDefaultLongitude = 150.644;
      this.FDefaultZoomLevel = 8;
      this.FOwner = AGoogleMaps;
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FCustomStyle");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      pas.Classes.TPersistent.Assign.apply(this,arguments);
      this.FCustomStyle = rtl.as(Source,$mod.TGoogleMapsOptions).FCustomStyle;
      this.FMapStyle = rtl.as(Source,$mod.TGoogleMapsOptions).FMapStyle;
      this.FDefaultLatitude = rtl.as(Source,$mod.TGoogleMapsOptions).FDefaultLatitude;
      this.FDefaultLongitude = rtl.as(Source,$mod.TGoogleMapsOptions).FDefaultLongitude;
      this.FDefaultZoomLevel = rtl.as(Source,$mod.TGoogleMapsOptions).FDefaultZoomLevel;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AGoogleMaps",$mod.$rtti["TGoogleMaps"]]]);
    $r.addProperty("CustomStyle",2,pas.Classes.$rtti["TStringList"],"FCustomStyle","SetCustomStyle");
    $r.addProperty("MapStyle",2,$mod.$rtti["TGoogleMapStyle"],"FMapStyle","SetMapStyle",{Default: $mod.TGoogleMapStyle.mstDefault});
    $r.addProperty("DefaultLatitude",2,rtl.double,"FDefaultLatitude","SetDefaultLatitude",{Default: -34.397});
    $r.addProperty("DefaultLongitude",2,rtl.double,"FDefaultLongitude","SetDefaultLongitude",{Default: 150.644});
    $r.addProperty("DefaultZoomLevel",2,rtl.longint,"FDefaultZoomLevel","SetDefaultZoomLevel",{Default: 8});
  });
  this.TGoogleMapsRender = {"0": "mrRaster", mrRaster: 0, "1": "mrVector", mrVector: 1};
  this.$rtti.$Enum("TGoogleMapsRender",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TGoogleMapsRender});
  rtl.createClass(this,"TGoogleMaps",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FUpdateCount$1 = 0;
      this.FReq = null;
      this.FAPIKey = "";
      this.FOldAPIKey = "";
      this.FMap = null;
      this.FDirectionsService = null;
      this.FDirectionsDisplay = null;
      this.FCode = false;
      this.FBound = false;
      this.FOnMapClick = null;
      this.FOnMapDblClick = null;
      this.FOnMapZoom = null;
      this.FOnMapPan = null;
      this.FOnGeoCoded = null;
      this.FOnMapIdle = null;
      this.FOnMapLoaded = null;
      this.FOnMarkerClick = null;
      this.FOnPolygonClick = null;
      this.FOnPolylineClick = null;
      this.FOnCircleClick = null;
      this.FOnRectangleClick = null;
      this.FOnKMLClick = null;
      this.FOptions = null;
      this.FMapID = "";
      this.FMapRender = 0;
    };
    this.$final = function () {
      this.FReq = undefined;
      this.FMap = undefined;
      this.FDirectionsService = undefined;
      this.FDirectionsDisplay = undefined;
      this.FOnMapClick = undefined;
      this.FOnMapDblClick = undefined;
      this.FOnMapZoom = undefined;
      this.FOnMapPan = undefined;
      this.FOnGeoCoded = undefined;
      this.FOnMapIdle = undefined;
      this.FOnMapLoaded = undefined;
      this.FOnMarkerClick = undefined;
      this.FOnPolygonClick = undefined;
      this.FOnPolylineClick = undefined;
      this.FOnCircleClick = undefined;
      this.FOnRectangleClick = undefined;
      this.FOnKMLClick = undefined;
      this.FOptions = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetAPIKey = function (Value) {
      if (this.FAPIKey !== Value) {
        this.FAPIKey = Value;
        this.UpdateElement();
      };
    };
    this.GetMarker = function (AIndex) {
      var Result = null;
      var res = null;
      res = this.FMarkers[AIndex];
      Result = res;
      return Result;
    };
    this.GetCircle = function (AIndex) {
      var Result = null;
      var res = null;
      res = this.FCircles[AIndex];
      Result = res;
      return Result;
    };
    this.GetRectangle = function (AIndex) {
      var Result = null;
      var res = null;
      res = this.FGetRectangle[AIndex];
      Result = res;
      return Result;
    };
    this.GetPolygon = function (AIndex) {
      var Result = null;
      var res = null;
      res = this.FPolygon[AIndex];
      Result = res;
      return Result;
    };
    this.GetPolyline = function (AIndex) {
      var Result = null;
      var res = null;
      res = this.FPolyline[AIndex];
      Result = res;
      return Result;
    };
    this.SetMapID = function (Value) {
      if (this.FMapID !== Value) {
        this.FMapID = Value;
        this.UpdateElement();
      };
    };
    this.SetMapRender = function (Value) {
      if (this.FMapRender !== Value) {
        this.FMapRender = Value;
        this.UpdateElement();
      };
    };
    this.GetMap = function () {
      var Result = null;
      var map = null;
      var id = "";
      if (this.FMap != null) {
        Result = this.FMap}
       else {
        map = null;
        id = this.GetID();
        var el = document.getElementById(id);
        if (el != null) {
          map = el.gMap;
        };
        Result = map;
        if (map != null) this.FMap = Result;
      };
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      this.FDirectionsService = null;
      this.FDirectionsDisplay = null;
      Result = document.createElement("DIV");
      Result.setAttribute("id",this.GetID());
      this.FMap = null;
      return Result;
    };
    this.UpdateElement = function () {
      var map = null;
      var id = "";
      var srcurl = "";
      var scriptsrc = "";
      var mapidstr = "";
      var mapbeta = "";
      var scr = null;
      var scro = null;
      var sp = null;
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.IsUpdating()) return;
      if (this.FUpdateCount$1 > 0) return;
      if (this.GetIsLinked() && (pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) return;
      if ((!this.FCode && (this.FAPIKey !== "")) || (this.FAPIKey !== this.FOldAPIKey)) {
        this.FCode = true;
        id = this.GetID();
        this.FOldAPIKey = this.FAPIKey;
        scr = document.getElementById("scrgooglemaps");
        if (scr != null) {
          document.head.removeChild(scr);
        };
        scro = document.getElementById("scrogooglemaps");
        if (scro != null) {
          document.head.removeChild(scro);
        };
        if ((this.FMapRender === $mod.TGoogleMapsRender.mrVector) && (this.FMapID !== "")) mapbeta = "v=beta&";
        mapidstr = "";
        if (this.FMapID !== "") mapidstr = "mapId:'" + this.FMapID + "'," + "\r\n";
        srcurl = "https://maps.googleapis.com/maps/api/js?" + mapbeta + "key=" + this.FAPIKey + "&callback=initMap" + id;
        scriptsrc = "var gmapserror = false;" + "\r\n" + "function initMap" + id + "() { " + "\r\n" + 'var el = document.getElementById("' + id + '");' + "\r\n" + 'if (el == null) { alert("Google Maps DIV element not found!"); return; }' + "\r\n" + "map = new google.maps.Map(el, {" + "\r\n" + "center: {lat: " + pas.SysUtils.StringReplace(pas.SysUtils.FloatToStr(this.FOptions.FDefaultLatitude),",",".",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll)) + ", lng: " + pas.SysUtils.StringReplace(pas.SysUtils.FloatToStr(this.FOptions.FDefaultLongitude),",",".",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll)) + "}," + "\r\n" + mapidstr + "zoom: " + pas.SysUtils.IntToStr(this.FOptions.FDefaultZoomLevel) + "});" + "\r\n" + "el.gMap = map;" + "\r\n" + "}";
        scr = document.createElement("script");
        scr.addEventListener("load",rtl.createSafeCallback(this,"DoLoaded"));
        scr.defer = true;
        scr.async = true;
        scr.src = srcurl;
        scr.type = 'text/javascript';
        document.head.appendChild(scr);
        scr.setAttribute("id","scrgooglemaps");
        scro = document.createElement("script");
        scro.innerHTML = scriptsrc;
        document.head.appendChild(scro);
        scro.setAttribute("id","scrogooglemaps");
      } else if (this.GetElementHandle() != null) {
        this.GetElementHandle().style.setProperty("border","1px solid gray");
        this.GetElementHandle().style.setProperty("background-color","#eee");
        if (this.GetElementHandle().childElementCount === 0) {
          sp = document.createElement("SPAN");
          srcurl = "<br>Set the Google Maps JavaScript API key via WebGoogleMaps.APIKey in order to see the map.<br>" + 'Request the key via <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">this page</a>';
          sp.innerHTML = srcurl;
          this.GetElementHandle().appendChild(sp);
        };
      };
    };
    this.SetControlCursor = function (Value) {
      var map = null;
      var s = "";
      pas["WEBLib.Controls"].TControl.SetControlCursor.apply(this,arguments);
      map = this.GetMap();
      if (Value === 0) {
        s = "''"}
       else s = pas["WEBLib.Controls"].GetHTMLCursorName(Value);
      if (map != null) {
        map.setOptions({draggableCursor: s});
      };
    };
    this.BindEvents = function () {
      var map = null;
      var ptr1 = null;
      var ptr2 = null;
      var ptr3 = null;
      var ptr4 = null;
      var ptr5 = null;
      var dirsvc = null;
      var dirdispl = null;
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.IsUpdating()) return;
      map = this.GetMap();
      if ((map != null) && !this.FBound && !(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) {
        ptr1 = rtl.createCallback(this,"HandleMapClick");
        ptr2 = rtl.createCallback(this,"HandleMapDblClick");
        ptr3 = rtl.createCallback(this,"HandleMapPan");
        ptr4 = rtl.createCallback(this,"HandleMapZoom");
        ptr5 = rtl.createCallback(this,"HandleMapIdle");
        this.FMarkers = [];
        this.FPolygons = [];
        this.FPolylines = [];
        this.FCircles = [];
        this.FRectangles = [];
        this.FKMLs = [];
        dirsvc = new google.maps.DirectionsService;
        dirdispl = new google.maps.DirectionsRenderer;
        dirdispl.setMap(map);
        map.addListener('click', ptr1);
        map.addListener('dblclick', ptr2);
        map.addListener('center_changed',ptr3);
        map.addListener('zoom_changed',ptr4);
        map.addListener('tilesloaded',ptr5);
        this.FDirectionsService = dirsvc;
        this.FDirectionsDisplay = dirdispl;
        this.FBound = true;
      };
    };
    this.HandleMapClick = function (e) {
      var lon = 0.0;
      var lat = 0.0;
      lon = e.latLng.lng();
      lat = e.latLng.lat();
      if (this.FOnMapClick != null) this.FOnMapClick(this,lon,lat);
    };
    this.HandleMapDblClick = function (e) {
      var lon = 0.0;
      var lat = 0.0;
      lon = e.latLng.lng();
      lat = e.latLng.lat();
      if (this.FOnMapDblClick != null) this.FOnMapDblClick(this,lon,lat);
    };
    this.HandleMapPan = function (e) {
      var lon = 0.0;
      var lat = 0.0;
      var c = map.getCenter();
      lon = c.lng();
      lat = c.lat();
      if (this.FOnMapPan != null) this.FOnMapPan(this,lon,lat);
    };
    this.HandleMapZoom = function (e) {
      var map = null;
      var zoom = 0;
      map = this.GetMap();
      zoom = map.getZoom();
      if (this.FOnMapZoom != null) this.FOnMapZoom(this,zoom);
    };
    this.HandleMapIdle = function (e) {
      if (this.FOnMapIdle != null) this.FOnMapIdle(this);
    };
    this.HandleMarkerClick = function (e) {
      var idx = 0;
      var LObjRec = pas["WEBLib.Controls"].TJSObjectRecord.$new();
      idx = e.idx;
      if (this.FOnMarkerClick != null) {
        LObjRec.jsobject = e;
        this.FOnMarkerClick(this,idx,pas["WEBLib.Controls"].TJSObjectRecord.$clone(LObjRec));
      };
    };
    this.HandlePolygonClick = function (e) {
      var idx = 0;
      var LObjRec = pas["WEBLib.Controls"].TJSObjectRecord.$new();
      idx = e.idx;
      if (this.FOnPolygonClick != null) {
        LObjRec.jsobject = e;
        this.FOnPolygonClick(this,idx,pas["WEBLib.Controls"].TJSObjectRecord.$clone(LObjRec));
      };
    };
    this.HandlePolylineClick = function (e) {
      var idx = 0;
      var LObjRec = pas["WEBLib.Controls"].TJSObjectRecord.$new();
      idx = e.idx;
      if (this.FOnPolylineClick != null) {
        LObjRec.jsobject = e;
        this.FOnPolylineClick(this,idx,pas["WEBLib.Controls"].TJSObjectRecord.$clone(LObjRec));
      };
    };
    this.HandleCircleClick = function (e) {
      var idx = 0;
      var LObjRec = pas["WEBLib.Controls"].TJSObjectRecord.$new();
      idx = e.idx;
      if (this.FOnCircleClick != null) {
        LObjRec.jsobject = e;
        this.FOnCircleClick(this,idx,pas["WEBLib.Controls"].TJSObjectRecord.$clone(LObjRec));
      };
    };
    this.HandleRectangleClick = function (e) {
      var idx = 0;
      var LObjRec = pas["WEBLib.Controls"].TJSObjectRecord.$new();
      idx = e.idx;
      if (this.FOnRectangleClick != null) {
        LObjRec.jsobject = e;
        this.FOnRectangleClick(this,idx,pas["WEBLib.Controls"].TJSObjectRecord.$clone(LObjRec));
      };
    };
    this.HandleKMLClick = function (e) {
      var idx = 0;
      var LObjRec = pas["WEBLib.Controls"].TJSObjectRecord.$new();
      idx = e.idx;
      if (this.FOnKMLClick != null) {
        LObjRec.jsobject = e;
        this.FOnKMLClick(this,idx,pas["WEBLib.Controls"].TJSObjectRecord.$clone(LObjRec));
      };
    };
    this.HandleResponse = function (Event) {
      var Result = false;
      var fnd = false;
      var reslat = 0.0;
      var reslon = 0.0;
      Result = true;
      fnd = false;
      var s = Event.target.responseText;
      var js = JSON.parse(s);
      if (js.status == "OK") {
        fnd = true;
        var lat = js.results[0].geometry.location.lat;
        var lng = js.results[0].geometry.location.lng;
        reslon = lng;
        reslat = lat;
      };
      if (fnd && (this.FOnGeoCoded != null)) {
        this.FOnGeoCoded(this,reslon,reslat);
      };
      return Result;
    };
    this.HandleAbort = function (Event) {
      var Result = false;
      Result = true;
      return Result;
    };
    this.TravelModeStr = function (ATravelMode) {
      var Result = "";
      Result = "DRIVING";
      var $tmp = ATravelMode;
      if ($tmp === $mod.TGoogleTravelMode.tmDriving) {
        Result = "DRIVING"}
       else if ($tmp === $mod.TGoogleTravelMode.tmWalking) {
        Result = "WALKING"}
       else if ($tmp === $mod.TGoogleTravelMode.tmBicycling) {
        Result = "BICYCLING"}
       else if ($tmp === $mod.TGoogleTravelMode.tmTransit) Result = "TRANSIT";
      return Result;
    };
    this.DoLoaded = function (Event) {
      var Result = false;
      this.BindEvents();
      Result = true;
      this.FOptions.SetMapStyle(this.FOptions.FMapStyle);
      if (this.FCursor !== 0) this.SetControlCursor(this.FCursor);
      if (this.FOnMapLoaded != null) this.FOnMapLoaded(this);
      return Result;
    };
    this.Loaded = function () {
      pas["WEBLib.Controls"].TCustomControl.Loaded.call(this);
    };
    this.GoogleLoaded = function () {
      var Result = false;
      var res = false;
      res = false;
      if (typeof google === 'object' && typeof google.maps === 'object')
      {
        res = true;
      };
      Result = res;
      return Result;
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FOptions = $mod.TGoogleMapsOptions.$create("Create$1",[this]);
      this.SetWidth(400);
      this.SetHeight(300);
    };
    this.SetCenter = function (Lat, Lon) {
      var map = null;
      map = this.GetMap();
      if (map != null) {
        map.setCenter(new google.maps.LatLng(Lat, Lon));
      };
    };
    this.GetCenter = function (Lat, Lon) {
      var Result = false;
      var sLon = "";
      var sLat = "";
      Result = false;
      Lon.set(-1);
      Lat.set(-1);
      sLon = map.getCenter().lng().toString();
      sLat = map.getCenter().lat().toString();
      if ((sLon !== "") && (sLat !== "")) {
        Lon.set(pas.SysUtils.StrToFloat(sLon));
        Lat.set(pas.SysUtils.StrToFloat(sLat));
        Result = true;
      };
      return Result;
    };
    this.GetBounds = function (NorthEastLat, NorthEastLon, SouthWestLat, SouthWestLon) {
      var Result = false;
      var neLon = "";
      var neLat = "";
      var swLon = "";
      var swLat = "";
      Result = false;
      NorthEastLon.set(-1);
      NorthEastLat.set(-1);
      SouthWestLon.set(-1);
      SouthWestLat.set(-1);
      neLon = map.getBounds().getNorthEast().lng().toString();
      neLat = map.getBounds().getNorthEast().lat().toString();
      swLon = map.getBounds().getSouthWest().lng().toString();
      swLat = map.getBounds().getSouthWest().lat().toString();
      if ((neLon !== "") && (neLat !== "") && (swLon !== "") && (swLat !== "")) {
        NorthEastLon.set(pas.SysUtils.StrToFloat(swLon));
        NorthEastLat.set(pas.SysUtils.StrToFloat(swLat));
        SouthWestLon.set(pas.SysUtils.StrToFloat(swLon));
        SouthWestLat.set(pas.SysUtils.StrToFloat(swLat));
        Result = true;
      };
      return Result;
    };
    this.SetDoubleClickZoom = function (AValue) {
      var map = null;
      map = this.GetMap();
      if (map != null) {
        map.setOptions( {disableDoubleClickZoom:!AValue} );
      };
    };
    this.SetDraggable = function (AValue) {
      var map = null;
      map = this.GetMap();
      if (map != null) {
        map.setOptions( {draggable:AValue} );
      };
    };
    this.SetScrollWheel = function (AValue) {
      var map = null;
      map = this.GetMap();
      map.setOptions( {scrollWheel:AValue} );
    };
    this.SetMapType = function (AMapType) {
      var map = null;
      var smt = "";
      map = this.GetMap();
      var $tmp = AMapType;
      if ($tmp === $mod.TGoogleMapType.mtDefault) {
        smt = "roadmap"}
       else if ($tmp === $mod.TGoogleMapType.mtSatellite) {
        smt = "satellite"}
       else if ($tmp === $mod.TGoogleMapType.mtHybrid) {
        smt = "hybrid"}
       else if ($tmp === $mod.TGoogleMapType.mtTerrain) smt = "terrain";
      map.setMapTypeId(smt);
    };
    this.SetZoom = function (Zoom) {
      var map = null;
      map = this.GetMap();
      if (map != null) {
        map.setZoom(Zoom);
      };
    };
    this.SetHeading = function (AHeading) {
      var map = null;
      map = this.GetMap();
      if (map != null) {
        map.setHeading(AHeading);
      };
    };
    this.SetTilt = function (ATilt) {
      var map = null;
      map = this.GetMap();
      if (map != null) {
        map.setTitle(ATilt);
      };
    };
    this.PanTo = function (Lat, Lon) {
      var map = null;
      map = this.GetMap();
      if ((map != null) && this.GoogleLoaded()) {
        map.panTo(new google.maps.LatLng(Lat, Lon));
      };
    };
    this.PanToBounds = function (Lat1, Lon1, Lat2, Lon2) {
      var bounds = undefined;
      var map = null;
      map = this.GetMap();
      if ((map != null) && this.GoogleLoaded()) {
        bounds = this.GetBBox(Lon1,Lat1,Lon2,Lat2);
        map.panToBounds(bounds);
      };
    };
    this.AddGPX = function (AGPX, AColor, AWidth, AOpacity) {
      var Points = null;
      var LatMax = 0.0;
      var LonMax = 0.0;
      var LatMin = 0.0;
      var LonMin = 0.0;
      Points = new Array();
      var parser = new DOMParser();
          var doc = parser.parseFromString(AGPX, 'text/xml');
          var trk = doc.getElementsByTagName("trk")[0];
          var name = trk.getElementsByTagName("name")[0];
          var trkseg = doc.getElementsByTagName("trkseg")[0];
          var i = trkseg.getElementsByTagName("trkpt").length;
          var trkpt;
          var j;
          var lat;
          var lon;
          var bounds = new google.maps.LatLngBounds ();
      
          for (j= 0; j < i; j++)
          {
            trkpt = trkseg.getElementsByTagName("trkpt")[j];
            lat = trkpt.getAttribute('lat');
            lon = trkpt.getAttribute('lon');
      
            var p = new google.maps.LatLng(lat, lon);
            Points.push(p);
            bounds.extend(p);
          }
          LatMax = bounds.getNorthEast().lat();
          LonMax = bounds.getNorthEast().lng();
      
          LatMin = bounds.getSouthWest().lat();
          LonMin = bounds.getSouthWest().lng();
      this.AddPolyLine(Points,AColor,AWidth,AOpacity);
      this.FitBounds(LatMin,LonMin,LatMax,LonMax);
    };
    this.AddKML = function (Url, ZoomToBounds) {
      var map = null;
      var clr = "";
      var ptr = null;
      ptr = rtl.createCallback(this,"HandleKMLClick");
      map = this.GetMap();
      var kml = new google.maps.KmlLayer(Url, {
            map: map,
            clickable: true,
            preserveViewport: !ZoomToBounds
          });
      
          kml.idx = this.FKMLs.length;
          kml.addListener('click', function() { ptr(kml); } );
          this.FKMLs.push(kml);
    };
    this.AddPolyLine = function (Points, AColor, AWidth, AOpacity) {
      var map = null;
      var clr = "";
      var ptr = null;
      ptr = rtl.createCallback(this,"HandlePolylineClick");
      map = this.GetMap();
      clr = pas["WEBLib.Graphics"].ColorToHTML(AColor);
      var poly = new google.maps.Polyline({
            map: map,
            path: Points,
              strokeColor: clr,
            strokeOpacity: AOpacity,
            strokeWeight: AWidth
          });
      
          poly.idx = this.FPolylines.length;
          poly.addListener('click', function() { ptr(poly); } );
          this.FPolylines.push(poly);
    };
    this.AddPolygon = function (Points, AFillColor, AStrokeColor, AWidth, AOpacity) {
      var map = null;
      var clrF = "";
      var clrS = "";
      var ptr = null;
      ptr = rtl.createCallback(this,"HandlePolygonClick");
      map = this.GetMap();
      clrF = pas["WEBLib.Graphics"].ColorToHTML(AFillColor);
      clrS = pas["WEBLib.Graphics"].ColorToHTML(AStrokeColor);
      var poly = new google.maps.Polygon({
            map: map,
            paths: Points,
            fillColor: clrF,
            fillOpacity: AOpacity,
              strokeColor: clrS,
            strokeOpacity: AOpacity,
            strokeWeight: AWidth
          });
      
          poly.idx = this.FPolygons.length;
          poly.addListener('click', function() { ptr(poly); } );
          this.FPolygons.push(poly);
    };
    this.AddCircle = function (Lat, Lon, Radius, AFillColor, AStrokeColor, AWidth, AOpacity) {
      var map = null;
      var clrF = "";
      var clrS = "";
      var ptr = null;
      ptr = rtl.createCallback(this,"HandleCircleClick");
      map = this.GetMap();
      clrF = pas["WEBLib.Graphics"].ColorToHTML(AFillColor);
      clrS = pas["WEBLib.Graphics"].ColorToHTML(AStrokeColor);
      var myLatLng = {lat: Lat, lng: Lon};
          var circle = new google.maps.Circle({
            map: map,
            center: myLatLng,
            radius: Radius,
            fillColor: clrF,
            fillOpacity: AOpacity,
              strokeColor: clrS,
            strokeOpacity: AOpacity,
            strokeWeight: AWidth
          });
      
          circle.idx = this.FCircles.length;
          circle.addListener('click', function() { ptr(circle); } );
          this.FCircles.push(circle);
    };
    this.AddRectangle = function (NorthEastLat, NorthEastLon, SouthWestLat, SouthWestLon, AFillColor, AStrokeColor, AWidth, AOpacity) {
      var map = null;
      var clrF = "";
      var clrS = "";
      var ptr = null;
      ptr = rtl.createCallback(this,"HandleRectangleClick");
      map = this.GetMap();
      clrF = pas["WEBLib.Graphics"].ColorToHTML(AFillColor);
      clrS = pas["WEBLib.Graphics"].ColorToHTML(AStrokeColor);
      var NELatLng = {lat: NorthEastLat, lng: NorthEastLon};
          var SWLatLng = {lat: SouthWestLat, lng: SouthWestLon};
          var rect = new google.maps.Rectangle({
            map: map,
            bounds: new google.maps.LatLngBounds(NELatLng, SWLatLng),
            fillColor: clrF,
            fillOpacity: AOpacity,
              strokeColor: clrS,
            strokeOpacity: AOpacity,
            strokeWeight: AWidth
          });
      
          rect.idx = this.FRectangles.length;
          rect.addListener('click', function() { ptr(rect); } );
          this.FRectangles.push(rect);
    };
    this.AddMarker = function (Lat, Lon, Title) {
      var map = null;
      var ptr = null;
      ptr = rtl.createCallback(this,"HandleMarkerClick");
      map = this.GetMap();
      var myLatLng = {lat: Lat, lng: Lon};
      var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: Title
          });
      marker.idx = this.FMarkers.length;
      marker.addListener('click', function() { ptr(marker); } );
      this.FMarkers.push(marker);
    };
    this.AddMarker$1 = function (Lat, Lon, Color, Title) {
      var map = null;
      var clr = "";
      var ptr = null;
      ptr = rtl.createCallback(this,"HandleMarkerClick");
      var $tmp = Color;
      if ($tmp === $mod.TGoogleMarkerColor.mcDefault) {
        clr = ""}
       else if ($tmp === $mod.TGoogleMarkerColor.mcRed) {
        clr = "red-dot.png"}
       else if ($tmp === $mod.TGoogleMarkerColor.mcGreen) {
        clr = "green-dot.png"}
       else if ($tmp === $mod.TGoogleMarkerColor.mcYellow) {
        clr = "yellow-dot.png"}
       else if ($tmp === $mod.TGoogleMarkerColor.mcPurple) {
        clr = "purple-dot.png"}
       else if ($tmp === $mod.TGoogleMarkerColor.mcBlue) clr = "blue-dot.png";
      map = this.GetMap();
      var myLatLng = {lat: Lat, lng: Lon};
      
          var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: Title
              });
      
          if (clr != "") {
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/' + clr);
          }
          marker.idx = this.FMarkers.length;
          marker.addListener('click', function() { ptr(marker); } );
      
          this.FMarkers.push(marker);
    };
    this.AddMarker$2 = function (Lat, Lon, Color, PinLetter, Title) {
      var map = null;
      var clr = "";
      var url = "";
      var ch = "";
      var ptr = null;
      ptr = rtl.createCallback(this,"HandleMarkerClick");
      clr = pas["WEBLib.Graphics"].ColorToHTML(Color);
      pas.System.Delete({get: function () {
          return clr;
        }, set: function (v) {
          clr = v;
        }},1,1);
      map = this.GetMap();
      var myLatLng = {lat: Lat, lng: Lon};
      
          url = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld="+ PinLetter + "|" + clr;
      
          var pinImage = new google.maps.MarkerImage(url);
      
          var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: Title,
                icon: pinImage
              });
          marker.idx = this.FMarkers.length;
          marker.addListener('click', function() { ptr(marker); } );
      
          this.FMarkers.push(marker);
    };
    this.AddMarker$3 = function (Lat, Lon, PinIcon, Title, XOffset, YOffset) {
      var map = null;
      var ptr = null;
      ptr = rtl.createCallback(this,"HandleMarkerClick");
      map = this.GetMap();
      var pinImage = new google.maps.MarkerImage(PinIcon, null, null,new google.maps.Point(XOffset, YOffset));
          var myLatLng = {lat: Lat, lng: Lon};
          var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: Title,
                icon: pinImage
              });
          marker.idx = this.FMarkers.length;
          marker.addListener('click', function() { ptr(marker); } );
      
          this.FMarkers.push(marker);
    };
    this.AddMarker$4 = function (Lat, Lon, Shape, Color, Title) {
      this.AddMarker$5(Lat,Lon,Shape,Color,0,1,Title,"");
    };
    this.AddMarker$5 = function (Lat, Lon, Shape, Color, BorderColor, Scale, CustomShape, Title) {
      var map = null;
      var clr = "";
      var bclr = "";
      var pth = "";
      var scl = "";
      var ptr = null;
      ptr = rtl.createCallback(this,"HandleMarkerClick");
      map = this.GetMap();
      clr = pas["WEBLib.Graphics"].ColorToHTML(Color);
      bclr = pas["WEBLib.Graphics"].ColorToHTML(BorderColor);
      scl = pas.SysUtils.StringReplace(pas.SysUtils.FloatToStr(Scale),",",".",{});
      var $tmp = Shape;
      if ($tmp === $mod.TGoogleMarkerShape.msPin) {
        pth = "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z"}
       else if ($tmp === $mod.TGoogleMarkerShape.msPinDot) {
        pth = "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0"}
       else if ($tmp === $mod.TGoogleMarkerShape.msFlag) {
        pth = "M 0,0 -1,-2 V -43 H 1 V -2 z M 1,-40 H 30 V -20 H 1 z"}
       else if ($tmp === $mod.TGoogleMarkerShape.msBookmark) {
        pth = "M17 3h-10c-1.1 0-1.99.9-1.99 2l-.01 16 7-3 7 3v-16c0-1.1-.9-2-2-2z"}
       else if ($tmp === $mod.TGoogleMarkerShape.msFlagSmall) {
        pth = "M14.4 6l-.4-2h-9v17h2v-7h5.6l.4 2h7v-10z"}
       else if ($tmp === $mod.TGoogleMarkerShape.msHome) {
        pth = "M10 20v-6h4v6h5v-8h3l-10-9-10 9h3v8z"}
       else if ($tmp === $mod.TGoogleMarkerShape.msFavorite) {
        pth = "M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"}
       else if ($tmp === $mod.TGoogleMarkerShape.msStar) {
        pth = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}
       else if ($tmp === $mod.TGoogleMarkerShape.msCustom) pth = CustomShape;
      function pinSymbol(color, bcolor, scale) {
          return {
              path: pth,
              fillColor: color,
              fillOpacity: 1,
              strokeColor: bcolor,
              strokeWeight: 1,
              scale: parseFloat(scale),
              };
          }
          var myLatLng = {lat: Lat, lng: Lon};
          var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: Title,
                icon: pinSymbol(clr, bclr, scl)
              });
          marker.idx = this.FMarkers.length;
          marker.addListener('click', function() { ptr(marker); } );
      
          this.FMarkers.push(marker);
    };
    this.SetMarkerTitle = function (AIndex, ATitle) {
      if (AIndex < this.FMarkers.length)
      {
        this.FMarkers[AIndex].setTitle(ATitle);
      };
    };
    this.SetMarkerLocation = function (AIndex, Lat, Lon) {
      if (AIndex < this.FMarkers.length)
      {
        this.FMarkers[AIndex].setPosition(new google.maps.LatLng(Lat, Lon));
      };
    };
    this.SetMarkerIcon = function (AIndex, Url) {
      if (AIndex < this.FMarkers.length)
      {
        this.FMarkers[AIndex].setIcon(Url);
      };
    };
    this.SetCircleCenter = function (AIndex, Lat, Lon) {
      if (AIndex < this.FCircles.length)
      {
        this.FCircles[AIndex].setCenter(new google.maps.LatLng(Lat, Lon));
      };
    };
    this.SetCircleRadius = function (AIndex, Radius) {
      if (AIndex < this.FCircles.length)
      {
        this.FCircles[AIndex].setRadius(Radius);
      };
    };
    this.SetCircleColors = function (AIndex, AFillColor, AStrokeColor) {
      var clrF = "";
      var clrS = "";
      clrF = pas["WEBLib.Graphics"].ColorToHTML(AFillColor);
      clrS = pas["WEBLib.Graphics"].ColorToHTML(AStrokeColor);
      if (AIndex < this.FCircles.length)
      {
        this.FCircles[AIndex].setOptions({ fillColor: clrF, strokeColor: clrS });
      };
    };
    this.SetRectangleLocation = function (AIndex, NorthEastLat, NorthEastLon, SouthWestLat, SouthWestLon) {
      if (AIndex < this.FRectangles.length)
      {
        var NELatLng = {lat: NorthEastLat, lng: NorthEastLon};
        var SWLatLng = {lat: SouthWestLat, lng: SouthWestLon};
        this.FRectangles[AIndex].setOptions({ bounds: new google.maps.LatLngBounds(NELatLng, SWLatLng) });
      };
    };
    this.SetRectangleColors = function (AIndex, AFillColor, AStrokeColor) {
      var clrF = "";
      var clrS = "";
      clrF = pas["WEBLib.Graphics"].ColorToHTML(AFillColor);
      clrS = pas["WEBLib.Graphics"].ColorToHTML(AStrokeColor);
      if (AIndex < this.FRectangles.length)
      {
        this.FRectangles[AIndex].setOptions({ fillColor: clrF, strokeColor: clrS });
      };
    };
    this.SetPolylineColor = function (AIndex, AColor) {
      var clr = "";
      clr = pas["WEBLib.Graphics"].ColorToHTML(AColor);
      if (AIndex < this.FPolylines.length)
      {
        this.FPolylines[AIndex].setOptions({ strokeColor: clr });
      };
    };
    this.SetPolylinePoints = function (AIndex, Points) {
      if (AIndex < this.FPolylines.length)
      {
        this.FPolylines[AIndex].setOptions({ path: Points });
      };
    };
    this.SetPolygonColors = function (AIndex, AFillColor, AStrokeColor) {
      var clrF = "";
      var clrS = "";
      clrF = pas["WEBLib.Graphics"].ColorToHTML(AFillColor);
      clrS = pas["WEBLib.Graphics"].ColorToHTML(AStrokeColor);
      if (AIndex < this.FPolygons.length)
      {
        this.FPolygons[AIndex].setOptions({ fillColor: clrF, strokeColor: clrS });
      };
    };
    this.SetPolygonPoints = function (AIndex, Points) {
      if (AIndex < this.FPolygons.length)
      {
        this.FPolygons[AIndex].setOptions({ path: Points });
      };
    };
    this.FitBounds = function (LatMin, LonMin, LatMax, LonMax) {
      var map = null;
      map = this.GetMap();
      if ((map != null) && this.GoogleLoaded()) {
        var ne = new google.maps.LatLng(LatMax, LonMax);
        var sw = new google.maps.LatLng(LatMin, LonMin);
        var bounds = new google.maps.LatLngBounds(sw,ne);
        map.fitBounds(bounds);
      };
    };
    this.ClearMarkers = function () {
      for (var i = 0; i < this.FMarkers.length; i++) {
            this.FMarkers[i].setMap(null);
            }
      this.FMarkers = [];
    };
    this.ClearKMLs = function () {
      for (var i = 0; i < this.FKMLs.length; i++) {
            this.FKMLs[i].setMap(null);
            }
      this.FKMLs = [];
    };
    this.ClearPolylines = function () {
      for (var i = 0; i < this.FPolylines.length; i++) {
            this.FPolylines[i].setMap(null);
            }
      this.FPolyLines = [];
    };
    this.ClearPolygons = function () {
      for (var i = 0; i < this.FPolygons.length; i++) {
            this.FPolygons[i].setMap(null);
            }
      this.FPolyLines = [];
    };
    this.ClearCircles = function () {
      for (var i = 0; i < this.FCircles.length; i++) {
            this.FCircles[i].setMap(null);
            }
      this.FMarkers = [];
    };
    this.ClearRectangles = function () {
      for (var i = 0; i < this.FRectangles.length; i++) {
            this.FRectangles[i].setMap(null);
            }
      this.FRectangles = [];
    };
    this.ShowDirections = function (Source, Destination, ATravelMode, WayPoints, OptimizeWayPoints, AvoidHighways, AvoidTolls) {
      var dirsvc = null;
      var dirdispl = null;
      var map = null;
      var tm = "";
      var wp = null;
      var I = 0;
      if (!(this.FDirectionsDisplay != null)) this.BindEvents();
      dirsvc = this.FDirectionsService;
      dirdispl = this.FDirectionsDisplay;
      map = this.GetMap();
      tm = this.TravelModeStr(ATravelMode);
      wp = new Array();
      if (WayPoints !== null) {
        for (var $l = 0, $end = WayPoints.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          wp.push(pas.JS.New(["location",WayPoints.Get(I)]));
        };
      };
      dirdispl.setMap(map);
      
          dirsvc.route({
                origin: Source,
                destination: Destination,
                waypoints: wp,
                optimizeWaypoints: OptimizeWayPoints,
                avoidHighways: AvoidHighways,
                avoidTolls: AvoidTolls,
                travelMode: tm
              }, function(response, status) {
                if (status === 'OK') {
                  dirdispl.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });
    };
    this.ShowDirections$1 = function (SourceLon, SourceLat, DestLon, DestLat, ATravelMode, WayPoints, OptimizeWayPoints, AvoidHighways, AvoidTolls) {
      var dirsvc = null;
      var dirdispl = null;
      var map = null;
      var tm = "";
      var wp = null;
      var I = 0;
      if (!(this.FDirectionsDisplay != null)) this.BindEvents();
      dirsvc = this.FDirectionsService;
      dirdispl = this.FDirectionsDisplay;
      map = this.GetMap();
      tm = this.TravelModeStr(ATravelMode);
      wp = new Array();
      if (WayPoints !== null) {
        for (var $l = 0, $end = WayPoints.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          wp.push(pas.JS.New(["location",WayPoints.Get(I)]));
        };
      };
      var sourcelatlon = new google.maps.LatLng(SourceLat, SourceLon);
          var destlatlon = new google.maps.LatLng(DestLat, DestLon);
      
          dirdispl.setMap(map);
          dirsvc.route({
                origin: sourcelatlon,
                destination: destlatlon,
                waypoints: wp,
                optimizeWaypoints: OptimizeWayPoints,
                avoidHighways: AvoidHighways,
                avoidTolls: AvoidTolls,
                travelMode: tm
              }, function(response, status) {
                if (status === 'OK') {
                  dirdispl.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });
    };
    this.ShowStreetView = function (Lat, Lon, Heading, Zoom, Pitch) {
      var map = null;
      var mapid = "";
      map = this.GetMap();
      mapid = this.GetID();
      var LatLng = {lat: Lat, lng: Lon};
      var panorama = new google.maps.StreetViewPanorama(
          document.getElementById(mapid), {
            position: LatLng,
            pov: {
              heading: Heading,
              zoom: Zoom,
              pitch: Pitch
            }
          });
      map.setStreetView(panorama);
    };
    this.HideStreetView = function () {
      var map = null;
      map = this.GetMap();
      map.streetView.setVisible(false);
    };
    this.MoveMarker = function (AIndex, NewLat, NewLon) {
      var marker = undefined;
      marker = this.GetMarker(AIndex);
      var latlng = new google.maps.LatLng(NewLat,NewLon);
      marker.setPosition(latlng);
    };
    this.RemoveDirections = function () {
      var dirdispl = null;
      if (!(this.FDirectionsDisplay != null)) this.BindEvents();
      dirdispl = this.FDirectionsDisplay;
      dirdispl.setMap(null);
    };
    this.RemoveMarker = function (AIndex) {
      if (AIndex < this.FMarkers.length)
      {
        this.FMarkers[AIndex].setMap(null);
        this.FMarkers.splice(AIndex, 1);
      };
    };
    this.RemovePolygon = function (AIndex) {
      if (AIndex < this.FPolygons.length)
      {
        this.FPolygons[AIndex].setMap(null);
        this.FPolygons.splice(AIndex, 1);
      };
    };
    this.RemovePolyline = function (AIndex) {
      if (AIndex < this.FPolylines.length)
      {
        this.FPolylines[AIndex].setMap(null);
        this.FPolylines.splice(AIndex, 1);
      };
    };
    this.RemoveCircle = function (AIndex) {
      if (AIndex < this.FPolygons.length)
      {
        this.FCircles[AIndex].setMap(null);
        this.FCircles.splice(AIndex, 1);
      };
    };
    this.RemoveRectangle = function (AIndex) {
      if (AIndex < this.FPolygons.length)
      {
        this.FRectangles[AIndex].setMap(null);
        this.FRectangles.splice(AIndex, 1);
      };
    };
    this.GeoCode = function (Address) {
      var FURL = "";
      this.FReq = new XMLHttpRequest();
      this.FReq.addEventListener("load",rtl.createSafeCallback(this,"HandleResponse"));
      this.FReq.addEventListener("abort",rtl.createSafeCallback(this,"HandleAbort"));
      FURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(Address) + "&key=" + this.FAPIKey;
      this.FReq.open("GET",FURL);
      this.FReq.send();
    };
    this.GetCoord = function (Lon, Lat) {
      var Result = undefined;
      Result = new google.maps.LatLng(Lat,Lon);
      return Result;
    };
    this.Distance = function (Lon1, Lat1, Lon2, Lat2) {
      var Result = 0.0;
      Result = 0;
      var R = 3958.8; // Radius of the Earth in miles
      var rlat1 = Lat1 * (Math.PI/180); // Convert degrees to radians
      var rlat2 = Lat2 * (Math.PI/180); // Convert degrees to radians
      var difflat = rlat2-rlat1; // Radian difference (latitudes)
      var difflon = (Lon2-Lon1) * (Math.PI/180); // Radian difference (longitudes)
      var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
      Result = d;
      return Result;
    };
    this.GetBBox = function (Lon1, Lat1, Lon2, Lat2) {
      var Result = undefined;
      var SW = undefined;
      var NE = undefined;
      SW = this.GetCoord(Lon1,Lat1);
      NE = this.GetCoord(Lon2,Lat2);
      Result = new google.maps.LatLngBounds(SW,NE);
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("Options",0,$mod.$rtti["TGoogleMapsOptions"],"FOptions","FOptions");
    $r.addProperty("APIKey",2,rtl.string,"FAPIKey","SetAPIKey");
    $r.addProperty("MapID",2,rtl.string,"FMapID","SetMapID");
    $r.addProperty("MapRender",2,$mod.$rtti["TGoogleMapsRender"],"FMapRender","SetMapRender",{Default: $mod.TGoogleMapsRender.mrRaster});
    $r.addProperty("OnGeoCoded",0,$mod.$rtti["TMapClickEvent"],"FOnGeoCoded","FOnGeoCoded");
    $r.addProperty("OnKeyDown",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyUp",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnKeyPress",0,pas["WEBLib.Controls"].$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnMapClick",0,$mod.$rtti["TMapClickEvent"],"FOnMapClick","FOnMapClick");
    $r.addProperty("OnMapDblClick",0,$mod.$rtti["TMapClickEvent"],"FOnMapDblClick","FOnMapDblClick");
    $r.addProperty("OnMapIdle",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMapIdle","FOnMapIdle");
    $r.addProperty("OnMapPan",0,$mod.$rtti["TMapClickEvent"],"FOnMapPan","FOnMapPan");
    $r.addProperty("OnMapLoaded",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMapLoaded","FOnMapLoaded");
    $r.addProperty("OnMapZoom",0,$mod.$rtti["TMapZoomEvent"],"FOnMapZoom","FOnMapZoom");
    $r.addProperty("OnMarkerClick",0,$mod.$rtti["TMapMarkerClickEvent"],"FOnMarkerClick","FOnMarkerClick");
    $r.addProperty("OnPolygonClick",0,$mod.$rtti["TMapPolygonClickEvent"],"FOnPolygonClick","FOnPolygonClick");
    $r.addProperty("OnPolylineClick",0,$mod.$rtti["TMapPolylineClickEvent"],"FOnPolylineClick","FOnPolylineClick");
    $r.addProperty("OnCircleClick",0,$mod.$rtti["TMapCircleClickEvent"],"FOnCircleClick","FOnCircleClick");
    $r.addProperty("OnRectangleClick",0,$mod.$rtti["TMapRectangleClickEvent"],"FOnRectangleClick","FOnRectangleClick");
    $r.addProperty("OnKMLClick",0,$mod.$rtti["TMapKMLClickEvent"],"FOnKMLClick","FOnKMLClick");
  });
  rtl.createClass(this,"TWebGoogleMaps",this.TGoogleMaps,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$Class("TLeafletMaps");
  this.$rtti.$MethodVar("TLeafletMarkerEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Lon",rtl.double],["Lat",rtl.double],["ID",rtl.string]]), methodkind: 0});
  this.TLeafletZoom = {"0": "lzTopLeft", lzTopLeft: 0, "1": "lzTopRight", lzTopRight: 1, "2": "lzBottomLeft", lzBottomLeft: 2, "3": "lzBottomRight", lzBottomRight: 3, "4": "lzNone", lzNone: 4};
  this.$rtti.$Enum("TLeafletZoom",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TLeafletZoom});
  rtl.createClass(this,"TLeafletMapsOptions",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOwner = null;
      this.FDefaultLongitude = 0.0;
      this.FZoomControl = 0;
      this.FDefaultZoomLevel = 0;
      this.FDefaultLatitude = 0.0;
    };
    this.$final = function () {
      this.FOwner = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetDefaultLatitude = function (Value) {
      this.FDefaultLatitude = Value;
      if (this.FOwner != null) this.FOwner.SetCenter(this.FDefaultLatitude,this.FDefaultLongitude);
    };
    this.SetDefaultLongitude = function (Value) {
      this.FDefaultLongitude = Value;
      if (this.FOwner != null) this.FOwner.SetCenter(this.FDefaultLatitude,this.FDefaultLongitude);
    };
    this.SetDefaultZoomLevel = function (Value) {
      this.FDefaultZoomLevel = Value;
      if (this.FOwner != null) this.FOwner.SetZoom(this.FDefaultZoomLevel);
    };
    this.SetZoomControl = function (Value) {
      this.FZoomControl = Value;
      if (this.FOwner != null) this.FOwner.SetZoomControl(Value);
    };
    this.Create$1 = function (AOwner) {
      this.FOwner = AOwner;
      this.FDefaultLatitude = -34.397;
      this.FDefaultLongitude = 150.644;
      this.FDefaultZoomLevel = 13;
      this.FZoomControl = $mod.TLeafletZoom.lzTopLeft;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TLeafletMapsOptions.isPrototypeOf(Source)) {
        this.FDefaultLatitude = rtl.as(Source,$mod.TLeafletMapsOptions).FDefaultLatitude;
        this.FDefaultLongitude = rtl.as(Source,$mod.TLeafletMapsOptions).FDefaultLongitude;
        this.FDefaultZoomLevel = rtl.as(Source,$mod.TLeafletMapsOptions).FDefaultZoomLevel;
        this.FZoomControl = rtl.as(Source,$mod.TLeafletMapsOptions).FZoomControl;
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",$mod.$rtti["TLeafletMaps"]]]);
    $r.addProperty("ZoomControl",2,$mod.$rtti["TLeafletZoom"],"FZoomControl","SetZoomControl",{Default: $mod.TLeafletZoom.lzTopLeft});
    $r.addProperty("DefaultLatitude",2,rtl.double,"FDefaultLatitude","SetDefaultLatitude",{Default: -34.397});
    $r.addProperty("DefaultLongitude",2,rtl.double,"FDefaultLongitude","SetDefaultLongitude",{Default: 150.644});
    $r.addProperty("DefaultZoomLevel",2,rtl.longint,"FDefaultZoomLevel","SetDefaultZoomLevel",{Default: 13});
  });
  rtl.createClass(this,"TLeafletMaps",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FMap = null;
      this.FMapObject = undefined;
      this.FMarkerGroup = undefined;
      this.FZoomControl = undefined;
      this.FCircles = null;
      this.FRectangles = null;
      this.FPolygons = null;
      this.FPolyLines = null;
      this.FMapClickPtr = null;
      this.FMapDblClickPtr = null;
      this.FMapPanPtr = null;
      this.FMapZoomPtr = null;
      this.FMarkerClickPtr = null;
      this.FOnMapClick = null;
      this.FOnMapDblClick = null;
      this.FOnMapPan = null;
      this.FOnMapZoom = null;
      this.FOnMarkerClick = null;
      this.FOptions = null;
    };
    this.$final = function () {
      this.FMap = undefined;
      this.FCircles = undefined;
      this.FRectangles = undefined;
      this.FPolygons = undefined;
      this.FPolyLines = undefined;
      this.FOnMapClick = undefined;
      this.FOnMapDblClick = undefined;
      this.FOnMapPan = undefined;
      this.FOnMapZoom = undefined;
      this.FOnMarkerClick = undefined;
      this.FOptions = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetOptions = function (Value) {
      this.FOptions.Assign(Value);
    };
    this.GetMap = function () {
      var Result = null;
      Result = this.FMap;
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      Result.setAttribute("id",this.GetID());
      this.FMap = null;
      return Result;
    };
    this.BindEvents = function () {
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
    };
    this.InitScript = function () {
      var id = "";
      var el = null;
      pas["WEBLib.Controls"].TControl.InitScript.call(this);
      id = this.GetID();
      el = document.getElementById(id);
      if (!(el != null)) return;
      if (!pas.System.Assigned(this.FMapObject) && (this.FMapZoomPtr != null) && (this.FMapPanPtr != null) && (this.FMapClickPtr != null) && (this.FMapDblClickPtr != null) && (this.FMarkerClickPtr != null)) {
        this.FMapObject = L.map(id, {zoomControl: false}).setView([51.505, -0.09], 13);
        
               // Add an OpenStreetMap tile layer
               L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  maxZoom: 19,
                  attribution: '© OpenStreetMap contributors'
               }).addTo(this.FMapObject);
        
               this.FMapObject.on("click", this.FMapClickPtr);
               this.FMapObject.on("dblclick", this.FMapDblClickPtr);
               this.FMapObject.on("dragend", this.FMapPanPtr);
               this.FMapObject.on("zoomend", this.FMapZoomPtr);
               this.FMarkerGroup = L.layerGroup().addTo(this.FMapObject);
               this.FZoomControl = L.control.zoom({
                 position: 'topleft' // You can specify the position as 'topleft', 'topright', 'bottomleft', or 'bottomright'
                 }).addTo(this.FMapObject);
        
               var map = this.FMapObject;
        
               setTimeout(function() { map.invalidateSize(); }, 200);
      };
    };
    this.HandleDoMouseDown = function (Event) {
      var Result = false;
      var me = null;
      me = Event.originalEvent;
      if (!(me != null)) pas["WEBLib.Controls"].TControl.HandleDoMouseDown.call(this,Event);
      return Result;
    };
    this.HandleDoMouseUp = function (Event) {
      var Result = false;
      var me = null;
      me = Event.originalEvent;
      if (!(me != null)) pas["WEBLib.Controls"].TControl.HandleDoMouseUp.call(this,Event);
      return Result;
    };
    this.HandleDoMouseMove = function (Event) {
      var Result = false;
      var me = null;
      me = Event.originalEvent;
      if (!(me != null)) pas["WEBLib.Controls"].TControl.HandleDoMouseMove.call(this,Event);
      return Result;
    };
    this.DoHandleMapClick = function (AEvent) {
      var Lon = 0.0;
      var Lat = 0.0;
      Lat = AEvent.latlng.lat;
      Lon = AEvent.latlng.lng;
      if (this.FOnMapClick != null) this.FOnMapClick(this,Lon,Lat);
    };
    this.DoHandleMapDblClick = function (AEvent) {
      var Lon = 0.0;
      var Lat = 0.0;
      Lat = AEvent.latlng.lat;
      Lon = AEvent.latlng.lng;
      if (this.FOnMapDblClick != null) this.FOnMapDblClick(this,Lon,Lat);
    };
    this.DoHandleMapPan = function (AEvent) {
      var Lon = 0.0;
      var Lat = 0.0;
      var center = this.FMapObject.getCenter();
      Lon = center.lng;
      Lat = center.lat;
      if (this.FOnMapPan != null) this.FOnMapPan(this,Lat,Lon);
    };
    this.DoHandleMapZoom = function (AEvent) {
      var zoom = 0;
      zoom = this.FMapObject.getZoom();
      if (this.FOnMapZoom != null) this.FOnMapZoom(this,zoom);
    };
    this.DoHandleMarkerclick = function (AEvent) {
      var Lon = 0.0;
      var Lat = 0.0;
      var ID = "";
      Lon = AEvent.latlng.lng;
      Lat = AEvent.latlng.lat;
      ID = AEvent.target.myCustomId;
      if (this.FOnMarkerClick != null) this.FOnMarkerClick(this,Lon,Lat,ID);
    };
    this.ClearMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.ClearMethodPointers.call(this);
      this.FMapClickPtr = null;
      this.FMapDblClickPtr = null;
      this.FMapPanPtr = null;
      this.FMapZoomPtr = null;
      this.FMarkerClickPtr = null;
    };
    this.GetMethodPointers = function () {
      pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      this.FMapClickPtr = rtl.createCallback(this,"DoHandleMapClick");
      this.FMapDblClickPtr = rtl.createCallback(this,"DoHandleMapDblClick");
      this.FMapPanPtr = rtl.createCallback(this,"DoHandleMapPan");
      this.FMapZoomPtr = rtl.createCallback(this,"DoHandleMapZoom");
      this.FMarkerClickPtr = rtl.createCallback(this,"DoHandleMarkerclick");
    };
    this.SetBoundsInt = function (X, Y, AWidth, AHeight) {
      pas["WEBLib.Controls"].TControl.SetBoundsInt.apply(this,arguments);
      if (pas.System.Assigned(this.FMapObject)) {
        this.FMapObject.invalidateSize();
      };
    };
    this.SetZoomControl = function (Value) {
      var s = "";
      if (!pas.System.Assigned(this.FMapObject)) return;
      if (!pas.System.Assigned(this.FZoomControl)) return;
      var $tmp = Value;
      if ($tmp === $mod.TLeafletZoom.lzTopLeft) {
        s = "topleft"}
       else if ($tmp === $mod.TLeafletZoom.lzTopRight) {
        s = "topright"}
       else if ($tmp === $mod.TLeafletZoom.lzBottomLeft) {
        s = "bottomleft"}
       else if ($tmp === $mod.TLeafletZoom.lzBottomRight) s = "bottomright";
      this.FZoomControl.remove();
      if (Value !== $mod.TLeafletZoom.lzNone) {
        this.FZoomControl = L.control.zoom({
                position: s  // Choose: 'topleft', 'topright', 'bottomleft', 'bottomright'
              }).addTo(this.FMapObject);
        
              this.FMapObject.invalidateSize();
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FCircles = pas.Classes.TList.$create("Create$1");
      this.FRectangles = pas.Classes.TList.$create("Create$1");
      this.FPolygons = pas.Classes.TList.$create("Create$1");
      this.FPolyLines = pas.Classes.TList.$create("Create$1");
      this.FOptions = $mod.TLeafletMapsOptions.$create("Create$1",[this]);
    };
    this.Destroy = function () {
      rtl.free(this,"FCircles");
      rtl.free(this,"FRectangles");
      rtl.free(this,"FPolygons");
      rtl.free(this,"FPolyLines");
      rtl.free(this,"FOptions");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.SetCenter = function (Lat, Lon) {
      this.FMapObject.setView([Lat,Lon]);
      this.FMapObject.invalidateSize();
    };
    this.GetCenter = function (Lat, Lon) {
      var Result = false;
      var la = 0.0;
      var lo = 0.0;
      Result = false;
      if (!pas.System.Assigned(this.FMapObject)) return Result;
      var center = this.FMapObject.getCenter();
      la = center.lat;
      lo = center.lng;
      Lat.set(la);
      Lon.set(lo);
      Result = true;
      return Result;
    };
    this.SetZoom = function (Zoom) {
      this.FMapObject.setZoom(Zoom);
      this.FMapObject.invalidateSize();
    };
    this.AddMarker = function (Lat, Lon, ID, Title, Popup) {
      if (pas.System.Assigned(this.FMarkerGroup)) {
        var mrkr = L.marker([Lat, Lon]).addTo(this.FMarkerGroup);
        // Optionally, you can add a popup to the marker
        if (Title != "") {
          mrkr.bindTooltip(Title); }
        if (Popup != "") {
          mrkr.bindPopup(Title); }
        mrkr.myCustomId = ID;
        mrkr.on('click', this.FMarkerClickPtr);
      };
    };
    this.ClearMarkers = function () {
      this.FMarkerGroup.clearLayers();
    };
    this.AddPolyLine = function (Points, AColor, AWidth, AOpacity) {
      var strokecolor = "";
      var polyline = undefined;
      strokecolor = pas["WEBLib.Graphics"].ColorToHTML(AColor);
      polyline = L.polyline(Points, {color: strokecolor, weight: AWidth}).addTo(this.FMapObject);
      this.FPolyLines.Add(polyline);
    };
    this.AddPolygon = function (Points, AFillColor, AStrokeColor, AWidth, AOpacity) {
      var Fillcolor = "";
      var Strokecolor = "";
      var poly = undefined;
      Strokecolor = pas["WEBLib.Graphics"].ColorToHTML(AStrokeColor);
      Fillcolor = pas["WEBLib.Graphics"].ColorToHTML(AFillColor);
      poly = L.polygon(Points, {color: Strokecolor, fillcolor: Fillcolor, fillopacity: AOpacity, weight: AWidth}).addTo(this.FMapObject);
      this.FPolygons.Add(poly);
    };
    this.AddCircle = function (Lat, Lon, Radius, AFillColor, AStrokeColor, AWidth, AOpacity) {
      var fillcolor = "";
      var strokecolor = "";
      var circle = undefined;
      fillcolor = pas["WEBLib.Graphics"].ColorToHTML(AFillColor);
      strokecolor = pas["WEBLib.Graphics"].ColorToHTML(AStrokeColor);
      var center = [Lat, Lon];
      // Create and add the rectangle to the map
      circle = L.circle(center, {radius: Radius, color: strokecolor, weight: AWidth, fillcolor: fillcolor, fillopacity: AOpacity}).addTo(this.FMapObject);
      this.FCircles.Add(circle);
    };
    this.AddRectangle = function (NorthEastLat, NorthEastLon, SouthWestLat, SouthWestLon, AFillColor, AStrokeColor, AWidth, AOpacity) {
      var Fillcolor = "";
      var Strokecolor = "";
      var rect = undefined;
      Fillcolor = pas["WEBLib.Graphics"].ColorToHTML(AFillColor);
      Strokecolor = pas["WEBLib.Graphics"].ColorToHTML(AStrokeColor);
      var bounds = [[NorthEastLat, NorthEastLon], [SouthWestLat, SouthWestLon]];
      // Create and add the rectangle to the map
      rect = L.rectangle(bounds, {color: Strokecolor, weight: AWidth, fillcolor: Fillcolor, fillopacity: AOpacity}).addTo(this.FMapObject);
      this.FRectangles.Add(rect);
    };
    this.ClearPolylines = function () {
      var i = 0;
      var c = undefined;
      for (var $l = 0, $end = this.FPolyLines.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        c = this.FPolyLines.Get(i);
        this.FMapObject.removeLayer(c);
      };
    };
    this.ClearPolygons = function () {
      var i = 0;
      var c = undefined;
      for (var $l = 0, $end = this.FPolygons.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        c = this.FPolygons.Get(i);
        this.FMapObject.removeLayer(c);
      };
    };
    this.ClearCircles = function () {
      var i = 0;
      var c = undefined;
      for (var $l = 0, $end = this.FCircles.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        c = this.FCircles.Get(i);
        this.FMapObject.removeLayer(c);
      };
    };
    this.ClearRectangles = function () {
      var i = 0;
      var c = undefined;
      for (var $l = 0, $end = this.FRectangles.GetCount() - 1; $l <= $end; $l++) {
        i = $l;
        c = this.FRectangles.Get(i);
        this.FMapObject.removeLayer(c);
      };
    };
    this.LatLonToXY = function (Lat, Lon, X, Y) {
      var px = 0;
      var py = 0;
      if (pas.System.Assigned(this.FMapObject)) {
        var latLng = L.latLng(Lat,Lon);
        var point = this.FMapObject.latLngToContainerPoint(latLng);
        px = point.x;
        py = point.y;
        X.set(px);
        Y.set(py);
      } else throw pas.SysUtils.Exception.$create("Create$1",[$impl.LMapNotCreated]);
    };
    this.XYToLatLon = function (X, Y, Lat, Lon) {
      var la = 0.0;
      var lo = 0.0;
      if (pas.System.Assigned(this.FMapObject)) {
        var point = L.point(X, Y);
        var latLng = this.FMapObject.containerPointToLatLng(point);
        la = latLng.lat;
        lo = latLng.lng;
        Lat.set(la);
        Lon.set(lo);
      } else throw pas.SysUtils.Exception.$create("Create$1",[$impl.LMapNotCreated]);
    };
    this.Distance = function (Lon1, Lat1, Lon2, Lat2) {
      var Result = 0.0;
      if (pas.System.Assigned(this.FMapObject)) {
        var pt1 = L.latLng(Lat1,Lon1);
        var pt2 = L.latLng(Lat2,Lon2);
        Result = pt1.distanceTo(pt2);
      } else throw pas.SysUtils.Exception.$create("Create$1",[$impl.LMapNotCreated]);
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Options",2,$mod.$rtti["TLeafletMapsOptions"],"FOptions","SetOptions");
    $r.addProperty("OnKeyUp",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnKeyDown",0,pas["WEBLib.Controls"].$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas["WEBLib.Controls"].$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnMapClick",0,$mod.$rtti["TMapClickEvent"],"FOnMapClick","FOnMapClick");
    $r.addProperty("OnMapDblClick",0,$mod.$rtti["TMapClickEvent"],"FOnMapDblClick","FOnMapDblClick");
    $r.addProperty("OnMapPan",0,$mod.$rtti["TMapClickEvent"],"FOnMapPan","FOnMapPan");
    $r.addProperty("OnMapZoom",0,$mod.$rtti["TMapZoomEvent"],"FOnMapZoom","FOnMapZoom");
    $r.addProperty("OnMarkerClick",0,$mod.$rtti["TLeafletMarkerEvent"],"FOnMarkerClick","FOnMarkerClick");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
  });
  rtl.createClass(this,"TWebLeafletMaps",this.TLeafletMaps,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.TDriveView = {"0": "dvList", dvList: 0, "1": "dvGrid", dvGrid: 1};
  this.$rtti.$Enum("TDriveView",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TDriveView});
  rtl.createClass(this,"TGoogleDrive",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FView = 0;
      this.FFolderID = "";
      this.FFrameHandle = null;
    };
    this.$final = function () {
      this.FFrameHandle = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetFolderID = function (Value) {
      if (this.FFolderID !== Value) {
        this.FFolderID = Value;
        this.UpdateElement();
      };
    };
    this.SetView = function (Value) {
      if (this.FView !== Value) {
        this.FView = Value;
        this.UpdateElement();
      };
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      this.FFrameHandle = document.createElement("IFRAME");
      Result.appendChild(this.FFrameHandle);
      this.FFrameHandle.setAttribute("frameborder","0");
      return Result;
    };
    this.UpdateElement = function () {
      var vs = "";
      var img = "";
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      var $tmp = this.FView;
      if ($tmp === $mod.TDriveView.dvList) {
        vs = "list"}
       else if ($tmp === $mod.TDriveView.dvGrid) vs = "grid";
      if (this.GetElementHandle() != null) {
        if (this.FFolderID !== "") {
          this.FFrameHandle.setAttribute("src","https://drive.google.com/embeddedfolderview?id=" + this.FFolderID + "&embedded=true#" + vs);
          this.FFrameHandle.style.setProperty("border","0");
        } else {
          img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGV" + "uYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGlkPSJTb2NpYWxfSWNvbnMiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1s" + "bnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMzX19zdHJva2UiPjxnIGlkPSJHb29nbGVfRHJpdmUiPjxyZWN0IGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBoZWlnaHQ9I" + "jEyOCIgd2lkdGg9IjEyOCIvPjxnIGlkPSJHb29nbGVfRHJpdmVfMV8iPjxwb2x5Z29uIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzM3NzdFMyIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjIxLjMzNSwxMjAgNDIuNjY2LDgyLjY2NyAxMjgsODIuNj" + "Y3IDEwNi42NjYsMTIwICAgICAgICAgIi8+PHBvbHlnb24gY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZDRjYzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHBvaW50cz0iODUuMzM1LDgyLjY2NyAxMjgsODIuNjY3IDg1LjMzNSw4IDQyLjY2Niw4ICAgICIvPjx" + "wb2x5Z29uIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzExQTg2MSIgZmlsbC1ydWxlPSJldmVub2RkIiBwb2ludHM9IjAsODIuNjY3IDIxLjMzNSwxMjAgNjQsNDUuMzMzIDQyLjY2Niw4ICAgICIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
          this.RenderDesigning(this.$classname,this.GetContainer(),this,true,img);
        };
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetWidth(400);
      this.SetHeight(300);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("FolderID",2,rtl.string,"FFolderID","SetFolderID");
    $r.addProperty("View",2,$mod.$rtti["TDriveView"],"FView","SetView");
  });
  rtl.createClass(this,"TWebGoogleDrive",this.TGoogleDrive,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TTwitterFeed",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FUpdatedFeed = false;
      this.FFeed = "";
      this.FFeedLinkText = "";
    };
    this.SetFeed = function (Value) {
      this.FFeed = Value;
      this.FUpdatedFeed = false;
      this.UpdateElement();
    };
    this.SetFeedLinkText = function (Value) {
      this.FFeedLinkText = Value;
      this.UpdateElement();
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("SPAN");
      return Result;
    };
    this.UpdateElement = function () {
      var srcurl = "";
      var img = "";
      var script = null;
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if ((this.GetElementHandle() != null) && !this.IsUpdating()) {
        srcurl = "https://platform.twitter.com/widgets.js";
        script = document.getElementById($impl.TWITTERSCRIPTID);
        if (!(script != null)) {
          script = document.createElement("script");
          script.setAttribute("id",$impl.TWITTERSCRIPTID);
          script.async = true;
          script.setAttribute("type","text/javascript");
          script.setAttribute("charset","utf-8");
          script.setAttribute("src",srcurl);
          document.head.appendChild(script);
        };
      };
      if ((this.GetElementHandle() != null) && !this.IsUpdating() && !this.FUpdatedFeed) {
        if ((this.FFeed !== "") && !(pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) {
          srcurl = '<a class="twitter-timeline" href="https://twitter.com/' + this.FFeed + '" data-chrome="nofooter noborders">' + this.FFeedLinkText + "</a>";
          this.SetBorderStyle(pas["WEBLib.Controls"].TBorderStyle.bsNone);
          this.GetElementHandle().innerHTML = srcurl;
          if (typeof twttr !== 'undefined') {
          twttr.widgets.load() };
          this.FUpdatedFeed = true;
        } else {
          img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgd2lkdGg9IjMwMCINCiAgIGhlaWdodD0iMzAwIj4NCjxwYX" + "RoIGQ9Im0gMjUwLDg3Ljk3NCBjIC03LjM1OCwzLjI2NCAtMTUuMjY3LDUuNDY5IC0yMy41NjYsNi40NjEgOC40NzEsLTUuMDc4IDE0Ljk3OCwtMTMuMTE5IDE4LjA0MSwtMjIuNzAxIC03LjkyOSw0LjcwMyAtMTYuNzEsOC4xMTcgLTI2LjA1Ny" + "w5Ljk1NyAtNy40ODQsLTcuOTc1IC0xOC4xNDgsLTEyLjk1NyAtMjkuOTUsLTEyLjk1NyAtMjIuNjYsMCAtNDEuMDMzLDE4LjM3MSAtNDEuMDMzLDQxLjAzMSAwLDMuMjE2IDAuMzYzLDYuMzQ4IDEuMDYyLDkuMzUxIC0zNC4xMDIsLTEuNzExIC" + "02NC4zMzYsLTE4LjA0NyAtODQuNTc0LC00Mi44NzIgLTMuNTMyLDYuMDYgLTUuNTU2LDEzLjEwOCAtNS41NTYsMjAuNjI4IDAsMTQuMjM2IDcuMjQ0LDI2Ljc5NSAxOC4yNTQsMzQuMTUzIC02LjcyNiwtMC4yMTMgLTEzLjA1MywtMi4wNTkgLT" + "E4LjU4NSwtNS4xMzIgLTAuMDA0LDAuMTcxIC0wLjAwNCwwLjM0MyAtMC4wMDQsMC41MTYgMCwxOS44OCAxNC4xNDQsMzYuNDY0IDMyLjkxNSw0MC4yMzQgLTMuNDQzLDAuOTM4IC03LjA2OCwxLjQzOSAtMTAuODEsMS40MzkgLTIuNjQ0LDAgLT" + "UuMjE0LC0wLjI1OCAtNy43MiwtMC43MzYgNS4yMjIsMTYuMzAxIDIwLjM3NSwyOC4xNjUgMzguMzMxLDI4LjQ5NSAtMTQuMDQzLDExLjAwNiAtMzEuNzM1LDE3LjU2NSAtNTAuOTYsMTcuNTY1IC0zLjMxMiwwIC02LjU3OCwtMC4xOTQgLTkuNz" + "g4LC0wLjU3NCAxOC4xNTksMTEuNjQzIDM5LjcyNywxOC40MzcgNjIuODk5LDE4LjQzNyA3NS40NzMsMCAxMTYuNzQ2LC02Mi41MjQgMTE2Ljc0NiwtMTE2Ljc0NyAwLC0xLjc3OSAtMC4wNCwtMy41NDggLTAuMTE5LC01LjMwOSA4LjAxNywtNS" + "43ODQgMTQuOTczLC0xMy4wMTEgMjAuNDc0LC0yMS4yMzkgeiIgc3R5bGU9ImZpbGw6IzNhYWFlMSIgLz4NCjwvc3ZnPg==";
          this.RenderDesigning(this.$classname,this.GetContainer(),this,true,img);
        };
      };
      if (this.GetElementHandle() != null) this.GetElementHandle().style.setProperty("overflow-y","auto");
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetWidth(400);
      this.SetHeight(300);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Feed",2,rtl.string,"FFeed","SetFeed");
    $r.addProperty("FeedLinkText",2,rtl.string,"FFeedLinkText","SetFeedLinkText");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
  });
  rtl.createClass(this,"TWebTwitterFeed",this.TTwitterFeed,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$MethodVar("TFilesDroppedEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileList",pas.Classes.$rtti["TStringList"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileAsTextEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileIndex",rtl.longint],["AText",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileAsBase64Event",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileIndex",rtl.longint],["ABase64",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileAsDataURLEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileIndex",rtl.longint],["AURL",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileAsArrayBufferEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileIndex",rtl.longint],["ABuffer",pas["WEBLib.Controls"].$rtti["TJSArrayBufferRecord"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileAsStreamEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileIndex",rtl.longint],["AStream",pas.Classes.$rtti["TStream"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileUploadEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileIndex",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileUploadResponseEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileIndex",rtl.longint],["ARequest",pas["WEBLib.Controls"].$rtti["TJSXMLHttpRequestRecord"]],["AResponse",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileUploadErrorEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileIndex",rtl.longint],["AError",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileUploadProgressEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AFileIndex",rtl.longint],["APosition",rtl.longint],["ATotalSize",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileGetAsBase64",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ABase64",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileGetAsText",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AText",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileGetAsURL",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AURL",rtl.string]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileGetAsArrayBuffer",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["ABuffer",pas["WEBLib.Controls"].$rtti["TJSArrayBufferRecord"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TFileGetAsStream",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AStream",pas.Classes.$rtti["TStream"]]]), methodkind: 0});
  this.$rtti.$RefToProcVar("TGetAsStringProc",{procsig: rtl.newTIProcSig([["AValue",rtl.string]])});
  this.$rtti.$RefToProcVar("TGetAsArrayBufferProc",{procsig: rtl.newTIProcSig([["AValue",pas.JS.$rtti["TJSArrayBuffer"]]])});
  this.$rtti.$RefToProcVar("TGetAsStreamProc",{procsig: rtl.newTIProcSig([["AStream",pas.Classes.$rtti["TStream"]]])});
  rtl.createClass(this,"TFile",pas.Classes.TCollectionItem,function () {
    this.$init = function () {
      pas.Classes.TCollectionItem.$init.call(this);
      this.FReq = null;
      this.FModified = 0.0;
      this.FName = "";
      this.FMimeType = "";
      this.FSize = 0;
      this.FFileObject = null;
      this.FTag = 0;
      this.FObject = null;
      this.FOnGetFileAsBase64 = null;
      this.FOnGetFileAsArrayBuffer = null;
      this.FOnGetFileAsText = null;
      this.FOnGetFileAsURL = null;
      this.FOnGetFileAsStream = null;
      this.FGetAsString = null;
      this.FGetAsStream = null;
      this.FGetAsArrayBuffer = null;
    };
    this.$final = function () {
      this.FReq = undefined;
      this.FFileObject = undefined;
      this.FObject = undefined;
      this.FOnGetFileAsBase64 = undefined;
      this.FOnGetFileAsArrayBuffer = undefined;
      this.FOnGetFileAsText = undefined;
      this.FOnGetFileAsURL = undefined;
      this.FOnGetFileAsStream = undefined;
      this.FGetAsString = undefined;
      this.FGetAsStream = undefined;
      this.FGetAsArrayBuffer = undefined;
      pas.Classes.TCollectionItem.$final.call(this);
    };
    this.HandleFileLoadAsText = function (Event) {
      var Result = false;
      var s = "";
      var ctrl = null;
      Result = true;
      s = event.target.result;
      if (this.FGetAsString != null) this.FGetAsString(s);
      this.FGetAsString = null;
      if (this.FOnGetFileAsText != null) this.FOnGetFileAsText(this,s);
      ctrl = this.GetControl();
      if (ctrl != null) {
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFilePicker).FOnFileAsText != null)) rtl.as(ctrl,$mod.TFilePicker).FOnFileAsText(ctrl,this.GetIndex(),s);
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFileUpload).FOnFileAsText != null)) rtl.as(ctrl,$mod.TFileUpload).FOnFileAsText(ctrl,this.GetIndex(),s);
        if (pas["WEBLib.Dialogs"].TOpenDialog.isPrototypeOf(ctrl) && (rtl.as(ctrl,pas["WEBLib.Dialogs"].TOpenDialog).FOnFileAsText != null)) rtl.as(ctrl,pas["WEBLib.Dialogs"].TOpenDialog).FOnFileAsText(ctrl,this.GetIndex(),s);
      };
      return Result;
    };
    this.HandleFileLoadAsBase64 = function (Event) {
      var Result = false;
      var s = "";
      var ctrl = null;
      Result = true;
      function _arrayBufferToBase64( buffer ) {
      var binary = '';
      var bytes = new Uint8Array( buffer );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      return window.btoa( binary );
      }
      s = _arrayBufferToBase64(event.target.result);
      if (this.FGetAsString != null) this.FGetAsString(s);
      this.FGetAsString = null;
      if (this.FOnGetFileAsBase64 != null) this.FOnGetFileAsBase64(this,s);
      ctrl = this.GetControl();
      if (ctrl != null) {
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFilePicker).FOnFileAsBase64 != null)) rtl.as(ctrl,$mod.TFilePicker).FOnFileAsBase64(ctrl,this.GetIndex(),s);
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFileUpload).FOnFileAsBase64 != null)) rtl.as(ctrl,$mod.TFileUpload).FOnFileAsBase64(ctrl,this.GetIndex(),s);
        if (pas["WEBLib.Dialogs"].TOpenDialog.isPrototypeOf(ctrl) && (rtl.as(ctrl,pas["WEBLib.Dialogs"].TOpenDialog).FOnFileAsBase64 != null)) rtl.as(ctrl,pas["WEBLib.Dialogs"].TOpenDialog).FOnFileAsBase64(ctrl,this.GetIndex(),s);
      };
      return Result;
    };
    this.HandleFileLoadAsArrayBuffer = function (Event) {
      var Result = false;
      var ja = null;
      var LJARec = pas["WEBLib.Controls"].TJSArrayBufferRecord.$new();
      var ctrl = null;
      Result = true;
      ja = event.target.result;
      if (this.FGetAsArrayBuffer != null) {
        this.FGetAsArrayBuffer(ja);
      };
      this.FGetAsArrayBuffer = null;
      if (this.FOnGetFileAsArrayBuffer != null) {
        LJARec.jsarraybuffer = ja;
        this.FOnGetFileAsArrayBuffer(this,pas["WEBLib.Controls"].TJSArrayBufferRecord.$clone(LJARec));
      };
      ctrl = this.GetControl();
      if (ctrl != null) {
        LJARec.jsarraybuffer = ja;
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFilePicker).FOnGetFileAsArrayBuffer != null)) rtl.as(ctrl,$mod.TFilePicker).FOnGetFileAsArrayBuffer(ctrl,this.GetIndex(),pas["WEBLib.Controls"].TJSArrayBufferRecord.$clone(LJARec));
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFileUpload).FOnGetFileAsArrayBuffer != null)) rtl.as(ctrl,$mod.TFileUpload).FOnGetFileAsArrayBuffer(ctrl,this.GetIndex(),pas["WEBLib.Controls"].TJSArrayBufferRecord.$clone(LJARec));
        if (pas["WEBLib.Dialogs"].TOpenDialog.isPrototypeOf(ctrl) && (rtl.as(ctrl,pas["WEBLib.Dialogs"].TOpenDialog).FOnGetFileAsArrayBuffer != null)) rtl.as(ctrl,pas["WEBLib.Dialogs"].TOpenDialog).FOnGetFileAsArrayBuffer(ctrl,this.GetIndex(),pas["WEBLib.Controls"].TJSArrayBufferRecord.$clone(LJARec));
      };
      return Result;
    };
    this.HandleFileLoadAsDataURL = function (Event) {
      var Result = false;
      var s = "";
      var ctrl = null;
      Result = true;
      s = event.target.result;
      if (this.FGetAsString != null) this.FGetAsString(s);
      this.FGetAsString = null;
      if (this.FOnGetFileAsURL != null) this.FOnGetFileAsURL(this,s);
      ctrl = this.GetControl();
      if (ctrl != null) {
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFilePicker).FOnFileAsDataURL != null)) rtl.as(ctrl,$mod.TFilePicker).FOnFileAsDataURL(ctrl,this.GetIndex(),s);
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFileUpload).FOnFileAsDataURL != null)) rtl.as(ctrl,$mod.TFileUpload).FOnFileAsDataURL(ctrl,this.GetIndex(),s);
        if (pas["WEBLib.Dialogs"].TWebOpenDialog.isPrototypeOf(ctrl) && (rtl.as(ctrl,pas["WEBLib.Dialogs"].TWebOpenDialog).FOnFileAsDataURL != null)) rtl.as(ctrl,pas["WEBLib.Dialogs"].TWebOpenDialog).FOnFileAsDataURL(ctrl,this.GetIndex(),s);
      };
      return Result;
    };
    this.HandleFileLoadAsStream = function (Event) {
      var Result = false;
      var ctrl = null;
      var b = [];
      var l = 0;
      var ms = null;
      var ja = null;
      Result = true;
      ja = event.target.result;
      b = pas.Classes.TMemoryStream.MemoryToBytes(ja);
      l = ja.byteLength;
      ms = pas.Classes.TMemoryStream.$create("Create");
      ms.Write$1(b,0,l);
      ms.SetPosition(0);
      if (this.FGetAsStream != null) {
        this.FGetAsStream(ms);
      };
      this.FGetAsStream = null;
      if (this.FOnGetFileAsStream != null) {
        this.FOnGetFileAsStream(this,ms);
      };
      ctrl = this.GetControl();
      if (ctrl != null) {
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFilePicker).FOnGetFileAsStream != null)) rtl.as(ctrl,$mod.TFilePicker).FOnGetFileAsStream(ctrl,this.GetIndex(),ms);
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFileUpload).FOnGetFileAsStream != null)) rtl.as(ctrl,$mod.TFileUpload).FOnGetFileAsStream(ctrl,this.GetIndex(),ms);
        if (pas["WEBLib.Dialogs"].TOpenDialog.isPrototypeOf(ctrl) && (rtl.as(ctrl,pas["WEBLib.Dialogs"].TOpenDialog).FOnGetFileAsStream != null)) rtl.as(ctrl,pas["WEBLib.Dialogs"].TOpenDialog).FOnGetFileAsStream(ctrl,this.GetIndex(),ms);
      };
      ms = rtl.freeLoc(ms);
      return Result;
    };
    this.HandleFileUploadProgress = function (Event) {
      var Result = false;
      var Lloaded = 0;
      var Ltotal = 0;
      var ctrl = null;
      Lloaded = 0;
      Ltotal = 0;
      if (Event.lengthComputable) {
         Lloaded = Event.loaded;
         Ltotal = Event.total;
         //console.log(Event.loaded + " bytes of " + Event.total); } else { console.log('no calc');
      };
      ctrl = this.GetControl();
      if (ctrl != null) {
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(this.GetControl(),$mod.TFilePicker).FOnUploadFileProgress != null)) rtl.as(ctrl,$mod.TFilePicker).FOnUploadFileProgress(ctrl,this.GetIndex(),Lloaded,Ltotal);
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(this.GetControl(),$mod.TFileUpload).FOnUploadFileProgress != null)) rtl.as(ctrl,$mod.TFileUpload).FOnUploadFileProgress(ctrl,this.GetIndex(),Lloaded,Ltotal);
      };
      Result = true;
      return Result;
    };
    this.HandleFileUploadComplete = function (Event) {
      var Result = false;
      var ctrl = null;
      var LRequestRec = pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$new();
      var AResponse = "";
      Result = true;
      ctrl = this.GetControl();
      if (ctrl != null) {
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFilePicker).FOnUploadFileComplete != null)) rtl.as(ctrl,$mod.TFilePicker).FOnUploadFileComplete(ctrl,this.GetIndex());
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFilePicker).FOnUploadFileResponseComplete != null)) {
          LRequestRec.req = Event.target;
          AResponse = Event.target.responseText;
          rtl.as(ctrl,$mod.TFilePicker).FOnUploadFileResponseComplete(ctrl,this.GetIndex(),pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$clone(LRequestRec),AResponse);
        };
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFileUpload).FOnUploadFileComplete != null)) rtl.as(ctrl,$mod.TFileUpload).FOnUploadFileComplete(ctrl,this.GetIndex());
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFileUpload).FOnUploadFileResponseComplete != null)) {
          LRequestRec.req = Event.target;
          AResponse = Event.target.responseText;
          rtl.as(ctrl,$mod.TFileUpload).FOnUploadFileResponseComplete(ctrl,this.GetIndex(),pas["WEBLib.Controls"].TJSXMLHttpRequestRecord.$clone(LRequestRec),AResponse);
        };
      };
      this.FReq = null;
      return Result;
    };
    this.HandleFileUploadError = function (Event) {
      var Result = false;
      var err = "";
      var ctrl = null;
      err = Event.target.status;
      Result = true;
      ctrl = this.GetControl();
      if (ctrl != null) {
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFilePicker).FOnUploadFileError != null)) rtl.as(ctrl,$mod.TFilePicker).FOnUploadFileError(ctrl,this.GetIndex(),err);
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFileUpload).FOnUploadFileError != null)) rtl.as(ctrl,$mod.TFileUpload).FOnUploadFileError(ctrl,this.GetIndex(),err);
      };
      return Result;
    };
    this.HandleFileUploadAbort = function (Event) {
      var Result = false;
      var ctrl = null;
      Result = true;
      ctrl = this.GetControl();
      if (ctrl != null) {
        if ($mod.TFilePicker.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFilePicker).FOnUploadFileAbort != null)) rtl.as(ctrl,$mod.TFilePicker).FOnUploadFileAbort(ctrl,this.GetIndex());
        if ($mod.TFileUpload.isPrototypeOf(ctrl) && (rtl.as(ctrl,$mod.TFileUpload).FOnUploadFileAbort != null)) rtl.as(ctrl,$mod.TFileUpload).FOnUploadFileAbort(ctrl,this.GetIndex());
      };
      return Result;
    };
    this.GetControl = function () {
      var Result = null;
      Result = null;
      if ((this.FCollection != null) && (rtl.as(this.FCollection,$mod.TFiles).Owner$1() != null)) {
        if (pas.Classes.TComponent.isPrototypeOf(rtl.as(this.FCollection,$mod.TFiles).Owner$1())) Result = rtl.as(rtl.as(this.FCollection,$mod.TFiles).Owner$1(),pas.Classes.TComponent);
      };
      return Result;
    };
    this.FileAsText = function () {
      var Result = null;
      Result = this.FileAsText$1("utf-8");
      return Result;
    };
    this.FileAsText$1 = function (AEncoding) {
      var $Self = this;
      var Result = null;
      var reader = null;
      Result = new Promise(function (ASuccess, AFailed) {
        function Loader(Event) {
          var Result = false;
          ASuccess($impl.EventResult(Event));
          return Result;
        };
        reader = new FileReader();
        reader.onload = rtl.createSafeCallback(null,Loader);
        reader.readAsText($Self.FFileObject,AEncoding);
      });
      return Result;
    };
    this.FileAsBase64 = function () {
      var $Self = this;
      var Result = null;
      var reader = null;
      Result = new Promise(function (ASuccess, AFailed) {
        function Loader(Event) {
          var Result = false;
          var s = "";
          function _arrayBufferToBase64( buffer ) {
          var binary = '';
          var bytes = new Uint8Array( buffer );
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
              binary += String.fromCharCode( bytes[ i ] );
          }
          return window.btoa( binary );
          }
          s = _arrayBufferToBase64(Event.target.result);
          ASuccess(s);
          return Result;
        };
        reader = new FileReader();
        reader.onload = rtl.createSafeCallback(null,Loader);
        reader.readAsArrayBuffer($Self.FFileObject);
      });
      return Result;
    };
    this.FileAsStream = function () {
      var $Self = this;
      var Result = null;
      var reader = null;
      Result = new Promise(function (ASuccess, AFailed) {
        function Loader(Event) {
          var Result = false;
          var ms = null;
          var ja = null;
          var b = [];
          var l = 0;
          ja = event.target.result;
          b = pas.Classes.TMemoryStream.MemoryToBytes(ja);
          l = ja.byteLength;
          ms = pas.Classes.TMemoryStream.$create("Create");
          ms.Write$1(b,0,l);
          ms.SetPosition(0);
          ASuccess(ms);
          return Result;
        };
        reader = new FileReader();
        reader.onload = rtl.createSafeCallback(null,Loader);
        reader.readAsArrayBuffer($Self.FFileObject);
      });
      return Result;
    };
    this.FileAsDataURL = function () {
      var $Self = this;
      var Result = null;
      var reader = null;
      Result = new Promise(function (ASuccess, AFailed) {
        function Loader(Event) {
          var Result = false;
          var s = "";
          s = Event.target.result;
          ASuccess(s);
          return Result;
        };
        reader = new FileReader();
        reader.onload = rtl.createSafeCallback(null,Loader);
        reader.readAsDataURL($Self.FFileObject);
      });
      return Result;
    };
    this.FileAsArrayBuffer = function () {
      var $Self = this;
      var Result = null;
      var reader = null;
      Result = new Promise(function (ASuccess, AFailed) {
        function Loader(Event) {
          var Result = false;
          var arr = null;
          arr = Event.target.result;
          ASuccess(arr);
          return Result;
        };
        reader = new FileReader();
        reader.onload = rtl.createSafeCallback(null,Loader);
        reader.readAsArrayBuffer($Self.FFileObject);
      });
      return Result;
    };
    this.GetFileAsText = function () {
      var ptr = null;
      var f = null;
      ptr = rtl.createCallback(this,"HandleFileLoadAsText");
      f = this.FFileObject;
      var reader = new FileReader();
      reader.addEventListener('load',ptr);
      reader.readAsText(f);
    };
    this.GetFileAsText$1 = function (GetAsString) {
      this.FGetAsString = GetAsString;
      this.GetFileAsText();
    };
    this.GetFileAsText$2 = function (AEncoding) {
      var ptr = null;
      var f = null;
      ptr = rtl.createCallback(this,"HandleFileLoadAsText");
      f = this.FFileObject;
      var reader = new FileReader();
      reader.addEventListener('load',ptr);
      reader.readAsText(f, AEncoding);
    };
    this.GetFileAsBase64 = function () {
      var ptr = null;
      var f = null;
      ptr = rtl.createCallback(this,"HandleFileLoadAsBase64");
      f = this.FFileObject;
      var reader = new FileReader();
      reader.addEventListener('load',ptr);
      reader.readAsArrayBuffer(f);
    };
    this.GetFileAsBase64$1 = function (GetAsString) {
      this.FGetAsString = GetAsString;
      this.GetFileAsBase64();
    };
    this.GetFileAsArrayBuffer = function () {
      var ptr = null;
      var f = null;
      ptr = rtl.createCallback(this,"HandleFileLoadAsArrayBuffer");
      f = this.FFileObject;
      var reader = new FileReader();
      reader.addEventListener('load',ptr);
      reader.readAsArrayBuffer(f);
    };
    this.GetFileAsArrayBuffer$1 = function (GetAsArrayBuffer) {
      this.FGetAsArrayBuffer = GetAsArrayBuffer;
      this.GetFileAsArrayBuffer();
    };
    this.GetFileAsStream = function () {
      var ptr = null;
      var f = null;
      ptr = rtl.createCallback(this,"HandleFileLoadAsStream");
      f = this.FFileObject;
      var reader = new FileReader();
      reader.addEventListener('load',ptr);
      reader.readAsArrayBuffer(f);
    };
    this.GetFileAsStream$1 = function (GetAsStream) {
      this.FGetAsStream = GetAsStream;
      this.GetFileAsStream();
    };
    this.GetFileAsDataURL = function () {
      var ptr = null;
      var f = null;
      ptr = rtl.createCallback(this,"HandleFileLoadAsDataURL");
      f = this.FFileObject;
      var reader = new FileReader();
      reader.addEventListener('load',ptr);
      reader.readAsDataURL(f);
    };
    this.GetFileAsDataURL$1 = function (GetAsString) {
      this.FGetAsString = GetAsString;
      this.GetFileAsDataURL();
    };
    this.Upload = function (AAction) {
      var f = null;
      var fd = null;
      var ptrProgress = null;
      var ptrComplete = null;
      var ptrError = null;
      var ptrAbort = null;
      f = this.FFileObject;
      fd = new FormData();
      fd.append("file1",f);
      this.FReq = new XMLHttpRequest();
      ptrProgress = rtl.createCallback(this,"HandleFileUploadProgress");
      ptrComplete = rtl.createCallback(this,"HandleFileUploadComplete");
      ptrError = rtl.createCallback(this,"HandleFileUploadError");
      ptrAbort = rtl.createCallback(this,"HandleFileUploadAbort");
      this.FReq.addEventListener("load",ptrComplete);
      this.FReq.addEventListener("error",ptrError);
      this.FReq.addEventListener("abort",ptrAbort);
      this.FReq.upload.addEventListener("progress",ptrProgress);
      this.FReq.open("POST",AAction,true);
      this.FReq.send(fd);
    };
    this.AbortUpload = function () {
      var Result = false;
      Result = false;
      if (this.FReq != null) {
        this.FReq.abort();
        Result = true;
      };
      return Result;
    };
  });
  this.$rtti.$Class("TFilePicker");
  rtl.createClass(this,"TFiles",pas.Classes.TCollection,function () {
    this.$init = function () {
      pas.Classes.TCollection.$init.call(this);
      this.FOwner = null;
    };
    this.$final = function () {
      this.FOwner = undefined;
      pas.Classes.TCollection.$final.call(this);
    };
    this.GetItem$1 = function (Index) {
      var Result = null;
      Result = this.GetItem(Index);
      return Result;
    };
    this.SetItem$1 = function (Index, Value) {
      this.SetItem(Index,Value);
    };
    this.Create$2 = function (AOwner) {
      pas.Classes.TCollection.Create$1.call(this,$mod.TFile);
      this.FOwner = AOwner;
      return this;
    };
    this.Owner$1 = function () {
      var Result = null;
      Result = this.FOwner;
      return Result;
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
    this.Clear$1 = function () {
      var fc = 0;
      fc = this.GetCount();
      pas.Classes.TCollection.Clear.call(this);
      if (fc > 0) {
        if ($mod.TFilePicker.isPrototypeOf(this.FOwner)) rtl.as(this.FOwner,$mod.TFilePicker).Clear();
        if ($mod.TFileUpload.isPrototypeOf(this.FOwner)) rtl.as(this.FOwner,$mod.TFileUpload).Clear();
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$2",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
  });
  rtl.createClass(this,"TFileUpload",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FAccept = "";
      this.FCreateRef = "";
      this.FEventInit = false;
      this.FFiles = null;
      this.FFileList = null;
      this.FOnDroppedFiles = null;
      this.FMultiFile = false;
      this.FShowFiles = false;
      this.FDragCaption = "";
      this.FOnGetFileAsArrayBuffer = null;
      this.FOnFileAsText = null;
      this.FOnFileAsBase64 = null;
      this.FOnFileAsDataURL = null;
      this.FOnUploadFileAbort = null;
      this.FOnUploadFileComplete = null;
      this.FOnUploadFileProgress = null;
      this.FOnUploadFileError = null;
      this.FOnUploadFileResponseComplete = null;
      this.FOnGetFileAsStream = null;
      this.FFontHoverColor = 0;
      this.FShowPicture = false;
      this.FDragColor = 0;
    };
    this.$final = function () {
      this.FFiles = undefined;
      this.FFileList = undefined;
      this.FOnDroppedFiles = undefined;
      this.FOnGetFileAsArrayBuffer = undefined;
      this.FOnFileAsText = undefined;
      this.FOnFileAsBase64 = undefined;
      this.FOnFileAsDataURL = undefined;
      this.FOnUploadFileAbort = undefined;
      this.FOnUploadFileComplete = undefined;
      this.FOnUploadFileProgress = undefined;
      this.FOnUploadFileError = undefined;
      this.FOnUploadFileResponseComplete = undefined;
      this.FOnGetFileAsStream = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetDragCaption = function (Value) {
      this.FDragCaption = Value;
      this.UpdateElement();
    };
    this.SetAccept = function (Value) {
      if (this.FAccept !== Value) {
        this.FAccept = Value;
        this.UpdateElement();
      };
    };
    this.SetShowPicture = function (Value) {
      if (this.FShowPicture !== Value) {
        this.FShowPicture = Value;
        this.UpdateElement();
      };
    };
    this.SetCaption = function (AValue) {
      if (this.FCaption !== AValue) {
        pas["WEBLib.Controls"].TCustomControl.SetCaption.call(this,AValue);
        this.UpdateElement();
      };
    };
    this.HandleFiles = function (files) {
      var Result = "";
      var i = 0;
      var sz = 0;
      var afile = null;
      var szFiles = "";
      var m = "";
      var d = null;
      szFiles = "";
      while (this.FFiles.GetCount() > 0) this.FFiles.Delete(0);
      while (this.FFileList.GetCount() > 0) this.FFileList.Delete(0);
      for (var $l = 0, $end = files.length - 1; $l <= $end; $l++) {
        i = $l;
        afile = files.item(i);
        d = new Date(afile.lastModified);
        m = afile.type;
        sz = afile.size;
        var $with = this.FFiles.Add$1();
        $with.FFileObject = afile;
        $with.FName = afile.name;
        $with.FMimeType = m;
        $with.FSize = sz;
        $with.FModified = pas.SysUtils.EncodeDate(d.getYear() + 1900,d.getMonth() + 1,d.getDate()) + pas.SysUtils.EncodeTime(d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds());
        if (this.FFileList != null) this.FFileList.Add(afile.name);
        if (this.FShowFiles) {
          if (i > 0) szFiles = szFiles + "<br>";
          szFiles = szFiles + afile.name;
        };
        if (!this.FMultiFile) break;
      };
      Result = szFiles;
      if (this.FOnDroppedFiles != null) this.FOnDroppedFiles(this,this.FFileList);
      return Result;
    };
    this.DoHandleChange = function (e) {
      var Result = false;
      var el = null;
      var span = null;
      var curfiles = null;
      var szfiles = "";
      Result = true;
      if (this.GetElementHandle() != null) {
        el = e.target;
        if (el != null) {
          curfiles = el.files;
          szfiles = this.HandleFiles(curfiles);
          if (this.FShowFiles) {
            span = document.getElementById(this.GetID() + "fileslist");
            span.innerHTML = szfiles;
          };
        };
      };
      return Result;
    };
    this.HandleDroppedFiles = function (Event) {
      var Result = false;
      var droppedfiles = null;
      var span = null;
      var szFiles = "";
      Result = true;
      Event.preventDefault();
      Event.stopPropagation();
      droppedfiles = Event.dataTransfer.files;
      szFiles = this.HandleFiles(droppedfiles);
      if (this.FShowFiles) {
        span = document.getElementById(this.GetID() + "fileslist");
        span.innerHTML = szFiles;
      };
      this.GetContainer().setAttribute("class","box has-advanced-upload");
      return Result;
    };
    this.HandleDragOver = function (Event) {
      var Result = false;
      Result = true;
      Event.preventDefault();
      Event.stopPropagation();
      if (this.GetContainer() != null) this.GetContainer().setAttribute("class","box has-advanced-upload is-dragover");
      if ((this.GetElementHandle() != null) && (this.FDragColor !== -1)) this.GetElementHandle().style.setProperty("background-color",pas["WEBLib.Graphics"].ColorToHTML(this.FDragColor));
      return Result;
    };
    this.HandleDragEnd = function (Event) {
      var Result = false;
      Result = true;
      Event.preventDefault();
      Event.stopPropagation();
      if (this.GetContainer() != null) this.GetContainer().setAttribute("class","box has-advanced-upload");
      if (this.GetElementHandle() != null) {
        if ((this.FColor !== -1) && (this.FDragColor !== -1)) {
          this.GetElementHandle().style.setProperty("background-color",pas["WEBLib.Graphics"].ColorToHTML(this.FColor))}
         else this.GetElementHandle().style.removeProperty("background-color");
      };
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      this.CreateCSS();
      this.FCreateRef = this.FName;
      Result = document.createElement("FORM");
      Result.setAttribute("method","post");
      Result.setAttribute("class","box");
      Result.setAttribute("enctype","multipart/form-data");
      Result.style.setProperty("display","flex");
      Result.style.setProperty("justify-content","center");
      Result.style.setProperty("align-items","center");
      Result.innerHTML = '<div class="box__input" style="text-align: center">' + '<svg class="box__icon" xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43">' + '<path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"/></svg>' + '<input class="box__file" type="file" name="files[]" id="FP' + this.FName + '" data-multiple-caption="{count} files selected" multiple/>' + '<label for="FP' + this.FName + '" style="outline:none"><strong id="' + this.FName + 'lbl">' + this.FCaption + '</strong>&nbsp;<span class="box__dragndrop" id="' + this.FName + 'drag">' + this.FDragCaption + "</span>.</label>" + '<button class="box__button" type="submit">Upload</button>' + '<br><span style="display:inline-block;" id="' + this.FName + 'fileslist"></span>' + '</div><div class="box__uploading">Uploading&hellip;</div>';
      Result.addEventListener("drop",rtl.createCallback(this,"HandleDroppedFiles"));
      Result.addEventListener("dragenter",rtl.createCallback(this,"HandleDragOver"));
      Result.addEventListener("dragover",rtl.createCallback(this,"HandleDragOver"));
      Result.addEventListener("dragend",rtl.createCallback(this,"HandleDragEnd"));
      Result.addEventListener("dragleave",rtl.createCallback(this,"HandleDragEnd"));
      if ($impl.isAdvancedUpload()) Result.classList.add("has-advanced-upload");
      return Result;
    };
    this.UpdateElement = function () {
      var el = null;
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      this.CreateCSS();
      if (this.GetElementHandle() != null) {
        this.GetElementHandle().style.setProperty("display","flex");
        el = this.GetElementHandle().children.item(0);
        el = el.children.item(0);
        if (!this.FShowPicture) {
          el.style.setProperty("display","none")}
         else el.style.removeProperty("display");
        if (this.FElementFont !== pas["WEBLib.Controls"].TElementFont.efCSS) {
          el.style.setProperty("color",pas["WEBLib.Graphics"].ColorToHTML(this.FFont.FColor))}
         else el.style.removeProperty("color");
        el = document.getElementById("FP" + this.FCreateRef);
        if (el != null) {
          if (!this.FEventInit) {
            this.FEventInit = true;
            el.addEventListener("change",rtl.createSafeCallback(this,"DoHandleChange"));
          };
          if (this.FMultiFile) {
            el.setAttribute("multiple","")}
           else el.removeAttribute("multiple");
          if (this.FAccept !== "") {
            el.setAttribute("accept",this.FAccept)}
           else el.removeAttribute("accept");
        };
        el = document.getElementById(this.FCreateRef + "lbl");
        if (el != null) {
          el.innerHTML = this.FCaption;
        };
        el = document.getElementById(this.FCreateRef + "drag");
        if (el != null) {
          el.innerHTML = this.FDragCaption;
        };
      };
    };
    this.ColorChanging = function () {
      pas["WEBLib.Controls"].TControl.ColorChanging.call(this);
      this.UpdateElement();
    };
    this.CreateCSS = function () {
      this.AddControlStyle("  \t.box" + "\t\t\t{" + " \t\t\tposition: relative;" + "\t    \tpadding: 2px 2px;" + "\t\t}" + "\t\t.box.has-advanced-upload" + "\t\t{" + "\t\t\toutline: 2px dashed #92b0b3;" + "\t\t\toutline-offset: -10px;" + "\t\t\t-webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;" + "\t\t\ttransition: outline-offset .15s ease-in-out, background-color .15s linear;" + "\t\t}" + "\t\t.box.is-dragover" + "\t\t{" + "\t\t\toutline-offset: -20px;" + "\t\t\toutline-color: #c8dadf;" + "\t\t\tbackground-color: #fff;" + "\t\t}" + "\t\t\t.box__dragndrop," + "\t\t\t.box__icon" + "\t\t\t{" + "\t\t\t\tdisplay: none;" + "\t\t\t}" + "\t\t\t.box.has-advanced-upload .box__dragndrop" + "\t\t\t{" + "\t\t\t\tdisplay: inline;" + "\t\t\t}" + "\t\t\t.box.has-advanced-upload .box__icon" + "\t\t\t{" + "\t\t\t\twidth: 100%;" + "\t\t\t\theight: 80px;" + "\t\t\t\tfill: #92b0b3;" + "\t\t\t\tdisplay: block;" + "\t\t\t\tmargin-bottom: 40px;" + "\t\t\t}" + "\t\t\t.box.is-uploading .box__input," + "\t\t\t.box.is-success .box__input," + "\t\t\t.box.is-error .box__input" + "\t\t\t{" + "\t\t\t\tvisibility: hidden;" + "\t\t\t}" + "\t\t\t.box__uploading," + "\t\t\t.box__success," + "\t\t\t.box__error" + "\t\t\t{" + "\t\t\tdisplay: none;" + "\t\t\t}" + "\t\t\t.box.is-uploading .box__uploading," + "\t\t\t.box.is-success .box__success," + "\t\t\t.box.is-error .box__error" + "\t\t\t{" + "\t\t\t\tdisplay: block;" + "\t\t\t\tposition: absolute;" + "\t\t\t\ttop: 50%;" + "       right: 0;" + "\t\t\t\tleft: 0;" + "\t   \t\t-webkit-transform: translateY( -50% );" + "\t\t\t\t\ttransform: translateY( -50% );" + "\t\t\t\t}" + "\t\t\t\t.box__uploading" + "\t\t\t\t{" + "\t\t\t\t\tfont-style: italic;" + "\t\t\t\t}" + "\t\t\t\t.box__success" + "\t\t\t\t{" + "\t\t\t\t\t-webkit-animation: appear-from-inside .25s ease-in-out;" + "\t\t\t\t\tanimation: appear-from-inside .25s ease-in-out;" + "\t\t\t\t}" + "\t\t\t\t\t@-webkit-keyframes appear-from-inside" + "\t\t\t\t\t{" + "\t\t\t\t\t\tfrom\t{ -webkit-transform: translateY( -50% ) scale( 0 ); }" + "\t\t\t\t\t\t75%\t\t{ -webkit-transform: translateY( -50% ) scale( 1.1 ); }" + "\t\t\t\t\t\tto\t\t{ -webkit-transform: translateY( -50% ) scale( 1 ); }" + "\t\t\t\t\t}" + "\t\t\t\t\t@keyframes appear-from-inside" + "\t\t\t\t\t{" + "\t\t\t\t\t\tfrom\t{ transform: translateY( -50% ) scale( 0 ); }" + "\t\t\t\t\t\t75%\t\t{ transform: translateY( -50% ) scale( 1.1 ); }" + "\t\t\t\t\t\tto\t\t{ transform: translateY( -50% ) scale( 1 ); }" + "\t\t\t\t\t}" + "\t\t\t\t.box__restart" + "\t\t\t\t{" + "\t\t\t\t\tfont-weight: 700;" + "\t\t\t\t}" + "\t\t\t\t.box__restart:focus," + "\t\t\t\t.box__restart:hover" + "\t\t\t\t{" + "\t\t\t\t\tcolor: " + pas["WEBLib.Graphics"].ColorToHTML(this.FFontHoverColor) + ";" + "\t\t\t\t}" + "\t\t\t\t.box__file" + "\t\t\t\t{" + "\t\t\t\t\twidth: 0.1px;" + "\t\t\t\t\theight: 0.1px;" + "\t\t\t\t\topacity: 0;" + "\t\t\t\t\toverflow: hidden;" + "\t\t\t\t\tposition: absolute;" + "\t\t\t\t\tz-index: -1;" + "\t\t\t\t}" + "\t\t\t\t.box__file + label" + "\t\t\t\t{" + "\t\t\t\t\ttext-overflow: ellipsis;" + "\t\t\t\t\twhite-space: nowrap;" + "\t\t\t\t\tcursor: pointer;" + "\t\t\t\t\tdisplay: inline-block;" + "\t\t\t\t\toverflow: hidden;" + "\t\t\t\t}" + "\t\t\t\t.box__file + label:hover strong," + "\t\t\t\t.box__file:focus + label strong," + "\t\t\t\t.box__file.has-focus + label strong" + "\t\t\t\t{" + "\t\t\t\t\tcolor: " + pas["WEBLib.Graphics"].ColorToHTML(this.FFontHoverColor) + ";" + "\t\t\t\t}" + "\t\t\t\t.box__file:focus + label," + "\t\t\t\t.box__file.has-focus + label" + "\t\t\t\t{" + " \t\t\t\toutline: 1px dotted #000;" + "\t\t\t\t\toutline: -webkit-focus-ring-color auto 5px;" + "\t\t\t\t}" + "\t\t\t\t.box__button" + "\t\t\t\t{" + "\t\t\t\t\tfont-weight: 700;" + "\t\t\t\t\tcolor: #e5edf1;" + "\t\t\t\t\tbackground-color: #39bfd3;" + "\t\t\t\t\tdisplay: none;" + "\t\t\t\t\tpadding: 8px 16px;" + "\t\t\t\t\tmargin: 10px auto 0;" + "\t\t\t\t}" + "\t\t\t\t\t.box__button:hover," + "\t\t\t\t\t.box__button:focus" + "\t\t\t\t\t{" + "\t\t\t\t\t\tbackground-color: #0f3c4b;" + "\t\t\t\t\t}");
    };
    this.Create$1 = function (AOwner) {
      pas["WEBLib.Controls"].TControl.Create$1.apply(this,arguments);
      this.SetColor(0xDFDAC8);
      this.FFontHoverColor = 0xd3bf39;
      this.SetCaption("Choose a file");
      this.FDragCaption = "or drag it here";
      this.FDragColor = -1;
      this.FShowPicture = true;
      this.FFiles = $mod.TFiles.$create("Create$2",[this]);
      this.FFileList = pas.Classes.TStringList.$create("Create$1");
      this.FFileList.SetSkipLastLineBreak(true);
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FFiles");
      rtl.free(this,"FFileList");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FMultiFile = false;
      this.FShowFiles = false;
      this.FEventInit = false;
      this.SetWidth(170);
      this.SetHeight(190);
    };
    this.Clear = function () {
      var el = null;
      el = document.getElementById("FP" + this.GetID());
      if (el != null) {
        el.setAttribute("type","");
        el.setAttribute("type","file");
      };
      el = document.getElementById(this.GetID() + "fileslist");
      if (el != null) {
        el.innerHTML = "";
      };
      while (this.FFiles.GetCount() > 0) this.FFiles.Delete(0);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Accept",2,rtl.string,"FAccept","SetAccept");
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("Color",2,pas["WEBLib.Graphics"].$rtti["TColor"],"FColor","SetColor",{Default: 14670536});
    $r.addProperty("DragCaption",2,rtl.string,"FDragCaption","SetDragCaption");
    $r.addProperty("DragColor",0,pas["WEBLib.Graphics"].$rtti["TColor"],"FDragColor","FDragColor",{Default: -1});
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("Font",2,pas["WEBLib.Graphics"].$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("FontHoverColor",0,pas["WEBLib.Graphics"].$rtti["TColor"],"FFontHoverColor","FFontHoverColor",{Default: 13877049});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Multifile",0,rtl.boolean,"FMultiFile","FMultiFile",{Default: false});
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont",{Default: true});
    $r.addProperty("ShowFiles",0,rtl.boolean,"FShowFiles","FShowFiles",{Default: false});
    $r.addProperty("ShowPicture",2,rtl.boolean,"FShowPicture","SetShowPicture",{Default: true});
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnDroppedFiles",0,$mod.$rtti["TFilesDroppedEvent"],"FOnDroppedFiles","FOnDroppedFiles");
    $r.addProperty("OnGetFileAsText",0,$mod.$rtti["TFileAsTextEvent"],"FOnFileAsText","FOnFileAsText");
    $r.addProperty("OnGetFileAsArrayBuffer",0,$mod.$rtti["TFileAsArrayBufferEvent"],"FOnGetFileAsArrayBuffer","FOnGetFileAsArrayBuffer");
    $r.addProperty("OnGetFileAsStream",0,$mod.$rtti["TFileAsStreamEvent"],"FOnGetFileAsStream","FOnGetFileAsStream");
    $r.addProperty("OnGetFileAsBase64",0,$mod.$rtti["TFileAsBase64Event"],"FOnFileAsBase64","FOnFileAsBase64");
    $r.addProperty("OnGetFileAsDataURL",0,$mod.$rtti["TFileAsDataURLEvent"],"FOnFileAsDataURL","FOnFileAsDataURL");
    $r.addProperty("OnUploadFileComplete",0,$mod.$rtti["TFileUploadEvent"],"FOnUploadFileComplete","FOnUploadFileComplete");
    $r.addProperty("OnUploadFileResponseComplete",0,$mod.$rtti["TFileUploadResponseEvent"],"FOnUploadFileResponseComplete","FOnUploadFileResponseComplete");
    $r.addProperty("OnUploadFileAbort",0,$mod.$rtti["TFileUploadEvent"],"FOnUploadFileAbort","FOnUploadFileAbort");
    $r.addProperty("OnUploadFileError",0,$mod.$rtti["TFileUploadErrorEvent"],"FOnUploadFileError","FOnUploadFileError");
    $r.addProperty("OnUploadFileProgress",0,$mod.$rtti["TFileUploadProgressEvent"],"FOnUploadFileProgress","FOnUploadFileProgress");
  });
  rtl.createClass(this,"TWebFileUpload",this.TFileUpload,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TFilePicker",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FOnChange = null;
      this.FMultiFile = false;
      this.FFiles = null;
      this.FOnFileAsText = null;
      this.FOnGetFileAsArrayBuffer = null;
      this.FAccept = "";
      this.FOnFileAsBase64 = null;
      this.FChangePtr = null;
      this.FOnFileAsDataURL = null;
      this.FOnUploadFileAbort = null;
      this.FOnUploadFileComplete = null;
      this.FOnUploadFileProgress = null;
      this.FOnUploadFileError = null;
      this.FOnUploadFileResponseComplete = null;
      this.FOnGetFileAsStream = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      this.FFiles = undefined;
      this.FOnFileAsText = undefined;
      this.FOnGetFileAsArrayBuffer = undefined;
      this.FOnFileAsBase64 = undefined;
      this.FOnFileAsDataURL = undefined;
      this.FOnUploadFileAbort = undefined;
      this.FOnUploadFileComplete = undefined;
      this.FOnUploadFileProgress = undefined;
      this.FOnUploadFileError = undefined;
      this.FOnUploadFileResponseComplete = undefined;
      this.FOnGetFileAsStream = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetMultiFile = function (Value) {
      if (this.FMultiFile !== Value) {
        this.FMultiFile = Value;
        this.UpdateElement();
      };
    };
    this.DoHandleChange = function (e) {
      var Result = false;
      var i = 0;
      var l = 0;
      var sz = 0;
      var eh = null;
      var s = "";
      var m = "";
      var f = null;
      var d = null;
      var jsfile = null;
      Result = true;
      while (this.FFiles.GetCount() > 0) this.FFiles.Delete(0);
      eh = this.GetElementHandle();
      var curFiles = eh.files;
      l = curFiles.length;
      for (var $l = 0, $end = l - 1; $l <= $end; $l++) {
        i = $l;
        f = this.FFiles.Add$1();
        jsfile = curFiles[i];
        s = curFiles[i].name;
        m = curFiles[i].type;
        sz = curFiles[i].size;
        d = new Date(curFiles[i].lastModified);
        f.FFileObject = jsfile;
        f.FName = s;
        f.FMimeType = m;
        f.FSize = sz;
        f.FModified = pas.SysUtils.EncodeDate(d.getYear() + 1900,d.getMonth() + 1,d.getDate()) + pas.SysUtils.EncodeTime(d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds());
      };
      if (this.FOnChange != null) this.FOnChange(this);
      return Result;
    };
    this.SetAccept = function (Value) {
      if (this.FAccept !== Value) {
        this.FAccept = Value;
        this.UpdateElement();
      };
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.GetElementHandle() != null) {
        if (this.FMultiFile) {
          this.GetElementHandle().setAttribute("multiple","")}
         else this.GetElementHandle().removeAttribute("multiple");
        if (this.FAccept !== "") {
          this.GetElementHandle().setAttribute("accept",this.FAccept)}
         else this.GetElementHandle().removeAttribute("accept");
      };
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("INPUT");
      Result.setAttribute("type","file");
      return Result;
    };
    this.GetMethodPointers = function () {
      if (this.FChangePtr === null) {
        this.FChangePtr = rtl.createCallback(this,"DoHandleChange");
        pas["WEBLib.Controls"].TControl.GetMethodPointers.call(this);
      };
    };
    this.BindEvents = function () {
      var eh = null;
      pas["WEBLib.Controls"].TCustomControl.BindEvents.call(this);
      if (this.GetElementBindHandle() != null) {
        eh = this.GetElementBindHandle();
        eh.addEventListener("change",rtl.createSafeCallback(this,"DoHandleChange"));
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FFiles = $mod.TFiles.$create("Create$2",[this]);
      this.SetWidth(160);
      this.SetHeight(40);
    };
    this.Destroy = function () {
      rtl.free(this,"FFiles");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.Clear = function () {
      this.GetElementHandle().setAttribute("type","");
      this.GetElementHandle().setAttribute("type","file");
      while (this.FFiles.GetCount() > 0) this.FFiles.Delete(0);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Accept",2,rtl.string,"FAccept","SetAccept");
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("Multifile",2,rtl.boolean,"FMultiFile","SetMultiFile");
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnChange",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnGetFileAsText",0,$mod.$rtti["TFileAsTextEvent"],"FOnFileAsText","FOnFileAsText");
    $r.addProperty("OnGetFileAsArrayBuffer",0,$mod.$rtti["TFileAsArrayBufferEvent"],"FOnGetFileAsArrayBuffer","FOnGetFileAsArrayBuffer");
    $r.addProperty("OnGetFileAsBase64",0,$mod.$rtti["TFileAsBase64Event"],"FOnFileAsBase64","FOnFileAsBase64");
    $r.addProperty("OnGetFileAsDataURL",0,$mod.$rtti["TFileAsDataURLEvent"],"FOnFileAsDataURL","FOnFileAsDataURL");
    $r.addProperty("OnGetFileAsStream",0,$mod.$rtti["TFileAsStreamEvent"],"FOnGetFileAsStream","FOnGetFileAsStream");
    $r.addProperty("OnUploadFileComplete",0,$mod.$rtti["TFileUploadEvent"],"FOnUploadFileComplete","FOnUploadFileComplete");
    $r.addProperty("OnUploadFileResponseComplete",0,$mod.$rtti["TFileUploadResponseEvent"],"FOnUploadFileResponseComplete","FOnUploadFileResponseComplete");
    $r.addProperty("OnUploadFileAbort",0,$mod.$rtti["TFileUploadEvent"],"FOnUploadFileAbort","FOnUploadFileAbort");
    $r.addProperty("OnUploadFileError",0,$mod.$rtti["TFileUploadErrorEvent"],"FOnUploadFileError","FOnUploadFileError");
    $r.addProperty("OnUploadFileProgress",0,$mod.$rtti["TFileUploadProgressEvent"],"FOnUploadFileProgress","FOnUploadFileProgress");
  });
  rtl.createClass(this,"TWebFilePicker",this.TFilePicker,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"THTMLDiv",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FHTML = null;
      this.FOldText = "";
    };
    this.$final = function () {
      this.FHTML = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetHTML = function (Value) {
      this.FHTML.Assign(Value);
    };
    this.UpdateElementData = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetElementHandle() != null) {
        if ((this.FOldText !== "") || (this.FHTML.GetTextStr() !== "")) this.GetElementHandle().innerHTML = this.FHTML.GetTextStr();
        this.FOldText = this.FHTML.GetTextStr();
      } else {
        if (!this.GetIsLinked() && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) this.RenderDesigning(this.$classname,this.GetContainer(),this,true,"");
      };
    };
    this.HTMLChanged = function (Sender) {
      this.UpdateElementData();
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("DIV");
      return Result;
    };
    this.CreateInitialize = function () {
      this.FHTML = pas.Classes.TStringList.$create("Create$1");
      this.FHTML.SetSkipLastLineBreak(true);
      rtl.as(this.FHTML,pas.Classes.TStringList).FOnChange = rtl.createCallback(this,"HTMLChanged");
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FControlStyle = rtl.unionSet(this.FControlStyle,rtl.createSet(pas["WEBLib.Controls"].TControlStyleValue.csAcceptsControls));
      this.SetClipChildren(false);
      this.SetTabStop(false);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(240);
        this.SetHeight(160);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FHTML");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("HTML",2,pas.Classes.$rtti["TStrings"],"FHTML","SetHTML");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TWebHTMLDiv",this.THTMLDiv,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"THTMLSpan",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FHTML = null;
      this.FOldText = "";
    };
    this.$final = function () {
      this.FHTML = undefined;
      pas["WEBLib.Controls"].TCustomControl.$final.call(this);
    };
    this.SetHTML = function (Value) {
      this.FHTML.Assign(Value);
    };
    this.UpdateElementData = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetElementHandle() != null) {
        if ((this.FOldText !== "") || (this.FHTML.GetTextStr() !== "")) this.GetElementHandle().innerHTML = this.FHTML.GetTextStr();
        this.FOldText = this.FHTML.GetTextStr();
      } else {
        if (!this.GetIsLinked() && (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState)) this.RenderDesigning(this.$classname,this.GetContainer(),this,true,"");
      };
    };
    this.HTMLChanged = function (Sender) {
      this.UpdateElementData();
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("SPAN");
      return Result;
    };
    this.CreateInitialize = function () {
      this.FHTML = pas.Classes.TStringList.$create("Create$1");
      rtl.as(this.FHTML,pas.Classes.TStringList).FOnChange = rtl.createCallback(this,"HTMLChanged");
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FControlStyle = rtl.unionSet(this.FControlStyle,rtl.createSet(pas["WEBLib.Controls"].TControlStyleValue.csAcceptsControls));
      this.SetTabStop(false);
      this.SetClipChildren(false);
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) {
        this.SetWidth(240);
        this.SetHeight(160);
      };
    };
    this.Destroy = function () {
      rtl.free(this,"FHTML");
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("DragMode",2,pas["WEBLib.Controls"].$rtti["TDragMode"],"FDragMode","SetDragMode",{Default: pas["WEBLib.Controls"].TDragMode.dmManual});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("HTML",2,pas.Classes.$rtti["TStrings"],"FHTML","SetHTML");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnTouchStart",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchStart","FOnTouchStart");
    $r.addProperty("OnTouchEnd",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchEnd","FOnTouchEnd");
    $r.addProperty("OnTouchMove",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchMove","FOnTouchMove");
    $r.addProperty("OnTouchCancel",0,pas["WEBLib.Controls"].$rtti["TTouchEvent"],"FOnTouchCancel","FOnTouchCancel");
    $r.addProperty("OnDragDrop",0,pas["WEBLib.Controls"].$rtti["TDragDropEvent"],"FOnDragDrop","FOnDragDrop");
    $r.addProperty("OnDragOver",0,pas["WEBLib.Controls"].$rtti["TDragOverEvent"],"FOnDragOver","FOnDragOver");
    $r.addProperty("OnEndDrag",0,pas["WEBLib.Controls"].$rtti["TEndDragEvent"],"FonEndDrag","FonEndDrag");
    $r.addProperty("OnStartDrag",0,pas["WEBLib.Controls"].$rtti["TStartDragEvent"],"FOnStartDrag","FOnStartDrag");
  });
  rtl.createClass(this,"TWebHTMLSpan",this.THTMLSpan,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"THTMLAnchor",pas["WEBLib.Controls"].TCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Controls"].TCustomControl.$init.call(this);
      this.FHref = "";
      this.FTarget = "";
    };
    this.SetHref = function (Value) {
      this.FHref = Value;
      this.UpdateElementData();
    };
    this.SetTarget = function (Value) {
      this.FTarget = Value;
      this.UpdateElementData();
    };
    this.SetCaption = function (Value) {
      pas["WEBLib.Controls"].TCustomControl.SetCaption.call(this,Value);
      this.UpdateElementData();
    };
    this.HandleDoClick = function (Event) {
      var Result = false;
      if (this.FOnClick != null) {
        Event.preventDefault();
        this.StopPropagation();
        Result = false;
        this.FOnClick(this);
      } else Result = pas["WEBLib.Controls"].TControl.HandleDoClick.apply(this,arguments);
      return Result;
    };
    this.CreateElement = function () {
      var Result = null;
      Result = document.createElement("A");
      return Result;
    };
    this.UpdateElementData = function () {
      pas["WEBLib.Controls"].TControl.UpdateElementData.call(this);
      if (this.GetElementHandle() != null) {
        if (this.FCaption !== "") this.GetElementHandle().innerHTML = this.FCaption;
        this.GetElementHandle().setAttribute("href",this.FHref);
        this.GetElementHandle().setAttribute("target",this.FTarget);
      };
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.SetCaption("WebHTMLAnchor");
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas["WEBLib.Controls"].$rtti["TAlign"],"FAlign","SetAlign",{Default: pas["WEBLib.Controls"].TAlign.alNone});
    $r.addProperty("AlignWithMargins",2,rtl.boolean,"FAlignWithMargins","SetAlignWithMargins",{Default: false});
    $r.addProperty("Anchors",2,pas["WEBLib.Controls"].$rtti["TAnchors"],"FAnchors","SetAnchors",{Default: rtl.createSet(pas["WEBLib.Controls"].TAnchorKind.akLeft,pas["WEBLib.Controls"].TAnchorKind.akTop)});
    $r.addProperty("Caption",2,rtl.string,"FCaption","SetCaption");
    $r.addProperty("ChildOrder",2,rtl.longint,"FChildOrder","SetChildOrderEx",{Default: 0});
    $r.addProperty("ElementClassName",2,pas["WEBLib.Controls"].$rtti["TElementClassName"],"FElementClassName","SetElementClassName");
    $r.addProperty("ElementFont",2,pas["WEBLib.Controls"].$rtti["TElementFont"],"FElementFont","SetElementFont",{Default: pas["WEBLib.Controls"].TElementFont.efProperty});
    $r.addProperty("ElementID",3,pas["WEBLib.Controls"].$rtti["TElementID"],"GetID","SetID");
    $r.addProperty("ElementPosition",2,pas["WEBLib.Controls"].$rtti["TElementPosition"],"FElementPosition","SetElementPosition",{Default: pas["WEBLib.Controls"].TElementPosition.epAbsolute});
    $r.addProperty("HeightPercent",2,rtl.double,"FHeightPercent","SetHeightPercent",{Default: 100});
    $r.addProperty("HeightStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FHeightStyle","SetHeightStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("HRef",2,rtl.string,"FHref","SetHref");
    $r.addProperty("Target",2,rtl.string,"FTarget","SetTarget");
    $r.addProperty("Role",3,rtl.string,"GetRole","SetRole");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible",{Default: true});
    $r.addProperty("WidthPercent",2,rtl.double,"FWidthPercent","SetWidthPercent",{Default: 100});
    $r.addProperty("WidthStyle",2,pas["WEBLib.Controls"].$rtti["TSizeStyle"],"FWidthStyle","SetWidthStyle",{Default: pas["WEBLib.Controls"].TSizeStyle.ssAbsolute});
    $r.addProperty("OnClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnMouseDown",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseUp",0,pas["WEBLib.Controls"].$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseMove",0,pas["WEBLib.Controls"].$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseLeave",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseEnter",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
  });
  rtl.createClass(this,"TWebHTMLAnchor",this.THTMLAnchor,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$MethodVar("TURLValidatorEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["IsValid",rtl.boolean]]), methodkind: 0});
  rtl.createClass(this,"TURLValidator",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FURL = "";
      this.FOnValidated = null;
    };
    this.$final = function () {
      this.FOnValidated = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.HandleResult = function (IsValid) {
      if (this.FOnValidated != null) this.FOnValidated(this,IsValid);
    };
    this.Validate = function () {
      var s = "";
      var ptr = null;
      s = this.FURL;
      ptr = rtl.createCallback(this,"HandleResult");
      var request = new XMLHttpRequest();
      request.open('GET', s, true);
      request.onreadystatechange = function(){
         if (request.readyState === 4){
             ptr(request.status === 200);
             }
      };
      request.send();
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("URL",0,rtl.string,"FURL","FURL");
    $r.addProperty("OnValidated",0,$mod.$rtti["TURLValidatorEvent"],"FOnValidated","FOnValidated");
  });
  rtl.createClass(this,"TWebURLValidator",this.TURLValidator,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.$rtti.$DynArray("TJSHTMLFileArray",{eltype: pas.Web.$rtti["TJSHTMLFile"]});
  rtl.createClass(this,"TShare",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FTitle = "";
      this.FText = "";
      this.FURL = "";
    };
    this.Share = function (ATitle, AText, AURL) {
      var Result = false;
      var res = false;
      res = false;
      if (navigator.share) {
        res = true;
        navigator.share({
          title: ATitle,
          text: AText,
          url: AURL });
      };
      Result = res;
      return Result;
    };
    this.Share$1 = function (ATitle, AText, AURL, AFiles) {
      var Result = false;
      var res = false;
      res = false;
      if (navigator.canShare && navigator.canShare({ files: AFiles })) {
       res = true;
       navigator.share({
       files: AFiles,
       title: ATitle,
       text: AText });
      };
      Result = res;
      return Result;
    };
    this.CanShareFiles = function () {
      var Result = false;
      var res = false;
      res = false;
      if (navigator.share) {
      try
      {
        res = navigator.canShare;
      }
      catch(err)
      {
      }
      };
      Result = res;
      return Result;
    };
    this.Execute = function () {
      var Result = false;
      Result = this.Share(this.FTitle,this.FText,this.FURL);
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("Title",0,rtl.string,"FTitle","FTitle");
    $r.addProperty("Text",0,rtl.string,"FText","FText");
    $r.addProperty("URL",0,rtl.string,"FURL","FURL");
  });
  rtl.createClass(this,"TWebShare",this.TShare,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.TDeviceOrientationError = {"0": "oeDenied", oeDenied: 0, "1": "oeNotSupported", oeNotSupported: 1};
  this.$rtti.$Enum("TDeviceOrientationError",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TDeviceOrientationError});
  this.$rtti.$MethodVar("TDeviceOrientationEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Heading",rtl.double]]), methodkind: 0});
  this.$rtti.$MethodVar("TDeviceOrientationErrorEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["AError",this.$rtti["TDeviceOrientationError"]]]), methodkind: 0});
  rtl.createClass(this,"TDeviceOrientation",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FOnHeadingChange = null;
      this.FOnInitialized = null;
      this.FOnError = null;
      this.FStarted = false;
      this.FOrientationPtr = null;
    };
    this.$final = function () {
      this.FOnHeadingChange = undefined;
      this.FOnInitialized = undefined;
      this.FOnError = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.DoHandleOrientationEvent = function (e) {
      var Result = false;
      var s = 0.0;
      var compass = undefined;
      s = 0.0;
      compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
      var d = 0.0;
      s = d + compass;
      if (this.FOnHeadingChange != null) this.FOnHeadingChange(this,s);
      return Result;
    };
    this.Enabled = function () {
      var Result = false;
      Result = window.DeviceOrientationEvent != null;
      return Result;
    };
    this.Start = function () {
      var $Self = this;
      var os = 0;
      var ptr = null;
      function HandleDeny() {
        if ($Self.FOnError != null) $Self.FOnError($Self,$mod.TDeviceOrientationError.oeDenied);
      };
      function HandleError() {
        if ($Self.FOnError != null) $Self.FOnError($Self,$mod.TDeviceOrientationError.oeNotSupported);
      };
      function HandleSuccess() {
        $Self.FStarted = true;
        if ($Self.FOnInitialized != null) $Self.FOnInitialized($Self);
      };
      os = pas["WEBLib.WebTools"].GetOperatingSystem();
      this.FOrientationPtr = rtl.createCallback($Self,"DoHandleOrientationEvent");
      ptr = this.FOrientationPtr;
      if (os in rtl.createSet(pas["WEBLib.WebTools"].TOperatingSystem.osiOS,pas["WEBLib.WebTools"].TOperatingSystem.osmacOS)) {
        if (DeviceOrientationEvent==null) return;
              if (DeviceOrientationEvent.requestPermission==null) return;
        
              DeviceOrientationEvent.requestPermission().then((response) => {
                if (response === "granted") {
                  window.addEventListener("deviceorientation", ptr, true);
                  HandleSuccess();
                } else {
                  HandleDeny();
                }
              })
              .catch(() => HandleError());
      } else {
        window.addEventListener("deviceorientationabsolute", ptr, true);
        HandleSuccess();
      };
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("OnHeadingChange",0,$mod.$rtti["TDeviceOrientationEvent"],"FOnHeadingChange","FOnHeadingChange");
    $r.addProperty("OnInitialized",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnInitialized","FOnInitialized");
    $r.addProperty("OnError",0,$mod.$rtti["TDeviceOrientationErrorEvent"],"FOnError","FOnError");
  });
  rtl.createClass(this,"TWebDeviceOrientation",this.TDeviceOrientation,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TSpeechSynthesis",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FVolume = 0.0;
      this.FPitch = 0.0;
      this.FRate = 0.0;
      this.FVoices = null;
      this.FOnVoicesReady = null;
      this.FVoice = "";
    };
    this.$final = function () {
      this.FVoices = undefined;
      this.FOnVoicesReady = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.SetVolume = function (Value) {
      if ((Value >= 0) && (Value <= 1)) this.FVolume = Value;
    };
    this.SetPitch = function (Value) {
      if ((Value >= 0) && (Value <= 10)) this.FPitch = Value;
    };
    this.SetRate = function (Value) {
      if ((Value >= 0) && (Value <= 2)) this.FRate = Value;
    };
    this.SetVoice = function (Value) {
      this.FVoice = Value;
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.apply(this,arguments);
      this.FVolume = 1;
      this.FRate = 1;
      this.FPitch = 1;
      this.FVoices = pas.Classes.TStringList.$create("Create$1");
      if (this.Supported()) this.GetVoices();
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FVoices");
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.Speak = function (AText) {
      var v = 0.0;
      var r = 0.0;
      var p = 0.0;
      var avoice = "";
      v = this.FVolume;
      r = this.FRate;
      p = this.FPitch;
      avoice = this.FVoice;
      // Create a new instance of SpeechSynthesisUtterance.
          var msg = new SpeechSynthesisUtterance();
      
          // Set the text.
          msg.text = AText;
      
          // Set the attributes.
            msg.volume = v;
          msg.rate = r;
          msg.pitch = p;
      
          // If a voice has been selected, find the voice and set the
          // utterance instance's voice attribute.
          if (avoice != "") {
              msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == avoice; })[0];
          }
      
          // Queue this utterance.
            window.speechSynthesis.speak(msg);
    };
    this.Cancel = function () {
      window.speechSynthesis.cancel();
    };
    this.GetVoices = function () {
      var $Self = this;
      var Result = null;
      var sl = null;
      function VoicesReady() {
        if ($Self.FOnVoicesReady != null) $Self.FOnVoicesReady($Self);
      };
      sl = this.FVoices;
      if (1 < 0) VoicesReady();
      function populateVoiceList()
          {
              var voices = speechSynthesis.getVoices();
            // console.log(voices);
            // Loop through each of the voices.
              voices.forEach(function(voice, i) {
              sl.Add(voice.name);
              //console.log(voice.name);
              });
            if (voices.length > 0) { VoicesReady(); }
      
         }
         populateVoiceList();
         if (window.speechSynthesis.onvoiceschanged !== undefined) {
           speechSynthesis.onvoiceschanged = populateVoiceList;
         };
      return Result;
    };
    this.IsSpeaking = function () {
      var Result = false;
      var res = false;
      res = window.speechSynthesis.speaking;
      Result = res;
      return Result;
    };
    this.Supported = function () {
      var Result = false;
      var res = false;
      res = false;
      if ('speechSynthesis' in window) { res = true; };
      Result = res;
      return Result;
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["AOwner",pas.Classes.$rtti["TComponent"]]]);
    $r.addProperty("Pitch",2,rtl.double,"FPitch","SetPitch");
    $r.addProperty("Rate",2,rtl.double,"FRate","SetRate");
    $r.addProperty("Voice",2,rtl.string,"FVoice","SetVoice");
    $r.addProperty("Volume",2,rtl.double,"FVolume","SetVolume");
    $r.addProperty("OnVoicesReady",0,pas["WEBLib.Controls"].$rtti["TNotifyEvent"],"FOnVoicesReady","FOnVoicesReady");
  });
  rtl.createClass(this,"TWebSpeechSynthesis",this.TSpeechSynthesis,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TConsoleLog",pas["WEBLib.Menus"].TWebCustomControl,function () {
    this.$init = function () {
      pas["WEBLib.Menus"].TWebCustomControl.$init.call(this);
      this.FLog = null;
      this.FInit = false;
      this.FAutoScroll = false;
    };
    this.$final = function () {
      this.FLog = undefined;
      pas["WEBLib.Menus"].TWebCustomControl.$final.call(this);
    };
    this.CreateElement = function () {
      var Result = null;
      var el = null;
      var ellog = null;
      var LAutoScroll = false;
      LAutoScroll = this.FAutoScroll;
      el = document.createElement("DIV");
      ellog = document.createElement("PRE");
      el.appendChild(ellog);
      Result = el;
      this.FLog = ellog;
      if (pas.Classes.TComponentStateItem.csDesigning in this.FComponentState) return Result;
      this.AddControlStyle(".log-warn { color: orange }" + pas["WEBLib.WebTools"].CRLF + ".log-error { color: red }" + pas["WEBLib.WebTools"].CRLF + ".log-info { color: skyblue }" + pas["WEBLib.WebTools"].CRLF + ".log-log { color: silver }" + pas["WEBLib.WebTools"].CRLF + ".log-warn, .log-error { font-weight: bold; }");
      this.AddControlScriptSource("    function unfixLoggingFunc(name) {" + pas["WEBLib.WebTools"].CRLF + '        console[name] = console["old" + name];' + pas["WEBLib.WebTools"].CRLF + " }" + pas["WEBLib.WebTools"].CRLF + "function unwireLogging() {" + pas["WEBLib.WebTools"].CRLF + '    unfixLoggingFunc("log");' + pas["WEBLib.WebTools"].CRLF + '    unfixLoggingFunc("debug");' + pas["WEBLib.WebTools"].CRLF + '    unfixLoggingFunc("warn");' + pas["WEBLib.WebTools"].CRLF + '    unfixLoggingFunc("error");' + pas["WEBLib.WebTools"].CRLF + '    unfixLoggingFunc("info");' + pas["WEBLib.WebTools"].CRLF + "}" + pas["WEBLib.WebTools"].CRLF + "function rewireLoggingToElement(eleLocator, eleOverflowLocator, autoScroll) {" + pas["WEBLib.WebTools"].CRLF + '    fixLoggingFunc("log");' + pas["WEBLib.WebTools"].CRLF + '    fixLoggingFunc("debug");' + pas["WEBLib.WebTools"].CRLF + '    fixLoggingFunc("warn");' + pas["WEBLib.WebTools"].CRLF + '    fixLoggingFunc("error");' + pas["WEBLib.WebTools"].CRLF + '    fixLoggingFunc("info");' + pas["WEBLib.WebTools"].CRLF + "" + pas["WEBLib.WebTools"].CRLF + "    function fixLoggingFunc(name) {" + pas["WEBLib.WebTools"].CRLF + '        console["old" + name] = console[name];' + pas["WEBLib.WebTools"].CRLF + "        console[name] = function(...arguments) {" + pas["WEBLib.WebTools"].CRLF + "            const output = produceOutput(name, arguments);" + pas["WEBLib.WebTools"].CRLF + "            const eleLog = eleLocator;" + pas["WEBLib.WebTools"].CRLF + "" + pas["WEBLib.WebTools"].CRLF + "            if (autoScroll) {" + pas["WEBLib.WebTools"].CRLF + "                const eleContainerLog = eleOverflowLocator;" + pas["WEBLib.WebTools"].CRLF + "                const isScrolledToBottom = eleContainerLog.scrollHeight - eleContainerLog.clientHeight <= eleContainerLog.scrollTop + 1;" + pas["WEBLib.WebTools"].CRLF + '                eleLog.innerHTML += output + "<br>";' + pas["WEBLib.WebTools"].CRLF + "                if (isScrolledToBottom) {" + pas["WEBLib.WebTools"].CRLF + "                    eleContainerLog.scrollTop = eleContainerLog.scrollHeight - eleContainerLog.clientHeight;" + pas["WEBLib.WebTools"].CRLF + "                }" + pas["WEBLib.WebTools"].CRLF + "            } else {" + pas["WEBLib.WebTools"].CRLF + '                eleLog.innerHTML += output + "<br>";' + pas["WEBLib.WebTools"].CRLF + "            }" + pas["WEBLib.WebTools"].CRLF + "" + pas["WEBLib.WebTools"].CRLF + '            console["old" + name].apply(undefined, arguments);' + pas["WEBLib.WebTools"].CRLF + "        };" + pas["WEBLib.WebTools"].CRLF + "    }" + pas["WEBLib.WebTools"].CRLF + "" + pas["WEBLib.WebTools"].CRLF + "   function produceOutput(name, args) {" + pas["WEBLib.WebTools"].CRLF + "       return args.reduce((output, arg) => {" + pas["WEBLib.WebTools"].CRLF + "            return output +" + pas["WEBLib.WebTools"].CRLF + '                "<span class=\\"log-" + (typeof arg) + " log-" + name + "\\">" +' + pas["WEBLib.WebTools"].CRLF + '                    (typeof arg === "object" && (JSON || {}).stringify ? JSON.stringify(arg) : arg) +' + pas["WEBLib.WebTools"].CRLF + '                "</span>&nbsp;";' + pas["WEBLib.WebTools"].CRLF + '        }, "");' + pas["WEBLib.WebTools"].CRLF + "    }" + pas["WEBLib.WebTools"].CRLF + "}");
      rewireLoggingToElement(ellog, el, LAutoScroll);
      this.FInit = true;
      return Result;
    };
    this.UpdateElement = function () {
      pas["WEBLib.Controls"].TControl.UpdateElement.call(this);
      if (this.GetElementHandle() != null) this.GetElementHandle().style.setProperty("overflow","auto");
    };
    this.CreateInitialize = function () {
      pas["WEBLib.Controls"].TCustomControl.CreateInitialize.call(this);
      this.FAutoScroll = true;
    };
    this.Destroy = function () {
      if (this.FInit) {
        unwireLogging();
      };
      pas["WEBLib.Controls"].TCustomControl.Destroy.call(this);
    };
    this.Clear = function () {
      this.FLog.innerHTML = "";
    };
    rtl.addIntf(this,pas.System.IUnknown);
    var $r = this.$rtti;
    $r.addProperty("AutoScroll",0,rtl.boolean,"FAutoScroll","FAutoScroll",{Default: true});
  });
  rtl.createClass(this,"TWebConsoleLog",this.TConsoleLog,function () {
    rtl.addIntf(this,pas.System.IUnknown);
  });
  this.GPXToCoordinates = function (AGPXData) {
    var Result = null;
    Result = null;
    var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(AGPXData, "application/xml");
    
        var trkpts = xmlDoc.getElementsByTagName("trkpt");
        if (trkpts.length == 0) {
          trkpts = xmlDoc.getElementsByTagName("rtept");
        }
    
        var coordinates = [];
    
        for (var i = 0; i < trkpts.length; i++) {
            var trkpt = trkpts[i];
            var lat = trkpt.getAttribute("lat");
            var lon = trkpt.getAttribute("lon");
            var coord = [];
            coord.push(parseFloat(lat));
            coord.push(parseFloat(lon));
            //coordinates.push({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
            coordinates.push(coord);
         }
        return coordinates;
    return Result;
  };
  $mod.$implcode = function () {
    $impl.TWITTERSCRIPTID = "twitterscriptid";
    $impl.LMapNotCreated = "Map not created";
    $impl.EventResult = function (Event) {
      var Result = "";
      Result = Event.target.result;
      return Result;
    };
    $impl.isAdvancedUpload = function () {
      var div = document.createElement('div');
      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    };
  };
},["WEBLib.Dialogs","WEBLib.WebTools"]);
//# sourceMappingURL=WEBLib.WebCtrls.js.map
