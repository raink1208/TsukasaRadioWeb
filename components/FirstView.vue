<script setup lang="ts">
import { gsap } from 'gsap';

const props = defineProps<{
  isVisible: boolean
}>();

watch(() => props.isVisible, async (newValue) => {
  if (newValue) {
    await nextTick();
    const timeline = gsap.timeline();
    timeline.from(".chara", {
      x: '-35vw',
      opacity: 0,
      duration: 1,
      delay: 0.5,
    }).from(".title", {
      y: '80%',
      opacity: 0,
      duration: 1
    });
    timeline.play();
  }
});
</script>

<template>
  <div class="fv">
    <img class="background" src="/img/background.png" alt="">
    <h1 class="title">領国つかさの深夜通信-Dark Web-<br>非公式ファンサイト</h1>
  </div>
</template>

<style scoped>
.fv {
  height: 100vh;
  width: 100%;
  background-color: gray;

  position: relative;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}


.title {
  position: absolute;
  top: 20%;
  left: 10%;
}
</style>