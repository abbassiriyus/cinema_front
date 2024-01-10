exports.ids = [8];
exports.modules = {

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Profile.vue?vue&type=template&id=bec1cb1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [!_vm.cinema_data ? _vm._ssrNode("<div class=\"lodaing_page\">", "</div>", [_vm._ssrNode("<div class=\"loading\"><span>UZDUB</span></div>")], 2) : _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<section data-bg=\"img/bg/section__bg.jpg\" class=\"section section--first section--bg\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"section__wrap\">", "</div>", [_vm._ssrNode("<h1 class=\"section__title section__title--head\">\n\t\t\t\t\t\t\t\tMening profilim\n\t\t\t\t\t\t\t</h1> "), _vm._ssrNode("<ul class=\"breadcrumbs\">", "</ul>", [_vm._ssrNode("<li class=\"breadcrumbs__item\">", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Bosh sahifa")])], 1), _vm._ssrNode(" <li class=\"breadcrumbs__item breadcrumbs__item--active\">\n\t\t\t\t\t\t\t\t\tProfil\n\t\t\t\t\t\t\t\t</li>")], 2)], 2)])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<div class=\"profile\"><div class=\"container\"><div class=\"row\"><div class=\"col-12\"><div class=\"profile__content\"><div class=\"profile__user\"><div class=\"profile__avatar\"><img src=\"/img/user.svg\" alt></div> <div class=\"profile__meta\">" + (_vm.one_user ? "<h3 class=\"d-flex aligin-items-center justify-content-center\">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.one_user.name) + "\n\t\t\t\t\t\t\t\t\t\t\t") + "<span class=\"moder-user\"><img src=\"img/verify.svg\" alt></span></h3>" : "<!---->") + " " + (_vm.one_user && _vm.one_user.id ? "<span>" + _vm._ssrEscape("UZDUB ID:" + _vm._s(_vm.one_user.id)) + "</span>" : "<!---->") + "</div></div> <ul id=\"content__tabs\" role=\"tablist\" class=\"nav nav-tabs content__tabs content__tabs--profile\"><li role=\"presentation\" class=\"nav-item\"><button id=\"1-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#tab-1\" type=\"button\" role=\"tab\" aria-controls=\"tab-1\" aria-selected=\"true\" class=\"active\">\n\t\t\t\t\t\t\t\t\t\t\tProfil\n\t\t\t\t\t\t\t\t\t\t</button></li> <li role=\"presentation\" class=\"nav-item\"><button id=\"3-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#tab-3\" type=\"button\" role=\"tab\" aria-controls=\"tab-3\" aria-selected=\"false\">\n\t\t\t\t\t\t\t\t\t\t\tSOZLAMALAR\n\t\t\t\t\t\t\t\t\t\t</button></li></ul> <button type=\"button\" class=\"profile__logout\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z\"></path></svg> <span>CHIQISH</span></button></div></div></div></div></div> "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"tab-content\">", "</div>", [_vm._ssrNode("<div id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"1-tab\" tabindex=\"0\" class=\"tab-pane fade show active\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-sm-6 col-xl-3\"><div class=\"stats\"><span>Obuna</span> " + (_vm.pay ? "<p>Premium</p>" : "<p>Tekin</p>") + " <img src=\"img/credit-card.svg\" alt></div></div> <div class=\"col-12 col-sm-6 col-xl-3\"><div class=\"stats\"><span>Ko'rilgan animelar</span> " + (_vm.cinema_data ? "<p>" + _vm._ssrEscape(_vm._s(_vm.cinema_data.length)) + "</p>" : "<!---->") + " <img src=\"img/film.svg\" alt></div></div> <div class=\"col-12 col-sm-6 col-xl-3\"><div class=\"stats\"><span>Sizning sharhlaringiz</span> " + (_vm.sharx ? "<p>" + _vm._ssrEscape(_vm._s(_vm.sharx.length)) + "</p>" : "<!---->") + " <img src=\"img/comments.svg\" alt></div></div> <div class=\"col-12 col-sm-6 col-xl-3\"><div class=\"stats\"><span>Sizning fikringiz</span> <p>" + _vm._ssrEscape(_vm._s(_vm.fikr_length)) + "</p> <img src=\"img/star-half-alt.svg\" alt></div></div> "), _vm._ssrNode("<div class=\"col-12 col-xl-6\">", "</div>", [_vm._ssrNode("<div class=\"dashbox\">", "</div>", [_vm._ssrNode("<div class=\"dashbox__title\">", "</div>", [_vm._ssrNode("<h3><img src=\"img/film.svg\" alt>Oxirgi koʻrishlar</h3> "), _vm._ssrNode("<div class=\"dashbox__wrap\">", "</div>", [_c('NuxtLink', {
    staticClass: "dashbox__more",
    attrs: {
      "to": "catalog"
    }
  }, [_vm._v("Hammasi")])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"dashbox__table-wrap dashbox__table-wrap--1\">", "</div>", [_vm._ssrNode("<table class=\"dashbox__table\">", "</table>", [_vm._ssrNode("<thead><tr><th>ID</th> <th>ANIME NOMI</th> <th>KATEGORIYA</th> <th>REYTING</th></tr></thead> "), _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.cinema_data, function (item) {
    return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode("<td><div class=\"dashbox__table-text\">" + _vm._ssrEscape(_vm._s(item.id)) + "</div></td> "), _vm._ssrNode("<td>", "</td>", [_vm._ssrNode("<div class=\"dashbox__table-text\">", "</div>", [_c('NuxtLink', {
      attrs: {
        "to": ""
      }
    }, [_vm._v(_vm._s(item.title))])], 1)]), _vm._ssrNode(" <td>" + (item.appearance == 1 ? "<div class=\"dashbox__table-text\">Movie</div>" : "<!---->") + " " + (item.appearance == 2 ? "<div class=\"dashbox__table-text\">Serial</div>" : "<!---->") + " " + (item.appearance == 3 ? "<div class=\"dashbox__table-text\">TV Serial</div>" : "<!---->") + " " + (item.appearance == 4 ? "<div class=\"dashbox__table-text\">Cartoon</div>" : "<!---->") + "</td> <td><div class=\"dashbox__table-text dashbox__table-text--rate\">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item.mark.toFixed(1)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t") + "</div></td>")], 2);
  }), 0)], 2)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-xl-6\">", "</div>", [_vm._ssrNode("<div class=\"dashbox\">", "</div>", [_vm._ssrNode("<div class=\"dashbox__title\"><h3><img src=\"img/star-half-alt.svg\" alt>Eng so'nggi\n\t\t\t\t\t\t\t\t\t\t\tfikringiz\n\t\t\t\t\t\t\t\t\t\t</h3></div> "), _vm._ssrNode("<div class=\"dashbox__table-wrap dashbox__table-wrap--2\">", "</div>", [_vm._ssrNode("<table class=\"dashbox__table\">", "</table>", [_vm._ssrNode("<thead><tr><th>ID</th> <th>ANIME NOMI</th> <th>MUALLIF</th> <th>REYTING</th></tr></thead> "), _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.sharx, function (item) {
    return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode("<td><div class=\"dashbox__table-text\">" + _vm._ssrEscape(_vm._s(item.id)) + "</div></td> "), _vm._ssrNode("<td>", "</td>", [_vm._ssrNode("<div class=\"dashbox__table-text\">", "</div>", [_c('NuxtLink', {
      attrs: {
        "to": "Watching"
      }
    }, [_vm._v(_vm._s(item.titlea))])], 1)]), _vm._ssrNode(" <td><div class=\"dashbox__table-text\">" + _vm._ssrEscape(_vm._s(item.title)) + "</div></td> <td><div class=\"dashbox__table-text dashbox__table-text--rate\">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item.rating) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t") + "</div></td>")], 2);
  }), 0)], 2)])], 2)])], 2)]), _vm._ssrNode(" <div id=\"tab-2\" role=\"tabpanel\" aria-labelledby=\"2-tab\" tabindex=\"0\" class=\"tab-pane fade\"><div class=\"row\"><div class=\"col-12 col-md-6 col-lg-4 order-md-2 order-lg-1\"><div class=\"plan\"><h3 class=\"plan__title\">Standart</h3> <span class=\"plan__price\">50 000 so'm</span> <ul class=\"plan__list\"><li>1 oylik obuna</li> <li>0% chegirma</li> <li>0 so'm tejaysiz</li></ul> <button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#plan-modal\" class=\"plan__btn\"><span>obuna bo'lish</span></button></div></div> <div class=\"col-12 col-lg-4 order-md-1 order-lg-2\"><div class=\"plan plan--premium\"><h3 class=\"plan__title\">Premium</h3> <span class=\"plan__price\">135 000 so'm</span> <ul class=\"plan__list\"><li>3 oylik obuna</li> <li>10% chegirma</li> <li>15 000 so'm tejaysiz</li></ul> <button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#plan-modal\" class=\"plan__btn\"><span>obuna bo'lish</span></button></div></div> <div class=\"col-12 col-md-6 col-lg-4 order-md-3 order-lg-3\"><div class=\"plan\"><h3 class=\"plan__title\">PRO</h3> <span class=\"plan__price\">510 000 so'm</span> <ul class=\"plan__list\"><li>6 oylik obuna</li> <li>15% chegirma</li> <li>90 000 so'm tejaysiz</li></ul> <button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#plan-modal\" class=\"plan__btn\"><span>obuna bo'lish</span></button></div></div></div></div> <div id=\"plan-modal\" tabindex=\"-1\" aria-labelledby=\"plan-modal\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog modal-dialog-centered\"><div class=\"modal-content\"><div class=\"modal__content\"><button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"modal__close\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z\"></path></svg></button> <form action=\"#\" class=\"modal__form\"><h4 class=\"modal__title\">Tarifni tanlang</h4> <div class=\"sign__group\"><label for=\"fullname\" class=\"sign__label\">Ism</label> <input id=\"fullname\" type=\"text\" name=\"name\" placeholder=\"To'liq ism\" class=\"sign__input\"></div> <div class=\"sign__group\"><label for=\"email\" class=\"sign__label\">Email</label> <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"misol@domain.com\" class=\"sign__input\"></div> <div class=\"sign__group\"><label for=\"value\" class=\"sign__label\">Tarifni tanlang:</label> <select name=\"value\" id=\"value\" class=\"sign__select\"><option value=\"20\">Standart - 50 000 so'm</option> <option value=\"20\">Premium - 135 000 so'm</option> <option value=\"40\">PRO - 510 000 so'm</option></select></div> <div class=\"sign__group\"><label class=\"sign__label\">Payment method:</label> <ul class=\"sign__radio\"><li><input id=\"type1\" type=\"radio\" name=\"type\" checked=\"checked\"> <label for=\"type1\">Visa</label></li> <li><input id=\"type2\" type=\"radio\" name=\"type\"> <label for=\"type2\">Mastercard</label></li> <li><input id=\"type3\" type=\"radio\" name=\"type\"> <label for=\"type3\">Paypal</label></li> <div id=\"plan-modal\" tabindex=\"-1\" aria-labelledby=\"plan-modal\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog modal-dialog-centered\"><div class=\"modal-content\"><div class=\"modal__content\"><button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"modal__close\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z\"></path></svg></button> <form action=\"#\" class=\"modal__form\"><h4 class=\"modal__title\">Tarifni tanlang</h4> <div class=\"sign__group\"><label for=\"fullname\" class=\"sign__label\">Ism</label> <input id=\"fullname\" type=\"text\" name=\"name\" placeholder=\"To'liq ism\" class=\"sign__input\"></div> <div class=\"sign__group\"><label for=\"email\" class=\"sign__label\">Email</label> <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"misol@domain.com\" class=\"sign__input\"></div> <div class=\"sign__group\"><label for=\"value\" class=\"sign__label\">Tarifni tanlang:</label> <select name=\"value\" id=\"value\" class=\"sign__select\"><option value=\"20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStandart - 50 000 so'm\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option> <option value=\"20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPremium - 135 000 so'm\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option> <option value=\"40\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPRO - 510 000 so'm\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</option></select></div> <div class=\"sign__group\"><label class=\"sign__label\">Payment method:</label> <ul class=\"sign__radio\"><li><input id=\"type1\" type=\"radio\" name=\"type\" checked=\"checked\"> <label for=\"type1\">Visa</label></li> <li><input id=\"type2\" type=\"radio\" name=\"type\"> <label for=\"type2\">Mastercard</label></li> <li><input id=\"type3\" type=\"radio\" name=\"type\"> <label for=\"type3\">Paypal</label></li></ul></div> <button type=\"button\" class=\"sign__btn sign__btn--modal\"><span>Davom eting</span></button></form></div></div></div></div></ul></div> <button type=\"button\" class=\"sign__btn sign__btn--modal\"><span>Davom eting</span></button></form></div></div></div></div> <div id=\"tab-3\" role=\"tabpanel\" aria-labelledby=\"3-tab\" tabindex=\"0\" class=\"tab-pane fade\"><div class=\"row\"><div class=\"col-12 col-lg-6\"><form action=\"#\" class=\"sign__form sign__form--profile\"><div class=\"row\"><div class=\"col-12\"><h4 class=\"sign__title\">Profil tafsilotlari</h4></div> <div class=\"col-12 col-md-6 col-lg-12 col-xl-6\"><div class=\"sign__group\"><label for=\"username\" class=\"sign__label\">Tizimga kirish</label> <input id=\"username\" type=\"text\" name=\"username\" disabled=\"disabled\"" + _vm._ssrAttr("placeholder", `Foydalanuvchi ${_vm.one_user.id}`) + " class=\"sign__input\"></div></div> <div class=\"col-12 col-md-6 col-lg-12 col-xl-6\"><div class=\"sign__group\"><label for=\"email\" class=\"sign__label\">Email</label> <input id=\"email2\" type=\"text\" name=\"email\"" + _vm._ssrAttr("placeholder", _vm.one_user.email) + " class=\"sign__input\"></div></div> <div class=\"col-12 col-md-6 col-lg-12 col-xl-6\"><div class=\"sign__group\"><label for=\"firstname\" class=\"sign__label\">Ism</label> <input id=\"firstname\" type=\"text\" name=\"firstname\"" + _vm._ssrAttr("placeholder", _vm.one_user.name) + " class=\"sign__input\"></div></div> <div class=\"col-12 col-md-6 col-lg-12 col-xl-6\"><div class=\"sign__group\"><label for=\"lastname\" class=\"sign__label\">Familiya</label> <input id=\"lastname\" type=\"text\" name=\"lastname\"" + _vm._ssrAttr("placeholder", _vm.one_user.familiya) + " class=\"sign__input\"></div></div> <div class=\"col-12\"><button type=\"button\" class=\"sign__btn sign__btn--small\"><span>SAQLASH</span></button></div></div></form></div> <div class=\"col-12 col-lg-6\"><form action=\"#\" class=\"sign__form sign__form--profile\"><div class=\"row\"><div class=\"col-12\"><h4 class=\"sign__title\">Parolni o'zgartirish</h4></div> <div class=\"col-12 col-md-6 col-lg-12 col-xl-6\"><div class=\"sign__group\"><label for=\"oldpass\" class=\"sign__label\">Eski parol</label> <input id=\"oldpass\" type=\"password\" name=\"oldpass\" class=\"sign__input\"></div></div> <div class=\"col-12 col-md-6 col-lg-12 col-xl-6\"><div class=\"sign__group\"><label for=\"newpass\" class=\"sign__label\">Yangi parol</label> <input id=\"newpass\" type=\"password\" name=\"newpass\" class=\"sign__input\"></div></div> <div class=\"col-12 col-md-6 col-lg-12 col-xl-6\"><div class=\"sign__group\"><label for=\"confirmpass\" class=\"sign__label\">Yangi parolni tasdiqlang</label> <input id=\"confirmpass\" type=\"password\" name=\"confirmpass\" class=\"sign__input\"></div></div> <div class=\"col-12\"><button type=\"button\" class=\"sign__btn sign__btn--small\"><span>O'ZGARISH</span></button></div></div></form></div></div></div>")], 2)])], 2), _vm._ssrNode(" <div id=\"plan-modal\" tabindex=\"-1\" aria-labelledby=\"plan-modal\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog modal-dialog-centered\"><div class=\"modal-content\"><div class=\"modal__content\"><button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"modal__close\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z\"></path></svg></button> <form action=\"#\" class=\"modal__form\"><h4 class=\"modal__title\">Tarifni tanlang</h4> <div class=\"sign__group\"><label for=\"fullname\" class=\"sign__label\">Ism</label> <input id=\"fullname\" type=\"text\" name=\"name\" placeholder=\"To'liq ism\" class=\"sign__input\"></div> <div class=\"sign__group\"><label for=\"email\" class=\"sign__label\">Email</label> <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"misol@domain.com\" class=\"sign__input\"></div> <div class=\"sign__group\"><label for=\"value\" class=\"sign__label\">Tarifni tanlang:</label> <select name=\"value\" id=\"value\" class=\"sign__select\"><option value=\"20\">Standart - 50 000 so'm</option> <option value=\"20\">Premium - 135 000 so'm</option> <option value=\"40\">PRO - 510 000 so'm</option></select></div> <div class=\"sign__group\"><label class=\"sign__label\">Payment method:</label> <ul class=\"sign__radio\"><li><input id=\"type1\" type=\"radio\" name=\"type\" checked=\"checked\"> <label for=\"type1\">Visa</label></li> <li><input id=\"type2\" type=\"radio\" name=\"type\"> <label for=\"type2\">Mastercard</label></li> <li><input id=\"type3\" type=\"radio\" name=\"type\"> <label for=\"type3\">Paypal</label></li></ul></div> <button type=\"button\" class=\"sign__btn sign__btn--modal\"><span>Davom eting</span></button></form></div></div></div></div> <div id=\"alert_modal\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"false\" class=\"toast align-items-center\"><div class=\"d-flex\"><div id=\"alert_text\" class=\"toast-body\">\n\t\t\t\t\tHello, world! This is a toast message.\n\t\t\t\t</div> <button type=\"button\" data-bs-dismiss=\"toast\" aria-label=\"Close\" class=\"btn-close me-2 m-auto\"></button></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Profile.vue?vue&type=template&id=bec1cb1c

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Profile.vue?vue&type=script&lang=js

/* harmony default export */ var Profilevue_type_script_lang_js = ({
  name: 'Faq',
  data() {
    return {
      one_user: null,
      fikr_length: 0,
      sharx: null,
      pay: false,
      one_user: {},
      cinema_data: null
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await external_axios_default.a.get(`https://api.uzdub.uz/api/lookme/${JSON.parse(localStorage.getItem("user_data")).id}`);
        this.fikr_length = response.data.fikr;
        this.sharx = response.data.sharx.filter(item => item.titlea).slice(0, 10);
        this.cinema_data = response.data.all.filter(item => item.title).slice(0, 10);
        this.pay = response.data.pay;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchDataWithToken(token) {
      try {
        const response = await external_axios_default.a.get('https://api.uzdub.uz/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.one_user = response.data;
      } catch (error) {
        // Xatolikni qaytarish
        console.error(error);
      }
    },
    chiqish() {
      localStorage.clear();
      window.location = "/";
    },
    ProfilBosil(index) {
      external_axios_default.a.get("https://api.uzdub.uz/api/v1/cinema").then(res => {
        const Filter = res.data.filter(item => item.id == index);
        if (Filter[0].looking) {
          const selectedItem = index;
          localStorage.setItem('selectedItemData', JSON.stringify(selectedItem));
          window.location = "/watching";
        } else {
          document.querySelector("#alert_modal").style = "display:block";
          document.querySelector("#alert_text").innerHTML = "Vaqtinchalik bloklangan...";
          setTimeout(() => {
            document.querySelector("#alert_modal").style = "display:none";
          }, 3000);
        }
      });
    },
    async postDataWithToken() {
      try {
        var data = new FormData();
        if (document.querySelector('#firstname').value) {
          data.append("name", document.querySelector('#firstname').value);
        } else {
          data.append("name", this.one_user.name);
        }
        if (document.querySelector('#email2').value) {
          data.append("email", document.querySelector('#email2').value);
        } else {
          data.append("email", this.one_user.email);
        }
        if (document.querySelector('#lastname').value) {
          data.append("familiya", document.querySelector('#lastname').value);
        } else {
          data.append("familiya", this.one_user.familiya);
        }
        // console.log(data)
        const response = await external_axios_default.a.put(`https://api.uzdub.uz/user_one/${this.one_user.id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        this.fetchDataWithToken(localStorage.getItem('token'));
        document.querySelector("#alert_modal").style = "display:block";
        setTimeout(() => {
          document.querySelector('#alert_modal').style = 'display:none';
        }, 3000);
        document.querySelector("#alert_text").innerHTML = "Malumot yangilandi";
      } catch (error) {
        console.error(error);
        document.querySelector("#alert_modal").style = "display:block";
        setTimeout(() => {
          document.querySelector('#alert_modal').style = 'display:none';
        }, 3000);
        document.querySelector("#alert_text").innerHTML = "Xatolik yuz berdi";
      }
    },
    async reset_passwort() {
      var data = new FormData();
      data.append("old_password", document.querySelector('#oldpass').value);
      data.append("password", document.querySelector('#newpass').value);
      data.append("repit_password", document.querySelector('#confirmpass').value);
      external_axios_default.a.put(`https://api.uzdub.uz/reset/${this.one_user.id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        document.querySelector("#alert_modal").style = "display:block";
        setTimeout(() => {
          document.querySelector('#alert_modal').style = 'display:none';
        }, 3000);
        document.querySelector("#alert_text").innerHTML = "Malumot yangilandi";
      }).catch(err => {
        document.querySelector("#alert_modal").style = "display:block";
        setTimeout(() => {
          document.querySelector('#alert_modal').style = 'display:none';
        }, 3000);
        document.querySelector("#alert_text").innerHTML = "Xatolik yuz berdi";
      });
    },
    AlertNone() {
      document.querySelector("#alert_modal").style = "display:none";
    }
  },
  mounted() {
    this.one_user = JSON.parse(localStorage.getItem("user_data"));
    if (document.querySelector('.section--bg')) {
      var mainBg = document.querySelector('.section--bg');
      if (mainBg.getAttribute('data-bg')) {
        mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`;
        mainBg.style.backgroundPosition = 'center center';
        mainBg.style.backgroundRepeat = 'no-repeat';
        mainBg.style.backgroundSize = 'cover';
      }
    }
    ;
    this.fetchData();
    this.fetchDataWithToken(localStorage.getItem('token'));
  }
});
// CONCATENATED MODULE: ./pages/Profile.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Profilevue_type_script_lang_js = (Profilevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Profile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Profilevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32e7c206"
  
)

/* harmony default export */ var Profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Profile.js.map