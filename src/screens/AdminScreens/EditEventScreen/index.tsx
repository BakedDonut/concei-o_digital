import { Text, View } from "react-native";
import { styles } from './styles';
import { FilterType, useFilterEventByDate } from "../../../hooks/useFilterEventsByDate";
import { useEffect, useState } from "react";
import { FilterEvents } from "../../../components/FilterEvents";
import { EventsList } from "../../../components/EventsList";
import { Event } from "../../../@types/event";
import { fetchAllEventsApi } from "../../../api/envents";

export function EditEventScreen(){
    const [eventSelected, setEventSelected] = useState<Event | undefined>(undefined);

  const [openEventInfoVisible, setOpenEventInfoVisible] = useState(false);

  const [filterSelected, setFilterSelected] = useState<FilterType>('Sempre');

  const [events, setEvents] = useState<Event[]>([]);

  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

  function handleSelectEvent(eventID: string) {
    const selectedEvent = events.find(event => event.id === eventID);
    setEventSelected(selectedEvent);
    setOpenEventInfoVisible(true)
  }

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

  useFilterEventByDate(filterSelected, events, setFilteredEvents)

    return(
        <View style={styles.container}>
          <View style={styles.topFlashlist}>
            <Text style={styles.titleFlashlist}>
              Clique no evento para editar
            </Text>
            <FilterEvents
              setFilterSelected={(filterSelecte)=>setFilterSelected(filterSelecte)}
            />
          </View>
          <EventsList
            dataList={filteredEvents}
            eventSelected={(eventId)=>{handleSelectEvent(eventId)}}
            editOption
          />
        </View>
    );
}