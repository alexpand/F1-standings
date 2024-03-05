<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <article>
    <router-view></router-view>
  </article>
</template>