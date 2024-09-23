import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { FlashList } from '@shopify/flash-list';
import { Text } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../@types/navigation';



let urlTest = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cathedral_Notre-Dame_de_Reims%2C_France-PerCorr.jpg/1200px-Cathedral_Notre-Dame_de_Reims%2C_France-PerCorr.jpg'

const data = [
    { id: 1, name: 'Grupo de Oração', image: urlTest},
    { id: 2, name: 'Grupo de Jovens', image: urlTest },
    { id: 3, name: 'Grupo de Liturgia', image: urlTest },
    { id: 4, name: 'Grupo de Música', image: urlTest },
    { id: 5, name: 'Grupo de Catequese', image: urlTest },
    { id: 6, name: 'Grupo de Crisma', image: urlTest },
    { id: 7, name: 'Grupo de Batismo', image: urlTest },
    { id: 8, name: 'Grupo de Casamento', image: urlTest },
    { id: 9, name: 'Grupo de Eucaristia', image: urlTest },
    { id: 10, name: 'Grupo de Confirmação', image: urlTest },
    { id: 11, name: 'Grupo de Pastoral', image: urlTest },
    { id: 12, name: 'Grupo de Acólitos', image: urlTest },
    { id: 13, name: 'Grupo de Ministros', image: urlTest },
    { id: 14, name: 'Grupo de Coroinhas', image: urlTest },
    { id: 15, name: 'Grupo de Encontro de Casais', image: urlTest },
    { id: 16, name: 'Grupo de Terço', image: urlTest }
]

export function SelectGroupScreen() {

    const navigation = useNavigation<NavigationProps>(); 

    function handleSelectItem(id: string) {
        navigation.navigate('GroupListScreen', { typeGroupSearch: id });
    }
    
  return (
    <View style={styles.container}>
        <View style={{width: '100%', height: '100%'}}>
        <FlashList 
            data={data}
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