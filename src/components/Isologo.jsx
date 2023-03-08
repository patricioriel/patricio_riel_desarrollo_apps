import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Isologo = () => {
  return (
    <View style={styles.containeriso}>
        <Image
        style={styles.isologo}
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/7165/7165526.png" }}
      />
      </View>
  )
}

export default Isologo

const styles = StyleSheet.create({
    isologo:{
        width: 250,
        height: 250
      },
      containeriso:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
      }
})