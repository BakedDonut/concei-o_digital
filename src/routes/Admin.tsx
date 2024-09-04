import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CreateEventScreen } from '../screens/AdminScreens/CreateEventScreen';
import { DeleteEventScreen } from '../screens/AdminScreens/DeleteEventScreen';

const Tab = createMaterialTopTabNavigator();

export function Admin() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Criar" component={CreateEventScreen} />
      <Tab.Screen name="Deletar" component={DeleteEventScreen} />
    </Tab.Navigator>
  );
}