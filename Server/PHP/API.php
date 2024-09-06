<?php
session_start();

// Set error reporting to a minimal level
error_reporting(0);

// Set the content type to plain text for all responses
header('Content-Type: text/plain');

// Map severity levels from ordinal values to short string representations
$SeverityMap = [
  0 => 'UND',
  1 => 'LOG',
  2 => 'INF',
  3 => 'WRN',
  4 => 'ERR'
];

try {
  // Retrieve the raw POST data
  $input = @file_get_contents('php://input');
  if ($input === false) {
    // Bad Request
    http_response_code(400);
    exit('Failed to read input');
  }

  // Decode the JSON data into an associative array
  $data = @json_decode($input, true);
  if ($data === null) {
    // Bad Request
    http_response_code(400);
    exit('Failed to decode JSON');
  }

  // Check if the required data is present in the decoded JSON
  $OK = isset($data['Function']) && isset($data['LogData']);
  if ($OK) $OK = ($data['Function'] === "ClientLog");
  if ($OK) $data = $data['LogData'];

  if ($OK && isset($data['LogfileName']) && isset($data['Data'])) {
    $LogName = $data['LogfileName'];
    $LogEntries = $data['Data'];

    // Prepare the log file path and name
    $LogfilePath = __DIR__ . DIRECTORY_SEPARATOR;
    $LogfileName = $LogfilePath . $LogName . '_' . session_id() . '.log';

    // Open logfile for append
    $file = @fopen($LogfileName, "a");
    if (!$file) throw new Exception(
       'Unable to open file: "' . $LogfileName . '", reason: "' . error_get_last()['message'] . '"');

    // Iterate over each log entry
    foreach ($LogEntries as $entry) {

      // Map the severity level from the ordinal value
      $level = @$SeverityMap[$entry['Level']];

      // If the level is not set in the map, default to 'UNK' (Unknown)
      if (!isset($level)) $level = 'UNK';

      // Format the log message
      $logMessage = @sprintf(
        "[%s] %s: %s\n",
        @date('Y-m-d H:i:s', $entry['Time']),  // Format the timestamp
        $level,                                // Severity level
        $entry['Msg']                          // Log message
      );
      if ($logMessage===false) throw new Exception(
       'Error preparing log text, reason: "' . error_get_last()['message'] . '"');

      // Write to logfile
      $written = @fwrite($file, $logMessage);
      if (!$written) throw new Exception(
       'Error writing to logfile, reason: "' . error_get_last()['message'] . '"');
    }

    // Close logfile
    if (!fclose($file)) throw new Exception(
      'Error closing logfile, reason: "' . error_get_last()['message'] . '"');

  } else {
    // Bad Request
    http_response_code(400);
    exit(
      <<<JSON
      {
        "Result":"Error",
          "ErrorDetails":{
            "ErrorClass":"EBaseRESTError",
            "ErrorMessage":"Invalid log data"
          },
        "Version":101569
      }
      JSON
    );
  }

  // Send a success response
  http_response_code(200);
  exit('{"Result":"OK","Version":101569}');

// Internal Server Errors
} catch (Exception $e) {
  http_response_code(500);
  $RMsg = $e->getMessage();
  exit(
    <<<JSON
    {
      "Result":"Error",
        "ErrorDetails":{
          "ErrorClass":"EBaseRESTError",
          "ErrorMessage":"$RMsg"
        },
      "Version":101569
    }
    JSON
  );
} catch (Error $e) {
  http_response_code(500);
  $RMsg = $e->getMessage();
  exit(
    <<<JSON
    {
      "Result":"Error",
        "ErrorDetails":{
          "ErrorClass":"EBaseRESTError",
          "ErrorMessage":"$RMsg"
        },
      "Version":101569
    }
    JSON
  );
}
