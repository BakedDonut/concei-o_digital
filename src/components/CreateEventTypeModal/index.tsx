import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, BackHandler } from 'react-native';
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
    const [imageUrl, setImageUrl] = useState<string>('');


    async function handleCreateTypeEvent(){
        if(typeEvent === '' && imageUrl === ''){
          return;
        }        
        await createTypeEventApi(typeEvent, imageUrl); 
        setTypeEvent(''); setImageUrl('');
        Alert.alert('','Tipo de evento criado')       
    }

    

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false) }
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
          <Text style={styles.label}>Link da imagem do evento</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(text)=>setImageUrl(text)}
            value={imageUrl}
            placeholder='Link público da imagem do evento'
          />
        </View>
        <TouchableOpacity onPress={handleCreateTypeEvent} style={styles.buttonCreateTypeEvent}>
          <Text style={styles.textButtonCreateTypeEvent}>Criar um tipo de evento</Text>
        </TouchableOpacity>
        </View>
    </Modal>
  );
}