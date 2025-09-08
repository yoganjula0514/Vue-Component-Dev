<template>
    <div>
        Please write to below mail id for all queries.
        <p>{{ contactUsEmail }}</p>
    </div>

</template>

<script>
import { createApp } from 'vue';
export default {
    setup() {
        const contactUsEmail = 'contactus@practice.com'
        return {
            contactUsEmail
        }
    }
}

</script>