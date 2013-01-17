/*!
 * JavaScript Language Identifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */

var LanguageIdentifier = (function() {
	var PROFILES = new StringHashMap();
	return {
		addProfile : function(language, ngrams, totalcount) {
			PROFILES.setValue(language, new LanguageProfile(ngrams, totalcount));
		},
		getSupportedLanguages : function() {
			return PROFILES.getKeys();
		},
		identify : function(text) {

			function TooMuchNgramsFound(){}

			var t_profile = new LanguageProfile(), allowedNgramsLeft = 7000, minLanguage = "unknown", minDistance = 1.0, writer = new ProfilingWriter(function(ngram){if(--allowedNgramsLeft){t_profile.add(ngram);}else{throw new TooMuchNgramsFound();}});

			try {
				writer.write(text);
				writer.close();
			} catch (ex) {
				if (!(ex instanceof TooMuchNgramsFound)) {
					throw ex; 
				}
			}

			PROFILES.forEach(function (language, profile) {
				var distance = t_profile.distance(profile);
				if (distance < minDistance) {
					minDistance = distance;
					minLanguage = language;
				}
			});

			return {
				language: minLanguage,
				distance: minDistance,
				isReasonablyCertain: minDistance < 0.022,
				sliced: allowedNgramsLeft === 0
			};
		},
		checkAddonsConsistency : function() {
			PROFILES.forEach(function (language, profile) {
				var ngrams = profile.getNgramsKeys(), totalNgrams = ngrams.length, ngram, ngramCount, totalCount = profile.getTotalCount(), i;
				for (i = 0; i < totalNgrams; i++) {
					ngram = ngrams[i];
					if (ngram.length !== 3) {
						throw ("Expecting 3 chars in every ngram, but this one '" + ngram + "' from " + language + " doesn't" );
					}
					ngramCount = profile.getNgramCount(ngram);
					if (isNaN(parseFloat(ngramCount)) || !isFinite(ngramCount) || ngramCount <= 0) {
						throw ("Expecting count > 0, but found '" + ngramCount + "' in ngram: '" + ngram + "', language: " + language);
					}
					totalCount -= ngramCount;
				}

				if (totalCount) {
					throw ("Summ of all ngrams count for '" + language + "' not equals with totalCount: " + profile.getTotalCount() + ", diff: " + totalCount);
				}
			});
		}
	};
}());
