<template>
    <div>Button示例</div>
    <h1>示例1</h1>
    <div>
       <Button  @click="onClick" 
            @focus="onClick" 
            @mouseover="onClick">
        示例1按钮</Button>
    </div>
</template>

<script setup lang="ts">
import Button from "../lib/Button.vue"
const onClick = () => {
    console.log('hi')    
}
</script>

