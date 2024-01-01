exports.ids = [6];
exports.modules = {

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Forgot.vue?vue&type=template&id=3fd11622
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div data-bg=\"img/bg/section__bg.jpg\" class=\"sign section--bg\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"sign__content\">", "</div>", [_vm._ssrNode("<form action=\"#\" class=\"sign__form\">", "</form>", [_c('NuxtLink', {
    staticClass: "sign__logo",
    attrs: {
      "to": ""
    }
  }, [_c('img', {
    attrs: {
      "src": "img/logo.svg",
      "alt": ""
    }
  })]), _vm._ssrNode(" <div class=\"sign__group\"><input type=\"text\" id=\"email_input\" placeholder=\"Email\" class=\"sign__input\"></div> "), _vm._ssrNode("<div class=\"sign__group sign__group--checkbox\">", "</div>", [_vm._ssrNode("<input id=\"remember\" name=\"remember\" type=\"checkbox\" checked=\"checked\"> "), _vm._ssrNode("<label for=\"remember\">", "</label>", [_vm._ssrNode("Men\n\t\t\t\t\t\t\t\t\t"), _c('NuxtLink', {
    attrs: {
      "to": ""
    }
  }, [_vm._v("Maxfiylik siyosatiga")]), _vm._ssrNode("\n\t\t\t\t\t\t\t\t\troziman\n\t\t\t\t\t\t\t\t")], 2)], 2), _vm._ssrNode(" <button type=\"button\" class=\"sign__btn\"><span>Qayta tiklash</span></button> <span class=\"sign__text\">Biz sizning elektron pochtangizga parol yuboramiz</span>")], 2)])])])])]), _vm._ssrNode(" <div id=\"alert_modal\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"false\" class=\"toast align-items-center\"><div class=\"d-flex\"><div id=\"alert_text\" class=\"toast-body\">\n\t\t\t\tHello, world! This is a toast message.\n\t\t\t</div> <button type=\"button\" data-bs-dismiss=\"toast\" aria-label=\"Close\" class=\"btn-close me-2 m-auto\"></button></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Forgot.vue?vue&type=template&id=3fd11622

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Forgot.vue?vue&type=script&lang=js

/* harmony default export */ var Forgotvue_type_script_lang_js = ({
  name: 'Forgot',
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
  },
  methods: {
    EmailPost() {
      var formdata = new FormData();
      formdata.append('email', document.querySelector("#email_input").value);
      external_axios_default.a.post('https://api.uzdub.uz/send-email', formdata).then(res => {
        document.querySelector("#alert_modal").style = "display:block";
        setTimeout(() => {
          document.querySelector('#alert_modal').style = 'display:none';
        }, 3000);
        document.querySelector("#alert_text").innerHTML = "Emailga parolingiz yuborildi";
      }).catch(err => {
        document.querySelector("#alert_modal").style = "display:block";
        setTimeout(() => {
          document.querySelector('#alert_modal').style = 'display:none';
        }, 3000);
        document.querySelector("#alert_text").innerHTML = "Emailga parolingiz yuborilmadi";
      });
    },
    AlertNone() {
      document.querySelector("#alert_modal").style = "display:none";
    }
  }
});
// CONCATENATED MODULE: ./pages/Forgot.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Forgotvue_type_script_lang_js = (Forgotvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Forgot.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Forgotvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1e1d957f"
  
)

/* harmony default export */ var Forgot = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Forgot.js.map