<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageIntro from '../components/PageIntro.vue'
</script>
<template>
  <main
    tabindex="-1"
    id="main"
    class="portal-workspace"
    aria-labelledby="portal-page-title"
    data-page-title="Цели и развитие на 2026 год — Портал"
  >
    <PageIntro
      title="Цели и развитие на 2026 год"
      lead="Планирование задач и профессионального развития."
      back-to="/archive"
      back-label="Архив"
    />
    <div class="workspace-surface utility-surface">
      <div class="workspace-width">
        <div class="record-content">
          <section>
            <h2>Цели и задачи</h2>
            <p class="record-copy">Не указано</p>
          </section>
          <section>
            <h2>Обучение и развитие</h2>
            <p class="record-copy">Не указано</p>
          </section>
          <section>
            <h2>Комментарий</h2>
            <p class="record-copy">Не указан</p>
          </section>
        </div>
        <div class="utility-actions">
          <RouterLink class="workspace-button primary" to="/archive/goals-2026/edit"
            >Редактировать</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
