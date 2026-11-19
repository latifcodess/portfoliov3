<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { repoUrl, type Project } from '@/data/projects'

defineProps<{ project: Project }>()

const { t } = useI18n()

// Valeurs de démonstration affichées dans la maquette de l'app
const usage = [
  { name: 'Claude', pct: 62, highlight: true },
  { name: 'ChatGPT', pct: 34 },
  { name: 'Gemini', pct: 18 },
  { name: 'Copilot', pct: 47 },
]
</script>

<template>
  <article class="pulse">
    <div class="pulse__info">
      <p class="pulse__meta mono">
        <span>{{ project.code }} ·</span>
        <span class="badge">{{ t(`projects.items.${project.id}.type`) }}</span>
        <span class="badge">
          <span class="sr-only">{{ t('projects.roleLabel') }}</span>
          {{ t(`projects.roles.${project.role}`) }}
        </span>
      </p>
      <h3 class="pulse__title">
        <a :href="repoUrl(project.repo ?? '')" class="stretched">
          {{ t(`projects.items.${project.id}.title`) }}
          <span class="sr-only"> — {{ t('projects.onGithub') }}</span>
        </a>
      </h3>
      <p class="pulse__desc">{{ t(`projects.items.${project.id}.description`) }}</p>
      <ul class="chips">
        <li v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</li>
      </ul>
      <p class="pulse__link mono" aria-hidden="true">github.com/{{ project.repo }} ↗</p>
    </div>

    <div class="pulse__visual" role="img" :aria-label="t('projects.pulse.previewLabel')">
      <div class="menubar mono">
        <span>Wi-Fi</span>
        <span class="menubar__pill"><i class="menubar__dot"></i>62%</span>
        <span>{{ t('projects.pulse.date') }}</span>
      </div>
      <div class="panel">
        <div class="panel__head">
          <span class="panel__name">Pulse</span>
          <span class="panel__tag">{{ t('projects.pulse.tag') }}</span>
        </div>
        <div v-for="row in usage" :key="row.name" class="panel__row">
          <div class="panel__label">
            <span>{{ row.name }}</span>
            <span>{{ row.pct }}%</span>
          </div>
          <div class="panel__track">
            <div class="panel__fill" :class="{ 'panel__fill--accent': row.highlight }" :style="{ width: `${row.pct}%` }"></div>
          </div>
        </div>
        <p class="panel__foot mono">{{ t('projects.pulse.projection') }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.pulse {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.15s ease;
}
.pulse:hover {
  border-color: var(--line2);
}

.pulse__info {
  display: flex;
  flex-direction: column;
  padding: 32px;
}
.pulse__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--dim);
}
.pulse__title {
  margin-top: 22px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.03em;
}
.pulse__desc {
  margin: 18px 0 22px;
  max-width: 520px;
  font-size: 15px;
  color: var(--muted);
}
.pulse__link {
  margin-top: auto;
  padding-top: 48px;
  font-size: 12px;
  color: var(--accent-text);
}

.pulse__visual {
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--line);
  background: var(--bg);
}

.menubar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
  padding: 6px 14px;
  background: var(--surface2);
  border-bottom: 1px solid var(--line);
  font-size: 11px;
  color: var(--muted);
}
.menubar__pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 1px 6px;
  border-radius: 4px;
  background: var(--chip);
  color: var(--text);
}
.menubar__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

.panel {
  width: min(100% - 48px, 300px);
  margin: 32px auto;
  padding: 14px 14px 12px;
  background: var(--surface);
  border: 1px solid var(--line2);
  border-radius: var(--radius-sm);
  font-size: 12.5px;
}
.panel__head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.panel__name {
  font-weight: 600;
}
.panel__tag {
  color: var(--dim);
}
.panel__row + .panel__row {
  margin-top: 10px;
}
.panel__label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.panel__track {
  height: 4px;
  border-radius: 2px;
  background: var(--track);
  overflow: hidden;
}
.panel__fill {
  height: 100%;
  border-radius: inherit;
  background: var(--text);
}
.panel__fill--accent {
  background: var(--accent);
}
.panel__foot {
  margin-top: 14px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  font-size: 11px;
  color: var(--dim);
}

@media (max-width: 900px) {
  .pulse {
    grid-template-columns: 1fr;
  }
  .pulse__visual {
    order: -1;
    border-left: 0;
    border-bottom: 1px solid var(--line);
  }
  .pulse__link {
    padding-top: 24px;
  }
}

@media (max-width: 700px) {
  .pulse__info {
    padding: 24px;
  }
  .pulse__title {
    font-size: 32px;
  }
  .panel {
    margin: 24px auto;
  }
}
</style>
