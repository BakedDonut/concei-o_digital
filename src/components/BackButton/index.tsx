import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ArrowLeftIcon from '../../assets/icons/caret-left-bold.svg'
import { styles } from './styles';
import { theme } from '../../styles/theme';

type Props ={
    onPress: (value: boolean) => void
}

export function BackButton({onPress}:Props) {
  return (
    <TouchableOpacity style={styles.container}>
        <ArrowLeftIcon fill={theme.colors.primary} width={40} height={40}/>
    </TouchableOpacity>
  );
}