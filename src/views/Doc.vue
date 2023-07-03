<template>
    <div class="layout">
      <Topnav calss = 'nav' :toggle-menu-button-visible="true" />
      <div class="content">
        <aside v-if="menuVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro" >介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install" >安装</router-link>
            </li>
            <li>
              <router-link to="/doc/start" >开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <RouterLink to="/doc/switch">Switch组件</RouterLink>
            </li>
            <li>
              <RouterLink to="/doc/button">Button组件</RouterLink>
            </li>
            <li>
              <RouterLink to="/doc/dialog">Dialog组件</RouterLink>
            </li>
            <li>
              <RouterLink to="/doc/tabs">Tabs组件</RouterLink>
            </li>
          </ol>
        </aside>
        <main>
          <RouterView/>
        </main>
      </div>
    </div>
</template>
<script setup lang="ts">
import { Ref, inject } from 'vue';
import Topnav from '../components/Topnav.vue'
const menuVisible = inject<Ref<boolean>>('menuVisible')
</script>

<style lang="scss" scoped>
.router-link-active {
  color: #42b883;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  border-right:1px solid rgba(0, 0, 0, 0.096) ;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
      >a{
        text-decoration: none;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
