import {MILLISECONDS} from "./constants";

export const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.now();
    return time < 0
        ? {
            timePassed: true
        }
        : {
            remainingTime: {
                days: Math.floor(time / (MILLISECONDS * 60 * 60 * 24)),
                hours: Math.floor((time / (MILLISECONDS * 60 * 60)) % 24),
                minutes: Math.floor((time / MILLISECONDS / 60) % 60),
                seconds: Math.floor((time / MILLISECONDS) % 60)
            }
        }
};
