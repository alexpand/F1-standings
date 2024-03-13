<script setup>
import { ref, onMounted } from 'vue'

import lang from '@/lang'

import { favorites } from '@/store/favorites'
import updateTitle from '@/composables/pageTitle'

const favoritesStore = ref(favorites())

onMounted( async () => {
    updateTitle(lang.common_favorites)
})

</script>
<template>
    <h1>{{ lang.common_favorites }}</h1>
    <article>
        <h2>{{ lang.common_driver(Object.keys(favoritesStore.drivers).length) }}</h2>
        <ul v-if="Object.keys(favoritesStore.drivers).length">
            <li v-for="driver in favoritesStore.drivers">
                <router-link :to="driver.url">{{ driver.name }}</router-link>
            </li>
        </ul>
        <p v-else>{{ lang.common_no_drivers }}</p>
    </article>
    <article>
        <h2>{{ lang.common_constructor(Object.keys(favoritesStore.constructors).length) }}</h2>
        <ul v-if="Object.keys(favoritesStore.constructors).length">
            <li v-for="constructor in favoritesStore.constructors">
                <router-link :to="constructor.url">{{ constructor.name }}</router-link>
            </li>
        </ul>
        <p v-else>{{ lang.common_no_constructors }}</p>
    </article>
    <article>
        <h2>{{ lang.common_circuit(Object.keys(favoritesStore.circuits).length) }}</h2>
        <ul v-if="Object.keys(favoritesStore.circuits).length">
            <li v-for="circuit in favoritesStore.circuits">
                {{ circuit.name }}
            </li>
        </ul>
        <p v-else>{{ lang.common_no_circuits }}</p>
    </article>
</template>