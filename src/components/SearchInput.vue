<template>
   <div>
      <v-col class="search_field" cols="12" sm="6">
         <v-text-field
            label="Enter the name of the Pokémon"
            prepend-inner-icon="mdi-magnify" 
            class="txt-search"
            v-model="search"
            @keyup="$emit('filter', search)"
         >
         </v-text-field>
      </v-col>
      <div class="block_search_item">
         <button class="btn_search" type="button" name="Search" @click="getPokemonSearch(search)">
            SEARCH
         </button>
      </div>
   </div>   
</template>

<script>
export default {
   name: 'SearchInput',
   data() {
      return {
         search: ''
      }
   },
   methods: {
      getPokemonSearch(search) {
         this.$emit('searchPokemon', search)
      }
   }
}
</script>

<style lang="scss">

.block_search_item {
   display: flex;
   flex-direction: column;
   max-width: 200px;
   width: 100%;
   margin: 0 auto;
    
   .btn_search {
      border-radius: 5px;
      padding: 0.6rem 1rem;
      background-color: #615c5c;
      font-family: "Roboto", sans-serif;
      color: #fbfbfb;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 500;
      line-height: normal;
      transition: all 0.5s ease;

         &:hover {
            background-color: #8d969f;
            color: #1e1c1c;
         }
   }    
}

.block_btn_search {
    display: flex;
    justify-content: space-between;
}
.search_field.col-sm-6.col-12 {
    max-width: 24rem;
    width: 100%;
    margin: 0 auto;
}
.theme--light.v-input input, .theme--light.v-input textarea {
    color: rgb(230 222 222 / 87%);
    padding-left: 1rem;
    font-size: 1.2rem;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: rgb(228 217 217 / 64%);
}
.theme--light.v-input {
   color: #2196F3;
}

</style>