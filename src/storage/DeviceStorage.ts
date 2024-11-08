import * as SecureStore from 'expo-secure-store';
import { Device } from '../@types/device';

export async function saveDeviceStorage(data: Device) {
    try {
        console.log('saveDeviceStorage'+data);
        
        await SecureStore.setItemAsync('device_info', JSON.stringify(data));
    } catch (error) {
        console.error('Error saving device_info data:', error);
    }
}

export async function getDeviceDataStorage(): Promise<Device | null> {
    try {
        const storedData = await SecureStore.getItemAsync('device_info');
        
        if (!storedData) {
            return null;
        }        
        
        return JSON.parse(storedData) as Device;
    } catch (error) {
        console.error('Error retrieving device_info data:', error);
        return null;
    }
}

export async function deleteDeviceDataStorage() {
    try {
        await SecureStore.deleteItemAsync('device_info');
    } catch (error) {
        console.error('Error deleting device_info data:', error);
    }
}
