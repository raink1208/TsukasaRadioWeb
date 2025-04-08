import Clarity from "@microsoft/clarity";

export default defineNuxtPlugin(() => {
    const userId = localStorage.getItem("userId") ?? "";
    Clarity.init('qxwnr97w9j');
    Clarity.setTag("userId", userId);
});
