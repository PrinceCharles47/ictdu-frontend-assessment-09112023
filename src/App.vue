<template>
  <v-app>
    <SearchBar />
    <ItemList />
  </v-app>
</template>

<script>
import SearchBar from './components/search.vue';
import ItemList from './components/items.vue';

export default {
  components: {
    SearchBar,
    ItemList
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

