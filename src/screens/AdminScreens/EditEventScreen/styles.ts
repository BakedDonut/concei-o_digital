import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 16,
  },
  titleFlashlist:{
      fontSize: theme.sizes.large,
      fontFamily: theme.fonts.black,
      color: theme.colors.title
  },
  filter:{
      flexDirection: 'row'
  },
  topFlashlist:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  }
});