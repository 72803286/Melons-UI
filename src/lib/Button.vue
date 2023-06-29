<template>
    <button class="gulu-button" :class="`theme-${props.theme}`" >
        <slot>默认按钮</slot>
    </button>
</template>


<script setup lang="ts">
    const props = defineProps({
        theme:{
            type:String,
            default:'button'
        }
    })

</script>

<style lang="scss" scoped>
div {
    border: 1px solid red;
}
</style>


