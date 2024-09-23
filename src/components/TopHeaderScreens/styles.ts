import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    image:{
        width: 65,
        height: 65,
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