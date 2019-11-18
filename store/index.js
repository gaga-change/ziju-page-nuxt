export const state = () => ({
  menus: []
})

export const mutations = {
  setMenus(state, menus) {
    state.menus = menus
  }
}

export const actions = {
  async getMenus({ commit }) {
    const { list } = await this.$axios.$get('/api/pageMenus?select=id name path&pageSize=999')
    commit('setMenus', list)
  }
}