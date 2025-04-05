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
    <div class="chara">立ち絵エリア</div>
    <h1 class="title">領国つかさの深夜通信-Dark Web-<br>非公式ファンサイト</h1>
  </div>
</template>

<style scoped>
.fv {
  height: 800px;
  width: 100%;
  background-color: gray;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  overflow: hidden;
}

.chara {
  position: absolute;
  bottom: 0;
  right: 6vw;

  transform-origin: right;

  width: 450px;
  height: 650px;
  display: block;
  background-color: green;
}

.title {
  position: absolute;
  top: 20%;
  left: 10%;
}
</style>