<template>
  <v-container class="d-flex justify-center">
    <v-card flat width="500" id="card" class="mt-10">
      <v-text-field outlined label="Pokemon name" v-model="pokemon" dark></v-text-field>
      <v-btn block @click="searchPokemon()">Search</v-btn>
      <div v-if="pokemonImage !== null && pokemonDetails !== null" class="d-flex flex-column justify-center mt-10">
        <v-img v-if="pokemonImage !== null" :src="pokemonImage" max-width="250" class="mx-auto" contain></v-img>
        <v-card-title class="mx-auto white--text">{{pokemonDetails.name.toUpperCase()}}</v-card-title>
        <v-btn plain @click="redirect()" class="white--text">View Details</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
  export default {
    name: 'HelloWorld',

    data: () => ({
      pokemon: null
    }),
    methods: {
      ...mapActions('pokemon', ['fetchPokemon', 'fetchPokemonImage']),

      searchPokemon: async function () {
        await this.fetchPokemon({pokemon: this.pokemon})
      },

      redirect: function () {
        // this.$router.push({name: 'about'})
        this.$router.push({name: 'pokemonView', params: {id: 1}})
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
#card{
  background-color: #262626;
}
</style>
