import { StyleSheet } from 'react-native';
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {},
  buttonOpenModal:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButtonOpenModal:{
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.large,
    paddingRight: 5,
    marginBottom: 5,
    marginTop: 2
  },
  centeredView:{
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'  ,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView:{
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 30,
    borderRadius: 10
  },
  headerModal:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  modalCloseText:{
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.large,
    color: theme.colors.gray_yellow,
    marginRight: 5
  },
  optionText:{
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.large,
    color: theme.colors.gray_500,
    textAlign: 'center',
    width: 200,
    height: 35,
    marginTop: 10
  },
  backgroundItem:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: theme.colors.gray_300,
    borderRadius: 999,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 999,
    alignItems: 'center',
    shadowColor: '#000',         
    shadowOffset: { width: 0, height: 2 }, // 
    shadowOpacity: 0.3,          
    shadowRadius: 4,             
    elevation: 5,   
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 15  
  }
  
});