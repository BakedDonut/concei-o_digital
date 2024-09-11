import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 100
    },
    title:{
        fontFamily: theme.fonts.black,
        fontSize: theme.sizes.extra_large,
        color: theme.colors.primary,
    },
    space:{
        width:'75%', 
        alignItems: 'center'
    }
})