webpackHotUpdate("main",{

/***/ "./src/components/Messages.js":
/*!************************************!*\
  !*** ./src/components/Messages.js ***!
  \************************************/
/*! exports provided: Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Messages\", function() { return Messages; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ChatBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatBox */ \"./src/components/ChatBox.js\");\n\n\n\n\n\nvar socketUrl = \"http://localhost:3000\";\nfunction Messages() {\n  // Declare a new state variable, which we'll call \"count\"\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()(socketUrl)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      socket = _useState2[0],\n      setSocket = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      user = _useState4[0],\n      setUser = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      target = _useState6[0],\n      setTarget = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),\n      chats = _useState8[0],\n      setChats = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),\n      sender = _useState10[0],\n      setSender = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),\n      message = _useState12[0],\n      setMessage = _useState12[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    socket.on(\"pm\", function (chat, sender) {\n      setChats([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(chats), [{\n        chat: chat,\n        className: \"other\"\n      }]));\n      setSender(sender);\n    });\n  }, [socket]);\n\n  var initSocket = function initSocket() {\n    socket.on(\"log\", function () {\n      console.log(\"Connected\");\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: function onChange(event) {\n      setUser(event.target.value);\n    },\n    value: user\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      setUser(\"\");\n      socket.emit(\"log\", user);\n    }\n  }, \"Set User \", user), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, user), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: function onChange(event) {\n      setTarget(event.target.value);\n    },\n    value: target\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n    onClick: function onClick(event) {\n      setTarget(event.target.value);\n    }\n  }, \"Set Target\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, target), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ChatBox__WEBPACK_IMPORTED_MODULE_4__[\"ChatBox\"], {\n    messages: messages\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: function onChange(event) {\n      setMessage(event.target.value);\n    },\n    value: message\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n    onClick: function onClick(event) {\n      setChats.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(chats).concat([{\n        message: message,\n        className: \"myself\"\n      }]));\n      socket.emit(\"private\", target, message);\n    }\n  }, \"Set Message\", \" \"));\n}\n\n//# sourceURL=webpack:///./src/components/Messages.js?");

/***/ })

})