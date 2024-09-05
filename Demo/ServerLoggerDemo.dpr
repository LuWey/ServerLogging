// JCL_DEBUG_EXPERT_GENERATEJDBG OFF
// JCL_DEBUG_EXPERT_INSERTJDBG OFF
// JCL_DEBUG_EXPERT_DELETEMAPFILE OFF
program ServerLoggerDemo;

(*
  Be sure to add the following 2 paths to the project options:

   1 : Under "Project > Options > Building > Delphi Compiler > Search Path",
       add the path to the "stub" component source. In this example this is:
         ..\Component Library Source
       Also add:
         ..\Common

   2 : Under "Project > Options > Building > TMS Web > Compile",
       add the path to the "real" component source. In this example this is:
         ..\Core Source
       Also add:
         ..\Common

   3 : If the server side php script is maintained and deployed with this
       TMS Web project as well, add ".php" (w/o quotes) to

         "Project > Options > Building > TMS Web > Compile >Automatically copied file suffixes"

       and add the php file itself to the project for deployment. In this demo,
       this is "LogIt.php", to be found here: <your project path>\PHP\Server
*)

uses
 Vcl.Forms,
 WEBLib.Forms,
 Unit1 in'Unit1.pas'{Form1: TWebForm}{*.html};

{$R *.res}

begin
 Application.Initialize;
 Application.MainFormOnTaskbar := True;
 Application.CreateForm(TForm1, Form1);
 Application.Run;
end.

