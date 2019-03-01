import Vue from 'vue'
const state = {
  products: []
}
const getters = {
}
const mutations = {
  increaseProducts (state, product) {
    let index = state.products.findIndex(function (item) {
      return item.pid === product.pid
    })
    if (~index) {
      let item = state.products[index]
      let totalNum = item.num + product.num
      item.price = Math.floor((item.price * item.num + product.price * product.num) / totalNum)
      item.num = totalNum
      state.products.splice(index, 1, item)
    } else {
      Vue.set(state.products, state.products.length, product)
    }
  },
  removeProducts (state, pid) {
    let index = state.products.findIndex(function (item) {
      return item.pid === pid
    })
    state.products.splice(index, 1)
  }
}
export default ({
  namespaced: true,
  state,
  getters,
  mutations
})
