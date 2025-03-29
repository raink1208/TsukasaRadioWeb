import Pace from 'pace-js';
import 'pace-js/themes/blue/pace-theme-flash.css';

export default defineNuxtPlugin( async () => {
    if (window.location.pathname === "/" && !window.paceInitialized) {
        console.log("pace start");
        Pace.start({
            restartOnRequestAfter: false,
            restartOnPushState: false,
            eventLag: false,
        });
        Pace.restart();
        window.paceInitialized = true;
    }
})