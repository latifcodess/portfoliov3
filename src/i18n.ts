import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'

export type Locale = 'fr' | 'en'

const STORAGE_KEY = 'lang'

function isLocale(v: unknown): v is Locale {
  return v === 'fr' || v === 'en'
}

// Le script inline de index.html a déjà résolu : localStorage → navigateur (fr sinon en)
const initial: Locale = isLocale(document.documentElement.lang) ? document.documentElement.lang : 'fr'

export const i18n = createI18n({
  legacy: false,
  locale: initial,
  fallbackLocale: 'fr',
  messages: { fr, en },
})

function syncDocument(locale: Locale) {
  const t = i18n.global.t
  document.documentElement.lang = locale
  document.title = t('seo.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('seo.description'))
}

export function setLocale(locale: Locale) {
  i18n.global.locale.value = locale
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    /* stockage indisponible */
  }
  syncDocument(locale)
}

syncDocument(initial)
