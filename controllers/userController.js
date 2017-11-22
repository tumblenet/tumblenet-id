const express = require('express');
const passport = require('passport');

const siteConfig = require('../config/site');

// User Login GET
exports.user_login_get = function (req, res) {
  res.render('login_form');
};

// User Login POST
exports.user_login_post = function (req, res) {
  res.send("Not Implemented: User Log In " + req.methid);
};

// User Register GET
exports.user_register_get = function (req, res) {
  res.render('register_form');
};

// User Register POST
exports.user_register_post = function (req, res) {
  res.send("Not Implemented: User Register " + req.methid);
};

exports.user_auth_login = function (req,res) {
  console.log("user_auth_login");
  var service = req.params.service;
  console.log("service:" + service);
  var scope = siteConfig.site.oauthServices.find(function (item) {
    return item.name == service;
  }).scope;
  console.log("scope: " + scope);
  passport.authenticate(req.params.service,{
    scope: scope
  })(req,res);
};

exports.user_auth_login_callback = function (req, res) {
  res.render('page',{
    title:"Callback",
    body: "you have reached callback."
  });
};

// User Logout GET
exports.user_logout_get = function (req, res) {
  res.send("Not Implemented: User Log Out");
};
