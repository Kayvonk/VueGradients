import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(null)
  function handleTheme(newTheme) {
    return
  }

  return { theme, handleTheme }
})
