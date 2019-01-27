const PORT = 5555;

var express = require('express');
var app = express();

app.get('/',function (req,res) {
    res.send('Hello World')
});

app.get('/test',function (req,res) {
    res.send('["Tony","Lisa","Michael","Ginger","Food"]')
});

app.listen(PORT, function () {
    console.log('API starter')
})