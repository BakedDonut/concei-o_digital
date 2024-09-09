import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CreateEventScreen } from '../screens/AdminScreens/CreateEventScreen';
import { DeleteEventScreen } from '../screens/AdminScreens/DeleteEventScreen';
import { theme } from '../styles/theme';
import { ButtonOpenMainDrawer } from '../components/ButtonOpenMainDrawer';
import { TopHeaderScreens } from '../components/TopHeaderScreens';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export function Admin() {
  return (
    <>
    <TopHeaderScreens/>
    <View style={{flexDirection: 'row', width: '100%'}}>
      <ButtonOpenMainDrawer
          width={'37.5%'}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary, 
          tabBarInactiveTintColor: theme.colors.gray_yellow, 
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary,
            height: 5, 
            borderRadius: 50
          },
          tabBarStyle: {
            backgroundColor: '#fff', 
            elevation: 0, 
            shadowOpacity: 0, 
            width: '100%',
          },
          tabBarLabelStyle: {
            fontFamily: theme.fonts.medium, 
            fontSize: theme.sizes.medium, 
          },
        }}
      >
        <Tab.Screen 
          name="Criar" 
          component={CreateEventScreen} 
        />
        <Tab.Screen 
          name="Deletar" 
          component={DeleteEventScreen} 
        />
      </Tab.Navigator>
      
    </View>
    </>
  );
}