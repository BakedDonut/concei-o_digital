import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Login: undefined;
    Details: undefined;
    GroupListScreen: { typeGroupSearch: string }; 
    SelectGroupScreen: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
