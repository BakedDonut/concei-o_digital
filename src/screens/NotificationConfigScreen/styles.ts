import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    title:{
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.large,
        color: theme.colors.primary
    },
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
    },
    content:{
        width: '100%',
        height: '100%',
        paddingHorizontal: 20
    },
    top:{
        backgroundColor: 'white', 
        alignItems:'center', 
        height: 40,
        width: '100%',
    },
    titleSelectEvent:{
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.medium,
        color: theme.colors.label,
        textAlign: 'center',
        marginTop: 20
    },
    option:{
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
    },
    itemCheck:{
        width: 27,
        height: 27,
        borderRadius: 2,
        backgroundColor: '#D9D9D9',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionName:{
        fontFamily: theme.fonts.regular,
        fontSize: theme.sizes.medium,
        color: theme.colors.label
    },
})