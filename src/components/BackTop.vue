<template>
    <div>
        <v-btn 
            v-scroll="onScroll" 
            v-show="fab" 
            fab
            dark 
            fixed 
            bottom 
            right 
            color="transparent"
            class="transparent elevation-0" 
            @click="toTop" 
            style="z-index: 10"
        >
            <i class="fas fa-arrow-circle-up fa-2x" />
        </v-btn>
    </div>
</template>
  
<script>
export default {
    name: "BackTop",
    data() {
        return {
            fab: false
        }
    },
    methods: {
        onScroll(e) {
            if (typeof window === 'undefined') return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 20
        },
        toTop() {
            this.$vuetify.goTo(0)
        }
    },
}
</script>

<style lang="scss">
.theme--dark.v-btn.v-btn--has-bg {
    background-color: #03a9f4eb;
}
</style>