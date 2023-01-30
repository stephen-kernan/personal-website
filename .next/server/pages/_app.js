/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextjs_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-google-analytics */ \"nextjs-google-analytics\");\n/* harmony import */ var nextjs_google_analytics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_google_analytics__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/prism */ \"prismjs/prism\");\n/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_prism__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismjs_components_prism_jsx_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-jsx.min */ \"prismjs/components/prism-jsx.min\");\n/* harmony import */ var prismjs_components_prism_jsx_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx_min__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar.min.css */ \"./node_modules/prismjs/plugins/toolbar/prism-toolbar.min.css\");\n/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar.min */ \"prismjs/plugins/toolbar/prism-toolbar.min\");\n/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar_min__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ \"prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard\");\n/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ \"./pages/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.css */ \"./pages/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global.css */ \"./pages/global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _prism_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prism.css */ \"./pages/prism.css\");\n/* harmony import */ var _prism_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_prism_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);\n// pages/_app.js\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst bakugoLight = \"#f3f2f1\";\nconst eraserHead = \"#373638\";\nconst background = eraserHead;\nconst newColor = \"#9EBCEA\";\nconst playerOne = \"#9EBCEA\";\nconst playerTwo = \"#EA9E9E\";\nconst playerThree = \"#F8D996\";\nconst playerFour = \"#8DDBE0\";\nconst colorHexes = {\n  bakugoLight,\n  eraserHead,\n  newColor,\n  playerOne,\n  playerTwo,\n  playerThree,\n  playerFour\n};\nconst mhaTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__.createTheme)({ ...colorHexes,\n  palette: {\n    mode: \"light\",\n    ...colorHexes,\n    text: {\n      primary: eraserHead,\n      contrastText: eraserHead,\n      icon: eraserHead\n    },\n    background: {\n      default: background,\n      paper: background\n    },\n    primary: {\n      main: newColor\n    }\n  },\n  typography: {\n    fontFamily: \"'Epilogue', 'Sora', sans-serif\",\n    h1: {\n      fontSize: \"3rem\",\n      fontWeight: 900\n    },\n    huge: {\n      fontSize: \"clamp(3.5rem, 14vw, 9rem)\",\n      lineHeight: \"clamp(4.5rem, 18vw, 12rem)\",\n      fontWeight: 900\n    },\n    semiHuge: {\n      fontSize: \"clamp(2rem, 10vw, 6rem)\",\n      lineHeight: \"clamp(2.5rem, 12vw, 7rem)\",\n      fontWeight: 900\n    },\n    subHeader: {\n      fontSize: \"clamp(1rem, 5vw, 2.5rem)\",\n      lineHeight: \"clamp(2rem, 7.5vw, 3.5rem)\",\n      fontWeight: 700,\n      // fontStyle: \"italic\",\n      marginTop: \"0 !important\"\n    },\n    h2: {\n      fontSize: \"2rem\",\n      fontWeight: 900\n    },\n    h3: {\n      fontSize: \"1.5rem\",\n      fontWeight: 600\n    },\n    h4: {\n      fontSize: \"1.25rem\",\n      fontWeight: 600\n    },\n    body1: {\n      fontFamily: \"'Epilogue', 'Sora', sans-serif\",\n      fontSize: \"clamp(1rem, 4vw, 1.25rem)\",\n      lineHeight: \"1.75em\"\n    },\n    body2: {\n      fontFamily: \"'Sora', 'Epilogue', sans-serif\",\n      fontSize: \"1.25rem\"\n    }\n  }\n});\nconst darkModeAdditions = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__.createTheme)({ ...mhaTheme,\n  palette: { ...mhaTheme.palette,\n    mode: \"dark\",\n    text: {\n      primary: bakugoLight,\n      contrastText: bakugoLight,\n      icon: bakugoLight\n    }\n  }\n});\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    Prism.highlightAll();\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n    theme: darkModeAdditions\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__.CssBaseline, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(nextjs_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalytics, {\n    trackPageViews: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, pageProps)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUMsU0FBRjtFQUFhQztBQUFiLENBQUQsS0FBOEI7RUFDL0MzQyxnREFBUyxDQUFDLE1BQU07SUFDZDRDLEtBQUssQ0FBQ0MsWUFBTjtFQUNELENBRlEsQ0FBVDtFQUdBLG9CQUNFLHVJQUNFLDJEQUFDLHlEQUFEO0lBQWUsS0FBSyxFQUFFTDtFQUF0QixnQkFDRSwyREFBQyx1REFBRCxPQURGLGVBRUUsMkRBQUMsb0VBQUQ7SUFBaUIsY0FBYztFQUEvQixFQUZGLGVBR0UsMkRBQUMsU0FBRCxFQUFlRyxTQUFmLENBSEYsQ0FERixDQURGO0FBU0QsQ0FiTTtBQWVQLGlFQUFlRixHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHb29nbGVBbmFseXRpY3MgfSBmcm9tIFwibmV4dGpzLWdvb2dsZS1hbmFseXRpY3NcIjtcblxuaW1wb3J0IFwicHJpc21qcy9wcmlzbVwiO1xuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeC5taW5cIjtcbmltcG9ydCBcInByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIubWluLmNzc1wiO1xuaW1wb3J0IFwicHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhci5taW5cIjtcbmltcG9ydCBcInByaXNtanMvcGx1Z2lucy9jb3B5LXRvLWNsaXBib2FyZC9wcmlzbS1jb3B5LXRvLWNsaXBib2FyZFwiO1xuXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5pbXBvcnQgXCIuL2dsb2JhbC5jc3NcIjtcbmltcG9ydCBcIi4vcHJpc20uY3NzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbGFuZGluZ1BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQ3NzQmFzZWxpbmUsIFRoZW1lUHJvdmlkZXIsIGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgYmFrdWdvTGlnaHQgPSBcIiNmM2YyZjFcIjtcbmNvbnN0IGVyYXNlckhlYWQgPSBcIiMzNzM2MzhcIjtcbmNvbnN0IGJhY2tncm91bmQgPSBlcmFzZXJIZWFkO1xuXG5jb25zdCBuZXdDb2xvciA9IFwiIzlFQkNFQVwiO1xuY29uc3QgcGxheWVyT25lID0gXCIjOUVCQ0VBXCI7XG5jb25zdCBwbGF5ZXJUd28gPSBcIiNFQTlFOUVcIjtcbmNvbnN0IHBsYXllclRocmVlID0gXCIjRjhEOTk2XCI7XG5jb25zdCBwbGF5ZXJGb3VyID0gXCIjOEREQkUwXCI7XG5cbmNvbnN0IGNvbG9ySGV4ZXMgPSB7XG4gIGJha3Vnb0xpZ2h0LFxuICBlcmFzZXJIZWFkLFxuICBuZXdDb2xvcixcbiAgcGxheWVyT25lLFxuICBwbGF5ZXJUd28sXG4gIHBsYXllclRocmVlLFxuICBwbGF5ZXJGb3VyLFxufTtcblxuY29uc3QgbWhhVGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIC4uLmNvbG9ySGV4ZXMsXG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiBcImxpZ2h0XCIsXG4gICAgLi4uY29sb3JIZXhlcyxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiBlcmFzZXJIZWFkLFxuICAgICAgY29udHJhc3RUZXh0OiBlcmFzZXJIZWFkLFxuICAgICAgaWNvbjogZXJhc2VySGVhZCxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IGJhY2tncm91bmQsXG4gICAgICBwYXBlcjogYmFja2dyb3VuZCxcbiAgICB9LFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IG5ld0NvbG9yLFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiBcIidFcGlsb2d1ZScsICdTb3JhJywgc2Fucy1zZXJpZlwiLFxuICAgIGgxOiB7XG4gICAgICBmb250U2l6ZTogXCIzcmVtXCIsXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXG4gICAgfSxcbiAgICBodWdlOiB7XG4gICAgICBmb250U2l6ZTogXCJjbGFtcCgzLjVyZW0sIDE0dncsIDlyZW0pXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcImNsYW1wKDQuNXJlbSwgMTh2dywgMTJyZW0pXCIsXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXG4gICAgfSxcbiAgICBzZW1pSHVnZToge1xuICAgICAgZm9udFNpemU6IFwiY2xhbXAoMnJlbSwgMTB2dywgNnJlbSlcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiY2xhbXAoMi41cmVtLCAxMnZ3LCA3cmVtKVwiLFxuICAgICAgZm9udFdlaWdodDogOTAwLFxuICAgIH0sXG4gICAgc3ViSGVhZGVyOiB7XG4gICAgICBmb250U2l6ZTogXCJjbGFtcCgxcmVtLCA1dncsIDIuNXJlbSlcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiY2xhbXAoMnJlbSwgNy41dncsIDMuNXJlbSlcIixcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIC8vIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgIG1hcmdpblRvcDogXCIwICFpbXBvcnRhbnRcIixcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICBmb250V2VpZ2h0OiA5MDAsXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgfSxcbiAgICBoNDoge1xuICAgICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgIH0sXG4gICAgYm9keTE6IHtcbiAgICAgIGZvbnRGYW1pbHk6IFwiJ0VwaWxvZ3VlJywgJ1NvcmEnLCBzYW5zLXNlcmlmXCIsXG4gICAgICBmb250U2l6ZTogXCJjbGFtcCgxcmVtLCA0dncsIDEuMjVyZW0pXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuNzVlbVwiLFxuICAgIH0sXG4gICAgYm9keTI6IHtcbiAgICAgIGZvbnRGYW1pbHk6IFwiJ1NvcmEnLCAnRXBpbG9ndWUnLCBzYW5zLXNlcmlmXCIsXG4gICAgICBmb250U2l6ZTogXCIxLjI1cmVtXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBkYXJrTW9kZUFkZGl0aW9ucyA9IGNyZWF0ZVRoZW1lKHtcbiAgLi4ubWhhVGhlbWUsXG4gIHBhbGV0dGU6IHtcbiAgICAuLi5taGFUaGVtZS5wYWxldHRlLFxuICAgIG1vZGU6IFwiZGFya1wiLFxuICAgIHRleHQ6IHtcbiAgICAgIHByaW1hcnk6IGJha3Vnb0xpZ2h0LFxuICAgICAgY29udHJhc3RUZXh0OiBiYWt1Z29MaWdodCxcbiAgICAgIGljb246IGJha3Vnb0xpZ2h0LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkYXJrTW9kZUFkZGl0aW9uc30+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8R29vZ2xlQW5hbHl0aWNzIHRyYWNrUGFnZVZpZXdzIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkdvb2dsZUFuYWx5dGljcyIsInN0eWxlcyIsIkNzc0Jhc2VsaW5lIiwiVGhlbWVQcm92aWRlciIsImNyZWF0ZVRoZW1lIiwiYmFrdWdvTGlnaHQiLCJlcmFzZXJIZWFkIiwiYmFja2dyb3VuZCIsIm5ld0NvbG9yIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwicGxheWVyVGhyZWUiLCJwbGF5ZXJGb3VyIiwiY29sb3JIZXhlcyIsIm1oYVRoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJ0ZXh0IiwicHJpbWFyeSIsImNvbnRyYXN0VGV4dCIsImljb24iLCJkZWZhdWx0IiwicGFwZXIiLCJtYWluIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJoMSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImh1Z2UiLCJsaW5lSGVpZ2h0Iiwic2VtaUh1Z2UiLCJzdWJIZWFkZXIiLCJtYXJnaW5Ub3AiLCJoMiIsImgzIiwiaDQiLCJib2R5MSIsImJvZHkyIiwiZGFya01vZGVBZGRpdGlvbnMiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJQcmlzbSIsImhpZ2hsaWdodEFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.min.css ***!
  \********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./pages/App.css":
/*!***********************!*\
  !*** ./pages/App.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./pages/global.css":
/*!**************************!*\
  !*** ./pages/global.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./pages/prism.css":
/*!*************************!*\
  !*** ./pages/prism.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "nextjs-google-analytics":
/*!******************************************!*\
  !*** external "nextjs-google-analytics" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-google-analytics");

/***/ }),

/***/ "prismjs/components/prism-jsx.min":
/*!***************************************************!*\
  !*** external "prismjs/components/prism-jsx.min" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs/components/prism-jsx.min");

/***/ }),

/***/ "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard":
/*!****************************************************************************!*\
  !*** external "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard");

/***/ }),

/***/ "prismjs/plugins/toolbar/prism-toolbar.min":
/*!************************************************************!*\
  !*** external "prismjs/plugins/toolbar/prism-toolbar.min" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs/plugins/toolbar/prism-toolbar.min");

/***/ }),

/***/ "prismjs/prism":
/*!********************************!*\
  !*** external "prismjs/prism" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs/prism");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();