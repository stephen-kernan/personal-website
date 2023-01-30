(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "App": () => (/* binding */ _app_App),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "nextjs-google-analytics"
const external_nextjs_google_analytics_namespaceObject = require("nextjs-google-analytics");
// EXTERNAL MODULE: ./pages/index.css
var pages = __webpack_require__(1713);
// EXTERNAL MODULE: ./pages/App.css
var App = __webpack_require__(9639);
// EXTERNAL MODULE: ./pages/global.css
var global = __webpack_require__(245);
// EXTERNAL MODULE: ./pages/prism.css
var prism = __webpack_require__(5486);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./pages/_app.js
// pages/_app.js







const bakugoLight = "#f3f2f1";
const eraserHead = "#373638";
const background = eraserHead;
const newColor = "#9EBCEA";
const playerOne = "#9EBCEA";
const playerTwo = "#EA9E9E";
const playerThree = "#F8D996";
const playerFour = "#8DDBE0";
const colorHexes = {
  bakugoLight,
  eraserHead,
  newColor,
  playerOne,
  playerTwo,
  playerThree,
  playerFour
};
const mhaTheme = (0,material_.createTheme)({ ...colorHexes,
  palette: {
    mode: "light",
    ...colorHexes,
    text: {
      primary: eraserHead,
      contrastText: eraserHead,
      icon: eraserHead
    },
    background: {
      default: background,
      paper: background
    },
    primary: {
      main: newColor
    }
  },
  typography: {
    fontFamily: "'Epilogue', 'Sora', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 900
    },
    huge: {
      fontSize: "clamp(3.5rem, 14vw, 9rem)",
      lineHeight: "clamp(4.5rem, 18vw, 12rem)",
      fontWeight: 900
    },
    semiHuge: {
      fontSize: "clamp(2rem, 10vw, 6rem)",
      lineHeight: "clamp(2.5rem, 12vw, 7rem)",
      fontWeight: 900
    },
    subHeader: {
      fontSize: "clamp(1rem, 5vw, 2.5rem)",
      lineHeight: "clamp(2rem, 7.5vw, 3.5rem)",
      fontWeight: 700,
      // fontStyle: "italic",
      marginTop: "0 !important"
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 900
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600
    },
    body1: {
      fontFamily: "'Epilogue', 'Sora', sans-serif",
      fontSize: "clamp(1rem, 4vw, 1.25rem)",
      lineHeight: "1.75em"
    },
    body2: {
      fontFamily: "'Sora', 'Epilogue', sans-serif",
      fontSize: "1.25rem"
    }
  }
});
const darkModeAdditions = (0,material_.createTheme)({ ...mhaTheme,
  palette: { ...mhaTheme.palette,
    mode: "dark",
    text: {
      primary: bakugoLight,
      contrastText: bakugoLight,
      icon: bakugoLight
    }
  }
});
const _app_App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(material_.ThemeProvider, {
    theme: darkModeAdditions
  }, /*#__PURE__*/external_react_default().createElement(material_.CssBaseline, null), /*#__PURE__*/external_react_default().createElement(external_nextjs_google_analytics_namespaceObject.GoogleAnalytics, {
    trackPageViews: true
  }), /*#__PURE__*/external_react_default().createElement(Component, pageProps)));
};
/* harmony default export */ const _app = (_app_App);

/***/ }),

/***/ 9639:
/***/ (() => {



/***/ }),

/***/ 245:
/***/ (() => {



/***/ }),

/***/ 1713:
/***/ (() => {



/***/ }),

/***/ 5486:
/***/ (() => {



/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1156));
module.exports = __webpack_exports__;

})();