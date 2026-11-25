<script setup lang="ts">
import BrandMark from './BrandMark.vue'
import PortalNavigation from './PortalNavigation.vue'
</script>

<template>
  <div class="footer-surface">
    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-brand">
          <BrandMark full /><span>Портал проведения<br />деловой оценки</span>
        </div>
        <nav class="footer-nav" aria-label="Меню внизу страницы"><PortalNavigation /></nav>
      </div>
    </footer>
  </div>
</template>
