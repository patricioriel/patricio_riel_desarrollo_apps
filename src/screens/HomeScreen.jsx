import React, {useState} from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from 'react-native';
import { BotonFlotante, Header, ItemList, ModalLista, ModalTask } from '../components';
import { useNavigation } from '@react-navigation/native';
=======
import { StyleSheet, Text, View } from 'react-native';
import { BotonFlotante, Header, ItemList, ModalLista, ModalTask } from '../components';
>>>>>>> 1d19827cbb7eb2e9f018b34ff9eb5015e6a72548

const HomeScreen = () => {

  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [Task, setTask] = useState("");
  const [addModal, setAddModal] = useState(false);

  const onChangeTask = (text) => {
    setTask(text);
  };

  /*const openNewModal = () => {
    setAddModal(true);
  }*/

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

<<<<<<< HEAD
=======
const HomeScreen = () => {

  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [Task, setTask] = useState("");
  const [addModal, setAddModal] = useState(false);

  const onChangeTask = (text) => {
    setTask(text);
  };

  /*const openNewModal = () => {
    setAddModal(true);
  }*/

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

>>>>>>> 1d19827cbb7eb2e9f018b34ff9eb5015e6a72548
  return (
    <View style={styles.screen}>
       <Header/>
       <ItemList items={items} openTask={openTask} />
       <BotonFlotante setAddModal={setAddModal} />
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
<<<<<<< HEAD
          />
          <Button
            title="Ver detalles de usuario"
            onPress={() => navigation.navigate('UserDetails')}
          />
=======
      />
>>>>>>> 1d19827cbb7eb2e9f018b34ff9eb5015e6a72548
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})