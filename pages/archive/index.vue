<script setup lang="ts">
import { useAsyncData } from "#app";

const { data: archiveList } = await useAsyncData("archive", () => {
  return queryCollection("archive")
    .where("draft", "=", true)
    .order("archiveId", "DESC")
    .all();
})
</script>

<template>
  <InnerWrapper :max-size="1480">
    <ArchiveCardList :archiveList="archiveList" />
  </InnerWrapper>
</template>

<style scoped>

</style>