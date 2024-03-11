<script setup>
import { ref } from 'vue'

import lang from '@/lang'

import { favorites } from '@/store/favorites'

import BackButton from '@/components/BackButton.vue'


const favoritesStore = ref(favorites())

</script>
<template>
    <BackButton />
    <h1>{{ lang.common_favorites }}</h1>
    <article>
        <h2>{{ lang.common_driver }}</h2>
        <ul>
            <li v-for="driver in favoritesStore.drivers">
                <router-link :to="driver.url">{{ driver.name }}</router-link>
            </li>
        </ul>
    </article>
    <article>
        <h2>{{ lang.common_constructor }}</h2>
        <ul>
            <li v-for="constructor in favoritesStore.constructors">
                <router-link :to="constructor.url">{{ constructor.name }}</router-link>
            </li>
        </ul>
    </article>
    <article>
        <h2>{{ lang.common_circuit }}</h2>
        <ul>
            <li v-for="circuit in favoritesStore.circuits">
                {{ circuit.name }}
            </li>
        </ul>
    </article>
</template>