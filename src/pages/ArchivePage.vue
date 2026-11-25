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
    data-page-title="Архив — Портал"
  >
    <PageIntro title="Архив" lead="Оценки и планы развития за предыдущие периоды." />
    <div class="workspace-surface utility-surface">
      <div class="workspace-width">
        <div class="utility-archive-list">
          <article class="archive-record">
            <span class="archive-year">2025</span>
            <div class="archive-text">
              <h2>Оценка результатов</h2>
              <small>Игорь Тхорик</small>
            </div>
            <RouterLink class="workspace-button" to="/archive/do-2025">Открыть</RouterLink>
          </article>
          <article class="archive-record">
            <span class="archive-year">2026</span>
            <div class="archive-text">
              <h2>Цели и развитие</h2>
              <small>Игорь Тхорик</small>
            </div>
            <RouterLink class="workspace-button" to="/archive/goals-2026">Открыть</RouterLink>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>
