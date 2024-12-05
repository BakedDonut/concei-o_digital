import { Text, View } from "react-native";
import { styles } from "./styles";
import { EventsList } from "../../../components/EventsList";
import { Event } from "../../../@types/event";
import { FilterEvents } from "../../../components/FilterEvents";
import { useEffect, useState } from "react";
import { FilterType, useFilterEventByDate } from "../../../hooks/useFilterEventsByDate";
import { fetchAllEventsApi } from "../../../api/envents";


export function GeneralScreen() {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventSelected, setEventSelected] = useState<Event | undefined>(undefined);
  const [openEventInfoVisible, setOpenEventInfoVisible] = useState(false);
  const [filterSelected, setFilterSelected] = useState<FilterType>('Sempre');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [refreshing, setRefreshing] = useState(false);

  // Handle event selection
  function handleSelectEvent(eventID: string) {
    const selectedEvent = events.find(event => event.id === eventID);
    setEventSelected(selectedEvent);
    setOpenEventInfoVisible(true);
  }

  // Filter events based on selected filter
  useFilterEventByDate(filterSelected, events, setFilteredEvents);

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setRefreshing(true); // Set refreshing to true when fetching starts
    try {
      const data = await fetchAllEventsApi();
      setEvents(data);        
    } catch (err) {
      console.log(err);
    } finally {
      setRefreshing(false); // Stop refreshing once fetching is complete
    }
  };

  // Handle pull-to-refresh
  const onRefresh = () => {
    fetchEvents();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topFlashlist}>
        <Text style={styles.titleFlashlist}>Eventos em destaque</Text>
        <FilterEvents setFilterSelected={setFilterSelected} />
      </View>
      <EventsList
        dataList={filteredEvents}
        eventSelected={handleSelectEvent}
        refreshing={refreshing}
        onRefresh={onRefresh} // Pass onRefresh as a prop
        setRefresh={()=>fetchEvents()}
      />
    </View>
  );
}