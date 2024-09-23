import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps } from '../../@types/navigation';

export function GroupListScreen() {
    // Access the route prop to get the parameters
    const route = useRoute();
    //const { typeGroupSearch } = route.params; // Destructure the parameter

    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={styles.container}>
            <Text>Type Group Search: {}</Text> {/* Display the parameter */}
        </View>
    );
}
