import { StackNavigationProp } from '@react-navigation/stack';

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            Login: undefined;
            Details: undefined;
            GroupListScreen: { typeGroupSearch }; 
            SelectGroupScreen: undefined;
        }
    }
}