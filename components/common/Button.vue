<script setup lang="ts">
const { to, text } = defineProps<{
  to: string,
  text: string
}>();
</script>

<template>
  <NuxtLink :to="to">
    <p>{{ text }}</p>
  </NuxtLink>
</template>

<style scoped>
p {
  display: inline-block;
  padding: 10px 30px;
  border: 2px solid #b4babd;
  border-radius: 16px;
}

p:hover {
  filter: brightness(0.6) contrast(1.8);
}
</style>