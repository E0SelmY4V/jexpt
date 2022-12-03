"use strict";

/**@type {(exp:any,...mods:any[])=>void} */
module.exports = function () {
	var exp = arguments[0];
	for (var i = arguments.length - 1; i > 0; --i)
		for (var j in arguments[i])
			exp[j] = arguments[i][j];
};