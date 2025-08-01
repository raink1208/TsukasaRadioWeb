let audioInstance: ReturnType<typeof useAudio> | null = null;

export const useBGM = () => {
    if (!audioInstance) {
        audioInstance = useAudio("/music/BGM.mp3");
    }

    return audioInstance;
}

const useAudio = (src: string) => {
    const audio = ref<HTMLAudioElement | null>(null);
    const isPlaying = ref(false);
    const volume = ref(0.01);

    const play = () => {
        if (audio.value) {
            audio.value.currentTime = 0;
            audio.value.play();
            isPlaying.value = true;

        }
    }

    const pause = () => {
        if (audio.value) {
            audio.value.pause();
            isPlaying.value = false;
        }
    }

    onMounted(() => {
        audio.value = new Audio(src);

        if (audio.value) {
            audio.value.loop = true;
            audio.value.volume = volume.value;
        }

        watch(volume, (newVal) => {
            if (audio.value) {
                audio.value.volume = newVal;
                console.log(newVal);
            }
        });
    })

    onUnmounted(() => {
        if (audio.value) {
            audio.value.pause();
            audio.value.src = "";
        }
    });

    return {
        play,
        pause,
        isPlaying,
        volume
    }
}