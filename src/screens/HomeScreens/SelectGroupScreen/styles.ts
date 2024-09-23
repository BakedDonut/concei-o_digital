import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  option:{
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 100,
  },
  optionText:{
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.large,
    color: theme.colors.primary
  },
  optionImage:{
    width: 80,
    height: 80,
    borderRadius: 999,
    borderWidth: 0.5,
    borderColor: theme.colors.primary_bright,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },
});