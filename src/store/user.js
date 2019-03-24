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
  },
  /*
  type == 'in'  存钱
  type == 'out' 取钱
  */
  depositInOut: function (type) {
    let total = state.cash + state.deposit
    if (type === 'in') {
      state.cash = 0
      state.deposit = total
    } else {
      state.cash = total
      state.deposit = 0
    }
  }
}
export default ({
  namespaced: true,
  state,
  getters,
  mutations
})
