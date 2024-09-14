import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  title:{
    fontSize: theme.sizes.extra_large,
    fontFamily: theme.fonts.regular,
    color: theme.colors.primary,
    marginBottom: 10
  }
});