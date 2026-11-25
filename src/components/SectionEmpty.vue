<script setup lang="ts">
defineProps<{ title: string; description: string; hintTitle: string; hint: string }>()
</script>

<template>
  <div class="workspace-empty">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
  <div class="procedure-explanation">
    <h3>{{ hintTitle }}</h3>
    <p>{{ hint }}</p>
  </div>
</template>
