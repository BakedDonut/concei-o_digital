import { Text, View } from "react-native";
import { styles } from "./styles";
import { EventsList } from "../../../components/EventsList";
import { Event } from "../../../@types/event";
import { FilterEvents } from "../../../components/FilterEvents";

import { useState } from "react";

const events: Event[] = [
    {
      id: '1',
      title: 'Workshop de React Native',
      subtitle: 'Aprenda a construir aplicativos móveis',
      img: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      description: 'Um workshop interativo sobre desenvolvimento com React Native. Ideal para desenvolvedores iniciantes e intermediários.',
      type_event_id: {
        id: '1',
        name: 'Workshop',
      },
      time: '10:00 AM',
      date: new Date('2024-09-15T10:00:00Z'), // Data e hora do evento
    },
    {
      id: '2',
      title: 'Conferência de Tecnologia',
      subtitle: 'As últimas tendências em tecnologia',
      img: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      description: 'Uma conferência abrangente sobre as últimas tendências e inovações em tecnologia. Inclui palestras e painéis de especialistas da indústria.',
      type_event_id: {
        id: '2',
        name: 'Conferência',
      },
      time: '02:00 PM',
      date: new Date('2024-09-20T14:00:00Z'), // Data e hora do evento
    },
    {
      id: '3',
      title: 'Encontro de Networking',
      subtitle: 'Conecte-se com outros profissionais',
      img: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      description: 'Um evento de networking para profissionais da indústria. Uma ótima oportunidade para expandir sua rede de contatos e trocar ideias com colegas.',
      type_event_id: {
        id: '3',
        name: 'Networking',
      },
      time: '06:00 PM',
      date: new Date('2024-09-25T18:00:00Z'), // Data e hora do evento
    },
  ];

export function GeneralScreen(){

  const [evnetSelected, setEventSelected] = useState<Event | undefined>(undefined);

  const [openEventInfoVisible, setOpenEventInfoVisible] = useState(false);

  function handleSelectEvent(eventID: string) {
    const selectedEvent = events.find(event => event.id === eventID);
    setEventSelected(selectedEvent);
    setOpenEventInfoVisible(true)
  }

    return(
        <View style={styles.container}>
          <View style={styles.topFlashlist}>
            <Text style={styles.titleFlashlist}>
              Eventos em destaque
            </Text>
            <FilterEvents
              setFilterSelected={(i)=>console.log(i)}
            />
          </View>
          <EventsList
            dataList={events}
            eventSelected={(eventId)=>{handleSelectEvent(eventId)}}
          />
         
        </View>
    );
}