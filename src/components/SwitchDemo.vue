<template>
    <div>
        <Switch :value="y" @input="y = $event" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'
const y = ref(true)

</script>