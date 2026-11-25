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
    data-page-title="Редактирование формы — Портал"
  >
    <PageIntro
      title="Оценка результатов за 2025 год"
      lead="Самооценка по результатам работы и компетенциям."
      back-to="/archive"
      back-label="Архив"
    />
    <div class="workspace-surface utility-surface">
      <div class="workspace-width">
        <form class="utility-form">
          <label class="field"
            >Результаты и выполненные задачи<textarea
              name="results"
              placeholder="Какие цели достигнуты? Какие задачи выполнены?"
              maxlength="10000"
            />
          </label>
          <label class="field"
            >Профессиональные знания и навыки<textarea
              name="competencies"
              placeholder="Какие знания и навыки помогли в работе?"
              maxlength="10000"
            />
          </label>
          <label class="field"
            >Дополнительный комментарий<textarea
              name="comment"
              class="short-textarea"
              placeholder="Что ещё важно обсудить с руководителем"
              maxlength="5000"
            />
          </label>
          <div class="utility-actions">
            <RouterLink class="workspace-button" to="/archive">Отмена</RouterLink
            ><button class="workspace-button" type="button">Сохранить черновик</button
            ><button class="workspace-button primary" type="button">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
