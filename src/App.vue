<template>
  <div class="app_hero">
    <main class="hero">
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style class="app_hero">
.hero {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1rem;
}
</style>
