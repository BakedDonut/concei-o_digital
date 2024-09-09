import { StatusBar } from 'expo-status-bar';
import { Main } from './src/routes/Main';
import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_900Black, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { LoadingScreen } from './src/screens/LoadingScreen';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_900Black,
    Roboto_700Bold,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Main/>
    </>
  );
}

//