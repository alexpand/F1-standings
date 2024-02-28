import { ref } from 'vue'
import { defineStore } from 'pinia'

export const drivers = defineStore('drivers', () => {
    const driversList = ref(null)
    
    return { driversList }
})