import { inherits } from "util"

export const state = () => ({
  menus: [],
  menusLoaded: false,
  categories: [],
  categoriesLoaded: false,
})

export const mutations = {
  setMenus(state, menus) {
    state.menus = menus
    state.menusLoaded = true
  },
  setCategories(state, categories) {
    state.categories = categories
    state.categoriesLoaded = true
  }
}

export const actions = {
  async getMenus({ commit, state }) {
    if (state.menusLoaded) return
    const { list } = await this.$axios.$get('/api/pageMenus?select=id name path&pageSize=999')
    commit('setMenus', list)
  },
  async getCategories({commit, state}) {
    if (state.categoriesLoaded) return
    const {list} = await this.$axios.$get('/api/categories?select=id name&pageSize=999')
    commit('setCategories', list)
  },
  async initWeb({dispatch}) {
    await Promise.all([dispatch("getMenus"), dispatch('getCategories')])
  }
}