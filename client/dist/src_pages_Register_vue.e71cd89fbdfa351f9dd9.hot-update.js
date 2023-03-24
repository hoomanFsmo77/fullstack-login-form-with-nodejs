"use strict";
self["webpackHotUpdatetemplate"]("src_pages_Register_vue",{

/***/ "./src/composables/useRegister.ts":
/*!****************************************!*\
  !*** ./src/composables/useRegister.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRegister": function() { return /* binding */ useRegister; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");



var useRegister = function useRegister() {
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var userData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    username: '',
    password: ''
  });
  var registerHandler = function registerHandler() {
    if (userData.username.length > 4 && userData.password.length > 8) {
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('http://localhost:9001/api/user/register', {
        params: {
          username: userData.username,
          password: userData.password
        }
      }).then(function (response) {
        if (response.data.statusCode === 200) {
          router.push('/welcome');
        } else {
          alert('user already exist!');
        }
      });
    } else {
      alert('please enter valid value!');
    }
  };
  return {
    registerHandler: registerHandler,
    userData: userData
  };
};

/***/ })

});
//# sourceMappingURL=src_pages_Register_vue.e71cd89fbdfa351f9dd9.hot-update.js.map