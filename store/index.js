import Vue from 'vue'
import Vuex from 'vuex'
import recordModule from './recordModule'

Vue.use(Vuex)

new Vuex.Store({
  state: {
    iOS: false,
    username: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    recordModule
  }
})
