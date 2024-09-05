rtl.module("WEBLib.Lang",["System"],function () {
  "use strict";
  var $mod = this;
  this.TUILanguage = {"0": "lNone", lNone: 0, "1": "lAfar", lAfar: 1, "2": "lAbkhazian", lAbkhazian: 2, "3": "lAvestan", lAvestan: 3, "4": "lAfrikaans", lAfrikaans: 4, "5": "lAkan", lAkan: 5, "6": "lAmharic", lAmharic: 6, "7": "lAragonese", lAragonese: 7, "8": "lArabic", lArabic: 8, "9": "lAssamese", lAssamese: 9, "10": "lAvaric", lAvaric: 10, "11": "lAymara", lAymara: 11, "12": "lAzerbaijani", lAzerbaijani: 12, "13": "lBashkir", lBashkir: 13, "14": "lBelarusian", lBelarusian: 14, "15": "lBulgarian", lBulgarian: 15, "16": "lBihari", lBihari: 16, "17": "lBislama", lBislama: 17, "18": "lBambara", lBambara: 18, "19": "lBengali", lBengali: 19, "20": "lTibetan", lTibetan: 20, "21": "lBreton", lBreton: 21, "22": "lBosnian", lBosnian: 22, "23": "lCatalan", lCatalan: 23, "24": "lChechen", lChechen: 24, "25": "lChamorro", lChamorro: 25, "26": "lCorsican", lCorsican: 26, "27": "lCree", lCree: 27, "28": "lCzech", lCzech: 28, "29": "lOldSlavic", lOldSlavic: 29, "30": "lChuvash", lChuvash: 30, "31": "lWelsh", lWelsh: 31, "32": "lDanish", lDanish: 32, "33": "lGerman", lGerman: 33, "34": "lDivehi", lDivehi: 34, "35": "lDzongkha", lDzongkha: 35, "36": "lEwe", lEwe: 36, "37": "lEnglish", lEnglish: 37, "38": "lEsperanto", lEsperanto: 38, "39": "lSpanish", lSpanish: 39, "40": "lEstonian", lEstonian: 40, "41": "lBasque", lBasque: 41, "42": "lPersian", lPersian: 42, "43": "lFulah", lFulah: 43, "44": "lFinnish", lFinnish: 44, "45": "lFijian", lFijian: 45, "46": "lFaroese", lFaroese: 46, "47": "lFrench", lFrench: 47, "48": "lWesternFrisian", lWesternFrisian: 48, "49": "lIrish", lIrish: 49, "50": "lGaelic", lGaelic: 50, "51": "lGalician", lGalician: 51, "52": "lGuarani", lGuarani: 52, "53": "lGujarati", lGujarati: 53, "54": "lManx", lManx: 54, "55": "lHausa", lHausa: 55, "56": "lHebrew", lHebrew: 56, "57": "lHindi", lHindi: 57, "58": "lHiriMotu", lHiriMotu: 58, "59": "lCroatian", lCroatian: 59, "60": "lHaitian", lHaitian: 60, "61": "lHungarian", lHungarian: 61, "62": "lArmenian", lArmenian: 62, "63": "lHerero", lHerero: 63, "64": "lInterlingua", lInterlingua: 64, "65": "lIndonesian", lIndonesian: 65, "66": "lInterlingue", lInterlingue: 66, "67": "lIgbo", lIgbo: 67, "68": "lSichuanYi", lSichuanYi: 68, "69": "lInupiaq", lInupiaq: 69, "70": "lIdo", lIdo: 70, "71": "lIcelandic", lIcelandic: 71, "72": "lItalian", lItalian: 72, "73": "lInuktitut", lInuktitut: 73, "74": "lJapanese", lJapanese: 74, "75": "lJavanese", lJavanese: 75, "76": "lGeorgian", lGeorgian: 76, "77": "lKongo", lKongo: 77, "78": "lKikuyu", lKikuyu: 78, "79": "lKuanyama", lKuanyama: 79, "80": "lKazakh", lKazakh: 80, "81": "lKalaallisut", lKalaallisut: 81, "82": "lCentralKhmer", lCentralKhmer: 82, "83": "lKannada", lKannada: 83, "84": "lKorean", lKorean: 84, "85": "lKanuri", lKanuri: 85, "86": "lKashmiri", lKashmiri: 86, "87": "lKurdish", lKurdish: 87, "88": "lKomi", lKomi: 88, "89": "lCornish", lCornish: 89, "90": "lKirghiz", lKirghiz: 90, "91": "lLatin", lLatin: 91, "92": "lLuxembourgish", lLuxembourgish: 92, "93": "lGanda", lGanda: 93, "94": "lLimburgan", lLimburgan: 94, "95": "lLingala", lLingala: 95, "96": "lLao", lLao: 96, "97": "lLithuanian", lLithuanian: 97, "98": "lLubaKatanga", lLubaKatanga: 98, "99": "lLatvian", lLatvian: 99, "100": "lMalagasy", lMalagasy: 100, "101": "lMarshallese", lMarshallese: 101, "102": "lMaori", lMaori: 102, "103": "lMacedonian", lMacedonian: 103, "104": "lMalayalam", lMalayalam: 104, "105": "lMongolian", lMongolian: 105, "106": "lMarathi", lMarathi: 106, "107": "lMalay", lMalay: 107, "108": "lMaltese", lMaltese: 108, "109": "lBurmese", lBurmese: 109, "110": "lNauru", lNauru: 110, "111": "lNdebele", lNdebele: 111, "112": "lNepali", lNepali: 112, "113": "lNdonga", lNdonga: 113, "114": "lDutch", lDutch: 114, "115": "lNorwegian", lNorwegian: 115, "116": "lNavajo", lNavajo: 116, "117": "lChichewa", lChichewa: 117, "118": "lOccitan", lOccitan: 118, "119": "lOjibwa", lOjibwa: 119, "120": "lOromo", lOromo: 120, "121": "lOriya", lOriya: 121, "122": "lOssetian", lOssetian: 122, "123": "lPanjabi", lPanjabi: 123, "124": "lPali", lPali: 124, "125": "lPolish", lPolish: 125, "126": "lPushto", lPushto: 126, "127": "lPortuguese", lPortuguese: 127, "128": "lQuechua", lQuechua: 128, "129": "lRomansh", lRomansh: 129, "130": "lRundi", lRundi: 130, "131": "lRomanian", lRomanian: 131, "132": "lRussian", lRussian: 132, "133": "lKinyarwanda", lKinyarwanda: 133, "134": "lSanskrit", lSanskrit: 134, "135": "lSardinian", lSardinian: 135, "136": "lSindhi", lSindhi: 136, "137": "lNorthernSami", lNorthernSami: 137, "138": "lSango", lSango: 138, "139": "lSinhala", lSinhala: 139, "140": "lSlovak", lSlovak: 140, "141": "lSlovenian", lSlovenian: 141, "142": "lSamoan", lSamoan: 142, "143": "lShona", lShona: 143, "144": "lSomali", lSomali: 144, "145": "lAlbanian", lAlbanian: 145, "146": "lSerbian", lSerbian: 146, "147": "lSwati", lSwati: 147, "148": "lSotho", lSotho: 148, "149": "lSundanese", lSundanese: 149, "150": "lSwedish", lSwedish: 150, "151": "lSwahili", lSwahili: 151, "152": "lTamil", lTamil: 152, "153": "lTelugu", lTelugu: 153, "154": "lTajik", lTajik: 154, "155": "lThai", lThai: 155, "156": "lTigrinya", lTigrinya: 156, "157": "lTurkmen", lTurkmen: 157, "158": "lTagalog", lTagalog: 158, "159": "lTswana", lTswana: 159, "160": "lTonga", lTonga: 160, "161": "lTurkish", lTurkish: 161, "162": "lTsonga", lTsonga: 162, "163": "lTatar", lTatar: 163, "164": "lTwi", lTwi: 164, "165": "lTahitian", lTahitian: 165, "166": "lUighur", lUighur: 166, "167": "lUkrainian", lUkrainian: 167, "168": "lUrdu", lUrdu: 168, "169": "lUzbek", lUzbek: 169, "170": "lVenda", lVenda: 170, "171": "lVietnamese", lVietnamese: 171, "172": "lWalloon", lWalloon: 172, "173": "lWolof", lWolof: 173, "174": "lXhosa", lXhosa: 174, "175": "lYiddish", lYiddish: 175, "176": "lYoruba", lYoruba: 176, "177": "lZhuang", lZhuang: 177, "178": "lChinese", lChinese: 178, "179": "lZulu", lZulu: 179};
  this.$rtti.$Enum("TUILanguage",{minvalue: 0, maxvalue: 179, ordtype: 1, enumtype: this.TUILanguage});
  this.GetLanguageISO639_1Code = function (ALang) {
    var Result = "";
    var $tmp = ALang;
    if ($tmp === $mod.TUILanguage.lNone) {
      Result = ""}
     else if ($tmp === $mod.TUILanguage.lAfar) {
      Result = "aa"}
     else if ($tmp === $mod.TUILanguage.lAbkhazian) {
      Result = "ab"}
     else if ($tmp === $mod.TUILanguage.lAvestan) {
      Result = "ae"}
     else if ($tmp === $mod.TUILanguage.lAfrikaans) {
      Result = "af"}
     else if ($tmp === $mod.TUILanguage.lAkan) {
      Result = "ak"}
     else if ($tmp === $mod.TUILanguage.lAmharic) {
      Result = "am"}
     else if ($tmp === $mod.TUILanguage.lAragonese) {
      Result = "an"}
     else if ($tmp === $mod.TUILanguage.lArabic) {
      Result = "ar"}
     else if ($tmp === $mod.TUILanguage.lAssamese) {
      Result = "as"}
     else if ($tmp === $mod.TUILanguage.lAvaric) {
      Result = "av"}
     else if ($tmp === $mod.TUILanguage.lAymara) {
      Result = "ay"}
     else if ($tmp === $mod.TUILanguage.lAzerbaijani) {
      Result = "az"}
     else if ($tmp === $mod.TUILanguage.lBashkir) {
      Result = "ba"}
     else if ($tmp === $mod.TUILanguage.lBelarusian) {
      Result = "be"}
     else if ($tmp === $mod.TUILanguage.lBulgarian) {
      Result = "bg"}
     else if ($tmp === $mod.TUILanguage.lBihari) {
      Result = "bh"}
     else if ($tmp === $mod.TUILanguage.lBislama) {
      Result = "bi"}
     else if ($tmp === $mod.TUILanguage.lBambara) {
      Result = "bm"}
     else if ($tmp === $mod.TUILanguage.lBengali) {
      Result = "bn"}
     else if ($tmp === $mod.TUILanguage.lTibetan) {
      Result = "bo"}
     else if ($tmp === $mod.TUILanguage.lBreton) {
      Result = "br"}
     else if ($tmp === $mod.TUILanguage.lBosnian) {
      Result = "bd"}
     else if ($tmp === $mod.TUILanguage.lCatalan) {
      Result = "ca"}
     else if ($tmp === $mod.TUILanguage.lChechen) {
      Result = "ce"}
     else if ($tmp === $mod.TUILanguage.lChamorro) {
      Result = "ch"}
     else if ($tmp === $mod.TUILanguage.lCorsican) {
      Result = "co"}
     else if ($tmp === $mod.TUILanguage.lCree) {
      Result = "cr"}
     else if ($tmp === $mod.TUILanguage.lCzech) {
      Result = "cs"}
     else if ($tmp === $mod.TUILanguage.lOldSlavic) {
      Result = "cu"}
     else if ($tmp === $mod.TUILanguage.lChuvash) {
      Result = "cv"}
     else if ($tmp === $mod.TUILanguage.lWelsh) {
      Result = "cy"}
     else if ($tmp === $mod.TUILanguage.lDanish) {
      Result = "da"}
     else if ($tmp === $mod.TUILanguage.lGerman) {
      Result = "de"}
     else if ($tmp === $mod.TUILanguage.lDivehi) {
      Result = "dv"}
     else if ($tmp === $mod.TUILanguage.lDzongkha) {
      Result = "dz"}
     else if ($tmp === $mod.TUILanguage.lEwe) {
      Result = "ee"}
     else if ($tmp === $mod.TUILanguage.lEnglish) {
      Result = "en"}
     else if ($tmp === $mod.TUILanguage.lEsperanto) {
      Result = "eo"}
     else if ($tmp === $mod.TUILanguage.lSpanish) {
      Result = "es"}
     else if ($tmp === $mod.TUILanguage.lEstonian) {
      Result = "et"}
     else if ($tmp === $mod.TUILanguage.lBasque) {
      Result = "eu"}
     else if ($tmp === $mod.TUILanguage.lPersian) {
      Result = "fa"}
     else if ($tmp === $mod.TUILanguage.lFulah) {
      Result = "ff"}
     else if ($tmp === $mod.TUILanguage.lFinnish) {
      Result = "fi"}
     else if ($tmp === $mod.TUILanguage.lFijian) {
      Result = "fj"}
     else if ($tmp === $mod.TUILanguage.lFaroese) {
      Result = "fo"}
     else if ($tmp === $mod.TUILanguage.lFrench) {
      Result = "fr"}
     else if ($tmp === $mod.TUILanguage.lWesternFrisian) {
      Result = "fy"}
     else if ($tmp === $mod.TUILanguage.lIrish) {
      Result = "ga"}
     else if ($tmp === $mod.TUILanguage.lGaelic) {
      Result = "gd"}
     else if ($tmp === $mod.TUILanguage.lGalician) {
      Result = "gl"}
     else if ($tmp === $mod.TUILanguage.lGuarani) {
      Result = "gn"}
     else if ($tmp === $mod.TUILanguage.lGujarati) {
      Result = "gu"}
     else if ($tmp === $mod.TUILanguage.lManx) {
      Result = "gv"}
     else if ($tmp === $mod.TUILanguage.lHausa) {
      Result = "ha"}
     else if ($tmp === $mod.TUILanguage.lHebrew) {
      Result = "he"}
     else if ($tmp === $mod.TUILanguage.lHindi) {
      Result = "hi"}
     else if ($tmp === $mod.TUILanguage.lHiriMotu) {
      Result = "ho"}
     else if ($tmp === $mod.TUILanguage.lCroatian) {
      Result = "hr"}
     else if ($tmp === $mod.TUILanguage.lHaitian) {
      Result = "ht"}
     else if ($tmp === $mod.TUILanguage.lHungarian) {
      Result = "hu"}
     else if ($tmp === $mod.TUILanguage.lArmenian) {
      Result = "hy"}
     else if ($tmp === $mod.TUILanguage.lHerero) {
      Result = "hz"}
     else if ($tmp === $mod.TUILanguage.lInterlingua) {
      Result = "ia"}
     else if ($tmp === $mod.TUILanguage.lIndonesian) {
      Result = "id"}
     else if ($tmp === $mod.TUILanguage.lInterlingue) {
      Result = "ie"}
     else if ($tmp === $mod.TUILanguage.lIgbo) {
      Result = "ig"}
     else if ($tmp === $mod.TUILanguage.lSichuanYi) {
      Result = "ii"}
     else if ($tmp === $mod.TUILanguage.lInupiaq) {
      Result = "ik"}
     else if ($tmp === $mod.TUILanguage.lIdo) {
      Result = "id"}
     else if ($tmp === $mod.TUILanguage.lIcelandic) {
      Result = "is"}
     else if ($tmp === $mod.TUILanguage.lItalian) {
      Result = "it"}
     else if ($tmp === $mod.TUILanguage.lInuktitut) {
      Result = "iu"}
     else if ($tmp === $mod.TUILanguage.lJapanese) {
      Result = "ja"}
     else if ($tmp === $mod.TUILanguage.lJavanese) {
      Result = "jv"}
     else if ($tmp === $mod.TUILanguage.lGeorgian) {
      Result = "ka"}
     else if ($tmp === $mod.TUILanguage.lKongo) {
      Result = "kg"}
     else if ($tmp === $mod.TUILanguage.lKikuyu) {
      Result = "ki"}
     else if ($tmp === $mod.TUILanguage.lKuanyama) {
      Result = "kj"}
     else if ($tmp === $mod.TUILanguage.lKazakh) {
      Result = "kk"}
     else if ($tmp === $mod.TUILanguage.lKalaallisut) {
      Result = "kl"}
     else if ($tmp === $mod.TUILanguage.lCentralKhmer) {
      Result = "km"}
     else if ($tmp === $mod.TUILanguage.lKannada) {
      Result = "kn"}
     else if ($tmp === $mod.TUILanguage.lKorean) {
      Result = "ko"}
     else if ($tmp === $mod.TUILanguage.lKanuri) {
      Result = "kr"}
     else if ($tmp === $mod.TUILanguage.lKashmiri) {
      Result = "ks"}
     else if ($tmp === $mod.TUILanguage.lKurdish) {
      Result = "ku"}
     else if ($tmp === $mod.TUILanguage.lKomi) {
      Result = "kv"}
     else if ($tmp === $mod.TUILanguage.lCornish) {
      Result = "kw"}
     else if ($tmp === $mod.TUILanguage.lKirghiz) {
      Result = "ky"}
     else if ($tmp === $mod.TUILanguage.lLatin) {
      Result = "la"}
     else if ($tmp === $mod.TUILanguage.lLuxembourgish) {
      Result = "lb"}
     else if ($tmp === $mod.TUILanguage.lGanda) {
      Result = "lg"}
     else if ($tmp === $mod.TUILanguage.lLimburgan) {
      Result = "li"}
     else if ($tmp === $mod.TUILanguage.lLingala) {
      Result = "ln"}
     else if ($tmp === $mod.TUILanguage.lLao) {
      Result = "lo"}
     else if ($tmp === $mod.TUILanguage.lLithuanian) {
      Result = "lt"}
     else if ($tmp === $mod.TUILanguage.lLubaKatanga) {
      Result = "lu"}
     else if ($tmp === $mod.TUILanguage.lLatvian) {
      Result = "lv"}
     else if ($tmp === $mod.TUILanguage.lMalagasy) {
      Result = "mg"}
     else if ($tmp === $mod.TUILanguage.lMarshallese) {
      Result = "mh"}
     else if ($tmp === $mod.TUILanguage.lMaori) {
      Result = "mi"}
     else if ($tmp === $mod.TUILanguage.lMacedonian) {
      Result = "mk"}
     else if ($tmp === $mod.TUILanguage.lMalayalam) {
      Result = "ml"}
     else if ($tmp === $mod.TUILanguage.lMongolian) {
      Result = "mn"}
     else if ($tmp === $mod.TUILanguage.lMarathi) {
      Result = "mr"}
     else if ($tmp === $mod.TUILanguage.lMalay) {
      Result = "ms"}
     else if ($tmp === $mod.TUILanguage.lMaltese) {
      Result = "mt"}
     else if ($tmp === $mod.TUILanguage.lBurmese) {
      Result = "my"}
     else if ($tmp === $mod.TUILanguage.lNauru) {
      Result = "na"}
     else if ($tmp === $mod.TUILanguage.lNdebele) {
      Result = "nb"}
     else if ($tmp === $mod.TUILanguage.lNepali) {
      Result = "nd"}
     else if ($tmp === $mod.TUILanguage.lNdonga) {
      Result = "ng"}
     else if ($tmp === $mod.TUILanguage.lDutch) {
      Result = "nl"}
     else if ($tmp === $mod.TUILanguage.lNorwegian) {
      Result = "no"}
     else if ($tmp === $mod.TUILanguage.lNavajo) {
      Result = "nv"}
     else if ($tmp === $mod.TUILanguage.lChichewa) {
      Result = "ny"}
     else if ($tmp === $mod.TUILanguage.lOccitan) {
      Result = "oc"}
     else if ($tmp === $mod.TUILanguage.lOjibwa) {
      Result = "oj"}
     else if ($tmp === $mod.TUILanguage.lOromo) {
      Result = "om"}
     else if ($tmp === $mod.TUILanguage.lOriya) {
      Result = "or"}
     else if ($tmp === $mod.TUILanguage.lOssetian) {
      Result = "os"}
     else if ($tmp === $mod.TUILanguage.lPanjabi) {
      Result = "pa"}
     else if ($tmp === $mod.TUILanguage.lPali) {
      Result = "pi"}
     else if ($tmp === $mod.TUILanguage.lPolish) {
      Result = "pl"}
     else if ($tmp === $mod.TUILanguage.lPushto) {
      Result = "ps"}
     else if ($tmp === $mod.TUILanguage.lPortuguese) {
      Result = "pt"}
     else if ($tmp === $mod.TUILanguage.lQuechua) {
      Result = "qu"}
     else if ($tmp === $mod.TUILanguage.lRomansh) {
      Result = "rm"}
     else if ($tmp === $mod.TUILanguage.lRundi) {
      Result = "rn"}
     else if ($tmp === $mod.TUILanguage.lRomanian) {
      Result = "ro"}
     else if ($tmp === $mod.TUILanguage.lRussian) {
      Result = "ru"}
     else if ($tmp === $mod.TUILanguage.lKinyarwanda) {
      Result = "rw"}
     else if ($tmp === $mod.TUILanguage.lSanskrit) {
      Result = "sa"}
     else if ($tmp === $mod.TUILanguage.lSardinian) {
      Result = "sc"}
     else if ($tmp === $mod.TUILanguage.lSindhi) {
      Result = "sd"}
     else if ($tmp === $mod.TUILanguage.lNorthernSami) {
      Result = "se"}
     else if ($tmp === $mod.TUILanguage.lSango) {
      Result = "sg"}
     else if ($tmp === $mod.TUILanguage.lSinhala) {
      Result = "si"}
     else if ($tmp === $mod.TUILanguage.lSlovak) {
      Result = "sk"}
     else if ($tmp === $mod.TUILanguage.lSlovenian) {
      Result = "sl"}
     else if ($tmp === $mod.TUILanguage.lSamoan) {
      Result = "sm"}
     else if ($tmp === $mod.TUILanguage.lShona) {
      Result = "sn"}
     else if ($tmp === $mod.TUILanguage.lSomali) {
      Result = "so"}
     else if ($tmp === $mod.TUILanguage.lAlbanian) {
      Result = "sq"}
     else if ($tmp === $mod.TUILanguage.lSerbian) {
      Result = "sr"}
     else if ($tmp === $mod.TUILanguage.lSwati) {
      Result = "ss"}
     else if ($tmp === $mod.TUILanguage.lSotho) {
      Result = "st"}
     else if ($tmp === $mod.TUILanguage.lSundanese) {
      Result = "su"}
     else if ($tmp === $mod.TUILanguage.lSwedish) {
      Result = "sv"}
     else if ($tmp === $mod.TUILanguage.lSwahili) {
      Result = "sw"}
     else if ($tmp === $mod.TUILanguage.lTamil) {
      Result = "ta"}
     else if ($tmp === $mod.TUILanguage.lTelugu) {
      Result = "te"}
     else if ($tmp === $mod.TUILanguage.lTajik) {
      Result = "tg"}
     else if ($tmp === $mod.TUILanguage.lThai) {
      Result = "th"}
     else if ($tmp === $mod.TUILanguage.lTigrinya) {
      Result = "ti"}
     else if ($tmp === $mod.TUILanguage.lTurkmen) {
      Result = "tk"}
     else if ($tmp === $mod.TUILanguage.lTagalog) {
      Result = "tl"}
     else if ($tmp === $mod.TUILanguage.lTswana) {
      Result = "tn"}
     else if ($tmp === $mod.TUILanguage.lTonga) {
      Result = "to"}
     else if ($tmp === $mod.TUILanguage.lTurkish) {
      Result = "tr"}
     else if ($tmp === $mod.TUILanguage.lTsonga) {
      Result = "ts"}
     else if ($tmp === $mod.TUILanguage.lTatar) {
      Result = "tt"}
     else if ($tmp === $mod.TUILanguage.lTwi) {
      Result = "tw"}
     else if ($tmp === $mod.TUILanguage.lTahitian) {
      Result = "ty"}
     else if ($tmp === $mod.TUILanguage.lUighur) {
      Result = "ug"}
     else if ($tmp === $mod.TUILanguage.lUkrainian) {
      Result = "uk"}
     else if ($tmp === $mod.TUILanguage.lUrdu) {
      Result = "ur"}
     else if ($tmp === $mod.TUILanguage.lUzbek) {
      Result = "uz"}
     else if ($tmp === $mod.TUILanguage.lVenda) {
      Result = "ve"}
     else if ($tmp === $mod.TUILanguage.lVietnamese) {
      Result = "vi"}
     else if ($tmp === $mod.TUILanguage.lWalloon) {
      Result = "wa"}
     else if ($tmp === $mod.TUILanguage.lWolof) {
      Result = "wo"}
     else if ($tmp === $mod.TUILanguage.lXhosa) {
      Result = "xh"}
     else if ($tmp === $mod.TUILanguage.lYiddish) {
      Result = "yi"}
     else if ($tmp === $mod.TUILanguage.lYoruba) {
      Result = "yo"}
     else if ($tmp === $mod.TUILanguage.lZhuang) {
      Result = "za"}
     else if ($tmp === $mod.TUILanguage.lChinese) {
      Result = "zh"}
     else if ($tmp === $mod.TUILanguage.lZulu) Result = "zu";
    return Result;
  };
});
//# sourceMappingURL=WEBLib.Lang.js.map
