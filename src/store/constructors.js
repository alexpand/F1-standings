import { ref } from 'vue'
import { defineStore } from 'pinia'

export const constructors = defineStore('constructors', () => {
    const constructorList = ref(null)
    
    return { constructorList }
})