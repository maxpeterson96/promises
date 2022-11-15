/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
var needle = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, results) => {
    if (err) {
      callback(err);
    } else {
      let line = results.split('\n')[0];
      callback(err, line);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  needle.get(url, function(err, response) {
    if (err || response.statusCode !== 200) {
      callback(err);
    } else {
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
