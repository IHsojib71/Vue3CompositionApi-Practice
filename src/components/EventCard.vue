<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-details', params: {id:event.id} }">
    <div class="event-card">
    <!-- Event data -->
    <h2>{{ event.title }}</h2>
    <span>@{{ event.time }} on {{ event.date }}</span>
  </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid gray;
  margin-bottom: 15px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

.event-link {
  text-decoration: none;
  color: black;
}
</style>
