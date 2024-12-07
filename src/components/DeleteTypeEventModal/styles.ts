import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        paddingBottom: 40,
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
      itemContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textItem:{
        color: theme.colors.text,
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.medium
      },
      event:{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray_700,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      eventName:{
        color: theme.colors.text,
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.medium,
      },
      footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
      },
      confirmButton:{
        backgroundColor: theme.colors.primary_bright,
        height: 50,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      cancelButton:{
        backgroundColor: 'red',
        height: 50,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      cancelText:{
        color: '#fff',
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.medium
      },
      confirmText:{
        color: '#fff',
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.medium
      },
      titleConfirmDelete:{
        color: theme.colors.title,
        fontFamily: theme.fonts.medium,
        fontSize: theme.sizes.large,
        textAlign: 'center',
        marginBottom: 20
      }
});