import { baseUrlApi } from "@env";

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
            },
            body: JSON.stringify({ id: idDevice }),
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Obter a mensagem de erro
            console.error('Erro de login:', errorMessage);
            throw new Error(`Error: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error(error);
        throw error;
    }
}