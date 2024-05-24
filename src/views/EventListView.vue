<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref, onMounted, computed } from 'vue'
import EventServices from '@/services/EventServices.js'

const events = ref(null)
const props = defineProps(['page'])

const page = computed(()=>props.page)

onMounted(() => {
    EventServices.getEvents(2, page.value)
    .then((response) => {
      events.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
})
</script>

<template>
  <div class="events">
  <h1>My Events</h1>
    <EventCard v-for="(event,index) in events" :key="index" :event="event"/>
  </div>
</template>

<style scoped>
  .events{
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

</style>
