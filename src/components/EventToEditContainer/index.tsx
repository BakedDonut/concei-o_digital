import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import ClockIcon from '../../assets/icons/clock.svg';
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { Event } from '../../@types/event';
import GearIcon from '../../assets/icons/gear-bold.svg';
import CalendarIcon from '../../assets/icons/calendar-dots-fill.svg'
import LocationIcon from '../../assets/icons/map-pin.svg'
import EditEventDetails from '../EditEventDetails';
type Props = {
  event: Event;
  eventSelected: (eventID: string) => void;
};

export function EventToEditContainer({ event, eventSelected }: Props) {
  const formattedDate = new Date(event.start_date).toLocaleDateString('pt-BR'); // Personalize o formato conforme necessário

  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <TouchableOpacity style={{ marginTop: 10 }} onPress={openModal}>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <EditEventDetails close={closeModal} event={event}/>
      </Modal>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{event.title}</Text>
          <View style={styles.headerRight}>
            <GearIcon fill={theme.colors.gray_400} width={25} height={25}/>
          </View>
        </View>

        <View style={styles.content}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LocationIcon fill={theme.colors.gray_800} width={18} height={18}/>
            <Text style={styles.text}>{event.location}</Text>
          </View>
          <Text style={styles.type}>{'solenidade'}</Text>
        </View>
        <View style={styles.bottom}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CalendarIcon fill={theme.colors.gray_800} width={18} height={18}/>
            <Text style={styles.date}>{formattedDate}</Text>
          </View>
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
    </TouchableOpacity>
  );
}
