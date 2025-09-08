<template>
    <div id="App">
        {{ mainTitle }}
        <contact-us></contact-us>
        <!-- <button-click-counter></button-click-counter> -->
        <ButtonClickCounter> </ButtonClickCounter>
        <ButtonClickCounter> </ButtonClickCounter>
    </div>

</template>

<script setup>

// Local component
import ButtonClickCounter from './Components/ButtonClickCounter.vue'
const mainTitle = 'Hello Vue 3';

</script>
