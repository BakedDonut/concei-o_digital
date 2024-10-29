import { useEffect } from "react";
import { registerUserNotification } from "../notification/registerUserNotification";
import { updateDeviceIdNotificationApi } from "../api/device";
import { getDeviceDataStorage } from "../storage/DeviceStorage";
import { Device } from "../@types/device";

export function useUpdateOnesignal(){

    useEffect(() => {
        const fetchDeviceData = async () => {
            const deviceData = await getDeviceDataStorage();

            if (deviceData) {
                updateIdNotification();
            }
        };

        fetchDeviceData();
    }, []);

    async function updateIdNotification(){
        try {
            const idNotification = await registerUserNotification();
            if(idNotification){
                await updateDeviceIdNotificationApi(idNotification.toString());
            }
        } catch (error) {
            throw(error);
        }
    }
}