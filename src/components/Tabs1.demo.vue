<demo>常规使用</demo>
<template>
    <Tabs v-model:selected="currentTitle">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
    </Tabs>
</template>

<script setup lang="ts">
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
import { ref } from 'vue';
const currentTitle = ref('导航1')
</script>