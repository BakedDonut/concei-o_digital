import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Modal } from 'react-native';
import { BackButton } from '../BackButton';

type Props = {
    visible: boolean;
    setModalVisible: (visible: boolean) => void;
};

export function ConfigAppModal({visible, setModalVisible}:Props) {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setModalVisible(false) }
    >
        <View style={styles.modalView}>
        <BackButton 
          onPress={()=>setModalVisible(false)}
        />
          <Text>Para implementar novos conteúdos</Text>
        </View>
    </Modal>
  );
}