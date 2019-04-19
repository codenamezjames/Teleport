import Vue from 'vue'
import VueRouter from 'vue-router'
import qs from 'qs'

import decoder from 'src/tools/qs.decoder'
import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    parseQuery (query) {
      return qs.parse(query, { decoder })
    },
    stringifyQuery (query) {
      var result = qs.stringify(query)

      return result ? ('?' + result) : ''
    },

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
