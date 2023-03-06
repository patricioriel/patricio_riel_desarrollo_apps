import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.addItemInputContainer}>
            <Text style={styles.title}>AgendApp</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    addItemInputContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        textAlign: 'center',
        width: '100%',
        fontSize: 35,
        backgroundColor: "#25d1fe",
        fontFamily: "open-sans-bold"
    },
})