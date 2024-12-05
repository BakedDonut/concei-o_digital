import React from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import { EventContainer } from '../EventContainer';
import { Event } from '../../@types/event';
import { EventToEditContainer } from '../EventToEditContainer';
import { theme } from '../../styles/theme';

type Props = {
  dataList: Event[];
  eventSelected: (eventID: string) => void;
  editOption?: boolean;
  refreshing: boolean;  // This should be a boolean
  onRefresh: () => void;  // onRefresh should be passed down
  setRefresh: (e: boolean) => void;
};

export function EventsList({
  dataList,
  eventSelected,
  editOption,
  refreshing,
  onRefresh,
  setRefresh
}: Props) {
  return (
    <View style={styles.container}>
      <FlashList
        data={dataList}
        renderItem={({ item }) =>
          !editOption ? (
            <EventContainer
              event={item}
              eventSelected={(eventId) => {
                eventSelected(eventId);
              }}
            />
          ) : (
            <EventToEditContainer
              event={item}
              eventSelected={(eventId) => {
                eventSelected(eventId);
              }}
              refreshList={()=>setRefresh(true)}
            />
          )
        }
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} 
            progressBackgroundColor={'#fff'}
            tintColor={theme.colors.primary_bright}
            titleColor={'#fff'}
          />
        }
      />
    </View>
  );
}
