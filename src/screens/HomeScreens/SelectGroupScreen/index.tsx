import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import { Text } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../@types/navigation';
import { fetchEventTypesApi } from '../../../api/envents';
import { EventTypes } from '../../../@types/event';



export function SelectGroupScreen() {

    const navigation = useNavigation<NavigationProps>(); 

    const [eventTypes , setEventTypes] = useState<EventTypes[]>([]);

    function handleSelectItem(id: string) {
        navigation.navigate('GroupListScreen', { typeGroupSearch: id });
    }

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
    
  return (
    <View style={styles.container}>
        <View style={{width: '100%', height: '100%'}}>
        <FlashList 
            data={eventTypes}
            renderItem={({ item }) => 
                <TouchableOpacity 
                    style={styles.option}
                    onPress={()=>handleSelectItem(item.id.toString())}
                >
                    <Image source={{uri: item.image}} style={styles.optionImage}/>
                    <Text style={styles.optionText}>{item.name}</Text>
                </TouchableOpacity>
            }
            estimatedItemSize={200}
            showsVerticalScrollIndicator={false}
        />
        </View>
    </View>
  );
}