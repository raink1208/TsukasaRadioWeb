<script setup lang="ts">
import { NewsCollectionItem } from "@nuxt/content"

const { news } = defineProps<{
  news: NewsCollectionItem
}>();

const link = (newsId: string) => "/news/" + newsId;
</script>

<template>
  <div>
    <NuxtLink :to="link(news.newsId)">
      <p>{{ news.title }}</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
div:hover {
  filter: brightness(0.6) contrast(1.8);
}
p {
  padding: 10px;
}
</style>