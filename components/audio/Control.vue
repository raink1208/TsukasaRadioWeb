<script setup lang="ts">
const { play, pause, isPlaying, volume, current, duration } = useBGM();

const toggleBGM = () => {
  if (isPlaying.value) pause();
  else play();
}

const toDisplayTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const remainingSeconds = Math.floor(time % 60);
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
  return `${minutes}:${formattedSeconds}`;
}
</script>

<template>
  <div class="music-controller">
    <div class="header">BGM Control</div>
    <div class="seek-section">
      <div class="seek-container">
        <div class="seek-bar">
          <div class="seek-progress" :style="{ width: (current / duration) * 100 + '%' }"></div>
        </div>
      </div>
      <div class="time-display">
        <span>{{ toDisplayTime(current) }}</span>
        <span>{{ toDisplayTime(duration) }}</span>
      </div>
    </div>
    <div class="play-control">
      <button :class="{ playing: isPlaying, 'play-button': true }" @click="toggleBGM">
        <svg class="play-icon" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        <svg class="pause-icon" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      </button>
    </div>
    <div class="divider"></div>
    <div class="volume-section">
      <div class="volume-label">
        <span class="volume-icon">🔊</span>
        <span>音量</span>
      </div>
      <div class="volume-slider-container">
        <div class="volume-fill" :style="{ width: (volume * 100) + '%' }"></div>
        <input type="range" min="0" max="1" step="0.01" v-model="volume" class="volume-slider">
      </div>
    </div>
  </div>
</template>

<style scoped>
.music-controller {
  padding: 30px;
  width: 100%;
  max-width: 500px;
}

.header {
  text-align: center;
  margin-bottom: 25px;
  font-family: var(--headline-font);
  font-size: 24px;
  color: var(--sub-accent-color);
}

.play-control {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.play-button {
  background: var(--accent-color);
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(185, 46, 70, 0.3);
}

.play-button:hover {
  background: #d63456;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(185, 46, 70, 0.4);
}

.play-button:active {
  transform: scale(0.95);
}

.play-icon,
.pause-icon {
  width: 24px;
  height: 24px;
  fill: white;
}

.pause-icon {
  display: none;
}

.play-button.playing .play-icon {
  display: none;
}

.play-button.playing .pause-icon {
  display: block;
}

.seek-container {
  position: relative;
  margin-bottom: 10px;
}

.seek-bar {
  width: 100%;
  height: 6px;
  background: var(--base-color);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.seek-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-color) 0%, var(--sub-accent-color) 100%);
  width: 0%;
  border-radius: 3px;
  transition: width 0.1s ease;
}

.time-display {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--text-color);
  opacity: 0.8;
}

.divider {
  margin: 20px 0 10px 0;
  border-top: 2px solid var(--text-color);
}

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
  border-radius: 3px;
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
  border-radius: 3px 0 0 3px;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>