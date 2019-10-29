import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  /* actions: {
    changeCity (context, city) {
      context.commit('changeCity', city)
    }
  }, */
  mutations,
  getters: {
    setCity (state) {
      if (state.city === '北京') {
        return state.city + '市'
      } else {
        return state.city
      }
    }
  }
})
