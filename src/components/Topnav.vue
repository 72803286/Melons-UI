<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-melons"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from "vue";
const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
const toggleMenu = () => {
  menuVisible!.value = !menuVisible?.value;
};
</script>


<style lang="scss" scoped>
.topnav {
  color: #007974;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  >.logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
      width:40px;
      height: 40px;
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
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
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