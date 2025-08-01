<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <NavContent />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
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
  width: 100%;
}
</style>