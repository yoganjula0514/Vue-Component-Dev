import { createApp } from 'vue'
import App from './App.vue'
import ContactUs from './Components/ContactUs.vue'
import ButtonClickCounter from './Components/ButtonClickCounter.vue'

const app = createApp(App);

// Global component
app.component('contact-us', ContactUs);
// app.component('button-click-counter', ButtonClickCounter);
 
app.mount('#app')
