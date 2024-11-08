import { Text, View } from "react-native";
import { styles } from "./styles";
import { EventsList } from "../../../components/EventsList";
import { Event } from "../../../@types/event";
import { FilterEvents } from "../../../components/FilterEvents";
import { useEffect, useState } from "react";
import { FilterType, useFilterEventByDate } from "../../../hooks/useFilterEventsByDate";
import { fetchAllEventsApi } from "../../../api/envents";


export function GeneralScreen(){

  const [events, setEvents] = useState<Event[]>([]);

  const [eventSelected, setEventSelected] = useState<Event | undefined>(undefined);

  const [openEventInfoVisible, setOpenEventInfoVisible] = useState(false);

  const [filterSelected, setFilterSelected] = useState<FilterType>('Sempre');

  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

  function handleSelectEvent(eventID: string) {
    const selectedEvent = events.find(event => event.id === eventID);
    setEventSelected(selectedEvent);
    setOpenEventInfoVisible(true)
  }

  useFilterEventByDate(filterSelected, events, setFilteredEvents)  

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await fetchAllEventsApi();
        setEvents(data);        
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvents();
  }, []);  

    return(
        <View style={styles.container}>
          <View style={styles.topFlashlist}>
            <Text style={styles.titleFlashlist}>
              Eventos em destaque
            </Text>
            <FilterEvents
              setFilterSelected={(filterSelecte)=>setFilterSelected(filterSelecte)}
            />
          </View>
          <EventsList
            dataList={filteredEvents}
            eventSelected={(eventId)=>{handleSelectEvent(eventId)}}
          />
         
        </View>
    );
}