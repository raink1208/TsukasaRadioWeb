<script setup lang="ts">
const emit = defineEmits(["hideOverlay"]);

const playBGM = inject<() => void>("playBGM");

const handleBGMOn = () => {
  playBGM?.();
  emit("hideOverlay");
}

const handleBGMOff = () => {
  emit("hideOverlay");
}

</script>

<template>
  <div class="overlay">
    <div class="center">
      <button @click="handleBGMOn">On</button>
      <button @click="handleBGMOff">Off</button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 100;

  background-color: var(--base-color);
}
</style>