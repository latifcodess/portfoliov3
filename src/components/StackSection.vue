<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { stack } from '@/data/stack'

const { t } = useI18n()
</script>

<template>
  <section id="stack" v-reveal class="section container" aria-labelledby="stack-title">
    <p class="section-label">{{ t('stack.label') }}</p>
    <h2 id="stack-title" class="section-title">{{ t('stack.title') }}</h2>

    <div class="stack">
      <div v-for="col in stack" :key="col.key" class="stack__col">
        <h3 :id="`stack-${col.key}`" class="stack__label mono">{{ t(`stack.columns.${col.key}`) }}</h3>
        <ul :aria-labelledby="`stack-${col.key}`">
          <li v-for="item in col.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1px;
  margin-top: 40px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}

/* Filets droite/bas dessinés par ombre : ceux du bord sont rognés par overflow:hidden,
   et une cellule vide en fin de grille reste propre. */
.stack__col {
  padding: 22px 24px 24px;
  box-shadow:
    1px 0 0 var(--line),
    0 1px 0 var(--line);
}

.stack__label {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dim);
  margin-bottom: 14px;
}

.stack__col li {
  font-size: 15px;
  line-height: 2;
}

@media (max-width: 960px) {
  .stack {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .stack {
    grid-template-columns: 1fr;
    margin-top: 28px;
  }
  .stack__col {
    padding: 18px 20px 20px;
  }
}
</style>
