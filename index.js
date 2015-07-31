var crypto = require('crypto');
var pad = require('pad');

exports.padTime = function padTime (time) {
  return pad(16, time, '0');
};

exports.cb = function cb () {
  var args = Array.prototype.slice.call(arguments);
  var fn = args.shift();
  if (typeof fn !== 'function') { return; }
  fn.apply(null, args);
};

// season-independent episode number
// > S01 E22 = 1022
exports.sien = function sien (season, episode) {
  return season * 1000 + episode;
};

exports.removeNonScalars = function (obj) {
  function replacer (key, value) {
    if (key && typeof value === 'object') { return undefined; }
    return value;
  }

  return JSON.parse(JSON.stringify(obj, replacer));
};

exports.generateUserToken = function (secret, username) {
  return crypto
    .createHash('sha1')
    .update(username + secret)
    .digest('hex')
    .substr(0, 16);
};

exports.validateUserToken = function (secret, username, token) {
  return exports.generateUserToken(secret, username) === token;
};
