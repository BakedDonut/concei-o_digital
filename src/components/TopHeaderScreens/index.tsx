import { Image, View } from "react-native";
import {styles} from "./styles";
import ImageLogo from '../../assets/images/logo.jpeg'

export function TopHeaderScreens(){
    return (
        <View style={styles.container}>
            <Image source={ImageLogo} style={{ width: 100, height: 100 }}/>
        </View>
    )
}