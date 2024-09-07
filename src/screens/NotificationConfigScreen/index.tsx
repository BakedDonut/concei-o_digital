import { View } from "react-native";
import { TopHeaderScreens } from "../../components/TopHeaderScreens";
import { ButtonOpenMainDrawer } from "../../components/ButtonOpenMainDrawer";

export function NotificationConfigScreen(){
    return(
        <View>
            <TopHeaderScreens/>
            <View style={{backgroundColor: 'white', alignItems:'flex-end'}}>
                <ButtonOpenMainDrawer
                    width={'25%'}
                />
            </View>
        </View>
    ); 
}