var express = require('express');

var App = express();

App.get('/', function(request, response) {
  response.send(public/index.html);
});

App.listen((process.env.PORT || 8080));

exports.App = App;
