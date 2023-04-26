<template>
    <div class="details_container">
        <div v-if="pokemon.id">
            <button
               class="details_close_button"
               title="cancel"
               @click="$emit('close')"
            >
                X
            </button>
            <img class="details_image" :src="`${pokemon.sprites.front_default}`" alt="">
            <div class="details_title">
                <span class="details_id">№ {{ pokemon.id }}</span>
                <h2 class="details_title_text">{{ pokemon.name }}</h2>
            </div>
            <div class="details_info">
                <div class="details_info_size">
                    <span class="details_info_width"> Weight: {{ pokemon.weight }} </span>
                    <span class="details_info_height"> Height: {{ pokemon.height }}</span>
                </div>
            </div>
            <div class="details_type">
                <ul class="details_type_list">Types:
                    <li class="details_type_item" 
                        v-for="(type) in pokemon.types" 
                        :key="type.key" 
                        :class="'bg_' + type.type.name"
                    >
                        {{ type.type.name }}
                    </li>
                </ul>
            </div>
            <div class="details_stat">
                <ul class="details_stat_list">
                    <li class="details_stat_item" v-for="stat in pokemon.stats" :key="stat.key">
                        <span class="details_stat_name"> {{ capitalize(stat.stat.name) }}: </span>
                        <div class="details_stat_percent">
                            <span class="details_percent" :style="{ width: stat.base_stat + '%' }"> {{ stat.base_stat }}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PokemonDetails",
    props: {
        pokemon: Object
    }, 
    methods: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }, 
}
</script>

<style lang="scss">
.details_container {
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
}

.details_title {
    text-align: center;
    margin-bottom: 1rem;
}

.details_id {
    display: inline-block;
    font-weight: 600;
    border: 1px solid #f7f749;
    border-radius: 1rem;
    margin-bottom: 0.3rem;
    padding: 0.1rem 0.4rem;
    color: #252b2b;
    background-color: #f7f749;
}

.details_title_text {
    font-family: "Luckiest Guy", cursive;
    font-size: 30px;
    font-weight: 400;
    color: #2196F3;
    letter-spacing: 2px;
}

.details_info_size {
    text-align: center;
    margin-bottom: 0.5rem;
    border-bottom: 1px dotted;
}

.details_type_list {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.3rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px dotted;
}

.details_type_item {
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
}

.details_stat_item {
    margin-bottom: 0.3rem;
}

.details_info_width {
    margin-right: 1rem;
}

.vm--container .vm--modal {
    border-radius: 0.5rem;
    margin: 0px auto;
    max-width: 31rem;
    width: 100% !important;
    height: auto;
    top: 1.5rem !important;
    padding: 1.5rem;
    left: 0px !important;
    box-shadow: 2px 2px 13px -5px rgb(215 217 225);
}

.vm--container .vm--overlay {
    background: rgba(0, 0, 0, 0.7);
}

li {
    list-style: none;
}

.details_image {
    display: block;
    max-width: 10rem;
    width: 100%;
    height: 10rem;
    margin: 0 auto;
}

.details_stat_percent {
    display: inline-block;
    width: 50%;
    border-radius: 1rem;
    background-color: #868f9375;
}

.details_percent {
    display: inline-block;
    width: 100%;
    border-radius: 1rem;
    background-color: #03a9f473;
    text-align: center;
    color: #fff;
}
.details_close_button {
    font-size: 1.4rem;
    color: #03A9F4;
}
</style>