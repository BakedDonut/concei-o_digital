import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 16,
  },
  filter:{
      flexDirection: 'row'
  },
  topFlashlist:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  txt:{
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.small
  },
  backButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});