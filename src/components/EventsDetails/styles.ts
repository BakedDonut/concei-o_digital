import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../styles/theme';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  header: {
    height: 48,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 14,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 3,
    alignItems: 'center'

  },
  textBtn: {
    color: theme.colors.primary,
    fontSize: theme.sizes.large,
    marginLeft: 8,
  },

  modalContainer: {
    height: screenHeight * 0.9, // 90% da altura da tela
    backgroundColor: 'white', // Defina a cor de fundo que desejar
    borderTopLeftRadius: 20, // Raio para o efeito de bordas arredondadas (opcional)
    borderTopRightRadius: 20,
    marginTop: 'auto', // Para que o modal apareça na parte inferior da tela
  },
  
});