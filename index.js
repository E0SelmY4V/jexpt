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
		for (var exp = this.exp, req = this.req, e, i = arguments.length - 1; i >= 0; --i) {
			e = req('./' + arguments[i]);
			for (var j in e) exp[j] = e[j];
		}
		return this;
	}
};

function exp() {
	var moe = arguments[0];
	if (arguments.length === 2
		&& typeof arguments[1] === 'function'
		&& arguments[1].length === 1
		&& typeof arguments[1].cache === 'object'
	) return new Reged(moe, arguments[1]);
	for (var e, i = arguments.length - 1; i > 0; --i) {
		e = arguments[i];
		for (var j in e) moe[j] = e[j];
	}
	return moe;
}
module.exports = exp;