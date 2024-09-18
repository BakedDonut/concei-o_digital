import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import { EventContainer } from '../EventContainer';
import { Event } from '../../@types/event';
import CaretDownIcon from '../../assets/icons/caret-down-fill.svg'
import { theme } from '../../styles/theme';
import XIcon from '../../assets/icons/x.svg'

type Props = {
  onSelectEvent: (event: string) => void;
  eventDefaultSelected?: string;
};

const dataList = [
  'Missa semanal',
  'Missa Corpus Christi',
  'Natal',
  'Páscoa',
  'Pentecostes',
  'Assunção de Maria',
  'Todos os Santos',
  'Dia de Finados',
  'Imaculada Conceição',
  'Epifania',
  'Sexta-feira Santa',
  'Missa do Galo (Véspera de Natal)',
  'Festa da Anunciação',
  'Dia de São João Batista',
  'Dia de São Pedro e São Paulo',
  'Festa de Santo Antônio',
  'Dia da Ascensão',
  'Dia de São Francisco de Assis',
  'Dia de São José'
];

export function SelectTypeEvent({onSelectEvent, eventDefaultSelected}: Props) {

  const [selectTypeEventVisible, setSelectTypeEventVisible] = useState(false);

  const [itemSelected, setItemSelected] = useState('Selecione o tipo de evento');

  const handleItemPress = (item: string) => {
    setItemSelected(item)
    onSelectEvent(item);
    setSelectTypeEventVisible(false);
  };

  return (
    <>
    <TouchableOpacity style={styles.containerButtonOpenModal} onPress={()=>setSelectTypeEventVisible(true)}>
      <Text style={styles.textButtonOpenModal}>{eventDefaultSelected?eventDefaultSelected:itemSelected}</Text>
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
                <Text style={styles.textItem}>{item}</Text>
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