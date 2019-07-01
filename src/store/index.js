import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import settings from './settings'
import data from './data'

Vue.use(Vuex)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [createPersistedState({
      paths: ['data', 'settings']
    })],
    modules: {
      data,
      settings
    },

    strict: process.env.DEV
  })

  return Store
}
