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

			if ((!text && text !== "") || !text.substring) {
				throw ("Bad text ?");
			}

			var t_profile = new LanguageProfile(), writer = new ProfilingWriter(function(ngram){t_profile.add(ngram);}), minLanguage = "unknown", minDistance = 1.0;
			writer.write(text);

			PROFILES.forEach(function (language, profile){
				var distance = t_profile.distance(profile);
				if (distance < minDistance) {
					minDistance = distance;
					minLanguage = language;
				}
			});

			return {
				language: minLanguage,
				distance: minDistance,
				isReasonablyCertain: minDistance < 0.022
			};
		}
	};
}());
