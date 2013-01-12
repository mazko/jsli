/*!
 * JavaScript Language Identifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */

function ProfilingWriter(callback) {
	var buffer = [ 0, 0, '_'.charCodeAt(0) ], buffer_pointer = 1;

	function addLetter(character) {
        	buffer = buffer.slice(1);
		buffer.push(character.charCodeAt(0));
        	buffer_pointer++;
        	if (buffer_pointer >= buffer.length) {
            		callback(String.fromCharCode.apply(String, buffer));
        	}
	}

	function addSeparator() {
        	addLetter('_');
        	buffer_pointer = 1;
	}

	this.write = function(strText) {

		if ((!strText && strText !== "") || !strText.substring) {
			throw ("Bad text ?");
		}

		var i, character;
		for (i = 0; i < strText.length; i++) {
			character = strText.charAt(i).toLowerCase();
			if (isUnicodeLetter(character)) {
				addLetter(character);
			} else {
				addSeparator();
			}
		}
	};

	this.close = function() {
		addSeparator();
	};
}
