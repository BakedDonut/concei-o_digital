import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  date:{
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.large,
    color: theme.colors.text
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  type:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#B79960',
    borderRadius: 999,
    color: 'white'
  },
  time:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  text:{
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.medium,
    color: theme.colors.text
  },
  content:{},
  title:{
    fontFamily: theme.fonts.black,
    fontSize: theme.sizes.large,
    color: '#B79960',
    textAlign: 'left',
    marginBottom: 5
  },
  typeText:{
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.medium,
    color: theme.colors.white,
  }
});