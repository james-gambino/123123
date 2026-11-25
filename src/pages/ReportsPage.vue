<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
</script>

<template>
  <main
    data-page-title="Отчёты — Портал"
    tabindex="-1"
    id="main"
    class="portal-workspace"
    aria-labelledby="portal-page-title"
  >
    <PageIntro title="Отчёты" lead="Результаты и ход деловой оценки." />
    <div class="workspace-surface utility-surface">
      <div class="workspace-width">
        <section class="workspace-empty">
          <h2>Отчёты пока не сформированы</h2>
          <p>Здесь появятся отчёты по процедурам, участникам и результатам оценки.</p>
        </section>
      </div>
    </div>
  </main>
</template>
