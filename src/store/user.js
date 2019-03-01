import { userBase } from '@/config/gameconfig'

const state = {
  housePrice: 10000,
  deposit: 0,
  health: 100,
  fame: 100,
  ...userBase
}
const getters = {}
const mutations = {
  modifyCash: function (state, modifyNum) {
    state.cash = state.cash + modifyNum
  },
  modifyDeposit: function (state, modifyNum) {
    state.deposit = state.deposit + modifyNum
  }
}
export default ({
  namespaced: true,
  state,
  getters,
  mutations
})
