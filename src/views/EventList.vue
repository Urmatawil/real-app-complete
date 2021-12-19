<template>
  <h1>Lista de eventos</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "Home",
  components: {
    EventCard,
  },

  data() {
    return {
      events: [
        {
          id: 123456789,
          category: "cuidado animal",
          title: "Dia de adopción",
          description: "Dia de adopción de animales",
          location: "Rlyeh",
          date: "Junio 06, 1966",
          time: "12:00",
          petsAllowed: true,
          organizer: "Hastur",
        },
        {
          id: 123456789,
          category: "cuidado animal",
          title: "Dia de adopción",
          description: "Dia de adopción de animales",
          location: "Rlyeh",
          date: "Junio 06, 1966",
          time: "12:00",
          petsAllowed: true,
          organizer: "Hastur",
        },
      ],
    };
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
