import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const pokemon = {
    namespaced: true,
    state: {
        pokemon: null,
        pokemonImage: null
    },
    getters: {
        getPokemon: (state) => state.pokemon
    },
    mutations: {
        SET_POKEMON: (state, payload) => state.pokemon = payload,
        SET_POKEMON_IMAGE: (state, payload) => state.pokemonImage = payload
    },
    actions: {
        fetchPokemon: async function ({ commit }, data) {
            const url = "https://pokeapi.co/api/v2/pokemon-species"
            await fetch(`${url}/${data.pokemon.toLowerCase()}`)
                .then(response => response.json())
                .then(data => {
                    commit('SET_POKEMON', {
                        id: data.id,
                        name: data.name,
                        genera: data.genera
                    })

                    fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`)
                    .then(response => {
                        commit('SET_POKEMON_IMAGE', response.url)
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        },
    },
    modules: {
    }
}
