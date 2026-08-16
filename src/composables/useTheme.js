import { ref, onMounted } from 'vue'

const currentTheme = ref('dark')

export function useTheme() {
  const setTheme = (theme) => {
    currentTheme.value = theme
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('syntax-theme', theme)
    }
  }

  const toggleTheme = () => {
    setTheme(currentTheme.value === 'dark' ? 'light' : 'dark')
  }

  const initTheme = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('syntax-theme')
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved)
      } else {
        // Default to dark mode
        setTheme('dark')
      }
    }
  }

  return {
    theme: currentTheme,
    setTheme,
    toggleTheme,
    initTheme
  }
}
