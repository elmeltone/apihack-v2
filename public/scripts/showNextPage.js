var $ = require('jquery');
var showImage = require('./showImage');
var showSearchResults = require('./showSearchResults');
var showError = require('./showError');

var showNextPage = function(url, label) {
  var page = '<a href="'+url+'" class="'+label+' pagination">'+label+'</a>';
  return page;
};

module.exports = showNextPage;
