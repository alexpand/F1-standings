<script setup>
import { ref, onMounted } from 'vue'
import { getConstructorStandings } from '@/api/getConstructorStandings'

import lang from '@/lang/es' 

const constructorList = ref(null)

onMounted( async () => {
    constructorList.value = await getConstructorStandings()
})

</script>
<template>
    <h1>Constructor Standings</h1>
    <table>
        <thead>
            <tr>
                <th>{{ lang.common_position }}</th>
                <th>Constructor</th>
                <th>Points</th>
                <th>Wins</th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="constructor in constructorList" 
                :key="constructor.Constructor.constructorId"
            >
                <td>{{ constructor.position }}</td>
                <td>
                    <router-link :to="`/constructor/${constructor.Constructor.constructorId}`">{{ constructor.Constructor.name }}</router-link>
                </td>
                <td>{{ constructor.points }}</td>
                <td>{{ constructor.wins }}</td>
            </tr>
        </tbody>
    </table>
</template>