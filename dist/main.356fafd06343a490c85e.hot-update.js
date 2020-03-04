webpackHotUpdate("main",{

/***/ "./src/components/ChatBox.js":
/*!***********************************!*\
  !*** ./src/components/ChatBox.js ***!
  \***********************************/
/*! exports provided: ChatBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatBox\", function() { return ChatBox; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar socketUrl = \"http://localhost:3000\";\nfunction ChatBox(props) {\n  // Declare a new state variable, which we'll call \"count\"\n  var chats = props.chats;\n  var displayChat = [];\n\n  for (var i = 0; i < chats.length; i++) {\n    displayChat.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: chats[i].className,\n      key: i\n    }, chats[i]));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ohyeah\"\n  }, displayChat);\n} // className={chats[i].className}\n\n//# sourceURL=webpack:///./src/components/ChatBox.js?");

/***/ })

})