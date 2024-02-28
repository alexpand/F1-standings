<script setup>
import { ref, onMounted } from 'vue'
import { getRaceResults } from '@/api/getRaceResults'

import lang from '@/lang'

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
                <th>{{ lang.common_position }}</th>
                <th>Nº</th>
                <th>{{ lang.common_driver }}</th>
                <th>{{ lang.common_constructor }}</th>
                <th>{{ lang.common_laps }}</th>
                <th>{{ lang.common_grid }}</th>
                <th>{{ lang.common_time }}</th>
                <th>{{ lang.common_status }}</th>
                <th>{{ lang.common_points }}</th>
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