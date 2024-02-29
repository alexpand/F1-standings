<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getDriverWins } from '@/api/getDriverWins'
import { getDriverData } from '@/api/getDriverData'

const driver = useRoute().params.driverId

const driverWins = ref(null)
const driverData = ref(null)

onMounted( async () => {
    driverWins.value = await getDriverWins(driver)
    driverData.value = await getDriverData(driver)
})

</script>
<template>
    <article>
        <header>
            <h1>Driver</h1>
        </header>
        {{ driverData.givenName }} {{ driverData.familyName }}
        <footer>
            <table>
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>Race Name</th>
                        <th>Constructor</th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(result, idx) in driverWins" :key="`${driver}_${idx}`">
                        <td>{{ result.season }}</td>
                        <td>{{ result.raceName }}</td>
                        <td>{{ result.Results[0].Constructor.name }}</td>
                    </tr>
                </tbody>
            </table>
        </footer>
    </article>

</template>