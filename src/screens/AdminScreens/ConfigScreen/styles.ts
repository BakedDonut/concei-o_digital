import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: windowWidth,
    flexDirection: 'column',
    padding: 10, // Espaçamento adicional ao redor do conteúdo
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
    flex: 1,  // Permite que cada quadrado ocupe uma parte igual da linha
    borderRadius: 10,
    borderColor: theme.colors.primary_bright,
    backgroundColor: theme.colors.background_text_input,
    margin: 5, // Espaço entre os quadrados
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Espaço interno do quadrado
    minHeight: 120, // Garantir que os quadrados tenham uma altura mínima
    maxWidth: (windowWidth - 40) / 2, // Cada quadrado ocupará metade da largura da tela, considerando o padding
    flexDirection: 'column', // Alinha os itens dentro do quadrado verticalmente,
    borderWidth: 2,
  },
  titleItem:{
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.medium,
    color: theme.colors.primary_bright, // Texto branco para contraste
    marginTop: 10, // Distância do ícone para o texto
    textAlign: 'center',
  }
});
