# About ServerLogging

#### A TMS Web Core class and out-of-the-box component for sending browser console output to a server

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

 - Install the TServerLogger component in the Delphi IDE. This is the component icon: <img alt="Component Icon" src="data:image/jpeg;base64,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" />
 - Drop the component on the form. 
 - Study the demo applications DPR files to determine which project options must be set.
  - Set the ServerURL to the server-side resource that receives the data. Enter "LogIt.php" if you want to use the provided ready-to-use PHP script.
 - Set the LogfileName to something like "mylogfile." The server should store the received logging data using this name. If you use "LogIt.php", the data will be written to a file with a name that combines the name you set here with the actual PHP session ID. This makes the file unique for each client.
 - Set the SendInterval in seconds, typically 3. The data to send to the server is cached until the time defined here in seconds has passed (or the number of lines cached is greater than CacheLines, see below).
 - Set CacheLines to a number of lines, typically 1000. The data to send to the server is cached until it reaches this number of lines (or the SendInterval seconds have passed, see above).
- Set the number of retries to successfully send data to the server again after a failed attempt. If sending to the server fails more than the defined number of times, further attempts will be aborted. An exception will be raised containing the last error message, which may optionally be handled by the OnError event handler. Additionally, Enabled will be set to false. Set Retries to 0 to prevent any retries and fail immediately on the first error.
- Optionally set a custom error event handler for OnError. Use this handler to present the error to the user, for example. In any case, if an error occurs, the component will be automatically disabled and further sending to the server will be stopped.

You can achieve the same result by using an instance of the TServerLog class directly instead of the provided component. The class is located in Unit ServerLogging.pas. This class is configured the same as the component.

### Pitfall
When launching a TMS Web Core application using ServerLogging by hitting F9 in the Delphi IDE for local debugging, the mini webserver from TMS kicks in to handle the client requests. This mini webserver does not provide any PHP capabilities. Therefore, if you want to use the provided PHP script to handle the logging data on the server side, you will need a more sophisticated local webserver that supports PHP. XAMPP is a good example of such a server. Set up a local debug environment using XAMPP as follows:

 - Assume the TMS Web Core project is named "myapp" and its debug output directory is "c:\myapp\TMSWeb\Debug"
 - Download and install XAMPP and start the built in Apache webserver
 - Open a command window and move to the "htdocs" subdiretory of your XAMPP installation
 - Enter `mklink /D myapp "c:\myapp\TMSWeb\Debug"` to create a symbolic link that points to the TMS Web Core application output directory
 - When hitting F9 in the Delphi IDE, the browser starts with a URL like so: `localhost:8000/myapp/index.html`
 - Delete the ":8000" portion from this URL such that it now reads: `localhost/myapp/index.html` and hit `<enter>`

