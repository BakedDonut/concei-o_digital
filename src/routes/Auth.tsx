import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Admin } from './Admin';
import { LoginScreen } from '../screens/LoginScreen';
import { useAuth } from '../providers/AuthContextProvider'; // Ajuste o caminho conforme necessário

const Stack = createNativeStackNavigator();

export function Auth() {
  const { user, logout } = useAuth(); // Obtém o usuário e a função de logout
console.log(user);

    useEffect(() => {
        updateIdOnesignal(user.email)
    }, [user]);

    async function updateIdOnesignal(email: string){
        try {
            if(!email){
                return;
            }
            const id = await tagNotificationUserCreate(user.email);
            if(id){
                await updateUserIdOnesignalApi(id.toString());
            }

        } catch (error) {
            throw(error);
        }
    }

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
