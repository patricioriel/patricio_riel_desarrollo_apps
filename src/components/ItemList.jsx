import { StyleSheet, Text, FlatList, Pressable } from 'react-native'
import React from 'react'

const ItemList = ({ items, openTask }) => {
    return (
        <FlatList
            style={styles.flatList}
            data={items}
            renderItem={(itemData) => (
                <Pressable
                    style={styles.itemContainer}
                    onPress={() => {
                        openTask(itemData.item);
                    }}
                >
                    <Text style={styles.itemName}>{itemData.item.name}</Text>
                    <Text style={itemData.item.state ? styles.itemtarea : styles.itemtareaing}>{itemData.item.state ? "Resuelto" : "Pendiente"}</Text>
                </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default ItemList

const styles = StyleSheet.create({
    flatList: {
        borderTopColor: "#ccc",
        borderTopWidth: 1
    },
    itemContainer: {
        padding: 10,
        marginTop: 1,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    itemtarea: {
        fontSize: 15,
        color: "#1ab35e"
    },
    itemtareaing: {
        fontSize: 15,
        color: "#2196f3"
    },
})