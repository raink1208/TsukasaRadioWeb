<script setup lang="ts">
const { imgPath, alt, width } = defineProps<{
  imgPath: string;
  alt: string;
  width: number;
}>();

</script>

<template>
  <div class="container">
    <img :src="imgPath" :alt="alt" :style="{width: width}">
    <caption>{{ alt }}</caption>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>