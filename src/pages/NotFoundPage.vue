<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <main
    tabindex="-1"
    id="main"
    class="missing-procedure"
    data-page-title="Страница не найдена — Портал"
  >
    <h1 id="portal-page-title" tabindex="-1">Страница не найдена</h1>
    <p>Откройте нужный раздел из меню портала.</p>
    <RouterLink class="workspace-button" to="/assessment">К моим оценкам</RouterLink>
  </main>
</template>
