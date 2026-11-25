<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import WorkspaceIntro from '../components/WorkspaceIntro.vue'
import AppIcon from '../components/AppIcon.vue'
</script>
<template>
  <main
    tabindex="-1"
    id="main"
    class="portal-workspace procedure-workspace"
    aria-label="Деловая оценка 2026"
  >
    <WorkspaceIntro
      title="Деловая оценка"
      year="2026"
      lead="Компетенции, результаты работы и планы развития."
      heading-id="procedure-title"
      kind="procedure"
    />
    <div class="workspace-surface procedure-surface">
      <div class="workspace-width">
        <div class="procedure-toolbar">
          <nav class="procedure-navigation" aria-label="Разделы оценки">
            <RouterLink to="/assessment/do-2026/competencies">Компетенции</RouterLink>
            <RouterLink to="/assessment/do-2026/tasks">Задачи</RouterLink>
            <RouterLink to="/assessment/do-2026/kpd">КПД</RouterLink>
            <RouterLink to="/assessment/do-2026/learning">Обучение</RouterLink>
            <RouterLink to="/assessment/do-2026/approvals">Лист согласований</RouterLink>
          </nav>
          <span class="procedure-status"
            ><span
              class="workspace-status procedure-current-status"
              tabindex="0"
              role="img"
              aria-label="Статус оценки"
              aria-describedby="procedure-state-tooltip"
              ><span class="procedure-status-label" aria-hidden="true"
                >Закрыто для редактирования</span
              ><span class="procedure-status-icon" aria-hidden="true"
                ><AppIcon name="lock" /></span></span
            ><span id="procedure-state-tooltip" class="procedure-status-tooltip" role="tooltip"
              >Закрыто для редактирования</span
            ></span
          >
        </div>
        <RouterView />
      </div>
    </div>
  </main>
</template>
