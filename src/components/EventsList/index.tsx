import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import { EventContainer } from '../EventContainer';
import { Event } from '../../@types/event';

type Props = {
    dataList: Event[];
    eventSelected: ( eventID: string) => void;
};

export function EventsList({ dataList, eventSelected }: Props) {

  return (
    <View style={styles.container}>
        <FlashList
            data={dataList}
            renderItem={({ item }) => <EventContainer event={item} eventSelected={(eventId)=>{eventSelected(eventId)}}/>}
            estimatedItemSize={200}
        />
    </View>
  );
}