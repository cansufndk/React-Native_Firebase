import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const addLogin = value => {
    console.log(username, password);
    setPassword('');
    setUsername('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        style={styles.username}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.password}
      />
      <TouchableOpacity onPress={addLogin} style={styles.login}>
        <Text style={styles.butonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export {Login};
