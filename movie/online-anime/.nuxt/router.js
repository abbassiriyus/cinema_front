import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ea517afc = () => interopDefault(import('../pages/404error.vue' /* webpackChunkName: "pages/404error" */))
const _5e6881ab = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _2a532eb7 = () => interopDefault(import('../pages/Catalog.vue' /* webpackChunkName: "pages/Catalog" */))
const _975a1cb6 = () => interopDefault(import('../pages/Contacts.vue' /* webpackChunkName: "pages/Contacts" */))
const _4756c634 = () => interopDefault(import('../pages/Faq.vue' /* webpackChunkName: "pages/Faq" */))
const _09ce52f5 = () => interopDefault(import('../pages/Forgot.vue' /* webpackChunkName: "pages/Forgot" */))
const _798a6038 = () => interopDefault(import('../pages/Pricing.vue' /* webpackChunkName: "pages/Pricing" */))
const _70f31047 = () => interopDefault(import('../pages/Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _2e08f018 = () => interopDefault(import('../pages/Signin.vue' /* webpackChunkName: "pages/Signin" */))
const _72126aec = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _1486ce05 = () => interopDefault(import('../pages/Watching.vue' /* webpackChunkName: "pages/Watching" */))
const _06ae3c90 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ea517afc,
    name: "404error"
  }, {
    path: "/About",
    component: _5e6881ab,
    name: "About"
  }, {
    path: "/Catalog",
    component: _2a532eb7,
    name: "Catalog"
  }, {
    path: "/Contacts",
    component: _975a1cb6,
    name: "Contacts"
  }, {
    path: "/Faq",
    component: _4756c634,
    name: "Faq"
  }, {
    path: "/Forgot",
    component: _09ce52f5,
    name: "Forgot"
  }, {
    path: "/Pricing",
    component: _798a6038,
    name: "Pricing"
  }, {
    path: "/Profile",
    component: _70f31047,
    name: "Profile"
  }, {
    path: "/Signin",
    component: _2e08f018,
    name: "Signin"
  }, {
    path: "/SignUp",
    component: _72126aec,
    name: "SignUp"
  }, {
    path: "/Watching",
    component: _1486ce05,
    name: "Watching"
  }, {
    path: "/",
    component: _06ae3c90,
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
