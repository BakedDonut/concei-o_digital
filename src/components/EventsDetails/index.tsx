import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Event } from '../../@types/event';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CrossIcon from '../../assets/icons/cross.svg';
import { theme } from '../../styles/theme';
import ClockIcon from '../../assets/icons/clock.svg';
import CalendarIcon from '../../assets/icons/calendar-dots-fill.svg';
import PinIcon from '../../assets/icons/map-pin.svg';
import { formatTime } from '../../utils/formatTime';

interface Props {
  close: () => void;
  event: Event;
}

const screenWidth = Dimensions.get('window').width;

const diminueDimention = screenWidth - screenWidth * 0.9

export default function EventsDetails({ close, event }: Props) {

  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.modalContainer, {paddingTop: insets.top}]} 
      showsVerticalScrollIndicator={false}
    >
        <TouchableOpacity style={styles.header} onPress={close}>
          <>
            <AntDesign
              name="left"
              size={22}
              color="#A59067"
            />
            <Text style={styles.textBtn}>Voltar</Text>
          </>
          <Text style={styles.info}>Descrição completa</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <CrossIcon width={26} height={32} fill={theme.colors.primary}/>
          <Text style={styles.title}>{event.title}</Text>
          <Image 
            source={{ uri: event.event_type.image }}
            style={{ width: screenWidth -diminueDimention, height: screenWidth - diminueDimention, borderRadius: 10, marginTop: 10 }}
          />
          <Text style={styles.subtitle}>{event.subtitle}</Text>
          <View style={styles.conent2}>
              <View style={styles.item}>
                <CalendarIcon width={20} height={20} fill={theme.colors.text}/>
                <Text style={styles.text}>{
                  new Date(event.start_date).toLocaleDateString('pt-BR')
                  +' até '+
                  new Date(event.end_date).toLocaleDateString('pt-BR')
                }</Text>
              </View>
              <View style={styles.item}>
                <ClockIcon width={20} height={20} fill={theme.colors.text}/>
                <Text style={styles.text}>{formatTime(event.time)}</Text>
              </View>
              <View style={styles.item}>
                <PinIcon width={20} height={20} fill={theme.colors.text}/>
                <Text style={styles.text}>{event.location}</Text>
              </View>
          </View>
          <View style={styles.descriptionContent}>
            <Text style={styles.descriptionTitle}>Descrição</Text>
            <Text style={styles.text}>{event.description}</Text>
          </View>
        </View>
    </ScrollView>
  );
}