import { EventTypes } from "./event";

export type Device = {
    id: string;
    name: string;
    notificationPreferences: {
        eventsNotificationId: string[],
        //extraNotificationPreference: string[] possível precisar caso escalone o projeto
    }
}

