import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {setAccount, userSignout, loginUser} from '../../redux/actions/app';
import {styles} from './style';
import {showMessage} from 'react-native-flash-message';

import auth from '@react-native-firebase/auth';

const mapDispatchToProps = dispatch => ({dispatch});

const Login = connect(mapDispatchToProps)(props => {
  const {dispatch} = props;
  const navigation = useNavigation();
  const state = useSelector(state => state.app);

  const user = () => {
    const user = auth().currentUser;
    console.log('Current User', user);
  };

  const loginSubmit = () => {
    dispatch(loginUser());
    showMessage({
      message: 'Login Succesful!',
      type: 'success',
      icon: 'success',
    });
  };

  const out = () => {
    dispatch(userSignout());
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.image} />
      <TextInput
        placeholder="Email"
        value={state.email}
        onChangeText={d => dispatch(setAccount('email', d))}
        style={styles.username}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={state.password}
        onChangeText={d => dispatch(setAccount('password', d))}
        secureTextEntry
        style={styles.password}
      />
      <TouchableOpacity style={styles.login} onPress={loginSubmit}>
        <Text style={styles.butonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.register}
        onPress={() => navigation.navigate('Register', {screen: 'Register'})}>
        <Text style={styles.registertext}>Create Account</Text>
      </TouchableOpacity>

      <Button title="users" onPress={user} />
      <Button title="out" onPress={out} />
    </View>
  );
});
export {Login};
