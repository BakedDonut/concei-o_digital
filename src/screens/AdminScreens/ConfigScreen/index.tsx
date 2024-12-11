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
import TrashIcon from '../../../assets/icons/trash-simple-thin.svg';
import { DeleteTypeEventModal } from '../../../components/DeleteTypeEventModal';
import { ConfigAppModal } from '../../../components/ConfigAppModal';

export function ConfigScreen() {

  const [notifyAllVisible, setNotifyAllVisible] = useState(false);
  const [createEventTypeVisible, setCreateEventTypeVisible] = useState(false);
  const [editUserModalVisible, setEditUserModalVisible] = useState(false);
  const [deleteTypeEventVisible, setDeleteTypeEventVisible] = useState(false);
  const [configAppVisible,seConfigAppVisible] = useState(false);

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

  function handleDeleteTypeEvent(){
    setDeleteTypeEventVisible(true);
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
    <DeleteTypeEventModal
      visible={deleteTypeEventVisible}
      setModalVisible={setDeleteTypeEventVisible}
    />
    <ConfigAppModal
      visible={configAppVisible}
      setModalVisible={seConfigAppVisible}
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
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.optionSelect} onPress={handleDeleteTypeEvent}>
          <TrashIcon fill={colorIcons} width={sizeIcons} height={sizeIcons}/>
          <Text style={styles.titleItem}>Deletar tipo de evento</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </>
  );
}