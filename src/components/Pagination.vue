<template>
    <div>
        <div class="pagination">
        <v-pagination 
           v-if="allPokemon" 
           v-model="page" 
           :total-visible="6" 
           circle
           :length="Math.ceil(pokemonCount / limit)" 
           @input="getPage(page, limit)" 
           @next="getPage(page, limit)"
           @previous="getPage(page, limit)"
        >
        </v-pagination>
        </div>
        <div class="pagination_limit_section">
            <p class="pagination_limit_title">Number of cards per page</p>
            <div class="pagination_limit">
               <div 
                    class="pagination_limit_btn"
                    v-for="(newLimit) in [10, 20, 50, 1300]"
                    :key="newLimit"
                >
                    <button 
                        :class="['pagination_btn', newLimit == limit ? 'active' : '']"
                        @click="changeLimit(newLimit, page)"
                    >
                        {{ newLimit }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['allPokemon'],
    data() {
        return {
            URL: 'https://pokeapi.co/api/v2/pokemon',
            pokemonCount: null,
            page: 1,
            limit: 20
        }
    },
    mounted() {
        this.fetchPokemonCount ()
    },
    methods: {  
        changeLimit(changeNewLimit, page) {
            this.limit = changeNewLimit;
            this.getPage(page, this.limit)
        },
        getPage(page, limit) {
            this.$emit('select', page, limit )
        },
        async fetchPokemonCount () {
          try {
            const res = await axios.get(this.URL)
            this.pokemonCount = res.data.count
          } catch(e) {
            console.log(e)
          }
    },
    }
}

</script>

<style lang="scss">
.pagination {
    margin-bottom: 1rem;
}

.theme--light.v-pagination .v-pagination__item--active {
    background: #2196F3;
}

.theme--light.v-pagination .v-pagination__item {
    font-weight: 600;
}

.v-pagination__more {
    border-radius: 50%;
    color: #fff;
}
.pagination_limit_title {
  color: #fff;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
}
.pagination_limit {
    text-align: center;
}
.pagination_limit_btn {
  display: inline-block
}
.pagination_btn {
  background-color: #ffffffed;
    font-weight: 600;
    border-radius: 50%;
    width: 3rem;
    height: 2rem;
    margin: 0.5rem;
    box-shadow: -1px 0px 6px 2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    &.active {
      background-color: #2196F3;
      color: #fff;
    }
}
</style>