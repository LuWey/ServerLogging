rtl.module("Rtl.BrowserLoadHelper",["System","Classes","SysUtils","JS","Web"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TBrowserLoadHelper",pas.Classes.TLoadHelper,function () {
    this.LoadText = function (aURL, aSync, OnLoaded, OnError) {
      var $Self = this;
      function doFetchOK(response) {
        var Result = undefined;
        Result = false;
        if (response.status !== 200) {
          if (OnError != null) OnError("Error " + pas.SysUtils.IntToStr(response.status) + ": " + response.statusText);
        } else response.text().then(function (value) {
          var Result = undefined;
          OnLoaded("" + value);
          return Result;
        });
        return Result;
      };
      function doFetchFail(response) {
        var Result = undefined;
        Result = false;
        OnError("Error 999: unknown error");
        return Result;
      };
      if (aSync) {
        window.fetch(aURL).then(doFetchOK).catch(doFetchFail)}
       else {
        var $with = new XMLHttpRequest();
        $with.open("GET",aURL,false);
        $with.addEventListener("load",function (oEvent) {
          OnLoaded($with.responseText);
        });
        $with.addEventListener("error",function (oEvent) {
          if (OnError != null) OnError(oEvent.message);
        });
        $with.send();
      };
    };
    this.LoadBytes = function (aURL, aSync, OnLoaded, OnError) {
      var $Self = this;
      function doFetchFail(response) {
        var Result = undefined;
        Result = false;
        if (rtl.isObject(response) && rtl.isExt(response,Error)) {
          OnError("Error 999: " + response.message)}
         else OnError("Error 999: unknown error");
        return Result;
      };
      function doFetchOK(response) {
        var Result = undefined;
        Result = false;
        if (response.status !== 200) {
          if (OnError != null) OnError("Error " + pas.SysUtils.IntToStr(response.status) + ": " + response.statusText);
        } else response.blob().then(function (value) {
          var Result = undefined;
          value.arrayBuffer().then(function (arr) {
            var Result = undefined;
            OnLoaded(arr);
            return Result;
          }).catch(doFetchFail);
          return Result;
        });
        return Result;
      };
      function StringToArrayBuffer(str) {
        var Result = null;
        var i = 0;
        var l = 0;
        l = str.length;
        Result = new ArrayBuffer(l * 2);
        var $with = new Uint16Array(Result);
        for (var $l = 1, $end = l; $l <= $end; $l++) {
          i = $l;
          $with[i - 1] = str.charCodeAt(i - 1);
        };
        return Result;
      };
      if (aSync) {
        window.fetch(aURL).then(doFetchOK).catch(doFetchFail)}
       else {
        var $with = new XMLHttpRequest();
        $with.open("GET",aURL,false);
        $with.addEventListener("load",function (oEvent) {
          if ($with.status !== 200) {
            OnError("Error " + pas.SysUtils.IntToStr($with.status) + ": " + $with.statusText)}
           else OnLoaded(StringToArrayBuffer($with.responseText));
        });
        $with.addEventListener("error",function (oEvent) {
          if (OnError != null) OnError(oEvent.message);
        });
        $with.send();
      };
    };
  });
  $mod.$init = function () {
    pas.Classes.SetLoadHelperClass($mod.TBrowserLoadHelper);
  };
});
//# sourceMappingURL=Rtl.BrowserLoadHelper.js.map
