<script setup>
import { ref, onMounted } from 'vue'

import { getDriversStandings } from '@/api/getDriversStandings'
import { drivers, favorites } from '@/store'

import FavoritesButton from '@/components/FavoritesButton.vue'

import lang from '@/lang'

const driversStore = drivers()
const favoritesStore = favorites()

const driverList = ref(null)

function hasDrivers() {
    return !!driversStore.driverList
}

function getDrivers() {
    return getDriversStandings()
}

async function setDrivers() {
    driversStore.driverList = await getDrivers()
    return driversStore.driverList
}

onMounted( async () => {
    driverList.value = hasDrivers() 
        ? driversStore.driverList 
        : await setDrivers()
})

</script>
<template>
    <h1>Driver Standings</h1>
    <table>
        <thead>
            <tr>
                <th>{{ lang.common_position }}</th>
                <th>{{ lang.common_driver }}</th>
                <th>{{ lang.common_constructor }}</th>
                <th>{{ lang.common_points }}</th>
                <th>{{ lang.common_wins }}</th>
                <th></th>
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
                <td>
                    <FavoritesButton 
                        :id="driver.Driver.driverId" 
                        :name="`${driver.Driver.givenName} ${driver.Driver.familyName}`" 
                        :url="`/driver/${driver.Driver.driverId}`" 
                        type="drivers" 
                    />
                </td>
            </tr>
        </tbody>
    </table>
</template>