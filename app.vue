<script setup lang="ts">
import type {AudioPlayerExpose} from "~/domains/interface/AudioPlayerExpose";

const { bgmOverlay, hideOverlay } = useBGMOverlay();

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
  <AudioPlaySelect @hideOverlay="hideOverlay" v-show="bgmOverlay" />
  <div v-show="!bgmOverlay">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <AudioPlayer ref="audioPlayer" />
</template>