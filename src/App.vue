<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MetaStrip from './components/MetaStrip.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import StackSection from './components/StackSection.vue'
import PathSection from './components/PathSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

const { t } = useI18n()
</script>

<template>
  <a class="skip-link" href="#main">{{ t('a11y.skip') }}</a>
  <AppHeader />
  <main id="main" tabindex="-1">
    <HeroSection />
    <MetaStrip />
    <ProjectsSection />
    <StackSection />
    <PathSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
