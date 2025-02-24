<script setup lang="ts">
const { title } = defineProps<{
  title: string
}>();
</script>

<template>
  <div class="content-title">
    <div>
      <h2>{{ title }}</h2>
    </div>
    <span class="divide-line"></span>
  </div>
</template>

<style scoped>
.content-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.content-title h2 {
  color: var(--accent-color);
}

.content-title .divide-line {
  border-top: 2px solid var(--accent-color);
  flex: 1;
}
</style>