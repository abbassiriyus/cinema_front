import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_6442c5ad from 'nuxt_plugin_plugin_6442c5ad' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_axios_08864c43 from 'nuxt_plugin_axios_08864c43' // Source: ./axios.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"UZDUB saytida o'zbek tilida onlayn anime tomosha qiling","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"format-detection","content":"telephone=no"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"UZDUB.UZ - tarjima animelar online ko'rish sayti, dunyoning har qanday joyidan o'zbek tilida eng so'nggi va sevimli animelarni taqdim etadi. Bu saytda, animelarni onlayn ko'rish uchun tez-tez yangilanadigan ma'lumotlar bilan birga, o'zbek tilidagi tarjimalar bilan tanishing. Foydalanuvchilar uchun sodda va qulay interfeys, boshqa foydalanuvchilar bilan tajribalarni almashish imkoniyati, va animelar haqida tafsilotlar, reytinglar, va sharhlar bilan birgalikda yangi animelarni topish imkoniyatini taklif qiladi. Bu sayt orqali, animeni sevganlar o'zbek tilida sevimli animelarini tomosha qilib, yangi va qulay tarjimalardan foydalanishlari mumkin."},{"name":"keywords","content":"OzbekchaAnimeSerialTop\n\t\t\tTarjimaSerialOzbekchaYangiliklar\n\t\t\tUzbekchaAnimeTarjimaSaytlar\n\t\t\tOzbekchaAnimeFoydalanuvchilarJamiyati\n\t\t\tTarjimaAnimeUzbekchaReyting\n\t\t\tOzbekchaAnimeTop10\n\t\t\tUzbekchaAnimeQandayTopish\n\t\t\tAnimeOzbekTilidaYangiliklar\n\t\t\tOzbekTilidaAnimeIzlash\n\t\t\tTarjimaSerialOzbekchaReyting\n\t\t\tOzbekchaAnimeSaytlari\n\t\t\tUzbekchaAnimeSeriallarRo'yxati\n\t\t\tAnimeOzbekchaTop10\n\t\t\tOzbekchaTarjimaAnimeIzlash\n\t\t\tTarjimaAnimeSerialOzbekchaTop\n\t\t\tOzbekTilidaAnimeTarjimalar\n\t\t\tUzbekchaAnimeSeriallarReyting\n\t\t\tAnimeOzbekTilidaYangiliklar\n\t\t\tOzbekchaAnimeSerialYangiliklari\n\t\t\tTarjimaSerialOzbekchaIzlash\n\t\t\tOzbekchaAnimeSeriallarYangiliklar\n\t\t\tUzbekchaAnimeTarjimalarTop\n\t\t\tAnimeOzbekchaSayt\n\t\t\tOzbekTilidaAnimeTopishSayti\n\t\t\tTarjimaAnimeOzbekchaTop\n\t\t\tOzbekchaAnimeSerialRo'yxati\n\t\t\tUzbekchaAnimeTarjimaYangiliklar\n\t\t\tAnimeOzbekchaTopSayt\n\t\t\tOzbekchaTarjimaAnimeTop\n\t\t\tTarjimaSerialOzbekchaIzlashSayti\n\t\t\tOzbekchaAnimeSeriallarTop\n\t\t\tUzbekchaAnimeTarjimalarYangiliklar\n\t\t\tAnimeOzbekchaTopTarjimalar\n\t\t\tOzbekTilidaAnimeTopishSaytlari\n\t\t\tTarjimaAnimeOzbekchaTop10\n\t\t\tOzbekchaAnimeSeriallarReytingSayti\n\t\t\tUzbekchaAnimeTarjimaTop\n\t\t\tAnimeOzbekchaTopSeriallar\n\t\t\tOzbekTilidaAnimeIzlashSaytlari\n\t\t\tTarjimaSerialOzbekchaTop10\n\t\t\tOzbekchaAnimeSerialYangiliklariSayti\n\t\t\tUzbekchaAnimeTarjimalarReyting\n\t\t\tAnimeOzbekchaYangiliklarSayti\n\t\t\tOzbekTilidaAnimeTopSayti\n\t\t\tTarjimaAnimeOzbekchaTopSayt\n\t\t\tOzbekchaAnimeSerialRo'yxatiSayti\n\t\t\tUzbekchaAnimeTarjimaYangiliklarSayti\n\t\t\tAnimeOzbekchaTopSaytlari\n\t\t\tOzbekchaTarjimaAnimeTopSaytlari\n\t\t\tTarjimaSerialOzbekchaIzlashSaytlari\n\t\t\tOzbekchaAnimeSeriallarTopSaytlari\n\t\t\tUzbekchaAnimeTarjimalarYangiliklarSayti\n\t\t\tAnimeOzbekchaTopTarjimalarSayti\n\t\t\tOzbekTilidaAnimeTopishSaytlari\n\t\t\tTarjimaAnimeOzbekchaTop10Sayti\n\t\t\tOzbekchaAnimeSeriallarReytingSaytlari\n\t\t\tUzbekchaAnimeTarjimaTopSaytlari\n\t\t\tAnimeOzbekchaTopSeriallarSayti\n\t\t\tOzbekTilidaAnimeIzlashSaytlari\n\t\t\tTarjimaSerialOzbekchaTop10Sayti\n\t\t\tOzbekchaAnimeSerialYangiliklariSaytlari\n\t\t\tUzbekchaAnimeTarjimalarReytingSayti\n\t\t\tAnimeOzbekchaYangiliklarSaytlari\n\t\t\tOzbekTilidaAnimeTopSaytlari\n\t\t\tTarjimaAnimeOzbekchaTopSaytSaytlari\n\t\t\tOzbekchaAnimeSerialRo'yxatiSaytSaytlari\n\t\t\tUzbekchaAnimeTarjimaYangiliklarSaytSaytlari\n\t\t\tAnimeOzbekchaTopSaytlari\n\t\t\tOzbekchaTarjimaAnimeTopSaytlari\n\t\t\tTarjimaSerialOzbekchaIzlashSaytSaytlari\n\t\t\tOzbekAnime\nAnimeTarjima\nUzbekAnime\nOzbekTarjima\nAnimeUzbekcha\nTarjimaAnime\nOzbekTilidaAnime\nUzbekchaTarjima\nAnimeSerial\nOzbekchaSeriya\nOzbekchaAnimeSerial\nTarjimaSerialOzbekcha\nOzbekAnimeLovers\nUzbekchaAnimeIzlash\nAnimeTopOzbekTilida\nOzbekchaAnimeFoydalanuvchilar\nTarjimaAnimeUzbekTilida\nOzbekTilidaAnimeTopish\nAnimeOzbekchaSharhlar\nOzbekchaAnimeReyting\nTarjimaSerialOzbekTilida\nUzbekchaAnimeSaytlar\nAnimeOzbekchaTop\nOzbekchaAnimeIzlashSayti\nTarjimaAnimeSerialOzbekTilida\nOzbekchaAnimeSeriallarRo'yxati\nAnimeOzbekchaTop10\nOzbekchaTarjimaAnimeIzlash\nTarjimaAnimeOzbekchaTop\nOzbekTilidaAnimeTarjimalar\nOzbekAnimeSerial\nTarjimaSerial\nUzbekchaAnimeSeriallar\nOzbekchaTarjimaSeriallar\nAnimeOzbekTilida\nUzbekchaAnimeTarjimalari\nTarjimaSerialOzbekcha\nOzbekAnimeLovers\nUzbekchaAnimeIzlash\nAnimeTopOzbekTilida\nOzbekchaAnimeFoydalanuvchilar\nTarjimaAnimeUzbekTilida\nOzbekTilidaAnimeTopish\nAnimeOzbekchaSharhlar\nOzbekchaAnimeReyting\nTarjimaSerialOzbekTilida\nUzbekchaAnimeSaytlar\nAnimeOzbekchaTop\nOzbekchaAnimeIzlashSayti\nTarjimaAnimeSerialOzbekTilida\nOzbekchaAnime\nAnimeTarjima\nUzbekAnime\nOzbekTarjima\nAnimeUzbekcha\nTarjimaAnime\nOzbekTilidaAnime\nUzbekchaTarjima\nAnimeSerial\nOzbekchaSeriya\nNaruto\nFullmetal Alchemist: Brotherhood\nAttack on Titan (Shingeki no Kyojin)\nDeath Note\nOne Piece\nTokyo Ghoul\nSword Art Online\nMy Hero Academia (Boku no Hero Academia)\nDemon Slayer (Kimetsu no Yaiba)\nOne Punch Man\nHunter x Hunter\nSteins;Gate\nCode Geass\nDragon Ball Z\nFairy Tail\nBleach\nCowboy Bebop\nNeon Genesis Evangelion\nHaikyuu!!\nAssassination Classroom (Ansatsu Kyoushitsu)\nNoragami\nMob Psycho 100\nYour Lie in April (Shigatsu wa Kimi no Uso)\nBlack Clover\nJoJo's Bizarre Adventure\nViolet Evergarden\nThe Promised Neverland (Yakusoku no Neverland)\nParasyte (Kiseijuu)\nErased (Boku Dake ga Inai Machi)\nBlue Exorcist (Ao no Exorcist)\nDeath Parade\nSeven Deadly Sins (Nanatsu no Taizai)\nRe:Zero - Starting Life in Another World (Re:Zero kara Hajimeru Isekai Seikatsu)\nAkame ga Kill!\nFullmetal Alchemist\nToradora!\nSoul Eater\nFire Force (En'en no Shouboutai)\nHigh School DxD\nThe Rising of the Shield Hero (Tate no Yuusha no Nariagari)\nNo Game No Life\nDr. Stone\nGurren Lagann (Tengen Toppa Gurren Lagann)\nJujutsu Kaisen\nKonoSuba: God's Blessing on This Wonderful World! (Kono Subarashii Sekai ni Shukufuku wo!)\nFairy Tail: Dragon Cry\nD.Gray-man\nAjin: Demi-Human\nThe Devil is a Part-Timer! (Hataraku Maou-sama!)\nMade in Abyss\n\t\t\t"},{"name":"author","content":"Asror Shodiyev"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@uzdub_go"},{"name":"twitter:creator","content":"@uzdub_go"},{"name":"twitter:title","content":"UZDUBGO tarjima animelar!"},{"name":"twitter:description","content":"UZDUB.UZ - tarjima animelar online ko'rish sayti, dunyoning har qanday joyidan o'zbek tilida eng so'nggi va sevimli animelarni taqdim etadi. Bu saytda, animelarni onlayn ko'rish uchun tez-tez yangilanadigan ma'lumotlar bilan birga, o'zbek tilidagi tarjimalar bilan tanishing. Foydalanuvchilar uchun sodda va qulay interfeys, boshqa foydalanuvchilar bilan tajribalarni almashish imkoniyati, va animelar haqida tafsilotlar, reytinglar, va sharhlar bilan birgalikda yangi animelarni topish imkoniyatini taklif qiladi. Bu sayt orqali, animeni sevganlar o'zbek tilida sevimli animelarini tomosha qilib, yangi va qulay tarjimalardan foydalanishlari mumkin."},{"name":"twitter:image","content":"url_to_image"},{"property":"og:title","content":"UZDUBGO tarjima animelar!"},{"property":"og:description","content":"UZDUB.UZ - tarjima animelar online ko'rish sayti, dunyoning har qanday joyidan o'zbek tilida eng so'nggi va sevimli animelarni taqdim etadi. Bu saytda, animelarni onlayn ko'rish uchun tez-tez yangilanadigan ma'lumotlar bilan birga, o'zbek tilidagi tarjimalar bilan tanishing. Foydalanuvchilar uchun sodda va qulay interfeys, boshqa foydalanuvchilar bilan tajribalarni almashish imkoniyati, va animelar haqida tafsilotlar, reytinglar, va sharhlar bilan birgalikda yangi animelarni topish imkoniyatini taklif qiladi. Bu sayt orqali, animeni sevganlar o'zbek tilida sevimli animelarini tomosha qilib, yangi va qulay tarjimalardan foydalanishlari mumkin."},{"property":"og:url","content":"uzdub.uz"},{"property":"og:site_name","content":"uzdub.uz"},{"property":"og:locale","content":"en_uz"},{"property":"og:type","content":"website"},{"property":"fb:app_id","content":"ID_APP_FACEBOOK"}],"link":[{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicon-32x32.png","sizes":"32x32"}],"script":[{"type":"text\u002Fjavascript","src":"\u002Fjs\u002Fbootstrap.bundle.min.js","body":true},{"type":"text\u002Fjavascript","src":"\u002Fjs\u002Fsplide.min.js","body":true},{"type":"text\u002Fjavascript","src":"\u002Fjs\u002Fslimselect.min.js","body":true},{"type":"text\u002Fjavascript","src":"\u002Fjs\u002Fmain.js","body":true}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
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
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_6442c5ad === 'function') {
    await nuxt_plugin_plugin_6442c5ad(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_08864c43 === 'function') {
    await nuxt_plugin_axios_08864c43(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
