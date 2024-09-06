# About ServerLogging

#### A TMS Web Core class and ready-to-use component for sending browser console output to a server

The TServerLog class provides a logging mechanism that asynchronously sends browser console log messages to a server using web workers. It captures console log messages (log, info, warn, error) such as

```Pascal
console.log('Hello World');
console.info('Breaking - The chicken was found dead on the other side. Who killed it?')
console.error('Received 43, expected 42');
```

and sends them to a specified server URL for storage or further processing. The class ensures that the logs are sent in batches to reduce the number of HTTP requests, and it handles retries and error notifications in case of failure. Log submission is performed even when the main thread is busy, ensuring that logging is not interrupted by main thread activity. No changes to existing code, be it Pascal or JavaScript, nor any dependent libraries are required to use this class.

A ready-to-use example PHP script is provided that can be installed on any web server that supports PHP. It formats the logging data received from a client and writes it to a local file. The filename is extended with the session id to create unique log files for each client.

In addition to this out-of-the-box PHP solution, the data sent to the server can be wrapped in a custom JSON envelope object according to the actual needs of the server implementation. A custom response handler can be provided that parses the server response for a success/fail decision.

A TMS Web Core component called TServerLogger is provided that wraps this class for even easier use. It can be installed into the Delphi IDE as usual and is ready to be dropped into a form.  Two TMS Web Core demo applications are provided. One is to demonstrate the straight out of the box implementation using the provided PHP script. The second one shows a more complex communication with the server. It provides a JSON data envelope and a custom server response handler.

###### Unresolved minor issue: Normally, data written to the browser console includes the position in the source code from which the console method was called, displayed on the right side of the browser console window. When server logging is enabled, a source code position originating from unit ServerLogging is printed. This is an unfortunate consequence. This is because custom methods intercept the JavaScript console methods, which then call the original console methods. These custom methods are now the code from which the writing to the console originates. This issue only arises when the component is enabled. When the component is disabled, the source code position printed is back to normal. Input from JavaScript experts on how to resolve this issue is welcome!.

## Usage

Set up out-of-the-box server logging using the provided PHP script by following these instructions. For a more complex example with a custom server communication protocol, consult the documentation in the code and the demo application.

 - Install the TServerLogger component in the Delphi IDE. This is the component icon: ![TServerLogger32](https://github.com/user-attachments/assets/7137ba34-7470-4cb7-9038-8f8d6e5f3871)

 - Drop the component on the form. 
 - Study the demo applications DPR files to determine which project options must be set.
 - Set the ServerURL to the server-side resource that receives the data. Enter "LogIt.php" if you want to use the provided ready-to-use PHP script.
 - Set the LogfileName to something like "mylogfile." The server should store the received logging data using this name. If you use "LogIt.php", the data will be written to a file with a name that combines the name you set here with the actual PHP session ID. This makes the file unique for each client.
 - Set the SendInterval in seconds, typically 3. The data to send to the server is cached until the time defined here in seconds has passed (or the number of lines cached is greater than CacheLines, see below).
 - Set CacheLines to a number of lines, typically 1000. The data to send to the server is cached until it reaches this number of lines (or the SendInterval seconds have passed, see above).
 - Set the number of retries to successfully send data to the server again after a failed attempt, typically 3. If sending to the server fails more than the defined number of times, further attempts will be aborted. An exception will be raised containing the last error message, which may optionally be handled by the OnError event handler. Additionally, Enabled will be set to false. Set Retries to 0 to prevent any retries and fail immediately on the first error.
- Optionally set a custom error event handler for OnError. Use this handler to present the error to the user, for example. In any case, if an error occurs, the component will be automatically disabled and further sending to the server will be stopped.

You can achieve the same result by using an instance of the TServerLog class directly instead of the provided component. The class is located in Unit ServerLogging.pas. This class is configured the same as the component.

### Pitfalls
When launching a TMS Web Core application that makes use of ServerLogging (by hitting F9 in the Delphi IDE) for local debugging, the mini webserver from TMS kicks in to handle the client requests. This mini webserver does not provide any PHP capabilities. Therefore, if you want to use the provided PHP script to handle the logging data on the server side, you will need a more sophisticated local webserver that supports PHP. XAMPP is a good example of such a server. Set up a local debug environment using XAMPP as follows:

 - Assume the TMS Web Core project is named "myapp" and its debug output directory is "c:\myapp\TMSWeb\Debug"
 - Download and install XAMPP and start the built in Apache webserver
 - Open a command window and move to the "htdocs" subdiretory of your XAMPP installation
 - Enter `mklink /D myapp "c:\myapp\TMSWeb\Debug"` to create a symbolic link that points to the TMS Web Core application output directory
 - When hitting F9 in the Delphi IDE, the browser starts with a URL like so: `localhost:8000/myapp/index.html`
 - Delete the ":8000" portion from this URL such that it now reads: `localhost/myapp/index.html` and hit `<enter>`

Remember to add the PHP file to the TMS Web Core project so that it is automatically deployed to the appropriate \TMSWeb\ output subdirectory. Also remember to add ".php" (with leading dot!) to the project options under `Project > Options > Building > TMS Web > Compile > Automatically copied file suffixes`.
