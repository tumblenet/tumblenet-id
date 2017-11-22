const express = require('express');
const router = express.Router();

var extractUrlParams = function (url) {
  var output = {};
  var params = url.split('?')[1];
  var paramsArray = params.split('&');
  for (var i = 0; i < paramsArray.length; i++) {
    var name = paramsArray[i].split('=')[0];
    var content = paramsArray[i].split('=')[1].split('+').join(' ').split('%20').join(' ');
    output[name]=content;
  }
  return output;
};

router.get('/:view', function (req, res) {
  res.render(req.params.view, extractUrlParams(req.url));
});

module.exports = router;
