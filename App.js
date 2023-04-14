import React, { useState} from "react";
import { StyleSheet,SafeAreaView, Platform, StatusBar } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { Isologo} from "./src/components"
import Navigators from "./src/navigators/Navigators";
import { Provider} from "react-redux";
import store from "./src/store";
import { init } from "./src/db";



SplashScreen.preventAutoHideAsync()

export default function App() {

  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };

  init().then(
    () => {
      console.log('Initialized database');
    }
  ).catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  });

  return (
    <Provider store= {store} >
    <SafeAreaView style={styles.screen} onLayout={onLayoutRootView}>
      {loading ? (<Isologo />) : (
          <Navigators/>
      )}
    </SafeAreaView>
     </Provider>
  )
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});