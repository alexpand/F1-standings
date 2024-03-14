<script setup>
import { ref, onMounted } from 'vue'
import { getSchedule, getRoundResults } from '@/api/schedules'

import updateTitle from '@/composables/pageTitle'

import lang from '@/lang'

const schedule = ref(null)
const roundResults = ref(null)

onMounted( async () => {
    updateTitle(lang.common_calendar)

    schedule.value = await getSchedule()
    roundResults.value = await getRoundResults()
})

</script>
<template>
    <h1>{{ lang.common_calendar }}</h1>
    <article v-if="schedule && roundResults" class="u-overflow">
        <table>
            <thead>
                <tr>
                    <th class="u-hideMobile">{{ lang.common_round }}</th>
                    <th>{{ lang.common_race_name }}</th>
                    <th>{{ lang.common_date }}</th>
                    <th class="u-hideMobile">{{ lang.common_time }}</th>
                    <th>{{ lang.common_sprint }}</th>
                    <th>{{ lang.common_circuit() }}</th>
                    <th>{{ lang.common_information }}</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(race, index) in schedule"
                    :key="race.raceName + index"
                >
                    <td class="u-hideMobile">{{ race.round }}</td>
                    <td>{{ race.raceName }}</td>
                    <td>{{ race.date }}</td>
                    <td class="u-hideMobile">{{ race.time }}</td>
                    <td>{{ race.Sprint?.date }}</td>
                    <td>{{ race.Circuit.circuitName }}</td>
                    <td>
                        <router-link
                            v-if="roundResults[index]"
                            :to="`/results/${race.round}`"
                        >
                            {{ lang.common_results }}
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </article>

    <article aria-busy="true" v-else></article>
</template>