<script setup lang="ts">

import { getGuestList, type Guest } from "~/domains/guest";

const { data: newsList } = await useAsyncData("newsLimit", () => {
  return queryCollection("news")
      .where("draft", "=", true)
      .order("newsId", "DESC")
      .limit(5)
      .all();
});
const guests = ref<Guest[]>([]);

const { bgmOverlay } = useBGMOverlay();

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
  <FirstView :isVisible="!bgmOverlay" />
  <div class="bg-container">
    <BackgroundStar />
    <section id="schedule">
      <InnerWrapper>
        <ScheduleView />
      </InnerWrapper>
    </section>
    <section id="news">
      <InnerWrapper>
        <NewsThinList :newsList="newsList" />
      </InnerWrapper>
    </section>
    <section id="about">
      <InnerWrapper>
        <AboutView />
      </InnerWrapper>
    </section>
    <section id="cast">
      <InnerWrapper>
        <CastProfile />
      </InnerWrapper>
    </section>
    <section id="guests">
      <InnerWrapper>
        <GuestList :guests="guests" />
      </InnerWrapper>
    </section>
    <section id="info">
      <InnerWrapper>
        <InfoView />
      </InnerWrapper>
    </section>
  </div>
</template>

<style scoped>
.bg-container {
  position: relative;
}

section {
  padding-top: 50px;
}

#info {
  padding-top: 60px;
  padding-bottom: 80px;
  background-color: rgb(47, 47, 47, 0.5);
}
</style>