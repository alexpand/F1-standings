<script setup>
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/driver">Driver</router-link>
      <router-link to="/constructorstandings">Constructor Standings</router-link>
    </nav>
  </header>
  <article>
    <router-view></router-view>
  </article>
</template>

<style scoped>

</style>
