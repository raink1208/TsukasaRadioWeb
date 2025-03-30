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
      <h2>このサイトではBGMが再生されます。</h2>
      <div class="controls">
        <h3>SOUND</h3>
        <div class="buttons">
          <button @click="handleBGMOn">On</button>
          <button @click="handleBGMOff">Off</button>
        </div>
      </div>
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

.center {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
}

h2 {
  margin-bottom: 30px;
}

.controls {
  padding: 50px 0 30px 0;
}

.controls h3 {
}

.controls .buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

button {
  color: var(--text-color);
}
</style>