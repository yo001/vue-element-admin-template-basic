import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', () => {
  const sidebarVisible = ref(window.innerWidth > 768)
  const toggleSidebar = () => {
    sidebarVisible.value = !sidebarVisible.value
  }

  return { sidebarVisible, toggleSidebar }
})
