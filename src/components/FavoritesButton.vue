<script setup>
import { favorites } from '@/store/favorites'

const props = defineProps({
    id: String,
    name: String,
    url: String,
    type: String,
})

const favoritesStore = favorites()

favoritesStore.$subscribe((mutation, state) => {
    localStorage.setItem('favoritesStore', JSON.stringify(state))
})

function handleSetFavoriteOnClick() {
    const itemData = {
        name: props.name,
        url: props.url,
    }

    favoritesStore.$patch({[props.type]: {[props.id]: itemData}})
}

function handleRemoveFavoriteOnClick() {
    delete favoritesStore[props.type][props.id]
}

function isFavorite() {
    return !!favoritesStore[props.type][props.id]
}
</script>

<template>
    <span 
        v-if="isFavorite()" 
        @click="handleRemoveFavoriteOnClick"
        data-test="favorite-button"
        class="active"
    >
        ★
    </span>
    <span
        v-else
        @click="handleSetFavoriteOnClick"
        data-test="favorite-button"
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
