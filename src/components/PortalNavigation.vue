<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ linkClass?: string }>()
</script>

<template>
  <RouterLink :class="linkClass" to="/administration">Администрирование</RouterLink>
  <RouterLink :class="linkClass" to="/reports">Отчёты</RouterLink>
  <RouterLink :class="linkClass" to="/profile" data-nav="profile">Профиль</RouterLink>
  <RouterLink :class="linkClass" to="/archive">Архив</RouterLink>
  <RouterLink :class="linkClass" to="/instructions">Инструкции</RouterLink>
</template>
