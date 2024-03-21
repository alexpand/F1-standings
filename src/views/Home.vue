<script setup>
import { ref, onMounted } from 'vue'

import { getDriversStandings } from '@/api/drivers/getDriversStandings'
import { getConstructorStandings } from '@/api/constructors/getConstructorStandings'
import { getCircuits } from '@/api/circuits/getCircuits'

import lang from '@/lang'

const driverList = ref(null)
const constructorList = ref(null)
const circuitList = ref(null)

onMounted( async () => {
    driverList.value = await getDriversStandings()
    constructorList.value = await getConstructorStandings()
    circuitList.value = await getCircuits()
})

</script>

<template>
    <h1>{{ lang.common_home }}</h1>
    <article>
        <h2>{{ lang.common_driver(2) }}</h2>
        <article v-if="driverList" class="u-overflow">
            <table>
                <tbody>
                    <tr
                        v-for="driver in driverList.slice(0, 3)"
                        :key="driver.Driver.driverId"
                    >
                        <td>
                            <router-link data-test="driver-lead" :to="`/driver/${driver.Driver.driverId}`">{{ `${driver.Driver.givenName} ${driver.Driver.familyName}` }}</router-link>
                        </td>
                        <td>{{ driver.points }}</td>
                    </tr>
                </tbody>
            </table>
        </article>
    </article>
    <article>
        <h2>{{ lang.common_constructor(2) }}</h2>
        <article v-if="constructorList" class="u-overflow">
            <table>
                <tbody>
                    <tr
                        v-for="constructor in constructorList.slice(0, 3)"
                        :key="constructor.Constructor.constructorId"
                    >
                        <td>
                            <router-link :to="`/constructor/${constructor.Constructor.constructorId}`">{{ constructor.Constructor.name }}</router-link>
                        </td>
                        <td>{{ constructor.points }}</td>
                    </tr>
                </tbody>
            </table>
        </article>
    </article>
    <article>
        <h2>{{ lang.common_circuit(2) }}</h2>
        <article v-if="circuitList" class="u-overflow">
            <table>
                <tbody>
                    <tr
                        v-for="circuit in circuitList.slice(0, 3)"
                        :key="circuit.circuitId"
                    >
                        <td>
                            <a :href="circuit.url">{{ circuit.circuitName }}</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>
    </article>
</template>