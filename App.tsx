import { StatusBar } from 'expo-status-bar';
import { Main } from './src/routes/Main';
import React, { useEffect } from 'react';
import { useFonts, Roboto_400Regular, Roboto_900Black, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { LoadingScreen } from './src/screens/LoadingScreen';
import { OneSignal } from 'react-native-onesignal';
import { useDeviceConfig } from './src/hooks/useDeviceConfig';
import { ONESIGNAL_TOKEN } from '@env';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_900Black,
    Roboto_500Medium
  });

  OneSignal.initialize(ONESIGNAL_TOKEN);

  OneSignal.Notifications.requestPermission(true);

  useDeviceConfig();

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

