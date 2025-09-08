<template>
    <div class="container">
        {{ mainTitle }}
        <!-- <Contact name="Ben" :phone="phoneNumber" :ownername="contactsOwner"></Contact> -->
        <!-- <Contact name="Duck" :phone="8147624418" :ownername="contactsOwner"></Contact> -->
        <!-- <contact-us></contact-us> -->

        <!-- <button-click-counter></button-click-counter> -->
        <!-- <ButtonClickCounter> </ButtonClickCounter>
        <ButtonClickCounter> </ButtonClickCounter> -->

        <div class = "row">
            <div class = "col-12" v-for = "contact in contacts" :key="contact.name">
                <Contact
                     :name="contact.name" 
                     :phone="contact.phone" 
                     :ownername="contact.ownerName"
                     :email="contact.email"
                     :isFavorite="contact.isFavotite"></Contact>
            </div>
        </div>
    </div>

</template>

<script setup>

// Local component
// import ButtonClickCounter from './Components/ButtonClickCounter.vue'
import { ref, reactive } from 'vue';
import Contact from './Components/Contact.vue';
const mainTitle = 'Hello Vue 3';
const contactsOwner = 'Admin User';
const ownerName = ref('Admin User');
const phoneNumber = 8147624419


const contacts = reactive([
    {
        name: 'Ben',
        phone: 8147624419,
        ownerName: ownerName.value,
        isFavotite: false,
    },
    {
        name: 'Duck',
        phone: 123467898,
        ownerName: ownerName.value,
        isFavotite: true,
    },
    {
        name: 'Alex',
        phone: 9898989898,
        ownerName: ownerName.value,
        isFavotite: false,
    },
])
</script>
