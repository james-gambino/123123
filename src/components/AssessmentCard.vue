<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <article class="procedure-card" aria-label="Деловая оценка 2026">
    <div class="procedure-card-year">2026</div>
    <div class="procedure-card-content">
      <div class="procedure-card-heading">
        <h3 id="do-2026-title">
          <RouterLink to="/assessment/do-2026/competencies">Деловая оценка</RouterLink>
        </h3>
        <span class="workspace-status procedure-card-status--heading">Только просмотр</span>
      </div>
      <p class="procedure-card-description">
        Подведите итоги, обсудите результаты<br class="card-desktop-break" />
        и определите направления развития.
      </p>
      <nav class="procedure-card-sections" aria-label="Разделы Деловая оценка 2026">
        <RouterLink to="/assessment/do-2026/competencies">Компетенции</RouterLink>
        <RouterLink to="/assessment/do-2026/tasks">Задачи</RouterLink>
        <RouterLink to="/assessment/do-2026/kpd">КПД</RouterLink>
        <RouterLink to="/assessment/do-2026/learning">Обучение</RouterLink>
        <RouterLink to="/assessment/do-2026/approvals">Лист согласований</RouterLink>
      </nav>
      <div class="procedure-card-bottom">
        <div class="procedure-card-step">
          <span>Текущий шаг</span>
          <div class="procedure-card-step-row">
            <strong>Закрыто для редактирования</strong
            ><span class="workspace-status procedure-card-status--step">Только просмотр</span>
          </div>
        </div>
        <RouterLink class="workspace-button primary layered" to="/assessment/do-2026/competencies"
          >Открыть оценку</RouterLink
        >
      </div>
    </div>
  </article>
</template>
