import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import { EventContainer } from '../EventContainer';
import { Event, EventTypes } from '../../@types/event';
import CaretDownIcon from '../../assets/icons/caret-down-fill.svg'
import { theme } from '../../styles/theme';
import XIcon from '../../assets/icons/x.svg'
import { fetchEventTypesApi } from '../../api/envents';

type Props = {
  onSelectEvent: (event: EventTypes) => void;
  eventDefaultSelected?: string;
};

export function SelectTypeEvent({onSelectEvent, eventDefaultSelected}: Props) {

  const [selectTypeEventVisible, setSelectTypeEventVisible] = useState(false);

  const [isEventDefaultSelected, setIsEventDefaultSelected] = useState<string | undefined>();

  useEffect(() => {
    setIsEventDefaultSelected(eventDefaultSelected);
  }, [eventDefaultSelected]); 

  const [itemSelected, setItemSelected] = useState('Selecione o tipo de evento');

  const [dataList, setDataList] = useState<EventTypes[]>([])

  const handleItemPress = (item: EventTypes) => {
    console.log(isEventDefaultSelected);
    setIsEventDefaultSelected(item.name);
    setItemSelected(item.name)
    onSelectEvent(item);
    setSelectTypeEventVisible(false);
  };

  useEffect(() => {
    const fetchTypeEvents = async () => {
      try {
        const data = await fetchEventTypesApi();
        setDataList(data);        
      } catch (err) {
        console.log(err);
      }
    };

    fetchTypeEvents();
  }, []);  

  return (
    <>
    <TouchableOpacity style={styles.containerButtonOpenModal} onPress={()=>setSelectTypeEventVisible(true)}>
      <Text style={styles.textButtonOpenModal}>{isEventDefaultSelected?isEventDefaultSelected:itemSelected}</Text>
      <CaretDownIcon fill={theme.colors.text} width={15} height={15}/>
    </TouchableOpacity>
    <Modal
      visible={selectTypeEventVisible}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Selecione um tipo de evento</Text>
          <FlashList
            data={dataList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleItemPress(item)}
              >
                <Text style={styles.textItem}>{item.name}</Text>
              </TouchableOpacity>
            )}
            estimatedItemSize={50}
            showsVerticalScrollIndicator={false}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectTypeEventVisible(false)}
          >
            <Text style={styles.closeButtonText}>Fechar</Text>
            <XIcon fill={'blue'} width={20} height={20}/>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </>
  );
}