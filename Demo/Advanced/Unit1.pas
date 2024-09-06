unit Unit1;

(* This demo application for the TServerLogger component demonstrates the
   communication with an arbitrary server, to which the logger data is
   sent.

   In this very example, the TServerLogger component talks to a mocked
   REST API, implemented by the provided PHP script named "API.php".

   1. Use property EnvelopeJSON to put a JSON envelope around the data
      to be sent to the server. In this example, this is:

       {
        "Function":"ClientLog",
        "LogData": null
       }

      This JSON envelope may be as complex as needed.

   2. Use property EnvelopeDataKey to tell the component into which
      property of the JSON envelope the actual logging data should be placed.
      In this example, this is: "LogData". This means, that the final
      JSON data posted to the server looks e.g. like this:

       {
         "Function": "ClientLog",
         "LogData": {
           "LogfileName": "Demo",
           "Data": [
             {"Level":1,"Time":1725184366,"Msg":"Hello World"}
             {"Level":1,"Time":1725184395,"Msg":"The solution is 42"}
             ... more data lines
           ]
        }
       }

   4. Use property ServerURL to define the resource on the server side to talk
      to. In this example, it is just a mockup API named "API.php".

   3. Use property OnServerResponse to set a custom server response examination
      handler that examines the response received from the server. In this
      example, server responses may look like this:

      - For a positive response:

         {"Result":"OK","Version":101569}

      - For an error response:

         {
          "Result":"Error",
           "ErrorDetails":{
             "ErrorClass":"EBaseRESTError",
             "ErrorMessage":"File not found"]
           },
          "Version":101569
         }

      The handler has to examine this data and has to decide whether the
      response represents a success or an error. See code below.

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
    CbxProvokeError: TWebCheckBox;
    EdNrRespToFail: TWebEdit;
    LabVersion: TWebLabel;
    procedure WebFormCreate(Sender: TObject);
    procedure ServerLogger1Error(Sender: TObject; Status: Integer; ErrorMessage: string);
    procedure ServerLogger1ServerResponse(Sender: TObject; const HTTPStatus: Integer;
     const Response: string; var IsSuccess: Boolean; var ErrorMessage: string);
    procedure BtnLogOneLineClick(Sender: TObject);
    procedure CbxEnableLoggingClick(Sender: TObject);
    procedure CbxProvokeErrorClick(Sender: TObject);
    [async] procedure BtnLogMioLinesClick(Sender: TObject);
   private
    FNrResponses  : Integer;
    FNrRespToFail : Integer;
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

// An example custom server response examination handler
procedure TForm1.ServerLogger1ServerResponse(Sender: TObject;
 const HTTPStatus: Integer; const Response: string; var IsSuccess: Boolean;
 var ErrorMessage: string);

{ The purpose of a custom server response examination handler is to examine
  the response received from the server side when a data packet was sent
  to the server with logging data.

  The component has a default built in response handler specific to the
  communication protocol established by the demo php script "LogIt.php".

  When the actual server establishes a different protocol, then a custom
  response handler can be provided to examine the server response and
  decide whether or not the response represents a success or an error.

  Parameters are:

   - HTTPStatus
      The status returned from the server or the network

   - Response
      A string that contains the response from the server, typically
      some JSON text

   - IsSuccess
      Signals the component whether the response was a success (True) or
      an error message (False). The component stops further transmissions
      to the server when an error (False) was indicated

   - ErrorMessage
      In case of an error (IsSuccess set to False), this may return an
      error message to the component. This error message is then passed
      to the OnError event handler (see above).

  See also the documentation of the OnServerResponse component event. }

var
 JOResp: TJSObject;
 JVResp: TJSValue;
 Res,
 RMsg  : string;
begin
 // HTTP status <> 200 is always supposed to be an error
 if HTTPStatus<>200 then
  begin
   ErrorMessage := 'HTTP error, status '+HTTPStatus.ToString+', msg: '+Response;
   IsSuccess := False;
   Exit;
  end;

 {-----------}

 // Custom examination of the response received from the server
 // These are possible responses from the mocked REST API:
 //  {"Result":"OK","Version":101569}
 //  {"Result":"Error","ErrorDetails":{"ErrorClass":"EBaseRESTError","ErrorMessage":"File not found"]},"Version":101569}
 try
  // Check the response is a JSON object
  JVResp := TJSJSON.parse(Response);
  if not isObject(JVResp) then raise Exception.Create('The response is not a JSON object');
  JOResp := toObject(JVResp);

  // Check response contains a "Result"
  if not JOResp.hasOwnProperty('Result') then raise Exception.Create('Property "Result" is missing');
  Res := string(JOResp['Result']);

  // Result can only be "OK" od "Error"
  if (Res<>'OK')and(Res<>'Error') then raise Exception.Create('Unknown "Result": '+Res);

  // Server reports an error
  if Res='Error' then
   begin
    // Try to extract the error message
    RMsg := 'Unretrievable error message';
    try
     // Check for "ErrorDetails"
     if not JOResp.hasOwnProperty('ErrorDetails') then abort;
     JVResp := JOResp['ErrorDetails'];
     if not isObject(JVResp) then abort;
     JOResp := toObject(JVResp);

     // Check for "ErrorMessage" in "ErrorDetails"
     if not JOResp.hasOwnProperty('ErrorMessage') then abort;
     RMsg := string(JOResp['ErrorMessage']);
    except
    end;
    raise Exception.Create('Server error: '+RMsg);
   end;

 except on E: Exception do
   begin
    // Signal error
    ErrorMessage := E.Message;
    IsSuccess := False;
    Exit;
   end;
 end;

 {-----------}

 // To simulate an error after some loops
 if FNrRespToFail>0 then
  begin
   Inc(FNrResponses);
   if FNrResponses>=FNrRespToFail then
    begin
     ErrorMessage := 'I just feel like failing after '+FNrResponses.ToString+' responses...';
     IsSuccess := False;
     Exit;
    end;
  end;

 IsSuccess := True;
end;

{------------------------------------}

// Toggle server logging on and off
procedure TForm1.CbxEnableLoggingClick(Sender: TObject);
begin
 FNrResponses := 0;
 ServerLogger1.Enabled := CbxEnableLogging.Checked;
end;

{------------------------------------}

// Toggle using a custom server response examination handler
procedure TForm1.CbxProvokeErrorClick(Sender: TObject);
begin
 FNrResponses := 0;
 FNrRespToFail := StrToInt(EdNrRespToFail.Text);
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

