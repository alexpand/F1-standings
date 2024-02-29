<script setup>
import { ref } from 'vue'
import { favorites } from '@/store/favorites'

const favoritesStore = ref(favorites())

</script>
<template>
    <h1>Favorites</h1>
    <article>
        <h2>Drivers</h2>
        <ul>
            <li v-for="driver in favoritesStore.drivers">
                {{ driver }}
            </li>
        </ul>
    </article>
    <article>
        <h2>Constructors</h2>
    </article>
    <article>
        <h2>Circuits</h2>
    </article>
</template>