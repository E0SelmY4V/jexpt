"use strict";

function Reged(exp, req) {
	this.exp = exp;
	this.req = req;
}
Reged.prototype = {
	exp: null,
	req: function () { return {}; },
	pack: function () {
		var exp = this.exp, req = this.req;
		for (var i = arguments.length - 1; i >= 0; --i)
			if (typeof arguments[i] === 'string') exp[arguments[i]] = req('./' + arguments[i])
			else {
				var e = arguments[i];
				for (var j in e) exp[j] = req('./' + e[j]);
			}
		return this;
	},
	merge: function () {
		var exp = this.exp, req = this.req;
		for (var i = arguments.length - 1; i >= 0; --i) merObj(exp, req('./' + arguments[i]));
		return this;
	}
};

function exp() {
	var exp = arguments[0];
	if (arguments.length === 2
		&& arguments[1].length === 1
		&& typeof arguments[1].cache === 'object'
	) return new Reged(exp, arguments[1]);
	for (var e, i = arguments.length - 1; i > 0; --i) {
		e = arguments[i];
		for (var j in e) exp[j] = e[j];
	}
}
module.exports = exp;