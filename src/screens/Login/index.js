import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const addLogin = value => {
    console.log(username, password);
    setUsername('');
    setPassword('');
  };
  return (
    <>
      <Text>Login sayfası</Text>

      <TextInput
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={addLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </>
  );
};

export {Login};
