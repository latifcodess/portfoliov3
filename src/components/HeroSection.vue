<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { site } from '@/data/site'
import AppIcon from './icons/AppIcon.vue'

const { t } = useI18n()

const lines = computed(() => [
  { cmd: 'whoami', out: 'latif krasniqi' },
  { cmd: 'cat role.txt', out: t('hero.role') },
  { cmd: 'ls ~/stack', out: 'swift  typescript  c#  sql  docker' },
  { cmd: 'echo $LANGS', out: 'fr  sq  en' },
])
</script>

<template>
  <section id="top" class="hero container">
    <div class="hero__text">
      <p class="hero__path mono">~/lausanne/ch</p>
      <h1 class="hero__title">
        {{ t('hero.title') }}
        <span class="hero__sub">{{ t('hero.subtitle') }}</span>
      </h1>
      <p class="hero__intro">{{ t('hero.intro') }}</p>
      <div class="hero__actions">
        <a href="#projets" class="btn btn--accent">
          {{ t('hero.cta') }}
          <AppIcon name="arrow-right" :size="15" />
        </a>
        <a :href="site.github" class="btn">
          <AppIcon name="github" :size="15" />
          <span class="sr-only">{{ t('hero.githubLabel') }}</span>
          {{ site.githubUser }}
        </a>
      </div>
    </div>

    <div class="terminal" role="group" :aria-label="t('hero.terminalLabel')">
      <div class="terminal__bar">
        <span class="terminal__dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="terminal__title mono">zsh — latif@macbook</span>
      </div>
      <div class="terminal__body mono">
        <template v-for="line in lines" :key="line.cmd">
          <p><span class="prompt" aria-hidden="true">❯</span> {{ line.cmd }}</p>
          <p class="terminal__out">{{ line.out }}</p>
        </template>
        <p><span class="prompt" aria-hidden="true">❯</span> <span class="cursor" aria-hidden="true"></span></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(0, 1fr);
  gap: 64px;
  align-items: start;
  padding-top: 96px;
  padding-bottom: 96px;
}

.hero__path {
  font-size: 12px;
  color: var(--dim);
  margin-bottom: 28px;
}

.hero__title {
  font-size: 72px;
  line-height: 1.02;
  font-weight: 600;
  letter-spacing: -0.035em;
}
.hero__sub {
  display: block;
  white-space: nowrap;
  font-size: 0.68em;
  color: var(--dim);
  margin-top: 4px;
}

.hero__intro {
  max-width: 560px;
  margin-top: 28px;
  font-size: 17px;
  color: var(--muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}

.terminal {
  margin-top: 36px;
  background: var(--surface);
  border: 1px solid var(--line2);
  border-radius: var(--radius);
  overflow: hidden;
}
.terminal__bar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--line);
}
.terminal__dots {
  display: inline-flex;
  gap: 6px;
}
.terminal__dots i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--line2);
}
.terminal__title {
  font-size: 12px;
  color: var(--dim);
}
.terminal__body {
  padding: 18px 18px 22px;
  font-size: 13px;
  line-height: 1.8;
}
.terminal__body p {
  white-space: pre-wrap;
}
.terminal__out {
  color: var(--muted);
}
.prompt {
  color: var(--accent-text);
}
.cursor {
  display: inline-block;
  width: 8px;
  height: 15px;
  vertical-align: -2px;
  background: var(--text);
  animation: blink 1.1s steps(1, end) infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .terminal {
    margin-top: 0;
    max-width: 560px;
  }
}

@media (max-width: 700px) {
  .hero {
    padding-top: 48px;
    padding-bottom: 64px;
  }
  .hero__path {
    margin-bottom: 20px;
  }
  .hero__title {
    font-size: 40px;
  }
  .hero__intro {
    font-size: 16px;
    margin-top: 20px;
  }
  .hero__actions {
    flex-direction: column;
    margin-top: 28px;
  }
  .hero__actions .btn {
    width: 100%;
    min-height: 48px;
  }
}

@media (max-width: 360px) {
  .hero__title {
    font-size: 36px;
  }
}
</style>
