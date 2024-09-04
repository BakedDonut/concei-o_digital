import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './Home';
import { Admin } from './Admin';
import { NavigationContainer } from '@react-navigation/native';
import { NotificationConfigScreen } from '../screens/NotificationConfigScreen';

const Drawer = createDrawerNavigator();

export function Main() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notificações" component={NotificationConfigScreen} />
      <Drawer.Screen name="Editar eventos(adiministrador)" component={Admin} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}