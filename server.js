var express = require('express');
var app = express();

app.get('/home', function (req, res) {
    res.render('pages/home');
});
console.log('App is running at http://localhost:8080');
app.listen(8080);

