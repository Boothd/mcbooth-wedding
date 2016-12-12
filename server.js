var express = require('express');
var app = express();
var path = require('path');

app.use('./style*', express.static(path.join(__dirname, 'public')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('./img', express.static(path.join(__dirname, 'img')))



// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);