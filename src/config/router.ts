import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from "../views/Doc.vue";
import SwitchDemo from '../components/SwitchDemo.vue'
import DialogDemo from '../components/DialogDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
import Intro from "../markdown/intro.md"
import Start from "../markdown/get-started.md"
import Install from "../markdown/install.md"


const routes: RouteRecordRaw[] = [
    {
        path: '/', component: Home
    },
    {
        path: '/doc', component: Doc, children: [
            { path: '', redirect:'/doc/intro' },
            { path: 'switch', component: SwitchDemo },
            { path: 'button', component: ButtonDemo },
            { path: 'dialog', component: DialogDemo },
            { path: 'tabs', component: TabsDemo },
            { path: 'intro', component: Intro },
            { path: 'start', component: Start },
            { path: 'install', component: Install },

        ]
    }
]

const history = createWebHashHistory()

export const router = createRouter({
    history,
    routes
})

