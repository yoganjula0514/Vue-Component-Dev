<template>
    <div>
        <button @click="buttonClickCounter++">Button click counter {{ buttonClickCounter }}</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const buttonClickCounter = ref(0);
</script>