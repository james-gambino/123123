<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionEmpty from '../components/SectionEmpty.vue'
</script>
<template>
  <section
    class="procedure-content"
    aria-labelledby="procedure-section-title"
    data-page-title="Обучение — Деловая оценка 2026"
  >
    <header class="procedure-section-header">
      <div class="procedure-section-heading">
        <h2 id="procedure-section-title" tabindex="-1">Обучение</h2>
        <p class="procedure-section-description">Направления развития и план обучения.</p>
      </div>
    </header>
    <div class="procedure-section-body">
      <SectionEmpty
        title="План обучения пока не указан"
        description="Здесь будут направления развития, необходимые знания и согласованные мероприятия по обучению."
        hint-title="От задач — к развитию"
        hint="План обучения помогает определить, какие знания и навыки необходимы для достижения рабочих целей."
      />
    </div>
    <nav class="procedure-section-navigation" aria-label="Переход между разделами">
      <RouterLink to="/assessment/do-2026/kpd" rel="prev" aria-label="Предыдущий раздел: КПД"
        >Назад: КПД</RouterLink
      >
      <RouterLink
        class="primary"
        to="/assessment/do-2026/approvals"
        rel="next"
        aria-label="Следующий раздел: Лист согласований"
        >Далее: Лист согласований</RouterLink
      >
    </nav>
  </section>
</template>
