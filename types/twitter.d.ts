interface TwitterWidgets {
    load: () => void;
    widgets: {
        load: () => void;
    };
}

interface Window {
    twttr: TwitterWidgets;
}