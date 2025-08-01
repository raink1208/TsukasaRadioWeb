<script setup lang="ts">
const isOpenMenu = ref<boolean>(false);
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
}

</script>

<template>
  <div class="button-area">
    <button class="menu-toggle" :class="{ open: isOpenMenu }" @click="toggleMenu" >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <div class="menu-overlay" :class="{ open: isOpenMenu }">
    <nav class="menu-nav">
      <ul class="menu-list">
        <li class="menu-item">
          <NuxtLink to="/" class="menu-link" @click="toggleMenu">TOP</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="/news" class="menu-link" @click="toggleMenu">News</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="/archive" class="menu-link" @click="toggleMenu">Archive</NuxtLink>
        </li>
      </ul>
    </nav>
    <AudioControl class="audio-control" />
  </div>
</template>

<style scoped>
.button-area {
  position: fixed;
  top: 20px;
  right: 15px;

  height: 60px;
  width: 60px;

  z-index: 1001;
}

.menu-toggle {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;

  background-color: var(--accent-color);
  border-radius: 16px;
}

.menu-toggle span {
  width: 75%;
  height: 5px;
  background: var(--text-color);
  margin: 4px 0;
  transition: all 0.3s ease;
  border-radius: 3px;
  transform-origin: center;
}

.menu-toggle.open span:nth-child(1) {
  transform: rotate(45deg) translate(9px, 9px);
}

.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open span:nth-child(3) {
  transform: rotate(-45deg) translate(9px, -9px);
}

.menu-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100lvh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;

  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1000;
}

.menu-overlay.open {
  opacity: 1;
  visibility: visible;
}

.menu-nav {
  text-align: center;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  margin: 2rem 0;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.3s ease;
}

.menu-overlay.open .menu-item {
  transform: translateY(0);
  opacity: 1;
}

.menu-overlay.open .menu-item:nth-child(1) { transition-delay: 0.1s; }
.menu-overlay.open .menu-item:nth-child(2) { transition-delay: 0.2s; }
.menu-overlay.open .menu-item:nth-child(3) { transition-delay: 0.3s; }
.menu-overlay.open .menu-item:nth-child(4) { transition-delay: 0.4s; }
.menu-overlay.open .menu-item:nth-child(5) { transition-delay: 0.5s; }

.menu-link {
  color: white;
  text-decoration: none;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 2px;
  transition: color 0.3s ease;
}

.menu-link:hover {
  color: #ccc;
}

.audio-control {
  width: 70%;
}

@media (max-width: 768px) {
  .button-area {
    height: 50px;
    width: 50px;
  }

  .menu-toggle.open span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
  }

  .menu-toggle.open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }


  .menu-link {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .menu-link {
    font-size: 2rem;
  }
}
</style>