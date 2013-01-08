/*!
 * JavaScript Language Identifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */

function StringHashMap() {
	this.hash = {};
}

StringHashMap.prototype = {
	containsKey : function(key) {
		return this.hash.hasOwnProperty(key)
	},

	getKeys : function() {
		var asKeys = [];
		for (var sKey in this.hash)
			asKeys.push(sKey);

		return asKeys;
	},

	forEach : function(callback) {
		for (var sKey in this.hash)
			callback(sKey, this.hash[sKey]);
	},

	getValue : function(key) {
		if (this.hash.hasOwnProperty(key))
			return this.hash[key];
	},

	setValue : function(key, value) {
		this.hash[key] = value;
	},

	clear : function() {
		this.hash = {};
	},

	count : function() {
		var total = 0;
		for (var sKey in this.hash)
			total++;
		return total;
	}
};
