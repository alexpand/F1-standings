<script setup>
import { ref, onMounted } from 'vue'
import { getSchedule } from '@/api/getSchedule'

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
                <th>Season</th>
                <th>Round</th>
                <th>Race Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Sprint</th>
                <th>Circuit</th>
                <th>Information</th>
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
                <td><a :href="race.url">Report</a></td>
            </tr>
        </tbody>
    </table>
</template>