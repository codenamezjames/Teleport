import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import settings from './settings'

Vue.use(Vuex)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [createPersistedState({
      paths: ['settings']
    })],
    modules: {
      settings
    },

    strict: process.env.DEV
  })

  return Store
}
