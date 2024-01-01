exports.ids = [9];
exports.modules = {

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/SignUp.vue?vue&type=template&id=f762db30
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "sign section--bg",
    attrs: {
      "data-bg": "img/bg/section__bg.jpg"
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"sign__content\">", "</div>", [_vm._ssrNode("<form action=\"#\" class=\"sign__form\">", "</form>", [_c('NuxtLink', {
    staticClass: "sign__logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "img/logo.svg",
      "alt": ""
    }
  })]), _vm._ssrNode(" <div class=\"sign__group\"><input type=\"text\" placeholder=\"Ism\" class=\"sign__input\"></div> <div class=\"sign__group\"><input type=\"text\" placeholder=\"Email\" class=\"sign__input\"></div> <div class=\"sign__group\"><input type=\"password\" placeholder=\"Parol\" class=\"sign__input\"></div> <div class=\"sign__group sign__group--checkbox\"><input id=\"remember\" name=\"remember\" type=\"checkbox\" checked=\"checked\"> <label for=\"remember\">Men\n                <a>Maxfiylik siyosatiga</a>\n                roziman\n              </label></div> <button type=\"button\" class=\"sign__btn\"><span>Ro'yxatdan o'tish</span></button> "), _vm._ssrNode("<span class=\"sign__text\">", "</span>", [_vm._ssrNode("Hisobingiz bormi?\n              "), _c('NuxtLink', {
    attrs: {
      "to": "signin"
    }
  }, [_vm._v("Kirish!")])], 2)], 2), _vm._ssrNode(" <div id=\"alert_modal\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"false\" class=\"toast align-items-center\"><div class=\"d-flex\"><div id=\"alert_text\" class=\"toast-body\">\n                Hello, world! This is a toast message.\n              </div> <button type=\"button\" data-bs-dismiss=\"toast\" aria-label=\"Close\" class=\"btn-close me-2 m-auto\"></button></div></div>")], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/SignUp.vue?vue&type=template&id=f762db30

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/SignUp.vue?vue&type=script&lang=js

/* harmony default export */ var SignUpvue_type_script_lang_js = ({
  name: 'SignUpPage',
  methods: {
    async postData() {
      var data = new FormData();
      data.append('name', document.querySelectorAll('.sign__input')[0].value);
      data.append('email', document.querySelectorAll('.sign__input')[1].value);
      data.append('password', document.querySelectorAll('.sign__input')[2].value);
      try {
        const response = await external_axios_default.a.post('https://api.uzdub.uz/register', data);
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_data', JSON.stringify(response.data.data[0]));
        window.location = '/profile';
      } catch (error) {
        document.querySelector('#alert_modal').style = 'display:block';
        setTimeout(() => {
          document.querySelector('#alert_modal').style = 'display:none';
        }, 3000);
        document.querySelector('#alert_text').innerHTML = 'Xato kiritildi';
        console.error(error);
      }
    },
    AlertNone() {
      document.querySelector("#alert_modal").style = "display:none";
    }
  },
  mounted() {
    if (document.querySelector('.section--bg')) {
      var mainBg = document.querySelector('.section--bg');
      if (mainBg.getAttribute('data-bg')) {
        mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`;
        mainBg.style.backgroundPosition = 'center center';
        mainBg.style.backgroundRepeat = 'no-repeat';
        mainBg.style.backgroundSize = 'cover';
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/SignUp.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_SignUpvue_type_script_lang_js = (SignUpvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/SignUp.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_SignUpvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4973e5d8"
  
)

/* harmony default export */ var SignUp = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=SignUp.js.map