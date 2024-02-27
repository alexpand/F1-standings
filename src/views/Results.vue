<script setup>
import { ref, onMounted } from 'vue'
import { getRaceResults } from '@/api/getRaceResults'

const raceResults = ref(null)

onMounted( async () => {
    raceResults.value = await getRaceResults()
})
</script>
<template>
    <h1>Results</h1>
    <table>
        <thead>
            <tr>
                <th>Position</th>
                <th>Nº</th>
                <th>Driver</th>
                <th>Constructor</th>
                <th>Laps</th>
                <th>Grid</th>
                <th>Time</th>
                <th>Status</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="race in raceResults"
                :key="race.position"
            >
                <td>{{ race.position }}</td>
                <td>{{ race.number }}</td>
                <td>{{ `${race.Driver.givenName} ${race.Driver.familyName}` }}</td>
                <td>{{ race.Constructor.name }}</td>
                <td>{{ race.laps }}</td>
                <td>{{ race.grid }}</td>
                <td>{{ race.Time?.time }}</td>
                <td>{{ race.status }}</td>
                <td>{{ race.points }}</td>
            </tr>
        </tbody>
    </table>
</template>