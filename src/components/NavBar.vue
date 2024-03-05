<script setup>

const navLinks = [
  {name: 'Home', url: '/'},
  {name: 'Driver Standings', url: '/driverStandings'},
  {name: 'Constructor Standings', url: '/constructorstandings'},
  {name: 'Results', url: '/results'},
  {name: 'Circuit', url: '/circuit'},
  {name: 'Calendar', url: '/calendar'},
  {name: 'Favorites', url: '/favorites'},
]

</script>

<template>
    <nav>
      <ul>
        <li v-for="link in navLinks" :key="link.url">
          <router-link :to="link.url">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
</template>