
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import './assets/css/base.css'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)

app.mount('#app')
