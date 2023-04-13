import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserScreen from '../screens/UserScreen'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View} from 'react-native';
import COLORS from '../constants/COLORS'
import Historial from '../screens/Historial'

const BottomTabs = createBottomTabNavigator()

const Navigators = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar
        }}>
        <BottomTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabItemContainer}>
                <Entypo name="home" size={28} color={focused ? COLORS.celeste : 'grey'} />
                <Text style={[styles.tabItemText, { color: focused ? COLORS.celeste : 'grey' }]}>Home</Text>
              </View>
            )
          }} />

        <BottomTabs.Screen
          name="Historial"
          component={Historial}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabItemContainer}>
                <Entypo name="back-in-time" size={28} color={focused ? COLORS.celeste : 'grey'} />
                <Text style={[styles.tabItemText, { color: focused ? COLORS.celeste : 'grey' }]}>Historial</Text>
              </View>
            )
          }} />

        <BottomTabs.Screen
          name="Mi perfil"
          component={UserScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabItemContainer}>
                <Entypo name="user" size={28} color={focused ? COLORS.celeste : 'grey'} />
                <Text style={[styles.tabItemText, { color: focused ? COLORS.celeste : 'grey' }]}>Mi perfil</Text>
              </View>
            )
          }} />

      </BottomTabs.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60
  },
  tabItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabItemText: {
    fontSize: 12,
    marginTop: 5
  }
})

export default Navigators