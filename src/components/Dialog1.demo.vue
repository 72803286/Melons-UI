<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visiable="visiable" :closeOnClickOverlay="true" :okfn="ok" :canclefn="cancle">
      <template #main>
        <p>hi1</p>
        <p>hi2</p>
      </template>
      <template #title>
        <strong>加粗标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
const visiable = ref(false)
const ok = () => {
  // console.log('ok');
  return false
}
const cancle = () => {
  // console.log('cancle');
}
const toggle = () => {
  visiable.value = !visiable.value
}
</script>
