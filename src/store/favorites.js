import { ref } from 'vue'
import { defineStore } from 'pinia'

export const favorites = defineStore('favorites', () => {
    const constructors = ref([])
    const drivers = ref([])
    const circuits = ref([])
    
    return { constructors, drivers, circuits }
})