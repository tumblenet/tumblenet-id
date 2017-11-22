const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const keys = JSON.parse(process.env.OAUTH_KEYS || require('./keys'));

function getKeys(strategy) {
  var wantedKeys = keys[strategy];
  wantedKeys.callbackURL = "/login/" + strategy + "/redirect";
  return wantedKeys;
};

passport.use(
  new GoogleStrategy(getKeys("google"), function () {
    //
  })
);
