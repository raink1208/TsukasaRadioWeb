<script setup lang="ts">
const model = defineModel<string | null>();

defineProps<{
  tags: Record<string, number> | undefined
}>();
</script>

<template>
  <div class="tag-filter">
    <button
        :class="{ active: model === null }"
        @click="model = null"
    >
      全て表示
    </button>
    <button
        v-for="(count, tag) in tags"
        :key="tag"
        :class="{ active: model === tag }"
        @click="model = tag"
    >
      {{ tag }} ({{ count }})
    </button>
  </div>
</template>

<style scoped>
.tag-filter {
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag-filter button {
  padding: 0.4rem 0.8rem;
  border: 1px solid #414141;
  border-radius: 10px;
  background-color: #414141;
  color: #eaeaea;
  cursor: pointer;
}

.tag-filter button.active {
  background-color: #ddd;
  color: #535353;
  border-color: #ddd;
}
</style>