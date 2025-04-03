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
          <button @click="handleBGMOn">On<Icon name="material-symbols:volume-up" size="25px" /></button>
          <button @click="handleBGMOff">Off<Icon name="material-symbols:volume-off" size="25px" /></button>
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
  gap: 40px;
  font-size: 20px;
  font-weight: bold;
}

button {
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 110px;
  padding: 10px 0;

  border: 1px solid var(--sub-accent-color);
  border-radius: 10px;
}
</style>