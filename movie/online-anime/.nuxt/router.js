import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fd24d09 = () => interopDefault(import('../pages/404error.vue' /* webpackChunkName: "pages/404error" */))
const _2919dc84 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _0e193750 = () => interopDefault(import('../pages/Catalog.vue' /* webpackChunkName: "pages/Catalog" */))
const _494dfc2c = () => interopDefault(import('../pages/Contacts.vue' /* webpackChunkName: "pages/Contacts" */))
const _1423034d = () => interopDefault(import('../pages/Faq.vue' /* webpackChunkName: "pages/Faq" */))
const _d56f5988 = () => interopDefault(import('../pages/Forgot.vue' /* webpackChunkName: "pages/Forgot" */))
const _b1fe4f06 = () => interopDefault(import('../pages/Pricing.vue' /* webpackChunkName: "pages/Pricing" */))
const _54b918e0 = () => interopDefault(import('../pages/Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _7475883b = () => interopDefault(import('../pages/Signin.vue' /* webpackChunkName: "pages/Signin" */))
const _5270cad1 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _acfc4ee8 = () => interopDefault(import('../pages/Watching.vue' /* webpackChunkName: "pages/Watching" */))
const _5d40d12e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404error",
    component: _1fd24d09,
    name: "404error"
  }, {
    path: "/About",
    component: _2919dc84,
    name: "About"
  }, {
    path: "/Catalog",
    component: _0e193750,
    name: "Catalog"
  }, {
    path: "/Contacts",
    component: _494dfc2c,
    name: "Contacts"
  }, {
    path: "/Faq",
    component: _1423034d,
    name: "Faq"
  }, {
    path: "/Forgot",
    component: _d56f5988,
    name: "Forgot"
  }, {
    path: "/Pricing",
    component: _b1fe4f06,
    name: "Pricing"
  }, {
    path: "/Profile",
    component: _54b918e0,
    name: "Profile"
  }, {
    path: "/Signin",
    component: _7475883b,
    name: "Signin"
  }, {
    path: "/SignUp",
    component: _5270cad1,
    name: "SignUp"
  }, {
    path: "/Watching",
    component: _acfc4ee8,
    name: "Watching"
  }, {
    path: "/",
    component: _5d40d12e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
