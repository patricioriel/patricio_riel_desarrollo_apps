import React, {useState} from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { BotonFlotante, Header, ItemList, ModalLista, ModalTask } from '../components';
import { useNavigation } from '@react-navigation/native';
import { agregarItem, selectItem } from '../store/actions/tareas.action';
import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = () => {

  const task = useSelector((state)=> state.rootTask.items)

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [Task, setTask] = useState("");
  const [addModal, setAddModal] = useState(false);

  const dispatch = useDispatch();

  const onChangeTask = (text) => {
    setTask(text);
  };

  const addTask = () => {
    setTask("");
    setAddModal(!addModal);
    dispatch(agregarItem({ id: Date.now(), name: Task, state: false }))
  };

  const closeAddTask = () => {
    setAddModal(!addModal);
    setTask("");
  }

  const openTask = (item) => {
    dispatch(selectItem(item))
    setModalVisible(true);
  };

  return (
    <View style={styles.screen}>
      <Image
        style={styles.backgroundImage}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29Afvcimv04bBofSX6zvWj7-u-8e06Qsj062u94Wv10GsJh66dkXKKzFWBeOAMyfh1DQ&usqp=CAU' }}
      />
       <Header/>
       <ItemList items={task} openTask={openTask} />
       <BotonFlotante setAddModal={setAddModal} />
       <ModalLista
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
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
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity:0.2
    },
})