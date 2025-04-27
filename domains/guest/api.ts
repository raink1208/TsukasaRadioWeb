import axios from "axios";
import type { Guest } from "~/domains/guest/Guest";

const guestsURL = "https://tsukasa-radio-api.kkouga1208.workers.dev/guests";

export async function getGuestList(): Promise<Guest[]> {
    const userId = localStorage.getItem("userId");
    const guests = await axios.get<Guest[]>(guestsURL, {
        params: {
            uid: userId,
        }
    });
    return guests.data;
}