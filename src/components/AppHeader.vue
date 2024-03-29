<script setup>
import IconMenu from '@/components/icons/IconMenu.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import { useDefaultStore } from '@/stores/default'

const defaultStore = useDefaultStore()
</script>

<template>
  <el-row class="app-header">
    <el-col class="header-col">
      <el-icon
        :size="24"
        class="header-icon"
        @click="defaultStore.toggleSidebar"
      >
        <IconMenu />
      </el-icon>
    </el-col>

    <el-divider class="header-divider" />
    <el-col class="header-col">
      <AppBreadcrumb />
    </el-col>
    <el-divider class="header-divider" />
  </el-row>
</template>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 100%;
  align-content: center;
  .header-col {
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .header-icon {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
  .header-divider {
    margin: 0;
  }
}
</style>
