<script setup>
import { ref, onMounted } from 'vue'

import { getConstructorStandings } from '@/api/constructors/getConstructorStandings'
import { constructors } from '@/store'
import updateTitle from '@/composables/pageTitle'

import FavoritesButton from '@/components/FavoritesButton.vue'

import lang from '@/lang'

const constructorsStore = constructors()

const constructorList = ref(null)

function hasConstructors() {
    return !!constructorsStore.constructorList
}

function getConstructors() {
    return getConstructorStandings()
}

async function setConstructors() {
    constructorsStore.constructorList = await getConstructors()
    return constructorsStore.constructorList
}

onMounted( async () => {
    updateTitle(lang.common_constructor_standings)

    constructorList.value = hasConstructors() 
        ? constructorsStore.constructorList 
        : await setConstructors()
})

</script>
<template>
    <h1>{{ lang.common_constructor_standings }}</h1>
    <article v-if="constructorList" class="u-overflow">
        <table>
            <thead>
                <tr>
                    <th class="u-hideMobile">{{ lang.common_position }}</th>
                    <th>{{ lang.common_constructor() }}</th>
                    <th>{{ lang.common_points }}</th>
                    <th>{{ lang.common_wins }}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="constructor in constructorList" 
                    :key="constructor.Constructor.constructorId"
                >
                    <td class="u-hideMobile">{{ constructor.position }}</td>
                    <td>
                        <router-link :to="`/constructor/${constructor.Constructor.constructorId}`">{{ constructor.Constructor.name }}</router-link>
                    </td>
                    <td>{{ constructor.points }}</td>
                    <td>{{ constructor.wins }}</td>
                    <td>
                        <FavoritesButton 
                            :id="constructor.Constructor.constructorId" 
                            :name="constructor.Constructor.name" 
                            :url="`/constructor/${constructor.Constructor.constructorId}`" 
                            type="constructors" 
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    </article>

    <article aria-busy="true" v-else></article>
</template>