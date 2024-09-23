import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GroupListScreen } from '../screens/HomeScreens/GroupListScreen';
import { SelectGroupScreen } from '../screens/HomeScreens/SelectGroupScreen';

const Stack = createNativeStackNavigator();

export function Groups() { //Selecionar grupo 
  return (
    <Stack.Navigator
        initialRouteName='SelectGroupScreen'
        screenOptions={{
            headerShown: false,
        }}
    >   
      <Stack.Screen 
        name="SelectGroupScreen" 
        component={SelectGroupScreen}
      />
      <Stack.Screen 
        name="GroupListScreen" 
        component={GroupListScreen} 
        initialParams={{typeGroupSearch: 'teste'}}
        />
    </Stack.Navigator>
  );
}