<script setup lang="ts">
const stars = ref<HTMLDivElement>();

const starTypes = [
  { color: '#CAE1FF', probability: 0.05 },
  { color: '#F8F7FF', probability: 0.20 },
  { color: '#FFFFFF', probability: 0.40 },
  { color: '#FFF8DC', probability: 0.20 },
  { color: '#FFD700', probability: 0.10 },
  { color: '#FF8C00', probability: 0.03 },
  { color: '#FF4500', probability: 0.02 }
];

onMounted(() => {
  for (let i = 0; i <= 400; i++) {
    createStar();
  }
})

const getRandomStarColor = () => {
  const rand = Math.random();
  let cumulativeProbability = 0;

  for (const starType of starTypes) {
    cumulativeProbability += starType.probability;
    if (rand <= cumulativeProbability) {
      return starType.color;
    }
  }

  return '#FFFFFF';
};

const createStar = () => {
  const starEl = document.createElement("span");
  starEl.className = "star";

  const sizeProbability = Math.random();
  let size;

  if (sizeProbability > 0.995) {
    size = Math.random() * (4 - 3) + 3;
  } else if (sizeProbability > 0.97) {
    size = Math.random() * (3 - 2) + 2;
  } else if (sizeProbability > 0.85) {
    size = Math.random() * (2 - 1.3) + 1.3;
  } else {
    size = Math.random() * (1.3 - 0.8) + 0.8;
  }

  starEl.style.width = `${size}px`;
  starEl.style.height = `${size}px`;
  starEl.style.left = `${Math.random() * 100}%`;
  starEl.style.top = `${Math.random() * 100}%`;

  starEl.style.animationDelay = `${Math.random() * 15}s`;
  starEl.style.animationDuration = `${Math.random() * 5 + 3}s`;

  const starColor = getRandomStarColor();
  starEl.style.backgroundColor = starColor;

  starEl.style.boxShadow = `0 0 ${size + 1}px ${size / 2}px ${starColor}40`;

  stars.value?.appendChild(starEl);
};
</script>

<template>
  <div class="star-container">
    <div class="stars" ref="stars">
    </div>
  </div>
</template>

<style>
.star-container {
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
}

.stars {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;

  overflow: hidden;
}

.star {
  position: absolute;
  display: block;
  border-radius: 50%;
  opacity: 0;
  animation: twinkle infinite;
}

@keyframes twinkle {
  0% {
    opacity: 0.2;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    opacity: 0.2;
    transform: scale(1);
  }
}
</style>