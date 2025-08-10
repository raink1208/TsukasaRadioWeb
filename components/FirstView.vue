<script setup lang="ts">
import { gsap } from 'gsap';

const props = defineProps<{
  isVisible: boolean
}>();

watch(() => props.isVisible, async (newValue) => {
  if (newValue) {
    await nextTick();
    const timeline = gsap.timeline();

    timeline.from(".desk", {
      opacity: 0,
      duration: 1
    }).from(".character", {
      x: '-15vw',
      opacity: 0,
      duration: 1.5
    }).from(".onair", {
      opacity: 0,
      duration: 1
    }).from(".white", {
      opacity: 0,
      duration: 1
    }, "-=0.3").from(".title", {
      y: '80%',
      opacity: 0,
      duration: 1
    }).from(".effect", {
      opacity: 0,
      duration: 1
    }, "-=0.3");
    timeline.play();
  }
});
</script>

<template>
  <div class="fv">
    <div class="background-wrapper">
      <img class="background" src="/img/firstview/background.webp" alt="bg">
      <img class="white" src="/img/firstview/white.webp" alt="white">
      <img class="character" src="/img/firstview/tsukasa.webp" alt="tsukasa">
      <img class="desk" src="/img/firstview/desk.webp" alt="desk">
      <img class="onair" src="/img/firstview/ONAIR.webp" alt="onair">
      <img class="effect" src="/img/firstview/effect.webp" alt="effect">
    </div>
    <h1 class="title">領国つかさの深夜通信-Dark Web-<br>非公式ファンサイト</h1>
  </div>
</template>

<style scoped>
.fv {
  height: 100lvh;
  width: 100%;
  background-color: gray;

  position: relative;
}

.background-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.background-wrapper img {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}

.background-wrapper .character {
  position: absolute;
  bottom: -30px;
  right: 0;

  max-height: calc(100% + 20px);
  max-width: 90vw;


  left: auto;
  transform: none;
}

.background-wrapper .effect {
  opacity: 0.8;
}

.title {
  position: absolute;
  top: 20%;
  left: 10%;
}

@media screen and (max-width: 800px) {
  .title {
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 10px;

    text-align: center;
    font-size: 25px;
    white-space: nowrap;
  }
}

@media screen and (max-width: 450px) {
  .title {
    font-size: 20px;
  }
}
</style>