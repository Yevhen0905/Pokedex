<template>
   <div>
      <v-col class="search_field" cols="12" sm="6">
         <v-text-field
            label="Search"
            prepend-inner-icon="mdi-magnify" 
            class="txt-search"
            v-model="search"
            @keyup="$emit('filter', search)"
            >
         </v-text-field>
      </v-col>
   </div>
</template>

<script>
export default {
   name: 'SearchInput',
   data() {
      return {
         search: ''
      }
   }
}
</script>

<style lang="scss">
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