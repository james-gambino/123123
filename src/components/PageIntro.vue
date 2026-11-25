<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{ title: string; lead: string; backTo?: string; backLabel?: string }>()
</script>

<template>
  <section class="workspace-intro utility-intro">
    <div class="workspace-width">
      <nav class="workspace-return" aria-label="Навигация по порталу">
        <RouterLink class="workspace-parent-link" :to="backTo || '/main'"
          ><template v-if="backLabel">{{ backLabel }}</template
          ><template v-else>На главную</template></RouterLink
        >
      </nav>
      <div class="utility-intro-copy">
        <h1 id="portal-page-title" tabindex="-1">{{ title }}</h1>
        <p class="workspace-lead">{{ lead }}</p>
      </div>
    </div>
  </section>
</template>
