import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  lang: 'en',
  todo: [
    {id: 1, name: '西欧阿米'},
    {id: 2, name: '小黑米'}
  ]
}
const mutations = {
  changeLanguage (state, lang) {
    state.lang = lang.lang
  },
  changeChinese (state, lang) {
    state.lang = lang.lang
  }
}
const getters = {
  doneTodos: state => (id) => {
    return state.todo.filter(todo => todo.id === id)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})
