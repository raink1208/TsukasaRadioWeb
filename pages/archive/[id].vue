<script setup lang="ts">
import { toDateString } from "~/domains/utils/date";
const route = useRoute();
const { data: archive } = await useAsyncData(() => {
  return queryCollection("archive")
      .where("draft", "=", true)
      .path(route.path)
      .first()
});
const getThumbnail = (videoId: string) => {
  return `http://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
</script>

<template>
  <InnerWrapper :max-size="1380">
    <article v-if="archive">
      <div class="header">
        <figure>
          <img :src="getThumbnail(archive.videoId)" alt="サムネイル">
        </figure>
        <h1 class="title">{{ archive.title }}</h1>
        <p class="date">投稿日: {{ toDateString(archive.date) }}</p>
      </div>
      <div class="content">
        <ContentRenderer :value="archive" />
      </div>
    </article>
  </InnerWrapper>
</template>

<style scoped>
.header {
  margin-top: 80px;
  padding: 0 10px;
}
.header figure {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}
.header figure img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.date {
  margin-top: 15px;
}
.content {
  margin-top: 30px;
}
</style>