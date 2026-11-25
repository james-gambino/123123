<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <RouterLink class="skip-link" :to="{ hash: '#main' }">К содержанию</RouterLink>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
</template>
