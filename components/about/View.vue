<script setup lang="ts">

</script>

<template>
  <div>
    <CommonContentTitle title="About" />
    <div class="about">
      <div class="introduction">
      </div>
      <div class="profile">
        <img src="/img/tsukasa.webp" alt="プロフィール写真">
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;

  gap: 20px;
}

.about>div {
  width: calc(50% - 20px);
}

.about img {
  width: 100%;
  height: 100%;
}
</style>