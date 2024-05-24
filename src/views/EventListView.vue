<script setup>
import EventCard from "@/components/EventCard.vue";
import { ref, onMounted, computed, watchEffect } from "vue";
import EventServices from "@/services/EventServices.js";

const events = ref(null);
const totalEvents = ref(0);
const props = defineProps(["page"]);

const page = computed(() => props.page);

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2); // divided by 2 as showing 2 items per page
  return page.value < totalPages;
});

onMounted(() => {
  watchEffect(() => {
    events.value = null;
    EventServices.getEvents(2, page.value)
      .then((response) => {
        events.value = response.data;
        totalEvents.value = response.headers["x-total-count"];
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
</script>

<template>
  <div class="events">
    <h1>My Events</h1>
    <EventCard v-for="(event, index) in events" :key="index" :event="event" />

    <div class="pagination">
      <router-link
        class="prev-page"
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="previous"
        v-if="page != 1"
        >&#60; Previous
      </router-link>
      <router-link
        class="next-page"
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 300px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: rgb(40, 193, 40);
}

.prev-page {
  text-align: left;
}

.next-page {
  text-align: right;
}
</style>
