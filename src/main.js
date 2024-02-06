import { createApp,h } from 'vue'
import router from './routes/Router';
import { createWebHistory, createRouter } from 'vue-router';
import './assets/style.css'
import App from './App.vue'



const app = createApp(App)

app.use(router)

app.mount("#app")
