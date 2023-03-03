import { StyleSheet, Text, View, Modal, TextInput, Pressable } from 'react-native'
import React from 'react'

const ModalTask = ({ addModal, onChangeTask, Task, addTask, closeAddTask }) => {
    return (
        <Modal animationType="fade" transparent={true} visible={addModal}>
            <View style={styles.modalMainView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Nueva tarea:</Text>
                    <View style={styles.addItemInputContainerModal}>
                        <TextInput
                            placeholder="Hacer..."
                            style={styles.input}
                            onChangeText={onChangeTask}
                            value={Task}
                        />
                    </View>
                    <View style={styles.modalActions}>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => {
                                addTask();
                            }}
                        >
                            <Text style={styles.textStyle}>Agregar</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.buttonDelete]}
                            onPress={() => closeAddTask()}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalTask

const styles = StyleSheet.create({
    addItemInputContainerModal: {
        marginBottom: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: 200,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginTop: 10
    },

    item: {
        padding: 10,
        textAlign: "start",
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "space-between",
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
    modalMainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})