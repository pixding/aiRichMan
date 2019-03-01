import { gameBase } from '@/config/gameconfig'

const state = {
  housePrice: gameBase.housePrice || 400000,
  totalWeek: gameBase.totalWeek || 52,
  currentWeek: 0
}
const getters = {
}
const mutations = {
  addWeek: function (state) {
    state.currentWeek = state.currentWeek + 1
  }
}
export default ({
  namespaced: true,
  state,
  getters,
  mutations
})
