import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { ScrollView } from 'react-native';
import NotificationIcon from '../../../assets/icons/bell-ringing-thin.svg';
import GearIcon from '../../../assets/icons/gear-thin.svg';
import UserIcon from '../../../assets/icons/user-circle-dashed-thin.svg';
import ChurchIcon from '../../../assets/icons/church-thin.svg';
import { theme } from '../../../styles/theme';
import { CreateEventTypeModal } from '../../../components/CreateEventTypeModal';
import { NotifyDevicesModal } from '../../../components/NotifyDevicesModal';
import { EditUserModal } from '../../../components/EditUserModal';

export function ConfigScreen() {

  const [notifyAllVisible, setNotifyAllVisible] = useState(false);
  const [createEventTypeVisible, setCreateEventTypeVisible] = useState(false);
  const [editUserModalVisible, setEditUserModalVisible] = useState(false)

  function handleCreateTypeEvent(){
    setCreateEventTypeVisible(true);
  }

  function handleNotifyAll(){
    setNotifyAllVisible(true);
  }

  function handleUserSetting(){
    setEditUserModalVisible(true)
  }

  function handleAppSettings(){

  }

  const colorIcons = theme.colors.primary_bright;
  const sizeIcons = 40;

  return (
    <>
    <CreateEventTypeModal 
      modalVisible={createEventTypeVisible}
      setModalVisible={(va)=>setCreateEventTypeVisible(false)}
    />
    <NotifyDevicesModal 
      modalVisible={notifyAllVisible}
      setModalVisible={()=>setNotifyAllVisible(false)}
    />
    <EditUserModal
      modalVisible={editUserModalVisible}
      setModalVisible={()=>setEditUserModalVisible(false)}
    />
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
    </ScrollView>
    </>
  );
}