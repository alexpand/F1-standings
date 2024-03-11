<script setup>
import { useRoute } from 'vue-router'

import lang from '@/lang'

import BackButton from '@/components/BackButton.vue'

const constructor = useRoute().params.constructorId
</script>
<template>
    <BackButton />
    <h1>{{ lang.common_constructor }}</h1>
    <article>
        <h3>{{ constructor }}</h3>
    </article>
</template>