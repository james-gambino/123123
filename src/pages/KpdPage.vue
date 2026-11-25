<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionEmpty from '../components/SectionEmpty.vue'
</script>
<template>
  <section
    class="procedure-content"
    aria-labelledby="procedure-section-title"
    data-page-title="КПД — Деловая оценка 2026"
  >
    <header class="procedure-section-header">
      <div class="procedure-section-heading">
        <h2 id="procedure-section-title" tabindex="-1">КПД</h2>
        <p class="procedure-section-description">
          Ключевые показатели деятельности, установленные для сотрудника.
        </p>
      </div>
    </header>
    <div class="procedure-section-body">
      <SectionEmpty
        title="КПД не указаны"
        description="Показатели отображаются в этом разделе, если они установлены для сотрудника."
        hint-title="Когда применяются КПД"
        hint="Бюджетно-финансовые и другие ключевые показатели могут устанавливаться для руководителей и отдельных сотрудников."
      />
    </div>
    <nav class="procedure-section-navigation" aria-label="Переход между разделами">
      <RouterLink to="/assessment/do-2026/tasks" rel="prev" aria-label="Предыдущий раздел: Задачи"
        >Назад: Задачи</RouterLink
      >
      <RouterLink
        class="primary"
        to="/assessment/do-2026/learning"
        rel="next"
        aria-label="Следующий раздел: Обучение"
        >Далее: Обучение</RouterLink
      >
    </nav>
  </section>
</template>
