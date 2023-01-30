import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import "./styles/index.scss";
import components  from '@/components/UI';


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app.use(createPinia());

app.mount('#app');

