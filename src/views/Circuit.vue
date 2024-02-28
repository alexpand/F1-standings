<script setup>
import { ref, onMounted } from 'vue'
import { getCircuits } from '@/api/getCircuits'
import { circuits, favorites } from '@/store'

import lang from '@/lang'

// const circuitList = ref(null)

// onMounted( async () => {
//     circuitList.value = await getCircuits()
// })

const circuitsStore = circuits()
const favoritesStore = favorites()

const circuitList = ref(null)

function hasCircuits() {
    return !!circuitsStore.circuitList
}

function getAllCircuits() {
    return getCircuits()
}

async function setCircuits() {
    circuitsStore.circuitList = await getAllCircuits()
    return circuitsStore.circuitList
}

function handleSetFavoriteOnClick(circuit) {
    const circuitData = {
        id: circuit.circuitId,
        name: circuit.circuitName,
        url: `/circuit/${circuit.circuitId}`,
        country: circuit.Location.country,
        locality: circuit.Location.locality
    }
    favoritesStore.circuits.push(circuitData)
}

function isFavorite(circuitId) {
    return favoritesStore.circuits.filter( circuit => circuit.id === circuitId ).length > 0
}

onMounted( async () => {
    circuitList.value = hasCircuits() 
        ? circuitsStore.circuitList 
        : await setCircuits()
})

</script>
<template>
    <h1>Circuit</h1>
    <table>
        <thead>
            <tr>
                <th>{{ lang.common_circuit }}</th>
                <th>{{ lang.common_locality }}</th>
                <th>{{ lang.common_country }}</th>
                <th>{{ lang.common_information }}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="circuit in circuitList"
                :key="circuit.circuitId"
            >
                <td>{{ circuit.circuitName }}</td>
                <td>{{ circuit.Location.locality }}</td>
                <td>{{ circuit.Location.country }}</td>
                <td><a :href="circuit.url">{{ lang.common_description }}</a></td>
                <td v-if="isFavorite(circuit.circuitId)">★</td>
                <td 
                    v-else
                    @click="handleSetFavoriteOnClick(circuit)"
                >
                    ☆
                </td>
            </tr>
        </tbody>
    </table>
</template>