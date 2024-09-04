import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GeneralScreen } from '../screens/HomeScreens/GeneralScreen';
import { GroupsScreen } from '../screens/HomeScreens/GroupsScreen';
import { AboutSreen } from '../screens/HomeScreens/AboutScreen';
import { TopHeaderScreens } from '../components/TopHeaderScreens';

const Tab = createMaterialTopTabNavigator();

export function Home() {
  return (
    <Tab.Navigator>
        <TopHeaderScreens
        
        />
      <Tab.Screen name="Geral" component={GeneralScreen} />
      <Tab.Screen name="Grupos" component={GroupsScreen} />
      <Tab.Screen name="Sobre" component={AboutSreen} />
    </Tab.Navigator>
  );
}