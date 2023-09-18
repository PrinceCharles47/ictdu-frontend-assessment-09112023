<template>
    <v-container>
        <v-row class="mt-10 justify-center">
            <v-col class="columns mx-2 d-flex align-center justify-center" cols="8">
                <v-img :src="pokemonImage" max-width="500" max-height="600" class="ma-auto"></v-img>
            </v-col>
            <v-col cols="3">
                <v-row>
                    <v-col class="columns" cols="12">
                        <v-card id="card" flat height="200" class="d-flex flex-column justify-center align-center">
                            <v-card-subtitle
                                class="white--text text-h5 mb-2 pb-0 text-center">#{{ pokemonDetails.id }}</v-card-subtitle>
                            <v-card-subtitle
                                class="white--text text-h3 py-0 my-0 text-center font-weight-bold">{{ pokemonDetails.name.toUpperCase() }}</v-card-subtitle>
                            <v-card-subtitle
                                class="white--text mt-2 pt-0 font-style-italic text-center">{{ pokemonDetails.genera[0].genus }}</v-card-subtitle>
                        </v-card>
                    </v-col>
                    <v-col class="columns my-2" cols="12">
                        <v-card id="card" flat height="200" class="d-flex flex-column justify-center align-center">
                            <v-img :src="require('../assets/types/dragon.png')" max-width="250" contain></v-img>
                        </v-card>
                    </v-col>
                    <v-col class="columns" cols="12">
                        <v-card id="card" flat height="200" class="d-flex flex-column justify-center align-center">
                            <v-img :src="require('../assets/types/ghost.png')" max-width="250" contain></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'PokemonView',

    data: () => ({
        pokemon: null
    }),
    methods: {
        ...mapActions('pokemon', ['fetchPokemon', 'fetchPokemonImage']),

        searchPokemon: async function () {
            await this.fetchPokemon({ pokemon: this.pokemon })
        },

        redirect: function () {
            // this.$router.push({name: 'about'})
            this.$router.push({ name: 'pokemonView' })
        }
    },
    computed: {
        ...mapState('pokemon', {
            pokemonDetails: state => state.pokemon,
            pokemonImage: state => state.pokemonImage
        }),
    }
}
</script>

<style scoped>
#card {
    background-color: #262626;
}

.columns {
    border: 1px solid white;
    border-radius: 5px;
}</style>