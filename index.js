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
