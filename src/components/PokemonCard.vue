<template>
  <div class="pokemon_card" @click="showPokemon(pokemon.name)"> 
    <img  class="pokemon_card_image" :src="getImage(id)" />
    <div class="pokemon_card_title">
      <span class="pokemon_card_id"> № {{ id }}</span> 
      <h2 class="pokemon_card_text">{{ pokemon.name }}</h2>
    </div>  
    <div class="pokemon-card_btn">
      <button class="card_btn" type="button">
        Details
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PoKemonCard',
  props: {
    pokemon: Object,
    id: Number
  },

  data() {
    return {
      imageURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
    };
  },
  methods: {
    getImage(id) {
      return `${this.imageURL}/${id}.png`;   
    },
    showPokemon(name) {
      this.$emit("clicked", name);
    }
  }
}
</script>

<style lang="scss">
.pokemon_card {
    border-radius: 0.6rem;
    box-shadow: 0px 2px 7px rgba(24, 31, 31, 0.77);
    max-width: 22rem;
    width: 100%;
    text-align: center;
    background-color: #b4aebe;
}
.pokemon_card_image {
    max-width: 8rem;
    width: 100%;
    height: 8rem;
}
.pokemon_card_title {
    margin-bottom: 1.5rem;
}
.pokemon_card_id {
  display: inline-block;
    font-weight: 600;
    border: 1px solid #f7f749;
    border-radius: 1rem;
    margin-bottom: 0.3rem;
    padding: 0.1rem 0.4rem;
    color: #252b2b;
    background-color: #f7f749;
}
.pokemon_card_text {
    font-family: "Luckiest Guy", cursive;
    font-size: 30px;
    font-weight: 400;
    color: #2196F3;
    letter-spacing: 2px;
}
.pokemon_card_type {
    margin-bottom: 1rem;
}
.pokemon-card_btn {
    margin: 1.5rem 0;
    
}
.card_btn {
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
    text-transform: uppercase;
    position: relative;
    padding: 0.6rem 1rem;
    border: 4px solid #358cd2;
    border-radius: 1.1rem;
    box-shadow: 0px 2px 7px rgb(24 31 31 / 77%);
    transition-duration: 0.4s;
    cursor: pointer;
}
.card_btn:hover {
  transition-duration: 0.1s;
  color: #68a169;
  background-color: #b9b5b4d9;
  border: 4px solid #68a169;
}

.card_btn:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 2em;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

.card_btn:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 2em;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

.card_btn:active {
  top: 3px;
}
.v-btn:not(.v-btn--round).v-size--default {
    background-color: #03A9F4;
}
</style>