import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Loading() {
  return (
    <View style={styles.container}>
        <ActivityIndicator color={theme.colors.primary} size={'large'}/>
    </View>
  );
}