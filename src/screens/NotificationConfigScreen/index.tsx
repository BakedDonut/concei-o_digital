import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TopHeaderScreens } from "../../components/TopHeaderScreens";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import CheckIcon from '../../assets/icons/check.svg';
import { theme } from "../../styles/theme";
import { fetchEventTypesApi } from "../../api/envents";
import { EventTypes } from "../../@types/event";
import { fetchDeviceByIdApi } from "../../api/device";

const data = [
    { id: 1, name: 'missas dominicais' },
    { id: 2, name: 'missas semanais' },
    { id: 3, name: 'missas especiais' },
    { id: 4, name: 'eventos especiais' },
    { id: 5, name: 'avisos da paróquia' },
    { id: 6, name: 'avisos da comunidade' },
    { id: 7, name: 'avisos da pastoral' },
    { id: 8, name: 'avisos da catequese' },
    { id: 9, name: 'avisos da liturgia' },
    { id: 10, name: 'avisos da música' },
    { id: 11, name: 'avisos da juventude' },
    { id: 12, name: 'avisos da crisma' },
    { id: 13, name: 'avisos do batismo' },
    { id: 14, name: 'avisos do casamento' },
    { id: 15, name: 'avisos da eucaristia' },
    { id: 16, name: 'avisos da confirmação' }
];

export function NotificationConfigScreen() {

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const [eventTypes, setEventTypes] = useState<EventTypes[]>([]);

    const handleSelectItem = (id: string) => {
        setSelectedItems(prevSelectedItems => {
            const alreadySelected = prevSelectedItems.includes(id);
            return alreadySelected 
                ? prevSelectedItems.filter(item => item !== id) 
                : [...prevSelectedItems, id];
        });
    };
    
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
          //Aqui vai pegar de device do storage ou session
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
                </View>
            </ScrollView>
        </View>
    ); 
}
