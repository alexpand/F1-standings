<script setup>
import { ref, onMounted } from 'vue'
import { getSchedule } from '@/api/getSchedule'

import lang from '@/lang'

const schedule = ref(null)

onMounted( async () => {
    schedule.value = await getSchedule()
})

</script>
<template>
    <h1>Calendar</h1>
    <table>
        <thead>
            <tr>
                <th>{{ lang.common_season }}</th>
                <th>{{ lang.common_round }}</th>
                <th>{{ lang.common_race_name }}</th>
                <th>{{ lang.common_date }}</th>
                <th>{{ lang.common_time }}</th>
                <th>{{ lang.common_sprint }}</th>
                <th>{{ lang.common_circuit }}</th>
                <th>{{ lang.common_information }}</th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="(race, index) in schedule"
                :key="race.raceName + index"
            >
                <td>{{ race.season }}</td>
                <td>{{ race.round }}</td>
                <td>{{ race.raceName }}</td>
                <td>{{ race.date }}</td>
                <td>{{ race.time }}</td>
                <td>{{ race.Sprint?.date }}</td>
                <td>{{ race.Circuit.circuitName }}</td>
                <td><a :href="race.url">{{ lang.common_report }}</a></td>
            </tr>
        </tbody>
    </table>
</template>