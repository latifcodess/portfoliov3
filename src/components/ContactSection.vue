<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { hrefOr, site } from '@/data/site'
import AppIcon from './icons/AppIcon.vue'

const { t } = useI18n()
</script>

<template>
  <section id="contact" v-reveal class="section container" aria-labelledby="contact-title">
    <div class="contact">
      <p class="section-label">{{ t('contact.label') }}</p>
      <h2 id="contact-title" class="contact__title">
        {{ t('contact.title') }}
        <span class="contact__dim">{{ t('contact.titleDim') }}</span>
      </h2>
      <div class="contact__actions">
        <a :href="`mailto:${site.email}`" class="btn btn--accent contact__email mono">
          <span class="sr-only">{{ t('contact.emailLabel') }} :</span>
          {{ site.email }}
        </a>
        <a :href="site.github" class="btn">
          <AppIcon name="github" :size="15" />
          GitHub
        </a>
        <a :href="site.linkedin" class="btn">LinkedIn</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 56px 32px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}

.contact__title {
  font-size: 64px;
  line-height: 1.02;
  font-weight: 600;
  letter-spacing: -0.035em;
}
.contact__dim {
  display: block;
  color: var(--dim);
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}
.contact__email {
  font-size: 13px;
}

@media (max-width: 700px) {
  .contact {
    padding: 32px 20px;
  }
  .contact__title {
    font-size: 36px;
  }
  .contact__actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 28px;
  }
  .contact__actions .btn {
    min-height: 48px;
  }
  .contact__email {
    grid-column: 1 / -1;
    white-space: normal;
    overflow-wrap: anywhere;
  }
}
</style>
