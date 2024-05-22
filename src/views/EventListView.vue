<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'

const events = ref([
  {
  id: 4544,
  category: 'Laptop Flash Sale',
  title: 'Macbook Pro 2021',
  price: 1200,
  brand: 'Apple',
  time:'12:30',
  date: '10 June, 2024',

  },

  {
  
  id: 4555,
  category: 'Laptop Flash Sale',
  title: 'Macbook Pro 2021',
  price: 1200,
  brand: 'Apple',
  time:'12:30',
  date: '10 June, 2024',

  },
  {
  
  id: 4534,
  category: 'Laptop Flash Sale',
  title: 'Macbook Pro 2021',
  price: 1200,
  brand: 'Apple',
  time:'12:30',
  date: '10 June, 2024',

  },
  {
  
  id: 4344,
  category: 'Laptop Flash Sale',
  title: 'Macbook Pro 2021',
  price: 1200,
  brand: 'Apple',
  time:'12:30',
  date: '10 June, 2024',

  },
  {
  
  id: 4244,
  category: 'Laptop Flash Sale',
  title: 'Macbook Pro 2021',
  price: 1200,
  brand: 'Apple',
  time:'12:30',
  date: '10 June, 2024',

  },

])
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
