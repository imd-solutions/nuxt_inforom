export default {
  activateLoader: ({ commit }, payload) => {
    commit('SET_IS_LOADING', payload)
  }
}
