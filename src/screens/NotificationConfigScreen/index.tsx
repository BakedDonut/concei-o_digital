import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TopHeaderScreens } from "../../components/TopHeaderScreens";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import CheckIcon from '../../assets/icons/check.svg';
import { theme } from "../../styles/theme";
import { fetchEventTypesApi } from "../../api/events";
import { EventTypes } from "../../@types/event";
import { fetchDeviceByIdApi, updateNotificationEventsPreferences } from "../../api/device";
import { getDeviceDataStorage } from "../../storage/DeviceStorage";
import { Loading } from "../../components/Loading";

export function NotificationConfigScreen() {

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const [eventTypes, setEventTypes] = useState<EventTypes[]>([]);

    const [deviceId, setDeviceId] = useState<string>();

    const [loadActive, setLoadActive] = useState(false);

    async function handleSelectItem (id: string){
        try {
            setLoadActive(true);
            
            setSelectedItems(prevSelectedItems => {
                const alreadySelected = prevSelectedItems.includes(id);
                return alreadySelected 
                    ? prevSelectedItems.filter(item => item !== id) 
                    : [...prevSelectedItems, id];
            });
        } catch (error) {
            console.log(error);
            
            throw error;
        } finally {
            setLoadActive(false);
        }
    };

    useEffect(() => {
        async function update(){
            await updateNotificationEventsPreferences(deviceId, selectedItems);
        }
        update();
      }, [selectedItems]);  
    
    useEffect(() => {
        const fetchEventTypes = async () => {
          try {
            const data = await fetchEventTypesApi();
            setEventTypes(data);            
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchEventTypes();
      }, []);  

      useEffect(() => {
        const fetchEventTypesFromDevice = async () => {
          const dataDevice = await getDeviceDataStorage();
            if(dataDevice !==null){                
                setSelectedItems(dataDevice?.notificationPreferences.eventsNotificationId);
                setDeviceId(dataDevice.id)
            }
        };
    
        fetchEventTypesFromDevice();
      }, []);  


    return (
        <View style={styles.container}>
            <TopHeaderScreens />
            <View style={styles.top}>
                <Text style={styles.title}>Configurar Notificações</Text>
            </View>
            <ScrollView style={styles.content}>
                <Text style={styles.titleSelectEvent}>Selecione os eventos que deseja ser notificado</Text>
                <View style={{ width: '100%', height: '100%' }}>
                    {
                        loadActive ? 
                        <Loading/>
                        :
                        <FlashList 
                            data={eventTypes}
                            keyExtractor={item => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            extraData={selectedItems}
                            estimatedItemSize={56} 
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => handleSelectItem(item.id.toString())}
                                    style={styles.option}
                                >
                                    <View style={[styles.itemCheck, 
                                        selectedItems.includes(item.id.toString()) && { backgroundColor: theme.colors.primary }
                                    ]}>
                                        {selectedItems.includes(item.id.toString()) && (
                                            <CheckIcon fill={'white'} width={20} height={20} />
                                        )}
                                    </View>
                                    <Text style={styles.optionName}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    }
                
                </View>
            </ScrollView>
            <View style={{height:30}}/>
        </View>
    ); 
}
