<template>
    <div class="bg-info rounted p-1 m-1">
        <div class="row">
            <div class="col-10">
                <h3>Name : {{ name }} </h3>
                <p>Email : {{ contactUsEmail }}</p>
                <p>Phone : {{ phone }}</p>
                <p class="float-end small" v-if="ownername != ''">Ownername is {{ ownername }}</p>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, defineProps } from 'vue'
const contactUsEmail = ref('contactus@practice.com')
const props = defineProps({
    name: { type: String, required: true },
    phone: Number,
    ownername: { type: String, required: false, default: '-n/a-' },
    email: String,
    isFavorite: Boolean
})
</script>