import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Event, EventTypes } from '../../@types/event';
import { deleteEventTypesApi, fetchEventsbyTypeApi, fetchEventTypesApi } from '../../api/events';
import { BackButton } from '../BackButton';
import { FlashList } from '@shopify/flash-list';
import TrashIcon from '../../assets/icons/trash-fill.svg';
import { theme } from '../../styles/theme';

type Props = {
    visible: boolean;
    setModalVisible: (value: boolean) => void;
}

export function DeleteTypeEventModal({ visible, setModalVisible }: Props) {

  const [dataList, setDataList] = useState<EventTypes[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [confirmDeleteModalVisible, setConfirmDeleteModalVisible] = useState(false);
  const [item, setItem] = useState<EventTypes>();

  async function handleItemPress (item: EventTypes) {
    setItem(item);
    setConfirmDeleteModalVisible(true);
  };

  async function handleConfirmDelete () {
    try {
        if (item) {
            await deleteEventTypesApi(item.id);
          }
          setConfirmDeleteModalVisible(false);
          setModalVisible(false);
    } catch (error) {
        console.log(error);
    }
  }

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
  }, [visible, setModalVisible]);  

  useEffect(() => {
    const fetch = async () => {
      try {
        if (item) {
          const data = await fetchEventsbyTypeApi(item.id);
          console.log(data);
          
          setEvents(data);
        }      
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, [confirmDeleteModalVisible, setConfirmDeleteModalVisible]);  

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setModalVisible(false) }
    >
      <View style={styles.modal}>
        <BackButton onPress={() => setModalVisible(false)} />
        <Text style={styles.title}>Selecione para deletar tipo de evento</Text>
        <Text style={styles.subtitle}>Deletar o tipo também deleta os eventos relacionados a ele.</Text>
          <FlashList
            data={dataList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleItemPress(item)}
              >
                <Text style={styles.textItem}>{item.name}</Text>
                <TrashIcon fill={'red'} width={30} height={30}/>
              </TouchableOpacity>
            )}
            estimatedItemSize={50}
            showsVerticalScrollIndicator={false}
          />
      </View>
      <Modal
        visible={confirmDeleteModalVisible}
        animationType="none"
        onRequestClose={() => setModalVisible(false) }
    >
        <View style={styles.modal}>
            <Text style={styles.titleConfirmDelete}>Esses eventos também serão deletados pois pertencem a esse tipo</Text>
            <FlashList
                data={events}
                renderItem={({ item }) => (
                    <View style={styles.event}>
                        <Text style={styles.eventName}>{item.title}</Text>
                    </View>
                )}
                estimatedItemSize={50}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.footer}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setConfirmDeleteModalVisible(false)}>
                <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmDelete}>
                <Text style={styles.confirmText}>Confirmar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>
    </Modal>
  );
}