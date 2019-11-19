import { inherits } from "util"

export const state = () => ({
  menus: [],
  categories: []
})

export const mutations = {
  setMenus(state, menus) {
    state.menus = menus
  },
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async getMenus({ commit }) {
    const { list } = await this.$axios.$get('/api/pageMenus?select=id name path&pageSize=999')
    commit('setMenus', list)
  },
  async getCategories({commit}) {
    const {list} = await this.$axios.$get('/api/categories?select=id name&pageSize=999')
    commit('setCategories', list)
  },
  async initWeb({dispatch}) {
    await Promise.all([dispatch("getMenus"), dispatch('getCategories')])
  }
}