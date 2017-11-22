var express = require('express');
var router = express.Router();

var login = require('./login');
var logout = require('./logout');
var register = require('./register');
var view = require('./view_test');

router.use('/login', login);
router.use('/logout', logout);
router.use('/register', register);
router.use('/view', view);

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/login');
});

module.exports = router;
