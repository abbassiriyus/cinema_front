import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _768eede9 = () => interopDefault(import('../pages/404error.vue' /* webpackChunkName: "pages/404error" */))
const _33a830b8 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _62560b20 = () => interopDefault(import('../pages/Catalog.vue' /* webpackChunkName: "pages/Catalog" */))
const _bfeac5e8 = () => interopDefault(import('../pages/Contacts.vue' /* webpackChunkName: "pages/Contacts" */))
const _03055326 = () => interopDefault(import('../pages/Faq.vue' /* webpackChunkName: "pages/Faq" */))
const _7a77ac1c = () => interopDefault(import('../pages/Forgot.vue' /* webpackChunkName: "pages/Forgot" */))
const _67bc9b9d = () => interopDefault(import('../pages/Pricing.vue' /* webpackChunkName: "pages/Pricing" */))
const _1574dc00 = () => interopDefault(import('../pages/Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _59a4e11b = () => interopDefault(import('../pages/Signin.vue' /* webpackChunkName: "pages/Signin" */))
const _37a023b1 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _003e796c = () => interopDefault(import('../pages/Watching.vue' /* webpackChunkName: "pages/Watching" */))
const _e31cbaee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
