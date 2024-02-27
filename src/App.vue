<script setup>
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/driverstandings">Driver Standings</router-link>
      <router-link to="/constructorstandings">Constructor Standings</router-link>
      <router-link to="/results">Results</router-link>
      <router-link to="/circuit">Circuit</router-link>
      <router-link to="/calendar">Calendar</router-link>
    </nav>
  </header>
  <article>
    <router-view></router-view>
  </article>
</template>

<style scoped>

</style>
