webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CustomHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomHooks */ \"./src/components/CustomHooks.js\");\n/* harmony import */ var _FrontPage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FrontPage.jsx */ \"./src/components/FrontPage.jsx\");\n/* harmony import */ var _UserProfile_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserProfile.jsx */ \"./src/components/UserProfile.jsx\");\n/* harmony import */ var _LoginPage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginPage.jsx */ \"./src/components/LoginPage.jsx\");\n/* harmony import */ var _SignIn_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SignIn.jsx */ \"./src/components/SignIn.jsx\");\n/* harmony import */ var _NavBar_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavBar.jsx */ \"./src/components/NavBar.jsx\");\n\n\n\n\n\n\n\n\nfunction App() {\n  //submits any input data to the database\n  var submit = function submit() {\n    // alert(`${inputs.worldName} has been saved`)\n    var info = inputs;\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"http://localhost:4321/submit\", info).then(function (res) {\n      // console.log(res);\n      done();\n    })[\"catch\"](function (err) {\n      console.error(\"--> jeepers: \", err);\n    });\n  }; //initializes the custom form hook\n\n\n  var _useForm = Object(_CustomHooks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(submit),\n      inputs = _useForm.inputs,\n      handleInputChange = _useForm.handleInputChange,\n      handleSubmit = _useForm.handleSubmit; //ROUTES\n  //Navigation Bar -- takes in boolean; whether there's a new message; contains search bar\n  // <NavBar dot={true} />\n  //Front Page\n  // <FrontPage />\n  //Messages List\n  //Single Chat\n  //Log In / Sign up, takes in custom form hooks\n\n  /*<LoginPage \r\n        inputs={inputs}\r\n        handleInputChange={handleInputChange}\r\n        handleSubmit={handleSubmit}/>*/\n  //Create Account\n  //User Profile\n  // <UserProfile />\n  //My Bookings\n  //New Post\n  //Search Results\n  //Individual Posting\n\n  /*Leave a Review*/\n\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignIn_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/SignIn.jsx":
/*!***********************************!*\
  !*** ./src/components/SignIn.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SignIn(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"get\");\n}\n\n//# sourceURL=webpack:///./src/components/SignIn.jsx?");

/***/ })

})