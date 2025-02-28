<script setup lang="ts">
import {getGuestList} from "~/domains/guest/api";

const { data: newsList } = await useAsyncData("newsLimit", () => {
  return queryCollection("news")
    .where("draft", "=", true)
    .order("newsId", "DESC")
    .limit(5)
    .all();
});
const guests = ref<Guest[]>([]);

onMounted(async () => {
  guests.value = await getGuestList();
});

</script>

<template>
  <InnerWrapper>
    <h1>領国つかさの深夜通信-Dark Web-</h1>
    <section id="schedule">
      <ScheduleView />
    </section>
    <section id="news">
      <NewsThinList :newsList="newsList" />
    </section>
    <section id="guests">
      <GuestList :guests="guests" />
    </section>
  </InnerWrapper>
</template>

<style scoped>
section {
  margin-top: 40px;
}

</style>