<script setup lang="ts">
const { maxSize } = defineProps<{
  maxSize?: number
}>();
</script>

<template>
  <div class="inner-wrapper" :style="{'max-width': maxSize + 'px'}">
    <slot />
  </div>
</template>

<style scoped>
.inner-wrapper {
  max-width: 1280px;
  padding-left: 2.5em;
  padding-right: 2.5em;
  margin-left: auto;
  margin-right: auto;
}
</style>