<script setup lang="ts">
import type { NewsCollectionItem } from "@nuxt/content";

const { newsList } = defineProps<{
  newsList: NewsCollectionItem[]
}>();
</script>

<template>
  <div class="news-table">
    <div class="news-card" v-for="news in newsList">
      <NewsCardListItem :news="news" />
    </div>
    <div class="empty news-card" />
  </div>
</template>

<style scoped>
.news-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px 50px;

  margin-top: 50px;
}

.news-card {
  width: 500px;
}

.empty {
  content: "";
  display: block;
}
</style>