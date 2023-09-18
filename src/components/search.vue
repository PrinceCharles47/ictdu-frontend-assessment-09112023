<template>
    <div class="search-bar">
        <v-row>
            <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
        justify="center"
        label="Search"
        outlined
        ></v-text-field>
        </v-col>
        </v-row>
        
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'App',
  
    data: () => ({
      //
    }),
  };
  </script>

  <style scoped>
  .search-bar {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
</style>