import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = { showSearch: false }


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 严格模式,如果 state的改变不是由mutations 触发,throw error
  state,
  mutations,
  actions,
})
