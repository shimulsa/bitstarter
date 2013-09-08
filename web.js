var express = require('express');
var fs = require('fs');
var connect = require('connect');
var app = express.createServer(express.logger());
app.use(express.static(__dirname + "/public"));

var indexFileContents = fs.readFileSync('index.html');

app.get('/', function(request, response) {
response.send(indexFileContents.toString('utf8',0, indexFileContents.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
