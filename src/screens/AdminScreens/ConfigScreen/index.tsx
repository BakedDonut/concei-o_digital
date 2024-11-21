import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { ScrollView } from 'react-native';
import NotificationIcon from '../../../assets/icons/bell-ringing-thin.svg';
import GearIcon from '../../../assets/icons/gear-thin.svg';
import UserIcon from '../../../assets/icons/user-circle-dashed-thin.svg';
import ChurchIcon from '../../../assets/icons/church-thin.svg';
import { theme } from '../../../styles/theme';


export function ConfigScreen() {

  const [typeEvent, setTypeEvent] = useState<string>();

  function handleCreateTypeEvent(){

  }

  function handleNotifyAll(){

  }

  function handleUserSetting(){

  }

  function handleAppSettings(){

  }

  const colorIcons = theme.colors.primary_background,
  const sizeIcons = 40;

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.optionSelect} onPress={handleCreateTypeEvent}>
          <ChurchIcon fill={colorIcons} width={sizeIcons} height={sizeIcons}/>
          <Text style={styles.titleItem}>Criar tipo de evento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionSelect} onPress={handleNotifyAll}>
          <NotificationIcon fill={colorIcons} width={sizeIcons} height={sizeIcons}/>
          <Text style={styles.titleItem}>Notificação instantânea</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.optionSelect} onPress={handleUserSetting}>
          <UserIcon fill={colorIcons} width={sizeIcons} height={sizeIcons}/>
          <Text style={styles.titleItem}>Editar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionSelect} onPress={handleAppSettings}>
          <GearIcon fill={colorIcons} width={sizeIcons} height={sizeIcons}/>
          <Text style={styles.titleItem}>Configurar aplicativo</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Subtítulo do evento</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(text)=>setTypeEvent(text)}
            value={typeEvent}
            placeholder='Novo tipo de evento'
          />
        </View>
        <TouchableOpacity onPress={handleUpdateTypeEvent} style={styles.buttonCreateTypeEvent}>
          <Text style={styles.textButtonCreateTypeEvent}>Criar um tipo de evento</Text>
        </TouchableOpacity>

    </ScrollView>
  );
}