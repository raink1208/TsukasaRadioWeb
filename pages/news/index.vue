<script setup lang="ts">
import {useAsyncData} from "#app";

const { data: newsList } = await useAsyncData("news", () => {
  return queryCollection("news")
    .where("draft", "=", true)
    .order("newsId", "DESC")
    .all();
});

useSeoMeta({
  title: "News",
  description: "",

  ogTitle: "News",
  ogDescription: "",
})
</script>

<template>
  <InnerWrapper :max-size="1150">
    <NewsCardList :newsList="newsList" />
  </InnerWrapper>
</template>

<style scoped>

</style>