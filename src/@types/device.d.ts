import { EventTypes } from "./event";

export type Device = {
    id: string;
    notificationPreferences: {
        eventsNotificationId: EventTypes[],
        extraNotificationPreference: string[]
    }
}

