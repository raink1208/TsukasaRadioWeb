<script setup lang="ts">
import { NuxtLink } from '#components';

const { to, text } = defineProps<{
  to: string,
  text: string
}>();
</script>

<template>
  <NuxtLink :to="to">
    <p class="button">
      {{ text }}
    </p>
  </NuxtLink>
</template>

<style scoped>
.button {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(45deg, #B92E46,  #6b1e2f);
  color: var(--text-color);
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
}

.button:hover::before {
  left: 100%;
}
</style>