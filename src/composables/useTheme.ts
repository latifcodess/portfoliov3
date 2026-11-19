import { ref } from 'vue'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const root = document.documentElement

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'dark' || v === 'light' ? v : null
  } catch {
    return null
  }
}

// Valeur initiale déjà posée par le script inline de index.html
const theme = ref<Theme>(root.dataset.theme === 'light' ? 'light' : 'dark')

function apply(next: Theme) {
  theme.value = next
  root.dataset.theme = next
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#F7F7F5' : '#0A0C0D')
}

apply(theme.value)

// Tant que l'utilisateur n'a rien choisi, on suit le réglage du système.
window.matchMedia?.('(prefers-color-scheme: light)').addEventListener('change', (e) => {
  if (!readStored()) apply(e.matches ? 'light' : 'dark')
})

export function useTheme() {
  function toggle() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'
    apply(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* stockage indisponible : le choix vaut pour la session */
    }
  }
  return { theme, toggle }
}
