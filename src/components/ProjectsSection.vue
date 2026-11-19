<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { projects } from '@/data/projects'
import { site } from '@/data/site'
import ProjectCard from './ProjectCard.vue'
import PulseFeatured from './PulseFeatured.vue'

const { t } = useI18n()

const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => !p.featured)
</script>

<template>
  <section id="projets" v-reveal class="section container" aria-labelledby="projects-title">
    <div class="head">
      <div>
        <p class="section-label">{{ t('projects.label') }}</p>
        <h2 id="projects-title" class="section-title">{{ t('projects.title') }}</h2>
      </div>
      <p class="head__intro">{{ t('projects.intro') }}</p>
    </div>

    <PulseFeatured v-if="featured" :project="featured" />

    <ul class="grid">
      <li v-for="project in others" :key="project.id">
        <ProjectCard :project="project" />
      </li>
      <li>
        <article class="more">
          <p class="more__cmd mono" aria-hidden="true">git remote -v</p>
          <h3 class="more__title">
            <a :href="site.github" class="stretched">{{ t('projects.more.title') }}</a>
          </h3>
          <p class="more__link mono" aria-hidden="true">github.com/{{ site.githubUser }} ↗</p>
        </article>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px 48px;
  margin-bottom: 40px;
}
.head__intro {
  max-width: 380px;
  font-size: 14px;
  color: var(--muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr));
  gap: 1px;
  margin-top: 24px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}
.grid > li {
  display: flex;
}
.grid > li > * {
  flex: 1;
}

.more {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 240px;
  padding: 24px;
  background: var(--surface);
  transition: background-color 0.15s ease;
}
.more:hover {
  background: var(--surface2);
}
.more__cmd {
  font-size: 11px;
  color: var(--dim);
}
.more__title {
  margin-top: auto;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.more__link {
  margin-top: 8px;
  font-size: 12px;
  color: var(--accent-text);
}

@media (max-width: 700px) {
  .head {
    margin-bottom: 28px;
  }
  .more {
    min-height: 180px;
  }
}
</style>
