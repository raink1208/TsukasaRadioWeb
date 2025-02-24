<script setup lang="ts">

</script>

<template>
  <ul class="nav-bar">
    <li>
      <NuxtLink class="link" to="/">
        Top
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="/news/">
        News
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="/archive/">
        Archive
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="/info/">
        Info
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  gap: 20px;
  background-color: var(--base-sub-color);
}
.nav-bar li {
  display: flex;
  width: 130px;
  height: 100%;
  font-size: 24px;
  text-align: center;
  font-family: var(--headline-font);
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>