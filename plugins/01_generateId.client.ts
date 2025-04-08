import { v4 as uuidv4 } from 'uuid';

export default defineNuxtPlugin(() => {
    if (!localStorage.getItem("userId")) {
        localStorage.setItem("userId", uuidv4());
    }
});