<template>
    <div id="App">
        {{ mainTitle }}
        <contact-us></contact-us>
    </div>

</template>

<script>

import { createApp } from 'vue';
import ContactUs from './Components/ContactUs.vue';
export default {
    components: { ContactUs },
    setup() {
        const mainTitle = 'Hello Vue 3';
        return {
            mainTitle
        };
    }
}

</script>
