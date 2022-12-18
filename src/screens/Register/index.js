import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Register = props => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.image} />
      <TextInput placeholder="Username" style={styles.username} />
      <TextInput placeholder="Email" style={styles.username} />
      <TextInput placeholder="Password" style={styles.username} />
      <TouchableOpacity style={styles.register}>
        <Text style={styles.registertext}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Register};
