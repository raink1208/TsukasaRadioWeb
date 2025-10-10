<script setup lang="ts">
import type { NewsCollectionItem } from "@nuxt/content"

const { news } = defineProps<{
  news: NewsCollectionItem
}>();

const link = (newsId: string) => "/news/" + newsId;

const formatDate = (dateStr: Date): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}
</script>

<template>
  <div>
    <NuxtLink :to="link(news.newsId)">
      <div class="content">
        <div class="date">{{ formatDate(news.date) }}</div>
        <div class="title">{{ news.title }}</div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.content:hover {
  background-color: rgba(255, 255, 255, 0.05);
  transform: translateX(4px);
  cursor: pointer;
}
.content {
  padding: 10px;
}

.date {
  color: var(--sub-accent-color);
}
.title {
  padding-left: 10px;
  padding-top: 3px;
}
</style>