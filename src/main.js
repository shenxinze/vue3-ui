import { createApp } from 'vue'
import App from './App.vue'
import SUI from '../packages/index'
// import SUI from 'sxzui'
const app = createApp(App)
app.use(SUI)
app.mount('#app')
