
// create server
var express = require('express');
var app = express();

// app.get('/', function(request, response) {
//     response.send("Hello World!");
// });

app.listen(3000, function () {
    console.log("Listening on port 3000");
})

app.use(express.static(__dirname + "/public"));
