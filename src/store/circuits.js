import { ref } from 'vue'
import { defineStore } from 'pinia'

export const circuits = defineStore('circuits', () => {
    const circuitsList = ref(null)
    
    return { circuitsList }
})