import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [
      {
        fullname: 'Sargis Sargsyan',
        age: '18 - 29',
        email: 'saq2121y',
        password: '1111'
      }
    ]
  },
  mutations: {
    addUser (state, list) {
      state.user.push(list)
    },
    findUsers (state, val) {
      for (let i = 0; i <= state.user.length; i++) {
        if (
          state.user[i].email === val.email &&
          state.user[i].password === val.pass
        ) {
          alert('hello' + ' ' + state.user[i].fullname)
        }
      }
    }
  },
  actions: {
    addList ({ commit }, list) {
      commit('addUser', list)
    },
    findUserName ({ commit }, val) {
      commit('findUsers', val)
    }
  },
  getters: {
    userList (state) {
      return state.user
    }
  }
})
