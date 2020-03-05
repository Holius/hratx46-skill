webpackHotUpdate("main",{

/***/ "./src/components/ChatBox.jsx":
/*!************************************!*\
  !*** ./src/components/ChatBox.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChatBox; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _InputField_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputField.jsx */ \"./src/components/InputField.jsx\");\n\n\n // import io from \"socket.io-client\";\n\n\nfunction ChatBox(_ref) {\n  var chats = _ref.chats,\n      socket = _ref.socket;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      message = _useState2[0],\n      setMessage = _useState2[1]; //   const [password, setPassword] = useState(\"\");\n  //   const [logged, setLogged] = useState(false);\n\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, JSON.stringify(socket), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    forid: \"Message\",\n    type: \"text\",\n    value: message,\n    setValue: setMessage\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/ChatBox.jsx?");

/***/ })

})