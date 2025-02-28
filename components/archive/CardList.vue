<script setup lang="ts">
import { ArchiveCollectionItem } from "@nuxt/content"

const { archiveList } = defineProps<{
  archiveList: ArchiveCollectionItem[]
}>();
</script>

<template>
  <div class="archive-table">
    <div v-for="archive in archiveList" :key="archive.archiveId">
      <ArchiveCardListItem :archive="archive" />
    </div>
  </div>
</template>

<style scoped>
.archive-table {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 80px;
}

</style>