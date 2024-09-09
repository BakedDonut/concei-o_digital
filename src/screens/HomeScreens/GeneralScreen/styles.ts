import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 16,
    },
    title:{
        fontSize: theme.sizes.extra_large,
        fontFamily: theme.fonts.black,
        color: theme.colors.title
    }
})