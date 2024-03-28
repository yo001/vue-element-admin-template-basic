<template>
  <div class="app-sidebar">
    <div class="logo">
      <img
        src="@/assets/logo.svg"
        alt="Vue"
      >
    </div>
    <AppSidebarNav />
  </div>
</template>

<script setup>
import AppSidebarNav from '@/components/AppSidebarNav.vue'
</script>

<style lang="scss" scoped>
.app-sidebar {
  background-color: var(--el-color-success);
  height: 100%;
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