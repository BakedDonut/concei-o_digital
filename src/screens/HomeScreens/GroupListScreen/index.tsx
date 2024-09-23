import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps } from '../../../@types/navigation';

type ParamsProps = {
    typeGroupSearch: string;
}

export function GroupListScreen() {
    
    const route = useRoute();
    const params = route.params as ParamsProps; 

    const [typeGroupSearch, setTypeGroupSearch] = useState<string>();

    useEffect(() => {
        setTypeGroupSearch(params.typeGroupSearch);
    }, [params]);
    
    const navigation = useNavigation<NavigationProps>();
    console.log('typeGroupSearch',typeGroupSearch);
    
    if(typeGroupSearch === undefined){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>{typeGroupSearch}</Text>
        </View>
    );
}
