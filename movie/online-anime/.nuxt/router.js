import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f75f737 = () => interopDefault(import('../pages/404error.vue' /* webpackChunkName: "pages/404error" */))
const _5a1c1116 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _07608f62 = () => interopDefault(import('../pages/Catalog.vue' /* webpackChunkName: "pages/Catalog" */))
const _78f1a65a = () => interopDefault(import('../pages/Contacts.vue' /* webpackChunkName: "pages/Contacts" */))
const _62259742 = () => interopDefault(import('../pages/Faq.vue' /* webpackChunkName: "pages/Faq" */))
const _f6e69e2c = () => interopDefault(import('../pages/Forgot.vue' /* webpackChunkName: "pages/Forgot" */))
const _bf6f9ee2 = () => interopDefault(import('../pages/Pricing.vue' /* webpackChunkName: "pages/Pricing" */))
const _4e0070f2 = () => interopDefault(import('../pages/Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _63b9e5e9 = () => interopDefault(import('../pages/Signin.vue' /* webpackChunkName: "pages/Signin" */))
const _41b5287f = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _4db4fa8c = () => interopDefault(import('../pages/Watching.vue' /* webpackChunkName: "pages/Watching" */))
const _0261cbfb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4f75f737,
    name: "404error"
  }, {
    path: "/About",
    component: _5a1c1116,
    name: "About"
  }, {
    path: "/Catalog",
    component: _07608f62,
    name: "Catalog"
  }, {
    path: "/Contacts",
    component: _78f1a65a,
    name: "Contacts"
  }, {
    path: "/Faq",
    component: _62259742,
    name: "Faq"
  }, {
    path: "/Forgot",
    component: _f6e69e2c,
    name: "Forgot"
  }, {
    path: "/Pricing",
    component: _bf6f9ee2,
    name: "Pricing"
  }, {
    path: "/Profile",
    component: _4e0070f2,
    name: "Profile"
  }, {
    path: "/Signin",
    component: _63b9e5e9,
    name: "Signin"
  }, {
    path: "/SignUp",
    component: _41b5287f,
    name: "SignUp"
  }, {
    path: "/Watching",
    component: _4db4fa8c,
    name: "Watching"
  }, {
    path: "/",
    component: _0261cbfb,
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
