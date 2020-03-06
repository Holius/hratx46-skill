webpackHotUpdate("main",{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/gud/index.js":
false,

/***/ "./node_modules/history/esm/history.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
false,

/***/ "./node_modules/react-router/esm/react-router.js":
false,

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
false,

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
false,

/***/ "./node_modules/value-equal/esm/value-equal.js":
false,

/***/ "./src/components/ChatBox.jsx":
/*!************************************!*\
  !*** ./src/components/ChatBox.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChatBox; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputField */ \"./src/components/InputField.jsx\");\n/* harmony import */ var _useUnload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useUnload */ \"./src/components/useUnload.jsx\");\n\n\n // import io from \"socket.io-client\";\n\n\n // import { useParams } from \"react-router-dom\";\n// const { target } = useParams();\n\nfunction ChatBox(_ref) {\n  var chats = _ref.chats,\n      socket = _ref.socket,\n      username = _ref.username,\n      addMessage = _ref.addMessage,\n      addHistory = _ref.addHistory,\n      id = _ref.id;\n\n  var checkTarget = function checkTarget(username) {\n    if (username === \"a\") {\n      return \"b\";\n    } else {\n      return \"a\";\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(checkTarget(username)),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      target = _useState4[0],\n      setTarget = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var mount = function mount() {\n      socket.emit(\"mount\", target);\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"chat/history\", {\n        username: username,\n        target: target\n      }).then(function (data) {\n        addHistory(data.data);\n      })[\"catch\"](function (error) {\n        console.log(error);\n      });\n    };\n\n    mount();\n  }, []);\n  Object(_useUnload__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function () {\n    socket.emit(\"unmount\");\n    console.log(\"will unmount\");\n  });\n  var displayChat = [];\n\n  for (var i = 0; i < chats.length; i++) {\n    displayChat.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: id === chats[i].from_username ? \"self\" : \"interlocutor\",\n      key: i\n    }, chats[i].message_text));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, target), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    forid: \"Message\",\n    type: \"text\",\n    value: message,\n    setValue: setMessage\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: function onClick(event) {\n      addMessage(id, message);\n      console.log(message);\n      socket.emit(\"private\", target, message);\n    }\n  }, \"Send\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"ohyeah\"\n  }, displayChat, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    id: \"anchor\"\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/ChatBox.jsx?");

/***/ })

})