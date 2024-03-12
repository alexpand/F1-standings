<script setup>
import { ref } from 'vue'

import lang from '@/lang'

const navLinks = [
  {name: 'Home', url: '/'},
  {name: lang.common_driver_standings, url: '/driverStandings'},
  {name: lang.common_constructor_standings, url: '/constructorstandings'},
  {name: lang.common_results, url: '/results'},
  {name: lang.common_circuit(2), url: '/circuit'},
  {name: lang.common_calendar, url: '/calendar'},
  {name: lang.common_favorites, url: '/favorites'},
]

const isVisible = ref(false)

function toggleMenu() {
  isVisible.value = !isVisible.value
}

</script>

<template>
    <nav>
      <span class="button--icon" @click="toggleMenu">
        <img 
          src="@/assets/menu.svg" 
          alt="Menu icon"
          width="64"
        >
      </span>
      <ul :class="{'visible': isVisible}">
        <li v-for="link in navLinks" :key="link.url">
          <router-link :to="link.url">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<style scoped>

nav {
  margin-block-end: 1em;
}

a::first-letter {
  text-transform: capitalize;
}

a:hover, .router-link-exact-active {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }

@media (min-width: 1024px){
  button {
    display: none;
  }
}

@media (max-width: 1023px) {
  ul {
    display: none;
  }

  nav {
    display: block;
  }

  a {
    display: block;
  }

  .visible {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    animation-name: slide;
    animation-duration: 1s;
  }
}

@keyframes slide {
  from {
    height: 0;
  }

  to {
    height: 100dvh;
  }
}

</style>