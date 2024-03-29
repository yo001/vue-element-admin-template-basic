import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import * as Icon from '@/components/icons'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

Object.keys(Icon).forEach((key) => {
  app.component(key, Icon[key])
})

app.mount('#app')
