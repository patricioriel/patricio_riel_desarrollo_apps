import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import UserScreen from '../screens/UserScreen'
import HomeScreen from '../screens/HomeScreen'


const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="UserDetails" component={UserScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigators