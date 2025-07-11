<script setup lang="ts">

</script>

<template>
  <div>
    <CommonContentTitle title="Information" />
    <div class="data-row">
      <div class="section">
        <h3 class="section-title">番組情報</h3>
        <dl>
          <dt>番組名</dt>
          <dd>領国つかさの深夜通信-Dark Web-</dd>
        </dl>
        <dl>
          <dt>通称</dt>
          <dd>つか通</dd>
        </dl>
        <dl>
          <dt>ハッシュタグ</dt>
          <dd>#領国つかさの深夜通信DW</dd>
        </dl>
        <dl>
          <dt>配信開始時間</dt>
          <dd>不定期 24:00~</dd>
        </dl>
        <dl>
          <dt>初回配信日</dt>
          <dd>2024年2月15日 24:00~</dd>
        </dl>
      </div>
      <div class="section">
        <h3 class="section-title">サイト情報</h3>
        <dl>
          <dt>ヘッダーイラスト</dt>
          <dd>海鼠様 (<a href="https://twitter.com/NAMCOOo" target="_blank">@NAMCOOo</a>)</dd>
        </dl>
        <dl>
          <dt>サイトBGM</dt>
          <dd>どるふぃん様 (<a href="https://twitter.com/2ndHorizon1" target="_blank">@2ndHorizon1</a>)</dd>
        </dl>
        <dl>
          <dt>サイト制作</dt>
          <dd>rain1208 (<a href="https://twitter.com/rain1208_v" target="_blank">@rain1208_v</a>)</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.data-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  position: relative;
  z-index: 1;
  margin-top: 35px;
}

.section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.section-title {
  color: var(--accent-color);
  margin-bottom: 20px;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  letter-spacing: 2px;
}

dl {
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border-left: 3px solid var(--sub-accent-color);
  transition: all 0.3s ease;
}

dl:last-child {
  margin-bottom: 0;
}

dt {
  font-family: var(--bold-text-font);
  font-size: 0.9rem;
  color: var(--sub-accent-color);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

dd {
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.4;
}

a {
  color: #1d9bf0;
}

dl {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

dl:nth-child(1) { animation-delay: 0.1s; }
dl:nth-child(2) { animation-delay: 0.2s; }
dl:nth-child(3) { animation-delay: 0.3s; }
dl:nth-child(4) { animation-delay: 0.4s; }
dl:nth-child(5) { animation-delay: 0.5s; }

@media screen and (max-width: 768px) {
  .data-row {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>