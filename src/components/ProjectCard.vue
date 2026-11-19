<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { repoUrl, type Project } from '@/data/projects'

defineProps<{ project: Project }>()

const { t } = useI18n()
</script>

<template>
  <article class="card">
    <div class="card__top">
      <p class="card__meta mono">{{ project.code }} · {{ t(`projects.items.${project.id}.type`) }}</p>
      <span class="badge">
        <span class="sr-only">{{ t('projects.roleLabel') }}</span>
        {{ t(`projects.roles.${project.role}`) }}
      </span>
    </div>

    <h3 class="card__title">
      <a v-if="project.repo" :href="repoUrl(project.repo)" class="stretched">
        {{ t(`projects.items.${project.id}.title`) }}
        <span class="sr-only"> — {{ t('projects.onGithub') }}</span>
      </a>
      <template v-else>{{ t(`projects.items.${project.id}.title`) }}</template>
    </h3>
    <p class="card__desc">{{ t(`projects.items.${project.id}.description`) }}</p>

    <ul class="chips card__chips">
      <li v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</li>
    </ul>
    <p v-if="project.repo" class="card__repo mono" aria-hidden="true">{{ project.repo }} ↗</p>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: var(--surface);
  transition: background-color 0.15s ease;
}
.card:has(.stretched):hover {
  background: var(--surface2);
}

.card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.card__meta {
  font-size: 11px;
  color: var(--dim);
}

.card__title {
  margin-top: 18px;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.card__desc {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.65;
  color: var(--muted);
}

.card__chips {
  margin-top: auto;
  padding-top: 24px;
}

.card__repo {
  margin-top: 14px;
  font-size: 11px;
  color: var(--dim);
  overflow-wrap: anywhere;
}
</style>
