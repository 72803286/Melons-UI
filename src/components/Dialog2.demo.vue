<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '../lib/Button.vue'
import { createDialog } from '../lib/createDialog'
const ok = () => {
  // console.log('ok');
  return false
}
const cancle = () => {
  // console.log('cancle');
}
const showDialog = () => {
  createDialog({
    title: '标题1',
    content: '你好1',
    ok,
    cancle,
  })
}
</script>
