unit WEBLib.ServerLoggerComp;

(*
  This is a component wrapper for class TServerLog from unit
  ServerLogging. See documentation there.

  This is the "real" TMS Web Core component that has the
  actual code to execute.

  See also documentation in the component stub
   ..\Stub\WEBLIB.ServerLoggerComp.pas
*)

interface

uses
 System.Classes, Web, ServerLogging, ServerLoggerCommon;

type
  TServerLogger=class(TComponent)
   private
    FServerLog    : TServerLog;
    FEnvelopeJSON : TStringList;
    FVersion      : string;
    function GetLogfileName: string;
    function GetServerURL: string;
    function GetSendInterval: Integer;
    function GetCacheLines: Integer;
    function GetEnabled: Boolean;
    procedure SetLogfileName(const Value: string);
    procedure SetServerURL(const Value: string);
    procedure SetSendInterval(const Value: Integer);
    procedure SetCacheLines(const Value: Integer);
    procedure SetEnabled(const Value: Boolean);
    function GetOnError: TServerLogErrorEvent;
    procedure SetOnError(const Value: TServerLogErrorEvent);
    function GetEnvelopeDataKey: string;
    function GetEnvelopeJSON: TStringList;
    procedure SetEnvelopeDataKey(const Value: string);
    procedure SetEnvelopeJSON(const Value: TStringList);
    function GetOnServerResponse: TServerResponseEvent;
    procedure SetOnServerResponse(const Value: TServerResponseEvent);
    function GetRetries: Integer;
    procedure SetRetries(const Value: Integer);
    procedure OnEnvelopeJSONChanged(Sender: TObject);
   protected
    procedure Loaded; override;
   published
    property Version          : string read FVersion write FVersion;
    property ServerURL        : string read GetServerURL write SetServerURL;
    property LogfileName      : string read GetLogfileName write SetLogfileName;
    property SendInterval     : Integer read GetSendInterval write SetSendInterval;
    property CacheLines       : Integer read GetCacheLines write SetCacheLines;
    property Retries          : Integer read GetRetries write SetRetries;
    property OnError          : TServerLogErrorEvent read GetOnError write SetOnError;
    property OnServerResponse : TServerResponseEvent read GetOnServerResponse write SetOnServerResponse;
    property EnvelopeJSON     : TStringList read GetEnvelopeJSON write SetEnvelopeJSON;
    property EnvelopeDataKey  : string read GetEnvelopeDataKey write SetEnvelopeDataKey;
    property Enabled          : Boolean read GetEnabled write SetEnabled;
   public
    constructor Create(AOwner: TComponent); override;
    destructor Destroy; override;
    procedure Flush;

    // The following methods bypass sending logs to the server and only
    // output the text to the browser console, regardless of whether server
    // logging is enabled or not. DISADVANTAGE: The position of the source
    // code that is output to the console is not retained.
    procedure ConsoleLog(Text: string); overload;
    procedure ConsoleInfo(Text: string); overload;
    procedure ConsoleWarn(Text: string); overload;
    procedure ConsoleError(Text: string); overload;
    procedure ConsoleLog(const Data: array of const; SepStr: string=''); overload;
    procedure ConsoleInfo(const Data: array of const; SepStr: string=''); overload;
    procedure ConsoleWarn(const Data: array of const; SepStr: string=''); overload;
    procedure ConsoleError(const Data: array of const; SepStr: string=''); overload;
  end;

{##############################################################################}

implementation

uses System.SysUtils;

constructor TServerLogger.Create(AOwner: TComponent);
begin
 inherited Create(AOwner);
 FServerLog := TServerLog.Create;
 FEnvelopeJSON := TStringList.Create;
 FEnvelopeJSON.OnChange := Self.OnEnvelopeJSONChanged;
end;

destructor TServerLogger.Destroy;
begin
 FServerLog.Free;
 FEnvelopeJSON.Free;
 inherited Destroy;
end;

procedure TServerLogger.Loaded;
begin
 inherited;
end;

procedure TServerLogger.OnEnvelopeJSONChanged(Sender: TObject);
begin
 FServerLog.EnvelopeJSON := Trim(FEnvelopeJSON.Text);
end;

function TServerLogger.GetLogfileName: string;
begin
 Result := FServerLog.LogfileName;
end;

function TServerLogger.GetOnError: TServerLogErrorEvent;
begin
 Result := FServerLog.OnError;
end;

function TServerLogger.GetOnServerResponse: TServerResponseEvent;
begin
 Result := FServerLog.OnServerResponse;
end;

function TServerLogger.GetRetries: Integer;
begin
 Result := FServerLog.Retries;
end;

function TServerLogger.GetServerURL: string;
begin
 Result := FServerLog.ServerURL;
end;

function TServerLogger.GetSendInterval: Integer;
begin
 Result := FServerLog.SendInterval;
end;

function TServerLogger.GetCacheLines: Integer;
begin
 Result := FServerLog.CacheLines;
end;

function TServerLogger.GetEnabled: Boolean;
begin
 Result := FServerLog.Enabled;
end;

function TServerLogger.GetEnvelopeDataKey: string;
begin
 Result := FServerLog.EnvelopeDataKey;
end;

function TServerLogger.GetEnvelopeJSON: TStringList;
begin
 Result := FEnvelopeJSON;
end;

procedure TServerLogger.SetLogfileName(const Value: string);
begin
 FServerLog.LogfileName := Value;
end;

procedure TServerLogger.SetOnError(const Value: TServerLogErrorEvent);
begin
 FServerLog.OnError := Value;
end;

procedure TServerLogger.SetOnServerResponse(const Value: TServerResponseEvent);
begin
 FServerLog.OnServerResponse := Value;
end;

procedure TServerLogger.SetRetries(const Value: Integer);
begin
 FServerLog.Retries := Value;
end;

procedure TServerLogger.SetServerURL(const Value: string);
begin
 FServerLog.ServerURL := Value;
end;

procedure TServerLogger.SetSendInterval(const Value: Integer);
begin
 FServerLog.SendInterval := Value;
end;

procedure TServerLogger.SetCacheLines(const Value: Integer);
begin
 FServerLog.CacheLines := Value;
end;

procedure TServerLogger.SetEnabled(const Value: Boolean);
begin
 FServerLog.Enabled := Value;
end;

procedure TServerLogger.SetEnvelopeDataKey(const Value: string);
begin
 FServerLog.EnvelopeDataKey := Value;
end;

procedure TServerLogger.SetEnvelopeJSON(const Value: TStringList);
begin
 FEnvelopeJSON.Free;
 FEnvelopeJSON := Value;
end;

procedure TServerLogger.Flush;
begin
 FServerLog.Flush;
end;

procedure TServerLogger.ConsoleLog(Text: string);
begin
 FServerLog.ConsoleLog(Text);
end;

procedure TServerLogger.ConsoleInfo(Text: string);
begin
 FServerLog.ConsoleInfo(Text);
end;

procedure TServerLogger.ConsoleWarn(Text: string);
begin
 FServerLog.ConsoleWarn(Text);
end;

procedure TServerLogger.ConsoleError(Text: string);
begin
 FServerLog.ConsoleError(Text);
end;

procedure TServerLogger.ConsoleLog(const Data: array of const; SepStr: string='');
begin
 FServerLog.ConsoleLog(Data, SepStr);
end;

procedure TServerLogger.ConsoleInfo(const Data: array of const; SepStr: string='');
begin
 FServerLog.ConsoleInfo(Data, SepStr);
end;

procedure TServerLogger.ConsoleWarn(const Data: array of const; SepStr: string='');
begin
 FServerLog.ConsoleWarn(Data, SepStr);
end;

procedure TServerLogger.ConsoleError(const Data: array of const; SepStr: string='');
begin
 FServerLog.ConsoleError(Data, SepStr);
end;

end.

