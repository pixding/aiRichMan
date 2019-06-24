import { userBase } from '@/config/gameconfig'

const state = {
  cash: 10000,
  deposit: 0,
  health: 100,
  fame: 100,
  warehouseNum: 100,
  ...userBase
}
const getters = {
  totalAccount: state => {
    return state.cash + state.deposit
  }
}
const mutations = {
  modifyCash: function (state, modifyNum) {
    state.cash = state.cash + modifyNum
  },
  modifyDeposit: function (state, modifyNum) {
    state.deposit = state.deposit + modifyNum
  },
  // 消费
  consume: function (state, money) {
    let total = state.cash + state.depositst
    if (total < money) {
      // todo
    } else {
      if (money > state.cash) {
        state.cash = 0
        state.deposit = total - money
      } else {
        state.cash -= money
      }
    }
  },

  /*
  type == 'in'  存钱
  type == 'out' 取钱
  */
  depositInOut: function (state, type) {
    let total = state.cash + state.deposit
    if (type === 'in') {
      state.cash = 0
      state.deposit = total
    } else {
      state.cash = total
      state.deposit = 0
    }
  },
  cure: function (state) {
    state.health = 100
  },
  expandWare: function (state, val) {
    state.warehouseNum += val
  }
}
export default ({
  namespaced: true,
  state,
  getters,
  mutations
})
