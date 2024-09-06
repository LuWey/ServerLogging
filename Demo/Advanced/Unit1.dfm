object Form1: TForm1
  Width = 290
  Height = 151
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
    Top = 80
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
    Top = 111
    Width = 156
    Height = 25
    Caption = 'Write 1 mio. lines to console'
    ChildOrder = 2
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = BtnLogMioLinesClick
  end
  object CbxProvokeError: TWebCheckBox
    Left = 15
    Top = 45
    Width = 170
    Height = 22
    Caption = 'Fail after this nr. of responses'
    ChildOrder = 1
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = CbxProvokeErrorClick
  end
  object EdNrRespToFail: TWebEdit
    Left = 206
    Top = 45
    Width = 50
    Height = 22
    ChildOrder = 4
    HeightPercent = 100.000000000000000000
    Text = '5'
    WidthPercent = 100.000000000000000000
  end
  object ServerLogger1: TServerLogger
    Version = '2.1'
    LogfileName = 'Demo'
    ServerURL = 'API.php'
    SendInterval = 1
    CacheLines = 10000
    Retries = 0
    OnError = ServerLogger1Error
    OnServerResponse = ServerLogger1ServerResponse
    EnvelopeDataKey = 'LogData'
    EnvelopeJSON.Strings = (
      '{'
      ' "Function":"ClientLog",'
      ' "LogData": null'
      '}')
    Enabled = True
    Left = 205
    Top = 90
  end
end
