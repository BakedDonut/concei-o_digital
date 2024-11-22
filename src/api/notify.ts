import api from "./api";

export async function sendNotificationForAllApi(title: string, content: string){
    try {        
        const response = await api.post('/notify/allDevices',{
            title,
            content
        });   
        
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}