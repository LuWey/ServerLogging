unit Unit1;

(*

   This basic demo application for the TServerLogger component demonstrates the
   simple usage in combination with the provided ready-to-use PHP script.

*)

interface

uses
 jsdelphisystem, JS, Web, System.SysUtils, WEBLib.Forms, WEBLib.StdCtrls,
 WEBLIB.ServerLoggerComp, System.Classes, Vcl.Controls, Vcl.StdCtrls,
 Vcl.Dialogs, WebLib.REST;

type
  TForm1=class(TWebForm)
    BtnLogOneLine: TWebButton;
    ServerLogger1: TServerLogger;
    CbxEnableLogging: TWebCheckBox;
    BtnLogMioLines: TWebButton;
    LabVersion: TWebLabel;
    procedure WebFormCreate(Sender: TObject);
    procedure ServerLogger1Error(Sender: TObject; Status: Integer; ErrorMessage: string);
    procedure BtnLogOneLineClick(Sender: TObject);
    procedure CbxEnableLoggingClick(Sender: TObject);
    [async] procedure BtnLogMioLinesClick(Sender: TObject);
   private
   public
  end;

var
 Form1: TForm1;

 {##############################################################################}

implementation

{$R *.dfm}

{------------------------------------}

procedure TForm1.WebFormCreate(Sender: TObject);
begin
 CbxEnableLogging.Checked := ServerLogger1.Enabled;
 LabVersion.Caption := 'Vers.: '+ServerLogger1.Version;
end;

{------------------------------------}

// Error handler
procedure TForm1.ServerLogger1Error(Sender: TObject; Status: Integer; ErrorMessage: string);
begin
 ShowMessage(
  'SERVER LOGGER ERROR'#13#10+
  'Status:'+Status.ToString+#13#10+
  'Error:'+ErrorMessage+#13#10+
  'Server logging is disabled now');
 CbxEnableLogging.Checked := ServerLogger1.Enabled;
end;

{------------------------------------}

// Toggle server logging on and off
procedure TForm1.CbxEnableLoggingClick(Sender: TObject);
begin
 ServerLogger1.Enabled := CbxEnableLogging.Checked;
end;

{------------------------------------}

// Just log one line
procedure TForm1.BtnLogOneLineClick(Sender: TObject);
begin
 Console.log('Hello World');
end;

{------------------------------------}

// Hammer the server log with 1 mio. log entries
procedure TForm1.BtnLogMioLinesClick(Sender: TObject);
var I: Integer;
begin
 for I := 1 to 1000000 do
  begin
   if not ServerLogger1.Enabled then break;

   if (I mod 1000)=0 then
    // Kind of good old "Application.ProcessMessages" to keep message pumps going
    {$IFDEF PAS2JS} asm await new Promise(resolve => setTimeout(resolve, 1)) end{$ENDIF};

   Console.Log(I.ToString+' The quick brown fox jumps over...');
  end;
end;

{------------------------------------}

end.

