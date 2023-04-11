"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_pages_Welcome_vue"],{

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

/***/ }),

/***/ "./src/pages/Welcome.vue":
/*!*******************************!*\
  !*** ./src/pages/Welcome.vue ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_6f5af56e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=6f5af56e */ "./src/pages/Welcome.vue?vue&type=template&id=6f5af56e");
/* harmony import */ var _Welcome_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&setup=true&lang=js */ "./src/pages/Welcome.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_WEB_Projects_Fullstack_apps_login_form_T_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_Fullstack_apps_login_form_T_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Welcome_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Welcome_vue_vue_type_template_id_6f5af56e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/pages/Welcome.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "6f5af56e"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('6f5af56e', __exports__)) {
    api.reload('6f5af56e', __exports__)
  }
  
  module.hot.accept(/*! ./Welcome.vue?vue&type=template&id=6f5af56e */ "./src/pages/Welcome.vue?vue&type=template&id=6f5af56e", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Welcome_vue_vue_type_template_id_6f5af56e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=6f5af56e */ "./src/pages/Welcome.vue?vue&type=template&id=6f5af56e");
(() => {
    api.rerender('6f5af56e', _Welcome_vue_vue_type_template_id_6f5af56e__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/pages/Welcome.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************!*\
  !*** ./src/pages/Welcome.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Welcome_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Welcome_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Welcome.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Welcome.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/pages/Welcome.vue?vue&type=template&id=6f5af56e":
/*!*************************************************************!*\
  !*** ./src/pages/Welcome.vue?vue&type=template&id=6f5af56e ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Welcome_vue_vue_type_template_id_6f5af56e__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Welcome_vue_vue_type_template_id_6f5af56e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Welcome.vue?vue&type=template&id=6f5af56e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Welcome.vue?vue&type=template&id=6f5af56e");


/***/ })

}]);
//# sourceMappingURL=app.fc8850baea9c42ce6488.js.map