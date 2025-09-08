<template>
    <div id="App">
        {{ mainTitle }}
        <contact-us></contact-us>
        <button-click-counter></button-click-counter>
    </div>

</template>

<script>

export default {
    setup() {
        const mainTitle = 'Hello Vue 3';
        return {
            mainTitle
        };
    }
}

</script>
