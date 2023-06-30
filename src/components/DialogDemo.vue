<template>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visiable="visiable" :closeOnClickOverlay="true" :okfn="ok" :canclefn="cancle">
        <template #main>
            <p>hi1</p>
            <p>hi2</p>
        </template>
        <template #title>
            <strong>加粗标题</strong>
        </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {createDialog} from '../lib/createDialog'
const visiable = ref(false)
const ok = () => {
    console.log('ok');
    return false
}
const cancle = () => {
    console.log('cancle');
}
const toggle = () => {
    visiable.value = !visiable.value
}
const showDialog=() =>{
    createDialog({
        title:'标题1',
        content:'你好1',
        ok,
        cancle,
    })
}
</script> 