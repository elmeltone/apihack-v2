var express = require('express');

var App = express();

App.use(express.static(__dirname + '/public'));

App.get('*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

App.listen((process.env.PORT || 8080));

exports.App = App;
