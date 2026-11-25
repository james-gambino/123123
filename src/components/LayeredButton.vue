<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ label: string; id?: string }>()
</script>

<template>
  <RouterLink :id="id" to="/assessment" class="rainbow-button">
    <span class="button-face">{{ label }}</span><span class="button-layer" aria-hidden="true" />
  </RouterLink>
</template>
