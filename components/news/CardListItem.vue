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

  return `${year}.${month}.${day}`;
}
</script>

<template>
  <article class="news-item">
    <div class="date">{{ formatDate(news.date) }}</div>
    <span class="category">イベント</span>
    <h3 class="title">{{ news.title }}</h3>
    <p class="description">{{ news.description }}</p>
    <NuxtLink :to="link(news.newsId)" class="read-more">続きを読む</NuxtLink>
  </article>
</template>

<style scoped>
.news-item {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  animation: slideInUp 1s ease-out calc(1.5s + var(--delay, 0s)) both;
}

.news-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(185, 46, 70, 0.2);
}

.date {
  font-size: 0.9rem;
  color: var(--sub-accent-color);
  margin-bottom: 10px;
  font-family: var(--text-font);
}

.category {
  display: inline-block;
  background: rgba(185, 46, 70, 0.2);
  color: var(--accent-color);
  padding: 4px 12px;
  border-radius: 15px;
  margin-bottom: 15px;
  font-family: var(--text-font);
}

.title {
  margin-bottom: 15px;
}

.description {
  opacity: 0.8;
  margin-bottom: 20px;
  font-family: var(--article-font);
}

.read-more {
  color: var(--sub-accent-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--text-font);
}

.read-more:hover {
  transform: translateX(5px);
  color: var(--accent-color);
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>