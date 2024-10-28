import { Image, Text, View } from "react-native";
import {styles} from "./styles";
import ImageLogo from '../../assets/images/loginImage.jpeg'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ButtonOpenMainDrawer } from "../ButtonOpenMainDrawer";

export function TopHeaderScreens(){

    const insets = useSafeAreaInsets();

    return (
        <View 
            style={[styles.container, {paddingTop: insets.top}]}
        >
            <Image source={ImageLogo} style={styles.image}/>
            <View style={styles.space}>
                <Text style={styles.title}>Conceição Digital</Text>
            </View>
            <ButtonOpenMainDrawer/>
        </View>
    )
}
