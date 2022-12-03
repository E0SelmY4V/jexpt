"use strict";

function merObj(a, b) {
	for (var i in b) typeof a[i] === 'object' && typeof b[i] === 'object'
		? merObj(a[i], b[i])
		: (a[i] = b[i]);
}

function exp() {
	var exp = arguments[0];
	for (var i = arguments.length - 1; i > 0; --i) merObj(exp, arguments[i]);
}
module.exports = exp;