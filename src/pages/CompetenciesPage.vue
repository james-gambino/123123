<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
</script>
<template>
  <section
    class="procedure-content"
    aria-labelledby="procedure-section-title"
    data-page-title="Компетенции — Деловая оценка 2026"
  >
    <header class="procedure-section-header">
      <div class="procedure-section-heading">
        <h2 id="procedure-section-title" tabindex="-1">Компетенции</h2>
      </div>
    </header>
    <div class="procedure-section-body">
      <details class="procedure-scale">
        <summary aria-label="Критерии оценки" aria-describedby="competencies-description">
          <span id="competencies-description" class="procedure-scale-description"
            >Профессиональные качества, которые помогают достигать результатов.</span
          ><span class="procedure-scale-trigger"
            >Критерии оценки<span aria-hidden="true"><AppIcon name="plus" /></span
          ></span>
        </summary>
        <div>
          <p>
            Оценка компетенций показывает, за счёт каких знаний, навыков и качеств сотрудник
            достигает результатов.
          </p>
          <p>
            Критерий — уровень выраженности компетенции. Содержание каждой компетенции приведено
            ниже; числовые оценки отображаются при наличии данных.
          </p>
        </div>
      </details>
      <div class="competency-list">
        <details class="competency-entry" open>
          <summary>
            <h3 id="competency-initiative">Инициативность и активность</h3>
            <span aria-hidden="true"><AppIcon name="plus" /></span>
          </summary>
          <div class="competency-body">
            <p>
              Предлагает идеи для совершенствования своей работы и деятельности подразделения. Видит
              возможности и проблемы, предлагает способы их решения.
            </p>
            <dl class="competency-values">
              <div>
                <dt>Самооценка</dt>
                <dd>Не указана</dd>
              </div>
              <div>
                <dt>Оценка руководителя</dt>
                <dd>Не указана</dd>
              </div>
            </dl>
          </div>
        </details>
        <details class="competency-entry">
          <summary>
            <h3 id="competency-professionalism">Профессионализм</h3>
            <span aria-hidden="true"><AppIcon name="plus" /></span>
          </summary>
          <div class="competency-body">
            <p>
              Применяет знания и навыки в своей профессиональной области. Понимает взаимосвязь своей
              работы с задачами подразделения и постоянно развивает профессиональные знания.
            </p>
            <dl class="competency-values">
              <div>
                <dt>Самооценка</dt>
                <dd>Не указана</dd>
              </div>
              <div>
                <dt>Оценка руководителя</dt>
                <dd>Не указана</dd>
              </div>
            </dl>
          </div>
        </details>
        <details class="competency-entry">
          <summary>
            <h3 id="competency-organization">Организация работы</h3>
            <span aria-hidden="true"><AppIcon name="plus" /></span>
          </summary>
          <div class="competency-body">
            <p>
              Самостоятельно планирует работу, расставляет приоритеты и соблюдает сроки. Отвечает за
              качество результата, замечает ошибки и находит способы их исправить.
            </p>
            <dl class="competency-values">
              <div>
                <dt>Самооценка</dt>
                <dd>Не указана</dd>
              </div>
              <div>
                <dt>Оценка руководителя</dt>
                <dd>Не указана</dd>
              </div>
            </dl>
          </div>
        </details>
        <details class="competency-entry">
          <summary>
            <h3 id="competency-learning">Обучаемость</h3>
            <span aria-hidden="true"><AppIcon name="plus" /></span>
          </summary>
          <div class="competency-body">
            <p>
              Осваивает новые знания, технологии и способы работы. Использует полученный опыт и
              эффективно применяет его в деятельности.
            </p>
            <dl class="competency-values">
              <div>
                <dt>Самооценка</dt>
                <dd>Не указана</dd>
              </div>
              <div>
                <dt>Оценка руководителя</dt>
                <dd>Не указана</dd>
              </div>
            </dl>
          </div>
        </details>
        <details class="competency-entry">
          <summary>
            <h3 id="competency-communication">Коммуникативная компетенция</h3>
            <span aria-hidden="true"><AppIcon name="plus" /></span>
          </summary>
          <div class="competency-body">
            <p>
              Выстраивает конструктивные рабочие отношения. Умеет слушать, задавать вопросы, ясно
              излагать мысли и находить совместные решения.
            </p>
            <dl class="competency-values">
              <div>
                <dt>Самооценка</dt>
                <dd>Не указана</dd>
              </div>
              <div>
                <dt>Оценка руководителя</dt>
                <dd>Не указана</dd>
              </div>
            </dl>
          </div>
        </details>
      </div>
    </div>
    <nav class="procedure-section-navigation" aria-label="Переход между разделами">
      <RouterLink
        class="primary"
        to="/assessment/do-2026/tasks"
        rel="next"
        aria-label="Следующий раздел: Задачи"
        >Далее: Задачи</RouterLink
      >
    </nav>
  </section>
</template>
