<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <section
    class="procedure-content"
    aria-labelledby="procedure-section-title"
    data-page-title="Лист согласований — Деловая оценка 2026"
  >
    <header class="procedure-section-header">
      <div class="procedure-section-heading">
        <h2 id="procedure-section-title" tabindex="-1">Лист согласований</h2>
        <p class="procedure-section-description">
          Участники процедуры и сведения о согласовании оценки.
        </p>
      </div>
    </header>
    <div class="procedure-section-body">
      <div class="approval-list">
        <article class="approval-entry">
          <div>
            <span class="approval-role">Сотрудник</span>
            <h3>Игорь Тхорик</h3>
          </div>
          <div class="approval-decision"><span>Решение не указано</span></div>
        </article>
        <article class="approval-entry">
          <div>
            <span class="approval-role">Руководитель</span>
            <h3>Олейников Алексей Владимирович</h3>
          </div>
          <div class="approval-decision"><span>Решение не указано</span></div>
        </article>
        <article class="approval-entry">
          <div>
            <span class="approval-role">Вышестоящий руководитель</span>
            <h3>Не указан</h3>
          </div>
          <div class="approval-decision"><span>Решение не указано</span></div>
        </article>
      </div>
      <div class="procedure-explanation">
        <h3>Личная беседа и согласование</h3>
        <p>
          На встрече сотрудник и руководитель обсуждают результаты, обратную связь и новые задачи.
          Вышестоящий руководитель согласовывает итоги оценки и утверждает задачи на следующий
          период.
        </p>
      </div>
    </div>
    <nav class="procedure-section-navigation" aria-label="Переход между разделами">
      <RouterLink
        to="/assessment/do-2026/learning"
        rel="prev"
        aria-label="Предыдущий раздел: Обучение"
        >Назад: Обучение</RouterLink
      >
      <RouterLink class="primary" to="/assessment">Мои оценки</RouterLink>
    </nav>
  </section>
</template>
