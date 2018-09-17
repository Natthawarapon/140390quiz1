var express = require('express');
var app = express();


var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

connection.connect();
////////////////////////////////////
app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.render('pages/home');
});
app.get('/home', function (req, res) {
    res.render('pages/home');
});
app.get('/student', function (req, res) {
    res.render('pages/student');
});
app.get('/subjects', function (req, res) {
    res.render('pages/subjects');
});

console.log('App is running at http://localhost:8080');
app.listen(8080);
