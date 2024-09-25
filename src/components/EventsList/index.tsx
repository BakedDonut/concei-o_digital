import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import { EventContainer } from '../EventContainer';
import { Event } from '../../@types/event';
import { EventToEditContainer } from '../EventToEditContainer';

type Props = {
    dataList: Event[];
    eventSelected: ( eventID: string) => void;
    editOption?: boolean
};

export function EventsList({ dataList, eventSelected, editOption }: Props) {  

  return (
    <View style={styles.container}>
        <FlashList
            data={dataList}
            renderItem={({ item }) => 
              !editOption ?
              <EventContainer event={item} eventSelected={(eventId)=>{eventSelected(eventId)}}/>
              :
              <EventToEditContainer event={item} eventSelected={(eventId)=>{eventSelected(eventId)}}/>
          }
            estimatedItemSize={200}
            showsVerticalScrollIndicator={false}
        />
    </View>
  );
}