"use strict";

/**@type {(a:any,b:any)=>void} */
function merObj(a, b) {
	for (var i in b) typeof a[i] === 'object' && typeof b[i] === 'object'
		? merObj(a[i], b[i])
		: (a[i] = b[i]);
}

/**@type {(exp:any,...mods:any[])=>void} */
module.exports = function () {
	var exp = arguments[0];
	for (var i = arguments.length - 1; i > 0; --i) merObj(exp, arguments[i]);
};