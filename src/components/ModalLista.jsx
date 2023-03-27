import { StyleSheet, Text, View, Modal, Pressable} from 'react-native'
import COLORS from '../constants/COLORS'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cambiarEstado, eliminarItem } from '../store/actions/tareas.action'

const ModalLista = ({onCancelModal, modalVisible, setModalVisible}) => {
  
  const selected = useSelector((state)=> state.rootTask.selected)
  const dispatch = useDispatch();

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
    <View style={styles.modalMainView}>
      <View style={styles.modalView}>

        <View style={styles.buttonClose}>
          <Pressable
            onPress={onCancelModal}
          >
            <Text style={[styles.button, styles.close]}>X</Text>
          </Pressable>
        </View>

        <Text style={styles.modalTitle}>{selected?.name}</Text>
  
        <View style={styles.modalBody}>
          <Text style={styles.modalText}>


          </Text>
          <Text style={styles.modalText}>
            <Text>Estado: </Text>
            <Text style={styles.modalBoldText}>{selected?.state ? "Resuelto" : "Pendiente"}</Text>
          </Text>
        </View>

        <View style={styles.modalActions}>
          <Pressable
            style={[styles.button, styles.buttonReady, selected?.state && styles.disabledButton]}
            onPress={() => {
              dispatch(cambiarEstado(selected))
              setModalVisible(!modalVisible)
            }}
            disabled={selected?.state}
          >
            <Text style={[styles.textStyle, selected?.state && styles.disabledButton]}>Marcar como "Resuelto"</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonDelete]}
            onPress={() => {
              dispatch(eliminarItem(selected))
              setModalVisible(!modalVisible)
            }}
          >
            <Text style={styles.textStyle}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </Modal>
  )
}

export default ModalLista

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  disabledButton: {
    backgroundColor: "#ccc",
    color: "#c2c2c2",
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalBody: {
    alignItems: "flex-start",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonReady: {
    backgroundColor: COLORS.verde,
  },
  buttonDelete: {
    backgroundColor: COLORS.rojo,
  },
  buttonClose: {
    position: "absolute",
    right: 0,
    top: 10,
  },
  close: {
    backgroundColor: "#ccc",
  },
})