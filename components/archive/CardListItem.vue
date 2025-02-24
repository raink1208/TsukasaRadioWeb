<script setup lang="ts">
import type {ArchiveCollectionItem} from "@nuxt/content";

const {archive} = defineProps<{
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
      <NuxtLink :to="getYouTubeLink(archive.videoId)">
        <figure>
          <img :src="getThumbnail(archive.videoId)" alt="サムネイル"/>
        </figure>
      </NuxtLink>
      <div class="body">
        <p class="title">{{ archive.title }}</p>
        <p class="description">{{ archive.description }}</p>
        <div class="detail-button">
          <CommonButton :to="getContentURL(archive.archiveId)" text="続きを見る"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 400px;

  border: 1px solid var(--sub-accent-color);
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

img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.body {
  position: relative;
  height: 150px;
  margin-top: 20px;
}

.title {
  margin-left: 5px;
}

.description {
  margin-top: 16px;
}

.detail-button {
  position: absolute;
  width: 100%;
  bottom: 15px;

  text-align: center;
}

</style>