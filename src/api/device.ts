import { baseUrlApi, DEVICE_TOKEN } from "@env";

export async function updateDeviceIdNotificationApi(id: string){
    try {
        
    } catch (error) {
        
    }
}

export async function fetchDeviceByIdApi(idDevice: string){
    try {
        const response = await fetch(baseUrlApi+'/device/showById', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEVICE_TOKEN}`
            },
            body: JSON.stringify({ id: idDevice }),
        });

        if (!response.ok) {
            const errorMessage = await response.text(); 
            console.error('Erro de login:', errorMessage);
            throw new Error(`Error: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createDeviceApi(deviceName: string, notification_token: string){
    try {
        const response = await fetch(baseUrlApi+'/device', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEVICE_TOKEN}`
            },
            body: JSON.stringify({ name: deviceName, notification_token }),
        });

        if (!response.ok) {
            const errorMessage = await response.text(); 
            console.error('Erro de login:', errorMessage);
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateNotificationEventsPreferences(idDevice : any, idEvents : string[]){
    try {
        const response = await fetch(baseUrlApi+'/device/updateNotificationEventsPreferences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEVICE_TOKEN}`
            },
            body: JSON.stringify({ id: idDevice, events_notification_preferences: idEvents.map(Number)}),
        });

        if (!response.ok) {
            const errorMessage = await response.text(); 
            console.error('Erro de login:', errorMessage);
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}