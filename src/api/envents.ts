import { baseUrlApi, DEVICE_TOKEN } from "@env";
import { Event } from "../@types/event";
import api from "./api";

export async function fetchAllEventsApi(): Promise<Event[]> {
    try {
        const response = await fetch(`${baseUrlApi}/events`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${DEVICE_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data as Event[];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchEventTypesApi() {
    try {
        const response = await fetch(`${baseUrlApi}/eventTypes`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${DEVICE_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchEventsbyTypeApi(typeId: string) {
    try {
        const response = await fetch(`${baseUrlApi}/eventsByType`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${DEVICE_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ typeEventId: typeId }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
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
