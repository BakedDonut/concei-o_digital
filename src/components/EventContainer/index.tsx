import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ClockIcon from '../../assets/icons/clock.svg'
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { Event } from '../../@types/event';

type Props ={
    event: Event,
    eventSelected: ( eventID: string) => void;
}

export function EventContainer({ event, eventSelected }: Props) {

    const formattedDate = event.date.toLocaleDateString(); // You can customize the format as needed

  return (
    <TouchableOpacity style={{marginTop: 10}} onPress={()=>eventSelected(event.id)}>
        <Text style={styles.date}>{formattedDate}</Text>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.type}>Solenidade</Text>
                <View style={styles.time}>
                    <ClockIcon fill={theme.colors.text} width={15} height={15} style={{marginRight: 5}}/>
                    <Text style={styles.text}>{event.time}</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>
                   {event.title}
                </Text>
                <Text style={styles.text}>
                    {event.description}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  );
}