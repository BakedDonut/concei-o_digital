import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonBack:{
    backgroundColor: theme.colors.background_text_input,
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  top:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  textBack:{
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.small,
    color: theme.colors.text
  },
  content:{
    justifyContent: 'center'
  },
  title:{
    color: theme.colors.primary,
    fontFamily: theme.fonts.black,
    fontSize: theme.sizes.extra_large,
    textAlign: 'center'
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 999,
    alignSelf: 'center'
  },
  inputText:{
    height: 40,
    backgroundColor: theme.colors.background_text_input,
    borderRadius: 5,
    
  },
  inputContainer:{
    justifyContent: 'flex-start',
    marginVertical: 10,
    width: width,
    paddingHorizontal: 16
  },
  label:{
    color: theme.colors.labal,
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.medium
  },
  button:{
    backgroundColor: theme.colors.primary_bright,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginVertical: 30,
    marginHorizontal: 16,
    marginBottom: 20
  },
  textButton:{
    color: 'white',
    fontFamily: theme.fonts.black,
    fontSize: theme.sizes.large
  },
  errorText: {
    color: 'red',
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.small
    },

});