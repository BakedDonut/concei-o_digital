import { StatusBar } from 'expo-status-bar';
import { Main } from './src/routes/Main';
import React, { useEffect } from 'react';
import { useFonts, Roboto_400Regular, Roboto_900Black, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { LoadingScreen } from './src/screens/LoadingScreen';
import { OneSignal } from 'react-native-onesignal';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_900Black,
    Roboto_500Medium
  });

  OneSignal.initialize("1df309ef-8802-4ece-ba86-1993be6329e4");

  OneSignal.Notifications.requestPermission(true);

  if (!fontsLoaded) {
    return <LoadingScreen/>;
  }

  if (fontError) {
    console.error('Error loading fonts: ', fontError);
    return <LoadingScreen />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Main/>
    </>
  );
}

