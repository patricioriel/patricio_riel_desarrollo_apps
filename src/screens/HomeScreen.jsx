import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BotonFlotante, Header, ItemList } from '../components'


const HomeScreen = ({items, openTask, openNewModal}) => {
  return (
    <View style={styles.screen}>
       <Header/>
       <ItemList items={items} openTask={openTask} />
       <BotonFlotante openNewModal={openNewModal} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})