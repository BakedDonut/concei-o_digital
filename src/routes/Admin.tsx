import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CreateEventScreen } from '../screens/AdminScreens/CreateEventScreen';
import { EditEventScreen } from '../screens/AdminScreens/EditEventScreen';
import { theme } from '../styles/theme';
import { ButtonOpenMainDrawer } from '../components/ButtonOpenMainDrawer';
import { TopHeaderScreens } from '../components/TopHeaderScreens';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export function Admin() {
  return (
    <>
    <TopHeaderScreens/>
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
        <Tab.Screen name="Criar" component={CreateEventScreen}/>
        <Tab.Screen name="Editar" component={EditEventScreen} />
      </Tab.Navigator>
    </>
  );
}