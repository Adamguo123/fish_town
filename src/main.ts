import { createApp } from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

fastClick.attach(document.body)

createApp(App).mount('#app')
