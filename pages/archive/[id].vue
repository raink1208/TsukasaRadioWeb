<script setup lang="ts">
import {toDateString} from "~/domains/utils/date";

const route = useRoute();
const { data: archive } = await useAsyncData(() => {
  return queryCollection("archive")
    .where("draft", "=", true)
    .path(route.path)
    .first()
});
console.log(archive);
</script>

<template>
  <InnerWrapper :max-size="1380">
    <article v-if="archive">
      <div class="header">
        <h1 class="title">{{ archive.title }}</h1>
        <p class="date">投稿日: {{ toDateString(archive.date) }}</p>
      </div>
      <div class="content">
        <ContentRenderer :value="archive" />
      </div>
    </article>
    <div v-else>

    </div>
  </InnerWrapper>
</template>

<style scoped>
.header {
  margin-top: 80px;
  padding: 0 10px;
}
.date {
  margin-top: 15px;
}

.content {
  margin-top: 30px;
}
</style>