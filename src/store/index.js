import Vue from 'vue'
import Vuex from 'vuex'
import module from './module/module.js'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: module
})

export default store
