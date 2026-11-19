<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const facts = ['education', 'period', 'location', 'languages'] as const
</script>

<template>
  <section class="strip" :aria-label="t('facts.label')">
    <dl class="container strip__grid">
      <div v-for="key in facts" :key="key" class="strip__cell">
        <dt class="strip__label mono">{{ t(`facts.${key}`) }}</dt>
        <dd class="strip__value">{{ t(`facts.${key}Value`) }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.strip {
  border-block: 1px solid var(--line);
  background: var(--bg);
}

.strip__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.strip__cell {
  padding: 22px 16px;
}
.strip__cell + .strip__cell {
  border-left: 1px solid var(--line);
}

.strip__label {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dim);
  margin-bottom: 6px;
}
.strip__value {
  font-size: 15px;
  font-weight: 500;
}

@media (max-width: 960px) {
  .strip__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .strip__cell:nth-child(3) {
    border-left: 0;
  }
  .strip__cell:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }
}

@media (max-width: 700px) {
  .strip__grid {
    grid-template-columns: 1fr;
  }
  .strip__cell {
    padding: 16px 0;
  }
  .strip__cell + .strip__cell {
    border-left: 0;
    border-top: 1px solid var(--line);
  }
}
</style>
