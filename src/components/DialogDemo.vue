<template>
    <div>Dialog示例
        <h1>示例1</h1>
        <Button @click="visiable=!visiable">toggle</Button>
       <Dialog :visiable="visiable" ></Dialog>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
const visiable = ref(false)

</script>