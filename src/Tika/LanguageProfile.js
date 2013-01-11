/*!
 * JavaScript Language Identifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */

function LanguageProfile(ngrams_hash, count_hash) {

	if (ngrams_hash ? !count_hash : count_hash) {
		throw ("Both 'ngrams_hash' and 'count_hash' must be initialized either none of them");
	}

	var ngrams = new StringHashMap(ngrams_hash), totalCount = count_hash || 0;

	function GET_NGRAM_LENGTH() {
		return 3;
	}

	this.getNgramsKeys = function() {
		return ngrams.getKeys();
	};

	this.getTotalCount = function() {
		return totalCount;
	};

	this.getNgramCount = function(ngram) {
		var ncounter = ngrams.getValue(ngram);
		if (ncounter) {
			return ncounter;
		}
		return 0;
	};

	this.add = function(ngram, count) {
		count = count || 1;

		if (GET_NGRAM_LENGTH() !== ngram.length) {
			throw ("Unable to add an ngram of incorrect length: " + ngram.length + " != " + GET_NGRAM_LENGTH());
		}

		var ncounter = ngrams.getValue(ngram);
		if (!ncounter) {
			ngrams.setValue(ngram, count);
		} else {
			ngrams.setValue(ngram, ncounter + count);
		}

		totalCount += count;
	};

	this.distance = function(that) {
		var sumOfSquares = 0.0, thisCount = Math.max(this.getTotalCount(), 1.0), thatCount = Math.max(that.getTotalCount(), 1.0), ngrams_set = new StringHashMap(), concat_array = this.getNgramsKeys().concat(that.getNgramsKeys()), for_length = concat_array.length, i, ngram, thisFrequency, thatFrequency, difference;
		for (i = 0; i < for_length; i++) {
			ngram = concat_array[i];
			ngrams_set.setValue(ngram);
		}
		ngrams_set = ngrams_set.getKeys();
		for_length = ngrams_set.length;
		for (i = 0; i < for_length; i++) {
			ngram = ngrams_set[i];
			thisFrequency = this.getNgramCount(ngram) / thisCount;
			thatFrequency = that.getNgramCount(ngram) / thatCount;
			difference = thisFrequency - thatFrequency;
			sumOfSquares += difference * difference;
		}

		return Math.sqrt(sumOfSquares);
	};
}
