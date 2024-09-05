unit WEBLIB.ServerLoggerComp;

(*
  The `TServerLogger` component in TMS Web Core serves as an interface to the
  `TServerLog` class, exposing its properties and methods for logging messages
  to a server asynchronously. See full documentation in unit ServerLogging.

  This is the TMS component "stub" that is faced towards Delphi.

  Properties:

   - Version
      Read only property to show the current component version in the object
      inspector at design time.

   - ServerURL
      This is the URL of the resource at the server side that the data to log
      is sent to using a http POST request. If no specific domain is used then
      the current server is implicitly used. Typically, the resource is
      a php script or a REST api endpoint.

      Example 1: 'myServerLogScript.php'
      As no domain is provided, the php script with name 'myServerLogScript.php'
      is expected to live on the current server the web application communicates
      with within the main directory. So, if the host url of the current web
      application using the component is say "https://mydomain.de/index.html",
      then this url would implicitly be used:
      "https://mydomain.de/myServerLogScript.php"

      Example 1: 'https://mydomain.de/myRESTserver/myEndpoint'
      The default resource at 'https://mydomain.de/myRESTserver/myEndpoint'
      handles the request.

   - LogfileName
      This is the name of the file on the server side to write the log data into.
      Typically, the server creates a session specific file out of this, like in
      this example php code:

        $FileName = $LogfilePath . $LogfileName . '_' . session_id() . '.log';

      This way, the logfiles can be distinguished between multiple clients.

   - SendInterval (>=1)
      The data to send to the server is cached until the time defined here
      in seconds has passed (or the number of lines cached is greater than
      CacheLines, see below)

   - CacheLines (>=0)
      The data to send to the server is cached until the number of lines
      cached reaches this number (or SendInterval seconds have passed, see above)

   - Enabled
      When set to true, messages passed to one of the console.xxx()
      functions are written to the browser console as usual but are as well
      sent to the server for server side logging.

   - Retries (>=0)
      The number of retries to successfully send data to the server again after
      sending failed the first time. If sending to the server consecutively
      fails more than Retries number of times, further sending is aborted, an
      exception will be raised containing the last error message (to be handled
      by OnError event handler) and Enabled is set to false. Retries may be set
      to 0 to prevent any retries and instead fail immediately on the first
      error.

   - OnError (opt.)
      An event that occurs whenever an exception was raised. This includes
      errors being returned from the server. When an error has occured,
      property Enabled will automatically be set to false and no further
      data is sent to the server.

   - OnServerResponse
      If a handler is assigned to this event, then whenever a HTTP response is
      received from the server, the response is passed to this handler to
      evaluate if the response, in combination with the passed HTTPStatus,
      represents a success or an error. On success, the handler should return
      IsSuccess as true. On error, the handler should return IsSuccess as
      false and an error message in ErrorMessage. When signaling an error
      (i.e. IsSuccess returned as false), the internal error counter is
      incremented and if the counter has not reached Retries, then the
      data is tried to send again to the server, therefore the handler
      may be called multiple times with the same error response. If the
      counter reaches Retries, an exception is raised (to be handled
      by the OnError event handler) and Enabled is set to false, which stops
      further sending to the server.

   - EnvelopeJSON
      An optional JSON object that is used as an envelope for the actual
      log data to send to the server. The structure and content of this JSON
      object is user defined and completely arbitrary, except for a property
      with the name defined in EnvelopeDataKey that must exist. Example:

       {
         "Function": "ClientLog",
         "foo": "bar",
         ....
         "LogData": null
       }

   - EnvelopeDataKey
      If EnvelopeJSON is set, then EnvelopeDataKey must hold the name of
      the property into which the actual data to send to the server is stored.
      in the example abovem this would be 'LogData'.

  Usage:
   Place the component on the form or data module and set the properties.
   Before making a call to any of the console function, like e.g.
   console.log('hello world'), set enabled to true.

  Disadvantage:
   While server logging is enabled, the browser console no longer shows
   the true code position of where the console method was called but
   always shows a code position from unit ServerLogging. This is because
   technically the original console method is overridden by a custom
   method that in turn now calls the original console method and hence is
   now the code position that is written to the console.

*)

interface

uses
 System.Classes, WEBLIB.Controls, JS, ServerLoggerCommon;

type
  [ComponentPlatforms(TMSWebPlatform)]
  TServerLogger = class(TComponent)
   private
    FSendInterval     : Integer;
    FCacheLines       : Integer;
    FLogfileName      : string;
    FServerURL        : string;
    FRetries          : Integer;
    FOnError          : TServerLogErrorEvent;
    FOnServerResponse : TServerResponseEvent;
    FEnvelopeDataKey  : string;
    FEnvelopeJSON     : TStrings;
    FEnabled          : Boolean;
    FVersion          : string;
    procedure SetEnvelopeJSON(const Value: TStrings);
    procedure SetVersion(const Value: string);
   protected
   published
    property Version          : string read FVersion write SetVersion;
    property LogfileName      : string read FLogfileName write FLogfileName;
    property ServerURL        : string read FServerURL write FServerURL;
    property SendInterval     : Integer read FSendInterval write FSendInterval;
    property CacheLines       : Integer read FCacheLines write FCacheLines;
    property Retries          : Integer read FRetries write FRetries;
    property OnError          : TServerLogErrorEvent read FOnError write FOnError;
    property OnServerResponse : TServerResponseEvent read FOnServerResponse write FOnServerResponse;
    property EnvelopeDataKey  : string read FEnvelopeDataKey write FEnvelopeDataKey;
    property EnvelopeJSON     : TStrings read FEnvelopeJSON write SetEnvelopeJSON;
    property Enabled          : Boolean read FEnabled write FEnabled; // Has to be last published property!!
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

procedure Register;

{##############################################################################}

implementation

procedure Register;
begin
 RegisterComponents('TMS WEB 3rd party', [TServerLogger]);
end;

{-------------------------------}

constructor TServerLogger.Create(AOwner: TComponent);
begin
 inherited Create(AOwner);
 FEnvelopeJSON := TStringList.Create;
 FVersion := ServerLoggerCommon.Version;
end;

{-------------------------------}

destructor TServerLogger.Destroy;
begin
 FEnvelopeJSON.Free;
 inherited;
end;

{-------------------------------}

procedure TServerLogger.SetEnvelopeJSON(const Value: TStrings);
begin
 FEnvelopeJSON.SetStrings(Value);
end;

{-------------------------------}

procedure TServerLogger.SetVersion(const Value: string);
begin
end;

{-------------------------------}

procedure TServerLogger.Flush;
begin
end;

{-------------------------------}

procedure TServerLogger.ConsoleError(const Data: array of const; SepStr: string);
begin
end;

procedure TServerLogger.ConsoleError(Text: string);
begin
end;

procedure TServerLogger.ConsoleInfo(Text: string);
begin
end;

procedure TServerLogger.ConsoleInfo(const Data: array of const; SepStr: string);
begin
end;

procedure TServerLogger.ConsoleLog(Text: string);
begin
end;

procedure TServerLogger.ConsoleLog(const Data: array of const; SepStr: string);
begin
end;

procedure TServerLogger.ConsoleWarn(const Data: array of const; SepStr: string);
begin
end;

procedure TServerLogger.ConsoleWarn(Text: string);
begin
end;

end.
