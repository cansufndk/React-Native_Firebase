import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {createUserFb, setAccount} from '../../redux/actions/app';
import {styles} from './styles';

const mapDispatchToProps = dispatch => ({dispatch});

const Register = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const navigation = useNavigation();
  const state = useSelector(state => state.app);
  console.log('Register sayfası', state);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.image} />
      <TextInput
        placeholder="Username"
        style={styles.username}
        value={state.username}
        onChangeText={d => dispatch(setAccount('username', d))}
      />
      <TextInput
        placeholder="Email"
        style={styles.username}
        value={state.email}
        keyboardType="email-address"
        onChangeText={d => dispatch(setAccount('email', d))}
      />
      <TextInput
        placeholder="Password"
        style={styles.username}
        value={state.password}
        secureTextEntry
        onChangeText={d => dispatch(setAccount('password', d))}
      />
      <TouchableOpacity
        style={styles.register}
        onPress={() => dispatch(createUserFb())}>
        <Text style={styles.registertext}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
});

export {Register};
