var $ = require('jquery');
var showImage = require('./showImage');
var showError = require('./showError');
var showNextPage = require('./showNextPage');

var showSearchResults = function(resultNum) {
  var commaValue = resultNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var results = '<p class="count"><span class="highlight2">' + commaValue + '</span> results...</p>';
  return results;
};

module.exports = showSearchResults;
