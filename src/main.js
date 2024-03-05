import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/router/routes'

import App from '@/App.vue'

import '@/assets/utilities.css'

const state = createPinia()

createApp(App)
    .use(router)
    .use(state)
    .mount('#app')
