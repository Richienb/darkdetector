[![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/darkdetector/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/darkdetector)
[![CodeFactor Score](https://www.codefactor.io/repository/github/Richienb/darkdetector/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/Richienb/darkdetector)

# Dark Detector

[![NPM](https://nodei.co/npm/darkdetector.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/darkdetector)

Detect dark mode in any browser.

## Importing

From your NodeJS application:

```js
const DarkDetector = require("darkdetector")
```

From your web application:

```html
<script src="https://unpkg.com/darkdetector/darkdetector.min.js"></script>
```

## Usage

```js
// Check if dark mode enabled
if (DarkDetector({
    query: true, // Check for dark mode media query
    highcontrast: false, // Check for white on black media query
    bodyclass: false, // Check for class on body class
    time: false // Check for night time
})) console.log("Dark mode is enabled.")
```
