import { Event } from "../@types/event";
import api from "./api";

export async function fetchAllEventsApi(): Promise<Event[]> {
    try {
        const response = await api.get('/events');
        return response.data as Event[];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchEventTypesApi(){
    try {
        const response = await api.get('/eventTypes');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchEventsbyTypeApi(typeId : string){
    try {
        const response = await api.post('/eventsByType',{
            typeEventId : typeId
        });   
             
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function editEventApi(newEvent: any){
    try {        
        const response = await api.patch('/events',{
            id: newEvent.id,
            title: newEvent.title,
            subtitle: newEvent.subtitle,
            description: newEvent.description,
            start_date: newEvent.start_date,
            end_date: newEvent.end_date,
            location: newEvent.location,
            time: newEvent.time,
            type_event_id: newEvent.eventType
        });   
        
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function deleteEventApi(id: string) {
    try {
        const response = await api.delete('/events', {
            data: { id } 
        });
        
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
