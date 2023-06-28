import { createApp } from 'vue'
import App from './App.vue'
import {routes} from './config/router'
import './index.scss'
import { createWebHashHistory,createRouter } from "vue-router";


const history = createWebHashHistory()
const router = createRouter({
    history,
    routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')
