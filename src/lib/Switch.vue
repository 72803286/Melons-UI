<template>
  <div>
    <button @click="toggle" :class="{ check:props.value }"><span></span></button>
    <div>{{ props.value }}</div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  value:boolean
}
const props =defineProps<Props>()

const emit = defineEmits(['input'])

const toggle = () => {
  emit('input',!props.value)
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
  height: $h;
  width: $h*2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition:left .25s;
}

button.check {
  background: blue;

  >span {
    left:calc(100% - #{$h2} - 2px);
  }
}
button:focus {
  outline:none;
}
</style>