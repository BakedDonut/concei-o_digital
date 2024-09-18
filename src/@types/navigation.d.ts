// navigationTypes.ts

import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Login: undefined;  
    Details: undefined; 
};

export type NavigationProps = StackNavigationProp<RootStackParamList, 'Login'>; 
