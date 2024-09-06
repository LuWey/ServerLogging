object Form1: TForm1
  Width = 290
  Height = 109
  OnCreate = WebFormCreate
  object LabVersion: TWebLabel
    Left = 195
    Top = 20
    Width = 61
    Height = 13
    Alignment = taRightJustify
    AutoSize = False
    Caption = 'Vers.: ---'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object BtnLogOneLine: TWebButton
    Left = 15
    Top = 45
    Width = 156
    Height = 25
    Caption = 'Write 1 line to console'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = BtnLogOneLineClick
  end
  object CbxEnableLogging: TWebCheckBox
    Left = 15
    Top = 17
    Width = 131
    Height = 22
    Caption = 'Server logging enabled'
    ChildOrder = 1
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = CbxEnableLoggingClick
  end
  object BtnLogMioLines: TWebButton
    Left = 15
    Top = 76
    Width = 156
    Height = 25
    Caption = 'Write 1 mio. lines to console'
    ChildOrder = 2
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = BtnLogMioLinesClick
  end
  object ServerLogger1: TServerLogger
    Version = '2.1'
    LogfileName = 'Demo'
    ServerURL = 'LogIt.php'
    SendInterval = 3
    CacheLines = 10000
    Retries = 3
    OnError = ServerLogger1Error
    Enabled = True
    Left = 205
    Top = 55
  end
end
