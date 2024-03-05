<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getDriverWins, getDriverData } from '@/api/drivers'

const driver = useRoute().params.driverId

const driverWins = ref(null)
const driverData = ref(null)

onMounted( async () => {
    driverWins.value = await getDriverWins(driver)
    driverData.value = await getDriverData(driver)
})

</script>
<template>
    <article v-if="driverData && driverWins">
        <header>
            <h1>Driver</h1>
        </header>
        {{ driverData.givenName }} {{ driverData.familyName }}
        <footer v-if="driverWins.length">
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
        <footer v-else>No hay victorias</footer>
    </article>

    <article aria-busy="true" v-else></article>
</template>