import {MILLISECONDS} from "../featured/constants";

export const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.now();
    if (time < 0) {
        console.log("date passed");
    } else {
        const seconds = Math.floor((time / MILLISECONDS) % 60);
        const minutes = Math.floor((time / MILLISECONDS / 60) % 60);
        const hours = Math.floor((time / (MILLISECONDS * 60 * 60)) % 24);
        const days = Math.floor(time / (MILLISECONDS * 60 * 60 * 24));

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }
};
