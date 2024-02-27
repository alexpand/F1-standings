import { ref } from 'vue'
import { defineStore } from 'pinia'

export const favorites = defineStore('favorites', () => {
    const constructors = ref([])
    
    return { constructors }
})