webpackHotUpdate("main",{

/***/ "./src/components/Messages.js":
/*!************************************!*\
  !*** ./src/components/Messages.js ***!
  \************************************/
/*! exports provided: Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Messages\", function() { return Messages; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar socketUrl = \"http://localhost:3000\";\nfunction Messages() {\n  // Declare a new state variable, which we'll call \"count\"\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(socketUrl)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      socket = _useState2[0],\n      setSocket = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      user = _useState4[0],\n      setUser = _useState4[1]; // useEffect(() => {\n  //   initSocket();\n  // }, [socket]);\n\n\n  var initSocket = function initSocket() {\n    socket.on(\"log\", function () {\n      console.log(\"Connected\");\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: function onChange(event) {\n      setUser(event.target.value);\n    },\n    value: user\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      setUser(\"\");\n      socket.emit(\"log\", user);\n    }\n  }, \"Set User\"));\n}\n\n//# sourceURL=webpack:///./src/components/Messages.js?");

/***/ })

})