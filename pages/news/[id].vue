<script setup lang="ts">
const route = useRoute();
const { data: news } = await useAsyncData(`${route.params.id}`, () => {
  return queryCollection("news")
      .where("draft", "=", true)
      .where("newsId", "=", route.params.id)
      .first()
});

useSeoMeta({
  title: `${news.value?.title} | 領国つかさの深夜通信-Dark Web-`,
  description: "",

  ogTitle: `${news.value?.title} | 領国つかさの深夜通信-Dark Web-`,
  ogDescription: "",
})
</script>

<template>
  <InnerWrapper :max-size="1380">
    <article v-if="news">
      <h1>{{ news.title }}</h1>
      <div class="content">
        <ContentRenderer v-if="news" :value="news" />
      </div>
    </article>
    <div v-else>

    </div>
  </InnerWrapper>
</template>

<style scoped>
section {
  margin-top: 100px;
}
.content {
  margin: 30px 20px 0 20px;
}
</style>