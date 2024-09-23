import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 16,
    },
    title:{
        fontFamily: theme.fonts.black,
        fontSize: theme.sizes.extra_large,
        textAlign: 'left'
    },
    info:{
        paddingTop: 20
    },
    text:{
        fontFamily: theme.fonts.regular,
        fontSize: theme.sizes.medium,
        paddingTop: 10
    },
    buttons:{
        paddingTop: 20,
        paddingBottom: 40
    },
    textButton:{
        color: 'white',
        fontSize: theme.sizes.large,
        fontFamily: theme.fonts.black,
        paddingLeft: 20
    },
    icon:{
        color: 'white'
    },
    button: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        backgroundColor: '#fff', 
        shadowColor: '#000', 
        shadowOffset: {
          width: 0, 
          height: 2, 
        },
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        elevation: 5, 
      },
})