import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Modal } from 'react-native';
import { createTypeEventApi } from '../../api/envents';
import { BackButton } from '../BackButton';

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
        animationType="fade"
        transparent={true}
        visible={modalVisible}
    >
        <View style={styles.modalView}>
        <BackButton 
          onPress={()=>setModalVisible(false)}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Inserir novos tipos de eventos</Text>
          <Text style={styles.subtitle}>Os tipos de eventos criados aqui são aqueles que podem aparecer quando você cria um novo</Text>

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