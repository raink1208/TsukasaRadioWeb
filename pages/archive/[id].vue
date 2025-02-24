<script setup lang="ts">
const route = useRoute();
const { data: archive } = await useAsyncData(() => {
  return queryCollection('archive')
    .where("draft", "=", true)
    .path(route.path)
    .first()
});
console.log(archive);
</script>

<template>
  <ContentRenderer :value="archive" />
</template>

<style scoped>

</style>