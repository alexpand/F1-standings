<script setup>
import { ref } from 'vue'

const navLinks = [
  {name: 'Home', url: '/'},
  {name: 'Driver Standings', url: '/driverStandings'},
  {name: 'Constructor Standings', url: '/constructorstandings'},
  {name: 'Results', url: '/results'},
  {name: 'Circuit', url: '/circuit'},
  {name: 'Calendar', url: '/calendar'},
  {name: 'Favorites', url: '/favorites'},
]

const isVisible = ref(false)

function toggleMenu() {
  isVisible.value = !isVisible.value
}

</script>

<template>
    <nav>
      <button @click="toggleMenu">
        ≡
      </button>
      <ul :class="{'visible': isVisible}">
        <li v-for="link in navLinks" :key="link.url">
          <router-link :to="link.url">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<style scoped>

a:hover, .router-link-exact-active {
    background-color: rgba(255, 255, 255, 0.1);
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
  }
}

</style>