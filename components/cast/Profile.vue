<script setup lang="ts">

</script>

<template>
  <div>
    <CommonContentTitle title="Cast Profile" />
    <div class="profile">
      <div class="picture">
        <img src="/img/tsukasa.webp" alt="プロフィール写真">
      </div>
      <div class="content">

      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  justify-content: center;

  gap: 20px;
}

.profile>div {
  width: calc(50% - 20px);
}

.picture img {
  width: 100%;
  height: 100%;
}
</style>