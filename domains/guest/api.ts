import axios from "axios";

const guestFilePath = "/data/guests.json";

const getGuestList = async () => {
    const guests = await axios.get<Guest[]>(guestFilePath);
    return guests.data;
}

export { getGuestList };