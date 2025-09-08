<template>
    <div>
        <button @click="buttonClickCounter++">Button click counter {{ buttonClickCounter }}</button>
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default{
        setup(){
            let buttonClickCounter = ref(0);
            return{
                buttonClickCounter
            }
        }
    }
</script>