<script setup lang="ts">
import type { NewsCollectionItem } from "@nuxt/content";

const { news } = defineProps<{
  news: NewsCollectionItem
}>();

const link = (newsId: string) => "/news/" + newsId;
</script>

<template>
  <NuxtLink :to="link(news.newsId)">
    <div class="card">
      <p>{{news.title}}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  height: 80px;
}
</style>