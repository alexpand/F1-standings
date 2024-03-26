<script setup>
import { ref, onMounted, computed } from 'vue'

import { getDriversStandings } from '@/api/drivers/getDriversStandings'
import { getConstructorStandings } from '@/api/constructors/getConstructorStandings'
import { getSchedule } from '@/api/schedules'

import lang from '@/lang'

const driverList = ref(null)
const constructorList = ref(null)
const calendar = ref(null)

const nextRaces = computed( () => {
    const today = Date.now()
    const filteredRaces = calendar.value.filter( (race) => {
        const raceDate = new Date(race.date)
        return raceDate > today
    })
    return filteredRaces.slice(0, 3)
})

onMounted( async () => {
    driverList.value = await getDriversStandings()
    constructorList.value = await getConstructorStandings()
    calendar.value = await getSchedule()
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
                        <td class="u-align--right">{{ driver.points }}</td>
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
                            <img 
                                :src="`/src/assets/constructors/logos/${constructor.Constructor.constructorId}.png`" 
                                :alt="`${constructor.Constructor.name} logo`"
                                class="logo-list"
                            >
                            <router-link data-test="constructor-lead" :to="`/constructor/${constructor.Constructor.constructorId}`">{{ constructor.Constructor.name }}</router-link>
                        </td>
                        <td class="u-align--right">{{ constructor.points }}</td>
                    </tr>
                </tbody>
            </table>
        </article>
    </article>
    <article>
        <h2>{{ lang.common_calendar }}</h2>
        <h4>{{ lang.common_next_races }}</h4>
        <article v-if="calendar" class="u-overflow">
            <table>
                <tbody>
                    <tr
                        v-for="race in nextRaces"
                        :key="`${race.raceName + race.date}`"
                        data-test="next-races"
                    >
                        <td data-test="=race-name"> {{race.raceName}} </td>
                        <td class="u-align--right"> {{race.date}} </td>
                    </tr>
                </tbody>
            </table>
        </article>
    </article>
</template>