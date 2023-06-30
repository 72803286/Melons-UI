<template>
    <div>Dialog示例
        <h1>示例1</h1>
        <Button @click="toggle">toggle</Button>
        <Dialog  v-model:visiable="visiable" :closeOnClickOverlay="true" :okfn="ok" :canclefn="cancle" title="标题">
            <p>hi1</p>
            <p>hi2</p>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
const visiable = ref(false)
const ok = () => {
    console.log('ok');
    return false
}
const cancle = () => {
    console.log('cancle');
}
const toggle=()=>{
    visiable.value = !visiable.value
}
</script> 