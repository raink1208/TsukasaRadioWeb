import axios from "axios";
import type { Guest } from "~/domains/guest/Guest";

const guestFilePath = "/data/guests.json";

export async function getGuestList(): Promise<Guest[]> {
    const guests = await axios.get<Guest[]>(guestFilePath);
    return guests.data;
}