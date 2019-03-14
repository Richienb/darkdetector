[![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/darkdetector/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/darkdetector)
[![CodeFactor Score](https://www.codefactor.io/repository/github/Richienb/darkdetector/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/Richienb/darkdetector)

# Dark Detector

[![NPM](https://nodei.co/npm/darkdetector.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/darkdetector)

Detect dark mode in any browser.

```js
const darkdetector = require("darkdetector")
if (darkdetector()) {
    console.log("Dark mode is enabled.")
} else {
    console.log("Dark mode is disabled.")
}
```
