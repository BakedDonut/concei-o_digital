import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GeneralScreen } from '../screens/HomeScreens/GeneralScreen';
import { GroupsScreen } from '../screens/HomeScreens/GroupsScreen';
import { AboutSreen } from '../screens/HomeScreens/AboutScreen';
import { theme } from '../styles/theme';
import ListIcon from '../assets/icons/list.svg';
import { CreateEventScreen } from '../screens/AdminScreens/CreateEventScreen';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ButtonOpenMainDrawer } from '../components/ButtonOpenMainDrawer';
import { TopHeaderScreens } from '../components/TopHeaderScreens';



const Tab = createMaterialTopTabNavigator();

export function Home() {
  return (
    <>
    <TopHeaderScreens/>
    <View style={{flexDirection: 'row', flex: 1, marginLeft: -100}}>
      <ButtonOpenMainDrawer
        width={'25%'}
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
            width: '75%',
            marginLeft: '25%',
          },
          tabBarLabelStyle: {
            fontFamily: theme.fonts.medium, 
            fontSize: theme.sizes.medium, 
          },
        }}
      >
        <Tab.Screen name="Geral" component={GeneralScreen}/>
        <Tab.Screen name="Grupos" component={GroupsScreen} />
        <Tab.Screen name="Sobre" component={AboutSreen} />
      </Tab.Navigator>
    </View>
    </>
  );
}
