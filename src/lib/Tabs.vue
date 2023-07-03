<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav" ref = 'container'>
            <div class="gulu-tabs-nav-item" 
            v-for="(t, index) in titles" :key="index" :ref="el =>{if(el) navItems[index]=el}" @click="selecte(t)" :class="{selected : (t === props.selected)}" > {{ t }} </div>
            <div class="gulu-tabs-nav-indicator" ref = 'indicator'></div>
        </div>
        <div class="gulu-tabs-content" > 
            <component class="gulu-tabs-content-item" v-for="(item, index) in defaults " :key="index" :is="item" v-show="item.props?.title === props.selected "></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tab from '../lib/Tab.vue'
import { useSlots,ref,onMounted,onUpdated } from 'vue';
const slots = useSlots()
const defaults = slots.default?.()
const navItems = ref<any>([])
const indicator = ref<any>(null)
const container = ref<any>(null)
defaults?.forEach(child => {
    if (child.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab')
    }
}
);
const titles = defaults?.map(tags => tags.props?.title)
const props = defineProps({
    selected:String
})

const emit = defineEmits(["update:selected"])
const selecte = (title:String) =>{
    emit("update:selected",title)
}
const x = ()=>{
  const divs = navItems.value
  const result = divs.filter((e:HTMLDivElement)=>{
    return e.classList.contains('selected')
  })[0]
  const { width } = result.getBoundingClientRect()
  indicator.value.style.width = width +'px'
  const {left:navleft} = container.value.getBoundingClientRect()
  const {left:navitemsleft} = result.getBoundingClientRect()
  const left = navitemsleft-navleft
  indicator.value.style.left = left +'px'
}
onMounted(x),
onUpdated(x)


</script>


<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
