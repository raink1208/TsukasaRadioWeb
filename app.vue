<script setup lang="ts">
const { bgmOverlay, hideOverlay } = useBGMOverlay();
</script>

<template>
  <AudioPlaySelect @hideOverlay="hideOverlay" v-show="bgmOverlay" />
  <div v-show="!bgmOverlay">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  --base-color: #1f1f1f;
  --base-sub-color: #1c1c1c;
  --accent-color: #B92E46;
  --sub-accent-color: #E8C086;
  --text-color: #d3d3d3;
  --divider-color: rgba(255, 255, 255, 0.4);
  --headline-font: "BIZ UDPGothic", sans-serif;
  --text-font: "Meiryo UI", sans-serif;
  --article-font: "Meiryo", sans-serif;
  --bold-text-font: "BIZ UDPGothic", sans-serif;
}

html {
  background-color: var(--base-color);
  font-size: 18px;
}

html, p {
  color: var(--text-color);
}

h2, h3 {
  font-family: var(--headline-font);
}

p {
  font-family: var(--text-font);
}

a {
  text-decoration: none;
}

::-webkit-scrollbar{
  width: 8px;
}
::-webkit-scrollbar-track{
  background-color: var(--base-sub-color);
}
::-webkit-scrollbar-thumb{
  background-color: var(--accent-color);
  border-radius: 6px;
}
</style>