<script setup>
import { onClickOutside, useWindowSize } from '@vueuse/core'
import { ref, watch } from 'vue'
import AppSideBar from '@/components/AppSideBar.vue'
import AppHeader from '@/components/AppHeader.vue'
import { useDefaultStore } from '@/stores/default'

const defaultStore = useDefaultStore()

const { width: windowWidth } = useWindowSize()
watch(windowWidth, (val) => {
  if (val < 768)
    defaultStore.sidebarVisible = false
})

const sidebarRef = ref(null)
onClickOutside(sidebarRef, () => {
  if (windowWidth.value < 768)
    defaultStore.sidebarVisible = false
})
</script>

<template>
  <el-container class="default-layout">
    <el-aside
      ref="sidebarRef"
      class="default-layout-sidebar"
      :class="{ 'sidebar-hide': !defaultStore.sidebarVisible }"
    >
      <AppSideBar />
    </el-aside>
    <el-container
      class="default-layout-container"
      :class="{ 'container-expand': !defaultStore.sidebarVisible }"
    >
      <el-header class="default-layout-header">
        <AppHeader />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  --app-sidebar-width: 250px;
  .default-layout-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    width: var(--app-sidebar-width);
    height: 100vh;
    transition: margin-left 0.3s;
  }
  .sidebar-hide {
    margin-left: calc(var(--app-sidebar-width) * -1);
    transition: margin-left 0.3s;
  }
  .default-layout-container {
    margin-left: 250px;
    transition: margin-left 0.3s;
    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
  }
  .container-expand {
    margin-left: 0;
    transition: margin-left 0.3s;
  }
  .default-layout-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #ffffff;
    padding: 0;
    height: fit-content;
  }
}
</style>
