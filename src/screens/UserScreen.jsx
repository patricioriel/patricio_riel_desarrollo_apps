import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>UserDetails</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})