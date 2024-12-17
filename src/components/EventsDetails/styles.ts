import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../styles/theme';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 15,
    borderBottomWidth: 0.2,
    alignItems: 'center',
    borderBottomColor: theme.colors.primary,
    width: '100%',
    paddingVertical: 10,
    justifyContent: "space-between"
  },
  textBtn: {
    color: theme.colors.primary,
    fontSize: theme.sizes.large,
    fontFamily: theme.fonts.medium,
    marginLeft: 8,
  },
  modalContainer: {
    height: screenHeight, 
    backgroundColor: 'white', // Defina a cor de fundo que desejar
    marginTop: 'auto', // Para que o modal apareça na parte inferior da tela
  },
  content:{
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 20
  },
  title:{
    fontFamily: theme.fonts.black,
    fontSize: theme.sizes.extra_large,
    color: theme.colors.primary,
    marginTop: 10,
    textAlign: 'center'
  },
  subtitle:{
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.medium,
    color: theme.colors.gray_500,
    textAlign: 'center',
    width: screenWidth -32,
  },
  conent2:{
    width: screenWidth -32,
    justifyContent: 'flex-start',
  },
  item:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.medium,
    color: theme.colors.text,
    marginLeft: 10
  },
  descriptionTitle:{
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.medium,
    color: 'black',
  },
  descriptionContent:{
    marginTop: 14,
    paddingBottom: 70,
  },
  info:{
    color: theme.colors.gray_600,
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.large
  }
  
});