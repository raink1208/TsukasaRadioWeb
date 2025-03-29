export const useBGMOverlay = () => {
    const bgmOverlay = useState('bgm-overlay-visible', () => true);

    const showOverlay = () => {
        bgmOverlay.value = true;
    }

    const hideOverlay = () => {
        bgmOverlay.value = false;
    }

    return {
        bgmOverlay,
        showOverlay,
        hideOverlay,
    }
}