import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Process from './process'
import Market from './market'
import Wares from './wares'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    Process,
    Market,
    Wares
  }
})
