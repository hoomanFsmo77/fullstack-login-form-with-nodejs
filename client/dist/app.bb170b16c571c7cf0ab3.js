"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_pages_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Register.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Register.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _composables_useRegister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../composables/useRegister */ "./src/composables/useRegister.ts");


/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Register',
  setup: function setup(__props, _a) {
    var expose = _a.expose;
    expose();
    var _b = (0,_composables_useRegister__WEBPACK_IMPORTED_MODULE_1__.useRegister)(),
      registerHandler = _b.registerHandler,
      userData = _b.userData;
    var __returned__ = {
      registerHandler: registerHandler,
      userData: userData
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Register.vue?vue&type=template&id=1f24bdc7&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Register.vue?vue&type=template&id=1f24bdc7&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  class: "container mt-5"
};
var _hoisted_2 = {
  class: "row justify-content-center align-items-center"
};
var _hoisted_3 = {
  class: "col-12 col-md-4"
};
var _hoisted_4 = {
  class: "card px-4 py-5"
};
var _hoisted_5 = {
  class: "mt-3 d-flex align-items-center justify-content-center"
};
var _hoisted_6 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "text-muted"
}, "do you have account?", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.userData.username = $event;
    }),
    id: "username",
    type: "text",
    placeholder: "username"
  }, null, 512), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.userData.username]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.userData.password = $event;
    }),
    class: "my-3",
    id: "password",
    type: "password",
    placeholder: "password"
  }, null, 512), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.userData.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return $setup.registerHandler && $setup.registerHandler.apply($setup, args);
    })
  }, "Register"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    class: "ms-2"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Login")];
    }),
    _: 1
  })])])], 32)])])]);
}

/***/ }),

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
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('http://localhost:9001/api/user/register', {
        username: userData.username,
        password: userData.password
      }).then(function (response) {
        localStorage.setItem('userId', response.data.userId);
        router.push('/welcome');
      }).catch(function (err) {
        alert('user already exist!');
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

/***/ }),

/***/ "./src/pages/Register.vue":
/*!********************************!*\
  !*** ./src/pages/Register.vue ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_1f24bdc7_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=1f24bdc7&ts=true */ "./src/pages/Register.vue?vue&type=template&id=1f24bdc7&ts=true");
/* harmony import */ var _Register_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&setup=true&lang=ts */ "./src/pages/Register.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var D_WEB_Projects_Javascript_apps_full_stack_login_form_T_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_Javascript_apps_full_stack_login_form_T_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Register_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Register_vue_vue_type_template_id_1f24bdc7_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/pages/Register.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "1f24bdc7"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('1f24bdc7', __exports__)) {
    api.reload('1f24bdc7', __exports__)
  }
  
  module.hot.accept(/*! ./Register.vue?vue&type=template&id=1f24bdc7&ts=true */ "./src/pages/Register.vue?vue&type=template&id=1f24bdc7&ts=true", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Register_vue_vue_type_template_id_1f24bdc7_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=1f24bdc7&ts=true */ "./src/pages/Register.vue?vue&type=template&id=1f24bdc7&ts=true");
(() => {
    api.rerender('1f24bdc7', _Register_vue_vue_type_template_id_1f24bdc7_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/pages/Register.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************!*\
  !*** ./src/pages/Register.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Register_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Register_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Register.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Register.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/pages/Register.vue?vue&type=template&id=1f24bdc7&ts=true":
/*!**********************************************************************!*\
  !*** ./src/pages/Register.vue?vue&type=template&id=1f24bdc7&ts=true ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Register_vue_vue_type_template_id_1f24bdc7_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Register_vue_vue_type_template_id_1f24bdc7_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Register.vue?vue&type=template&id=1f24bdc7&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/Register.vue?vue&type=template&id=1f24bdc7&ts=true");


/***/ })

}]);
//# sourceMappingURL=app.bb170b16c571c7cf0ab3.js.map