import findIndex from 'lodash/findIndex'
import Vue from 'vue'

export function SET_TV_LIST (state, list) {
  state.tvShowList = list
}
export function UPDATE_TV_SHOW (state, show) {
  const index = findIndex(state.tvShowList, s => s.name === show.name)
  Vue.set(state.tvShowList, index, show)
}
