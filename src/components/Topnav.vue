<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-melons"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
      <router-link to="/doc">文档</router-link>
    </li>
    </ul>
    <div class="xxx">
      <svg v-if="props.toggleMenuButtonVisible" class="toggleAside icon icon-menu" @click="toggleMenu">
          <use xlink:href="#icon-menu" ></use>
    </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from "vue";
const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
const toggleMenu = () => {
  menuVisible!.value = !menuVisible?.value;
};
const props = defineProps({
  toggleMenuButtonVisible:{
    type:Boolean,
    default:false
  }
})
</script>


<style lang="scss" scoped>
.topnav {
  color: #007974;
  display: flex;
  padding: 16px;
  // position: fixed;
  
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  >.xxx{
    display: flex;
    position: fixed;
    top: 15px;
    left: 15px;
    >svg{
      width:30px;
      height: 30px;
    }
  }

  >.logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
      width:30px;
      height: 30px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
    }
  }


  >.toggleAside {
    width: 32px;
    height: 32px;

    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    .topnav{
      display: flex;
      position:relative;
    }
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggleAside {
      display: inline-block;
    }
  }
}</style>