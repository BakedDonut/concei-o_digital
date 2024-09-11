import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Definir o tipo Props
interface Props {
  close: () => void;
}

export default function EventsDetails({ close }: Props) {
  return (
    <View>
      <Text>Bem-vindo</Text>
      <TouchableOpacity style={{ marginTop: 10 }} onPress={close}>
        <Text>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}
