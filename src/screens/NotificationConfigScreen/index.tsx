import { Text, View } from "react-native";
import { TopHeaderScreens } from "../../components/TopHeaderScreens";
import { ButtonOpenMainDrawer } from "../../components/ButtonOpenMainDrawer";
import { styles } from "./styles";

export function NotificationConfigScreen(){
    return(
        <View>
            <TopHeaderScreens/>
            <View style={{backgroundColor: 'white', alignItems:'center', height: 40}}>
                <Text style={styles.title}>Configurar Notificações</Text>
            </View>
        </View>
    ); 
}