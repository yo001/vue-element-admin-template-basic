import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', () => {
  const sidebarVisible = ref(true)
  const toggleSidebar = () => {
    sidebarVisible.value = !sidebarVisible.value
  }

  return { sidebarVisible, toggleSidebar }
})
