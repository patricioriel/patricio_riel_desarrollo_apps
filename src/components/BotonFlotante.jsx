import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BotonFlotante = ({ openNewModal }) => {
  return (
    <TouchableOpacity
      style={styles.btnflotante}
      onPress={openNewModal}
    >
      <Image
        style={styles.imgbtnflotante}
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/3876/3876052.png" }}
      />
    </TouchableOpacity>
  )
}

export default BotonFlotante

const styles = StyleSheet.create({
  btnflotante: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  imgbtnflotante: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  }
})