import React from 'react';
import { Text, View } from 'react-native';
import ClockIcon from '../../assets/icons/clock.svg'
import { styles } from './styles';
import { theme } from '../../styles/theme';

export function EventContainer() {
  return (
    <>
        <Text style={styles.date}>30 de Maio</Text>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.type}>Solenidade</Text>
                <View style={styles.time}>
                    <ClockIcon fill={theme.colors.gray_300} width={15} height={15}/>
                    <Text style={styles.text}>30:30</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Solenidade de Corpus Cristi
                </Text>
                <Text style={styles.text}>
                    xxxxx xxxx xxxx xxx xxx x x xxxxxxxxxx  xxxxxx
                    xx xxxx xxxx xxxx xxxx xxx x xxxxxxxxxxxxxxxx
                    x xxxx xxx xxxx xxx xxxx xx xxxxxxxxxxxxx xxxx 
                    xxx xxx xxx xxx xxx xxxx x xxxxxxxxxxxxxxxxx x
                </Text>
            </View>
        </View>
    </>
  );
}