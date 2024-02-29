<script setup>
import { defineProps } from 'vue'
import { favorites } from '@/store/favorites'

const props = defineProps({ 
    id: String, 
    name: String, 
    url: String, 
    type: String,
})

const favoritesStore = favorites()

function handleSetFavoriteOnClick() {
    const itemData = {
        name: props.name,
        url: props.url,
    }
    favoritesStore[props.type][props.id] = itemData
    console.log(JSON.stringify(favoritesStore), ' favortiesstore')
    setLocalStore()
}

function handleRemoveFavortieOnClick() {
    delete favoritesStore[props.type][props.id]
    setLocalStore()
}

function isFavorite() {
    return !!favoritesStore[props.type][props.id]
}

function setLocalStore() {
    //TODO: se setea un array vacío
    window.localStorage.setItem(`favoritesStore${props.type}`, JSON.stringify(favoritesStore[props.type]))
}

</script>

<template>
    <span v-if="isFavorite()" @click="handleRemoveFavortieOnClick">★</span>
    <span 
        v-else
        @click="handleSetFavoriteOnClick"
    >
        ☆
    </span>
</template>

<style scoped>

span {
    cursor: pointer;
    font-size: 2em;
}

</style>