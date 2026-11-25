import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    anchor?: string
    section?: boolean
  }
}
const home = () => import('../pages/HomePage.vue')
export const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'is-current',
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: home },
    { path: '/instructions', component: home, meta: { anchor: 'instructions' } },
    { path: '/periods', component: home, meta: { anchor: 'periods' } },
    { path: '/criteria', component: home, meta: { anchor: 'criteria' } },
    { path: '/assessment', component: () => import('../pages/AssessmentsPage.vue') },
    {
      path: '/assessment/do-2026',
      component: () => import('../layouts/AssessmentLayout.vue'),
      redirect: '/assessment/do-2026/competencies',
      children: [
        {
          path: 'competencies',
          component: () => import('../pages/CompetenciesPage.vue'),
          meta: { section: true },
        },
        {
          path: 'tasks',
          component: () => import('../pages/TasksPage.vue'),
          meta: { section: true },
        },
        { path: 'kpd', component: () => import('../pages/KpdPage.vue'), meta: { section: true } },
        {
          path: 'learning',
          component: () => import('../pages/LearningPage.vue'),
          meta: { section: true },
        },
        {
          path: 'approvals',
          component: () => import('../pages/ApprovalsPage.vue'),
          meta: { section: true },
        },
      ],
    },
    { path: '/profile', component: () => import('../pages/ProfilePage.vue') },
    { path: '/archive', component: () => import('../pages/ArchivePage.vue') },
    { path: '/archive/do-2025', component: () => import('../pages/RecordPage.vue') },
    { path: '/archive/do-2025/edit', component: () => import('../pages/RecordEditorPage.vue') },
    { path: '/archive/goals-2026', component: () => import('../pages/GoalsRecordPage.vue') },
    { path: '/archive/goals-2026/edit', component: () => import('../pages/GoalsEditorPage.vue') },
    { path: '/administration', component: () => import('../pages/AdministrationPage.vue') },
    { path: '/reports', component: () => import('../pages/ReportsPage.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('../pages/NotFoundPage.vue') },
  ],
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    const anchor =
      to.hash.slice(1) ||
      to.meta.anchor ||
      (to.meta.section && from.meta.section ? 'procedure-section-title' : '')
    if (anchor) {
      await nextTick()
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'instant', block: 'start' })
      return false
    }
    return { left: 0, top: 0 }
  },
})
router.afterEach(async () => {
  await nextTick()
  const main = document.getElementById('main')
  const pageTitle = document.querySelector<HTMLElement>('[data-page-title]')?.dataset.pageTitle
  if (pageTitle) document.title = pageTitle
  main?.focus({ preventScroll: true })
})
