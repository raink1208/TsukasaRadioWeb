<script setup lang="ts">
import type {AudioPlayerExpose} from "~/domains/interface/AudioPlayerExpose";

const audioPlayer = ref<AudioPlayerExpose>();

const play = () => {
  audioPlayer.value?.play();
}

const pause = () => {
  audioPlayer.value?.pause();
}

provide("playBGM", play);
provide("pauseBGM", pause);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <AudioPlayer ref="audioPlayer" />
</template>