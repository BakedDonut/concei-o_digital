import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Admin } from './Admin';
import { LoginScreen } from '../screens/LoginScreen';
import { useAuth } from '../providers/AuthContextProvider'; // Ajuste o caminho conforme necessário

const Stack = createNativeStackNavigator();

export function Auth() {
  const { user, logout } = useAuth(); // Obtém o usuário e a função de logout
console.log(user);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
              user ? 
              <Stack.Screen name="Admin" component={Admin} />
               : 
               <Stack.Screen name="Login" component={LoginScreen} />
            }
        </Stack.Navigator>
    );
}
