<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
</script>

<template>
  <main
    data-page-title="Администрирование — Портал"
    tabindex="-1"
    id="main"
    class="portal-workspace"
    aria-labelledby="portal-page-title"
  >
    <PageIntro title="Администрирование" lead="Управление порталом деловой оценки." />
    <div class="workspace-surface utility-surface">
      <div class="workspace-width">
        <section class="workspace-empty">
          <h2>Настройки портала</h2>
          <p>Здесь будут настройки процедур оценки, участников и прав доступа.</p>
        </section>
      </div>
    </div>
  </main>
</template>
