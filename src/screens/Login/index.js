import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/actions/app';
import {styles} from './style';
import {Home} from '../Home';

const Login = ({navigation}, props) => {
  //console.log(navigation);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const addLogin = value => {
    dispatch(addUser(username));
    dispatch(addUser(password));
    setPassword('');
    setUsername('');
    //navigation.goback();
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.image} />
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
      <TouchableOpacity onPress={addLogin} style={styles.register}>
        <Text style={styles.registertext}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
export {Login};
