<script setup lang="ts">
const { play, pause, isPlaying, volume } = useBGM();
</script>

<template>
  <div class="music-controller" :class="{ playing: isPlaying }">
    <div class="volume-section">
      <div class="volume-label">
        <span class="volume-icon">🔊</span>
        <span>音量</span>
      </div>
      <div class="volume-slider-container">
        <div class="volume-fill" :style="{ width: (volume * 100) + '%' }"></div>
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            v-model="volume"
            class="volume-slider"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.volume-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 14px;
  color: var(--text-color);
}

.volume-icon {
  font-size: 18px;
  color: var(--sub-accent-color);
}

.volume-slider-container {
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
}

.volume-slider {
  width: 100%;
  height: 6px;
  border-radius: 0;
  background: var(--base-sub-color);
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--sub-accent-color);
  cursor: pointer;
}

.volume-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--sub-accent-color);
  cursor: pointer;
  border: none;
}

.volume-fill {
  position: absolute;
  top: 50%;
  left: 0;
  height: 6px;
  background: var(--sub-accent-color);
  border-radius: 0;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>