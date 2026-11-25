<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionEmpty from '../components/SectionEmpty.vue'
</script>
<template>
  <section
    class="procedure-content"
    aria-labelledby="procedure-section-title"
    data-page-title="Задачи — Деловая оценка 2026"
  >
    <header class="procedure-section-header">
      <div class="procedure-section-heading">
        <h2 id="procedure-section-title" tabindex="-1">Задачи</h2>
        <p class="procedure-section-description">
          Рабочие задачи, ожидаемые результаты и итоги их выполнения.
        </p>
      </div>
    </header>
    <div class="procedure-section-body">
      <SectionEmpty
        title="Задачи пока не указаны"
        description="Здесь отображаются задачи сотрудника: ожидаемый результат, срок выполнения и итог работы."
        hint-title="Что важно в оценке задач"
        hint="Результат оценивается по полноте, своевременности и качеству выполнения."
      />
    </div>
    <nav class="procedure-section-navigation" aria-label="Переход между разделами">
      <RouterLink
        to="/assessment/do-2026/competencies"
        rel="prev"
        aria-label="Предыдущий раздел: Компетенции"
        >Назад: Компетенции</RouterLink
      >
      <RouterLink
        class="primary"
        to="/assessment/do-2026/kpd"
        rel="next"
        aria-label="Следующий раздел: КПД"
        >Далее: КПД</RouterLink
      >
    </nav>
  </section>
</template>
