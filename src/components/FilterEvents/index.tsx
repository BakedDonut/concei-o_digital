import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type OptionsFilter = {
  
}

export function FilterEvents() {

  const [filter, setFilter] = useState();

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonOpenModal}>
          <Text style={styles.textButtonOpenModal}>Essa semana</Text>
        </TouchableOpacity>
    </View>
  );
}