const state = () => ({
  name: null,
  email: null
})

const getters = {}

const mutations = {
  setName(state, name) {
    state.name = name
  },
  setEmail(state, email) {
    state.email = email
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
