<script setup lang="ts">
import {ArchiveCollectionItem} from "@nuxt/content"

const {archiveList} = defineProps<{
  archiveList: ArchiveCollectionItem[]
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
}

.archive-card {
  width: 400px;
}

.empty {
  content: "";
  display: block;
}
</style>