<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getConstructorDrivers, getConstructorData } from '@/api/constructors'

import updateTitle from '@/composables/pageTitle'

import lang from '@/lang'

import BackButton from '@/components/BackButton.vue'

const constructor = useRoute().params.constructorId

const constructorDrivers = ref(null)
const constructorData = ref(null)

onMounted( async () => {
    updateTitle(lang.common_constructor())

    constructorDrivers.value = await getConstructorDrivers(constructor)
    constructorData.value = await getConstructorData(constructor)
})

</script>
<template>
    <div class="header--backbutton">
        <BackButton />
        <h1>{{ lang.common_constructor() }}</h1>
    </div>
    <article>
        <h3>{{ constructorData?.name }}</h3>
        <article v-if="constructorDrivers" class="u-overflow">
            <table>
                <thead>
                    <tr>
                        <td>{{ lang.common_driver() }}</td>
                        <td>{{ lang.common_number }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="driver in constructorDrivers"
                        :key="driver.driverId"
                    >
                        <td>
                            <router-link :to="`/driver/${driver.driverId}`">{{ `${driver.givenName} ${driver.familyName}` }}</router-link>
                        </td>
                        <td>{{ driver.permanentNumber }}</td>
                    </tr>
                </tbody>
            </table>
        </article>

        <article aria-busy="true" v-else></article>
    </article>
</template>