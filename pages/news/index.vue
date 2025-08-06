<script setup lang="ts">
import { useAsyncData } from "#app";

const { data: newsList } = await useAsyncData("news", () => {
  return queryCollection("news")
      .where("draft", "=", true)
      .order("newsId", "DESC")
      .all();
});

const categories = computed(() => {
  return newsList.value?.map(it => it.category).flat()
      .reduce((acc: Record<string, number>, category: string) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {})
});

const selectedCategory = ref<string | null>(null);

const filteredNewsList = computed(() => {
  const filterCategory = selectedCategory.value;
  if (!filterCategory) return newsList.value;
  return newsList.value?.filter(item => item.category == selectedCategory.value) ?? null;
})

useSeoMeta({
  title: "News | 領国つかさの深夜通信-Dark Web-",
  description: "",

  ogTitle: "News | 領国つかさの深夜通信-Dark Web-",
  ogDescription: "",
})
</script>

<template>
  <InnerWrapper :max-size="1150">
    <h1 class="title">News</h1>
    <CommonTagFilter v-model="selectedCategory" :tags="categories" />
    <NewsCardList :newsList="filteredNewsList" />
  </InnerWrapper>
</template>

<style scoped>
.title {
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 40px;
}
</style>