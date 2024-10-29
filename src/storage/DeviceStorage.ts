import * as SecureStore from 'expo-secure-store';
import { User } from '../@types/user';
import { Device } from '../@types/device';

export async function saveDeviceStorage(data: Device) {
    try {
        await SecureStore.setItemAsync('device_info', JSON.stringify(data));
    } catch (error) {
        console.error('Error saving device_info data', error);
    }
}

export async function getDeviceDataStorage() {
    try {
        return await SecureStore.getItemAsync('device_info') as unknown as Device;
    } catch (error) {
        console.error('Error saving device_info data', error);
    }
}


export async function deleteDeviceDataStorage() {
    try {
        await SecureStore.deleteItemAsync('device_info') as unknown as Device;
    } catch (error) {
        console.error('Error saving device_info data', error);
    }
}
