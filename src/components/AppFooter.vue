<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner mono">
      <p>© {{ year }} Latif Krasniqi</p>
      <p>{{ t('footer.deployed') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 112px;
  border-top: 1px solid var(--line);
  background: var(--bg);
}
.footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  padding-block: 28px;
  font-size: 12px;
  color: var(--dim);
}

@media (max-width: 700px) {
  .footer {
    margin-top: 80px;
  }
}
</style>
