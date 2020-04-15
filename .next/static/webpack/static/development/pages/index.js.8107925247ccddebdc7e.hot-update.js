webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/html-tags/html-tags.json":
false,

/***/ "./node_modules/html-tags/index.js":
false,

/***/ "./node_modules/react-safe/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var _components_CardPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CardPanel */ "./components/CardPanel.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/siddhantvinchurkar/Node.js Projects/MSG Speed Test/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function NoScript(props) {
  var staticMarkup = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToStaticMarkup(props.children);
  return __jsx("noscript", {
    dangerouslySetInnerHTML: {
      __html: "Unfortunately, your browser does not support javascript. Either that or it's disabled. Maybe try to enable it? Privacy centric browsers like Tor or Brave tend to do this more often than you think. Don't worry. We respect your privacy and will never collect personal data from you without your explicit consent."
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  });
}

function Index() {
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(NoScript, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col s12 m12 l10 xl8 offset-l1 offset-xl2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col s12 m12 l6 xl6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx(_components_CardPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Testing From",
    subtitle: "",
    id: "ip",
    cid: "t1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }), __jsx(_components_CardPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Ping",
    subtitle: "ms",
    id: "latency",
    cid: "b1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "col s12 m12 l6 xl6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, __jsx(_components_CardPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Download Bandwidth",
    subtitle: "Mbps",
    id: "download",
    cid: "t2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  }), __jsx(_components_CardPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Upload Bandwidth",
    subtitle: "Mbps",
    id: "upload",
    cid: "b2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col s6 m6 l2 xl2 offset-s3 offset-m3 offset-l5 offset-xl5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("a", {
    id: "retest",
    className: "btn-large waves-effect waves-light light-green z-depth-5 black-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "material-icons left black-text large-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 128
    }
  }, "refresh"), __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 196
    }
  }, "Retest"))))))), __jsx("script", {
    type: "text/javascript",
    src: "/scripts/jquery.min.js",
    defer: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/scripts/materialize-plm.min.js",
    defer: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/scripts/lazysizes.min.js",
    async: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/scripts/network.min.js",
    defer: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/scripts/sweetalert2.js",
    defer: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/scripts/main.js",
    defer: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.8107925247ccddebdc7e.hot-update.js.map