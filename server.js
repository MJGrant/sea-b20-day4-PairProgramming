var express = require('express'),
    http = require('http'),
    app = express();

app.use(express.static(__dirname + '/static/'));

var server = http.createServer(app);

server.listen(3000, function() {
  console.log("open localhost:3000");
});