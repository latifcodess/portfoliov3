<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'
import { useTheme } from '@/composables/useTheme'
import { hrefOr, site } from '@/data/site'
import AppIcon from './icons/AppIcon.vue'

const { t, locale } = useI18n()
const { theme, toggle: toggleTheme } = useTheme()

const nav = [
  { id: 'projets', num: '01', key: 'nav.projects' },
  { id: 'stack', num: '02', key: 'nav.stack' },
  { id: 'parcours', num: '03', key: 'nav.path' },
  { id: 'contact', num: '04', key: 'nav.contact' },
] as const

const menuOpen = ref(false)
const burger = ref<HTMLButtonElement | null>(null)

function toggleLang() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}

function closeMenu(returnFocus = false) {
  menuOpen.value = false
  if (returnFocus) burger.value?.focus()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && menuOpen.value) closeMenu(true)
}

const desktop = window.matchMedia('(min-width: 861px)')
const onBreakpoint = (e: MediaQueryListEvent) => {
  if (e.matches) closeMenu()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  desktop.addEventListener('change', onBreakpoint)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  desktop.removeEventListener('change', onBreakpoint)
})

watch(menuOpen, (open) => document.body.classList.toggle('menu-open', open))
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#top" class="logo">
        <span class="logo__mark" aria-hidden="true"></span>
        <span>latif<span class="logo__tld">.codes</span></span>
      </a>

      <nav class="nav" :aria-label="t('nav.label')">
        <ul class="nav__list">
          <li v-for="item in nav" :key="item.id">
            <a :href="`#${item.id}`" class="nav__link">
              <span class="nav__num">{{ item.num }}</span> {{ t(item.key) }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="actions">
        <button type="button" class="btn lang" @click="toggleLang">
          <span aria-hidden="true">
            <span :class="{ 'lang--active': locale === 'fr' }">FR</span>
            <span class="lang__sep">/</span>
            <span :class="{ 'lang--active': locale === 'en' }">EN</span>
          </span>
          <span class="sr-only">{{ t('header.switchLang') }}</span>
        </button>

        <button
          type="button"
          class="btn btn--square"
          :aria-label="theme === 'dark' ? t('header.toLight') : t('header.toDark')"
          @click="toggleTheme"
        >
          <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>

        <!-- TODO: lien du CV à renseigner dans src/data/site.ts -->
        <a class="btn cv" :href="hrefOr(site.cv)" :aria-label="t('header.cvLabel')">
          <span class="mono">CV.pdf</span>
          <AppIcon name="download" :size="14" />
        </a>

        <button
          ref="burger"
          type="button"
          class="btn btn--square burger"
          aria-controls="mobile-menu"
          :aria-expanded="menuOpen"
          :aria-label="menuOpen ? t('header.closeMenu') : t('header.openMenu')"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="18" />
        </button>
      </div>
    </div>

    <div v-show="menuOpen" id="mobile-menu" class="mobile-menu">
      <nav class="container" :aria-label="t('nav.label')">
        <ul>
          <li v-for="item in nav" :key="item.id">
            <a :href="`#${item.id}`" class="mobile-menu__link" @click="closeMenu()">
              <span class="nav__num">{{ item.num }}</span> {{ t(item.key) }}
            </a>
          </li>
        </ul>
        <a class="btn mobile-menu__cv" :href="hrefOr(site.cv)" :aria-label="t('header.cvLabel')" @click="closeMenu()">
          <span class="mono">CV.pdf</span>
          <AppIcon name="download" :size="14" />
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--header);
  border-bottom: 1px solid var(--line);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

.header__inner {
  display: flex;
  align-items: center;
  gap: 24px;
  height: var(--header-h);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 500;
  margin-right: auto;
}
.logo__mark {
  width: 10px;
  height: 18px;
  background: var(--accent);
  border-radius: 1px;
}
.logo__tld {
  color: var(--dim);
}

.nav__list {
  display: flex;
  gap: 4px;
}
.nav__link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 10px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted);
  border-radius: var(--radius-xs);
  transition: color 0.15s ease;
}
.nav__link:hover {
  color: var(--text);
}
.nav__num {
  margin-right: 4px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang {
  padding: 0 14px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--dim);
}
.lang--active {
  color: var(--text);
}
.lang__sep {
  margin-inline: 4px;
}

.cv {
  font-size: 13px;
  padding: 0 14px;
}

.burger {
  display: none;
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
  padding-block: 8px 24px;
  max-height: calc(100vh - var(--header-h));
  overflow-y: auto;
}
.mobile-menu__link {
  display: flex;
  align-items: center;
  min-height: 52px;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 15px;
  color: var(--text);
}
.mobile-menu__link .nav__num {
  color: var(--dim);
  margin-right: 10px;
}
.mobile-menu__cv {
  width: 100%;
  margin-top: 20px;
}

@media (max-width: 400px) {
  .header__inner,
  .actions {
    gap: 6px;
  }
  .lang {
    padding: 0 10px;
  }
}

@media (max-width: 860px) {
  .nav,
  .cv {
    display: none;
  }
  .burger {
    display: inline-flex;
  }
}
</style>
