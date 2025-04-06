import Clarity from "@microsoft/clarity";

export default defineNuxtPlugin(() => {
    window.addEventListener('DOMContentLoaded', () => {
        Clarity.init('qxwnr97w9j');
    })
});
