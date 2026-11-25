import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './styles/style.css'
import './styles/assessment.css'
import './styles/layout.css'
import './styles/pages.css'

const app = createApp(App)
app.use(router)
await router.isReady()
app.mount('#app')
