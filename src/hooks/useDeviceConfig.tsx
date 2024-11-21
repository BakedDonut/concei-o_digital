import { useEffect } from "react";
import { deleteDeviceDataStorage, getDeviceDataStorage, saveDeviceStorage } from "../storage/DeviceStorage";
import { registerUserNotification } from "../notification/registerUserNotification";
import { createDeviceApi } from "../api/device";
import * as DeviceExpo from 'expo-device';
import DeviceInfo from 'react-native-device-info';
import { Device } from "../@types/device";
import Constants from 'expo-constants';

export async function useDeviceConfig(){    
    useEffect(() => {      
        async function deviceExistsFromStorage(){
          try {
            let dataDevice = await getDeviceDataStorage();
            
            if(dataDevice === null){
              const pushNotificationIdDevice = await registerUserNotification();
      
              let uniqueId = 'expo';

              if(Constants.appOwnership !== 'expo'){
                console.log('expo');
                 //uniqueId = await DeviceInfo.getUniqueId();
              }

              const deviceReferenceData = uniqueId+'_'+DeviceExpo.modelName;
              
              console.log('uniqueId', DeviceExpo.deviceName);
              
              const response = await createDeviceApi(deviceReferenceData, (pushNotificationIdDevice ?? '').toString());

              const dataDevice: Device = {
                id: response.id, 
                name: response.name,
                notificationPreferences:{
                  eventsNotificationId : response.event_types.map(String) || [] 
                }
              } as Device;
              
              await saveDeviceStorage(dataDevice);
            }
          } catch (error) {
            console.log('Device erro'+error);
            
            throw error;
          }
        }
    
        deviceExistsFromStorage();
    }, []);
}