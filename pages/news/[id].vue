<script setup lang="ts">
const route = useRoute();
const { data: news } = await useAsyncData(() => {
  return queryCollection('news')
    .where("draft", "=", true)
    .path(route.path)
    .first()
});
</script>

<template>
  <InnerWrapper :max-size="1380">
    <section>
      <h1>{{ news.title }}</h1>
      <div class="content">
        <ContentRenderer v-if="news" :value="news" />
      </div>
    </section>
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