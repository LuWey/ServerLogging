rtl.module("WEBLib.Graphics",["System","Classes","Types","Web","JS"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.WEBDEFAULTFONT = "Arial";
  this.SysDefault = 0x20000000;
  this.clNone = -1;
  this.clBlack = 0x0;
  this.clMaroon = 0x80;
  this.clGreen = 0x8000;
  this.clOlive = 0x8080;
  this.clNavy = 0x800000;
  this.clPurple = 0x800080;
  this.clTeal = 0x808000;
  this.clGray = 0x808080;
  this.clSilver = 0xC0C0C0;
  this.clRed = 0xFF;
  this.clLime = 0xFF00;
  this.clYellow = 0xFFFF;
  this.clBlue = 0xFF0000;
  this.clFuchsia = 0xFF00FF;
  this.clAqua = 0xFFFF00;
  this.clLtGray = 0xC1C1C1;
  this.clDkGray = 0x818181;
  this.clWhite = 0xFFFFFF;
  this.clMoneyGreen = 0xC0DCC0;
  this.clSkyBlue = 0xF0CAA6;
  this.clCream = 0xF0FBFF;
  this.clMedGray = 0xA0A0A0;
  this.clDefault = 536870912;
  this.clBtnFace = 0xF0F0F0;
  this.clWindowText = 0x10101;
  this.clWindow = 0xFEFEFE;
  this.clHighlight = 0xD77800;
  this.clHighlightText = 0x30303;
  this.clInfoText = 0x20202;
  this.clInfoBk = 0xE1FFFF;
  this.clActiveCaption = 0xD1B499;
  this.clInactiveCaption = 0xDBCDBF;
  this.clInactiveCaptionText = 0x0;
  this.clHotLight = 0xCC6600;
  this.clScrollBar = 0xC8C8C8;
  this.clBackground = 15790320;
  this.clMenu = 15790320;
  this.clWindowFrame = 0x646464;
  this.clMenuText = 0;
  this.clCaptionText = 16777215;
  this.clActiveBorder = 0xB4B4B4;
  this.clAppWorkSpace = 0xABABAB;
  this.clBtnShadow = 0xA0A0A0;
  this.clGrayText = 0x6D6D6D;
  this.clBtnText = 0;
  this.clBtnHighlight = 16777215;
  this.cl3DDkShadow = 0x696969;
  this.cl3DLight = 0xE3E3E3;
  this.clMenuHighlight = 0xD77800;
  this.clMenuBar = 0xF0F0F0;
  this.clWebAliceblue = 0xFFF8F0;
  this.clWebAntiquewhite = 0xD7EBFA;
  this.clWebAqua = 0xFFFF00;
  this.clWebAquamarine = 0xD4FF7F;
  this.clWebAzure = 0xFFFFF0;
  this.clWebBeige = 0xDCF5F5;
  this.clWebBisque = 0xC4E4FF;
  this.clWebBlack = 0x0;
  this.clWebBlanchedalmond = 0xCDEBFF;
  this.clWebBlue = 0xFF0000;
  this.clWebBlueviolet = 0xE22B8A;
  this.clWebBrown = 0x2A2AA5;
  this.clWebBurlywood = 0x87B8DE;
  this.clWebCadetblue = 0xA09E5F;
  this.clWebChartreuse = 0xFF7F;
  this.clWebChocolate = 0x1E69D2;
  this.clWebCoral = 0x507FFF;
  this.clWebCornflowerblue = 0xED9564;
  this.clWebCornsilk = 0xDCF8FF;
  this.clWebCrimson = 0x3C14DC;
  this.clWebCyan = 0xFFFF00;
  this.clWebDarkblue = 0x8B0000;
  this.clWebDarkcyan = 0x8B8B00;
  this.clWebDarkgoldenrod = 0xB86B8;
  this.clWebDarkgray = 0xA9A9A9;
  this.clWebDarkgreen = 0x6400;
  this.clWebDarkgrey = 0xA9A9A9;
  this.clWebDarkkhaki = 0x6BB7BD;
  this.clWebDarkmagenta = 0x8B008B;
  this.clWebDarkolivegreen = 0x2F6B55;
  this.clWebDarkorange = 0x8CFF;
  this.clWebDarkorchid = 0xCC3299;
  this.clWebDarkred = 0x8B;
  this.clWebDarksalmon = 0x7A96E9;
  this.clWebDarkseagreen = 0x8FBC8F;
  this.clWebDarkslateblue = 0x8B3D48;
  this.clWebDarkslategray = 0x4F4F2F;
  this.clWebDarkslategrey = 0x4F4F2F;
  this.clWebDarkturquoise = 0xD1CE00;
  this.clWebDarkviolet = 0xD30094;
  this.clWebDeeppink = 0x9314FF;
  this.clWebDeepskyblue = 0xFFBF00;
  this.clWebDimgray = 0x696969;
  this.clWebDimgrey = 0x696969;
  this.clWebDodgerblue = 0xFF901E;
  this.clWebFirebrick = 0x2222B2;
  this.clWebFloralwhite = 0xF0FAFF;
  this.clWebForestgreen = 0x228B22;
  this.clWebFuchsia = 0xFF00FF;
  this.clWebGainsboro = 0xDCDCDC;
  this.clWebGhostwhite = 0xFFF8F8;
  this.clWebGold = 0xD7FF;
  this.clWebGoldenrod = 0x20A5DA;
  this.clWebGray = 0x808080;
  this.clWebGreen = 0x8000;
  this.clWebGreenyellow = 0x2FFFAD;
  this.clWebGrey = 0x808080;
  this.clWebHoneydew = 0xF0FFF0;
  this.clWebHotpink = 0xB469FF;
  this.clWebIndianred = 0x5C5CCD;
  this.clWebIndigo = 0x82004B;
  this.clWebIvory = 0xF0FFFF;
  this.clWebKhaki = 0x8CE6F0;
  this.clWebLavender = 0xFAE6E6;
  this.clWebLavenderblush = 0xF5F0FF;
  this.clWebLawngreen = 0xFC7C;
  this.clWebLemonchiffon = 0xCDFAFF;
  this.clWebLightblue = 0xE6D8AD;
  this.clWebLightcoral = 0x8080F0;
  this.clWebLightcyan = 0xFFFFE0;
  this.clWebLightgoldenrodyellow = 0xD2FAFA;
  this.clWebLightgray = 0xD3D3D3;
  this.clWebLightgreen = 0x90EE90;
  this.clWebLightgrey = 0xD3D3D3;
  this.clWebLightpink = 0xC1B6FF;
  this.clWebLightsalmon = 0x7AA0FF;
  this.clWebLightseagreen = 0xAAB220;
  this.clWebLightskyblue = 0xFACE87;
  this.clWebLightslategray = 0x998877;
  this.clWebLightslategrey = 0x998877;
  this.clWebLightsteelblue = 0xDEC4B0;
  this.clWebLightyellow = 0xE0FFFF;
  this.clWebLtGray = 0xC0C0C0;
  this.clWebMedGray = 0xA4A0A0;
  this.clWebDkGray = 0x808080;
  this.clWebMoneyGreen = 0xC0DCC0;
  this.clWebLegacySkyBlue = 0xF0CAA6;
  this.clWebCream = 0xF0FBFF;
  this.clWebLime = 0xFF00;
  this.clWebLimegreen = 0x32CD32;
  this.clWebLinen = 0xE6F0FA;
  this.clWebMagenta = 0xFF00FF;
  this.clWebMaroon = 0x80;
  this.clWebMediumaquamarine = 0xAACD66;
  this.clWebMediumblue = 0xCD0000;
  this.clWebMediumorchid = 0xD355BA;
  this.clWebMediumpurple = 0xDB7093;
  this.clWebMediumseagreen = 0x71B33C;
  this.clWebMediumslateblue = 0xEE687B;
  this.clWebMediumspringgreen = 0x9AFA00;
  this.clWebMediumturquoise = 0xCCD148;
  this.clWebMediumvioletred = 0x8515C7;
  this.clWebMidnightblue = 0x701919;
  this.clWebMintcream = 0xFAFFF5;
  this.clWebMistyrose = 0xE1E4FF;
  this.clWebMoccasin = 0xB5E4FF;
  this.clWebNavajowhite = 0xADDEFF;
  this.clWebNavy = 0x800000;
  this.clWebOldlace = 0xE6F5FD;
  this.clWebOlive = 0x8080;
  this.clWebOlivedrab = 0x238E6B;
  this.clWebOrange = 0xA5FF;
  this.clWebOrangered = 0x45FF;
  this.clWebOrchid = 0xD670DA;
  this.clWebPalegoldenrod = 0xAAE8EE;
  this.clWebPalegreen = 0x98FB98;
  this.clWebPaleturquoise = 0xEEEEAF;
  this.clWebPalevioletred = 0x9370DB;
  this.clWebPapayawhip = 0xD5EFFF;
  this.clWebPeachpuff = 0xB9DAFF;
  this.clWebPeru = 0x3F85CD;
  this.clWebPink = 0xCBC0FF;
  this.clWebPlum = 0xDDA0DD;
  this.clWebPowderblue = 0xE6E0B0;
  this.clWebPurple = 0x800080;
  this.clWebRed = 0xFF;
  this.clWebRosybrown = 0x8F8FBC;
  this.clWebRoyalblue = 0xE16941;
  this.clWebSaddlebrown = 0x13458B;
  this.clWebSalmon = 0x7280FA;
  this.clWebSandybrown = 0x60A4F4;
  this.clWebSeagreen = 0x578B2E;
  this.clWebSeashell = 0xEEF5FF;
  this.clWebSienna = 0x2D52A0;
  this.clWebSilver = 0xC0C0C0;
  this.clWebSkyblue = 0xEBCE87;
  this.clWebSlateblue = 0xCD5A6A;
  this.clWebSlategray = 0x908070;
  this.clWebSlategrey = 0x908070;
  this.clWebSnow = 0xFAFAFF;
  this.clWebSpringgreen = 0x7FFF00;
  this.clWebSteelblue = 0xB48246;
  this.clWebTan = 0x8CB4D2;
  this.clWebTeal = 0x808000;
  this.clWebThistle = 0xD8BFD8;
  this.clWebTomato = 0x4763FF;
  this.clWebTurquoise = 0xD0E040;
  this.clWebViolet = 0xEE82EE;
  this.clWebWheat = 0xB3DEF5;
  this.clWebWhite = 0xFFFFFF;
  this.clWebWhitesmoke = 0xF5F5F5;
  this.clWebYellow = 0xFFFF;
  this.clWebYellowgreen = 0x32CD9A;
  this.clAliceblue = 0xFFF8F0;
  this.clAntiquewhite = 0xD7EBFA;
  this.clAquamarine = 0xD4FF7F;
  this.clAzure = 0xFFFFF0;
  this.clBeige = 0xDCF5F5;
  this.clBisque = 0xC4E4FF;
  this.clBlanchedalmond = 0xCDEBFF;
  this.clBlueviolet = 0xE22B8A;
  this.clBrown = 0x2A2AA5;
  this.clBurlywood = 0x87B8DE;
  this.clCadetblue = 0xA09E5F;
  this.clChartreuse = 0xFF7F;
  this.clChocolate = 0x1E69D2;
  this.clCoral = 0x507FFF;
  this.clCornflowerblue = 0xED9564;
  this.clCornsilk = 0xDCF8FF;
  this.clCrimson = 0x3C14DC;
  this.clCyan = 0xFFFF00;
  this.clDarkblue = 0x8B0000;
  this.clDarkcyan = 0x8B8B00;
  this.clDarkgoldenrod = 0xB86B8;
  this.clDarkgray = 0xA9A9A9;
  this.clDarkgreen = 0x6400;
  this.clDarkgrey = 0xA9A9A9;
  this.clDarkkhaki = 0x6BB7BD;
  this.clDarkmagenta = 0x8B008B;
  this.clDarkolivegreen = 0x2F6B55;
  this.clDarkorange = 0x8CFF;
  this.clDarkorchid = 0xCC3299;
  this.clDarkred = 0x8B;
  this.clDarksalmon = 0x7A96E9;
  this.clDarkseagreen = 0x8FBC8F;
  this.clDarkslateblue = 0x8B3D48;
  this.clDarkslategray = 0x4F4F2F;
  this.clDarkslategrey = 0x4F4F2F;
  this.clDarkturquoise = 0xD1CE00;
  this.clDarkviolet = 0xD30094;
  this.clDeeppink = 0x9314FF;
  this.clDeepskyblue = 0xFFBF00;
  this.clDimgray = 0x696969;
  this.clDimgrey = 0x696969;
  this.clDodgerblue = 0xFF901E;
  this.clFirebrick = 0x2222B2;
  this.clFloralwhite = 0xF0FAFF;
  this.clForestgreen = 0x228B22;
  this.clGainsboro = 0xDCDCDC;
  this.clGhostwhite = 0xFFF8F8;
  this.clGold = 0xD7FF;
  this.clGoldenrod = 0x20A5DA;
  this.clGreenyellow = 0x2FFFAD;
  this.clGrey = 0x808080;
  this.clHoneydew = 0xF0FFF0;
  this.clHotpink = 0xB469FF;
  this.clIndianred = 0x5C5CCD;
  this.clIndigo = 0x82004B;
  this.clIvory = 0xF0FFFF;
  this.clKhaki = 0x8CE6F0;
  this.clLavender = 0xFAE6E6;
  this.clLavenderblush = 0xF5F0FF;
  this.clLawngreen = 0xFC7C;
  this.clLemonchiffon = 0xCDFAFF;
  this.clLightblue = 0xE6D8AD;
  this.clLightcoral = 0x8080F0;
  this.clLightcyan = 0xFFFFE0;
  this.clLightgoldenrodyellow = 0xD2FAFA;
  this.clLightgray = 0xD3D3D3;
  this.clLightgreen = 0x90EE90;
  this.clLightgrey = 0xD3D3D3;
  this.clLightpink = 0xC1B6FF;
  this.clLightsalmon = 0x7AA0FF;
  this.clLightseagreen = 0xAAB220;
  this.clLightskyblue = 0xFACE87;
  this.clLightslategray = 0x998877;
  this.clLightslategrey = 0x998877;
  this.clLightsteelblue = 0xDEC4B0;
  this.clLightyellow = 0xE0FFFF;
  this.clLegacySkyBlue = 0xF0CAA6;
  this.clLimegreen = 0x32CD32;
  this.clLinen = 0xE6F0FA;
  this.clMagenta = 0xFF00FF;
  this.clMediumaquamarine = 0xAACD66;
  this.clMediumblue = 0xCD0000;
  this.clMediumorchid = 0xD355BA;
  this.clMediumpurple = 0xDB7093;
  this.clMediumseagreen = 0x71B33C;
  this.clMediumslateblue = 0xEE687B;
  this.clMediumspringgreen = 0x9AFA00;
  this.clMediumturquoise = 0xCCD148;
  this.clMediumvioletred = 0x8515C7;
  this.clMidnightblue = 0x701919;
  this.clMintcream = 0xFAFFF5;
  this.clMistyrose = 0xE1E4FF;
  this.clMoccasin = 0xB5E4FF;
  this.clNavajowhite = 0xADDEFF;
  this.clOldlace = 0xE6F5FD;
  this.clOlivedrab = 0x238E6B;
  this.clOrange = 0xA5FF;
  this.clOrangered = 0x45FF;
  this.clOrchid = 0xD670DA;
  this.clPalegoldenrod = 0xAAE8EE;
  this.clPalegreen = 0x98FB98;
  this.clPaleturquoise = 0xEEEEAF;
  this.clPalevioletred = 0x9370DB;
  this.clPapayawhip = 0xD5EFFF;
  this.clPeachpuff = 0xB9DAFF;
  this.clPeru = 0x3F85CD;
  this.clPink = 0xCBC0FF;
  this.clPlum = 0xDDA0DD;
  this.clPowderblue = 0xE6E0B0;
  this.clRosybrown = 0x8F8FBC;
  this.clRoyalblue = 0xE16941;
  this.clSaddlebrown = 0x13458B;
  this.clSalmon = 0x7280FA;
  this.clSandybrown = 0x60A4F4;
  this.clSeagreen = 0x578B2E;
  this.clSeashell = 0xEEF5FF;
  this.clSienna = 0x2D52A0;
  this.clSlateblue = 0xCD5A6A;
  this.clSlategray = 0x908070;
  this.clSlategrey = 0x908070;
  this.clSnow = 0xFAFAFF;
  this.clSpringgreen = 0x7FFF00;
  this.clSteelblue = 0xB48246;
  this.clTan = 0x8CB4D2;
  this.clThistle = 0xD8BFD8;
  this.clTomato = 0x4763FF;
  this.clTurquoise = 0xD0E040;
  this.clViolet = 0xEE82EE;
  this.clWheat = 0xB3DEF5;
  this.clWhitesmoke = 0xF5F5F5;
  this.clYellowgreen = 0x32CD9A;
  this.clInactiveBorder = 0xFCF7F4;
  this.ANSI_CHARSET = 0;
  this.DEFAULT_CHARSET = 1;
  this.SYMBOL_CHARSET = 2;
  this.MAC_CHARSET = 77;
  this.SHIFTJIS_CHARSET = 128;
  this.HANGEUL_CHARSET = 129;
  this.JOHAB_CHARSET = 130;
  this.GB2312_CHARSET = 134;
  this.CHINESEBIG5_CHARSET = 136;
  this.GREEK_CHARSET = 161;
  this.TURKISH_CHARSET = 162;
  this.HEBREW_CHARSET = 177;
  this.ARABIC_CHARSET = 178;
  this.BALTIC_CHARSET = 186;
  this.RUSSIAN_CHARSET = 204;
  this.THAI_CHARSET = 222;
  this.EASTEUROPE_CHARSET = 238;
  this.OEM_CHARSET = 255;
  this.$rtti.$inherited("TColor",rtl.nativeint,{});
  this.TVerticalAlignment = {"0": "taAlignTop", taAlignTop: 0, "1": "taAlignBottom", taAlignBottom: 1, "2": "taVerticalCenter", taVerticalCenter: 2};
  this.$rtti.$Enum("TVerticalAlignment",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TVerticalAlignment});
  this.TPenStyle = {"0": "psSolid", psSolid: 0, "1": "psDash", psDash: 1, "2": "psDot", psDot: 2, "3": "psDashDot", psDashDot: 3, "4": "psDashDotDot", psDashDotDot: 4, "5": "psClear", psClear: 5, "6": "psInsideFrame", psInsideFrame: 6, "7": "psUserStyle", psUserStyle: 7, "8": "psAlternate", psAlternate: 8};
  this.$rtti.$Enum("TPenStyle",{minvalue: 0, maxvalue: 8, ordtype: 1, enumtype: this.TPenStyle});
  this.TPenMode = {"0": "pmBlack", pmBlack: 0, "1": "pmWhite", pmWhite: 1, "2": "pmNop", pmNop: 2, "3": "pmNot", pmNot: 3, "4": "pmCopy", pmCopy: 4, "5": "pmNotCopy", pmNotCopy: 5, "6": "pmMergePenNot", pmMergePenNot: 6, "7": "pmMaskPenNot", pmMaskPenNot: 7, "8": "pmMergeNotPen", pmMergeNotPen: 8, "9": "pmMaskNotPen", pmMaskNotPen: 9, "10": "pmMerge", pmMerge: 10, "11": "pmNotMerge", pmNotMerge: 11, "12": "pmMask", pmMask: 12, "13": "pmNotMask", pmNotMask: 13, "14": "pmXor", pmXor: 14, "15": "pmNotXor", pmNotXor: 15};
  this.$rtti.$Enum("TPenMode",{minvalue: 0, maxvalue: 15, ordtype: 1, enumtype: this.TPenMode});
  this.TBrushStyle = {"0": "bsSolid", bsSolid: 0, "1": "bsClear", bsClear: 1, "2": "bsHorizontal", bsHorizontal: 2, "3": "bsVertical", bsVertical: 3, "4": "bsFDiagonal", bsFDiagonal: 4, "5": "bsBDiagonal", bsBDiagonal: 5, "6": "bsCross", bsCross: 6, "7": "bsDiagCross", bsDiagCross: 7};
  this.$rtti.$Enum("TBrushStyle",{minvalue: 0, maxvalue: 7, ordtype: 1, enumtype: this.TBrushStyle});
  this.TBrushGradient = {"0": "bgNone", bgNone: 0, "1": "bgLinearVert", bgLinearVert: 1, "2": "bgLinearHorz", bgLinearHorz: 2, "3": "bgRadial", bgRadial: 3};
  this.$rtti.$Enum("TBrushGradient",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TBrushGradient});
  this.TFontStyle = {"0": "fsBold", fsBold: 0, "1": "fsItalic", fsItalic: 1, "2": "fsStrikeOut", fsStrikeOut: 2, "3": "fsUnderline", fsUnderline: 3};
  this.$rtti.$Enum("TFontStyle",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TFontStyle});
  this.$rtti.$Set("TFontStyles",{comptype: this.$rtti["TFontStyle"]});
  this.$rtti.$Int("TFontCharset",{minvalue: 0, maxvalue: 255, ordtype: 3});
  this.TTextFormats = {"0": "tfBottom", tfBottom: 0, "1": "tfCalcRect", tfCalcRect: 1, "2": "tfCenter", tfCenter: 2, "3": "tfEditControl", tfEditControl: 3, "4": "tfEndEllipsis", tfEndEllipsis: 4, "5": "tfPathEllipsis", tfPathEllipsis: 5, "6": "tfExpandTabs", tfExpandTabs: 6, "7": "tfExternalLeading", tfExternalLeading: 7, "8": "tfLeft", tfLeft: 8, "9": "tfModifyString", tfModifyString: 9, "10": "tfNoClip", tfNoClip: 10, "11": "tfNoPrefix", tfNoPrefix: 11, "12": "tfRight", tfRight: 12, "13": "tfRtlReading", tfRtlReading: 13, "14": "tfSingleLine", tfSingleLine: 14, "15": "tfTop", tfTop: 15, "16": "tfVerticalCenter", tfVerticalCenter: 16, "17": "tfWordBreak", tfWordBreak: 17, "18": "tfHidePrefix", tfHidePrefix: 18, "19": "tfNoFullWidthCharBreak", tfNoFullWidthCharBreak: 19, "20": "tfPrefixOnly", tfPrefixOnly: 20, "21": "tfTabStop", tfTabStop: 21, "22": "tfWordEllipsis", tfWordEllipsis: 22, "23": "tfComposited", tfComposited: 23};
  this.$rtti.$Enum("TTextFormats",{minvalue: 0, maxvalue: 23, ordtype: 1, enumtype: this.TTextFormats});
  this.$rtti.$Set("TTextFormat",{comptype: this.$rtti["TTextFormats"]});
  this.$rtti.$inherited("TBinaryString",rtl.string,{});
  rtl.recNewT(this,"TCanvasPointF",function () {
    this.X = 0.0;
    this.Y = 0.0;
    this.$eq = function (b) {
      return (this.X === b.X) && (this.Y === b.Y);
    };
    this.$assign = function (s) {
      this.X = s.X;
      this.Y = s.Y;
      return this;
    };
    var $r = $mod.$rtti.$Record("TCanvasPointF",{});
    $r.addField("X",rtl.double);
    $r.addField("Y",rtl.double);
  });
  rtl.recNewT(this,"TCanvasRectF",function () {
    this.Left = 0.0;
    this.Top = 0.0;
    this.Right = 0.0;
    this.Bottom = 0.0;
    this.$eq = function (b) {
      return (this.Left === b.Left) && (this.Top === b.Top) && (this.Right === b.Right) && (this.Bottom === b.Bottom);
    };
    this.$assign = function (s) {
      this.Left = s.Left;
      this.Top = s.Top;
      this.Right = s.Right;
      this.Bottom = s.Bottom;
      return this;
    };
    var $r = $mod.$rtti.$Record("TCanvasRectF",{});
    $r.addField("Left",rtl.double);
    $r.addField("Top",rtl.double);
    $r.addField("Right",rtl.double);
    $r.addField("Bottom",rtl.double);
  });
  rtl.recNewT(this,"TCanvasSizeF",function () {
    this.cx = 0.0;
    this.cy = 0.0;
    this.$eq = function (b) {
      return (this.cx === b.cx) && (this.cy === b.cy);
    };
    this.$assign = function (s) {
      this.cx = s.cx;
      this.cy = s.cy;
      return this;
    };
    var $r = $mod.$rtti.$Record("TCanvasSizeF",{});
    $r.addField("cx",rtl.double);
    $r.addField("cy",rtl.double);
  });
  rtl.createClass(this,"TPen",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FWidth = 0;
      this.FColor = 0;
      this.FStyle = 0;
      this.FMode = 0;
    };
    this.SetColor = function (Value) {
      this.FColor = Value;
    };
    this.Create$1 = function () {
      this.FColor = 0;
      this.FWidth = 1;
      this.FStyle = $mod.TPenStyle.psSolid;
      this.FMode = $mod.TPenMode.pmCopy;
      return this;
    };
    this.Assign = function (Source) {
      if ($mod.TPen.isPrototypeOf(Source)) {
        this.FColor = rtl.as(Source,$mod.TPen).FColor;
        this.FStyle = rtl.as(Source,$mod.TPen).FStyle;
        this.FWidth = rtl.as(Source,$mod.TPen).FWidth;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Color",2,$mod.$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("Mode",0,$mod.$rtti["TPenMode"],"FMode","FMode",{Default: $mod.TPenMode.pmCopy});
    $r.addProperty("Width",0,rtl.longint,"FWidth","FWidth",{Default: 1});
    $r.addProperty("Style",0,$mod.$rtti["TPenStyle"],"FStyle","FStyle",{Default: $mod.TPenStyle.psSolid});
  });
  rtl.createClass(this,"TGradientColor",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FColor = 0;
      this.FStop = 0.0;
    };
    this.Assign = function (Source) {
      if ($mod.TGradientColor.isPrototypeOf(Source)) {
        this.FColor = rtl.as(Source,$mod.TGradientColor).FColor;
        this.FStop = rtl.as(Source,$mod.TGradientColor).FStop;
      };
    };
    this.Create$1 = function () {
      this.FColor = -1;
      this.FStop = 0;
      return this;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Stop",0,rtl.double,"FStop","FStop");
    $r.addProperty("Color",0,$mod.$rtti["TColor"],"FColor","FColor",{Default: -1});
  });
  rtl.createClass(this,"TBrush",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FColor = 0;
      this.FStyle = 0;
      this.FGradientColors = null;
      this.FGradient = 0;
    };
    this.$final = function () {
      this.FGradientColors = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.Create$1 = function () {
      this.FColor = 16777215;
      this.FStyle = $mod.TBrushStyle.bsSolid;
      this.FGradient = $mod.TBrushGradient.bgNone;
      this.FGradientColors = pas.Classes.TList.$create("Create$1");
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FGradientColors");
      pas.System.TObject.Destroy.call(this);
    };
    this.Assign = function (Source) {
      if ($mod.TBrush.isPrototypeOf(Source)) {
        this.FColor = rtl.as(Source,$mod.TBrush).FColor;
        this.FStyle = rtl.as(Source,$mod.TBrush).FStyle;
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    this.AddGradientColor = function (AColor, AStop) {
      var gr = null;
      gr = $mod.TGradientColor.$create("Create$1");
      gr.FColor = AColor;
      gr.FStop = AStop;
      this.FGradientColors.Add(gr);
    };
    this.GetGradientColor = function (AIndex, AColor, AStop) {
      if (AIndex < this.FGradientColors.GetCount()) {
        AColor.set(rtl.getObject(this.FGradientColors.Get(AIndex)).FColor);
        AStop.set(rtl.getObject(this.FGradientColors.Get(AIndex)).FStop);
      } else throw pas.SysUtils.Exception.$create("Create$1",["Invalid gradient color index"]);
    };
    this.GradientCount = function () {
      var Result = 0;
      Result = this.FGradientColors.GetCount();
      return Result;
    };
    this.ClearGradient = function () {
      var i = 0;
      var gr = null;
      for (var $l = this.FGradientColors.GetCount() - 1; $l >= 0; $l--) {
        i = $l;
        gr = rtl.getObject(this.FGradientColors.Get(i));
        gr = rtl.freeLoc(gr);
        this.FGradientColors.Delete(i);
      };
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Gradient",0,$mod.$rtti["TBrushGradient"],"FGradient","FGradient");
    $r.addProperty("Color",0,$mod.$rtti["TColor"],"FColor","FColor");
    $r.addProperty("Style",0,$mod.$rtti["TBrushStyle"],"FStyle","FStyle");
  });
  rtl.createClass(this,"TFont",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FName = "";
      this.FSize = 0;
      this.FColor = 0;
      this.FStyle = {};
      this.FOnChange = null;
      this.FHeight = 0;
      this.FCharset = 0;
      this.FOrientation = 0;
    };
    this.$final = function () {
      this.FStyle = undefined;
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetHeight = function (Value) {
      var d = 0.0;
      d = (-Value * 72) / 96;
      this.FSize = Math.round(d);
      if (this.FHeight !== Value) {
        this.FHeight = Value;
        this.DoChange();
      };
    };
    this.SetName = function (AName) {
      if (this.FName !== AName) {
        this.FName = AName;
        this.DoChange();
      };
    };
    this.SetSize = function (ASize) {
      if (this.FSize !== ASize) {
        this.FSize = ASize;
        this.DoChange();
      };
    };
    this.SetColor = function (AColor) {
      if (this.FColor !== AColor) {
        this.FColor = AColor;
        this.DoChange();
      };
    };
    this.SetStyle = function (AStyle) {
      if (rtl.neSet(this.FStyle,AStyle)) {
        this.FStyle = rtl.refSet(AStyle);
        this.DoChange();
      };
    };
    this.DoChange = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.Assign = function (Source) {
      if ($mod.TFont.isPrototypeOf(Source)) {
        this.FName = rtl.as(Source,$mod.TFont).FName;
        this.FColor = rtl.as(Source,$mod.TFont).FColor;
        this.FSize = rtl.as(Source,$mod.TFont).FSize;
        this.FStyle = rtl.refSet(rtl.as(Source,$mod.TFont).FStyle);
        this.DoChange();
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FName = $mod.WEBDEFAULTFONT;
      this.FSize = 8;
      this.FHeight = -11;
      this.FStyle = {};
      this.FColor = 0;
      return this;
    };
    this.ToString = function () {
      var Result = "";
      var s = "";
      s = "";
      if (($mod.TFontStyle.fsBold in this.FStyle) && ($mod.TFontStyle.fsItalic in this.FStyle)) {
        s = s + "bold italic"}
       else if ($mod.TFontStyle.fsBold in this.FStyle) {
        s = s + "bold"}
       else if ($mod.TFontStyle.fsItalic in this.FStyle) s = s + "italic";
      if (this.FSize !== 0) {
        Result = s + " " + $mod.FontSizeToHTML($mod.FontSizeToPx(this.FSize)) + " " + this.FName}
       else Result = s + " " + $mod.FontSizeToHTML($mod.FontSizeToPx(12)) + " " + this.FName;
      return Result;
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[]);
    $r.addProperty("Charset",0,$mod.$rtti["TFontCharset"],"FCharset","FCharset");
    $r.addProperty("Name",2,rtl.string,"FName","SetName");
    $r.addProperty("Height",2,rtl.longint,"FHeight","SetHeight");
    $r.addProperty("Style",2,$mod.$rtti["TFontStyles"],"FStyle","SetStyle");
    $r.addProperty("Color",2,$mod.$rtti["TColor"],"FColor","SetColor");
    $r.addProperty("Size",2,rtl.longint,"FSize","SetSize");
  });
  this.TImageType = {"0": "itBase64", itBase64: 0, "1": "itBMP", itBMP: 1, "2": "itPNG", itPNG: 2, "3": "itJPEG", itJPEG: 3, "4": "itGIF", itGIF: 4, "5": "itSVG", itSVG: 5};
  this.$rtti.$Enum("TImageType",{minvalue: 0, maxvalue: 5, ordtype: 1, enumtype: this.TImageType});
  this.$rtti.$Class("TCanvas");
  this.$rtti.$Class("TBitmap");
  this.$rtti.$RefToProcVar("TBitmapLoadedProc",{procsig: rtl.newTIProcSig([])});
  rtl.createClass(this,"TGraphic",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FAddToQueue = false;
      this.FCanvasElement = null;
      this.FEmpty = false;
      this.FData = "";
      this.FDataBin = "";
      this.FCanvas = null;
      this.FOnChange = null;
      this.FImage = null;
      this.FBitmap = null;
      this.FURL = "";
      this.FLoaded = null;
      this.FUsedCanvas = false;
    };
    this.$final = function () {
      this.FCanvasElement = undefined;
      this.FCanvas = undefined;
      this.FOnChange = undefined;
      this.FImage = undefined;
      this.FBitmap = undefined;
      this.FLoaded = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetHeight = function (Value) {
      this.FImage.height = Value;
      this.RecreateCanvas();
      this.DoChange();
    };
    this.SetWidth = function (Value) {
      this.FImage.width = Value;
      this.RecreateCanvas();
      this.DoChange();
    };
    this.GetCanvas = function () {
      var Result = null;
      if (!(this.FCanvas != null)) this.RecreateCanvas();
      Result = this.FCanvas;
      this.FUsedCanvas = true;
      return Result;
    };
    this.GetData = function () {
      var Result = "";
      Result = this.FDataBin;
      return Result;
    };
    this.SetData = function (Value) {
      var hx = "";
      if (this.FDataBin !== Value) {
        this.FDataBin = Value;
        hx = pas["WEBLib.WebTools"].HexImageDecodeAsBase64(this.FDataBin);
        if (pas.System.Pos("PHN2ZyB",hx) > 0) {
          this.LoadFromResource("data:image/svg+xml;base64," + hx)}
         else this.LoadFromResource("data:image/png;base64," + hx);
      };
    };
    this.DoChange = function () {
      var i = 0;
      this.FEmpty = (this.GetWidth() === 0) && (this.GetHeight() === 0);
      if (!this.FEmpty && (this.FData !== "") && !$impl.FCache.Exists(this.FData)) {
        $impl.FCache.Add$1($impl.TGraphicCache.$create("Create$1",[this.FImage,this.FData]));
        i = $impl.FQueue.IndexOf(this.FData);
        if ((i >= 0) && (i <= ($impl.FQueue.GetCount() - 1))) $impl.FQueue.Delete(i);
        $impl.FCacheCount -= 1;
        if ($impl.FCacheCount === 0) {
          if (pas["WEBLib.Forms"].Application.FOnImageCacheReady != null) pas["WEBLib.Forms"].Application.FOnImageCacheReady(pas["WEBLib.Forms"].Application);
        };
      };
      if (this.FOnChange != null) {
        this.FOnChange(this);
      };
      if (this.FLoaded != null) {
        this.FLoaded();
        this.FLoaded = null;
      };
    };
    this.SetURL = function (URL) {
      this.LoadFromURL(URL,null);
    };
    this.GetWidth = function () {
      var Result = 0;
      var w = 0;
      w = 0;
      if (this.FImage != null) {
        w = this.FImage.width;
      };
      Result = w;
      return Result;
    };
    this.GetHeight = function () {
      var Result = 0;
      var h = 0;
      h = 0;
      if (this.FImage != null) {
        h = this.FImage.height;
      };
      Result = h;
      return Result;
    };
    this.RecreateCanvas = function () {
      if (!(this.FCanvasElement != null)) this.FCanvasElement = document.createElement("CANVAS");
      if (this.FCanvasElement != null) {
        this.FCanvasElement.height = this.GetHeight();
        this.FCanvasElement.width = this.GetWidth();
        if (!(this.FCanvas != null)) {
          this.FCanvas = $mod.TCanvas.$create("Create$1",[this.FCanvasElement]);
          this.FCanvas.FOnBeginScene = rtl.createCallback(this,"DoBeginScene");
          this.FCanvas.FOnEndScene = rtl.createCallback(this,"DoEndScene");
        };
      };
    };
    this.DoBeginScene = function (Sender) {
      this.FCanvas.Clear();
    };
    this.DoEndScene = function (Sender) {
      this.FAddToQueue = false;
      this.CaptureCanvas();
      this.FAddToQueue = true;
    };
    this.AssignEvents = function () {
      var me = this;
      this.FImage.onload = function() {
         me.DoChange();
        };
    };
    this.CreateImage = function () {
      this.FImage = new Image();
    };
    this.LoadFromCache = function (AData, ALoaded) {
      var dt = "";
      var o = null;
      var b = false;
      var s = "";
      var l = false;
      this.FData = AData;
      if (pas.System.Pos("DATA:",pas.SysUtils.UpperCase(AData)) > 0) {
        this.FDataBin = pas["WEBLib.WebTools"].HexImageEncodeFromBase64(AData);
      };
      dt = AData;
      if (dt === "") return;
      this.FLoaded = ALoaded;
      this.FUsedCanvas = false;
      if (!$impl.FCache.Find(dt,{get: function () {
          return o;
        }, set: function (v) {
          o = v;
        }})) {
        b = false;
        s = "";
        s = this.FImage.src;
        b = (s != '');
        l = b && (dt !== s);
        if (l) {
          this.CreateImage();
          this.AssignEvents();
        };
        if ((!l && ($impl.FQueue.IndexOf(dt) === -1)) || l) {
          this.FImage.src = dt;
          dt = this.FImage.src;
          this.FData = dt;
          if (pas.System.Pos("DATA:",pas.SysUtils.UpperCase(dt)) > 0) this.FDataBin = pas["WEBLib.WebTools"].HexImageEncodeFromBase64(dt);
          $impl.FCacheCount += 1;
          if (this.FAddToQueue) $impl.FQueue.Add(dt);
        } else if (!l && ($impl.FQueue.IndexOf(dt) !== -1)) {
          this.FImage.src = dt;
        };
      } else {
        this.FImage = o;
        this.DoChange();
      };
      if (this.FImage) {
        this.FEmpty = (this.FImage.src == '');
      };
    };
    this.CreateFromResource = function (AResource) {
      var Result = null;
      Result = this.CreateFromResource$1(AResource,0);
      return Result;
    };
    this.CreateFromResource$1 = function (AResource, AInstance) {
      var Result = null;
      Result = $mod.TGraphic.$create("Create$3");
      Result.LoadFromResource(AResource);
      return Result;
    };
    this.CreateFromURL = function (AURL) {
      var Result = null;
      Result = this.CreateFromURL$1(AURL,0);
      return Result;
    };
    this.CreateFromURL$1 = function (AURL, AInstance) {
      var Result = null;
      Result = $mod.TGraphic.$create("Create$3");
      Result.LoadFromURL(AURL,null);
      return Result;
    };
    this.Image = function () {
      var Result = null;
      Result = this.FImage;
      return Result;
    };
    this.Empty = function () {
      var Result = false;
      Result = this.FEmpty;
      return Result;
    };
    this.GetBase64Image = function () {
      var Result = "";
      Result = "";
      if (this.FCanvas != null) Result = this.FCanvas.GetBase64Image();
      return Result;
    };
    this.GetAsImage = function (AType) {
      var Result = "";
      Result = "";
      if (this.FCanvas != null) Result = this.FCanvas.GetAsImage(AType);
      return Result;
    };
    this.Create$1 = function (URL) {
      this.FAddToQueue = true;
      this.FEmpty = true;
      this.FData = "";
      this.FDataBin = "";
      this.Create$3();
      this.LoadFromURL(URL,null);
      return this;
    };
    this.Create$2 = function (Img) {
      this.FAddToQueue = true;
      this.FEmpty = true;
      this.FData = "";
      this.FDataBin = "";
      this.FURL = "";
      this.FImage = Img;
      this.FLoaded = null;
      return this;
    };
    this.Create$3 = function () {
      this.FAddToQueue = true;
      this.FEmpty = true;
      this.FData = "";
      this.FDataBin = "";
      this.FUsedCanvas = false;
      this.CreateImage();
      this.AssignEvents();
      return this;
    };
    this.CaptureCanvas = function () {
      if ((this.FCanvas != null) && (this.FCanvas.FElementCanvas != null)) this.LoadFromResource(this.FCanvas.FElementCanvas.toDataURL());
    };
    this.LoadFromCanvas = function (ACanvas) {
      if ((ACanvas != null) && (ACanvas.FElementCanvas != null)) this.LoadFromResource(ACanvas.FElementCanvas.toDataURL());
    };
    this.SetSize = function (AWidth, AHeight) {
      this.SetWidth(AWidth);
      this.SetHeight(AHeight);
    };
    this.Assign = function (Source) {
      var s = "";
      if ((Source != null) && $mod.TGraphic.isPrototypeOf(Source) && (rtl.as(Source,$mod.TGraphic).FCanvas != null)) {
        this.LoadFromCanvas(rtl.as(Source,$mod.TGraphic).FCanvas)}
       else if ((Source != null) && $mod.TGraphic.isPrototypeOf(Source) && (rtl.as(Source,$mod.TGraphic).FImage != null) && !rtl.as(Source,$mod.TGraphic).Empty()) {
        s = Source.FImage.src;
        this.LoadFromURL(s,null);
      } else if (!(Source != null)) {
        this.CreateImage();
        this.DoChange();
      };
    };
    this.LoadFromURL = function (AURL, ALoaded) {
      this.LoadFromURL$1(AURL,0,ALoaded);
    };
    this.LoadFromURL$1 = function (AURL, AHInstance, ALoaded) {
      this.FEmpty = true;
      this.LoadFromCache(AURL,ALoaded);
    };
    this.LoadFromFile = function (AFileName, ALoaded) {
      this.LoadFromURL$1(AFileName,0,ALoaded);
    };
    this.LoadFromResource = function (AResource) {
      this.LoadFromResource$1(AResource,0);
    };
    this.LoadFromResource$1 = function (AResource, AHInstance) {
      this.FEmpty = true;
      this.LoadFromCache(AResource,null);
    };
    this.LoadFromStream = function (AStream) {
      this.DoChange();
    };
    var $r = this.$rtti;
    $r.addMethod("Create$1",2,[["URL",rtl.string]]);
    $r.addMethod("Create$2",2,[["Img",pas.JS.$rtti["TJSObject"]]]);
    $r.addMethod("Create$3",2,[]);
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("URL",2,rtl.string,"FURL","SetURL");
    $r.addProperty("Data",3,$mod.$rtti["TBinaryString"],"GetData","SetData");
  });
  rtl.createClass(this,"TBitmap",this.TGraphic,function () {
  });
  rtl.recNewT(this,"TMatrix",function () {
    this.m11 = 0.0;
    this.m12 = 0.0;
    this.m13 = 0.0;
    this.m21 = 0.0;
    this.m22 = 0.0;
    this.m23 = 0.0;
    this.m31 = 0.0;
    this.m32 = 0.0;
    this.m33 = 0.0;
    this.$eq = function (b) {
      return (this.m11 === b.m11) && (this.m12 === b.m12) && (this.m13 === b.m13) && (this.m21 === b.m21) && (this.m22 === b.m22) && (this.m23 === b.m23) && (this.m31 === b.m31) && (this.m32 === b.m32) && (this.m33 === b.m33);
    };
    this.$assign = function (s) {
      this.m11 = s.m11;
      this.m12 = s.m12;
      this.m13 = s.m13;
      this.m21 = s.m21;
      this.m22 = s.m22;
      this.m23 = s.m23;
      this.m31 = s.m31;
      this.m32 = s.m32;
      this.m33 = s.m33;
      return this;
    };
    var $r = $mod.$rtti.$Record("TMatrix",{});
    $r.addField("m11",rtl.double);
    $r.addField("m12",rtl.double);
    $r.addField("m13",rtl.double);
    $r.addField("m21",rtl.double);
    $r.addField("m22",rtl.double);
    $r.addField("m23",rtl.double);
    $r.addField("m31",rtl.double);
    $r.addField("m32",rtl.double);
    $r.addField("m33",rtl.double);
  });
  rtl.createClass(this,"TCanvas",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FElementCanvas = null;
      this.FContext = null;
      this.FPen = null;
      this.FBrush = null;
      this.FFont = null;
      this.FPathOpen = false;
      this.FPathX = 0.0;
      this.FPathY = 0.0;
      this.FClipRect = $mod.TCanvasRectF.$new();
      this.FOnEndScene = null;
      this.FOnBeginScene = null;
      this.FApplyPixelRatio = false;
    };
    this.$final = function () {
      this.FElementCanvas = undefined;
      this.FContext = undefined;
      this.FPen = undefined;
      this.FBrush = undefined;
      this.FFont = undefined;
      this.FClipRect = undefined;
      this.FOnEndScene = undefined;
      this.FOnBeginScene = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.SetClipRect = function (Value) {
      this.FClipRect.$assign(Value);
      if (this.FContext != null) {
        this.FContext.beginPath();
        this.FContext.rect(this.FClipRect.Left,this.FClipRect.Top,this.FClipRect.Right - this.FClipRect.Left,this.FClipRect.Bottom - this.FClipRect.Top);
        this.FContext.clip();
      };
    };
    this.GetAccuOffset = function (X, Y, dx, dy) {
      dx.set(0);
      dy.set(0);
      if ((this.FPen.FWidth === 1) && (this.FPen.FStyle !== $mod.TPenStyle.psClear) && (pas.System.Frac(X) === 0)) dx.set(0.5);
      if ((this.FPen.FWidth === 1) && (this.FPen.FStyle !== $mod.TPenStyle.psClear) && (pas.System.Frac(Y) === 0)) dy.set(0.5);
    };
    this.GetPixel = function (X, Y) {
      var Result = 0;
      var imgd = null;
      Result = -1;
      if (this.FContext != null) {
        imgd = this.FContext.getImageData(X,Y,1,1);
        Result = $mod.RGBA(imgd.data[0],imgd.data[1],imgd.data[2],imgd.data[3]);
      };
      return Result;
    };
    this.SetPixel = function (X, Y, Clr) {
      if (this.FContext != null) {
        this.FContext.fillStyle = $mod.ColorToHTML(Clr);
        this.FContext.fillRect(X,Y,1,1);
      };
    };
    this.ApplyStroke = function () {
      if (this.FContext != null) {
        this.FContext.lineWidth = this.FPen.FWidth;
        this.FContext.strokeStyle = $mod.ColorToHTML(this.FPen.FColor);
        var $tmp = this.FPen.FStyle;
        if ($tmp === $mod.TPenStyle.psSolid) {
          this.FContext.setLineDash([])}
         else if ($tmp === $mod.TPenStyle.psDot) {
          this.FContext.setLineDash([1,2])}
         else if ($tmp === $mod.TPenStyle.psDash) {
          this.FContext.setLineDash([8,2])}
         else if ($tmp === $mod.TPenStyle.psDashDot) {
          this.FContext.setLineDash([6,2,2,2])}
         else if ($tmp === $mod.TPenStyle.psDashDotDot) {
          this.FContext.setLineDash([6,2,2,2,2,2])}
         else if ($tmp === $mod.TPenStyle.psClear) this.FContext.setLineDash([0,0xFFFF]);
      };
    };
    this.ApplyFill = function () {
      if (this.FContext != null) this.FContext.fillStyle = $mod.ColorToHTML(this.FBrush.FColor);
    };
    this.ApplyBrush = function (X1, Y1, X2, Y2) {
      var dx = 0.0;
      var dy = 0.0;
      var p = 0.0;
      var gr = null;
      var i = 0;
      var clr = "";
      var AColor = 0;
      var AStop = 0.0;
      this.GetAccuOffset(X1,Y1,{get: function () {
          return dx;
        }, set: function (v) {
          dx = v;
        }},{get: function () {
          return dy;
        }, set: function (v) {
          dy = v;
        }});
      if (this.FBrush.FStyle in rtl.createSet($mod.TBrushStyle.bsHorizontal,$mod.TBrushStyle.bsCross)) {
        p = Y1 + dy;
        this.FContext.lineWidth = 1;
        this.FContext.strokeStyle = $mod.ColorToHTML(this.FBrush.FColor);
        while (p < Y2) {
          this.FContext.moveTo(X1,p);
          this.FContext.lineTo(X2,p);
          p = p + 8;
        };
      };
      if (this.FBrush.FStyle in rtl.createSet($mod.TBrushStyle.bsVertical,$mod.TBrushStyle.bsCross)) {
        p = X1 + dx;
        this.FContext.lineWidth = 1;
        this.FContext.strokeStyle = $mod.ColorToHTML(this.FBrush.FColor);
        while (p < X2) {
          this.FContext.moveTo(p,Y1);
          this.FContext.lineTo(p,Y2);
          p = p + 8;
        };
      };
      if (this.FBrush.FStyle in rtl.createSet($mod.TBrushStyle.bsFDiagonal,$mod.TBrushStyle.bsDiagCross)) {
        p = (X1 + dx) - (X2 - X1);
        this.FContext.lineWidth = 1;
        this.FContext.strokeStyle = $mod.ColorToHTML(this.FBrush.FColor);
        while (p < X2) {
          this.FContext.moveTo(p,Y1);
          this.FContext.lineTo(p + (Y2 - Y1),Y2);
          p = p + 8;
        };
      };
      if (this.FBrush.FStyle in rtl.createSet($mod.TBrushStyle.bsBDiagonal,$mod.TBrushStyle.bsDiagCross)) {
        p = X1 + dx;
        this.FContext.lineWidth = 1;
        this.FContext.strokeStyle = $mod.ColorToHTML(this.FBrush.FColor);
        while (p < (X2 + (X2 - X1))) {
          this.FContext.moveTo(p,Y1);
          this.FContext.lineTo(p - (Y2 - Y1),Y2);
          p = p + 8;
        };
      };
      if (this.FBrush.FGradient !== $mod.TBrushGradient.bgNone) {
        var $tmp = this.FBrush.FGradient;
        if ($tmp === $mod.TBrushGradient.bgLinearHorz) {
          gr = this.FContext.createLinearGradient(X1,Y1,X2,Y1)}
         else if ($tmp === $mod.TBrushGradient.bgLinearVert) {
          gr = this.FContext.createLinearGradient(X1,Y1,X1,Y2)}
         else if ($tmp === $mod.TBrushGradient.bgRadial) gr = this.FContext.createRadialGradient(X1 + ((X2 - X1) / 2),Y1 + ((Y2 - Y1) / 2),0,X1 + ((X2 - X1) / 2),Y1 + ((Y2 - Y1) / 2),(X2 - X1) / 2);
        clr = $mod.ColorToHTML($mod.ColorToRGB(this.FBrush.FColor));
        gr.addColorStop(0,clr);
        for (var $l = 0, $end = this.FBrush.GradientCount() - 1; $l <= $end; $l++) {
          i = $l;
          this.FBrush.GetGradientColor(i,{get: function () {
              return AColor;
            }, set: function (v) {
              AColor = v;
            }},{get: function () {
              return AStop;
            }, set: function (v) {
              AStop = v;
            }});
          clr = $mod.ColorToHTML($mod.ColorToRGB(AColor));
          gr.addColorStop(AStop,clr);
        };
        this.FContext.fillStyle = gr;
        return;
      };
      this.FContext.stroke();
    };
    this.Create$1 = function (AControl) {
      this.FElementCanvas = AControl;
      if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
        this.FContext = AControl.getContext('2d');
      } else {
        this.FContext = AControl.getContext('2d',{ willReadFrequently: true});
      };
      this.FPen = $mod.TPen.$create("Create$1");
      this.FBrush = $mod.TBrush.$create("Create$1");
      this.FPathOpen = false;
      this.FFont = $mod.TFont.$create("Create$1");
      this.FApplyPixelRatio = false;
      return this;
    };
    this.Create$2 = function () {
      this.FElementCanvas = document.createElement("CANVAS");
      this.Create$1(this.FElementCanvas);
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    this.SetTransform = function (m11, m12, m21, m22, dx, dy) {
      var m = $mod.TMatrix.$new();
      var px = 0.0;
      if (this.FContext != null) {
        m.$assign($impl.MatrixIdentity());
        m.m11 = m11;
        m.m12 = m12;
        m.m21 = m21;
        m.m22 = m22;
        m.m31 = dx;
        m.m32 = dy;
        if (this.FApplyPixelRatio) {
          px = $impl.GetPixelRatio(this);
          m.$assign($impl.MatrixMultiply(m,$impl.MatrixCreateScaling(px,px)));
        };
        this.FContext.setTransform(m.m11,m.m12,m.m21,m.m22,m.m31,m.m32);
      };
    };
    this.Transform = function (m11, m12, m21, m22, dx, dy) {
      if (this.FContext != null) this.FContext.transform(m11,m12,m21,m22,dx,dy);
    };
    this.Rotate = function (Angle) {
      if (this.FContext != null) this.FContext.rotate(Angle);
    };
    this.Translate = function (X, Y) {
      if (this.FContext != null) this.FContext.translate(X,Y);
    };
    this.AngleArc = function (X, Y, Radius, StartAngle, SweepAngle) {
      this.AngleArc$1(X,Y,Radius,StartAngle,SweepAngle);
    };
    this.AngleArc$1 = function (X, Y, Radius, StartAngle, SweepAngle) {
      if (this.FContext != null) {
        this.FContext.beginPath();
        this.ApplyStroke();
        this.FContext.arc(X,Y,Radius,StartAngle,StartAngle + SweepAngle);
        this.FContext.stroke();
      };
    };
    this.CopyRect = function (DestRect, Canvas, SourceRect) {
      var sw = 0;
      var sh = 0;
      var dw = 0;
      var dh = 0;
      var imgData = null;
      var ACanvas = null;
      if (this.FContext != null) {
        sw = SourceRect.Right - SourceRect.Left;
        sh = SourceRect.Bottom - SourceRect.Top;
        dw = DestRect.Right - DestRect.Left;
        dh = DestRect.Bottom - DestRect.Top;
        imgData = this.FContext.getImageData(SourceRect.Left,SourceRect.Top,sw,sh);
        ACanvas = $mod.TCanvas.$create("Create$2");
        try {
          ACanvas.FElementCanvas.width = sw;
          ACanvas.FElementCanvas.height = sh;
          ACanvas.FContext.putImageData(imgData,0,0);
          Canvas.FContext.drawImage(ACanvas.FElementCanvas,DestRect.Left,DestRect.Top,dw,dh);
        } finally {
          ACanvas = rtl.freeLoc(ACanvas);
        };
      };
    };
    this.MoveTo = function (X, Y) {
      this.MoveTo$1(X,Y);
    };
    this.MoveTo$1 = function (X, Y) {
      var dx = 0.0;
      var dy = 0.0;
      if (this.FContext != null) {
        this.FPathOpen = true;
        this.FContext.beginPath();
        this.ApplyStroke();
        dx = 0;
        dy = 0;
        this.GetAccuOffset(X,Y,{get: function () {
            return dx;
          }, set: function (v) {
            dx = v;
          }},{get: function () {
            return dy;
          }, set: function (v) {
            dy = v;
          }});
        this.FContext.moveTo(X + dx,Y + dy);
      };
    };
    this.LineTo = function (X, Y) {
      this.LineTo$1(X,Y);
    };
    this.LineTo$1 = function (X, Y) {
      var dx = 0.0;
      var dy = 0.0;
      var clr = 0;
      if (this.FContext != null) {
        dx = 0;
        dy = 0;
        this.GetAccuOffset(X,Y,{get: function () {
            return dx;
          }, set: function (v) {
            dx = v;
          }},{get: function () {
            return dy;
          }, set: function (v) {
            dy = v;
          }});
        var $tmp = this.FPen.FMode;
        if ($tmp === $mod.TPenMode.pmBlack) {
          this.FContext.strokeStyle = $mod.ColorToHTML(0)}
         else if ($tmp === $mod.TPenMode.pmWhite) {
          this.FContext.strokeStyle = $mod.ColorToHTML(16777215)}
         else if ($tmp === $mod.TPenMode.pmXor) {
          this.FContext.globalCompositeOperation = "xor"}
         else if ($tmp === $mod.TPenMode.pmMask) {
          this.FContext.globalCompositeOperation = "source-atop"}
         else if ($tmp === $mod.TPenMode.pmNotCopy) {
          clr = $mod.ColorToRGB(this.FPen.FColor) ^ 0xFFFFFFFF;
          this.FContext.strokeStyle = $mod.ColorToHTML(clr);
        } else if ($tmp === $mod.TPenMode.pmNotXor) {
          clr = $mod.ColorToRGB(this.FPen.FColor) ^ 0xFFFFFFFF;
          this.FContext.strokeStyle = $mod.ColorToHTML(clr);
          this.FContext.globalCompositeOperation = "xor";
        };
        if (!this.FPathOpen) {
          this.FContext.beginPath();
          this.ApplyStroke();
          this.FContext.moveTo(this.FPathX + dx,this.FPathY + dy);
        };
        this.FContext.lineTo(X + dx,Y + dy);
        this.FContext.stroke();
        this.FPathX = X;
        this.FPathY = Y;
        this.FPathOpen = false;
        this.FContext.globalCompositeOperation = "source-over";
      };
    };
    this.Rectangle = function (X1, Y1, X2, Y2) {
      var dx = 0.0;
      var dy = 0.0;
      if (this.FContext != null) {
        this.FContext.save();
        this.FContext.beginPath();
        this.ApplyStroke();
        this.ApplyFill();
        this.GetAccuOffset(X1,Y1,{get: function () {
            return dx;
          }, set: function (v) {
            dx = v;
          }},{get: function () {
            return dy;
          }, set: function (v) {
            dy = v;
          }});
        let region = new Path2D();
        region.rect(X1, Y1, X2- X1 + 1, Y2 - Y1 + 1);
        this.FContext.clip(region, "evenodd");
        this.ApplyBrush(X1,Y1,X2,Y2);
        if (!(this.FBrush.FStyle in rtl.createSet($mod.TBrushStyle.bsClear,$mod.TBrushStyle.bsHorizontal,$mod.TBrushStyle.bsVertical,$mod.TBrushStyle.bsCross,$mod.TBrushStyle.bsFDiagonal,$mod.TBrushStyle.bsBDiagonal,$mod.TBrushStyle.bsDiagCross))) {
          this.FContext.rect(X1 + dx,Y1 + dy,X2 - X1,Y2 - Y1);
          this.FContext.fill();
        };
        if (this.FPen.FStyle !== $mod.TPenStyle.psClear) {
          this.ApplyStroke();
          this.FContext.beginPath();
          this.FContext.rect(X1 + dx,Y1 + dy,X2 - X1,Y2 - Y1);
          this.FContext.stroke();
        };
        this.FContext.restore();
      };
    };
    this.Rectangle$1 = function (X1, Y1, X2, Y2) {
      this.Rectangle(X1,Y1,X2,Y2);
    };
    this.Rectangle$2 = function (Rect) {
      this.Rectangle$1(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom);
    };
    this.Rectangle$3 = function (Rect) {
      this.Rectangle(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom);
    };
    this.RoundRect = function (X1, Y1, X2, Y2, X3, Y3) {
      this.RoundRect$1(X1,Y1,X2,Y2,X3,Y3);
    };
    this.RoundRect$1 = function (X1, Y1, X2, Y2, X3, Y3) {
      var dx = 0.0;
      var dy = 0.0;
      if (this.FContext != null) {
        if (X2 < X1) return;
        if (Y2 < Y1) return;
        this.FContext.beginPath();
        this.ApplyStroke();
        this.ApplyFill();
        this.GetAccuOffset(X1,Y1,{get: function () {
            return dx;
          }, set: function (v) {
            dx = v;
          }},{get: function () {
            return dy;
          }, set: function (v) {
            dy = v;
          }});
        this.FContext.moveTo(X1 + (X3 / 2),Y1 + dy);
        this.FContext.lineTo(X2 - (X3 / 2),Y1 + dy);
        this.FContext.ellipse(X2 - dx - (X3 / 2),Y1 + dy + (Y3 / 2),X3 / 2,Y3 / 2,0,Math.PI * 1.5,0);
        this.FContext.lineTo(X2 - dx,Y2 - (Y3 / 2));
        this.FContext.ellipse(X2 - dx - (X3 / 2),Y2 - dy - (Y3 / 2),X3 / 2,Y3 / 2,0,0,Math.PI * 0.5);
        this.FContext.lineTo(X1 + (X3 / 2),Y2 - dy);
        this.FContext.ellipse(X1 + dx + (X3 / 2),Y2 - dy - (Y3 / 2),X3 / 2,Y3 / 2,0,Math.PI * 0.5,Math.PI);
        this.FContext.lineTo(X1 + dx,Y1 + (Y3 / 2) + dy);
        this.FContext.ellipse(X1 + dx + (X3 / 2),Y1 + dy + (Y3 / 2),X3 / 2,Y3 / 2,0,Math.PI,Math.PI * 1.5);
        if (this.FBrush.FStyle === $mod.TBrushStyle.bsSolid) this.FContext.fill();
        if (this.FPen.FStyle !== $mod.TPenStyle.psClear) this.FContext.stroke();
        this.FContext.save();
        let region = new Path2D();
        region.moveTo(X1 + X3/2, Y1 + dy);
        region.lineTo(X2 - X3/2, Y1 + dy);
        region.ellipse(X2 - dx - X3 / 2, Y1 + dy + Y3/2, X3 / 2, Y3 / 2, 0, Math.PI * 1.5, 0);
        region.lineTo(X2 + dx, Y2 - Y3/2 );
        region.ellipse(X2 - dx - X3 / 2, Y2 - dy - Y3/2, X3 / 2, Y3 / 2, 0, 0, Math.PI * 0.5);
        region.lineTo(X1 + X3/2, Y2 + dy);
        region.ellipse(X1 + dx + X3 / 2, Y2 - dy - Y3/2, X3 / 2, Y3 / 2, 0, Math.PI * 0.5, Math.PI);
        region.lineTo(X1 + dx, Y1 + Y3/2 + dy);
        region.ellipse(X1 + dx + X3 / 2, Y1 + dy + Y3/2, X3 / 2, Y3 / 2, 0, Math.PI, Math.PI * 1.5);
        this.FContext.clip(region, "evenodd");
        this.ApplyBrush(X1,Y1,X2,Y2);
        this.FContext.restore();
      };
    };
    this.RoundRect$2 = function (Rect, CX, CY) {
      this.RoundRect(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom,CX,CY);
    };
    this.RoundRect$3 = function (Rect, CX, CY) {
      this.RoundRect$1(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom,CX,CY);
    };
    this.FillRect = function (Rect) {
      this.Rectangle$1(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom);
    };
    this.FillRect$1 = function (Rect) {
      this.Rectangle(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom);
    };
    this.Arc = function (X1, Y1, X2, Y2, X3, Y3, X4, Y4) {
      var rx = 0;
      var ry = 0;
      var angleStart = 0.0;
      var angleEnd = 0.0;
      if (this.FContext != null) {
        rx = rtl.trunc((X2 - X1) / 2);
        ry = rtl.trunc((Y2 - Y1) / 2);
        angleStart = $impl.AngleOfPoints(X1 + rx,Y1 + ry,X4,Y4);
        angleEnd = $impl.AngleOfPoints(X1 + rx,Y1 + ry,X3,Y3);
        this.FContext.beginPath();
        this.ApplyStroke();
        this.FContext.ellipse(X1 + rx,Y1 + ry,rx,ry,0,angleStart,angleEnd);
        this.FContext.stroke();
      };
    };
    this.Ellipse = function (X1, Y1, X2, Y2) {
      this.Ellipse$1(X1,Y1,X2,Y2);
    };
    this.Ellipse$1 = function (X1, Y1, X2, Y2) {
      var w = 0.0;
      var h = 0.0;
      var kappa = 0.0;
      var ox = 0.0;
      var oy = 0.0;
      var xe = 0.0;
      var ye = 0.0;
      var xm = 0.0;
      var ym = 0.0;
      if (this.FContext != null) {
        w = X2 - X1;
        h = Y2 - Y1;
        kappa = 0.5522848;
        ox = (w / 2) * kappa;
        oy = (h / 2) * kappa;
        xe = X1 + w;
        ye = Y1 + h;
        xm = X1 + (w / 2);
        ym = Y1 + (h / 2);
        this.FContext.save();
        let region = new Path2D();
        region.moveTo(X1, ym);
        region.bezierCurveTo(X1, ym - oy, xm - ox, Y1, xm, Y1);
        region.bezierCurveTo(xm + ox, Y1, xe, ym - oy, xe, ym);
        region.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        region.bezierCurveTo(xm - ox, ye, X1, ym + oy, X1, ym);
        region.closePath();
        this.FContext.clip(region, "evenodd");
        if (!(this.FBrush.FStyle in rtl.createSet($mod.TBrushStyle.bsSolid,$mod.TBrushStyle.bsClear)) && (this.FBrush.FGradient === $mod.TBrushGradient.bgNone)) this.ApplyBrush(X1,Y1,X2,Y2);
        this.FContext.restore();
        this.FContext.beginPath();
        this.ApplyStroke();
        if (this.FBrush.FGradient !== $mod.TBrushGradient.bgNone) {
          this.ApplyBrush(X1,Y1,X2,Y2);
        } else this.ApplyFill();
        this.FContext.moveTo(X1,ym);
        this.FContext.bezierCurveTo(X1,ym - oy,xm - ox,Y1,xm,Y1);
        this.FContext.bezierCurveTo(xm + ox,Y1,xe,ym - oy,xe,ym);
        this.FContext.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
        this.FContext.bezierCurveTo(xm - ox,ye,X1,ym + oy,X1,ym);
        this.FContext.closePath();
        if ((this.FBrush.FStyle === $mod.TBrushStyle.bsSolid) || (this.FBrush.FGradient !== $mod.TBrushGradient.bgNone)) this.FContext.fill();
        if (this.FPen.FStyle !== $mod.TPenStyle.psClear) this.FContext.stroke();
      };
    };
    this.Ellipse$2 = function (Rect) {
      this.Ellipse(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom);
    };
    this.Ellipse$3 = function (Rect) {
      this.Ellipse$1(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom);
    };
    this.Polyline = function (Points) {
      var l = 0;
      var i = 0;
      if (this.FContext != null) {
        l = rtl.length(Points);
        if (l === 0) return;
        this.FContext.beginPath();
        this.ApplyStroke();
        i = 0;
        this.FContext.moveTo(Points[i].x,Points[i].y);
        while (i < (l - 1)) {
          i += 1;
          this.FContext.lineTo(Points[i].x,Points[i].y);
        };
        if (this.FPen.FStyle !== $mod.TPenStyle.psClear) this.FContext.stroke();
      };
    };
    this.Polyline$1 = function (Points) {
      var l = 0;
      var i = 0;
      if (this.FContext != null) {
        l = rtl.length(Points);
        if (l === 0) return;
        this.FContext.beginPath();
        this.ApplyStroke();
        i = 0;
        this.FContext.moveTo(Points[i].X,Points[i].Y);
        while (i < (l - 1)) {
          i += 1;
          this.FContext.lineTo(Points[i].X,Points[i].Y);
        };
        if (this.FPen.FStyle !== $mod.TPenStyle.psClear) this.FContext.stroke();
      };
    };
    this.Polygon = function (Points) {
      var l = 0;
      var i = 0;
      var x1 = 0;
      var y1 = 0;
      var x2 = 0;
      var y2 = 0;
      if (this.FContext != null) {
        l = rtl.length(Points);
        if (l === 0) return;
        this.FContext.beginPath();
        this.ApplyStroke();
        x1 = 0xFFFF;
        y1 = 0xFFFF;
        x2 = 0;
        y2 = 0;
        for (var $l = 0, $end = rtl.length(Points) - 1; $l <= $end; $l++) {
          i = $l;
          if (Points[i].x < x1) x1 = Points[i].x;
          if (Points[i].y < y1) y1 = Points[i].y;
          if (Points[i].x > x2) x2 = Points[i].x;
          if (Points[i].y > y2) y2 = Points[i].y;
        };
        if (this.FBrush.FGradient !== $mod.TBrushGradient.bgNone) {
          this.ApplyBrush(x1,y1,x2,y2);
        } else this.ApplyFill();
        i = 0;
        this.FContext.moveTo(Points[i].x,Points[i].y);
        while (i < (l - 1)) {
          i += 1;
          this.FContext.lineTo(Points[i].x,Points[i].y);
        };
        this.FContext.closePath();
        if (this.FBrush.FStyle !== $mod.TBrushStyle.bsClear) this.FContext.fill();
        if (this.FPen.FStyle !== $mod.TPenStyle.psClear) this.FContext.stroke();
      };
    };
    this.Polygon$1 = function (Points) {
      var l = 0;
      var i = 0;
      var x1 = 0.0;
      var y1 = 0.0;
      var x2 = 0.0;
      var y2 = 0.0;
      if (this.FContext != null) {
        l = rtl.length(Points);
        if (l === 0) return;
        this.FContext.beginPath();
        this.ApplyStroke();
        x1 = 0xFFFF;
        y1 = 0xFFFF;
        x2 = 0;
        y2 = 0;
        for (var $l = 0, $end = rtl.length(Points) - 1; $l <= $end; $l++) {
          i = $l;
          if (Points[i].X < x1) x1 = Points[i].X;
          if (Points[i].Y < y1) y1 = Points[i].Y;
          if (Points[i].X > x2) x2 = Points[i].X;
          if (Points[i].Y > y2) y2 = Points[i].Y;
        };
        if (this.FBrush.FGradient !== $mod.TBrushGradient.bgNone) {
          this.ApplyBrush(x1,y1,x2,y2)}
         else this.ApplyFill();
        i = 0;
        this.FContext.moveTo(Points[i].X,Points[i].Y);
        while (i < (l - 1)) {
          i += 1;
          this.FContext.lineTo(Points[i].X,Points[i].Y);
        };
        this.FContext.closePath();
        if (this.FBrush.FStyle !== $mod.TBrushStyle.bsClear) this.FContext.fill();
        if (this.FPen.FStyle !== $mod.TPenStyle.psClear) this.FContext.stroke();
      };
    };
    this.TextOut = function (X, Y, Text) {
      this.TextOut$1(X,Y,Text);
    };
    this.TextOut$1 = function (X, Y, Text) {
      var tm = null;
      var DrwText = "";
      if (this.FContext != null) {
        DrwText = Text.replace('\0','');
        this.FContext.fillStyle = $mod.ColorToHTML(this.FFont.FColor);
        this.FContext.font = this.FFont.ToString();
        this.FContext.textBaseline = "top";
        this.FContext.fillText(DrwText,X,Y);
        if ($mod.TFontStyle.fsUnderline in this.FFont.FStyle) {
          tm = this.FContext.measureText(DrwText);
          this.FContext.fillRect(X,Y + (this.FFont.FSize * 1.4),tm.width,1);
        };
        if ($mod.TFontStyle.fsStrikeOut in this.FFont.FStyle) {
          tm = this.FContext.measureText(DrwText);
          this.FContext.fillRect(X,Y + (this.FFont.FSize * 0.7),tm.width,1);
        };
      };
    };
    this.Draw = function (X, Y, Graphic) {
      this.Draw$1(X,Y,Graphic);
    };
    this.Draw$1 = function (X, Y, Graphic) {
      var img = null;
      if (this.FContext != null) {
        img = Graphic.Image();
        if (img != null) {
          if (Graphic.FUsedCanvas) {
            this.FContext.drawImage(Graphic.FCanvasElement,X,Y)}
           else this.FContext.drawImage(img,X,Y);
        };
      };
    };
    this.StretchDraw = function (Rect, Graphic) {
      this.StretchDraw$1($mod.TCanvasRectF.$clone($mod.CreateCanvasRectF(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom)),Graphic);
    };
    this.StretchDraw$1 = function (Rect, Graphic) {
      var img = null;
      if (this.FContext != null) {
        img = Graphic.Image();
        this.FContext.drawImage(img,0,0,Graphic.GetWidth(),Graphic.GetHeight(),Rect.Left,Rect.Top,Rect.Right - Rect.Left,Rect.Bottom - Rect.Top);
      };
    };
    this.DrawFocusRect = function (Rect) {
      this.DrawFocusRect$1($mod.CreateCanvasRectF(Rect.Left,Rect.Top,Rect.Right,Rect.Bottom));
    };
    this.DrawFocusRect$1 = function (Rect) {
      var ps = 0;
      ps = this.FPen.FStyle;
      this.FPen.FStyle = $mod.TPenStyle.psDot;
      this.FPen.FWidth = 1;
      this.FPen.SetColor(0);
      this.MoveTo$1(Rect.Left,Rect.Top);
      this.LineTo$1(Rect.Right,Rect.Top);
      this.LineTo$1(Rect.Right,Rect.Bottom);
      this.LineTo$1(Rect.Left,Rect.Bottom);
      this.LineTo$1(Rect.Left,Rect.Top);
      this.FPen.FStyle = ps;
    };
    this.BeginScene = function () {
      if (this.FOnBeginScene != null) this.FOnBeginScene(this);
    };
    this.EndScene = function () {
      if (this.FOnEndScene != null) this.FOnEndScene(this);
    };
    this.PathBegin = function () {
      if (this.FContext != null) this.FContext.beginPath();
    };
    this.PathClose = function () {
      if (this.FContext != null) this.FContext.closePath();
    };
    this.PathStroke = function () {
      if (this.FContext != null) {
        this.ApplyStroke();
        this.FContext.stroke();
      };
    };
    this.PathFill = function () {
      if (this.FContext != null) {
        this.ApplyFill();
        this.ApplyBrush(10,10,50,50);
        this.FContext.fill();
      };
    };
    this.PathMoveTo = function (X, Y) {
      this.PathMoveTo$1(X,Y);
    };
    this.PathMoveTo$1 = function (X, Y) {
      var dx = 0.0;
      var dy = 0.0;
      if (this.FContext != null) {
        dx = 0;
        dy = 0;
        this.GetAccuOffset(X,Y,{get: function () {
            return dx;
          }, set: function (v) {
            dx = v;
          }},{get: function () {
            return dy;
          }, set: function (v) {
            dy = v;
          }});
        this.FContext.moveTo(X + dx,Y + dy);
      };
    };
    this.PathLineTo = function (X, Y) {
      this.PathLineTo$1(X,Y);
    };
    this.PathLineTo$1 = function (X, Y) {
      var dx = 0.0;
      var dy = 0.0;
      if (this.FContext != null) {
        dx = 0;
        dy = 0;
        this.GetAccuOffset(X,Y,{get: function () {
            return dx;
          }, set: function (v) {
            dx = v;
          }},{get: function () {
            return dy;
          }, set: function (v) {
            dy = v;
          }});
        this.FContext.lineTo(X + dx,Y + dy);
      };
    };
    this.Save = function () {
      if (this.FContext != null) this.FContext.save();
    };
    this.Clip = function () {
      if (this.FContext != null) this.FContext.clip();
    };
    this.Restore = function () {
      if (this.FContext != null) this.FContext.restore();
    };
    this.Refresh = function () {
    };
    this.Clear = function () {
      if ((this.FContext != null) && (this.FElementCanvas != null)) this.FContext.clearRect(0,0,this.FElementCanvas.width,this.FElementCanvas.height);
    };
    this.Clear$1 = function (AColor) {
      var c = 0;
      var s = 0;
      this.Clear();
      if (this.FElementCanvas != null) {
        c = this.FBrush.FColor;
        s = this.FBrush.FStyle;
        this.FBrush.FColor = AColor;
        this.FBrush.FStyle = $mod.TBrushStyle.bsSolid;
        this.FillRect(pas.Types.Rect(0,0,this.FElementCanvas.width,this.FElementCanvas.height));
        this.FBrush.FColor = c;
        this.FBrush.FStyle = s;
      };
    };
    this.TextExtent = function (Text) {
      var Result = $mod.TCanvasSizeF.$new();
      Result.cx = this.TextWidth(Text);
      Result.cy = this.TextHeight(Text);
      return Result;
    };
    this.TextRect = function (ARect, Text, WordWrap, Calculate, AHorizontalAlignment, AVerticalAlignment) {
      var Result = pas.Types.TRect.$new();
      var r = $mod.TCanvasRectF.$new();
      r.$assign(this.TextRect$1($mod.TCanvasRectF.$clone($mod.CreateCanvasRectF(ARect.Left,ARect.Top,ARect.Right,ARect.Bottom)),Text,WordWrap,Calculate,AHorizontalAlignment,AVerticalAlignment));
      Result.$assign(pas.Types.Rect(Math.round(r.Left),Math.round(r.Top),Math.round(r.Right),Math.round(r.Bottom)));
      return Result;
    };
    this.TextRect$1 = function (ARect, Text, WordWrap, Calculate, AHorizontalAlignment, AVerticalAlignment) {
      var $Self = this;
      var Result = $mod.TCanvasRectF.$new();
      var i = 0;
      var s = "";
      var sn = "";
      var st = "";
      var l = 0;
      var w = 0.0;
      var mw = 0.0;
      var f = false;
      var p = 0;
      var tw = 0.0;
      var th = 0.0;
      var lcnt = 0;
      var rs = $mod.TCanvasRectF.$new();
      var fws = 0.0;
      var ths = 0.0;
      var ww = false;
      var wwx = false;
      var fx = false;
      function DrawText(AText, AWidth, AHeight) {
        if (ww) {
          var $tmp = AHorizontalAlignment;
          if ($tmp === pas.Classes.TAlignment.taCenter) {
            $Self.TextOut$1(ARect.Left + ((ARect.Right - ARect.Left - AWidth) / 2),ARect.Top,AText)}
           else if ($tmp === pas.Classes.TAlignment.taLeftJustify) {
            $Self.TextOut$1(ARect.Left,ARect.Top,AText)}
           else if ($tmp === pas.Classes.TAlignment.taRightJustify) $Self.TextOut$1(ARect.Right - AWidth,ARect.Top,AText);
        } else {
          var $tmp1 = AHorizontalAlignment;
          if ($tmp1 === pas.Classes.TAlignment.taCenter) {
            var $tmp2 = AVerticalAlignment;
            if ($tmp2 === $mod.TVerticalAlignment.taAlignTop) {
              $Self.TextOut$1(ARect.Left + ((ARect.Right - ARect.Left - AWidth) / 2),ARect.Top,AText)}
             else if ($tmp2 === $mod.TVerticalAlignment.taVerticalCenter) {
              $Self.TextOut$1(ARect.Left + ((ARect.Right - ARect.Left - AWidth) / 2),ARect.Top + ((ARect.Bottom - ARect.Top - AHeight) / 2),AText)}
             else if ($tmp2 === $mod.TVerticalAlignment.taAlignBottom) $Self.TextOut$1(ARect.Left + ((ARect.Right - ARect.Left - AWidth) / 2),ARect.Bottom - AHeight,AText);
          } else if ($tmp1 === pas.Classes.TAlignment.taLeftJustify) {
            var $tmp3 = AVerticalAlignment;
            if ($tmp3 === $mod.TVerticalAlignment.taAlignTop) {
              $Self.TextOut$1(ARect.Left,ARect.Top,AText)}
             else if ($tmp3 === $mod.TVerticalAlignment.taVerticalCenter) {
              $Self.TextOut$1(ARect.Left,ARect.Top + ((ARect.Bottom - ARect.Top - AHeight) / 2),AText)}
             else if ($tmp3 === $mod.TVerticalAlignment.taAlignBottom) $Self.TextOut$1(ARect.Left,ARect.Bottom - AHeight,AText);
          } else if ($tmp1 === pas.Classes.TAlignment.taRightJustify) {
            var $tmp4 = AVerticalAlignment;
            if ($tmp4 === $mod.TVerticalAlignment.taAlignTop) {
              $Self.TextOut$1(ARect.Right - AWidth,ARect.Top,AText)}
             else if ($tmp4 === $mod.TVerticalAlignment.taVerticalCenter) {
              $Self.TextOut$1(ARect.Right - AWidth,ARect.Top + ((ARect.Bottom - ARect.Top - AHeight) / 2),AText)}
             else if ($tmp4 === $mod.TVerticalAlignment.taAlignBottom) $Self.TextOut$1(ARect.Right - AWidth,ARect.Bottom - AHeight,AText);
          };
        };
      };
      function FindNextWord(Text, APos) {
        var Result = "";
        var l = 0;
        var i = 0;
        Result = "";
        l = Text.length;
        if (APos.get() > l) return Result;
        i = APos.get();
        while (true) {
          if (((Text.charAt(i - 1) === "\n") && (Text.charAt(i - 1 - 1) === "\r")) || ((Text.charAt(i - 1) === "\r") && (Text.charAt(i - 1 - 1) === "\n")) || (Text.charAt(i - 1) === " ")) {
            if (Text.charAt(i - 1) === " ") {
              Result = pas.System.Copy(Text,APos.get(),i - (APos.get() - 1))}
             else Result = pas.System.Copy(Text,APos.get(),i - APos.get());
            break;
          } else if ((Text.charAt(i - 1) === "\n") || (Text.charAt(i - 1) === "\r") || (Text.charAt(i - 1) === " ")) {
            Result = pas.System.Copy(Text,APos.get(),i - (APos.get() - 1));
            break;
          } else if (i >= l) {
            Result = pas.System.Copy(Text,APos.get(),i - (APos.get() - 1));
            break;
          } else i += 1;
        };
        APos.set(i + 1);
        return Result;
      };
      ww = WordWrap || (pas.System.Pos("\r",Text) > 0) || (pas.System.Pos("\n",Text) > 0);
      wwx = !WordWrap && ((pas.System.Pos("\r",Text) > 0) || (pas.System.Pos("\n",Text) > 0));
      if (!ww) {
        w = this.TextWidth(Text);
        th = this.TextHeight(Text);
        if (!Calculate) DrawText(Text,w,th);
        Result.$assign($mod.CreateCanvasRectF(ARect.Left,ARect.Top,ARect.Left + w,ARect.Top + th));
      } else {
        rs.$assign(ARect);
        mw = 0;
        i = 1;
        ths = this.FFont.FSize * 0.5;
        lcnt = 0;
        fws = 0;
        tw = 0;
        s = FindNextWord(Text,{get: function () {
            return i;
          }, set: function (v) {
            i = v;
          }});
        w = this.TextWidth(s);
        th = this.TextHeight(s) + ths;
        mw = mw + w;
        if ((s.length > 0) && (s.charAt(s.length - 1) === " ")) mw = mw + fws;
        fx = false;
        while (i <= Text.length) {
          l = s.length;
          if ((l >= 2) && (((s.charAt(l - 1) === "\n") && (s.charAt(l - 1 - 1) === "\r")) || ((s.charAt(l - 1) === "\r") && (s.charAt(l - 1 - 1) === "\n")))) {
            s = pas.System.Copy(s,1,l - 2);
            f = true;
          } else if ((l >= 1) && ((s.charAt(l - 1) === "\n") || (s.charAt(l - 1) === "\r"))) {
            s = pas.System.Copy(s,1,l - 1);
            f = true;
          } else f = false;
          sn = FindNextWord(Text,{get: function () {
              return i;
            }, set: function (v) {
              i = v;
            }});
          w = this.TextWidth(sn);
          th = Math.max(th,this.TextHeight(sn) + ths);
          if (((ARect.Left + mw + w) > ARect.Right) || f) {
            if ((s !== "") && !fx) {
              p = s.length;
              st = pas.System.Copy(s,1,p);
              lcnt += 1;
              if (mw > tw) tw = mw;
              if (!Calculate) DrawText(st,mw,th);
              mw = 0;
            };
            s = "";
            fx = false;
            if ((wwx && f) || !wwx) {
              ARect.Top = ARect.Top + th}
             else if (wwx && !f) fx = true;
            if ((pas.System.Trunc(ARect.Top) > pas.System.Trunc((ARect.Bottom - th) + ths)) && !Calculate) break;
          };
          mw = mw + w;
          if ((sn.length > 0) && (sn.charAt(sn.length - 1) === " ")) mw = mw + fws;
          s = s + sn;
        };
        if (s !== "") {
          p = s.length;
          st = pas.System.Copy(s,1,p);
          lcnt += 1;
          if (mw > tw) tw = mw;
          if (!Calculate) DrawText(st,mw,th);
        };
        Result.$assign($mod.CreateCanvasRectF(rs.Left,rs.Top,rs.Left + tw,rs.Top + (lcnt * th)));
      };
      return Result;
    };
    this.TextRect$2 = function (ARect, Text, TextFormat) {
      var Result = $mod.TCanvasRectF.$new();
      var ha = 0;
      var va = 0;
      ha = pas.Classes.TAlignment.taLeftJustify;
      va = $mod.TVerticalAlignment.taAlignTop;
      if ($mod.TTextFormats.tfCenter in TextFormat) {
        ha = pas.Classes.TAlignment.taCenter}
       else if ($mod.TTextFormats.tfRight in TextFormat) ha = pas.Classes.TAlignment.taRightJustify;
      if ($mod.TTextFormats.tfVerticalCenter in TextFormat) {
        va = $mod.TVerticalAlignment.taVerticalCenter}
       else if ($mod.TTextFormats.tfBottom in TextFormat) va = $mod.TVerticalAlignment.taAlignBottom;
      Result.$assign(this.TextRect$1($mod.TCanvasRectF.$clone(ARect),Text,$mod.TTextFormats.tfWordBreak in TextFormat,$mod.TTextFormats.tfCalcRect in TextFormat,ha,va));
      return Result;
    };
    this.TextWidth = function (Text) {
      var Result = 0.0;
      var f = "";
      var tm = null;
      if (this.FContext != null) {
        f = this.FFont.ToString();
        this.FContext.font = f;
        tm = this.FContext.measureText(Text);
        Result = tm.width;
      };
      return Result;
    };
    this.TextHeight = function (Text) {
      var Result = 0.0;
      Result = $mod.FontSizeToPx(this.FFont.FSize);
      return Result;
    };
    this.GetBase64Image = function () {
      var Result = "";
      Result = "";
      if (this.FElementCanvas != null) Result = this.FElementCanvas.toDataURL();
      return Result;
    };
    this.GetAsImage = function (AType) {
      var Result = "";
      Result = "";
      if (this.FElementCanvas != null) {
        var $tmp = AType;
        if ($tmp === $mod.TImageType.itBase64) {
          Result = this.FElementCanvas.toDataURL()}
         else if ($tmp === $mod.TImageType.itPNG) {
          Result = this.FElementCanvas.toDataURL("image/png")}
         else if ($tmp === $mod.TImageType.itJPEG) {
          Result = this.FElementCanvas.toDataURL("image/jpeg",1.0)}
         else if ($tmp === $mod.TImageType.itBMP) {
          Result = this.FElementCanvas.toDataURL("image/bmp")}
         else if ($tmp === $mod.TImageType.itGIF) {
          Result = this.FElementCanvas.toDataURL("image/gif")}
         else if ($tmp === $mod.TImageType.itSVG) Result = this.FElementCanvas.toDataURL("image/svg+xml");
      };
      return Result;
    };
    this.DownloadImage = function (AFileName, AType) {
      var s = "";
      var el = null;
      if (this.FElementCanvas != null) {
        s = this.GetAsImage(AType);
        el = document.createElement("a");
        el.setAttribute("href",s);
        if (AFileName !== "") el.setAttribute("download",AFileName);
        el.style.setProperty("display","none");
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
      };
    };
  });
  rtl.createClassExt(this,"TJSCSSStyleDeclarationEx",CSSStyleDeclaration,"",function () {
    this.$init = function () {
      this.filter = "";
    };
    this.$final = function () {
    };
  });
  rtl.createClassExt(this,"TJSHTMLElementEx",HTMLElement,"",function () {
    this.$init = function () {
    };
    this.$final = function () {
    };
  });
  rtl.createClassExt(this,"TJSCanvasRenderingContext2DEx",CanvasRenderingContext2D,"",function () {
    this.$init = function () {
    };
    this.$final = function () {
    };
  });
  rtl.createClass(this,"TURLPicture",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FOnChange = null;
      this.FFilename = "";
      this.FData = "";
      this.FOnDataChange = null;
      this.FWidth = 0;
      this.FHeight = 0;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      this.FOnDataChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetData = function (Value) {
      if (this.FData !== Value) {
        this.FData = Value;
        this.DataChanged();
      };
    };
    this.GetData = function () {
      var Result = "";
      Result = this.FData;
      return Result;
    };
    this.Changed = function () {
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.DataChanged = function () {
      if (this.FOnDataChange != null) this.FOnDataChange(this);
    };
    this.LoadFromFile = function (AFileName) {
      this.FFilename = AFileName;
      this.Changed();
    };
    this.Assign = function (Source) {
      if ($mod.TURLPicture.isPrototypeOf(Source)) {
        this.FFilename = rtl.as(Source,$mod.TURLPicture).FFilename;
        this.Changed();
      } else pas.Classes.TPersistent.Assign.apply(this,arguments);
    };
    var $r = this.$rtti;
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("Data",3,$mod.$rtti["TBinaryString"],"GetData","SetData");
  });
  this.$rtti.$RefToProcVar("TThumbnailCreatedProc",{procsig: rtl.newTIProcSig([["ADataURL",rtl.string]])});
  this.ColorToRGB = function (Color) {
    var Result = 0;
    Result = Color;
    return Result;
  };
  this.ColorToHex = function (c) {
    var Result = "";
    var s = "";
    s = c.toString(16);
    
        while (s.length < 6)
        {
          s = "0" + s;
        };
    Result = pas.System.Copy(s,5,2) + pas.System.Copy(s,3,2) + pas.System.Copy(s,1,2);
    return Result;
  };
  this.ColorToHTML = function (c) {
    var Result = "";
    if ((c & 0xFFFFFFFF) === -1) {
      Result = "#00000000"}
     else if ((c & 0xFF000000) !== 0) {
      Result = "#" + $mod.ColorToHex(c & 0xFFFFFF) + pas.SysUtils.IntToHex(Math.floor((c & 0xFF000000) / 16777216) & 0xFF,2);
    } else Result = "#" + $mod.ColorToHex(c);
    return Result;
  };
  this.HTMLToColor = function (s) {
    var Result = 0;
    if (pas.System.Pos("#",s) === 1) pas.System.Delete({get: function () {
        return s;
      }, set: function (v) {
        s = v;
      }},1,1);
    Result = $mod.HexToColor(s);
    return Result;
  };
  this.ColorToString = function (Color) {
    var Result = "";
    var $tmp = Color;
    if ($tmp === -1) {
      Result = "clNone"}
     else if ($tmp === 0) {
      Result = "clBlack"}
     else if ($tmp === 128) {
      Result = "clMaroon"}
     else if ($tmp === 32768) {
      Result = "clGreen"}
     else if ($tmp === 32896) {
      Result = "clOlive"}
     else if ($tmp === 8388608) {
      Result = "clNavy"}
     else if ($tmp === 8388736) {
      Result = "clPurple"}
     else if ($tmp === 8421376) {
      Result = "clTeal"}
     else if ($tmp === 8421504) {
      Result = "clGray"}
     else if ($tmp === 12632256) {
      Result = "clSilver"}
     else if ($tmp === 255) {
      Result = "clRed"}
     else if ($tmp === 65280) {
      Result = "clLime"}
     else if ($tmp === 65535) {
      Result = "clYellow"}
     else if ($tmp === 16711680) {
      Result = "clBlue"}
     else if ($tmp === 16711935) {
      Result = "clFuchsia"}
     else if ($tmp === 16776960) {
      Result = "clAqua"}
     else if ($tmp === 16777215) {
      Result = "clWhite"}
     else if ($tmp === 12698049) {
      Result = "clLtGray"}
     else if ($tmp === 8487297) {
      Result = "clDkGray"}
     else if ($tmp === 536870912) {
      Result = "clDefault"}
     else if ($tmp === 15790320) {
      Result = "clBtnFace"}
     else if ($tmp === 65793) {
      Result = "clWindowText"}
     else if ($tmp === 16711422) {
      Result = "clWindow"}
     else if ($tmp === 14120960) {
      Result = "clHighlight"}
     else if ($tmp === 197379) {
      Result = "clHighlightText"}
     else if ($tmp === 131586) {
      Result = "clInfoText"}
     else if ($tmp === 14811135) {
      Result = "clInfoBk"}
     else if ($tmp === 13743257) {
      Result = "clActiveCaption"}
     else if ($tmp === 14405055) {
      Result = "clInactiveCaption"}
     else if ($tmp === 13395456) {
      Result = "clHotLight"}
     else {
      Result = "$" + $impl.ColorToVCL(Color);
    };
    return Result;
  };
  this.StringToColor = function (S) {
    var Result = 0;
    var us = "";
    var clr = 0;
    us = pas.SysUtils.UpperCase(S);
    if (us === "CLNONE") {
      Result = -1}
     else if (us === "CLBLACK") {
      Result = 0}
     else if (us === "CLMAROON") {
      Result = 128}
     else if (us === "CLGREEN") {
      Result = 32768}
     else if (us === "CLOLIVE") {
      Result = 32896}
     else if (us === "CLNAVY") {
      Result = 8388608}
     else if (us === "CLPURPLE") {
      Result = 8388736}
     else if (us === "CLTEAL") {
      Result = 8421376}
     else if (us === "CLGRAY") {
      Result = 8421504}
     else if (us === "CLSILVER") {
      Result = 12632256}
     else if (us === "CLRED") {
      Result = 255}
     else if (us === "CLLIME") {
      Result = 65280}
     else if (us === "CLYELLOW") {
      Result = 65535}
     else if (us === "CLBLUE") {
      Result = 16711680}
     else if (us === "CLFUCHSIA") {
      Result = 16711935}
     else if (us === "CLAQUA") {
      Result = 16776960}
     else if (us === "CLWHITE") {
      Result = 16777215}
     else if (us === "CLLTGRAY") {
      Result = 12698049}
     else if (us === "CLDKGRAY") {
      Result = 8487297}
     else if (us === "CLDEFAULT") {
      Result = 536870912}
     else if (us === "CLBTNFACE") {
      Result = 15790320}
     else if (us === "CLWINDOWTEXT") {
      Result = 65793}
     else if (us === "CLWINDOW") {
      Result = 16711422}
     else if (us === "CLHIGHLIGHT") {
      Result = 14120960}
     else if (us === "CLHIGHLIGHTTEXT") {
      Result = 16777215}
     else if (us === "CLINFOTEXT") {
      Result = 131586}
     else if (us === "CLINFOBK") {
      Result = 14811135}
     else if (us === "CLACTIVECAPTION") {
      Result = 13743257}
     else if (us === "CLINACTIVECAPTION") {
      Result = 14405055}
     else if (us === "CLHOTLIGHT") {
      Result = 13395456}
     else {
      clr = $mod.HexToColor(us);
      Result = ((clr & 0xFF) << 16) | (clr & 0xFF00) | ((clr & 0xFF0000) >>> 16) | (clr & 0xFF000000);
    };
    return Result;
  };
  this.CharsetToIdent = function (ACharSet) {
    var Result = "";
    var $tmp = ACharSet;
    if ($tmp === 0) {
      Result = "ANSI_CHARSET"}
     else if ($tmp === 1) {
      Result = "DEFAULT_CHARSET"}
     else if ($tmp === 2) {
      Result = "SYMBOL_CHARSET"}
     else if ($tmp === 77) {
      Result = "MAC_CHARSET"}
     else if ($tmp === 128) {
      Result = "SHIFTJIS_CHARSET"}
     else if ($tmp === 129) {
      Result = "HANGEUL_CHARSET"}
     else if ($tmp === 130) {
      Result = "JOHAB_CHARSET"}
     else if ($tmp === 134) {
      Result = "GB2312_CHARSET"}
     else if ($tmp === 136) {
      Result = "CHINESEBIG5_CHARSET"}
     else if ($tmp === 161) {
      Result = "GREEK_CHARSET"}
     else if ($tmp === 162) {
      Result = "TURKISH_CHARSET"}
     else if ($tmp === 177) {
      Result = "HEBREW_CHARSET"}
     else if ($tmp === 178) {
      Result = "ARABIC_CHARSET"}
     else if ($tmp === 186) {
      Result = "BALTIC_CHARSET"}
     else if ($tmp === 204) {
      Result = "RUSSIAN_CHARSET"}
     else if ($tmp === 222) {
      Result = "THAI_CHARSET"}
     else if ($tmp === 238) {
      Result = "EASTEUROPE_CHARSET"}
     else if ($tmp === 255) Result = "OEM_CHARSET";
    return Result;
  };
  this.IdentToCharset = function (S) {
    var Result = 0;
    if (S === "ANSI_CHARSET") Result = 0;
    if (S === "DEFAULT_CHARSET") Result = 1;
    if (S === "SYMBOL_CHARSET") Result = 2;
    if (S === "MAC_CHARSET") Result = 77;
    if (S === "SHIFTJIS_CHARSET") Result = 128;
    if (S === "HANGEUL_CHARSET") Result = 129;
    if (S === "JOHAB_CHARSET") Result = 130;
    if (S === "GB2312_CHARSET") Result = 134;
    if (S === "CHINESEBIG5_CHARSET") Result = 136;
    if (S === "GREEK_CHARSET") Result = 161;
    if (S === "TURKISH_CHARSET") Result = 162;
    if (S === "HEBREW_CHARSET") Result = 177;
    if (S === "ARABIC_CHARSET") Result = 178;
    if (S === "BALTIC_CHARSET") Result = 186;
    if (S === "RUSSIAN_CHARSET") Result = 204;
    if (S === "THAI_CHARSET") Result = 222;
    if (S === "EASTEUROPE_CHARSET") Result = 238;
    if (S === "OEM_CHARSET") Result = 255;
    return Result;
  };
  this.FontSizeToHTML = function (sz) {
    var Result = "";
    Result = pas.SysUtils.FloatToStr(sz) + "px";
    Result = pas.SysUtils.StringReplace(Result,",",".",rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
    return Result;
  };
  this.HTMLChar = function (h) {
    var Result = 0;
    pas.System.Delete({get: function () {
        return h;
      }, set: function (v) {
        h = v;
      }},1,3);
    pas.System.Delete({get: function () {
        return h;
      }, set: function (v) {
        h = v;
      }},h.length - 1,1);
    Result = pas.SysUtils.StrToInt("0x" + h);
    return Result;
  };
  this.HexToColor = function (h) {
    var Result = 0;
    var s = "";
    var i = 0;
    s = "";
    for (var $l = 1, $end = h.length; $l <= $end; $l++) {
      i = $l;
      if (((h.charAt(i - 1) >= "0") && (h.charAt(i - 1) <= "9")) || ((h.charAt(i - 1) >= "A") && (h.charAt(i - 1) <= "F")) || ((h.charAt(i - 1) >= "a") && (h.charAt(i - 1) <= "f"))) s = s + h.charAt(i - 1);
    };
    if (s.length > 6) {
      s = "$" + pas.System.Copy(s,1,2) + pas.System.Copy(s,7,2) + pas.System.Copy(s,5,2) + pas.System.Copy(s,3,2)}
     else if (s.length === 3) {
      s = "$" + pas.System.Copy(s,3,1) + pas.System.Copy(s,3,1) + pas.System.Copy(s,2,1) + pas.System.Copy(s,2,1) + pas.System.Copy(s,1,1) + pas.System.Copy(s,1,1)}
     else s = "$" + pas.System.Copy(s,5,2) + pas.System.Copy(s,3,2) + pas.System.Copy(s,1,2);
    Result = pas.SysUtils.StrToInt64(s);
    return Result;
  };
  this.RGBToColor = function (argb) {
    var Result = 0;
    var r = "";
    var g = "";
    var b = "";
    var ri = 0;
    var gi = 0;
    var bi = 0;
    var e = 0;
    Result = -1;
    argb = pas.SysUtils.Trim(argb);
    if (pas.System.Pos("RGB",pas.SysUtils.UpperCase(argb)) > 0) {
      pas.System.Delete({get: function () {
          return argb;
        }, set: function (v) {
          argb = v;
        }},1,4);
      r = pas.System.Copy(argb,1,pas.System.Pos(",",argb) - 1);
      pas.System.Delete({get: function () {
          return argb;
        }, set: function (v) {
          argb = v;
        }},1,pas.System.Pos(",",argb) + 1);
      g = pas.System.Copy(argb,1,pas.System.Pos(",",argb) - 1);
      pas.System.Delete({get: function () {
          return argb;
        }, set: function (v) {
          argb = v;
        }},1,pas.System.Pos(",",argb) + 1);
      b = pas.System.Copy(argb,1,pas.System.Pos(")",argb) - 1);
      pas.System.val$3(r,{get: function () {
          return ri;
        }, set: function (v) {
          ri = v;
        }},{get: function () {
          return e;
        }, set: function (v) {
          e = v;
        }});
      pas.System.val$3(g,{get: function () {
          return gi;
        }, set: function (v) {
          gi = v;
        }},{get: function () {
          return e;
        }, set: function (v) {
          e = v;
        }});
      pas.System.val$3(b,{get: function () {
          return bi;
        }, set: function (v) {
          bi = v;
        }},{get: function () {
          return e;
        }, set: function (v) {
          e = v;
        }});
      Result = $mod.RGB(ri,gi,bi);
    };
    return Result;
  };
  this.FontSizeToPx = function (sz) {
    var Result = 0.0;
    Result = (sz * 96) / 72;
    return Result;
  };
  this.GetRValue = function (rgb) {
    var Result = 0;
    Result = rgb & 0xFF & 255;
    return Result;
  };
  this.GetGValue = function (rgb) {
    var Result = 0;
    Result = Math.floor(rgb / 256) & 0xFF & 255;
    return Result;
  };
  this.GetBValue = function (rgb) {
    var Result = 0;
    Result = Math.floor(rgb / 65536) & 0xFF & 255;
    return Result;
  };
  this.CreateCanvasRectF = function (Left, Top, Right, Bottom) {
    var Result = $mod.TCanvasRectF.$new();
    Result.Left = Left;
    Result.Top = Top;
    Result.Right = Right;
    Result.Bottom = Bottom;
    return Result;
  };
  this.CreateCanvasPointF = function (X, Y) {
    var Result = $mod.TCanvasPointF.$new();
    Result.X = X;
    Result.Y = Y;
    return Result;
  };
  this.CreateCanvasSizeF = function (cx, cy) {
    var Result = $mod.TCanvasSizeF.$new();
    Result.cx = cx;
    Result.cy = cy;
    return Result;
  };
  this.CanvasRectF = function (Left, Top, Right, Bottom) {
    var Result = $mod.TCanvasRectF.$new();
    Result.$assign($mod.CreateCanvasRectF(Left,Top,Right,Bottom));
    return Result;
  };
  this.CanvasPointF = function (X, Y) {
    var Result = $mod.TCanvasPointF.$new();
    Result.$assign($mod.CreateCanvasPointF(X,Y));
    return Result;
  };
  this.CanvasSizeF = function (cx, cy) {
    var Result = $mod.TCanvasSizeF.$new();
    Result.$assign($mod.CreateCanvasSizeF(cx,cy));
    return Result;
  };
  this.RGB = function (r, g, b) {
    var Result = 0;
    Result = r | (g << 8) | (b << 16);
    return Result;
  };
  this.RGBA = function (r, g, b, a) {
    var Result = 0;
    Result = r | (g << 8) | (b << 16) | (a << 24);
    return Result;
  };
  this.CSSFont = function (Font) {
    var Result = "";
    var res = "";
    var fs = "";
    res = "font-family:" + Font.FName + ";";
    res = res + "font-style: normal;";
    if ($mod.TFontStyle.fsBold in Font.FStyle) res = res + "font-weight: bold;";
    if ($mod.TFontStyle.fsItalic in Font.FStyle) res = res + "font-style: italic;";
    fs = "";
    if ($mod.TFontStyle.fsUnderline in Font.FStyle) fs = fs + " underline";
    if ($mod.TFontStyle.fsStrikeOut in Font.FStyle) fs = fs + " line-through";
    if (fs !== "") res = res + "text-decoration:" + fs + ";";
    res = res + "font-size:" + pas.SysUtils.IntToStr(Font.FSize) + "pt;";
    Result = res;
    return Result;
  };
  this.CreateThumbnail = function (ADataURL, AWidth, AHeight, UseAspectRatio, ThumbnailReady) {
    var LImg = null;
    if ((AWidth <= 0) || (AHeight <= 0)) return;
    LImg = document.createElement("IMG");
    LImg.onload = function() {
    
          var w = LImg.width;
          var h = LImg.height;
    
          var neww = AWidth;
          var newh = AHeight;
    
          if (UseAspectRatio) {
            if ((w/neww) > (h/newh))
            {
              newh = h / (w/neww);
            }
            else
            {
              neww = w / (h/newh);
            }
          }
          var LCanvas = document.createElement('CANVAS');
          var ctx = LCanvas.getContext("2d");
          ctx.drawImage(LImg, 0, 0, neww, newh);
          var res = LCanvas.toDataURL("image/png");
          ThumbnailReady(res);
        };
    LImg.setAttribute("src",ADataURL);
  };
  $mod.$implcode = function () {
    rtl.createClass($impl,"TGraphicCache",pas.System.TObject,function () {
      this.$init = function () {
        pas.System.TObject.$init.call(this);
        this.FImage = null;
        this.FID = "";
      };
      this.$final = function () {
        this.FImage = undefined;
        pas.System.TObject.$final.call(this);
      };
      this.Create$1 = function (AImage, AID) {
        this.FImage = AImage;
        this.FID = AID;
        return this;
      };
    });
    rtl.createClass($impl,"TGraphicCacheList",pas.contnrs.TObjectList,function () {
      this.Find = function (AID, FImage) {
        var Result = false;
        var I = 0;
        var it = null;
        Result = false;
        for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          it = rtl.as(this.GetItem(I),$impl.TGraphicCache);
          if ((it.FID === AID) && (it.FImage != null)) {
            FImage.set(it.FImage);
            Result = true;
            break;
          };
        };
        return Result;
      };
      this.Exists = function (AID) {
        var Result = false;
        var I = 0;
        var it = null;
        Result = false;
        for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
          I = $l;
          it = rtl.as(this.GetItem(I),$impl.TGraphicCache);
          if ((it.FID === AID) && (it.FImage != null)) {
            Result = true;
            break;
          };
        };
        return Result;
      };
    });
    $impl.FCache = null;
    $impl.FQueue = null;
    $impl.FCacheCount = 0;
    $impl.MatrixIdentity = function () {
      var Result = $mod.TMatrix.$new();
      Result.m11 = 1;
      Result.m12 = 0;
      Result.m13 = 0;
      Result.m21 = 0;
      Result.m22 = 1;
      Result.m23 = 0;
      Result.m31 = 0;
      Result.m32 = 0;
      Result.m33 = 1;
      return Result;
    };
    $impl.GetPixelRatio = function (ACanvas) {
      var Result = 0.0;
      var res = 0.0;
      var ca = null;
      ca = ACanvas;
      var ctx = ca.FContext,
          dpr = window.devicePixelRatio || 1,
          bsr = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;
      res = dpr / bsr;
      Result = res;
      return Result;
    };
    $impl.MatrixCreateScaling = function (AScaleX, AScaleY) {
      var Result = $mod.TMatrix.$new();
      Result.$assign($impl.MatrixIdentity());
      Result.m11 = AScaleX;
      Result.m22 = AScaleY;
      return Result;
    };
    $impl.MatrixMultiply = function (AMatrix1, AMatrix2) {
      var Result = $mod.TMatrix.$new();
      Result.m11 = (AMatrix1.m11 * AMatrix2.m11) + (AMatrix1.m12 * AMatrix2.m21) + (AMatrix1.m13 * AMatrix2.m31);
      Result.m12 = (AMatrix1.m11 * AMatrix2.m12) + (AMatrix1.m12 * AMatrix2.m22) + (AMatrix1.m13 * AMatrix2.m32);
      Result.m13 = (AMatrix1.m11 * AMatrix2.m13) + (AMatrix1.m12 * AMatrix2.m23) + (AMatrix1.m13 * AMatrix2.m33);
      Result.m21 = (AMatrix1.m21 * AMatrix2.m11) + (AMatrix1.m22 * AMatrix2.m21) + (AMatrix1.m23 * AMatrix2.m31);
      Result.m22 = (AMatrix1.m21 * AMatrix2.m12) + (AMatrix1.m22 * AMatrix2.m22) + (AMatrix1.m23 * AMatrix2.m32);
      Result.m23 = (AMatrix1.m21 * AMatrix2.m13) + (AMatrix1.m22 * AMatrix2.m23) + (AMatrix1.m23 * AMatrix2.m33);
      Result.m31 = (AMatrix1.m31 * AMatrix2.m11) + (AMatrix1.m32 * AMatrix2.m21) + (AMatrix1.m33 * AMatrix2.m31);
      Result.m32 = (AMatrix1.m31 * AMatrix2.m12) + (AMatrix1.m32 * AMatrix2.m22) + (AMatrix1.m33 * AMatrix2.m32);
      Result.m33 = (AMatrix1.m31 * AMatrix2.m13) + (AMatrix1.m32 * AMatrix2.m23) + (AMatrix1.m33 * AMatrix2.m33);
      return Result;
    };
    $impl.ColorToVCL = function (c) {
      var Result = "";
      var s = "";
      s = c.toString(16);
      while (s.length < 6)
      {
        s = "0" + s;
      };
      Result = pas.System.Copy(s,1,2) + pas.System.Copy(s,3,2) + pas.System.Copy(s,5,2);
      return Result;
    };
    $impl.AngleOfPoints = function (x1, y1, x2, y2) {
      var Result = 0.0;
      var part1 = 0.0;
      var part2 = 0.0;
      var angle = 0.0;
      if ((x1 === x2) && (y1 === y2)) {
        Result = 0.0;
        return Result;
      };
      part1 = Math.abs(y2 - y1);
      if (part1 === 0) {
        part1 = 0.0000001;
        y1 = y1 + 0.0000001;
      };
      part2 = Math.abs(x2 - x1);
      if (part2 === 0) {
        part2 = 0.0000001;
        x1 = x1 + 0.0000001;
      };
      angle = Math.atan(part1 / part2);
      if ((x1 > x2) && (y1 < y2)) angle = Math.PI - angle;
      if ((x1 > x2) && (y1 > y2)) angle = angle + Math.PI;
      if ((x1 < x2) && (y1 > y2)) angle = (2 * Math.PI) - angle;
      while (angle >= (2 * Math.PI)) angle = angle - (2 * Math.PI);
      while (angle < 0) angle = angle + (2 * Math.PI);
      Result = angle;
      return Result;
    };
  };
  $mod.$init = function () {
    $impl.FCache = $impl.TGraphicCacheList.$create("Create$2");
    $impl.FQueue = pas.Classes.TStringList.$create("Create$1");
  };
},["WEBLib.Forms","WEBLib.WebTools","Math","SysUtils","contnrs"]);
//# sourceMappingURL=WEBLib.Graphics.js.map
