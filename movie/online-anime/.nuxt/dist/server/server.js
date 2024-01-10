module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/404error","2":"pages/About","3":"pages/Catalog","4":"pages/Contacts","5":"pages/Faq","6":"pages/Forgot","7":"pages/Pricing","8":"pages/Profile","9":"pages/SignUp","10":"pages/Signin","11":"pages/Watching","12":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("20fe578f", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("709683a2", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=243b62ae
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<header class=\"header\">", "</header>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"header__content\">", "</div>", [_c('NuxtLink', {
    staticClass: "header__logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/logo.svg",
      "alt": "logo"
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"header__nav\">", "</ul>", [_vm._ssrNode("<li class=\"header__nav-item\">", "</li>", [_c('NuxtLink', {
    staticClass: "header__nav-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Bosh sahifa")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"header__nav-item\">", "</li>", [_c('NuxtLink', {
    staticClass: "header__nav-link",
    attrs: {
      "to": "/catalog"
    }
  }, [_vm._v("Katalog")])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header__actions\">", "</div>", [_vm._ssrNode("<div class=\"header__search\"><input type=\"text\" placeholder=\"Qidirish\" class=\"search_data\"> <button type=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z\"></path></svg></button></div> <div></div> "), _vm.token ? _c('NuxtLink', {
    staticClass: "profile__avatar m-0",
    attrs: {
      "to": "/Profile"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/user.svg",
      "alt": ""
    }
  })]) : _c('NuxtLink', {
    staticClass: "header__sign-in",
    attrs: {
      "to": "signin"
    }
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"
    }
  })]), _vm._v(" "), _c('span', [_vm._v("Kirish")])])], 2), _vm._ssrNode(" <button type=\"button\" class=\"header__btn\"><span></span> <span></span> <span></span></button>")], 2)])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"menu\">", "</div>", [_vm._ssrNode("<div class=\"menu__search\"><input type=\"text\" placeholder=\"Qidirish\" class=\"search_data1\"> <button type=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z\"></path></svg></button></div> "), _vm._ssrNode("<ul class=\"menu__nav\">", "</ul>", [_vm._ssrNode("<ul class=\"menu__nav--links\">", "</ul>", [_vm._ssrNode("<li class=\"menu__nav-item\">", "</li>", [_c('NuxtLink', {
    staticClass: "menu__nav-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Bosh sahifa")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu__nav-item\">", "</li>", [_c('NuxtLink', {
    staticClass: "menu__nav-link",
    attrs: {
      "to": "catalog",
      "aria-expanded": "false"
    }
  }, [_vm._v("Katalog")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu__nav-item\">", "</li>", [_c('NuxtLink', {
    staticClass: "menu__nav-link",
    attrs: {
      "to": "about"
    }
  }, [_vm._v("Biz haqimizda")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu__nav-item\">", "</li>", [_c('NuxtLink', {
    staticClass: "menu__nav-link",
    attrs: {
      "to": "faq"
    }
  }, [_vm._v("Yordam markazi")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu__nav-item\">", "</li>", [_c('NuxtLink', {
    staticClass: "menu__nav-link",
    attrs: {
      "to": "Contacts"
    }
  }, [_vm._v("Kontaktlar")])], 1)], 2), _vm._ssrNode(" <li><div class=\"footer__logo\" style=\"margin-bottom: 10px;\"><img src=\"/img/logo.svg\" alt></div> <p class=\"footer__tagline\">\n\t\t\t\t\tUZDUB saytida o'zbek <br>\n\t\t\t\t\ttilida onlayn anime <br>\n\t\t\t\t\ttomosha qiling.\n\t\t\t\t</p> <ul class=\"footer__social\"><li><a target=\"_blank\" href=\"https://www.facebook.com/profile.php?id=61555542411738\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z\"></path></svg></a></li> <li><a target=\"_blank\" href=\"https://www.instagram.com/uzdub.uz/\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z\"></path></svg></a></li> <li><a target=\"_blank\" href=\"https://t.me/uzdubbing_tarjima_animelar\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z\"></path></svg></a></li> <li><a target=\"_blank\" href=\"https://twitter.com/uzdub_go\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z\"></path></svg></a></li></ul></li>")], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=243b62ae

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js
/* harmony default export */ var Headervue_type_script_lang_js = ({
  name: 'HeaderPage',
  mounted() {
    this.token = localStorage.getItem("token");
  },
  methods: {
    getData() {
      sessionStorage.setItem("search", document.querySelectorAll('.search_data')[0].value);
      setTimeout(() => {
        window.location = '/catalog';
      }, 1000);
    },
    getData1() {
      sessionStorage.setItem("search", document.querySelectorAll('.search_data1')[0].value);
      setTimeout(() => {
        window.location = '/catalog';
      }, 1000);
    }
  },
  data() {
    return {
      token: null
    };
  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Headervue_type_script_lang_js = (Headervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a414e5f6"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(11).default})


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=2c02e49b
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "footer"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"footer__logo\"><img src=\"/img/logo.svg\" alt></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 col-md-6 col-sm-6 col-12\"><p class=\"footer__tagline\">\n\t\t\t\t\tUZDUB saytida o'zbek <br>\n\t\t\t\t\ttilida onlayn anime <br>\n\t\t\t\t\ttomosha qiling.\n\t\t\t\t</p> <ul class=\"footer__social\"><li><a target=\"_blank\" href=\"https://www.facebook.com/profile.php?id=61555542411738\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z\"></path></svg></a></li> <li><a target=\"_blank\" href=\"https://www.instagram.com/uzdub.uz/\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z\"></path></svg></a></li> <li><a target=\"_blank\" href=\"https://t.me/uzdubbing_tarjima_animelar\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z\"></path></svg></a></li> <li><a target=\"_blank\" href=\"https://twitter.com/uzdub_go\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z\"></path></svg></a></li></ul></div> "), _vm._ssrNode("<div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">", "</div>", [_vm._ssrNode("<h6 class=\"footer__title\">Ko‘rib chiqish</h6> "), _vm._ssrNode("<ul class=\"footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "Catalog"
    }
  }, [_vm._v("Film")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "Catalog"
    }
  }, [_vm._v("Seriel")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "Catalog"
    }
  }, [_vm._v("Ongoing")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "Catalog"
    }
  }, [_vm._v("OVA")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-3 col-md-6 col-sm-6 col-12\">", "</div>", [_vm._ssrNode("<h6 class=\"footer__title\">Resurslar</h6> "), _vm._ssrNode("<ul class=\"footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "about"
    }
  }, [_vm._v("Biz haqimizda")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "faq"
    }
  }, [_vm._v("Yordam markazi")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    attrs: {
      "to": "Contacts"
    }
  }, [_vm._v("Kontaktlar")])], 1)], 2)], 2)], 2), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"><div class=\"footer__copyright\"><small>© UZDUB sayti, 2023-2024 Asror Shodiyev tomonidan\n\t\t\t\t\t\tyaratilgan.</small></div></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=2c02e49b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js
/* harmony default export */ var Footervue_type_script_lang_js = ({
  name: 'FooterPage'
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Footervue_type_script_lang_js = (Footervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e679adda"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(12).default})


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(42);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;align-items:center;background:#f7f8fb;bottom:0;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;left:0;padding:1rem;position:absolute;right:0;text-align:center;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("81f4424c", content, true)

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/*!\n * Bootstrap  v5.3.0-alpha1 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root,[data-bs-theme=light]{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text:#0a58ca;--bs-secondary-text:#6c757d;--bs-success-text:#146c43;--bs-info-text:#087990;--bs-warning-text:#997404;--bs-danger-text:#b02a37;--bs-light-text:#6c757d;--bs-dark-text:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#f8f9fa;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#e9ecef;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-font-sans-serif:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33,37,41,.75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33,37,41,.5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0,0,0,.175);--bs-border-radius:0.375rem;--bs-border-radius-sm:0.25rem;--bs-border-radius-lg:0.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-2xl:2rem;--bs-border-radius-pill:50rem;--bs-box-shadow:0 0.5rem 1rem rgba(var(--bs-body-color-rgb),0.15);--bs-box-shadow-sm:0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb),0.075);--bs-box-shadow-lg:0 1rem 3rem rgba(var(--bs-body-color-rgb),0.175);--bs-box-shadow-inset:inset 0 1px 2px rgba(var(--bs-body-color-rgb),0.075);--bs-emphasis-color:#000;--bs-form-control-bg:var(--bs-body-bg);--bs-form-control-disabled-bg:var(--bs-secondary-bg);--bs-highlight-bg:#fff3cd;--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}[data-bs-theme=dark]{--bs-body-color:#adb5bd;--bs-body-color-rgb:173,181,189;--bs-body-bg:#212529;--bs-body-bg-rgb:33,37,41;--bs-emphasis-color:#f8f9fa;--bs-emphasis-color-rgb:248,249,250;--bs-secondary-color:rgba(173,181,189,.75);--bs-secondary-color-rgb:173,181,189;--bs-secondary-bg:#343a40;--bs-secondary-bg-rgb:52,58,64;--bs-tertiary-color:rgba(173,181,189,.5);--bs-tertiary-color-rgb:173,181,189;--bs-tertiary-bg:#2b3035;--bs-tertiary-bg-rgb:43,48,53;--bs-emphasis-color:#fff;--bs-primary-text:#6ea8fe;--bs-secondary-text:#dee2e6;--bs-success-text:#75b798;--bs-info-text:#6edff6;--bs-warning-text:#ffda6a;--bs-danger-text:#ea868f;--bs-light-text:#f8f9fa;--bs-dark-text:#dee2e6;--bs-primary-bg-subtle:#031633;--bs-secondary-bg-subtle:#212529;--bs-success-bg-subtle:#051b11;--bs-info-bg-subtle:#032830;--bs-warning-bg-subtle:#332701;--bs-danger-bg-subtle:#2c0b0e;--bs-light-bg-subtle:#343a40;--bs-dark-bg-subtle:#1a1d20;--bs-primary-border-subtle:#084298;--bs-secondary-border-subtle:#495057;--bs-success-border-subtle:#0f5132;--bs-info-border-subtle:#055160;--bs-warning-border-subtle:#664d03;--bs-danger-border-subtle:#842029;--bs-light-border-subtle:#495057;--bs-dark-border-subtle:#343a40;--bs-heading-color:#fff;--bs-link-color:#6ea8fe;--bs-link-hover-color:#9ec5fe;--bs-link-color-rgb:110,168,254;--bs-link-hover-color-rgb:158,197,254;--bs-code-color:#e685b5;--bs-border-color:#495057;--bs-border-color-translucent:hsla(0,0%,100%,.15)}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;background-color:#fff;background-color:var(--bs-body-bg);color:#212529;color:var(--bs-body-color);font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-body-font-family);font-size:1rem;font-size:var(--bs-body-font-size);font-weight:400;font-weight:var(--bs-body-font-weight);line-height:1.5;line-height:var(--bs-body-line-height);margin:0;text-align:var(--bs-body-text-align)}hr{border:0;border-top:1px solid;border-top:var(--bs-border-width) solid;color:inherit;margin:1rem 0;opacity:.25}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{color:inherit;color:var(--bs-heading-color,inherit);font-weight:500;line-height:1.2;margin-bottom:.5rem;margin-top:0}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-bottom:1rem;margin-top:0}abbr[title]{cursor:help;-webkit-text-decoration:underline dotted;text-decoration:underline;text-decoration:underline dotted;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit;margin-bottom:1rem}ol,ul{padding-left:2rem}dl,ol,ul{margin-bottom:1rem;margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{background-color:#fff3cd;background-color:var(--bs-highlight-bg);padding:.1875em}sub,sup{font-size:.75em;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));-webkit-text-decoration:underline;text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;-webkit-text-decoration:none;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;font-size:.875em;margin-bottom:1rem;margin-top:0;overflow:auto}pre code{color:inherit;font-size:inherit;word-break:normal}code{word-wrap:break-word;color:#d63384;color:var(--bs-code-color);font-size:.875em}a>code{color:inherit}kbd{background-color:#212529;background-color:var(--bs-body-color);border-radius:.25rem;color:#fff;color:var(--bs-body-bg);font-size:.875em;padding:.1875rem .375rem}kbd kbd{font-size:1em;padding:0}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{border-collapse:collapse;caption-side:bottom}caption{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);padding-bottom:.5rem;padding-top:.5rem;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border:0 solid;border-color:inherit}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none!important}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{border-style:none;padding:0}textarea{resize:vertical}fieldset{border:0;margin:0;min-width:0;padding:0}legend{float:left;font-size:calc(1.275rem + .3vw);line-height:inherit;margin-bottom:.5rem;padding:0;width:100%}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{-webkit-appearance:button;font:inherit}output{display:inline-block}iframe{border:0}summary{cursor:pointer;display:list-item}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-inline,.list-unstyled{list-style:none;padding-left:0}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{font-size:1.25rem;margin-bottom:1rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{color:#6c757d;font-size:.875em;margin-bottom:1rem;margin-top:-1rem}.blockquote-footer:before{content:\"— \"}.img-fluid,.img-thumbnail{height:auto;max-width:100%}.img-thumbnail{background-color:#fff;background-color:var(--bs-body-bg);border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:.375rem;border-radius:var(--bs-border-radius);padding:.25rem}.figure{display:inline-block}.figure-img{line-height:1;margin-bottom:.5rem}.figure-caption{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);font-size:.875em}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{--bs-gutter-x:1.5rem;--bs-gutter-y:0;margin-left:auto;margin-right:auto;padding-left:.75rem;padding-left:calc(var(--bs-gutter-x)*.5);padding-right:.75rem;padding-right:calc(var(--bs-gutter-x)*.5);width:100%}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-left:-.75rem;margin-left:calc(var(--bs-gutter-x)*-.5);margin-right:-.75rem;margin-right:calc(var(--bs-gutter-x)*-.5);margin-top:0;margin-top:calc(var(--bs-gutter-y)*-1)}.row>*{flex-shrink:0;margin-top:var(--bs-gutter-y);max-width:100%;padding-left:calc(var(--bs-gutter-x)*.5);padding-right:calc(var(--bs-gutter-x)*.5);width:100%}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-color:var(--bs-body-color);--bs-table-bg:transparent;--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-body-color);--bs-table-striped-bg:rgba(0,0,0,.05);--bs-table-active-color:var(--bs-body-color);--bs-table-active-bg:rgba(0,0,0,.1);--bs-table-hover-color:var(--bs-body-color);--bs-table-hover-bg:rgba(0,0,0,.075);border-color:#dee2e6;border-color:var(--bs-table-border-color);color:#212529;color:var(--bs-table-color);margin-bottom:1rem;vertical-align:top;width:100%}.table>:not(caption)>*>*{background-color:var(--bs-table-bg);border-bottom-width:1px;border-bottom-width:var(--bs-border-width);box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg);padding:.5rem}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:2px solid;border-top:calc(var(--bs-border-width)*2) solid}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem}.table-bordered>:not(caption)>*{border-width:1px 0;border-width:var(--bs-border-width) 0}.table-bordered>:not(caption)>*>*{border-width:0 1px;border-width:0 var(--bs-border-width)}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped-columns>:not(caption)>tr>:nth-child(2n),.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-color:#000;--bs-table-bg:#cfe2ff;--bs-table-border-color:#bacbe6;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;border-color:#bacbe6;border-color:var(--bs-table-border-color)}.table-primary,.table-secondary{color:#000;color:var(--bs-table-color)}.table-secondary{--bs-table-color:#000;--bs-table-bg:#e2e3e5;--bs-table-border-color:#cbccce;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;border-color:#cbccce;border-color:var(--bs-table-border-color)}.table-success{--bs-table-color:#000;--bs-table-bg:#d1e7dd;--bs-table-border-color:#bcd0c7;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;border-color:#bcd0c7;border-color:var(--bs-table-border-color)}.table-info,.table-success{color:#000;color:var(--bs-table-color)}.table-info{--bs-table-color:#000;--bs-table-bg:#cff4fc;--bs-table-border-color:#badce3;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;border-color:#badce3;border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color:#000;--bs-table-bg:#fff3cd;--bs-table-border-color:#e6dbb9;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;border-color:#e6dbb9;border-color:var(--bs-table-border-color)}.table-danger,.table-warning{color:#000;color:var(--bs-table-color)}.table-danger{--bs-table-color:#000;--bs-table-bg:#f8d7da;--bs-table-border-color:#dfc2c4;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;border-color:#dfc2c4;border-color:var(--bs-table-border-color)}.table-light{--bs-table-color:#000;--bs-table-bg:#f8f9fa;--bs-table-border-color:#dfe0e1;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;border-color:#dfe0e1;border-color:var(--bs-table-border-color);color:#000;color:var(--bs-table-color)}.table-dark{--bs-table-color:#fff;--bs-table-bg:#212529;--bs-table-border-color:#373b3e;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;border-color:#373b3e;border-color:var(--bs-table-border-color);color:#fff;color:var(--bs-table-color)}.table-responsive{-webkit-overflow-scrolling:touch;overflow-x:auto}@media (max-width:575.98px){.table-responsive-sm{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:767.98px){.table-responsive-md{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:991.98px){.table-responsive-lg{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:1199.98px){.table-responsive-xl{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:1399.98px){.table-responsive-xxl{-webkit-overflow-scrolling:touch;overflow-x:auto}}.form-label{margin-bottom:.5rem}.col-form-label{font-size:inherit;line-height:1.5;margin-bottom:0;padding-bottom:calc(.375rem + 1px);padding-bottom:calc(.375rem + var(--bs-border-width));padding-top:calc(.375rem + 1px);padding-top:calc(.375rem + var(--bs-border-width))}.col-form-label-lg{font-size:1.25rem;padding-bottom:calc(.5rem + 1px);padding-bottom:calc(.5rem + var(--bs-border-width));padding-top:calc(.5rem + 1px);padding-top:calc(.5rem + var(--bs-border-width))}.col-form-label-sm{font-size:.875rem;padding-bottom:calc(.25rem + 1px);padding-bottom:calc(.25rem + var(--bs-border-width));padding-top:calc(.25rem + 1px);padding-top:calc(.25rem + var(--bs-border-width))}.form-text{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);font-size:.875em;margin-top:.25rem}.form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-clip:padding-box;background-color:#fff;background-color:var(--bs-form-control-bg);border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:.375rem;color:#212529;color:var(--bs-body-color);display:block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{background-color:#fff;background-color:var(--bs-form-control-bg);border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);color:#212529;color:var(--bs-body-color);outline:0}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-webkit-datetime-edit{display:block;padding:0}.form-control::-moz-placeholder{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);opacity:1}.form-control::placeholder{color:rgba(33,37,41,.75);color:var(--bs-secondary-color);opacity:1}.form-control:disabled{background-color:#e9ecef;background-color:var(--bs-form-control-disabled-bg);opacity:1}.form-control::file-selector-button{-webkit-margin-end:.75rem;background-color:#f8f9fa;background-color:var(--bs-tertiary-bg);border-color:inherit;border-radius:0;border-style:solid;border-width:0 1px 0 0;border-right-width:var(--bs-border-width);color:#212529;color:var(--bs-body-color);margin:-.375rem .75rem -.375rem -.75rem;padding:.375rem .75rem;pointer-events:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#e9ecef;background-color:var(--bs-secondary-bg)}.form-control-plaintext{background-color:transparent;border:solid transparent;border-width:1px 0;border-width:var(--bs-border-width) 0;color:#212529;color:var(--bs-body-color);display:block;line-height:1.5;margin-bottom:0;padding:.375rem 0;width:100%}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-left:0;padding-right:0}.form-control-sm{border-radius:.25rem;font-size:.875rem;min-height:calc(1.5em + .5rem + 2px);min-height:calc(1.5em + .5rem + var(--bs-border-width)*2);padding:.25rem .5rem}.form-control-sm::file-selector-button{-webkit-margin-end:.5rem;margin:-.25rem .5rem -.25rem -.5rem;padding:.25rem .5rem}.form-control-lg{border-radius:.5rem;font-size:1.25rem;min-height:calc(1.5em + 1rem + 2px);min-height:calc(1.5em + 1rem + var(--bs-border-width)*2);padding:.5rem 1rem}.form-control-lg::file-selector-button{-webkit-margin-end:1rem;margin:-.5rem 1rem -.5rem -1rem;padding:.5rem 1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px);min-height:calc(1.5em + .75rem + var(--bs-border-width)*2)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px);min-height:calc(1.5em + .5rem + var(--bs-border-width)*2)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px);min-height:calc(1.5em + 1rem + var(--bs-border-width)*2)}.form-control-color{height:calc(1.5em + .75rem + 2px);height:calc(1.5em + .75rem + var(--bs-border-width)*2);padding:.375rem;width:3rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0!important;border-radius:.375rem}.form-control-color::-webkit-color-swatch{border-radius:.375rem}.form-control-color.form-control-sm{height:calc(1.5em + .5rem + 2px);height:calc(1.5em + .5rem + var(--bs-border-width)*2)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + 2px);height:calc(1.5em + 1rem + var(--bs-border-width)*2)}.form-select{--bs-form-select-bg-img:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\");-moz-padding-start:calc(.75rem - 3px);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-color:var(--bs-form-control-bg);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\"),none;background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon,none);background-position:right .75rem center;background-repeat:no-repeat;background-size:16px 12px;border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:.375rem;color:#212529;color:var(--bs-body-color);display:block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem 2.25rem .375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-select[multiple],.form-select[size]:not([size=\"1\"]){background-image:none;padding-right:.75rem}.form-select:disabled{background-color:#e9ecef;background-color:var(--bs-form-control-disabled-bg)}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529;text-shadow:0 0 0 var(--bs-body-color)}.form-select-sm{border-radius:.25rem;font-size:.875rem;padding-bottom:.25rem;padding-left:.5rem;padding-top:.25rem}.form-select-lg{border-radius:.5rem;font-size:1.25rem;padding-bottom:.5rem;padding-left:1rem;padding-top:.5rem}[data-bs-theme=dark] .form-select{--bs-form-select-bg-img:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23adb5bd' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\")}.form-check{display:block;margin-bottom:.125rem;min-height:1.5rem;padding-left:1.5em}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-left:0;padding-right:1.5em;text-align:right}.form-check-reverse .form-check-input{float:right;margin-left:0;margin-right:-1.5em}.form-check-input{--bs-form-check-bg:var(--bs-form-control-bg);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-color:var(--bs-form-check-bg);background-image:var(--bs-form-check-bg-image);background-position:50%;background-repeat:no-repeat;background-size:contain;border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);height:1em;margin-top:.25em;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:top;width:1em}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{--bs-form-check-bg-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E\")}.form-check-input:checked[type=radio]{--bs-form-check-bg-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23fff'/%3E%3C/svg%3E\")}.form-check-input[type=checkbox]:indeterminate{--bs-form-check-bg-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3E%3C/svg%3E\");background-color:#0d6efd;border-color:#0d6efd}.form-check-input:disabled{filter:none;opacity:.5;pointer-events:none}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{--bs-form-switch-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(0, 0, 0, 0.25)'/%3E%3C/svg%3E\");background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(0, 0, 0, 0.25)'/%3E%3C/svg%3E\");background-image:var(--bs-form-switch-bg);background-position:0;border-radius:2em;margin-left:-2.5em;transition:background-position .15s ease-in-out;width:2em}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{--bs-form-switch-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%2386b7fe'/%3E%3C/svg%3E\")}.form-switch .form-check-input:checked{--bs-form-switch-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");background-position:100%}.form-switch.form-check-reverse{padding-left:0;padding-right:2.5em}.form-switch.form-check-reverse .form-check-input{margin-left:0;margin-right:-2.5em}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{clip:rect(0,0,0,0);pointer-events:none;position:absolute}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{filter:none;opacity:.65;pointer-events:none}[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus){--bs-form-switch-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(255, 255, 255, 0.25)'/%3E%3C/svg%3E\")}.form-range{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;height:1.5rem;padding:0;width:100%}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;margin-top:-.25rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{background-color:#f8f9fa;background-color:var(--bs-tertiary-bg);border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range::-moz-range-thumb{-moz-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{background-color:#f8f9fa;background-color:var(--bs-tertiary-bg);border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:rgba(33,37,41,.75);background-color:var(--bs-secondary-color)}.form-range:disabled::-moz-range-thumb{background-color:rgba(33,37,41,.75);background-color:var(--bs-secondary-color)}.form-floating{position:relative}.form-floating:before:not(.form-control:disabled){background-color:#fff;background-color:var(--bs-form-control-bg);border-radius:.375rem;content:\"\";height:1.875em;left:1px;left:var(--bs-border-width);position:absolute;top:1px;top:var(--bs-border-width);width:calc(100% - 1.125em - .5625rem)}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + 2px);height:calc(3.5rem + var(--bs-border-width)*2);line-height:1.25}.form-floating>label{border:1px solid transparent;border:var(--bs-border-width) solid transparent;height:100%;left:0;overflow:hidden;padding:1rem .75rem;pointer-events:none;position:absolute;text-align:left;text-overflow:ellipsis;top:0;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out;white-space:nowrap;width:100%}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control-plaintext::-moz-placeholder,.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control-plaintext:not(:-moz-placeholder-shown),.form-floating>.form-control:not(:-moz-placeholder-shown){padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-select{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label{border-width:1px 0;border-width:var(--bs-border-width) 0}.form-floating>.form-control:disabled~label{color:#6c757d}.input-group{align-items:stretch;display:flex;flex-wrap:wrap;position:relative;width:100%}.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select{flex:1 1 auto;min-width:0;position:relative;width:1%}.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{align-items:center;background-color:#f8f9fa;background-color:var(--bs-tertiary-bg);border:1px solid #dee2e6;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:.375rem;color:#212529;color:var(--bs-body-color);display:flex;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;text-align:center;white-space:nowrap}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{border-radius:.5rem;font-size:1.25rem;padding:.5rem 1rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{border-radius:.25rem;font-size:.875rem;padding:.25rem .5rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-bottom-right-radius:0;border-top-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px;margin-left:calc(var(--bs-border-width)*-1)}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-bottom-left-radius:0;border-top-left-radius:0}.valid-feedback{color:#146c43;color:var(--bs-success-text);display:none;font-size:.875em;margin-top:.25rem;width:100%}.valid-tooltip{background-color:#198754;background-color:var(--bs-success);border-radius:.375rem;border-radius:var(--bs-border-radius);color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#198754;border-color:var(--bs-success);padding-right:calc(1.5em + .75rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;border-color:var(--bs-success);box-shadow:0 0 0 .25rem rgba(25,135,84,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754;border-color:var(--bs-success)}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"]{--bs-form-select-bg-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;border-color:var(--bs-success);box-shadow:0 0 0 .25rem rgba(25,135,84,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-control-color.is-valid,.was-validated .form-control-color:valid{width:calc(3.75rem + 1.5em)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754;border-color:var(--bs-success)}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#146c43;background-color:var(--bs-success-text)}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#146c43;color:var(--bs-success-text)}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-valid,.input-group>.form-floating:not(:focus-within).is-valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-control:not(:focus):valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.was-validated .input-group>.form-select:not(:focus):valid{z-index:3}.invalid-feedback{color:#b02a37;color:var(--bs-danger-text);display:none;font-size:.875em;margin-top:.25rem;width:100%}.invalid-tooltip{background-color:#dc3545;background-color:var(--bs-danger);border-radius:.375rem;border-radius:var(--bs-border-radius);color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#dc3545;border-color:var(--bs-danger);padding-right:calc(1.5em + .75rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;border-color:var(--bs-danger);box-shadow:0 0 0 .25rem rgba(220,53,69,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545;border-color:var(--bs-danger)}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"]{--bs-form-select-bg-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;border-color:var(--bs-danger);box-shadow:0 0 0 .25rem rgba(220,53,69,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-control-color.is-invalid,.was-validated .form-control-color:invalid{width:calc(3.75rem + 1.5em)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545;border-color:var(--bs-danger)}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#b02a37;background-color:var(--bs-danger-text)}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#b02a37;color:var(--bs-danger-text)}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-invalid,.input-group>.form-floating:not(:focus-within).is-invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-control:not(:focus):invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.was-validated .input-group>.form-select:not(:focus):invalid{z-index:4}.btn{--bs-btn-padding-x:0.75rem;--bs-btn-padding-y:0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:#212529;--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:0.375rem;--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 hsla(0,0%,100%,.15),0 1px 1px rgba(0,0,0,.075);--bs-btn-disabled-opacity:0.65;--bs-btn-focus-box-shadow:0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb),.5);background-color:transparent;background-color:var(--bs-btn-bg);border:1px solid transparent;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:.375rem;border-radius:var(--bs-btn-border-radius);color:#212529;color:var(--bs-btn-color);cursor:pointer;display:inline-block;font-family:var(--bs-btn-font-family);font-size:1rem;font-size:var(--bs-btn-font-size);font-weight:400;font-weight:var(--bs-btn-font-weight);line-height:1.5;line-height:var(--bs-btn-line-height);padding:.375rem .75rem;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);color:var(--bs-btn-hover-color)}.btn-check+.btn:hover{background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color);color:var(--bs-btn-color)}.btn:focus-visible{background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);box-shadow:var(--bs-btn-focus-box-shadow);color:var(--bs-btn-hover-color);outline:0}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);box-shadow:var(--bs-btn-focus-box-shadow);outline:0}.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color);color:var(--bs-btn-active-color)}.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);color:var(--bs-btn-disabled-color);opacity:var(--bs-btn-disabled-opacity);pointer-events:none}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}.btn-info{--bs-btn-color:#000;--bs-btn-bg:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#31d2f2;--bs-btn-hover-border-color:#25cff2;--bs-btn-focus-shadow-rgb:11,172,204;--bs-btn-active-color:#000;--bs-btn-active-bg:#3dd5f3;--bs-btn-active-border-color:#25cff2;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#0dcaf0;--bs-btn-disabled-border-color:#0dcaf0}.btn-warning{--bs-btn-color:#000;--bs-btn-bg:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffca2c;--bs-btn-hover-border-color:#ffc720;--bs-btn-focus-shadow-rgb:217,164,6;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffcd39;--bs-btn-active-border-color:#ffc720;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#ffc107;--bs-btn-disabled-border-color:#ffc107}.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}.btn-light{--bs-btn-color:#000;--bs-btn-bg:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#d3d4d5;--bs-btn-hover-border-color:#c6c7c8;--bs-btn-focus-shadow-rgb:211,212,213;--bs-btn-active-color:#000;--bs-btn-active-bg:#c6c7c8;--bs-btn-active-border-color:#babbbc;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#f8f9fa;--bs-btn-disabled-border-color:#f8f9fa}.btn-dark{--bs-btn-color:#fff;--bs-btn-bg:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#424649;--bs-btn-hover-border-color:#373b3e;--bs-btn-focus-shadow-rgb:66,70,73;--bs-btn-active-color:#fff;--bs-btn-active-bg:#4d5154;--bs-btn-active-border-color:#373b3e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#212529;--bs-btn-disabled-border-color:#212529}.btn-outline-primary{--bs-btn-color:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0d6efd;--bs-btn-hover-border-color:#0d6efd;--bs-btn-focus-shadow-rgb:13,110,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0d6efd;--bs-btn-active-border-color:#0d6efd;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#0d6efd;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0d6efd;--bs-gradient:none}.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}.btn-outline-success{--bs-btn-color:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#198754;--bs-btn-hover-border-color:#198754;--bs-btn-focus-shadow-rgb:25,135,84;--bs-btn-active-color:#fff;--bs-btn-active-bg:#198754;--bs-btn-active-border-color:#198754;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#198754;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#198754;--bs-gradient:none}.btn-outline-info{--bs-btn-color:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#0dcaf0;--bs-btn-hover-border-color:#0dcaf0;--bs-btn-focus-shadow-rgb:13,202,240;--bs-btn-active-color:#000;--bs-btn-active-bg:#0dcaf0;--bs-btn-active-border-color:#0dcaf0;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#0dcaf0;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0dcaf0;--bs-gradient:none}.btn-outline-warning{--bs-btn-color:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffc107;--bs-btn-hover-border-color:#ffc107;--bs-btn-focus-shadow-rgb:255,193,7;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffc107;--bs-btn-active-border-color:#ffc107;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#ffc107;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#ffc107;--bs-gradient:none}.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}.btn-outline-light{--bs-btn-color:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#f8f9fa;--bs-btn-hover-border-color:#f8f9fa;--bs-btn-focus-shadow-rgb:248,249,250;--bs-btn-active-color:#000;--bs-btn-active-bg:#f8f9fa;--bs-btn-active-border-color:#f8f9fa;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#f8f9fa;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#f8f9fa;--bs-gradient:none}.btn-outline-dark{--bs-btn-color:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#212529;--bs-btn-hover-border-color:#212529;--bs-btn-focus-shadow-rgb:33,37,41;--bs-btn-active-color:#fff;--bs-btn-active-bg:#212529;--bs-btn-active-border-color:#212529;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#212529;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#212529;--bs-gradient:none}.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:none;--bs-btn-focus-shadow-rgb:49,132,253;-webkit-text-decoration:underline;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-group-lg>.btn,.btn-lg{--bs-btn-padding-y:0.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:0.5rem}.btn-group-sm>.btn,.btn-sm{--bs-btn-padding-y:0.25rem;--bs-btn-padding-x:0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius:0.25rem}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{height:auto;transition:width .35s ease;width:0}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{border-bottom:0;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:.3em solid;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:0.5rem;--bs-dropdown-spacer:0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:var(--bs-body-color);--bs-dropdown-bg:var(--bs-body-bg);--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:0.375rem;--bs-dropdown-border-width:var(--bs-border-width);--bs-dropdown-inner-border-radius:calc(0.375rem - var(--bs-border-width));--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:0.5rem;--bs-dropdown-box-shadow:0 0.5rem 1rem rgba(var(--bs-body-color-rgb),0.15);--bs-dropdown-link-color:var(--bs-body-color);--bs-dropdown-link-hover-color:var(--bs-body-color);--bs-dropdown-link-hover-bg:var(--bs-tertiary-bg);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:0.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:0.5rem;background-clip:padding-box;background-color:#fff;background-color:var(--bs-dropdown-bg);border:1px solid rgba(0,0,0,.175);border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:.375rem;border-radius:var(--bs-dropdown-border-radius);color:#212529;color:var(--bs-dropdown-color);display:none;font-size:1rem;font-size:var(--bs-dropdown-font-size);list-style:none;margin:0;min-width:10rem;min-width:var(--bs-dropdown-min-width);padding:.5rem 0;padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);position:absolute;text-align:left;z-index:1000;z-index:var(--bs-dropdown-zindex)}.dropdown-menu[data-bs-popper]{left:0;margin-top:var(--bs-dropdown-spacer);top:100%}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{left:auto;right:0}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{left:auto;right:0}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{left:auto;right:0}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{left:auto;right:0}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{left:auto;right:0}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{left:auto;right:0}}.dropup .dropdown-menu[data-bs-popper]{bottom:100%;margin-bottom:var(--bs-dropdown-spacer);margin-top:0;top:auto}.dropup .dropdown-toggle:after{border-bottom:.3em solid;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:0;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{left:100%;margin-left:var(--bs-dropdown-spacer);margin-top:0;right:auto;top:0}.dropend .dropdown-toggle:after{border-bottom:.3em solid transparent;border-left:.3em solid;border-right:0;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropend .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-toggle:after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{left:auto;margin-right:var(--bs-dropdown-spacer);margin-top:0;right:100%;top:0}.dropstart .dropdown-toggle:after{content:\"\";display:inline-block;display:none;margin-left:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:before{border-bottom:.3em solid transparent;border-right:.3em solid;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-right:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:empty:after{margin-left:0}.dropstart .dropdown-toggle:before{vertical-align:0}.dropdown-divider{border-top:1px solid var(--bs-dropdown-divider-bg);height:0;margin:var(--bs-dropdown-divider-margin-y) 0;opacity:1;overflow:hidden}.dropdown-item{background-color:transparent;border:0;border-radius:0;border-radius:var(--bs-dropdown-item-border-radius,0);clear:both;color:var(--bs-dropdown-link-color);display:block;font-weight:400;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);text-align:inherit;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;width:100%}.dropdown-item:focus,.dropdown-item:hover{background-color:var(--bs-dropdown-link-hover-bg);color:var(--bs-dropdown-link-hover-color)}.dropdown-item.active,.dropdown-item:active{background-color:var(--bs-dropdown-link-active-bg);color:var(--bs-dropdown-link-active-color);-webkit-text-decoration:none;text-decoration:none}.dropdown-item.disabled,.dropdown-item:disabled{background-color:transparent;color:var(--bs-dropdown-link-disabled-color);pointer-events:none}.dropdown-menu.show{display:block}.dropdown-header{color:var(--bs-dropdown-header-color);display:block;font-size:.875rem;margin-bottom:0;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);white-space:nowrap}.dropdown-item-text{color:var(--bs-dropdown-link-color);display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x)}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:hsla(0,0%,100%,.15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.btn-group,.btn-group-vertical{display:inline-flex;position:relative;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{flex:1 1 auto;position:relative}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:.375rem}.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn{margin-left:-1px;margin-left:calc(var(--bs-border-width)*-1)}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-bottom-left-radius:0;border-top-left-radius:0}.dropdown-toggle-split{padding-left:.5625rem;padding-right:.5625rem}.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropstart .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-left:.375rem;padding-right:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-left:.75rem;padding-right:.75rem}.btn-group-vertical{align-items:flex-start;flex-direction:column;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px;margin-top:calc(var(--bs-border-width)*-1)}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;list-style:none;margin-bottom:0;padding-left:0}.nav-link{color:var(--bs-nav-link-color);display:block;font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);cursor:default;pointer-events:none}.nav-tabs{--bs-nav-tabs-border-width:var(--bs-border-width);--bs-nav-tabs-border-color:var(--bs-border-color);--bs-nav-tabs-border-radius:var(--bs-border-radius);--bs-nav-tabs-link-hover-border-color:var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);--bs-nav-tabs-link-active-color:var(--bs-emphasis-color);--bs-nav-tabs-link-active-bg:var(--bs-body-bg);--bs-nav-tabs-link-active-border-color:var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);border-bottom:1px solid #dee2e6;border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{background:0 0;border:var(--bs-nav-tabs-border-width) solid transparent;border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius);margin-bottom:calc(var(--bs-nav-tabs-border-width)*-1)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:var(--bs-nav-tabs-link-hover-border-color);isolation:isolate}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{background-color:transparent;border-color:transparent;color:var(--bs-nav-link-disabled-color)}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color);color:var(--bs-nav-tabs-link-active-color)}.nav-tabs .dropdown-menu{border-top-left-radius:0;border-top-right-radius:0;margin-top:calc(var(--bs-nav-tabs-border-width)*-1)}.nav-pills{--bs-nav-pills-border-radius:0.375rem;--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:#0d6efd}.nav-pills .nav-link{background:0 0;border:0;border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{background-color:transparent;border-color:transparent;color:var(--bs-nav-link-disabled-color)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background-color:var(--bs-nav-pills-link-active-bg);color:var(--bs-nav-pills-link-active-color)}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:0.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb),0.65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb),0.8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb),0.3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb),1);--bs-navbar-brand-padding-y:0.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb),1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb),1);--bs-navbar-nav-link-padding-x:0.5rem;--bs-navbar-toggler-padding-y:0.25rem;--bs-navbar-toggler-padding-x:0.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(33, 37, 41, 0.75)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb),0.15);--bs-navbar-toggler-border-radius:0.375rem;--bs-navbar-toggler-focus-width:0.25rem;--bs-navbar-toggler-transition:box-shadow 0.15s ease-in-out;align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;padding:.5rem 0;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);position:relative}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{align-items:center;display:flex;flex-wrap:inherit;justify-content:space-between}.navbar-brand{color:var(--bs-navbar-brand-color);font-size:var(--bs-navbar-brand-font-size);margin-right:var(--bs-navbar-brand-margin-end);padding-bottom:var(--bs-navbar-brand-padding-y);padding-top:var(--bs-navbar-brand-padding-y);-webkit-text-decoration:none;text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;list-style:none;margin-bottom:0;padding-left:0}.navbar-nav .nav-link.active,.navbar-nav .show>.nav-link{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{color:var(--bs-navbar-color);padding-bottom:.5rem;padding-top:.5rem}.navbar-text a,.navbar-text a:focus,.navbar-text a:hover{color:var(--bs-navbar-active-color)}.navbar-collapse{align-items:center;flex-basis:100%;flex-grow:1}.navbar-toggler{background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);color:var(--bs-navbar-color);font-size:var(--bs-navbar-toggler-font-size);line-height:1;padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:focus,.navbar-toggler:hover{-webkit-text-decoration:none;text-decoration:none}.navbar-toggler:focus{box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width);outline:0}.navbar-toggler-icon{background-image:var(--bs-navbar-toggler-icon-bg);background-position:50%;background-repeat:no-repeat;background-size:100%;display:inline-block;height:1.5em;vertical-align:middle;width:1.5em}.navbar-nav-scroll{max-height:75vh;max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}.navbar-dark{--bs-navbar-color:hsla(0,0%,100%,.55);--bs-navbar-hover-color:hsla(0,0%,100%,.75);--bs-navbar-disabled-color:hsla(0,0%,100%,.25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:hsla(0,0%,100%,.1)}.navbar-dark,[data-bs-theme=dark] .navbar{--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:0.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-card-cap-padding-y:0.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb),0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:0.75rem;word-wrap:break-word;background-clip:border-box;background-color:#fff;background-color:var(--bs-card-bg);border:1px solid rgba(0,0,0,.175);border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:.375rem;border-radius:var(--bs-card-border-radius);display:flex;flex-direction:column;height:var(--bs-card-height);min-width:0;position:relative}.card>hr{margin-left:0;margin-right:0}.card>.list-group{border-bottom:inherit;border-top:inherit}.card>.list-group:first-child{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius);border-top-width:0}.card>.list-group:last-child{border-bottom-left-radius:var(--bs-card-inner-border-radius);border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-width:0}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{color:var(--bs-card-color);flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x)}.card-title{color:var(--bs-card-title-color);margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{color:var(--bs-card-subtitle-color);margin-top:calc(var(--bs-card-title-spacer-y)*-.5)}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color);color:var(--bs-card-cap-color);margin-bottom:0;padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color);color:var(--bs-card-cap-color);padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{border-bottom:0;margin-bottom:calc(var(--bs-card-cap-padding-y)*-1);margin-left:calc(var(--bs-card-cap-padding-x)*-.5);margin-right:calc(var(--bs-card-cap-padding-x)*-.5)}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-left:calc(var(--bs-card-cap-padding-x)*-.5);margin-right:calc(var(--bs-card-cap-padding-x)*-.5)}.card-img-overlay{border-radius:var(--bs-card-inner-border-radius);bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);position:absolute;right:0;top:0}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-left-radius:var(--bs-card-inner-border-radius);border-bottom-right-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{border-left:0;margin-left:0}.card-group>.card:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion{--bs-accordion-color:var(--bs-body-color);--bs-accordion-bg:var(--bs-body-bg);--bs-accordion-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:var(--bs-border-width);--bs-accordion-border-radius:var(--bs-border-radius);--bs-accordion-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:var(--bs-body-color);--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform 0.2s ease-in-out;--bs-accordion-btn-active-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230a58ca' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\");--bs-accordion-btn-focus-border-color:#86b7fe;--bs-accordion-btn-focus-box-shadow:0 0 0 0.25rem rgba(13,110,253,.25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:var(--bs-primary-text);--bs-accordion-active-bg:var(--bs-primary-bg-subtle)}.accordion-button{align-items:center;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;color:var(--bs-accordion-btn-color);display:flex;font-size:1rem;overflow-anchor:none;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);position:relative;text-align:left;transition:var(--bs-accordion-transition);width:100%}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(var(--bs-accordion-border-width)*-1) 0 var(--bs-accordion-border-color);color:var(--bs-accordion-active-color)}.accordion-button:not(.collapsed):after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button:after{background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);content:\"\";flex-shrink:0;height:var(--bs-accordion-btn-icon-width);margin-left:auto;transition:var(--bs-accordion-btn-icon-transition);width:var(--bs-accordion-btn-icon-width)}@media (prefers-reduced-motion:reduce){.accordion-button:after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{border-color:var(--bs-accordion-btn-focus-border-color);box-shadow:var(--bs-accordion-btn-focus-box-shadow);outline:0;z-index:3}.accordion-header{margin-bottom:0}.accordion-item{background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);color:var(--bs-accordion-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-left-radius:var(--bs-accordion-border-radius);border-bottom-right-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-left-radius:var(--bs-accordion-inner-border-radius);border-bottom-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-left-radius:var(--bs-accordion-border-radius);border-bottom-right-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-left:0;border-radius:0;border-right:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button,.accordion-flush .accordion-item .accordion-button.collapsed{border-radius:0}[data-bs-theme=dark] .accordion-button:after{--bs-accordion-btn-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236ea8fe' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\");--bs-accordion-btn-active-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236ea8fe' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\")}.breadcrumb{--bs-breadcrumb-padding-x:0;--bs-breadcrumb-padding-y:0;--bs-breadcrumb-margin-bottom:1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color:var(--bs-secondary-color);--bs-breadcrumb-item-padding-x:0.5rem;--bs-breadcrumb-item-active-color:var(--bs-secondary-color);background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius);display:flex;flex-wrap:wrap;font-size:var(--bs-breadcrumb-font-size);list-style:none;margin-bottom:1rem;margin-bottom:var(--bs-breadcrumb-margin-bottom);padding:0;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item:before{color:var(--bs-breadcrumb-divider-color);content:\"/\";content:var(--bs-breadcrumb-divider,\"/\");float:left;padding-right:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x:0.75rem;--bs-pagination-padding-y:0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color:var(--bs-link-color);--bs-pagination-bg:var(--bs-body-bg);--bs-pagination-border-width:var(--bs-border-width);--bs-pagination-border-color:var(--bs-border-color);--bs-pagination-border-radius:var(--bs-border-radius);--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:var(--bs-tertiary-bg);--bs-pagination-hover-border-color:var(--bs-border-color);--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:var(--bs-secondary-bg);--bs-pagination-focus-box-shadow:0 0 0 0.25rem rgba(13,110,253,.25);--bs-pagination-active-color:#fff;--bs-pagination-active-bg:#0d6efd;--bs-pagination-active-border-color:#0d6efd;--bs-pagination-disabled-color:var(--bs-secondary-color);--bs-pagination-disabled-bg:var(--bs-secondary-bg);--bs-pagination-disabled-border-color:var(--bs-border-color);display:flex;list-style:none;padding-left:0}.page-link{background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);color:var(--bs-pagination-color);display:block;font-size:var(--bs-pagination-font-size);padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);position:relative;-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color);color:var(--bs-pagination-hover-color);z-index:2}.page-link:focus{background-color:var(--bs-pagination-focus-bg);box-shadow:var(--bs-pagination-focus-box-shadow);color:var(--bs-pagination-focus-color);outline:0;z-index:3}.active>.page-link,.page-link.active{background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color);color:var(--bs-pagination-active-color);z-index:3}.disabled>.page-link,.page-link.disabled{background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color);color:var(--bs-pagination-disabled-color);pointer-events:none}.page-item:not(:first-child) .page-link{margin-left:-1px;margin-left:calc(var(--bs-border-width)*-1)}.page-item:first-child .page-link{border-bottom-left-radius:var(--bs-pagination-border-radius);border-top-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-bottom-right-radius:var(--bs-pagination-border-radius);border-top-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x:1.5rem;--bs-pagination-padding-y:0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius:0.5rem}.pagination-sm{--bs-pagination-padding-x:0.5rem;--bs-pagination-padding-y:0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius:0.25rem}.badge{--bs-badge-padding-x:0.65em;--bs-badge-padding-y:0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:0.375rem;border-radius:.375rem;border-radius:var(--bs-badge-border-radius);color:#fff;color:var(--bs-badge-color);display:inline-block;font-size:.75em;font-size:var(--bs-badge-font-size);font-weight:700;font-weight:var(--bs-badge-font-weight);line-height:1;padding:.35em .65em;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);text-align:center;vertical-align:baseline;white-space:nowrap}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius:0.375rem;--bs-alert-link-color:inherit;background-color:transparent;background-color:var(--bs-alert-bg);border:1px solid transparent;border:var(--bs-alert-border);border-radius:.375rem;border-radius:var(--bs-alert-border-radius);color:inherit;color:var(--bs-alert-color);margin-bottom:1rem;margin-bottom:var(--bs-alert-margin-bottom);padding:1rem;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);position:relative}.alert-heading{color:inherit}.alert-link{color:var(--bs-alert-link-color);font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{padding:1.25rem 1rem;position:absolute;right:0;top:0;z-index:2}.alert-primary{--bs-alert-color:var(--bs-primary-text);--bs-alert-bg:var(--bs-primary-bg-subtle);--bs-alert-border-color:var(--bs-primary-border-subtle);--bs-alert-link-color:var(--bs-primary-text)}.alert-secondary{--bs-alert-color:var(--bs-secondary-text);--bs-alert-bg:var(--bs-secondary-bg-subtle);--bs-alert-border-color:var(--bs-secondary-border-subtle);--bs-alert-link-color:var(--bs-secondary-text)}.alert-success{--bs-alert-color:var(--bs-success-text);--bs-alert-bg:var(--bs-success-bg-subtle);--bs-alert-border-color:var(--bs-success-border-subtle);--bs-alert-link-color:var(--bs-success-text)}.alert-info{--bs-alert-color:var(--bs-info-text);--bs-alert-bg:var(--bs-info-bg-subtle);--bs-alert-border-color:var(--bs-info-border-subtle);--bs-alert-link-color:var(--bs-info-text)}.alert-warning{--bs-alert-color:var(--bs-warning-text);--bs-alert-bg:var(--bs-warning-bg-subtle);--bs-alert-border-color:var(--bs-warning-border-subtle);--bs-alert-link-color:var(--bs-warning-text)}.alert-danger{--bs-alert-color:var(--bs-danger-text);--bs-alert-bg:var(--bs-danger-bg-subtle);--bs-alert-border-color:var(--bs-danger-border-subtle);--bs-alert-link-color:var(--bs-danger-text)}.alert-light{--bs-alert-color:var(--bs-light-text);--bs-alert-bg:var(--bs-light-bg-subtle);--bs-alert-border-color:var(--bs-light-border-subtle);--bs-alert-link-color:var(--bs-light-text)}.alert-dark{--bs-alert-color:var(--bs-dark-text);--bs-alert-bg:var(--bs-dark-bg-subtle);--bs-alert-border-color:var(--bs-dark-border-subtle);--bs-alert-link-color:var(--bs-dark-text)}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress,.progress-stacked{--bs-progress-height:1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg:var(--bs-secondary-bg);--bs-progress-border-radius:var(--bs-border-radius);--bs-progress-box-shadow:var(--bs-box-shadow-inset);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width 0.6s ease;background-color:#e9ecef;background-color:var(--bs-progress-bg);border-radius:.375rem;border-radius:var(--bs-progress-border-radius);display:flex;font-size:.75rem;font-size:var(--bs-progress-font-size);height:1rem;height:var(--bs-progress-height);overflow:hidden}.progress-bar{background-color:var(--bs-progress-bar-bg);color:var(--bs-progress-bar-color);display:flex;flex-direction:column;justify-content:center;overflow:hidden;text-align:center;transition:var(--bs-progress-bar-transition);white-space:nowrap}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-stacked>.progress{overflow:visible}.progress-stacked>.progress>.progress-bar{width:100%}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color:var(--bs-body-color);--bs-list-group-bg:var(--bs-body-bg);--bs-list-group-border-color:var(--bs-border-color);--bs-list-group-border-width:var(--bs-border-width);--bs-list-group-border-radius:var(--bs-border-radius);--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:0.5rem;--bs-list-group-action-color:var(--bs-secondary-color);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-tertiary-bg);--bs-list-group-action-active-color:var(--bs-body-color);--bs-list-group-action-active-bg:var(--bs-secondary-bg);--bs-list-group-disabled-color:var(--bs-secondary-color);--bs-list-group-disabled-bg:var(--bs-body-bg);--bs-list-group-active-color:#fff;--bs-list-group-active-bg:#0d6efd;--bs-list-group-active-border-color:#0d6efd;border-radius:.375rem;border-radius:var(--bs-list-group-border-radius);display:flex;flex-direction:column;margin-bottom:0;padding-left:0}.list-group-numbered{counter-reset:section;list-style-type:none}.list-group-numbered>.list-group-item:before{content:counters(section,\".\") \". \";counter-increment:section}.list-group-item-action{color:var(--bs-list-group-action-color);text-align:inherit;width:100%}.list-group-item-action:focus,.list-group-item-action:hover{background-color:var(--bs-list-group-action-hover-bg);color:var(--bs-list-group-action-hover-color);-webkit-text-decoration:none;text-decoration:none;z-index:1}.list-group-item-action:active{background-color:var(--bs-list-group-action-active-bg);color:var(--bs-list-group-action-active-color)}.list-group-item{background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);color:var(--bs-list-group-color);display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);position:relative;-webkit-text-decoration:none;text-decoration:none}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{background-color:var(--bs-list-group-disabled-bg);color:var(--bs-list-group-disabled-color);pointer-events:none}.list-group-item.active{background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color);color:var(--bs-list-group-active-color);z-index:2}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{border-top-width:var(--bs-list-group-border-width);margin-top:calc(var(--bs-list-group-border-width)*-1)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-md>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{--bs-list-group-color:var(--bs-primary-text);--bs-list-group-bg:var(--bs-primary-bg-subtle);--bs-list-group-border-color:var(--bs-primary-border-subtle)}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-primary-border-subtle)}.list-group-item-primary.list-group-item-action:active{--bs-list-group-active-color:var(--bs-emphasis-color);--bs-list-group-active-bg:var(--bs-primary-text);--bs-list-group-active-border-color:var(--bs-primary-text)}.list-group-item-secondary{--bs-list-group-color:var(--bs-secondary-text);--bs-list-group-bg:var(--bs-secondary-bg-subtle);--bs-list-group-border-color:var(--bs-secondary-border-subtle)}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-secondary-border-subtle)}.list-group-item-secondary.list-group-item-action:active{--bs-list-group-active-color:var(--bs-emphasis-color);--bs-list-group-active-bg:var(--bs-secondary-text);--bs-list-group-active-border-color:var(--bs-secondary-text)}.list-group-item-success{--bs-list-group-color:var(--bs-success-text);--bs-list-group-bg:var(--bs-success-bg-subtle);--bs-list-group-border-color:var(--bs-success-border-subtle)}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-success-border-subtle)}.list-group-item-success.list-group-item-action:active{--bs-list-group-active-color:var(--bs-emphasis-color);--bs-list-group-active-bg:var(--bs-success-text);--bs-list-group-active-border-color:var(--bs-success-text)}.list-group-item-info{--bs-list-group-color:var(--bs-info-text);--bs-list-group-bg:var(--bs-info-bg-subtle);--bs-list-group-border-color:var(--bs-info-border-subtle)}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-info-border-subtle)}.list-group-item-info.list-group-item-action:active{--bs-list-group-active-color:var(--bs-emphasis-color);--bs-list-group-active-bg:var(--bs-info-text);--bs-list-group-active-border-color:var(--bs-info-text)}.list-group-item-warning{--bs-list-group-color:var(--bs-warning-text);--bs-list-group-bg:var(--bs-warning-bg-subtle);--bs-list-group-border-color:var(--bs-warning-border-subtle)}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-warning-border-subtle)}.list-group-item-warning.list-group-item-action:active{--bs-list-group-active-color:var(--bs-emphasis-color);--bs-list-group-active-bg:var(--bs-warning-text);--bs-list-group-active-border-color:var(--bs-warning-text)}.list-group-item-danger{--bs-list-group-color:var(--bs-danger-text);--bs-list-group-bg:var(--bs-danger-bg-subtle);--bs-list-group-border-color:var(--bs-danger-border-subtle)}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-danger-border-subtle)}.list-group-item-danger.list-group-item-action:active{--bs-list-group-active-color:var(--bs-emphasis-color);--bs-list-group-active-bg:var(--bs-danger-text);--bs-list-group-active-border-color:var(--bs-danger-text)}.list-group-item-light{--bs-list-group-color:var(--bs-light-text);--bs-list-group-bg:var(--bs-light-bg-subtle);--bs-list-group-border-color:var(--bs-light-border-subtle)}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-light-border-subtle)}.list-group-item-light.list-group-item-action:active{--bs-list-group-active-color:var(--bs-emphasis-color);--bs-list-group-active-bg:var(--bs-light-text);--bs-list-group-active-border-color:var(--bs-light-text)}.list-group-item-dark{--bs-list-group-color:var(--bs-dark-text);--bs-list-group-bg:var(--bs-dark-bg-subtle);--bs-list-group-border-color:var(--bs-dark-border-subtle)}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-dark-border-subtle)}.list-group-item-dark.list-group-item-action:active{--bs-list-group-active-color:var(--bs-emphasis-color);--bs-list-group-active-bg:var(--bs-dark-text);--bs-list-group-active-border-color:var(--bs-dark-text)}.btn-close{--bs-btn-close-color:#000;--bs-btn-close-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E\");--bs-btn-close-opacity:0.5;--bs-btn-close-hover-opacity:0.75;--bs-btn-close-focus-shadow:0 0 0 0.25rem rgba(13,110,253,.25);--bs-btn-close-focus-opacity:1;--bs-btn-close-disabled-opacity:0.25;--bs-btn-close-white-filter:invert(1) grayscale(100%) brightness(200%);background:transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E\") 50%/1em auto no-repeat;background:transparent var(--bs-btn-close-bg) center/1em auto no-repeat;border:0;border-radius:.375rem;box-sizing:content-box;color:#000;height:1em;opacity:.5;opacity:var(--bs-btn-close-opacity);padding:.25em;width:1em}.btn-close,.btn-close:hover{color:var(--bs-btn-close-color)}.btn-close:hover{opacity:var(--bs-btn-close-hover-opacity);-webkit-text-decoration:none;text-decoration:none}.btn-close:focus{box-shadow:var(--bs-btn-close-focus-shadow);opacity:var(--bs-btn-close-focus-opacity);outline:0}.btn-close.disabled,.btn-close:disabled{opacity:var(--bs-btn-close-disabled-opacity);pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.btn-close-white,[data-bs-theme=dark] .btn-close{filter:var(--bs-btn-close-white-filter)}.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:0.75rem;--bs-toast-padding-y:0.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(var(--bs-body-bg-rgb),0.85);--bs-toast-border-width:var(--bs-border-width);--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:var(--bs-border-radius);--bs-toast-box-shadow:var(--bs-box-shadow);--bs-toast-header-color:var(--bs-secondary-color);--bs-toast-header-bg:rgba(var(--bs-body-bg-rgb),0.85);--bs-toast-header-border-color:var(--bs-border-color-translucent);background-clip:padding-box;background-color:hsla(0,0%,100%,.85);background-color:var(--bs-toast-bg);border:1px solid rgba(0,0,0,.175);border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);border-radius:.375rem;border-radius:var(--bs-toast-border-radius);box-shadow:0 .5rem 1rem rgba(33,37,41,.15);box-shadow:var(--bs-toast-box-shadow);color:var(--bs-toast-color);font-size:.875rem;font-size:var(--bs-toast-font-size);max-width:100%;pointer-events:auto;width:350px;width:var(--bs-toast-max-width)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{--bs-toast-zindex:1090;max-width:100%;pointer-events:none;position:absolute;width:-moz-max-content;width:max-content;z-index:1090;z-index:var(--bs-toast-zindex)}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{align-items:center;background-clip:padding-box;background-color:var(--bs-toast-header-bg);border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));color:var(--bs-toast-header-color);display:flex;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x)}.toast-header .btn-close{margin-left:var(--bs-toast-padding-x);margin-right:calc(var(--bs-toast-padding-x)*-.5)}.toast-body{word-wrap:break-word;padding:var(--bs-toast-padding-x)}.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:0.5rem;--bs-modal-color: ;--bs-modal-bg:var(--bs-body-bg);--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:var(--bs-border-width);--bs-modal-border-radius:var(--bs-border-radius-lg);--bs-modal-box-shadow:0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb),0.075);--bs-modal-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:var(--bs-border-width);--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:var(--bs-border-width);display:none;height:100%;left:0;outline:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;width:100%;z-index:1055;z-index:var(--bs-modal-zindex)}.modal-dialog{margin:var(--bs-modal-margin);pointer-events:none;position:relative;width:auto}.modal.fade .modal-dialog{transform:translateY(-50px);transition:transform .3s ease-out}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin)*2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{align-items:center;display:flex;min-height:calc(100% - var(--bs-modal-margin)*2)}.modal-content{background-clip:padding-box;background-color:var(--bs-modal-bg);border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);color:var(--bs-modal-color);display:flex;flex-direction:column;outline:0;pointer-events:auto;position:relative;width:100%}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:0.5;background-color:#000;background-color:var(--bs-backdrop-bg);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1050;z-index:var(--bs-backdrop-zindex)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{align-items:center;border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius);display:flex;flex-shrink:0;justify-content:space-between;padding:var(--bs-modal-header-padding)}.modal-header .btn-close{margin:calc(var(--bs-modal-header-padding-y)*-.5) calc(var(--bs-modal-header-padding-x)*-.5) calc(var(--bs-modal-header-padding-y)*-.5) auto;padding:calc(var(--bs-modal-header-padding-y)*.5) calc(var(--bs-modal-header-padding-x)*.5)}.modal-title{line-height:var(--bs-modal-title-line-height);margin-bottom:0}.modal-body{flex:1 1 auto;padding:var(--bs-modal-padding);position:relative}.modal-footer{align-items:center;background-color:var(--bs-modal-footer-bg);border-bottom-left-radius:var(--bs-modal-inner-border-radius);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap)*.5)}@media (min-width:576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:0 0.5rem 1rem rgba(var(--bs-body-color-rgb),0.15)}.modal-dialog{margin-left:auto;margin-right:auto;max-width:var(--bs-modal-width)}.modal-sm{--bs-modal-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}@media (min-width:1200px){.modal-xl{--bs-modal-width:1140px}}.modal-fullscreen{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media (max-width:575.98px){.modal-fullscreen-sm-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-sm-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media (max-width:767.98px){.modal-fullscreen-md-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-md-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media (max-width:991.98px){.modal-fullscreen-lg-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-lg-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xxl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xxl-down .modal-footer,.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:0.5rem;--bs-tooltip-padding-y:0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color:var(--bs-body-bg);--bs-tooltip-bg:var(--bs-emphasis-color);--bs-tooltip-border-radius:var(--bs-border-radius);--bs-tooltip-opacity:0.9;--bs-tooltip-arrow-width:0.8rem;--bs-tooltip-arrow-height:0.4rem;word-wrap:break-word;display:block;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-size:.875rem;font-size:var(--bs-tooltip-font-size);font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;margin:var(--bs-tooltip-margin);opacity:0;padding:.4rem;padding:var(--bs-tooltip-arrow-height);text-align:left;text-align:start;-webkit-text-decoration:none;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;z-index:1080;z-index:var(--bs-tooltip-zindex)}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;height:var(--bs-tooltip-arrow-height);width:var(--bs-tooltip-arrow-width)}.tooltip .tooltip-arrow:before{border-color:transparent;border-style:solid;content:\"\";position:absolute}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before{border-top-color:var(--bs-tooltip-bg);border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;top:-1px}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{height:var(--bs-tooltip-arrow-width);left:0;width:var(--bs-tooltip-arrow-height)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before{border-right-color:var(--bs-tooltip-bg);border-width:calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;right:-1px}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before{border-bottom-color:var(--bs-tooltip-bg);border-width:0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);bottom:-1px}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{height:var(--bs-tooltip-arrow-width);right:0;width:var(--bs-tooltip-arrow-height)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before{border-left-color:var(--bs-tooltip-bg);border-width:calc(var(--bs-tooltip-arrow-width)*.5) 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);left:-1px}.tooltip-inner{background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius);color:var(--bs-tooltip-color);max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);text-align:center}.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:0.875rem;--bs-popover-bg:var(--bs-body-bg);--bs-popover-border-width:var(--bs-border-width);--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:var(--bs-border-radius-lg);--bs-popover-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-popover-box-shadow:0 0.5rem 1rem rgba(var(--bs-body-color-rgb),0.15);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: ;--bs-popover-header-bg:var(--bs-secondary-bg);--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:var(--bs-body-color);--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:0.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);word-wrap:break-word;background-clip:padding-box;background-color:#fff;background-color:var(--bs-popover-bg);border:1px solid rgba(0,0,0,.175);border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:.5rem;border-radius:var(--bs-popover-border-radius);display:block;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-size:.875rem;font-size:var(--bs-popover-font-size);font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;max-width:276px;max-width:var(--bs-popover-max-width);text-align:left;text-align:start;-webkit-text-decoration:none;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;z-index:1070;z-index:var(--bs-popover-zindex)}.popover .popover-arrow{display:block;height:var(--bs-popover-arrow-height);width:var(--bs-popover-arrow-width)}.popover .popover-arrow:after,.popover .popover-arrow:before{border:0 solid transparent;content:\"\";display:block;position:absolute}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:after,.bs-popover-top>.popover-arrow:before{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before{border-top-color:var(--bs-popover-arrow-border);bottom:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after{border-top-color:var(--bs-popover-bg);bottom:var(--bs-popover-border-width)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{height:var(--bs-popover-arrow-width);left:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:after,.bs-popover-end>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before{border-right-color:var(--bs-popover-arrow-border);left:0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after{border-right-color:var(--bs-popover-bg);left:var(--bs-popover-border-width)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:before{border-width:0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before{border-bottom-color:var(--bs-popover-arrow-border);top:0}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after{border-bottom-color:var(--bs-popover-bg);top:var(--bs-popover-border-width)}.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg);content:\"\";display:block;left:50%;margin-left:calc(var(--bs-popover-arrow-width)*-.5);position:absolute;top:0;width:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{height:var(--bs-popover-arrow-width);right:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:after,.bs-popover-start>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width)*.5) 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before{border-left-color:var(--bs-popover-arrow-border);right:0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after{border-left-color:var(--bs-popover-bg);right:var(--bs-popover-border-width)}.popover-header{background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius);color:var(--bs-popover-header-color);font-size:var(--bs-popover-header-font-size);margin-bottom:0;padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x)}.popover-header:empty{display:none}.popover-body{color:var(--bs-popover-body-color);padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{overflow:hidden;position:relative;width:100%}.carousel-inner:after{clear:both;content:\"\";display:block}.carousel-item{backface-visibility:hidden;display:none;float:left;margin-right:-100%;position:relative;transition:transform .6s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transform:none;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{opacity:1;z-index:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{opacity:0;transition:opacity 0s .6s;z-index:0}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{align-items:center;background:0 0;border:0;bottom:0;color:#fff;display:flex;justify-content:center;opacity:.5;padding:0;position:absolute;text-align:center;top:0;transition:opacity .15s ease;width:15%;z-index:1}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;opacity:.9;outline:0;-webkit-text-decoration:none;text-decoration:none}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{background-position:50%;background-repeat:no-repeat;background-size:100% 100%;display:inline-block;height:2rem;width:2rem}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\")}.carousel-indicators{bottom:0;display:flex;justify-content:center;left:0;list-style:none;margin-bottom:1rem;margin-left:15%;margin-right:15%;padding:0;position:absolute;right:0;z-index:2}.carousel-indicators [data-bs-target]{background-clip:padding-box;background-color:#fff;border:0;border-bottom:10px solid transparent;border-top:10px solid transparent;box-sizing:content-box;cursor:pointer;flex:0 1 auto;height:3px;margin-left:3px;margin-right:3px;opacity:.5;padding:0;text-indent:-999px;transition:opacity .6s ease;width:30px}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{bottom:1.25rem;color:#fff;left:15%;padding-bottom:1.25rem;padding-top:1.25rem;position:absolute;right:15%;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}[data-bs-theme=dark] .carousel .carousel-control-next-icon,[data-bs-theme=dark] .carousel .carousel-control-prev-icon{filter:invert(1) grayscale(100)}[data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target]{background-color:#000}[data-bs-theme=dark] .carousel .carousel-caption{color:#000}.spinner-border,.spinner-grow{animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);border-radius:50%;display:inline-block;height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);width:var(--bs-spinner-width)}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-border-width:0.25em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-border;border:.25em solid;border:var(--bs-spinner-border-width) solid;border-right:var(--bs-spinner-border-width) solid transparent}.spinner-border-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem;--bs-spinner-border-width:0.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed:1.5s}}.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl,.offcanvas-xxl{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color:var(--bs-body-color);--bs-offcanvas-bg:var(--bs-body-bg);--bs-offcanvas-border-width:var(--bs-border-width);--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb),0.075);--bs-offcanvas-transition:transform 0.3s ease-in-out;--bs-offcanvas-title-line-height:1.5}@media (max-width:575.98px){.offcanvas-sm{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.offcanvas-sm{transition:none}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-sm.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-sm.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-sm.offcanvas-bottom,.offcanvas-sm.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-sm.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing{transform:none}.offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing{visibility:visible}}@media (min-width:576px){.offcanvas-sm{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:767.98px){.offcanvas-md{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:767.98px) and (prefers-reduced-motion:reduce){.offcanvas-md{transition:none}}@media (max-width:767.98px){.offcanvas-md.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-md.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-md.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-md.offcanvas-bottom,.offcanvas-md.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-md.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-md.show:not(.hiding),.offcanvas-md.showing{transform:none}.offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing{visibility:visible}}@media (min-width:768px){.offcanvas-md{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:991.98px){.offcanvas-lg{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:991.98px) and (prefers-reduced-motion:reduce){.offcanvas-lg{transition:none}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-lg.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-lg.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-lg.offcanvas-bottom,.offcanvas-lg.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-lg.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing{transform:none}.offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing{visibility:visible}}@media (min-width:992px){.offcanvas-lg{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:1199.98px){.offcanvas-xl{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:1199.98px) and (prefers-reduced-motion:reduce){.offcanvas-xl{transition:none}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-xl.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-xl.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-xl.offcanvas-bottom,.offcanvas-xl.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-xl.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing{transform:none}.offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing{visibility:visible}}@media (min-width:1200px){.offcanvas-xl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:1399.98px){.offcanvas-xxl{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:1399.98px) and (prefers-reduced-motion:reduce){.offcanvas-xxl{transition:none}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-xxl.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-xxl.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-xxl.offcanvas-bottom,.offcanvas-xxl.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-xxl.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xxl.show:not(.hiding),.offcanvas-xxl.showing{transform:none}.offcanvas-xxl.hiding,.offcanvas-xxl.show,.offcanvas-xxl.showing{visibility:visible}}@media (min-width:1400px){.offcanvas-xxl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}.offcanvas{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas.offcanvas-bottom,.offcanvas.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.show:not(.hiding),.offcanvas.showing{transform:none}.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}.offcanvas-backdrop{background-color:#000;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1040}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{align-items:center;display:flex;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{margin-bottom:calc(var(--bs-offcanvas-padding-y)*-.5);margin-right:calc(var(--bs-offcanvas-padding-x)*-.5);margin-top:calc(var(--bs-offcanvas-padding-y)*-.5);padding:calc(var(--bs-offcanvas-padding-y)*.5) calc(var(--bs-offcanvas-padding-x)*.5)}.offcanvas-title{line-height:var(--bs-offcanvas-title-line-height);margin-bottom:0}.offcanvas-body{flex-grow:1;overflow-y:auto;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.placeholder{background-color:currentcolor;cursor:wait;display:inline-block;min-height:1em;opacity:.5;vertical-align:middle}.placeholder.btn:before{content:\"\";display:inline-block}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{animation:placeholder-wave 2s linear infinite;-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%}@keyframes placeholder-wave{to{-webkit-mask-position:-200% 0;mask-position:-200% 0}}.clearfix:after{clear:both;content:\"\";display:block}.text-bg-primary{background-color:#0d6efd!important;background-color:RGBA(13,110,253,var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-secondary{background-color:#6c757d!important;background-color:RGBA(108,117,125,var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-success{background-color:#198754!important;background-color:RGBA(25,135,84,var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-info{background-color:#0dcaf0!important;background-color:RGBA(13,202,240,var(--bs-bg-opacity,1))!important;color:#000!important}.text-bg-warning{background-color:#ffc107!important;background-color:RGBA(255,193,7,var(--bs-bg-opacity,1))!important;color:#000!important}.text-bg-danger{background-color:#dc3545!important;background-color:RGBA(220,53,69,var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-light{background-color:#f8f9fa!important;background-color:RGBA(248,249,250,var(--bs-bg-opacity,1))!important;color:#000!important}.text-bg-dark{background-color:#212529!important;background-color:RGBA(33,37,41,var(--bs-bg-opacity,1))!important;color:#fff!important}.link-primary{color:#0d6efd!important}.link-primary:focus,.link-primary:hover{color:#0a58ca!important}.link-secondary{color:#6c757d!important}.link-secondary:focus,.link-secondary:hover{color:#565e64!important}.link-success{color:#198754!important}.link-success:focus,.link-success:hover{color:#146c43!important}.link-info{color:#0dcaf0!important}.link-info:focus,.link-info:hover{color:#3dd5f3!important}.link-warning{color:#ffc107!important}.link-warning:focus,.link-warning:hover{color:#ffcd39!important}.link-danger{color:#dc3545!important}.link-danger:focus,.link-danger:hover{color:#b02a37!important}.link-light{color:#f8f9fa!important}.link-light:focus,.link-light:hover{color:#f9fafb!important}.link-dark{color:#212529!important}.link-dark:focus,.link-dark:hover{color:#1a1e21!important}.ratio{position:relative;width:100%}.ratio:before{content:\"\";display:block;padding-top:var(--bs-aspect-ratio)}.ratio>*{height:100%;left:0;position:absolute;top:0;width:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571428571%}.fixed-top{top:0}.fixed-bottom,.fixed-top{left:0;position:fixed;right:0;z-index:1030}.fixed-bottom{bottom:0}.sticky-top{top:0}.sticky-bottom,.sticky-top{position:sticky;z-index:1020}.sticky-bottom{bottom:0}@media (min-width:576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}.sticky-sm-bottom{bottom:0;position:sticky;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:sticky;top:0;z-index:1020}.sticky-md-bottom{bottom:0;position:sticky;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}.sticky-lg-bottom{bottom:0;position:sticky;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}.sticky-xl-bottom{bottom:0;position:sticky;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{bottom:0;position:sticky;z-index:1020}}.hstack{align-items:center;flex-direction:row}.hstack,.vstack{align-self:stretch;display:flex}.vstack{flex:1 1 auto;flex-direction:column}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){clip:rect(0,0,0,0)!important;border:0!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.stretched-link:after{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:1}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{align-self:stretch;background-color:currentcolor;display:inline-block;min-height:1em;opacity:.25;width:1px}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.object-fit-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-none{-o-object-fit:none!important;object-fit:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.overflow-x-auto{overflow-x:auto!important}.overflow-x-hidden{overflow-x:hidden!important}.overflow-x-visible{overflow-x:visible!important}.overflow-x-scroll{overflow-x:scroll!important}.overflow-y-auto{overflow-y:auto!important}.overflow-y-hidden{overflow-y:hidden!important}.overflow-y-visible{overflow-y:visible!important}.overflow-y-scroll{overflow-y:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(33,37,41,.15)!important;box-shadow:0 .5rem 1rem rgba(var(--bs-body-color-rgb),.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(33,37,41,.075)!important;box-shadow:0 .125rem .25rem rgba(var(--bs-body-color-rgb),.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(33,37,41,.175)!important;box-shadow:0 1rem 3rem rgba(var(--bs-body-color-rgb),.175)!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important;border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important;border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-top-0{border-top:0!important}.border-end{border-right:1px solid #dee2e6!important;border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important;border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:1px solid #dee2e6!important;border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-start-0{border-left:0!important}.border-primary{--bs-border-opacity:1;border-color:#0d6efd!important;border-color:rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important}.border-secondary{--bs-border-opacity:1;border-color:#6c757d!important;border-color:rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important}.border-success{--bs-border-opacity:1;border-color:#198754!important;border-color:rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important}.border-info{--bs-border-opacity:1;border-color:#0dcaf0!important;border-color:rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important}.border-warning{--bs-border-opacity:1;border-color:#ffc107!important;border-color:rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important}.border-danger{--bs-border-opacity:1;border-color:#dc3545!important;border-color:rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important}.border-light{--bs-border-opacity:1;border-color:#f8f9fa!important;border-color:rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important}.border-dark{--bs-border-opacity:1;border-color:#212529!important;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}.border-white{--bs-border-opacity:1;border-color:#fff!important;border-color:rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important}.border-primary-subtle{border-color:#9ec5fe!important;border-color:var(--bs-primary-border-subtle)!important}.border-secondary-subtle{border-color:#e9ecef!important;border-color:var(--bs-secondary-border-subtle)!important}.border-success-subtle{border-color:#a3cfbb!important;border-color:var(--bs-success-border-subtle)!important}.border-info-subtle{border-color:#9eeaf9!important;border-color:var(--bs-info-border-subtle)!important}.border-warning-subtle{border-color:#ffe69c!important;border-color:var(--bs-warning-border-subtle)!important}.border-danger-subtle{border-color:#f1aeb5!important;border-color:var(--bs-danger-border-subtle)!important}.border-light-subtle{border-color:#e9ecef!important;border-color:var(--bs-light-border-subtle)!important}.border-dark-subtle{border-color:#adb5bd!important;border-color:var(--bs-dark-border-subtle)!important}.border-1{--bs-border-width:1px}.border-2{--bs-border-width:2px}.border-3{--bs-border-width:3px}.border-4{--bs-border-width:4px}.border-5{--bs-border-width:5px}.border-opacity-10{--bs-border-opacity:0.1}.border-opacity-25{--bs-border-opacity:0.25}.border-opacity-50{--bs-border-opacity:0.5}.border-opacity-75{--bs-border-opacity:0.75}.border-opacity-100{--bs-border-opacity:1}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-left:0!important;margin-right:0!important}.mx-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-3{margin-left:1rem!important;margin-right:1rem!important}.mx-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-5{margin-left:3rem!important;margin-right:3rem!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.my-0{margin-bottom:0!important;margin-top:0!important}.my-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-left:0!important;padding-right:0!important}.px-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-3{padding-left:1rem!important;padding-right:1rem!important}.px-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-5{padding-left:3rem!important;padding-right:3rem!important}.py-0{padding-bottom:0!important;padding-top:0!important}.py-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.row-gap-0{row-gap:0!important}.row-gap-1{row-gap:.25rem!important}.row-gap-2{row-gap:.5rem!important}.row-gap-3{row-gap:1rem!important}.row-gap-4{row-gap:1.5rem!important}.row-gap-5{row-gap:3rem!important}.column-gap-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.font-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important;font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-lighter{font-weight:lighter!important}.fw-light{font-weight:300!important}.fw-normal{font-weight:400!important}.fw-medium{font-weight:500!important}.fw-semibold{font-weight:600!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{-webkit-text-decoration:none!important;text-decoration:none!important}.text-decoration-underline{-webkit-text-decoration:underline!important;text-decoration:underline!important}.text-decoration-line-through{-webkit-text-decoration:line-through!important;text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:#0d6efd!important;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:#6c757d!important;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:#198754!important;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:#0dcaf0!important;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:#ffc107!important;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:#dc3545!important;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:#f8f9fa!important;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:#212529!important;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:#000!important;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:#fff!important;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:#212529!important;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:rgba(33,37,41,.75)!important;color:var(--bs-secondary-color)!important}.text-black-50{--bs-text-opacity:1;color:rgba(0,0,0,.5)!important}.text-white-50{--bs-text-opacity:1;color:hsla(0,0%,100%,.5)!important}.text-body-secondary{--bs-text-opacity:1;color:rgba(33,37,41,.75)!important;color:var(--bs-secondary-color)!important}.text-body-tertiary{--bs-text-opacity:1;color:rgba(33,37,41,.5)!important;color:var(--bs-tertiary-color)!important}.text-body-emphasis{--bs-text-opacity:1;color:#000!important;color:var(--bs-emphasis-color)!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:0.25}.text-opacity-50{--bs-text-opacity:0.5}.text-opacity-75{--bs-text-opacity:0.75}.text-opacity-100{--bs-text-opacity:1}.text-primary-emphasis{color:#0a58ca!important;color:var(--bs-primary-text)!important}.text-secondary-emphasis{color:#6c757d!important;color:var(--bs-secondary-text)!important}.text-success-emphasis{color:#146c43!important;color:var(--bs-success-text)!important}.text-info-emphasis{color:#087990!important;color:var(--bs-info-text)!important}.text-warning-emphasis{color:#997404!important;color:var(--bs-warning-text)!important}.text-danger-emphasis{color:#b02a37!important;color:var(--bs-danger-text)!important}.text-light-emphasis{color:#6c757d!important;color:var(--bs-light-text)!important}.text-dark-emphasis{color:#495057!important;color:var(--bs-dark-text)!important}.bg-primary{--bs-bg-opacity:1;background-color:#0d6efd!important;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:#6c757d!important;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:#198754!important;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:#0dcaf0!important;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:#ffc107!important;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:#dc3545!important;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:#f8f9fa!important;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:#212529!important;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:#000!important;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:#fff!important;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:#fff!important;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:transparent!important}.bg-body-secondary{--bs-bg-opacity:1;background-color:#e9ecef!important;background-color:rgba(var(--bs-secondary-bg-rgb),var(--bs-bg-opacity))!important}.bg-body-tertiary{--bs-bg-opacity:1;background-color:#f8f9fa!important;background-color:rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))!important}.bg-body-emphasis{--bs-bg-opacity:1;background-color:rgba(var(--bs-emphasis-bg-rgb),1)!important;background-color:rgba(var(--bs-emphasis-bg-rgb),var(--bs-bg-opacity))!important}.bg-opacity-10{--bs-bg-opacity:0.1}.bg-opacity-25{--bs-bg-opacity:0.25}.bg-opacity-50{--bs-bg-opacity:0.5}.bg-opacity-75{--bs-bg-opacity:0.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-primary-subtle{background-color:#cfe2ff!important;background-color:var(--bs-primary-bg-subtle)!important}.bg-secondary-subtle{background-color:#f8f9fa!important;background-color:var(--bs-secondary-bg-subtle)!important}.bg-success-subtle{background-color:#d1e7dd!important;background-color:var(--bs-success-bg-subtle)!important}.bg-info-subtle{background-color:#cff4fc!important;background-color:var(--bs-info-bg-subtle)!important}.bg-warning-subtle{background-color:#fff3cd!important;background-color:var(--bs-warning-bg-subtle)!important}.bg-danger-subtle{background-color:#f8d7da!important;background-color:var(--bs-danger-bg-subtle)!important}.bg-light-subtle{background-color:#fcfcfd!important;background-color:var(--bs-light-bg-subtle)!important}.bg-dark-subtle{background-color:#ced4da!important;background-color:var(--bs-dark-bg-subtle)!important}.bg-gradient{background-image:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0))!important;background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:.375rem!important;border-radius:var(--bs-border-radius)!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:.25rem!important;border-radius:var(--bs-border-radius-sm)!important}.rounded-2{border-radius:.375rem!important;border-radius:var(--bs-border-radius)!important}.rounded-3{border-radius:.5rem!important;border-radius:var(--bs-border-radius-lg)!important}.rounded-4{border-radius:1rem!important;border-radius:var(--bs-border-radius-xl)!important}.rounded-5{border-radius:2rem!important;border-radius:var(--bs-border-radius-2xl)!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important;border-radius:var(--bs-border-radius-pill)!important}.rounded-top{border-top-left-radius:.375rem!important;border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:.375rem!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-top-1{border-top-left-radius:.25rem!important;border-top-left-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:.25rem!important;border-top-right-radius:var(--bs-border-radius-sm)!important}.rounded-top-2{border-top-left-radius:.375rem!important;border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:.375rem!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-3{border-top-left-radius:.5rem!important;border-top-left-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:.5rem!important;border-top-right-radius:var(--bs-border-radius-lg)!important}.rounded-top-4{border-top-left-radius:1rem!important;border-top-left-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:1rem!important;border-top-right-radius:var(--bs-border-radius-xl)!important}.rounded-top-5{border-top-left-radius:2rem!important;border-top-left-radius:var(--bs-border-radius-2xl)!important;border-top-right-radius:2rem!important;border-top-right-radius:var(--bs-border-radius-2xl)!important}.rounded-top-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}.rounded-top-pill{border-top-left-radius:50rem!important;border-top-left-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:50rem!important;border-top-right-radius:var(--bs-border-radius-pill)!important}.rounded-end{border-bottom-right-radius:.375rem!important;border-bottom-right-radius:var(--bs-border-radius)!important;border-top-right-radius:.375rem!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-end-0{border-bottom-right-radius:0!important;border-top-right-radius:0!important}.rounded-end-1{border-bottom-right-radius:.25rem!important;border-bottom-right-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:.25rem!important;border-top-right-radius:var(--bs-border-radius-sm)!important}.rounded-end-2{border-bottom-right-radius:.375rem!important;border-bottom-right-radius:var(--bs-border-radius)!important;border-top-right-radius:.375rem!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-end-3{border-bottom-right-radius:.5rem!important;border-bottom-right-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:.5rem!important;border-top-right-radius:var(--bs-border-radius-lg)!important}.rounded-end-4{border-bottom-right-radius:1rem!important;border-bottom-right-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:1rem!important;border-top-right-radius:var(--bs-border-radius-xl)!important}.rounded-end-5{border-bottom-right-radius:2rem!important;border-bottom-right-radius:var(--bs-border-radius-2xl)!important;border-top-right-radius:2rem!important;border-top-right-radius:var(--bs-border-radius-2xl)!important}.rounded-end-circle{border-bottom-right-radius:50%!important;border-top-right-radius:50%!important}.rounded-end-pill{border-bottom-right-radius:50rem!important;border-bottom-right-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:50rem!important;border-top-right-radius:var(--bs-border-radius-pill)!important}.rounded-bottom{border-bottom-left-radius:.375rem!important;border-bottom-left-radius:var(--bs-border-radius)!important;border-bottom-right-radius:.375rem!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-bottom-0{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.rounded-bottom-1{border-bottom-left-radius:.25rem!important;border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-bottom-right-radius:.25rem!important;border-bottom-right-radius:var(--bs-border-radius-sm)!important}.rounded-bottom-2{border-bottom-left-radius:.375rem!important;border-bottom-left-radius:var(--bs-border-radius)!important;border-bottom-right-radius:.375rem!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-bottom-3{border-bottom-left-radius:.5rem!important;border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-bottom-right-radius:.5rem!important;border-bottom-right-radius:var(--bs-border-radius-lg)!important}.rounded-bottom-4{border-bottom-left-radius:1rem!important;border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-bottom-right-radius:1rem!important;border-bottom-right-radius:var(--bs-border-radius-xl)!important}.rounded-bottom-5{border-bottom-left-radius:2rem!important;border-bottom-left-radius:var(--bs-border-radius-2xl)!important;border-bottom-right-radius:2rem!important;border-bottom-right-radius:var(--bs-border-radius-2xl)!important}.rounded-bottom-circle{border-bottom-left-radius:50%!important;border-bottom-right-radius:50%!important}.rounded-bottom-pill{border-bottom-left-radius:50rem!important;border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-bottom-right-radius:50rem!important;border-bottom-right-radius:var(--bs-border-radius-pill)!important}.rounded-start{border-bottom-left-radius:.375rem!important;border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:.375rem!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-start-1{border-bottom-left-radius:.25rem!important;border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-top-left-radius:.25rem!important;border-top-left-radius:var(--bs-border-radius-sm)!important}.rounded-start-2{border-bottom-left-radius:.375rem!important;border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:.375rem!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-3{border-bottom-left-radius:.5rem!important;border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-top-left-radius:.5rem!important;border-top-left-radius:var(--bs-border-radius-lg)!important}.rounded-start-4{border-bottom-left-radius:1rem!important;border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-top-left-radius:1rem!important;border-top-left-radius:var(--bs-border-radius-xl)!important}.rounded-start-5{border-bottom-left-radius:2rem!important;border-bottom-left-radius:var(--bs-border-radius-2xl)!important;border-top-left-radius:2rem!important;border-top-left-radius:var(--bs-border-radius-2xl)!important}.rounded-start-circle{border-bottom-left-radius:50%!important;border-top-left-radius:50%!important}.rounded-start-pill{border-bottom-left-radius:50rem!important;border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-top-left-radius:50rem!important;border-top-left-radius:var(--bs-border-radius-pill)!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}.z-n1{z-index:-1!important}.z-0{z-index:0!important}.z-1{z-index:1!important}.z-2{z-index:2!important}.z-3{z-index:3!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.object-fit-sm-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-sm-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-sm-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-sm-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-sm-none{-o-object-fit:none!important;object-fit:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-left:0!important;margin-right:0!important}.mx-sm-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-sm-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-sm-3{margin-left:1rem!important;margin-right:1rem!important}.mx-sm-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-sm-5{margin-left:3rem!important;margin-right:3rem!important}.mx-sm-auto{margin-left:auto!important;margin-right:auto!important}.my-sm-0{margin-bottom:0!important;margin-top:0!important}.my-sm-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-sm-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-sm-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-sm-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-sm-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-sm-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-left:0!important;padding-right:0!important}.px-sm-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-sm-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-sm-3{padding-left:1rem!important;padding-right:1rem!important}.px-sm-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-sm-5{padding-left:3rem!important;padding-right:3rem!important}.py-sm-0{padding-bottom:0!important;padding-top:0!important}.py-sm-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-sm-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-sm-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-sm-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-sm-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.row-gap-sm-0{row-gap:0!important}.row-gap-sm-1{row-gap:.25rem!important}.row-gap-sm-2{row-gap:.5rem!important}.row-gap-sm-3{row-gap:1rem!important}.row-gap-sm-4{row-gap:1.5rem!important}.row-gap-sm-5{row-gap:3rem!important}.column-gap-sm-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-sm-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-sm-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-sm-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-sm-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-sm-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.object-fit-md-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-md-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-md-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-md-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-md-none{-o-object-fit:none!important;object-fit:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-left:0!important;margin-right:0!important}.mx-md-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-md-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-md-3{margin-left:1rem!important;margin-right:1rem!important}.mx-md-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-md-5{margin-left:3rem!important;margin-right:3rem!important}.mx-md-auto{margin-left:auto!important;margin-right:auto!important}.my-md-0{margin-bottom:0!important;margin-top:0!important}.my-md-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-md-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-md-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-md-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-md-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-md-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-left:0!important;padding-right:0!important}.px-md-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-md-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-md-3{padding-left:1rem!important;padding-right:1rem!important}.px-md-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-md-5{padding-left:3rem!important;padding-right:3rem!important}.py-md-0{padding-bottom:0!important;padding-top:0!important}.py-md-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-md-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-md-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-md-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-md-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.row-gap-md-0{row-gap:0!important}.row-gap-md-1{row-gap:.25rem!important}.row-gap-md-2{row-gap:.5rem!important}.row-gap-md-3{row-gap:1rem!important}.row-gap-md-4{row-gap:1.5rem!important}.row-gap-md-5{row-gap:3rem!important}.column-gap-md-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-md-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-md-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-md-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-md-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-md-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.object-fit-lg-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-lg-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-lg-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-lg-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-lg-none{-o-object-fit:none!important;object-fit:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-left:0!important;margin-right:0!important}.mx-lg-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-lg-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-lg-3{margin-left:1rem!important;margin-right:1rem!important}.mx-lg-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-lg-5{margin-left:3rem!important;margin-right:3rem!important}.mx-lg-auto{margin-left:auto!important;margin-right:auto!important}.my-lg-0{margin-bottom:0!important;margin-top:0!important}.my-lg-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-lg-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-lg-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-lg-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-lg-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-lg-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-left:0!important;padding-right:0!important}.px-lg-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-lg-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-lg-3{padding-left:1rem!important;padding-right:1rem!important}.px-lg-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-lg-5{padding-left:3rem!important;padding-right:3rem!important}.py-lg-0{padding-bottom:0!important;padding-top:0!important}.py-lg-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-lg-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-lg-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-lg-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-lg-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.row-gap-lg-0{row-gap:0!important}.row-gap-lg-1{row-gap:.25rem!important}.row-gap-lg-2{row-gap:.5rem!important}.row-gap-lg-3{row-gap:1rem!important}.row-gap-lg-4{row-gap:1.5rem!important}.row-gap-lg-5{row-gap:3rem!important}.column-gap-lg-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-lg-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-lg-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-lg-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-lg-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-lg-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.object-fit-xl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xl-none{-o-object-fit:none!important;object-fit:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-left:0!important;margin-right:0!important}.mx-xl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xl-auto{margin-left:auto!important;margin-right:auto!important}.my-xl-0{margin-bottom:0!important;margin-top:0!important}.my-xl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-left:0!important;padding-right:0!important}.px-xl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xl-0{padding-bottom:0!important;padding-top:0!important}.py-xl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.row-gap-xl-0{row-gap:0!important}.row-gap-xl-1{row-gap:.25rem!important}.row-gap-xl-2{row-gap:.5rem!important}.row-gap-xl-3{row-gap:1rem!important}.row-gap-xl-4{row-gap:1.5rem!important}.row-gap-xl-5{row-gap:3rem!important}.column-gap-xl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xl-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xl-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.object-fit-xxl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xxl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xxl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xxl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xxl-none{-o-object-fit:none!important;object-fit:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-left:0!important;margin-right:0!important}.mx-xxl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xxl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xxl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xxl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xxl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xxl-auto{margin-left:auto!important;margin-right:auto!important}.my-xxl-0{margin-bottom:0!important;margin-top:0!important}.my-xxl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xxl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xxl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xxl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xxl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xxl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-left:0!important;padding-right:0!important}.px-xxl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xxl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xxl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xxl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xxl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xxl-0{padding-bottom:0!important;padding-top:0!important}.py-xxl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xxl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xxl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xxl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xxl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.row-gap-xxl-0{row-gap:0!important}.row-gap-xxl-1{row-gap:.25rem!important}.row-gap-xxl-2{row-gap:.5rem!important}.row-gap-xxl-3{row-gap:1rem!important}.row-gap-xxl-4{row-gap:1.5rem!important}.row-gap-xxl-5{row-gap:3rem!important}.column-gap-xxl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xxl-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xxl-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xxl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xxl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xxl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("66b05f4e", content, true)

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".splide__container{box-sizing:border-box;position:relative}.splide__list{backface-visibility:hidden;display:flex;height:100%;margin:0!important;padding:0!important;transform-style:preserve-3d}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide__progress__bar{width:0}.splide{outline:none;position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{backface-visibility:hidden;box-sizing:border-box;flex-shrink:0;list-style-type:none!important;margin:0;outline:none;position:relative}.splide__slide img{vertical-align:bottom}.splide__slider{position:relative}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__track{overflow:hidden;position:relative;z-index:0}@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide--draggable>.splide__slider>.splide__track,.splide--draggable>.splide__track{-webkit-user-select:none;-moz-user-select:none;user-select:none}.splide--fade>.splide__slider>.splide__track>.splide__list,.splide--fade>.splide__track>.splide__list{display:block}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide,.splide--fade>.splide__track>.splide__list>.splide__slide{left:0;opacity:0;position:absolute;top:0;z-index:0}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide.is-active,.splide--fade>.splide__track>.splide__list>.splide__slide.is-active{opacity:1;position:relative;z-index:1}.splide--rtl{direction:rtl}.splide--ttb.is-active>.splide__slider>.splide__track>.splide__list,.splide--ttb.is-active>.splide__track>.splide__list{display:block}.splide__arrow{align-items:center;background:#ccc;border:0;border-radius:50%;cursor:pointer;display:flex;height:2em;justify-content:center;opacity:.7;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:2em;z-index:1}.splide__arrow svg{fill:#000;height:1.2em;width:1.2em}.splide__arrow:hover{opacity:.9}.splide__arrow:focus{outline:none}.splide__arrow--prev{left:1em}.splide__arrow--prev svg{transform:scaleX(-1)}.splide__arrow--next{right:1em}.splide__pagination{bottom:.5em;left:0;padding:0 1em;position:absolute;right:0;z-index:1}.splide__pagination__page{background:#ccc;border:0;border-radius:50%;display:inline-block;height:8px;margin:3px;opacity:.7;padding:0;transition:transform .2s linear;width:8px}.splide__pagination__page.is-active{background:#fff;transform:scale(1.4)}.splide__pagination__page:hover{cursor:pointer;opacity:.9}.splide__pagination__page:focus{outline:none}.splide__progress__bar{background:#ccc;height:3px}.splide--nav>.splide__slider>.splide__track>.splide__list>.splide__slide,.splide--nav>.splide__track>.splide__list>.splide__slide{border:3px solid transparent;cursor:pointer}.splide--nav>.splide__slider>.splide__track>.splide__list>.splide__slide.is-active,.splide--nav>.splide__track>.splide__list>.splide__slide.is-active{border:3px solid #000}.splide--nav>.splide__slider>.splide__track>.splide__list>.splide__slide:focus,.splide--nav>.splide__track>.splide__list>.splide__slide:focus{outline:none}.splide--rtl>.splide__arrows .splide__arrow--prev,.splide--rtl>.splide__slider>.splide__track>.splide__arrows .splide__arrow--prev,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev{left:auto;right:1em}.splide--rtl>.splide__arrows .splide__arrow--prev svg,.splide--rtl>.splide__slider>.splide__track>.splide__arrows .splide__arrow--prev svg,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev svg{transform:scaleX(1)}.splide--rtl>.splide__arrows .splide__arrow--next,.splide--rtl>.splide__slider>.splide__track>.splide__arrows .splide__arrow--next,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--next{left:1em;right:auto}.splide--rtl>.splide__arrows .splide__arrow--next svg,.splide--rtl>.splide__slider>.splide__track>.splide__arrows .splide__arrow--next svg,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--next svg{transform:scaleX(-1)}.splide--ttb>.splide__arrows .splide__arrow,.splide--ttb>.splide__slider>.splide__track>.splide__arrows .splide__arrow,.splide--ttb>.splide__track>.splide__arrows .splide__arrow{left:50%;transform:translate(-50%)}.splide--ttb>.splide__arrows .splide__arrow--prev,.splide--ttb>.splide__slider>.splide__track>.splide__arrows .splide__arrow--prev,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev{top:1em}.splide--ttb>.splide__arrows .splide__arrow--prev svg,.splide--ttb>.splide__slider>.splide__track>.splide__arrows .splide__arrow--prev svg,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev svg{transform:rotate(-90deg)}.splide--ttb>.splide__arrows .splide__arrow--next,.splide--ttb>.splide__slider>.splide__track>.splide__arrows .splide__arrow--next,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--next{bottom:1em;top:auto}.splide--ttb>.splide__arrows .splide__arrow--next svg,.splide--ttb>.splide__slider>.splide__track>.splide__arrows .splide__arrow--next svg,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--next svg{transform:rotate(90deg)}.splide--ttb>.splide__pagination,.splide--ttb>.splide__slider>.splide__pagination{bottom:0;display:flex;flex-direction:column;left:auto;padding:1em 0;right:.5em;top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("00c1b542", content, true)

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--ss-primary-color:#5897fb;--ss-bg-color:#fff;--ss-font-color:#4d4d4d;--ss-font-placeholder-color:#8d8d8d;--ss-disabled-color:#dcdee2;--ss-border-color:#dcdee2;--ss-highlight-color:#fffb8c;--ss-success-color:#00b755;--ss-error-color:#dc3545;--ss-main-height:30px;--ss-content-height:300px;--ss-spacing-l:7px;--ss-spacing-m:5px;--ss-spacing-s:3px;--ss-animation-timing:0.2s;--ss-border-radius:4px}@keyframes ss-valueIn{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes ss-valueOut{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}.ss-hide{display:none!important}.ss-main{background-color:#fff;background-color:var(--ss-bg-color);border:1px solid #dcdee2;border:1px solid var(--ss-border-color);border-radius:4px;border-radius:var(--ss-border-radius);box-sizing:border-box;color:#4d4d4d;color:var(--ss-font-color);cursor:pointer;display:flex;flex-direction:row;min-height:30px;min-height:var(--ss-main-height);outline:0;overflow:hidden;padding:3px;padding:var(--ss-spacing-s);position:relative;transition:background-color .2s;transition:background-color var(--ss-animation-timing);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.ss-main:focus{box-shadow:0 0 5px #5897fb;box-shadow:0 0 5px var(--ss-primary-color)}.ss-main.ss-disabled{background-color:#dcdee2;background-color:var(--ss-disabled-color);cursor:not-allowed}.ss-main.ss-disabled .ss-values .ss-disabled{color:#4d4d4d;color:var(--ss-font-color)}.ss-main.ss-disabled .ss-values .ss-value .ss-value-delete{cursor:not-allowed}.ss-main.ss-open-above{border-top-left-radius:0;border-top-right-radius:0}.ss-main.ss-open-below{border-bottom-left-radius:0;border-bottom-right-radius:0}.ss-main .ss-values{display:inline-flex;flex:1 1 100%;flex-wrap:wrap;gap:5px;gap:var(--ss-spacing-m)}.ss-main .ss-values .ss-placeholder{align-items:center;color:#8d8d8d;color:var(--ss-font-placeholder-color);display:flex;line-height:1em;margin:auto 0;overflow:hidden;padding:3px 5px;padding:var(--ss-spacing-s) var(--ss-spacing-m) var(--ss-spacing-s) var(--ss-spacing-m);text-overflow:ellipsis;white-space:nowrap;width:100%}.ss-main .ss-values .ss-max{align-items:center;background-color:#5897fb;background-color:var(--ss-primary-color);border-radius:4px;border-radius:var(--ss-border-radius);color:#fff;color:var(--ss-bg-color);display:flex;font-size:12px;line-height:1;padding:3px 5px;padding:var(--ss-spacing-s) var(--ss-spacing-m);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:-moz-fit-content;width:fit-content}.ss-main .ss-values .ss-single{display:flex;margin:auto 0 auto 3px;margin:auto 0 auto var(--ss-spacing-s)}.ss-main .ss-values .ss-value{align-items:center;animation-duration:.2s;animation-duration:var(--ss-animation-timing);animation-fill-mode:both;animation-name:ss-valueIn;animation-timing-function:ease-out;background-color:#5897fb;background-color:var(--ss-primary-color);border-radius:4px;border-radius:var(--ss-border-radius);display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:-moz-fit-content;width:fit-content}.ss-main .ss-values .ss-value.ss-value-out{animation-duration:.2s;animation-duration:var(--ss-animation-timing);animation-name:ss-valueOut;animation-timing-function:ease-out}.ss-main .ss-values .ss-value .ss-value-text{color:#fff;color:var(--ss-bg-color);font-size:12px;line-height:1;padding:3px 5px;padding:var(--ss-spacing-s) var(--ss-spacing-m)}.ss-main .ss-values .ss-value .ss-value-delete{align-items:center;border-left:1px solid #fff;border-left:1px solid var(--ss-bg-color);box-sizing:content-box;cursor:pointer;display:flex;padding:3px 5px;padding:var(--ss-spacing-s) var(--ss-spacing-m)}.ss-main .ss-values .ss-value .ss-value-delete,.ss-main .ss-values .ss-value .ss-value-delete svg{height:7px;height:var(--ss-spacing-l);width:7px;width:var(--ss-spacing-l)}.ss-main .ss-values .ss-value .ss-value-delete svg path{fill:none;stroke:#fff;stroke:var(--ss-bg-color);stroke-width:18;stroke-linecap:round;stroke-linejoin:round}.ss-main .ss-deselect{align-self:center;display:flex;flex:0 1 auto;height:8px;justify-content:flex-end;margin:0 5px;margin:0 var(--ss-spacing-m) 0 var(--ss-spacing-m);width:8px}.ss-main .ss-deselect svg{height:8px;width:8px}.ss-main .ss-deselect svg path{fill:none;stroke:#4d4d4d;stroke:var(--ss-font-color);stroke-width:20;stroke-linecap:round;stroke-linejoin:round}.ss-main .ss-arrow{align-items:center;display:flex;flex:0 1 auto;height:12px;justify-content:flex-end;margin:auto 5px;margin:auto var(--ss-spacing-m) auto var(--ss-spacing-m);width:12px}.ss-main .ss-arrow path{fill:none;stroke:#4d4d4d;stroke:var(--ss-font-color);stroke-width:18;stroke-linecap:round;stroke-linejoin:round;transition-timing-function:ease-out;transition:.2s;transition:var(--ss-animation-timing)}.ss-content{background-color:#fff;background-color:var(--ss-bg-color);border:1px solid #dcdee2;border:1px solid var(--ss-border-color);box-sizing:border-box;display:flex;flex-direction:column;height:auto;max-height:300px;max-height:var(--ss-content-height);opacity:0;overflow:hidden;position:absolute;transform:scaleY(0);transform-origin:center top;transition:transform .2s,opacity .2s;transition:transform var(--ss-animation-timing),opacity var(--ss-animation-timing);width:auto;z-index:10000}.ss-content.ss-relative{height:100%;position:relative}.ss-content.ss-open-above{border-top-left-radius:4px;border-top-left-radius:var(--ss-border-radius);border-top-right-radius:4px;border-top-right-radius:var(--ss-border-radius);flex-direction:column-reverse;opacity:1;transform:scaleY(1);transform-origin:center bottom}.ss-content.ss-open-below{border-bottom-left-radius:4px;border-bottom-left-radius:var(--ss-border-radius);border-bottom-right-radius:4px;border-bottom-right-radius:var(--ss-border-radius);opacity:1;transform:scaleY(1);transform-origin:center top}.ss-content .ss-search{display:flex;flex:0 1 auto;flex-direction:row;padding:7px 7px 5px;padding:var(--ss-spacing-l) var(--ss-spacing-l) var(--ss-spacing-m) var(--ss-spacing-l)}.ss-content .ss-search input{background-color:#fff;background-color:var(--ss-bg-color);border:1px solid #dcdee2;border:1px solid var(--ss-border-color);border-radius:4px;border-radius:var(--ss-border-radius);box-sizing:border-box;display:inline-flex;flex:1 1 auto;font-size:inherit;line-height:inherit;margin:0;min-width:0;outline:0;padding:5px 7px;padding:var(--ss-spacing-m) var(--ss-spacing-l);text-align:left;width:100%}.ss-content .ss-search input::-moz-placeholder{color:#8d8d8d;color:var(--ss-font-placeholder-color);vertical-align:middle}.ss-content .ss-search input::placeholder{color:#8d8d8d;color:var(--ss-font-placeholder-color);vertical-align:middle}.ss-content .ss-search input:focus{box-shadow:0 0 5px #5897fb;box-shadow:0 0 5px var(--ss-primary-color)}.ss-content .ss-search .ss-addable{align-items:center;border:1px solid #dcdee2;border:1px solid var(--ss-border-color);border-radius:4px;border-radius:var(--ss-border-radius);cursor:pointer;display:inline-flex;flex:0 0 auto;height:auto;justify-content:center;margin:0 0 0 5px;margin:0 0 0 var(--ss-spacing-m)}.ss-content .ss-search .ss-addable svg{align-items:center;display:flex;flex:0 1 auto;height:12px;justify-content:flex-end;margin:auto 5px;margin:auto var(--ss-spacing-m) auto var(--ss-spacing-m);width:12px}.ss-content .ss-search .ss-addable svg path{fill:none;stroke:#4d4d4d;stroke:var(--ss-font-color);stroke-width:18;stroke-linecap:round;stroke-linejoin:round}.ss-content .ss-list{flex:1 1 auto;height:auto;overflow-x:hidden;overflow-y:auto}.ss-content .ss-list .ss-error{color:#dc3545;color:var(--ss-error-color);padding:7px;padding:var(--ss-spacing-l)}.ss-content .ss-list .ss-searching{color:#4d4d4d;color:var(--ss-font-color);padding:7px;padding:var(--ss-spacing-l)}.ss-content .ss-list .ss-optgroup.ss-close .ss-option{display:none!important}.ss-content .ss-list .ss-optgroup .ss-optgroup-label{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:5px 7px;padding:var(--ss-spacing-m) var(--ss-spacing-l) var(--ss-spacing-m) var(--ss-spacing-l)}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-label-text{color:#4d4d4d;color:var(--ss-font-color);flex:1 1 auto;font-weight:700}.ss-content .ss-list .ss-optgroup .ss-optgroup-label:has(.ss-arrow){cursor:pointer}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions{align-items:center;display:flex;flex:0 1 auto;flex-direction:row;gap:5px;gap:var(--ss-spacing-m);justify-content:center}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall{cursor:pointer;display:flex;flex:0 0 auto;flex-direction:row}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall:hover{opacity:.5}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall.ss-selected svg path{stroke:#dc3545;stroke:var(--ss-error-color)}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall span{align-items:center;display:flex;flex:0 1 auto;font-size:60%;justify-content:center;padding:0 3px 0 0;padding:0 var(--ss-spacing-s) 0 0;text-align:center}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall svg{flex:0 1 auto;height:13px;width:13px}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall svg path{fill:none;stroke:#00b755;stroke:var(--ss-success-color);stroke-linecap:round;stroke-linejoin:round}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall svg:first-child{stroke-width:5}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall svg:last-child{stroke-width:11}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-closable{cursor:pointer;display:flex;flex:0 1 auto;flex-direction:row}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-closable .ss-arrow{flex:1 1 auto;height:10px;width:10px}.ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-closable .ss-arrow path{fill:none;stroke:#4d4d4d;stroke:var(--ss-font-color);stroke-width:18;stroke-linecap:round;stroke-linejoin:round;transition-timing-function:ease-out;transition:.2s;transition:var(--ss-animation-timing)}.ss-content .ss-list .ss-optgroup .ss-option{padding:3px 3px 3px 21px;padding:var(--ss-spacing-s) var(--ss-spacing-s) var(--ss-spacing-s) calc(var(--ss-spacing-l)*3)}.ss-content .ss-list .ss-option{color:#4d4d4d;color:var(--ss-font-color);cursor:pointer;display:flex;padding:5px 7px;padding:var(--ss-spacing-m) var(--ss-spacing-l) var(--ss-spacing-m) var(--ss-spacing-l);-webkit-user-select:none;-moz-user-select:none;user-select:none}.ss-content .ss-list .ss-option.ss-highlighted,.ss-content .ss-list .ss-option:hover,.ss-content .ss-list .ss-option:not(.ss-disabled).ss-selected{background-color:#5897fb;background-color:var(--ss-primary-color);color:#fff;color:var(--ss-bg-color)}.ss-content .ss-list .ss-option.ss-disabled{background-color:#dcdee2;background-color:var(--ss-disabled-color);cursor:not-allowed}.ss-content .ss-list .ss-option.ss-disabled:hover{color:#4d4d4d;color:var(--ss-font-color)}.ss-content .ss-list .ss-option .ss-search-highlight{background-color:#fffb8c;background-color:var(--ss-highlight-color)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2a906a62", content, true)

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp__button{-webkit-appearance:none;background:none;border:0;box-shadow:none;cursor:pointer;display:block;float:right;height:44px;margin:0;opacity:.75;overflow:visible;padding:0;position:relative;transition:opacity .2s;width:44px}.pswp__button:focus,.pswp__button:hover{opacity:1}.pswp__button:active{opacity:.9;outline:none}.pswp__button::-moz-focus-inner{border:0;padding:0}.pswp__ui--over-close .pswp__button--close{opacity:1}.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{background-size:264px 88px;height:44px;width:44px}@media (-webkit-min-device-pixel-ratio:1.09375),(-webkit-min-device-pixel-ratio:1.1),(min-resolution:1.1dppx),(min-resolution:105dpi){.pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right{background:none}}.pswp__button--close{background-position:0 -44px}.pswp__button--share{background-position:-44px -44px}.pswp__button--fs{display:none}.pswp--supports-fs .pswp__button--fs{display:block}.pswp--fs .pswp__button--fs{background-position:-44px 0}.pswp__button--zoom{background-position:-88px 0;display:none}.pswp--zoom-allowed .pswp__button--zoom{display:block}.pswp--zoomed-in .pswp__button--zoom{background-position:-132px 0}.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right{visibility:hidden}.pswp__button--arrow--left,.pswp__button--arrow--right{background:none;height:100px;margin-top:-50px;position:absolute;top:50%;width:70px}.pswp__button--arrow--left{left:0}.pswp__button--arrow--right{right:0}.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{background-color:rgba(0,0,0,.3);content:\"\";height:30px;position:absolute;top:35px;width:32px}.pswp__button--arrow--left:before{background-position:-138px -44px;left:6px}.pswp__button--arrow--right:before{background-position:-94px -44px;right:6px}.pswp__counter,.pswp__share-modal{-webkit-user-select:none;-moz-user-select:none;user-select:none}.pswp__share-modal{-webkit-backface-visibility:hidden;background:rgba(0,0,0,.5);display:block;height:100%;left:0;opacity:0;padding:10px;position:absolute;top:0;transition:opacity .25s ease-out;width:100%;will-change:opacity;z-index:1600}.pswp__share-modal--hidden{display:none}.pswp__share-tooltip{-webkit-backface-visibility:hidden;background:#fff;border-radius:2px;box-shadow:0 2px 5px rgba(0,0,0,.25);display:block;position:absolute;right:44px;top:56px;transform:translateY(6px);transition:transform .25s;width:auto;will-change:transform;z-index:1620}.pswp__share-tooltip a{display:block;font-size:14px;line-height:18px;padding:8px 12px}.pswp__share-tooltip a,.pswp__share-tooltip a:hover{color:#000;-webkit-text-decoration:none;text-decoration:none}.pswp__share-tooltip a:first-child{border-radius:2px 2px 0 0}.pswp__share-tooltip a:last-child{border-radius:0 0 2px 2px}.pswp__share-modal--fade-in{opacity:1}.pswp__share-modal--fade-in .pswp__share-tooltip{transform:translateY(0)}.pswp--touch .pswp__share-tooltip a{padding:16px 12px}a.pswp__share--facebook:before{border:6px solid transparent;border-bottom-color:#fff;content:\"\";display:block;height:0;-webkit-pointer-events:none;-moz-pointer-events:none;pointer-events:none;position:absolute;right:15px;top:-12px;width:0}a.pswp__share--facebook:hover{background:#3e5c9a;color:#fff}a.pswp__share--facebook:hover:before{border-bottom-color:#3e5c9a}a.pswp__share--twitter:hover{background:#55acee;color:#fff}a.pswp__share--pinterest:hover{background:#ccc;color:#ce272d}a.pswp__share--download:hover{background:#ddd}.pswp__counter{color:#fff;font-size:13px;height:44px;left:0;line-height:44px;opacity:.75;padding:0 10px;position:absolute;top:0}.pswp__caption{bottom:0;left:0;min-height:44px;position:absolute;width:100%}.pswp__caption small{color:#bbb;font-size:11px}.pswp__caption__center{color:#ccc;font-size:13px;line-height:20px;margin:0 auto;max-width:420px;padding:10px;text-align:left}.pswp__caption--empty{display:none}.pswp__caption--fake{visibility:hidden}.pswp__preloader{direction:ltr;height:44px;left:50%;margin-left:-22px;opacity:0;position:absolute;top:0;transition:opacity .25s ease-out;width:44px;will-change:opacity}.pswp__preloader__icn{height:20px;margin:12px;width:20px}.pswp__preloader--active{opacity:1}.pswp--css_animation .pswp__preloader--active{opacity:1}.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn{animation:clockwise .5s linear infinite}.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut{animation:donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite}.pswp--css_animation .pswp__preloader__icn{background:none;height:14px;left:15px;margin:0;opacity:.75;position:absolute;top:15px;width:14px}.pswp--css_animation .pswp__preloader__cut{height:14px;overflow:hidden;position:relative;width:7px}.pswp--css_animation .pswp__preloader__donut{background:none;border-color:#fff #fff transparent transparent;border-radius:50%;border-style:solid;border-width:2px;box-sizing:border-box;height:14px;left:0;margin:0;position:absolute;top:0;width:14px}@media screen and (max-width:1024px){.pswp__preloader{float:right;left:auto;margin:0;position:relative;top:auto}}@keyframes clockwise{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes donut-rotate{0%{transform:rotate(0)}50%{transform:rotate(-140deg)}to{transform:rotate(0)}}.pswp__ui{-webkit-font-smoothing:auto;opacity:1;visibility:visible;z-index:1550}.pswp__top-bar{height:44px;left:0;position:absolute;top:0;width:100%}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right,.pswp__caption,.pswp__top-bar{-webkit-backface-visibility:hidden;transition:opacity 333ms cubic-bezier(.4,0,.22,1);will-change:opacity}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right{visibility:visible}.pswp__caption,.pswp__top-bar{background-color:rgba(0,0,0,.5)}.pswp__ui--fit .pswp__caption,.pswp__ui--fit .pswp__top-bar{background-color:rgba(0,0,0,.3)}.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right,.pswp__ui--idle .pswp__top-bar{opacity:0}.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__top-bar{opacity:.001}.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter{display:none}.pswp__element--disabled{display:none!important}.pswp--minimal--dark .pswp__top-bar{background:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("17bc9ac2", content, true)

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(39);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(41);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body,html{height:100%}#alert_modal{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);color:#fff;position:fixed;right:10px;top:10px;z-index:10000000000}#alert_modal button{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100%;opacity:1}body{-webkit-font-smoothing:antialiased;background-color:#2b2b31;font-family:\"Ubuntu\",sans-serif;font-weight:400}button{background-color:transparent;border:none;cursor:pointer;padding:0;transition:.5s ease;transition-property:color,background-color,border-color,box-shadow,opacity}button:focus{outline:none}a{transition:.5s ease;transition-property:color,background-color,border-color,box-shadow,opacity}a,a:active,a:focus,a:hover{-webkit-text-decoration:none;text-decoration:none}a:active,a:focus,a:hover{outline:none}input,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;box-shadow:none;margin:0;padding:0;transition:.5s ease;transition-property:color,border-color,box-shadow}input:focus,select:focus,textarea:focus{outline:none}select::-ms-expand{display:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}ul{list-style:none;margin:0;padding:0}svg{transition:fill .5s ease}::-moz-selection{background:#fff;color:#000;text-shadow:none}::selection{background:#fff;color:#000;text-shadow:none}::-webkit-input-placeholder{color:#c7c7c7;opacity:1}:-moz-placeholder,::-moz-placeholder{color:#c7c7c7;opacity:1}:-ms-input-placeholder{color:#c7c7c7;opacity:1}:focus{outline:0 auto -webkit-focus-ring-color}:focus-visible{outline:0 dotted}body{-webkit-user-select:none;-moz-user-select:none;user-select:none}body::-webkit-scrollbar{width:16px}body::-webkit-scrollbar-track{background:#28282d}body::-webkit-scrollbar-thumb{background-color:hsla(0,0%,100%,.05);outline:0 solid #fff}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1324px}}.header{background-color:#2b2b31;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);display:block;left:0;position:fixed;right:0;top:0;width:100%;z-index:101}.header__logo{align-items:center;background-color:#28282d;display:flex;height:70px;justify-content:center;width:140px}.header__logo img{display:block;-o-object-fit:fill;object-fit:fill;width:100%}.header__logo:hover{background-color:#2b2b31}.header__categories,.header__nav{display:none}.header__nav-item{align-items:flex-start;display:flex;flex-direction:row;height:70px;justify-content:flex-start;margin-right:30px;position:relative}.header__nav-item:last-child{margin-right:0}.header__nav-link{align-items:center;color:#fff;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;height:70px;justify-content:flex-start;white-space:nowrap}.header__nav-link svg{fill:#fff;height:auto;margin-left:2px;margin-top:2px;width:14px}.header__nav-link--more svg{margin-left:0;margin-top:0;width:20px}.header__nav-link:hover,.header__nav-link[aria-expanded=true]{color:#ff55a5}.header__nav-link:hover svg,.header__nav-link[aria-expanded=true] svg{fill:#ff55a5}.header__dropdown-menu{align-items:flex-start;background-color:#2b2b31;border:none;border-radius:4px;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);display:flex!important;flex-direction:column;justify-content:flex-start;margin-top:-10px;min-width:180px;opacity:0;overflow:hidden;padding:20px;pointer-events:none;position:absolute;top:100%;transition:.5s ease;z-index:-1}.header__dropdown-menu--lang{min-width:120px}.header__dropdown-menu--categories{flex-direction:row;padding:20px 40px}.header__dropdown-menu:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.header__dropdown-menu li{margin-bottom:10px;width:100%}.header__dropdown-menu li:last-child{margin-bottom:0}.header__dropdown-menu a{align-items:center;color:#fff;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;height:30px;justify-content:flex-start;width:100%}.header__dropdown-menu a:hover{color:#ff55a5}.header__dropdown-menu.show{margin-top:0;opacity:1;pointer-events:auto;z-index:1000}.header__content{height:70px;justify-content:space-between;position:relative;width:100%}.header__actions,.header__content{align-items:center;display:flex;flex-direction:row}.header__actions{justify-content:flex-start;margin-left:auto;margin-right:20px}.header__search{display:none}.header__language{align-items:flex-start;height:70px;justify-content:flex-start;margin-right:20px}.header__language,.header__sign-in{display:flex;flex-direction:row;position:relative}.header__sign-in{align-items:center;background:linear-gradient(90deg,#ff5860,#ff55a5);border-radius:8px;box-shadow:0 0 16px 0 rgba(255,88,96,.3);height:40px;justify-content:center;width:40px}.header__sign-in:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;bottom:0;content:\"\";left:0;opacity:1;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.header__sign-in span{display:none;position:relative;z-index:2}.header__sign-in svg{fill:#fff;height:auto;position:relative;width:24px;z-index:2}.header__sign-in:hover{box-shadow:0 0 16px 0 rgba(255,88,96,.6)}.header__sign-in:hover:before{opacity:0}.header__btn{align-items:center;display:flex;flex-direction:column;height:20px;justify-content:center;position:relative;width:24px}.header__btn span{background-color:#fff;border-radius:2px;display:block;height:2px;left:0;opacity:1;position:absolute;transition:.5s ease;width:24px}.header__btn span:first-child{top:0}.header__btn span:nth-child(2){top:9px}.header__btn span:nth-child(3){bottom:0}.header__btn--active span:first-child{top:9px;transform:rotate(45deg)}.header__btn--active span:nth-child(2){opacity:0}.header__btn--active span:nth-child(3){bottom:9px;transform:rotate(-45deg)}@media (min-width:576px){.header__logo{width:156px}.header__actions{margin-right:30px}}@media (min-width:768px){.header__logo{padding:20px;width:216px}.header__actions,.header__search{margin-right:30px}.header__search{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;position:relative}.header__search input{background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;height:46px;padding:0 60px 0 20px;position:relative;width:180px;z-index:1}.header__search input:focus{border-color:hsla(0,0%,100%,.15)}.header__search button{align-items:center;display:flex;flex-direction:row;height:20px;justify-content:center;opacity:.5;position:absolute;right:20px;transition:opacity .5s ease;width:20px;z-index:2}.header__search button svg{fill:#fff;height:auto;width:18px}.header__search button:hover{opacity:1}.header__language{margin-right:30px}.header__sign-in{height:46px;width:108px}.header__sign-in svg{display:none}.header__sign-in span{color:#fff;display:block;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;text-transform:uppercase}}@media (min-width:1200px){.header__logo{width:166px}.header__categories{border-left:1px solid hsla(0,0%,100%,.02);border-right:1px solid hsla(0,0%,100%,.02);display:block;margin-right:auto;position:relative}.header__categories-btn{align-items:center;background-color:#28282d;display:flex;flex-direction:column;height:70px;justify-content:center;position:relative;width:70px}.header__categories-btn span{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:2px;display:block;height:2px;left:23px;position:absolute;transition:.5s ease;width:24px}.header__categories-btn span:first-child{top:28px}.header__categories-btn span:nth-child(2){bottom:28px;width:16px}.header__categories-btn:hover{background-color:#2b2b31}.header__categories-btn[aria-expanded=true] span:first-child{top:34px;transform:rotate(45deg)}.header__categories-btn[aria-expanded=true] span:nth-child(2){bottom:34px;transform:rotate(-45deg);width:24px}.header__categories-list{align-items:flex-start;border-right:1px solid hsla(0,0%,100%,.05);display:flex;flex-direction:column;justify-content:flex-start;margin-right:40px;padding-right:40px;width:auto}.header__categories-list:last-child{border-right:none;margin-right:0;padding-right:0}.header__categories-list li{margin-bottom:10px;padding-left:16px;position:relative;width:100%}.header__categories-list li:before{background-color:#ff55a5;border-radius:50%;content:\"\";height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:4px}.header__categories-list li:last-child{margin-bottom:0}.header__categories-list a{align-items:center;color:#fff;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;height:30px;justify-content:flex-start;white-space:nowrap;width:100%}.header__categories-list a:hover{color:#ff55a5}.header__nav{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin:0 30px;position:relative}.header__actions{margin-right:0}.header__sign-in{width:96px}.header__btn{display:none}}@media (min-width:1400px){.header__logo{width:196px}.header__nav{margin:0 40px}.header__nav-item{margin-right:40px}.header__nav-item:last-child{margin-right:0}.header__search{margin-right:32px}.header__search input{width:196px}.header__language{margin-right:32px;width:36px}.header__sign-in{width:120px}}.home{background-color:#28282d;display:block;overflow:hidden;padding:50px 0;position:relative}.home--bg:before{background:url(/img/bg/home__bg.jpg) no-repeat 50%/cover;bottom:0;content:\"\";left:0;opacity:.1;pointer-events:none;position:absolute;right:0;top:0;z-index:1}.home--bg .container{position:relative;z-index:2}.home__title{color:#fff;font-size:32px;font-weight:300;line-height:44px;margin-bottom:30px;text-transform:uppercase}.home__title b{font-weight:500}@media (min-width:768px){.home{padding:70px 0}.home__title{font-size:36px;line-height:48px;margin-bottom:30px}}@media (min-width:1200px){.home__title{font-size:40px;line-height:52px;margin-bottom:40px}}.hero,.hero__slide{border-radius:8px;overflow:hidden;position:relative;width:100%}.hero__slide{height:100%;padding:0 20px}.hero__slide,.hero__slide:after,.hero__slide:before{-webkit-backface-visibility:hidden;-webkit-transform:translateZ(0)}.hero__slide:after,.hero__slide:before{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0}.hero__slide:before{background-color:rgba(0,0,0,.5);z-index:1}.hero__slide:after{background:linear-gradient(270deg,transparent,rgba(0,0,0,.6));z-index:2}.hero__content{align-items:flex-start;-webkit-backface-visibility:hidden;display:flex;flex-direction:column;height:560px;justify-content:center;padding-bottom:40px;padding-right:20px;position:relative;-webkit-transform:translateZ(0);width:100%;z-index:3}.hero__title{color:#fff;font-size:36px;font-weight:300;line-height:46px;margin-bottom:20px;scrollbar-width:1px}.hero__title sub{align-items:center;bottom:0;color:#fff;display:inline-flex;flex-direction:row;font-size:18px;font-weight:500;justify-content:flex-start;line-height:20px;padding-left:25px;position:relative}.hero__title sub:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 50%;background-size:100% auto;bottom:0;content:\"\";height:20px;left:0;position:absolute;top:0;width:20px}.hero__text{-webkit-line-clamp:5;-webkit-box-orient:vertical;color:#c7c7c7;display:-webkit-box;font-family:\"Open Sans\",sans-serif;font-size:16px;line-height:26px;margin-bottom:30px;max-width:calc(100% - 300px);overflow:hidden}@media (max-width:1200px){.hero__text{-webkit-line-clamp:8;max-width:90%}}.hero__category{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin-bottom:20px}.hero__category a{color:#ff55a5;font-family:\"Open Sans\",sans-serif;font-size:16px;line-height:20px;margin-right:8px;opacity:.8;position:relative}.hero__category a:after{color:#ff55a5;content:\",\";display:block;left:100%;position:absolute;top:0}.hero__category a:last-child{margin-right:0}.hero__category a:last-child:after{display:none}.hero__category a:hover{opacity:1}.hero__actions{flex-wrap:wrap;justify-content:flex-start;width:100%}.hero__actions,.hero__btn{align-items:center;display:flex;flex-direction:row}.hero__btn{background:linear-gradient(90deg,#ff5860,#ff55a5);border-radius:8px;box-shadow:0 0 16px 0 rgba(255,88,96,.3);height:56px;justify-content:center;margin-top:20px;position:relative;width:160px}.hero__btn:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;bottom:0;content:\"\";left:0;opacity:1;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.hero__btn span{color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;position:relative;text-transform:uppercase;z-index:2}.hero__btn:hover{box-shadow:0 0 16px 0 rgba(255,88,96,.6)}.hero__btn:hover:before{opacity:0}@media (min-width:768px){.hero__slide{padding:0 60px}.hero__content{padding-bottom:50px;padding-right:25%}.hero__title{font-size:40px;line-height:50px}}@media (max-width:992px){.hero__content{height:-moz-fit-content;height:fit-content;padding:70px 0;row-gap:20px}.hero__title{line-height:100%;margin:0}.hero__text{margin:0;max-width:100%}.hero__btn,.hero__category{margin:0}}@media (min-width:992px){.hero__content{padding-right:0}}@media (min-width:1200px){.hero__slide{padding:0 120px}.hero__title{font-size:42px}}.menu{align-items:flex-start;background-color:#28282d;bottom:0;box-shadow:none;display:flex;flex-direction:column;justify-content:flex-start;padding:32px 15px 30px;position:fixed;right:0;top:70px;transform:translate3d(280px,0,0);transition:.5s ease;transition-property:transform,box-shadow;width:280px;z-index:105}.menu--active{box-shadow:0 5px 25px 0 rgba(0,0,0,.2);transform:translateZ(0)}.menu:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.menu__search{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:20px;position:relative}.menu__search input{background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;height:46px;padding:0 60px 0 20px;position:relative;width:100%;z-index:1}.menu__search input:focus{border-color:hsla(0,0%,100%,.15)}.menu__search button{align-items:center;display:flex;flex-direction:row;height:20px;justify-content:center;opacity:.5;position:absolute;right:20px;transition:opacity .5s ease;width:20px;z-index:2}.menu__search button svg{fill:#fff;height:auto;width:18px}.menu__search button:hover{opacity:1}.menu__nav{flex-direction:column;height:100%;justify-content:space-between;width:100%}.menu__nav,.menu__nav-item{align-items:flex-start;display:flex;position:relative}.menu__nav-item{flex-direction:row;height:50px;justify-content:flex-start}.menu__nav-item:last-child{margin-right:0}.menu__nav-link{align-items:center;color:#fff;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;height:50px;justify-content:flex-start;white-space:nowrap}.menu__nav-link svg{fill:#fff;height:auto;margin-left:2px;margin-top:2px;width:14px}.menu__nav-link--more svg{margin-left:0;margin-top:0;width:20px}.menu__nav-link:hover,.menu__nav-link[aria-expanded=true]{color:#ff55a5}.menu__nav-link:hover svg,.menu__nav-link[aria-expanded=true] svg{fill:#ff55a5}.menu__dropdown-menu{align-items:flex-start;background-color:#2b2b31;border:none;border-radius:4px;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);display:flex!important;flex-direction:column;justify-content:flex-start;margin-top:-10px;min-width:180px;opacity:0;overflow:hidden;padding:20px;pointer-events:none;position:absolute;top:100%;transition:.5s ease;z-index:-1}.menu__dropdown-menu--lang{min-width:120px}.menu__dropdown-menu:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.menu__dropdown-menu li{margin-bottom:10px;width:100%}.menu__dropdown-menu li:last-child{margin-bottom:0}.menu__dropdown-menu a{align-items:center;color:#fff;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;height:30px;justify-content:flex-start;width:100%}.menu__dropdown-menu a:hover{color:#ff55a5}.menu__dropdown-menu.show{margin-top:0;opacity:1;pointer-events:auto;z-index:1000}@media (min-width:576px){.menu{padding-left:30px;padding-right:calc(50vw - 258px);transform:translate3d(320px,0,0);width:320px}.menu--active{box-shadow:0 5px 25px 0 rgba(0,0,0,.2);transform:translateZ(0)}}@media (min-width:768px){.menu{padding-right:calc(50vw - 348px)}.menu__search{display:none}.menu{padding-right:calc(50vw - 468px)}}@media (min-width:1200px){.menu{display:none}}.splide--home .splide__arrows{display:none}.splide--home .splide__track{border-radius:8px 8px 0 0}.splide--home .splide__pagination{align-items:center;bottom:0;display:flex;flex-direction:row;justify-content:center;margin-top:40px;padding:0 15px;position:relative;width:100%}.splide--home .splide__pagination li{margin-right:12px}.splide--home .splide__pagination li:last-child{margin-right:0}.splide--home .splide__pagination__page{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:4px;display:block;height:4px;margin:0;opacity:.5;transition:.5s ease;width:12px}.splide--home .splide__pagination__page.is-active{opacity:1;transform:scale(1);width:20px}.splide--hero .splide__arrows{display:none}.splide--hero .splide__pagination{align-items:center;bottom:40px;display:flex;flex-direction:row;justify-content:center;padding:0 15px;position:absolute;width:100%}.splide--hero .splide__pagination li{margin-right:12px}.splide--hero .splide__pagination li:last-child{margin-right:0}.splide--hero .splide__pagination__page{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:4px;display:block;height:4px;margin:0;opacity:.5;transition:.5s ease;width:12px}.splide--hero .splide__pagination__page.is-active{opacity:1;transform:scale(1);width:20px}.splide--content .splide__arrows{display:none}.splide--content .splide__track{border-radius:8px 8px 0 0}.splide--content .splide__pagination{align-items:center;bottom:0;display:flex;flex-direction:row;justify-content:center;margin-top:40px;padding:0 15px;position:relative;width:100%}.splide--content .splide__pagination li{margin-right:12px}.splide--content .splide__pagination li:last-child{margin-right:0}.splide--content .splide__pagination__page{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:4px;display:block;height:4px;margin:0;opacity:.5;transition:.5s ease;width:12px}.splide--content .splide__pagination__page.is-active{opacity:1;transform:scale(1);width:20px}.splide--roadmap .splide__arrows{display:none}.splide--roadmap .splide__track{border-radius:8px 8px 0 0}.splide--roadmap .splide__pagination{align-items:center;bottom:0;display:flex;flex-direction:row;justify-content:center;margin-top:30px;padding:0 15px;position:relative;width:100%}.splide--roadmap .splide__pagination li{margin-right:12px}.splide--roadmap .splide__pagination li:last-child{margin-right:0}.splide--roadmap .splide__pagination__page{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:4px;display:block;height:4px;margin:0;opacity:.5;transition:.5s ease;width:12px}.splide--roadmap .splide__pagination__page.is-active{opacity:1;transform:scale(1);width:20px}@media (min-width:768px){.splide--home .splide__pagination{margin-top:50px}.splide--hero .splide__pagination{bottom:50px}.splide--content .splide__pagination{margin-top:50px}.splide--roadmap .splide__pagination{margin-top:40px}}@media (min-width:1200px){.splide--home .splide__arrows{display:block;position:relative}.splide--home .splide__arrow{align-items:center;background-color:transparent;border:1px solid rgba(255,85,165,.5);border-radius:8px;display:flex;flex-direction:row;height:40px;justify-content:center;opacity:1;position:absolute;top:-65px;transition:.5s ease;transition-property:opacity,transform,border-color;width:40px}.splide--home .splide__arrow svg{fill:#fff;height:auto;width:24px}.splide--home .splide__arrow:hover{border-color:rgba(255,85,165,.8)}.splide--home .splide__arrow--prev{left:auto;right:60px}.splide--home .splide__arrow--prev svg{transform:none}.splide--home .splide__arrow--next{right:0}.splide--content .splide__arrows{display:block;position:relative}.splide--content .splide__arrow{align-items:center;background-color:transparent;border:1px solid rgba(255,85,165,.5);border-radius:8px;display:flex;flex-direction:row;height:40px;justify-content:center;opacity:1;position:absolute;top:-55px;transition:.5s ease;transition-property:opacity,transform,border-color;width:40px}.splide--content .splide__arrow svg{fill:#fff;height:auto;width:24px}.splide--content .splide__arrow:hover{border-color:rgba(255,85,165,.8)}.splide--content .splide__arrow--prev{left:auto;right:60px}.splide--content .splide__arrow--prev svg{transform:none}.splide--content .splide__arrow--next{right:0}.splide--roadmap .splide__arrows{display:block;position:relative}.splide--roadmap .splide__arrow{align-items:center;background-color:transparent;border:1px solid rgba(255,85,165,.5);border-radius:8px;display:flex;flex-direction:row;height:40px;justify-content:center;opacity:1;position:absolute;top:-85px;transition:.5s ease;transition-property:opacity,transform,border-color;width:40px}.splide--roadmap .splide__arrow svg{fill:#fff;height:auto;width:24px}.splide--roadmap .splide__arrow:hover{border-color:rgba(255,85,165,.8)}.splide--roadmap .splide__arrow--prev{left:auto;right:30px}.splide--roadmap .splide__arrow--prev svg{transform:none}.splide--roadmap .splide__arrow--next{right:-30px}.splide--hero .splide__pagination{justify-content:flex-start;padding-left:270px}.splide--hero .splide__arrows{align-items:flex-start;bottom:32px;display:inline-flex;flex-direction:row;justify-content:flex-start;left:120px;position:absolute}.splide--hero .splide__arrow{align-items:center;background-color:transparent;border:1px solid rgba(255,85,165,.5);border-radius:8px;display:flex;flex-direction:row;height:40px;justify-content:center;opacity:1;position:relative;top:auto;transform:translateY(0);transition:.5s ease;transition-property:opacity,transform,border-color;width:40px}.splide--hero .splide__arrow svg{fill:#fff;height:auto;width:24px}.splide--hero .splide__arrow:hover{border-color:rgba(255,85,165,.8)}.splide--hero .splide__arrow--prev{left:auto;margin-right:20px}.splide--hero .splide__arrow--prev svg{transform:none}.splide--hero .splide__arrow--next{right:auto}}.content{padding-bottom:50px}.content__head{background-color:#28282d;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);margin-bottom:10px;overflow:hidden;position:relative}.content__head:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.content__title{color:#fff;font-size:32px;font-weight:300;line-height:100%;margin-bottom:20px;margin-top:30px}.content__tabs{align-items:center;border:none;display:flex;flex-direction:row;justify-content:flex-start;overflow:hidden}.content__tabs li{margin-right:30px}.content__tabs li:last-child{margin-right:0}.content__tabs button{align-items:center;color:#fff;color:#c7c7c7;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;height:50px;justify-content:flex-start;position:relative;text-transform:uppercase}.content__tabs button:hover{color:#fff}.content__tabs button:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:2px 2px 0 0;bottom:0;box-shadow:none;content:\"\";display:block;height:0;left:0;position:absolute;right:0;transition:.5s ease}.content__tabs button.active{color:#fff}.content__tabs button.active:before{box-shadow:0 0 20px 0 rgba(255,88,96,.5);height:2px}@media (min-width:768px){.content{padding-bottom:70px}.content__title{font-size:34px}.content__tabs li{margin-right:35px}.content__tabs li:last-child{margin-right:0}}@media (min-width:1200px){.content__title{font-size:36px}.content__tabs--profile button{height:80px}}.section{padding:50px 0;position:relative}.section__title{color:#fff;font-size:32px;font-weight:300;line-height:42px;margin-bottom:10px}.section__title b,.section__title strong{font-weight:500}.section__title--center{text-align:center}.section__title--carousel{margin-bottom:30px}.section__title--sidebar{margin-top:50px}.section__title--head{font-size:36px;line-height:46px}.section__text{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:16px;font-weight:400;line-height:26px;margin-bottom:10px;margin-top:20px}.section__text:first-child{margin-top:0}.section__text b,.section__text strong{font-weight:600}.section__text a{color:#ff55a5}.section__text a:hover{color:#ff5860}.section__list{margin-top:20px}.section__list ol{counter-reset:li;list-style:none;margin-bottom:20px;padding-left:0}.section__list ol ol{margin-top:12px;padding-left:15px}.section__list ol h4{display:inline;font-weight:500}.section__list ol h4,.section__list ol li{color:#c7c7c7;font-size:16px;margin-bottom:12px}.section__list ol li{font-family:\"Open Sans\",sans-serif;line-height:26px;position:relative}.section__list ol li b{font-weight:600}.section__list ol li a{color:#ff55a5}.section__list ol li a:hover{color:#ff5860}.section__list ol li:last-child{margin-bottom:0}.section__list ol li:before{content:counters(li,\".\") \". \";counter-increment:li}.section__list ol:last-child{margin-bottom:0}.section__btn{align-items:center;background:linear-gradient(90deg,#ff5860,#ff55a5);border-radius:8px;box-shadow:0 0 16px 0 rgba(255,88,96,.3);display:flex;flex-direction:row;height:56px;justify-content:center;margin:50px auto 0;position:relative;width:160px}.section__btn:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;bottom:0;content:\"\";left:0;opacity:1;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.section__btn span{color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;position:relative;text-transform:uppercase;z-index:2}.section__btn:hover{box-shadow:0 0 16px 0 rgba(255,88,96,.6)}.section__btn:hover:before{opacity:0}.section__wrap{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.section__paginator{align-items:center;display:flex;flex-direction:row;justify-content:space-between;width:100%}.section__paginator-pages{background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;color:#c7c7c7;cursor:default;display:inline-flex;flex-direction:row;font-size:12px;font-weight:400;height:40px;padding:0 20px}.section__paginator-list,.section__paginator-pages{align-items:center;justify-content:center;margin-top:50px}.section__paginator-list{display:flex;min-width:100px;width:-moz-fit-content;width:fit-content}.section__paginator-list li{margin-right:15px}.section__paginator-list li:first-child a{padding:0 20px}.section__paginator-list li:last-child{margin-right:0}.section__paginator-list li:last-child a{padding:0 20px}.section__paginator-list a{align-items:center;background-color:#28282d;border:1px solid rgba(255,85,165,.4);border-radius:8px;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;height:40px;justify-content:center}.section__paginator-list a span{color:#fff;font-size:12px;font-weight:400;text-transform:uppercase;transition:color .5s ease}.section__paginator-list a svg{fill:#fff;height:20px;transition:fill .5s ease;width:20px}.section__paginator-list a:hover{border-color:rgba(255,85,165,.8)}.section__paginator-list a:hover svg{fill:#ff55a5}.section__details-bg{bottom:0;display:block;left:0;opacity:.1;pointer-events:none;position:absolute;right:0;top:0;z-index:1}.section__roadmap{background-color:#2b2b31;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;display:block;padding:30px 20px;position:relative;width:100%}.section__roadmap:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:4px;content:\"\";display:block;height:4px;left:20px;position:absolute;right:20px;top:82px}.section__item-filter{align-items:flex-start;flex-wrap:wrap;width:100%}.section__item-filter,.section__item-select{display:flex;flex-direction:row;justify-content:flex-start}.section__item-select{align-items:center;background:linear-gradient(90deg,rgba(255,85,165,.05),rgba(255,88,96,.05));border:1px solid hsla(0,0%,100%,.02);border-radius:8px;margin-right:20px;margin-top:20px;min-width:100px;padding:0 20px;width:auto}.section__item-select:focus{box-shadow:none}.section__item-select:last-child{margin-right:0}.section__item-select .ss-single{align-items:center;color:#fff;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;height:44px;justify-content:flex-start;margin:0!important;padding:0}.section__item-select .ss-arrow{height:8px;margin:3px 0 0 6px;width:8px}.section__item-select .ss-arrow path{stroke:#fff}.section__item-select .ss-search{color:#c7c7c7;font-size:12px;margin-bottom:15px;padding:0;width:100%}.section__item-select .ss-search:last-child{margin-bottom:0}.section__item-select .ss-search input{background-color:transparent;border:none;border-bottom:1px solid hsla(0,0%,100%,.1);border-radius:0;color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;height:46px;padding:0}.section__item-select .ss-search input:focus{box-shadow:none}.section__item-select .ss-search input::-moz-placeholder{color:#c7c7c7}.section__item-select .ss-search input::placeholder{color:#c7c7c7}.section__item-select .ss-list{width:100%}.section__item-select .ss-list .ss-option{color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:38px;padding:0;transition:.5s ease}.section__item-select .ss-list .ss-option:hover{background-color:transparent;color:#ff55a5}.section__item-select .ss-list .ss-option.ss-selected{background-color:transparent!important;color:#ff55a5!important}.section__item-select.ss-content{align-items:flex-start;background:#2b2b31;border:none;border-radius:4px;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);flex-direction:column;min-width:140px;padding:20px}.section__item-select.ss-content:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.section--dark{background-color:#28282d}.section--bt{border-top:1px solid hsla(0,0%,100%,.05)}.section--first:before{background:linear-gradient(90deg,#ff55a5,#ff5860);bottom:0;box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0}.section--details{position:relative}.section--details .container{position:relative;z-index:4}.section--details:after,.section--details:before{-webkit-backface-visibility:hidden;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;-webkit-transform:translateZ(0)}.section--details:before{background-color:rgba(0,0,0,.1);z-index:1}.section--details:after{background:linear-gradient(270deg,transparent,rgba(0,0,0,.4));z-index:2}.section--catalog{padding-top:0}@media (min-width:768px){.section{padding:70px 0}.section__title{font-size:34px;line-height:46px}.section__title--carousel{margin-bottom:30px}.section__title--sidebar{margin-top:70px}.section__title--head{font-size:40px;line-height:50px}.section__wrap{align-items:center;flex-direction:row;justify-content:space-between}.section__paginator-pages{font-size:14px;margin-top:auto}.section__paginator-list{display:none}.section__roadmap{padding:30px 30px 40px}.section__roadmap:before{left:30px;right:30px;top:87px}.section--first .section__title{margin-bottom:0}.section--catalog{padding-top:0}}@media (min-width:992px){.section__title--sidebar{margin-top:30px}}@media (min-width:1200px){.section__title{font-size:36px;line-height:50px}.section__title--head{font-size:42px}.section__roadmap{padding:30px}.section__item-select{margin-right:24px;margin-top:24px}.section__item-select:last-child{margin-right:0}}.item{align-items:flex-start;cursor:pointer;display:flex;flex-direction:column;justify-content:flex-start;margin-top:20px;position:relative;width:100%}.premium-icon{border-radius:100%;height:40px;left:10px;position:absolute;top:10px;width:40px;z-index:100}.premium-icon img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.item__cover{align-items:center;display:flex;flex-direction:row;height:300px;justify-content:space-between;overflow:hidden}.item__cover,.item__cover img{border-radius:8px;position:relative;width:100%}.item__cover img{height:100%;max-height:100%;-o-object-fit:fill;object-fit:fill;z-index:1}.item__cover:before{background:linear-gradient(90deg,#ff55a5,#ff5860);bottom:0;content:\"\";display:block;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:2}.item__cover:hover:before{opacity:.66}.item__cover:hover .item__play{opacity:1;transform:scale(1)}.item__play{align-items:center;border:2px solid #fff;border-radius:50%;display:flex;height:56px;justify-content:center;left:50%;margin:-28px 0 0 -28px;opacity:0;position:absolute;top:50%;transform:scale(.8);transition:.5s ease;width:56px;z-index:3}.item__play svg{fill:#fff;height:24px;margin-left:2px;width:24px}.item__content{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;margin-top:10px;position:relative;width:100%}.item__title{color:#fff;font-size:18px;font-weight:400;line-height:26px;margin-bottom:0;width:100%}.item__title-two{min-height:52px}.item--list .item__title,.item__title-two{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.item--list .item__title{word-wrap:break-word;font-size:20px;height:-moz-fit-content;height:fit-content;max-width:-moz-max-content;max-width:max-content;text-overflow:ellipsis;transition:color .5s ease}.item__title a{color:#fff}.item__title a:hover,.item__title:hover{color:#ff55a5}.item__category{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin-top:5px}.item__category a{color:#ff55a5;font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:20px;margin-right:8px;opacity:.8;position:relative}.item__category a:after{color:#ff55a5;content:\",\";display:block;left:100%;position:absolute;top:0}.item__category a:last-child{margin-right:0}.item__category a:last-child:after{display:none}.item__category a:hover{opacity:1}.item__rate{align-items:center;color:#fff;display:inline-flex;flex-direction:row;font-size:16px;font-weight:500;justify-content:flex-start;margin-top:5px;padding-left:20px;position:relative}.item__rate:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 50%;background-size:100% auto;bottom:0;content:\"\";left:0;position:absolute;top:0;width:16px}.item__description,.item__list,.item__meta{display:none}.item--big,.item--carousel{margin-top:0}.item--details{flex-direction:row;flex-wrap:wrap}.item--details .item__cover{max-width:156px;width:100%}.item--details .item__cover:before{display:none}.item--details .item__content{height:100%;margin-left:20px;margin-top:0;overflow:hidden;position:relative;width:calc(100% - 176px)}@media(max-width:576px){.item--details .item__content{margin:20px 0 0;width:100%}.item--details .item__cover{max-width:100%;width:100%}}.item--details .item__description{background-color:#2b2b31;border-radius:10px;display:block;margin-top:20px;padding:20px;width:100%}.item--details .item__description p{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:24px;margin-bottom:20px;max-height:150px;overflow-y:scroll;padding-right:15px}.item--details .item__description p::-webkit-scrollbar{width:5px}.item--details .item__description p::-webkit-scrollbar-track{background:hsla(0,0%,100%,.05);border-radius:10px}.item--details .item__description p::-webkit-scrollbar-thumb{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:10px}.item--details .item__description p:last-child{margin-bottom:0}.item--details .item__list{margin-left:15px}.item--details .item__list,.item--details .item__list li{align-items:center;display:inline-flex;flex-direction:row;justify-content:flex-start}.item--details .item__list li{border:1px solid hsla(0,0%,78%,.5);border-radius:4px;color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:12px;font-weight:600;height:24px;margin-right:12px;padding:0 5px}.item--details .item__list li:last-child{margin-right:0}.item--details .item__wrap{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.item--details .item__meta{display:block;margin-top:15px}.item--details .item__meta--first{margin-top:0}.item--details .item__meta span{color:color #c7c7c7;margin-right:10px}.item--details .item__meta li{align-items:flex-start;color:#c7c7c7;display:flex;flex-direction:row;flex-wrap:wrap;font-family:\"Open Sans\",sans-serif;font-size:14px;justify-content:flex-start;line-height:24px;width:100%}.item--details .item__meta li:last-child{margin-bottom:0}.item--details .item__meta a{color:#ff55a5;font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:24px;margin-right:8px;position:relative}.item--details .item__meta a:after{color:#ff55a5;content:\",\";display:block;left:100%;position:absolute;top:0}.item--details .item__meta a:last-child{margin-right:0}.item--details .item__meta a:last-child:after{display:none}.item--details .item__rate{margin-top:0}@media (min-width:576px){.item--list{flex-direction:row;margin-bottom:6px}.item--list .item__cover{width:156px}.item--list .item__content{height:100%;margin-left:20px;margin-top:0;overflow:hidden;position:relative;width:calc(100% - 176px)}.item--list .item__category{margin-top:10px}.item--details .item__wrap,.item--list .item__rate{margin-top:0}.item--details .item__description p{display:block}.item__list{margin-left:15px}.item__list,.item__list li{align-items:center;display:inline-flex;flex-direction:row;justify-content:flex-start}.item__list li{border:1px solid hsla(0,0%,78%,.5);border-radius:4px;color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:12px;font-weight:600;height:24px;margin-right:12px;padding:0 5px}.item__list li:last-child{margin-right:0}.item__description{display:block;margin-top:15px}.item__description p{-webkit-box-orient:vertical;-webkit-line-clamp:5;color:#c7c7c7;display:-webkit-box;font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:24px;margin-bottom:15px;overflow:hidden}.item__description p:last-child{margin-bottom:0}.item__wrap{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-top:10px;width:100%}}@media (min-width:768px){.item{margin-top:24px}.item--big{margin-top:0}.item--big .item__title{font-size:20px;line-height:32px}.item--carousel{margin-top:0}.item--list .item__cover{width:216px}.item--list .item__content{height:306px;width:calc(100% - 236px)}.item--details .item__cover{max-width:216px;width:216px}.item--details .item__content{margin-left:20px;margin-top:0;overflow:hidden;position:relative;width:calc(100% - 236px)}.item--details .item__wrap{margin-top:0}.item__wrap{margin-top:12px}.item__description{margin-top:auto}.item__description p{-webkit-line-clamp:8}}@media (min-width:1200px){.item--big .item__play{height:64px;margin:-32px 0 0 -32px;width:64px}.item--big .item__play svg{margin-left:2px;width:28px}.item--list .item__cover{width:166px}.item--list .item__content{height:236px;width:calc(100% - 186px)}.item--details .item__cover{max-width:166px;width:166px}.item--details .item__content{width:calc(100% - 186px)}.item__description{padding-right:10px}.item__description p{-webkit-line-clamp:5}.item__description--tvseries{min-height:188px}}@media (min-width:1400px){.item--list .item__cover{width:196px}.item--list .item__content{height:-moz-fit-content;height:fit-content;width:calc(100% - 216px)}.item--details .item__cover{max-width:196px;width:196px}.item--details .item__content{width:calc(100% - 216px)}.item__description p{-webkit-line-clamp:7}}.partners{align-items:flex-start;background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;flex-wrap:wrap;justify-content:flex-start;margin-top:20px;padding:20px;position:relative;width:100%}.partners,.partners__item{display:flex;flex-direction:row}.partners__item{align-items:center;border-bottom:1px solid hsla(0,0%,100%,.05);height:80px;justify-content:center;width:50%}.partners__item img{display:block;max-width:180px;opacity:.7;transition:opacity .5s ease;width:100%}.partners__item:nth-child(2n-1){border-right:1px solid hsla(0,0%,100%,.05);padding-right:20px}.partners__item:nth-child(2n){padding-left:20px}.partners__item--last,.partners__item--prelast{border-bottom:none}.partners__item:hover img{opacity:1}@media (min-width:768px){.partners{margin-top:24px;padding:30px}}@media (min-width:1200px){.partners{padding:30px 0}.partners__item{border-bottom:none;border-right:1px solid hsla(0,0%,100%,.05);padding:0 30px;width:16.666%}.partners__item:nth-child(2n-1){padding-right:30px}.partners__item:nth-child(2n){padding-left:30px}.partners__item--last{border-right:none}}.plan{align-items:flex-start;background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;display:flex;flex-direction:column;justify-content:flex-start;margin-top:20px;overflow:hidden;padding:30px 20px;position:relative;width:100%}.plan--premium:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.plan--mt0{margin-top:0}.plan--active .plan__btn{pointer-evnets:none;cursor:default;opacity:.6}.plan--active .plan__btn:hover{box-shadow:0 0 16px 0 rgba(255,88,96,.3)}.plan--active .plan__btn:hover:before{opacity:1}.plan__title{color:#fff;margin-bottom:30px}.plan__price,.plan__title{font-size:26px;font-weight:400;line-height:100%}.plan__price{color:#ff55a5;position:absolute;right:20px;top:30px;z-index:1}.plan__list{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;margin-bottom:30px;width:100%}.plan__list li{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:16px;margin-bottom:15px;padding-left:15px;position:relative;width:100%}.plan__list li:last-child{margin-bottom:0}.plan__list li:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:50%;content:\"\";display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:4px}.plan__btn{align-items:center;background:linear-gradient(90deg,#ff5860,#ff55a5);border-radius:8px;box-shadow:0 0 16px 0 rgba(255,88,96,.3);display:flex;flex-direction:row;height:56px;justify-content:center;position:relative;width:100%}.plan__btn:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;bottom:0;content:\"\";left:0;opacity:1;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.plan__btn span{color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;position:relative;text-transform:uppercase;z-index:2}.plan__btn:hover{box-shadow:0 0 16px 0 rgba(255,88,96,.6)}.plan__btn:hover:before{opacity:0}@media (min-width:768px){.plan{margin-top:24px;padding:30px}.plan--mt1{margin-top:0}.plan__price{right:30px}}@media (min-width:992px){.plan--mt0,.plan--mt1,.plan--mt2{margin-top:0}}.breadcrumbs{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-top:10px}.breadcrumbs__item{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:26px;margin-right:40px;position:relative;transition:.4s ease}.breadcrumbs__item:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat 50%;background-size:16px auto;bottom:0;content:\"\";left:100%;position:absolute;top:0;top:2px;width:40px}.breadcrumbs__item--active{cursor:default;margin-right:0}.breadcrumbs__item--active:before{display:none}.breadcrumbs a{color:#c7c7c7}.breadcrumbs a:hover{color:#ff55a5}@media (min-width:768px){.breadcrumbs{margin-top:0}}.how{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;margin-top:20px;width:100%}.how__number{-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-image:-webkit-linear-gradient(0deg,#ff55a5,#ff5860);color:#ff5860;display:inline-block;font-size:50px;font-weight:500;line-height:100%;margin-bottom:15px}.how__title{color:#fff;font-size:20px;font-weight:400;line-height:30px;margin-bottom:15px}.how__text{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:16px;line-height:26px;margin-bottom:0}.how__text b,.how__text strong{font-weight:600}@media (min-width:768px){.how{margin-top:24px;padding-right:16px}}.feature{align-items:flex-start;border-top:1px solid hsla(0,0%,100%,.05);display:flex;flex-direction:column;justify-content:flex-start;margin-top:20px;padding-left:70px;padding-top:25px;position:relative;width:100%}.feature__icon{align-items:center;background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;display:flex;flex-direction:row;height:50px;justify-content:center;left:0;position:absolute;top:25px;width:50px}.feature__icon svg{fill:#fff;height:24px;width:24px}.feature__title{color:#fff;font-size:20px;font-weight:400;line-height:30px;margin-bottom:15px}.feature__text{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:16px;line-height:26px;margin-bottom:0}.feature__text b,.feature__text strong{font-weight:600}@media (min-width:768px){.feature{border-top:none;margin-top:40px;padding-right:16px;padding-top:0}.feature__icon{top:0}}.accordion{margin-top:-20px}.accordion__card{background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;margin-top:20px}.accordion__card button{align-items:center;color:#fff;display:flex;flex-direction:row;font-size:18px;font-weight:400;justify-content:flex-start;line-height:30px;min-height:80px;padding:20px 80px 20px 20px;position:relative;text-align:left;width:100%}.accordion__card button span{align-items:center;background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;box-shadow:0 0 16px 0 rgba(255,88,96,.3);display:flex;flex-direction:row;height:40px;justify-content:center;overflow:hidden;position:absolute;right:20px;top:20px;transition:box-shadow .5s ease;width:40px}.accordion__card button span svg{fill:#fff;height:auto;position:absolute;transition:transform .5s ease;width:20px;z-index:2}.accordion__card button span svg:last-child{transform:rotate(-90deg)}.accordion__card button:hover span,.accordion__card button[aria-expanded=true] span{box-shadow:0 0 16px 0 rgba(255,88,96,.6)}.accordion__card button[aria-expanded=true] span svg:last-child{transform:rotate(0deg)}.accordion__card p{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:16px;line-height:26px;margin-bottom:0;padding:0 20px 20px}.accordion__card p b,.accordion__card p strong{font-weight:600}.accordion__card p:first-child{border-top:1px solid hsla(0,0%,100%,.05);padding:20px}@media (min-width:768px){.accordion{margin-top:-24px}.accordion__card{margin-top:24px}}.profile{background-color:#28282d;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);margin-bottom:10px}.profile__content{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;position:relative;width:100%}.profile__user{justify-content:flex-start;margin-bottom:20px;margin-top:30px}.profile__avatar,.profile__user{align-items:center;display:flex;flex-direction:row}.profile__avatar{border-radius:50%;height:40px;justify-content:center;margin-right:15px;overflow:hidden;position:relative;width:40px}.profile__avatar img{height:100%;-o-object-fit:fill;object-fit:fill;width:100%}.profile__meta{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start}.profile__meta h3{color:#fff;font-size:16px;font-weight:500;line-height:20px;margin-bottom:8px}.profile__meta span{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:12px;line-height:100%}.profile__logout{align-items:center;background-color:hsla(0,0%,100%,.05);border-radius:8px;box-shadow:0 0 20px 0 rgba(0,0,0,.05);display:flex;flex-direction:row;height:40px;justify-content:center;position:absolute;right:0;top:30px;width:40px}.profile__logout:hover{box-shadow:0 0 20px 0 rgba(0,0,0,.15)}.profile__logout span{display:none}.profile__logout svg{fill:#fff;height:auto;width:24px}@media (min-width:768px){.profile__avatar{height:46px;width:46px}.profile__meta h3{margin-bottom:10px}.profile__meta span{line-height:16px}.profile__logout{height:46px;width:108px}.profile__logout svg{display:none}.profile__logout span{color:#fff;display:block;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;text-transform:uppercase}}@media (min-width:1200px){.profile__content{align-items:center;flex-direction:row;height:80px;justify-content:flex-start}.profile__user{margin-bottom:0;margin-right:24px;margin-top:0;width:261px}.profile__logout{margin-left:auto;position:relative;right:auto;top:auto;width:96px}}@media (min-width:1400px){.profile__user{width:307px}.profile__logout{width:120px}}.stats{align-items:flex-start;background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;display:flex;flex-direction:column;height:110px;justify-content:center;margin-top:20px;overflow:hidden;padding:20px;position:relative;width:100%}.stats img{bottom:20px;height:auto;position:absolute;right:20px;width:36px}.stats span{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;margin-bottom:10px}.stats p{color:#fff;font-size:36px;font-weight:400;line-height:100%;margin-bottom:0}@media (min-width:768px){.stats{margin-top:24px}}.dashbox{align-items:flex-start;background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;display:flex;flex-direction:column;justify-content:flex-start;margin-top:20px;overflow:hidden;width:100%}.dashbox__title{border-bottom:1px solid hsla(0,0%,100%,.05);justify-content:space-between;padding:20px;width:100%}.dashbox__title,.dashbox__title h3{align-items:center;display:flex;flex-direction:row}.dashbox__title h3{color:#fff;font-size:18px;font-weight:500;justify-content:flex-start;line-height:100%;margin-bottom:0;width:auto}.dashbox__title h3 img{height:auto;margin-right:10px;width:24px}.dashbox__wrap{justify-content:flex-start;width:auto}.dashbox__more,.dashbox__wrap{align-items:center;display:flex;flex-direction:row}.dashbox__more{background-color:hsla(0,0%,100%,.05);border-radius:8px;color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:12px;height:24px;justify-content:center;margin-left:20px;width:60px}.dashbox__more:hover{color:#ff55a5}.dashbox__refresh{align-items:center;display:flex;flex-direction:row;height:24px;justify-content:center;width:24px}.dashbox__refresh svg{fill:#c7c7c7;height:auto;width:16px}.dashbox__refresh:hover svg{fill:#ff55a5}.dashbox__table-wrap{display:block;padding:30px 0 20px;position:relative;width:100%}.dashbox__table{min-width:500px;width:100%}.dashbox__table thead{border-bottom:1px solid hsla(0,0%,100%,.05)}.dashbox__table thead th{border:none;color:#c7c7c7;font-size:12px;font-weight:300;line-height:100%;padding:0 20px 15px}.dashbox__table tbody tr{background-color:#28282d}.dashbox__table tbody td{padding:15px 20px 5px}.dashbox__table-text{align-items:center;color:#fff;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;justify-content:flex-start;line-height:24px;position:relative}.dashbox__table-text a{color:#fff}.dashbox__table-text a:hover{color:#ff55a5}.dashbox__table-text--rate{font-family:\"Ubuntu\",sans-serif;font-size:16px;font-weight:500;padding-left:24px}.dashbox__table-text--rate:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 50%;background-size:100% auto;bottom:0;content:\"\";left:0;position:absolute;top:0;width:16px}.dashbox__table-text--red{color:#ff5860}.dashbox__table-text--grey{color:#c7c7c7}@media (min-width:768px){.dashbox{margin-top:24px}}.paginator{align-items:center;background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;display:none;flex-direction:row;height:50px;justify-content:center;margin-top:50px;width:auto}.paginator__item span{cursor:default}.paginator__item a,.paginator__item span{align-items:center;border-radius:8px;color:#c7c7c7;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;height:50px;justify-content:center;text-align:center;width:50px}.paginator__item:hover a{color:#fff}.paginator__item button{align-items:center;border-radius:8px;color:#c7c7c7;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;height:50px;justify-content:center;text-align:center;width:50px}.paginator__item:hover button{color:#fff}.paginator__item--next svg,.paginator__item--prev svg{fill:#c7c7c7;height:22px;width:22px}.paginator__item--next:hover svg,.paginator__item--prev:hover svg{fill:#fff}.paginator__item--active a{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 16px 0 rgba(255,88,96,.3);color:#fff;cursor:default;font-weight:600}.paginator__item--active a:hover{color:#fff}.paginator__item--active button{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 16px 0 rgba(255,88,96,.3);color:#fff;cursor:default;font-weight:600}.paginator__item--active button:hover{color:#fff}@media (min-width:768px){.paginator{display:inline-flex}}.roadmap{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;position:relative;width:100%}.roadmap:after,.roadmap:before{border-radius:50%;content:\"\";display:block;position:absolute}.roadmap:before{background-color:#fff;height:24px;left:0;opacity:.12;top:42px;width:24px;z-index:1}.roadmap:after{background-color:#fff;height:10px;left:7px;top:49px;width:10px;z-index:2}.roadmap--active:after,.roadmap--active:before{background:linear-gradient(90deg,#ff55a5,#ff5860)}.roadmap--active:after{height:16px;left:4px;top:46px;width:16px}.roadmap--active .roadmap__list li:before{background:linear-gradient(90deg,#ff55a5,#ff5860)}.roadmap__title{color:#fff;display:block;font-size:20px;font-weight:400;line-height:30px;margin-bottom:50px;margin-left:10px}.roadmap__list{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;margin-bottom:0;margin-left:10px;margin-top:0;padding:0;width:100%}.roadmap__list li{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:16px;line-height:26px;margin-bottom:12px;padding-left:16px;position:relative}.roadmap__list li:last-child{margin-bottom:0}.roadmap__list li:before{background-color:#fff;border-radius:50%;content:\"\";height:4px;left:0;opacity:1;position:absolute;top:11px;width:4px}@media (min-width:768px){.roadmap:before{top:47px}.roadmap:after{top:54px}.roadmap--active:before{top:47px}.roadmap--active:after{top:51px}.roadmap__title{margin-bottom:60px}.roadmap__list li{margin-bottom:15px}.roadmap__list li:last-child{margin-bottom:0}}.filter{background-color:#28282d;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);margin-bottom:10px;position:relative;width:100%}.filter__content{display:flex;justify-content:space-between;padding:30px 0;width:100%}.filter__content,.filter__menu{align-items:center;flex-direction:row}.filter__menu{color:#c7c7c7;display:inline-flex;font-size:16px;height:30px;justify-content:flex-start}.filter__menu svg{fill:#fff;height:18px;margin-right:6px;width:18px}.filter__amount{color:#c7c7c7;font-size:14px;font-weight:400;line-height:30px}.filter__items{display:none}.filter__select{align-items:center;background:linear-gradient(90deg,rgba(255,85,165,.05),rgba(255,88,96,.05));border:1px solid hsla(0,0%,100%,.02);border-radius:8px;display:flex;flex-direction:row;justify-content:flex-start;margin-right:20px;min-width:124px;padding:0 20px;width:auto}.filter__select .ss-list::-webkit-scrollbar{width:5px}.filter__select .ss-list::-webkit-scrollbar-track{background:hsla(0,0%,100%,.05);border-radius:10px}.filter__select .ss-list::-webkit-scrollbar-thumb{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:10px}.filter__select:focus{box-shadow:none}.filter__select:last-child{margin-right:0}.filter__select .ss-single{align-items:center;color:#fff;display:flex;flex-direction:row;font-family:\"Open Sans\",sans-serif;font-size:14px;height:44px;justify-content:flex-start;margin:0!important;padding:0}.filter__select .ss-arrow{height:8px;margin:3px 0 0 6px;width:8px}.filter__select .ss-arrow path{stroke:#fff}.filter__select .ss-search{color:#c7c7c7;font-size:12px;margin-bottom:15px;padding:0;width:100%}.filter__select .ss-search:last-child{margin-bottom:0}.filter__select .ss-search input{background-color:transparent;border:none;border-bottom:1px solid hsla(0,0%,100%,.1);border-radius:0;color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;height:46px;padding:0}.filter__select .ss-search input:focus{box-shadow:none}.filter__select .ss-search input::-moz-placeholder{color:#c7c7c7}.filter__select .ss-search input::placeholder{color:#c7c7c7}.filter__select .ss-list{width:100%}.filter__select .ss-list .ss-option{color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:38px;padding:0;transition:.5s ease}.filter__select .ss-list .ss-option:hover{background-color:transparent;color:#ff55a5}.filter__select .ss-list .ss-option.ss-selected{background-color:transparent!important;color:#ff55a5!important}.filter__select.ss-content{align-items:flex-start;background:#2b2b31;border:none;border-radius:4px;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);flex-direction:column;min-width:180px;padding:20px}.filter__select.ss-content:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.filter__btn{display:none}@media (min-width:768px){.filter__content{height:80px;padding:0}.filter__amount,.filter__menu{display:none}.filter__items{justify-content:flex-start}.filter__btn,.filter__items{align-items:center;display:flex;flex-direction:row}.filter__btn{background:linear-gradient(90deg,#ff5860,#ff55a5);border-radius:8px;box-shadow:0 0 16px 0 rgba(255,88,96,.3);height:46px;justify-content:center;position:relative;width:108px}.filter__btn:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;bottom:0;content:\"\";left:0;opacity:1;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.filter__btn span{color:#fff;display:block;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;position:relative;text-transform:uppercase;z-index:2}.filter__btn:hover{box-shadow:0 0 16px 0 rgba(255,88,96,.6)}.filter__btn:hover:before{opacity:0}}@media (min-width:1200px){.filter__btn{width:96px}.filter__select{margin-right:30px}.filter__select:last-child{margin-right:0}}@media (min-width:1400px){.filter__btn{width:120px}}.mfilter{align-items:flex-start;background-color:#28282d;bottom:0;box-shadow:none;display:flex;flex-direction:column;justify-content:flex-start;left:0;padding:32px 15px 30px;position:fixed;top:70px;transform:translate3d(-280px,0,0);transition:.5s ease;transition-property:transform,box-shadow;width:280px;z-index:105}.mfilter--active{box-shadow:0 5px 25px 0 rgba(0,0,0,.2);transform:translateZ(0)}.mfilter:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.mfilter__head{align-items:center;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:30px;width:100%}.mfilter__title{color:#fff;font-size:18px;font-weight:400;line-height:100%;margin-bottom:0}.mfilter__close svg{fill:#c7c7c7;height:auto;transition:fill .5s ease;width:24px}.mfilter__close:hover svg{fill:#ff55a5}.mfilter__select-wrap{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.mfilter__apply{align-items:center;background:linear-gradient(90deg,#ff5860,#ff55a5);border-radius:8px;box-shadow:0 0 16px 0 rgba(255,88,96,.3);display:flex;flex-direction:row;height:46px;justify-content:center;margin-top:auto;position:relative;width:100%}.mfilter__apply:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;bottom:0;content:\"\";left:0;opacity:1;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.mfilter__apply span{color:#fff;display:block;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;position:relative;text-transform:uppercase;z-index:2}.mfilter__apply:hover{box-shadow:0 0 16px 0 rgba(255,88,96,.6)}.mfilter__apply:hover:before{opacity:0}@media (max-width:576px){.footer__title{margin-top:20px}}@media (min-width:576px){.mfilter{padding-right:30px;transform:translate3d(-320px,0,0);width:320px}.mfilter--active{transform:translateZ(0)}}@media (min-width:768px){.mfilter{display:none}}.comments__list{margin-bottom:30px}.comments__autor{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;margin-bottom:15px;padding-left:60px;position:relative}.comments__avatar{border-radius:50%;left:0;position:absolute;top:0;width:46px}.comments__name{color:#fff;display:block;font-size:16px;font-weight:400;line-height:20px;margin-bottom:6px}.comments__name,.moder-user{align-items:center;display:flex}.moder-user{margin-left:4px}.comments__time{font-size:12px;font-weight:300;line-height:20px}.comments__text,.comments__time{color:#c7c7c7;display:block;font-family:\"Open Sans\",sans-serif}.comments__text{background-color:#28282d;border-left:1px solid hsla(0,0%,100%,.05);border-radius:8px 8px 0 0;border-right:1px solid hsla(0,0%,100%,.05);border-top:1px solid hsla(0,0%,100%,.05);font-size:14px;line-height:26px;margin:0;padding:20px;position:relative}.comments__text span{background-color:#2b2b31;border-radius:8px;display:block;margin-bottom:20px;min-height:80px;padding:20px;position:relative}.comments__item{display:block;margin-top:20px}.comments__item--answer,.comments__item--quote{margin-left:25px}.comments__actions{align-items:center;background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:0 0 8px 8px;display:flex;flex-direction:row;justify-content:flex-end;padding:15px 20px;position:relative}.comments__actions-two{min-height:54px}.comments__actions button{align-items:center;color:#c7c7c7;display:flex;flex-direction:row;font-size:12px;height:22px;justify-content:flex-start;margin-right:20px;text-transform:uppercase}.comments__actions button svg{fill:#fff;height:23px;margin-right:5px;opacity:.7;transition:opacity .4s ease;width:23px}.comments__actions button:hover{color:#fff}.comments__actions button:hover svg{opacity:1}.comments__actions button:last-child{margin-right:0}.comments__rate{align-items:center;display:inline-flex;flex-direction:row;justify-content:flex-start;left:20px;margin-top:-15px;position:absolute;top:50%}.comments__rate button{align-items:center;color:#c7c7c7;display:flex;flex-direction:row;font-size:14px;height:30px;justify-content:center;margin-right:25px;position:relative}.comments__rate button svg{height:24px;opacity:.7;transition:opacity .4s ease;width:23px}.comments__rate button:last-child{margin-right:0}.comments__rate button:last-child svg{fill:#c22b3c;margin-left:6px;margin-top:1px}.comments__rate button:first-child svg{fill:#0cb457;margin-right:6px}.comments__rate button:first-child:before{background-color:hsla(0,0%,100%,.05);content:\"\";display:block;height:15px;left:100%;margin-left:12px;position:absolute;top:50%;transform:translateY(-50%);width:1px}.comments__rate button:hover{color:#fff}.comments__rate button:hover svg{opacity:1}@media (min-width:768px){.comments__item{margin-top:24px}.comments__item--answer,.comments__item--quote{margin-left:50px}}@media (min-width:992px){.comments{padding-right:20px}}.reviews__list{margin-bottom:30px}.reviews__autor{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;margin-bottom:15px;padding-left:60px;padding-right:60px;position:relative}.reviews__avatar{border-radius:50%;left:0;position:absolute;top:0;width:46px}.reviews__name{color:#fff;display:block;font-size:16px;font-weight:400;line-height:20px;margin-bottom:6px}.reviews__time{font-size:12px;font-weight:300;line-height:20px}.reviews__text,.reviews__time{color:#c7c7c7;display:block;font-family:\"Open Sans\",sans-serif}.reviews__text{background-color:#28282d;border:1px solid hsla(0,0%,100%,.05);border-radius:8px;font-size:14px;line-height:26px;margin:0;padding:20px}.reviews__item{display:block;margin-top:20px}.reviews__rating{align-items:center;color:#fff;display:inline-flex;flex-direction:row;font-size:16px;font-weight:500;justify-content:flex-start;position:absolute;right:0;top:8px}.reviews__rating svg{fill:#ff55a5;height:23px;margin-right:5px;width:23px}@media (min-width:768px){.reviews__item{margin-top:24px}}@media (min-width:992px){.reviews{padding-right:20px}}.gallery .gallery_in{grid-gap:20;display:grid;gap:20;grid-template-columns:repeat(3,1fr)}.gallery a{display:block;position:relative;transition:.4s ease}.gallery a,.gallery a img{border-radius:8px;overflow:hidden}.gallery a img{height:100%;width:100%}.gallery figcaption{display:none}@media (min-width:768px){.gallery a{margin:24px 0 0}}@media (min-width:992px){.gallery{padding-right:20px}}.footer{background-color:#28282d;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);display:block;overflow:hidden;padding:50px 0 30px;position:relative}.footer:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.footer__logo{width:100px}.footer__logo img{width:100%}.footer__tagline{color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;line-height:24px;margin-bottom:0}.footer__tagline a{color:#ff55a5}.footer__title{color:#fff;font-size:16px;font-weight:400;margin-bottom:20px}.footer__list{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.footer__list li{margin-bottom:12px}.footer__list li:last-child{margin-bottom:0}.footer__list a{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:400;line-height:24px}.footer__list a:hover{color:#ff55a5}.footer__social{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-top:25px}.footer__social li{margin-right:20px}.footer__social li:last-child{margin-left:0}.footer__social svg{fill:#c7c7c7;height:20px;width:20px}.footer__social a{align-items:center;display:flex;flex-direction:row;justify-content:center}.footer__social a:hover svg{fill:#ff55a5}.footer__copyright{align-items:flex-start;border-top:1px solid hsla(0,0%,100%,.05);display:flex;flex-direction:column;font-family:\"Open Sans\",sans-serif;justify-content:center;margin-top:50px;padding-top:30px}.footer__copyright small{color:#c7c7c7;font-size:14px;line-height:24px}.footer__copyright small a{color:#c7c7c7}.footer__copyright small a:hover{color:#ff55a5}.footer__copyright ul{align-items:flex-start;display:flex;flex-direction:row;justify-content:center;margin-top:15px}.footer__copyright ul li{margin-right:20px}.footer__copyright ul li:last-child{margin-right:0}.footer__copyright ul a{color:#c7c7c7;font-size:14px}.footer__copyright ul a:hover{color:#ff55a5}@media (min-width:768px){.footer{padding:0 0 30px}.footer__logo{margin-bottom:15px;margin-top:70px}.footer__copyright{align-items:center;flex-direction:row;justify-content:space-between;margin-top:70px}.footer__copyright ul{margin-top:0}.footer__copyright ul li{margin-right:35px}}.modal .modal-content{background-color:transparent;border:none}.modal .modal-content,.modal__content{border-radius:8px;margin:0 auto;max-width:440px}.modal__content{background:#28282d;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);display:block;overflow:hidden;padding:30px 20px;position:relative;width:100%}.modal__content:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.modal__form{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.modal__title{color:#fff;font-size:26px;font-weight:400;line-height:100%;margin-bottom:30px}.modal__close{align-items:center;display:flex;flex-direction:column;justify-content:center;position:absolute;right:20px;top:30px;z-index:1}.modal__close svg{fill:hsla(0,0%,78%,.6);height:auto;width:24px}.modal__close:hover svg{fill:#ff55a5;opacity:1}@media (min-width:768px){.modal__content{padding:40px 60px}.modal__title{margin-bottom:40px}.modal__close{right:30px;top:30px}}.modal-backdrop{background:rgba(43,43,49,.8)}.sign{display:block;position:relative}.sign__content{flex-direction:row;min-height:100vh;padding:40px 0}.sign__content,.sign__form{align-items:center;display:flex;justify-content:center;width:100%}.sign__form{background:#28282d;border-radius:8px;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);flex-direction:column;max-width:440px;overflow:hidden;padding:40px 20px;position:relative}.sign__form:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.sign__form--contacts{border:1px solid hsla(0,0%,100%,.05);border-top:none;margin-top:50px}.sign__form--comments,.sign__form--contacts,.sign__form--profile{align-items:flex-start;box-shadow:none;justify-content:flex-start;max-width:100%;padding:30px 20px}.sign__form--comments,.sign__form--profile{border:1px solid hsla(0,0%,100%,.05);margin-top:20px}.sign__form--comments:before,.sign__form--profile:before{display:none}.sign__logo{margin-bottom:40px}.sign__logo a{max-width:100%;width:auto}.sign__logo img{max-width:130px}.sign__title{color:#fff;font-size:18px;font-weight:500;line-height:100%;margin-bottom:30px}.sign__label{color:#c7c7c7;font-size:14px;line-height:100%;margin-bottom:15px}.sign__input,.sign__label{font-family:\"Open Sans\",sans-serif;width:100%}.sign__input{background-color:#2b2b31;border:1px solid transparent;border-radius:8px;color:#fff;font-size:16px;height:50px;padding:0 20px;position:relative}.sign__input:focus,.sign__input:hover{border-color:#ff55a5}.sign__textarea{background-color:#2b2b31;border:1px solid transparent;border-radius:8px;color:#fff;font-family:\"Open Sans\",sans-serif;font-size:16px;height:120px;padding:15px 20px;position:relative;resize:none;width:100%}.sign__textarea:focus,.sign__textarea:hover{border-color:#ff55a5}.sign__select{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center right 20px #2b2b31;background-size:20px auto;border:1px solid transparent;border-radius:8px;color:#fff;cursor:pointer;font-family:\"Open Sans\",sans-serif;font-size:16px;height:50px;padding:0 20px;position:relative;width:100%}.sign__select:focus,.sign__select:hover{border-color:#ff55a5}.sign__group{margin-bottom:20px;position:relative;width:100%}.sign__group--checkbox{text-align:left;width:100%}.sign__group--checkbox input:checked,.sign__group--checkbox input:not(:checked){left:-9999px;position:absolute}.sign__group--checkbox input:checked+label,.sign__group--checkbox input:not(:checked)+label{color:#c7c7c7;cursor:pointer;font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:22px;margin:0;padding-left:34px;position:relative}.sign__group--checkbox input:checked+label a,.sign__group--checkbox input:not(:checked)+label a{color:#ff55a5}.sign__group--checkbox input:checked+label a:hover,.sign__group--checkbox input:not(:checked)+label a:hover{color:#ff5860}.sign__group--checkbox input:checked+label:before,.sign__group--checkbox input:not(:checked)+label:before{background-color:#2b2b31;border-radius:2px;content:\"\";height:20px;left:0;position:absolute;top:0;width:20px}.sign__group--checkbox input:checked+label:after,.sign__group--checkbox input:not(:checked)+label:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat 50%;background-size:20px auto;border-radius:2px;content:\"\";height:20px;left:0;position:absolute;top:0;transition:.5s;width:20px}.sign__group--checkbox input:not(:checked)+label:after{opacity:0;transform:scale(0)}.sign__group--checkbox input:checked+label:after{opacity:1;transform:scale(1)}.sign__group--checkbox label::-moz-selection{background:transparent;color:#c7c7c7}.sign__group--checkbox label::selection{background:transparent;color:#c7c7c7}.sign__radio{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;margin-top:5px;position:relative;width:100%}.sign__radio li{margin-bottom:15px;overflow:hidden;position:relative}.sign__radio li:last-child{margin-bottom:0}.sign__radio input:checked,.sign__radio input:not(:checked){left:-9999px;position:absolute}.sign__radio label{color:#c7c7c7;cursor:pointer;display:block;font-family:\"Open Sans\",sans-serif;font-size:16px;font-weight:400;line-height:20px;margin:0;padding-left:35px;position:relative;transition:color .5s ease}.sign__radio label:before{background-color:transparent;border:5px solid hsla(0,0%,100%,.25);border-radius:50%;content:\"\";display:block;height:20px;left:0;position:absolute;top:0;transition:border-color .5s ease;width:20px}.sign__radio input:checked+label,.sign__radio label:hover{color:#fff}.sign__radio input:checked+label:before{border-color:#ff55a5}.sign__btn{align-items:center;background:linear-gradient(90deg,#ff5860,#ff55a5);border-radius:8px;box-shadow:0 0 16px 0 rgba(255,88,96,.3);display:flex;flex-direction:row;height:50px;justify-content:center;position:relative;width:100%}.sign__btn--modal,.sign__btn--small{margin-top:10px}.sign__btn:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;bottom:0;content:\"\";left:0;opacity:1;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.sign__btn span{color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;position:relative;text-transform:uppercase;z-index:2}.sign__btn:hover{box-shadow:0 0 16px 0 rgba(255,88,96,.6)}.sign__btn:hover:before{opacity:0}.sign__text{color:#c7c7c7;display:block;font-family:\"Open Sans\",sans-serif;font-size:14px;line-height:24px;margin-top:20px}.sign__text a{color:#ff55a5}.sign__text a:hover{color:#ff5860}@media (min-width:768px){.sign__form{padding:40px 80px}.sign__form--contacts{margin-top:70px;padding:30px}.sign__form--comments,.sign__form--profile{margin-top:24px;padding:30px}.sign__btn--modal{margin-top:20px}.sign__btn--small{width:160px}}@media (min-width:992px){.sign__form--contacts{margin-top:0}}.page-404{display:block;position:relative}.page-404__wrap{flex-direction:row;min-height:100vh;padding:40px 20px}.page-404__content,.page-404__wrap{align-items:center;display:flex;justify-content:center;width:100%}.page-404__content{background:#28282d;border-radius:8px;box-shadow:0 5px 25px 0 rgba(0,0,0,.2);flex-direction:column;max-width:440px;overflow:hidden;padding:40px 0;position:relative}.page-404__content:before{background:linear-gradient(90deg,#ff55a5,#ff5860);box-shadow:0 0 20px 0 rgba(255,88,96,.5);content:\"\";display:block;height:2px;left:0;position:absolute;right:0;top:0}.page-404__title{-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-image:-webkit-linear-gradient(0deg,#ff55a5,#ff5860);color:#ff5860;font-size:100px;font-weight:500;line-height:100%;margin-bottom:15px;position:relative;text-shadow:0 12px 64px rgba(255,88,96,.35)}.page-404__text{color:#c7c7c7;display:block;font-family:\"Open Sans\",sans-serif;font-size:16px;line-height:26px;margin-bottom:20px;text-align:center;width:100%}.page-404__btn{align-items:center;background:linear-gradient(90deg,#ff5860,#ff55a5);border-radius:8px;box-shadow:0 0 16px 0 rgba(255,88,96,.3);display:flex;flex-direction:row;height:50px;justify-content:center;margin-top:20px;position:relative;width:160px}.page-404__btn:before{background:linear-gradient(90deg,#ff55a5,#ff5860);border-radius:8px;bottom:0;content:\"\";left:0;opacity:1;position:absolute;right:0;top:0;transition:opacity .5s ease;z-index:1}.page-404__btn span{color:#fff;font-family:\"Open Sans\",sans-serif;font-size:14px;font-weight:600;position:relative;text-transform:uppercase;z-index:2}.page-404__btn:hover{box-shadow:0 0 16px 0 rgba(255,88,96,.6)}.page-404__btn:hover:before{opacity:0}@media (min-width:768px){.page-404__content{padding:40px 20px}.page-404__title{font-size:120px}}.contacts__list{margin-top:25px}.contacts__list li{margin-bottom:12px}.contacts__list li:last-child{margin-bottom:0}.contacts__list a{color:#c7c7c7;font-family:\"Open Sans\",sans-serif;font-size:16px;font-weight:400;line-height:26px}.contacts__list a:hover{color:#ff55a5}.contacts__social{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-top:25px}.contacts__social li{margin-right:20px}.contacts__social li:last-child{margin-left:0}.contacts__social svg{fill:#c7c7c7;height:20px;width:20px}.contacts__social a{align-items:center;display:flex;flex-direction:row;justify-content:center}.contacts__social a:hover svg{fill:#ff55a5}.plyr{border-radius:8px;font-weight:300;margin-top:50px}.cinema-iframe{max-height:350px;position:relative}.cinema-iframe,.cinema-iframe iframe{height:100%;width:100%}@media (max-width:1200px){.cinema-iframe{margin-top:20px;min-height:400px}}@media (max-width:768px){.cinema-iframe{margin-top:20px;min-height:250px}}@media (max-width:400px){.cinema-iframe{margin-top:20px;min-height:200px}}.pswp__bg{background-color:rgba(43,43,49,.8)}.pswp__ui--fit .pswp__caption,.pswp__ui--fit .pswp__top-bar{background-color:transparent}.pswp__caption__center{font-size:16px;font-weight:400;padding:20px}.pswp__caption__center,.pswp__counter{color:#fff;font-family:\"Open Sans\",sans-serif}.pswp__counter{font-size:14px;font-weight:500;padding:0 20px}.pswp__button--close{background:none}.pswp__button--close:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 50%;background-size:24px auto;bottom:0;content:\"\";display:block;left:0;position:absolute;right:0;top:0}.pswp__button--fs{background:none}.pswp__button--fs:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") no-repeat 50%;background-size:24px auto;bottom:0;content:\"\";display:block;left:0;position:absolute;right:0;top:0}.pswp--fs .pswp__button--fs:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat 50%;background-size:24px auto}.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{border:1px solid hsla(0,0%,100%,.05);border-radius:8px;content:\"\";display:block;height:50px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:50px}.pswp__button--arrow--left:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") no-repeat 50% #28282d!important;background-size:30px auto!important}.pswp__button--arrow--right:before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat 50% #28282d!important;background-size:30px auto!important}.scrollbar-track-y{background-color:hsla(0,0%,100%,.05)!important;bottom:0!important;height:auto!important;overflow:hidden;right:0!important;top:0!important}.scrollbar-thumb-y,.scrollbar-track-y{border-radius:4px!important;cursor:pointer;width:4px!important}.scrollbar-thumb-y{background:linear-gradient(90deg,#ff55a5,#ff5860)!important}.scrollbar-track-x{background-color:hsla(0,0%,100%,.05)!important;bottom:0!important;left:0!important;overflow:hidden;right:0!important;width:auto!important}.scrollbar-thumb-x,.scrollbar-track-x{border-radius:4px!important;height:4px!important}.scrollbar-thumb-x{background:linear-gradient(90deg,#ff55a5,#ff5860)!important;cursor:pointer}.lg-backdrop,.lg-outer .lg-thumb-outer{background:#2b2b31}.lg-backdrop{color:#000;text-shadow:none}.lg-toolbar .lg-icon{color:#fff}.lg-outer .lg-thumb-item.active,.lg-outer .lg-thumb-item:hover{border-color:#ff55a5}.lodaing_page{background-color:#2b2b31;height:100vh;top:0;width:100%;z-index:1232112}.loading,.lodaing_page{left:0;position:absolute}.loading{font-family:\"Arial Black\",\"Arial Bold\",Gadget,sans-serif;line-height:50px;margin:auto;right:0;text-align:center;text-transform:uppercase;top:50%;transform:translateY(-50%);width:150px;z-index:123123!important}.loading span{color:#fff;position:relative;z-index:999}.loading:before{animation:loadingBefore 2s ease-in-out infinite;background:linear-gradient(90deg,#ff55a5,#ff5860);bottom:0;content:\"\";display:block;height:36px;left:0;margin:auto;position:absolute;right:0;top:0;width:128px}@keyframes loadingBefore{0%{transform:translateX(-14px)}50%{transform:translateX(14px)}to{transform:translateX(-14px)}}.loading:after{animation:loadingAfter 2s ease-in-out infinite;background:#ff55a5;bottom:0;content:\"\";display:block;height:60px;left:0;margin:auto;opacity:.5;position:absolute;right:0;top:0;width:14px}@keyframes loadingAfter{0%{transform:translateX(-50px)}50%{transform:translateX(50px)}to{transform:translateX(-50px)}}@media (max-width:1440px){.item__cover{height:250px}}@media (max-width:1200px){.item__cover{height:300px}.item__cover--rate{height:200px}}@media (max-width:992px){.item__cover--rate{height:300px}}@media (max-width:767px){.item__cover--rate{height:250px}}@media (max-width:576px){.item__cover--rate{height:300px}}@media (max-width:400px){.item__cover--rate{height:250px}}@media (max-width:767px){.item--carousel .item__cover,.item--details .item__cover--anime,.section--catalog .item .item__cover,.tab-content .item .item__cover{height:230px}}@media (max-width:576px){.item--carousel .item__cover,.section--catalog .item .item__cover,.tab-content .item .item__cover{height:320px}}@media (max-width:470px){.item--carousel .item__cover,.section--catalog .item .item__cover,.tab-content .item .item__cover{height:270px}}@media (max-width:400px){.item--carousel .item__cover,.section--catalog .item .item__cover,.tab-content .item .item__cover{height:250px}}@media (max-width:576px){.item--details .item__cover--anime{height:300px;max-width:200px}.item--details .item__cover--anime img{height:100%;width:100%}}@media (max-width:400px){.item--details .item__cover--anime{max-height:500px;max-width:200px;position:relative}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0IiBmaWxsPSJub25lIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDEuNDFMMTIuNTkgMEw3IDUuNTlMMS40MSAwTDAgMS40MUw1LjU5IDdMMCAxMi41OUwxLjQxIDE0TDcgOC40MUwxMi41OSAxNEwxNCAxMi41OUw4LjQxIDdMMTQgMS40MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg=="

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDEwLjFDMjIuMSA5LjYgMjEuNyA5IDIxLjIgOUwxNS41IDguMkwxMi45IDNDMTIuOCAyLjggMTIuNyAyLjcgMTIuNSAyLjZDMTIgMi4zIDExLjQgMi41IDExLjEgM0w4LjYgOC4yTDIuOSA5QzIuNiA5IDIuNCA5LjEgMi4zIDkuM0MxLjkgOS43IDEuOSAxMC4zIDIuMyAxMC43TDYuNCAxNC43TDUuNCAyMC40QzUuNCAyMC42IDUuNCAyMC44IDUuNSAyMUM1LjggMjEuNSA2LjQgMjEuNyA2LjkgMjEuNEwxMiAxOC43TDE3LjEgMjEuNEMxNy4yIDIxLjUgMTcuNCAyMS41IDE3LjYgMjEuNUMxNy43IDIxLjUgMTcuNyAyMS41IDE3LjggMjEuNUMxOC4zIDIxLjQgMTguNyAyMC45IDE4LjYgMjAuM0wxNy42IDE0LjZMMjEuNyAxMC42QzIxLjkgMTAuNSAyMiAxMC4zIDIyIDEwLjFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTE0MF82KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzExNDBfNiIgeDE9IjEuOTM1NjciIHkxPSIxMS4wNDYyIiB4Mj0iMjIuMDQ5OSIgeTI9IjExLjA0NjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNTVBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjU4NjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2M3YzdjNyIgZD0iTTE3LjkyLDExLjYyYTEsMSwwLDAsMC0uMjEtLjMzbC01LTVhMSwxLDAsMCwwLTEuNDIsMS40MkwxNC41OSwxMUg3YTEsMSwwLDAsMCwwLDJoNy41OWwtMy4zLDMuMjlhMSwxLDAsMCwwLDAsMS40MiwxLDEsMCwwLDAsMS40MiwwbDUtNWExLDEsMCwwLDAsLjIxLS4zM0ExLDEsMCwwLDAsMTcuOTIsMTEuNjJaIi8+PC9zdmc+"

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angle-down.8cc5075.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check.76e59c4.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTEzLjQxLDEybDYuMy02LjI5YTEsMSwwLDEsMC0xLjQyLTEuNDJMMTIsMTAuNTksNS43MSw0LjI5QTEsMSwwLDAsMCw0LjI5LDUuNzFMMTAuNTksMTJsLTYuMyw2LjI5YTEsMSwwLDAsMCwwLDEuNDIsMSwxLDAsMCwwLDEuNDIsMEwxMiwxMy40MWw2LjI5LDYuM2ExLDEsMCwwLDAsMS40MiwwLDEsMSwwLDAsMCwwLTEuNDJaIi8+PC9zdmc+"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTIxLDhhMSwxLDAsMCwwLDEtMVYzYTEsMSwwLDAsMC0uMDgtLjM4LDEsMSwwLDAsMC0uNTQtLjU0QTEsMSwwLDAsMCwyMSwySDE3YTEsMSwwLDAsMCwwLDJoMS41OUwxMiwxMC41OSw1LjQxLDRIN0ExLDEsMCwwLDAsNywySDNhMSwxLDAsMCwwLS4zOC4wOCwxLDEsMCwwLDAtLjU0LjU0QTEsMSwwLDAsMCwyLDNWN0ExLDEsMCwwLDAsNCw3VjUuNDFMMTAuNTksMTIsNCwxOC41OVYxN2ExLDEsMCwwLDAtMiwwdjRhMSwxLDAsMCwwLC4wOC4zOCwxLDEsMCwwLDAsLjU0LjU0QTEsMSwwLDAsMCwzLDIySDdhMSwxLDAsMCwwLDAtMkg1LjQxTDEyLDEzLjQxLDE4LjU5LDIwSDE3YTEsMSwwLDAsMCwwLDJoNGExLDEsMCwwLDAsLjM4LS4wOCwxLDEsMCwwLDAsLjU0LS41NEExLDEsMCwwLDAsMjIsMjFWMTdhMSwxLDAsMCwwLTIsMHYxLjU5TDEzLjQxLDEyLDIwLDUuNDFWN0ExLDEsMCwwLDAsMjEsOFoiLz48L3N2Zz4="

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTEwLjM4LDEzLjA4QTEsMSwwLDAsMCwxMCwxM0g2YTEsMSwwLDAsMCwwLDJINy41OWwtNS4zLDUuMjlhMSwxLDAsMCwwLDAsMS40MiwxLDEsMCwwLDAsMS40MiwwTDksMTYuNDFWMThhMSwxLDAsMCwwLDIsMFYxNGExLDEsMCwwLDAtLjA4LS4zOEExLDEsMCwwLDAsMTAuMzgsMTMuMDhaTTEwLDVBMSwxLDAsMCwwLDksNlY3LjU5TDMuNzEsMi4yOUExLDEsMCwwLDAsMi4yOSwzLjcxTDcuNTksOUg2YTEsMSwwLDAsMCwwLDJoNGExLDEsMCwwLDAsLjM4LS4wOCwxLDEsMCwwLDAsLjU0LS41NEExLDEsMCwwLDAsMTEsMTBWNkExLDEsMCwwLDAsMTAsNVptMy42Miw1LjkyQTEsMSwwLDAsMCwxNCwxMWg0YTEsMSwwLDAsMCwwLTJIMTYuNDFsNS4zLTUuMjlhMSwxLDAsMSwwLTEuNDItMS40MkwxNSw3LjU5VjZhMSwxLDAsMCwwLTIsMHY0YTEsMSwwLDAsMCwuMDguMzhBMSwxLDAsMCwwLDEzLjYyLDEwLjkyWk0xNi40MSwxNUgxOGExLDEsMCwwLDAsMC0ySDE0YTEsMSwwLDAsMC0uMzguMDgsMSwxLDAsMCwwLS41NC41NEExLDEsMCwwLDAsMTMsMTR2NGExLDEsMCwwLDAsMiwwVjE2LjQxbDUuMjksNS4zYTEsMSwwLDAsMCwxLjQyLDAsMSwxLDAsMCwwLDAtMS40MloiLz48L3N2Zz4="

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2M3YzdjNyIgZD0iTTE3LDExSDkuNDFsMy4zLTMuMjlhMSwxLDAsMSwwLTEuNDItMS40MmwtNSw1YTEsMSwwLDAsMC0uMjEuMzMsMSwxLDAsMCwwLDAsLjc2LDEsMSwwLDAsMCwuMjEuMzNsNSw1YTEsMSwwLDAsMCwxLjQyLDAsMSwxLDAsMCwwLDAtMS40Mkw5LjQxLDEzSDE3YTEsMSwwLDAsMCwwLTJaIj48L3BhdGg+PC9zdmc+"

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "Header", function() { return Header; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(13);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(14);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _768eede9 = () => interopDefault(__webpack_require__.e(/* import() | pages/404error */ 1).then(__webpack_require__.bind(null, 43)));
const _33a830b8 = () => interopDefault(__webpack_require__.e(/* import() | pages/About */ 2).then(__webpack_require__.bind(null, 54)));
const _62560b20 = () => interopDefault(__webpack_require__.e(/* import() | pages/Catalog */ 3).then(__webpack_require__.bind(null, 44)));
const _bfeac5e8 = () => interopDefault(__webpack_require__.e(/* import() | pages/Contacts */ 4).then(__webpack_require__.bind(null, 45)));
const _03055326 = () => interopDefault(__webpack_require__.e(/* import() | pages/Faq */ 5).then(__webpack_require__.bind(null, 46)));
const _7a77ac1c = () => interopDefault(__webpack_require__.e(/* import() | pages/Forgot */ 6).then(__webpack_require__.bind(null, 47)));
const _67bc9b9d = () => interopDefault(__webpack_require__.e(/* import() | pages/Pricing */ 7).then(__webpack_require__.bind(null, 48)));
const _1574dc00 = () => interopDefault(__webpack_require__.e(/* import() | pages/Profile */ 8).then(__webpack_require__.bind(null, 49)));
const _59a4e11b = () => interopDefault(__webpack_require__.e(/* import() | pages/Signin */ 10).then(__webpack_require__.bind(null, 50)));
const _37a023b1 = () => interopDefault(__webpack_require__.e(/* import() | pages/SignUp */ 9).then(__webpack_require__.bind(null, 51)));
const _003e796c = () => interopDefault(__webpack_require__.e(/* import() | pages/Watching */ 11).then(__webpack_require__.bind(null, 52)));
const _e31cbaee = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 12).then(__webpack_require__.bind(null, 53)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/404error",
    component: _768eede9,
    name: "404error"
  }, {
    path: "/About",
    component: _33a830b8,
    name: "About"
  }, {
    path: "/Catalog",
    component: _62560b20,
    name: "Catalog"
  }, {
    path: "/Contacts",
    component: _bfeac5e8,
    name: "Contacts"
  }, {
    path: "/Faq",
    component: _03055326,
    name: "Faq"
  }, {
    path: "/Forgot",
    component: _7a77ac1c,
    name: "Forgot"
  }, {
    path: "/Pricing",
    component: _67bc9b9d,
    name: "Pricing"
  }, {
    path: "/Profile",
    component: _1574dc00,
    name: "Profile"
  }, {
    path: "/Signin",
    component: _59a4e11b,
    name: "Signin"
  }, {
    path: "/SignUp",
    component: _37a023b1,
    name: "SignUp"
  }, {
    path: "/Watching",
    component: _003e796c,
    name: "Watching"
  }, {
    path: "/",
    component: _e31cbaee,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_errorvue_type_script_lang_js = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js = (nuxt_errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(18)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c9536a10"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(20)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "d5732ba8"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(22);

// EXTERNAL MODULE: ./assets/css/splide.min.css
var splide_min = __webpack_require__(24);

// EXTERNAL MODULE: ./assets/css/slimselect.css
var slimselect = __webpack_require__(26);

// EXTERNAL MODULE: ./assets/css/default-skin.css
var default_skin = __webpack_require__(28);

// EXTERNAL MODULE: ./assets/css/main.css
var main = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=40da1496
var defaultvue_type_template_id_40da1496_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"alert_modal\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"false\" class=\"toast align-items-center\"><div class=\"d-flex\"><div id=\"alert_text\" class=\"toast-body\">\n\t\t\t\t\tHello, world! This is a toast message.\n\t\t\t\t</div> <button type=\"button\" data-bs-dismiss=\"toast\" aria-label=\"Close\" class=\"btn-close me-2 m-auto\"></button></div></div> "), _vm._ssrNode("<div id=\"home_anime\">", "</div>", [_vm._ssrNode("<div style=\"min-height: 70px; width: 100%;\"></div> "), _c('Header'), _vm._ssrNode(" "), _vm._ssrNode("<nav>", "</nav>", [_c('Nuxt')], 1), _vm._ssrNode(" "), _c('Footer')], 2)], 2);
};
var defaultvue_type_template_id_40da1496_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=40da1496

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js

/* harmony default export */ var defaultvue_type_script_lang_js = ({
  name: 'DefaultLayout',
  mounted() {
    setInterval(() => {
      this.get();
    }, 1000);
  },
  methods: {
    get() {
      var a = localStorage.getItem("user_data") ? JSON.parse(localStorage.getItem("user_data")).id : "";
      var b = localStorage.getItem("user_data") ? JSON.parse(localStorage.getItem("user_data")).token : "";
      external_axios_default.a.get("https://api.uzdub.uz/users").then(res => {
        const Filter = res.data.filter(item => item.id == a);
        if (Filter[0].pan) {
          document.querySelector("#home_anime").style = "display:block";
          document.querySelector("#alert_modal").style = "display:none";
        } else {
          document.querySelector("#alert_modal").style = "display:block";
          document.querySelector("#alert_text").innerHTML = "Siz admin tomondan ban oldingiz!";
          document.querySelector("#home_anime").style = "display:none";
        }
        if (Filter[0].token != b) {
          localStorage.clear();
          window.location = "signin";
          // setTimeout(() => {
          // document.querySelector("#alert_modal").style="display:block"
          // document.querySelector("#alert_text").innerHTML="Siz akkauntingizdan boshqa odam kirdi!"
          // }, 1000);
        }
      });
    },

    AlertNone() {
      document.querySelector("#alert_modal").style = "display:none";
    }
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js = (defaultvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js,
  defaultvue_type_template_id_40da1496_render,
  defaultvue_type_template_id_40da1496_staticRenderFns,
  false,
  null,
  null,
  "1041853a"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Header: __webpack_require__(11).default,Footer: __webpack_require__(12).default})

// CONCATENATED MODULE: ./.nuxt/App.js











const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const Footer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12)).then(c => wrapFunctional(c.default || c));
const Header = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 11)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(15);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || '/';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')
 // Source: ./axios.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
async function createApp(ssrContext, config = {}) {
  const store = null;
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "UZDUB saytida o'zbek tilida onlayn anime tomosha qiling",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fpng",
        "href": "\u002Ffavicon-32x32.png",
        "sizes": "32x32"
      }],
      "script": [{
        "type": "text\u002Fjavascript",
        "src": "\u002Fjs\u002Fbootstrap.bundle.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "\u002Fjs\u002Fsplide.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "\u002Fjs\u002Fslimselect.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "\u002Fjs\u002Fmain.js",
        "body": true
      }],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map