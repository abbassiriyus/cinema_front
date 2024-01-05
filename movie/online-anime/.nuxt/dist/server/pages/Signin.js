exports.ids = [10];
exports.modules = {

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Signin.vue?vue&type=template&id=a87a6aea
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
  })]), _vm._ssrNode(" <div class=\"sign__group\"><input type=\"text\" id=\"email_data\" placeholder=\"Email\" class=\"sign__input\"></div> <div class=\"sign__group\"><input id=\"password_data\" type=\"password\" placeholder=\"Parol\" class=\"sign__input\"></div> <div class=\"sign__group sign__group--checkbox\"><input id=\"remember\" name=\"remember\" type=\"checkbox\" checked=\"checked\"> <label for=\"remember\">Meni eslaysizmi</label></div> <button type=\"button\" class=\"sign__btn\"><span>Kirish</span></button> "), _vm._ssrNode("<span class=\"sign__text\">", "</span>", [_vm._ssrNode("Hisobingiz yo'qmi?\n                "), _c('NuxtLink', {
    attrs: {
      "to": "signup"
    }
  }, [_vm._v("Ro'yxatdan o'tish!")])], 2), _vm._ssrNode(" "), _vm._ssrNode("<span class=\"sign__text\">", "</span>", [_c('NuxtLink', {
    attrs: {
      "to": "forgot"
    }
  }, [_vm._v("Parolni unutdingizmi?")])], 1)], 2)])])])]), _vm._ssrNode(" <div id=\"alert_modal\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"false\" class=\"toast align-items-center\"><div class=\"d-flex\"><div id=\"alert_text\" class=\"toast-body\">\n      \t\t\t\t\t\tHello, world! This is a toast message.\n    \t\t\t\t\t</div> <button type=\"button\" data-bs-dismiss=\"toast\" aria-label=\"Close\" class=\"btn-close me-2 m-auto\"></button></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Signin.vue?vue&type=template&id=a87a6aea

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Signin.vue?vue&type=script&lang=js

/* harmony default export */ var Signinvue_type_script_lang_js = ({
  name: 'SignInPage',
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
    async postData() {
      var data = new FormData();
      data.append("email", document.querySelector('#email_data').value);
      data.append("password", document.querySelector('#password_data').value);
      try {
        const response = await external_axios_default.a.post('https://api.uzdub.uz/login', data);
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        const user = await external_axios_default.a.get('https://api.uzdub.uz/user', {
          headers: {
            Authorization: `Bearer ${response.data.token}`
          }
        });
        localStorage.setItem("user_data", JSON.stringify(user.data));
        window.location = "/profile";
      } catch (error) {
        document.querySelector("#alert_modal").style = "display:block";
        setTimeout(() => {
          document.querySelector('#alert_modal').style = 'display:none';
        }, 3000);
        document.querySelector("#alert_text").innerHTML = "Xato kiritildi";
        console.error(error);
      }
    },
    AlertNone() {
      document.querySelector("#alert_modal").style = "display:none";
    }
  }
});
// CONCATENATED MODULE: ./pages/Signin.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Signinvue_type_script_lang_js = (Signinvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Signin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Signinvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "056a6b04"
  
)

/* harmony default export */ var Signin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Signin.js.map