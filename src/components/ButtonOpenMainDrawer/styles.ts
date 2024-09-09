import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25%',
    marginRight: -130,
    zIndex: 1, // works on iOS
    elevation: 0, // Remove any shadow or elevation
    borderColor: 'transparent',
    borderWidth: 0 // No border
  }
});
