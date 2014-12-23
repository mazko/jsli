# Using the library with `node.js`

You can use the library through `node.js` using the following command:

    $ node -e 'require("./loader.js").identify("De opvatting van een professor: niet Shakespeare is belangrijk, maar het commentaar op hem.");' -p
    { language: 'nl',
      distance: 0.11229497684583473,
      isReasonablyCertain: false,
      sliced: false }

In other words, the `loader.js` file loads all `LanguageIdentifier.js` as well as all the files it can find in the `Lng` folder, and the passes the `LanguageIdentifier` as return object.
