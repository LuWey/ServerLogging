unit WEBLib.ServerLoggerCompReg;

interface

uses
 System.Classes, WEBLib.ServerLoggerComp, WEBLib.DesignIntf;

procedure Register;

{##############################################################################}

implementation

procedure Register;
begin
 RegisterComponents('TMS WEB 3rd party', [TServerLogger]);
 RegisterClass(TServerLogger);
end;

end.

