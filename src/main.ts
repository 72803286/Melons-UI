import './index.scss'
import './lib/gulu.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './config/router'
import 'github-markdown-css'




const app = createApp(App)
app.use(router)
app.mount('#app')
