import { OneSignal } from "react-native-onesignal";
import * as Device from 'expo-device';

export async function registerUserNotification(){
    
    OneSignal.User.pushSubscription.optIn();

    const deviceReferenceData = Device.deviceName+'_'+Device.DeviceType;

    OneSignal.User.addTag('device', deviceReferenceData);

    const pushNotificationIdDevice = await OneSignal.User.pushSubscription.getIdAsync();

    return pushNotificationIdDevice;
}