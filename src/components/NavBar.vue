<script setup>
import { ref } from 'vue'

import lang from '@/lang'

const navLinks = [
  {name: 'Home', url: '/'},
  {name: lang.common_driver_standings, url: '/driverstandings'},
  {name: lang.common_constructor_standings, url: '/constructorstandings'},
  {name: lang.common_results, url: '/results'},
  {name: lang.common_circuit(2), url: '/circuit'},
  {name: lang.common_calendar, url: '/calendar'},
  {name: lang.common_favorites, url: '/favorites'},
]

const isVisible = ref(false)
const isFirstLoad = ref(true)

function toggleMenu() {
  isVisible.value = !isVisible.value
  isFirstLoad.value = false
}

function closeMenu() {
  isVisible.value = false
  isFirstLoad.value = true
}

</script>

<template>
    <nav>
      <span 
        class="button--icon" 
        @click="toggleMenu"
        data-test="mobile-menu"
      >
        <img 
          src="@/assets/menu.svg" 
          alt="Menu icon"
          width="64"
        >
      </span>
      <ul :class="{'visible': isVisible, 'noVisible': !isFirstLoad && !isVisible}" data-test="nav-list">
        <li v-for="link in navLinks" :key="link.url">
          <router-link 
            :to="link.url" 
            @click="closeMenu"
            :data-test="`nav-link-${link.url}`"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<style scoped>

nav {
  margin-block-end: 1em;
  --navHeight: calc(3.5rem * 7);
}

a::first-letter {
  text-transform: capitalize;
}

a:hover, .router-link-exact-active {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }

@media (min-width: 1024px){
  .button--icon {
    display: none;
  }
}

@media (max-width: 1023px) {
  ul {
    height: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: hidden;
    animation-duration: 1s;
  }

  nav {
    display: block;
  }

  a {
    display: block;
  }

  .visible {
    height: var(--navHeight);
    animation-name: slideDown;
  }

  .noVisible {
    animation-name: slideUp;
  }
}

@keyframes slideDown {
  from {
    height: 0;
  }

  to {
    height: var(--navHeight);
  }
}

@keyframes slideUp {
  from {
    height: var(--navHeight);
  }

  to {
    height: 0;
  }
}

</style>