<template>
  <div class="main">
    <div class="pokemon_list_title">Pokedex</div>
    <SearchInput @filter="filterByName"/>
    <div class="container_pokemon">
      <PokemonCard
        :key="pokemon.name"
        v-for="pokemon in filterPokemon"
        :pokemon="pokemon"
        :id="getId(pokemon.url)"
        @clicked="fetchPokemonDetails"
      />
    </div>
    <Pagination 
      :all-pokemon="allPokemon" 
      @select="fetchAllPokemon"
    />
    <BackTop/>
  </div>
</template>

<script>
import axios from 'axios'
import BackTop from '@/components/BackTop.vue'
import Pagination from '@/components/Pagination.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import SearchInput from '@/components/SearchInput.vue'
import PokemonDetails from '@/components/PokemonDetails.vue'

export default {
  name: 'PokemonList',
  components: {
    BackTop,
    Pagination,
    SearchInput,
    PokemonCard
},
  data () {
    return {
      URL: 'https://pokeapi.co/api/v2/pokemon',
      allPokemon: [],
      pokemonDetail: {},
      searchByName: '',
    }
   },
  mounted() {
    this.fetchAllPokemon()
  },
  computed: {
     filterPokemon() {
       if(this.searchByName === '') {
        return this.allPokemon.results
       }
       return this.allPokemon.results.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(this.searchByName.toLowerCase())
       })
     }
  },
  methods: {
    async fetchAllPokemon (page, limit) {
      try{
        const offset = limit*(page - 1);
        const res = await axios.get(this.URL, {
          params: {
            limit: limit,
            offset: offset
          }
        })
        this.scrollToTop()
        this.allPokemon = res.data
        console.log(this.allPokemon);
      } catch {
         console.log(e)
      }
    },
    async fetchPokemonDetails(id) {
      try {
        const res = await axios.get(`${this.URL}/${id}`)
        this.pokemonDetail = res.data
        console.log(this.pokemonDetail);
      } catch {
        console.console.log(e)
      }
      this.openDetails()
    },
    openDetails() {  
      this.$modal.show(PokemonDetails, 
        {
          pokemon: this.pokemonDetail
        },
        {
          height: "auto"
        },
        {
          button: [
            {
              modalClose: () => { this.$modal.close(this.id); }
            }
          ]
        }
      )
    },
    filterByName(search) {
      this.searchByName = search
    },
    getId(url) {
       const splitted = url.split('pokemon');
       return Number(splitted[splitted.length - 1].replace(/\//g, ''));
    },
    scrollToTop() {
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
    } 
    
  }
}
</script>

<style lang="scss">
.container_pokemon {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
}
.pokemon_list_title {
  font-family: "Luckiest Guy", cursive;
    font-size: 75px;
    font-weight: 400;
    color: #f60101;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 1rem;
}
// .pagination {
//     margin-bottom: 1rem;
// }
// .theme--light.v-pagination .v-pagination__item--active {
//     background: #2196F3;
// }
// .theme--light.v-pagination .v-pagination__item {
//     font-weight: 600;
// }
// .v-pagination__more {
//     border-radius: 50%;
//     color: #fff;
// }
// .pagination_limit_title {
//   color: #fff;
//     font-size: 1.2rem;
//     text-align: center;
//     font-weight: 600;
// }
// .pagination_limit {
//     text-align: center;
// }
// .pagination_limit_btn {
//   display: inline-block
// }
// .pagination_btn {
//   background-color: #ffffffed;
//     font-weight: 600;
//     border-radius: 50%;
//     width: 2rem;
//     height: 2rem;
//     margin: 0.5rem;
//     box-shadow: -1px 0px 6px 2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

//     &.active {
//       background-color: #2196F3;
//       color: #fff;
//     }
// }
</style>
