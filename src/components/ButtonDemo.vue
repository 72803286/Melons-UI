<template>
    <div>Button示例</div>
    <h1>示例1</h1>
    <div>
        <Button>{{ msg }}</Button>
        <Button theme="button">{{ msg }}</Button>
        <Button theme="link">{{ msg }}</Button>
        <Button theme="text">{{ msg }}</Button>
    </div>
    <h1>示例2</h1>
    <div>
        <div>
            <Button size="big">大大大</Button>
            <Button>普普通</Button>
            <Button size="small">小小小</Button>
        </div>
        <div>
            <Button theme="link" size="big">大大大</Button>
            <Button theme="link">普普通</Button>
            <Button theme="link" size="small">小小小</Button>
        </div>
        <div>
            <Button theme="text" size="big" >大大大</Button>
            <Button theme="text">普普通</Button>
            <Button theme="text" size="small" >小小小</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from "../lib/Button.vue"
const msg = '按钮'

</script>

