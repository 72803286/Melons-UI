<template>
    <div>
        <button v-bind="$attrs">
        <slot>默认按钮</slot>
    </button>
    </div>   
</template>

<script>
export default {
    inheritAttrs:false
}
</script>

<script setup lang="ts"></script>

<style lang="scss" scoped>

div{
    border:1px solid red;
}
</style>


