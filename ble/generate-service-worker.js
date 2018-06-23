var config = {
  "swFile": "sw.js",
  "staticFileGlobs": [
    "manifest.json",
    "web/**/*.css",
    "bulb/*.css",
    "bulb/**/*.{ttf,woff,woff2,eof}",
    "bulb/*.js",
    "bulb/*.html",
    "*.html",
    "*./png",
    "bulb*.{png,jpg,gif,svg,mp3}"
  ],
  "runtimeCaching": [
    {
      "urlPattern": /^https:\/\//,
      "handler": "networkFirst"
    }
  ],
  "handleFetch": true,
  "stripPrefix": "bulb/",
  "cacheId": "web-lightbulb",
  "maximumFileSizeToCacheInBytes": 4194304,
  "ignoreUrlParametersMatching": [/./],
  "verbose": true
};

require('sw-precache').write(config.swFile, config);
