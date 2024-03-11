<script setup>
import { ref, onMounted } from 'vue'

import lang from '@/lang'

import { getDriversStandings } from '@/api/drivers/getDriversStandings'
import { drivers } from '@/store'

import FavoritesButton from '@/components/FavoritesButton.vue'


const driversStore = drivers()

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
    <h1>{{ lang.common_driver_standings }}</h1>
    <article v-if="driverList" class="u-overflow">
        <table v-if="driverList.length">
            <thead>
                <tr>
                    <th><span class="u-hideMobile">{{ lang.common_position }}</span></th>
                    <th>{{ lang.common_driver }}</th>
                    <th>{{ lang.common_constructor }}</th>
                    <th>{{ lang.common_points }}</th>
                    <th class="u-hideMobile">{{ lang.common_wins }}</th>
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
                    <td>
                        <router-link :to="`/constructor/${driver.Constructors[0].constructorId}`">{{ driver.Constructors[0].name }}</router-link>
                    </td>
                    <td>{{ driver.points }}</td>
                    <td class="u-hideMobile">{{ driver.wins }}</td>
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
        
        <article v-else>No hay resultados</article>
    </article>

    <article aria-busy="true" v-else></article>
</template>