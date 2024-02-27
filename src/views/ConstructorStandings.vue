<script setup>
import { ref, onMounted } from 'vue'
import { getConstructorStandings } from '@/api/getConstructorStandings'
import { constructors, favorites } from '@/store'

import lang from '@/lang'

const constructorsStore = constructors()
const favoritesStore = favorites()

const constructorList = ref(null)

function hasConstructors() {
    return !!constructorsStore.constructorList
}

function getConstructors() {
    return getConstructorStandings()
}

async function setConstructors() {
    constructorsStore.constructorList = await getConstructors()
    return constructorsStore.constructorList
}

function handleSetFavoriteOnClick(constructor) {
    const constructorData = {
        id: constructor.constructorId,
        name: constructor.name,
        url: `/constructor/${constructor.constructorId}`
    }
    favoritesStore.constructors.push(constructorData)
}

function isFavorite(constructorId) {
    return favoritesStore.constructors.filter( constructor => constructor.id === constructorId ).length > 0
}

onMounted( async () => {
    constructorList.value = hasConstructors() 
        ? constructorsStore.constructorList 
        : await setConstructors()
})

</script>
<template>
    <h1>Constructor Standings</h1>
    <table>
        <thead>
            <tr>
                <th>{{ lang.common_position }}</th>
                <th>Constructor</th>
                <th>Points</th>
                <th>Wins</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="constructor in constructorList" 
                :key="constructor.Constructor.constructorId"
            >
                <td>{{ constructor.position }}</td>
                <td>
                    <router-link :to="`/constructor/${constructor.Constructor.constructorId}`">{{ constructor.Constructor.name }}</router-link>
                </td>
                <td>{{ constructor.points }}</td>
                <td>{{ constructor.wins }}</td>
                <td v-if="isFavorite(constructor.Constructor.constructorId)">★</td>
                <td 
                    v-else
                    @click="handleSetFavoriteOnClick(constructor.Constructor)"
                >
                    ☆
                </td>
            </tr>
        </tbody>
    </table>
</template>