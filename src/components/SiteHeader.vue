<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BrandMark from './BrandMark.vue'
import AppIcon from './AppIcon.vue'
import PortalNavigation from './PortalNavigation.vue'
</script>

<template>
  <header class="site-header">
    <BrandMark />
    <nav class="main-nav" aria-label="Главное меню">
      <div class="header-tools">
        <RouterLink class="nav-link" to="/administration">Администрирование</RouterLink>
        <RouterLink class="nav-link" to="/reports">Отчёты</RouterLink>
      </div>
      <div class="header-account">
        <RouterLink class="nav-link" to="/profile">Профиль</RouterLink>
        <RouterLink class="nav-link" to="/archive">Архив</RouterLink>
        <RouterLink class="nav-link" to="/instructions">Инструкции</RouterLink>
        <RouterLink class="username-button" to="/profile">Игорь Тхорик</RouterLink>
        <button class="menu-toggle" type="button" popovertarget="mobile-nav" aria-label="Меню">
          <AppIcon name="menu" />
        </button>
        <nav
          id="mobile-nav"
          :key="$route.fullPath"
          class="mobile-nav"
          popover="auto"
          aria-label="Мобильное меню"
        >
          <PortalNavigation link-class="nav-link" />
        </nav>
      </div>
    </nav>
  </header>
</template>
