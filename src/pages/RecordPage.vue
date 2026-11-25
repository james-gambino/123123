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
    data-page-title="Оценка результатов за 2025 год — Портал"
  >
    <PageIntro
      title="Оценка результатов за 2025 год"
      lead="Самооценка по результатам работы и компетенциям."
      back-to="/archive"
      back-label="Архив"
    />
    <div class="workspace-surface utility-surface">
      <div class="workspace-width">
        <div class="record-content">
          <section>
            <h2>Результаты и выполненные задачи</h2>
            <p class="record-copy">Не указано</p>
          </section>
          <section>
            <h2>Профессиональные знания и навыки</h2>
            <p class="record-copy">Не указано</p>
          </section>
          <section>
            <h2>Комментарий</h2>
            <p class="record-copy">Не указан</p>
          </section>
        </div>
        <div class="utility-actions">
          <RouterLink class="workspace-button primary" to="/archive/do-2025/edit"
            >Редактировать</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
