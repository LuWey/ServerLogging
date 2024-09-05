rtl.module("WEBLib.WebTools",["System","Classes","Web","JS","WEBLib.Controls","WEBLib.Graphics"],function () {
  "use strict";
  var $mod = this;
  this.CRLF = "\r\n";
  this.LNBR = "<BR>";
  this.cBodyTag = "body";
  this.cHTMLExt = ".html";
  this.TOperatingSystem = {"0": "osUnknown", osUnknown: 0, "1": "osWindows", osWindows: 1, "2": "osmacOS", osmacOS: 2, "3": "osLinux", osLinux: 3, "4": "osAndroid", osAndroid: 4, "5": "osiOS", osiOS: 5};
  this.$rtti.$Enum("TOperatingSystem",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.TOperatingSystem});
  this.DoubleToHTML = function (d) {
    var Result = "";
    Result = pas.SysUtils.Format$1("%g",pas.System.VarRecs(3,d),pas.SysUtils.TFormatSettings.Invariant());
    return Result;
  };
  this.MessageBeep = function (AType) {
    var snd = new Audio("data:audio/wav;base64,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"+
    "/8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kG"+
    "eFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZ"+
    "B4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZ"+
    "TGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRP"+
    "gUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCk"+
    "QjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk"+
    "4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb////////////////////////////////////////////////////////////////////////////////////////////"+
    "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"+
    "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"+
    "/////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
  };
  this.OutputDebugString = function (s) {
    console.log(s);
  };
  this.GetTickCount = function () {
    var Result = 0;
    var n = 0;
    var d = new Date();
    n = d.getTime();
    Result = n;
    return Result;
  };
  this.GetQueryParam = function (AName) {
    var Result = "";
    var res = "";
    $mod.HasQueryParam(AName,{get: function () {
        return res;
      }, set: function (v) {
        res = v;
      }},true);
    Result = res;
    return Result;
  };
  this.HasQueryParam = function (AName, AValue, CaseSensitive) {
    var Result = false;
    var found = false;
    var s = "";
    s = "";
    if (!CaseSensitive) AName = pas.SysUtils.UpperCase(AName);
    var query = window.location.search.substring(1);
        var res = "";
        var key = "";
        found = false;
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split('=');
    
          key = decodeURIComponent(pair[0]);
          if (CaseSensitive == false)
          {
            key = key.toUpperCase();
          }
    
          if (key == AName) {
              res = decodeURIComponent(pair[1]);
              found = true;
           }
        }
        s = res;
    AValue.set(s);
    Result = found;
    return Result;
  };
  this.EscapeHTML = function (AValue) {
    var Result = "";
    var s = "";
    s = AValue;
    function escapeHTML(AString) {
      return AString.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }
    s = escapeHTML(s);
    Result = s;
    return Result;
  };
  this.GetLocaleShortDateFormat = function (ALocale) {
    var Result = "";
    Result = pas.SysUtils.TFormatSettings.Create$1(ALocale).ShortDateFormat;
    return Result;
  };
  this.GetLocaleLongDayName = function (DayOfWeek, ALocale) {
    var Result = "";
    var res = "";
    var baseDate = new Date(2017, 0, 1); // Sunday
        baseDate.setDate(baseDate.getDate() + DayOfWeek - 1);
    
        var loc = "";
        if (ALocale == '') { loc = navigator.language; }
        else { loc = ALocale; }
    
        res = baseDate.toLocaleDateString(loc, { weekday: 'long' });
    Result = res;
    return Result;
  };
  this.GetLocaleShortDayName = function (DayOfWeek, ALocale) {
    var Result = "";
    var res = "";
    var baseDate = new Date(2017, 0, 1); // Sunday
        baseDate.setDate(baseDate.getDate() + DayOfWeek - 1);
    
        var loc = "";
        if (ALocale == '') { loc = navigator.language; }
        else { loc = ALocale; }
    
        res = baseDate.toLocaleDateString(loc, { weekday: 'short' });
    Result = res;
    return Result;
  };
  this.GetLocaleLongMonthName = function (Month, ALocale) {
    var Result = "";
    var res = "";
    var baseDate = new Date(2017, Month - 1, 1);
    
        var loc = "";
        if (ALocale == '') { loc = navigator.language; }
        else { loc = ALocale; }
    
        res = baseDate.toLocaleDateString(loc, { month: 'long' });
    Result = res;
    return Result;
  };
  this.GetLocaleShortMonthName = function (Month, ALocale) {
    var Result = "";
    var res = "";
    var baseDate = new Date(2017, Month - 1, 1);
    
        var loc = "";
        if (ALocale == '') { loc = navigator.language; }
        else { loc = ALocale; }
    
        res = baseDate.toLocaleDateString(loc, { month: 'short' });
    Result = res;
    return Result;
  };
  this.GetLocaleDecimalSeparator = function (ALocale) {
    var Result = "";
    var res = "";
    var n = 1.1;
        var loc = "";
        if (ALocale == '') { loc = navigator.language; }
        else { loc = ALocale; }
    
        n = n.toLocaleString(loc).substring(1, 2);
        res = n;
    Result = res;
    return Result;
  };
  this.GetLocaleThousandSeparator = function (ALocale) {
    var Result = "";
    var res = "";
    var n = 1000.1;
    var loc = "";
    if (ALocale == '') { loc = navigator.language; }
    else { loc = ALocale; }
    n = n.toLocaleString(loc).substring(1, 2);
    res = n;
    Result = res;
    return Result;
  };
  this.LocaleFormatCurrency = function (Value, ACurrency, ALocale) {
    var Result = "";
    var res = "";
    var loc = "";
    if (ALocale == '') { loc = navigator.language; }
    else { loc = ALocale; }
    var number = Value;
    res = number.toLocaleString(loc, { style: 'currency', currency: ACurrency });
    Result = res;
    return Result;
  };
  this.GetLocaleCurrency = function (ALocale) {
    var Result = "";
    var res = "";
    var curr =
          {"BD": "BDT", "BE": "EUR", "BF": "XOF", "BG": "BGN", "BA": "BAM", "BB": "BBD", "WF": "XPF",
           "BL": "EUR", "BM": "BMD", "BN": "BND", "BO": "BOB", "BH": "BHD", "BI": "BIF", "BJ": "XOF",
           "BT": "BTN", "JM": "JMD", "BV": "NOK", "BW": "BWP", "WS": "WST", "BQ": "USD", "BR": "BRL",
           "BS": "BSD", "JE": "GBP", "BY": "BYR", "BZ": "BZD", "RU": "RUB", "RW": "RWF", "RS": "RSD",
           "TL": "USD", "RE": "EUR", "TM": "TMT", "TJ": "TJS", "RO": "RON", "TK": "NZD", "GW": "XOF",
           "GU": "USD", "GT": "GTQ", "GS": "GBP", "GR": "EUR", "GQ": "XAF", "GP": "EUR", "JP": "JPY",
           "GY": "GYD", "GG": "GBP", "GF": "EUR", "GE": "GEL", "GD": "XCD", "GB": "GBP", "GA": "XAF",
           "SV": "USD", "GN": "GNF", "GM": "GMD", "GL": "DKK", "GI": "GIP", "GH": "GHS", "OM": "OMR",
           "TN": "TND", "JO": "JOD", "HR": "HRK", "HT": "HTG", "HU": "HUF", "HK": "HKD", "HN": "HNL",
           "HM": "AUD", "VE": "VEF", "PR": "USD", "PS": "ILS", "PW": "USD", "PT": "EUR", "SJ": "NOK",
           "PY": "PYG", "IQ": "IQD", "PA": "PAB", "PF": "XPF", "PG": "PGK", "PE": "PEN", "PK": "PKR",
           "PH": "PHP", "PN": "NZD", "PL": "PLN", "PM": "EUR", "ZM": "ZMK", "EH": "MAD", "EE": "EUR",
           "EG": "EGP", "ZA": "ZAR", "EC": "USD", "IT": "EUR", "VN": "VND", "SB": "SBD", "ET": "ETB",
           "SO": "SOS", "ZW": "ZWL", "SA": "SAR", "ES": "EUR", "ER": "ERN", "ME": "EUR", "MD": "MDL",
           "MG": "MGA", "MF": "EUR", "MA": "MAD", "MC": "EUR", "UZ": "UZS", "MM": "MMK", "ML": "XOF",
           "MO": "MOP", "MN": "MNT", "MH": "USD", "MK": "MKD", "MU": "MUR", "MT": "EUR", "MW": "MWK",
           "MV": "MVR", "MQ": "EUR", "MP": "USD", "MS": "XCD", "MR": "MRO", "IM": "GBP", "UG": "UGX",
           "TZ": "TZS", "MY": "MYR", "MX": "MXN", "IL": "ILS", "FR": "EUR", "IO": "USD", "SH": "SHP",
           "FI": "EUR", "FJ": "FJD", "FK": "FKP", "FM": "USD", "FO": "DKK", "NI": "NIO", "NL": "EUR",
           "NO": "NOK", "NA": "NAD", "VU": "VUV", "NC": "XPF", "NE": "XOF", "NF": "AUD", "NG": "NGN",
           "NZ": "NZD", "NP": "NPR", "NR": "AUD", "NU": "NZD", "CK": "NZD", "XK": "EUR", "CI": "XOF",
           "CH": "CHF", "CO": "COP", "CN": "CNY", "CM": "XAF", "CL": "CLP", "CC": "AUD", "CA": "CAD",
           "CG": "XAF", "CF": "XAF", "CD": "CDF", "CZ": "CZK", "CY": "EUR", "CX": "AUD", "CR": "CRC",
           "CW": "ANG", "CV": "CVE", "CU": "CUP", "SZ": "SZL", "SY": "SYP", "SX": "ANG", "KG": "KGS",
           "KE": "KES", "SS": "SSP", "SR": "SRD", "KI": "AUD", "KH": "KHR", "KN": "XCD", "KM": "KMF",
           "ST": "STD", "SK": "EUR", "KR": "KRW", "SI": "EUR", "KP": "KPW", "KW": "KWD", "SN": "XOF",
           "SM": "EUR", "SL": "SLL", "SC": "SCR", "KZ": "KZT", "KY": "KYD", "SG": "SGD", "SE": "SEK",
           "SD": "SDG", "DO": "DOP", "DM": "XCD", "DJ": "DJF", "DK": "DKK", "VG": "USD", "DE": "EUR",
           "YE": "YER", "DZ": "DZD", "US": "USD", "UY": "UYU", "YT": "EUR", "UM": "USD", "LB": "LBP",
           "LC": "XCD", "LA": "LAK", "TV": "AUD", "TW": "TWD", "TT": "TTD", "TR": "TRY", "LK": "LKR",
           "LI": "CHF", "LV": "EUR", "TO": "TOP", "LT": "LTL", "LU": "EUR", "LR": "LRD", "LS": "LSL",
           "TH": "THB", "TF": "EUR", "TG": "XOF", "TD": "XAF", "TC": "USD", "LY": "LYD", "VA": "EUR",
           "VC": "XCD", "AE": "AED", "AD": "EUR", "AG": "XCD", "AF": "AFN", "AI": "XCD", "VI": "USD",
           "IS": "ISK", "IR": "IRR", "AM": "AMD", "AL": "ALL", "AO": "AOA", "AQ": "", "AS": "USD",
           "AR": "ARS", "AU": "AUD", "AT": "EUR", "AW": "AWG", "IN": "INR", "AX": "EUR", "AZ": "AZN",
           "IE": "EUR", "ID": "IDR", "UA": "UAH", "QA": "QAR", "MZ": "MZN"}
    
        var loc = "";
        if (ALocale == '') { loc = navigator.language; }
        else { loc = ALocale; }
        loc = loc.substring(3,5);
        loc = loc.toUpperCase();
        res = curr[loc] || '';
    Result = res;
    return Result;
  };
  this.GetBrowserLocale = function () {
    var Result = "";
    var res = "";
    res = navigator.language;
    Result = res;
    return Result;
  };
  this.GetOperatingSystem = function () {
    var Result = 0;
    var ag = "";
    var res = false;
    Result = $mod.TOperatingSystem.osUnknown;
    ag = navigator.userAgent;
    if (pas.System.Pos("Win",ag) > 0) Result = $mod.TOperatingSystem.osWindows;
    if (pas.System.Pos("Mac",ag) > 0) Result = $mod.TOperatingSystem.osmacOS;
    if (pas.System.Pos("Linux",ag) > 0) Result = $mod.TOperatingSystem.osLinux;
    if (pas.System.Pos("Android",ag) > 0) Result = $mod.TOperatingSystem.osAndroid;
    if (pas.System.Pos("Linux",ag) > 0) Result = $mod.TOperatingSystem.osLinux;
    res = ag.match(/(iPod|iPhone|iPad)/) &&
    ag.match(/AppleWebKit/);
    if (res) Result = $mod.TOperatingSystem.osiOS;
    return Result;
  };
  this.ProcessAccelerator = function (AValue, Accelerator) {
    var Result = "";
    var i = 0;
    var l = 0;
    var res = "";
    l = AValue.length;
    Accelerator.set("");
    res = "";
    i = 1;
    while (i <= l) {
      if (AValue.charAt(i - 1) === "&") {
        if (((i + 1) <= l) && (AValue.charAt((i + 1) - 1) !== "&")) {
          res = res + "<u>" + AValue.charAt((i + 1) - 1) + "</u>";
          Accelerator.set(AValue.charAt((i + 1) - 1));
        } else if (((i + 1) <= l) && (AValue.charAt((i + 1) - 1) === "&")) res = res + "&";
        i += 2;
      } else {
        res = res + AValue.charAt(i - 1);
        i += 1;
      };
    };
    Result = res;
    return Result;
  };
  this.GetBase64Image = function (AImage, AWidth, AHeight) {
    var Result = "";
    var s = "";
    var m = null;
    s = "";
    m = AImage;
    function getBase64Image(img) {
      var canvas = document.createElement("canvas");
      if (AWidth == 0) {
        canvas.width = img.width; }
        else {
        canvas.width = AWidth; }
      if (AHeight == 0) {
      canvas.height = img.height; }
      else {
        canvas.height = AHeight; }
      var ctx = canvas.getContext("2d");
      if ((AWidth == 0) || (AHeight == 0)) {
         ctx.drawImage(img, 0, 0); }
      else {
         ctx.drawImage(img, 0, 0, AWidth, AHeight); }
      var dataURL = canvas.toDataURL("image/png");
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    s = getBase64Image(m);
    Result = s;
    return Result;
  };
  this.DebugBreak = function () {
    debugger;
  };
  this.HexImageDecode = function (s) {
    var Result = null;
    var i = 0;
    var j = 0;
    var l = 0;
    var res = null;
    var c1 = 0;
    var c2 = 0;
    var hdr = 0;
    l = rtl.trunc(s.length / 2);
    j = 0;
    c1 = s.charCodeAt(1 - 1) - 48;
    if (c1 >= 10) c1 = c1 - 7;
    c2 = s.charCodeAt(2 - 1) - 48;
    if (c2 >= 10) c2 = c2 - 7;
    hdr = 1 + (c2 + (c1 << 4));
    i = pas.System.Pos("4A5045474",s);
    if ((i > 1) && (i < 10)) hdr += 4;
    i = pas.System.Pos("4269746D6",s);
    if ((i > 1) && (i < 10)) hdr += 4;
    res = new Uint8Array(l - hdr);
    for (var $l = hdr + 1, $end = l; $l <= $end; $l++) {
      i = $l;
      c1 = s.charCodeAt((i * 2) - 1 - 1) - 48;
      if (c1 >= 10) c1 = c1 - 7;
      c2 = s.charCodeAt((i * 2) - 1) - 48;
      if (c2 >= 10) c2 = c2 - 7;
      c2 = c2 + (c1 << 4);
      res[j] = c2;
      j += 1;
    };
    Result = res;
    return Result;
  };
  this.HexImageEncodeFromBase64 = function (s) {
    var Result = "";
    var ja = null;
    s = s.replace(/^data:image\/\S+;base64,/, "");
    //ja = Uint8Array.from(atob(s), c => c.charCodeAt(0))
    ja = Uint8Array.from(atob(s), function(c) { return c.charCodeAt(0);} );
    Result = $mod.HexImageEncode(ja);
    return Result;
  };
  this.HexImageEncode = function (a) {
    var Result = "";
    var i = 0;
    var l = 0;
    var b = 0;
    var s = "";
    var ls = "";
    Result = "";
    l = a.length;
    if (l === 0) return Result;
    l = ((l & 0xFF) << 24) + ((l & 0xFF00) << 8) + ((l & 0xFF0000) >>> 8) + ((l & 0xFF000000) >>> 24);
    ls = "";
    if ((a[0] === 137) && (a[1] === 80)) {
      s = "TPngImage";
      b = s.length;
    };
    if ((a[0] === 0xFF) && (a[1] === 0xD8)) {
      s = "TJPEGImage";
      b = s.length;
      ls = pas.SysUtils.IntToHex(l,8);
    };
    if ((a[0] === 66) && (a[1] === 77)) {
      s = "TBitmap";
      b = s.length;
      ls = pas.SysUtils.IntToHex(l,8);
    };
    if ((a[0] === 71) && (a[1] === 73)) {
      s = "TGIFImage";
      b = s.length;
    };
    Result = pas.SysUtils.IntToHex(b,2);
    for (var $l = 1, $end = s.length; $l <= $end; $l++) {
      i = $l;
      b = s.charCodeAt(i - 1);
      Result = Result + pas.SysUtils.IntToHex(b,2);
    };
    Result = Result + ls;
    for (var $l1 = 0, $end1 = a.length - 1; $l1 <= $end1; $l1++) {
      i = $l1;
      b = a[i];
      Result = Result + pas.SysUtils.IntToHex(b,2);
    };
    return Result;
  };
  this.HexImageDecodeAsBase64 = function (s) {
    var Result = "";
    var ja = null;
    ja = $mod.HexImageDecode(s);
    s = btoa(new Uint8Array(ja).reduce(function (data, byte) {
    return data + String.fromCharCode(byte);
    }, ''));
    Result = s;
    return Result;
  };
  this.EmptyImage = function () {
    var Result = "";
    Result = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
    return Result;
  };
  this.NumAttribute = function (s) {
    var Result = "";
    var res = "";
    res = pas.SysUtils.TDoubleHelper.ToString$3.call({get: function () {
        return s;
      }, set: function (v) {
        s = v;
      }});
    Result = pas.SysUtils.StringReplace(res,",",".",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
    return Result;
  };
  this.DataURLToFile = function (AURL, FileName) {
    var Result = null;
    var afile = null;
    var arr = AURL.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    afile = new File([u8arr], FileName, {type:mime});
    Result = afile;
    return Result;
  };
  this.DownloadFile = function (AFile) {
    var a = null;
    a = document.createElement("a");
    a.href = window.URL.createObjectURL(AFile);
    a.download = AFile.name;
    a.click();
  };
  this.PickerDateToDate = function (s) {
    var Result = 0.0;
    var ye = "";
    var mo = "";
    var da = "";
    var yei = 0;
    var moi = 0;
    var dai = 0;
    var e = 0;
    Result = 0;
    ye = pas.System.Copy(s,1,4);
    mo = pas.System.Copy(s,6,2);
    da = pas.System.Copy(s,9,2);
    pas.System.val$5(ye,{get: function () {
        return yei;
      }, set: function (v) {
        yei = v;
      }},{get: function () {
        return e;
      }, set: function (v) {
        e = v;
      }});
    pas.System.val$5(mo,{get: function () {
        return moi;
      }, set: function (v) {
        moi = v;
      }},{get: function () {
        return e;
      }, set: function (v) {
        e = v;
      }});
    pas.System.val$5(da,{get: function () {
        return dai;
      }, set: function (v) {
        dai = v;
      }},{get: function () {
        return e;
      }, set: function (v) {
        e = v;
      }});
    if ((yei !== 0) && (moi !== 0) && (dai !== 0)) Result = pas.SysUtils.EncodeDate(yei,moi,dai);
    return Result;
  };
  this.PickerTimeToTime = function (s) {
    var Result = 0.0;
    var ho = "";
    var mi = "";
    var se = "";
    var hoi = 0;
    var mii = 0;
    var sei = 0;
    var e = 0;
    Result = 0;
    ho = pas.System.Copy(s,1,2);
    mi = pas.System.Copy(s,4,2);
    se = pas.System.Copy(s,7,2);
    pas.System.val$5(ho,{get: function () {
        return hoi;
      }, set: function (v) {
        hoi = v;
      }},{get: function () {
        return e;
      }, set: function (v) {
        e = v;
      }});
    pas.System.val$5(mi,{get: function () {
        return mii;
      }, set: function (v) {
        mii = v;
      }},{get: function () {
        return e;
      }, set: function (v) {
        e = v;
      }});
    pas.System.val$5(se,{get: function () {
        return sei;
      }, set: function (v) {
        sei = v;
      }},{get: function () {
        return e;
      }, set: function (v) {
        e = v;
      }});
    if ((hoi >= 0) && (mii >= 0) && (sei >= 0)) Result = pas.SysUtils.EncodeTime(hoi,mii,sei,0);
    return Result;
  };
  this.URLString = function (s) {
    var Result = "";
    var res = "";
    function linkify(inputText) {
        var replacedText, replacePattern1, replacePattern2, replacePattern3;
    
        //URLs starting with http://, https://, or ftp://
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
    
        //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
    
        //Change email addresses to mailto:: links.
        replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
        replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
    
        return replacedText;
        }
        res = linkify(s);
    Result = res;
    return Result;
  };
  this.IsURl = function (s) {
    var Result = false;
    var res = false;
    function CheckIsUrl(inputText) {
    if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(inputText)) {
        return true;
    }
    return false;
    }
    res = CheckIsUrl(s);
    Result = res;
    return Result;
  };
  this.EmojiString = function (s) {
    var Result = "";
    var ls = null;
    var i = 0;
    var v = "";
    var k = "";
    for (var $l = 1, $end = s.length; $l <= $end; $l++) {
      i = $l;
      if (s.charAt(i - 1) === "|") s = rtl.setCharAt(s,i - 1,"¦");
    };
    ls = pas.Classes.TStringList.$create("Create$1");
    ls.AddPair(":)","&#x1F600;");
    ls.AddPair(":D","&#x1F601;");
    ls.AddPair(";)","&#x1F609;");
    ls.AddPair(":O","&#x1F62E;");
    ls.AddPair(":*","&#x1F617;");
    ls.AddPair(":P","&#x1F61C;");
    ls.AddPair(":(","&#x1F641;");
    ls.AddPair(":¦","&#x1F610;");
    ls.AddPair(":X","&#x1F910;");
    ls.AddPair("¦;)","&#x1F60E;");
    ls.AddPair(":<","&#x1F621;");
    for (var $l1 = 0, $end1 = ls.GetCount() - 1; $l1 <= $end1; $l1++) {
      i = $l1;
      v = ls.GetName(i);
      k = ls.GetValue(v);
      s = pas.SysUtils.StringReplace(s,v,k,rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
    };
    ls = rtl.freeLoc(ls);
    Result = s;
    return Result;
  };
  this.HTMLToString = function (s) {
    var Result = "";
    s = pas.SysUtils.StringReplace(s,"<","&lt;",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
    Result = pas.SysUtils.StringReplace(s,">","&gt;",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
    return Result;
  };
  this.FileSizeFmt = function (Size) {
    var Result = "";
    if (Size < 1000) Result = pas.SysUtils.IntToStr(Size) + " bytes";
    if ((Size >= 1000) && (Size < 1000000)) Result = pas.SysUtils.Format("%.2f",pas.System.VarRecs(3,Size / 1000)) + " Kb";
    if ((Size >= 1000000) && (Size < 1000000000)) Result = pas.SysUtils.Format("%.2f",pas.System.VarRecs(3,Size / 1000000)) + " Mb";
    if (Size >= 1000000000) Result = pas.SysUtils.Format("%.2f",pas.System.VarRecs(3,Size / 1000000000)) + " Gb";
    return Result;
  };
  this.FileSizeFmtSpeed = function (Size) {
    var Result = "";
    if (Size < 1000) Result = pas.SysUtils.IntToStr(Size) + " bytes/sec";
    if ((Size >= 1000) && (Size < 1000000)) Result = pas.SysUtils.Format("%.2f",pas.System.VarRecs(3,Size / 1000)) + " Kb/sec";
    if ((Size >= 1000000) && (Size < 1000000000)) Result = pas.SysUtils.Format("%.2f",pas.System.VarRecs(3,Size / 1000000)) + " Mb/sec";
    if (Size >= 1000000000) Result = pas.SysUtils.Format("%.2f",pas.System.VarRecs(3,Size / 1000000000)) + " Gb/sec";
    return Result;
  };
  this.ElementVisible = function (el) {
    var Result = false;
    var p = null;
    Result = false;
    p = el;
    while (p != null) {
      if (pas.SysUtils.LowerCase(p.tagName) === $mod.cBodyTag) Result = true;
      p = p.parentElement;
    };
    if (!Result) return Result;
    while (el != null) {
      if (el.style.getPropertyValue("display") === "none") {
        Result = false;
        return Result;
      };
      p = el.parentElement;
      if (!rtl.isExt(p,HTMLElement)) return Result;
      el = p;
    };
    return Result;
  };
  this.GetMaterialGlyph = function (AGlyph, ASize, AColor, AType) {
    var Result = "";
    var s = "";
    var matclr = "";
    var matsize = "";
    s = "<i";
    s = s + ' class="' + pas["WEBLib.Controls"].GetMaterialClass(AType) + '"';
    matclr = "";
    if (AColor !== -1) matclr = "color:" + pas["WEBLib.Graphics"].ColorToHTML(AColor) + ";";
    matsize = "";
    if (ASize !== 0) matsize = "font-size:" + pas.SysUtils.IntToStr(ASize) + "px;";
    s = s + ' style="pointer-events:none;' + matclr + matsize + '"';
    Result = s + ">" + AGlyph + "</i>";
    return Result;
  };
},["SysUtils","WEBLib.Utils"]);
//# sourceMappingURL=WEBLib.WebTools.js.map
