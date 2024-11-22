import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    modalView: {
        flex:1,
        paddingHorizontal: 16
    },
    buttonContainer:{

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
    }
});