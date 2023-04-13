import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/COLORS'
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
        paddingBottom: 5,
    },
    title: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.celeste,
        fontFamily: "open-sans-bold",
        fontSize: 35,
        color: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 3,
        elevation: 5,
        textAlign: 'center'
    },
})

