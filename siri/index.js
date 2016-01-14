var express = require('express');
var port = 8887;

var app = express();

app.listen(port, function (){
   console.log('Listening on port ' + port); 
});