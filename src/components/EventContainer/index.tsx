import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import ClockIcon from '../../assets/icons/clock.svg';
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { Event } from '../../@types/event';
import EventsDetails from '../EventsDetails';
import { formatTime } from '../../utils/formatTime';
import { formatDate } from '../../utils/formatDate';

type Props = {
  event: Event;
  eventSelected: (eventID: string) => void;
};

export function EventContainer({ event, eventSelected }: Props) {
  const formattedDate = formatDate(event.start_date);
  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <TouchableOpacity style={{ marginTop: 10 }} onPress={openModal} activeOpacity={0.9}>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <EventsDetails close={closeModal} event={event}/>
      </Modal>

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.type}>
            <Text style={styles.typeText}>{event.event_type.name}</Text>
          </View>
          <View>
            <Text style={styles.date}>{formattedDate}</Text>
            <View style={styles.time}>
              <ClockIcon
                fill={theme.colors.text}
                width={15}
                height={15}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.text}>{formatTime(event.time)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{event.title}</Text>
          <Image
            style={{ height: 300, alignItems: 'center' }}
            source={{ uri: event.event_type.image }}
          />
          <Text style={styles.text}>{event.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
