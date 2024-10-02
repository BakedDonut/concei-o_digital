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
  },
  textBtn: {
    color: theme.colors.primary,
    fontSize: theme.sizes.large,
    fontFamily: theme.fonts.medium,
    marginLeft: 8,
    paddingVertical: 20
  },
  modalContainer: {
    height: screenHeight, 
    backgroundColor: 'white', 
    marginTop: 'auto', 
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingBottom: 5
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
  dataTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth -30,
    marginBottom: 20
  },
    containerCreateEvent:{
      backgroundColor: theme.colors.primary_bright,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      marginVertical: 30
    },
    textCreateEvent:{
      color: 'white',
      fontFamily: theme.fonts.black,
      fontSize: theme.sizes.large
    },
    errorText:{
      color: 'red',
      fontFamily: theme.fonts.medium,
      fontSize: theme.sizes.small
    },
    attentionText:{
      color: theme.colors.primary_bright,
      fontFamily: theme.fonts.medium,
      fontSize: theme.sizes.small
    },
    dataTimeText:{
      width: 120,
      textAlign: 'center',
      fontSize: theme.sizes.large,
      fontFamily: theme.fonts.medium,
      color: theme.colors.text,
      backgroundColor: theme.colors.background_text_input,
      padding: 5,
      borderRadius: 5,
      height: 40
    },
    top:{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    deleteEventButton:{
      backgroundColor: '#ff584f',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      height: 40,
      borderRadius: 5
    },
    textDeleteEventButton:{
      color: 'white',
      fontFamily: theme.fonts.black,
      fontSize: theme.sizes.large,
      marginLeft: 5
    }
  
});