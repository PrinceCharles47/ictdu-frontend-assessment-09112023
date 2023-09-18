import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, Axios)

export default new Vuex.Store({
  
  state: {
    pokemonName: ''
  },
  getters: {
  },
  mutations: {
    increment: (state, n) => {
      state.pokemonName = n
    }
  },
  actions: {
    fetchData: function({commit}){
      Vue.axios.get('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0')
      .then((info) => {
        commit('increment', info.data.results)
      })
    }
  },
  modules: {
  }
})
