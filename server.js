var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
  res.send(public/index.html);
});

app.listen((process.env.PORT || 8080));

exports.app = app;
