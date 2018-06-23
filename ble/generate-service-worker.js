var config = {
  "swFile": "sw.js",
  "staticFileGlobs": [
    "manifest.json",
    "styles.css",
    "bulb/*.css",
    "index.html",
    "*./png",
    "bulb/**/*.{ttf,woff,woff2,eof}",
    "bulb/*.js",
    "bulb/*.html",
    "bulb/*.{png,jpg,gif,svg,mp3}"
  ],
  "runtimeCaching": [
    {
      "urlPattern": /^https:\/\//,
      "handler": "networkFirst"
    }
  ],
  "handleFetch": true,
  "stripPrefix": "bulb/",
  "cacheId": "blue-webapp",
  "maximumFileSizeToCacheInBytes": 4194304,
  "ignoreUrlParametersMatching": [/./],
  "verbose": true
};

require('sw-precache').write(config.swFile, config);
