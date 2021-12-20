<template>
  <h1>Lista de eventos</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "Home",
  components: {
    EventCard,
  },

  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => (this.events = response.data))
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
