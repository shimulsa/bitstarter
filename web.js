var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
//var buffer = new Buffer();
var indexFileContents = fs.readFileSync('index.html');
//buffer.write(indexFileContents, 0);
app.get('/', function(request, response) {
response.send( indexFileContents.toString('utf8',0,27);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
