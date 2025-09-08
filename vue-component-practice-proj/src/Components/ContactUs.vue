<template>
    <div>
        Please write to below mail id for all queries.
        <p>{{ contactUsEmail }}</p>
    </div>

</template>

<script setup>
import { ref } from 'vue'
const contactUsEmail = ref('contactus@practice.com')
</script>