<script setup>
import { ref, onMounted } from 'vue'
import { getCircuits } from '@/api/getCircuits'

const circuitList = ref(null)

onMounted( async () => {
    circuitList.value = await getCircuits()
})

</script>
<template>
    <h1>Circuit</h1>
    <table>
        <thead>
            <tr>
                <th>Circuit</th>
                <th>Locality</th>
                <th>Country</th>
                <th>Information</th>
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
                <td><a :href="circuit.url">Description</a></td>
            </tr>
        </tbody>
    </table>
</template>