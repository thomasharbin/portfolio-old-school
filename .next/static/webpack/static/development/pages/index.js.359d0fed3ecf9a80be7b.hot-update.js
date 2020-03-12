webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _home_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/styles.scss */ "./pages/home/styles.scss");
/* harmony import */ var _home_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/window */ "./components/window/index.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Icons */ "./components/Icons/index.js");
/* harmony import */ var _components_PreferencesWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PreferencesWindow */ "./components/PreferencesWindow/index.js");
/* harmony import */ var _components_websitesWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/websitesWindow */ "./components/websitesWindow/index.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/nav */ "./components/nav/index.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/pages/home/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // utils
// import { useMediaQuery } from "../../utils/useMediaQuery";

var dynamicMediaQuery = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../utils/useMediaQuery */ "./utils/useMediaQuery.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../utils/useMediaQuery */ "./utils/useMediaQuery.js")];
    },
    modules: ["../../utils/useMediaQuery"]
  }
});
console.log(dynamicMediaQuery); //componenets







var Home = function Home() {
  var constraintsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var iconConstraints = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("green"),
      wallpaper = _useState[0],
      setWallpaper = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      preferencesOpen = _useState2[0],
      togglePreferencesOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      websitesOpen = _useState3[0],
      toggleWebsitesOpen = _useState3[1];

  var handleClickPreferences = function handleClickPreferences() {
    togglePreferencesOpen(!preferencesOpen);
  };

  var handleClickWebsites = function handleClickWebsites() {
    toggleWebsitesOpen(!websitesOpen);
  }; // const removeDrag = useMediaQuery("(max-width: 600px");


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    ref: constraintsRef,
    className: wallpaper === "stars" ? "entire-display stars" : wallpaper === "blue" ? "entire-display blue" : "entire-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), removeDrag ? __jsx(_components_window__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }) : __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    drag: true,
    dragMomentum: false,
    dragConstraints: {
      left: -300,
      top: -50,
      bottom: 500,
      right: 300
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_components_window__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx(_components_PreferencesWindow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    preferencesOpen: preferencesOpen,
    handleClick: handleClickPreferences,
    setWallpaper: setWallpaper,
    wallpaper: wallpaper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_components_websitesWindow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    websitesOpen: websitesOpen,
    handleClick: handleClickWebsites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: "icons-container",
    ref: iconConstraints,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    togglePreferencesOpen: togglePreferencesOpen,
    preferencesOpen: preferencesOpen,
    toggleWebsitesOpen: toggleWebsitesOpen,
    websitesOpen: websitesOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.359d0fed3ecf9a80be7b.hot-update.js.map