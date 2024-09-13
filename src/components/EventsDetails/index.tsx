import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Definir o tipo Props
interface Props {
  close: () => void;
}

export default function EventsDetails({ close }: Props) {
  return (
    <View style={styles.modalContainer}>
      
      <View>
        <TouchableOpacity style={styles.header} onPress={close}>
          <AntDesign
          name="left"
          size={18}
          color="#A59067"
          />
          <Text style={styles.textBtn}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
