<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <NavBar />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
:root {
  --base-color: #1f1f1f;
  --base-sub-color: #1c1c1c;
  --accent-color: #B92E46;
  --sub-accent-color: #b78575;
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

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.content {
  flex: 1;
  width: 100%;
}

footer {
  margin-top: auto;
  width: 100%; /* 追加 */
}
</style>