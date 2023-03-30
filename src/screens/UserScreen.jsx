import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const UserScreen = () => {
  return (
    <View style={styles.screen}>
      <Image 
        source={{ uri: 'https://thumbs.dreamstime.com/b/imagen-an%C3%B3nima-del-perfil-del-hombre-34487140.jpg' }} 
        style={styles.image} 
      />
      <Text style={styles.text}>Nombre de usuario</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
})
