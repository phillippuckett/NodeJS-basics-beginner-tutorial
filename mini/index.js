var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8080;


var app = express();
app.use(bodyParser.json());
app.use(cors());


var data = [1, 2 , 3];

app.get('/data', function(req, res){
    res.send('get request sent');
})

app.put('/update', function(req, res){
    data.push(req.body.num)
    console.log(data);
    res.send('put request sent');
})

app.listen(port, function() {
    console.log('Listening on port ' + port);
});