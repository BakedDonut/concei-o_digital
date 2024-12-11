import { Text, View } from "react-native";
import { styles } from './styles';
import { FilterType, useFilterEventByDate } from "../../../hooks/useFilterEventsByDate";
import { useEffect, useState } from "react";
import { FilterEvents } from "../../../components/FilterEvents";
import { EventsList } from "../../../components/EventsList";
import { Event } from "../../../@types/event";
import { fetchAllEventsApi } from "../../../api/events";
import { useRefreshList } from "../../../hooks/useRefreshList";

export function EditEventScreen() {
  const [eventSelected, setEventSelected] = useState<Event | undefined>(undefined);
  const [openEventInfoVisible, setOpenEventInfoVisible] = useState(false);
  const [filterSelected, setFilterSelected] = useState<FilterType>('Sempre');
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [refreshing, setRefreshing] = useState(false);

  // Handle event selection
  function handleSelectEvent(eventID: string) {
    const selectedEvent = events.find(event => event.id === eventID);
    setEventSelected(selectedEvent);
    setOpenEventInfoVisible(true);
  }

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  // Fetch events from the API
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

  // Apply filter to events using the hook
  useFilterEventByDate(filterSelected, events, setFilteredEvents);

  // Handle pull-to-refresh
  const onRefresh = () => {
    fetchEvents(); // Trigger the fetchEvents function on refresh
  };

  const {refresh, setRefresh} = useRefreshList();  

  useEffect(() => {
    if(refresh){
      fetchEvents();
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <View style={styles.container}>
      <View style={styles.topFlashlist}>
        <Text style={styles.titleFlashlist}>
          Clique no evento para editar
        </Text>
        <FilterEvents setFilterSelected={setFilterSelected} />
      </View>
      <EventsList
        dataList={filteredEvents}
        eventSelected={handleSelectEvent}
        editOption={true} // Ensuring the editOption is passed correctly
        refreshing={refreshing}
        onRefresh={onRefresh} // Pass onRefresh function to EventsList
        setRefresh={()=>fetchEvents()}
      />
    </View>
  );
}
