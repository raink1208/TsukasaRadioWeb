<script setup lang="ts">
const { guest } = defineProps<{
  guest: Guest
}>();
</script>

<template>
  <div class="card">
    <div class="card-body">
      <img :src="guest.icon"  alt="アイコン画像" />
      <div>
        <p class="affiliation">{{ guest.affiliation }}</p>
        <p class="name">{{ guest.name }}</p>
        <div class="urls">
          <NuxtLink class="url-icon" :to="guest.urls.youtube">
            <Icon name="mdi:youtube" size="30px" />
          </NuxtLink>
          <NuxtLink class="url-icon" :to="guest.urls.twitter">
            <Icon name="prime:twitter" size="27px" />
          </NuxtLink>
          <NuxtLink class="url-icon" :to="guest.urls.official">
            <Icon name="mdi:link" size="30px" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 100%;
  border-radius: 10px;
}

.card {
  position: relative;
  height: 160px;
  width: 350px;
  border: 1px solid var(--text-color);
  border-radius: 10px;

  background-color: var(--base-sub-color);
}

.card-body {
  display: flex;
  gap: 20px;
  padding: 15px;
  height: 100%;
}

.affiliation {
  margin-left: 2px;
  margin-top: 10px;
}

.name {
  margin-top: 8px;
  font-family: "MS ゴシック", sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.urls {
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-size: 30px;
}

.url-icon {
  margin-left: 5px;
}

</style>