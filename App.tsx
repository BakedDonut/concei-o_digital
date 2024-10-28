import { StatusBar } from 'expo-status-bar';
import { Main } from './src/routes/Main';
import React, { useEffect } from 'react';
import { useFonts, Roboto_400Regular, Roboto_900Black, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { LoadingScreen } from './src/screens/LoadingScreen';
import Constants from "expo-constants";
import { APP_ID_ONESIGNAL, baseUrlApiFestaHub } from '@env';
import { LogLevel, OneSignal } from 'react-native-onesignal';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_900Black,
    Roboto_500Medium
  });

  OneSignal.initialize(APP_ID_ONESIGNAL);

  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);

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

