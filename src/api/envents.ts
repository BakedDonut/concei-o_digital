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
