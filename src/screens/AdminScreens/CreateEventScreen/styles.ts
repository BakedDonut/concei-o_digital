import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

const width = Dimensions.get('screen').width;
console.log(width);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    width: width
  },
  inputContainer:{
    justifyContent: 'flex-start',
    marginVertical: 10
  },
  label:{
    color: theme.colors.labal,
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.medium
  },
  inputText:{
    height: 40,
    backgroundColor: theme.colors.background_text_input,
    borderRadius: 5,
  },
  dataTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width -30,
    marginBottom: 20
    },
    containerCreateEvent:{
      backgroundColor: theme.colors.primary_bright,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      marginVertical: 30
    },
    textCreateEvent:{
      color: 'white',
      fontFamily: theme.fonts.black,
      fontSize: theme.sizes.medium
    },
    errorText:{
      color: 'red',
      fontFamily: theme.fonts.medium,
      fontSize: theme.sizes.small
    },
    attentionText:{
      color: theme.colors.primary_bright,
      fontFamily: theme.fonts.medium,
      fontSize: theme.sizes.small
    },
    dataTimeText:{
      width: 120,
      textAlign: 'center',
      fontSize: theme.sizes.large,
      fontFamily: theme.fonts.medium,
      color: theme.colors.text,
      backgroundColor: theme.colors.background_text_input,
      padding: 5,
      borderRadius: 5,
      height: 40
    }
});