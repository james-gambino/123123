<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
</script>
<template>
  <main
    data-page-title="Профиль — Портал"
    tabindex="-1"
    id="main"
    class="portal-workspace"
    aria-labelledby="portal-page-title"
  >
    <PageIntro title="Профиль" lead="Ваши данные в портале деловой оценки." />
    <div class="workspace-surface utility-surface">
      <div class="workspace-width">
        <form class="utility-form">
          <h2 class="utility-heading">Личные данные</h2>
          <div class="form-grid">
            <label class="field" for="profile-username"
              >Имя пользователя<input
                id="profile-username"
                value="username"
                name="username"
                required
                maxlength="32"
                autocomplete="username"
            /></label>
            <label class="field" for="profile-name"
              >Имя и фамилия<input
                id="profile-name"
                value="Игорь Тхорик"
                name="name"
                maxlength="100"
                autocomplete="name"
            /></label>
            <label class="field" for="profile-role"
              >Должность<input
                id="profile-role"
                value="Главный специалист"
                name="role"
                maxlength="100"
                autocomplete="organization-title"
            /></label>
            <label class="field" for="profile-department"
              >Подразделение<input
                id="profile-department"
                value="Группа разработки прикладного ПО"
                name="department"
                maxlength="100"
            /></label>
            <label class="field" for="profile-grade"
              >Грейд<input id="profile-grade" value="5" name="grade" maxlength="20"
            /></label>
          </div>
          <p class="utility-hint">Имя и фамилия отображаются в верхнем меню.</p>
          <div class="utility-actions">
            <button class="workspace-button" type="reset">Отменить изменения</button
            ><button class="workspace-button primary" type="button">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
