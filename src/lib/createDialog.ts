import { createApp,h } from "vue"
import Dialog from "../lib/Dialog.vue"
export  const createDialog=(options:any) =>{
    
   const {title,content,ok,cancle,closeOnClickOverlay} = options
   const div = document.createElement('div')
   document.body.append(div)
    const app = createApp({
        render:()=>{
            return h(Dialog,
                {
                    visiable:true,
                    'onUpdate:visiable':(newVisiable)=>{
                        if(!newVisiable){
                            app.unmount()
                            div.remove()
                        }
                    },
                    okfn:ok,
                    canclefn:cancle,
                    closeOnClickOverlay              
                },
                {
                title:()=>title,
                main:()=>content
              }
            )
        }
    })
    app.mount(div)
}