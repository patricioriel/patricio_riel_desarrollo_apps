import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const UserScreen = () => {
  const [userImage, setUserImage] = useState(null);
  const [username, setUsername] = useState('');
  const [editMode, setEditMode] = useState(true);

  const handleImageSelection = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (result.uri) {
        const fileName = result.uri.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;
        await FileSystem.copyAsync({
          from: result.uri,
          to: newPath,
        });
        setUserImage(newPath);
      }
    } else {
       Alert.alert('Permisos denegados', 'No se puede acceder a la cámara sin permisos');
    }
  };

  const handleUsernameSubmit = () => {
    setEditMode(false);
  }

  const handleUsernameEdit = () => {
    setEditMode(true);
  }

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={handleImageSelection}>
        {userImage ? (
          <Image source={{ uri: userImage }} style={styles.image} />
        ) : (
          <Text style={styles.buttonText}>Tomar foto</Text>
        )}
      </TouchableOpacity>
      {editMode ? (
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Ingrese su nombre de usuario"
          placeholderTextColor="grey"
          autoFocus={true}
          onSubmitEditing={handleUsernameSubmit}
        />
      ) : (
        <TouchableOpacity onPress={handleUsernameEdit}>
          <Text style={styles.username}>{username}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserScreen;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 100,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: "open-sans",
    textAlign: 'center',
    fontSize: 25,
    color: 'blue',
    backgroundColor:"grey",
    borderRadius: 75,
    padding:20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    color: 'black',
    width: '80%',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  username: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 50,
    textAlign: 'center',
  },
});
