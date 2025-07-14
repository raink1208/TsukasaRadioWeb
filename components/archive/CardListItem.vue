<script setup lang="ts">
import type { ArchiveCollectionItem } from "@nuxt/content";

const { archive } = defineProps<{
  archive: ArchiveCollectionItem;
}>();

const getThumbnail = (videoId: string) =>
    `http://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

const getYouTubeLink = (videoId: string) =>
    `https://www.youtube.com/live/${videoId}`;

const getContentURL = (archiveId: string) => `/archive/${archiveId}`;
</script>

<template>
  <div class="card">
    <div class="content">
      <a :href="getYouTubeLink(archive.videoId)">
        <figure>
          <img :src="getThumbnail(archive.videoId)" alt="サムネイル" />
          <Icon name="icon-park-outline:play" class="play-icon" />
        </figure>
      </a>
      <div class="body">
        <p class="title">{{ archive.title }}</p>
        <p class="description">{{ archive.description }}</p>
        <div class="detail-button">
          <CommonButton :to="getContentURL(archive.archiveId)" text="詳細を見る" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 15px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50%;
  color: var(--text-color);
  pointer-events: none;
}

figure img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(0.6);
}

figure img:hover {
  filter: brightness(0.8);
}

.body {
  margin: 15px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  min-height: 210px;
}

.title {
  margin-left: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: var(--bold-text-font);
}

.description {
  margin-top: 15px;
  letter-spacing: 1px;
}

.detail-button {
  margin-top: auto;
  text-align: center;
}
</style>