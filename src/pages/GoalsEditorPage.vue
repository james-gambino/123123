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
      title="Цели и развитие на 2026 год"
      lead="Планирование задач и профессионального развития."
      back-to="/archive"
      back-label="Архив"
    />
    <div class="workspace-surface utility-surface">
      <div class="workspace-width">
        <form class="utility-form">
          <label class="field"
            >Цели и задачи<textarea
              name="goals"
              placeholder="Сформулируйте задачи, ожидаемый результат и сроки выполнения."
              maxlength="10000"
            />
          </label>
          <label class="field"
            >Обучение и развитие<textarea
              name="learning"
              placeholder="Опишите направления развития, необходимые знания и обучение."
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
