<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header class="header-navigation">
    <NavBar />
  </header>
  <section>
    <router-view></router-view>
  </section>
</template>