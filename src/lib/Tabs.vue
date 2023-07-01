<template>
    <div>
        <component v-for="item in defaults " :is="item"></component>
    </div>
</template>

<script setup lang="ts">
import Tab from '../lib/Tab.vue'
import { useSlots } from 'vue';
    const slots = useSlots()
    const defaults = slots.default?.()
    defaults?.forEach(child => {
        if(child.type !== Tab){
            throw new Error('Tabs子标签必须是Tab')
        }}      
    );
    
</script>