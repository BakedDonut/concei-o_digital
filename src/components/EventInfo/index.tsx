import React, { useCallback, useRef } from 'react';
import { Modal, Text, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Event } from '../../@types/event';

type Props = {
    event: Event | undefined;
    modalVisible: boolean;
    setModalVisible: ( visible: boolean) => void;
}

export function EventInfo({event}: Props) {

  return (
    <View style={styles.container}>
      
    </View>
  );
}