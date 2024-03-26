<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import lang from '@/lang'

import { getRaceResults } from '@/api/races/getRaceResults'
import updateTitle from '@/composables/pageTitle'

import BackButton from '@/components/BackButton.vue'

const LABELS = {
    last: 'last',
}

const raceResults = ref(null)

const round = useRoute().params.round || LABELS.last

onMounted( async () => {
    updateTitle(lang.common_results)

    raceResults.value = await getRaceResults(round)
})
</script>
<template>
    <div class="header--backbutton">
        <BackButton v-if="round !== LABELS.last" />
        <h1>{{ lang.common_results }}</h1>
    </div>
    <article v-if="raceResults" class="u-overflow">
        <hgroup>
            <h3 data-test="race-name">{{ raceResults.raceName }}</h3>
            <h3 data-test="race-date">{{ raceResults.date }}</h3>
        </hgroup>
        <table>
            <thead>
                <tr>
                    <th class="u-hideMobile">{{ lang.common_position }}</th>
                    <th class="u-hideMobile">Nº</th>
                    <th>{{ lang.common_driver() }}</th>
                    <th>{{ lang.common_constructor() }}</th>
                    <th class="u-hideMobile">{{ lang.common_laps }}</th>
                    <th>{{ lang.common_grid }}</th>
                    <th>{{ lang.common_time }}</th>
                    <th class="u-hideMobile">{{ lang.common_status }}</th>
                    <th>{{ lang.common_points }}</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="race in raceResults.Results"
                    :key="race.position"
                >
                    <td class="u-hideMobile">{{ race.position }}</td>
                    <td class="u-hideMobile">{{ race.number }}</td>
                    <td>
                        <router-link :to="`/driver/${race.Driver.driverId}`" data-test="driver-lead">{{ `${race.Driver.givenName} ${race.Driver.familyName}` }}</router-link>
                    </td>
                    <td>
                        <img 
                            :src="`/src/assets/constructors/logos/${race.Constructor.constructorId}.png`" 
                            :alt="`${race.Constructor.name} logo`"
                            class="logo-list"
                        >
                        <router-link :to="`/constructor/${race.Constructor.constructorId}`" data-test="constructor-lead">{{ race.Constructor.name }}</router-link>
                    </td>
                    <td class="u-hideMobile">{{ race.laps }}</td>
                    <td>{{ race.grid }}</td>
                    <td>{{ race.Time?.time }}</td>
                    <td class="u-hideMobile">{{ race.status }}</td>
                    <td>{{ race.points }}</td>
                </tr>
            </tbody>
        </table>
    </article>

    <article aria-busy="true" v-else></article>
</template>