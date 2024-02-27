<script setup>
import { ref, onMounted } from 'vue'
import { getDriverStandings } from '@/api/getDriverStandings'

const driverList = ref(null)

onMounted( async () => {
    driverList.value = await getDriverStandings()
})

</script>
<template>
    <h1>Driver Standings</h1>
    <table>
        <thead>
            <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Constructor</th>
                <th>Points</th>
                <th>Wins</th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="driver in driverList"
                :key="driver.Driver.driverId"
            >
                <td>{{ driver.position }}</td>
                <td>
                    <router-link :to="`/driver/${driver.Driver.driverId}`">{{ `${driver.Driver.givenName} ${driver.Driver.familyName}` }}</router-link>
                </td>
                <td>{{ driver.Constructors[0].name }}</td>
                <td>{{ driver.points }}</td>
                <td>{{ driver.wins }}</td>
            </tr>
        </tbody>
    </table>
</template>