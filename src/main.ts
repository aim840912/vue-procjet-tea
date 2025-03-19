import { createApp } from 'vue'
import './style.less'
import App from './App.vue'

import router from './router'
import "@/router/guard"
import { createPinia } from 'pinia'

import "./mock"

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import * as ElementPlusIcons from '@element-plus/icons-vue'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIcons)) {
    app.component(key, component)
}

const pinia = createPinia()

app.use(ElementPlus);
app.use(router);
app.use(pinia)

app.mount('#app')
