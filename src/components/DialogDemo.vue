<template>
    <div>
        <h1>Button示例</h1>
        <Demo :component="Dialog1Demo" />
        <Demo :component="Dialog2Demo" />
    </div>
</template>

<script setup lang="ts">
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Demo from '../components/Demo.vue'
</script> 