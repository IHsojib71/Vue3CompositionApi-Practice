<script setup>
import { ref, onMounted } from 'vue'
import EventServices from '@/services/EventServices.js'
const event = ref(null)
const props = defineProps({
    id: {
        required:true,
    }
})
onMounted(() => {
    EventServices.getEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
})
</script>
<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
<div class="nav">
    <router-link :to="{ name: 'event-details', params: {id} }">Details</router-link>
    <router-link :to="{ name: 'event-register', params: {id} }">Register</router-link>
    <router-link :to="{ name: 'event-edit', params: {id} }">Edit</router-link>
</div>

        <p>@{{ event.time }} on {{ event.date }}</p>
        <p>{{ event.description }}</p>

        <p>Edit Event</p>
    </div>
</template>

<style scoped>
.nav{
    display: flex;
    justify-content: center;
    padding:10px;
}
.nav a{
    text-decoration: none;
    padding:10px;
    color: rgb(52, 171, 52);
}
</style>