"use strict";
self["webpackHotUpdatetemplate"]("src_pages_Welcome_vue",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Welcome.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Welcome.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");


/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'Welcome',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    var logoutHandler = function logoutHandler() {
      var userId = localStorage.getItem('userId');
      axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("http://localhost:9001/api/user/logout/".concat(userId)).then(function (response) {
        if (response.data.statusCode === 200) {
          router.push('/');
        }
      });
    };
    var __returned__ = {
      router: router,
      logoutHandler: logoutHandler,
      get axios() {
        return axios__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_0__.useRouter;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Welcome.vue?vue&type=template&id=6f5af56e":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Welcome.vue?vue&type=template&id=6f5af56e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  class: "container mt-5"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Welcome, you are logged in!", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "row justify-content-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "col-6"
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: $setup.logoutHandler,
    class: "btn btn-danger"
  }, " logout ")])])]);
}

/***/ })

});
//# sourceMappingURL=src_pages_Welcome_vue.04230329a2455265d1fa.hot-update.js.map