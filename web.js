var express = require('express');
var app = express();
var fs = requre('fs');
app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    var contentBuffer = fs.readFileSync("index.html");
    var contentString = contentBuffer.toString();
    response.send(contentString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
