import {RouteRecordRaw} from 'vue-router'
import Home from '../views/home.vue'
import Doc  from "../views/doc.vue";

export  const routes :RouteRecordRaw[] = [
    {
        path:'/',component:Home
    },
    {
        path:'/doc',component:Doc
    }
]