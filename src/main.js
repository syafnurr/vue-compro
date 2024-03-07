import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/styles.css'
import { registerComponent } from './components/RegisterComponent'
import draggable from './plugins/draggable'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia);

app.use(router)

registerComponent(app)

// Register the directive globally
app.directive('draggable', draggable);

app.mount('#app')