import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Admin } from './Admin';
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export function Auth() { //É necessário passar pela Auth antes de permitir o usuário editar
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown: false,
        }}
    >   
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}