<script setup>
import { useRoute } from 'vue-router'

const constructor = useRoute().params.constructorId
</script>
<template>
    <h1>Constructor</h1>
    <h3>{{ constructor }}</h3>
</template>