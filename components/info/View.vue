<script setup lang="ts">

</script>

<template>
  <div>
    <CommonContentTitle title="Information" />
    <div class="data-row">
      <div>
        <h3>番組情報</h3>
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
      <div>
        <h3>サイト情報</h3>
        <dl>
          <dt>ヘッダーイラスト</dt>
          <dd>海鼠様 (<a href="https://twitter.com/NAMCOOo">@NAMCOOo</a>)</dd>
        </dl>
        <dl>
          <dt>サイトBGM</dt>
          <dd>どるふぃん様 (<a href="https://twitter.com/2ndHorizon1">@2ndHorizon1</a>)</dd>
        </dl>
        <dl>
          <dt>サイト制作</dt>
          <dd>rain1208 (<a href="https://twitter.com/rain1208_v">@rain1208_v</a>)</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
.data-row {
  margin-top: 30px;
  display: flex;
  gap: 30px;
}

.data-row div {
  padding-bottom: 20px;
  width: calc(50% - 15px);
}

.data-row dl {
  padding: 20px 0 15px 10px;
}

.data-row dt {
  text-decoration: underline var(--accent-color) 1px;
  text-underline-offset: 0.2rem;
}

.data-row dd {
  padding-left: 5px;
}

.data-row dl:not(:last-child) {
  border-bottom: 2px dashed var(--sub-accent-color);
}

a {
  color: #1d9bf0;
}

@media screen and (max-width: 768px) {
  .data-row {
    display: revert;
  }
  .data-row div {
    width: revert;
  }
}
</style>