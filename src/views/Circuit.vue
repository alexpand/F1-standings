<script setup>
import { ref, onMounted } from 'vue'
import { getCircuits } from '@/api/circuits/getCircuits'
import { circuits } from '@/store'

import FavoritesButton from '@/components/FavoritesButton.vue'

import lang from '@/lang'

const circuitsStore = circuits()

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

onMounted( async () => {
    circuitList.value = hasCircuits() 
        ? circuitsStore.circuitList 
        : await setCircuits()
})

</script>
<template>
    <h1>{{ lang.common_circuit }}</h1>
    <article>
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
                    <td>
                        <FavoritesButton 
                            :id="circuit.circuitId" 
                            :name="circuit.circuitName" 
                            :url="`/circuit/${circuit.circuitId}`" 
                            type="circuits" 
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </article>
</template>