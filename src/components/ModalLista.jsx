import { StyleSheet, Text, View, Modal, Pressable} from 'react-native'
import React from 'react'

const ModalLista = ({onCancelModal, onDeleteTask, modalVisible,selectedItem, stateChange}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
    <View style={styles.modalMainView}>
      <View style={styles.modalView}>

        <View style={styles.buttonClose}>
          <Pressable
            onPress={onCancelModal}
          >
            <Text style={[styles.button, styles.close]}>Cerrar</Text>
          </Pressable>
        </View>

        <Text style={styles.modalTitle}>{selectedItem.name}</Text>
  
        <View style={styles.modalBody}>
          <Text style={styles.modalText}>


          </Text>
          <Text style={styles.modalText}>
            <Text>Estado: </Text>
            <Text style={styles.modalBoldText}>{selectedItem.state ? "Resuelto" : "Pendiente"}</Text>
          </Text>
        </View>

        <View style={styles.modalActions}>
          <Pressable
            style={[styles.button, styles.buttonCancel, selectedItem.state && styles.disabledButton]}
            onPress={() => {
              stateChange(selectedItem.id);
            }}
            disabled={selectedItem.state}
          >
            <Text style={[styles.textStyle, selectedItem.state && styles.disabledButton]}>Marcar como "Resuelto"</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonDelete]}
            onPress={() => {
              onDeleteTask(selectedItem.id);
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
  buttonCancel: {
    backgroundColor: "#2196F3",
  },
  buttonDelete: {
    backgroundColor: "#f44336",
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