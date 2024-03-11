<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import lang from '@/lang'

import { getDriverWins, getDriverData } from '@/api/drivers'

import BackButton from '@/components/BackButton.vue'

const driver = useRoute().params.driverId

const driverWins = ref(null)
const driverData = ref(null)

onMounted( async () => {
    driverWins.value = await getDriverWins(driver)
    driverData.value = await getDriverData(driver)
})

</script>
<template>
    <BackButton />
    <article v-if="driverData && driverWins" class="u-overflow">
        <header>
            <h1>{{ lang.common_driver }}</h1>
        </header>
        {{ driverData.givenName }} {{ driverData.familyName }}
        <footer v-if="driverWins.length && false">
            <table>
                <thead>
                    <tr>
                        <th>{{ lang.common_season }}</th>
                        <th>{{ lang.common_race_name }}</th>
                        <th>{{ lang.common_constructor }}</th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(result, idx) in driverWins" :key="`${driver}_${idx}`">
                        <td>{{ result.season }}</td>
                        <td>{{ result.raceName }}</td>
                        <td>
                            <router-link :to="`/constructor/${result.Results[0].Constructor.constructorId}`">{{ result.Results[0].Constructor.name }}</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </footer>
        <footer v-else>{{ lang.common_no_wins }}</footer>
    </article>

    <article aria-busy="true" v-else></article>
</template>