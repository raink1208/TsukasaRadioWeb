<script setup lang="ts">

import {getGuestList, type Guest} from "~/domains/guest";

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

useSeoMeta({
  title: "領国つかさの深夜通信-Dark Web- | 非公式ファンサイト",
  description: "すぺしゃりて所属のVTuber、領国つかさによるラジオ企画【領国つかさの深夜通信-Dark Web-】の非公式ファンサイトです。",

  ogTitle: "領国つかさの深夜通信-Dark Web- | 非公式ファンサイト",
  ogDescription: "すぺしゃりて所属のVTuber、領国つかさによるラジオ企画【領国つかさの深夜通信-Dark Web-】の非公式ファンサイトです。",
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
    <section id="cast">
      <CastProfile />
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