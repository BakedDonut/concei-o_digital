import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    modalView: {
        flex:1,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        padding: 10
    },
    inputContainer:{
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    label:{
        color: theme.colors.label,
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.medium,
        marginTop: 30
    },
    inputText:{
        height: 40,
        backgroundColor: theme.colors.background_text_input,
        borderRadius: 5,
    },
    buttonCreateTypeEvent:{
        marginTop: 20,
        height: 40,
        backgroundColor: theme.colors.background_text_input,
        borderRadius: 4,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        
      },
      textButtonCreateTypeEvent:{
        color: theme.colors.primary,
        fontFamily: theme.fonts.black,
        fontSize: theme.sizes.large,
        textAlign: 'center'
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
      }
});