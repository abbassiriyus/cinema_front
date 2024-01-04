exports.ids = [12];
exports.modules = {

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=525d9400
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [!_vm.cinemaData ? _vm._ssrNode("<div class=\"lodaing_page\">", "</div>", [_vm._ssrNode("<div class=\"loading\"><span>UZDUB</span></div>")], 2) : _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<section class=\"home\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"hero splide splide--hero\">", "</div>", [_vm._ssrNode("<div class=\"splide__arrows\"><button type=\"button\" class=\"splide__arrow splide__arrow--prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z\"></path></svg></button> <button type=\"button\" class=\"splide__arrow splide__arrow--next\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z\"></path></svg></button></div> "), _vm._ssrNode("<div class=\"splide__track\">", "</div>", [_vm._ssrNode("<ul class=\"splide__list\">", "</ul>", _vm._l(_vm.carousel2, function (item) {
    return _vm._ssrNode("<li class=\"splide__slide\">", "</li>", [item.images.length > 0 ? _vm._ssrNode("<div" + _vm._ssrAttr("data-bg", `${item.images[1].image}`) + " class=\"hero__slide\">", "</div>", [_vm._ssrNode("<div class=\"hero__content\">", "</div>", [_vm._ssrNode("<h2 class=\"hero__title\">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item.title) + " ") + "<sub>" + _vm._ssrEscape(_vm._s(item.mark.toFixed(1))) + "</sub></h2> <p class=\"hero__text\">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item.description) + "\n\t\t\t\t\t\t\t\t\t\t\t\t") + "</p> "), _vm._ssrNode("<p class=\"hero__category\">", "</p>", _vm._l(item.janrlar, function (item1) {
      return _c('NuxtLink', {
        key: item1.id,
        attrs: {
          "to": "#"
        }
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item1.title) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]);
    }), 1), _vm._ssrNode(" <div class=\"hero__actions\"><button class=\"hero__btn\"><span>Ko'rish</span></button></div>")], 2)]) : _vm._e()]);
  }), 0)])], 2)])])])]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"content\">", "</section>", [_vm._ssrNode("<div class=\"content__head\"><div class=\"container\"><div class=\"row\"><div class=\"col-12\"><h2 class=\"content__title\"></h2> <ul id=\"content__tabs\" role=\"tablist\" class=\"nav nav-tabs content__tabs\"><li role=\"presentation\" class=\"nav-item\"><button id=\"1-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#tab-1\" type=\"button\" role=\"tab\" aria-controls=\"tab-1\" aria-selected=\"true\" class=\"active\">\n\t\t\t\t\t\t\t\t\t\tAnime\n\t\t\t\t\t\t\t\t\t</button></li> <li role=\"presentation\" class=\"nav-item\"><button id=\"2-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#tab-2\" type=\"button\" role=\"tab\" aria-controls=\"tab-2\" aria-selected=\"false\">\n\t\t\t\t\t\t\t\t\t\tSerial\n\t\t\t\t\t\t\t\t\t</button></li> <li role=\"presentation\" class=\"nav-item\"><button id=\"3-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#tab-3\" type=\"button\" role=\"tab\" aria-controls=\"tab-3\" aria-selected=\"false\">\n\t\t\t\t\t\t\t\t\t\tOngoing\n\t\t\t\t\t\t\t\t\t</button></li></ul></div></div></div></div> "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"tab-content\">", "</div>", [_vm._ssrNode("<div id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"1-tab\" tabindex=\"0\" class=\"tab-pane fade show active\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.cinemaData, function (cinema) {
    return _vm._ssrNode("<div class=\"col-6 col-sm-12 col-lg-6 col-xxl-4\">", "</div>", [_vm._ssrNode("<div class=\"item item--list\">", "</div>", [_vm._ssrNode("<div class=\"item__cover\">" + (cinema.payment != 'Free' ? "<div class=\"d-flex aligin-items-center justify-content-center premium-icon\"><img src=\"/img/USD.svg\" alt style=\"height:40px;\"></div>" : "<!---->") + " " + (cinema.images.length > 0 ? "<img" + _vm._ssrAttr("src", cinema.images[0].image) + " alt class=\"item-cover__img\">" : "<!---->") + " <span class=\"item__play\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z\"></path></svg></span></div> "), _vm._ssrNode("<div class=\"item__content\">", "</div>", [_vm._ssrNode("<h3 class=\"item__title\" style=\"color:white\">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(cinema.title) + "\n\t\t\t\t\t\t\t\t\t\t") + "</h3> "), _vm._ssrNode("<span class=\"item__category\">", "</span>", _vm._l(cinema.janrlar, function (item1) {
      return _c('NuxtLink', {
        key: item1.id,
        staticStyle: {
          "color": "white"
        },
        attrs: {
          "to": ""
        }
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(item1.title) + "\n\t\t\t\t\t\t\t\t\t\t\t")]);
    }), 1), _vm._ssrNode(" <div class=\"item__wrap\"><span class=\"item__rate\">" + _vm._ssrEscape(" " + _vm._s(cinema.mark.toFixed(1))) + "</span> <ul class=\"item__list\"><li>" + _vm._ssrEscape(_vm._s(cinema.type)) + "</li> <li>" + _vm._ssrEscape(_vm._s(cinema.age_limit) + "+") + "</li></ul></div> <div class=\"item__description\"><p>" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(cinema.description) + "\n\t\t\t\t\t\t\t\t\t\t\t") + "</p></div>")], 2)], 2)]);
  }), 0)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"tab-2\" role=\"tabpanel\" aria-labelledby=\"2-tab\" tabindex=\"0\" class=\"tab-pane fade\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.Serial, function (cinema) {
    return _vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-3 col-xl-2\">", "</div>", [_vm._ssrNode("<div class=\"item\">", "</div>", [_vm._ssrNode("<div class=\"item__cover\">" + (cinema.images.length > 0 ? "<img" + _vm._ssrAttr("src", cinema.images[0].image) + " alt class=\"item-cover__img\">" : "<!---->") + " " + (cinema.payment != 'Free' ? "<div class=\"d-flex aligin-items-center justify-content-center premium-icon\"><img src=\"/img/USD.svg\" alt style=\"height:40px;\"></div>" : "<!---->") + " <span class=\"item__play\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z\"></path></svg></span></div> "), _vm._ssrNode("<div class=\"item__content\">", "</div>", [_vm._ssrNode("<h3 class=\"item__title item__title-two\" style=\"color:white\">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(cinema.title) + "\n\t\t\t\t\t\t\t\t\t\t") + "</h3> "), _vm._ssrNode("<span class=\"item__category\">", "</span>", _vm._l(cinema.janrlar, function (item1) {
      return _c('NuxtLink', {
        key: item1.id,
        attrs: {
          "to": ""
        }
      }, [_vm._v(" " + _vm._s(item1.title))]);
    }), 1), _vm._ssrNode(" <span class=\"item__rate\">" + _vm._ssrEscape(_vm._s(cinema.mark.toFixed(1))) + "</span>")], 2)], 2)]);
  }), 0)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"tab-3\" role=\"tabpanel\" aria-labelledby=\"3-tab\" tabindex=\"0\" class=\"tab-pane fade\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.ongoin, function (cinema) {
    return _vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-3 col-xl-2\">", "</div>", [_vm._ssrNode("<div class=\"item\">", "</div>", [_vm._ssrNode("<div class=\"item__cover\">" + (cinema.images.length > 0 ? "<img" + _vm._ssrAttr("src", cinema.images[0].image) + " alt class=\"item-cover__img\">" : "<!---->") + " " + (cinema.payment != 'Free' ? "<div class=\"d-flex aligin-items-center justify-content-center premium-icon\"><img src=\"/img/USD.svg\" alt style=\"height:40px;\"></div>" : "<!---->") + " <span class=\"item__play\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z\"></path></svg></span></div> "), _vm._ssrNode("<div class=\"item__content\">", "</div>", [_vm._ssrNode("<h3 class=\"item__title item__title-two\" style=\"color:white\">" + _vm._ssrEscape("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(cinema.title) + "\n\t\t\t\t\t\t\t\t\t\t") + "</h3> "), _vm._ssrNode("<span class=\"item__category\">", "</span>", _vm._l(cinema.janrlar, function (item1) {
      return _c('NuxtLink', {
        key: item1.id,
        attrs: {
          "to": "#"
        }
      }, [_vm._v(" " + _vm._s(item1.title))]);
    }), 1), _vm._ssrNode(" <span class=\"item__rate\">" + _vm._ssrEscape(_vm._s(cinema.mark.toFixed(1))) + "</span>")], 2)], 2)]);
  }), 0)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_c('NuxtLink', {
    staticClass: "section__btn",
    attrs: {
      "to": "catalog"
    }
  }, [_c('span', [_vm._v("Katalog")])])], 1)])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"section section--dark\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\"><h2 class=\"section__title section__title--carousel\">\n\t\t\t\t\t\t\tKo'p ko'rilgan\n\t\t\t\t\t\t</h2></div> "), _vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"section__carousel splide splide--content\">", "</div>", [_vm._ssrNode("<div class=\"splide__arrows\"><button type=\"button\" class=\"splide__arrow splide__arrow--prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z\"></path></svg></button> <button type=\"button\" class=\"splide__arrow splide__arrow--next\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z\"></path></svg></button></div> "), _vm._ssrNode("<div class=\"splide__track\">", "</div>", [_vm._ssrNode("<ul class=\"splide__list\">", "</ul>", _vm._l(_vm.top_look, function (item) {
    return _vm._ssrNode("<li class=\"splide__slide\">", "</li>", [_vm._ssrNode("<div class=\"item item--carousel\">", "</div>", [_vm._ssrNode((item.images.length > 0 ? "<div to=\"watching\" class=\"item__cover\">" + (item.images.length > 0 ? "<img" + _vm._ssrAttr("src", item.images[0].image) + " alt class=\"item-cover__img very--view__img\">" : "<!---->") + " " + (item.payment != 'Free' ? "<div class=\"d-flex aligin-items-center justify-content-center premium-icon\"><img src=\"/img/USD.svg\" alt style=\"height:40px;\"></div>" : "<!---->") + " <span class=\"item__play\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z\"></path></svg></span></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"item__content\">", "</div>", [_vm._ssrNode("<h3 class=\"item__title item__title-two\">", "</h3>", [_c('NuxtLink', {
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
  }), 0)])], 2)])], 2)])]), _vm._ssrNode(" <section class=\"section d-none\"><div class=\"container\"><div class=\"row\"><div class=\"col-12\"><h2 class=\"section__title\">Tarifni tanlang</h2></div></div> <div class=\"row\"><div class=\"col-12 col-md-6 col-lg-4 order-md-2 order-lg-1\"><div class=\"plan\"><h3 class=\"plan__title\">Standart</h3> <span class=\"plan__price\">50 000 so'm</span> <ul class=\"plan__list\"><li>1 oylik obuna</li> <li>0% chegirma</li> <li>0 so'm tejaysiz</li></ul> <button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#plan-modal\" class=\"plan__btn\"><span>obuna bo'lish</span></button></div></div> <div class=\"col-12 col-lg-4 order-md-1 order-lg-2\"><div class=\"plan plan--premium\"><h3 class=\"plan__title\">Premium</h3> <span class=\"plan__price\">135 000 so'm</span> <ul class=\"plan__list\"><li>3 oylik obuna</li> <li>10% chegirma</li> <li>15 000 so'm tejaysiz</li></ul> <button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#plan-modal\" class=\"plan__btn\"><span>obuna bo'lish</span></button></div></div> <div class=\"col-12 col-md-6 col-lg-4 order-md-3 order-lg-3\"><div class=\"plan\"><h3 class=\"plan__title\">PRO</h3> <span class=\"plan__price\">510 000 so'm</span> <ul class=\"plan__list\"><li>6 oylik obuna</li> <li>15% chegirma</li> <li>90 000 so'm tejaysiz</li></ul> <button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#plan-modal\" class=\"plan__btn\"><span>obuna bo'lish</span></button></div></div></div></div></section> "), _vm._ssrNode("<section class=\"section section--bt\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-xl-10\">", "</div>", [_vm._ssrNode("<h2 class=\"section__title\">Bizning hamkorlarimiz</h2> "), _vm._ssrNode("<p class=\"section__text\">", "</p>", [_vm._ssrNode("\n\t\t\t\t\t\t\tBiz hamkorlarimiz bilan uzoq muddatli hamkorlikka intilamiz va\n\t\t\t\t\t\t\tjamoamiz har doim tayyor. Uchrashish va o'zaro manfaatlar uchun\n\t\t\t\t\t\t\tyangi imkoniyatlarni ko'rib chiqish. Agar siz bizning hamkorimiz\n\t\t\t\t\t\t\tbo'lishni istasangiz, biz har doim yangi takliflarga ochiq va\n\t\t\t\t\t\t\tsizdan xabar kutib qolamiz.\n\t\t\t\t\t\t\t"), _c('NuxtLink', {
    attrs: {
      "to": "contacts"
    }
  }, [_vm._v("Hamkor bo'ling")])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"partners\">", "</div>", [_c('NuxtLink', {
    staticClass: "partners__item",
    attrs: {
      "to": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/partners/themeforest-light-background.png",
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "partners__item",
    attrs: {
      "to": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/partners/audiojungle-light-background.png",
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "partners__item",
    attrs: {
      "to": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/partners/codecanyon-light-background.png",
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "partners__item",
    attrs: {
      "to": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/partners/photodune-light-background.png",
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "partners__item partners__item--prelast",
    attrs: {
      "to": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/partners/activeden-light-background.png",
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "partners__item partners__item--last",
    attrs: {
      "to": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/partners/3docean-light-background.png",
      "alt": ""
    }
  })])], 2)])])], 2)]), _vm._ssrNode(" <div id=\"plan-modal\" tabindex=\"-1\" aria-labelledby=\"plan-modal\" aria-hidden=\"true\" class=\"modal fade\"><div class=\"modal-dialog modal-dialog-centered\"><div class=\"modal-content\"><div class=\"modal__content\"><button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"modal__close\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z\"></path></svg></button> <form action=\"#\" class=\"modal__form\"><h4 class=\"modal__title\">Tarifni tanlang</h4> <div class=\"sign__group\"><label for=\"fullname\" class=\"sign__label\">Ism</label> <input id=\"fullname\" type=\"text\" name=\"name\" placeholder=\"To'liq ism\" class=\"sign__input\"></div> <div class=\"sign__group\"><label for=\"email\" class=\"sign__label\">Email</label> <input id=\"email\" type=\"text\" name=\"email\" placeholder=\"misol@domain.com\" class=\"sign__input\"></div> <div class=\"sign__group\"><label for=\"value\" class=\"sign__label\">Tarifni tanlang:</label> <select id=\"value\" name=\"value\" class=\"sign__select\"><option value=\"20\">Standart - 50 000 so'm</option> <option value=\"20\">Premium - 135 000 so'm</option> <option value=\"40\">PRO - 510 000 so'm</option></select></div> <div class=\"sign__group\"><label class=\"sign__label\">Payment method:</label> <ul class=\"sign__radio\"><li><input id=\"type1\" type=\"radio\" name=\"type\" checked=\"checked\"> <label for=\"type1\">Visa</label></li> <li><input id=\"type2\" type=\"radio\" name=\"type\"> <label for=\"type2\">Mastercard</label></li> <li><input id=\"type3\" type=\"radio\" name=\"type\"> <label for=\"type3\">Paypal</label></li></ul></div> <button type=\"button\" class=\"sign__btn sign__btn--modal\"><span>Davom eting</span></button></form></div></div></div></div>")], 2), _vm._ssrNode(" <div id=\"alert_modal\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"false\" class=\"toast align-items-center\"><div class=\"d-flex\"><div id=\"alert_text\" class=\"toast-body\">\n\t\t\t\t\tHello, world! This is a toast message.\n\t\t\t\t</div> <button type=\"button\" data-bs-dismiss=\"toast\" aria-label=\"Close\" class=\"btn-close me-2 m-auto\"></button></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=525d9400

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  name: 'IndexPage',
  data() {
    return {
      cinemaData: null,
      Serial: null,
      ongoin: null,
      top_look: null,
      carousel2: null
    };
  },
  mounted() {
    this.getCinemaData();
  },
  methods: {
    handleClick(index, ban) {
      if (ban) {
        const selectedItem = index;
        localStorage.setItem('selectedItemData', JSON.stringify(selectedItem));
        window.location = "/watching";
      } else {
        document.querySelector("#alert_modal").style = "display:block";
        document.querySelector("#alert_text").innerHTML = "Admin tomondan taqiqlangan kino";
        setTimeout(() => {
          document.querySelector("#alert_modal").style = "display:none";
        }, 3000);
      }
    },
    async getCinemaData() {
      try {
        const response = await external_axios_default.a.get('https://api.uzdub.uz/api/v1/cinema');
        this.top_look = response.data.sort((a, b) => a.more_loking - b.more_loking).slice(0, 10);
        this.cinemaData = response.data.filter(item => item.appearance == 1).slice(0, 6);
        this.Serial = response.data.filter(item => item.appearance == 2).slice(0, 6);
        this.ongoin = response.data.filter(item => item.appearance == 3).slice(0, 6);
        const carousel2 = await external_axios_default.a.get('https://api.uzdub.uz/api/v1/carousel');
        this.carousel2 = carousel2.data.sort((a, b) => b.time_create.slice(0, 4) - a.time_create.slice(0, 4) || b.time_create.slice(5, 7) - a.time_create.slice(5, 7) || b.time_create.slice(8, 10) - a.time_create.slice(8, 10));
        setTimeout(() => {
          this.getData();
        }, 1000);
      } catch (error) {
        console.error(error, "xato");
      }
    },
    getData() {
      if (document.querySelector('.hero__slide')) {
        document.querySelectorAll('.hero__slide').forEach(function (element) {
          if (element.getAttribute('data-bg')) {
            element.style.background = 'url(' + element.getAttribute('data-bg') + ')';
            element.style.backgroundPosition = 'center center';
            element.style.backgroundRepeat = 'no-repeat';
            element.style.backgroundSize = 'cover';
          }
        });
      }
      if (document.querySelector('.home__carousel')) {
        new Splide('.home__carousel', {
          type: 'loop',
          perPage: 5,
          drag: true,
          pagination: false,
          autoWidth: false,
          autoHeight: false,
          speed: 800,
          gap: 32,
          arrows: false,
          focus: 0,
          breakpoints: {
            575: {
              gap: 24,
              pagination: true,
              arrows: false,
              perPage: 2
            },
            767: {
              gap: 24,
              pagination: true,
              arrows: false,
              perPage: 3
            },
            991: {
              pagination: true,
              arrows: false,
              perPage: 3,
              gap: 24
            },
            1199: {
              pagination: true,
              arrows: false,
              perPage: 4,
              gap: 24
            },
            1399: {
              pagination: true,
              arrows: false,
              perPage: 5,
              gap: 24
            }
          }
        }).mount();
      }
      if (document.querySelector('.hero')) {
        new Splide('.hero', {
          type: 'loop',
          perPage: 1,
          drag: true,
          pagination: true,
          speed: 1200,
          gap: 24,
          arrows: true,
          focus: 0,
          breakpoints: {
            767: {
              gap: 20
            },
            1199: {
              gap: 24
            }
          }
        }).mount();
      }
      if (document.querySelector('.section__roadmap')) {
        const elms = document.getElementsByClassName('section__roadmap');
        for (let i = 0; i < elms.length; i++) {
          new Splide(elms[i], {
            type: 'loop',
            perPage: 3,
            prevPage: 1,
            drag: true,
            pagination: false,
            autoWidth: false,
            autoHeight: true,
            speed: 800,
            gap: 30,
            arrows: false,
            focus: 0,
            breakpoints: {
              767: {
                gap: 20,
                pagination: true,
                arrows: false,
                perPage: 1
              },
              991: {
                pagination: true,
                arrows: false,
                perPage: 2
              },
              1199: {
                pagination: true,
                arrows: false,
                perPage: 3
              }
            }
          }).mount();
        }
      }
      if (document.querySelector('.section__carousel')) {
        const elms = document.getElementsByClassName('section__carousel');
        for (let i = 0; i < elms.length; i++) {
          new Splide(elms[i], {
            type: 'loop',
            perPage: 6,
            prevPage: 1,
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
    },
    AlertNone() {
      document.querySelector("#alert_modal").style = "display:none";
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "64f0fe74"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map