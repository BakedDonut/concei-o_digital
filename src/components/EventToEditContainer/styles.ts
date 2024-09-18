import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.gray_400
  },
  date:{
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.large,
    color: theme.colors.text
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  type:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: theme.colors.primary_bright,
    borderRadius: 999,
    color: 'white'
  },
  time:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.medium,
    color: theme.colors.text
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title:{
    fontFamily: theme.fonts.black,
    fontSize: theme.sizes.large,
    color: theme.colors.primary,
    textAlign: 'left',
    marginBottom: 5
  },
  headerRight:{
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  bottom:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});