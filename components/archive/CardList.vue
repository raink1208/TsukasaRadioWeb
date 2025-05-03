<script setup lang="ts">
import type {ArchiveCollectionItem} from "@nuxt/content"

const {archiveList} = defineProps<{
  archiveList: ArchiveCollectionItem[] | null
}>();
</script>

<template>
  <div class="archive-table">
    <div class="archive-card" v-for="archive in archiveList" :key="archive.archiveId">
      <ArchiveCardListItem :archive="archive"/>
    </div>
    <div class="empty archive-card" />
    <div class="empty archive-card" />
  </div>
</template>

<style scoped>
.archive-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 30px;
}

.archive-card {
  width: 450px;
  display: flex;
  flex-direction: column;
}

.empty {
  visibility: hidden;
}
</style>