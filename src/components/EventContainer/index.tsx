import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import ClockIcon from '../../assets/icons/clock.svg';
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { Event } from '../../@types/event';
import EventsDetails from '../EventsDetails';

type Props = {
  event: Event;
  eventSelected: (eventID: string) => void;
};

export function EventContainer({ event, eventSelected }: Props) {
  const formattedDate = new Date(event.date).toLocaleDateString('pt-BR'); // Personalize o formato conforme necessário

  const [modalVisible, setModalVisible] = useState(true);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <TouchableOpacity style={{ marginTop: 10 }} onPress={openModal}>
      <Modal transparent={false} animationType="slide" visible={modalVisible}>
        <EventsDetails close={closeModal} />
      </Modal>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.type}>{event.title}</Text>
          <View>
            <Text style={styles.date}>{formattedDate}</Text>
            <View style={styles.time}>
              <ClockIcon
                fill={theme.colors.text}
                width={15}
                height={15}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>{event.time}</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{event.subtitle}</Text>
          <Image
            style={{ height: 300, alignItems: 'center' }}
            source={{ uri: event.img }}
          />
          <Text style={styles.text}>{event.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
