import { useEffect } from "react";
import { deleteDeviceDataStorage, getDeviceDataStorage, saveDeviceStorage } from "../storage/DeviceStorage";
import { registerUserNotification } from "../notification/registerUserNotification";
import { createDeviceApi } from "../api/device";
import * as DeviceExpo from 'expo-device';
import DeviceInfo from 'react-native-device-info';
import { Device } from "../@types/device";

export async function useDeviceConfig(){    
    useEffect(() => {      
        async function deviceExistsFromStorage(){
          try {
            let dataDevice = await getDeviceDataStorage();
            //dataDevice = null; //Excluir depois para não ficar criando um tanto de registro no banco de dados
            
            if(dataDevice === null){
              const pushNotificationIdDevice = registerUserNotification();
      
              const deviceReferenceData = DeviceExpo.deviceName+'_'+DeviceExpo.modelName;
              //const uniqueId = DeviceInfo.getUniqueId();
              const response = await createDeviceApi(deviceReferenceData, pushNotificationIdDevice.toString());

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