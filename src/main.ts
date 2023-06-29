import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { router } from './config/router'

const app = createApp(App)
app.use(router)
app.mount('#app')
