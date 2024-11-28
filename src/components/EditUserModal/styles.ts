import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    modalView: {
        flex:1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        padding: 10
    },
    inputContainer:{
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    label:{
        color: theme.colors.label,
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.medium
    },
    inputText:{
        height: 40,
        backgroundColor: theme.colors.background_text_input,
        borderRadius: 5,
    },
    errorText:{
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.small,
        color: 'red'
    },
    title:{
        color: theme.colors.primary,
        fontFamily: theme.fonts.black,
        fontSize: theme.sizes.extra_large,
        textAlign: 'center'
      },
      subtitle:{
        color: theme.colors.gray_300,
        fontFamily: theme.fonts.regular,
        fontSize: theme.sizes.small,
        textAlign: 'center'
      },
      buttonNotify:{
        marginTop: 20,
        height: 40,
        backgroundColor: theme.colors.background_text_input,
        borderRadius: 4,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        
      },
      textButtonNotify:{
        color: theme.colors.primary,
        fontFamily: theme.fonts.black,
        fontSize: theme.sizes.large,
        textAlign: 'center'
      },
});