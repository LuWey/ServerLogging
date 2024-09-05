object Form1: TForm1
  Width = 290
  Height = 180
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
  object WebLabel2: TWebLabel
    Left = 40
    Top = 80
    Width = 145
    Height = 13
    Caption = 'Fail after this nr. of responses'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object BtnLogOneLine: TWebButton
    Left = 15
    Top = 105
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
    Top = 136
    Width = 156
    Height = 25
    Caption = 'Write 1 mio. lines to console'
    ChildOrder = 2
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = BtnLogMioLinesClick
  end
  object CbxCustomResponseHandler: TWebCheckBox
    Left = 15
    Top = 45
    Width = 241
    Height = 22
    Caption = 'Custom server response handling enabled'
    ChildOrder = 1
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = CbxCustomResponseHandlerClick
  end
  object EdNrRespToFail: TWebEdit
    Left = 206
    Top = 77
    Width = 50
    Height = 22
    ChildOrder = 4
    HeightPercent = 100.000000000000000000
    Text = '5'
    WidthPercent = 100.000000000000000000
  end
  object ServerLogger1: TServerLogger
    Version = '2.0'
    LogfileName = 'Demo'
    ServerURL = 'http://localhost/myAMI//WWYPHP/REST/API.php'
    SendInterval = 1
    CacheLines = 10000
    Retries = 0
    OnError = ServerLogger1Error
    EnvelopeDataKey = 'LogData'
    EnvelopeJSON.Strings = (
      '{'
      ' "Function":"ClientLog",'
      ' "LogData": null'
      '}')
    Enabled = True
    Left = 205
    Top = 115
  end
end
