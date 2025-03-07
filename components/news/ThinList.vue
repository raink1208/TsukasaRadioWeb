<script setup lang="ts">
import type { NewsCollectionItem } from "@nuxt/content";

const { newsList } = defineProps<{
  newsList: NewsCollectionItem[] | null
}>();
</script>

<template>
  <div>
    <CommonContentTitle title="News"/>
    <ul class="news-list">
      <li v-for="news in newsList" :key="news.newsId">
        <NewsThinListItem :news="news" />
      </li>
    </ul>
    <div class="center">
      <CommonButton to="/news/" text="View All" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.news-list {
  margin: 25px 10px 0 10px;
}
.news-list li {
  border-bottom: 1px solid var(--text-color);
}
.news-list li:first-child {
  border-top: 1px solid var(--text-color);
}

.center {
  margin-top: 30px;
  text-align: center;
}
</style>