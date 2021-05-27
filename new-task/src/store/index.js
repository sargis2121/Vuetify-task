import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [
      {
        fullname: 'Frozen Yogurt',
        age: '159',
        email: 'aasas'
      },
      {
        fullname: 'Ice cream sandwich',
        age: '237',
        email: 'aasas'
      }
    ]
  },
  mutations: {
    addUser (state, list) {
      state.user.push(list)
    }
  },
  actions: {
    // addList ({ commit }, list) {
    //   commit('addUser', list)
    // }
  },
  getters: {
    userList (state) {
      return state.user
    }
  }
})
