<script setup lang="ts">
const { tweetId } = defineProps<{
  tweetId: string
}>();

const tweetContainerRef = ref<HTMLDivElement>();

onMounted(() => {
  if (tweetContainerRef.value) {
    const tweetEmbed = document.createElement('blockquote');
    tweetEmbed.classList.add("twitter-tweet");
    tweetEmbed.setAttribute("data-lang", "ja");
    tweetEmbed.setAttribute("data-theme", "dark");
    tweetEmbed.setAttribute("data-align", "center");
    tweetEmbed.innerHTML = `<a href="https://twitter.com/twitter/statuses/${tweetId}"></a>`

    tweetContainerRef.value.appendChild(tweetEmbed);

    loadWidget();
  }
})

const loadWidget = () => {
  if (!document.querySelector("script[src='https://platform.twitter.com/widgets.js']")) {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.twttr.widgets.load();
    }
  } else {
    window.twttr.widgets.load();
  }
}
</script>

<template>
  <div class="container" ref="tweetContainerRef" />
</template>

<style scoped>

</style>