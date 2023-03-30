import { StyleSheet, Text, FlatList, Pressable } from 'react-native'
import COLORS from '../constants/COLORS'
import React from 'react'

const ItemList = ({ items, openTask }) => {
    const sortedItems = items.sort((a, b) => {
        if (a.state && !b.state) {
            return 1;
        } else if (!a.state && b.state) {
            return -1;
        } else {
            return 0;
        }
    });

    return (
        <FlatList
            style={styles.flatList}
            data={sortedItems}
            renderItem={(itemData) => (
                <Pressable
                    style={[
                        styles.itemContainer,
                        itemData.item.state ? styles.itemContainerResuelto : styles.itemContainerPendiente,
                    ]}
                    onPress={() => {
                        openTask(itemData.item);
                    }}
                >
                    <Text style={styles.itemName}>{itemData.item.name}</Text>
                    <Text
                        style={[
                            itemData.item.state ? styles.itemtareaResuelto : styles.itemtareaPendiente,
                        ]}
                    >
                        {itemData.item.state ? 'Resuelto ✔️' : 'Pendiente ⏱️'}
                    </Text>
                </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

export default ItemList

const styles = StyleSheet.create({
    flatList: {
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        marginTop:10,
        width:"100%",
    },
    itemContainer: {
        padding: 10,
        marginTop: 1,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    itemtareaResuelto: {
        fontSize: 17,
        color: "green",
    },
    itemtareaPendiente: {
        fontSize: 17,
        color: "red",
        fontFamily: "open-sans",
    },
    itemContainerResuelto: {
        backgroundColor: COLORS.fondoverde,
    },
    itemContainerPendiente: {
        backgroundColor: COLORS.fondonaranja,
    },
})