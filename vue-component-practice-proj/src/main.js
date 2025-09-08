import { createApp } from 'vue'
import App from './App.vue'
import ContactUs from './Components/ContactUs.vue'

const app = createApp(App);

app.component('contact-us', ContactUs);
 
app.mount('#app')
