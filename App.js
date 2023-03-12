import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { NativeBaseProvider } from 'native-base';
import { LanguageProvider } from './src/context/LanguageContext';



const App = () => {



  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <LanguageProvider>

      {/* below is the props that is being passed to the language provider */}

      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </LanguageProvider>
  )
}

export default App