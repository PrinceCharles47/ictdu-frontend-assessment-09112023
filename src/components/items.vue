<template>
    <div class="item-list">
        <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    ID
                  </th>
                  <th class="text-left">
                    Pokemon Name
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="pokemon in pokemons"
                  :key="pokemon.name"
                >
                  <td>{{ pokemon.name }}</td>
                  <td>{{ pokemon.index }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          
    </div>
</template>
  
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
    name: 'ItemList',

    data: () => ({
        return: {
            pokemons: {}
        }
    }),

    mounted() {
        Vue.axios.get('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0')
        .then((info) => {
            this.pokemons=info.data.results;
            console.log(info.data.results)
        })

    }
};
</script>
