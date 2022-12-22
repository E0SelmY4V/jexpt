"use strict";

function merObj(a, b) {
	for (var i in b) typeof a[i] === 'object' && typeof b[i] === 'object'
		? merObj(a[i], b[i])
		: (a[i] = b[i]);
}

function Reged(exp, req) {
	this.exp = exp;
	this.req = req;
}
Reged.prototype = {
	exp: null,
	req: function () { return {}; },
	pack: function () {
		for (var i = arguments.length - 1; i >= 0; --i)
			typeof arguments[i] === 'string'
				? this.exp[arguments[i]] = this.req('./' + arguments[i])
				: this.exp[arguments[i].name] = this.req('./' + arguments[i].dest);
		return this;
	},
	merge: function () {
		for (var i = arguments.length - 1; i >= 0; --i) merObj(this.exp, this.req('./' + arguments[i]));
		return this;
	}
};

function exp() {
	var exp = arguments[0];
	for (var i = arguments.length - 1; i > 0; --i) merObj(exp, arguments[i]);
	return new Reged(exp, arguments[1]);
}
module.exports = exp;