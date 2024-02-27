import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Driver from '@/views/Driver.vue'
import DriverStandings from '@/views/DriverStandings.vue'
import Results from '@/views/Results.vue'
import Favorites from '@/views/Favorites.vue'
import Circuit from '@/views/Circuit.vue'
import Calendar from '@/views/Calendar.vue'
import Constructor from '@/views/Constructor.vue'
import ConstructorStandings from '@/views/ConstructorStandings.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/constructorstandings', name: 'ConstructorStandings', component: ConstructorStandings},
        {path: '/constructor/:constructorId', name: 'Constructor', component: Constructor},
        {path: '/driver/:driverId', name: 'Driver', component: Driver},
        {path: '/driverstandings', name: 'DriverStandings', component: DriverStandings},
        {path: '/results', name: 'Results', component: Results},
        {path: '/favorites', name: 'Favorites', component: Favorites},
        {path: '/circuit', name: 'Circuit', component: Circuit},
        {path: '/calendar', name: 'Calendar', component: Calendar},
    ]
})