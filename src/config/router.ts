import {RouteRecordRaw} from 'vue-router'
import Jxc from '../components/Jxc.vue'
import Frank2  from "../components/Frank2.vue";

export  const routes :RouteRecordRaw[] = [
    {
        path:'/',component:Jxc
    },
    {
        path:'/xxx',component:Frank2
    }
]