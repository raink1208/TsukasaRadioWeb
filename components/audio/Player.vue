<script setup lang="ts">
const src = "/music/BGM.mp3";
const audio = ref<HTMLAudioElement>();

onMounted(() => {
  if (audio.value) {
    audio.value.volume = 0.01;
  }
});

const play = () => {
  if (!audio.value) {
    console.error("audio reference not found");
    return;
  }

  audio.value.currentTime = 0;
  audio.value.play();
}

const pause = () => {
  audio.value?.pause();
}

defineExpose({ play, pause });
</script>

<template>
  <audio ref="audio" :src="src" loop />
</template>

<style scoped>

</style>