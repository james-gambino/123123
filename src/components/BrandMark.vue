<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ full?: boolean }>()
</script>

<template>
  <RouterLink
    to="/main"
    class="wordmark brand-mark"
    :class="{ 'brand-mark--full': full }"
    aria-label="Private Assets — на главную"
  >
    <svg class="brand-logo" viewBox="58 43 1325 900" width="1325" height="900" aria-hidden="true">
      <image href="/assets/brand/elephant-transparent.png" width="1536" height="1024" />
    </svg>
    <span v-if="full" class="brand-wordmark"
      ><span>Private</span> <span class="brand-wordmark-accent">Assets</span></span
    >
  </RouterLink>
</template>
