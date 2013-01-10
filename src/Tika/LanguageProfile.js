/*!
 * JavaScript Language Identifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */

function LanguageProfile() {
	var ngrams = new StringHashMap();
	var totalCount = 0;

	function GET_NGRAM_LENHTH() {
		return 3;
	}

	this.getNgramsKeys = function() {
		return ngrams.getKeys();
	}

	this.getTotalCount = function() {
		return totalCount;
	}

	this.getNgramCount = function(ngram) {
		var ncounter = ngrams.getValue(ngram);
		if (ncounter) {
			return ncounter;
		} else {
			return 0;
		}
	}

	this.add = function(ngram, count) {
		count = count || 1;

		if (GET_NGRAM_LENHTH() != ngram.length) {
			throw ("Unable to add an ngram of incorrect length: " + ngram.length + " != " + GET_NGRAM_LENHTH());
		}

		var ncounter = ngrams.getValue(ngram);
		if (!ncounter) {
			ngrams.setValue(ngram, count);
		} else {
			ngrams.setValue(ngram, ncounter + count);
		}

		totalCount += count;
	}

	this.distance = function(that) {
		var sumOfSquares = 0.0;
		var thisCount = Math.max(this.getTotalCount(), 1.0);
		var thatCount = Math.max(that.getTotalCount(), 1.0);

		var ngrams_set = new StringHashMap();
		var concat_array = this.getNgramsKeys().concat(that.getNgramsKeys());
		var for_length = concat_array.length;
		for (var i = 0; i < for_length; i++) {
			var ngram = concat_array[i];
			ngrams_set.setValue(ngram);
		}
		ngrams_set = ngrams_set.getKeys();
		for_length = ngrams_set.length;
		for (var i = 0; i < for_length; i++) {
			var ngram = ngrams_set[i];
			var thisFrequency = this.getNgramCount(ngram) / thisCount;
			var thatFrequency = that.getNgramCount(ngram) / thatCount;
			var difference = thisFrequency - thatFrequency;
			sumOfSquares += difference * difference;
		}

		return Math.sqrt(sumOfSquares);
	}
}
