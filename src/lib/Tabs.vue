<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <div class="gulu-tabs-nav-item" 
            v-for="(t, index) in titles" :key="index" @click="selecte(t)" :class="{selected : (t === props.selected)}" > {{ t }} </div>
        </div>
        <div class="gulu-tabs-content" > 
            <component class="gulu-tabs-content-item" v-for="(item, index) in defaults " :key="index" :is="item" v-show="item.props?.title === props.selected "></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tab from '../lib/Tab.vue'
import { useSlots } from 'vue';
const slots = useSlots()
const defaults = slots.default?.()
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
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
