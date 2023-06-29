<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import {router} from './config/router'
const width = document.documentElement.clientWidth

const menuVisible = ref(width <= 500 ? false : true)
provide('menuVisible', menuVisible)
router.afterEach(() => {
  if(width <= 500){
    menuVisible.value = !menuVisible.value
  }
})
</script>

