import { ref } from 'vue'
import { defineStore } from 'pinia'

export const favorites = defineStore('favorites', () => {
    const favoritesStore = JSON.parse(localStorage.getItem('favoritesStore'))
    const constructors = ref(favoritesStore?.constructors || [])
    const drivers = ref(favoritesStore?.drivers || [])
    const circuits = ref(favoritesStore?.circuits || [])

    return { constructors, drivers, circuits }
})
