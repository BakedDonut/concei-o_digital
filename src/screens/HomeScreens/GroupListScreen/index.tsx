import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps } from '../../../@types/navigation';
import { FilterType, useFilterEventByDate } from '../../../hooks/useFilterEventsByDate';
import { FilterEvents } from '../../../components/FilterEvents';
import { EventsList } from '../../../components/EventsList';
import { Event } from '../../../@types/event';
import { LoadingScreen } from '../../LoadingScreen';
import BackIcon from '../../../assets/icons/caret-left-bold.svg'
import { theme } from '../../../styles/theme';
import { fetchEventsbyTypeApi } from '../../../api/envents';

type ParamsProps = {
    typeGroupSearch: string;
}

export function GroupListScreen() {
    
    const route = useRoute();
    const params = route.params as ParamsProps; 

    const [events, setEvents] = useState<Event[]>([]);

    const [eventSelected, setEventSelected] = useState<Event | undefined>(undefined);

  const [openEventInfoVisible, setOpenEventInfoVisible] = useState(false);

    useEffect(() => {

      async function fetchEventsbyType(){
        const data = await fetchEventsbyTypeApi(params.typeGroupSearch as string);
        setEvents(data);
        console.log('fetchEventsbyType'+data);
        
      }
      
      fetchEventsbyType();
    }, [params]);
    
    const navigation = useNavigation<NavigationProps>();
    
    const [filterSelected, setFilterSelected] = useState<FilterType>('Sempre');

    const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

    function handleSelectEvent(eventID: string) {
        const selectedEvent = events.find(event => event.id === eventID);
        setEventSelected(selectedEvent);
        setOpenEventInfoVisible(true)
    }

    useFilterEventByDate(filterSelected, events, setFilteredEvents);

    return (
        <View style={styles.container}>
            <View style={styles.topFlashlist}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <BackIcon fill={theme.colors.text} width={15} height={15}/>
                    <Text style={styles.txt}>Voltar</Text>
                </TouchableOpacity>
                <FilterEvents
                    setFilterSelected={setFilterSelected}
                />
            </View>
            <EventsList
                dataList={filteredEvents}
                eventSelected={handleSelectEvent}
            />
        </View>
    );
}
