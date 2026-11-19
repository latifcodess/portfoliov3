<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { path } from '@/data/path'

const { t } = useI18n()
</script>

<template>
  <section id="parcours" v-reveal class="section container path" aria-labelledby="path-title">
    <div class="path__head">
      <p class="section-label">{{ t('path.label') }}</p>
      <h2 id="path-title" class="section-title">{{ t('path.title') }}</h2>
      <p class="path__intro">{{ t('path.intro') }}</p>
    </div>

    <ol class="log">
      <li v-for="entry in path" :key="entry.hash" class="log__row" :class="{ 'log__row--head': entry.head }">
        <span class="log__ref mono">
          <span class="log__dot" aria-hidden="true"></span>
          <span class="log__hash">{{ entry.hash }}</span>
        </span>
        <span class="log__year mono">{{ entry.year }}</span>
        <span class="log__msg">{{ t(`path.items.${entry.key}`) }}</span>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.path {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: 40px;
  align-items: start;
}

.path__intro {
  margin-top: 16px;
  max-width: 300px;
  font-size: 14px;
  color: var(--muted);
}

.log {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}

.log__row {
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr);
  align-items: baseline;
  gap: 20px;
  padding: 20px 22px;
}
.log__row + .log__row {
  border-top: 1px solid var(--line);
}

.log__ref {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--dim);
}
.log__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid var(--dim);
}
.log__row--head .log__dot {
  background: var(--accent);
  border-color: var(--accent);
}
.log__row--head .log__hash {
  color: var(--accent-text);
}

.log__year {
  font-size: 12px;
  color: var(--dim);
}

.log__msg {
  font-size: 15px;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .path {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

@media (max-width: 700px) {
  .log__row {
    grid-template-columns: auto minmax(0, 1fr);
    gap: 6px 14px;
    padding: 16px 18px;
  }
  .log__msg {
    grid-column: 1 / -1;
  }
}
</style>
