import './assets/main.css'

import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js'
import '@material/web/icon/icon.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
