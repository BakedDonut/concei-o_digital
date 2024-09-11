import React, { useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import CaretDownIcon from '../../assets/icons/caret-down-fill.svg';
import CaretClose from '../../assets/icons/caret-down.svg'
import { styles } from './styles';
import { theme } from '../../styles/theme';
import XIcon from '../../assets/icons/x.svg'

type OptionsFilter = 'Hoje' | 'Essa semana' | 'Esse mês' | 'Esse ano';


type Props = {
  setFilterSelected: (filter: OptionsFilter) => void;
}

export function FilterEvents({setFilterSelected}:Props) {

  const [filter, setFilter] = useState<OptionsFilter>();
  const filterOptions: OptionsFilter[] = ['Hoje', 'Essa semana', 'Esse mês', 'Esse ano'];

  const [modalVisible, setModalVisible] = useState(false);

  const handleFilterSelect = (option: OptionsFilter) => {
    setFilter(option);
    setFilterSelected(option);
    setModalVisible(false); 
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonOpenModal} onPress={()=>setModalVisible(true)}>
          <Text style={styles.textButtonOpenModal}>Essa semana</Text>
          <CaretDownIcon fill={theme.colors.text} width={10} height={10}/>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              
              <FlatList 
                data={filterOptions}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleFilterSelect(item)} style={styles.backgroundItem}>
                    <Text style={styles.optionText}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
              />
              <View style={styles.headerModal}>
                <TouchableOpacity onPress={()=> setModalVisible(false)} style={styles.closeButton}>
                  <Text style={styles.modalCloseText}>Fechar</Text>
                  <XIcon fill={theme.colors.gray_yellow} width={15} height={15}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
    </View>
  );
}