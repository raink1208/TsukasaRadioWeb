<script setup lang="ts">
import type { NewsCollectionItem } from "@nuxt/content";

const { newsList } = defineProps<{
  newsList: NewsCollectionItem[] | null
}>();
</script>

<template>
  <div class="news-table">
    <div v-for="(news, index) in newsList">
      <NewsCardListItem :news="news" :delay="index" />
    </div>
  </div>
</template>

<style scoped>
.news-table {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>