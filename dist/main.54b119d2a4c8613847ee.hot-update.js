webpackHotUpdate("main",{

/***/ "./src/components/InputField.jsx":
/*!***************************************!*\
  !*** ./src/components/InputField.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputField; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction InputField(_ref) {\n  var forid = _ref.forid,\n      type = _ref.type,\n      value = _ref.value,\n      setValue = _ref.setValue;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: forid\n  }, forid), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: forid,\n    type: type,\n    value: value,\n    onChange: function onChange(event) {\n      setValue(event.target.value);\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/InputField.jsx?");

/***/ })

})