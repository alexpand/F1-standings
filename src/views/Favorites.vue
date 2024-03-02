<script setup>
import { ref } from 'vue'
import { favorites } from '@/store/favorites'

import lang from '@/lang'

const favoritesStore = ref(favorites())

</script>
<template>
    <h1>{{ lang.common_favorite }}</h1>
    <article>
        <h2>{{ lang.common_driver }}</h2>
        <ul>
            <li v-for="driver in favoritesStore.drivers">
                {{ driver }}
            </li>
        </ul>
    </article>
    <article>
        <h2>{{ lang.common_constructor }}</h2>
    </article>
    <article>
        <h2>{{ lang.common_circuit }}</h2>
    </article>
</template>