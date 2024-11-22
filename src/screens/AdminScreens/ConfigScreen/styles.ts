import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    width: '100%',
    flexDirection: 'column'
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
  optionSelect:{
    borderRadius: 1,
    borderColor: theme.colors.primary,
    backgroundColor: '#ffffff'
  },
  titleItem:{
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.medium,
    color: '#000'
  }
});