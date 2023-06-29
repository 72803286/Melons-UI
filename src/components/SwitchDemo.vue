<template>
    <div>
        <Switch v-model="bool" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
const bool = ref(true)

</script>