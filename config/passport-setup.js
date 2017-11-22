const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

var GetEnvKeys() {
  var keys;
    JSON.parse(process.env.OAUTH_KEYS, function (key, value) {
      keys = value;
    });
    return keys;
}

const keys =  GetEnvKeys() || require('./keys');

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
