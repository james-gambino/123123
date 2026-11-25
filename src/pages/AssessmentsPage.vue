<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AssessmentCard from '../components/AssessmentCard.vue'
import WorkspaceIntro from '../components/WorkspaceIntro.vue'
import AppIcon from '../components/AppIcon.vue'
</script>

<template>
  <main
    data-page-title="Мои оценки — Портал"
    tabindex="-1"
    id="main"
    class="portal-workspace"
    aria-label="Мои оценки"
  >
    <WorkspaceIntro
      title="Мои оценки"
      lead="Назначенные процедуры и текущие шаги."
      heading-id="assessment-title"
      kind="catalog"
    />
    <div class="workspace-surface">
      <div class="workspace-width">
        <section class="catalog-assessments" aria-labelledby="assigned-heading">
          <div class="catalog-heading">
            <h2 id="assigned-heading">Назначенные оценки</h2>
            <span>1 оценка</span>
          </div>
          <div class="procedure-card-list">
            <AssessmentCard />
          </div>
          <div class="catalog-archive">
            <div>
              <h3>Сохранённые формы</h3>
              <p>Ранее сохранённые записи доступны в вашем архиве.</p>
            </div>
            <RouterLink class="workspace-text-link" to="/archive">Открыть архив</RouterLink>
          </div>
        </section>
        <details class="catalog-help">
          <summary>
            Как работать с оценкой<span aria-hidden="true"><AppIcon name="plus" /></span>
          </summary>
          <div>
            <p>
              Каждая карточка — отдельная оценка сотрудника. Внутри находятся компетенции, задачи,
              КПД, обучение и лист согласований.
            </p>
            <p>
              Начните с текущего шага, указанного в карточке. Если редактирование закрыто,
              содержание доступно для просмотра.
            </p>
            <RouterLink class="workspace-text-link" to="/instructions"
              >Подробная инструкция</RouterLink
            >
          </div>
        </details>
      </div>
    </div>
  </main>
</template>
