import React, { useState} from "react";
import { StyleSheet,SafeAreaView } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import {Header, BotonFlotante, Isologo, ItemList, ModalLista, ModalTask} from "./src/components"
import Navigators from "./src/navigators/Navigators";

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
    }, 2000);
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };

  return (
    <SafeAreaView style={styles.screen} onLayout={onLayoutRootView}>
      {loading ? (<Isologo />) : (
        <>
          {/*<Header />
          <ItemList items={items} openTask={openTask} />
          <BotonFlotante openNewModal={openNewModal} />
          <ModalLista
            onCancelModal={onCancelModal}
            onDeleteTask={onDeleteTask}
            modalVisible={modalVisible}
            selectedItem={selectedItem}
            stateChange={stateChange}
          />
          <ModalTask
            addModal={addModal}
            onChangeTask={onChangeTask}
            Task={Task}
            addTask={addTask}
            closeAddTask={closeAddTask}
      />*/}
          
          <Navigators/>
        </>
      )}
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  screen: {
    fontFamily: "open-sans",
    paddingTop: 35,
    padding: 3,
    flex: 1,
    backgroundColor: "#fff"
  },
});