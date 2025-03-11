<script setup lang="ts">
const { imgPath, alt } = defineProps<{
  imgPath: string;
  alt: string;
}>();
</script>

<template>
  <div class="row">
    <div class="content">
      <slot />
    </div>
    <div class="image">
      <figure>
        <img :src="imgPath" :alt="alt" />
      </figure>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  gap: 20px;
}

.image {
  width: calc(55% - 10px);
}

.content {
  width: calc(45% - 10px);
}

figure img {
  width: 100%;
}
</style>