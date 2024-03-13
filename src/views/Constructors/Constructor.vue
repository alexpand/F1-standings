<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getConstructorData } from '@/api/constructors'

import updateTitle from '@/composables/pageTitle'

import lang from '@/lang'

import BackButton from '@/components/BackButton.vue'

const constructor = useRoute().params.constructorId

const constructorData = ref(null)

onMounted( async () => {
    updateTitle(lang.common_constructor())

    constructorData.value = await getConstructorData(constructor)
})

</script>
<template>
    <div class="header--backbutton">
        <BackButton />
        <h1>{{ lang.common_constructor() }}</h1>
    </div>
    <article>
        <h3>{{ constructor }}</h3>
    </article>
</template>