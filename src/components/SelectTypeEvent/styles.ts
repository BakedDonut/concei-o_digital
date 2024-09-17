import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
  },
  modalContent: {
    width: width,
    height: height, // Adjust to your needs
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    borderTopWidth: 2,
    borderColor: theme.colors.gray_200,
    width: width,
    marginLeft: -20
  },
  closeButtonText: {
    color: 'blue',
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.medium
  },
  listContent: {
    flexGrow: 1, // Make sure the list can grow
  },
  textButtonOpenModal:{
    color: theme.colors.text,
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.medium
  },
  containerButtonOpenModal:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textItem:{
    color: theme.colors.text,
    fontFamily: theme.fonts.medium,
    fontSize: theme.sizes.medium
  }
});