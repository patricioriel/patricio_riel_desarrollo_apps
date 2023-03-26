import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BotonFlotante, Header, ItemList, ModalLista, ModalTask } from '../components';
import { useNavigation } from '@react-navigation/native';
import { AGREGAR_ITEM, ELIMINAR_ITEM, CAMBIAR_ESTADO } from '../store/actions/tareas.action';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {

  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [Task, setTask] = useState("");
  const [addModal, setAddModal] = useState(false);

  const dispatch = useDispatch;

  const onChangeTask = (text) => {
    setTask(text);
  };

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
          />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#E6EDF5"
    }
})