rtl.module("WEBLib.Utils",["System","Types","Web","SysUtils","Math","Classes","JS"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.DayMonday = 1;
  this.DayTuesday = 2;
  this.DayWednesday = 3;
  this.DayThursday = 4;
  this.DayFriday = 5;
  this.DaySaturday = 6;
  this.DaySunday = 7;
  this.MonthJanuary = 1;
  this.MonthFebruary = 2;
  this.MonthMarch = 3;
  this.MonthApril = 4;
  this.MonthMay = 5;
  this.MonthJune = 6;
  this.MonthJuly = 7;
  this.MonthAugust = 8;
  this.MonthSeptember = 9;
  this.MonthOctober = 10;
  this.MonthNovember = 11;
  this.MonthDecember = 12;
  this.$rtti.$Class("TInterfaceList");
  rtl.createClass(this,"EEncodingError",pas.SysUtils.Exception,function () {
  });
  rtl.createClass(this,"EStringStreamError",pas.Classes.EStreamError,function () {
  });
  rtl.createHelper(this,"TBytesHelper",null,function () {
    this.get_Length = function () {
      var Result = 0;
      Result = rtl.length(this.get());
      return Result;
    };
    this.set_Length = function (AValue) {
      this.set(rtl.arraySetLength(this.get(),0,AValue));
    };
    this.Compare = function (ARight) {
      var Result = 0;
      var lCount = 0;
      if ($mod.TBytesHelper.get_Length.call(this) > $mod.TBytesHelper.get_Length.call({get: function () {
          return ARight;
        }, set: function (v) {
          rtl.raiseE("EPropReadOnly");
        }})) return 1;
      if ($mod.TBytesHelper.get_Length.call(this) < $mod.TBytesHelper.get_Length.call({get: function () {
          return ARight;
        }, set: function (v) {
          rtl.raiseE("EPropReadOnly");
        }})) return -1;
      Result = 0;
      for (var $l = $mod.TBytesHelper.Low.call(this), $end = $mod.TBytesHelper.High.call(this); $l <= $end; $l++) {
        lCount = $l;
        if (this.get()[lCount] > ARight[lCount]) return 1;
        if (this.get()[lCount] < ARight[lCount]) return -1;
      };
      return Result;
    };
    this.High = function () {
      var Result = 0;
      Result = rtl.length(this.get()) - 1;
      return Result;
    };
    this.Low = function () {
      var Result = 0;
      Result = 0;
      return Result;
    };
    this.SubBytes = function (AStartIndex) {
      var Result = [];
      Result = rtl.arrayCopy(0,this.get(),AStartIndex,$mod.TBytesHelper.get_Length.call(this));
      return Result;
    };
    this.SubBytes$1 = function (AStartIndex, ALength) {
      var Result = [];
      Result = rtl.arrayCopy(0,this.get(),AStartIndex,ALength);
      return Result;
    };
  });
  this.$rtti.$DynArray("TWords",{eltype: rtl.word});
  rtl.createHelper(this,"TWordsHelper",null,function () {
    this.get_Length = function () {
      var Result = 0;
      Result = rtl.length(this.get());
      return Result;
    };
    this.set_Length = function (AValue) {
      this.set(rtl.arraySetLength(this.get(),0,AValue));
    };
    var cBytesPerWord = 2;
    this.FromBytes = function (ABytes) {
      var Result = [];
      var lCount = 0;
      var lLow = 0;
      var lHigh = 0;
      lCount = $mod.TBytesHelper.get_Length.call({get: function () {
          return ABytes;
        }, set: function (v) {
          rtl.raiseE("EPropReadOnly");
        }});
      if (pas.System.Odd(lCount)) lCount += 1;
      $mod.TWordsHelper.set_Length.call({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},rtl.trunc(lCount / 2));
      lCount = $mod.TBytesHelper.Low.call({get: function () {
          return ABytes;
        }, set: function (v) {
          rtl.raiseE("EPropReadOnly");
        }});
      while (lCount <= $mod.TBytesHelper.High.call({get: function () {
          return ABytes;
        }, set: function (v) {
          rtl.raiseE("EPropReadOnly");
        }})) {
        lLow = ABytes[lCount];
        if ((lCount + 1) <= $mod.TBytesHelper.High.call({get: function () {
            return ABytes;
          }, set: function (v) {
            rtl.raiseE("EPropReadOnly");
          }})) {
          lHigh = ABytes[lCount + 1]}
         else lHigh = 0;
        Result[rtl.trunc(lCount / 2)] = $mod.TWordHelper.FromBytes(lLow,lHigh);
        lCount += 2;
      };
      return Result;
    };
    this.High = function () {
      var Result = 0;
      Result = rtl.length(this.get()) - 1;
      return Result;
    };
    this.Low = function () {
      var Result = 0;
      Result = 0;
      return Result;
    };
    var cBytesPerWord$1 = 2;
    this.ToBytes = function () {
      var Result = [];
      var lLow = 0;
      var lHigh = 0;
      var lCount = 0;
      var lNewIndex = 0;
      $mod.TBytesHelper.set_Length.call({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},$mod.TWordsHelper.get_Length.call(this) * 2);
      for (var $l = $mod.TWordsHelper.Low.call(this), $end = $mod.TWordsHelper.High.call(this); $l <= $end; $l++) {
        lCount = $l;
        $mod.TWordHelper.ToBytes.call({a: lCount, p: this.get(), get: function () {
            return this.p[this.a];
          }, set: function (v) {
            this.p[this.a] = v;
          }},{get: function () {
            return lLow;
          }, set: function (v) {
            lLow = v;
          }},{get: function () {
            return lHigh;
          }, set: function (v) {
            lHigh = v;
          }});
        lNewIndex = lCount * 2;
        Result[lNewIndex] = lLow;
        Result[lNewIndex + 1] = lHigh;
      };
      return Result;
    };
  });
  rtl.createHelper(this,"TCharHelper",null,function () {
    this.Length = 1;
    this.Size = 2;
    var cNumChars = rtl.createSet(48,49,50,51,52,53,54,55,56,57);
    this.IsDigit = function () {
      var Result = false;
      Result = this.get().charCodeAt() in cNumChars;
      return Result;
    };
    this.ToOrd = function () {
      var Result = 0;
      Result = this.get().charCodeAt();
      return Result;
    };
    this.ToUpper = function () {
      var Result = "";
      Result = $mod.TCharHelper.ToUpper$1(this.get());
      return Result;
    };
    this.ToUpper$1 = function (AValue) {
      return AValue.toUpperCase();
    };
  });
  rtl.createHelper(this,"TIntegerHelper",null,function () {
    this.Equals = function (AValue) {
      var Result = false;
      Result = this.get() === AValue;
      return Result;
    };
    this.NotEquals = function (AValue) {
      var Result = false;
      Result = !$mod.TIntegerHelper.Equals.call(this,AValue);
      return Result;
    };
    this.Parse = function (AValue) {
      var Result = 0;
      Result = pas.SysUtils.StrToInt(AValue);
      return Result;
    };
    this.ToString = function () {
      var Result = "";
      Result = $mod.TIntegerHelper.ToString$1(this.get());
      return Result;
    };
    this.ToString$1 = function (AValue) {
      return AValue.toString();
    };
    this.TryParse = function (AString, AValue) {
      var Result = false;
      Result = pas.SysUtils.TryStrToInt(AString,AValue);
      return Result;
    };
  });
  rtl.createHelper(this,"TLongIntHelper",null,function () {
    this.Equals = function (AValue) {
      var Result = false;
      Result = this.get() === AValue;
      return Result;
    };
    this.NotEquals = function (AValue) {
      var Result = false;
      Result = !$mod.TLongIntHelper.Equals.call(this,AValue);
      return Result;
    };
    this.Parse = function (AValue) {
      var Result = 0;
      Result = pas.SysUtils.StrToInt(AValue);
      return Result;
    };
    this.ToString = function () {
      var Result = "";
      Result = $mod.TLongIntHelper.ToString$1(this.get());
      return Result;
    };
    this.ToString$1 = function (AValue) {
      return AValue.toString();
    };
    this.TryParse = function (AString, AValue) {
      var Result = false;
      Result = pas.SysUtils.TryStrToInt(AString,AValue);
      return Result;
    };
  });
  rtl.createHelper(this,"TWordHelper",null,function () {
    var cBitPerByte = 8;
    this.FromBytes = function (ALow, AHigh) {
      var Result = 0;
      Result = ALow + (AHigh << 8);
      return Result;
    };
    var cMask = 0xFF;
    var cBitPerByte$1 = 8;
    this.ToBytes = function (ALow, AHigh) {
      ALow.set(this.get() & cMask);
      AHigh.set((this.get() & (cMask << 8)) >>> 8);
    };
  });
  rtl.createHelper(this,"TStringHelper",null,function () {
    this.Empty = "";
    this.get_Chars = function (AIndex) {
      var Result = "";
      Result = this.get().charAt((AIndex + 1) - 1);
      return Result;
    };
    this.get_Length = function () {
      var Result = 0;
      Result = this.get().length;
      return Result;
    };
    this.Pos = function (ASubStr, AStr, AOffset) {
      return AStr.indexOf(ASubStr, AOffset - 1) + 1;
    };
    this.Reverse = function () {
      var Result = "";
      var lCount = 0;
      Result = $mod.TStringHelper.Empty;
      $mod.TStringHelper.set_Length.call({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},$mod.TStringHelper.get_Length.call(this));
      for (var $l = 0, $end = $mod.TStringHelper.get_Length.call(this) - 1; $l <= $end; $l++) {
        lCount = $l;
        $mod.TStringHelper.set_Chars.call({get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }},$mod.TStringHelper.get_Length.call(this) - lCount - 1,$mod.TStringHelper.get_Chars.call(this,lCount));
      };
      return Result;
    };
    this.set_Chars = function (AIndex, AValue) {
      this.set(rtl.setCharAt(this.get(),(AIndex + 1) - 1,AValue));
    };
    this.set_Length = function (AValue) {
      this.set(rtl.strSetLength(this.get(),AValue));
    };
    this.CompareTo = function (AValue) {
      var Result = 0;
      Result = $mod.TStringHelper.CompareTo$1(this.get(),AValue);
      return Result;
    };
    this.CompareTo$1 = function (ALeft, ARight) {
      return ALeft.localeCompare(ARight);
    };
    this.Contains = function (AValue) {
      var Result = false;
      Result = $mod.TStringHelper.IndexOf$2.call(this,AValue) >= 0;
      return Result;
    };
    this.Equals = function (AValue) {
      var Result = false;
      Result = this.get() === AValue;
      return Result;
    };
    this.FirstChar = function () {
      var Result = "";
      if ($mod.TStringHelper.NotIsEmpty.call(this)) {
        Result = $mod.TStringHelper.get_Chars.call(this,0)}
       else Result = "\x00";
      return Result;
    };
    this.Format = function (AArgs) {
      var Result = "";
      Result = pas.SysUtils.Format(this.get(),AArgs);
      return Result;
    };
    this.Format$1 = function (AValue, AArgs) {
      var Result = "";
      Result = pas.SysUtils.Format(AValue,AArgs);
      return Result;
    };
    this.High = function () {
      var Result = 0;
      Result = $mod.TStringHelper.get_Length.call(this) - 1;
      return Result;
    };
    this.IndexOf = function (AValue) {
      var Result = 0;
      Result = $mod.TStringHelper.Pos.call(this,AValue,this.get(),1) - 1;
      return Result;
    };
    this.IndexOf$1 = function (AValue, AStartIndex, ACount) {
      var Result = 0;
      Result = $mod.TStringHelper.Pos.call(this,AValue,this.get(),AStartIndex + 1) - 1;
      if ((Result + $mod.TStringHelper.get_Length.call({get: function () {
          return AValue;
        }, set: function (v) {
          rtl.raiseE("EPropReadOnly");
        }})) > (AStartIndex + ACount)) Result = -1;
      return Result;
    };
    this.IndexOf$2 = function (AValue) {
      var Result = 0;
      Result = pas.System.Pos(AValue,this.get()) - 1;
      return Result;
    };
    this.Insert = function (AStartIndex, AValue) {
      var Result = "";
      pas.System.Insert(AValue,this,AStartIndex + 1);
      Result = this.get();
      return Result;
    };
    this.IsEmpty = function () {
      var Result = false;
      Result = this.get() === $mod.TStringHelper.Empty;
      return Result;
    };
    var cNumbers = rtl.createSet(null,48,57);
    this.IsNumber = function () {
      var Result = false;
      var lCount = 0;
      if ($mod.TStringHelper.IsEmpty.call(this)) return false;
      for (var $l = 0, $end = $mod.TStringHelper.get_Length.call(this) - 1; $l <= $end; $l++) {
        lCount = $l;
        if (!($mod.TStringHelper.get_Chars.call(this,lCount).charCodeAt() in cNumbers)) return false;
      };
      Result = true;
      return Result;
    };
    this.LastIndexOf = function (AValue) {
      var Result = 0;
      Result = $mod.TStringHelper.IndexOf.call({a: $mod.TStringHelper.Reverse.call(this), get: function () {
          return this.a;
        }, set: function (v) {
          this.a = v;
        }},AValue);
      if (Result >= 0) Result = $mod.TStringHelper.get_Length.call(this) - Result - 1;
      return Result;
    };
    this.Low = function () {
      var Result = 0;
      Result = 0;
      return Result;
    };
    this.NotEquals = function (AValue) {
      var Result = false;
      Result = !$mod.TStringHelper.Equals.call(this,AValue);
      return Result;
    };
    this.NotIsEmpty = function () {
      var Result = false;
      Result = this.get() !== $mod.TStringHelper.Empty;
      return Result;
    };
    var cDefPadChar = " ";
    this.PadLeft = function (ATotalWidth) {
      var Result = "";
      Result = $mod.TStringHelper.PadLeft$1.call(this,ATotalWidth,cDefPadChar);
      return Result;
    };
    this.PadLeft$1 = function (ATotalWidth, APaddingChar) {
      var Result = "";
      ATotalWidth = ATotalWidth - $mod.TStringHelper.get_Length.call(this);
      if (ATotalWidth > 0) {
        Result = pas.System.StringOfChar(APaddingChar,ATotalWidth) + this.get()}
       else Result = this.get();
      return Result;
    };
    this.Remove = function (AStartIndex) {
      var Result = "";
      Result = $mod.TStringHelper.Remove$1.call(this,AStartIndex,1);
      return Result;
    };
    this.Remove$1 = function (AStartIndex, ACount) {
      var Result = "";
      Result = $mod.TStringHelper.Substring$1.call(this,0,AStartIndex - 1) + $mod.TStringHelper.Substring.call(this,AStartIndex + ACount);
      return Result;
    };
    this.Replace = function (AOldValue, ANewValue) {
      var Result = "";
      Result = pas.SysUtils.StringReplace(this.get(),AOldValue,ANewValue,rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll));
      return Result;
    };
    this.Same = function (AValue) {
      var Result = false;
      Result = pas.SysUtils.SameText(this.get(),AValue);
      return Result;
    };
    this.StartsText = function (ASubText, AText) {
      var Result = false;
      if ($mod.TStringHelper.IsEmpty.call({get: function () {
          return ASubText;
        }, set: function (v) {
          rtl.raiseE("EPropReadOnly");
        }})) {
        Result = true}
       else {
        if ($mod.TStringHelper.get_Length.call({get: function () {
            return AText;
          }, set: function (v) {
            rtl.raiseE("EPropReadOnly");
          }}) >= $mod.TStringHelper.get_Length.call({get: function () {
            return ASubText;
          }, set: function (v) {
            rtl.raiseE("EPropReadOnly");
          }})) {
          Result = pas.SysUtils.SameText($mod.TStringHelper.Substring$1.call({get: function () {
              return AText;
            }, set: function (v) {
              rtl.raiseE("EPropReadOnly");
            }},0,$mod.TStringHelper.get_Length.call({get: function () {
              return ASubText;
            }, set: function (v) {
              rtl.raiseE("EPropReadOnly");
            }})),ASubText)}
         else Result = false;
      };
      return Result;
    };
    this.StartsWith = function (AValue) {
      var Result = false;
      Result = $mod.TStringHelper.StartsWith$1.call(this,AValue,false);
      return Result;
    };
    this.StartsWith$1 = function (AValue, AIgnoreCase) {
      var Result = false;
      if (AIgnoreCase) {
        Result = $mod.TStringHelper.StartsText(AValue,this.get())}
       else if (AValue === $mod.TStringHelper.Empty) {
        Result = true}
       else {
        if ($mod.TStringHelper.get_Length.call(this) >= $mod.TStringHelper.get_Length.call({get: function () {
            return AValue;
          }, set: function (v) {
            rtl.raiseE("EPropReadOnly");
          }})) {
          Result = $mod.TStringHelper.Equals.call({a: $mod.TStringHelper.Substring$1.call(this,0,$mod.TStringHelper.get_Length.call({get: function () {
                return AValue;
              }, set: function (v) {
                rtl.raiseE("EPropReadOnly");
              }})), get: function () {
              return this.a;
            }, set: function (v) {
              this.a = v;
            }},AValue)}
         else Result = false;
      };
      return Result;
    };
    this.Substring = function (AStartIndex) {
      var Result = "";
      Result = pas.System.Copy(this.get(),AStartIndex + 1,$mod.TStringHelper.get_Length.call(this));
      return Result;
    };
    this.Substring$1 = function (AStartIndex, ALength) {
      var Result = "";
      Result = pas.System.Copy(this.get(),AStartIndex + 1,ALength);
      return Result;
    };
    this.ToLower = function () {
      var Result = "";
      var lValue = "";
      lValue = this.get();
      lValue = lValue.toLowerCase();
      Result = lValue;
      return Result;
    };
    this.ToUpper = function () {
      var Result = "";
      var lValue = "";
      lValue = this.get();
      lValue = lValue.toUpperCase();
      Result = lValue;
      return Result;
    };
    this.Trim = function () {
      var Result = "";
      Result = pas.SysUtils.Trim(this.get());
      return Result;
    };
  });
  rtl.createHelper(this,"TDateTimeHelper",null,function () {
    this.Equals = function (AValue) {
      var Result = false;
      Result = pas.Math.SameValue(this.get(),AValue,0.0);
      return Result;
    };
    this.NotEquals = function (AValue) {
      var Result = false;
      Result = !pas.Math.SameValue(this.get(),AValue,0.0);
      return Result;
    };
    this.ToString = function () {
      var Result = "";
      Result = pas.SysUtils.DateTimeToStr$1(this.get(),pas.SysUtils.FormatSettings,false);
      return Result;
    };
    this.ToIsoString = function (AAddDelimiters, AAddMilliSeconds) {
      var $Self = this;
      var Result = "";
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var ms = 0;
      var dd = "";
      var td = "";
      var msec = "";
      function IntToZStr(i, l) {
        var Result = "";
        var Res = "";
        Res = pas.SysUtils.IntToStr(i);
        while (Res.length < l) Res = "0" + Res;
        Result = Res;
        return Result;
      };
      if (AAddDelimiters) {
        dd = "-";
        td = ":";
      };
      pas.SysUtils.DecodeDate($Self.get(),{get: function () {
          return ye;
        }, set: function (v) {
          ye = v;
        }},{get: function () {
          return mo;
        }, set: function (v) {
          mo = v;
        }},{get: function () {
          return da;
        }, set: function (v) {
          da = v;
        }});
      pas.SysUtils.DecodeTime($Self.get(),{get: function () {
          return ho;
        }, set: function (v) {
          ho = v;
        }},{get: function () {
          return mi;
        }, set: function (v) {
          mi = v;
        }},{get: function () {
          return se;
        }, set: function (v) {
          se = v;
        }},{get: function () {
          return ms;
        }, set: function (v) {
          ms = v;
        }});
      if (AAddMilliSeconds) msec = "." + IntToZStr(ms,3) + "Z";
      Result = IntToZStr(ye,4) + dd + IntToZStr(mo,2) + dd + IntToZStr(da,2) + "T" + IntToZStr(ho,2) + td + IntToZStr(mi,2) + td + IntToZStr(se,2) + msec;
      return Result;
    };
  });
  rtl.createHelper(this,"TStreamHelper",null,function () {
    var MaxBufSize = 0xF000;
    this.CopyFrom = function (ASource, ACount) {
      var Result = 0;
      var lBufSize = 0;
      var lCount = 0;
      var lBuffer = [];
      if (ACount <= 0) {
        ASource.SetPosition(0);
        ACount = ASource.GetSize();
      };
      Result = ACount;
      if (ACount > 61440) {
        lBufSize = 61440}
       else lBufSize = ACount;
      $mod.TBytesHelper.set_Length.call({get: function () {
          return lBuffer;
        }, set: function (v) {
          lBuffer = v;
        }},lBufSize);
      try {
        while (ACount !== 0) {
          if (ACount > lBufSize) {
            lCount = lBufSize}
           else lCount = ACount;
          ASource.ReadBuffer({get: function () {
              return lBuffer;
            }, set: function (v) {
              lBuffer = v;
            }},lCount);
          this.WriteBuffer(lBuffer,lCount);
          ACount -= lCount;
        };
      } finally {
        $mod.TBytesHelper.set_Length.call({get: function () {
            return lBuffer;
          }, set: function (v) {
            lBuffer = v;
          }},0);
      };
      return Result;
    };
  });
  rtl.createClass(this,"TTMSStringStream",pas.Classes.TBytesStream,function () {
    this.$init = function () {
      pas.Classes.TBytesStream.$init.call(this);
      this.FEncoding = null;
      this.FFileName = "";
      this.FOwnsEncoding = false;
      this.FError = null;
      this.FLoaded = null;
      this.FRequest = null;
    };
    this.$final = function () {
      this.FEncoding = undefined;
      this.FError = undefined;
      this.FLoaded = undefined;
      this.FRequest = undefined;
      pas.Classes.TBytesStream.$final.call(this);
    };
    this.GetDataString = function () {
      var Result = "";
      Result = this.FEncoding.GetString(rtl.arrayCopy(0,this.GetBytes(),0,this.GetSize()));
      return Result;
    };
    this.InternalLoadFromFileP = function (AFileName) {
      var $Self = this;
      var Result = null;
      Result = new Promise(function (AResolve, AReject) {
        $Self.LoadFromFile$3(AFileName,function () {
          AResolve(true);
        },function (AError) {
          AReject(AError);
        });
      });
      return Result;
    };
    this.OnAbort = function (AEvent) {
      var Result = false;
      Result = true;
      if (this.FError != null) this.FError(pas.SysUtils.Format(rtl.getResStr(pas["WEBLib.Consts"],"SLoadFromFileAborted"),pas.System.VarRecs(18,this.FFileName)));
      return Result;
    };
    this.OnError = function (AEvent) {
      var Result = false;
      Result = true;
      if (this.FError != null) this.FError(pas.SysUtils.Format(rtl.getResStr(pas["WEBLib.Consts"],"SErrorLoadFromFile"),pas.System.VarRecs(18,this.FFileName)));
      return Result;
    };
    var cStatusOK$1 = 200;
    var cStatusLastOK = 208;
    this.OnLoad = function (AEvent) {
      var Result = false;
      var lReq = null;
      lReq = AEvent.target;
      if ((lReq.status < 200) || (lReq.status > 208)) {
        if (this.FError != null) {
          this.FError(pas.SysUtils.Format(rtl.getResStr(pas["WEBLib.Consts"],"SCannotGetFile"),pas.System.VarRecs(18,this.FFileName,0,this.FRequest.status)));
          return Result;
        } else throw $mod.EStringStreamError.$create("CreateFmt",[rtl.getResStr(pas["WEBLib.Consts"],"SCannotGetFile"),pas.System.VarRecs(18,this.FFileName,0,lReq.status)]);
      };
      this.WriteString(lReq.responseText);
      Result = true;
      if (this.FLoaded != null) this.FLoaded();
      return Result;
    };
    this.Create$2 = function () {
      this.Create$4($mod.TStringHelper.Empty,pas.SysUtils.TEncoding.GetDefault(),false);
      return this;
    };
    this.Create$3 = function (AString) {
      this.Create$4(AString,pas.SysUtils.TEncoding.GetDefault(),false);
      return this;
    };
    this.Create$4 = function (AString, AEncoding, AOwnsEncoding) {
      var lBytes = [];
      pas.System.TObject.Create.call(this);
      this.FEncoding = AEncoding;
      this.FOwnsEncoding = AOwnsEncoding && !pas.SysUtils.TEncoding.IsStandardEncoding(AEncoding);
      lBytes = this.FEncoding.GetBytes(AString);
      this.SetPointer(this.$class.BytesToMemory(rtl.arrayRef(lBytes)),$mod.TBytesHelper.get_Length.call({get: function () {
          return lBytes;
        }, set: function (v) {
          lBytes = v;
        }}));
      return this;
    };
    this.Destroy = function () {
      if (this.FOwnsEncoding) rtl.free(this,"FEncoding");
      pas.Classes.TMemoryStream.Destroy.call(this);
    };
    var cStatusOK = 200;
    this.LoadFromFile$1 = function (AFileName) {
      var lStatus = 0;
      var lResponse = "";
      lResponse = $mod.TStringHelper.Empty;
      lStatus = 200;
      var lRequest = new XMLHttpRequest();
          lRequest.open("GET", AFileName, false);
          lRequest.send();
      
          if (lRequest.status == cStatusOK)
            lResponse = lRequest.responseText
          else
            lStatus = lRequest.status;
      if (lStatus !== 200) throw $mod.EStringStreamError.$create("CreateFmt",[rtl.getResStr(pas["WEBLib.Consts"],"SCannotGetFile"),pas.System.VarRecs(18,AFileName,0,lStatus)]);
      this.WriteString(lResponse);
    };
    this.LoadFromFile$2 = function (AFileName, ALoaded) {
      this.LoadFromFile$3(AFileName,ALoaded,null);
    };
    var cAbortMethod = "abort";
    var cErrorMethod = "error";
    var cGetMethod = "GET";
    var cLoadMethod = "load";
    this.LoadFromFile$3 = function (AFileName, ALoaded, AError) {
      this.FLoaded = ALoaded;
      this.FError = AError;
      this.FFileName = AFileName;
      this.FRequest = new XMLHttpRequest();
      this.FRequest.addEventListener(cAbortMethod,rtl.createSafeCallback(this,"OnAbort"));
      this.FRequest.addEventListener(cErrorMethod,rtl.createSafeCallback(this,"OnError"));
      this.FRequest.addEventListener(cLoadMethod,rtl.createSafeCallback(this,"OnLoad"));
      try {
        this.FRequest.open(cGetMethod,AFileName,true);
        this.FRequest.send();
      } catch ($e) {
        if (pas.SysUtils.Exception.isPrototypeOf($e)) {
          var E = $e;
          if (AError != null) {
            AError(E.FMessage)}
           else throw $e;
        } else throw $e
      };
    };
    this.LoadFromFileP = async function (AFileName) {
      var Result = false;
      Result = await this.InternalLoadFromFileP(AFileName);
      return Result;
    };
    this.ReadString = function (ACount) {
      var Result = "";
      var lBytes = [];
      var lDest = [];
      var lCount = 0;
      if (ACount > (this.GetSize() - this.GetPosition())) ACount = this.GetSize() - this.GetPosition();
      $mod.TBytesHelper.set_Length.call({get: function () {
          return lDest;
        }, set: function (v) {
          lDest = v;
        }},ACount);
      lBytes = rtl.arrayRef(this.GetBytes());
      for (var $l = this.GetPosition(), $end = (ACount + this.GetPosition()) - 1; $l <= $end; $l++) {
        lCount = $l;
        lDest[lCount - this.GetPosition()] = lBytes[lCount];
      };
      Result = this.FEncoding.GetString(lDest);
      this.SetPosition(this.GetPosition() + ACount);
      return Result;
    };
    this.WriteString = function (AString) {
      var lBytes = [];
      var lData = "";
      lBytes = this.FEncoding.GetBytes(AString);
      this.Write$1(lBytes,0,$mod.TBytesHelper.get_Length.call({get: function () {
          return lBytes;
        }, set: function (v) {
          lBytes = v;
        }}));
      lData = this.GetDataString();
      if (lData !== AString) this.WriteString("");
    };
    var $r = this.$rtti;
    $r.addMethod("Create$2",2,[]);
    $r.addMethod("Create$3",2,[["AString",rtl.string,2]]);
    $r.addMethod("Create$4",2,[["AString",rtl.string,2],["AEncoding",pas.SysUtils.$rtti["TEncoding"]],["AOwnsEncoding",rtl.boolean]]);
  });
  rtl.createInterface(this,"IInterfaceList","{285DEA8A-B865-11D1-AAA7-00C04FB17A72}",["Add","Clear","Delete","Exchange","Expand","First","get_Capacity","get_Count","get_Items","IndexOf","IndexOfItem","Insert","Last","Lock","Remove","RemoveItem","set_Capacity","set_Count","set_Items","Unlock"],pas.System.IUnknown,function () {
    var $r = this.$rtti;
    $r.addMethod("Add",1,[["AItem",pas.System.$rtti["IUnknown"],2]],rtl.longint);
    $r.addMethod("Clear",0,[]);
    $r.addMethod("Delete",0,[["AIndex",rtl.longint,2]]);
    $r.addMethod("Exchange",0,[["AIndex1",rtl.longint,2],["AIndex2",rtl.longint,2]]);
    $r.addMethod("Expand",1,[],$mod.$rtti["TInterfaceList"]);
    $r.addMethod("First",1,[],pas.System.$rtti["IUnknown"]);
    $r.addMethod("get_Capacity",1,[],rtl.longint);
    $r.addMethod("get_Count",1,[],rtl.longint);
    $r.addMethod("get_Items",1,[["AIndex",rtl.longint,2]],pas.System.$rtti["IUnknown"]);
    $r.addMethod("IndexOf",1,[["AItem",pas.System.$rtti["IUnknown"],2]],rtl.longint);
    $r.addMethod("IndexOfItem",1,[["AItem",pas.System.$rtti["IUnknown"],2],["ADirection",pas.Types.$rtti["TDirection"],2]],rtl.longint);
    $r.addMethod("Insert",0,[["AIndex",rtl.longint,2],["AItem",pas.System.$rtti["IUnknown"],2]]);
    $r.addMethod("Last",1,[],pas.System.$rtti["IUnknown"]);
    $r.addMethod("Lock",0,[]);
    $r.addMethod("Remove",1,[["AItem",pas.System.$rtti["IUnknown"],2]],rtl.longint);
    $r.addMethod("RemoveItem",1,[["AItem",pas.System.$rtti["IUnknown"],2],["ADirection",pas.Types.$rtti["TDirection"],2]],rtl.longint);
    $r.addMethod("set_Capacity",0,[["AValue",rtl.longint,2]]);
    $r.addMethod("set_Count",0,[["AValue",rtl.longint,2]]);
    $r.addMethod("set_Items",0,[["AIndex",rtl.longint,2],["AItem",pas.System.$rtti["IUnknown"],2]]);
    $r.addMethod("Unlock",0,[]);
    $r.addProperty("Count",3,rtl.longint,"get_Count","set_Count");
    $r.addProperty("Items",3,pas.System.$rtti["IUnknown"],"get_Items","set_Items");
  });
  rtl.createClass(this,"TInterfaceListEnumerator",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FIndex = 0;
      this.FInterfaceList = null;
    };
    this.$final = function () {
      this.FInterfaceList = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.get_Current = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.FInterfaceList.get_Items(this.FIndex),true);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.Create$1 = function (AInterfaceList) {
      pas.System.TObject.Create.call(this);
      this.FIndex = -1;
      this.FInterfaceList = AInterfaceList;
      return this;
    };
    this.MoveNext = function () {
      var Result = false;
      Result = this.FIndex < (this.FInterfaceList.get_Count() - 1);
      if (Result) this.FIndex += 1;
      return Result;
    };
  });
  rtl.createInterface(this,"IInterfaceListEx","{FDB39D70-65B9-4995-9436-6084ACA05DB3}",["GetEnumerator"],this.IInterfaceList,function () {
    var $r = this.$rtti;
    $r.addMethod("GetEnumerator",1,[],$mod.$rtti["TInterfaceListEnumerator"]);
  });
  this.$rtti.$RefToProcVar("TCompareItems",{procsig: rtl.newTIProcSig([["ALeft",pas.System.$rtti["IUnknown"],2],["ARight",pas.System.$rtti["IUnknown"],2]],pas.Math.$rtti["TValueRelationship"])});
  rtl.createInterface(this,"IInterfaceListEx2","{4FE71218-0F8F-4027-B050-5E84E2202604}",["Sort"],this.IInterfaceList,function () {
    var $r = this.$rtti;
    $r.addMethod("Sort",0,[["ACompare",$mod.$rtti["TCompareItems"],2]]);
  });
  rtl.createClass(this,"TInterfaceList",pas.System.TInterfacedObject,function () {
    this.$init = function () {
      pas.System.TInterfacedObject.$init.call(this);
      this.FList = null;
    };
    this.$final = function () {
      this.FList = undefined;
      pas.System.TInterfacedObject.$final.call(this);
    };
    this.Add = function (AItem) {
      var Result = 0;
      Result = this.FList.Add(null);
      this.set_Items(Result,AItem);
      return Result;
    };
    this.Clear = function () {
      var lCount = 0;
      for (var $l = 0, $end = this.FList.FCount - 1; $l <= $end; $l++) {
        lCount = $l;
        this.set_Items(lCount,null);
      };
      this.FList.Clear();
    };
    this.Delete = function (AIndex) {
      this.set_Items(AIndex,null);
      this.FList.Delete(AIndex);
    };
    this.Exchange = function (AIndex1, AIndex2) {
      this.FList.Exchange(AIndex1,AIndex2);
    };
    this.Expand = function () {
      var Result = null;
      this.FList.Expand();
      Result = this;
      return Result;
    };
    this.First = function () {
      var Result = null;
      var $ok = false;
      try {
        if (this.get_Count() > 0) {
          Result = rtl.setIntfL(Result,this.get_Items(0),true)}
         else Result = rtl.setIntfL(Result,null);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.GetEnumerator = function () {
      var Result = null;
      Result = $mod.TInterfaceListEnumerator.$create("Create$1",[this]);
      return Result;
    };
    this.get_Capacity = function () {
      var Result = 0;
      Result = this.FList.FCapacity;
      return Result;
    };
    this.get_Count = function () {
      var Result = 0;
      Result = this.FList.FCount;
      return Result;
    };
    this.get_Items = function (AIndex) {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,rtl.getObject(this.FList.Get(AIndex)));
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.IndexOf = function (AItem) {
      var Result = 0;
      Result = this.IndexOfItem(AItem,pas.Types.TDirection.FromBeginning);
      return Result;
    };
    this.IndexOfItem = function (AItem, ADirection) {
      var Result = 0;
      Result = this.FList.IndexOfItem(AItem,ADirection);
      return Result;
    };
    this.Insert = function (AIndex, AItem) {
      this.FList.Insert(AIndex,null);
      this.set_Items(AIndex,AItem);
    };
    this.Last = function () {
      var Result = null;
      var $ok = false;
      try {
        Result = rtl.setIntfL(Result,this.get_Items(this.get_Count() - 1),true);
        $ok = true;
      } finally {
        if (!$ok) rtl._Release(Result);
      };
      return Result;
    };
    this.Lock = function () {
    };
    this.Remove = function (AItem) {
      var Result = 0;
      Result = this.RemoveItem(AItem,pas.Types.TDirection.FromBeginning);
      return Result;
    };
    this.RemoveItem = function (AItem, ADirection) {
      var Result = 0;
      Result = this.FList.IndexOfItem(AItem,ADirection);
      if (Result > -1) this.Delete(Result);
      return Result;
    };
    this.set_Capacity = function (AValue) {
      this.FList.SetCapacity(AValue);
    };
    this.set_Count = function (AValue) {
      this.FList.SetCount(AValue);
    };
    this.set_Items = function (AIndex, AItem) {
      if (this.FList.Get(AIndex) != null) rtl.getObject(this.FList.Get(AIndex))._Release();
      this.FList.Put(AIndex,AItem);
      if (AItem !== null) AItem._AddRef();
    };
    this.Sort = function (ACompare) {
      $impl.FCompare = ACompare;
      try {
        this.FList.Sort($impl.InternalCompare);
      } finally {
        $impl.FCompare = null;
      };
    };
    this.Unlock = function () {
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FList = pas.Classes.TFPList.$create("Create");
      return this;
    };
    this.Destroy = function () {
      this.Clear();
      rtl.free(this,"FList");
      pas.System.TObject.Destroy.call(this);
    };
    rtl.addIntf(this,$mod.IInterfaceList);
    rtl.addIntf(this,$mod.IInterfaceListEx);
    rtl.addIntf(this,$mod.IInterfaceListEx2);
    rtl.addIntf(this,pas.System.IUnknown);
  });
  rtl.createClass(this,"TStringBuilder",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FData = "";
    };
    this.get_Length = function () {
      var Result = 0;
      Result = $mod.TStringHelper.get_Length.call({p: this, get: function () {
          return this.p.FData;
        }, set: function (v) {
          this.p.FData = v;
        }});
      return Result;
    };
    this.set_Length = function (AValue) {
      $mod.TStringHelper.set_Length.call({p: this, get: function () {
          return this.p.FData;
        }, set: function (v) {
          this.p.FData = v;
        }},AValue);
    };
    this.Create$1 = function (AValue) {
      pas.System.TObject.Create.call(this);
      this.FData = AValue;
      return this;
    };
    this.Append = function (AValue) {
      var Result = null;
      Result = this.Append$1($mod.TLongIntHelper.ToString.call({get: function () {
          return AValue;
        }, set: function (v) {
          rtl.raiseE("EPropReadOnly");
        }}));
      return Result;
    };
    this.Append$1 = function (AValue) {
      var Result = null;
      this.FData = this.FData + AValue;
      Result = this;
      return Result;
    };
    this.Insert = function (AIndex, AValue) {
      var Result = null;
      Result = this.Insert$1(AIndex,$mod.TLongIntHelper.ToString.call({get: function () {
          return AValue;
        }, set: function (v) {
          rtl.raiseE("EPropReadOnly");
        }}));
      return Result;
    };
    this.Insert$1 = function (AIndex, AValue) {
      var Result = null;
      $mod.TStringHelper.Insert.call({p: this, get: function () {
          return this.p.FData;
        }, set: function (v) {
          this.p.FData = v;
        }},AIndex,AValue);
      Result = this;
      return Result;
    };
    this.ToString = function () {
      var Result = "";
      Result = this.FData;
      return Result;
    };
  });
  rtl.recNewT(this,"TSysInfo",function () {
    this.screenSize = "";
    this.browser = "";
    this.browserversion = "";
    this.browsermajorVersion = "";
    this.mobile = false;
    this.os = "";
    this.osVersion = "";
    this.cookieEnabled = false;
    this.flashVersion = "";
    this.$eq = function (b) {
      return (this.screenSize === b.screenSize) && (this.browser === b.browser) && (this.browserversion === b.browserversion) && (this.browsermajorVersion === b.browsermajorVersion) && (this.mobile === b.mobile) && (this.os === b.os) && (this.osVersion === b.osVersion) && (this.cookieEnabled === b.cookieEnabled) && (this.flashVersion === b.flashVersion);
    };
    this.$assign = function (s) {
      this.screenSize = s.screenSize;
      this.browser = s.browser;
      this.browserversion = s.browserversion;
      this.browsermajorVersion = s.browsermajorVersion;
      this.mobile = s.mobile;
      this.os = s.os;
      this.osVersion = s.osVersion;
      this.cookieEnabled = s.cookieEnabled;
      this.flashVersion = s.flashVersion;
      return this;
    };
    var $r = $mod.$rtti.$Record("TSysInfo",{});
    $r.addField("screenSize",rtl.string);
    $r.addField("browser",rtl.string);
    $r.addField("browserversion",rtl.string);
    $r.addField("browsermajorVersion",rtl.string);
    $r.addField("mobile",rtl.boolean);
    $r.addField("os",rtl.string);
    $r.addField("osVersion",rtl.string);
    $r.addField("cookieEnabled",rtl.boolean);
    $r.addField("flashVersion",rtl.string);
  });
  rtl.createHelper(this,"TJsonToObjectHelper",null,function () {
    this.FromJSON = function (JSONValue) {
      var $Self = this;
      var Context = pas.RTTI.TRTTIContext.$new();
      var TypeInfo = null;
      var v = pas.RTTI.TValue.$new();
      function ListProperties(AObject, jsv) {
        for (var key in jsv) {
          if (jsv.hasOwnProperty(key)) {
            //console.log(key + " / " + jsv[key]);
            SetProperty(AObject, key, jsv[key]);
          }
        };
      };
      function SetProperty(AObject, Name, AValue) {
        var pn = "";
        var Prop = null;
        var PropTypeInfo = null;
        if (Name === "") return;
        TypeInfo = Context.GetType$1(AObject.$class.ClassType());
        Prop = TypeInfo.GetProperty(Name);
        if (Prop != null) {
          pn = Prop.GetPropertyType().GetName();
          PropTypeInfo = Prop.GetPropertyType();
          if ((PropTypeInfo.GetTypeKind() === pas.System.TTypeKind.tkClass) && Prop.GetValue(AObject).IsObject()) {
            ListProperties(Prop.GetValue(AObject).AsObject(),AValue);
          };
          if (pn === "string") {
            v.$assign(pas.RTTI.TValue.From$G1("" + AValue));
            Prop.SetValue(AObject,v);
          };
          if (pn === "longint") {
            v.$assign(pas.RTTI.TValue.From$G2(rtl.trunc(AValue)));
            Prop.SetValue(AObject,v);
          };
          if (pn === "boolean") {
            v.$assign(pas.RTTI.TValue.From$G3(("" + AValue) === "true"));
            Prop.SetValue(AObject,v);
          };
          if (pn === "double") {
            v.$assign(pas.RTTI.TValue.From$G4(rtl.getNumber(AValue)));
            Prop.SetValue(AObject,v);
          };
          if (pn === "TDateTime") {
            v.$assign(pas.RTTI.TValue.From$G4(pas["WEBLib.REST"].TRESTClient.IsoToDateTime$1("" + AValue,true)));
            Prop.SetValue(AObject,v);
          };
          if (pn === "TDate") {
            v.$assign(pas.RTTI.TValue.From$G4(pas["WEBLib.REST"].TRESTClient.IsoToDate("" + AValue)));
            Prop.SetValue(AObject,v);
          };
          if (pn === "TTime") {
            v.$assign(pas.RTTI.TValue.From$G4(pas["WEBLib.REST"].TRESTClient.IsoToTime("" + AValue)));
            Prop.SetValue(AObject,v);
          };
        };
      };
      Context.$assign(pas.RTTI.TRTTIContext.Create());
      SetProperty($Self,"",null);
      ListProperties($Self,JSONValue);
      Context.Free();
    };
    this.FromJSON$1 = function (JSONValue) {
      var jsv = undefined;
      jsv = null;
      jsv = JSON.parse(JSONValue);
      $mod.TJsonToObjectHelper.FromJSON.call(this,jsv);
    };
    this.ToJSON = function () {
      var $Self = this;
      var Result = undefined;
      var Context = pas.RTTI.TRTTIContext.$new();
      var TypeInfo = null;
      var Prop = null;
      var jsonstr = "";
      var pn = "";
      var res = undefined;
      var PropTypeInfo = null;
      function ListProperties(AObject, ATypeInfo, js) {
        var sub = "";
        var sep = "";
        var subn = "";
        for (var $in = ATypeInfo.GetProperties(), $l = 0, $end = rtl.length($in) - 1; $l <= $end; $l++) {
          Prop = $in[$l];
          PropTypeInfo = Prop.GetPropertyType();
          sep = "";
          if (js.get().length > 1) sep = ",";
          subn = Prop.GetName();
          pn = Prop.GetPropertyType().GetName();
          if ((PropTypeInfo.GetTypeKind() === pas.System.TTypeKind.tkClass) && Prop.GetValue(AObject).IsObject()) {
            sub = "{";
            ListProperties(Prop.GetValue(AObject).AsObject(),Prop.GetPropertyType(),{get: function () {
                return sub;
              }, set: function (v) {
                sub = v;
              }});
            sub = sub + "}";
            js.set(js.get() + sep + '"' + subn + '":' + sub);
            continue;
          };
          if (pn === "string") {
            js.set(js.get() + sep + '"' + Prop.GetName() + '":' + '"' + Prop.GetValue(AObject).ToString() + '"');
          };
          if (pn === "longint") {
            js.set(js.get() + sep + '"' + Prop.GetName() + '":' + pas.SysUtils.IntToStr(Prop.GetValue(AObject).AsInteger()));
          };
          if (pn === "boolean") {
            if (Prop.GetValue(AObject).AsBoolean()) {
              js.set(js.get() + sep + '"' + Prop.GetName() + '":' + "true")}
             else js.set(js.get() + sep + '"' + Prop.GetName() + '":' + "false");
          };
          if (pn === "double") {
            js.set(js.get() + sep + '"' + Prop.GetName() + '":' + pas.SysUtils.FloatToStr(Prop.GetValue(AObject).AsExtended()));
          };
          if (pn === "TDateTime") {
            js.set(js.get() + sep + '"' + Prop.GetName() + '":' + '"' + pas["WEBLib.REST"].TRESTClient.DateTimeToWL(Prop.GetValue(AObject).AsExtended()) + '"');
          };
          if (pn === "TDate") {
            js.set(js.get() + sep + '"' + Prop.GetName() + '":' + '"' + pas["WEBLib.REST"].TRESTClient.DateToWL(Prop.GetValue(AObject).AsExtended()) + '"');
          };
          if (pn === "TTime") {
            js.set(js.get() + sep + '"' + Prop.GetName() + '":' + '"' + pas["WEBLib.REST"].TRESTClient.TimeToWL(Prop.GetValue(AObject).AsExtended()) + '"');
          };
        };
      };
      Context.$assign(pas.RTTI.TRTTIContext.Create());
      TypeInfo = Context.GetType$1($Self.$class.ClassType());
      jsonstr = "{";
      ListProperties($Self,TypeInfo,{get: function () {
          return jsonstr;
        }, set: function (v) {
          jsonstr = v;
        }});
      jsonstr = jsonstr + "}";
      res = JSON.parse(jsonstr);
      Result = res;
      Context.Free();
      return Result;
    };
  });
  this.UseVariable = function (AValue) {
  };
  this.UseVariable$1 = function (AValue) {
  };
  this.UseVariable$2 = function (AValue) {
  };
  this.ArrayBufferToBase64 = function (Buffer) {
    var Result = "";
    function _arrayBufferToBase64(buf) {
    var binary = '';
    var bytes = new Uint8Array(buf);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[i] );
    }
    return window.btoa(binary);
    }
    Result = _arrayBufferToBase64(Buffer);
    return Result;
  };
  this.Base64ToArrayBuffer = function (Base64) {
    var Result = null;
    function _base64ToArrayBuffer(data) {
            var binary_string = window.atob(data);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        }
    
        Result = _base64ToArrayBuffer(Base64);
    return Result;
  };
  this.StringToBase64 = function (AValue) {
    var Result = "";
    var res = "";
    res = window.btoa(AValue);
    Result = res;
    return Result;
  };
  this.Base64ToString = function (AValue) {
    var Result = "";
    var res = "";
    res = window.atob(AValue);
    Result = res;
    return Result;
  };
  var cSizeOfDouble = 8;
  this.SizeOf = function (AValue) {
    var Result = 0;
    Result = 8;
    return Result;
  };
  var cSizeOfInteger = 4;
  this.SizeOf$1 = function (AValue) {
    var Result = 0;
    Result = 4;
    return Result;
  };
  this.InsertAfter = function (newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling);
  };
  this.MatchStrEx = function (AValue1, AValue2, ACaseSensitive) {
    var Result = false;
    var ch = "";
    var lastop = "";
    var sep = 0;
    var cp = 0;
    var res = false;
    var newres = false;
    var CharArray = [];
    AValue1 = pas.SysUtils.Trim(AValue1);
    AValue1 = $impl.StripLogicSpaces(AValue1);
    sep = -1;
    if ($impl.VarPos("=",AValue1,{get: function () {
        return sep;
      }, set: function (v) {
        sep = v;
      }}) === 1) pas.System.Delete({get: function () {
        return AValue1;
      }, set: function (v) {
        AValue1 = v;
      }},sep,1);
    lastop = "\x00";
    res = true;
    CharArray = rtl.arraySetLength(CharArray,"",5);
    CharArray[0] = "(";
    CharArray[1] = ";";
    CharArray[2] = "^";
    CharArray[3] = "&";
    CharArray[4] = "|";
    if (AValue1 === "") {
      Result = AValue2 === "";
      return Result;
    };
    if ((AValue1 !== "*") && (AValue2 === "")) {
      Result = false;
      return Result;
    };
    do {
      ch = $impl.FirstChar(CharArray,AValue1,{get: function () {
          return sep;
        }, set: function (v) {
          sep = v;
        }});
      if (ch !== "\x00") {
        if ((AValue1.length > 0) && (AValue1.charAt(0) === "(") && (pas.System.Pos("(",AValue1) > 0)) {
          cp = $impl.ClosingParenthesis(AValue1);
          newres = $mod.MatchStrEx(pas.System.Copy(AValue1,2,cp - 2),AValue2,ACaseSensitive);
          pas.System.Delete({get: function () {
              return AValue1;
            }, set: function (v) {
              AValue1 = v;
            }},1,cp);
        } else {
          newres = $mod.MatchStr(pas.System.Copy(AValue1,1,sep - 1),AValue2,ACaseSensitive);
          pas.System.Delete({get: function () {
              return AValue1;
            }, set: function (v) {
              AValue1 = v;
            }},1,sep);
        };
        if (lastop === "\x00") {
          res = newres}
         else {
          var $tmp = lastop;
          if (($tmp === ";") || ($tmp === "^") || ($tmp === "|")) {
            res = res || newres}
           else if ($tmp === "&") res = res && newres;
        };
        lastop = ch;
      };
    } while (!(ch === "\x00"));
    newres = $mod.MatchStr(AValue1,AValue2,ACaseSensitive);
    if (lastop === "\x00") {
      res = newres}
     else {
      var $tmp1 = lastop;
      if (($tmp1 === ";") || ($tmp1 === "^") || ($tmp1 === "|")) {
        res = res || newres}
       else if ($tmp1 === "&") res = res && newres;
    };
    Result = res;
    return Result;
  };
  this.MatchStr = function (AValue1, AValue2, ACaseSensitive) {
    var Result = false;
    if (ACaseSensitive) {
      Result = $impl.Matches(AValue1,AValue2)}
     else Result = $impl.Matches(pas.SysUtils.UpperCase(AValue1),pas.SysUtils.UpperCase(AValue2));
    return Result;
  };
  this.SelectElementContents = function (AElement) {
    if (window.getSelection && document.createRange) {
        var sel = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(AElement);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(AElement);
        textRange.select();
    };
  };
  this.FormatProp = function (AFmt, AArgs) {
    var Result = "";
    Result = pas.SysUtils.Format$1(AFmt,AArgs,pas.SysUtils.TFormatSettings.Invariant());
    return Result;
  };
  this.StringIsFloat = function (N) {
    var Result = false;
    var f = 0.0;
    Result = pas.SysUtils.TryStrToFloat$2(N,{get: function () {
        return f;
      }, set: function (v) {
        f = v;
      }});
    return Result;
  };
  this.StringIsInteger = function (N) {
    var Result = false;
    var I = 0;
    Result = true;
    if (pas.SysUtils.Trim(N) === "") return false;
    if ((pas.SysUtils.Trim(N).length > 1) && (pas.SysUtils.Trim(N).charAt(0) === "0")) return false;
    if (!(N.charCodeAt(I - 1) in rtl.createSet(null,48,57,45))) return false;
    for (var $l = 2, $end = N.length; $l <= $end; $l++) {
      I = $l;
      if (!(N.charCodeAt(I - 1) in rtl.createSet(null,48,57))) {
        Result = false;
        break;
      };
    };
    return Result;
  };
  this.MD5Hash = function (N) {
    var Result = "";
    var h = "";
    function md5(inputString) {
      var hc="0123456789abcdef";
      function rh(n) {var j,s="";for(j=0;j<=3;j++) s+=hc.charAt((n>>(j*8+4))&0x0F)+hc.charAt((n>>(j*8))&0x0F);return s;}
      function ad(x,y) {var l=(x&0xFFFF)+(y&0xFFFF);var m=(x>>16)+(y>>16)+(l>>16);return (m<<16)|(l&0xFFFF);}
      function rl(n,c)            {return (n<<c)|(n>>>(32-c));}
      function cm(q,a,b,x,s,t)    {return ad(rl(ad(ad(a,q),ad(x,t)),s),b);}
      function ff(a,b,c,d,x,s,t)  {return cm((b&c)|((~b)&d),a,b,x,s,t);}
      function gg(a,b,c,d,x,s,t)  {return cm((b&d)|(c&(~d)),a,b,x,s,t);}
      function hh(a,b,c,d,x,s,t)  {return cm(b^c^d,a,b,x,s,t);}
      function ii(a,b,c,d,x,s,t)  {return cm(c^(b|(~d)),a,b,x,s,t);}
      function sb(x) {
          var i;var nblk=((x.length+8)>>6)+1;var blks=new Array(nblk*16);for(i=0;i<nblk*16;i++) blks[i]=0;
          for(i=0;i<x.length;i++) blks[i>>2]|=x.charCodeAt(i)<<((i%4)*8);
          blks[i>>2]|=0x80<<((i%4)*8);blks[nblk*16-2]=x.length*8;return blks;
      }
      var i,x=sb(inputString),a=1732584193,b=-271733879,c=-1732584194,d=271733878,olda,oldb,oldc,oldd;
      for(i=0;i<x.length;i+=16) {olda=a;oldb=b;oldc=c;oldd=d;
          a=ff(a,b,c,d,x[i+ 0], 7, -680876936);d=ff(d,a,b,c,x[i+ 1],12, -389564586);c=ff(c,d,a,b,x[i+ 2],17,  606105819);
          b=ff(b,c,d,a,x[i+ 3],22,-1044525330);a=ff(a,b,c,d,x[i+ 4], 7, -176418897);d=ff(d,a,b,c,x[i+ 5],12, 1200080426);
          c=ff(c,d,a,b,x[i+ 6],17,-1473231341);b=ff(b,c,d,a,x[i+ 7],22,  -45705983);a=ff(a,b,c,d,x[i+ 8], 7, 1770035416);
          d=ff(d,a,b,c,x[i+ 9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,     -42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);
          a=ff(a,b,c,d,x[i+12], 7, 1804603682);d=ff(d,a,b,c,x[i+13],12,  -40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);
          b=ff(b,c,d,a,x[i+15],22, 1236535329);a=gg(a,b,c,d,x[i+ 1], 5, -165796510);d=gg(d,a,b,c,x[i+ 6], 9,-1069501632);
          c=gg(c,d,a,b,x[i+11],14,  643717713);b=gg(b,c,d,a,x[i+ 0],20, -373897302);a=gg(a,b,c,d,x[i+ 5], 5, -701558691);
          d=gg(d,a,b,c,x[i+10], 9,   38016083);c=gg(c,d,a,b,x[i+15],14, -660478335);b=gg(b,c,d,a,x[i+ 4],20, -405537848);
          a=gg(a,b,c,d,x[i+ 9], 5,  568446438);d=gg(d,a,b,c,x[i+14], 9,-1019803690);c=gg(c,d,a,b,x[i+ 3],14, -187363961);
          b=gg(b,c,d,a,x[i+ 8],20, 1163531501);a=gg(a,b,c,d,x[i+13], 5,-1444681467);d=gg(d,a,b,c,x[i+ 2], 9,  -51403784);
          c=gg(c,d,a,b,x[i+ 7],14, 1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);a=hh(a,b,c,d,x[i+ 5], 4,    -378558);
          d=hh(d,a,b,c,x[i+ 8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16, 1839030562);b=hh(b,c,d,a,x[i+14],23,  -35309556);
          a=hh(a,b,c,d,x[i+ 1], 4,-1530992060);d=hh(d,a,b,c,x[i+ 4],11, 1272893353);c=hh(c,d,a,b,x[i+ 7],16, -155497632);
          b=hh(b,c,d,a,x[i+10],23,-1094730640);a=hh(a,b,c,d,x[i+13], 4,  681279174);d=hh(d,a,b,c,x[i+ 0],11, -358537222);
          c=hh(c,d,a,b,x[i+ 3],16, -722521979);b=hh(b,c,d,a,x[i+ 6],23,   76029189);a=hh(a,b,c,d,x[i+ 9], 4, -640364487);
          d=hh(d,a,b,c,x[i+12],11, -421815835);c=hh(c,d,a,b,x[i+15],16,  530742520);b=hh(b,c,d,a,x[i+ 2],23, -995338651);
          a=ii(a,b,c,d,x[i+ 0], 6, -198630844);d=ii(d,a,b,c,x[i+ 7],10, 1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);
          b=ii(b,c,d,a,x[i+ 5],21,  -57434055);a=ii(a,b,c,d,x[i+12], 6, 1700485571);d=ii(d,a,b,c,x[i+ 3],10,-1894986606);
          c=ii(c,d,a,b,x[i+10],15,   -1051523);b=ii(b,c,d,a,x[i+ 1],21,-2054922799);a=ii(a,b,c,d,x[i+ 8], 6, 1873313359);
          d=ii(d,a,b,c,x[i+15],10,  -30611744);c=ii(c,d,a,b,x[i+ 6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21, 1309151649);
          a=ii(a,b,c,d,x[i+ 4], 6, -145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+ 2],15,  718787259);
          b=ii(b,c,d,a,x[i+ 9],21, -343485551);a=ad(a,olda);b=ad(b,oldb);c=ad(c,oldc);d=ad(d,oldd);
      }
      return rh(a)+rh(b)+rh(c)+rh(d);
    }
    h = md5(N);
    Result = h;
    return Result;
  };
  this.GetSysInfo = function () {
    var Result = $mod.TSysInfo.$new();
    function GetInfo(window)
        {
            var unknown = '-';
    
            // screen
            var screenSize = '';
            if (screen.width) {
                var width = (screen.width) ? screen.width : '';
                var height = (screen.height) ? screen.height : '';
                screenSize += '' + width + " x " + height;
            }
    
            // browser
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browser = navigator.appName;
            var version = '' + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;
    
            // Opera
            if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Opera Next
            if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 4);
            }
            // Legacy Edge
            else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
                browser = 'Microsoft Legacy Edge';
                version = nAgt.substring(verOffset + 5);
            }
            // Edge (Chromium)
            else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
                browser = 'Microsoft Edge';
                version = nAgt.substring(verOffset + 4);
            }
            // MSIE
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            }
            // Chrome
            else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            }
            // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Firefox
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            }
            // MSIE 11+
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            }
            // Other browsers
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            // trim the version string
            if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
    
            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }
    
            // mobile version
            var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
    
            // cookie
            var cookieEnabled = (navigator.cookieEnabled) ? true : false;
    
            if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                document.cookie = 'testcookie';
                cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
            }
    
            // system
            var os = unknown;
            var clientStrings = [
                {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
                {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
                {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
                {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
                {s:'Windows Vista', r:/Windows NT 6.0/},
                {s:'Windows Server 2003', r:/Windows NT 5.2/},
                {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
                {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
                {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
                {s:'Windows 98', r:/(Windows 98|Win98)/},
                {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
                {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
                {s:'Windows CE', r:/Windows CE/},
                {s:'Windows 3.11', r:/Win16/},
                {s:'Android', r:/Android/},
                {s:'Open BSD', r:/OpenBSD/},
                {s:'Sun OS', r:/SunOS/},
                {s:'Chrome OS', r:/CrOS/},
                {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
                {s:'iOS', r:/(iPhone|iPad|iPod)/},
                {s:'Mac OS X', r:/Mac OS X/},
                {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
                {s:'QNX', r:/QNX/},
                {s:'UNIX', r:/UNIX/},
                {s:'BeOS', r:/BeOS/},
                {s:'OS/2', r:/OS\/2/},
                {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }
    
            var osVersion = unknown;
    
            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }
    
            switch (os) {
                case 'Mac OS':
                case 'Mac OS X':
                case 'Android':
                    osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
                    break;
    
                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }
    
            // flash (you'll need to include swfobject)
            /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
            var flashVersion = 'no check';
            if (typeof swfobject != 'undefined') {
                var fv = swfobject.getFlashPlayerVersion();
                if (fv.major > 0) {
                    flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
                }
                else  {
                    flashVersion = unknown;
                }
            }
           Result.screenSize = screenSize;
           Result.browser = browser;
           Result.browserversion = version;
           Result.browsermajorVersion = majorVersion;
           Result.mobile = mobile;
           Result.os = os;
           Result.osVersion = osVersion;
           Result.cookieEnabled = cookieEnabled;
          }
          GetInfo(window);
    return Result;
  };
  $mod.$implcode = function () {
    $impl.FCompare = null;
    $impl.InternalCompare = function (AItem1, AItem2) {
      var Result = 0;
      Result = $impl.FCompare(rtl.getObject(AItem1),rtl.getObject(AItem2));
      return Result;
    };
    $impl.StripThousandSep = function (ps) {
      var Result = "";
      while (pas.System.Pos(pas.SysUtils.FormatSettings.ThousandSeparator,ps) > 0) pas.System.Delete({get: function () {
          return ps;
        }, set: function (v) {
          ps = v;
        }},pas.System.Pos(pas.SysUtils.FormatSettings.ThousandSeparator,ps),1);
      Result = ps;
      return Result;
    };
    $impl.VarPos = function (ASubValue, AValue, AResult) {
      var Result = 0;
      AResult.set(pas.System.Pos(ASubValue,AValue));
      Result = AResult.get();
      return Result;
    };
    $impl.IsDate = function (AValue, ADate) {
      var Result = false;
      var su = "";
      var ts = "";
      var da = 0;
      var mo = 0;
      var ye = 0;
      var ho = 0;
      var mi = 0;
      var se = 0;
      var err = 0;
      var dp = 0;
      var mp = 0;
      var yp = 0;
      var vp = 0;
      Result = false;
      ts = "";
      su = pas.SysUtils.UpperCase(pas.SysUtils.FormatSettings.ShortDateFormat);
      dp = pas.System.Pos("D",su);
      mp = pas.System.Pos("M",su);
      yp = pas.System.Pos("Y",su);
      da = 0;
      mo = 0;
      ye = 0;
      ho = 0;
      mi = 0;
      se = 0;
      vp = -1;
      if ($impl.VarPos(pas.SysUtils.FormatSettings.DateSeparator,AValue,{get: function () {
          return vp;
        }, set: function (v) {
          vp = v;
        }}) > 0) {
        su = pas.System.Copy(AValue,1,vp - 1);
        if ((dp < mp) && (dp < yp)) {
          pas.System.val$5(su,{get: function () {
              return da;
            }, set: function (v) {
              da = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }})}
         else if ((mp < dp) && (mp < yp)) {
          pas.System.val$5(su,{get: function () {
              return mo;
            }, set: function (v) {
              mo = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }})}
         else if ((yp < mp) && (yp < dp)) pas.System.val$5(su,{get: function () {
            return ye;
          }, set: function (v) {
            ye = v;
          }},{get: function () {
            return err;
          }, set: function (v) {
            err = v;
          }});
        if (err !== 0) return Result;
        pas.System.Delete({get: function () {
            return AValue;
          }, set: function (v) {
            AValue = v;
          }},1,vp);
        if ($impl.VarPos(pas.SysUtils.FormatSettings.DateSeparator,AValue,{get: function () {
            return vp;
          }, set: function (v) {
            vp = v;
          }}) > 0) {
          su = pas.System.Copy(AValue,1,vp - 1);
          if (((dp > mp) && (dp < yp)) || ((dp > yp) && (dp < mp))) {
            pas.System.val$5(su,{get: function () {
                return da;
              }, set: function (v) {
                da = v;
              }},{get: function () {
                return err;
              }, set: function (v) {
                err = v;
              }})}
           else if (((mp > dp) && (mp < yp)) || ((mp > yp) && (mp < dp))) {
            pas.System.val$5(su,{get: function () {
                return mo;
              }, set: function (v) {
                mo = v;
              }},{get: function () {
                return err;
              }, set: function (v) {
                err = v;
              }})}
           else if (((yp > mp) && (yp < dp)) || ((yp > dp) && (yp < mp))) pas.System.val$5(su,{get: function () {
              return ye;
            }, set: function (v) {
              ye = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }});
          if (err !== 0) return Result;
          pas.System.Delete({get: function () {
              return AValue;
            }, set: function (v) {
              AValue = v;
            }},1,vp);
          AValue = pas.SysUtils.Trim(AValue);
          if ($impl.VarPos(" ",AValue,{get: function () {
              return vp;
            }, set: function (v) {
              vp = v;
            }}) > 0) {
            ts = pas.System.Copy(AValue,vp,AValue.length);
            AValue = pas.System.Copy(AValue,1,vp - 1);
          };
          if ((dp > mp) && (dp > yp)) {
            pas.System.val$5(AValue,{get: function () {
                return da;
              }, set: function (v) {
                da = v;
              }},{get: function () {
                return err;
              }, set: function (v) {
                err = v;
              }})}
           else if ((mp > dp) && (mp > yp)) {
            pas.System.val$5(AValue,{get: function () {
                return mo;
              }, set: function (v) {
                mo = v;
              }},{get: function () {
                return err;
              }, set: function (v) {
                err = v;
              }})}
           else if ((yp > mp) && (yp > dp)) pas.System.val$5(AValue,{get: function () {
              return ye;
            }, set: function (v) {
              ye = v;
            }},{get: function () {
              return err;
            }, set: function (v) {
              err = v;
            }});
          if (err !== 0) return Result;
          if (da > 31) return Result;
          if (mo > 12) return Result;
          if (ts !== "") {
            if ($impl.VarPos(pas.SysUtils.FormatSettings.TimeSeparator,ts,{get: function () {
                return vp;
              }, set: function (v) {
                vp = v;
              }}) > 0) {
              su = pas.System.Copy(ts,1,vp - 1);
              pas.System.val$5(su,{get: function () {
                  return ho;
                }, set: function (v) {
                  ho = v;
                }},{get: function () {
                  return err;
                }, set: function (v) {
                  err = v;
                }});
              if (err !== 0) return Result;
              if (ho > 23) return Result;
              pas.System.Delete({get: function () {
                  return ts;
                }, set: function (v) {
                  ts = v;
                }},1,vp);
              if ($impl.VarPos(pas.SysUtils.FormatSettings.TimeSeparator,ts,{get: function () {
                  return vp;
                }, set: function (v) {
                  vp = v;
                }}) > 0) {
                su = pas.System.Copy(ts,1,vp - 1);
                pas.System.val$5(su,{get: function () {
                    return mi;
                  }, set: function (v) {
                    mi = v;
                  }},{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                if (err !== 0) return Result;
                pas.System.Delete({get: function () {
                    return ts;
                  }, set: function (v) {
                    ts = v;
                  }},1,vp);
                pas.System.val$5(ts,{get: function () {
                    return se;
                  }, set: function (v) {
                    se = v;
                  }},{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                if (err !== 0) return Result;
                if (se > 60) return Result;
              } else {
                pas.System.val$5(su,{get: function () {
                    return mi;
                  }, set: function (v) {
                    mi = v;
                  }},{get: function () {
                    return err;
                  }, set: function (v) {
                    err = v;
                  }});
                if (err !== 0) return Result;
              };
              if (mi > 59) return Result;
              Result = true;
            };
          } else Result = true;
          try {
            ADate.set(pas.SysUtils.EncodeDate(ye,mo,da) + pas.SysUtils.EncodeTime(ho,mi,se,0));
          } catch ($e) {
            Result = false;
          };
        };
      };
      return Result;
    };
    var larger = ">";
    var smaller = "<";
    var logand = "&";
    var logor = "^";
    var asterix = "*";
    var qmark = "?";
    var negation = "!";
    $impl.Matches = function (s0a, s1a) {
      var Result = false;
      var matching = false;
      var done = false;
      var len = 0;
      var lastchar = "";
      var s0 = 0;
      var s1 = 0;
      var s2 = 0;
      var s3 = 0;
      var oksmaller = false;
      var oklarger = false;
      var negflag = false;
      var compstr = "";
      var flag1 = false;
      var flag2 = false;
      var flag3 = false;
      var equal = false;
      var n1 = 0.0;
      var n2 = 0.0;
      var code1 = 0;
      var code2 = 0;
      var dt1 = 0.0;
      var dt2 = 0.0;
      var q = 0;
      var i = 0;
      i = 0;
      oksmaller = true;
      oklarger = true;
      flag1 = false;
      flag2 = false;
      flag3 = false;
      negflag = false;
      equal = false;
      s2 = pas.System.Pos(larger,s0a);
      if (s2 !== 0) {
        s2 += 1;
        if (s0a.charAt(s2 - i - 1) === "=") {
          equal = true;
          s2 += 1;
        };
        while (s0a.charAt(s2 - i - 1) === " ") s2 += 1;
        s3 = s2;
        len = 0;
        lastchar = "\x00";
        q = 0;
        while (((s2 - i) <= s0a.length) && (s0a.charAt(s2 - i - 1) !== " ") && (s2 <= s0a.length) && (pas.System.Odd(q) || ((s0a.charAt(s2 - i - 1) !== "&") && (s0a.charAt(s2 - i - 1) !== "|")))) {
          if (s0a.charAt(s2 - i - 1) === '"') q += 1;
          if ((len === 0) && (s0a.charAt(s2 - i - 1) === '"')) {
            s3 += 1}
           else len += 1;
          lastchar = s0a.charAt(s2 - i - 1);
          s2 += 1;
          if (((s2 - i) <= s0a.length) && (s0a.charAt(s2 - i - 1) === " ") && pas.System.Odd(q)) {
            lastchar = s0a.charAt(s2 - i - 1);
            s2 += 1;
          };
        };
        if ((len > 0) && (lastchar === '"')) len -= 1;
        compstr = pas.System.Copy(s0a,s3,len);
        pas.System.val$8($impl.StripThousandSep(s1a),{get: function () {
            return n1;
          }, set: function (v) {
            n1 = v;
          }},{get: function () {
            return code1;
          }, set: function (v) {
            code1 = v;
          }});
        pas.System.val$8($impl.StripThousandSep(compstr),{get: function () {
            return n2;
          }, set: function (v) {
            n2 = v;
          }},{get: function () {
            return code2;
          }, set: function (v) {
            code2 = v;
          }});
        dt2 = 0;
        if ($impl.IsDate(compstr,{get: function () {
            return dt2;
          }, set: function (v) {
            dt2 = v;
          }})) code2 = 1;
        dt1 = 0;
        if ($impl.IsDate(s1a,{get: function () {
            return dt1;
          }, set: function (v) {
            dt1 = v;
          }})) code1 = 1;
        if ((code1 === 0) && (code2 === 0)) {
          if (equal) {
            oklarger = n1 >= n2}
           else oklarger = n1 > n2;
        } else {
          if ($impl.IsDate(compstr,{get: function () {
              return dt2;
            }, set: function (v) {
              dt2 = v;
            }}) && $impl.IsDate(s1a,{get: function () {
              return dt1;
            }, set: function (v) {
              dt1 = v;
            }})) {
            if (equal) {
              oklarger = dt1 >= dt2}
             else oklarger = dt1 > dt2;
          } else {
            if (equal) {
              oklarger = pas.SysUtils.CompareStr(compstr,s1a) <= 0}
             else oklarger = pas.SysUtils.CompareStr(compstr,s1a) < 0;
          };
        };
        flag1 = true;
      };
      equal = false;
      s2 = pas.System.Pos(smaller,s0a);
      if (s2 !== 0) {
        s2 += 1;
        if (s0a.charAt(s2 - i - 1) === "=") {
          equal = true;
          s2 += 1;
        };
        lastchar = "\x00";
        while (((s2 - i) <= s0a.length) && (s0a.charAt(s2 - i - 1) === " ")) s2 += 1;
        s3 = s2;
        len = 0;
        q = 0;
        while (((s2 - i) <= s0a.length) && (s0a.charAt(s2 - i - 1) !== " ") && (s2 <= s0a.length) && (pas.System.Odd(q) || ((s0a.charAt(s2 - i - 1) !== "&") && (s0a.charAt(s2 - i - 1) !== "|")))) {
          if (s0a.charAt(s2 - i - 1) === '"') q += 1;
          if ((len === 0) && (s0a.charAt(s2 - i - 1) === '"')) {
            s3 += 1}
           else len += 1;
          lastchar = s0a.charAt(s2 - i - 1);
          s2 += 1;
        };
        if ((len > 0) && (lastchar === '"')) len -= 1;
        compstr = pas.System.Copy(s0a,s3,len);
        pas.System.val$8($impl.StripThousandSep(s1a),{get: function () {
            return n1;
          }, set: function (v) {
            n1 = v;
          }},{get: function () {
            return code1;
          }, set: function (v) {
            code1 = v;
          }});
        pas.System.val$8($impl.StripThousandSep(compstr),{get: function () {
            return n2;
          }, set: function (v) {
            n2 = v;
          }},{get: function () {
            return code2;
          }, set: function (v) {
            code2 = v;
          }});
        if ($impl.IsDate(compstr,{get: function () {
            return dt2;
          }, set: function (v) {
            dt2 = v;
          }})) code2 = 1;
        if ($impl.IsDate(s1a,{get: function () {
            return dt1;
          }, set: function (v) {
            dt1 = v;
          }})) code1 = 1;
        if ((code1 === 0) && (code2 === 0)) {
          if (equal) {
            oksmaller = n1 <= n2}
           else oksmaller = n1 < n2;
        } else {
          if ($impl.IsDate(compstr,{get: function () {
              return dt2;
            }, set: function (v) {
              dt2 = v;
            }}) && $impl.IsDate(s1a,{get: function () {
              return dt1;
            }, set: function (v) {
              dt1 = v;
            }})) {
            if (equal) {
              oksmaller = dt1 <= dt2}
             else oksmaller = dt1 < dt2;
          } else {
            if (equal) {
              oksmaller = pas.SysUtils.CompareStr(compstr,s1a) >= 0}
             else oksmaller = pas.SysUtils.CompareStr(compstr,s1a) > 0;
          };
        };
        flag2 = true;
      };
      s2 = pas.System.Pos(negation,s0a);
      if (s2 !== 0) {
        s2 += 1;
        while (s0a.charAt(s2 - i - 1) === " ") s2 += 1;
        s3 = s2;
        len = 0;
        lastchar = "\x00";
        q = 0;
        while ((s0a.charAt(s2 - i - 1) !== " ") && (s2 <= s0a.length) && (pas.System.Odd(q) || ((s0a.charAt(s2 - i - 1) !== "&") && (s0a.charAt(s2 - i - 1) !== "|")))) {
          if (s0a.charAt(s2 - i - 1) === '"') q += 1;
          if ((len === 0) && (s0a.charAt(s2 - i - 1) === '"')) {
            s3 += 1}
           else len += 1;
          lastchar = s0a.charAt(s2 - i - 1);
          s2 += 1;
        };
        if ((len > 0) && (lastchar === '"')) len -= 1;
        compstr = pas.System.Copy(s0a,s3,len);
        flag3 = true;
      };
      if (flag3) {
        if (pas.System.Pos(larger,s0a) === 0) flag1 = flag3;
        if (pas.System.Pos(smaller,s0a) === 0) flag2 = flag3;
      };
      if (pas.System.Pos(logor,s0a) !== 0) if (flag1 || flag2) {
        Result = oksmaller || oklarger;
        return Result;
      };
      if (pas.System.Pos(logand,s0a) !== 0) if (flag1 && flag2) {
        Result = oksmaller && oklarger;
        return Result;
      };
      if (((pas.System.Pos(larger,s0a) !== 0) && oklarger) || ((pas.System.Pos(smaller,s0a) !== 0) && oksmaller)) {
        Result = true;
        return Result;
      };
      s0 = 1;
      s1 = 1;
      done = (s0a === "") || (s1a === "");
      matching = true;
      while (!done && matching) {
        var $tmp = s0a.charAt(s0 - i - 1);
        if ($tmp === qmark) {
          matching = s1 <= s1a.length;
          if (matching) {
            s0 += 1;
            s1 += 1;
          };
        } else if ($tmp === negation) {
          negflag = true;
          s0 += 1;
        } else if ($tmp === '"') {
          s0 += 1;
        } else if ($tmp === asterix) {
          do {
            s0 += 1;
          } while (!(((s0 - i) > s0a.length) || (s0a.charAt(s0 - i - 1) !== asterix)));
          len = s1a.length - s1;
          s1 += len;
          matching = $impl.Matches(pas.System.Copy(s0a,s0,s0a.length),pas.System.Copy(s1a,s1,s1a.length));
          while ((len >= 0) && !matching) {
            s1 -= 1;
            len -= 1;
            matching = $impl.Matches(pas.System.Copy(s0a,s0,s0a.length),pas.System.Copy(s1a,s1,s1a.length));
          };
          if (matching) {
            s0 = s0a.length + 1;
            s1 = s1a.length + 1;
          };
        } else {
          if ((s0 <= s0a.length) && (s1 <= s1a.length)) {
            matching = s0a.charAt(s0 - i - 1) === s1a.charAt(s1 - i - 1)}
           else matching = false;
          if (matching) {
            s0 += 1;
            s1 += 1;
          };
        };
        done = (s0 > s0a.length) && (s1 > s1a.length);
      };
      if (negflag) {
        Result = !matching}
       else Result = matching;
      return Result;
    };
    $impl.StripLogicSpaces = function (AValue) {
      var Result = "";
      var i = 0;
      var k = 0;
      var q = 0;
      q = 0;
      i = 1;
      k = AValue.length;
      Result = "";
      while (i <= k) {
        if (AValue.charAt(i - 1) === '"') q += 1;
        if (AValue.charAt(i - 1) === " ") {
          if (pas.System.Odd(q)) Result = Result + AValue.charAt(i - 1);
        } else Result = Result + AValue.charAt(i - 1);
        i += 1;
      };
      return Result;
    };
    $impl.FirstChar = function (ACharset, AValue, spos) {
      var Result = "";
      var i = 0;
      var q = 0;
      var j = 0;
      j = 1;
      i = 1;
      q = 0;
      spos.set(-1);
      Result = "\x00";
      while (i <= AValue.length) {
        if (AValue.charAt(i - j - 1) === '"') q += 1;
        if (pas.SysUtils.CharInSet(AValue.charAt(i - j - 1),ACharset) && !pas.System.Odd(q)) {
          spos.set(i);
          Result = AValue.charAt(i - j - 1);
          break;
        };
        i += 1;
      };
      return Result;
    };
    $impl.ClosingParenthesis = function (s1) {
      var Result = 0;
      var i = 0;
      var j = 0;
      var k = 0;
      var r = 0;
      r = 0;
      j = 0;
      k = 0;
      i = 1;
      while (i <= s1.length) {
        if (s1.charAt(i - 1) === ")") k += 1;
        if (s1.charAt(i - 1) === "(") j += 1;
        if ((s1.charAt(i - 1) === ")") && (j === k)) {
          r = i;
          break;
        };
        i += 1;
      };
      Result = r;
      return Result;
    };
  };
},["RTLConsts","WEBLib.Consts","RTTI","WEBLib.REST"]);
//# sourceMappingURL=WEBLib.Utils.js.map
