<template>
 <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
        <component  :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button @click="toggle">查看代码</Button>
    </div>
    <div class="demo-code">
      <pre  v-if="visiable" class="language-html" v-html="html"></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed ,ref} from 'vue';
import  'prismjs';
import "prismjs/themes/prism-okaidia.css"
import Button from '../lib/Button.vue'
const Prism = (window as any).Prism
const props = defineProps({
	component:{
        type:Object,
        default:{}
    }
});
const html = computed(() =>{
  return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
})
const visiable = ref(false)
const toggle = () =>{
  visiable.value = !visiable.value
}
</script>


<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>