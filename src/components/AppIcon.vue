<script setup lang="ts">
defineProps<{ name: 'lock' | 'menu' | 'plus' | 'check' }>()
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <template v-if="name === 'lock'">
      <rect x="5" y="10" width="14" height="11" rx="2.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </template>
    <path v-else-if="name === 'menu'" d="M4 6h16M4 12h16M4 18h16" />
    <path v-else-if="name === 'plus'" d="M12 5v14M5 12h14" />
    <path v-else d="m5 12 4 4L19 6" />
  </svg>
</template>
