<script setup lang="ts">
import { useAsyncData } from "#app";

const { data: archiveList } = await useAsyncData("archive", () => {
  return queryCollection("archive")
      .where("draft", "=", true)
      .order("archiveId", "DESC")
      .all();
})

const tags = computed(() => {
  return archiveList.value?.map(it => it.tags).flat()
      .reduce((acc: Record<string, number>, tag: string) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      }, {});
})

const selectedTag = ref<string | null>(null);

const filteredArchiveList = computed(() => {
  const filterTag = selectedTag.value;
  if (!filterTag) return archiveList.value;
  return archiveList.value?.filter(item => item.tags.includes(filterTag)) ?? null;
})


useSeoMeta({
  title: "Archive | 領国つかさの深夜通信-Dark Web-",
  description: "",

  ogTitle: "Archive | 領国つかさの深夜通信-Dark Web-",
  ogDescription: "",
})

</script>

<template>
  <InnerWrapper :max-size="1500">
    <h1 class="title">Archive</h1>
    <CommonTagFilter v-model="selectedTag" :tags="tags" />
    <ArchiveCardList :archiveList="filteredArchiveList" />
  </InnerWrapper>
</template>

<style scoped>
.title {
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 40px;
}
</style>