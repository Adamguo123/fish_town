import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import fastClick from 'fastclick'
import Home from './views/Home/Home.vue';
import './assets/styles/reset.css'
import './assets/styles/border.css'
import { createWebHistory } from 'vue-router'

// axios.get('https://www.play1717.com/metrix/fish_town?p=bonus&s=0&r=2').then(res => {
//   console.log(res)
// })

//解决移动端点击延迟 300ms 的问题
fastClick.attach(document.body)

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
