<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import LayeredButton from '../components/LayeredButton.vue'
</script>

<template>
  <main data-page-title="Портал проведения деловой оценки" tabindex="-1" id="main">
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-portrait portrait-one portrait-generated">
        <img
          src="/assets/portraits/01-ginger-man.jpg"
          width="800"
          height="1200"
          alt=""
          decoding="async"
          fetchpriority="high"
        />
      </div>
      <div class="hero-portrait portrait-two portrait-generated">
        <img
          src="/assets/portraits/02-brunette-woman.jpg"
          width="800"
          height="1200"
          alt=""
          decoding="async"
        />
      </div>
      <div class="hero-portrait portrait-three portrait-generated">
        <img
          src="/assets/portraits/03-woman-with-tablet.jpg"
          width="800"
          height="1200"
          alt=""
          decoding="async"
        />
      </div>
      <div class="hero-portrait portrait-four portrait-generated">
        <img
          src="/assets/portraits/04-silver-haired-man.jpg"
          width="800"
          height="1200"
          alt=""
          decoding="async"
        />
      </div>
      <div class="hero-content">
        <h1 id="page-title">Портал проведения<br />деловой оценки</h1>
        <LayeredButton label="Пройти" id="start-button" />
      </div>
    </section>
    <div class="page-width">
      <section class="intro-cards" aria-label="О деловой оценке">
        <article class="info-card">
          <div class="card-heading"><h2>Основная цель</h2></div>
          <p class="goal-lead">Помогать сотрудникам развиваться и работать эффективнее</p>
          <p class="card-description">
            Деловая оценка — возможность подвести итоги работы за предыдущий период, оценить
            профессиональные знания и навыки, получить обратную связь и определить задачи на
            будущее.
          </p>
          <div class="card-bottom">
            <p>От результатов прошлого года —<br />к новым целям и возможностям.</p>
            <RouterLink class="text-link" to="/periods">О процедуре</RouterLink>
          </div>
        </article>
        <article class="info-card">
          <div class="card-heading"><h2>Задачи</h2></div>
          <ul class="task-points">
            <li>
              <AppIcon name="check" /><span
                >Оценить результаты работы, профессиональные знания, навыки и компетенции.</span
              >
            </li>
            <li>
              <AppIcon name="check" /><span
                >Согласовать задачи и планы на следующий отчётный период.</span
              >
            </li>
            <li>
              <AppIcon name="check" /><span>Предоставить структурированную обратную связь.</span>
            </li>
            <li>
              <AppIcon name="check" /><span>Определить потребности в обучении и развитии.</span>
            </li>
            <li>
              <AppIcon name="check" /><span
                >Определить размер вознаграждения по итогам работы.</span
              >
            </li>
            <li>
              <AppIcon name="check" /><span
                >Оценить кадровый потенциал и спланировать карьеру.</span
              >
            </li>
          </ul>
        </article>
      </section>
    </div>
    <section class="period-section" id="periods" aria-labelledby="periods-heading">
      <div class="section-intro">
        <h2 id="periods-heading">Подводим итоги.<br />Планируем будущее.</h2>
        <p>В карточке сотрудника два блока: оценка за предыдущий год и задачи на текущий.</p>
      </div>
      <div class="period-grid">
        <RouterLink class="year-link" to="/assessment"
          ><span class="period-item"
            ><span class="period-year">2025</span
            ><span
              ><h3>Оценка результатов</h3>
              <p>
                Выполнение целей и задач за 2025 год, профессиональные знания, навыки и компетенции.
              </p></span
            ></span
          ></RouterLink
        ><RouterLink class="year-link" to="/assessment"
          ><span class="period-item"
            ><span class="period-year green">2026</span
            ><span
              ><h3>Цели и развитие</h3>
              <p>
                Постановка целей и задач на 2026 год, согласование планов обучения и развития.
              </p></span
            ></span
          ></RouterLink
        >
      </div>
    </section>
    <div class="light-section">
      <section class="process-section" id="instructions" aria-labelledby="process-heading">
        <div class="section-intro">
          <h2 id="process-heading">Как проходит<br />деловая оценка</h2>
          <p>От самостоятельной оценки до личной беседы и согласования с руководителем.</p>
        </div>
        <div class="process-grid">
          <article class="process-card" aria-labelledby="process-review-heading">
            <div class="process-art process-art--review" aria-hidden="true">
              <span class="paper paper-back"></span
              ><span class="paper paper-front"><b>✓</b><i></i><i></i><i></i></span>
            </div>
            <div class="process-lead">2025</div>
            <h3 id="process-review-heading">Оцените работу<br />за предыдущий год</h3>
            <div class="process-copy">
              <p>Сначала сотрудник оценивает свои компетенции и выполнение задач за прошлый год.</p>
              <p>Затем руководитель проводит оценку результатов и компетенций сотрудника.</p>
            </div>
            <div class="process-footer">
              <span>Подведение итогов</span><span class="process-procedure">ДО 2025</span>
            </div>
          </article>
          <article class="process-card" aria-labelledby="process-goals-heading">
            <div class="process-art process-art--goals" aria-hidden="true">
              <span class="plan-sheet plan-sheet-back"></span
              ><span class="plan-sheet plan-sheet-front"><i></i><i></i><i></i><em></em></span>
            </div>
            <div class="process-lead">2026</div>
            <h3 id="process-goals-heading">Поставьте задачи<br />на текущий год</h3>
            <div class="process-copy">
              <p>
                Сформулируйте цели и задачи на 2026 год, определите направления обучения и развития.
              </p>
              <p>При необходимости предварительно обсудите их с руководителем.</p>
            </div>
            <div class="process-footer">
              <span>Планирование</span><span class="process-procedure">ДО 2026</span>
            </div>
          </article>
          <article class="process-card" aria-labelledby="process-dialog-heading">
            <div class="process-art process-art--dialog" aria-hidden="true">
              <span class="chat-note chat-note-back"><i></i><i></i></span
              ><span class="chat-note chat-note-front"><b></b><b></b><b></b></span>
            </div>
            <div class="process-lead process-lead--word">Диалог</div>
            <h3 id="process-dialog-heading">Обсудите итоги<br />на личной встрече</h3>
            <div class="process-copy">
              <p>Согласуйте оценку за прошлый год и задачи на текущий в беседе с руководителем.</p>
              <p>
                Вышестоящий руководитель согласовывает итоги ДО 2025 и утверждает задачи ДО 2026.
              </p>
            </div>
            <div class="process-footer">
              <span>Личная беседа</span><span class="process-procedure">Согласование</span>
            </div>
          </article>
        </div>
      </section>
      <section class="criteria-section" id="criteria" aria-labelledby="criteria-heading">
        <h2 class="criteria-heading" id="criteria-heading">
          Структура, методы<br />и критерии оценки
        </h2>
        <p class="criteria-lead">
          Деловая оценка объединяет результаты работы и оценку компетенций. Для топ-менеджеров и
          отдельных сотрудников также могут устанавливаться бюджетно-финансовые КПД — ключевые
          показатели деятельности.
        </p>
        <div class="criteria-list">
          <details class="criteria-item" open>
            <summary>
              Результаты работы<span class="expand-icon"><AppIcon name="plus" /></span>
            </summary>
            <div class="criteria-body">
              <p>
                Оценка по результатам показывает, насколько эффективно сотрудник решает поставленные
                перед ним задачи.
              </p>
              <p class="criterion">
                Критерий — результативность: полнота, своевременность и качество выполнения задач.
              </p>
            </div>
          </details>
          <details class="criteria-item">
            <summary>
              Профессиональные компетенции<span class="expand-icon"><AppIcon name="plus" /></span>
            </summary>
            <div class="criteria-body">
              <p>
                Оценка компетенций помогает понять, за счёт чего сотрудник достигает целей, и
                определить его потенциал в целом.
              </p>
              <p class="criterion">
                Критерий — уровень выраженности компетенций: профессиональных знаний, навыков и
                качеств, необходимых для работы.
              </p>
            </div>
          </details>
          <details class="criteria-item">
            <summary>
              Ключевые показатели деятельности<span class="expand-icon"
                ><AppIcon name="plus"
              /></span>
            </summary>
            <div class="criteria-body">
              <p>
                Для руководителей высшего звена могут устанавливаться бюджетно-финансовые КПД —
                показатели бюджета, за который отвечает руководитель.
              </p>
              <p class="criterion">
                Применяются к сотрудникам, для которых такие показатели установлены.
              </p>
            </div>
          </details>
        </div>
      </section>
      <section class="ready-section">
        <div>
          <h2>Развитие начинается с диалога</h2>
          <p>Подведите итоги и определите, что будет дальше.</p>
        </div>
        <LayeredButton label="Пройти" />
      </section>
    </div>
  </main>
</template>
