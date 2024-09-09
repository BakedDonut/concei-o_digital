import { Text, View } from "react-native";
import { styles } from "../AboutScreen/styles";
import { EventsList } from "../../../components/EventsList";
import { Event } from "../../../@types/event";

const events: Event[] = [
    {
      id: '1',
      title: 'Workshop de React Native',
      subtitle: 'Aprenda a construir aplicativos móveis',
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
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Eventos em destaque
            </Text>

            <EventsList
                dataList={events}
            />

        </View>
    );
}