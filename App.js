import React, { useState, } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import BotonFlotante from "./src/components/BotonFlotante";
import Header from "./src/components/Header";
import ItemList from "./src/components/ItemList";
import ModalLista from "./src/components/ModalLista";
import ModalTask from "./src/components/ModalTask";

export default function App() {

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

  return (
    <View style={styles.screen}>

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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 35,
    padding: 3,
    flex: 1,
    backgroundColor: "#fff"
  },
});