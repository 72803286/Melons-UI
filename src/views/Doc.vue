<template>
    <div>
        <Topnav />
        <div class="content">
            <aside v-if="menuVisible">
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
              <RouterView></RouterView>
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
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
.content {
  display:flex;
  >main{
    // flex: 1;
  }
}
</style>
