import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import COLORS from '../constants/COLORS';
import Icon from 'react-native-vector-icons/Entypo';
import React, { useState} from "react";

const NavigationBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePress = (index) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePress(0)}
      >
        <Icon name="home" size={24} color={selectedIndex === 0 ? "red" : "#000"} style={selectedIndex === 0 && styles.selectedIcon} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePress(1)}
      >
        <Icon name="list" size={24} color={selectedIndex === 1 ? "red" : "#000"} style={selectedIndex === 1 && styles.selectedIcon} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePress(2)}
      >
        <Icon name="user" size={24} color={selectedIndex === 2 ? "red" : "#000"} style={selectedIndex === 2 && styles.selectedIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default NavigationBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#C1E0E6',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  selectedIcon: {
    color: COLORS.celeste,
  },
})