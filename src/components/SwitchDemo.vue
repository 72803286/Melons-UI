<template>
    <div>
        <Switch v-model="y" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
const y = ref(true)

</script>