import { createApp } from 'vue'
import App from './ColumnChart.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
