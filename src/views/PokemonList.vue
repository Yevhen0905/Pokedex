<template>
  <div class="main">
    <div class="pokemon_list_title">Pokemon</div>
    <SearchInput @filter="filter"/>
    <Loader :all-pokemon="allPokemon" />
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
      v-show="allPokemon"
      :all-pokemon="allPokemon" 
      @select="fetchAllPokemon"
    />
    <BackTop/>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Loader.vue'
import BackTop from '@/components/BackTop.vue'
import Pagination from '@/components/Pagination.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import SearchInput from '@/components/SearchInput.vue'
import PokemonDetails from '@/components/PokemonDetails.vue'

export default {
  name: 'PokemonList',
  components: {
    Loader,
    BackTop,
    Pagination,
    SearchInput,
    PokemonCard
},
  data () {
    return {
      URL: 'https://pokeapi.co/api/v2/pokemon',
      allPokemon: {},
      pokemonDetail: {},
      searchByName: ''
    }
   },
  mounted() {
    this.fetchAllPokemon()
  },
  computed: {
    filterPokemon() {
      if(this.searchByName === '') {
          return this.allPokemon
      };
      return this.allPokemon.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(this.searchByName.toLowerCase());
      });

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
        this.allPokemon = res.data.results
      } catch {
        console.log(e)
      }
    },
    async fetchPokemonDetails(name) {
      try {
        const res = await axios.get(`${this.URL}/${name.toLowerCase()}`)
        this.pokemonDetail = res.data
        this.openDetails()
      } catch(e) {
        console.log(e);
      }      
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
    },
    filter(search){
            this.searchByName = search;
        },
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
</style>
