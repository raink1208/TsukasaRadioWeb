<script setup lang="ts">
import type { NewsCollectionItem } from "@nuxt/content";

const { news } = defineProps<{
  news: NewsCollectionItem
}>();

const link = (newsId: string) => "/news/" + newsId;

const formatDate = (dateStr: Date): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year} ${month}/${day}`;
}
</script>

<template>
  <NuxtLink :to="link(news.newsId)">
    <div class="card">
      <p>{{ formatDate(news.date) }}</p>
      <p>{{ news.title }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  position: relative;
  height: 70px;
  border: 1px solid var(--accent-color);
  padding: 10px 16px 10px 32px;
  transition: 0.3s;
}

.card::before {
  position: absolute;
  content: "";
  background-color: var(--accent-color);
  top: 0;
  left: 0;
  width: 16px;
  height: 100%;
}

.card:hover {
  transform: translateY(-4px);
  transition: 0.3s;
}
</style>