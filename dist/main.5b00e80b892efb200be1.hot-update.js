webpackHotUpdate("main",{

/***/ "./src/components/LoginPage.jsx":
/*!**************************************!*\
  !*** ./src/components/LoginPage.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginPage; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _InputField_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputField.jsx */ \"./src/components/InputField.jsx\");\n\n\n\n\nfunction LoginPage(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      password = _useState4[0],\n      setPassword = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      logged = _useState6[0],\n      setLogged = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {}, [logged]);\n\n  var submitLogIn = function submitLogIn() {\n    var state = [username, password];\n    var setState = [setUsername, setPassword];\n    var bool = true;\n\n    for (var i = 0; i < state.length; i++) {\n      if (!state[i].length) {\n        bool = false;\n      }\n    }\n\n    if (bool) {\n      for (var _i = 0; _i < setState.length; _i++) {\n        setState[_i](\"\");\n      }\n\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/user/login\", {\n        username: username,\n        password: password\n      }).then(function (data) {\n        console.log(\"logged in\");\n      })[\"catch\"](function (error) {\n        console.log(error);\n      });\n    } else {\n      console.log(\"nope\");\n    }\n  };\n\n  var submitLogOut = function submitLogOut() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/user/logout\").then(function (data) {\n      setLogged(false);\n      console.log(\"logged out\");\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  if (logged) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      forid: \"username\",\n      type: \"text\",\n      value: username,\n      setValue: setUsername\n    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      forid: \"password\",\n      type: \"password\",\n      value: password,\n      setValue: setPassword\n    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n      onClick: submitLogIn\n    }, \"Log In \"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", null, \"Needs to be linked to Sign Up page \"));\n  } else {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n      onClick: submitLogOut\n    }, \"Log Out \");\n  }\n} // onSubmit={}\n\n//# sourceURL=webpack:///./src/components/LoginPage.jsx?");

/***/ })

})