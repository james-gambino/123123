<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PersonDetails from './PersonDetails.vue'
defineProps<{
  title: string
  lead: string
  year?: string
  headingId: string
  kind: 'catalog' | 'procedure'
}>()
</script>

<template>
  <section class="workspace-intro" :class="`${kind}-intro`">
    <div class="workspace-width">
      <RouterLink class="workspace-parent-link" :to="kind === 'catalog' ? '/main' : '/assessment'">
        {{ kind === 'catalog' ? 'На главную' : 'Мои оценки' }}
      </RouterLink>
      <details class="workspace-header" open>
        <summary id="workspace-header-toggle" class="workspace-header-toggle">
          <span class="header-label-expanded">Свернуть шапку</span>
          <span class="header-label-collapsed">Развернуть шапку</span>
        </summary>
        <div class="workspace-intro-layout">
          <div class="workspace-intro-copy">
            <h1 :id="headingId">
              {{ title }}<template v-if="year"><br />{{ year }}</template>
            </h1>
            <p class="workspace-lead">{{ lead }}</p>
          </div>
          <PersonDetails />
        </div>
      </details>
    </div>
  </section>
</template>
