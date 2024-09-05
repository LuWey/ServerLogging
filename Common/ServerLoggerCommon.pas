Unit ServerLoggerCommon;

Interface

Const
 Version = '2.0';

Type
  // Event type for handling server log errors
  TServerLogErrorEvent = Procedure(Sender : TObject; Status : Integer; ErrorMessage : String) of object;

  // Event type for evaluating server responses
  TServerResponseEvent = Procedure(Sender : TObject;
                         Const HTTPStatus : Integer;
                           Const Response : String;
                            Var IsSuccess : Boolean;
                         Var ErrorMessage : String) of object;

Implementation

End.
