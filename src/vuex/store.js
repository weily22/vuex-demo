import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import ADD_JA from './mutations'
const state = {
  lang: 'en',
  todo: [
    {id: 1, name: '西欧阿米'},
    {id: 2, name: '小黑米'}
  ],
  newObj: {
    's': 'sx'
  }
}
const mutations = {
  changeLanguage (state, lang) {
    state.lang = lang
  },
  changeKO (state) {
    state.lang = 'KO'
  },
  changeFR (state, lang) {
    state.lang = lang.lang
  },
  changeChinese (state, lang) {
    state.lang = lang.lang
    state.newObj = {...state.lang, newProp: 123}
  },
  changeDE (state) {
    state.lang = 'DE'
  },
  ...ADD_JA
}
const getters = {
  doneTodos: state => (id) => {
    return state.todo.filter(todo => todo.id === id)
  }
}

const actions = {
  changeKO (context) {
    context.commit('changeKO')
  },
  changeFR ({commit,state},lang) {
    setTimeout(() => {
      commit('changeFR',lang)
    }, 300)
  },
  changeDE ({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('changeDE')
        resolve()
      }, 500)
    })

  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
