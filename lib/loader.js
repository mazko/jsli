/*!
 * JavaScript Language Identifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */

var fs = require('fs');
var jsli = require('./LanguageIdentifier.js');
var li = jsli.LanguageIdentifier;
fs.readdirSync("Lng").forEach(function (item) {
	require("./Lng/"+item)(li);
});
module.exports = li;
