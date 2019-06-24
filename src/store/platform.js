
const state = {
  panelType: '0' // 不显示
}
const getters = {
}
const mutations = {
  changePanelType: function (state, type) {
    state.panelType = type
  }
}

export default ({
  namespaced: true,
  state,
  getters,
  mutations
})
