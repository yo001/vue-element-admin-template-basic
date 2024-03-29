<script setup>
import AppSidebarNav from '@/components/AppSidebarNav.vue'
</script>

<template>
  <div class="app-sidebar">
    <el-scrollbar>
      <div class="logo">
        <img
          src="@/assets/logo.svg"
          alt="Vue"
        >
      </div>
      <AppSidebarNav />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.app-sidebar {
  background-color: var(--el-bg-color);
  height: 100%;
  border-right: solid 1px var(--el-menu-border-color);
  :deep(.el-menu) {
    border-right: none;
  }
  .logo {
    display: flex;
    justify-content: center;
    height: 50px;
    img {
      height: 100%;
    }
  }
}
</style>
