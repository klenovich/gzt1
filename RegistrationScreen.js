import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { register } from './UserSlice';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(register(username));
    navigation.navigate('ChatScreen');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Register" onPress={handlePress}/>
    </View>
  );
};

export default RegistrationScreen;