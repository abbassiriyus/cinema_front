exports.ids = [3];
exports.modules = {

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Catalog.vue?vue&type=template&id=d9caca96
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [!_vm.catalog ? _vm._ssrNode("<div class=\"lodaing_page\">", "</div>", [_vm._ssrNode("<div class=\"loading\"><span>UZDUB</span></div>")], 2) : _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<section data-bg=\"/img/bg/section__bg.jpg\" class=\"section section--first section--bg\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"section__wrap\">", "</div>", [_vm._ssrNode("<h1 class=\"section__title section__title--head\">Katalog</h1> <div id=\"next__btn\"></div> "), _vm._ssrNode("<ul class=\"breadcrumbs\">", "</ul>", [_vm._ssrNode("<li class=\"breadcrumbs__item\">", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Bosh sahifa")])], 1), _vm._ssrNode(" <li class=\"breadcrumbs__item breadcrumbs__item--active\">\n\t\t\t\t\t\t\t\t\tKatalog\n\t\t\t\t\t\t\t\t</li>")], 2)], 2)])])])]), _vm._ssrNode(" <div class=\"filter\"><div class=\"container\"><div class=\"row\"><div class=\"col-12\"><div class=\"filter__content\"><button type=\"button\" class=\"filter__menu\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z\"></path></svg>Filter\n\t\t\t\t\t\t\t</button> <div class=\"filter__items\">" + (_vm.janr ? "<select id=\"filter__genre\" name=\"genre\" class=\"filter__select\"><option value=\"0\">Barcha janrlar</option> " + _vm._ssrList(_vm.janr, function (item) {
    return "<option" + _vm._ssrAttr("value", item.id) + ">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(item.title) + "\n\t\t\t\t\t\t\t\t\t") + "</option>";
  }) + "</select>" : "<!---->") + " <select name=\"quality\" id=\"filter__quality\" class=\"filter__select\"><option value=\"0\">Har qanday sifat</option> <option value=\"1\">Full HD</option> <option value=\"2\">HD 720</option> <option value=\"3\">420 P</option></select> <select name=\"rate\" id=\"filter__rate\" class=\"filter__select\"><option value=\"0\">Har qanday reyting</option> <option value=\"1\">3.0 yulduz</option> <option value=\"2\">5.0 yulduz</option> <option value=\"3\">7.0 yulduz</option> <option value=\"4\">Oltin yulduz</option></select></div> <button type=\"button\" class=\"filter__btn\"><span>Filtr</span></button> " + (_vm.catalog ? "<span class=\"filter__amount\">" + _vm._ssrEscape("jami " + _vm._s(_vm.catalog.length) + " ta anime") + "</span>" : "<!---->") + "</div></div></div></div></div> "), _vm._ssrNode("<div class=\"section section--catalog\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.catalog, function (item, index) {
    return index < _vm.select_page * _vm.page_card && index >= (_vm.select_page - 1) * _vm.page_card ? _vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-3 col-xl-2\">", "</div>", [_vm._ssrNode("<div class=\"item\">", "</div>", [_vm._ssrNode("<div class=\"item__cover\">" + (item.images.length > 0 ? "<img" + _vm._ssrAttr("src", item.images[0].image) + " alt>" : "<!---->") + " " + (item.payment != 'Free' ? "<div class=\"d-flex aligin-items-center justify-content-center premium-icon\"><img src=\"/img/USD.svg\" alt style=\"height:40px;\"></div>" : "<!---->") + " <span class=\"item__play\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z\"></path></svg></span></div> "), _vm._ssrNode("<div class=\"item__content\">", "</div>", [_vm._ssrNode("<h3 class=\"item__title item__title-two\">" + _vm._ssrEscape(_vm._s(item.title)) + "</h3> "), _vm._ssrNode("<span class=\"item__category\">", "</span>", _vm._l(item.janrlar, function (item2) {
      return _c('NuxtLink', {
        key: item2.id,
        attrs: {
          "to": ""
        }
      }, [_vm._v(_vm._s(item2.title))]);
    }), 1), _vm._ssrNode(" <span class=\"item__rate\">" + _vm._ssrEscape(_vm._s(item.mark.toFixed(1))) + "</span>")], 2)], 2)]) : _vm._e();
  }), 0), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"><div class=\"section__paginator\">" + (_vm.catalog ? "<span class=\"section__paginator-pages\">" + _vm._ssrEscape("jami " + _vm._s(_vm.catalog.length) + " ta anime") + "</span>" : "<!---->") + " <ul class=\"section__paginator-list\"><li><a href=\"#next__btn\"><svg width=\"24px\" height=\"24px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z\"></path></svg></a></li> <li><a href=\"#next__btn\"><svg width=\"24px\" height=\"24px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z\"></path></svg></a></li></ul> <ul class=\"paginator\"><li class=\"paginator__item paginator__item--prev\"><a href=\"#next__btn\"><button><svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\"><path d=\"M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z\"></path></svg></button></a></li> " + _vm._ssrList(_vm.length_page, function (item) {
    return "<div>" + (item != _vm.select_page ? "<li class=\"paginator__item\">" + (item == 1 || item + 1 == _vm.select_page || item - 1 == _vm.select_page ? "<button>" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item) + "\n\t\t\t\t\t\t\t\t\t\t") + "</button>" : item == _vm.length_page.length ? "<button>" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item) + "\n\t\t\t\t\t\t\t\t\t\t") + "</button>" : item - _vm.select_page == 2 ? "<span>...</span>" : _vm.select_page - item == 2 ? "<span>...</span>" : "<!---->") + "</li>" : "<li class=\"paginator__item paginator__item--active\"><button>" + _vm._ssrEscape(_vm._s(item)) + "</button></li>") + "</div>";
  }) + " <li class=\"paginator__item\"></li> <li class=\"paginator__item paginator__item--next\"><a href=\"#next__btn\"><button><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z\"></path></svg></button></a></li></ul></div></div></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"section section--dark\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\"><h2 class=\"section__title section__title--carousel\">\n\t\t\t\t\t\t\tKo'p ko'rilgan\n\t\t\t\t\t\t</h2></div> "), _vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"section__carousel splide splide--content\">", "</div>", [_vm._ssrNode("<div class=\"splide__arrows\"><button type=\"button\" class=\"splide__arrow splide__arrow--prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z\"></path></svg></button> <button type=\"button\" class=\"splide__arrow splide__arrow--next\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z\"></path></svg></button></div> "), _vm._ssrNode("<div class=\"splide__track\">", "</div>", [_vm._ssrNode("<ul class=\"splide__list\">", "</ul>", _vm._l(_vm.top_look, function (item) {
    return _vm._ssrNode("<li class=\"splide__slide\">", "</li>", [_vm._ssrNode("<div class=\"item item--carousel\">", "</div>", [_vm._ssrNode((item.images.length > 0 ? "<div to class=\"item__cover\">" + (item.images.length > 0 ? "<img" + _vm._ssrAttr("src", item.images[0].image) + " alt class=\"item-cover__img very--view__img\">" : "<!---->") + " " + (item.payment != 'Free' ? "<div class=\"d-flex aligin-items-center justify-content-center premium-icon\"><img src=\"/img/USD.svg\" alt style=\"height:40px;\"></div>" : "<!---->") + " <span class=\"item__play\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z\"></path></svg></span></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"item__content\">", "</div>", [_vm._ssrNode("<h3 class=\"item__title\">", "</h3>", [_c('NuxtLink', {
      attrs: {
        "to": ""
      }
    }, [_vm._v(_vm._s(item.title))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<span class=\"item__category\">", "</span>", _vm._l(item.janrlar, function (item1) {
      return _c('NuxtLink', {
        key: item1.id,
        attrs: {
          "to": ""
        }
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item1.title) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]);
    }), 1), _vm._ssrNode(" <span class=\"item__rate\">" + _vm._ssrEscape(_vm._s(item.mark.toFixed(1))) + "</span>")], 2)], 2)]);
  }), 0)])], 2)])], 2)])]), _vm._ssrNode(" <div id=\"mfilter_media\"" + _vm._ssrClass("mfilter", _vm.mfilter__active) + "><div class=\"mfilter__head\"><h6 class=\"mfilter__title\">Filter</h6> <button type=\"button\" class=\"mfilter__close\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z\"></path></svg></button></div> <div class=\"mfilter__select-wrap\"><div class=\"sign__group\"><select name=\"mgenre\" id=\"mfilter__genre\" class=\"filter__select\"><option value=\"0\">Barcha janrlar</option> " + _vm._ssrList(_vm.janr, function (item) {
    return "<option" + _vm._ssrAttr("value", item.id) + ">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t" + _vm._s(item.title) + "\n\t\t\t\t\t\t") + "</option>";
  }) + "</select></div> <div class=\"sign__group\"><select name=\"mquality\" id=\"mfilter__quality\" class=\"filter__select\"><option value=\"0\">Har qanday sifat</option> <option value=\"1\">Full HD</option> <option value=\"2\">HD 720</option> <option value=\"3\">420 P</option></select></div> <div class=\"sign__group\"><select name=\"mrate\" id=\"mfilter__rate\" class=\"filter__select\"><option value=\"0\">Har qanday reyting</option> <option value=\"1\">3.0 yulduz</option> <option value=\"2\">5.0 yulduz</option> <option value=\"3\">7.0 yulduz</option> <option value=\"4\">Oltin yulduz</option></select></div></div> <button type=\"button\" class=\"mfilter__apply\"><span>Filter</span></button></div> <div id=\"alert_modal\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"false\" class=\"toast align-items-center\"><div class=\"d-flex\"><div id=\"alert_text\" class=\"toast-body\">\n\t\t\t\t\tHello, world! This is a toast message.\n\t\t\t\t</div> <button type=\"button\" data-bs-dismiss=\"toast\" aria-label=\"Close\" class=\"btn-close me-2 m-auto\"></button></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Catalog.vue?vue&type=template&id=d9caca96

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Catalog.vue?vue&type=script&lang=js

/* harmony default export */ var Catalogvue_type_script_lang_js = ({
  name: 'CatalogPage',
  data() {
    return {
      catalog: null,
      janr: [],
      top_look: null,
      select_page: 1,
      page_card: 12,
      length_page: [],
      mfilter__active: ''
    };
  },
  methods: {
    async getData() {
      try {
        const catalog = await external_axios_default.a.get('https://api.uzdub.uz/api/v1/cinema');
        const category = await external_axios_default.a.get('https://api.uzdub.uz/api/v1/janr');
        this.top_look = catalog.data.sort((a, b) => a.more_loking - b.more_loking).slice(0, 10);
        var a = catalog.data;
        if (sessionStorage.getItem('search')) {
          this.catalog = a.filter(item => item.title.toLowerCase().includes(sessionStorage.getItem('search').toLowerCase()));
          sessionStorage.clear();
        } else {
          this.catalog = a;
        }
        this.janr = category.data;
        var for_w = a.length / this.page_card;
        var daad = [];
        for (let i = 0; i < for_w; i++) {
          daad.push(i + 1);
        }
        this.length_page = daad;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    get_page(id) {
      this.select_page = id;
    },
    count_plus() {
      if (this.length_page.length > this.select_page) {
        this.select_page++;
      }
    },
    count_minus() {
      if (this.select_page > 1) {
        this.select_page--;
      }
    },
    filter_janr(data, id) {
      console.log(data);
      var value1 = "";
      if (id != 1) {
        value1 = document.querySelector('#filter__genre').value;
      } else {
        value1 = document.querySelector('#mfilter__genre').value;
      }
      var send_data = [];
      for (let i = 0; i < data.length; i++) {
        var push = false;
        for (let j = 0; j < data[i].janrlar.length; j++) {
          if (value1 == data[i].janrlar[j].janr_id || value1 == 0) {
            push = true;
          }
        }
        if (push) {
          send_data.push(data[i]);
        }
      }
      if (value1 == 0) {
        send_data = data;
      }
      return send_data;
    },
    filter_mark(data, id) {
      var value1 = "";
      if (id != 1) {
        value1 = document.querySelector('#filter__rate').value;
      } else {
        value1 = document.querySelector('#mfilter__rate').value;
      }
      console.log(value1, "hello");
      var mark_f;
      if (value1 == 0) {
        mark_f = 0;
      }
      if (value1 == 1) {
        mark_f = 3;
      }
      if (value1 == 2) {
        mark_f = 5;
      }
      if (value1 == 3) {
        mark_f = 7;
      }
      if (value1 == 4) {
        mark_f = 9;
      }
      var send_data = [];
      console.log(mark_f);
      for (let i = 0; i < data.length; i++) {
        if (data[i].mark >= mark_f && data[i].mark <= mark_f + 1) {
          send_data.push(data[i]);
        }
      }
      if (value1 == 0) {
        send_data = data;
      }
      return send_data;
    },
    filter_vid(data, id) {
      var value1 = "";
      if (id != 1) {
        value1 = document.querySelector('#filter__quality').value;
      } else {
        value1 = document.querySelector('#mfilter__quality').value;
      }
      var mark_f;
      if (value1 == 0) {
        mark_f = 0;
      }
      if (value1 == 1) {
        mark_f = "Full HD";
      }
      if (value1 == 2) {
        mark_f = "HD 720";
      }
      if (value1 == 3) {
        mark_f = "420 P";
      }
      var send_data = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].type == mark_f) {
          send_data.push(data[i]);
        }
      }
      if (value1 == 0) {
        send_data = data;
      }
      return send_data;
    },
    Allfilter(id) {
      external_axios_default.a.get('https://api.uzdub.uz/api/v1/cinema').then(res => {
        var data1 = this.filter_vid(res.data, id);
        var data2 = this.filter_janr(data1, id);
        var data3 = this.filter_mark(data2, id);
        this.catalog = data3;
      });
    },
    allfunction() {
      if (document.querySelector('#filter__genre')) {
        new SlimSelect({
          select: '#filter__genre'
        });
      }
      if (document.querySelector('#filter__quality')) {
        new SlimSelect({
          select: '#filter__quality',
          settings: {
            showSearch: false
          }
        });
      }
      if (document.querySelector('#filter__rate')) {
        new SlimSelect({
          select: '#filter__rate',
          settings: {
            showSearch: false
          }
        });
      }
      if (document.querySelector('#mfilter__genre')) {
        new SlimSelect({
          select: '#mfilter__genre'
        });
      }
      if (document.querySelector('#mfilter__quality')) {
        new SlimSelect({
          select: '#mfilter__quality',
          settings: {
            showSearch: false
          }
        });
      }
      if (document.querySelector('#mfilter__rate')) {
        new SlimSelect({
          select: '#mfilter__rate',
          settings: {
            showSearch: false
          }
        });
      }
      if (document.querySelector('.section__carousel')) {
        const elms = document.getElementsByClassName('section__carousel');
        for (let i = 0; i < elms.length; i++) {
          new Splide(elms[i], {
            type: 'loop',
            perPage: 6,
            drag: true,
            pagination: false,
            autoWidth: false,
            autoHeight: false,
            speed: 800,
            gap: 24,
            arrows: true,
            focus: 0,
            breakpoints: {
              575: {
                gap: 24,
                pagination: true,
                perPage: 2
              },
              767: {
                gap: 24,
                pagination: true,
                perPage: 3
              },
              991: {
                pagination: true,
                perPage: 3,
                gap: 24
              },
              1199: {
                pagination: true,
                perPage: 4,
                gap: 24
              }
            }
          }).mount();
        }
      }
      if (document.querySelector('.section--bg')) {
        const mainBg = document.querySelector('.section--bg');
        if (mainBg.getAttribute('data-bg')) {
          mainBg.style.background = `url(${mainBg.getAttribute('data-bg')})`;
          mainBg.style.backgroundPosition = 'center center';
          mainBg.style.backgroundRepeat = 'no-repeat';
          mainBg.style.backgroundSize = 'cover';
        }
      }
    },
    handleClick(index, ban) {
      if (ban) {
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
    },
    AlertNone() {
      document.querySelector("#alert_modal").style = "display:none";
    }
  },
  mounted() {
    this.getData();
    setTimeout(() => {
      this.allfunction();
    }, 2000);
  }
});
// CONCATENATED MODULE: ./pages/Catalog.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_Catalogvue_type_script_lang_js = (Catalogvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Catalog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Catalogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c0278526"
  
)

/* harmony default export */ var Catalog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Catalog.js.map