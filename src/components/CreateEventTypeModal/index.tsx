import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Modal } from 'react-native';
import { createTypeEventApi } from '../../api/envents';

type Props = {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
};

export function CreateEventTypeModal({modalVisible, setModalVisible}:Props) {

    const [typeEvent, setTypeEvent] = useState<string>('');

    async function handleCreateTypeEvent(){
        const response = await createTypeEventApi(typeEvent);
    }

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
    >
        <View style={styles.modalView}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome do tipo do evento</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(text)=>setTypeEvent(text)}
            value={typeEvent}
            placeholder='Novo tipo de evento'
          />
        </View>
        <TouchableOpacity onPress={handleCreateTypeEvent} style={styles.buttonCreateTypeEvent}>
          <Text style={styles.textButtonCreateTypeEvent}>Criar um tipo de evento</Text>
        </TouchableOpacity>
        </View>
    </Modal>
  );
}