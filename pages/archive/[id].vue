<script setup lang="ts">
import { toDateString } from "~/domains/utils/date";

const route = useRoute();

const { data: archive } = await useAsyncData(`${route.params.id}`, () => {
  return queryCollection("archive")
      .where("draft", "=", true)
      .where("archiveId", "=", route.params.id)
      .first();
});

const getThumbnail = (videoId: string) => {
  return `http://img.youtube.com/vi/${videoId}/sddefault.jpg`;
}

useSeoMeta({
  title: `${archive.value?.title} | 領国つかさの深夜通信-Dark Web-`,
  description: "",

  ogTitle: `${archive.value?.title} | 領国つかさの深夜通信-Dark Web-`,
  ogDescription: "",
})
</script>

<template>
  <InnerWrapper :max-size="1200">
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
  margin-top: 50px;
  padding: 0 20px;
}

.header figure {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
}

.header figure img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  margin-top: 40px;
}

.date {
  margin-top: 15px;
}

.content {
  margin-top: 30px;
}

:deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
  padding: 0 10px;
}

:deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6), :deep(p) {
  margin: revert;
}

:deep(h3) {
  font-weight: bold;
}

:deep(p) {
  font-family: var(--article-font);
}

:deep(a) {
  text-decoration: none;
  color: #1d9bf0;
}

:deep(li) {
  margin-top: 15px;
}
</style>