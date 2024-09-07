import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import ImageLoading from '../../assets/images/loginImage.jpeg';
import { styles } from './styles';
import { theme } from '../../styles/theme';

export function LoadingScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Conceição Digital</Text>
        <Image source={ImageLoading} style={styles.image}/>
        <ActivityIndicator size="large" color={theme.colors.primary}/>
    </View>
  );
}