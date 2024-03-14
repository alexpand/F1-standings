<script setup>
import { ref, onMounted } from 'vue'

import { getDriversStandings } from '@/api/drivers/getDriversStandings'
// import { getConstructorsStandings } from '@/api/constructors/getConstructorsStandings'
// import { getCircuits } from '@/api/circuits/getCircuits'

import lang from '@/lang'

const driverList = ref(null)
// const constructorList = ref(null)
// const driverList = ref(null)

onMounted( async () => {
    driverList.value = await getDriversStandings()
    // driverList.value = await getDriversStandings()
    // driverList.value = await getDriversStandings()
})

</script>

<template>
    <h1>{{ lang.common_home }}</h1>
    <article>
        <h2>{{ lang.common_drivers }}</h2>
        <article v-if="driverList" class="u-overflow">
            <table>
                <tbody>
                    <tr
                        v-for="driver in driverList.slice(0, 3)"
                        :key="driver.Driver.driverId"
                    >
                        <td>
                            <router-link :to="`/driver/${driver.Driver.driverId}`">{{ `${driver.Driver.givenName} ${driver.Driver.familyName}` }}</router-link>
                        </td>
                        <td>{{ driver.points }}</td>
                    </tr>
                </tbody>
            </table>
        </article>
    </article>
    <article>
        <h2>Constructor</h2>
        <!-- <ul v-if="Object.keys(favoritesStore.drivers).length">
            <li v-for="driver in favoritesStore.drivers">
                <router-link :to="driver.url">{{ driver.name }}</router-link>
            </li>
        </ul> -->
        <!-- <p v-else>{{ lang.common_no_drivers }}</p> -->
    </article>
    <article>
        <h2>CIrcuit</h2>
        <!-- <ul v-if="Object.keys(favoritesStore.drivers).length">
            <li v-for="driver in favoritesStore.drivers">
                <router-link :to="driver.url">{{ driver.name }}</router-link>
            </li>
        </ul> -->
        <!-- <p v-else>{{ lang.common_no_drivers }}</p> -->
    </article>
</template>