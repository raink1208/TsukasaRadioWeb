<script setup lang="ts">
import BackgroundStar from '../BackgroundStar.vue';

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
    <BackgroundStar />
    <div class="container">
      <div class="message">このサイトではBGMが再生されます。</div>

      <div class="radio-info">
        <div class="station-name">領国つかさの深夜通信 -Dark Web-<br>非公開ファンサイト</div>
      </div>

      <div class="sound-label">SOUND CONTROL</div>

      <div class="controls">
        <button class="control-btn btn-on active" @click="handleBGMOn">
          <Icon name="material-symbols:volume-up" size="25px" />
          ON
        </button>
        <button class="control-btn btn-off" @click="handleBGMOff">
          <Icon name="material-symbols:volume-off" size="25px" />
          OFF
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 70%, #16213e 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 0;
}

.container {
  background: rgba(20, 20, 30, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 40px;
  box-shadow:
      0 0 30px rgba(255, 107, 107, 0.1),
      inset 0 0 20px rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 107, 0.2);
  text-align: center;
  max-width: 450px;
  width: 90%;
  position: relative;
  z-index: 1;
  animation: fadeIn 1.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message {
  color: var(--accent-color);
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.radio-info {
  margin-bottom: 30px;
  opacity: 0.7;
}

.station-name {
  color: var(--text-color);
  font-weight: 500;
  font-size: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.sound-label {
  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 25px;
  text-transform: uppercase;
  opacity: 0.8;
}

.controls {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.control-btn {
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 120px;
  padding: 10px 20px;
  line-height: 25px;

  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-1px);
}
</style>