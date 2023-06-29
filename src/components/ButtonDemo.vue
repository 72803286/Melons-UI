<template>
    <div>Button示例</div>
    <h1>示例1</h1>
    <div>
       <Button  >{{ msg }}</Button>
       <Button theme = "button" >{{ msg }}</Button>
       <Button theme = "link" >{{ msg }}</Button>
       <Button theme = "text" >{{ msg }}</Button>
    </div>
</template>

<script setup lang="ts">
import Button from "../lib/Button.vue"
const msg = '示例1按钮'

</script>

