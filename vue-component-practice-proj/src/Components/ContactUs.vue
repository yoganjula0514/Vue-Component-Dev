<template>
    <div class="bg-info rounted p-2 m-2">
        Please write to below mail id for all queries.
        <p>{{ contactUsEmail }}</p>
    </div>

</template>

<script setup>
import { ref } from 'vue'
const contactUsEmail = ref('contactus@practice.com')
</script>