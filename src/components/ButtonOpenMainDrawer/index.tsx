import React, { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import ListIcon from '../../assets/icons/dots-three-outline-vertical-fill.svg'; 
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { DimensionValue } from 'react-native';

type NavigationProps = DrawerNavigationProp<{}>;

const windowWidth = Dimensions.get('window').width;

export function ButtonOpenMainDrawer() {
  const navigation = useNavigation<NavigationProps>();
  const [iconColor, setIconColor] = useState(theme.colors.gray_300); 
  
  useEffect(() => {
    setTimeout(() => {
      setIconColor(theme.colors.gray_yellow);
    }, 2000);
  }, [iconColor]);

  return (
    <TouchableOpacity 
      onPress={() => [
        navigation.openDrawer(),
        setIconColor(theme.colors.primary)
      ]}
      style={[styles.container]}
    >
      <ListIcon 
        width={24} 
        height={24} 
        fill={iconColor}
      />
    </TouchableOpacity>
  );
}
