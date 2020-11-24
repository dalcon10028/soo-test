import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0
  },
  mutations: {
    correct_answer(state){
      return state.score += 10;
    }
  },
  actions: {
  },
  modules: {
  }
})
