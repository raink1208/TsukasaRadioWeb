<script setup lang="ts">
import type { ArchiveCollectionItem } from "@nuxt/content";
const { archive } = defineProps<{
  archive: ArchiveCollectionItem
}>();
const getThumbnail = (videoId: string) => {
  return `http://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
const getYouTubeLink = (videoId: string) => {
  return `https://www.youtube.com/live/${videoId}`;
}
const getContentURL = (archiveId: string) => {
  return `/archive/${archiveId}`;
}
</script>

<template>
  <div class="card">
    <div class="content">
      <a :href="getYouTubeLink(archive.videoId)">
        <figure>
          <img :src="getThumbnail(archive.videoId)" alt="サムネイル"/>
          <Icon name="icon-park-outline:play" class="play-icon"/>
        </figure>
      </a>
      <div class="body">
        <p class="title">{{ archive.title }}</p>
        <p class="description">{{ archive.description }}</p>
        <div class="detail-button">
          <CommonButton :to="getContentURL(archive.archiveId)" text="詳細を見る"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  border-radius: 10px;
}
.content {
  padding: 10px;
}
figure {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 16px;
}
figure .play-icon {
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  color: var(--text-color);
  pointer-events: none;
}
img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(0.7);
}
img:hover {
  filter: brightness(0.9);
}
.body {
  position: relative;
  margin-top: 20px;
}

.title {
  margin-left: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: var(--bold-text-font);
}

.description {
  margin-top: 16px;
}

.detail-button {
  margin-top: 20px;
  text-align: center;
}
</style>