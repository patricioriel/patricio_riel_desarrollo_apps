import React, { useState} from "react";
import { StyleSheet,SafeAreaView } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import {Header, BotonFlotante, Isologo, ItemList, ModalLista, ModalTask} from "./src/components"

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

  const [items, setItems] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [Task, setTask] = useState("");

  const onChangeTask = (text) => {
    setTask(text);
  };

  const openNewModal = () => {
    setAddModal(true);
  }

  const addTask = () => {
    setItems((oldArray) => [...oldArray, { id: Date.now(), name: Task, state: false }]);
    setTask("");

    setAddModal(!addModal);
  };

  const closeAddTask = () => {
    setAddModal(!addModal);
    setTask("");
  }

  const openTask = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem({});
  };

  const stateChange = (id) => {
    setModalVisible(!modalVisible);
    items.find(item => item.id === id).state = true;
    setSelectedItem({});
  }

  const onDeleteTask = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArray) => oldArray.filter((item) => item.id !== id));
    setSelectedItem({});
  };

  if (!fontsLoaded) {
    return null;
  };

  return (
    <SafeAreaView style={styles.screen} onLayout={onLayoutRootView}>
      {loading ? (<Isologo />) : (
        <>
          <Header />
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
          />
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