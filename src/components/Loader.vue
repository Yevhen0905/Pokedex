<template>
    <div class="loader_block">
        <v-progress-circular 
          class="loader" 
          v-if="!allPokemon.results" 
          :size="50" 
          :width="5" 
          indeterminate>
        </v-progress-circular>
      </div>
</template>

<script>
export default {
    name: 'Loader',
    props: ['allPokemon']
}

</script>

<style lang="scss">
.loader_block {
    display: flex;
    justify-content: center;
    color: #f60101;
}
  
</style>